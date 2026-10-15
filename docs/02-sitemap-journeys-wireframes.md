# Sitemap, user journeys and wireframes

Deliverables 4–6.

## 4. Sitemap

Every URL exists under `/en/ /fr/ /es/ /ru/ /ar/`. Visiting a path without a language (`/siargao`, from an Instagram bio) redirects to the visitor's language.

```
/{lang}                                   Home
├── /destinations                         17 destinations grouped by region
│   └── /destinations/{slug}              "Inside Siargao" destination guide
├── /journeys                             Sample journeys (10–21 days)
│   └── /journeys/{slug}                  Itinerary page
├── /experiences                          11 ways to travel
│   └── /experiences/{slug}               Category (Honeymoons, Surf, Wellness…)
├── /travel-guide                         Philippines travel guide hub (22 topics)
│   └── /travel-guide/{slug}              Guide article
├── /stories                              Editorial
│   └── /stories/{slug}                   Story
├── /design-my-trip                       Trip builder (main conversion)
├── /about
├── /contact
├── /privacy  /terms                      (noindex until legal text exists)
│
└── Landing pages (social, ads, SEO)
    ├── /siargao  /palawan  /island-hopping
    ├── /honeymoon  /family-philippines  /luxury-philippines
    ├── /14-day-philippines-itinerary  /21-day-philippines-itinerary
    └── UAE: /private-villas  /private-boats  /luxury-island-escapes  /wellness-journeys

/sitemap.xml   /robots.txt   /api/lead   /api/newsletter   /api/contact
```

Phase 2 additions already prepared in the CMS: `/hotels/{slug}` (Inside Hotels), `/restaurants` (Inside Food), `/journeys?length=14` filters, `/account` (customer portal).

## 5. User journeys

**A. "The Reel" (Paris, 34, couple, mobile, Instagram in-app browser)**
Reel "El Nido or Coron?" → bio link `/palawan` → redirected to `/fr/palawan` → landing hero + 4 reasons → taps a 12-day journey → sees route map, flights and ferries laid out, "customise this journey" banner → sticky **Design my trip** → trip builder opens pre-filled with Coron + El Nido and 11–14 days → 10 quick taps → WhatsApp number → confirmation. ~6 minutes. Tracked: utm_source=instagram, landing=palawan, journey=palawan-deep-dive.

**B. "The Researcher" (Madrid, 45, family of four, desktop, Google)**
Searches "viaje a Filipinas con niños" → `/es/travel-guide/philippines-with-children` → related journeys → `/es/journeys/island-classics` (reads day-by-day, checks Boutique price in EUR) → Destinations → `/es/destinations/bohol` → "Añade Bohol a mi viaje" → trip builder (family, 2 children, ages) → leaves budget as "prefer to discuss" → submits. 15–20 minutes across two visits; the trip builder draft survives the session.

**C. "The Concierge request" (Dubai, family, Arabic, mobile, Google Ads)**
Ad "رحلة فاخرة الى الفلبين" → `/ar/luxury-philippines` (RTL, AED by default) → taps **WhatsApp** in the hero (prominent for GCC pages) → conversation starts with a pre-written Arabic message. Tracked as `whatsapp_click` with placement and landing.

**D. "The Long-haul planner" (London, 58, retired couple, 21 days)**
Newsletter (Inside Notes) → story "The Philippines in February" → `/en/journeys/the-grand-philippines` → reads travel times, best months → contact page → books a call.

**E. "The Moscow surfer" (Russian, 29, solo)**
VK/Telegram share of `/ru/siargao` → Surf & Islands journey → trip builder (surf, solo, Essential) → WhatsApp.

Every path ends at one of two conversions: **qualified trip request** (primary) or **WhatsApp conversation** (secondary). Both carry language, currency, landing page and UTM data into the CRM.

## 6. Wireframes (as built)

Mobile-first. `▓` = full-bleed photography/video, `[ ]` = button.

