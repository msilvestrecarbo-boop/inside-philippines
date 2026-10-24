import type { Metadata } from "next";
import { locales, localeMeta, defaultLocale, type Locale } from "@/i18n/config";
import { site } from "./site";

export function href(locale: Locale, path = "") {
  const p = path === "/" ? "" : path;
  return `/${locale}${p}`;
}

export function absolute(path: string) {
  return `${site.url}${path}`;
}

type MetaInput = {
  locale: Locale;
  path: string; // path without locale, starting with "/" or "" for home
  title: string;
  description: string;
  image?: string;
  /** Locales that have a real translation of this page. Defaults to all. */
  translated?: readonly Locale[];
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
};

const TITLE_MAX = 60;
const DESCRIPTION_MAX = 160;

/** Cut at the last word boundary that fits, never mid-word. */
function cutWords(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max + 1);
  const space = cut.lastIndexOf(" ");
  return (space > max * 0.6 ? cut.slice(0, space) : text.slice(0, max)).replace(/[\s,;:—–·-]+$/, "");
}

/**
 * Search-result title that fits Google's ~60 characters: adds the brand when
 * there is room, otherwise drops it, then falls back to the part before " — ".
 */
export function seoTitle(title: string) {
  const suffix = ` · ${site.name}`;
  const clean = (t: string) => t.trim().replace(/[.。]$/, "");
  const candidates = [clean(title), clean(title.split(" — ")[0])];
  for (const c of candidates) {
    if (c.includes(site.name)) {
      if (c.length <= TITLE_MAX) return c;
      continue;
    }
    if (c.length + suffix.length <= TITLE_MAX) return c + suffix;
    if (c.length <= TITLE_MAX) return c;
  }
  return cutWords(candidates[0], TITLE_MAX);
}

/** Meta description of at most ~160 characters: whole sentences when possible. */
export function seoDescription(text: string) {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= DESCRIPTION_MAX) return t;
  const sentences = t.match(/[^.!?。؟]+[.!?。؟]+(\s|$)/g) ?? [];
  let out = "";
  for (const sentence of sentences) {
    if ((out + sentence).trim().length > DESCRIPTION_MAX) break;
    out += sentence;
  }
  out = out.trim();
  return out.length >= 70 ? out : `${cutWords(t, DESCRIPTION_MAX - 1)}…`;
}

/**
 * Canonical + hreflang. Only languages with real translated content are
 * advertised as alternates; a page viewed in a language it isn't translated
 * into yet is served with English fallback, canonicalised to English and noindexed.
 */
export function buildMetadata(m: MetaInput): Metadata {
  const translated = m.translated ?? locales;
  const isFallback = !translated.includes(m.locale);
  const canonicalLocale = isFallback ? defaultLocale : m.locale;
  const languages: Record<string, string> = {};
  for (const l of translated) languages[localeMeta[l].hreflang] = absolute(href(l, m.path));
  languages["x-default"] = absolute(href(defaultLocale, m.path));
  const image = m.image || absolute("/og-default.jpg");
  const url = absolute(href(canonicalLocale, m.path));
  const description = seoDescription(m.description);

  return {
    title: { absolute: seoTitle(m.title) },
    description,
    alternates: { canonical: url, languages },
    robots: isFallback || m.noindex || !site.indexable ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: m.type ?? "website",
      url,
      siteName: site.name,
      title: m.title,
      description,
      locale: localeMeta[m.locale].ogLocale,
      alternateLocale: translated.filter((l) => l !== m.locale).map((l) => localeMeta[l].ogLocale),
      images: [{ url: image, width: 1200, height: 630, alt: m.title }],
      ...(m.publishedTime ? { publishedTime: m.publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: m.title, description, images: [image] },
  };
}

/** Which locales have a translation for a set of localized fields. */
export function translatedLocales(...fields: ({ [k: string]: unknown } | undefined)[]): Locale[] {
  return locales.filter((l) => fields.every((f) => !f || f[l] !== undefined));
}
