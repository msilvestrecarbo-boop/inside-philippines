"use client";

import { useEffect, useRef, useState } from "react";
import { emailTeam } from "@/lib/mailbox";
import { travellerConfirmation } from "@/lib/confirmation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { TierId } from "@/content/types";
import { getUtm, track } from "@/lib/analytics";
import type { Lead } from "@/lib/lead";

type DestOption = { slug: string; name: string };
type JourneyHint = { slug: string; title: string; days: number; route: string[]; styles: TierId[] };

type State = {
  dateMode: "" | "exact" | "month" | "unsure";
  startDate: string;
  endDate: string;
  month: string; // "MM"
  year: string;
  duration: string;
  who: string;
  adults: number;
  children: number;
  childrenAges: number[];
  interests: string[];
  destinations: string[];
  otherDestination: string;
  style: string;
  budgetBasis: "per-person" | "total" | "undecided";
  budgetAmount: number | null;
  occasions: string[];
  name: string;
  country: string;
  email: string;
  whatsapp: string;
  preferredLanguage: string;
  comments: string;
  videoCall: boolean;
  consent: boolean;
  sourceJourney?: string;
  sourceDestination?: string;
};

const DURATIONS = ["7-10", "11-14", "15-18", "19-21", "21+"];
const WHO = ["couple", "honeymoon", "family", "friends", "solo", "group"] as const;
const INTERESTS = ["beaches", "luxury", "adventure", "diving", "surf", "nature", "food", "culture", "wellness", "remote", "nightlife", "family"] as const;
const TIERS: TierId[] = ["essential", "boutique", "premium", "signature"];
/** Approximate EUR per person for each budget choice (last choice = "rather discuss"). */
const BUDGET_EUR = [1500, 2750, 4250, 6500, 8000];
const STORAGE = "ip_trip_draft";

const COUNTRIES = [
  "France", "Spain", "United Kingdom", "Germany", "Italy", "Switzerland", "Belgium", "Netherlands", "Portugal", "Ireland", "Austria",
  "Sweden", "Norway", "Denmark", "Poland", "Russia", "Kazakhstan", "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain",
  "Oman", "United States", "Canada", "Australia", "Singapore", "Philippines",
];

function initialState(locale: Locale): State {
  return {
    dateMode: "",
    startDate: "",
    endDate: "",
    month: "",
    year: String(new Date().getFullYear() + (new Date().getMonth() > 8 ? 1 : 0)),
    duration: "",
    who: "",
    adults: 2,
    children: 0,
    childrenAges: [],
    interests: [],
    destinations: [],
    otherDestination: "",
    style: "",
    budgetBasis: "per-person",
    budgetAmount: null,
    occasions: [],
    name: "",
    country: "",
    email: "",
    whatsapp: "",
    preferredLanguage: locale,
    comments: "",
    videoCall: false,
    consent: false,
  };
}

function durationFor(days: number) {
  if (days <= 10) return "7-10";
  if (days <= 14) return "11-14";
  if (days <= 18) return "15-18";
  if (days <= 21) return "19-21";
  return "21+";
}

