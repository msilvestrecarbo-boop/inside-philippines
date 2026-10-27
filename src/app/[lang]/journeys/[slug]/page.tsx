import { Fragment } from "react";
import { notFound } from "next/navigation";
import { locales, tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata, href, translatedLocales } from "@/lib/seo";
import { getJourney, getJourneys, placeCoords, placeName, localPlaceName, lowestPrice } from "@/lib/content";
import { breadcrumbSchema, faqSchema, tripSchema } from "@/lib/schema";
import { Photo } from "@/components/ui/Photo";
import { Prose } from "@/components/ui/Prose";
import { Faqs } from "@/components/ui/Faqs";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RouteMap } from "@/components/ui/RouteMap";
import { Tiers } from "@/components/sections/Sections";
import { FinalCta } from "@/components/layout/FinalCta";
import { Price } from "@/components/layout/CurrencyProvider";
import { TrackView } from "@/components/layout/Tracking";
import { DurationDesignLink, DurationItinerary, DurationPicker, DurationPrices, DurationProvider, SelectedDays } from "@/components/trip/Durations";
import { DURATIONS, departureDay, durationLabels as dl, pricesFor, variantFor } from "@/lib/durations";
import type { TierId } from "@/content/types";
import { CANCELLATION_COVER_EUR } from "@/content/extras";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => getJourneys().map((j) => ({ lang, slug: j.slug })));
}

/**
 * Search phrase first ("Viaje a Filipinas 15 días: El Nido, Bohol"), dropping places
 * from the end rather than cutting a name in half to fit Google's ~60 characters.
 */
function journeySearchTitle(template: string, days: number, places: string[], sep = ", ") {
  // Arabic counts 3–10 with the plural "أيام" and 11+ with the singular "يومًا".
  const t = template.replace("{days} يوم", days <= 10 ? "{days} أيام" : "{days} يومًا");
  const make = (p: string[]) => t.replace("{days}", String(days)).replace("{places}", p.join(sep));
  let p = places;
  while (p.length > 1 && make(p).length > 60) p = p.slice(0, -1);
  return make(p);
}

export async function generateMetadata({ params }: PageProps<"/[lang]/journeys/[slug]">) {
  const { slug } = await params;
  const { locale, dict } = await resolve(params);
  const j = getJourney(slug);
  if (!j) return {};
  return buildMetadata({
    locale,
    path: `/journeys/${slug}`,
    title: `${journeySearchTitle(dict.journey.seoTitle, j.days, j.route.filter((r) => r !== "manila").map((r) => localPlaceName(r, locale)), locale === "ar" ? "، " : ", ")} — ${tr(j.title, locale)}`,
    description: tr(j.short, locale),
    translated: translatedLocales(j.intro, j.title),
  });
}

