import "server-only";
import type { Lead } from "./lead";

/**
 * CRM adapter. HubSpot is the default (free CRM tier, strong forms/email,
 * deal pipelines that map cleanly to our journey stages). Any other CRM
 * can be added by implementing `CrmAdapter` and registering it below.
 *
 * Without credentials, leads are logged and (optionally) sent to a webhook
 * so nothing is lost during setup.
 */
export interface CrmAdapter {
  name: string;
  submit(lead: Lead): Promise<{ id?: string }>;
}

function summary(l: Lead) {
  const when =
    l.dateMode === "exact" ? `${l.startDate} → ${l.endDate}` : l.dateMode === "month" ? l.month : "Not sure yet";
  return [
    `Travel dates: ${when}`,
    `Length: ${l.duration}`,
    `Who: ${l.who} · ${l.adults} adults, ${l.children} children${l.childrenAges.length ? ` (ages ${l.childrenAges.join(", ")})` : ""}`,
    `Interests: ${l.interests.join(", ") || "-"}`,
    `Destinations: ${l.destinations.join(", ") || "-"}`,
    `Style: ${l.style}`,
    `Budget: ${l.budgetAmount ? `${l.budgetAmount} ${l.currency} (${l.budgetBasis})` : l.budgetBasis}`,
    `Occasions: ${l.occasions.join(", ") || "-"}`,
    `Preferred language: ${l.preferredLanguage} (site: ${l.siteLanguage})`,
    l.sourceJourney ? `From journey: ${l.sourceJourney}` : "",
    l.sourceDestination ? `From destination: ${l.sourceDestination}` : "",
    `Source: ${l.utm?.utm_source ?? "direct"} / ${l.utm?.utm_campaign ?? "-"}`,
    l.comments ? `\nComments:\n${l.comments}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

const hubspot: CrmAdapter = {
  name: "hubspot",
  async submit(l) {
    const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN!;
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
    const [first, ...rest] = l.name.split(" ");
    // Custom contact properties (ip_*) must be created once in HubSpot; see docs/05-crm-analytics.md
    const contactProps: Record<string, string> = {
      email: l.email,
      firstname: first,
      lastname: rest.join(" "),
      phone: l.phone || l.whatsapp || "",
      country: l.country,
      hs_language: l.preferredLanguage,
      ip_whatsapp: l.whatsapp || "",
      ip_site_language: l.siteLanguage,
      ip_utm_source: l.utm?.utm_source || "",
      ip_utm_campaign: l.utm?.utm_campaign || "",
    };
    const upsert = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert", {
      method: "POST",
      headers,
      body: JSON.stringify({ inputs: [{ idProperty: "email", id: l.email, properties: contactProps }] }),
    });
    if (!upsert.ok) throw new Error(`HubSpot contact ${upsert.status}`);
    const contactId = (await upsert.json()).results?.[0]?.id;

    const deal = await fetch("https://api.hubapi.com/crm/v3/objects/deals", {
      method: "POST",
      headers,
      body: JSON.stringify({
        properties: {
          dealname: `${l.name} · ${l.duration} days · ${l.who}`,
          pipeline: process.env.HUBSPOT_PIPELINE_ID || "default",
          dealstage: process.env.HUBSPOT_STAGE_NEW_LEAD || "appointmentscheduled",
          description: summary(l),
        },
        associations: contactId
          ? [{ to: { id: contactId }, types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 3 }] }]
          : [],
      }),
    });
    if (!deal.ok) throw new Error(`HubSpot deal ${deal.status}`);
    return { id: (await deal.json()).id };
  },
};

const logOnly: CrmAdapter = {
  name: "log",
  async submit(l) {
    console.info("[lead] (no CRM configured)\n" + `${l.name} <${l.email}> ${l.country}\n` + summary(l));
    return {};
  },
};

export function getCrm(): CrmAdapter {
  return process.env.HUBSPOT_PRIVATE_APP_TOKEN ? hubspot : logOnly;
}

/** Optional mirror to a webhook (Slack/Zapier/Make/email service). */
export async function notifyWebhook(lead: Lead) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: `New trip request: ${lead.name} (${lead.country})\n${summary(lead)}`, lead }),
  }).catch((e) => console.error("[lead] webhook failed", e));
}
