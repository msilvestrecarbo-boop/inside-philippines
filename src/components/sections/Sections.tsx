import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { TierId } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/layout/Tracking";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  const t = dict.howItWorks;
  return (
    <section className="container-x py-24 md:py-32" aria-labelledby="how">
      <SectionHeading id="how" kicker={t.kicker} title={t.title} />
      <ol className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-5">
        {t.steps.map((s, i) => (
          <li key={i} className="bg-sand p-6 md:p-7">
            <span className="font-display text-5xl text-narra">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-6 font-sans text-sm font-semibold uppercase tracking-[0.14em] rtl:tracking-normal">{s.title}</h3>
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
    <section className="bg-lagoon text-white" aria-labelledby="why">
      <div className="container-x py-24 md:py-32">
        <SectionHeading id="why" kicker={t.kicker} title={t.title} tone="light" />
        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((it, i) => (
            <Reveal key={i}>
              <div className="border-t border-white/25 pt-5">
                <h3 className="kicker text-white">{it.title}</h3>
                <p className="mt-3 leading-relaxed text-white/75">{it.body}</p>
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
            <div key={id} className={`flex flex-col border border-line p-7 transition-opacity ${on ? "bg-shell" : "opacity-50"}`}>
              <p className="font-display text-5xl text-narra/70">{"I".repeat(i + 1).replace("IIII", "IV")}</p>
              <h3 className="mt-6 text-3xl">{t.name}</h3>
              <p className="mt-2 font-medium">{t.line}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone">{t.body}</p>
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
          <div key={i} className="border-t border-line pt-5">
            <h3 className="font-display text-2xl">{it.title}</h3>
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
}: {
  kicker?: string;
  title: string;
  body?: string;
  children?: React.ReactNode;
  tone?: "lagoon" | "sand";
  locale?: Locale;
}) {
  const dark = tone === "lagoon";
  return (
    <section className={`${dark ? "bg-lagoon-deep text-white" : "bg-sand"} pb-16 pt-36 md:pb-24 md:pt-48`}>
      <div className="container-x">
        {children}
        {kicker && <p className={`kicker mt-6 ${dark ? "text-white/70" : "text-narra"}`}>{kicker}</p>}
        <h1 className="mt-4 max-w-5xl text-[length:var(--text-h1)]">{title}</h1>
        {body && <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-white/80" : "text-stone"}`}>{body}</p>}
      </div>
    </section>
  );
}
