/**
 * Business details. Everything in brackets is a PLACEHOLDER that must be
 * replaced with verified information before launch (see docs/09-launch-checklist.md).
 */
export const site = {
  name: "Inside Philippines",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.insidephilippines.com").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@insidephilippines.com",
  /** Digits only with country code, e.g. 639171234567. Empty = placeholder. */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  instagram: "https://www.instagram.com/insidephilippines", // handle availability to be confirmed
  tiktok: "https://www.tiktok.com/@insidephilippines",
  youtube: "https://www.youtube.com/@insidephilippines",
  legal: {
    companyName: "[Registered company name]",
    registration: "[SEC/DTI registration number]",
    dotAccreditation: "[DOT accreditation number]",
    address: "[Street, City, Province, Philippines]",
    city: "[City]",
  },
  isPlaceholder: (v: string) => v.startsWith("["),
};

export function whatsappHref(message: string) {
  const text = encodeURIComponent(message);
  return site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${text}` : `https://wa.me/?text=${text}`;
}
