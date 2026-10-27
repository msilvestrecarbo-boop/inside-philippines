"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { CurrencySwitcher, LanguageSwitcher } from "./Switchers";
import { tr, type Locale } from "@/i18n/config";
import { agencies } from "@/content/agencies";
import { track } from "@/lib/analytics";

export type HeaderLabels = {
  destinations: string;
  journeys: string;
  retreats: string;
  retreatsMenu: { href: string; label: string }[];
  experiences: string;
  guide: string;
  stories: string;
  about: string;
  contact: string;
  designMyTrip: string;
  menu: string;
  close: string;
  language: string;
  currency: string;
  whatsapp: string;
};

const SOLID_PATHS = ["/design-my-trip", "/privacy", "/terms"];

export function Header({ locale, t, whatsappHref }: { locale: Locale; t: HeaderLabels; whatsappHref: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solidRoute = SOLID_PATHS.some((p) => pathname.endsWith(p));
  const solid = scrolled || solidRoute || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const nav = [
    ["destinations", t.destinations],
    ["journeys", t.journeys],
    ["wellness-retreats", t.retreats],
    ["experiences", t.experiences],
    ["travel-guide", t.guide],
    ["stories", t.stories],
    ["about", t.about],
    ["travel-agencies", tr(agencies.navLabel, locale)],
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-white/95 text-ink shadow-[0_1px_0_var(--color-line)] backdrop-blur" : "bg-transparent text-white"
      }`}
    >
      <div className={`container-x flex h-16 items-center justify-between gap-6 transition-[height] duration-500 ${solid ? "md:h-20" : "md:h-24"}`}>
        <Link href={`/${locale}`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul
            className={`flex items-center gap-0.5 whitespace-nowrap rounded-full p-1 text-[0.78rem] uppercase 2xl:gap-1 2xl:text-[0.85rem] tracking-[0.02em] backdrop-blur-sm transition-colors duration-500 rtl:tracking-normal rtl:text-[0.95rem] ${
              solid ? "bg-shell" : "bg-black/25"
            }`}
          >
            {nav.map(([slug, label]) => {
              const active = pathname.startsWith(`/${locale}/${slug}`);
              const sub = slug === "wellness-retreats" ? t.retreatsMenu : null;
              return (
                <li key={slug} className={sub ? "group relative" : undefined}>
                  <Link
                    href={`/${locale}/${slug}`}
                    className={`block rounded-full px-2.5 py-1.5 transition-colors 2xl:px-4 duration-300 ${
                      active ? (solid ? "bg-white" : "bg-white/25") : solid ? "hover:bg-white/70" : "hover:bg-white/15"
                    }`}
                    aria-current={active ? "page" : undefined}
                    aria-haspopup={sub ? "true" : undefined}
                  >
                    {label}
                    {sub && <span aria-hidden className="ms-1 text-[0.6rem]">▾</span>}
                  </Link>
                  {sub && (
                    <div className="invisible absolute start-0 top-full pt-2 opacity-0 transition-opacity duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <ul className="min-w-56 rounded-2xl bg-white p-2 text-[0.85rem] normal-case tracking-normal text-ink shadow-[0_12px_30px_-10px_rgb(0_0_0/0.25)]">
                        {sub.map((m) => (
                          <li key={m.href}>
                            <Link href={`/${locale}/${m.href}`} className="block rounded-xl px-4 py-2.5 hover:bg-shell">
                              {m.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 md:flex">
            <LanguageSwitcher locale={locale} label={t.language} />
            <CurrencySwitcher label={t.currency} />
          </div>
          <Link
            href={`/${locale}/design-my-trip`}
            onClick={() => track("design_trip_click", { placement: "header" })}
            className={`btn hidden min-h-0 px-6 py-3 sm:inline-flex ${solid ? "btn-ink" : "btn-light"}`}
          >
            {t.designMyTrip}
          </Link>
          <button
            type="button"
            className="kicker -me-2 p-2 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t.close : t.menu}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 top-16 z-40 flex flex-col overflow-y-auto bg-white px-5 pb-28 pt-8 text-ink xl:hidden">
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map(([slug, label]) => (
                <li key={slug}>
                  <Link href={`/${locale}/${slug}`} className="block py-2 font-display text-4xl">
                    {label}
                  </Link>
                  {slug === "wellness-retreats" && (
                    <ul className="mb-2 ms-1 space-y-1 border-s border-line ps-4">
                      {t.retreatsMenu.slice(1).map((m) => (
                        <li key={m.href}>
                          <Link href={`/${locale}/${m.href}`} className="block py-1 text-lg text-stone">
                            {m.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link href={`/${locale}/contact`} className="block py-2 font-display text-4xl">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-10 flex gap-8 border-t border-line pt-6">
            <LanguageSwitcher locale={locale} label={t.language} />
            <CurrencySwitcher label={t.currency} />
          </div>
          <a href={whatsappHref} target="_blank" rel="noopener" onClick={() => track("whatsapp_click", { placement: "menu" })} className="btn btn-ghost mt-8">
            {t.whatsapp}
          </a>
        </div>
      )}
    </header>
  );
}
