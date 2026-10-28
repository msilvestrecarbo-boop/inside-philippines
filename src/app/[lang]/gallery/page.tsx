import { tr } from "@/i18n/config";
import { resolve } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";
import { gallery } from "@/content/extras";
import { libraryPhoto } from "@/lib/photos";
import { Photo } from "@/components/ui/Photo";
import { PageHero } from "@/components/sections/Sections";
import { FinalCta } from "@/components/layout/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[lang]/gallery">) {
  const { locale } = await resolve(params);
  return buildMetadata({ locale, path: "/gallery", title: tr(gallery.seoTitle, locale), description: tr(gallery.intro, locale) });
}

export default async function Gallery({ params }: PageProps<"/[lang]/gallery">) {
  const { locale, dict } = await resolve(params);
  return (
    <>
      <PageHero photo="destination/palawan" locale={locale} kicker={tr(gallery.kicker, locale)} title={tr(gallery.title, locale)} body={tr(gallery.intro, locale)} />
      <nav className="container-x flex flex-wrap gap-3 pt-12" aria-label={tr(gallery.kicker, locale)}>
        {gallery.categories.map((c) => (
          <a key={c.id} href={`#${c.id}`} className="rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-ink">
            {tr(c.label, locale)}
          </a>
        ))}
      </nav>
      {gallery.categories.map((c) => (
        <section key={c.id} id={c.id} className="container-x scroll-mt-28 py-14 md:py-20" aria-labelledby={`${c.id}-h`}>
          <h2 id={`${c.id}-h`} className="text-[length:var(--text-h2)]">{tr(c.label, locale)}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.items.map((it) => {
              const photo = libraryPhoto(it.key, it.place);
              if (!photo) return null;
              return (
                <figure key={it.key}>
                  <Photo photo={photo} locale={locale} label={dict.common.photoToCome} className="aspect-[4/3] overflow-hidden rounded-card" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                  <figcaption className="mt-2 text-sm text-stone">{it.place}</figcaption>
                </figure>
              );
            })}
          </div>
        </section>
      ))}
      <FinalCta locale={locale} dict={dict} />
    </>
  );
}
