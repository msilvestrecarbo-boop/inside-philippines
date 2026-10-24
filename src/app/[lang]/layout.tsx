import "../globals.css";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, localeMeta, tr } from "@/i18n/config";
import { retreatsMenuAll, retreatTypes } from "@/content/retreats";
import { getDictionary } from "@/i18n/dictionaries";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactBar } from "@/components/layout/ContactBar";
import { Analytics } from "@/components/layout/Analytics";
import { CurrencyProvider } from "@/components/layout/CurrencyProvider";
import { JsonLd } from "@/components/ui/JsonLd";
import { defaultCurrency } from "@/lib/currency";
import { site, whatsappHref } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#f5f0e8",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.defaultTitle, template: `%s · ${site.name}` },
    description: dict.meta.defaultDescription,
    applicationName: site.name,
    icons: {
      icon: [
        { url: "/brand/mark.svg", type: "image/svg+xml" },
        { url: "/brand/icon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: "/brand/apple-touch-icon.png",
    },
    verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
    formatDetection: { telephone: false },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const n = dict.nav;
  const wa = whatsappHref(dict.whatsapp.message);

  return (
    <html lang={lang} dir={localeMeta[lang].dir}>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
          {n.skipToContent}
        </a>
        <CurrencyProvider initial={defaultCurrency(lang)} locale={lang}>
          <Header
            locale={lang}
            whatsappHref={wa}
            t={{
              destinations: n.destinations,
              journeys: n.journeys,
              retreats: n.retreats,
              retreatsMenu: [
                { href: "wellness-retreats", label: tr(retreatsMenuAll, lang) },
                ...retreatTypes.map((r) => ({ href: r.slug, label: tr(r.menu, lang) })),
              ],
              experiences: n.experiences,
              guide: n.guide,
              stories: n.stories,
              about: n.about,
              contact: n.contact,
              designMyTrip: n.designMyTrip,
              menu: n.menu,
              close: n.close,
              language: n.language,
              currency: n.currency,
              whatsapp: dict.whatsapp.label,
            }}
          />
          <main id="main">{children}</main>
          <Footer locale={lang} dict={dict} />
          <ContactBar locale={lang} designLabel={n.designMyTrip} whatsappLabel={dict.whatsapp.label} whatsappShort={dict.whatsapp.short} whatsappHref={wa} />
        </CurrencyProvider>
        <Analytics text={dict.consent.text} accept={dict.consent.accept} decline={dict.consent.decline} />
        <JsonLd data={[organizationSchema(), websiteSchema(lang)]} />
      </body>
    </html>
  );
}
