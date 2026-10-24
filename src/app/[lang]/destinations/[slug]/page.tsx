import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata, href, translatedLocales } from "@/lib/seo";
import { destinationsFor, getDestination, getDestinations, journeysThrough } from "@/lib/content";
import { breadcrumbSchema, destinationSchema, faqSchema } from "@/lib/schema";
import { Photo } from "@/components/ui/Photo";
import { Prose } from "@/components/ui/Prose";
import { InsiderNote } from "@/components/ui/Insider";
import { Faqs } from "@/components/ui/Faqs";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DestinationCard, JourneyCard, destName } from "@/components/cards/Cards";
import { FinalCta } from "@/components/layout/FinalCta";
import { TrackView, TrackedLink } from "@/components/layout/Tracking";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => getDestinations().map((d) => ({ lang, slug: d.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/destinations/[slug]">) {
  const { slug } = await params;
  const { locale, dict } = await resolve(params);
  const d = getDestination(slug);
  if (!d) return {};
  const name = destName(d, locale);
  return buildMetadata({
    locale,
    path: `/destinations/${slug}`,
    title: `${dict.destination.insideLabel} ${name} — ${tr(d.whyGo, locale)}`,
    description: tr(d.short, locale),
    translated: translatedLocales(d.intro ?? d.short, d.short),
  });
}

export default async function DestinationPage({ params }: PageProps<"/[lang]/destinations/[slug]">) {
  const { slug } = await params;
  const { locale, dict } = await resolve(params);
  const d = getDestination(slug);
  if (!d) notFound();
  const t = dict.destination;
  const c = dict.common;
  const name = destName(d, locale);
  const fallback = !translatedLocales(d.intro ?? d.short).includes(locale);
  const journeys = journeysThrough(d.slug);
  const nearby = destinationsFor(d.nearby ?? []).slice(0, 3);
  const sections = d.sections ?? [];
  const addHref = `?destination=${d.slug}`;
  const path = href(locale, `/destinations/${d.slug}`);

  return (
    <>
      <TrackView event="destination_view" params={{ destination: d.slug }} />
      <JsonLd
        data={[
          destinationSchema({ name: d.name, description: tr(d.short, locale), path, coords: d.coords }),
          breadcrumbSchema([
            { name: c.breadcrumbHome, path: href(locale) },
            { name: dict.nav.destinations, path: href(locale, "/destinations") },
            { name, path },
          ]),
          faqSchema((d.faqs ?? []).map((f) => ({ q: tr(f.q, locale), a: tr(f.a, locale) }))),
        ]}
      />

      {/* HERO */}
      <section className="on-photo relative isolate flex min-h-[88svh] items-end overflow-hidden text-white">
        <Photo photo={d.photo} locale={locale} label={c.photoToCome} priority showBrief className="absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/65 via-black/5 to-black/30" />
        <div className="container-x pb-16 md:pb-24">
          <Breadcrumbs light items={[{ name: c.breadcrumbHome, href: `/${locale}` }, { name: dict.nav.destinations, href: `/${locale}/destinations` }, { name, href: path }]} />
          <p className="kicker mt-8 text-white/80">{t.insideLabel}</p>
          <h1 className="text-[length:var(--text-display)] leading-[1.05]">{name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">{tr(d.whyGo, locale)}</p>
          <TrackedLink href={`/${locale}/design-my-trip${addHref}`} event="design_trip_click" params={{ placement: "destination_hero", destination: d.slug }} className="btn btn-primary mt-9">
            {t.addToJourney.replace("{name}", name)}
          </TrackedLink>
        </div>
      </section>

      {fallback && <p className="bg-shell py-3 text-center text-sm text-stone">{c.notTranslated}</p>}

      {/* INTRO + FACTS */}
      <section className="container-x grid gap-14 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Prose text={tr(d.intro ?? d.short, locale)} className="text-xl leading-relaxed [&_p:first-child]:font-display [&_p:first-child]:text-3xl [&_p:first-child]:leading-snug" />
          {sections.length > 2 && (
            <nav aria-label={t.onThisPage} className="mt-12 border-t border-line pt-6">
              <p className="kicker text-stone">{t.onThisPage}</p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {sections.map((s) => (
                  <li key={s.id}><a href={`#${s.id}`} className="link-u">{tr(s.title, locale)}</a></li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <aside className="lg:col-span-4 lg:col-start-9">
          <dl className="divide-y divide-line border-y border-line">
            {d.whoShouldVisit && <Fact label={t.whoShouldVisit} value={tr(d.whoShouldVisit, locale)} />}
            <Fact label={c.bestFor} value={tr(d.bestFor, locale).join(" · ")} />
            <Fact label={t.recommendedNights} value={`${d.nights} ${c.nights}`} />
            <Fact label={t.bestTime} value={tr(d.bestSeason, locale)} />
            {d.gettingThere && <Fact label={t.gettingThere} value={tr(d.gettingThere, locale)} />}
          </dl>
        </aside>
      </section>

      {/* SECTIONS */}
      {sections.map((s, i) => (
        <section key={s.id} id={s.id} className={`scroll-mt-24 ${i % 2 ? "bg-shell" : ""}`}>
          <div className="container-x grid gap-10 py-16 md:py-24 lg:grid-cols-12">
            <h2 className="text-[length:var(--text-h2)] lg:col-span-4">{tr(s.title, locale)}</h2>
            <div className="lg:col-span-7 lg:col-start-6">
              <Prose text={tr(s.body, locale)} />
              {s.items && s.items.length > 0 && (
                <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                  {s.items.map((it, k) => (
                    <div key={k} className="border-t border-line pt-4">
                      <dt className="font-display text-2xl">{tr(it.name, locale)}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-stone">{tr(it.text, locale)}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {s.insider && <InsiderNote note={s.insider} locale={locale} dict={dict} className="mt-10" />}
            </div>
          </div>
        </section>
      ))}

      {/* INSIDER NOTES */}
      {d.insiders && d.insiders.length > 0 && (
        <section className="bg-lagoon py-20 text-white md:py-28">
          <div className="container-x">
            <p className="kicker text-white/70">{t.insiderNotes}</p>
            <h2 className="mt-4 text-[length:var(--text-h2)]">{t.insideLabel} {name}</h2>
            <div className="mt-12 grid gap-6 text-ink md:grid-cols-2 lg:grid-cols-3">
              {d.insiders.map((n, i) => (
                <InsiderNote key={i} note={n} locale={locale} dict={dict} className="h-full" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JOURNEYS */}
      {journeys.length > 0 && (
        <section className="container-x py-20 md:py-28">
          <h2 className="text-[length:var(--text-h2)]">{t.journeysIncluding} {name}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {journeys.map((j) => <JourneyCard key={j.slug} j={j} locale={locale} dict={dict} />)}
          </div>
        </section>
      )}

      {/* ADD TO JOURNEY */}
      <section className="container-x pb-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-card bg-shell p-8 md:flex-row md:items-center md:p-12">
          <p className="max-w-2xl font-display text-3xl leading-snug">{dict.journey.customizeNotice}</p>
          <TrackedLink href={`/${locale}/design-my-trip${addHref}`} event="design_trip_click" params={{ placement: "destination_band", destination: d.slug }} className="btn btn-primary shrink-0">
            {t.addToJourney.replace("{name}", name)}
          </TrackedLink>
        </div>
      </section>

      <Faqs faqs={d.faqs ?? []} locale={locale} title={c.faqs} />

      {nearby.length > 0 && (
        <section className="container-x pb-24">
          <h2 className="text-[length:var(--text-h2)]">{t.nearby}</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((n) => <DestinationCard key={n.slug} d={n} locale={locale} dict={dict} />)}
          </div>
          <Link href={`/${locale}/destinations`} className="kicker link-u mt-10 inline-block">{c.allDestinations} →</Link>
        </section>
      )}

      <FinalCta locale={locale} dict={dict} query={addHref} />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-4">
      <dt className="kicker text-[0.65rem] text-stone">{label}</dt>
      <dd className="mt-1.5 leading-relaxed">{value}</dd>
    </div>
  );
}
