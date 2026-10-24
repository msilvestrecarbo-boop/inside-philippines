import type { Locale } from "@/i18n/config";

/**
 * Fills in one locale of every translatable field (`{ en, ... }`) from a translation
 * tree with the same shape, where each translated field is just its text.
 * Fields the tree leaves out, or that already have that locale, are kept as they are.
 */
export function overlay<T>(src: T, tr: unknown, l: Locale): T {
  if (tr === undefined || tr === null || src === null || typeof src !== "object") return src;
  if (Array.isArray(src)) return (Array.isArray(tr) ? src.map((v, i) => overlay(v, tr[i], l)) : src) as T;
  const o = src as Record<string, unknown>;
  if ("en" in o) return (l in o ? src : { ...o, [l]: tr }) as T;
  if (typeof tr !== "object") return src;
  const out: Record<string, unknown> = { ...o };
  for (const [k, v] of Object.entries(tr as Record<string, unknown>)) if (k in o) out[k] = overlay(o[k], v, l);
  return out as T;
}
