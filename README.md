# Inside Philippines — website v1

*The Philippines, from the inside.*

A multilingual (EN/FR/ES/RU/AR with RTL), multi-currency (EUR/USD/AED/PHP) travel website for a Philippines-based travel design studio. Built with Next.js 16, React 19, TypeScript and Tailwind CSS 4. Over 300 statically generated pages, a 10-step trip builder that sends leads to a CRM, and a Sanity CMS schema ready to connect.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000 → redirects to /en (or the browser's language)
npm test             # dictionary parity, content integrity, lead validation
npm run build && npm start
```

No external service is required to run it. Without CRM credentials, trip requests are logged to the server console.

## Where things are

```
docs/                       Brand, strategy and launch documents (start with 01-brand.md)
src/app/[lang]/             All pages (home, destinations, journeys, experiences, travel-guide,
                            stories, design-my-trip, about, contact, [landing], privacy, terms)
src/app/api/                lead, newsletter, contact endpoints
src/app/sitemap.ts, robots.ts
src/proxy.ts                Language redirect + currency default (Next 16 "proxy" = middleware)
src/i18n/                   Locale config + UI dictionaries (en is the source)
src/content/                v1 content: destinations, journeys, guides, stories, experiences, landings
src/lib/                    content repository, SEO/hreflang, schema.org, currency, analytics, CRM, lead validation
src/components/             Design system components, trip builder
sanity/                     Sanity Studio schemas (CMS) + connection guide
scripts/shotlist.mjs        Regenerates the photography shot list from content
tests/                      node:test suites
```

## Documents

| # | Doc | Covers deliverables |
|---|---|---|
| 01 | [Brand platform](docs/01-brand.md) | Positioning, tagline, visual direction, logo, tiers, voice, "Inside" system, newsletter, handle |
| 02 | [Sitemap, user journeys, wireframes](docs/02-sitemap-journeys-wireframes.md) | 4–6 |
| 03 | [Design system](docs/03-design-system.md) | 7, RTL |
| 04 | [Technical architecture](docs/04-technical-architecture.md) | CMS choice, i18n, currency, performance, security, portal, AI planner, deployment |
| 05 | [CRM & analytics](docs/05-crm-analytics.md) | Events, HubSpot fields and pipeline |
| 06 | [SEO strategy](docs/06-seo-strategy.md) | Keywords EN/FR/ES/RU/AR, technical SEO |
| 07 | [Social, UAE, Europe, newsletter](docs/07-social-strategy.md) | Instagram/TikTok, landing pages, markets |
| 08 | [Photography shot list](docs/08-photography-shotlist.md) | 80 briefs |
| 09 | [What I need from you + launch checklist](docs/09-launch-checklist.md) | Placeholders to replace |

## Deploy (Vercel)

1. Push this folder to a GitHub repository.
2. vercel.com → New Project → import the repo (framework auto-detected).
3. Add environment variables from `.env.example` (at minimum `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_CONTACT_EMAIL`).
4. Add the domain; Vercel issues HTTPS. Preview deployments are automatically `noindex` via robots.
5. Verify in Google Search Console and Yandex Webmaster, submit `/sitemap.xml`.

Any Node 20+ host works (`npm run build && npm start`); geo-based currency defaults use Vercel or Cloudflare geo headers when present.

## Editing content today

Until Sanity is connected, content lives in typed files in `src/content`. Every localized field is `{ en, fr?, es?, ru?, ar? }`; adding a language version of a field makes that page indexable in that language automatically (hreflang + sitemap update themselves). Type checking (`npx tsc --noEmit`) and `npm test` catch missing references.
