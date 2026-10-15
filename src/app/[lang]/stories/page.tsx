import { resolve } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";
import { getStories } from "@/lib/content";
import { ArticleCard } from "@/components/cards/Cards";
import { PageHero } from "@/components/sections/Sections";
import { FinalCta } from "@/components/layout/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[lang]/stories">) {
  const { locale, dict } = await resolve(params);
  return buildMetadata({ locale, path: "/stories", title: `${dict.stories.kicker} — ${dict.stories.title}`, description: dict.stories.body });
}

export default async function Stories({ params }: PageProps<"/[lang]/stories">) {
  const { locale, dict } = await resolve(params);
  const list = [...getStories()].sort((a, b) => (a.status === b.status ? 0 : a.status === "published" ? -1 : 1));
  return (
    <>
      <PageHero kicker={dict.stories.kicker} title={dict.stories.title} body={dict.stories.body} />
      <section className="container-x grid gap-x-10 gap-y-16 py-20 sm:grid-cols-2 md:py-28 lg:grid-cols-3">
        {list.map((s) => <ArticleCard key={s.slug} a={s} locale={locale} dict={dict} base="stories" />)}
      </section>
      <FinalCta locale={locale} dict={dict} />
    </>
  );
}
