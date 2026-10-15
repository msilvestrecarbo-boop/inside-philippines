import Link from "next/link";
import type { GuideArticle, Story } from "@/content/types";
import { tr, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { href, translatedLocales } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { destinationsFor, journeysFor } from "@/lib/content";
import { Photo } from "@/components/ui/Photo";
import { Prose, headingsOf } from "@/components/ui/Prose";
import { InsiderNote } from "@/components/ui/Insider";
import { Faqs } from "@/components/ui/Faqs";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DestinationCard, JourneyCard } from "@/components/cards/Cards";
import { FinalCta } from "@/components/layout/FinalCta";

export function ArticlePage({
  a,
  locale,
  dict,
  base,
  sectionName,
}: {
  a: GuideArticle | Story;
  locale: Locale;
  dict: Dictionary;
  base: "travel-guide" | "stories";
  sectionName: string;
}) {
  const title = tr(a.title, locale);
  const path = href(locale, `/${base}/${a.slug}`);
  const body = tr(a.body, locale);
  const toc = headingsOf(body);
  const fallback = !translatedLocales(a.body).includes(locale);
  const story = "author" in a ? (a as Story) : null;
  const dests = destinationsFor(a.related?.destinations ?? []).slice(0, 3);
  const journeys = journeysFor(a.related?.journeys ?? []).slice(0, 2);
  const date = new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(new Date(a.updated));

  return (
    <>
      <JsonLd
        data={[
          articleSchema({ title, description: tr(a.description, locale), path, updated: a.updated, locale, author: story?.author }),
          breadcrumbSchema([{ name: dict.common.breadcrumbHome, path: href(locale) }, { name: sectionName, path: href(locale, `/${base}`) }, { name: title, path }]),
          faqSchema((a.faqs ?? []).map((f) => ({ q: tr(f.q, locale), a: tr(f.a, locale) }))),
        ]}
      />
      <header className="bg-sand pb-12 pt-32 md:pt-44">
        <div className="container-x max-w-5xl">
          <Breadcrumbs items={[{ name: dict.common.breadcrumbHome, href: `/${locale}` }, { name: sectionName, href: `/${locale}/${base}` }, { name: title, href: path }]} />
          {story?.series && <p className="kicker mt-8 text-narra">{story.series}</p>}
          <h1 className="mt-4 text-[length:var(--text-h1)]">{title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-stone">{tr(a.description, locale)}</p>
          <p className="mt-6 text-sm text-stone">
            {story ? `${dict.stories.by} ${story.author} · ${story.readMinutes} ${dict.common.minRead} · ` : ""}
            {dict.common.updated} {date}
          </p>
        </div>
      </header>
      <div className="container-x">
        <Photo photo={a.photo} locale={locale} label={dict.common.photoToCome} priority showBrief className="aspect-[16/9] md:aspect-[21/9]" />
      </div>
      {fallback && <p className="container-x mt-6 text-sm text-stone">{dict.common.notTranslated}</p>}
      <article className="container-x grid gap-14 py-16 md:py-24 lg:grid-cols-12">
        {toc.length > 2 && (
          <nav aria-label={dict.destination.onThisPage} className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p className="kicker text-stone">{dict.destination.onThisPage}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {toc.map((h) => <li key={h.id}><a className="link-u" href={`#${h.id}`}>{h.title}</a></li>)}
              </ul>
            </div>
          </nav>
        )}
        <div className={toc.length > 2 ? "lg:col-span-7 lg:col-start-5" : "mx-auto max-w-3xl lg:col-span-12"}>
          <Prose text={body} />
          {a.insiders && a.insiders.length > 0 && (
            <div className="mt-14 grid gap-6">
              {a.insiders.map((n, i) => <InsiderNote key={i} note={n} locale={locale} dict={dict} />)}
            </div>
          )}
        </div>
      </article>
      <Faqs faqs={a.faqs ?? []} locale={locale} title={dict.common.faqs} />
      {(dests.length > 0 || journeys.length > 0) && (
        <section className="container-x pb-24">
          {journeys.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2">{journeys.map((j) => <JourneyCard key={j.slug} j={j} locale={locale} dict={dict} />)}</div>
          )}
          {dests.length > 0 && (
            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">{dests.map((d) => <DestinationCard key={d.slug} d={d} locale={locale} dict={dict} />)}</div>
          )}
          <Link href={`/${locale}/${base}`} className="kicker link-u mt-12 inline-block">← {sectionName}</Link>
        </section>
      )}
      <FinalCta locale={locale} dict={dict} />
    </>
  );
}
