import { resolve } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";
import { getDestinations } from "@/lib/content";
import { DestinationCard } from "@/components/cards/Cards";
import { PageHero } from "@/components/sections/Sections";
import { FinalCta } from "@/components/layout/FinalCta";
import type { Region } from "@/content/types";

const regionNames: Record<Region, string> = { luzon: "Luzon", palawan: "Palawan", visayas: "Visayas", mindanao: "Mindanao" };

export async function generateMetadata({ params }: PageProps<"/[lang]/destinations">) {
  const { locale, dict } = await resolve(params);
  return buildMetadata({ locale, path: "/destinations", title: `${dict.nav.destinations} — ${dict.home.destinationsTitle}`, description: dict.home.destinationsBody });
}

export default async function Destinations({ params }: PageProps<"/[lang]/destinations">) {
  const { locale, dict } = await resolve(params);
  const all = getDestinations();
  const regions: Region[] = ["palawan", "visayas", "mindanao", "luzon"];
  return (
    <>
      <PageHero photo="destination/coron" kicker={dict.home.destinationsKicker} title={dict.home.destinationsTitle} body={dict.home.destinationsBody}>
        <nav aria-label="Regions" className="flex flex-wrap gap-3">
          {regions.map((r) => (
            <a key={r} href={`#${r}`} className="kicker rounded-full border border-white/30 px-4 py-2 text-white/85 hover:bg-white/10">{regionNames[r]}</a>
          ))}
        </nav>
      </PageHero>
      {regions.map((r) => {
        const list = all.filter((d) => d.region === r);
        if (!list.length) return null;
        return (
          <section key={r} id={r} className="container-x scroll-mt-24 py-16 md:py-24">
            <h2 className="border-b border-line pb-4 text-[length:var(--text-h2)]" dir="ltr">{regionNames[r]}</h2>
            <div className="mt-10 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((d) => (
                <DestinationCard key={d.slug} d={d} locale={locale} dict={dict} />
              ))}
            </div>
          </section>
        );
      })}
      <FinalCta locale={locale} dict={dict} />
    </>
  );
}
