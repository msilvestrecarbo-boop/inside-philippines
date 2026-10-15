"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { track, type TrackEvent } from "@/lib/analytics";

export function TrackedLink({
  event,
  params,
  ...props
}: React.ComponentProps<typeof Link> & { event: TrackEvent; params?: Record<string, string> }) {
  return <Link {...props} onClick={(e) => { track(event, params); props.onClick?.(e); }} />;
}

export function TrackedA({ event, params, ...props }: React.ComponentProps<"a"> & { event: TrackEvent; params?: Record<string, string> }) {
  return <a {...props} onClick={(e) => { track(event, params); props.onClick?.(e); }} />;
}

export function TrackView({ event, params }: { event: TrackEvent; params: Record<string, string> }) {
  const sent = useRef(false);
  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    track(event, params);
  }, [event, params]);
  return null;
}

/** Fades children in once when scrolled into view. ~0.3 kB, no animation library needed. */
export function Reveal({ children, className = "", as: Tag = "div" }: { children: React.ReactNode; className?: string; as?: "div" | "section" | "li" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // @ts-expect-error polymorphic ref
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}
