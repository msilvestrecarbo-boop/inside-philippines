import type { L } from "@/i18n/config";

/**
 * Content model for Inside Philippines.
 *
 * These types mirror the Sanity schemas in /sanity/schemaTypes one-to-one,
 * so the local content files in /src/content can be migrated into the CMS
 * without changing any page component (see src/lib/content.ts).
 */

/** Art-directed photo slot. Until real photography exists, `brief` is shown
 * as a clearly marked placeholder and doubles as the shoot list. */
export type Photo = {
  src?: string; // real image path or CMS URL; empty = placeholder
  video?: string; // optional muted loop (hero use), src is the poster
  alt: L;
  brief: string; // what the photographer should capture (internal, English)
  tone?: Tone;
};

export type Tone = "lagoon" | "sand" | "jungle" | "dusk" | "stone" | "rice" | "night" | "reef";

export type TierId = "essential" | "boutique" | "premium" | "signature";

export type Region = "luzon" | "palawan" | "visayas" | "mindanao";

export type InsiderType =
  | "inside-tip"
  | "our-favorite"
  | "worth-the-detour"
  | "local-favorite"
  | "go-early"
  | "skip-this"
  | "best-sunset"
  | "best-breakfast"
  | "best-beach";

export type Insider = { type: InsiderType; title: L; body: L };

export type FAQ = { q: L; a: L };

export type Section = {
  id: string; // anchor, e.g. "why", "surf", "food"
  title: L;
  body: L; // paragraphs separated by blank lines
  items?: { name: L; text: L }[];
  insider?: Insider;
  photo?: Photo;
};

export type Destination = {
  slug: string;
  name: string; // proper noun, not translated (Arabic/Russian spellings go in nameLocal)
  nameLocal?: Partial<Record<"ru" | "ar", string>>;
  region: Region;
  coords: [number, number]; // lat, lng
  photo: Photo;
  /** Card fields (all required, all translated where possible) */
  short: L;
  whyGo: L;
  bestFor: L<string[]>;
  nights: string; // e.g. "3–5"
  bestSeason: L;
  /** Destination page ("Inside X") */
  intro?: L;
  whoShouldVisit?: L;
  gettingThere?: L;
  sections?: Section[];
  insiders?: Insider[];
  nearby?: string[]; // destination slugs
  faqs?: FAQ[];
  experienceCategories?: string[];
};

export type JourneyDay = {
  days: string; // "1–2"
  place: string; // destination slug or free text
  title: L;
  body: L;
  overnight?: string;
};

export type Leg = { mode: "flight" | "ferry" | "boat" | "road"; from: string; to: string; time: string; note?: L };

export type Journey = {
  slug: string;
  title: L;
  days: number;
  route: string[]; // destination slugs in order
  styles: TierId[]; // tiers the journey works best in
  categories: string[]; // experience category slugs
  photo: Photo;
  short: L;
  intro: L;
  highlights: L<string[]>;
  itinerary: JourneyDay[];
  legs: Leg[];
  experiences: L<string[]>;
  included: L<string[]>;
  notIncluded: L<string[]>;
  upgrades: L<string[]>;
  bestMonths: L;
  /** Indicative per-person price in EUR, double occupancy, by tier.
   * PLACEHOLDER until the team confirms real costings. */
  fromPriceEUR: Partial<Record<TierId, number>>;
  priceIsPlaceholder: boolean;
  faqs: FAQ[];
};

export type ExperienceCategory = {
  slug: string;
  title: L;
  short: L;
  body: L;
  photo: Photo;
  destinations: string[];
  /** If set, this category also targets the UAE/GCC market page set. */
  market?: "gcc" | "europe";
};

export type GuideArticle = {
  slug: string;
  title: L;
  description: L;
  group: "planning" | "islands" | "practical" | "travel-styles" | "culture";
  /** "planned" articles are listed as "in preparation" and not linked/indexed. */
  status: "published" | "planned";
  updated: string; // ISO date
  photo: Photo;
  body: L; // markdown-lite: "## Heading", paragraphs, "- list"
  insiders?: Insider[];
  faqs?: FAQ[];
  related?: { destinations?: string[]; journeys?: string[] };
};

export type Story = GuideArticle & { author: string; readMinutes: number; series?: string };

/** Hotel database (architecture only in v1; no hotels are published). */
export type Hotel = {
  slug: string;
  name: string;
  destination: string;
  location: L;
  tier: TierId;
  priceLevel: 1 | 2 | 3 | 4 | 5;
  photos: Photo[];
  description: L;
  whyWeLikeIt: L;
  roomTypes: L<string[]>;
  features: {
    familyFriendly: boolean;
    honeymoonFriendly: boolean;
    pool: boolean;
    beachfront: boolean;
    wellness: boolean;
    restaurant: boolean;
  };
  bookingNotes?: string; // internal only
};

/** Experience database (bookable building blocks for itineraries). */
export type Experience = {
  slug: string;
  title: L;
  destination: string;
  durationHours: number;
  priceEUR?: number; // placeholder until costed
  private: boolean;
  travelerTypes: ("couple" | "honeymoon" | "family" | "friends" | "solo" | "group")[];
  seasonality: L;
  category: string;
  photos: Photo[];
  description: L;
};

export type Landing = {
  slug: string; // top-level path segment, e.g. "siargao"
  market: "global" | "europe" | "gcc";
  title: L;
  kicker: L;
  intro: L;
  points: L<string[]>;
  journeys: string[];
  destinations: string[];
  photo: Photo;
  faqs?: FAQ[];
  /** Preselects trip builder answers when the visitor clicks Design my trip. */
  prefill?: Record<string, string>;
  seo: { title: L; description: L };
};
