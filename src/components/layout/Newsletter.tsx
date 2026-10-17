"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

export function Newsletter({ locale, t }: { locale: string; t: { title: string; body: string; placeholder: string; submit: string; success: string; error: string; consent: string } }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  return (
    <div>
      <p className="font-display text-2xl">{t.title}</p>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/75">{t.body}</p>
      {state === "ok" ? (
        <p className="mt-5 text-sm" role="status">{t.success}</p>
      ) : (
        <form
          className="mt-5 flex max-w-sm items-center rounded-full border border-ink/40 p-1.5 ps-5 focus-within:border-ink"
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
          <input id="nl-email" name="email" type="email" required autoComplete="email" placeholder={t.placeholder} className="min-w-0 flex-1 bg-transparent py-2 text-sm placeholder:text-ink/55 focus:outline-none" />
          <button disabled={state === "sending"} className="btn btn-light min-h-0 px-5 py-2.5 text-[0.8rem]">{t.submit}</button>
        </form>
      )}
      {state === "error" && <p className="mt-2 text-xs text-ink/80" role="alert">{t.error}</p>}
      <p className="mt-3 text-[0.7rem] text-ink/60">{t.consent}</p>
    </div>
  );
}
