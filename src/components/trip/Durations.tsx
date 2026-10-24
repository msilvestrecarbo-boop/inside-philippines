"use client";

import { createContext, useContext, useState } from "react";
import { Price } from "@/components/layout/CurrencyProvider";
import { TrackedLink } from "@/components/layout/Tracking";
import { track } from "@/lib/analytics";
import type { Variant } from "@/lib/durations";

/** Selected trip length on a journey page, shared by the picker, the day-by-day list and the prices. */
const Ctx = createContext<{ n: number; setN: (n: number) => void } | null>(null);

export function DurationProvider({ initial, children }: { initial: number; children: React.ReactNode }) {
  const [n, setN] = useState(initial);
  return <Ctx.Provider value={{ n, setN }}>{children}</Ctx.Provider>;
}

function useDuration() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useDuration outside DurationProvider");
  return ctx;
}

export function SelectedDays() {
  return <>{useDuration().n}</>;
}

export function DurationPicker({
  options,
  journey,
  title,
  note,
  daysWord,
  routeLabel,
  routes,
  light,
}: {
  options: readonly number[];
  journey: string;
  title: string;
  note: string;
  daysWord: string;
  routeLabel: string;
  routes: Record<number, string>;
  light?: boolean;
}) {
  const { n, setN } = useDuration();
  return (
    <div>
      <h2 className="kicker text-narra">{title}</h2>
      <div role="radiogroup" aria-label={title} className="mt-4 flex flex-wrap gap-2">
        {options.map((d) => (
          <button
            key={d}
            type="button"
            role="radio"
            aria-checked={d === n}
            onClick={() => {
              setN(d);
              track("journey_duration", { journey, days: String(d) });
            }}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              d === n ? "border-ink bg-ink text-white" : light ? "border-line bg-white hover:border-ink" : "border-line hover:border-ink"
            }`}
          >
            {d} {daysWord}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-stone">
        <span className="font-medium text-ink">{routeLabel}:</span> <span dir="ltr">{routes[n]}</span>
      </p>
      <p className="mt-1 text-sm text-stone">{note}</p>
    </div>
  );
}

type Block = { title: string; body: string; overnight?: string };

export function DurationItinerary({ blocks, variants, dayWord, overnightWord }: { blocks: Block[]; variants: Record<number, Variant>; dayWord: string; overnightWord: string }) {
  const { n } = useDuration();
  return (
    <ol className="mt-12 space-y-0">
      {variants[n].map(({ block, days }) => {
        const d = blocks[block];
        return (
          <li key={`${n}-${days}`} className="grid gap-4 border-t border-line py-8 md:grid-cols-12">
            <p className="font-display text-3xl text-narra md:col-span-2">{dayWord} {days}</p>
            <div className="md:col-span-7">
              <h3 className="text-3xl">{d.title}</h3>
              <p className="mt-3 leading-relaxed text-stone">{d.body}</p>
            </div>
            {d.overnight && (
              <p className="text-sm md:col-span-3 md:text-end">
                <span className="kicker block text-[0.62rem] text-stone">{overnightWord}</span>
                {d.overnight}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export function DurationPrices({ prices, tiers, from, perPerson }: { prices: Record<number, Record<string, number>>; tiers: { id: string; name: string }[]; from: string; perPerson: string }) {
  const { n } = useDuration();
  return (
    <dl className="grid gap-6 sm:grid-cols-2">
      {tiers.map((t) => (
        <div key={t.id} className="border-t border-line pt-4">
          <dt className="kicker text-stone">{t.name}</dt>
          <dd className="mt-2 font-display text-4xl">
            <span className="text-base text-stone">{from} </span>
            <Price eur={prices[n][t.id]} />
          </dd>
          <dd className="text-xs text-stone">{perPerson}</dd>
        </div>
      ))}
    </dl>
  );
}

export function DurationDesignLink({ locale, journey, label, placement }: { locale: string; journey: string; label: string; placement: string }) {
  const { n } = useDuration();
  return (
    <TrackedLink href={`/${locale}/design-my-trip?journey=${journey}&days=${n}`} event="design_trip_click" params={{ placement, journey, days: String(n) }} className="btn btn-primary">
      {label}
    </TrackedLink>
  );
}
