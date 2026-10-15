/**
 * INSIDE PHILIPPINES wordmark with the "viewfinder" corner marks.
 * Pure markup + CSS (no image request); always Latin script in every locale.
 */
export function Logo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span role="img" className={`relative inline-flex flex-col leading-none ${className}`} dir="ltr" aria-label="Inside Philippines">
      <Corner className="-left-2.5 -top-2" />
      <span aria-hidden className="font-sans text-[0.58rem] font-semibold tracking-[0.42em] ps-[0.1em]">
        INSIDE
      </span>
      {!compact && (
        <span aria-hidden className="font-display text-[1.35rem] font-semibold tracking-[0.14em] mt-[0.18rem]" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
          PHILIPPINES
        </span>
      )}
      <Corner className="-right-2.5 -bottom-1.5 rotate-180" />
    </span>
  );
}

function Corner({ className }: { className: string }) {
  return (
    <svg aria-hidden viewBox="0 0 10 10" className={`absolute h-2.5 w-2.5 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.1">
      <path d="M0.6 9.4V0.6H9.4" />
    </svg>
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