export default async function JourneyPage({ params }: PageProps<"/[lang]/journeys/[slug]">) {
  const { slug } = await params;
  const { locale, dict } = await resolve(params);
  const j = getJourney(slug);
  if (!j) notFound();
  const t = dict.journey;
  const c = dict.common;
  const title = tr(j.title, locale);
  const path = href(locale, `/journeys/${j.slug}`);
  const fallback = !translatedLocales(j.intro).includes(locale);
  const stops = j.route.map((s) => ({ name: placeName(s, locale), coords: placeCoords(s) })).filter((s): s is { name: string; coords: [number, number] } => !!s.coords);
  const q = `?journey=${j.slug}`;
  const modeLabel = { flight: t.flight, ferry: t.ferry, boat: t.boat, road: t.road };
  const tiers = (Object.keys(j.fromPriceEUR) as TierId[]).filter((k) => j.fromPriceEUR[k]);
  const customize = (placement: string) => <DurationDesignLink locale={locale} journey={j.slug} label={t.customize} placement={placement} />;
  const blocks = [...j.itinerary, departureDay].map((d) => ({ title: tr(d.title, locale), body: tr(d.body, locale), overnight: d.overnight }));
  const variants = Object.fromEntries(DURATIONS.map((n) => [n, variantFor(j, n)]));
  const routes = Object.fromEntries(
    DURATIONS.map((n) => [n, [...new Set(variants[n].map((v) => [...j.itinerary, departureDay][v.block].place))].filter((p) => p !== "manila").map((p) => placeName(p, locale)).join(" • ")]),
  );
  const prices = Object.fromEntries(DURATIONS.map((n) => [n, pricesFor(j, n) as Record<string, number>]));
  const initial = (DURATIONS as readonly number[]).includes(j.days) ? j.days : 14;
  const picker = (light?: boolean) => (
    <DurationPicker options={DURATIONS} journey={j.slug} title={tr(dl.choose, locale)} note={tr(dl.note, locale)} daysWord={c.days} routeLabel={tr(dl.route, locale)} routes={routes} light={light} />
  );

  return (
    <DurationProvider initial={initial}>
      <TrackView event="journey_view" params={{ journey: j.slug }} />
      <JsonLd
        data={[
          tripSchema({ name: title, description: tr(j.short, locale), path, days: j.days, stops: j.route.map((r) => placeName(r, locale)), priceEUR: j.priceIsPlaceholder ? undefined : lowestPrice(j) }),
          breadcrumbSchema([
            { name: c.breadcrumbHome, path: href(locale) },
            { name: dict.nav.journeys, path: href(locale, "/journeys") },
            { name: title, path },
          ]),
          faqSchema(j.faqs.map((f) => ({ q: tr(f.q, locale), a: tr(f.a, locale) }))),
        ]}
      />

      {/* HERO */}
      <section className="on-photo relative isolate flex min-h-[88svh] items-end overflow-hidden text-white">
        <Photo photo={j.photo} locale={locale} label={c.photoToCome} priority showBrief className="absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
        <div className="container-x pb-16 md:pb-24">
          <Breadcrumbs light items={[{ name: c.breadcrumbHome, href: `/${locale}` }, { name: dict.nav.journeys, href: `/${locale}/journeys` }, { name: title, href: path }]} />
          <p className="mt-8 font-display text-4xl md:text-5xl"><SelectedDays /> {c.days.toUpperCase()}</p>
          <p className="kicker mt-3 text-white/85" dir="ltr">{j.route.filter((r) => r !== "manila").map((r) => placeName(r, locale)).join(" • ")}</p>
          <h1 className="mt-5 max-w-4xl text-[length:var(--text-h1)]">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">{tr(j.short, locale)}</p>
          <div className="mt-9">{customize("journey_hero")}</div>
        </div>
      </section>

      <div className="bg-ink px-5 py-4 text-center text-sm text-white">{t.customizeNotice}</div>
      {fallback && <p className="bg-shell py-3 text-center text-sm text-stone">{c.notTranslated}</p>}

      {/* INTRO + HIGHLIGHTS */}
      <section className="container-x grid gap-14 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Prose text={tr(j.intro, locale)} className="text-lg" />
        </div>
        <aside className="lg:col-span-4 lg:col-start-9">
          <h2 className="kicker text-narra">{t.highlights}</h2>
          <ul className="mt-5 space-y-3">
            {tr(j.highlights, locale).map((h, i) => (
              <li key={i} className="border-t border-line pt-3 font-display text-xl leading-snug">{h}</li>
            ))}
          </ul>
        </aside>
      </section>

      {/* INCLUDED / NOT INCLUDED */}
      <section className="container-x pb-20 md:pb-28" aria-label={`${t.included} · ${t.notIncluded}`}>
        <div className="grid gap-10 rounded-2xl border border-line bg-shell p-6 md:grid-cols-2 md:p-10">
          <Checklist title={t.included} items={tr(j.included, locale)} mark="✓" markClass="text-rice" />
          <Checklist title={t.notIncluded} items={tr(j.notIncluded, locale)} mark="✕" markClass="text-clay-dark" />
        </div>
      </section>

      {/* ROUTE + LOGISTICS */}
      <section className="bg-shell py-20 md:py-28" aria-labelledby="route">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="route" className="text-[length:var(--text-h2)]">{t.route}</h2>
            <div className="mx-auto mt-8 max-w-sm text-ink">
              <RouteMap stops={stops} label={`${t.route}: ${stops.map((s) => s.name).join(", ")}`} />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="kicker text-narra">{t.logistics}</h3>
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {j.legs.map((l, i) => (
                <li key={i} className="grid grid-cols-[5.5rem_1fr] gap-4 py-4 text-sm">
                  <span className="kicker text-[0.62rem] text-stone">{modeLabel[l.mode]}</span>
                  <span>
                    <span className="font-medium" dir="ltr">{l.from} → {l.to}</span>
                    <span className="text-stone"> · {l.time}</span>
                    {l.note && <span className="mt-1 block text-stone">{tr(l.note, locale)}</span>}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* DAY BY DAY */}
      <section className="container-x py-20 md:py-28" aria-labelledby="days">
        <h2 id="days" className="text-[length:var(--text-h2)]">{t.dayByDay}</h2>
        <div className="mt-8 rounded-card bg-shell p-6 md:p-8">{picker(true)}</div>
        <DurationItinerary blocks={blocks} variants={variants} dayWord={c.day} overnightWord={t.overnight} />
      </section>

      {/* HOTELS / EXPERIENCES / INCLUDED */}
      <section className="bg-lagoon py-20 text-white md:py-28">
        <div className="container-x grid gap-14 md:grid-cols-3">
          <Block title={t.hotels}><p className="text-white/80">{t.hotelsNote}</p></Block>
          <Block title={t.experiences}><List items={tr(j.experiences, locale)} /></Block>
          <Block title={t.upgrades}><List items={tr(j.upgrades, locale)} /></Block>
        </div>
      </section>

      <Tiers dict={dict} highlight={j.styles} />

      {/* PRICE + MONTHS */}
      <section className="container-x pb-20 md:pb-28" aria-labelledby="price">
        <div className="grid gap-10 rounded-card bg-shell p-8 md:grid-cols-12 md:p-12">
          <div className="md:col-span-4">
            <h2 id="price" className="kicker text-narra">{t.priceIndication}</h2>
            <p className="mt-4 text-sm text-stone">{t.priceNote}</p>
            {j.priceIsPlaceholder && <p className="mt-4 inline-block border border-dashed border-clay px-3 py-1 text-xs text-clay-dark">{c.indicativePrice}</p>}
            <h3 className="kicker mt-10 text-narra">{t.bestMonths}</h3>
            <p className="mt-3 font-display text-2xl">{tr(j.bestMonths, locale)}</p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            {picker(true)}
            <div className="mt-8 grid md:grid-cols-1">
              <DurationPrices prices={prices} tiers={tiers.map((id) => ({ id, name: dict.tiers[id].name }))} from={c.from} perPerson={c.perPerson} />
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">{customize("journey_price")}</div>
      </section>

      <Faqs faqs={j.faqs} locale={locale} title={c.faqs} />
      <FinalCta locale={locale} dict={dict} query={q} />
    </DurationProvider>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="kicker text-white/60">{title}</h2>
      <div className="mt-5 text-[0.95rem] leading-relaxed">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="border-t border-white/15 pt-2.5 text-white/85">{it}</li>
      ))}
    </ul>
  );
}

/** The cancellation cover as written in EUR in the inclusions; shown in the visitor's currency instead. */
const COVER_EUR_TEXT = /€2,000|2 000 €|2\.000 €|2000 €/;

function Checklist({ title, items, mark, markClass }: { title: string; items: string[]; mark: string; markClass: string }) {
  return (
    <div>
      <h2 className="text-[length:var(--text-h3)]">{title}</h2>
      <ul className="mt-6 space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 leading-relaxed">
            <span aria-hidden className={`mt-0.5 shrink-0 font-semibold ${markClass}`}>{mark}</span>
            <span>
              {it.split(COVER_EUR_TEXT).map((part, k) => (
                <Fragment key={k}>{k > 0 && <Price eur={CANCELLATION_COVER_EUR} />}{part}</Fragment>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
