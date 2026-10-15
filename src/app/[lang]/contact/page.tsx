import { resolve } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";
import { site, whatsappHref } from "@/lib/site";
import { PageHero } from "@/components/sections/Sections";
import { ContactForm } from "@/components/layout/ContactForm";
import { TrackedA, TrackedLink } from "@/components/layout/Tracking";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">) {
  const { locale, dict } = await resolve(params);
  return buildMetadata({ locale, path: "/contact", title: dict.contact.title, description: dict.contact.body });
}

export default async function Contact({ params }: PageProps<"/[lang]/contact">) {
  const { locale, dict } = await resolve(params);
  const t = dict.contact;
  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} body={t.body}>
        <TrackedLink href={`/${locale}/design-my-trip`} event="design_trip_click" params={{ placement: "contact" }} className="btn btn-primary">{dict.nav.designMyTrip}</TrackedLink>
      </PageHero>
      <section className="container-x grid gap-16 py-20 md:grid-cols-2 md:py-28">
        <dl className="space-y-8">
          <div>
            <dt className="kicker text-stone">{t.whatsapp}</dt>
            <dd className="mt-2 font-display text-3xl">
              <TrackedA href={whatsappHref(dict.whatsapp.message)} target="_blank" rel="noopener" event="whatsapp_click" params={{ placement: "contact" }} className="link-u">
                {site.whatsapp ? `+${site.whatsapp}` : "[+63 WhatsApp number]"}
              </TrackedA>
            </dd>
          </div>
          <div>
            <dt className="kicker text-stone">{t.email}</dt>
            <dd className="mt-2 font-display text-3xl"><a className="link-u" href={`mailto:${site.email}`}>{site.email}</a></dd>
          </div>
          <div>
            <dt className="kicker text-stone">{t.hours}</dt>
            <dd className="mt-2">{t.hoursValue}</dd>
          </div>
          <div className="border-s-2 border-clay ps-5">
            <dt className="kicker text-clay-dark">{t.emergency}</dt>
            <dd className="mt-2">{t.emergencyBody}</dd>
          </div>
          <div>
            <dt className="kicker text-stone">{dict.about.officeTitle}</dt>
            <dd className="mt-2">{site.legal.address}</dd>
          </div>
        </dl>
        <div>
          <h2 className="text-[length:var(--text-h3)]">{t.formTitle}</h2>
          <div className="mt-8">
            <ContactForm locale={locale} t={{ name: t.name, email: dict.tripBuilder.q10.email, message: t.message, send: t.send, sent: t.sent, error: dict.tripBuilder.error }} />
          </div>
        </div>
      </section>
    </>
  );
}
