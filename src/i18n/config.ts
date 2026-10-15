export const locales = ["en", "fr", "es", "ru", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  { label: string; native: string; dir: "ltr" | "rtl"; hreflang: string; ogLocale: string }
> = {
  en: { label: "English", native: "English", dir: "ltr", hreflang: "en", ogLocale: "en_GB" },
  fr: { label: "French", native: "Français", dir: "ltr", hreflang: "fr", ogLocale: "fr_FR" },
  es: { label: "Spanish", native: "Español", dir: "ltr", hreflang: "es", ogLocale: "es_ES" },
  ru: { label: "Russian", native: "Русский", dir: "ltr", hreflang: "ru", ogLocale: "ru_RU" },
  ar: { label: "Arabic", native: "العربية", dir: "rtl", hreflang: "ar", ogLocale: "ar_AE" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Localized value. English is required and is the editorial source;
 * other languages are separate, professionally written translations.
 * A missing translation falls back to English (and the page is marked
 * as not translated so it is excluded from hreflang and set to noindex).
 */
export type L<T = string> = { en: T } & Partial<Record<Exclude<Locale, "en">, T>>;

export function tr<T>(value: L<T>, locale: Locale): T {
  return value[locale] ?? value.en;
}

export function hasTranslation(value: L<unknown>, locale: Locale): boolean {
  return value[locale] !== undefined;
}
