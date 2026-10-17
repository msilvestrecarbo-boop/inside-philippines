import type { FAQ } from "@/content/types";
import { tr, type Locale } from "@/i18n/config";

export function Faqs({ faqs, locale, title }: { faqs: FAQ[]; locale: Locale; title: string }) {
  if (!faqs.length) return null;
  return (
    <section className="container-x py-20 md:py-28" aria-labelledby="faqs">
      <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <h2 id="faqs" className="text-[length:var(--text-h2)]">{title}</h2>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => (
            <details key={i} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-[1.3rem] leading-snug [&::-webkit-details-marker]:hidden">
                <span>{i + 1}. {tr(f.q, locale)}</span>
                <span aria-hidden className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line font-sans text-base text-narra transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-stone">{tr(f.a, locale)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
