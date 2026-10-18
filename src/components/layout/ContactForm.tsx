"use client";

import { useState } from "react";

export function ContactForm({ locale, t }: { locale: string; t: { name: string; email: string; message: string; send: string; sent: string; error: string } }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  if (state === "ok") return <p role="status" className="text-lg">{t.sent}</p>;
  const cls = "w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-lg focus:border-ink focus:outline-none";
  return (
    <form
      className="grid gap-6"
      onSubmit={async (e) => {
        e.preventDefault();
        setState("sending");
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, locale }) }).catch(() => null);
        setState(r?.ok ? "ok" : "error");
      }}
    >
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <label><span className="kicker text-[0.65rem] text-stone">{t.name}</span><input name="name" autoComplete="name" className={cls} /></label>
      <label><span className="kicker text-[0.65rem] text-stone">{t.email}</span><input name="email" type="email" required autoComplete="email" className={cls} /></label>
      <label><span className="kicker text-[0.65rem] text-stone">{t.message}</span><textarea name="message" required rows={5} className={cls} /></label>
      {state === "error" && <p role="alert" className="text-sm text-clay-dark">{t.error}</p>}
      <button disabled={state === "sending"} className="btn btn-ink justify-self-start">{t.send}</button>
    </form>
  );
}
