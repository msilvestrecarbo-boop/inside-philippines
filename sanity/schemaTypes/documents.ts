import { defineField, defineType } from "sanity";
import { CATEGORIES, TIERS, TRAVELER_TYPES } from "./objects";

/** Every translated document carries a hidden `language` field managed by the i18n plugin. */
const language = defineField({ name: "language", type: "string", readOnly: true, hidden: true });
const slug = (source = "title") => defineField({ name: "slug", type: "slug", options: { source }, validation: (r) => r.required() });
const seo = defineField({ name: "seo", type: "seo" });

export const destination = defineType({
  name: "destination",
  title: "Destination",
  type: "document",
  groups: [{ name: "card", title: "Card", default: true }, { name: "page", title: "Inside page" }, { name: "seo", title: "SEO" }],
  fields: [
    language,
    defineField({ name: "name", type: "string", group: "card", validation: (r) => r.required() }),
    slug("name"),
    defineField({ name: "region", type: "string", group: "card", options: { list: ["luzon", "palawan", "visayas", "mindanao"] } }),
    defineField({ name: "location", type: "geopoint", group: "card" }),
    defineField({ name: "photo", type: "photo", group: "card" }),
    defineField({ name: "gallery", type: "array", of: [{ type: "photo" }], group: "page" }),
    defineField({ name: "heroVideo", type: "file", options: { accept: "video/mp4,video/webm" }, group: "page" }),
    defineField({ name: "short", type: "text", rows: 2, group: "card", validation: (r) => r.max(220) }),
    defineField({ name: "whyGo", type: "string", group: "card" }),
    defineField({ name: "bestFor", type: "array", of: [{ type: "string" }], options: { layout: "tags" }, group: "card" }),
    defineField({ name: "nights", type: "string", group: "card", description: "e.g. 3–5" }),
    defineField({ name: "bestSeason", type: "string", group: "card" }),
    defineField({ name: "intro", type: "richText", group: "page" }),
    defineField({ name: "whoShouldVisit", type: "text", rows: 2, group: "page" }),
    defineField({ name: "gettingThere", type: "text", rows: 3, group: "page" }),
    defineField({ name: "sections", type: "array", of: [{ type: "section" }], group: "page" }),
    defineField({ name: "insiders", type: "array", of: [{ type: "insider" }], group: "page" }),
    defineField({ name: "nearby", type: "array", of: [{ type: "reference", to: [{ type: "destination" }] }], group: "page" }),
    defineField({ name: "categories", type: "array", of: [{ type: "string" }], options: { list: CATEGORIES }, group: "page" }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faqItem" }], group: "page" }),
    { ...seo, group: "seo" },
  ],
  preview: { select: { title: "name", subtitle: "language", media: "photo" } },
});

export const journey = defineType({
  name: "journey",
  title: "Journey",
  type: "document",
  fields: [
    language,
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    slug(),
    defineField({ name: "days", type: "number", validation: (r) => r.required().min(3).max(40) }),
    defineField({ name: "route", type: "array", of: [{ type: "reference", to: [{ type: "destination" }] }] }),
    defineField({ name: "styles", type: "array", of: [{ type: "string" }], options: { list: TIERS } }),
    defineField({ name: "categories", type: "array", of: [{ type: "string" }], options: { list: CATEGORIES } }),
    defineField({ name: "photo", type: "photo" }),
    defineField({ name: "short", type: "text", rows: 2 }),
    defineField({ name: "intro", type: "richText" }),
    defineField({ name: "highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "itinerary", type: "array", of: [{ type: "journeyDay" }] }),
    defineField({ name: "legs", type: "array", of: [{ type: "leg" }], title: "Flights, ferries, transfers" }),
    defineField({ name: "experiences", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "included", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "notIncluded", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "upgrades", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "bestMonths", type: "string" }),
    defineField({ name: "prices", type: "array", of: [{ type: "tierPrice" }] }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faqItem" }] }),
    seo,
  ],
  preview: { select: { title: "title", subtitle: "days", media: "photo" }, prepare: ({ title, subtitle, media }) => ({ title, subtitle: `${subtitle} days`, media }) },
});

export const hotel = defineType({
  name: "hotel",
  title: "Hotel",
  type: "document",
  fields: [
    language,
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    slug("name"),
    defineField({ name: "destination", type: "reference", to: [{ type: "destination" }] }),
    defineField({ name: "location", type: "string", description: "Area / beach, e.g. Corong Corong, El Nido" }),
    defineField({ name: "geo", type: "geopoint" }),
    defineField({ name: "tier", type: "string", options: { list: TIERS } }),
    defineField({ name: "priceLevel", type: "number", options: { list: [1, 2, 3, 4, 5] } }),
    defineField({ name: "photos", type: "array", of: [{ type: "photo" }] }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "whyWeLikeIt", type: "text", rows: 3 }),
    defineField({ name: "roomTypes", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "familyFriendly", type: "boolean" }),
    defineField({ name: "honeymoonFriendly", type: "boolean" }),
    defineField({ name: "pool", type: "boolean" }),
    defineField({ name: "beachfront", type: "boolean" }),
    defineField({ name: "wellness", type: "boolean" }),
    defineField({ name: "restaurant", type: "boolean" }),
    defineField({ name: "bookingNotes", type: "text", rows: 3, description: "INTERNAL — never shown on the site (contacts, contract rates, allotments)" }),
    defineField({ name: "published", type: "boolean", initialValue: false, description: "Show on the website" }),
  ],
  preview: { select: { title: "name", subtitle: "tier", media: "photos.0" } },
});

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    language,
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    slug(),
    defineField({ name: "destination", type: "reference", to: [{ type: "destination" }] }),
    defineField({ name: "category", type: "string", options: { list: CATEGORIES } }),
    defineField({ name: "durationHours", type: "number" }),
    defineField({ name: "priceEUR", type: "number", title: "Price per person (EUR)" }),
    defineField({ name: "private", type: "boolean", title: "Private (vs shared)" }),
    defineField({ name: "travelerTypes", type: "array", of: [{ type: "string" }], options: { list: TRAVELER_TYPES } }),
    defineField({ name: "seasonality", type: "string" }),
    defineField({ name: "photos", type: "array", of: [{ type: "photo" }] }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "supplierNotes", type: "text", rows: 3, description: "INTERNAL" }),
  ],
});

