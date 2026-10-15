import Image from "next/image";
import type { Photo as PhotoT } from "@/content/types";
import { tr, type Locale } from "@/i18n/config";

/**
 * Every image on the site goes through this component.
 * With `src`: responsive AVIF/WebP via next/image (lazy unless `priority`).
 * Without: a clearly labelled, art-directed placeholder that shows the shot brief.
 */
export function Photo({
  photo,
  locale,
  className = "",
  sizes = "100vw",
  priority = false,
  label,
  showBrief = false,
}: {
  photo: PhotoT;
  locale: Locale;
  className?: string;
  sizes?: string;
  priority?: boolean;
  label: string; // "Photograph to come" (translated)
  showBrief?: boolean;
}) {
  const alt = tr(photo.alt, locale);
  if (photo.video) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={photo.src} aria-label={alt}>
          <source src={photo.video} type={photo.video.endsWith(".webm") ? "video/webm" : "video/mp4"} />
        </video>
      </div>
    );
  }
  if (photo.src) {
    const unsplash = photo.src.startsWith("https://images.unsplash.com/");
    return (
      <div className={`relative overflow-hidden tone-${photo.tone ?? "sand"} ${className}`}>
        <Image
          src={photo.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
        {showBrief && photo.credit && (
          <a
            href={photo.creditUrl ? `${photo.creditUrl}?utm_source=inside_philippines&utm_medium=referral` : undefined}
            target="_blank"
            rel="noopener"
            className="absolute bottom-3 end-4 z-10 hidden text-[0.65rem] text-white/60 hover:text-white md:block"
            dir="ltr"
          >
            Photo: {photo.credit}{unsplash ? " / Unsplash" : ""}
          </a>
        )}
      </div>
    );
  }
  return (
    <div role="img" aria-label={alt} className={`ph tone-${photo.tone ?? "sand"} ${className}`} data-placeholder="photo">
      {showBrief && (
        <div className="absolute bottom-0 end-0 hidden max-w-sm p-6 text-end text-white/85 lg:block" dir="ltr">
          <p className="kicker text-[0.6rem] text-white/70">{label}</p>
          <p className="mt-1 max-w-md text-xs leading-relaxed text-white/80">{photo.brief}</p>
        </div>
      )}
    </div>
  );
}
