import { INSIDE, MARK, PHILIPPINES, SUN } from "./logoPaths";

/**
 * Inside Philippines logo: arch-and-sunrise mark plus the INSIDE / Philippines
 * wordmark, as inline vectors so it takes the current text colour (white over
 * photos, ink on light backgrounds). The sun keeps the brand clay colour.
 * "horizontal" sits in the header; "stacked" is the full artwork.
 */
export function Logo({ className = "", variant = "horizontal" }: { className?: string; variant?: "horizontal" | "stacked" }) {
  if (variant === "stacked") {
    return (
      <svg role="img" aria-label="Inside Philippines" viewBox="257 188 566 634" className={`h-auto ${className}`}>
        <g fill="currentColor" fillRule="evenodd">
          <path d={MARK} />
          <path d={INSIDE} />
          <path d={PHILIPPINES} />
        </g>
        <path d={SUN} fill="var(--color-clay)" />
      </svg>
    );
  }
  return (
    <span role="img" aria-label="Inside Philippines" dir="ltr" className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg aria-hidden viewBox="388 188 304 384" className="h-10 w-auto md:h-12">
        <path d={MARK} fill="currentColor" fillRule="evenodd" />
        <path d={SUN} fill="var(--color-clay)" />
      </svg>
      <svg aria-hidden viewBox="257 633 566 189" className="h-8 w-auto md:h-10">
        <g fill="currentColor" fillRule="evenodd">
          <path d={INSIDE} />
          <path d={PHILIPPINES} />
        </g>
      </svg>
    </span>
  );
}

/** The corner pair on its own: avatar, favicon, seal. */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 22V8h14" />
      <path d="M40 26v14H26" />
    </svg>
  );
}
