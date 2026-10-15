"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CURRENCY_COOKIE, isCurrency, type Currency, formatPrice } from "@/lib/currency";
import type { Locale } from "@/i18n/config";
import { readCookie, track } from "@/lib/analytics";

type Ctx = { currency: Currency; setCurrency: (c: Currency) => void; locale: Locale };
const CurrencyCtx = createContext<Ctx | null>(null);

export function CurrencyProvider({ initial, locale, children }: { initial: Currency; locale: Locale; children: React.ReactNode }) {
  const [currency, set] = useState<Currency>(initial);

  useEffect(() => {
    const c = readCookie(CURRENCY_COOKIE);
    if (isCurrency(c) && c !== currency) set(c);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCurrency = useCallback((c: Currency) => {
    set(c);
    document.cookie = `${CURRENCY_COOKIE}=${c}; path=/; max-age=31536000; samesite=lax`;
    track("currency_change", { currency: c });
  }, []);

  return <CurrencyCtx.Provider value={{ currency, setCurrency, locale }}>{children}</CurrencyCtx.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyCtx);
  if (!ctx) throw new Error("useCurrency outside CurrencyProvider");
  return ctx;
}

/** Indicative price in the visitor's chosen currency. Source prices are EUR. */
export function Price({ eur }: { eur: number }) {
  const { currency, locale } = useCurrency();
  return <span suppressHydrationWarning>{formatPrice(eur, currency, locale)}</span>;
}
