/**
 * Business details. Everything in brackets is a PLACEHOLDER that must be
 * replaced with verified information before launch (see docs/09-launch-checklist.md).
 */
export const site = {
  name: "Inside Philippines",
  /** The live domain (www is primary; Vercel redirects the bare domain to it). */
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.insidephilippines.com").replace(/\/$/, ""),
  /** Launched 2026-10-25: production is indexable; previews and local builds stay out unless NEXT_PUBLIC_ALLOW_INDEXING=true. */
  indexable: process.env.VERCEL_ENV === "production" || process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "marc@lymaculinary.com",
  /** Digits only with country code, e.g. 639171234567. Empty = placeholder. */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "639524050513",
  instagram: "https://www.instagram.com/inside.philippines",
  googleBusiness: "https://share.google/WBlVTrT4Bv4MSOTYm",
  youtube: "https://www.youtube.com/@insidephilippines",
  legal: {
    companyName: "[Registered company name]",
    registration: "[SEC/DTI registration number]",
    dotAccreditation: "[DOT accreditation number]",
    /** Where the team works. Street addresses to be added once confirmed. */
    locations: [
      { locality: "Taguig", region: "Metro Manila" },
      { locality: "General Luna", region: "Siargao Island" },
    ],
    address: "Taguig, Metro Manila · General Luna, Siargao Island, Philippines",
    city: "Taguig",
  },
  isPlaceholder: (v: string) => v.startsWith("["),
};

export function whatsappHref(message: string) {
  const text = encodeURIComponent(message);
  return site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${text}` : `https://wa.me/?text=${text}`;
}
