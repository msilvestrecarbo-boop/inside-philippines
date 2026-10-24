import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Logo } from "@/components/brand/Logo";
import { Newsletter } from "./Newsletter";
import { site } from "@/lib/site";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.footer;
  const n = dict.nav;
  const L = (p: string) => `/${locale}${p}`;
  return (
    <footer className="bg-linen pb-28 pt-20 text-ink md:pb-12">
      <div className="container-x grid gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo variant="stacked" className="w-40" />
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-ink/75">{t.about}</p>
          <p className="mt-6 font-display text-xl italic text-ink/85">{dict.meta.tagline}</p>
        </div>
        <nav className="grid grid-cols-2 gap-8 text-sm md:col-span-4" aria-label="Footer">
          <div>
            <p className="font-display text-2xl">{t.explore}</p>
            <ul className="mt-4 space-y-2.5">
              <li><Link className="link-u" href={L("/destinations")}>{n.destinations}</Link></li>
              <li><Link className="link-u" href={L("/journeys")}>{n.journeys}</Link></li>
              <li><Link className="link-u" href={L("/experiences")}>{n.experiences}</Link></li>
              <li><Link className="link-u" href={L("/travel-guide")}>{n.guide}</Link></li>
              <li><Link className="link-u" href={L("/stories")}>{n.stories}</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-display text-2xl">{t.company}</p>
            <ul className="mt-4 space-y-2.5">
              <li><Link className="link-u" href={L("/about")}>{n.about}</Link></li>
              <li><Link className="link-u" href={L("/contact")}>{n.contact}</Link></li>
              <li><Link className="link-u" href={L("/design-my-trip")}>{n.designMyTrip}</Link></li>
              <li><a className="link-u" href={site.instagram} rel="noopener" target="_blank">Instagram</a></li>
              <li><a className="link-u" href={site.googleBusiness} rel="noopener" target="_blank">Google</a></li>
            </ul>
          </div>
        </nav>
        <div className="md:col-span-4">
          <Newsletter locale={locale} t={dict.newsletter} />
        </div>
      </div>
      <div className="container-x mt-16 flex flex-col gap-3 border-t border-ink/20 pt-6 text-xs text-ink/65 md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.legal.address}
        </p>
        <p className="flex gap-5">
          <Link className="link-u" href={L("/privacy")}>{t.privacy}</Link>
          <Link className="link-u" href={L("/terms")}>{t.terms}</Link>
        </p>
      </div>
    </footer>
  );
}
