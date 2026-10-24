/**
 * Content repository. Pages only read content through these functions.
 *
 * v1 reads typed local files in /src/content. To move to Sanity, replace
 * the bodies with GROQ queries (see sanity/README.md); the return types
 * stay the same, so no page or component changes.
 */
import { destinations as rawDestinations } from "@/content/destinations";
import { journeys as rawJourneys } from "@/content/journeys";
import { guides as rawGuides } from "@/content/guides";
import { stories as rawStories } from "@/content/stories";
import { experienceCategories as rawCategories, experiences } from "@/content/experiences";
import { landings as rawLandings } from "@/content/landings";
import { withPhoto } from "./photos";
import { extraPlaces, extraPlaceNames, extraPlaceNamesLocal, extraCoords } from "@/content/places";
import type { Destination, Journey } from "@/content/types";
import type { Locale } from "@/i18n/config";
import type { JourneyTranslation } from "@/content/translations/types";
import journeysEs from "@/content/translations/journeys.es";
import journeysFr from "@/content/translations/journeys.fr";
import journeysRu from "@/content/translations/journeys.ru.json";
import journeysAr from "@/content/translations/journeys.ar.json";
import destinationsEs from "@/content/translations/destinations.es.json";
import destinationsFr from "@/content/translations/destinations.fr.json";
import destinationsRu from "@/content/translations/destinations.ru.json";
import destinationsAr from "@/content/translations/destinations.ar.json";
import guidesEs from "@/content/translations/guides.es.json";
import guidesRu from "@/content/translations/guides.ru.json";
import guidesAr from "@/content/translations/guides.ar.json";
import guidesFr from "@/content/translations/guides.fr.json";
import storiesEs from "@/content/translations/stories.es.json";
import storiesRu from "@/content/translations/stories.ru.json";
import storiesAr from "@/content/translations/stories.ar.json";
import storiesFr from "@/content/translations/stories.fr.json";
import categoriesEs from "@/content/translations/experiences.es.json";
import categoriesFr from "@/content/translations/experiences.fr.json";
import categoriesRu from "@/content/translations/experiences.ru.json";
import categoriesAr from "@/content/translations/experiences.ar.json";
import landingsEs from "@/content/translations/landings.es.json";
import landingsRu from "@/content/translations/landings.ru.json";
import landingsAr from "@/content/translations/landings.ar.json";
import landingsFr from "@/content/translations/landings.fr.json";
import { overlay } from "./overlay";

const journeyTranslations: Partial<Record<Locale, Record<string, JourneyTranslation>>> = { es: journeysEs, fr: journeysFr, ru: journeysRu as unknown as Record<string, JourneyTranslation>, ar: journeysAr as unknown as Record<string, JourneyTranslation> };

function translateJourney(j: Journey): Journey {
  let out = j;
  for (const [l, all] of Object.entries(journeyTranslations) as [Locale, Record<string, JourneyTranslation>][]) {
    const t = all[j.slug];
    if (!t) continue;
    out = {
      ...out,
      intro: { ...out.intro, [l]: t.intro },
      itinerary: out.itinerary.map((d, i) => (t.itinerary[i] ? { ...d, title: { ...d.title, [l]: t.itinerary[i][0] }, body: { ...d.body, [l]: t.itinerary[i][1] } } : d)),
      experiences: { ...out.experiences, [l]: t.experiences },
      upgrades: { ...out.upgrades, [l]: t.upgrades },
      faqs: out.faqs.map((f, i) => (t.faqs[i] ? { q: { ...f.q, [l]: t.faqs[i][0] }, a: { ...f.a, [l]: t.faqs[i][1] } } : f)),
      legs: out.legs.map((g, i) => (g.note && t.legNotes?.[i] ? { ...g, note: { ...g.note, [l]: t.legNotes[i] } } : g)),
      bestMonths: t.bestMonths ? { ...out.bestMonths, [l]: t.bestMonths } : out.bestMonths,
    };
  }
  return out;
}

/** Long-form translations kept beside the content, by slug: { es: {...}, fr: {...} }. */
function translate<T extends { slug: string }>(item: T, trees: Partial<Record<Locale, Record<string, unknown>>>): T {
  let out = item;
  for (const [l, all] of Object.entries(trees) as [Locale, Record<string, unknown>][]) out = overlay(out, all[item.slug], l);
  return out;
}

const destinations = rawDestinations.map((d) => translate({ ...d, photo: withPhoto("destination", d.slug, d.photo) }, { es: destinationsEs, fr: destinationsFr, ru: destinationsRu, ar: destinationsAr }));
const journeys = rawJourneys.map((j) => translateJourney({ ...j, photo: withPhoto("journey", j.slug, j.photo) }));
const guides = rawGuides.map((g) => translate({ ...g, photo: withPhoto("guide", g.slug, g.photo) }, { es: guidesEs, fr: guidesFr, ru: guidesRu, ar: guidesAr }));
const stories = rawStories.map((s) => translate({ ...s, photo: withPhoto("story", s.slug, s.photo) }, { es: storiesEs, fr: storiesFr, ru: storiesRu, ar: storiesAr }));
const experienceCategories = rawCategories.map((c) => translate({ ...c, photo: withPhoto("category", c.slug, c.photo) }, { es: categoriesEs, fr: categoriesFr, ru: categoriesRu, ar: categoriesAr }));
const landings = rawLandings.map((l) => translate({ ...l, photo: withPhoto("landing", l.slug, l.photo) }, { es: landingsEs, fr: landingsFr, ru: landingsRu, ar: landingsAr }));

export const getDestinations = () => destinations;
export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
export const getJourneys = () => journeys;
export const getJourney = (slug: string) => journeys.find((j) => j.slug === slug);
export const getGuides = () => guides;
export const getGuide = (slug: string) => guides.find((g) => g.slug === slug && g.status === "published");
export const getStories = () => stories;
export const getStory = (slug: string) => stories.find((s) => s.slug === slug && s.status === "published");
export const getCategories = () => experienceCategories;
export const getCategory = (slug: string) => experienceCategories.find((c) => c.slug === slug);
export const getExperiences = () => experiences;
export const getLandings = () => landings;
export const getLanding = (slug: string) => landings.find((l) => l.slug === slug);

export function placeName(slug: string, locale?: Locale) {
  return getDestination(slug)?.name ?? (locale && extraPlaceNames[slug]?.[locale]) ?? extraPlaces[slug] ?? slug;
}

/** Place name in the reader's script where we have one (Russian and Arabic), for titles and search snippets. */
export function localPlaceName(slug: string, locale: Locale) {
  const local = locale === "ru" || locale === "ar" ? (getDestination(slug)?.nameLocal?.[locale] ?? extraPlaceNamesLocal[slug]?.[locale]) : undefined;
  return local ?? placeName(slug, locale);
}

export function journeysThrough(slug: string): Journey[] {
  return journeys.filter((j) => j.route.includes(slug));
}

export function destinationsFor(slugs: string[]): Destination[] {
  return slugs.map(getDestination).filter((d): d is Destination => !!d);
}

export function journeysFor(slugs: string[]): Journey[] {
  return slugs.map(getJourney).filter((j): j is Journey => !!j);
}

export function lowestPrice(j: Journey) {
  const prices = Object.values(j.fromPriceEUR).filter((p): p is number => typeof p === "number");
  return prices.length ? Math.min(...prices) : undefined;
}

export function placeCoords(slug: string): [number, number] | undefined {
  return getDestination(slug)?.coords ?? extraCoords[slug];
}
