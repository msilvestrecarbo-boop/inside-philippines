"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";

/**
 * Mobile: a slim sticky bar (Design my trip + WhatsApp) that appears after the hero.
 * Desktop: a quiet, text-led WhatsApp tab in the corner — no bouncing bubble.
 */
export function ContactBar({
  locale,
  designLabel,
  whatsappLabel,
  whatsappShort,
  whatsappHref,
}: {
  locale: string;
  designLabel: string;
  whatsappLabel: string;
  whatsappShort: string;
  whatsappHref: string;
}) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const onBuilder = pathname.endsWith("/design-my-trip");

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {!onBuilder && (
        <div
          className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-sand/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-500 md:hidden ${
            show ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex gap-3">
            <Link
              href={`/${locale}/design-my-trip`}
              onClick={() => track("design_trip_click", { placement: "mobile_sticky" })}
              className="btn btn-primary flex-1"
            >
              {designLabel}
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener"
              onClick={() => track("whatsapp_click", { placement: "mobile_sticky" })}
              className="btn btn-ghost border-ink/30 px-4"
            >
              {whatsappShort}
            </a>
          </div>
        </div>
      )}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener"
        onClick={() => track("whatsapp_click", { placement: "desktop_tab" })}
        className={`fixed bottom-6 end-6 z-40 hidden items-center gap-3 rounded-full border border-line bg-shell/95 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink shadow-sm backdrop-blur transition-all duration-500 hover:border-lagoon rtl:tracking-normal rtl:text-sm md:inline-flex ${
          show ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <span aria-hidden className="h-2 w-2 rounded-full bg-rice" />
        {whatsappLabel}
      </a>
    </>
  );
}
