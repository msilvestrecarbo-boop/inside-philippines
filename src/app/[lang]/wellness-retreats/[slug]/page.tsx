import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata, href } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { libraryPhoto } from "@/lib/photos";
import { whatsappHref } from "@/lib/site";
import { getRetreat, retreats, retreatsPage as p } from "@/content/retreats";
import { retreatDetails, detailLabels as dl } from "@/content/retreatDetails";
import { Photo } from "@/components/ui/Photo";
import { JsonLd } from "@/components/ui/JsonLd";
import { FinalCta } from "@/components/layout/FinalCta";
import { TrackedA, TrackedLink } from "@/components/layout/Tracking";
import { Price } from "@/components/layout/CurrencyProvider";

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
  const d = retreatDetails[r.slug];
  const facts = d
    ? [
        { label: dl.facts.duration, value: `${r.nights + 1} ${tr(dl.daysWord, locale)} / ${r.nights} ${tr(p.nightsLabel, locale)}` },
        { label: dl.facts.location, value: tr(d.facts.location, locale) },
        { label: dl.facts.group, value: tr(d.facts.group, locale) },
        { label: dl.facts.level, value: tr(d.facts.level, locale) },
        { label: dl.facts.arrival, value: tr(d.facts.arrival, locale) },
        { label: dl.facts.season, value: tr(d.facts.season, locale) },
      ]
    : [];

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

      {d && (
        <section className="border-b border-line bg-shell">
          <div className="container-x flex flex-col gap-6 border-b border-line py-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="kicker text-narra">{tr(dl.priceTitle, locale)}</p>
              <div className="mt-3 flex flex-wrap gap-x-12 gap-y-4">
                {([["shared", dl.sharedLabel], ["private", dl.privateLabel]] as const).map(([k, label]) => (
                  <p key={k}>
                    <span className="block text-sm text-stone">{tr(label, locale)}</span>
                    <span className="font-display text-4xl"><span className="text-base text-stone">{dict.common.from} </span><Price eur={d.priceEUR[k]} /></span>
                  </p>
                ))}
              </div>
              <p className="mt-3 text-sm text-stone">{tr(dl.priceNote, locale)}</p>
            </div>
            <TrackedLink href={`/${locale}/design-my-trip${query}`} event="design_trip_click" params={{ placement: "retreat_price", retreat: r.slug }} className="btn btn-primary self-start md:self-auto">
              {dict.nav.designMyTrip}
            </TrackedLink>
          </div>
          <dl className="container-x grid gap-x-8 gap-y-6 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {facts.map((f) => (
              <div key={f.label.en}>
                <dt className="kicker text-narra">{tr(f.label, locale)}</dt>
                <dd className="mt-2 leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

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

      {r.program && (
        <section className="container-x pb-20 md:pb-28">
          <h2 className="text-[length:var(--text-h2)]">{tr(r.programTitle!, locale)}</h2>
          <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {r.program.map((x) => (
              <div key={x.name.en} className="rounded-card border border-line p-6">
                <h3 className="text-[length:var(--text-h3)]">{tr(x.name, locale)}</h3>
                <p className="mt-3 leading-relaxed text-stone">{tr(x.body, locale)}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {d && (
        <section className="container-x pb-20 md:pb-28">
          <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <h2 className="text-[length:var(--text-h2)]">{tr(dl.scheduleTitle, locale)}</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-stone">{tr(dl.scheduleNote, locale)}</p>
              <ol className="mt-10 space-y-8">
                {d.days.map((day, i) => (
                  <li key={i} className="grid gap-2 border-t border-ink pt-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
                    <span className="kicker text-narra">{tr(dl.dayWord, locale)} {i + 1}</span>
                    <div>
                      <h3 className="text-[length:var(--text-h3)]">{tr(day.title, locale)}</h3>
                      <p className="mt-2 leading-relaxed text-stone">{tr(day.body, locale)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="rounded-card bg-shell p-6 md:p-8 lg:sticky lg:top-28">
                <h2 className="text-[length:var(--text-h3)]">{tr(dl.dailyTitle, locale)}</h2>
                <ul className="mt-6 space-y-4">
                  {d.daily.map((s) => (
                    <li key={s.time} className="grid grid-cols-[4.5rem_1fr] gap-3 border-t border-line pt-4">
                      <span className="font-display text-lg text-narra" dir="ltr">{s.time}</span>
                      <span className="leading-relaxed">{tr(s.what, locale)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {r.variants && (
        <section className="bg-ink py-20 text-white md:py-28">
          <div className="container-x">
            <h2 className="text-[length:var(--text-h2)]">{tr(r.variantsTitle!, locale)}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {r.variants.map((v) => (
                <TrackedLink key={v.name.en} href={`/${locale}/design-my-trip${query}`} event="design_trip_click" params={{ placement: "retreat_variant", retreat: r.slug, variant: v.name.en }} className="block rounded-card border border-white/20 p-6 transition-colors hover:border-white">
                  <span className="font-display text-2xl">{tr(v.name, locale)}</span>
                  <span className="mt-3 block leading-relaxed text-white/75">{tr(v.body, locale)}</span>
                  <span className="kicker mt-5 block text-white/90">{dict.nav.designMyTrip} →</span>
                </TrackedLink>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {d && (
        <section className="container-x py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { title: dl.includedTitle, items: tr(d.included, locale), mark: "✓" },
              { title: dl.notIncludedTitle, items: tr(dl.notIncluded, locale), mark: "–" },
              { title: dl.addOnsTitle, items: tr(dl.addOns, locale), mark: "+" },
            ].map((col) => (
              <div key={col.title.en}>
                <h2 className="text-[length:var(--text-h3)]">{tr(col.title, locale)}</h2>
                <ul className="mt-5 space-y-3">
                  {col.items.map((it) => (
                    <li key={it} className="flex gap-3 border-t border-line pt-3 leading-relaxed">
                      <span aria-hidden className="text-narra">{col.mark}</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 max-w-3xl border-t border-ink pt-6">
            <h2 className="text-[length:var(--text-h3)]">{tr(dl.stayTitle, locale)}</h2>
            <p className="mt-3 text-lg leading-relaxed">{tr(d.stay, locale)}</p>
          </div>
        </section>
      )}

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
