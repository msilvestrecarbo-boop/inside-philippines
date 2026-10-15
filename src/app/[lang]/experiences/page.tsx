import { resolve } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";
import { getCategories } from "@/lib/content";
import { CategoryCard } from "@/components/cards/Cards";
import { PageHero } from "@/components/sections/Sections";
import { FinalCta } from "@/components/layout/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[lang]/experiences">) {
  const { locale, dict } = await resolve(params);
  const t = dict.experiencesPage;
  return buildMetadata({ locale, path: "/experiences", title: `${t.kicker} — ${t.title}`, description: t.body });
}

export default async function Experiences({ params }: PageProps<"/[lang]/experiences">) {
  const { locale, dict } = await resolve(params);
  const t = dict.experiencesPage;
  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} body={t.body} />
      <section className="container-x grid gap-6 py-20 sm:grid-cols-2 md:py-28 lg:grid-cols-4">
        {getCategories().map((c) => <CategoryCard key={c.slug} cat={c} locale={locale} dict={dict} />)}
      </section>
      <FinalCta locale={locale} dict={dict} />
    </>
  );
}
