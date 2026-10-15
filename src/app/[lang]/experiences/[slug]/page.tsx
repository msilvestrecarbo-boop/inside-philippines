import { notFound } from "next/navigation";
import { locales, tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata, href, translatedLocales } from "@/lib/seo";
import { destinationsFor, getCategories, getCategory, getJourneys } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { Photo } from "@/components/ui/Photo";
import { Prose } from "@/components/ui/Prose";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DestinationCard, JourneyCard } from "@/components/cards/Cards";
import { FinalCta } from "@/components/layout/FinalCta";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => getCategories().map((c) => ({ lang, slug: c.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/experiences/[slug]">) {
  const { slug } = await params;
  const { locale } = await resolve(params);
  const c = getCategory(slug);
  if (!c) return {};
  return buildMetadata({ locale, path: `/experiences/${slug}`, title: `${tr(c.title, locale)} — Philippines`, description: tr(c.short, locale), translated: translatedLocales(c.body, c.title) });
}

const interestFor: Record<string, string> = {
  "island-escapes": "beaches", honeymoons: "beaches", luxury: "luxury", family: "family", surf: "surf", diving: "diving",
  "food-culture": "food,culture", "nature-adventure": "nature,adventure", wellness: "wellness", "off-the-beaten-path": "remote", "private-journeys": "luxury",
};

export default async function Category({ params }: PageProps<"/[lang]/experiences/[slug]">) {
  const { slug } = await params;
  const { locale, dict } = await resolve(params);
  const c = getCategory(slug);
  if (!c) notFound();
  const t = dict.experiencesPage;
  const title = tr(c.title, locale);
  const journeys = getJourneys().filter((j) => j.categories.includes(c.slug)).slice(0, 4);
  const fallback = !translatedLocales(c.body).includes(locale);
  const path = href(locale, `/experiences/${slug}`);
  const who = slug === "honeymoons" ? "&who=honeymoon" : slug === "family" ? "&who=family" : "";

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: dict.common.breadcrumbHome, path: href(locale) }, { name: dict.nav.experiences, path: href(locale, "/experiences") }, { name: title, path }])} />
      <section className="relative isolate flex min-h-[75svh] items-end overflow-hidden text-white">
        <Photo photo={c.photo} locale={locale} label={dict.common.photoToCome} priority showBrief className="absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/65 to-black/20" />
        <div className="container-x pb-16 md:pb-24">
          <Breadcrumbs light items={[{ name: dict.common.breadcrumbHome, href: `/${locale}` }, { name: dict.nav.experiences, href: `/${locale}/experiences` }, { name: title, href: path }]} />
          <h1 className="mt-8 text-[length:var(--text-display)] leading-[0.95]">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">{tr(c.short, locale)}</p>
        </div>
      </section>
      {fallback && <p className="bg-shell py-3 text-center text-sm text-stone">{dict.common.notTranslated}</p>}
      <section className="container-x py-20 md:py-28">
        <Prose text={tr(c.body, locale)} className="max-w-3xl text-xl" />
      </section>
      <section className="container-x pb-20">
        <h2 className="text-[length:var(--text-h2)]">{t.destinationsFor}</h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {destinationsFor(c.destinations).map((d) => <DestinationCard key={d.slug} d={d} locale={locale} dict={dict} />)}
        </div>
      </section>
      {journeys.length > 0 && (
        <section className="bg-[#efe8dc] py-20">
          <div className="container-x">
            <h2 className="text-[length:var(--text-h2)]">{t.journeysFor}</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {journeys.map((j) => <JourneyCard key={j.slug} j={j} locale={locale} dict={dict} />)}
            </div>
          </div>
        </section>
      )}
      <FinalCta locale={locale} dict={dict} query={`?interest=${interestFor[slug] ?? ""}${who}`} />
    </>
  );
}
