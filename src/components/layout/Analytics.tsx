"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { captureUtm } from "@/lib/analytics";

const GA4 = process.env.NEXT_PUBLIC_GA4_ID || "G-PXD1M7JLCB";
const GTM = process.env.NEXT_PUBLIC_GTM_ID;
const ADS = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const META = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const TIKTOK = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
const anyConfigured = !!(GA4 || GTM || ADS || META || TIKTOK);

type Consent = "granted" | "denied" | null;

/**
 * Consent-first analytics (GDPR/ePrivacy for EU & UK traffic).
 * Nothing third-party loads until the visitor accepts. If no IDs are
 * configured the banner never appears.
 */
export function Analytics({ text, accept, decline }: { text: string; accept: string; decline: string }) {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const pathname = usePathname();
  // The gtag-init script sends the first page view itself (gtag.js may not be loaded yet here).
  const firstView = useRef(true);

  useEffect(() => {
    captureUtm();
    try {
      setConsent((localStorage.getItem("ip_consent") as Consent) || null);
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (consent !== "granted") return;
    if (firstView.current) firstView.current = false;
    else window.gtag?.("event", "page_view", { page_path: pathname });
    window.fbq?.("track", "PageView");
    window.ttq?.page?.();
  }, [pathname, consent]);

  const decide = (c: Exclude<Consent, null>) => {
    try {
      localStorage.setItem("ip_consent", c);
    } catch {}
    setConsent(c);
  };

  if (!anyConfigured) return null;

  return (
    <>
      {consent === "granted" && (
        <>
          {(GA4 || ADS) && (
            <>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4 || ADS}`} strategy="afterInteractive" />
              <Script id="gtag-init" strategy="afterInteractive">{`
                window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
                gtag('consent','default',{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});
                gtag('js',new Date());
                ${GA4 ? `gtag('config','${GA4}',{send_page_view:false});gtag('event','page_view',{page_path:location.pathname});` : ""}
                ${ADS ? `gtag('config','${ADS}');` : ""}
              `}</Script>
            </>
          )}
          {GTM && (
            <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM}');`}</Script>
          )}
          {META && (
            <Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META}');`}</Script>
          )}
          {TIKTOK && (
            <Script id="tiktok-pixel" strategy="afterInteractive">{`!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load('${TIKTOK}');}(window,document,'ttq');`}</Script>
          )}
        </>
      )}

      {ready && consent === null && (
        <div role="dialog" aria-live="polite" aria-label="Cookies" className="fixed inset-x-3 bottom-24 z-50 mx-auto max-w-xl rounded-2xl border border-line bg-shell p-5 text-sm shadow-lg md:bottom-6 md:start-6 md:end-auto md:mx-0">
          <p className="leading-relaxed text-stone">{text}</p>
          <div className="mt-4 flex gap-3">
            <button className="btn btn-ink min-h-0 px-5 py-2.5" onClick={() => decide("granted")}>{accept}</button>
            <button className="btn btn-ghost min-h-0 border-line px-5 py-2.5" onClick={() => decide("denied")}>{decline}</button>
          </div>
        </div>
      )}
    </>
  );
}
