import { tr, type Locale } from "@/i18n/config";
import { libraryPhoto } from "@/lib/photos";
import { retreatGallery, retreatGalleryTitle } from "@/content/retreatDetails";
import { Photo } from "@/components/ui/Photo";

/** Photo grid of retreat life: yoga, food, baths, sauna, ice bath, sound healing. */
export function RetreatGallery({ locale, label, limit }: { locale: Locale; label: string; limit?: number }) {
  const items = retreatGallery.slice(0, limit);
  return (
    <section className="container-x py-20 md:py-28">
      <h2 className="text-[length:var(--text-h2)]">{tr(retreatGalleryTitle, locale)}</h2>
      <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {items.map((g) => {
          const caption = tr(g.caption, locale);
          const lib = libraryPhoto(`retreat/g-${g.key}`, caption);
          const photo = lib && { ...lib, alt: { en: caption } };
          return (
            <li key={g.key}>
              <figure>
                {photo && <Photo photo={photo} locale={locale} label={label} sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw" className="aspect-[4/5] overflow-hidden rounded-card" />}
                <figcaption className="mt-2 text-sm text-stone">{caption}</figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
