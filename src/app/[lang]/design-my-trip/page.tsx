import { tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";
import { getDestinations, getJourneys } from "@/lib/content";
import { whatsappHref } from "@/lib/site";
import { TripBuilder } from "@/components/trip/TripBuilder";
import { destName } from "@/components/cards/Cards";

const BUILDER_DESTINATIONS = ["palawan", "el-nido", "coron", "siargao", "bohol", "siquijor", "boracay", "cebu", "batanes", "manila", "camiguin", "banaue"];

export async function generateMetadata({ params }: PageProps<"/[lang]/design-my-trip">) {
  const { locale, dict } = await resolve(params);
  return buildMetadata({ locale, path: "/design-my-trip", title: dict.tripBuilder.title, description: dict.tripBuilder.intro });
}

export default async function DesignMyTrip({ params }: PageProps<"/[lang]/design-my-trip">) {
  const { locale, dict } = await resolve(params);
  const all = getDestinations();
  const destinations = BUILDER_DESTINATIONS.map((s) => all.find((d) => d.slug === s)!).filter(Boolean).map((d) => ({ slug: d.slug, name: destName(d, locale) }));
  const journeys = getJourneys().map((j) => ({ slug: j.slug, title: tr(j.title, locale), days: j.days, route: j.route, styles: j.styles }));
  return (
    <section className="min-h-screen bg-sand pb-24 pt-28 md:pt-36">
      <div className="container-x">
        <header className="mx-auto mb-14 max-w-3xl">
          <h1 className="text-[length:var(--text-h1)]">{dict.tripBuilder.title}</h1>
          <p className="mt-4 text-lg text-stone">{dict.tripBuilder.intro}</p>
        </header>
        <TripBuilder
          locale={locale}
          dict={dict}
          destinations={destinations}
          journeys={journeys}
          privacyHref={`/${locale}/privacy`}
          whatsappHref={whatsappHref(dict.whatsapp.message)}
        />
      </div>
    </section>
  );
}
