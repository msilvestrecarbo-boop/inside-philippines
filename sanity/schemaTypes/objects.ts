import { defineField, defineType, defineArrayMember } from "sanity";

export const TIERS = [
  { title: "Essential", value: "essential" },
  { title: "Boutique", value: "boutique" },
  { title: "Premium", value: "premium" },
  { title: "Signature", value: "signature" },
];
export const CATEGORIES = [
  "island-escapes", "honeymoons", "luxury", "family", "surf", "diving",
  "food-culture", "nature-adventure", "wellness", "off-the-beaten-path", "private-journeys",
].map((v) => ({ title: v, value: v }));
export const TRAVELER_TYPES = ["couple", "honeymoon", "family", "friends", "solo", "group"].map((v) => ({ title: v, value: v }));

/** Image with hotspot, required alt text and the photographer's brief. */
export const photo = defineType({
  name: "photo",
  title: "Photo",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({ name: "alt", type: "string", title: "Alt text (in this document's language)", validation: (r) => r.required() }),
    defineField({ name: "credit", type: "string" }),
    defineField({ name: "brief", type: "text", rows: 2, title: "Shot brief (internal)" }),
  ],
});

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.max(60).warning("Keep under 60 characters") }),
    defineField({ name: "description", type: "text", rows: 2, validation: (r) => r.max(155).warning("Keep under 155 characters") }),
    defineField({ name: "ogImage", type: "photo" }),
    defineField({ name: "noindex", type: "boolean", initialValue: false }),
    defineField({ name: "keywords", type: "array", of: [{ type: "string" }], description: "Target search phrases in this language (for editors; not output as meta keywords)." }),
  ],
});

export const insider = defineType({
  name: "insider",
  title: "Insider note",
  type: "object",
  fields: [
    defineField({
      name: "type",
      type: "string",
      options: {
        list: ["inside-tip", "our-favorite", "worth-the-detour", "local-favorite", "go-early", "skip-this", "best-sunset", "best-breakfast", "best-beach"],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "body", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "title", subtitle: "type" } },
});

export const faqItem = defineType({
  name: "faqItem",
  title: "Question",
  type: "object",
  fields: [defineField({ name: "q", title: "Question", type: "string" }), defineField({ name: "a", title: "Answer", type: "text", rows: 3 })],
  preview: { select: { title: "q" } },
});

export const richText = defineType({
  name: "richText",
  title: "Rich text",
  type: "array",
  of: [
    defineArrayMember({ type: "block", styles: [{ title: "Normal", value: "normal" }, { title: "H2", value: "h2" }, { title: "H3", value: "h3" }, { title: "Quote", value: "blockquote" }] }),
    defineArrayMember({ type: "photo" }),
    defineArrayMember({ type: "insider" }),
  ],
});

export const section = defineType({
  name: "section",
  title: "Section",
  type: "object",
  fields: [
    defineField({ name: "anchor", type: "slug", description: "e.g. surf, food, stay" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "body", type: "richText" }),
    defineField({ name: "items", type: "array", of: [{ type: "object", fields: [{ name: "name", type: "string" }, { name: "text", type: "text", rows: 2 }] }] }),
    defineField({ name: "insider", type: "insider" }),
    defineField({ name: "photo", type: "photo" }),
  ],
  preview: { select: { title: "title" } },
});

export const journeyDay = defineType({
  name: "journeyDay",
  title: "Day",
  type: "object",
  fields: [
    defineField({ name: "days", type: "string", description: "e.g. 1 or 3–5" }),
    defineField({ name: "place", type: "reference", to: [{ type: "destination" }] }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "body", type: "text", rows: 3 }),
    defineField({ name: "overnight", type: "string" }),
    defineField({ name: "hotels", type: "array", of: [{ type: "reference", to: [{ type: "hotel" }] }] }),
    defineField({ name: "experiences", type: "array", of: [{ type: "reference", to: [{ type: "experience" }] }] }),
  ],
  preview: { select: { title: "title", subtitle: "days" } },
});

export const leg = defineType({
  name: "leg",
  title: "Transport leg",
  type: "object",
  fields: [
    defineField({ name: "mode", type: "string", options: { list: ["flight", "ferry", "boat", "road"] } }),
    defineField({ name: "from", type: "string" }),
    defineField({ name: "to", type: "string" }),
    defineField({ name: "time", type: "string" }),
    defineField({ name: "note", type: "string" }),
  ],
  preview: { select: { from: "from", to: "to", mode: "mode" }, prepare: ({ from, to, mode }) => ({ title: `${from} → ${to}`, subtitle: mode }) },
});

export const tierPrice = defineType({
  name: "tierPrice",
  title: "Price by tier",
  type: "object",
  fields: [
    defineField({ name: "tier", type: "string", options: { list: TIERS } }),
    defineField({ name: "fromEUR", type: "number", title: "From, per person (EUR)" }),
    defineField({ name: "confirmed", type: "boolean", initialValue: false, description: "Untick = shown as indicative and not published in schema.org offers." }),
  ],
});
