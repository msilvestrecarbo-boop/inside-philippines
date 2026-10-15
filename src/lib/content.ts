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
import { extraPlaces, extraCoords } from "@/content/places";
import type { Destination, Journey } from "@/content/types";

const destinations = rawDestinations.map((d) => ({ ...d, photo: withPhoto("destination", d.slug, d.photo) }));
const journeys = rawJourneys.map((j) => ({ ...j, photo: withPhoto("journey", j.slug, j.photo) }));
const guides = rawGuides.map((g) => ({ ...g, photo: withPhoto("guide", g.slug, g.photo) }));
const stories = rawStories.map((s) => ({ ...s, photo: withPhoto("story", s.slug, s.photo) }));
const experienceCategories = rawCategories.map((c) => ({ ...c, photo: withPhoto("category", c.slug, c.photo) }));
const landings = rawLandings.map((l) => ({ ...l, photo: withPhoto("landing", l.slug, l.photo) }));

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

export function placeName(slug: string) {
  return getDestination(slug)?.name ?? extraPlaces[slug] ?? slug;
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
