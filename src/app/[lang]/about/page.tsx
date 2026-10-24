import { resolve } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Photo } from "@/components/ui/Photo";
import { PageHero, WhyUs } from "@/components/sections/Sections";
import { withPhoto, type PhotoGroup } from "@/lib/photos";
import { FinalCta } from "@/components/layout/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  const { locale, dict } = await resolve(params);
  return buildMetadata({ locale, path: "/about", title: `${dict.about.kicker} — ${dict.about.title}`, description: dict.about.intro });
}

export default async function About({ params }: PageProps<"/[lang]/about">) {
  const { locale, dict } = await resolve(params);
  const t = dict.about;
  const tones = ["jungle", "lagoon", "stone", "dusk"] as const;
  const blockPhotos: [PhotoGroup, string][] = [
    ["story", "siargao-beyond-surfing"],
    ["guide", "how-many-days"],
    ["guide", "travel-between-islands"],
    ["journey", "the-slow-philippines"],
  ];
  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} body={t.intro} />
      <section className="container-x py-20 md:py-28">
        {t.blocks.map((b, i) => (
          <div key={i} className={`grid items-center gap-10 py-10 md:grid-cols-2 md:gap-20 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <Photo
              locale={locale}
              label={dict.common.photoToCome}
              showBrief
              className="aspect-[4/3]"
              photo={withPhoto(blockPhotos[i % 4][0], blockPhotos[i % 4][1], { tone: tones[i % 4], alt: { en: b.title }, brief: ["Team member at a sari-sari store or market, candid, natural light.", "A team member on a banca between islands, looking out, not posing.", "Hands on a printed route map with ferry times, flight boarding passes beside it.", "A traveller couple greeted by a team member at a small island airport, genuine moment."][i % 4] })}
            />
            <div>
              <h2 className="text-[length:var(--text-h2)]">{b.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-stone">{b.body}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-shell py-20 md:py-28">
        <div className="container-x">
          <h2 className="text-[length:var(--text-h2)]">{t.teamTitle}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone">{t.teamIntro}</p>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.team.map((m) => (
              <div key={m.name}>
                <p className="border-t border-line pt-6 font-display text-2xl">{m.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-clay-dark">{m.role}</p>
                <p className="mt-3 leading-relaxed text-stone">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs dict={dict} />

      <section className="container-x py-20 md:py-28">
        <h2 className="text-[length:var(--text-h2)]">{t.officeTitle}</h2>
        <div className="mt-4 space-y-1 text-lg text-stone">
          {site.legal.locations.map((l) => <p key={l.locality}>{l.locality}, {l.region}</p>)}
        </div>
      </section>

      <FinalCta locale={locale} dict={dict} />
    </>
  );
}
