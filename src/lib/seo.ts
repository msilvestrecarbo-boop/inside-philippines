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
  const image = m.image || absolute("/og-default.svg");
  const url = absolute(href(canonicalLocale, m.path));

  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: url, languages },
    robots: isFallback || m.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: m.type ?? "website",
      url,
      siteName: site.name,
      title: m.title,
      description: m.description,
      locale: localeMeta[m.locale].ogLocale,
      alternateLocale: translated.filter((l) => l !== m.locale).map((l) => localeMeta[l].ogLocale),
      images: [{ url: image, width: 1200, height: 630, alt: m.title }],
      ...(m.publishedTime ? { publishedTime: m.publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: [image] },
  };
}

/** Which locales have a translation for a set of localized fields. */
export function translatedLocales(...fields: ({ [k: string]: unknown } | undefined)[]): Locale[] {
  return locales.filter((l) => fields.every((f) => !f || f[l] !== undefined));
}
