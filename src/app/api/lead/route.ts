import { NextResponse } from "next/server";
import { validateLead } from "@/lib/lead";
import { getCrm, notifyWebhook } from "@/lib/crm";
import { clientIp, rateLimited } from "@/lib/ratelimit";

export async function POST(req: Request) {
  if (rateLimited(clientIp(req))) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  // Honeypot: bots fill every field.
  if (body && typeof body === "object" && (body as Record<string, unknown>).website) return NextResponse.json({ ok: true });

  const result = validateLead(body);
  if (!result.ok) return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });

  const country = req.headers.get("x-vercel-ip-country") || req.headers.get("cf-ipcountry") || undefined;
  const lead = { ...result.lead, utm: { ...(result.lead.utm || {}), ...(country ? { ip_country: country } : {}) } };

  try {
    const crm = getCrm();
    const { id } = await crm.submit(lead);
    await notifyWebhook(lead);
    return NextResponse.json({ ok: true, id, crm: crm.name });
  } catch (e) {
    console.error("[lead] CRM failed", e);
    // Never lose a lead: mirror to webhook and still accept.
    await notifyWebhook(lead);
    return NextResponse.json({ ok: true, queued: true });
  }
}
