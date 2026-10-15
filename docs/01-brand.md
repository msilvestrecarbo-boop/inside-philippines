# Inside Philippines — Brand Platform

Deliverables 1–3 (positioning, tagline, visual direction) plus logo, voice, travel tiers and the editorial naming system.

---

## 1. Positioning

**What we are:** a Philippines-based travel design studio for international travellers. We plan, connect and look after whole journeys around the islands.

**What we are not:** a booking engine, a tour reseller or a package-holiday catalogue.

**The problem we solve.** Most of our travellers already know they want the Philippines. What they don't know is which islands, how many, in what order, how they connect, which flights and ferries actually run, where to sleep and what is worth paying for. From Paris, Madrid, London, Dubai or Moscow that is genuinely hard to work out: 7,641 islands, routes that only run in certain seasons, weather that differs coast to coast, and transfer days that can quietly eat a holiday.

**Positioning statement.**
> For travellers from Europe and the Middle East who want to see the Philippines properly, Inside Philippines is the travel design studio based in the country itself. Unlike agencies that sell the Philippines from a distance, we design journeys from the inside: we know how the islands connect, which places are worth your time and how to make a complicated country feel easy.

**The five pillars** (every page should prove at least two):

| Pillar | What it means on the site |
|---|---|
| Local knowledge | Insider modules, specific names, real travel times, seasonal honesty |
| Travel design | Sample journeys as starting points, the trip builder, "customise this journey" everywhere |
| Insider access | Private boats, early starts, places off the standard tour circuits |
| Beautiful experiences | Large photography, editorial pacing, curated (not exhaustive) recommendations |
| Easy logistics | Flight/ferry legs shown on every itinerary, "how to get there" on every destination |

**Brand promise:** *You are planning your Philippines trip with someone who actually knows the country.*

**Brand idea:** *A knowledgeable friend inside the Philippines who also happens to be an excellent travel designer.*

---

## 2. Tagline

Tested lines, scored against: says the brand name's idea, works in five languages, works as a sign-off on a reel, a proposal PDF and an airport sign.

| Line | Verdict |
|---|---|
| See the Philippines from the inside. | **Hero headline.** An invitation; strongest as the first thing you read. |
| **The Philippines, from the inside.** | **Final tagline / sign-off.** Shortest, calmest, translates cleanly, completes the name instead of repeating it. |
| Travel deeper. | Generic; any brand could own it. |
| Go beyond the postcard. | Good for social copy, too common as a brand line. |
| Discover the Philippines differently. | "Differently" is a claim without proof. |
| Your journey. Our Philippines. | Warm; keep for the About page and proposals. |
| Designed locally. Experienced differently. | Keep "Designed locally" as a supporting line under the logo on documents. |
| Explore from the inside. | Weaker version of the hero. |

**Final system**
- Tagline: **The Philippines, from the inside.**
- Hero headline: **See the Philippines from the inside.**
- Supporting line (documents, proposals, signage): **Journeys designed locally.**

Translations (to be checked by native copywriters):
- FR: *Les Philippines, de l'intérieur.*
- ES: *Filipinas, desde dentro.*
- RU: *Филиппины изнутри.*
- AR: *الفلبين من الداخل.*

---

## 3. Visual direction

**Feel:** a well-edited travel magazine you'd keep, made by people who live there. Warm, unhurried, specific. Younger and lighter than Condé Nast Traveller; never resort-brochure.

**Rules**
1. The Philippines is the hero. Type and UI step back; photography leads.
2. Natural palette drawn from the country itself: sand, narra wood, volcanic stone, deep lagoon green, rice-terrace green, late-afternoon clay. Turquoise only ever appears in photographs.
3. One accent at a time. Clay is reserved for the primary action (Design my trip).
4. Space is a material. Generous margins; one idea per screen on mobile.
5. Motion is slow and quiet: fades, gentle parallax, nothing that bounces.
6. No icons for decoration, no gradients for decoration, no stock "happy tourist" photography.

**Palette** (tokens in `src/app/globals.css`)

| Token | Hex | Use |
|---|---|---|
| `sand` | `#F5F0E8` | Page background |
| `shell` | `#FBF8F3` | Cards, raised surfaces |
| `ink` | `#1B1A17` | Text |
| `stone` | `#6B665E` | Secondary text |
| `narra` | `#7A4E2D` | Editorial accents, insider labels |
| `lagoon` | `#1E4A45` | Dark sections, footer |
| `rice` | `#5E6B3A` | Tags, nature content |
| `clay` | `#B8582F` | Primary call to action only |

