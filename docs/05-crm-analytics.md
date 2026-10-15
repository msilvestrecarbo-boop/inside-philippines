# CRM and analytics

Deliverable 22 plus CRM (38–39).

## Events (`src/lib/analytics.ts`)

| Event | Fired when | Meta | TikTok |
|---|---|---|---|
| `design_trip_click` | Any Design my trip CTA (param `placement`: header, hero, mobile_sticky, final_cta, destination_hero, journey_price, landing_hero…) | – | – |
| `whatsapp_click` | Any WhatsApp link (`placement`) | Contact | Contact |
| `destination_view` | Destination page view (`destination`) | ViewContent | ViewContent |
| `journey_view` | Journey page view (`journey`) | ViewContent | ViewContent |
| `trip_builder_start` | First answer in the builder (`prefill`) | InitiateCheckout | – |
| `trip_builder_step` | Each step completed (`step`) | – | – |
| `trip_builder_complete` | Request accepted by the server | CompleteRegistration | CompleteRegistration |
| `generate_lead` | Same moment; also fires Google Ads conversion if configured | Lead | SubmitForm |
| `newsletter_signup` | Inside Notes signup | Subscribe | Subscribe |
| `language_change` / `currency_change` | Switchers | – | – |

Every event carries `language`, `currency`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, click IDs (gclid/fbclid/ttclid), landing page and referrer. Country is added server-side from the geo header on leads.

**GA4 setup:** mark `generate_lead` and `whatsapp_click` as key events; register `placement`, `journey`, `destination`, `landing`, `currency` as custom dimensions. Build a funnel exploration: `trip_builder_start → trip_builder_step(1..10) → generate_lead` to see where people drop.

**Consent:** nothing loads until the visitor accepts (EU/UK). If no analytics IDs are set, no banner appears.

**Env vars:** `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_GTM_ID` (optional), `NEXT_PUBLIC_GOOGLE_ADS_ID`, `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_TIKTOK_PIXEL_ID`, `GOOGLE_SITE_VERIFICATION`.

Recommended next: Meta Conversions API + TikTok Events API server-side from `/api/lead` (improves attribution from Instagram's in-app browser, which blocks many pixels).

## CRM: HubSpot

**Why HubSpot:** free CRM tier, deal pipelines, shared inbox that connects email + WhatsApp Business, quotes, sequences for follow-up, native GA4/Meta ads attribution, and an API the site already uses. Travel-specific alternatives (Tourwriter, Travefy, Moonstride, Tern) are stronger at itinerary building and supplier costing; they can sit alongside HubSpot later, fed by the same deal.

### Lead fields captured

Name · Email · Phone/WhatsApp · Country · Preferred language · Site language · Travel dates (exact / month / not sure) · Trip length · Who's travelling · Adults · Children + ages · Destinations (incl. "recommend for me" and free text) · Interests · Travel style · Budget amount + basis (per person / total / undecided) + currency · Occasions · Comments · Source journey / destination · UTM source, medium, campaign, content, term · Click IDs · Landing page · Referrer · IP country · Lead status.

Contact = person (email upsert, so repeat requests don't duplicate). Deal = this trip, with a readable summary in the description.

### One-time HubSpot setup
1. Private app with scopes `crm.objects.contacts.write`, `crm.objects.deals.write` → `HUBSPOT_PRIVATE_APP_TOKEN`.
2. Contact properties: `ip_whatsapp`, `ip_site_language`, `ip_utm_source`, `ip_utm_campaign` (single-line text).
3. Deal pipeline "Journeys" with the stages below → `HUBSPOT_PIPELINE_ID`, and the NEW LEAD stage id → `HUBSPOT_STAGE_NEW_LEAD`.
4. Recommended deal properties for reporting (phase 1.5): travel month, trip length, style, budget, destinations (multi-select), language.

### Pipeline stages (39)

```
NEW LEAD → CONTACTED → DISCOVERY → ITINERARY PREPARING → PROPOSAL SENT → REVISION
→ CONFIRMED → DEPOSIT PAID → TRAVELING → COMPLETED → FOLLOW-UP → REVIEW REQUESTED
```

Suggested automations: NEW LEAD → task to reply within 1 working day in the traveller's language; PROPOSAL SENT + 4 days → follow-up; TRAVELING → daily check-in reminder; COMPLETED + 7 days → review request (Google/Tripadvisor link) → testimonial into the CMS with consent.
