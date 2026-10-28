import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { TierId } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/layout/Tracking";
import { Photo } from "@/components/ui/Photo";
import { libraryPhoto, withPhoto } from "@/lib/photos";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  const t = dict.howItWorks;
  return (
    <section className="container-x py-24 md:py-32" aria-labelledby="how">
      <SectionHeading id="how" kicker={t.kicker} title={t.title} />
      <ol className="mt-14 grid gap-4 md:grid-cols-5">
        {t.steps.map((s, i) => (
          <li key={i} className="rounded-card bg-shell p-6 md:p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-lg text-white">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-6 text-[1.35rem]">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function WhyUs({ dict }: { dict: Dictionary }) {
  const t = dict.why;
  return (
    <section className="bg-shell" aria-labelledby="why">
      <div className="container-x py-24 md:py-32">
        <SectionHeading id="why" kicker={t.kicker} title={t.title} align="center" />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((it, i) => (
            <Reveal key={i} className="h-full">
              <div className="h-full rounded-card bg-white p-7 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.12)] md:p-8">
                <h3 className="text-[1.4rem]">{it.title}</h3>
                <p className="mt-3 leading-relaxed text-stone">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Tiers({ dict, highlight }: { dict: Dictionary; highlight?: TierId[] }) {
  const ids: TierId[] = ["essential", "boutique", "premium", "signature"];
  return (
    <section className="container-x py-24 md:py-32" aria-labelledby="tiers">
      <SectionHeading id="tiers" kicker={dict.home.tiersKicker} title={dict.home.tiersTitle} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ids.map((id, i) => {
          const t = dict.tiers[id];
          const on = !highlight || highlight.includes(id);
          return (
            <div key={id} className={`flex flex-col rounded-card border border-line p-7 transition-opacity ${on ? "bg-shell" : "opacity-50"}`}>
              <p className="font-display text-4xl text-narra/80">{"I".repeat(i + 1).replace("IIII", "IV")}</p>
              <h3 className="mt-6 text-3xl">{t.name}</h3>
              <p className="mt-2 font-medium">{t.line}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone">{t.body}</p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-5 text-sm">
                {t.includes.map((x, k) =>
                  k === 0 && i > 0 ? (
                    <li key={k} className="text-xs font-semibold uppercase tracking-[0.08em] text-clay-dark rtl:tracking-normal">{x}</li>
                  ) : (
                    <li key={k} className="flex gap-2.5 leading-snug">
                      <span aria-hidden className="mt-px shrink-0 font-semibold text-rice">✓</span>
                      <span>{x}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Trust({ dict }: { dict: Dictionary }) {
  const t = dict.trust;
  return (
    <section className="container-x py-24 md:py-32" aria-labelledby="trust">
      <SectionHeading id="trust" kicker={t.kicker} title={t.title} />
      <p className="mt-6 inline-block border border-dashed border-clay px-3 py-1 text-xs text-clay-dark">{t.placeholderNote}</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.items.map((it, i) => (
          <div key={i} className="rounded-card bg-shell p-6">
            <h3 className="text-[1.4rem]">{it.title}</h3>
            <p className="mt-2 text-sm text-stone">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PageHero({
  kicker,
  title,
  body,
  children,
  tone = "lagoon",
  locale = "en",
  photo,
}: {
  kicker?: string;
  title: string;
  body?: string;
  children?: React.ReactNode;
  tone?: "lagoon" | "sand";
  locale?: Locale;
  /** Library photo key (e.g. "destination/coron"); defaults to the site hero. */
  photo?: string;
}) {
  const own = photo ? libraryPhoto(photo, "") : undefined;
  const dark = tone === "lagoon";
  if (!dark) {
    return (
      <section className="bg-sand pb-16 pt-36 md:pb-24 md:pt-48">
        <div className="container-x">
          {children}
          {kicker && <p className="kicker mt-6 text-narra">{kicker}</p>}
          <h1 className="mt-4 max-w-4xl text-[length:var(--text-h1)]">{title}</h1>
          {body && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">{body}</p>}
        </div>
      </section>
    );
  }
  return (
    <section className="on-photo relative isolate overflow-hidden pb-16 pt-36 text-white md:pb-24 md:pt-48">
      <Photo
        locale={locale}
        label=""
        className="absolute inset-0 -z-10"
        sizes="100vw"
        photo={own ?? withPhoto("site", "hero", {
          tone: "lagoon",
          alt: {
            en: "Aerial view of turquoise water between limestone cliffs in El Nido, Palawan",
            fr: "Vue aérienne d'une eau turquoise entre des falaises calcaires à El Nido, Palawan",
            es: "Vista aérea de agua turquesa entre acantilados de piedra caliza en El Nido, Palawan",
            ru: "Вид сверху на бирюзовую воду среди известняковых скал в Эль-Нидо, Палаван",
            ar: "منظر جوي لمياه فيروزية بين منحدرات الحجر الجيري في إل نيدو، بالاوان",
          },
          brief: "",
        })}
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <div className="container-x">
        {children}
        {kicker && <p className="kicker mt-6 text-white/75">{kicker}</p>}
        <h1 className="mt-4 max-w-4xl text-[length:var(--text-h1)]">{title}</h1>
        {body && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{body}</p>}
      </div>
    </section>
  );
}