export function TripBuilder({
  locale,
  dict,
  destinations,
  journeys,
  privacyHref,
  whatsappHref,
  email,
}: {
  locale: Locale;
  dict: Dictionary;
  destinations: DestOption[];
  journeys: JourneyHint[];
  privacyHref: string;
  whatsappHref: string;
  email: string;
}) {
  const t = dict.tripBuilder;
  const q = t.quick;
  const [s, setS] = useState<State>(() => initialState(locale));
  const [budgetChoice, setBudgetChoice] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");
  // Set when the request only reached the server log (no CRM or webhook yet): the traveller sends it on themselves.
  const [handoff, setHandoff] = useState<string | null>(null);
  const [prefillLabel, setPrefillLabel] = useState<string | null>(null);
  const started = useRef(false);

  // Restore draft + apply prefill from ?journey= / ?destination= / landing hints.
  useEffect(() => {
    let next = initialState(locale);
    try {
      const saved = sessionStorage.getItem(STORAGE);
      if (saved) next = { ...next, ...JSON.parse(saved) };
    } catch {}
    const sp = new URLSearchParams(window.location.search);
    const j = journeys.find((x) => x.slug === sp.get("journey"));
    if (j) {
      next.sourceJourney = j.slug;
      const days = Number(sp.get("days"));
      next.duration = durationFor(days > 0 ? days : j.days);
      next.destinations = j.route.filter((r) => destinations.some((d) => d.slug === r) && r !== "manila");
      if (j.styles.length === 1) next.style = j.styles[0];
      setPrefillLabel(j.title);
    }
    const dest = sp.get("destination");
    if (dest && destinations.some((d) => d.slug === dest)) {
      next.sourceDestination = dest;
      if (!next.destinations.includes(dest)) next.destinations = [...next.destinations, dest];
      if (!j) setPrefillLabel(destinations.find((d) => d.slug === dest)!.name);
    }
    const who = sp.get("who");
    if (who && (WHO as readonly string[]).includes(who)) next.who = who;
    const dur = sp.get("duration");
    if (dur && DURATIONS.includes(dur)) next.duration = dur;
    const style = sp.get("style");
    if (style && (TIERS as string[]).includes(style)) next.style = style;
    const interest = sp.get("interest");
    if (interest) next.interests = [...new Set([...next.interests, ...interest.split(",").filter((i) => (INTERESTS as readonly string[]).includes(i))])];
    setS(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      const { consent: _c, ...draft } = s;
      sessionStorage.setItem(STORAGE, JSON.stringify(draft));
    } catch {}
  }, [s]);

  const set = <K extends keyof State>(k: K, v: State[K]) => {
    if (!started.current) {
      started.current = true;
      track("trip_builder_start", { prefill: prefillLabel ?? "none" });
    }
    setError(null);
    setS((prev) => ({ ...prev, [k]: v }));
  };
  const toggle = (k: "interests" | "destinations" | "occasions", v: string) => {
    const list = s[k];
    let next = list.includes(v) ? list.filter((x) => x !== v) : [...list, v];
    if (k === "destinations") next = v === "recommend" ? (list.includes("recommend") ? [] : ["recommend"]) : next.filter((x) => x !== "recommend");
    set(k, next);
  };

  function validate(): string | null {
    if (s.dateMode === "month" && !s.month) return t.required;
    if (s.dateMode === "exact" && (!s.startDate || !s.endDate || s.endDate < s.startDate)) return t.required;
    if (s.name.trim().length < 2 || !s.country.trim()) return t.required;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.email.trim())) return t.invalidEmail;
    if (!s.consent) return t.required;
    return null;
  }

  async function submit() {
    const e = validate();
    if (e) return setError(e);
    setStatus("sending");
    const budgetIndex = budgetChoice === "" ? -1 : Number(budgetChoice);
    const budgetAmount = budgetIndex >= 0 && budgetIndex < BUDGET_EUR.length ? BUDGET_EUR[budgetIndex] : undefined;
    const lead: Lead = {
      name: s.name.trim(),
      email: s.email.trim(),
      whatsapp: s.whatsapp.trim() || undefined,
      country: s.country.trim(),
      preferredLanguage: s.preferredLanguage,
      dateMode: s.dateMode || "unsure",
      startDate: s.dateMode === "exact" ? s.startDate : undefined,
      endDate: s.dateMode === "exact" ? s.endDate : undefined,
      month: s.dateMode === "month" ? `${s.year}-${s.month}` : undefined,
      duration: s.duration,
      who: s.who,
      adults: s.adults,
      children: s.children,
      childrenAges: s.childrenAges.slice(0, s.children),
      interests: s.interests,
      destinations: [...s.destinations, ...(s.otherDestination ? [`other:${s.otherDestination}`] : [])],
      style: s.style,
      budgetAmount,
      budgetBasis: budgetAmount ? "per-person" : "undecided",
      currency: "EUR",
      occasions: s.occasions,
      comments: [s.videoCall ? "Would like a free video call to plan the trip" : "", budgetIndex >= 0 ? `${q.budget}: ${q.budgetOptions[budgetIndex]}` : "", s.comments.trim()].filter(Boolean).join("\n\n") || undefined,
      consent: s.consent,
      siteLanguage: locale,
      sourceJourney: s.sourceJourney,
      sourceDestination: s.sourceDestination,
      utm: getUtm(),
      pageUrl: window.location.href,
    };
    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
      if (!res.ok) throw new Error(String(res.status));
      const out = (await res.json().catch(() => ({}))) as { delivered?: boolean };
      if (out.delivered === false) {
        const summary = leadSummary(lead);
        if (!(await emailTeam(email, `Trip request – ${lead.name}`, summary, lead.email, travellerConfirmation(locale, lead.name)))) setHandoff(summary);
      }
      track("trip_builder_complete", { style: s.style, duration: s.duration, who: s.who });
      track("generate_lead", { style: s.style, duration: s.duration, value_basis: lead.budgetBasis });
      try { sessionStorage.removeItem(STORAGE); } catch {}
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("failed");
    }
  }

  if (status === "done") {
    return (
      <div className="mx-auto max-w-2xl py-20 text-center" role="status">
        <p className="kicker text-narra">Inside Philippines</p>
        <h2 className="mt-6 text-[length:var(--text-h1)]">{t.doneTitle}</h2>
        <p className="mt-6 text-lg leading-relaxed text-stone">{t.doneBody}</p>
        {handoff ? (
          <div className="mt-10 rounded-2xl border border-line bg-shell p-6 text-start">
            <h3 className="text-xl">{t.lastStep.title}</h3>
            <p className="mt-3 text-stone">{t.lastStep.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`${whatsappHref.split("?")[0]}?text=${encodeURIComponent(handoff)}`} target="_blank" rel="noopener" onClick={() => track("whatsapp_click", { placement: "trip_builder_handoff" })} className="btn btn-primary">
                {t.lastStep.whatsapp}
              </a>
              <a href={`mailto:${email}?subject=${encodeURIComponent("Trip request – Inside Philippines")}&body=${encodeURIComponent(handoff)}`} className="btn btn-ghost">
                {t.lastStep.email}
              </a>
            </div>
          </div>
        ) : (
          <a href={whatsappHref} target="_blank" rel="noopener" onClick={() => track("whatsapp_click", { placement: "trip_builder_done" })} className="btn btn-ghost mt-10">
            {t.doneWhatsApp}
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <aside className="flex flex-col gap-5 rounded-2xl border border-line bg-shell p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl">{q.talkTitle}</p>
          <p className="mt-1 text-sm text-stone">{q.talkBody}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={whatsappHref} target="_blank" rel="noopener" onClick={() => track("whatsapp_click", { placement: "trip_form_top" })} className="btn btn-primary min-h-0 px-5 py-2.5">{q.whatsapp}</a>
          <a href={`mailto:${email}`} className="btn btn-ghost min-h-0 px-5 py-2.5">{q.email}</a>
        </div>
      </aside>

      {prefillLabel && <p className="mt-8 text-sm text-stone">{t.prefilledFrom}: <strong className="text-ink">{prefillLabel}</strong></p>}

      <form
        className="mt-10 space-y-12"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        noValidate
      >
        <Section title={t.q1.title} hint={q.optional}>
          <div className="space-y-6">
            <Choices
              options={[["exact", t.q1.exact], ["month", t.q1.month], ["unsure", t.q1.unsure]]}
              value={[s.dateMode]}
              onPick={(v) => set("dateMode", v as State["dateMode"])}
            />
            <p className="text-sm text-stone">{t.q1.bookAhead}</p>
            {s.dateMode === "exact" && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={t.q1.start}><input type="date" className={inputCls} value={s.startDate} min={new Date().toISOString().slice(0, 10)} onChange={(e) => set("startDate", e.target.value)} /></Field>
                <Field label={t.q1.end}><input type="date" className={inputCls} value={s.endDate} min={s.startDate || undefined} onChange={(e) => set("endDate", e.target.value)} /></Field>
              </div>
            )}
            {s.dateMode === "month" && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={t.q1.monthLabel}>
                  <select className={inputCls} value={s.month} onChange={(e) => set("month", e.target.value)}>
                    <option value="">—</option>
                    {dict.months.map((m, i) => <option key={m} value={String(i + 1).padStart(2, "0")}>{m}</option>)}
                  </select>
                </Field>
                <Field label={t.q1.yearLabel}>
                  <select className={inputCls} value={s.year} onChange={(e) => set("year", e.target.value)}>
                    {[0, 1, 2].map((o) => { const y = String(new Date().getFullYear() + o); return <option key={y} value={y}>{y}</option>; })}
                  </select>
                </Field>
              </div>
            )}
          </div>
        </Section>

        <Section title={t.q2.title} hint={q.optional}>
          <Choices options={DURATIONS.map((d, i) => [d, t.q2.options[i]])} value={[s.duration]} onPick={(v) => set("duration", v)} />
        </Section>

        <Section title={t.q3.title} hint={q.optional}>
          <div className="space-y-6">
            <Choices options={WHO.map((w) => [w, t.q3.options[w]])} value={[s.who]} onPick={(v) => set("who", v)} />
            <Counter label={t.q4.adults} value={s.adults} min={1} max={30} onChange={(v) => set("adults", v)} />
            <Counter label={t.q4.children} value={s.children} min={0} max={10} onChange={(v) => { set("children", v); set("childrenAges", [...s.childrenAges, ...Array(10).fill(6)].slice(0, v)); }} />
            {s.children > 0 && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {Array.from({ length: s.children }).map((_, i) => (
                  <Field key={i} label={t.q4.childAge.replace("{n}", String(i + 1))}>
                    <select className={inputCls} value={s.childrenAges[i] ?? 6} onChange={(e) => { const a = [...s.childrenAges]; a[i] = Number(e.target.value); set("childrenAges", a); }}>
                      {Array.from({ length: 18 }).map((_, age) => <option key={age} value={age}>{age}</option>)}
                    </select>
                  </Field>
                ))}
              </div>
            )}
          </div>
        </Section>

        <Section title={t.q6.title} hint={q.optional}>
          <div className="space-y-6">
            <Choices multi options={destinations.map((d) => [d.slug, d.name])} value={s.destinations} onPick={(v) => toggle("destinations", v)} />
            <Choices options={[["recommend", t.q6.recommend]]} value={s.destinations} onPick={(v) => toggle("destinations", v)} />
          </div>
        </Section>

        <Section title={q.style} hint={q.optional}>
          <div className="space-y-6">
            <Choices options={TIERS.map((id) => [id, `${dict.tiers[id].name} · ${dict.tiers[id].line}`])} value={[s.style]} onPick={(v) => set("style", v)} />
            <Field label={q.budget}>
              <select className={inputCls} value={budgetChoice} onChange={(e) => { setError(null); setBudgetChoice(e.target.value); }}>
                <option value="">—</option>
                {q.budgetOptions.map((o, i) => <option key={o} value={i}>{o}</option>)}
              </select>
            </Field>
          </div>
        </Section>

        <Section title={q.details}>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t.q10.name}><input className={inputCls} autoComplete="name" value={s.name} onChange={(e) => set("name", e.target.value)} required /></Field>
            <Field label={t.q10.country}>
              <input className={inputCls} autoComplete="country-name" list="countries" value={s.country} onChange={(e) => set("country", e.target.value)} required />
              <datalist id="countries">{COUNTRIES.map((c) => <option key={c} value={c} />)}</datalist>
            </Field>
            <Field label={t.q10.email}><input type="email" className={inputCls} autoComplete="email" inputMode="email" value={s.email} onChange={(e) => set("email", e.target.value)} required /></Field>
            <Field label={t.q10.whatsapp} hint={t.q10.whatsappHint}><input type="tel" className={inputCls} autoComplete="tel" inputMode="tel" placeholder="+33 6 …" value={s.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} /></Field>
            <Field label={t.q10.language}>
              <select className={inputCls} value={s.preferredLanguage} onChange={(e) => set("preferredLanguage", e.target.value)}>
                <option value="en">English</option><option value="fr">Français</option><option value="es">Español</option><option value="ru">Русский</option><option value="ar">العربية</option><option value="other">Other</option>
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field label={t.q10.comments}><textarea rows={4} className={inputCls} value={s.comments} onChange={(e) => set("comments", e.target.value)} /></Field>
            </div>
            <label className="flex items-start gap-3 text-[0.95rem] sm:col-span-2">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--color-clay)]" checked={!!s.videoCall} onChange={(e) => set("videoCall", e.target.checked)} />
              <span>{t.q10.videoCall}</span>
            </label>
            <label className="flex items-start gap-3 text-sm text-stone sm:col-span-2">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--color-clay)]" checked={s.consent} onChange={(e) => set("consent", e.target.checked)} />
              <span>{t.q10.consent} <a className="underline" href={privacyHref} target="_blank">↗</a></span>
            </label>
          </div>
        </Section>

        <div className="border-t border-line pt-6 pb-[env(safe-area-inset-bottom)]">
          {error && <p role="alert" className="mb-4 text-sm text-clay-dark">{error}</p>}
          {status === "failed" && <p role="alert" className="mb-4 text-sm text-clay-dark">{t.error} <a className="underline" href={whatsappHref} target="_blank" rel="noopener">WhatsApp</a></p>}
          <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full sm:w-auto">
            {status === "sending" ? t.submitting : t.submit}
          </button>
        </div>
      </form>
    </div>
  );
}

