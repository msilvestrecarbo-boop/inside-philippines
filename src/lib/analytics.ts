"use client";

/**
 * One tracking call, fanned out to every configured platform.
 * Platforms only receive events after consent (scripts are not loaded before).
 *
 * Event names follow GA4 conventions; Meta/TikTok get their standard
 * equivalents for the events that matter to ad optimisation.
 */
export type TrackEvent =
  | "design_trip_click"
  | "whatsapp_click"
  | "destination_view"
  | "journey_view"
  | "trip_builder_start"
  | "trip_builder_step"
  | "trip_builder_complete"
  | "generate_lead"
  | "newsletter_signup"
  | "language_change"
  | "currency_change";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (e: string, p?: Params) => void; page?: () => void };
  }
}

const metaMap: Partial<Record<TrackEvent, string>> = {
  generate_lead: "Lead",
  trip_builder_complete: "CompleteRegistration",
  trip_builder_start: "InitiateCheckout",
  whatsapp_click: "Contact",
  newsletter_signup: "Subscribe",
  journey_view: "ViewContent",
  destination_view: "ViewContent",
};
const tiktokMap: Partial<Record<TrackEvent, string>> = {
  generate_lead: "SubmitForm",
  trip_builder_complete: "CompleteRegistration",
  whatsapp_click: "Contact",
  newsletter_signup: "Subscribe",
  journey_view: "ViewContent",
  destination_view: "ViewContent",
};

export function getContext(): Params {
  if (typeof window === "undefined") return {};
  const utm = getUtm();
  return {
    language: document.documentElement.lang,
    currency: readCookie("ip_currency") || undefined,
    ...utm,
  };
}

export function track(event: TrackEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  const payload = { ...getContext(), ...params };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
  window.gtag?.("event", event, payload);
  if (event === "generate_lead") {
    const ads = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL;
    if (ads && label) window.gtag?.("event", "conversion", { send_to: `${ads}/${label}` });
  }
  const m = metaMap[event];
  if (m) window.fbq?.("track", m, payload);
  const t = tiktokMap[event];
  if (t) window.ttq?.track(t, payload);
  if (process.env.NODE_ENV !== "production") console.debug("[track]", event, payload);
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid", "ttclid"] as const;

/** First-touch attribution, kept for the session so the lead carries it. */
export function captureUtm() {
  try {
    const sp = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    for (const k of UTM_KEYS) {
      const v = sp.get(k);
      if (v) found[k] = v.slice(0, 200);
    }
    if (Object.keys(found).length && !sessionStorage.getItem("ip_utm")) {
      sessionStorage.setItem("ip_utm", JSON.stringify({ ...found, landing_page: window.location.pathname }));
    }
    if (!sessionStorage.getItem("ip_referrer") && document.referrer) {
      sessionStorage.setItem("ip_referrer", document.referrer.slice(0, 300));
    }
  } catch {}
}

export function getUtm(): Record<string, string> {
  try {
    const utm = JSON.parse(sessionStorage.getItem("ip_utm") || "{}");
    const ref = sessionStorage.getItem("ip_referrer");
    return ref ? { ...utm, referrer: ref } : utm;
  } catch {
    return {};
  }
}

export function readCookie(name: string) {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : null;
}
