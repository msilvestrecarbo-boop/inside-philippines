import { resolve } from "@/lib/i18n-server";
import { RetreatTypePage, retreatTypeMetadata } from "@/components/sections/RetreatType";

export async function generateMetadata({ params }: PageProps<"/[lang]/corporate-retreats">) {
  const { locale } = await resolve(params);
  return retreatTypeMetadata("corporate-retreats", locale);
}

export default async function Page({ params }: PageProps<"/[lang]/corporate-retreats">) {
  const { locale, dict } = await resolve(params);
  return <RetreatTypePage slug="corporate-retreats" locale={locale} dict={dict} />;
}
