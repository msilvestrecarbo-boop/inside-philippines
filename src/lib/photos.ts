import type { Photo } from "@/content/types";
import library from "@/content/photos.json";

/**
 * Photo library: maps a content key to a real image (v1: free Unsplash photos,
 * credits in docs/photo-credits.md). Any key without an entry keeps the
 * art-directed placeholder. Replace with your own photography over time,
 * either here or in the CMS.
 */
type Entry = { src: string; page?: string; photographer?: string; subject?: string };
const lib = library as Record<string, Entry>;

const guideKeys: Record<string, string> = {
  "best-time-to-visit-the-philippines": "best-time",
  "philippines-weather-by-month": "weather",
  "how-many-days-in-the-philippines": "how-many-days",
  "first-time-in-the-philippines": "first-time",
  "best-islands-in-the-philippines": "best-islands",
  "how-to-travel-between-islands": "travel-between-islands",
  "diving-in-the-philippines": "diving",
  "surfing-in-the-philippines": "surfing",
  "philippines-visa-information": "visa",
  "philippine-food-guide": "food",
};
const storyKeys: Record<string, string> = {
  "ten-islands-worth-building-a-philippines-trip-around": "ten-islands",
  "siargao-beyond-surfing": "siargao-beyond-surfing",
  "el-nido-vs-coron": "el-nido-vs-coron",
  "why-siquijor-should-be-on-your-itinerary": "siquijor",
  "48-hours-in-manila": "manila-48h",
};

export type PhotoGroup = "site" | "destination" | "journey" | "category" | "landing" | "guide" | "story";

export function withPhoto<T extends Photo>(group: PhotoGroup, key: string, photo: T): T {
  const k = group === "guide" ? guideKeys[key] ?? key : group === "story" ? storyKeys[key] ?? key : key;
  const e = lib[`${group}/${k}`];
  if (!e || photo.src) return photo;
  return { ...photo, src: e.src, credit: e.photographer, creditUrl: e.page };
}

export function photoCredits() {
  return Object.entries(lib).map(([key, e]) => ({ key, ...e }));
}
