/** Lead captured by the trip builder. Shared by client and server. */
export type Lead = {
  // traveller
  name: string;
  email: string;
  whatsapp?: string;
  phone?: string;
  country: string;
  preferredLanguage: string;
  // trip
  dateMode: "exact" | "month" | "unsure";
  startDate?: string;
  endDate?: string;
  month?: string; // "2027-02"
  duration: string; // "11-14"
  who: string; // couple | honeymoon | ...
  adults: number;
  children: number;
  childrenAges: number[];
  interests: string[];
  destinations: string[]; // slugs, "other:<text>", or "recommend"
  style: string; // tier id
  budgetAmount?: number;
  budgetBasis: "per-person" | "total" | "undecided";
  currency: string;
  occasions: string[];
  comments?: string;
  consent: boolean;
  // context
  siteLanguage: string;
  sourceJourney?: string;
  sourceDestination?: string;
  utm?: Record<string, string>;
  pageUrl?: string;
};

export const leadStages = [
  "NEW LEAD",
  "CONTACTED",
  "DISCOVERY",
  "ITINERARY PREPARING",
  "PROPOSAL SENT",
  "REVISION",
  "CONFIRMED",
  "DEPOSIT PAID",
  "TRAVELING",
  "COMPLETED",
  "FOLLOW-UP",
  "REVIEW REQUESTED",
] as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Server-side validation; returns a cleaned lead or a list of problems. */
export function validateLead(input: unknown): { ok: true; lead: Lead } | { ok: false; errors: string[] } {
  const errors: string[] = [];
  const o = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const str = (k: string, max = 200) => (typeof o[k] === "string" ? (o[k] as string).trim().slice(0, max) : "");
  const arr = (k: string) => (Array.isArray(o[k]) ? (o[k] as unknown[]).filter((x) => typeof x === "string").slice(0, 30).map((x) => (x as string).slice(0, 80)) : []);
  const num = (k: string, min: number, max: number) => {
    const n = Number(o[k]);
    return Number.isFinite(n) ? Math.min(max, Math.max(min, Math.round(n))) : min;
  };

  const lead: Lead = {
    name: str("name", 120),
    email: str("email", 200).toLowerCase(),
    whatsapp: str("whatsapp", 40) || undefined,
    phone: str("phone", 40) || undefined,
    country: str("country", 80),
    preferredLanguage: str("preferredLanguage", 20) || "en",
    dateMode: (["exact", "month", "unsure"].includes(str("dateMode")) ? str("dateMode") : "unsure") as Lead["dateMode"],
    startDate: str("startDate", 10) || undefined,
    endDate: str("endDate", 10) || undefined,
    month: str("month", 7) || undefined,
    duration: str("duration", 10),
    who: str("who", 20),
    adults: num("adults", 1, 40),
    children: num("children", 0, 20),
    childrenAges: (Array.isArray(o.childrenAges) ? o.childrenAges : []).slice(0, 20).map((x) => Math.min(17, Math.max(0, Number(x) || 0))),
    interests: arr("interests"),
    destinations: arr("destinations"),
    style: str("style", 20),
    budgetAmount: o.budgetAmount ? num("budgetAmount", 0, 10_000_000) : undefined,
    budgetBasis: (["per-person", "total", "undecided"].includes(str("budgetBasis")) ? str("budgetBasis") : "undecided") as Lead["budgetBasis"],
    currency: str("currency", 3) || "EUR",
    occasions: arr("occasions"),
    comments: str("comments", 3000) || undefined,
    consent: o.consent === true,
    siteLanguage: str("siteLanguage", 5) || "en",
    sourceJourney: str("sourceJourney", 80) || undefined,
    sourceDestination: str("sourceDestination", 80) || undefined,
    utm: o.utm && typeof o.utm === "object" ? Object.fromEntries(Object.entries(o.utm as Record<string, unknown>).filter(([, v]) => typeof v === "string").slice(0, 12).map(([k, v]) => [k.slice(0, 40), (v as string).slice(0, 300)])) : undefined,
    pageUrl: str("pageUrl", 500) || undefined,
  };

  if (lead.name.length < 2) errors.push("name");
  if (!EMAIL.test(lead.email)) errors.push("email");
  if (!lead.country) errors.push("country");
  if (!lead.consent) errors.push("consent");
  if (lead.dateMode === "exact" && lead.startDate && !/^\d{4}-\d{2}-\d{2}$/.test(lead.startDate)) errors.push("startDate");

  return errors.length ? { ok: false, errors } : { ok: true, lead };
}
