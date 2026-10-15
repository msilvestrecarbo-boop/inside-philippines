# Technical architecture

Deliverables 17–20, 24–25, 27 and the phase 2 foundations (customer portal, AI trip planner).

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 16 (App Router) + React 19 + TypeScript (strict)** | Static generation for every page, server components (little JS shipped), built-in image optimisation, metadata/sitemap APIs |
| Styling | **Tailwind CSS 4** with design tokens in CSS | No runtime CSS, tiny output, tokens shared with the CMS preview |
| Fonts | Self-hosted via `@fontsource` | No Google Fonts request; `unicode-range` means Arabic/Cyrillic files only download for those languages |
| CMS | **Sanity** (recommended, schemas in `/sanity`) | See below |
| Hosting | **Vercel** (recommended) or any Node host | Edge network, image CDN, geo headers for currency defaults, preview deployments |
| CRM | **HubSpot** (adapter in `src/lib/crm.ts`) | Free CRM, deal pipelines for the 12 journey stages, email + WhatsApp inbox integrations |
| Analytics | GA4, Google Ads, Meta Pixel, TikTok Pixel, Search Console — consent-gated | `src/lib/analytics.ts` |

## CMS recommendation: Sanity

| | Sanity | Payload | Strapi |
|---|---|---|---|
| Editing without code | Excellent, real-time, mobile-friendly Studio | Good | Good |
| Separate translation per page | Document-level i18n plugin: one document per language, own slug + SEO | Field-level localisation (same slug per language unless customised) | i18n plugin, field-level |
| Images | Built-in global image CDN, hotspot cropping, AVIF/WebP on the fly | Self-host storage + your own resizing | Self-host / provider plugin |
| Hosting & maintenance | Fully hosted, nothing to patch | Runs inside the Next.js app; you own the database and upgrades | Separate server + database to run and secure |
| Cost at this size | Free tier, then ~$15/editor/month | Free (pay for DB + storage hosting) | Free (pay for server) |
| Arabic RTL editing | Works; text inputs follow content direction | Works | Works |

**Recommendation: Sanity.** You need to manage five languages of photo-heavy editorial content without a developer on call. Sanity gives you a hosted, secure editor with an image CDN and a per-language document model that fits "every page has its own professional translation". Payload is the best alternative if you later want everything (CMS + customer portal + bookings) in one self-hosted codebase; the content types in `src/content/types.ts` are written so that move would also be straightforward.

v1 ships with typed content files (`src/content/*.ts`) behind a repository (`src/lib/content.ts`). The site works today with zero external services; switching to Sanity means replacing those functions with GROQ queries (`sanity/README.md`).

## Multilingual architecture (17)