### Home
```
┌──────────────────────────────┐
│ ⌜INSIDE PHILIPPINES⌟   MENU  │  transparent header, solid on scroll
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓ kicker                     ▓│  100svh hero (video loop + poster)
│▓ SEE THE PHILIPPINES        ▓│
│▓ FROM THE INSIDE.           ▓│
│▓ [DESIGN MY TRIP] [EXPLORE] ▓│
├──────────────────────────────┤
│ 7,641 islands. Millions of   │  Discovery: statement + 4 reasons
│ possible journeys…           │  (flights, ferries, weather, distances)
│ ─ ─ ─ ─                      │
├──────────────────────────────┤
│ Start with a place.  All →   │  Destination cards: swipe on mobile,
│ ▓▓▓▓ ▓▓▓▓ ▓▓…  (swipe)       │  3-col grid desktop; each card: why go,
│ Inside / Name / why / best   │  best for, nights, season, EXPLORE
├──────────────────────────────┤
│ Routes we'd take ourselves   │  1 wide journey + 3 cards, from-price
├──────────────────────────────┤
│ 01 02 03 04 05               │  How it works
├──────────────────────────────┤
│ What do you want…  (swipe)   │  Experience categories
├──────────────────────────────┤
│ WHY INSIDE PHILIPPINES (dark)│  6 trust pillars
│ FOUR WAYS TO TRAVEL          │  Essential / Boutique / Premium / Signature
│ INSIDE THE ISLANDS           │  Insider notes pulled from destinations
│ TRUST (placeholders)         │  registration, DOT, payments, reviews
│ STORIES                      │
│▓ READY TO SEE THE PHILIPPINES▓│  Final conversion section
│▓ [DESIGN MY TRIP] [WHATSAPP] ▓│
│ footer + Inside Notes signup │
└──────────────────────────────┘
 [ DESIGN MY TRIP ][ ASK US ]    ← sticky bar after the hero (mobile only)
```

### Destination ("Inside Siargao")
```
▓ hero: INSIDE / SIARGAO / why-go line / [ADD SIARGAO TO MY JOURNEY]
Intro (serif lead paragraph)        | Facts: who · best for · nights · season · how to get there
On this page: Why · Stay · Beaches · Surf · Island hopping · Food · …
Section blocks (alternating sand/shell), each with items + insider note
INSIDER NOTES (dark): Go early · Our favourite · Skip this, do this instead
Journeys including Siargao
"Use this as inspiration…" [ADD SIARGAO TO MY JOURNEY]
FAQs (accordion, FAQ schema) · Nearby · Final CTA
```

### Journey
```
▓ hero: 14 DAYS / PALAWAN • BOHOL • SIARGAO / title / [CUSTOMISE THIS JOURNEY]
▬ clay band: "Use this journey as inspiration. Change the islands…"
Intro | Highlights
Route map (projected) | Flights, ferries, transfers with times
Day by day (Day 1, Days 2–4 …, overnight)
Where you'll stay · Experiences · Included · Not included · Upgrades (dark)
Travel styles (tiers this journey suits highlighted)
Price indication by tier in visitor currency + best months [CUSTOMISE]
FAQs · Final CTA (pre-fills the trip builder)
```

### Trip builder
```
STEP 3 OF 10 ────────────○─────────   "Starting from: Island Classics"
Who's travelling?
( Couple ) ( Honeymoon ) ( Family )
( Friends ) ( Solo ) ( Group )
← Back                      [CONTINUE]
```
One question per screen, big tap targets, progress line, draft saved in the session, pre-filled from the page the visitor came from, no header CTA competition, no sticky bar.

### Landing page (social / ads)
Full-screen hero with the two CTAs → 4–5 numbered reasons → 2–3 journeys → How it works → 3 destinations → Why us → FAQs → Final CTA. No navigation dead-ends, every block leads to the trip builder.
