import { resolve } from "@/lib/i18n-server";
import { RetreatTypePage, retreatTypeMetadata } from "@/components/sections/RetreatType";

export async function generateMetadata({ params }: PageProps<"/[lang]/group-retreats">) {
  const { locale } = await resolve(params);
  return retreatTypeMetadata("group-retreats", locale);
}

export default async function Page({ params }: PageProps<"/[lang]/group-retreats">) {
  const { locale, dict } = await resolve(params);
  return <RetreatTypePage slug="group-retreats" locale={locale} dict={dict} />;
}
