import type { Locale } from "../config";
import type { Dictionary } from "./en";

const loaders: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  en: () => import("./en"),
  fr: () => import("./fr"),
  es: () => import("./es"),
  ru: () => import("./ru"),
  ar: () => import("./ar"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return (await loaders[locale]()).default;
}

export type { Dictionary };
