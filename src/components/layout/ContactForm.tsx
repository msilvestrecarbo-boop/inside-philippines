"use client";

import { useState } from "react";
import { emailTeam } from "@/lib/mailbox";
import { travellerConfirmation } from "@/lib/confirmation";

type LastStep = { title: string; body: string; whatsapp: string; email: string };

export function ContactForm({ locale, t, whatsappBase, email: teamEmail }: { locale: string; t: { name: string; email: string; message: string; send: string; sent: string; error: string; lastStep: LastStep }; whatsappBase: string; email: string }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  // Set when the message only reached the server log (no webhook yet): the sender passes it on themselves.
  const [handoff, setHandoff] = useState<string | null>(null);
  if (state === "ok" && handoff)
    return (
      <div role="status" className="rounded-2xl border border-line bg-shell p-6">
        <h3 className="text-xl">{t.lastStep.title}</h3>
        <p className="mt-3 text-stone">{t.lastStep.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`${whatsappBase}?text=${encodeURIComponent(handoff)}`} target="_blank" rel="noopener" className="btn btn-primary">{t.lastStep.whatsapp}</a>
          <a href={`mailto:${teamEmail}?subject=${encodeURIComponent("Message – Inside Philippines")}&body=${encodeURIComponent(handoff)}`} className="btn btn-ghost">{t.lastStep.email}</a>
        </div>
      </div>
    );
  if (state === "ok")
    return (
      <div role="status" ref={(el) => el?.scrollIntoView({ behavior: "smooth", block: "center" })} className="rounded-2xl border border-line bg-shell p-6 text-center">
        <p aria-hidden className="text-3xl text-narra">✓</p>
        <p className="mt-3 text-xl">{t.sent}</p>
      </div>
    );
  const cls = "w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-lg focus:border-ink focus:outline-none";
  return (
    <form
      className="grid gap-6"
      onSubmit={async (e) => {
        e.preventDefault();
        setState("sending");
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, locale }) }).catch(() => null);
        const out = r?.ok ? ((await r.json().catch(() => ({}))) as { delivered?: boolean }) : null;
        if (out?.delivered === false) {
          const summary = [`Message – Inside Philippines`, `Name: ${data.name || ""}`, `Email: ${data.email}`, "", String(data.message)].join("\n");
          if (!(await emailTeam(teamEmail, `Message – ${data.name || data.email}`, summary, String(data.email), travellerConfirmation(locale, String(data.name || ""))))) setHandoff(summary);
        }
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