export const experienceCategory = defineType({
  name: "experienceCategory",
  title: "Experience category",
  type: "document",
  fields: [
    language,
    defineField({ name: "title", type: "string" }),
    slug(),
    defineField({ name: "short", type: "text", rows: 2 }),
    defineField({ name: "body", type: "richText" }),
    defineField({ name: "photo", type: "photo" }),
    defineField({ name: "destinations", type: "array", of: [{ type: "reference", to: [{ type: "destination" }] }] }),
    defineField({ name: "market", type: "string", options: { list: ["global", "europe", "gcc"] } }),
    seo,
  ],
});

export const restaurant = defineType({
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    language,
    defineField({ name: "name", type: "string" }),
    slug("name"),
    defineField({ name: "destination", type: "reference", to: [{ type: "destination" }] }),
    defineField({ name: "area", type: "string" }),
    defineField({ name: "geo", type: "geopoint" }),
    defineField({ name: "cuisine", type: "string" }),
    defineField({ name: "priceLevel", type: "number", options: { list: [1, 2, 3, 4] } }),
    defineField({ name: "meal", type: "array", of: [{ type: "string" }], options: { list: ["breakfast", "lunch", "dinner", "drinks", "coffee"] } }),
    defineField({ name: "halal", type: "string", options: { list: ["certified", "halal-options", "no", "unknown"] } }),
    defineField({ name: "whyWeGo", type: "text", rows: 3 }),
    defineField({ name: "insiderType", type: "string", options: { list: ["our-favorite", "local-favorite", "best-breakfast", "best-sunset", "worth-the-detour"] } }),
    defineField({ name: "photos", type: "array", of: [{ type: "photo" }] }),
    defineField({ name: "lastVerified", type: "date", description: "Date a team member last ate there" }),
  ],
});

const article = (name: string, title: string, extra: ReturnType<typeof defineField>[] = []) =>
  defineType({
    name,
    title,
    type: "document",
    fields: [
      language,
      defineField({ name: "title", type: "string", validation: (r) => r.required() }),
      slug(),
      defineField({ name: "description", type: "text", rows: 2 }),
      defineField({ name: "group", type: "string", options: { list: ["planning", "islands", "practical", "travel-styles", "culture"] } }),
      defineField({ name: "status", type: "string", options: { list: ["published", "planned"] }, initialValue: "planned" }),
      defineField({ name: "updated", type: "date" }),
      defineField({ name: "photo", type: "photo" }),
      defineField({ name: "body", type: "richText" }),
      defineField({ name: "faqs", type: "array", of: [{ type: "faqItem" }] }),
      defineField({ name: "relatedDestinations", type: "array", of: [{ type: "reference", to: [{ type: "destination" }] }] }),
      defineField({ name: "relatedJourneys", type: "array", of: [{ type: "reference", to: [{ type: "journey" }] }] }),
      ...extra,
      seo,
    ],
    preview: { select: { title: "title", subtitle: "language", media: "photo" } },
  });

export const guideArticle = article("guideArticle", "Travel guide article");
export const story = article("story", "Story", [
  defineField({ name: "author", type: "reference", to: [{ type: "teamMember" }] }),
  defineField({ name: "series", type: "string", description: "e.g. Inside Siargao, Inside Food" }),
  defineField({ name: "readMinutes", type: "number" }),
]);

