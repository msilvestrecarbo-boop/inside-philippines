import * as o from "./objects";
import * as d from "./documents";

export const schemaTypes = [
  o.photo, o.seo, o.insider, o.faqItem, o.richText, o.section, o.journeyDay, o.leg, o.tierPrice,
  d.destination, d.journey, d.hotel, d.experience, d.experienceCategory, d.restaurant,
  d.guideArticle, d.story, d.landing, d.faq, d.testimonial, d.teamMember, d.homepage, d.pricing, d.siteSettings,
];

/** Document types with one document per language. */
export const TRANSLATED_TYPES = [
  "destination", "journey", "hotel", "experience", "experienceCategory", "restaurant",
  "guideArticle", "story", "landing", "faq", "testimonial", "homepage",
];
