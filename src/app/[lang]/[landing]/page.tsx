import { notFound } from "next/navigation";
import { locales, tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata, href, translatedLocales } from "@/lib/seo";
import { destinationsFor, getLanding, getLandings, journeysFor } from "@/lib/content";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { whatsappHref } from "@/lib/site";
import { Photo } from "@/components/ui/Photo";
import { Faqs } from "@/components/ui/Faqs";
import { JsonLd } from "@/components/ui/JsonLd";
import { DestinationCard, JourneyCard } from "@/components/cards/Cards";
import { HowItWorks, WhyUs } from "@/components/sections/Sections";
import { FinalCta } from "@/components/layout/FinalCta";
import { TrackedA, TrackedLink } from "@/components/layout/Tracking";

/** Social / ads landing pages, e.g. /fr/siargao, /ar/private-villas. */
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => getLandings().map((l) => ({ lang, landing: l.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[landing]">) {
  const { landing } = await params;
  const { locale } = await resolve(params);
  const l = getLanding(landing);
  if (!l) return {};
  return buildMetadata({ locale, path: `/${l.slug}`, title: tr(l.seo.title, locale), description: tr(l.seo.description, locale), translated: translatedLocales(l.title, l.intro) });
}

export default async function LandingPage({ params }: PageProps<"/[lang]/[landing]">) {
  const { landing } = await params;
  const { locale, dict } = await resolve(params);
  const l = getLanding(landing);
  if (!l) notFound();
  const query = "?" + new URLSearchParams({ ...(l.prefill ?? {}), utm_content: l.slug }).toString();
  const fallback = !translatedLocales(l.title).includes(locale);
  const gcc = l.market === "gcc";

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: dict.common.breadcrumbHome, path: href(locale) }, { name: tr(l.title, locale), path: href(locale, `/${l.slug}`) }]), faqSchema((l.faqs ?? []).map((f) => ({ q: tr(f.q, locale), a: tr(f.a, locale) })))]} />
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-white">
        <Photo photo={l.photo} locale={locale} label={dict.common.photoToCome} priority className="absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/15 to-black/30" />
        <div className="container-x pb-16 md:pb-24">
          <p className="kicker text-white/80">{tr(l.kicker, locale)}</p>
          <h1 className="mt-4 max-w-4xl text-[length:var(--text-h1)]">{tr(l.title, locale)}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">{tr(l.intro, locale)}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <TrackedLink href={`/${locale}/design-my-trip${query}`} event="design_trip_click" params={{ placement: "landing_hero", landing: l.slug }} className="btn btn-primary">
              {dict.nav.designMyTrip}
            </TrackedLink>
            <TrackedA href={whatsappHref(dict.whatsapp.message)} target="_blank" rel="noopener" event="whatsapp_click" params={{ placement: "landing_hero", landing: l.slug }} className={`btn ${gcc ? "bg-white text-ink" : "btn-ghost"}`}>
              {dict.whatsapp.label}
            </TrackedA>
          </div>
        </div>
      </section>
      {fallback && <p className="bg-shell py-3 text-center text-sm text-stone">{dict.common.notTranslated}</p>}

      <section className="container-x py-20 md:py-28">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tr(l.points, locale).map((p, i) => (
            <li key={i} className="border-t border-ink pt-5">
              <span className="font-display text-3xl text-narra">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-lg leading-relaxed">{p}</p>
            </li>
          ))}
        </ul>
      </section>

      {l.journeys.length > 0 && (
        <section className="bg-[#efe8dc] py-20 md:py-28">
          <div className="container-x">
            <h2 className="text-[length:var(--text-h2)]">{dict.home.journeysTitle}</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {journeysFor(l.journeys).map((j) => <JourneyCard key={j.slug} j={j} locale={locale} dict={dict} />)}
            </div>
          </div>
        </section>
      )}

      <HowItWorks dict={dict} />

      {l.destinations.length > 0 && (
        <section className="container-x pb-20 md:pb-28">
          <h2 className="text-[length:var(--text-h2)]">{dict.home.destinationsTitle}</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {destinationsFor(l.destinations).slice(0, 3).map((d) => <DestinationCard key={d.slug} d={d} locale={locale} dict={dict} />)}
          </div>
        </section>
      )}

      <WhyUs dict={dict} />
      <Faqs faqs={l.faqs ?? []} locale={locale} title={dict.common.faqs} />
      <FinalCta locale={locale} dict={dict} query={query} />
    </>
  );
}
