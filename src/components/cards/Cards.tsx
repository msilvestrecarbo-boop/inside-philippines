import Link from "next/link";
import type { Destination, Journey, ExperienceCategory, GuideArticle } from "@/content/types";
import { tr, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Photo } from "@/components/ui/Photo";
import { Price } from "@/components/layout/CurrencyProvider";
import { lowestPrice, placeName } from "@/lib/content";

export function destName(d: Destination, locale: Locale) {
  return (locale === "ru" || locale === "ar" ? d.nameLocal?.[locale] : undefined) ?? d.name;
}

/** Round outlined arrow used on photo cards. */
export function ArrowDot({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`arrow-dot ${className}`}>
      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M4.5 11.5l7-7M5.5 4.5h6v6" /></svg>
    </span>
  );
}

export function DestinationCard({ d, locale, dict, priority = false }: { d: Destination; locale: Locale; dict: Dictionary; priority?: boolean }) {
  const c = dict.common;
  return (
    <article className="group relative flex flex-col">
      <div className="relative isolate overflow-hidden rounded-card text-white">
        <Photo photo={d.photo} locale={locale} label={c.photoToCome} priority={priority} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 90vw" className="aspect-[4/5] transition-transform duration-[1.2s] ease-[var(--ease-soft)] group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
          <div>
            <h3 className="text-[length:var(--text-h3)]">
              <Link href={`/${locale}/destinations/${d.slug}`} className="after:absolute after:inset-0">{destName(d, locale)}</Link>
            </h3>
            <p className="mt-1 text-sm text-white/80">{dict.destination.insideLabel}</p>
          </div>
          <ArrowDot />
        </div>
      </div>
      <div className="pt-5">
        <p className="leading-relaxed text-stone">{tr(d.short, locale)}</p>
        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-4 text-sm">
          <div className="col-span-2">
            <dt className="kicker text-[0.62rem] text-stone">{c.whyGo}</dt>
            <dd className="mt-1">{tr(d.whyGo, locale)}</dd>
          </div>
          <div className="col-span-2">
            <dt className="kicker text-[0.62rem] text-stone">{c.bestFor}</dt>
            <dd className="mt-1">{tr(d.bestFor, locale).join(" · ")}</dd>
          </div>
          <div>
            <dt className="kicker text-[0.62rem] text-stone">{c.howManyNights}</dt>
            <dd className="mt-1">{d.nights} {c.nights}</dd>
          </div>
          <div>
            <dt className="kicker text-[0.62rem] text-stone">{c.bestSeason}</dt>
            <dd className="mt-1">{tr(d.bestSeason, locale)}</dd>
          </div>
        </dl>
        <span className="btn btn-ghost relative mt-6 min-h-0 self-start px-6 py-2 text-[0.8rem]">{c.explore} →</span>
      </div>
    </article>
  );
}

export function JourneyCard({ j, locale, dict, wide = false }: { j: Journey; locale: Locale; dict: Dictionary; wide?: boolean }) {
  const c = dict.common;
  const price = lowestPrice(j);
  return (
    <article className={`group relative flex flex-col overflow-hidden rounded-card bg-white shadow-[0_10px_30px_-14px_rgb(0_0_0/0.15)] ${wide ? "md:flex-row" : ""}`}>
      <div className={`overflow-hidden ${wide ? "md:w-3/5" : ""}`}>
        <Photo photo={j.photo} locale={locale} label={c.photoToCome} sizes="(min-width:1024px) 40vw, 90vw" className={`${wide ? "aspect-[16/10] md:h-full" : "aspect-[16/11]"} transition-transform duration-[1.2s] group-hover:scale-[1.03]`} />
      </div>
      <div className={`flex flex-1 flex-col p-6 md:p-8 ${wide ? "md:w-2/5" : ""}`}>
        <p className="kicker text-narra">
          {j.days} {c.days} · {j.styles.map((s) => dict.tiers[s].name).join(" / ")}
        </p>
        <h3 className="mt-3 text-[length:var(--text-h3)]">
          <Link href={`/${locale}/journeys/${j.slug}`} className="after:absolute after:inset-0">{tr(j.title, locale)}</Link>
        </h3>
        <p className="mt-2 text-sm font-medium tracking-wide text-ink/80" dir="ltr">{j.route.map((r) => placeName(r, locale)).join(" • ")}</p>
        <p className="mt-4 flex-1 leading-relaxed text-stone">{tr(j.short, locale)}</p>
        <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-4">
          {price ? (
            <p className="text-sm">
              <span className="text-stone">{c.from} </span>
              <span className="font-display text-2xl"><Price eur={price} /></span>
              <span className="block text-[0.7rem] text-stone">{c.perPerson} · {j.priceIsPlaceholder ? c.indicativePrice : ""}</span>
            </p>
          ) : <span />}
          <span className="btn btn-ink min-h-0 shrink-0 px-5 py-2 text-[0.8rem]">{c.viewJourney} →</span>
        </div>
      </div>
    </article>
  );
}

export function CategoryCard({ cat, locale, dict }: { cat: ExperienceCategory; locale: Locale; dict: Dictionary }) {
  return (
    <Link href={`/${locale}/experiences/${cat.slug}`} className="group relative block overflow-hidden rounded-card text-white">
      <Photo photo={cat.photo} locale={locale} label={dict.common.photoToCome} sizes="(min-width:1024px) 25vw, 70vw" className="aspect-[3/4] transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div>
          <h3 className="text-[1.6rem]">{tr(cat.title, locale)}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-white/80">{tr(cat.short, locale)}</p>
        </div>
        <ArrowDot className="h-9 w-9" />
      </div>
    </Link>
  );
}

export function ArticleCard({ a, locale, dict, base }: { a: GuideArticle; locale: Locale; dict: Dictionary; base: "travel-guide" | "stories" }) {
  const published = a.status === "published";
  const inner = (
    <>
      <div className="overflow-hidden rounded-card">
        <Photo photo={a.photo} locale={locale} label={dict.common.photoToCome} sizes="(min-width:1024px) 30vw, 90vw" className="aspect-[3/2] transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
      </div>
      <div className="pt-4">
        {!published && <p className="kicker text-stone">{dict.common.comingSoon}</p>}
        <h3 className="mt-1 text-[1.5rem] leading-tight">{tr(a.title, locale)}</h3>
        <p className="mt-2 text-sm leading-relaxed text-stone line-clamp-3">{tr(a.description, locale)}</p>
      </div>
    </>
  );
  return published ? (
    <Link href={`/${locale}/${base}/${a.slug}`} className="group block">{inner}</Link>
  ) : (
    <div className="opacity-60">{inner}</div>
  );
}
