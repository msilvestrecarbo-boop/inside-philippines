import { resolve } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";
import { getGuides } from "@/lib/content";
import { ArticleCard } from "@/components/cards/Cards";
import { PageHero } from "@/components/sections/Sections";
import { FinalCta } from "@/components/layout/FinalCta";
import type { GuideArticle } from "@/content/types";

export async function generateMetadata({ params }: PageProps<"/[lang]/travel-guide">) {
  const { locale, dict } = await resolve(params);
  const t = dict.guide;
  return buildMetadata({ locale, path: "/travel-guide", title: `${t.kicker} — ${t.title}`, description: t.body });
}

export default async function Guide({ params }: PageProps<"/[lang]/travel-guide">) {
  const { locale, dict } = await resolve(params);
  const t = dict.guide;
  const groups = Object.keys(t.groups) as GuideArticle["group"][];
  const all = getGuides();
  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} body={t.body}>
        <nav aria-label="Topics" className="flex flex-wrap gap-3">
          {groups.map((g) => <a key={g} href={`#${g}`} className="kicker rounded-full border border-white/30 px-4 py-2 text-white/85 hover:bg-white/10">{t.groups[g]}</a>)}
        </nav>
      </PageHero>
      {groups.map((g) => {
        const list = all.filter((a) => a.group === g).sort((a, b) => (a.status === b.status ? 0 : a.status === "published" ? -1 : 1));
        if (!list.length) return null;
        return (
          <section key={g} id={g} className="container-x scroll-mt-24 py-14 md:py-20">
            <h2 className="border-b border-line pb-4 text-[length:var(--text-h2)]">{t.groups[g]}</h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((a) => <ArticleCard key={a.slug} a={a} locale={locale} dict={dict} base="travel-guide" />)}
            </div>
          </section>
        );
      })}
      <FinalCta locale={locale} dict={dict} />
    </>
  );
}
