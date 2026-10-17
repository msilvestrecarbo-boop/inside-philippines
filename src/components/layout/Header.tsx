"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { CurrencySwitcher, LanguageSwitcher } from "./Switchers";
import type { Locale } from "@/i18n/config";
import { track } from "@/lib/analytics";

export type HeaderLabels = {
  destinations: string;
  journeys: string;
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
    ["experiences", t.experiences],
    ["travel-guide", t.guide],
    ["stories", t.stories],
    ["about", t.about],
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
            className={`flex items-center gap-1 rounded-full p-1 text-[0.85rem] uppercase tracking-[0.02em] backdrop-blur-sm transition-colors duration-500 rtl:tracking-normal rtl:text-[0.95rem] ${
              solid ? "bg-shell" : "bg-black/25"
            }`}
          >
            {nav.map(([slug, label]) => {
              const active = pathname.startsWith(`/${locale}/${slug}`);
              return (
                <li key={slug}>
                  <Link
                    href={`/${locale}/${slug}`}
                    className={`block rounded-full px-3.5 py-1.5 transition-colors 2xl:px-4 duration-300 ${
                      active ? (solid ? "bg-white" : "bg-white/25") : solid ? "hover:bg-white/70" : "hover:bg-white/15"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
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
