import type { Locale } from "@/i18n/config";

export const currencies = ["EUR", "USD", "AED", "PHP"] as const;
export type Currency = (typeof currencies)[number];
export const CURRENCY_COOKIE = "ip_currency";

export const currencyMeta: Record<Currency, { symbol: string; label: string; round: number }> = {
  EUR: { symbol: "€", label: "EUR €", round: 50 },
  USD: { symbol: "$", label: "USD $", round: 50 },
  AED: { symbol: "د.إ", label: "AED د.إ", round: 100 },
  PHP: { symbol: "₱", label: "PHP ₱", round: 1000 },
};

/**
 * Indicative conversion rates from EUR. PLACEHOLDER: replace with a daily
 * rates feed (e.g. ECB reference rates) via the CMS "Prices" document or
 * a cron job. Prices on the site are always labelled as indicative.
 */
export const ratesFromEUR: Record<Currency, number> = {
  EUR: 1,
  USD: 1.08,
  AED: 3.97,
  PHP: 62,
};

export function isCurrency(v: string | undefined | null): v is Currency {
  return !!v && (currencies as readonly string[]).includes(v);
}

/** Currency is independent of language; this is only the first-visit default. */
export function defaultCurrency(locale: Locale, country?: string | null): Currency {
  const c = (country || "").toUpperCase();
  if (["AE", "SA", "QA", "KW", "BH", "OM"].includes(c)) return "AED";
  if (["US", "CA", "AU", "NZ", "SG", "HK", "JP", "RU", "KZ"].includes(c)) return "USD";
  if (c === "PH") return "PHP";
  if (locale === "ar") return "AED";
  if (locale === "ru") return "USD";
  return "EUR";
}

export function convert(eur: number, to: Currency) {
  const raw = eur * ratesFromEUR[to];
  const step = currencyMeta[to].round;
  return Math.round(raw / step) * step;
}

const intlLocale: Record<Locale, string> = { en: "en-GB", fr: "fr-FR", es: "es-ES", ru: "ru-RU", ar: "ar-AE" };

export function formatPrice(eur: number, to: Currency, locale: Locale) {
  return new Intl.NumberFormat(intlLocale[locale], {
    style: "currency",
    currency: to,
    maximumFractionDigits: 0,
    numberingSystem: "latn",
  }).format(convert(eur, to));
}

export function formatAmount(amount: number, cur: Currency, locale: Locale) {
  return new Intl.NumberFormat(intlLocale[locale], {
    style: "currency",
    currency: cur,
    maximumFractionDigits: 0,
    numberingSystem: "latn",
  }).format(amount);
}
