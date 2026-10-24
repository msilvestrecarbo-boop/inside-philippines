# What I need from you, and the launch checklist

Everything below is a clearly marked placeholder on the site today. Nothing has been invented: no reviews, awards, accreditations, team members, hotel partners or confirmed prices.

## A. Business information (blocks launch)

| Item | Where it appears | Where to change it |
|---|---|---|
| Registered company name | Footer, About, Organization schema | `src/lib/site.ts` → `legal.companyName` (later: CMS Site settings) |
| SEC/DTI registration number | Footer, About, Trust | `legal.registration` |
| DOT accreditation number (when issued) | About, Trust | `legal.dotAccreditation` |
| Office address in the Philippines | Footer, About, Contact, schema | `legal.address` + dictionaries `footer.placeholderAddress` |
| WhatsApp Business number | Every WhatsApp button | env `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| Contact email + domain | Contact, schema | env `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_SITE_URL` |
| Office hours + 24/7 emergency line | Contact | dictionaries `contact.hoursValue`, `contact.emergencyBody` |
| Payment provider, deposit %, cancellation terms | Trust, Terms | `trust.items`, Terms page |
| Privacy policy and booking terms (lawyer-written: GDPR, UK GDPR, PH Data Privacy Act 2012, UAE PDPL) | /privacy, /terms | Pages are noindexed until replaced |
| Team: names, roles, languages spoken, photos, short bios | About | CMS Team (placeholders on About) |
| Domain and social handles (check @insidephilippines availability) | Footer, schema | `src/lib/site.ts` |

## B. Commercial (before ads)

- **Real costings** for each journey and tier. All prices are flagged `priceIsPlaceholder: true` and labelled "indicative, to be confirmed". Once confirmed, set it to `false` and schema.org Offer data is published automatically.
- Which tiers you really sell at launch (all four, or start with Boutique + Premium).
- Exchange-rate policy (fixed monthly rate vs daily feed) — `src/lib/currency.ts`.
- Your hotel shortlist per destination (CMS Hotels; "booking notes" stay internal).
- Editorial positions to confirm: no Oslob whale-shark feeding; advise against eating coconut crab in Batanes.

## C. Content and translation

- **Native review of all FR / ES / RU / AR text** (UI, cards, landings). It is a strong first draft, not signed off.
- Translation backlog, in priority order: 8 flagship destination guides (Siargao, Palawan, El Nido, Coron, Bohol, Siquijor, Manila, Cebu) → 7 journeys → 10 guides → 5 stories. Until a page is translated it shows English with a notice and is `noindex` in that language.
- Fact-check by the local team (marked in copy as approximate): El Nido–Coron ferry season/time, Siargao–Clark flights, Cebu–Camiguin flights, Jagna–Benoni ferry, Coron flights from Cebu/Clark, Basco flights from Clark, Lio airport service, Manila–Sagada/Banaue road times, Malatapay market day.
- 12 planned guide topics and 8 planned stories (listed on the site as "in preparation").
- Photography and hero video: `08-photography-shotlist.md` (80 briefs).

## D. Accounts to create

Vercel · GitHub repository · Sanity project · HubSpot (private app token, pipeline) · GA4 · Google Search Console · Google Ads · Meta Business (Pixel) · TikTok Ads (Pixel) · Yandex Webmaster (Russian) · WhatsApp Business · Brevo/Klaviyo for Inside Notes.

## E. Launch checklist

- [ ] All A items filled; search the codebase for `[` placeholders: `grep -rn "\[" src/lib/site.ts src/i18n/dictionaries`
- [ ] Env vars set in Vercel (see `.env.example`)
- [x] Real OG image (1200×630 JPG) at `public/og-default.jpg`
- [ ] `npm test` and `npm run build` pass
- [ ] Submit a real trip request on production → appears in HubSpot as NEW LEAD with UTM data
- [ ] GA4 DebugView shows `generate_lead`; Meta/TikTok test events received
- [ ] Search Console + Yandex verified; `/sitemap.xml` submitted
- [ ] Lighthouse mobile ≥ 90 on Home, a destination, a journey, the trip builder
- [ ] Test in Instagram, TikTok and WhatsApp in-app browsers (iOS + Android), Safari, Chrome
- [ ] Arabic pages reviewed on a phone by a native speaker
