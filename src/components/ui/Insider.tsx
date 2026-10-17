import type { Insider as InsiderT } from "@/content/types";
import { tr, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Mark } from "@/components/brand/Logo";

export function InsiderNote({ note, locale, dict, className = "" }: { note: InsiderT; locale: Locale; dict: Dictionary; className?: string }) {
  return (
    <aside className={`relative rounded-card bg-shell px-6 py-6 md:px-7 ${className}`}>
      <p className="kicker flex items-center gap-2 text-narra">
        <Mark className="h-3.5 w-3.5" />
        {dict.insider[note.type]}
      </p>
      <p className="mt-2 font-display text-2xl leading-tight">{tr(note.title, locale)}</p>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-stone">{tr(note.body, locale)}</p>
    </aside>
  );
}
