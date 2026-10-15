import { notFound } from "next/navigation";
import { locales, tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata, translatedLocales } from "@/lib/seo";
import { getGuide, getGuides } from "@/lib/content";
import { ArticlePage } from "@/components/sections/Article";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => getGuides().filter((g) => g.status === "published").map((g) => ({ lang, slug: g.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/travel-guide/[slug]">) {
  const { slug } = await params;
  const { locale } = await resolve(params);
  const a = getGuide(slug);
  if (!a) return {};
  return buildMetadata({ locale, path: `/travel-guide/${slug}`, title: tr(a.title, locale), description: tr(a.description, locale), type: "article", publishedTime: a.updated, translated: translatedLocales(a.body, a.title) });
}

export default async function GuideArticlePage({ params }: PageProps<"/[lang]/travel-guide/[slug]">) {
  const { slug } = await params;
  const { locale, dict } = await resolve(params);
  const a = getGuide(slug);
  if (!a) notFound();
  return <ArticlePage a={a} locale={locale} dict={dict} base="travel-guide" sectionName={dict.nav.guide} />;
}
