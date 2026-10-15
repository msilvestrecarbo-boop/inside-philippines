import { resolve } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Photo } from "@/components/ui/Photo";
import { PageHero, Trust, WhyUs } from "@/components/sections/Sections";
import { FinalCta } from "@/components/layout/FinalCta";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  const { locale, dict } = await resolve(params);
  return buildMetadata({ locale, path: "/about", title: `${dict.about.kicker} — ${dict.about.title}`, description: dict.about.intro });
}

export default async function About({ params }: PageProps<"/[lang]/about">) {
  const { locale, dict } = await resolve(params);
  const t = dict.about;
  const tones = ["jungle", "lagoon", "stone", "dusk"] as const;
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
              photo={{ tone: tones[i % 4], alt: { en: b.title }, brief: ["Team member at a sari-sari store or market, candid, natural light.", "A team member on a banca between islands, looking out, not posing.", "Hands on a printed route map with ferry times, flight boarding passes beside it.", "A traveller couple greeted by a team member at a small island airport, genuine moment."][i % 4] }}
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
          <p className="mt-4 inline-block border border-dashed border-clay px-3 py-1 text-xs text-clay-dark">{t.teamNote}</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n}>
                <Photo locale={locale} label={dict.common.photoToCome} className="aspect-[4/5]" photo={{ tone: "sand", alt: { en: `Team member ${n}` }, brief: "Portrait, natural light, outdoors in the Philippines, relaxed, not corporate." }} />
                <p className="mt-4 font-display text-2xl">[Name]</p>
                <p className="text-sm text-stone">{t.teamPlaceholderRole} · [Languages spoken]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs dict={dict} />

      <section className="container-x py-20 md:py-28">
        <h2 className="text-[length:var(--text-h2)]">{t.officeTitle}</h2>
        <p className="mt-4 text-lg text-stone">{site.legal.address}</p>
        <p className="text-sm text-stone">{site.legal.companyName} · {site.legal.registration} · {site.legal.dotAccreditation}</p>
      </section>

      <Trust dict={dict} />
      <FinalCta locale={locale} dict={dict} />
    </>
  );
}