- URL prefix per language: `/en/ /fr/ /es/ /ru/ /ar/` (`src/app/[lang]`). All pages statically generated for all five.
- `src/proxy.ts` (Next 16's middleware): paths without a language are redirected by saved preference cookie → `Accept-Language` → English.
- UI strings: one dictionary per language (`src/i18n/dictionaries`), same keys enforced by type + test.
- Content: `L<T>` fields (`{ en, fr?, es?, ru?, ar? }`). English is the editorial source.
- **Honest hreflang:** a page advertises only languages it is really translated into. If a visitor opens a page in a language that isn't translated yet, they read English with a notice, the page is `noindex` and canonicalised to English. Nothing machine-translated is ever indexed. As translations are added, pages enter hreflang and the sitemap automatically.
- `x-default` points to English.

**v1 translation coverage:** full interface, homepage, trip builder, about, contact, all cards (17 destinations, 7 journeys, 11 categories), journey highlights and best months, all guide/story titles and descriptions, landing pages (EN/FR/ES/RU for European pages; EN/AR for UAE pages + luxury, family, honeymoon). Long-form destination guides, day-by-day itineraries and articles are English in v1 and are the translation backlog (see `09-launch-checklist.md`). All non-English text is a first draft that must be reviewed by native copywriters before launch.

## Arabic RTL (18)

`<html lang="ar" dir="rtl">`, logical CSS properties throughout, Arabic font stack, mirrored layout, `dir="ltr"` islands for logo, route strings and numbers where needed, Arabic WhatsApp pre-filled message, AED default.

## Currency (19)

- EUR, USD, AED, PHP. Independent of language, stored in the `ip_currency` cookie.
- First-visit default from geo header (UAE/GCC → AED, US/RU… → USD, PH → PHP) then language (ar → AED, ru → USD, else EUR). The visitor can switch any time in the header or menu.
- Source prices are EUR; conversion rates in `src/lib/currency.ts` (placeholder; move to the CMS "Prices & currencies" document or a daily ECB feed). Prices round to clean numbers and are always labelled indicative.
- Pages stay fully static: prices render in the locale default and update client-side if the visitor's cookie differs.

## Trip builder & lead pipeline

`/design-my-trip` → 10-step client component → `POST /api/lead` → validation (`src/lib/lead.ts`) + rate limit + honeypot → CRM adapter (HubSpot contact upsert + deal in "NEW LEAD") → optional webhook mirror (Slack/Make/Zapier/email). If the CRM is down the lead is still accepted and mirrored, so nothing is lost. Pre-fill from `?journey=`, `?destination=`, `?who=`, `?duration=`, `?style=`, `?interest=`. UTM first touch + referrer travel with the lead.

## Performance (25)

- Every page is static HTML at the edge; no client data fetching.
- Server components by default. Client JS only for header, switchers, contact bar, consent, trip builder and the small tracking helpers.
- No animation library; CSS transitions + a 0.3 kB IntersectionObserver.
- `next/image`: AVIF → WebP, responsive `sizes`, lazy by default, `priority` only on the hero.
- Hero video guidance: ≤4 MB, 8–12 s, H.264 + WebM, `muted playsinline`, poster image, not loaded on Save-Data or slow connections.
- Fonts self-hosted, `font-display: swap`, subsetted by script.
- Third-party scripts only after consent, `afterInteractive`.
- Long cache headers on static assets; security headers (HSTS, nosniff, frame, referrer, permissions policy) in `next.config.ts`.

Targets: LCP < 2.0 s on 4G mobile, CLS < 0.05, INP < 200 ms.

## Security

Input validation and length caps on every API route, honeypot, per-IP rate limiting (swap for Upstash/Vercel KV in multi-region), no secrets in the client, CRM token server-only, internal CMS fields never queried, security headers, no `dangerouslySetInnerHTML` except escaped JSON-LD.

## Phase 2: customer portal (40)

Prepared, not built:
- **Auth:** passwordless email links (Auth.js or Clerk) keyed on the CRM contact email.
- **Data:** a `trip` record per confirmed deal (Postgres via Supabase/Neon, or Payload collections) referencing CMS hotels, experiences and destinations, plus private fields: flights, transfer times, vouchers (S3/R2 signed URLs), invoices/payments (Stripe or a PH processor like PayMongo/Xendit for PHP), emergency contacts.
- **Routes:** `/[lang]/account`, `/[lang]/account/trips/[id]` (day-by-day with map, documents, local recommendations from the CMS, chat via WhatsApp deep link or an inbox integration).
- The lead → deal → trip ID chain already exists in HubSpot, so the portal attaches to the same records.

## Phase 2: AI trip planner (41)

- Input = the same structured answers as the trip builder (`Lead` type).
- Retrieval over CMS content (destinations with seasons, legs/travel times, journeys, hotel tiers) → an LLM drafts 2–3 route options with reasoning ("December + beach + surf → El Nido then Siargao; avoid Siargao's east coast rain in January").
- Hard constraints in code, not the model: seasonal ferry availability, flight connections, minimum nights per stop, max islands per trip length.
- Output is a **suggestion screen that ends in "Send this to a travel designer"**, which submits the lead with the AI draft attached. The human designer stays the product.
- Endpoint placeholder: `POST /api/suggest` (not yet implemented).

## Deployment (27)

See `README.md` → Deploy. In short: push to GitHub → import in Vercel → set env vars from `.env.example` → add domain → verify in Search Console → submit `/sitemap.xml`.
