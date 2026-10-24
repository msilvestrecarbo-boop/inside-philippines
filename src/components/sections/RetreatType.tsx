import Link from "next/link";
import { tr, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { buildMetadata, href } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { libraryPhoto } from "@/lib/photos";
import { whatsappHref } from "@/lib/site";
import { retreats, retreatsPage as p, retreatTypes, type RetreatType } from "@/content/retreats";
import { Photo } from "@/components/ui/Photo";
import { Faqs } from "@/components/ui/Faqs";
import { JsonLd } from "@/components/ui/JsonLd";
import { FinalCta } from "@/components/layout/FinalCta";
import { TrackedA, TrackedLink } from "@/components/layout/Tracking";

/** Shared page for /private-retreats, /group-retreats and /corporate-retreats. */
export const getRetreatType = (slug: RetreatType["slug"]) => retreatTypes.find((t) => t.slug === slug)!;

export function retreatTypeMetadata(slug: RetreatType["slug"], locale: Locale) {
  const t = getRetreatType(slug);
  return buildMetadata({ locale, path: `/${slug}`, title: tr(t.seo.title, locale), description: tr(t.seo.description, locale) });
}

export function RetreatTypePage({ slug, locale, dict }: { slug: RetreatType["slug"]; locale: Locale; dict: Dictionary }) {
  const t = getRetreatType(slug);
  const hero = libraryPhoto(t.photo, tr(t.title, locale));
  const query = "?" + new URLSearchParams({ interest: "wellness", who: t.who, duration: "7-10", utm_content: slug }).toString();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: dict.common.breadcrumbHome, path: href(locale) },
            { name: tr(p.kicker, locale), path: href(locale, "/wellness-retreats") },
            { name: tr(t.menu, locale), path: href(locale, `/${slug}`) },
          ]),
          faqSchema(t.faqs.map((f) => ({ q: tr(f.q, locale), a: tr(f.a, locale) }))),
        ]}
      />
      <section className="on-photo relative isolate flex min-h-[85svh] items-end overflow-hidden text-white">
        {hero && <Photo photo={hero} locale={locale} label={dict.common.photoToCome} priority className="absolute inset-0 -z-10" />}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/15 to-black/30" />
        <div className="container-x pb-16 md:pb-24">
          <p className="kicker text-white/80">
            <Link href={`/${locale}/wellness-retreats`} className="underline-offset-4 hover:underline">{tr(p.kicker, locale)}</Link> · {tr(t.menu, locale)}
          </p>
          <h1 className="mt-4 max-w-4xl text-[length:var(--text-h1)]">{tr(t.title, locale)}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">{tr(t.intro, locale)}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <TrackedLink href={`/${locale}/design-my-trip${query}`} event="design_trip_click" params={{ placement: "retreat_type_hero", retreat_type: slug }} className="btn btn-primary">
              {dict.nav.designMyTrip}
            </TrackedLink>
            <TrackedA href={whatsappHref(dict.whatsapp.message)} target="_blank" rel="noopener" event="whatsapp_click" params={{ placement: "retreat_type_hero", retreat_type: slug }} className="btn btn-ghost">
              {dict.whatsapp.label}
            </TrackedA>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tr(t.points, locale).map((pt, i) => (
            <li key={i} className="border-t border-ink pt-5">
              <span className="font-display text-3xl text-narra">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-lg leading-relaxed">{pt}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-shell py-20 md:py-28">
        <div className="container-x">
          <h2 className="text-[length:var(--text-h2)]">{tr(p.pillarsTitle, locale)}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {p.pillars.map((pl) => (
              <div key={pl.key} className="rounded-card bg-white p-6">
                <h3 className="text-xl">{tr(pl.name, locale)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{tr(pl.items, locale).join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <h2 className="text-[length:var(--text-h2)]">{tr(p.retreatsTitle, locale)}</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {retreats.map((r) => (
            <li key={r.slug}>
              <Link href={`/${locale}/wellness-retreats/${r.slug}`} className="block h-full rounded-card border border-line p-5 transition-colors hover:border-ink">
                <span className="kicker text-narra">{r.nights} {tr(p.nightsLabel, locale)} · {tr(r.place, locale)}</span>
                <span className="mt-2 block font-display text-xl">{tr(r.title, locale)}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-10 flex flex-wrap gap-3">
          {retreatTypes.filter((x) => x.slug !== slug).map((x) => (
            <li key={x.slug}>
              <Link href={`/${locale}/${x.slug}`} className="rounded-full border border-ink px-4 py-2 text-sm hover:bg-ink hover:text-white">{tr(x.menu, locale)} →</Link>
            </li>
          ))}
        </ul>
      </section>

      <Faqs faqs={t.faqs} locale={locale} title={dict.common.faqs} />
      <FinalCta locale={locale} dict={dict} query={query} />
    </>
  );
}
