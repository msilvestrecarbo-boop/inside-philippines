import { tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata, href } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { libraryPhoto } from "@/lib/photos";
import { site, whatsappHref } from "@/lib/site";
import { agencies as a } from "@/content/agencies";
import { Photo } from "@/components/ui/Photo";
import { Faqs } from "@/components/ui/Faqs";
import { JsonLd } from "@/components/ui/JsonLd";
import { ContactForm } from "@/components/layout/ContactForm";
import { TrackedA } from "@/components/layout/Tracking";

export async function generateMetadata({ params }: PageProps<"/[lang]/travel-agencies">) {
  const { locale } = await resolve(params);
  return buildMetadata({ locale, path: "/travel-agencies", title: tr(a.seo.title, locale), description: tr(a.seo.description, locale) });
}

export default async function TravelAgencies({ params }: PageProps<"/[lang]/travel-agencies">) {
  const { locale, dict } = await resolve(params);
  const hero = libraryPhoto("landing/private-boats", tr(a.title, locale));
  const t = dict.contact;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: dict.common.breadcrumbHome, path: href(locale) },
            { name: tr(a.menu, locale), path: href(locale, "/travel-agencies") },
          ]),
          faqSchema(a.faqs.map((f) => ({ q: tr(f.q, locale), a: tr(f.a, locale) }))),
        ]}
      />
      <section className="on-photo relative isolate flex min-h-[85svh] items-end overflow-hidden text-white">
        {hero && <Photo photo={hero} locale={locale} label={dict.common.photoToCome} priority className="absolute inset-0 -z-10" />}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/15 to-black/30" />
        <div className="container-x pb-16 md:pb-24">
          <p className="kicker text-white/80">{tr(a.kicker, locale)}</p>
          <h1 className="mt-4 max-w-4xl text-[length:var(--text-h1)]">{tr(a.title, locale)}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">{tr(a.intro, locale)}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#partner" className="btn btn-primary">{tr(a.formTitle, locale)}</a>
            <TrackedA href={whatsappHref(dict.whatsapp.message)} target="_blank" rel="noopener" event="whatsapp_click" params={{ placement: "agencies_hero" }} className="btn btn-ghost">
              {dict.whatsapp.label}
            </TrackedA>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <h2 className="text-[length:var(--text-h2)]">{tr(a.whyTitle, locale)}</h2>
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {a.why.map((w, i) => (
            <li key={i} className="border-t border-ink pt-5">
              <span className="font-display text-3xl text-narra">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl">{tr(w.title, locale)}</h3>
              <p className="mt-2 text-lg leading-relaxed text-stone">{tr(w.body, locale)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-shell py-20 md:py-28">
        <div className="container-x">
          <h2 className="text-[length:var(--text-h2)]">{tr(a.servicesTitle, locale)}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {a.services.map((s, i) => (
              <div key={i} className="rounded-card bg-white p-6">
                <h3 className="text-xl">{tr(s.title, locale)}</h3>
                <p className="mt-3 leading-relaxed text-stone">{tr(s.body, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <h2 className="text-[length:var(--text-h2)]">{tr(a.stepsTitle, locale)}</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {a.steps.map((s, i) => (
            <li key={i} className="border-t border-ink pt-5">
              <span className="font-display text-3xl text-narra">{i + 1}</span>
              <p className="mt-3 text-lg leading-relaxed">{tr(s, locale)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="partner" className="scroll-mt-24 bg-sand py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-[length:var(--text-h2)]">{tr(a.formTitle, locale)}</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-stone">{tr(a.formBody, locale)}</p>
            <p className="mt-8">
              <a className="link-u font-display text-2xl" href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <ContactForm
            locale={locale}
            t={{ name: t.name, email: dict.tripBuilder.q10.email, message: t.message, send: t.send, sent: t.sent, error: dict.tripBuilder.error, lastStep: dict.tripBuilder.lastStep }}
            whatsappBase={whatsappHref("").split("?")[0]}
            email={site.email}
            agencyLabel={tr(a.agencyLabel, locale)}
          />
        </div>
      </section>

      <Faqs faqs={a.faqs} locale={locale} title={tr(a.faqsTitle, locale)} />
    </>
  );
}
