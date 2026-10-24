# SEO strategy

Deliverables 21 (SEO architecture) and 32–33.

## Positioning in search

We cannot outrank tourism boards and OTAs on "Philippines" head terms in year one. We win on **planning intent**: itineraries, durations, comparisons, months, "how to get between", honeymoon/family/luxury. Those are exactly the people who need a travel designer. Every guide page links to journeys and the trip builder.

## Keyword map

Volumes are not shown because I could not run a keyword tool from here; validate with Google Keyword Planner (FR/ES/GB/AE), Ahrefs/Semrush, and **Yandex Wordstat** for Russian.

### English
| Cluster | Primary page |
|---|---|
| philippines travel agency / specialist / tailor made travel | Home, About |
| philippines itinerary, 2 week / 14 day philippines itinerary | `/14-day-philippines-itinerary`, Island Classics, guide "Best Philippines itineraries" |
| 21 day philippines itinerary | `/21-day-philippines-itinerary`, The Grand Philippines |
| philippines honeymoon | `/honeymoon`, Honeymoons category, guide |
| philippines luxury travel | `/luxury-philippines`, Luxury category |
| philippines island hopping | `/island-hopping` |
| palawan itinerary / el nido vs coron | `/palawan`, Palawan Deep Dive, story "El Nido vs Coron" |
| siargao travel | `/siargao`, Inside Siargao |
| philippines tours / vacation packages | Journeys hub (we answer "package" intent with tailor-made) |
| best time to visit the philippines, weather by month, how many days | Travel guide |

### French (France, Belgium, Switzerland)
voyage Philippines · agence voyage Philippines · voyage sur mesure Philippines · circuit Philippines · lune de miel Philippines · itinéraire Philippines (2 semaines / 3 semaines) · quand partir aux Philippines · Palawan ou Siargao · El Nido ou Coron · voyage Philippines en famille.
French searchers say "circuit" for multi-stop trips: use it in journey titles/meta in FR.

### Spanish
viaje Filipinas · viaje a Filipinas · agencia viajes Filipinas · viaje a medida Filipinas · circuito Filipinas · luna de miel Filipinas · ruta Filipinas 15 días / 3 semanas · mejor época para viajar a Filipinas · Filipinas en familia.
Spanish searchers use "ruta" and "15 días" more than "itinerario" and "14 días": the ES journey pages should say "15 días" where honest.

### Russian (native intent, not translation)
- **Tours framing dominates:** туры на Филиппины · тур на Филиппины из Москвы · индивидуальный тур на Филиппины · отдых на Филиппинах.
- Season/money: когда лучше ехать на Филиппины · сезон на Филиппинах по месяцам · Филиппины цены на отдых · сколько стоит поездка на Филиппины.
- Places: Палаван или Боракай · остров Сиаргао · Бохол что посмотреть · Эль-Нидо.
- Practical: виза на Филиппины для россиян (high intent, sensitive: keep accurate and dated) · как добраться до Филиппин · перелёт Москва Манила.
- Honeymoon/diving: свадебное путешествие Филиппины · дайвинг на Филиппинах.
Russian travellers search on **Yandex** as well as Google: add Yandex Webmaster verification, keep pages fast, ensure Cyrillic titles. Payments and flights from Russia are complex; content must stay factual and dated.

### Arabic (UAE / GCC)
- رحلات إلى الفلبين · سياحة في الفلبين · السفر إلى الفلبين
- Family & honeymoon: الفلبين للعائلات · شهر العسل في الفلبين · أفضل جزر الفلبين لشهر العسل
- Luxury & privacy: رحلة فاخرة إلى الفلبين · فلل خاصة في الفلبين · منتجعات الفلبين الفاخرة · قارب خاص
- Practical/cultural trust: مطاعم حلال في الفلبين · تأشيرة الفلبين للإماراتيين · رحلات مباشرة من دبي إلى مانيلا · أفضل وقت لزيارة الفلبين
Gulf travellers also search in English: the English luxury/family pages target UAE via content (AED, WhatsApp, privacy) and Google Ads geo targeting, not a separate en-AE locale (avoids duplicate content).

## Technical SEO (implemented)

| Item | Where |
|---|---|
| Metadata (title template, descriptions per page/locale) | `generateMetadata` on every route, `src/lib/seo.ts` |
| Canonical URLs | `buildMetadata` (fallback-language pages canonicalise to English) |
| hreflang + x-default | `alternates.languages` + sitemap alternates, translated languages only |
| XML sitemap | `src/app/sitemap.ts` — one URL per indexable language version |
| robots.txt | `src/app/robots.ts` — blocks `/api/`, blocks everything on non-production Vercel previews |
| OpenGraph + Twitter cards | `buildMetadata`; default OG image `public/og-default.jpg` (1200×630, El Nido photo by Cris Tagupa; swap for own photography later) |
| Organization + TravelAgency | Layout JSON-LD (address added automatically once real) |
| WebSite | Layout |
| TouristDestination | Destination pages |
| TouristTrip (+Offer once prices are confirmed) | Journey pages |
| Article | Guide and story pages |
| FAQPage | Destination, journey, guide, story, landing pages |
| BreadcrumbList | All detail pages |
| Images | next/image AVIF/WebP, responsive sizes, required alt text in CMS |
| Internal linking | Destination ↔ journeys ↔ guides ↔ categories ↔ landing pages, nearby destinations, breadcrumbs |
| Core Web Vitals | Static generation, minimal JS, self-hosted fonts (see architecture doc) |

## Content plan (first 6 months)

1. Translate the 8 flagship destination guides and 7 journeys into FR and ES first (largest EU markets), then RU and AR for the pages in the UAE plan.
2. Publish the 12 "planned" guide topics, prioritising: Best Philippines itineraries, Domestic flights, Ferries, Philippines with children, Honeymoon guide, Luxury Philippines.
3. Month pages ("The Philippines in January"…) — one per month, linked from Weather by Month.
4. Hotel and restaurant pages (Inside Hotels / Inside Food) once the team has verified them.
5. Digital PR: route data stories ("how long it really takes to get from El Nido to Siargao") for travel journalists in FR/ES/UK.
