import { resolve } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";
import { getJourneys } from "@/lib/content";
import { JourneyCard } from "@/components/cards/Cards";
import { PageHero } from "@/components/sections/Sections";
import { FinalCta } from "@/components/layout/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[lang]/journeys">) {
  const { locale, dict } = await resolve(params);
  return buildMetadata({ locale, path: "/journeys", title: `${dict.nav.journeys} — ${dict.home.journeysTitle}`, description: dict.home.journeysBody });
}

export default async function Journeys({ params }: PageProps<"/[lang]/journeys">) {
  const { locale, dict } = await resolve(params);
  const list = [...getJourneys()].sort((a, b) => a.days - b.days);
  const lengths = [...new Set(list.map((j) => j.days))];
  return (
    <>
      <PageHero kicker={dict.home.journeysKicker} title={dict.home.journeysTitle} body={dict.journey.customizeNotice}>
        <nav aria-label="Length" className="flex flex-wrap gap-3">
          {lengths.map((d) => (
            <a key={d} href={`#d${d}`} className="kicker rounded-full border border-white/30 px-4 py-2 text-white/85 hover:bg-white/10">
              {d} {dict.common.days}
            </a>
          ))}
        </nav>
      </PageHero>
      <section className="container-x grid gap-10 py-20 md:grid-cols-2 md:py-28">
        {list.map((j) => (
          <div key={j.slug} id={`d${j.days}`} className="scroll-mt-24">
            <JourneyCard j={j} locale={locale} dict={dict} />
          </div>
        ))}
      </section>
      <FinalCta locale={locale} dict={dict} />
    </>
  );
}