export const landing = defineType({
  name: "landing",
  title: "Landing page",
  type: "document",
  fields: [
    language,
    defineField({ name: "title", type: "string" }),
    slug(),
    defineField({ name: "market", type: "string", options: { list: ["global", "europe", "gcc"] } }),
    defineField({ name: "kicker", type: "string" }),
    defineField({ name: "intro", type: "text", rows: 3 }),
    defineField({ name: "points", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "journeys", type: "array", of: [{ type: "reference", to: [{ type: "journey" }] }] }),
    defineField({ name: "destinations", type: "array", of: [{ type: "reference", to: [{ type: "destination" }] }] }),
    defineField({ name: "photo", type: "photo" }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faqItem" }] }),
    defineField({ name: "prefill", type: "object", fields: ["who", "duration", "style", "interest", "destination"].map((n) => ({ name: n, type: "string" })) }),
    seo,
  ],
});

export const faq = defineType({
  name: "faq",
  title: "FAQ (reusable)",
  type: "document",
  fields: [language, defineField({ name: "q", type: "string", title: "Question" }), defineField({ name: "a", type: "text", title: "Answer" }), defineField({ name: "topics", type: "array", of: [{ type: "string" }], options: { layout: "tags" } })],
  preview: { select: { title: "q", subtitle: "language" } },
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    language,
    defineField({ name: "quote", type: "text", validation: (r) => r.required() }),
    defineField({ name: "name", type: "string", description: "As the traveller agreed to be credited" }),
    defineField({ name: "country", type: "string" }),
    defineField({ name: "journey", type: "reference", to: [{ type: "journey" }] }),
    defineField({ name: "travelDate", type: "date" }),
    defineField({ name: "source", type: "string", options: { list: ["direct", "google", "tripadvisor"] } }),
    defineField({ name: "sourceUrl", type: "url" }),
    defineField({ name: "consentOnFile", type: "boolean", validation: (r) => r.required().custom((v) => v === true || "Only publish with written consent") }),
  ],
});

export const teamMember = defineType({
  name: "teamMember",
  title: "Team member",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "photo", type: "photo" }),
    defineField({ name: "basedIn", type: "string" }),
    defineField({ name: "languages", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "bio", type: "object", fields: ["en", "fr", "es", "ru", "ar"].map((l) => ({ name: l, type: "text", rows: 3 })) }),
    defineField({ name: "favouritePlace", type: "reference", to: [{ type: "destination" }] }),
  ],
});

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    language,
    defineField({ name: "heroTitle", type: "string" }),
    defineField({ name: "heroBody", type: "text", rows: 2 }),
    defineField({ name: "heroVideo", type: "file", options: { accept: "video/mp4,video/webm" } }),
    defineField({ name: "heroPoster", type: "photo" }),
    defineField({ name: "discoveryTitle", type: "string" }),
    defineField({ name: "discoveryBody", type: "text" }),
    defineField({ name: "featuredDestinations", type: "array", of: [{ type: "reference", to: [{ type: "destination" }] }] }),
    defineField({ name: "featuredJourneys", type: "array", of: [{ type: "reference", to: [{ type: "journey" }] }] }),
    defineField({ name: "featuredStories", type: "array", of: [{ type: "reference", to: [{ type: "story" }] }] }),
    defineField({ name: "testimonials", type: "array", of: [{ type: "reference", to: [{ type: "testimonial" }] }] }),
    seo,
  ],
});

export const pricing = defineType({
  name: "pricing",
  title: "Prices & currencies",
  type: "document",
  fields: [
    defineField({ name: "eurToUsd", type: "number" }),
    defineField({ name: "eurToAed", type: "number" }),
    defineField({ name: "eurToPhp", type: "number" }),
    defineField({ name: "ratesUpdated", type: "datetime" }),
    defineField({ name: "showPhp", type: "boolean", initialValue: true }),
  ],
});

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "whatsapp", type: "string", description: "Digits with country code, e.g. 639171234567" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "companyName", type: "string" }),
    defineField({ name: "registration", type: "string", title: "SEC/DTI registration" }),
    defineField({ name: "dotAccreditation", type: "string", title: "DOT accreditation" }),
    defineField({ name: "address", type: "text", rows: 3 }),
    defineField({ name: "emergencyPhone", type: "string" }),
    defineField({ name: "instagram", type: "url" }),
    defineField({ name: "tiktok", type: "url" }),
    defineField({ name: "youtube", type: "url" }),
    defineField({ name: "enabledLanguages", type: "array", of: [{ type: "string" }], options: { list: ["en", "fr", "es", "ru", "ar", "de", "it"] } }),
  ],
});
