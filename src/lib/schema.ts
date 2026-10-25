import type { Locale } from "@/i18n/config";
import { site } from "./site";
import { absolute, href } from "./seo";

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "TravelAgency"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: absolute("/brand/logo.svg"),
    slogan: "The Philippines, from the inside.",
    email: site.email,
    ...(site.whatsapp ? { telephone: `+${site.whatsapp}` } : {}),
    areaServed: ["FR", "ES", "GB", "DE", "IT", "CH", "BE", "NL", "RU", "AE", "SA", "QA"],
    knowsLanguage: ["en", "fr", "es", "ru", "ar"],
    address: site.legal.locations.map((l) => ({ "@type": "PostalAddress", addressLocality: l.locality, addressRegion: l.region, addressCountry: "PH" })),
    sameAs: [site.instagram, site.facebook, site.googleBusiness],
  };
}

export function websiteSchema(locale: Locale): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: absolute(href(locale)),
    name: site.name,
    inLanguage: locale,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absolute(it.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]): Json | null {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function articleSchema(a: {
  title: string;
  description: string;
  path: string;
  updated: string;
  locale: Locale;
  author?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    inLanguage: a.locale,
    dateModified: a.updated,
    datePublished: a.updated,
    mainEntityOfPage: absolute(a.path),
    author: { "@type": "Organization", name: a.author || site.name },
    publisher: { "@id": `${site.url}/#organization` },
    image: absolute("/og-default.jpg"),
  };
}

export function destinationSchema(d: { name: string; description: string; path: string; coords: [number, number] }): Json {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: d.name,
    description: d.description,
    url: absolute(d.path),
    geo: { "@type": "GeoCoordinates", latitude: d.coords[0], longitude: d.coords[1] },
    containedInPlace: { "@type": "Country", name: "Philippines" },
  };
}

export function tripSchema(t: {
  name: string;
  description: string;
  path: string;
  days: number;
  stops: string[];
  priceEUR?: number;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: t.name,
    description: t.description,
    url: absolute(t.path),
    touristType: ["Couples", "Families", "Honeymooners", "Independent travellers"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: t.stops.map((s, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "Place", name: s } })),
    },
    provider: { "@id": `${site.url}/#organization` },
    // Offers are only published once prices are confirmed (see priceIsPlaceholder).
    ...(t.priceEUR
      ? { offers: { "@type": "Offer", priceCurrency: "EUR", price: t.priceEUR, availability: "https://schema.org/InStock" } }
      : {}),
  };
}