function Section({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-6 flex w-full items-baseline justify-between gap-4 border-b border-line pb-3">
        <span className="font-display text-[length:var(--text-h3)] leading-tight">{title}</span>
        {hint && <span className="kicker shrink-0 text-[0.65rem] text-stone">{hint}</span>}
      </legend>
      {children}
    </fieldset>
  );
}

const inputCls = "w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-lg focus:border-ink focus:outline-none focus:ring-0";

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="kicker text-[0.65rem] text-stone">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-stone">{hint}</span>}
    </label>
  );
}

function Choices({ options, value, onPick, multi = false }: { options: (readonly [string, string])[] | [string, string][]; value: string[]; onPick: (v: string) => void; multi?: boolean }) {
  return (
    <div role={multi ? "group" : "radiogroup"} className="flex flex-wrap gap-3">
      {options.map(([v, label]) => {
        const on = value.includes(v);
        return (
          <button
            key={v}
            type="button"
            role={multi ? undefined : "radio"}
            aria-checked={multi ? undefined : on}
            aria-pressed={multi ? on : undefined}
            onClick={() => onPick(v)}
            className={`min-h-12 rounded-full border px-5 py-3 text-[0.95rem] transition-colors ${on ? "border-ink bg-ink text-sand" : "border-line bg-shell hover:border-ink/50"}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function Counter({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center justify-between border-b border-line pb-5">
      <span className="text-lg">{label}</span>
      <div className="flex items-center gap-5">
        <button type="button" aria-label={`${label} −`} disabled={value <= min} onClick={() => onChange(value - 1)} className="h-11 w-11 rounded-full border border-line text-xl disabled:opacity-30">−</button>
        <span className="w-6 text-center font-display text-3xl" aria-live="polite">{value}</span>
        <button type="button" aria-label={`${label} +`} disabled={value >= max} onClick={() => onChange(value + 1)} className="h-11 w-11 rounded-full border border-line text-xl disabled:opacity-30">+</button>
      </div>
    </div>
  );
}

/** Plain-text copy of a trip request, for the traveller to send on WhatsApp or by email. Labels stay in English for the team. */
function leadSummary(l: Lead) {
  const dates = l.startDate ? `${l.startDate} to ${l.endDate ?? "?"}` : l.month ?? "not decided";
  const kids = l.children ? `, ${l.children} children (ages ${l.childrenAges?.join(", ") || "?"})` : "";
  return [
    "Trip request – Inside Philippines",
    `Name: ${l.name}`,
    `Email: ${l.email}`,
    l.whatsapp && `WhatsApp: ${l.whatsapp}`,
    `Country: ${l.country}`,
    `Language: ${l.preferredLanguage}`,
    `Dates: ${dates}`,
    l.duration && `Length: ${l.duration}`,
    `Travellers: ${l.who || "?"}, ${l.adults} adults${kids}`,
    l.destinations?.length && `Places: ${l.destinations.join(", ")}`,
    l.interests?.length && `Interests: ${l.interests.join(", ")}`,
    l.style && `Style: ${l.style}`,
    l.occasions?.length && `Occasion: ${l.occasions.join(", ")}`,
    l.sourceJourney && `Tour: ${l.sourceJourney}`,
    l.comments && `Notes: ${l.comments}`,
  ].filter(Boolean).join("\n");
}
