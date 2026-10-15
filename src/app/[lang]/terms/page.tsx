import { resolve } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">) {
  const { locale, dict } = await resolve(params);
  return buildMetadata({ locale, path: "/terms", title: dict.footer.terms, description: dict.footer.terms, noindex: true });
}

/** PLACEHOLDER — legal text must be written by a lawyer (GDPR/UK GDPR, PH Data Privacy Act 2012, UAE PDPL). */
export default async function Page({ params }: PageProps<"/[lang]/terms">) {
  const { dict } = await resolve(params);
  return (
    <section className="container-x max-w-3xl pb-24 pt-36">
      <h1 className="text-[length:var(--text-h1)]">{dict.footer.terms}</h1>
      <p className="mt-8 inline-block border border-dashed border-clay px-3 py-1 text-sm text-clay-dark">{dict.trust.placeholderNote}</p>
      <p className="mt-8 leading-relaxed text-stone">
        [{site.legal.companyName}] — {("terms" as string) === "privacy" ? "Privacy policy covering trip-request data, CRM (HubSpot), analytics cookies, WhatsApp, retention periods and data-subject rights under GDPR, UK GDPR, the Philippine Data Privacy Act of 2012 and the UAE PDPL." : "Booking terms: deposits, payment schedule, cancellation and amendment policy, supplier terms, travel insurance requirement, liability and governing law."}
      </p>
    </section>
  );
}
