# Design system

Deliverable 7. Tokens live in `src/app/globals.css` (`@theme`), components in `src/components`.

## Tokens

| Group | Tokens |
|---|---|
| Colour | `sand` `shell` `ink` `stone` `line` `narra` `lagoon` `lagoon-deep` `rice` `clay` `clay-dark` |
| Type | `--font-display` Cormorant Garamond (+ Noto Naskh Arabic) · `--font-sans` Manrope (+ IBM Plex Sans Arabic) |
| Scale | `--text-display` clamp(2.75–6.5rem) · `--text-h1` clamp(2.4–4.5rem) · `--text-h2` clamp(2–3.25rem) · `--text-h3` clamp(1.5–2rem) · body 1.075rem/1.75 |
| Space | Sections `py-20 md:py-28` (or 32); container 88rem with 1.25rem / 2.5rem gutters |
| Motion | `--ease-soft` cubic-bezier(.22,1,.36,1); 0.3–1.2s; respects `prefers-reduced-motion` |
| Radius | Square photography and cards; pill buttons and choice chips only |

**Contrast:** ink on sand 15.6:1, stone on sand 5.3:1, white on lagoon 9.9:1, white on clay 4.6:1 (AA for button text at 12.5px bold uppercase).

## Components

| Component | File | Notes |
|---|---|---|
| Logo / Mark | `brand/Logo.tsx` | Wordmark + viewfinder corners; always LTR, Latin |
| Photo | `ui/Photo.tsx` | next/image AVIF/WebP, or labelled art-directed placeholder with shot brief |
| Buttons | `.btn` `.btn-primary` (clay, primary CTA only) `.btn-ghost` `.btn-ink` | Min 48px tall |
| Kicker | `.kicker` | 0.72rem, 0.2em tracking, uppercase (Arabic: no tracking, larger) |
| SectionHeading | `ui/SectionHeading.tsx` | kicker + H2 + lead |
| InsiderNote | `ui/Insider.tsx` | 9 types; narra rule + corner mark |
| Faqs | `ui/Faqs.tsx` | `<details>` accordion, zero JS, FAQ schema on page |
| Prose | `ui/Prose.tsx` | Editorial body text; TOC anchors |
| RouteMap | `ui/RouteMap.tsx` | SVG, projected real coordinates |
| Breadcrumbs | `ui/Breadcrumbs.tsx` | + BreadcrumbList schema |
| DestinationCard / JourneyCard / CategoryCard / ArticleCard | `cards/Cards.tsx` | |
| HowItWorks / WhyUs / Tiers / Trust / PageHero | `sections/Sections.tsx` | |
| FinalCta | `layout/FinalCta.tsx` | Ends every important page; pre-fills builder |
| Header / Switchers | `layout/Header.tsx`, `layout/Switchers.tsx` | Transparent → solid; language & currency independent |
| ContactBar | `layout/ContactBar.tsx` | Mobile sticky CTA + quiet desktop WhatsApp tab |
| TripBuilder | `trip/TripBuilder.tsx` | 10 steps |
| Reveal | `layout/Tracking.tsx` | 0.3 kB IntersectionObserver fade; replaces an animation library |

## RTL

- `<html dir="rtl">` for Arabic; layout uses logical properties (`ps-`, `pe-`, `start-`, `end-`, `border-s`) so it mirrors automatically.
- Arabic typography swaps fonts, removes letter-spacing and increases line height.
- Logo, route lines, prices and place names in itineraries stay LTR (`dir="ltr"`) where mixing scripts would break them.

## Photography placeholders

Each slot renders a tonal field (`tone-lagoon`, `-sand`, `-jungle`, `-dusk`, `-stone`, `-rice`, `-night`, `-reef`) with film grain, and on hero images the label "Photograph to come" plus the brief. Replace by setting `photo.src` (or uploading in the CMS). See `08-photography-shotlist.md`.

## Framer Motion

Not used in v1. The only animations are a scroll fade, hover zooms and header/CTA transitions, all CSS. That keeps the JS budget for the trip builder. Framer Motion is worth adding later only for the trip builder step transitions or a hero sequence.
