import { notFound } from "next/navigation";
import { locales, tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata, translatedLocales } from "@/lib/seo";
import { getStories, getStory } from "@/lib/content";
import { ArticlePage } from "@/components/sections/Article";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => getStories().filter((s) => s.status === "published").map((s) => ({ lang, slug: s.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/stories/[slug]">) {
  const { slug } = await params;
  const { locale } = await resolve(params);
  const a = getStory(slug);
  if (!a) return {};
  return buildMetadata({ locale, path: `/stories/${slug}`, title: tr(a.title, locale), description: tr(a.description, locale), type: "article", publishedTime: a.updated, translated: translatedLocales(a.body, a.title) });
}

export default async function StoryPage({ params }: PageProps<"/[lang]/stories/[slug]">) {
  const { slug } = await params;
  const { locale, dict } = await resolve(params);
  const a = getStory(slug);
  if (!a) notFound();
  return <ArticlePage a={a} locale={locale} dict={dict} base="stories" sectionName={dict.nav.stories} />;
}
