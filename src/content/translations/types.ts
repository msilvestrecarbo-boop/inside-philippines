/**
 * Translation overlays for long-form journey fields, kept out of journeys.ts
 * so each language can be edited on its own. Arrays follow the order of the
 * English source (itinerary days, FAQs); legNotes are keyed by leg index.
 */
export type JourneyTranslation = {
  intro: string;
  itinerary: [title: string, body: string][];
  experiences: string[];
  upgrades: string[];
  faqs: [q: string, a: string][];
  legNotes?: Record<number, string>;
  bestMonths?: string;
  included?: string[];
  notIncluded?: string[];
};
