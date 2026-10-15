"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeMeta, type Locale } from "@/i18n/config";
import { currencies, currencyMeta, type Currency } from "@/lib/currency";
import { useCurrency } from "./CurrencyProvider";
import { track } from "@/lib/analytics";

const selectCls =
  "appearance-none bg-transparent pe-5 ps-0 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] cursor-pointer focus-visible:outline-2 bg-no-repeat bg-[length:8px] bg-[position:right_center] rtl:bg-[position:left_center]";
const caret =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%23888' stroke-width='1.4'/%3E%3C/svg%3E\")";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{label}</span>
      <select
        className={selectCls}
        style={{ backgroundImage: caret }}
        value={locale}
        onChange={(e) => {
          const next = e.target.value as Locale;
          document.cookie = `ip_locale=${next}; path=/; max-age=31536000; samesite=lax`;
          track("language_change", { to: next });
          const rest = pathname.split("/").slice(2).join("/");
          router.push(`/${next}${rest ? `/${rest}` : ""}${window.location.search}`);
        }}
      >
        {locales.map((l) => (
          <option key={l} value={l} lang={l} className="text-ink">
            {l.toUpperCase()} · {localeMeta[l].native}
          </option>
        ))}
      </select>
    </label>
  );
}

export function CurrencySwitcher({ label }: { label: string }) {
  const { currency, setCurrency } = useCurrency();
  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{label}</span>
      <select
        className={selectCls}
        style={{ backgroundImage: caret }}
        value={currency}
        onChange={(e) => setCurrency(e.target.value as Currency)}
        suppressHydrationWarning
      >
        {currencies.map((c) => (
          <option key={c} value={c} className="text-ink">
            {currencyMeta[c].label}
          </option>
        ))}
      </select>
    </label>
  );
}
