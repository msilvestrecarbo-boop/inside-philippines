import Link from "next/link";
import { tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata, href } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { libraryPhoto } from "@/lib/photos";
import { retreats, retreatsPage as p } from "@/content/retreats";
import { Photo } from "@/components/ui/Photo";
import { Faqs } from "@/components/ui/Faqs";
import { JsonLd } from "@/components/ui/JsonLd";
import { FinalCta } from "@/components/layout/FinalCta";
import { TrackedLink } from "@/components/layout/Tracking";

const query = "?" + new URLSearchParams({ interest: "wellness", duration: "7-10", utm_content: "wellness-retreats" }).toString();

export async function generateMetadata({ params }: PageProps<"/[lang]/wellness-retreats">) {
  const { locale } = await resolve(params);
  return buildMetadata({ locale, path: "/wellness-retreats", title: tr(p.seo.title, locale), description: tr(p.seo.description, locale) });
}

export default async function WellnessRetreats({ params }: PageProps<"/[lang]/wellness-retreats">) {
  const { locale, dict } = await resolve(params);
  const hero = libraryPhoto("retreat/yoga", "Yoga on the beach");
  const food = libraryPhoto(p.foodPhoto, "Vegan food");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: dict.common.breadcrumbHome, path: href(locale) }, { name: tr(p.kicker, locale), path: href(locale, "/wellness-retreats") }]),
          faqSchema(p.faqs.map((f) => ({ q: tr(f.q, locale), a: tr(f.a, locale) }))),
        ]}
      />
      <section className="on-photo relative isolate flex min-h-[85svh] items-end overflow-hidden text-white">
        {hero && <Photo photo={hero} locale={locale} label={dict.common.photoToCome} priority className="absolute inset-0 -z-10" />}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/15 to-black/30" />
        <div className="container-x pb-16 md:pb-24">
          <p className="kicker text-white/80">{tr(p.kicker, locale)}</p>
          <h1 className="mt-4 max-w-4xl text-[length:var(--text-h1)]">{tr(p.title, locale)}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">{tr(p.intro, locale)}</p>
          <div className="mt-9">
            <TrackedLink href={`/${locale}/design-my-trip${query}`} event="design_trip_click" params={{ placement: "retreats_hero" }} className="btn btn-primary">
              {dict.nav.designMyTrip}
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <h2 className="text-[length:var(--text-h2)]">{tr(p.retreatsTitle, locale)}</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {retreats.map((r) => {
            const photo = libraryPhoto(r.photo, tr(r.place, locale));
            return (
              <article key={r.slug} className="group relative flex flex-col overflow-hidden rounded-card bg-white shadow-[0_10px_30px_-14px_rgb(0_0_0/0.15)]">
                <div className="overflow-hidden">
                  {photo && <Photo photo={photo} locale={locale} label={dict.common.photoToCome} sizes="(min-width:1024px) 33vw, 90vw" className="aspect-[16/11] transition-transform duration-[1.2s] group-hover:scale-[1.03]" />}
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="kicker text-narra">{r.nights} {tr(p.nightsLabel, locale)} · {tr(r.place, locale)}</p>
                  <h3 className="mt-3 text-[length:var(--text-h3)]">
                    <Link href={`/${locale}/wellness-retreats/${r.slug}`} className="after:absolute after:inset-0">{tr(r.title, locale)}</Link>
                  </h3>
                  <p className="mt-4 flex-1 leading-relaxed text-stone">{tr(r.short, locale)}</p>
                  <span className="btn btn-ink mt-6 min-h-0 self-start px-5 py-2 text-[0.8rem]">{dict.common.viewJourney} →</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-shell py-20 md:py-28">
        <div className="container-x">
          <h2 className="text-[length:var(--text-h2)]">{tr(p.pillarsTitle, locale)}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">{tr(p.pillarsIntro, locale)}</p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {p.pillars.map((pl, i) => {
              const photo = libraryPhoto(pl.photo, tr(pl.name, locale));
              return (
                <article key={pl.key} className="overflow-hidden rounded-card bg-white">
                  {photo && <Photo photo={photo} locale={locale} label={dict.common.photoToCome} sizes="(min-width:768px) 50vw, 90vw" className="aspect-[16/9]" />}
                  <div className="p-6 md:p-8">
                    <span className="font-display text-3xl text-narra">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-2 text-[length:var(--text-h3)]">{tr(pl.name, locale)}</h3>
                    <p className="mt-2 leading-relaxed text-stone">{tr(pl.body, locale)}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {tr(pl.items, locale).map((it) => (
                        <li key={it} className="rounded-full border border-line px-3.5 py-1.5 text-sm">{it}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-stone">{tr(p.pillarsNote, locale)}</p>
        </div>
      </section>

      <section className="container-x grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        {food && <Photo photo={food} locale={locale} label={dict.common.photoToCome} sizes="(min-width:768px) 50vw, 90vw" className="aspect-[4/3] overflow-hidden rounded-card" />}
        <div>
          <h2 className="text-[length:var(--text-h2)]">{tr(p.foodTitle, locale)}</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {tr(p.dietTags, locale).map((t) => (
              <li key={t} className="rounded-full border border-ink px-4 py-1.5 text-sm">{t}</li>
            ))}
          </ul>
          <p className="mt-6 text-lg leading-relaxed text-stone">{tr(p.foodBody, locale)}</p>
          <p className="mt-6 border-t border-line pt-5 leading-relaxed">{tr(p.included, locale)}</p>
        </div>
      </section>

      <Faqs faqs={p.faqs} locale={locale} title={dict.common.faqs} />
      <FinalCta locale={locale} dict={dict} query={query} />
    </>
  );
}
