import type { MetadataRoute } from "next";
import { locales, localeMeta, type Locale } from "@/i18n/config";
import { absolute, href, translatedLocales } from "@/lib/seo";
import { getCategories, getDestinations, getGuides, getJourneys, getLandings, getStories } from "@/lib/content";

type Entry = { path: string; translated: readonly Locale[]; priority: number; freq: "weekly" | "monthly"; modified?: string };

/** One <url> per indexable language version, each carrying its hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const all = locales;
  const entries: Entry[] = [
    { path: "", translated: all, priority: 1, freq: "weekly" },
    { path: "/design-my-trip", translated: all, priority: 0.9, freq: "monthly" },
    { path: "/destinations", translated: all, priority: 0.9, freq: "weekly" },
    { path: "/journeys", translated: all, priority: 0.9, freq: "weekly" },
    { path: "/experiences", translated: all, priority: 0.7, freq: "monthly" },
    { path: "/travel-guide", translated: all, priority: 0.8, freq: "weekly" },
    { path: "/stories", translated: all, priority: 0.7, freq: "weekly" },
    { path: "/about", translated: all, priority: 0.6, freq: "monthly" },
    { path: "/contact", translated: all, priority: 0.5, freq: "monthly" },
    ...getDestinations().map((d) => ({ path: `/destinations/${d.slug}`, translated: translatedLocales(d.intro ?? d.short, d.short), priority: 0.8, freq: "monthly" as const })),
    ...getJourneys().map((j) => ({ path: `/journeys/${j.slug}`, translated: translatedLocales(j.intro, j.title), priority: 0.8, freq: "monthly" as const })),
    ...getCategories().map((c) => ({ path: `/experiences/${c.slug}`, translated: translatedLocales(c.body, c.title), priority: 0.6, freq: "monthly" as const })),
    ...getGuides().filter((g) => g.status === "published").map((g) => ({ path: `/travel-guide/${g.slug}`, translated: translatedLocales(g.body, g.title), priority: 0.7, freq: "monthly" as const, modified: g.updated })),
    ...getStories().filter((s) => s.status === "published").map((s) => ({ path: `/stories/${s.slug}`, translated: translatedLocales(s.body, s.title), priority: 0.6, freq: "monthly" as const, modified: s.updated })),
    ...getLandings().map((l) => ({ path: `/${l.slug}`, translated: translatedLocales(l.title, l.intro), priority: 0.7, freq: "monthly" as const })),
  ];

  return entries.flatMap((e) =>
    e.translated.map((l) => ({
      url: absolute(href(l, e.path)),
      lastModified: e.modified ? new Date(e.modified) : new Date(),
      changeFrequency: e.freq,
      priority: e.priority,
      alternates: {
        languages: Object.fromEntries([
          ...e.translated.map((t) => [localeMeta[t].hreflang, absolute(href(t, e.path))]),
          ["x-default", absolute(href("en", e.path))],
        ]),
      },
    })),
  );
}
