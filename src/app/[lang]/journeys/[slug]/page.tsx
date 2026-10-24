import { notFound } from "next/navigation";
import { locales, tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata, href, translatedLocales } from "@/lib/seo";
import { getJourney, getJourneys, placeCoords, placeName, lowestPrice } from "@/lib/content";
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
import { TrackView, TrackedLink } from "@/components/layout/Tracking";
import type { TierId } from "@/content/types";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => getJourneys().map((j) => ({ lang, slug: j.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/journeys/[slug]">) {
  const { slug } = await params;
  const { locale, dict } = await resolve(params);
  const j = getJourney(slug);
  if (!j) return {};
  return buildMetadata({
    locale,
    path: `/journeys/${slug}`,
    title: `${tr(j.title, locale)} — ${j.days} ${dict.common.days}: ${j.route.filter((r) => r !== "manila").map(placeName).join(", ")}`,
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
  const stops = j.route.map((s) => ({ name: placeName(s), coords: placeCoords(s) })).filter((s): s is { name: string; coords: [number, number] } => !!s.coords);
  const q = `?journey=${j.slug}`;
  const modeLabel = { flight: t.flight, ferry: t.ferry, boat: t.boat, road: t.road };
  const tiers = (Object.keys(j.fromPriceEUR) as TierId[]).filter((k) => j.fromPriceEUR[k]);
  const customize = (placement: string) => (
    <TrackedLink href={`/${locale}/design-my-trip${q}`} event="design_trip_click" params={{ placement, journey: j.slug }} className="btn btn-primary">
      {t.customize}
    </TrackedLink>
  );

  return (
    <>
      <TrackView event="journey_view" params={{ journey: j.slug }} />
      <JsonLd
        data={[
          tripSchema({ name: title, description: tr(j.short, locale), path, days: j.days, stops: j.route.map(placeName), priceEUR: j.priceIsPlaceholder ? undefined : lowestPrice(j) }),
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
          <p className="mt-8 font-display text-4xl md:text-5xl">{j.days} {c.days.toUpperCase()}</p>
          <p className="kicker mt-3 text-white/85" dir="ltr">{j.route.filter((r) => r !== "manila").map(placeName).join(" • ")}</p>
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
        <ol className="mt-12 space-y-0">
          {j.itinerary.map((d, i) => (
            <li key={i} className="grid gap-4 border-t border-line py-8 md:grid-cols-12">
              <p className="font-display text-3xl text-narra md:col-span-2">{c.day} {d.days}</p>
              <div className="md:col-span-7">
                <h3 className="text-3xl">{tr(d.title, locale)}</h3>
                <p className="mt-3 leading-relaxed text-stone">{tr(d.body, locale)}</p>
              </div>
              {d.overnight && (
                <p className="text-sm md:col-span-3 md:text-end">
                  <span className="kicker block text-[0.62rem] text-stone">{t.overnight}</span>
                  {d.overnight}
                </p>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* HOTELS / EXPERIENCES / INCLUDED */}
      <section className="bg-lagoon py-20 text-white md:py-28">
        <div className="container-x grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <Block title={t.hotels}><p className="text-white/80">{t.hotelsNote}</p></Block>
          <Block title={t.experiences}><List items={tr(j.experiences, locale)} /></Block>
          <Block title={t.included}><List items={tr(j.included, locale)} /></Block>
          <div className="space-y-12">
            <Block title={t.notIncluded}><List items={tr(j.notIncluded, locale)} /></Block>
            <Block title={t.upgrades}><List items={tr(j.upgrades, locale)} /></Block>
          </div>
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
          <dl className="grid gap-6 sm:grid-cols-2 md:col-span-7 md:col-start-6">
            {tiers.map((tier) => (
              <div key={tier} className="border-t border-line pt-4">
                <dt className="kicker text-stone">{dict.tiers[tier].name}</dt>
                <dd className="mt-2 font-display text-4xl">
                  <span className="text-base text-stone">{c.from} </span>
                  <Price eur={j.fromPriceEUR[tier]!} />
                </dd>
                <dd className="text-xs text-stone">{c.perPerson}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-10 flex justify-center">{customize("journey_price")}</div>
      </section>

      <Faqs faqs={j.faqs} locale={locale} title={c.faqs} />
      <FinalCta locale={locale} dict={dict} query={q} />
    </>
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
