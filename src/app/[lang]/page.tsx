import Link from "next/link";

import { resolve } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";
import { getCategories, getDestinations, getJourneys, getStories } from "@/lib/content";
import { Photo } from "@/components/ui/Photo";
import { withPhoto } from "@/lib/photos";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InsiderNote } from "@/components/ui/Insider";
import { ArticleCard, CategoryCard, DestinationCard, JourneyCard } from "@/components/cards/Cards";
import { HowItWorks, Tiers, Trust, WhyUs } from "@/components/sections/Sections";
import { FinalCta } from "@/components/layout/FinalCta";
import { Reveal, TrackedLink } from "@/components/layout/Tracking";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { locale, dict } = await resolve(params);
  return buildMetadata({ locale, path: "", title: dict.meta.defaultTitle, description: dict.meta.defaultDescription });
}

const FEATURED = ["palawan", "siargao", "bohol", "siquijor", "coron", "batanes"];

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { locale, dict } = await resolve(params);
  const h = dict.home;
  const destinations = getDestinations();
  const featured = FEATURED.map((s) => destinations.find((d) => d.slug === s)!).filter(Boolean);
  const journeys = getJourneys();
  const insiders = destinations.flatMap((d) => (d.insiders ?? []).slice(0, 1).map((n) => ({ n, d }))).slice(0, 3);
  const stories = getStories().filter((s) => s.status === "published").slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="on-photo relative isolate flex min-h-[100svh] items-center overflow-hidden text-white">
        <Photo
          priority
          showBrief
          locale={locale}
          label={dict.common.photoToCome}
          className="absolute inset-0 -z-10"
          photo={withPhoto("site", "hero", {
            tone: "lagoon",
            alt: { en: "Aerial view of limestone islands and a lagoon in northern Palawan at first light" },
            brief: "HERO VIDEO (8–12s loop, muted, 1080p ≤4MB + poster): drone push over karst islands and a lagoon in Bacuit Bay at first light; second cut: a banca crossing glassy water. No logos, no faces to camera.",
          })}
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="container-x pb-24 pt-32 md:pt-36">
          <p className="kicker text-white/80">{h.heroKicker}</p>
          <h1 className="mt-5 max-w-3xl text-[length:var(--text-display)]">{h.heroTitle}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">{h.heroBody}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <TrackedLink href={`/${locale}/design-my-trip`} event="design_trip_click" params={{ placement: "hero" }} className="btn btn-primary">
              {h.heroPrimary}
            </TrackedLink>
            <Link href={`/${locale}/destinations`} className="btn btn-ghost">{h.heroSecondary}</Link>
          </div>
        </div>
        <span aria-hidden className="absolute bottom-0 end-[8%] hidden h-24 w-px bg-white/70 md:block" />
      </section>

      {/* DISCOVERY */}
      <section className="container-x py-24 md:py-36" aria-labelledby="discovery">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker text-narra">{h.discoveryKicker}</p>
            <h2 id="discovery" className="mt-5 text-[length:var(--text-h1)]">{h.discoveryTitle}</h2>
          </div>
          <p className="self-end text-lg leading-relaxed text-stone lg:col-span-5">{h.discoveryBody}</p>
        </div>
        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {h.discoveryPoints.map((p, i) => (
            <Reveal key={i}>
              <div className="flex gap-5 lg:flex-col">
                <span aria-hidden className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-narra/40 font-display text-lg text-narra">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[1.4rem]">{p.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-stone">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="pb-24 md:pb-32" aria-labelledby="dest">
        <div className="container-x flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="dest" kicker={h.destinationsKicker} title={h.destinationsTitle} body={h.destinationsBody} />
          <Link href={`/${locale}/destinations`} className="kicker link-u shrink-0">{dict.common.allDestinations} →</Link>
        </div>
        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 md:mx-auto md:grid md:max-w-[88rem] md:px-10 md:grid-cols-3 md:gap-10 md:overflow-visible">
          {featured.map((d, i) => (
            <div key={d.slug} className="w-[80vw] shrink-0 snap-start sm:w-[45vw] md:w-auto">
              <DestinationCard d={d} locale={locale} dict={dict} priority={i < 2} />
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEYS */}
      <section className="bg-shell py-24 md:py-32" aria-labelledby="jour">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading id="jour" kicker={h.journeysKicker} title={h.journeysTitle} body={h.journeysBody} />
            <Link href={`/${locale}/journeys`} className="kicker link-u shrink-0">{dict.common.allJourneys} →</Link>
          </div>
          <div className="mt-12 grid gap-8">
            {journeys[0] && <JourneyCard j={journeys[0]} locale={locale} dict={dict} wide />}
            <div className="grid gap-8 md:grid-cols-3">
              {journeys.slice(1, 4).map((j) => (
                <JourneyCard key={j.slug} j={j} locale={locale} dict={dict} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowItWorks dict={dict} />

      {/* EXPERIENCES */}
      <section className="pb-24 md:pb-32" aria-labelledby="exp">
        <div className="container-x">
          <SectionHeading id="exp" kicker={h.experiencesKicker} title={h.experiencesTitle} />
        </div>
        <div className="no-scrollbar mt-12 flex snap-x gap-4 overflow-x-auto px-5 md:px-10">
          {getCategories().map((c) => (
            <div key={c.slug} className="w-[62vw] shrink-0 snap-start sm:w-[34vw] lg:w-[22vw]">
              <CategoryCard cat={c} locale={locale} dict={dict} />
            </div>
          ))}
        </div>
      </section>

      <WhyUs dict={dict} />
      <Tiers dict={dict} />

      {/* INSIDE THE ISLANDS */}
      {insiders.length > 0 && (
        <section className="py-24 md:py-32" aria-labelledby="inside">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading id="inside" kicker={h.insideKicker} title={h.insideTitle} body={h.insideBody} />
            </div>
            <div className="grid gap-6 lg:col-span-7">
              {insiders.map(({ n, d }) => (
                <Link key={d.slug} href={`/${locale}/destinations/${d.slug}`} className="block transition-transform hover:-translate-y-0.5">
                  <InsiderNote note={n} locale={locale} dict={dict} />
                  <span className="sr-only">{d.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Trust dict={dict} />

      {stories.length > 0 && (
        <section className="container-x pb-24 md:pb-32" aria-labelledby="stories">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading id="stories" kicker={h.storiesKicker} title={h.storiesTitle} />
            <Link href={`/${locale}/stories`} className="kicker link-u shrink-0">{dict.common.allStories} →</Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {stories.map((s) => (
              <ArticleCard key={s.slug} a={s} locale={locale} dict={dict} base="stories" />
            ))}
          </div>
        </section>
      )}

      <FinalCta locale={locale} dict={dict} />
    </>
  );
}

