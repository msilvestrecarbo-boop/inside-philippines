import { tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata, href } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { practicalFaq } from "@/content/extras";
import { Faqs } from "@/components/ui/Faqs";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/sections/Sections";
import { FinalCta } from "@/components/layout/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[lang]/faq">) {
  const { locale } = await resolve(params);
  return buildMetadata({ locale, path: "/faq", title: tr(practicalFaq.seoTitle, locale), description: tr(practicalFaq.intro, locale) });
}

export default async function Faq({ params }: PageProps<"/[lang]/faq">) {
  const { locale, dict } = await resolve(params);
  const f = practicalFaq;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: dict.common.breadcrumbHome, path: href(locale) }, { name: tr(f.kicker, locale), path: href(locale, "/faq") }]),
          faqSchema(f.faqs.map((x) => ({ q: tr(x.q, locale), a: tr(x.a, locale) }))),
        ]}
      />
      <PageHero locale={locale} kicker={tr(f.kicker, locale)} title={tr(f.title, locale)} body={tr(f.intro, locale)} />
      <Faqs faqs={f.faqs} locale={locale} title={tr(f.kicker, locale)} />
      <FinalCta locale={locale} dict={dict} />
    </>
  );
}