**Typography**
- Display: *Cormorant Garamond* (editorial serif with Cyrillic) — headlines, destination names, numbers.
- Text: *Manrope* (clean, warm grotesque with Cyrillic) — body, UI, labels.
- Arabic: *Noto Naskh Arabic* for display, *IBM Plex Sans Arabic* for text.
- Labels: Manrope, uppercase, 0.18em tracking, small. Used sparingly (kickers, CTAs, nav).

**Photography direction** — see `docs/08-photography-shotlist.md`. The site ships with art-directed placeholders: every image slot carries a written brief so the shoot list already exists.

---

## 4. Logo

**Direction: a clean wordmark with a quiet frame.**

```
⌜ INSIDE
  PHILIPPINES ⌟
```

- "INSIDE" set small in widely tracked Manrope capitals; "PHILIPPINES" in Cormorant Garamond capitals beneath.
- Two thin corner marks — the corners of a viewfinder — frame the name. They say "the view from within" without a palm tree, wave, pin or plane in sight.
- The corner pair alone (⌜ ⌟) is the symbol: Instagram avatar, favicon, luggage tag, wax seal, embroidery.
- Single colour always (ink on sand, sand on lagoon, white on photography).
- Files: `public/brand/logo.svg`, `public/brand/logo-light.svg`, `public/brand/mark.svg`; React component `src/components/brand/Logo.tsx`.

Recommended next step: a type designer refines the letter spacing and draws a custom "P" ligature for print. The current files are production-usable, not final art.

---

## 5. Travel styles (tiers)

The lower tier must never sound cheap. "Comfort" is replaced because it describes the minimum anyone expects.

| Tier | Promise | Typical stay |
|---|---|---|
| **Essential** | The right places, smartly connected. Good-value, well-located hotels and the experiences that matter. | Characterful 3★ and guesthouses chosen for location |
| **Boutique** (was "Comfort") | Small, design-led hotels, better rooms, private transfers where they make a difference. | Boutique and design hotels, upgraded room categories |
| **Premium** | High-end resorts, private transfers throughout, exceptional experiences and a slower pace. | 5★ resorts and the best villas in each place |
| **Signature** | Island resorts, private villas, private boats, charter flights where they save a day, concierge-level care. | The country's most exceptional addresses |

---

## 6. Voice

Write like a travel editor who lives here.

**Simple. Confident. Specific. Human. Informed. Occasionally funny.**

Do:
- Use numbers and names: "Two flights and a 45-minute boat ride" not "easily accessible".
- Admit trade-offs: "Boracay is busy. Here's when it's worth it anyway."
- Give the reason: "Go to the Chocolate Hills at 6am — the light is softer and the tour vans arrive at nine."
- Speak as *we*. Address the reader as *you*.

Never write (banned list, enforced in review):
paradise awaits · embark on a journey · once-in-a-lifetime · unforgettable experience · breathtaking beauty · create memories that last forever · hidden gem (unless ironic) · nestled · bucket list · crystal-clear waters

**Example**
- ✗ "Embark on an unforgettable journey through the breathtaking islands of the Philippines."
- ✓ "Three islands. Two domestic flights. One very good reason not to plan it alone."

---

## 7. Editorial naming system — "Inside ___"

The brand name is a content format. It works on the site, Instagram, TikTok, YouTube, email and print.

| Series | Where |
|---|---|
| **Inside Siargao / Palawan / El Nido / Coron / Bohol / Manila…** | Destination pages, reel series, guide covers |
| **Inside Hotels** | Hotel reviews and stay notes |
| **Inside Food** | Restaurants, markets, dishes |
| **Inside Surf / Inside Diving** | Activity guides |
| **Inside Honeymoons / Inside Family Travel** | Travel-style hubs |
| **Inside the Islands** | Routes and logistics (how islands connect) |
| **Inside Tips** | Short practical advice, carousel format |
| **Hidden Philippines** | Off-the-beaten-path series |
| **Inside Notes** | The newsletter |

**Insider modules** (reusable on every page): Inside tip · Our favourite · Worth the detour · Local favourite · Go early · Skip this, do this instead · Best sunset · Best breakfast · Best beach.

---

## 8. Newsletter — *Inside Notes*

Kept, because it is honest and extends the system. Sub-line: **"A monthly letter from the islands."**

Each issue: one route, one hotel discovery, one seasonal note ("what the weather is really doing in March"), one place to eat, one short story. Ends with *Start planning your trip*.

Alternatives considered: *The Island Letter* (pretty, loses the brand), *Notes from Inside* (good subject line format — use it for issue titles).

---

## 9. Social handle

Preferred: **@insidephilippines** (availability must be checked; I cannot verify it from here).

Fallbacks, in order: @inside.philippines · @insidephilippines.travel · @insidephl · @theinsidephilippines · @insidethephilippines.
Use the same handle on Instagram, TikTok, YouTube and Threads. See `docs/06-social-strategy.md`.
