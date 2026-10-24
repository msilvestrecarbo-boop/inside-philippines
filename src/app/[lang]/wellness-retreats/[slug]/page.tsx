import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata, href } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { libraryPhoto } from "@/lib/photos";
import { whatsappHref } from "@/lib/site";
import { getRetreat, retreats, retreatsPage as p } from "@/content/retreats";
import { Photo } from "@/components/ui/Photo";
import { JsonLd } from "@/components/ui/JsonLd";
import { FinalCta } from "@/components/layout/FinalCta";
import { TrackedA, TrackedLink } from "@/components/layout/Tracking";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => retreats.map((r) => ({ lang, slug: r.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/wellness-retreats/[slug]">) {
  const { slug } = await params;
  const { locale } = await resolve(params);
  const r = getRetreat(slug);
  if (!r) return {};
  return buildMetadata({ locale, path: `/wellness-retreats/${slug}`, title: tr(r.seo.title, locale), description: tr(r.seo.description, locale) });
}

export default async function Retreat({ params }: PageProps<"/[lang]/wellness-retreats/[slug]">) {
  const { slug } = await params;
  const { locale, dict } = await resolve(params);
  const r = getRetreat(slug);
  if (!r) notFound();
  const photo = libraryPhoto(r.photo, tr(r.place, locale));
  const query = "?" + new URLSearchParams({ interest: "wellness", duration: "7-10", utm_content: r.slug }).toString();
  const others = retreats.filter((x) => x.slug !== r.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: dict.common.breadcrumbHome, path: href(locale) },
          { name: tr(p.kicker, locale), path: href(locale, "/wellness-retreats") },
          { name: tr(r.title, locale), path: href(locale, `/wellness-retreats/${r.slug}`) },
        ])}
      />
      <section className="on-photo relative isolate flex min-h-[85svh] items-end overflow-hidden text-white">
        {photo && <Photo photo={photo} locale={locale} label={dict.common.photoToCome} priority className="absolute inset-0 -z-10" />}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/15 to-black/30" />
        <div className="container-x pb-16 md:pb-24">
          <p className="kicker text-white/80">
            <Link href={`/${locale}/wellness-retreats`} className="underline-offset-4 hover:underline">{tr(p.kicker, locale)}</Link> · {r.nights} {tr(p.nightsLabel, locale)} · {tr(r.place, locale)}
          </p>
          <h1 className="mt-4 max-w-4xl text-[length:var(--text-h1)]">{tr(r.title, locale)}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">{tr(r.short, locale)}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <TrackedLink href={`/${locale}/design-my-trip${query}`} event="design_trip_click" params={{ placement: "retreat_hero", retreat: r.slug }} className="btn btn-primary">
              {dict.nav.designMyTrip}
            </TrackedLink>
            <TrackedA href={whatsappHref(dict.whatsapp.message)} target="_blank" rel="noopener" event="whatsapp_click" params={{ placement: "retreat_hero", retreat: r.slug }} className="btn btn-ghost">
              {dict.whatsapp.label}
            </TrackedA>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <p className="max-w-3xl text-xl leading-relaxed">{tr(r.intro, locale)}</p>
        <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tr(r.highlights, locale).map((h, i) => (
            <li key={i} className="border-t border-ink pt-5">
              <span className="font-display text-3xl text-narra">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-lg leading-relaxed">{h}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-shell py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <div>
            <p className="kicker text-narra">{tr(p.pillarsTitle, locale)}</p>
            <p className="mt-4 text-lg leading-relaxed">{tr(r.day, locale)}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.pillars.map((pl) => (
                <li key={pl.key} className="rounded-full border border-ink px-4 py-1.5 text-sm">{tr(pl.name, locale)}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker text-narra">{tr(p.foodTitle, locale)}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tr(p.dietTags, locale).map((t) => (
                <li key={t} className="rounded-full bg-white px-4 py-1.5 text-sm">{t}</li>
              ))}
            </ul>
            <p className="mt-5 text-lg leading-relaxed">{tr(r.food, locale)}</p>
            <p className="mt-6 border-t border-line pt-5 leading-relaxed text-stone">{tr(p.included, locale)}</p>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <h2 className="text-[length:var(--text-h2)]">{tr(p.retreatsTitle, locale)}</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/${locale}/wellness-retreats/${o.slug}`} className="block rounded-card border border-line p-5 transition-colors hover:border-ink">
                <span className="kicker text-narra">{o.nights} {tr(p.nightsLabel, locale)} · {tr(o.place, locale)}</span>
                <span className="mt-2 block font-display text-xl">{tr(o.title, locale)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FinalCta locale={locale} dict={dict} query={query} />
    </>
  );
}
