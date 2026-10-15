import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { TrackedA, TrackedLink } from "./Tracking";
import { whatsappHref } from "@/lib/site";
import { Photo } from "@/components/ui/Photo";

/** Every important page ends here. `query` pre-fills the trip builder. */
export function FinalCta({ locale, dict, query = "", title }: { locale: Locale; dict: Dictionary; query?: string; title?: string }) {
  const t = dict.finalCta;
  return (
    <section className="relative isolate overflow-hidden text-white">
      <Photo
        locale={locale}
        label={dict.common.photoToCome}
        className="absolute inset-0 -z-10"
        sizes="100vw"
        photo={{ tone: "dusk", alt: { en: "A banca boat at dusk off a Philippine island" }, brief: "Outrigger banca drifting at dusk, silhouetted karst behind, warm low sun, no people facing camera." }}
      />
      <div className="absolute inset-0 -z-10 bg-black/35" />
      <div className="container-x py-28 text-center md:py-40">
        <h2 className="mx-auto max-w-4xl text-[length:var(--text-h1)]">{title ?? t.title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">{t.body}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <TrackedLink href={`/${locale}/design-my-trip${query}`} event="design_trip_click" params={{ placement: "final_cta" }} className="btn btn-primary w-full sm:w-auto">
            {t.primary}
          </TrackedLink>
          <TrackedA href={whatsappHref(dict.whatsapp.message)} target="_blank" rel="noopener" event="whatsapp_click" params={{ placement: "final_cta" }} className="btn btn-ghost w-full sm:w-auto">
            {t.secondary}
          </TrackedA>
        </div>
      </div>
    </section>
  );
}
