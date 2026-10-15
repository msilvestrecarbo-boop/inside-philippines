"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

export function Newsletter({ locale, t }: { locale: string; t: { title: string; body: string; placeholder: string; submit: string; success: string; error: string; consent: string } }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  return (
    <div>
      <p className="font-display text-3xl">{t.title}</p>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">{t.body}</p>
      {state === "ok" ? (
        <p className="mt-5 text-sm" role="status">{t.success}</p>
      ) : (
        <form
          className="mt-5 flex max-w-sm border-b border-white/40 focus-within:border-white"
          onSubmit={async (e) => {
            e.preventDefault();
            const email = new FormData(e.currentTarget).get("email");
            setState("sending");
            const res = await fetch("/api/newsletter", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, locale }),
            }).catch(() => null);
            if (res?.ok) {
              track("newsletter_signup");
              setState("ok");
            } else setState("error");
          }}
        >
          <label className="sr-only" htmlFor="nl-email">{t.placeholder}</label>
          <input id="nl-email" name="email" type="email" required autoComplete="email" placeholder={t.placeholder} className="min-w-0 flex-1 bg-transparent py-3 text-sm placeholder:text-white/50 focus:outline-none" />
          <button disabled={state === "sending"} className="kicker py-3 ps-4 text-white">{t.submit}</button>
        </form>
      )}
      {state === "error" && <p className="mt-2 text-xs text-white/80" role="alert">{t.error}</p>}
      <p className="mt-3 text-[0.7rem] text-white/50">{t.consent}</p>
    </div>
  );
}
