import type { FAQ, GuideArticle, Insider } from "./types";

/**
 * Travel guides ("Inside the Islands", "Inside Tips" and friends).
 *
 * Bodies are English-only markdown-lite: "## Heading" lines, paragraphs
 * separated by blank lines, and "- " bullets. Tables are not supported.
 * Title and description exist in all five languages so planned guides can
 * be listed (unlinked) everywhere.
 *
 * Facts that change (fees, schedules, visa rules) are deliberately phrased
 * with caution. Review every published guide at least twice a year.
 */

const UPDATED = "2026-10-01";

/**
 * English bodies, insider notes and FAQs for the guides published on
 * 2026-10-24 (previously listed as "in preparation"). Merged into
 * guides.ts by slug. Same markdown-lite rules as guides.ts.
 */

type More = { body: string; insiders: Insider[]; faqs: FAQ[]; related?: { destinations?: string[]; journeys?: string[] } };

export const moreGuides: Record<string, More> = {
  /* ------------------------------------------------------------------ */
  "best-philippines-itineraries": {
    body: `The Philippines rewards fewer stops, not more. With more than 7,000 islands and most connections running through Manila or Cebu, every extra island costs you half a day of travel. The routes below are the ones we come back to most, built around real flight and ferry links and tested against the weather. Treat them as starting points: we adjust every one to your dates, pace and budget.

## One week: Palawan, done properly

With seven nights, choose one region and enjoy it. Fly from Manila to El Nido (or to Puerto Princesa and drive north), spend four nights there, then take the fast ferry to Coron for three.

- Nights 1 to 4: El Nido. Island-hopping by private boat, a quiet beach day, kayaking in the lagoons early in the morning.
- Nights 5 to 7: Coron. Kayangan Lake, Twin Lagoon, Barracuda Lake and, for divers, the Second World War wrecks.
- Fly home from Coron (Busuanga airport) via Manila.

The trade-off: you see one island group in depth and nothing else. For a first trip, that is usually the right call.

## Two weeks: two or three islands with contrast

Fourteen nights is the sweet spot for a first visit. The classic shape pairs Palawan's lagoons with a completely different island.

- Palawan and Bohol: lagoons and limestone, then the Chocolate Hills, tarsiers, rivers and calm beaches on Panglao. Easy for families.
- Palawan and Siargao: lagoons, then surf, coconut forest and a slower, sociable island. Best from March to October on Siargao.
- Palawan, Bohol and Siquijor: add Siquijor's waterfalls and quiet coast by fast ferry from Bohol or via Dumaguete.

Expect one full travel day between Palawan and the Visayas, because most routes connect in Manila or Cebu.

## Three weeks: add the north or go slower

With 21 nights you can add the rice terraces of Banaue and Batad and the mountain town of Sagada, a long drive north of Manila, or slow everything down and add Camiguin or Negros. Our favourite three-week shape is Manila, the Cordillera, Palawan, then Bohol or Siargao, with a final night near Manila or Cebu airport before flying home.

## How we build a route

- Fewer moves: two or three bases for two weeks, never a new hotel every night.
- Connections that survive the weather: no tight self-transfers, and no outer-island night just before your international flight in the wet season.
- The right order: busy islands first, quiet ones last, so the trip winds down rather than speeds up.
- Season first: Palawan and Boracay from December to May; Siargao, Camiguin and Bohol hold up better from June to October.

## Common mistakes

Trying to see six islands in ten days. Booking the cheapest flight with a two-hour connection in Manila. Ending on a remote island the night before a long-haul flight. Skipping Bohol or Siquijor because they are less famous than they deserve. Tell us your dates and we will show you which version of these routes fits.`,
    insiders: [
      { type: "inside-tip", title: { en: "Put the quiet island last" }, body: { en: "End on Siquijor, Camiguin or a villa in Palawan rather than a busy town. You go home rested instead of rushed." } },
      { type: "skip-this", title: { en: "Skip the one-night stops" }, body: { en: "A single night on an island usually means a day of travel for half a day of beach. Two nights is our minimum, three is better." } },
      { type: "our-favorite", title: { en: "Our favourite two-week shape" }, body: { en: "Six nights in Palawan split between El Nido and Coron, then a week between Bohol and Siquijor. Lagoons, then countryside and waterfalls." } },
    ],
    faqs: [
      { q: { en: "How many islands can I see in two weeks?" }, a: { en: "Two or three island groups is comfortable. More than that and travel days start to eat into beach days." } },
      { q: { en: "What is the best one-week itinerary for the Philippines?" }, a: { en: "Palawan: four nights in El Nido and three in Coron, linked by fast ferry. If it is the wet season, look at Bohol and Siargao instead." } },
      { q: { en: "Should I include Manila?" }, a: { en: "One night on arrival or before departure is enough for most travellers. Intramuros and a good dinner are the highlights." } },
      { q: { en: "Can you adapt these routes?" }, a: { en: "Yes. Every route we send is built around your dates, interests and budget. Use Design my trip or message us on WhatsApp." } },
    ],
    related: { destinations: ["el-nido", "coron", "bohol", "siargao", "siquijor", "banaue"], journeys: ["island-classics", "essential-palawan", "palawan-bohol-boracay", "the-grand-philippines"] },
  },

  /* ------------------------------------------------------------------ */
  "philippines-honeymoon-guide": {
    body: `A Philippine honeymoon works best with two islands, private transfers and enough time to do nothing at all. The country has some of the most beautiful water in Asia, villas that sit directly on it, and boatmen who know how to find an empty beach. What it does not forgive is an over-packed itinerary.

## The best months

January to April is the most reliable window for beach days, calm seas and blue skies on the western islands. May is hot and usually calm. From June to October, look east and south (Siargao, Bohol, Camiguin), because Palawan and Boracay sit in the path of the southwest monsoon.

## Where to go

- El Nido and northern Palawan: the classic. Limestone islands, lagoons and island resorts where your room looks straight onto the sea.
- Coron: wilder, with freshwater lakes and the best snorkelling over coral gardens and wrecks.
- Boracay: easy, sociable and beautiful at sunset. Good for couples who want restaurants and a bit of life.
- Siargao: relaxed and romantic in a barefoot way, with surf, palm forest and island picnics.
- Bohol and Panglao: calm beaches, river trips and comfortable resorts. A gentle second stop.
- Private island resorts: the Philippines has a handful of very exclusive island resorts in Palawan. They are expensive and worth it if seclusion is what you want most.

## Our honeymoon shape

Ten to fourteen nights, two islands. Start with drama (El Nido or Coron), finish with stillness (a villa in Palawan, Bohol, Siquijor or Siargao). Every transfer private. No island arrival after dark. One spare day at the end before your international flight.

## The moments worth planning

- A private boat that leaves before the shared tours, so the lagoons are yours.
- A sandbar lunch or a dinner on the beach, set up for two.
- A couples' massage the day after the long-haul flight.
- Sunset from the water, on a paraw sailboat in Boracay or a bangka in El Nido.

## What to avoid

Midday at the most famous lagoons in high season. Resorts chosen only from photos. Itineraries with four islands in ten days. Tight connections in Manila. Tell us how you like to travel and we will plan the honeymoon around it, including every surprise you want to keep secret.`,
    insiders: [
      { type: "go-early", title: { en: "Be first into the lagoon" }, body: { en: "Leave at 7am with a private boat and you will often paddle the Big Lagoon in El Nido with nobody else in sight." } },
      { type: "our-favorite", title: { en: "A villa for the last four nights" }, body: { en: "Finish in a villa with its own stretch of beach. It is the part of the trip couples remember most." } },
    ],
    faqs: [
      { q: { en: "Where is the best place for a honeymoon in the Philippines?" }, a: { en: "El Nido in Palawan is the classic choice. Pair it with Coron, Bohol or Siargao for contrast and a slower finish." } },
      { q: { en: "How long should a Philippine honeymoon be?" }, a: { en: "Ten to fourteen nights lets you see two islands without rushing and still have days with nothing planned." } },
      { q: { en: "Can you arrange surprises?" }, a: { en: "Yes: private dinners, flowers in the room, a sandbar lunch or a sunset boat. Tell us privately and we keep it secret." } },
    ],
    related: { destinations: ["el-nido", "coron", "boracay", "siargao", "bohol"], journeys: ["honeymoon-inside-philippines", "luxury-palawan", "exclusive-philippines"] },
  },

  /* ------------------------------------------------------------------ */
  "philippines-with-children": {
    body: `The Philippines is one of the warmest places in Asia to travel with children, in every sense. Filipinos adore kids, beaches are often shallow and calm, and English is widely spoken. The secret is to keep transfers short, choose the right islands for the season and plan the days around the heat.

## The easiest islands for families

- Bohol and Panglao: calm beaches, the Chocolate Hills, the tarsier sanctuary and a river trip. Short distances and comfortable resorts.
- Cebu and Mactan: direct international flights, big family resorts and easy day trips. A good first or last stop.
- Boracay: soft sand and gentle water on White Beach from roughly November to May, with plenty of food choices.
- Palawan: El Nido and Coron are spectacular for older children who can swim and enjoy boat days. The transfers are longer, so we plan them carefully.
- Siargao: great for teenagers who want to learn to surf.

## Transfers and pacing

Keep the number of flights low and the transfers short. Two or three bases are plenty for two weeks. We use private vehicles so you stop when you need to, and we avoid early-morning flights after late arrivals. Child seats are not standard in Philippine cars; tell us ages and we will arrange what is available or suggest bringing a travel seat.

## Beaches and the sea

Many of the best beaches are shallow and calm in the dry season, ideal for small children. On boat days, every passenger wears a life jacket and we choose boats with shade. Rash guards and reef-safe sunscreen protect against the strong sun. Some beaches have sea urchins or sharp coral, so water shoes help.

## Health and comfort

- The sun is strong all year: hats, shade and water, and quieter time in the middle of the day.
- Drink bottled or filtered water. Mosquitoes carry dengue, so use repellent, especially at dawn and dusk.
- Cities like Manila, Cebu and Davao have good private hospitals. Small islands have basic clinics, which is one reason we keep young children close to the main hubs.
- Every trip includes travel insurance; check the cover for children with us when you book.

## What children love

Tarsiers in Bohol, snorkelling with turtles, a day on a bangka with lunch on a beach, kayaking in a lagoon, mango shakes and a sandcastle on a white beach. Tell us your children's ages and interests and we will build the trip around them.`,
    insiders: [
      { type: "inside-tip", title: { en: "Start and end in Cebu" }, body: { en: "Cebu has international flights and family resorts close to the airport, so the long-haul days stay short." } },
      { type: "our-favorite", title: { en: "Bohol for younger children" }, body: { en: "Calm water, short drives and tarsiers. It is our first suggestion for families with children under eight." } },
      { type: "skip-this", title: { en: "Skip long road transfers" }, body: { en: "The six-hour drive between Puerto Princesa and El Nido is tiring for small children. A direct flight to El Nido is worth it." } },
    ],
    faqs: [
      { q: { en: "Is the Philippines good for a family holiday?" }, a: { en: "Yes. Filipinos are very welcoming to children, beaches are often calm and shallow, and English is widely spoken." } },
      { q: { en: "Which island is best for families?" }, a: { en: "Bohol for younger children, Cebu for easy logistics, Boracay for a beach holiday and Palawan for older children who love boats." } },
      { q: { en: "Are there car seats?" }, a: { en: "Not as standard. Tell us your children's ages and we will arrange what is available or advise you to bring a travel seat." } },
    ],
    related: { destinations: ["bohol", "cebu", "boracay", "el-nido"], journeys: ["family-islands", "bohol-beach-escape", "island-classics"] },
  },

  /* ------------------------------------------------------------------ */
  "luxury-philippines": {
    body: `Luxury in the Philippines is not mainly about marble lobbies. It is about space and privacy: a private island with a handful of villas, a boat that takes you where the shared tours do not, a transfer that saves you half a day. Spend in the right places and the country delivers some of the most exclusive beach experiences in Asia.

## Where luxury is worth it

- Private island resorts in Palawan: a few resorts own or share an entire island, with villas on the sand or over the water and very few guests. This is where the money buys the most.
- Villas with staff: in El Nido, Siargao and Boracay, private villas with a cook and a housekeeper suit families and groups.
- Boracay's best resorts: polished, with private beach areas away from the busy main strip.
- Spa resorts in Bohol, Cebu and Tagaytay: good for a slower, restorative stop.

## Time is the real luxury

Most of the effort in a Philippine trip is getting between islands. Paying for better connections changes the whole experience.

- Private transfers on arrival and between every stop.
- Direct flights to small airports such as El Nido instead of long road journeys.
- Private charter flights, seaplanes and helicopter transfers on some routes, subject to availability, weather and permits. Ask us what is possible for your dates.
- Yachts and private boats for island-hopping, sunset cruises or multi-day sailing around Palawan.

## Experiences we like

A private boat to the lagoons at 7am. Lunch on a sandbar. A chef cooking your catch on the beach. A dive guide for just the two of you. A night on a remote island with no one else there. These are the moments that make the price worthwhile.

## Where not to overspend

Manila hotels are comfortable at every level, but one night is usually enough. Big-name brands are not always the best choice on small islands, where a small, well-run resort often beats a large one. And in the wet season, a top-tier room cannot change the weather, so time your trip well.

## How we work

We look for privacy, service and location, not just stars, and we tell you honestly when a cheaper option is the better one. Every Signature trip includes private transfers, hand-picked hotels and travel insurance with €2,000 cancellation cover.`,
    insiders: [
      { type: "worth-the-detour", title: { en: "One night truly alone" }, body: { en: "A remote island camp or villa for one night, with nobody else on the island, is the most memorable luxury we can arrange." } },
      { type: "inside-tip", title: { en: "Spend on boats, not on rooms" }, body: { en: "A private boat changes the El Nido experience more than any room upgrade." } },
    ],
    faqs: [
      { q: { en: "What are the most luxurious places to stay in the Philippines?" }, a: { en: "The private island resorts of northern Palawan, the best resorts in Boracay and private villas in El Nido and Siargao." } },
      { q: { en: "Can you arrange private flights or helicopters?" }, a: { en: "On some routes, private charters, seaplanes or helicopter transfers can be arranged, depending on availability, weather and permits. Ask us for your dates." } },
      { q: { en: "Is a yacht charter possible?" }, a: { en: "Yes, day charters and multi-day sailing trips are possible in Palawan and elsewhere. Tell us your group size and dates." } },
    ],
    related: { destinations: ["el-nido", "palawan", "boracay", "siargao"], journeys: ["luxury-palawan", "exclusive-philippines", "honeymoon-inside-philippines"] },
  },

  /* ------------------------------------------------------------------ */
  "domestic-flights-in-the-philippines": {
    body: `In the Philippines, flying is usually the fastest way between island groups. Domestic flights are short and often good value, but connections, baggage limits and the weather need planning. Here is how it works.

## The airlines

Philippine Airlines (with its regional arm PAL Express) and Cebu Pacific (with Cebgo) fly most domestic routes. AirSWIFT flies small aircraft to El Nido, and a few smaller carriers serve niche routes. Low-cost fares are cheap, but extras such as checked bags and seat selection are paid separately.

## The two hubs: Manila and Cebu

Most routes go through Manila (NAIA) or Cebu (Mactan-Cebu). Manila is the busier hub, and its terminals are not all connected airside, so changing terminals can take time in traffic. Cebu is often smoother and has useful connections to the Visayas and Mindanao, which can save you a stop in Manila. Clark, north of Manila, is a growing alternative.

## Baggage limits

Small aircraft to places like El Nido, Siargao and Busuanga (Coron) can have lower baggage allowances and weight limits, and excess baggage may not fly on the same plane. Pack in a soft bag, keep it light, and tell us if you travel with dive or surf gear so we can book the right allowance.

## Delays and cancellations

Delays are common, especially later in the day, as delays build through the schedule. In the wet season, typhoons can cancel flights for a day or more. That is why we:

- Book morning flights where possible.
- Never plan a tight connection on two separate tickets.
- Leave at least one night in Manila or Cebu before an international departure from an island, especially between June and November.

## Small airports

Some island airports are tiny, with a single runway and basic terminals. Siargao (Sayak), Busuanga, El Nido and Camiguin all have short check-in queues but limited facilities. Arrive on time; small planes may close check-in early.

## Practical tips

- Use the same name as in your passport when booking.
- Check in online when possible, but keep a printed or offline copy.
- Domestic terminal fees are usually included in the fare today, but some small airports and destinations charge local environmental fees on arrival.

We book and track every flight for you and rebook if a typhoon changes the plan.`,
    insiders: [
      { type: "inside-tip", title: { en: "Connect through Cebu" }, body: { en: "Bohol, Siargao, Siquijor (via Dumaguete) and Camiguin are often easier from Cebu than from Manila." } },
      { type: "go-early", title: { en: "Take the first flight" }, body: { en: "Early flights are the most punctual. Delays tend to build through the day." } },
    ],
    faqs: [
      { q: { en: "Which airlines fly within the Philippines?" }, a: { en: "Mainly Philippine Airlines and PAL Express, Cebu Pacific and Cebgo, plus AirSWIFT to El Nido and a few smaller carriers." } },
      { q: { en: "How much time should I leave between flights?" }, a: { en: "On separate tickets, at least three to four hours in Manila, and an overnight stop before an international flight in the wet season." } },
      { q: { en: "Are baggage limits strict?" }, a: { en: "On small aircraft, yes. Pack light in a soft bag and tell us about dive or surf equipment in advance." } },
    ],
    related: { destinations: ["manila", "cebu", "el-nido", "siargao", "coron"], journeys: ["island-classics", "the-grand-philippines"] },
  },

  /* ------------------------------------------------------------------ */
  "ferries-in-the-philippines": {
    body: `Ferries are part of the Philippine experience. Some routes are quicker by sea than by air, and arriving at an island by boat is often the most beautiful way to get there. There are three kinds of boats to know.

## Fast craft

Modern, air-conditioned passenger boats with assigned seats. They run the busiest short routes, such as Cebu to Bohol (about two hours), Dumaguete to Siquijor (about an hour), and El Nido to Coron (around four hours on a fast ferry). Main operators include OceanJet and 2GO's fast craft services; smaller companies run regional routes.

## Large ferries

Big roll-on roll-off ships carry vehicles and passengers on longer routes, sometimes overnight. They are slower and cheaper, with cabins on some routes. We rarely use them for holiday trips, but they are useful for travellers with time.

## Bangkas

The traditional outrigger boats used for island-hopping and short crossings. For tours, we use private bangkas with life jackets, shade and an experienced crew. Public bangkas also cross between some islands.

## Weather and the Coast Guard

When a storm signal is raised, the Philippine Coast Guard suspends sailings for small boats or for all vessels. This is for your safety and there is no way around it. In the wet season, especially from July to November, plan a buffer day after any sea crossing before an important flight.

## Booking and boarding

- Book popular fast craft in advance in high season; we do this for you.
- Bring your passport or ID; you may need it to board.
- Arrive at least an hour early. Ports charge small terminal fees, and some destinations collect environmental fees.
- Large bags go in a luggage area; keep valuables, water and seasickness tablets with you.

## Routes we use most

- Cebu to Tagbilaran (Bohol).
- Bohol or Dumaguete to Siquijor.
- El Nido to Coron.
- Cebu or Bohol to Camiguin via Mindanao.
- Siargao from Surigao, if not flying direct.

Sea crossings are calmest early in the day. If you are prone to seasickness, sit in the middle of the boat and take something before you board.`,
    insiders: [
      { type: "inside-tip", title: { en: "Sit at the back, outside" }, body: { en: "On fast craft, the open rear deck has the best air and views, and you feel the motion less than at the front." } },
      { type: "go-early", title: { en: "Morning crossings are calmer" }, body: { en: "Wind and waves often build in the afternoon. Take the first boat when you can." } },
    ],
    faqs: [
      { q: { en: "Are ferries in the Philippines safe?" }, a: { en: "The main fast craft operators run regular, supervised services, and the Coast Guard stops sailings in bad weather. We use reputable operators and private boats with life jackets." } },
      { q: { en: "How long is the ferry from El Nido to Coron?" }, a: { en: "Around four hours on a fast ferry, depending on the boat and the sea." } },
      { q: { en: "What happens if my ferry is cancelled?" }, a: { en: "We rebook you on the next available crossing and adjust the rest of the trip. That is why we leave buffer days in the wet season." } },
    ],
    related: { destinations: ["bohol", "siquijor", "coron", "el-nido", "cebu"], journeys: ["palawan-bohol-boracay", "bohol-and-camiguin"] },
  },

  /* ------------------------------------------------------------------ */
  "sim-cards-in-the-philippines": {
    body: `Staying connected in the Philippines is easy and affordable. You can buy an eSIM before you fly, or a local SIM card on arrival. Either way, you will want mobile data for maps, messages and ride-hailing.

## eSIM: the simplest option

If your phone supports eSIM, buy a data plan online before you travel and activate it when you land. Providers such as Airalo sell Philippine eSIMs that run on local networks. You keep your home number active for calls and two-factor codes, and you are online as soon as you leave the plane.

## Local SIM cards

The main networks are Smart and Globe, with DITO as the newer third network. SIM cards are sold at airport counters, convenience stores and mall kiosks. Prepaid data promos are inexpensive and easy to top up.

## Registration

Under Philippine law, every SIM must be registered. Tourists register with their passport, and tourist registrations are usually valid for a limited period (often 30 days) unless extended. The airport counters handle this for you; elsewhere you complete it online. eSIMs from international providers deal with registration in their own process.

## Coverage on the islands

Coverage is good in cities and most tourist towns, including El Nido, Coron, Siargao's General Luna, Bohol and Boracay. It drops on small islands, remote beaches, mountain roads and at sea. Smart and Globe have different strengths by area, so some travellers carry one of each.

## Practical tips

- Download offline maps before boat days and road trips.
- WhatsApp works well across the country; it is how our team stays in touch with you 24/7.
- Unlock your phone before you travel if you want a local SIM.
- Keep your home SIM safe in your wallet if you swap it out.

Our team sends you the latest eSIM and SIM advice with your travel documents.`,
    insiders: [
      { type: "inside-tip", title: { en: "Set it up before you fly" }, body: { en: "Install your eSIM at home on Wi-Fi and switch it on when you land. No queues at the airport." } },
      { type: "worth-the-detour", title: { en: "Carry two networks for remote trips" }, body: { en: "If you are heading to small islands or the mountains, a second SIM on the other network is cheap insurance." } },
    ],
    faqs: [
      { q: { en: "Should I buy an eSIM or a local SIM?" }, a: { en: "An eSIM is easiest if your phone supports it. A local SIM can be cheaper for long stays and gives you a Philippine number." } },
      { q: { en: "Do I need to register a SIM card as a tourist?" }, a: { en: "Yes. Philippine SIMs must be registered; tourists use their passport. Airport counters do it for you." } },
      { q: { en: "Is there mobile coverage on the islands?" }, a: { en: "In most tourist towns, yes. Expect weak or no signal on remote beaches, at sea and on mountain roads." } },
    ],
    related: { destinations: ["manila", "el-nido", "siargao"] },
  },

  /* ------------------------------------------------------------------ */
  "internet-in-the-philippines": {
    body: `Internet in the Philippines has improved a lot, but it is still uneven. In cities and many resorts it is fast enough for video calls; on small islands it can be slow or interrupted. If you need to work while you travel, plan your route around the connection.

## Hotel and resort Wi-Fi

Most hotels offer free Wi-Fi. Quality varies widely: it is often strong in the lobby and weaker in villas far from the main building. Some remote resorts now use satellite internet, which can be surprisingly good. We check the connection with each hotel before booking if you tell us you need it.

## Mobile data

4G is common in towns, and 5G is available in parts of the big cities. Mobile data is often faster than hotel Wi-Fi on the islands, so a local SIM or eSIM is a good backup. See our guide to SIM cards and eSIMs.

## Where the connection is good

- Manila, Cebu, Davao and other cities: fast fibre and mobile data.
- Siargao (General Luna), El Nido town, Boracay and Panglao in Bohol: generally good, with cafés and co-working spaces popular with remote workers.
- Coron town: reasonable; island resorts vary.

## Where it is not

Small islands, remote beaches, mountain areas such as Batad and Sagada, and anywhere at sea. Power cuts also happen on some islands, which can take the Wi-Fi down for a few hours.

## Working remotely

- Choose places with a back-up connection or a generator.
- Keep an offline copy of anything you need for the day.
- Schedule important calls for cities or well-connected towns, not for island-hopping days.
- A small power bank and a universal adapter (types A, B and C, 220V) are worth packing.

Tell us when you need to be online and we will plan the route so your connection is there when it matters, and the offline days are the ones you want.`,
    insiders: [
      { type: "inside-tip", title: { en: "Ask for a room near the router" }, body: { en: "In island resorts, rooms closer to the main building usually have a much better signal." } },
      { type: "our-favorite", title: { en: "Siargao for working stays" }, body: { en: "General Luna has cafés and co-working spaces with solid connections, plus surf before work." } },
    ],
    faqs: [
      { q: { en: "Is the internet good in the Philippines?" }, a: { en: "Good in cities and most tourist towns, variable on small islands and in the mountains. Mobile data is a useful backup." } },
      { q: { en: "Can I work remotely from the islands?" }, a: { en: "Yes, in places like Siargao, El Nido town, Boracay and Bohol. Tell us your needs and we choose hotels with reliable connections." } },
    ],
    related: { destinations: ["siargao", "el-nido", "boracay", "bohol"] },
  },

  /* ------------------------------------------------------------------ */
  "money-and-currency-in-the-philippines": {
    body: `The currency is the Philippine peso (PHP, written ₱). Cards work in hotels, malls and many restaurants, but cash is still essential on the islands. Here is how to handle money without surprises.

## Cash and ATMs

ATMs are easy to find in cities and larger towns, and most accept foreign cards. Local banks usually charge a fee per withdrawal on foreign cards (often around ₱250, on top of your own bank's charges), and withdrawal limits per transaction are fairly low. Take out larger amounts less often to reduce fees.

On small islands and remote beaches, ATMs may be few, out of cash or offline. Before heading somewhere remote, withdraw what you need in the last big town.

## Cards

Visa and Mastercard are accepted at most hotels, larger restaurants, malls and airlines. Small restaurants, markets, tricycles and boat crews usually want cash. Some places add a surcharge for card payments. Tell your bank you are travelling and carry two cards in case one is blocked.

## Exchanging money

Bring a few clean, undamaged euro or US dollar notes as a backup. Licensed money changers in malls and city centres usually give better rates than airports and hotels. Count your money at the counter and keep the receipt.

## Digital wallets

GCash and Maya are widely used by Filipinos, including in small shops, but setting them up usually requires a local number and verification. Most visitors manage with cash and cards.

## Tipping

Tipping is appreciated but not compulsory. Many restaurants add a 10% service charge; if they do not, leaving around 10% is generous. For guides, drivers and boat crews, a tip at the end of a good day is welcome. We can suggest amounts before you travel.

## Small notes matter

Keep small notes (₱20, ₱50, ₱100) for tricycles, snacks, fees and tips. Large notes can be hard to break in small places.

## A simple plan

Arrive with a card and a little cash in euros or dollars, withdraw pesos at the airport or in town, carry enough cash for each island, and pay hotels and big bills by card.`,
    insiders: [
      { type: "inside-tip", title: { en: "Withdraw before the islands" }, body: { en: "Before a remote island or a long boat day, take out cash in the last big town. Island ATMs run out at weekends." } },
      { type: "skip-this", title: { en: "Skip the airport exchange" }, body: { en: "Change only what you need for the first day at the airport. Malls and city money changers usually give better rates." } },
    ],
    faqs: [
      { q: { en: "Should I bring cash to the Philippines?" }, a: { en: "Bring a card and a small amount of euros or dollars as backup. Withdraw pesos locally and keep cash for small islands." } },
      { q: { en: "Can I use my card in the Philippines?" }, a: { en: "Yes in hotels, malls and larger restaurants. Small places, markets and transport usually need cash." } },
      { q: { en: "Is tipping expected?" }, a: { en: "It is appreciated, not required. Many restaurants add a service charge; for guides and boat crews, a tip after a good day is welcome." } },
    ],
    related: { destinations: ["manila", "el-nido", "siargao"] },
  },

  /* ------------------------------------------------------------------ */
  "is-the-philippines-safe": {
    body: `For most visitors, the Philippines is a safe and very friendly country to travel in. The main tourist islands (Palawan, Bohol, Cebu, Boracay, Siargao, Siquijor) see millions of visitors each year without problems. As anywhere, a few simple precautions make a big difference.

## Official advice worth reading

Before you book, read your own government's travel advice for the Philippines. Several governments advise against travel to parts of Mindanao, particularly the Sulu archipelago and some western and central areas. These are not on our itineraries. Popular destinations in northern Mindanao, such as Siargao and Camiguin, are generally treated differently, but always check the current advice.

## In cities

In Manila and Cebu, the main risks are petty theft and scams, as in any big city. Keep phones and wallets out of sight in crowds, use ride-hailing apps (Grab) or hotel cars rather than street taxis at night, and be wary of strangers who are suddenly very friendly and suggest a drink or a card game.

## At sea

Boat days are the highlight of most trips. Use reputable operators with life jackets for everyone, check the weather, and never insist on sailing when the crew or the Coast Guard says no. All our boats carry life jackets and experienced crews.

## Nature

- Typhoons: most common from July to November. Disruption is more likely than danger; we monitor the weather and adjust plans.
- Earthquakes and volcanoes: the Philippines is on the Pacific Ring of Fire. Follow local instructions if an alert is raised.
- Sun and heat: drink water, use shade and protect yourself from the sun.
- The sea: currents can be strong; swim where locals swim and respect red flags.

## Health

Drink bottled or filtered water. Use mosquito repellent, as dengue is present. Hospitals in big cities are good; small islands have basic clinics. Check vaccinations with your doctor before travel.

## How we look after you

Every trip includes travel insurance with €2,000 cancellation cover, private transfers on arrival, and our team on WhatsApp 24/7 during your trip. If the weather or the situation changes, we change the plan.`,
    insiders: [
      { type: "inside-tip", title: { en: "Use Grab in the cities" }, body: { en: "In Manila and Cebu, ride-hailing with Grab is easy, priced upfront and safer than hailing a taxi at night." } },
      { type: "local-favorite", title: { en: "Ask your boatman" }, body: { en: "Local crews know the sea better than any app. If they say it is too rough to cross, trust them." } },
    ],
    faqs: [
      { q: { en: "Is the Philippines safe for tourists?" }, a: { en: "Yes, the main tourist islands are generally safe and very welcoming. Read your government's travel advice and take normal city precautions." } },
      { q: { en: "Is Mindanao safe?" }, a: { en: "Parts of Mindanao are covered by government travel warnings, and they are not on our itineraries. Siargao and Camiguin are popular and generally treated differently, but check the current advice." } },
      { q: { en: "What happens if a typhoon hits during my trip?" }, a: { en: "We monitor the weather, rebook flights and ferries, and move you somewhere safe and comfortable. Your trip includes travel insurance." } },
    ],
    related: { destinations: ["manila", "siargao", "camiguin"] },
  },

  /* ------------------------------------------------------------------ */
  "philippines-packing-guide": {
    body: `Packing for the Philippines is mostly about the sun, the sea and small planes. Pack light, in a soft bag, and bring a few things that are hard to find on the islands.

## Clothes

- Light, breathable clothes in cotton or linen. It is warm all year.
- Swimwear, plus a rash guard for long boat and snorkelling days.
- A light layer for air-conditioned planes, buses and restaurants, and for the mountains in Banaue, Sagada or Tagaytay, where evenings are cool.
- Something modest that covers shoulders and knees for churches and mosques.
- A light rain jacket in the wet season (June to October).

## Shoes

Sandals, water shoes for rocky beaches and boat landings, and light trainers or walking shoes for waterfalls and hikes. Leave heavy boots at home unless you plan serious trekking.

## Sea and sun

- Reef-safe sunscreen, a hat and sunglasses. The sun is strong, even when it is cloudy.
- A dry bag for phones and cameras on boat days.
- A snorkel mask if you prefer your own; masks are also available locally.
- After-sun or aloe vera.

## Health

Mosquito repellent, a basic first-aid kit, motion-sickness tablets for boats, your usual medicines with prescriptions, and rehydration salts. Hand sanitiser and tissues are useful in small places.

## Electronics

The Philippines uses 220V at 60Hz with plug types A, B and C. A universal adapter covers all of them. Bring a power bank for long travel days, a waterproof phone pouch, and download offline maps before you go.

## Documents

Passport valid for at least six months, the eTravel registration completed before arrival, printed or offline copies of bookings, and your travel insurance details (included with every trip we plan).

## Bag and weight

Small planes have lower baggage allowances, so a soft duffel or backpack is easier than a large hard suitcase. If you bring dive or surf equipment, tell us before we book flights.

## What to leave at home

Heavy jeans, lots of shoes, expensive jewellery and anything you would hate to get wet. Laundry services are cheap and fast in most towns, so you can pack for a week even on a three-week trip.`,
    insiders: [
      { type: "inside-tip", title: { en: "Pack for a week" }, body: { en: "Laundry is quick and cheap almost everywhere. A week of clothes is enough for any trip length." } },
      { type: "our-favorite", title: { en: "The one thing guests forget" }, body: { en: "Water shoes. Boat landings, rocky beaches and waterfalls are far more comfortable with them." } },
    ],
    faqs: [
      { q: { en: "What should I wear in the Philippines?" }, a: { en: "Light, breathable clothes, swimwear and a rash guard, plus a light layer for air conditioning and something modest for churches." } },
      { q: { en: "What plug adapter do I need?" }, a: { en: "The Philippines uses types A, B and C at 220V and 60Hz. A universal adapter is the easiest option." } },
      { q: { en: "Can I bring a big suitcase?" }, a: { en: "You can, but small planes have lower limits and boats are easier with soft bags. Pack light if you can." } },
    ],
    related: { destinations: ["el-nido", "siargao", "banaue"] },
  },

  /* ------------------------------------------------------------------ */
  "philippine-customs-and-etiquette": {
    body: `Filipinos are famously warm, generous and welcoming. You do not need to learn many rules to be a good guest, but a few small gestures go a long way and will often earn you a big smile.

## Respect and politeness

- Po and opo: adding "po" to a sentence, and saying "opo" for yes, shows respect, especially to older people. Visitors who try it are always appreciated.
- Kuya and ate: "older brother" and "older sister" are polite, friendly ways to address drivers, staff and vendors.
- Mano: younger Filipinos greet elders by taking their hand and touching it to their forehead. You will see it at family gatherings; you are not expected to do it, but it is lovely to understand.

## Saving face

Open anger or raising your voice in public is considered embarrassing for everyone. If something goes wrong, stay calm and friendly; problems get solved faster that way. Filipinos may also avoid saying a direct "no", so listen for a polite "maybe" or "we will try".

## Time

"Filipino time" is a gentle joke about relaxed schedules. Social events often start late; flights and boats, however, leave on time, so be punctual for transport.

## Food and eating

Meals are shared and generous. You may be offered food again and again; it is fine to accept a little. Eating with your hands (kamayan) is traditional, especially at a boodle fight, a feast served on banana leaves. Wash your hands, use your right hand and enjoy it. Rice comes with almost everything.

## Churches and religion

The Philippines is mostly Catholic, with a Muslim community mainly in Mindanao. In churches, cover shoulders and knees and stay quiet during Mass. Fiestas are joyful, open celebrations and visitors are usually welcome.

## Homes

Take your shoes off when entering someone's home. Bringing a small gift such as pastries or fruit is a kind gesture.

## Gestures

Filipinos often point with their lips and raise their eyebrows to say yes. "Psst" is a normal way to get someone's attention. Beckoning with your palm up can feel rude; use your palm facing down instead.

## Tipping and bargaining

Tipping is appreciated but not expected. Gentle bargaining is fine at markets, but keep it light and friendly; the difference often matters more to the seller than to you.

## A few useful words

Salamat (thank you), salamat po (thank you, respectfully), magandang umaga (good morning), ingat (take care) and masarap (delicious). Most Filipinos speak English, but a few words of Tagalog or the local language will always be welcomed.`,
    insiders: [
      { type: "local-favorite", title: { en: "Join a boodle fight" }, body: { en: "A shared feast on banana leaves, eaten with your hands, is the most Filipino meal you can have. Ask us to arrange one on a boat day." } },
      { type: "inside-tip", title: { en: "Add po" }, body: { en: "Saying \"salamat po\" instead of \"thank you\" costs nothing and makes people smile everywhere." } },
    ],
    faqs: [
      { q: { en: "Do people speak English in the Philippines?" }, a: { en: "Yes, English is an official language and widely spoken, especially in tourist areas." } },
      { q: { en: "How should I dress when visiting churches?" }, a: { en: "Cover your shoulders and knees, remove your hat and stay quiet during services." } },
      { q: { en: "Is it rude to eat with your hands?" }, a: { en: "No. Kamayan, eating with your hands, is traditional. Use your right hand and wash before eating." } },
    ],
    related: { destinations: ["manila", "cebu", "bohol"], journeys: ["cebu-islands-and-culture", "rice-terraces-and-islands"] },
  },
};

/* ------------------------------------------------------------------ */
/* Bodies                                                              */
/* ------------------------------------------------------------------ */

const bestTimeBody = `The honest answer is that there is no single best month to visit the Philippines, because there is no single Philippine climate. The country stretches roughly 1,800 kilometres from Batanes in the north to Tawi-Tawi in the south, and two monsoons hit it from opposite directions. When it is pouring on one coast, the other is often dry. The skill is not picking the month. It is matching the month to the right islands.

That said, if you want a short version for a first trip: January to April is the most reliable window for the classic island circuit, and December to May works well for most of the country.

## The two seasons, and the two winds

Filipinos talk about two winds more than two seasons. The amihan, the northeast monsoon, blows roughly from November to March. It is cool, mostly dry on the western side of the country, and brings rain and choppy seas to east-facing coasts. The habagat, the southwest monsoon, blows roughly from June to October. It brings the wet season to the west: Manila, western Luzon, Palawan and the western Visayas.

In between sits the hot, dry stretch from March to May, when the sea is usually flat, the light is hard and bright, and Manila is uncomfortable by 10am.

- December to February: dry and comparatively cool across most of the west. The busiest and most expensive period, especially around Christmas, New Year and Chinese New Year.
- March to May: hot and dry. Calm seas, excellent for island-hopping and diving. Holy Week (Easter) fills every beach town with domestic travellers.
- June to October: the wet season in the west and the main typhoon period. Fewer visitors, greener landscapes, lower prices, more cancellations.
- November: a transition month. Often lovely, sometimes not, and worth the gamble if your plans are flexible.

## Typhoons, honestly

Typhoons can form in any month, but most cross the Philippines between roughly July and November, and the central and northern parts of the country (the Visayas and Luzon) take the most hits. Mindanao lies largely south of the main track, although it is not immune: a powerful typhoon struck Siargao in December 2021.

What a typhoon usually means for a traveller is not danger but disruption. The Coast Guard suspends sailings when a storm signal is raised, airlines cancel flights, and you may lose one or two days. That is why we never plan the last 48 hours of a trip on an outer island in the wet season. You want to be near your international departure airport, with a day of slack.

## Where to go, by season

If you are travelling between December and May, almost everything is open to you. This is the season for Palawan (El Nido, Coron and the long road between), Boracay, Bohol, Siquijor, Cebu and the classic island-hopping trips. Batanes, in the far north, is at its best from March to May, when the wind drops and the flights are more reliable.

If you are travelling between June and October, look east and south. Siargao, Camiguin and much of Mindanao sit outside the worst of the southwest monsoon. Coron is better sheltered than El Nido. Bohol and Cebu often get a reasonable amount of sunshine between showers. The surf on Siargao is generally at its best from around August to November, which suits surfers perfectly and everyone else reasonably.

## Best time for specific trips

- Island-hopping in El Nido and Coron: February to May for the calmest seas.
- Diving: March to June for the widest choice, including the short Tubbataha season (roughly mid-March to mid-June). Many sites in Cebu, Bohol and Negros dive well all year.
- Surfing on Siargao: roughly August to November for Cloud 9 at its best. La Union and Baler on Luzon work from around October to March.
- Honeymoons: January to April, when beach days are most predictable.
- Rice terraces at Banaue and Batad: the terraces are planted and green in different months from village to village; ask us about the year you are travelling rather than trusting a single photo.
- Batanes: March to May.
- Festivals: Sinulog in Cebu and Ati-Atihan in Kalibo (both in January), Dinagyang in Iloilo (January), and the MassKara Festival in Bacolod (October).

## Prices and crowds

The peak weeks are Christmas to early January, Chinese New Year and Holy Week. Rooms in El Nido, Coron and Boracay can sell out months ahead, and the best boats get booked first. If you want peak-season quality without peak-season pressure, aim for late January, February or late April to May (avoiding Easter).

In the wet season, many good hotels drop their rates noticeably, and you will often have a beach to yourself in the afternoon. The trade-off is that you must accept a day of rain, or a boat trip moved, without it ruining the trip.

## The shoulder months

November and the second half of May are our favourite gambles. In November the west is drying out, the light is clean after months of rain, and hotels have not yet switched to peak rates. In late May the sea is usually still flat, Holy Week crowds are long gone, and you can often book the best boat in El Nido for the day you want. The risk in both months is the same: an early or late typhoon. If your dates are flexible by a day or two and your route ends near an international airport, the odds are firmly on your side.

## Our verdict

For a first trip with two or three islands: travel between mid-January and early May. For a second trip, or if your dates are fixed in the summer: go east to Siargao, or south to Camiguin and Bohol, and keep Palawan for another year. And whatever the month, build in one spare day before your international flight home. It is the cheapest insurance in the country.`;

const weatherBody = `Philippine weather is regional before it is seasonal. A blue-sky week in El Nido can coincide with a grey, wind-whipped week in Siargao, and vice versa. Use this month-by-month guide as a starting point, then check the coast you are actually heading to. Temperatures at sea level sit between about 24°C and 33°C all year; humidity is high in every month. What changes is the rain, the wind and the state of the sea.

## How to read Philippine weather

Two things drive almost everything. The northeast monsoon (amihan), roughly November to March, brings rain to east-facing coasts and cooler, drier air to the west. The southwest monsoon (habagat), roughly June to October, brings the wet season to the west, including Manila and Palawan. Typhoons are most frequent between July and November and mostly affect Luzon and the Visayas.

## Month by month

- January: one of the best months for most of the country. Dry and comparatively cool in the west, with sea breezes in Palawan and Boracay. The east (Siargao, Samar, eastern Mindanao) can be rainy and the sea rough. Festival season: Sinulog in Cebu and Ati-Atihan in Kalibo. Book early.
- February: probably the most reliable month for a classic first trip. Dry across Palawan, Bohol, Cebu and Boracay, with Manila pleasant in the evenings. The amihan can still make some boat crossings bumpy on windy afternoons. Chinese New Year sometimes falls in this month and fills hotels.
- March: the dry season settles in properly. Seas calm down, diving visibility improves and the heat starts to build. Batanes begins its good season. Excellent month for El Nido and Coron island-hopping.
- April: hot, dry and usually calm. Beaches are at their most photogenic. Holy Week, which often falls in April, sends much of the country to the coast, so book beach towns well ahead. Manila is very hot.
- May: the hottest month in many places, often above 33°C in Manila. Seas still mostly calm. Late May can bring the first thunderstorms and, some years, an early typhoon. A good value month if you can handle the heat.
- June: the southwest monsoon begins in the west. Expect afternoon storms in Manila and Palawan, but also plenty of usable mornings. Prices start to drop. Siargao, Camiguin and Bohol are sensible choices.
- July: wet in Manila, Palawan and western Luzon, with more frequent typhoons. Sea crossings in the west are more often cancelled. The east and south are generally better. Good for travellers with flexible plans.
- August: often the wettest month in Manila. Typhoon activity is high. Siargao's surf season is starting and the island usually sees long sunny spells. Coron, being more sheltered, can still work for wreck diving.
- September: still wet in the west and an active typhoon month. Siargao's surf is generally at its best and the island is lively; competitions are often held around this time. Lowest prices in many beach towns.
- October: the transition month. The southwest monsoon weakens, but typhoons remain possible. Some years October is beautiful in Palawan; some years it is not. MassKara Festival in Bacolod.
- November: drying out in the west, though late typhoons do happen. Crowds have not arrived yet and hotels are still moderately priced. The amihan begins to bring rain to the east. A smart month for flexible travellers who want Palawan without the peak.
- December: the dry season returns to most of the west, with lovely clear mornings. The east can be wet. Christmas is the biggest celebration of the year in the Philippines and the last two weeks of December are the busiest and most expensive of all.

## Sea conditions matter more than rain

For an island trip, the question that matters most is not whether it will rain but whether boats will sail. A shower at 4pm costs you nothing. A small-craft advisory costs you a day. Sea conditions tend to be calmest from March to May across most of the country. In the amihan months, crossings on exposed routes can be cancelled on windy days even when the sky is blue.

## Rain, but what kind?

Wet-season rain in the Philippines is usually not all-day drizzle. More often it is a heavy downpour in the afternoon or evening, followed by clear air. The exceptions are typhoons and the stretches when the southwest monsoon is strengthened by a passing storm, when it can rain hard for two or three days. That is when flights are cancelled and ferries stay in port.

## Microclimates worth knowing

- Baguio, Sagada and the Cordillera: noticeably cooler, especially at night. Bring a fleece from December to February, when mornings can feel cold.
- Batanes: windswept, with its own rhythm. Best from March to May; flights are frequently cancelled in bad weather.
- Siargao and Surigao: the wettest stretch is often around December to February, under the amihan.
- Cebu, Bohol and Negros: relatively sheltered and often a reasonable choice in any month.
- Mindanao: generally outside the typhoon belt, with rain spread more evenly across the year.

## How we plan around it

We look at three things before suggesting a route: the month, the coast each island faces, and how many sea crossings the plan relies on. In the wet season, we favour flights over long ferries, keep boat days in the morning, and end every itinerary close to the international airport with a spare day. In the dry season, we do the opposite and take the boats, because that is when the crossings are a highlight rather than a risk.`;

const howManyDaysBody = `Most people underestimate how long the Philippines takes, not because the distances are huge but because the connections are. Almost every island trip involves a flight, a transfer and often a boat, and few of them line up neatly. Our rule of thumb: every move between islands costs about half a day, and some cost a whole one.

So the real question is not how many days you need to see the Philippines. It is how many islands you can enjoy in the days you have. Here is how we think about it.

## The basic maths

Count your nights on the ground, not your days away from home. From Europe, the journey usually involves one connection and 16 to 20 hours door to door; from the Gulf, a direct flight to Manila is around nine hours. Your first and last days are travel days. Then:

- Allow at least three nights per island, ideally four. Two nights means one full day, which is not enough to recover from getting there.
- Allow half a day for each transfer between islands, and a full day for any transfer involving a flight plus a long road or boat leg.
- Add one buffer night near your international departure airport, especially between June and November.

## One week

A week is enough for one island region, done well. Fly into Manila or Cebu, connect the same day if the timing works, and stay put.

- Palawan in a week: El Nido for four nights, with a night either side in Puerto Princesa or Manila depending on flight times. Or Coron for four nights if you prefer wrecks and lakes over lagoons.
- Bohol and Panglao for a week: easy logistics, gentle pace, and the option of a day trip to Balicasag or a hop across to Siquijor.
- Siargao for a week: surf, island-hopping and mangroves without leaving the island.

What does not work in a week: El Nido plus Siargao plus Bohol. You would spend more time in airports than on beaches.

## Ten days

Ten days is the sweet spot for two islands. You can pair a lagoon island with a jungle island, or two very different moods:

- El Nido and Coron, connected by the fast ferry in season (around four hours, weather permitting).
- Bohol and Siargao, connected by a direct flight from Cebu or via Manila.
- Cebu and Bohol, linked by a two-hour fast ferry, with a few nights in Moalboal or Malapascua.

Our sample route Ten Days, Two Islands is built exactly on this logic.

## Two weeks

Two weeks gives you three islands, or two islands at a slower pace with a city night at each end. A classic first-timer's fortnight: four nights El Nido, three nights Coron, four nights Siargao or Bohol, with a night in Manila on arrival and another before departure if flights demand it.

If you prefer fewer moves, two weeks is also enough to go deep on Palawan alone: Puerto Princesa, Port Barton, El Nido and Coron, in that order, using the road for the first leg and the ferry for the last.

## Three weeks or more

Three weeks lets you add a region that most visitors never reach: the rice terraces of Banaue and Batad, or the cool mountain town of Sagada, or the far north of Batanes. It also lets you combine the Visayas and Palawan without rushing: Bohol, Siquijor and Dumaguete one week, Palawan the next, and a surf or rest island to finish.

At this length, the risk changes. You will not run out of time; you will run out of energy. Build in two or three days in a row with no moves at all, around the middle of the trip.

## Signs you are trying to do too much

- More than one transfer every three nights.
- An itinerary where any island gets two nights or fewer.
- A domestic flight on the same day as your international arrival, with less than three hours between them.
- A boat crossing scheduled on your last day.
- More than two regions (for example Palawan, the Visayas and northern Luzon) in under two weeks.

## Where the time goes

People often ask why a "one-hour flight" takes all day. A typical move from El Nido to Siargao, for example, looks like this: a van or tricycle to El Nido's airport, a flight to Manila or Cebu, a connection, a second flight to Siargao, then 30 to 45 minutes by road to General Luna. Even when everything runs on time, that is six to eight hours from door to door. When one flight is delayed, it can be longer.

Direct routes do exist and they change by season, which is one reason we design routes month by month rather than reusing a template.

## A word on Manila

Manila is not a stopover to be endured. Intramuros, Binondo and the National Museum fill a very good day, and the food scene is the most varied in the country. But it is also a city of heavy traffic, where a short taxi ride can last an hour. One or two nights is right for most visitors: enough to recover from the long-haul flight and see the old city, not so much that it eats your island time. If your route starts in the Visayas, you may not need Manila at all; fly into Cebu instead.

## Our recommendation

For a first trip: two weeks, three islands at most, with a buffer night before you fly home. If you only have ten days, choose two islands and give each one four or five nights. You will see less on the map and much more on the ground, and you will go home rested, which in the Philippines is not a small thing.`;

const firstTimeBody = `The Philippines is easier than it looks from the outside and harder than it looks once you are here. English is spoken almost everywhere, people are warm and helpful, and the islands are very beautiful. But the logistics reward planning, Manila can be an intense first few hours, and a few small things (cash, connections, timing) make a large difference to how your trip feels.

This is what we tell friends before their first visit.

## Arriving in Manila

Most international flights land at Ninoy Aquino International Airport (NAIA) in Manila, which has more than one terminal. Check which terminal your onward domestic flight leaves from: moving between terminals means going landside and can take an hour or more in traffic.

If you are connecting to an island on the same day, leave at least three to four hours between your scheduled international arrival and your domestic departure, and more if you are checking bags through on separate tickets. If your flight lands in the evening, stay one night near the airport and connect in the morning. It is a short, unglamorous night that protects the rest of your trip.

Some international flights also arrive at Mactan-Cebu, which is often a smoother gateway for trips focused on Cebu, Bohol, Siquijor or Siargao.

## Getting around

Ride-hailing apps work well in Manila, Cebu and a few other cities and are the simplest way to get around. Use official airport taxis or pre-arranged transfers when you land. On the islands, you will meet tricycles (motorbikes with a sidecar), vans and, in some places, scooters for rent. On boats, you will travel in bangkas, the outrigger boats that do most of the country's short-hop transport.

Between islands, you will mostly fly. Ferries are excellent on some routes (Cebu to Bohol, Dumaguete to Siquijor, Coron to El Nido in season) and slow or unreliable on others. See our guide to travelling between islands.

## Money

The currency is the Philippine peso (PHP). Card payment is accepted in most hotels and many restaurants in cities and main resort areas, but cash is still essential on the islands: for tricycles, small restaurants, environmental fees, boat tips and markets.

- ATMs are easy to find in cities and main towns, but they can run dry on small islands, especially on weekends and holidays. Withdraw before you arrive.
- Most local ATMs charge a fee per withdrawal on top of whatever your home bank charges, and many limit how much you can take out each time.
- Carry small notes. Change for a 1,000-peso note can be hard to find at a beach stall.
- Several destinations charge environmental or eco-tourism fees, payable locally. They are modest and go towards conservation.

## Staying connected

Buy a local SIM or eSIM at the airport or in town; the two main networks both have shops in arrival halls. Registration with your passport is required by law. Mobile data is good in cities and patchy on boats and in remote coves. Hotel wifi varies widely, from excellent to decorative, and even good hotels on outer islands can lose connection in storms.

## Health and comfort

- Drink bottled or filtered water. Most hotels provide refills.
- The sun is strong at every time of year. Reef-safe sunscreen, a hat and a long-sleeved rash guard for boat days.
- Mosquitoes are around, particularly at dusk. Bring repellent.
- Pharmacies are easy to find in towns, less so on small islands. Bring what you need.
- Take out travel insurance that covers diving or surfing if you plan to do either.

## Etiquette, briefly

Filipinos are warm, polite and often more formal than visitors expect. A few things help:

- A smile and patience go a long way. Raised voices rarely solve anything.
- "Po" and "opo" are added to speech as a mark of respect, especially to elders. You will not be expected to use them, but people appreciate the effort.
- Dress modestly in churches. Shoulders and knees covered is a safe rule.
- Tipping is not obligatory but is appreciated. A service charge is often added in restaurants; if not, rounding up or leaving around 10% is generous. Boat crews and guides who have looked after you well deserve a tip.
- Pointing with your lips or raising your eyebrows to say yes is common; you are not imagining it.

## Pace yourself

The single most common mistake on a first trip is trying to see too much. The Philippines is not a country you can tour in a straight line. Every island transfer costs half a day, and the best things (a quiet lagoon at 7am, a long lunch on a sandbar, a sunset you were not rushing to catch) need time.

For a first trip of two weeks, we suggest three islands at most. Pick contrasting ones: a limestone island (El Nido or Coron), a countryside island (Bohol or Siquijor), and a surf or rest island (Siargao) at the end.

## What surprises first-time visitors

- How much English is spoken, and how good it is.
- How long Manila traffic can take; a 10-kilometre trip can last an hour.
- How early everything starts. Island-hopping boats leave at 8am or 9am, the best light is at 6am, and many restaurants on smaller islands close early.
- How much the experience depends on timing. The same lagoon can be serene at 7am and full of boats at 11am.
- How generous people are with directions, recommendations and time.

## Before you go

- Check your passport validity and the entry rules for your nationality (see our visa guide).
- Complete the eTravel registration online within 72 hours before arrival.
- Download offline maps; signal can drop on boats and mountain roads.
- Save digital copies of your passport, tickets and insurance.
- Leave space in your bag. You will come home with dried mangoes.`;

const betweenIslandsBody = `In the Philippines, the map lies. Two islands that look a short hop apart may have no direct connection at all, while two that look far apart are linked by a daily flight. Getting between islands is the single biggest planning challenge in the country, and the part where a good route saves you the most time.

Here is how it actually works.

## Think in hubs, not lines

Domestic aviation in the Philippines works on a hub-and-spoke model. Manila is the main hub, Cebu (Mactan) is the second, and Clark, north of Manila, is growing. Most island airports connect to one or both hubs, and far fewer connect to each other.

So the fastest route from El Nido to Siargao is usually not a straight line. It is El Nido to Manila or Cebu, then on to Siargao. The fastest route from Coron to Bohol usually goes through Manila or Cebu too. Once you accept this, planning gets much easier: you choose your islands, then check which hub links them best in your month.

Direct routes between islands do exist (Cebu to Siargao, Cebu to Puerto Princesa, Cebu to Caticlan for Boracay, and some seasonal links), and they change. Schedules are revised several times a year, routes are added and dropped, and frequencies rise and fall with the season. Always check current timetables before you lock in a plan.

## Typical flight times

Approximate block times, which give you a sense of scale. Add check-in, transfers and the occasional delay.

- Manila to Puerto Princesa: about 1 hour 20 minutes.
- Manila to El Nido: about 1 hour 20 minutes, on smaller aircraft with tight baggage limits.
- Manila to Busuanga (for Coron): about 1 hour.
- Manila to Siargao: about 1 hour 45 minutes.
- Cebu to Siargao: about 1 hour.
- Manila to Bohol-Panglao: about 1 hour 20 minutes.
- Manila to Caticlan (for Boracay): about 1 hour.
- Manila to Cebu: about 1 hour 20 minutes.

## Baggage, the quiet trip-wrecker

Domestic fares often include only hand luggage, and the cheapest tickets have strict weight limits. Flights into small airports such as El Nido use turboprops with lower allowances and limited hold space. Surfboards, dive gear and large suitcases need to be pre-booked and paid for, and are sometimes refused if the hold is full. If you are travelling with sports equipment, tell us early: it changes which routes make sense.

## Ferries and fast craft

Some sea routes are excellent, quicker door to door than flying, and a pleasure in good weather:

- Cebu City to Tagbilaran (Bohol): around 2 hours by fast craft, several departures a day.
- Dumaguete to Siquijor: around 1 hour by fast craft.
- Tagbilaran to Siquijor: around 2 hours, less frequent.
- Coron to El Nido: around 4 hours by fast ferry, typically operating in the dry season and subject to weather. A slower, larger ferry also runs on some days.
- Surigao City to Siargao: around 2 hours by fast craft, useful if flights are full.
- Caticlan to Boracay: around 15 minutes by bangka, with a terminal fee and environmental fee.

Longer overnight ferries connect Manila with Cebu, Iloilo and other ports. They are cheap and can be atmospheric, but for a holiday with limited days, a one-hour flight usually wins.

When the weather turns, the Philippine Coast Guard suspends sailings for small vessels, sometimes for days. This is the right call, and you should never pressure a boat captain to cross. It is also why we prefer flights for any crossing on your last two days.

## Roads and vans

Some important legs are by road. Puerto Princesa to El Nido is around 5 to 6 hours by van (shared or private), with a stop for lunch. Puerto Princesa to Port Barton is around 3 hours. Busuanga airport to Coron town is around 30 to 40 minutes. Siargao airport to General Luna is around 30 to 45 minutes. A private van costs more but lets you stop where you like, which, on the Palawan road, is worth it.

## Bangkas and private boats

The bangka, the double-outrigger boat, is how you will spend your best days: island-hopping, snorkelling, getting to beaches with no road. Shared tours run on set routes and leave at fixed times. Private boats let you go early, change the order and avoid the crowds, and in places like El Nido and Coron they transform the experience. For some routes, such as the multi-day expedition trips between El Nido and Coron, a boat is the transfer itself.

## Building a sensible route

- Choose islands that share a hub. Palawan and Manila pair easily; Bohol, Siquijor, Siargao and Cebu pair through Cebu.
- Fly into one hub and out of another if it saves backtracking (for example, into Manila and out of Cebu).
- Avoid same-day connections from international arrivals on separate tickets.
- Put sea crossings early in the trip and flights at the end.
- In the wet season, prefer routes with more than one daily flight, so a cancellation does not cost you a day.

## Classic pairings that work

- El Nido and Coron: by fast ferry in season, or via Manila by air.
- Cebu, Bohol and Siquijor: by fast craft, a loop with almost no flying.
- Bohol and Siargao: via Cebu by air.
- Palawan and Siargao: via Manila or Cebu, a full travel day.
- Manila and the rice terraces: overnight bus or private car, around 9 to 10 hours to Banaue.

## What we do differently

We plan every route by the month and by the timetable that actually exists, not by a map. We keep a buffer before international departures, choose flight times that leave room for the inevitable delay, and use private transfers where a shared one would cost you an afternoon. If a flight is cancelled, our team rearranges the next leg so you do not have to stand in a queue to do it.`;

const bestIslandsBody = `There are 7,641 islands in the Philippines, and no one has been to all of them, including us. What we can tell you is which ones are worth building a trip around, what each is really like, and who will love it. This is our list, with honest trade-offs.

## Palawan: El Nido

The limestone island most people picture when they think of the Philippines. Karst cliffs rise straight out of turquoise water, lagoons hide behind rock walls, and the island-hopping is among the best in Asia. The trade-off: El Nido town is busy, noisy and still catching up with its own popularity. Stay outside town, on a quieter beach or an island resort, and go out early.

Best for: first-timers, couples, lagoon kayaking, island-hopping.
Best season: roughly December to May.

## Palawan: Coron

Coron is wilder and less polished than El Nido, which is exactly why some people prefer it. Its highlights are underwater: Second World War Japanese shipwrecks sunk in 1944, which make Coron one of the world's great wreck-diving destinations, and the freshwater lakes of Kayangan and Barracuda. Coron town itself is functional rather than pretty. The beauty is out on the water.

Best for: divers, snorkellers, adventurous couples.
Best season: roughly November to May; more sheltered than El Nido in the wet season.

## Siargao

The surf island that became a lifestyle. Siargao has palm-lined roads, island-hopping to Naked, Daku and Guyam, rock pools at Magpupungko, mangrove lagoons and a relaxed, young, international scene in General Luna. Cloud 9 is one of Asia's most famous waves. The trade-off: General Luna has grown fast and gets busy; head north to Pacifico or Burgos for the quieter island.

Best for: surfers, young couples, digital nomads, anyone who wants a beach life rather than a beach resort.
Best season: roughly March to October; surf peaks from about August to November.

## Bohol

A gentle, green island with plenty to do: the Chocolate Hills, tarsiers in a proper sanctuary, river cruises on the Loboc, old stone churches, and the beaches and dive sites of Panglao and Balicasag. Bohol is easy to reach from Cebu by fast ferry and works well for families and first trips.

Best for: families, first-timers, countryside and culture.
Best season: most of the year; relatively sheltered.

## Siquijor

Small, quiet and slightly mysterious. Siquijor has a reputation for folk healers, waterfalls you can swim in, a coastal road you can drive in a day, and some of the best sunsets in the Visayas. There is very little to do in the conventional sense, which is the point.

Best for: slow travellers, couples, anyone who wants a few days of nothing.
Best season: roughly November to May.

## Boracay

Boracay is the Philippines' most famous beach and, yes, it is busy. White Beach is a long, soft, bright stretch of sand, the sunsets are excellent and the island is easy. After a major closure and rehabilitation in 2018, it is cleaner and better regulated than its reputation suggests. Choose your end of the beach carefully, and go if you want convenience and nightlife, not seclusion.

Best for: easy beach holidays, groups of friends, short stays.
Best season: roughly November to May.

## Cebu: Moalboal and Malapascua

Cebu island is a gateway and a destination in its own right. On the southwest coast, Moalboal has the famous sardine run, a shoal of millions of fish a few fins' kicks from the shore. In the north, tiny Malapascua is the place to see thresher sharks at Monad Shoal at dawn. Southern Cebu also has canyoneering at Kawasan.

Best for: divers, snorkellers, active travellers.
Best season: most of the year.

## Camiguin

A small volcanic island off northern Mindanao with seven volcanoes, hot and cold springs, a sunken cemetery and the white sandbar of White Island. Camiguin is far from the main circuit and feels it, in a good way.

Best for: second-time visitors, families, slow travellers.
Best season: generally good much of the year; outside the main typhoon belt.

## Batanes

The northernmost islands of the country, closer to Taiwan than to Manila. Rolling green hills, stone houses, cliffs and a culture shaped by wind. Batanes looks like nowhere else in the Philippines. Flights are limited and weather-dependent, so give it time.

Best for: photographers, hikers, curious travellers.
Best season: roughly March to May.

## Negros: Dumaguete and Apo Island

Dumaguete is a university town with a seaside promenade and a friendly pace. Offshore, Apo Island is one of the best-known community-managed marine sanctuaries in the country, with turtles and healthy coral. Nearby Dauin is a muck-diving favourite.

Best for: divers, slow travellers, combining with Siquijor.
Best season: most of the year.

## Not islands, but not to be missed

The rice terraces of Banaue and Batad, in the mountains of northern Luzon, are among the most remarkable landscapes in Asia: terraces carved by hand into steep valleys over many generations, still farmed today. Nearby Sagada has pine forests, limestone caves and hanging coffins on the cliffs. Getting there takes time, usually around nine to ten hours by road from Manila, but if you have three weeks, the mountains make the perfect contrast to the beaches.

## How to choose

If you have two weeks and it is your first trip, pick one limestone island (El Nido or Coron), one countryside island (Bohol or Siquijor) and finish somewhere you can do nothing (Siargao, or a quiet resort in Palawan). If you are diving, build the trip around Coron, Cebu and Negros. If you are surfing, Siargao in the autumn. If you are back for a second time, go north to Batanes or south to Camiguin.

And resist the urge to collect islands. Three islands well chosen will give you more of the Philippines than six islands rushed.`;

const divingBody = `The Philippines sits in the Coral Triangle, the region with the highest marine biodiversity on the planet. That is not a marketing line: the reefs here hold an extraordinary variety of corals, fish and invertebrates, from pygmy seahorses smaller than a fingernail to whale sharks longer than a bus. It is also one of the most varied diving countries in the world, with wrecks, walls, muck, pelagics and macro all within a short flight of each other.

Here is where to go, and when.

## The headline sites

- Tubbataha Reefs Natural Park: a UNESCO World Heritage Site in the middle of the Sulu Sea, about 150 kilometres southeast of Puerto Princesa. Pristine walls, sharks, turtles and big schools of fish. Reachable only by liveaboard, during a short season of roughly mid-March to mid-June. Book many months ahead; places are limited.
- Coron: a cluster of Japanese Second World War wrecks, sunk in a US air attack in September 1944. Some are suitable for advanced open water divers; others call for wreck training. Barracuda Lake, with its thermocline and limestone walls, is one of the strangest dives anywhere.
- Malapascua: the most reliable place in the world to see thresher sharks, at Monad Shoal, on early-morning dives. Expect a 4:30am alarm and depths of around 25 to 30 metres.
- Moalboal: the sardine run, a shoal of millions of sardines, sits a short swim from Panagsama Beach. Snorkellers see it too. Pescador Island nearby has good walls.
- Apo Reef: off the west coast of Mindoro, one of the largest coral reef systems in the country. Remote, usually visited on liveaboards or on overnight trips, with excellent visibility in season.
- Apo Island and Dauin: near Dumaguete in Negros. Apo Island is a community-managed marine sanctuary with healthy coral and turtles; Dauin is famous for muck diving and critters.
- Anilao: about three hours by road from Manila in Batangas, a world-class macro destination and the easiest serious diving from the capital.
- Balicasag: off Panglao in Bohol, with walls, turtles and jacks, easy to combine with a family holiday.

## Seasons for divers

Many sites in Cebu, Bohol and Negros dive well all year, with the calmest seas generally from March to June. Tubbataha has a fixed season of roughly mid-March to mid-June. Coron is diveable most of the year, with the best conditions in the dry season. The typhoon months (roughly July to November) bring more cancelled boat days, but not necessarily poor visibility on sheltered sites.

Water temperature is typically 26°C to 30°C. A 3mm wetsuit is usually enough; some people like a 5mm in the cooler months or for multiple daily dives.

## Whale sharks, and an honest note

You can see whale sharks in the Philippines, and how you do it matters. In Donsol (Sorsogon), seasonal interactions are with wild animals, without feeding, roughly between December and May, though sightings vary from year to year. In Oslob (Cebu), whale sharks are fed daily so that tourists can see them. Many marine biologists have raised concerns about the effect of this feeding on the animals' behaviour and health. We do not include Oslob in our itineraries. If you want to see whale sharks, we will help you do it in a way that leaves them wild.

## Choosing a dive operator

We do not name operators in our guides, but we do check them before recommending them to travellers. When choosing your own:

- Look for a recognised training agency affiliation and current instructor credentials.
- Ask about group sizes and guide-to-diver ratios. Four divers per guide is a good standard.
- Check that the boat carries oxygen, a first aid kit and a working radio.
- Ask where the nearest recompression chamber is. There are several in the country, but on remote islands it can be hours away.
- Make sure your insurance covers diving at the depths you plan to dive.

## Liveaboards

For Tubbataha and often for Apo Reef, a liveaboard is the only practical option. Trips typically last five to seven nights from Puerto Princesa. They are expensive, booked out early, and for keen divers worth it. Smaller liveaboard routes also visit the Visayas outside the Tubbataha season.

## For beginners

The Philippines is an excellent place to learn. Water is warm, many sites start shallow, and courses are widely available in Panglao, Moalboal, Malapascua, Dauin, Coron, Puerto Galera and elsewhere. If you have never dived, we suggest a try-dive on your first island and a full course only if you love it.

## Snorkellers are not second-class

Plenty of the best marine life is in the top five metres. The sardine run at Moalboal, turtles at Apo Island, the reefs around El Nido and Coron's coral gardens are all superb with just a mask and fins. On boat days, ask for a captain who will take you to the reef at the right tide, not just the busiest spot.

## A few rules we live by

- Do not touch, stand on or feed anything.
- Use reef-safe sunscreen, or better, a rash guard.
- Pay the marine park fees; they fund rangers and protection.
- Leave a full day between your last dive and your flight. Most agencies recommend at least 18 hours after multiple dives or repetitive diving.

## Our favourite combinations

- Coron wrecks plus El Nido lagoons, for a mix of diving and topside beauty.
- Malapascua threshers plus Moalboal sardines, using Cebu as the base.
- Dumaguete, Apo Island and Dauin, with Siquijor as the rest stop.
- Tubbataha liveaboard, followed by a few slow days in Palawan.`;

const surfingBody = `The Philippines faces the Pacific on one side and the South China Sea on the other, which gives it two swell seasons, two sets of coastlines and more surf than most visitors expect. It is not Indonesia: swells can be inconsistent, some breaks only work for a few weeks a year, and reefs are shallow. But when it is on, Siargao in particular has waves that hold their own with anywhere in Asia, and the surf culture here is warm, local and growing.

## Siargao: the centre of Philippine surfing

Siargao, off the northeast tip of Mindanao, faces the open Pacific. Its most famous wave, Cloud 9, is a hollow, fast right-hander over a shallow reef in General Luna, reached by a wooden boardwalk that has become one of the most photographed spots in the country. On a solid day it is an expert wave. Do not paddle out there for your first reef session.

Around General Luna, there are options for every level:

- Cloud 9: hollow right, experienced surfers only on bigger days.
- Jacking Horse: a softer right-hander next to Cloud 9, popular with beginners and improvers at the right tide.
- Quicksilver and Stimpy's: reef breaks reached by boat, Stimpy's a fun left on its day.
- Rock Island: a powerful right off a small island, for confident surfers.
- Daku Reef and Guiwan: mellow waves, good for learning when conditions are right.
- Pacifico: in the north of the island, a long left that works best when the northeast monsoon is blowing, and a quieter alternative to General Luna.

## When to surf Siargao

Siargao's surf is generally at its most consistent and best groomed from around August to November, when Pacific swells arrive and winds tend to suit the east-facing breaks. This is also when the island is liveliest, and competitions are often held. From roughly November to March, the northeast monsoon brings more swell but also onshore winds and rain to many breaks, which is when Pacifico and other sheltered spots come into their own. From around April to July, the ocean is often flat or small: perfect for learning, not for chasing barrels.

## Luzon: La Union and Baler

For surfers based in Manila, two towns matter. La Union, about five to six hours north of Manila by road, has the beach breaks of San Juan: friendly, sandy-bottomed and ideal for learning. The season runs roughly from October to March, with the northeast monsoon. Baler, in Aurora province, faces the Pacific and is where Philippine surfing took off; it is often said that locals started surfing after a film crew left boards behind in the 1970s. Baler's season is roughly October to February.

Both have a strong local surf scene and lessons at almost every hotel. Neither is as beautiful as Siargao, but they are easy additions to a trip that starts or ends in Manila.

## Other breaks worth knowing

- Eastern Samar: Pacific-facing and very little developed, for surfers who are happy to travel far for empty waves.
- Catanduanes: the "Land of the Howling Winds", with a renowned right called Majestic in the typhoon season. Remote and weather-dependent.
- Zambales: a few hours from Manila, beach breaks that work in the southwest monsoon season.
- Mindanao's east coast: further from the tourist trail, with spots best explored with someone who knows them.

## Learning to surf

Siargao and La Union are both excellent places to learn. The water is warm (no wetsuit needed, though a long-sleeved rash guard is wise), lessons are widely available and instructors are often local surfers who grew up on these breaks. Look for:

- Small groups, ideally one instructor for one or two students.
- Soft-top boards for beginners.
- Instructors who explain tides and reef safety before you get in the water.
- A beginner-friendly spot at the right tide. On Siargao, reef breaks can be very shallow at low tide.

Two or three lessons are usually enough to stand up. A week is enough to start catching your own waves.

## Reef safety

Most Siargao breaks are over reef. Wear booties if you are not used to it, surf at mid to high tide when you are learning, and treat reef cuts promptly; they get infected easily in the tropics. Bring a small first aid kit with antiseptic. Ask locals before paddling out at an unfamiliar break: currents and channels are not always obvious.

## Etiquette

Surf culture in the Philippines is friendly, but local surfers deserve respect on their home breaks. Wait your turn, do not drop in, and if you are a beginner, keep away from the peak at Cloud 9. Smile in the line-up; it works.

## Boards and travel

Flying domestically with a surfboard is possible but must be pre-booked as sports equipment, and smaller aircraft have limited space. Many visitors rent boards on Siargao instead; there is a good range for every level. If you are bringing your own board, pack it well and tell us early so we route you on flights that accept it.

## A surf trip, designed

Our Surf and Islands journey combines Siargao in the autumn swell season with a calmer island at the end, so non-surfing partners have something too. For surfers coming in the European winter, we often suggest La Union or Pacifico, combined with Palawan's dry season. Tell us your level, honestly, and we will match the island to the wave.`;

const visaBody = `This is the most important guide on our site to read carefully, and the one most likely to change. Immigration rules in the Philippines are set by the Philippine government and can be updated with little notice. Use this page as a starting point, and always confirm the current rules for your nationality with the Philippine Bureau of Immigration, the Department of Foreign Affairs or your nearest Philippine embassy or consulate before you book.

## Visa-free entry for many nationalities

Citizens of many countries can enter the Philippines without a visa for tourism. This includes passport holders from the European Union, the United Kingdom and the United Arab Emirates, who can generally stay visa-free for up to 30 days. That stay can usually be extended at a Bureau of Immigration office in the Philippines if you want to stay longer.

The list of eligible countries, and the length of stay allowed, differs by nationality. Some nationalities are granted shorter visa-free stays, and others need a visa in advance. Check the current list on the official government websites before booking.

If you hold a Russian passport, please check the current rules directly with the Philippine embassy in Moscow or the Department of Foreign Affairs before you travel. We prefer not to give an answer that may be out of date.

## The conditions for visa-free entry

Visa-free does not mean condition-free. To be admitted, you will normally need:

- A passport valid for at least six months beyond your intended stay.
- A confirmed return or onward ticket out of the Philippines within the permitted period. Airlines may refuse boarding without one.
- Completed eTravel registration (see below).

Immigration officers can also ask about your travel plans, accommodation and means of support. Having your itinerary and first hotel booking ready on your phone helps.

## eTravel: the online arrival registration

All travellers arriving in the Philippines must register on eTravel, the government's online travel declaration system, at etravel.gov.ph. Registration must be completed within 72 hours before your arrival. It asks for your passport details, flight, address in the Philippines and health information, and generates a QR code you may be asked to show at check-in or on arrival.

A few practical notes:

- Registration on the official site is free. Be wary of websites that charge to complete it on your behalf.
- Each traveller needs their own registration, including children.
- Screenshot the QR code in case you have no signal on landing.

## Extending your stay

If you entered visa-free and want to stay beyond your initial period, you can usually apply for an extension at a Bureau of Immigration office, including in Manila and in larger cities such as Cebu. Fees apply and change from time to time. Apply well before your permitted stay ends; overstaying leads to fines and can cause problems on departure and on future visits.

If you know in advance that you will stay longer than your visa-free period, ask the Philippine embassy in your country whether applying for a visa before departure makes more sense.

## Travelling with children

Children travel on their own passports and need their own eTravel registration. There are additional requirements for minors under 15 who are travelling without a parent, or with only one parent in some situations. These rules are specific, so check them with the Bureau of Immigration or the embassy well before you fly.

## Arriving with connecting flights

If you are connecting to a domestic flight on the same day, you clear immigration at your first point of entry, usually Manila or Cebu. Queues at immigration can be long at peak times. Leave plenty of time between your international arrival and any domestic departure.

## Other entry requirements

Health and customs requirements change from time to time. Before you go, check:

- Any current health declarations or vaccination requirements, including if you have recently travelled through countries where certain diseases are present.
- Customs allowances, including limits on the amount of cash you can bring in or take out without declaring it.
- Restrictions on bringing in food, plants and animal products.

## Where to verify

- The Philippine Bureau of Immigration, which handles entry, stay and extensions.
- The Department of Foreign Affairs, which publishes the list of countries eligible for visa-free entry and visa information.
- Your nearest Philippine embassy or consulate, the best place to ask about your specific situation.
- eTravel at etravel.gov.ph for the arrival registration.

## A short checklist before you fly

- Passport valid for at least six months beyond your planned departure from the Philippines, with blank pages.
- Visa-free eligibility (or a visa) confirmed for your nationality on an official government source.
- A confirmed return or onward flight within your permitted stay, saved on your phone and, ideally, printed.
- eTravel completed for every traveller within 72 hours before arrival, QR codes saved offline.
- The address of your first night's accommodation, which you will need for eTravel and may be asked for on arrival.
- Travel insurance details, including cover for diving or surfing if you plan to do either.
- If you are travelling with children, any additional documents the Bureau of Immigration requires for minors.

## How we help

When you plan your trip with us, we check the current entry requirements against your nationality and your travel dates, make sure your onward flights satisfy the onward-ticket rule, and remind you to complete eTravel in the 72 hours before arrival. We are travel designers, not immigration advisers, so for anything unusual (dual nationality, long stays, work, study or previous overstays) please speak directly with the Philippine authorities.`;

const foodBody = `Filipino food has spent years being described as the next big thing abroad, and it deserves the attention. It is a cuisine of sour, salty and sweet, of vinegar and calamansi, of pork done fifty ways, of rice at every meal and of eating together. It has Malay roots, Chinese and Spanish layers, American habits and strong regional personalities. And the best of it is rarely found in hotel restaurants.

Here is what to eat, and how.

## The flavours

If French cooking builds on butter and Thai on balance, Filipino cooking builds on asim, sourness. Vinegar, calamansi (a small, fragrant citrus), tamarind, green mango and batuan fruit all play a role. Add patis (fish sauce), bagoong (fermented shrimp or fish paste), garlic, ginger and coconut, and you have the base of most dishes. Food tends to be savoury rather than chilli-hot, with heat added at the table, except in Bicol, where coconut and chilli rule.

## The dishes to know

- Adobo: the unofficial national dish. Meat (usually chicken or pork) braised in vinegar, soy sauce, garlic, bay leaf and peppercorns. Every family has its own version, and every family thinks theirs is right.
- Sinigang: a sour soup, usually tamarind-based, with pork, prawns or fish and vegetables. The best comfort food in the country.
- Kare-kare: oxtail and vegetables in a peanut sauce, served with bagoong on the side. The bagoong is not optional.
- Lechon: whole roast pig. Cebu's version is seasoned inside with lemongrass and spices and needs no sauce; in Luzon it often comes with a liver-based sauce. Ask a Cebuano and a Manileño which is better and stand back.
- Sisig: chopped pork (traditionally parts of the head), grilled and served sizzling with onions, chilli and calamansi. Originally from Pampanga, now everywhere, often with a raw egg on top.
- Kinilaw: raw fish cured in vinegar or calamansi with ginger, onion and chilli. The Philippine cousin of ceviche, and best by the sea.
- Chicken inasal: grilled chicken marinated in calamansi, lemongrass and annatto, the pride of Bacolod. Eat it with garlic rice and chicken oil.
- Bicol Express: pork in coconut milk with plenty of chilli. Laing, taro leaves in coconut, is its vegetable sibling.
- Pancit: noodles, in dozens of regional versions. Served at birthdays for long life.
- Lumpia: spring rolls, fried (lumpiang shanghai) or fresh.
- La Paz batchoy: a rich noodle soup from Iloilo with pork, liver and crackling.

## Breakfast is serious

The Filipino breakfast plate is a silog: garlic fried rice (sinangag) and a fried egg (itlog), plus a protein. Tapsilog comes with tapa (cured beef), longsilog with longganisa (sweet or garlicky sausage, different in every province), tocilog with sweet cured pork. Add a coffee and you are set until lunch. Many hotels serve them; small local places do them better.

## Snacks and merienda

Filipinos eat between meals, and merienda, the afternoon snack, is a proper ritual. Look for:

- Kakanin: rice cakes such as bibingka, puto, suman and biko, often made with coconut.
- Turon: banana and jackfruit in a crisp spring-roll wrapper with caramelised sugar.
- Banana cue: fried bananas coated in brown sugar on a skewer.
- Taho: silken tofu with syrup and sago pearls, sold by morning vendors calling out on the street.
- Street barbecue: pork skewers and isaw (grilled intestines), with a choice of spiced vinegars.

## Desserts

Halo-halo is the national dessert and a reason to visit in April: shaved ice, evaporated milk, sweet beans, jellies, fruit, leche flan and ube (purple yam), mixed before eating. Ube itself appears everywhere, as jam, ice cream and cake. Leche flan is denser and richer than its Spanish ancestor. In Dumaguete, try silvanas, frozen cashew-meringue cookies layered with buttercream.

## Balut, briefly

Balut is a fertilised duck egg, boiled and eaten from the shell with salt or vinegar. It is a street snack, often sold in the evening. You do not have to try it. If you do, you will have earned a story.

## How to eat like a local

- Eat with a spoon and fork. The spoon does the work; the fork pushes food onto it. Knives are rare.
- Kamayan means eating with your hands. A boodle fight is a communal feast served on banana leaves, eaten with hands, standing up.
- Rice comes with everything, including noodles.
- Look for the dipping sauces on the table: soy, vinegar, calamansi, chilli. Mix your own sawsawan.
- Carinderias and turo-turo ("point-point") canteens display the day's dishes in pots. Point at what you want. It is one of the best ways to eat cheaply and well.

## Regional food worth travelling for

- Pampanga: often called the culinary capital of the country. Sisig, tocino and festive dishes.
- Cebu: lechon, puso (rice cooked in woven palm leaves) and dried mangoes.
- Iloilo and Bacolod: batchoy, inasal and some of the country's best pastries.
- Bicol: coconut milk and chilli in everything.
- Ilocos: empanada with longganisa, bagnet (crisp-fried pork belly) and pinakbet.
- Siargao and the coasts: kinilaw made with that morning's catch.

## Practical notes

Street food is generally safe if it is cooked fresh and hot in front of you. Pick busy stalls, avoid ice of uncertain origin in very small places, and take it slowly with the bagoong in your first few days. Vegetarians will find it harder than in some Asian countries, since many vegetable dishes are cooked with pork or shrimp paste, but cities and tourist areas have plenty of options; ask for "walang karne" (no meat) and be specific about fish sauce and shrimp paste.

We do not name restaurants in our guides. When you travel with us, we will point you to the places our own team eats, in every island you visit.`;

/* ------------------------------------------------------------------ */
/* Articles                                                            */
/* ------------------------------------------------------------------ */

export const guides: GuideArticle[] = [
  /* ---------------------------- PLANNING ---------------------------- */
  {
    slug: "best-time-to-visit-the-philippines",
    group: "planning",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Best Time to Visit the Philippines",
      fr: "Quand partir aux Philippines ?",
      es: "Mejor época para viajar a Filipinas",
      ru: "Когда лучше ехать на Филиппины",
      ar: "أفضل وقت لزيارة الفلبين",
    },
    description: {
      en: "Month by month and island by island: when to go to the Philippines for beaches, diving and surf, how typhoon season really works, and our honest verdict.",
      fr: "Meilleure période selon les îles, saison sèche et mousson, typhons : notre avis honnête pour choisir le bon mois pour les plages, la plongée et le surf.",
      es: "Cuándo ir a Filipinas según la isla: estación seca, monzones y tifones explicados, y nuestra recomendación sincera para playas, buceo y surf.",
      ru: "Сезоны по месяцам и по островам: сухой сезон, муссоны и тайфуны без мифов. Когда ехать за пляжами, дайвингом и сёрфингом.",
      ar: "متى تسافر إلى الفلبين حسب كل جزيرة: موسم الجفاف والرياح الموسمية والأعاصير بوضوح، مع نصيحتنا الصادقة للشواطئ والغوص وركوب الأمواج.",
    },
    photo: {
      alt: { en: "Calm morning sea between limestone islands in the dry season" },
      brief: "Early-morning flat calm in El Nido's Bacuit Bay in March: a single bangka, glassy water, soft light on the karst. Shows the dry-season promise without people.",
      tone: "lagoon",
    },
    body: { en: bestTimeBody },
    insiders: [
      {
        type: "inside-tip",
        title: { en: "Keep a spare day before you fly home" },
        body: { en: "Between June and November, end the trip near Manila or Cebu with one free night. If a typhoon grounds the boats, you lose a beach day, not your international flight." },
      },
      {
        type: "our-favorite",
        title: { en: "Late April to May, after Easter" },
        body: { en: "The seas are flat, the domestic crowds have gone home after Holy Week and hotels relax their rates. It is hot, so plan beach mornings and long, shaded lunches." },
      },
      {
        type: "skip-this",
        title: { en: "Skip El Nido in August. Go to Siargao instead" },
        body: { en: "The southwest monsoon makes Palawan's west coast a gamble in mid-summer. Siargao, facing the Pacific, often enjoys long sunny spells and the start of surf season." },
      },
    ],
    faqs: [
      {
        q: { en: "What is the best month to visit the Philippines?" },
        a: { en: "For a first trip around Palawan, Bohol and the Visayas, February to April is the most reliable window: dry, generally calm seas and full flight schedules. January is also excellent but busier." },
      },
      {
        q: { en: "Is it worth visiting the Philippines in the rainy season?" },
        a: { en: "Yes, if you choose the right islands and stay flexible. Siargao, Camiguin, Bohol and much of Mindanao are good choices between June and October, prices are lower and beaches are quieter. Expect some rain and the occasional cancelled boat." },
      },
      {
        q: { en: "When is typhoon season in the Philippines?" },
        a: { en: "Typhoons can form at any time, but most affect the country between roughly July and November, with the Visayas and Luzon most exposed. Mindanao is less often affected but not immune." },
      },
      {
        q: { en: "When is the Philippines most crowded?" },
        a: { en: "Christmas to early January, Chinese New Year and Holy Week (Easter) are the busiest periods. Book hotels and boats in El Nido, Coron and Boracay months ahead for these dates." },
      },
      {
        q: { en: "What is the best time to visit Batanes?" },
        a: { en: "Roughly March to May, when the weather is most settled and flights are most reliable. Outside that window, flights to Batanes are often cancelled by wind and rain." },
      },
    ],
    related: {
      destinations: ["el-nido", "siargao", "bohol", "batanes", "camiguin"],
      journeys: ["island-classics", "surf-and-islands", "ten-days-two-islands"],
    },
  },
  {
    slug: "philippines-weather-by-month",
    group: "planning",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Philippines Weather by Month",
      fr: "Météo aux Philippines mois par mois",
      es: "El tiempo en Filipinas mes a mes",
      ru: "Погода на Филиппинах по месяцам",
      ar: "الطقس في الفلبين حسب الأشهر",
    },
    description: {
      en: "What the weather is really doing in every month of the year, coast by coast: rain, wind, sea conditions and where to go instead when it turns.",
      fr: "Pluie, vent, état de la mer : le climat réel des Philippines pour chaque mois de l'année, côte par côte, et où aller quand le temps tourne.",
      es: "Lluvia, viento y estado del mar: el clima real de Filipinas cada mes del año, costa por costa, y adónde ir cuando el tiempo cambia.",
      ru: "Дожди, ветер и состояние моря в каждом месяце года по разным побережьям — и куда ехать, если погода испортилась.",
      ar: "الأمطار والرياح وحالة البحر في كل شهر من السنة، ساحلاً بساحل، وإلى أين تتجه عندما يتغير الطقس.",
    },
    photo: {
      alt: { en: "Afternoon storm clouds gathering over a green island coastline" },
      brief: "Wet-season afternoon: dark cumulus building over a palm-lined coast, sunlight still on the sea in the foreground. Honest, beautiful, not gloomy.",
      tone: "dusk",
    },
    body: { en: weatherBody },
    insiders: [
      {
        type: "go-early",
        title: { en: "Boat days start at 7am in the wet season" },
        body: { en: "Rain in the wet season tends to build through the day. Leave for island-hopping early and you will often be back before the first shower." },
      },
      {
        type: "inside-tip",
        title: { en: "Check the sea, not the forecast app" },
        body: { en: "A rain icon tells you little. What matters is whether the Coast Guard has raised a small-craft advisory. Your boat captain will know by 6am." },
      },
    ],
    faqs: [
      {
        q: { en: "What is the hottest month in the Philippines?" },
        a: { en: "April and May are usually the hottest months, with Manila often above 33°C in the afternoon. Coastal islands with a sea breeze feel noticeably cooler." },
      },
      {
        q: { en: "What is the wettest month in the Philippines?" },
        a: { en: "In Manila and the west, July to September is usually the wettest period, often peaking in August. On east-facing coasts such as Siargao, the wettest months tend to be December to February." },
      },
      {
        q: { en: "Is December a good time to visit the Philippines?" },
        a: { en: "December is dry and pleasant in most of the west, including Palawan and Boracay, but the last two weeks are the busiest and most expensive of the year. The east coast can be rainy." },
      },
      {
        q: { en: "Does it get cold in the Philippines?" },
        a: { en: "Not at sea level. In the mountains around Baguio, Sagada and Banaue, nights can be cool, especially from December to February, so bring a warm layer." },
      },
    ],
    related: {
      destinations: ["palawan", "siargao", "boracay", "sagada", "batanes"],
      journeys: ["island-classics", "the-grand-philippines"],
    },
  },
  {
    slug: "how-many-days-in-the-philippines",
    group: "planning",
    status: "published",
    updated: UPDATED,
    title: {
      en: "How Many Days Do You Need in the Philippines?",
      fr: "Combien de jours aux Philippines ?",
      es: "¿Cuántos días hacen falta para Filipinas?",
      ru: "Сколько дней нужно на Филиппины",
      ar: "كم يوماً تحتاج في الفلبين؟",
    },
    description: {
      en: "One week, ten days, two weeks or three: how many islands fit, how long transfers really take, and the signs you are trying to do too much.",
      fr: "Une semaine, dix jours, deux ou trois semaines : combien d'îles prévoir, le vrai temps des transferts et les signes d'un programme trop chargé.",
      es: "Una semana, diez días, dos o tres semanas: cuántas islas caben, cuánto duran de verdad los traslados y cómo saber si intentas abarcar demasiado.",
      ru: "Неделя, десять дней, две или три недели: сколько островов успеть, сколько на самом деле занимают переезды и как понять, что маршрут перегружен.",
      ar: "أسبوع أو عشرة أيام أو أسبوعان أو ثلاثة: كم جزيرة يمكنك زيارتها، وكم تستغرق التنقلات فعلاً، وكيف تعرف أن برنامجك مزدحم أكثر من اللازم.",
    },
    photo: {
      alt: { en: "Traveller's bag on the bow of an outrigger boat heading to an island" },
      brief: "Transfer day done well: a soft bag and a hat on the bow of a bangka, island ahead, wake behind. Conveys travel time as part of the journey.",
      tone: "sand",
    },
    body: { en: howManyDaysBody },
    insiders: [
      {
        type: "inside-tip",
        title: { en: "Three nights is the minimum per island" },
        body: { en: "Two nights gives you one real day, and you will spend part of it recovering from the journey in. Four nights is where an island starts to feel like yours." },
      },
      {
        type: "skip-this",
        title: { en: "Skip the same-day connection" },
        body: { en: "Landing in Manila at 2pm and flying on at 4pm on a separate ticket looks efficient. One delay and you lose a night's hotel and a day. Stay over and fly fresh the next morning." },
      },
      {
        type: "our-favorite",
        title: { en: "Two islands in ten days" },
        body: { en: "Our favourite length for a first trip. Enough time to slow down, few enough moves that nothing feels rushed." },
      },
    ],
    faqs: [
      {
        q: { en: "Is one week enough for the Philippines?" },
        a: { en: "A week is enough for one island region, for example El Nido, Coron, Bohol or Siargao, done well. It is not enough to combine islands that need two flights between them." },
      },
      {
        q: { en: "How many islands can I visit in two weeks?" },
        a: { en: "Three at most, and two if you want a slower pace. A classic two-week route is El Nido, Coron and Siargao or Bohol, with a night in Manila if flight times require it." },
      },
      {
        q: { en: "How long does it take to travel between islands?" },
        a: { en: "Plan on half a day for most moves and a full day for any trip that combines a flight with a long road or boat transfer. El Nido to Siargao, for example, usually means two flights and takes six to eight hours door to door." },
      },
      {
        q: { en: "Should I spend time in Manila?" },
        a: { en: "One or two days is enough for most visitors, and is often useful anyway to break the journey. Intramuros, Binondo and the National Museum make a very good day." },
      },
    ],
    related: {
      destinations: ["el-nido", "coron", "siargao", "bohol", "manila"],
      journeys: ["ten-days-two-islands", "island-classics", "the-grand-philippines"],
    },
  },
  {
    slug: "first-time-in-the-philippines",
    group: "planning",
    status: "published",
    updated: UPDATED,
    title: {
      en: "First Time in the Philippines: What to Know",
      fr: "Premier voyage aux Philippines : nos conseils",
      es: "Primer viaje a Filipinas: consejos esenciales",
      ru: "Первый раз на Филиппинах: что нужно знать",
      ar: "زيارتك الأولى إلى الفلبين: ما يجب أن تعرفه",
    },
    description: {
      en: "Everything we tell friends before their first trip: arriving in Manila, money, SIM cards, etiquette, pace, and what surprises first-time visitors.",
      fr: "Tout ce que nous disons à nos amis avant leur premier voyage : arrivée à Manille, argent, carte SIM, savoir-vivre, rythme et surprises.",
      es: "Todo lo que contamos a nuestros amigos antes de su primer viaje: llegada a Manila, dinero, SIM, costumbres, ritmo y lo que más sorprende.",
      ru: "Всё, что мы рассказываем друзьям перед первой поездкой: прилёт в Манилу, деньги, SIM-карты, этикет, темп путешествия и неожиданности.",
      ar: "كل ما نقوله لأصدقائنا قبل رحلتهم الأولى: الوصول إلى مانيلا، والمال، وشرائح الاتصال، وآداب التعامل، وإيقاع الرحلة، وما يفاجئ الزوار الجدد.",
    },
    photo: {
      alt: { en: "Tricycle waiting on a quiet island road lined with palms" },
      brief: "A colourful tricycle parked on a palm-lined island road in late-afternoon light, driver chatting nearby. Everyday, welcoming, specifically Filipino.",
      tone: "jungle",
    },
    body: { en: firstTimeBody },
    insiders: [
      {
        type: "inside-tip",
        title: { en: "Arrive with pesos in small notes" },
        body: { en: "Withdraw cash in Manila or Cebu before you fly to the islands. Island ATMs run dry on holiday weekends, and 100 and 200-peso notes save a lot of awkward waiting for change." },
      },
      {
        type: "go-early",
        title: { en: "Set your clock to island time: early" },
        body: { en: "The Philippines wakes up at dawn. The best light, the emptiest lagoons and the coolest hours are before 9am. Dinner at 7pm is normal; 10pm is late on a small island." },
      },
      {
        type: "local-favorite",
        title: { en: "Eat at the carinderia at least once" },
        body: { en: "The neighbourhood canteen with dishes in pots on the counter. Point at what looks good, pay very little and eat what Filipinos actually eat for lunch." },
      },
    ],
    faqs: [
      {
        q: { en: "Is English widely spoken in the Philippines?" },
        a: { en: "Yes. English is an official language alongside Filipino and is used in schools, business and signage. You will be able to get by in English almost everywhere." },
      },
      {
        q: { en: "Do I need cash in the Philippines?" },
        a: { en: "Yes. Cards are accepted in many hotels and city restaurants, but tricycles, small eateries, markets, boat tips and environmental fees on the islands are usually cash only." },
      },
      {
        q: { en: "Should I tip in the Philippines?" },
        a: { en: "Tipping is not mandatory but is appreciated. If no service charge is included, around 10% in restaurants is generous. Guides, boat crews and drivers who have looked after you well deserve a tip." },
      },
      {
        q: { en: "What plugs are used in the Philippines?" },
        a: { en: "Most sockets take flat two-pin plugs (type A), sometimes with a ground pin (type B), and many also accept round two-pin plugs. The voltage is 220V. Bring a universal adapter." },
      },
      {
        q: { en: "Can I drink tap water in the Philippines?" },
        a: { en: "We recommend not drinking tap water. Use bottled or filtered water; most hotels provide refills, so bring a reusable bottle." },
      },
    ],
    related: {
      destinations: ["manila", "el-nido", "bohol", "siargao", "cebu"],
      journeys: ["island-classics", "ten-days-two-islands"],
    },
  },
  {
    slug: "best-philippines-itineraries",
    group: "planning",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Best Philippines Itineraries",
      fr: "Itinéraires aux Philippines : nos meilleurs circuits",
      es: "Las mejores rutas por Filipinas",
      ru: "Лучшие маршруты по Филиппинам",
      ar: "أفضل برامج الرحلات في الفلبين",
    },
    description: {
      en: "Sample routes for one, two and three weeks, built around real flight and ferry connections, with the trade-offs of each.",
      fr: "Des circuits d'une, deux ou trois semaines, construits sur les vraies liaisons aériennes et maritimes, avec leurs compromis.",
      es: "Itinerarios de una, dos y tres semanas basados en conexiones reales de vuelos y ferris, con las ventajas e inconvenientes de cada uno.",
      ru: "Готовые маршруты на одну, две и три недели с учётом реальных авиарейсов и паромов — честно о плюсах и минусах каждого.",
      ar: "مسارات مقترحة لأسبوع وأسبوعين وثلاثة أسابيع، مبنية على رحلات الطيران والعبّارات الفعلية، مع إيجابيات كل مسار وسلبياته.",
    },
    photo: {
      alt: { en: "Hand-drawn route across Philippine islands on a paper map" },
      brief: "Overhead: a paper map of the Philippines with a pencil route from Manila to Palawan to Siargao, coffee cup and boarding pass at the edge.",
      tone: "sand",
    },
    body: { en: moreGuides["best-philippines-itineraries"].body },
    insiders: moreGuides["best-philippines-itineraries"].insiders,
    faqs: moreGuides["best-philippines-itineraries"].faqs,
    related: moreGuides["best-philippines-itineraries"].related,
  },

  /* ----------------------------- ISLANDS ---------------------------- */
  {
    slug: "best-islands-in-the-philippines",
    group: "islands",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Best Islands in the Philippines",
      fr: "Les plus belles îles des Philippines",
      es: "Las mejores islas de Filipinas",
      ru: "Лучшие острова Филиппин",
      ar: "أجمل جزر الفلبين",
    },
    description: {
      en: "El Nido, Coron, Siargao, Bohol, Siquijor and more: the islands worth building a trip around, what each is really like, and who will love it.",
      fr: "El Nido, Coron, Siargao, Bohol, Siquijor… les îles qui méritent le voyage, ce qu'elles sont vraiment et pour qui elles sont faites.",
      es: "El Nido, Coron, Siargao, Bohol, Siquijor y más: las islas que merecen un viaje, cómo son de verdad y para quién es cada una.",
      ru: "Эль-Нидо, Корон, Сиаргао, Бохоль, Сикихор и другие: ради каких островов стоит ехать, какие они на самом деле и кому подойдут.",
      ar: "إل نيدو وكورون وسيارغاو وبوهول وسيكيهور وغيرها: الجزر التي تستحق أن تُبنى حولها رحلتك، وكيف هي فعلاً، ولمن تناسب.",
    },
    photo: {
      alt: { en: "Aerial view of limestone islands and turquoise shallows in Palawan" },
      brief: "Drone shot, mid-morning: a scatter of karst islets with white-sand fringes and turquoise shallows, one or two bangkas for scale.",
      tone: "lagoon",
    },
    body: { en: bestIslandsBody },
    insiders: [
      {
        type: "our-favorite",
        title: { en: "Siquijor after a busy island" },
        body: { en: "Put Siquijor after El Nido or Boracay and it feels twice as calm. A scooter, a waterfall, a sunset and nowhere to be." },
      },
      {
        type: "worth-the-detour",
        title: { en: "Camiguin for the second trip" },
        body: { en: "Seven volcanoes, cold springs and a sandbar on an island most visitors never reach. It takes effort to get to, which is exactly why it still feels like itself." },
      },
      {
        type: "skip-this",
        title: { en: "Skip El Nido town. Stay on the beach" },
        body: { en: "Town is loud and crowded. A quieter beach to the north or an island resort costs a short ride in and gives you the El Nido you came for." },
      },
    ],
    faqs: [
      {
        q: { en: "Which Philippine island is best for a first visit?" },
        a: { en: "El Nido in Palawan is the classic first island for its lagoons and limestone scenery. Combine it with Coron, Bohol or Siargao for contrast." },
      },
      {
        q: { en: "Is Boracay still worth visiting?" },
        a: { en: "Yes, if you want an easy, sociable beach holiday. Since its 2018 rehabilitation it is better regulated. It is not the place for seclusion." },
      },
      {
        q: { en: "Which is better, El Nido or Coron?" },
        a: { en: "El Nido is more beautiful above water and better set up for visitors. Coron is wilder and best under water, with Second World War wrecks and freshwater lakes. If you can, see both." },
      },
      {
        q: { en: "Which Philippine islands are good in the rainy season?" },
        a: { en: "Siargao, Camiguin, Bohol and Cebu tend to fare better than Palawan's west coast between June and October. Coron is more sheltered than El Nido." },
      },
      {
        q: { en: "What are the quietest islands to visit?" },
        a: { en: "Siquijor, Camiguin and Batanes all feel far from the crowds. In Palawan, Port Barton and the north of the island are quieter than El Nido." },
      },
    ],
    related: {
      destinations: ["el-nido", "coron", "siargao", "bohol", "siquijor", "boracay", "camiguin", "batanes"],
      journeys: ["island-classics", "palawan-deep-dive", "the-slow-philippines", "the-grand-philippines"],
    },
  },
  {
    slug: "how-to-travel-between-islands",
    group: "islands",
    status: "published",
    updated: UPDATED,
    title: {
      en: "How to Travel Between Islands in the Philippines",
      fr: "Comment voyager entre les îles des Philippines",
      es: "Cómo moverse entre las islas de Filipinas",
      ru: "Как перемещаться между островами Филиппин",
      ar: "كيف تتنقل بين جزر الفلبين",
    },
    description: {
      en: "Flights, fast ferries, vans and bangkas: how the islands really connect, typical travel times, baggage traps and the pairings that work.",
      fr: "Vols, ferries rapides, vans et bangkas : comment les îles sont vraiment reliées, temps de trajet, pièges des bagages et combinaisons qui fonctionnent.",
      es: "Vuelos, ferris rápidos, furgonetas y bangkas: cómo se conectan de verdad las islas, tiempos de viaje, trampas del equipaje y combinaciones que funcionan.",
      ru: "Перелёты, скоростные паромы, микроавтобусы и банки: как на самом деле связаны острова, сколько времени уходит на дорогу и какие связки работают.",
      ar: "رحلات داخلية وعبّارات سريعة وحافلات صغيرة وقوارب بانكا: كيف ترتبط الجزر فعلاً، ومدة الرحلات، وفخاخ الأمتعة، والتركيبات التي تنجح.",
    },
    photo: {
      alt: { en: "Fast ferry arriving at a busy island port at dawn" },
      brief: "Dawn at Cebu or Dumaguete port: a fast craft docking, porters, early light. Real logistics, shot with warmth.",
      tone: "stone",
    },
    body: { en: betweenIslandsBody },
    insiders: [
      {
        type: "inside-tip",
        title: { en: "Fly in to Manila, out of Cebu" },
        body: { en: "An open-jaw ticket saves you a backtrack. Start in Palawan, end in the Visayas or Siargao, and fly home from Cebu or via a Cebu connection." },
      },
      {
        type: "worth-the-detour",
        title: { en: "The expedition boat from El Nido to Coron" },
        body: { en: "Instead of the ferry, some trips take several days between the two, camping or sleeping on remote islands. Slow, simple and one of the best things you can do in Palawan." },
      },
      {
        type: "skip-this",
        title: { en: "Skip the overnight ferry if you have two weeks" },
        body: { en: "Long-haul ferries have their romance, but on a short holiday a one-hour flight gives you back a day on a beach." },
      },
    ],
    faqs: [
      {
        q: { en: "Is it better to fly or take a ferry between islands?" },
        a: { en: "It depends on the route. Short crossings such as Cebu to Bohol or Dumaguete to Siquijor are best by fast craft. Longer distances, or any leg near the end of your trip, are usually better by air." },
      },
      {
        q: { en: "Can I fly directly between islands?" },
        a: { en: "Sometimes. Most routes go through Manila or Cebu, but some direct island-to-island flights exist and change by season. Check current schedules when you plan." },
      },
      {
        q: { en: "How do I get from El Nido to Coron?" },
        a: { en: "By fast ferry, around four hours, typically in the dry season and subject to weather. Otherwise by air via Manila, or on a multi-day expedition boat trip." },
      },
      {
        q: { en: "What happens if my ferry is cancelled because of weather?" },
        a: { en: "Sailings are suspended by the Coast Guard in rough weather. You will usually be rebooked on the next departure. This is why we avoid sea crossings in the last two days of a trip." },
      },
      {
        q: { en: "Can I bring a surfboard or dive gear on domestic flights?" },
        a: { en: "Usually yes, as pre-booked sports equipment, but small aircraft have limited hold space and lower limits. Book it with your ticket and tell your travel designer early." },
      },
    ],
    related: {
      destinations: ["el-nido", "coron", "cebu", "bohol", "siquijor", "siargao", "boracay"],
      journeys: ["island-classics", "palawan-deep-dive", "ten-days-two-islands", "the-grand-philippines"],
    },
  },

  /* -------------------------- TRAVEL STYLES ------------------------- */
  {
    slug: "philippines-honeymoon-guide",
    group: "travel-styles",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Philippines Honeymoon Guide",
      fr: "Lune de miel aux Philippines",
      es: "Luna de miel en Filipinas",
      ru: "Медовый месяц на Филиппинах",
      ar: "شهر العسل في الفلبين",
    },
    description: {
      en: "Where to honeymoon in the Philippines: island resorts, private boats, the best months and how to keep the transfers romantic.",
      fr: "Où partir en lune de miel aux Philippines : resorts insulaires, bateaux privés, meilleurs mois et transferts sans stress.",
      es: "Dónde pasar la luna de miel en Filipinas: resorts en islas, barcos privados, los mejores meses y traslados sin estrés.",
      ru: "Где провести медовый месяц на Филиппинах: курорты на островах, частные лодки, лучшие месяцы и переезды без стресса.",
      ar: "أين تقضي شهر العسل في الفلبين: منتجعات الجزر، والقوارب الخاصة، وأفضل الأشهر، وتنقلات مريحة بلا عناء.",
    },
    photo: {
      alt: { en: "Two kayaks on a still lagoon surrounded by limestone cliffs" },
      brief: "Two kayaks side by side in an empty lagoon at 7am, cliffs reflected in still water. Intimate without posing.",
      tone: "lagoon",
    },
    body: { en: moreGuides["philippines-honeymoon-guide"].body },
    insiders: moreGuides["philippines-honeymoon-guide"].insiders,
    faqs: moreGuides["philippines-honeymoon-guide"].faqs,
    related: moreGuides["philippines-honeymoon-guide"].related,
  },
  {
    slug: "philippines-with-children",
    group: "travel-styles",
    status: "published",
    updated: UPDATED,
    title: {
      en: "The Philippines With Children",
      fr: "Les Philippines en famille",
      es: "Filipinas con niños",
      ru: "Филиппины с детьми",
      ar: "الفلبين مع الأطفال",
    },
    description: {
      en: "Family travel in the Philippines: the easiest islands, sensible transfer times, safe beaches and hotels that genuinely welcome children.",
      fr: "Voyager en famille aux Philippines : les îles les plus faciles, des transferts raisonnables, des plages sûres et des hôtels qui accueillent vraiment les enfants.",
      es: "Viajar en familia a Filipinas: las islas más fáciles, traslados razonables, playas seguras y hoteles que reciben de verdad a los niños.",
      ru: "Семейное путешествие на Филиппины: самые удобные острова, разумные переезды, безопасные пляжи и отели, где детям действительно рады.",
      ar: "السفر العائلي إلى الفلبين: أسهل الجزر، وتنقلات معقولة، وشواطئ آمنة، وفنادق ترحب بالأطفال فعلاً.",
    },
    photo: {
      alt: { en: "Children snorkelling in shallow water off a white-sand beach" },
      brief: "Two children in rash guards snorkelling in knee-deep water by a white beach, parent nearby. Bright, safe, unposed.",
      tone: "reef",
    },
    body: { en: moreGuides["philippines-with-children"].body },
    insiders: moreGuides["philippines-with-children"].insiders,
    faqs: moreGuides["philippines-with-children"].faqs,
    related: moreGuides["philippines-with-children"].related,
  },
  {
    slug: "luxury-philippines",
    group: "travel-styles",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Luxury Travel in the Philippines",
      fr: "Voyage de luxe aux Philippines",
      es: "Viajes de lujo en Filipinas",
      ru: "Люксовый отдых на Филиппинах",
      ar: "السفر الفاخر في الفلبين",
    },
    description: {
      en: "Private islands, villas, charter flights and boats: what luxury looks like in the Philippines, and where it is worth the money.",
      fr: "Îles privées, villas, vols charters et bateaux : à quoi ressemble le luxe aux Philippines, et où il vaut vraiment son prix.",
      es: "Islas privadas, villas, vuelos chárter y barcos: cómo es el lujo en Filipinas y dónde merece la pena pagarlo.",
      ru: "Частные острова, виллы, чартерные рейсы и яхты: каким бывает люкс на Филиппинах и где он стоит своих денег.",
      ar: "جزر خاصة وفلل ورحلات طيران مستأجرة وقوارب: كيف تبدو الفخامة في الفلبين، وأين تستحق ما تدفعه.",
    },
    photo: {
      alt: { en: "Private villa deck over the water at sunset" },
      brief: "A timber villa deck over calm water at golden hour, two loungers, no logos or identifiable property. Quiet luxury.",
      tone: "dusk",
    },
    body: { en: moreGuides["luxury-philippines"].body },
    insiders: moreGuides["luxury-philippines"].insiders,
    faqs: moreGuides["luxury-philippines"].faqs,
    related: moreGuides["luxury-philippines"].related,
  },
  {
    slug: "diving-in-the-philippines",
    group: "travel-styles",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Diving in the Philippines",
      fr: "Plongée aux Philippines",
      es: "Buceo en Filipinas",
      ru: "Дайвинг на Филиппинах",
      ar: "الغوص في الفلبين",
    },
    description: {
      en: "Tubbataha, Coron's wrecks, Malapascua's thresher sharks, the Moalboal sardine run and Apo Island: where and when to dive, and how to choose well.",
      fr: "Tubbataha, épaves de Coron, requins-renards de Malapascua, sardines de Moalboal, Apo Island : où et quand plonger, et comment bien choisir.",
      es: "Tubbataha, los pecios de Coron, los tiburones zorro de Malapascua, las sardinas de Moalboal y Apo Island: dónde y cuándo bucear, y cómo elegir bien.",
      ru: "Туббатаха, затонувшие корабли Корона, лисьи акулы Малапаскуа, сардины Моалбоала и остров Апо: где и когда нырять и как выбрать правильно.",
      ar: "توباتاها وحطام سفن كورون وأسماك قرش الثعلب في مالاباسكوا وأسراب السردين في موالبوال وجزيرة أبو: أين ومتى تغوص وكيف تختار جيداً.",
    },
    photo: {
      alt: { en: "Diver beside a vast shoal of sardines in blue water" },
      brief: "Underwater, Moalboal: a single diver silhouetted against a swirling wall of sardines, sunlight shafts from above.",
      tone: "reef",
    },
    body: { en: divingBody },
    insiders: [
      {
        type: "go-early",
        title: { en: "Threshers at dawn, or not at all" },
        body: { en: "At Monad Shoal the thresher sharks come up to cleaning stations around first light. Boats leave Malapascua before 5am. It is worth every minute of lost sleep." },
      },
      {
        type: "inside-tip",
        title: { en: "Book Tubbataha the year before" },
        body: { en: "The season lasts only about three months and liveaboard places are limited. Serious divers book a year ahead; we start looking as soon as the next season's dates open." },
      },
      {
        type: "worth-the-detour",
        title: { en: "Barracuda Lake, Coron" },
        body: { en: "Freshwater over saltwater, limestone walls and a thermocline where the temperature climbs sharply. Unlike any other dive in the country." },
      },
      {
        type: "local-favorite",
        title: { en: "Snorkel the sardines from the beach" },
        body: { en: "In Moalboal you do not need a boat or a certification. Walk in from Panagsama, swim a few metres past the drop-off, and the shoal is often right there." },
      },
    ],
    faqs: [
      {
        q: { en: "When is the best time to dive in the Philippines?" },
        a: { en: "March to June generally offers the calmest seas and the widest choice, including Tubbataha's short season. Many sites in Cebu, Bohol and Negros dive well all year." },
      },
      {
        q: { en: "Can beginners dive in the Philippines?" },
        a: { en: "Yes. Warm water, shallow reefs and widely available courses make it an excellent place to learn. Panglao, Moalboal, Dauin and Coron all have beginner-friendly sites." },
      },
      {
        q: { en: "How do I get to Tubbataha?" },
        a: { en: "Only by liveaboard from Puerto Princesa, during the season of roughly mid-March to mid-June. Trips usually last around a week and should be booked well in advance." },
      },
      {
        q: { en: "Where can I see thresher sharks?" },
        a: { en: "At Monad Shoal, off Malapascua Island in northern Cebu, on early-morning dives. Sightings are frequent but never guaranteed." },
      },
      {
        q: { en: "Is it ethical to swim with whale sharks in Oslob?" },
        a: { en: "Many marine scientists are concerned that daily feeding in Oslob changes the animals' natural behaviour. We do not include it. Donsol, where the whale sharks are wild and not fed, is the alternative we prefer." },
      },
    ],
    related: {
      destinations: ["coron", "malapascua", "moalboal", "dumaguete", "bohol", "palawan"],
      journeys: ["palawan-deep-dive", "the-grand-philippines"],
    },
  },
  {
    slug: "surfing-in-the-philippines",
    group: "travel-styles",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Surfing in the Philippines",
      fr: "Surf aux Philippines",
      es: "Surf en Filipinas",
      ru: "Сёрфинг на Филиппинах",
      ar: "ركوب الأمواج في الفلبين",
    },
    description: {
      en: "Cloud 9 and beyond: Siargao's breaks by level, La Union and Baler, the swell seasons, learning to surf and reef safety.",
      fr: "Cloud 9 et au-delà : les spots de Siargao par niveau, La Union et Baler, les saisons de houle, apprendre à surfer et sécurité sur le récif.",
      es: "Cloud 9 y mucho más: las olas de Siargao por nivel, La Union y Baler, temporadas de swell, aprender a surfear y seguridad en el arrecife.",
      ru: "Cloud 9 и не только: споты Сиаргао по уровню, Ла-Унион и Балер, сезоны свелла, обучение сёрфингу и безопасность на рифе.",
      ar: "كلاود 9 وما بعدها: أمواج سيارغاو حسب المستوى، ولا يونيون وبالير، ومواسم الأمواج، وتعلّم ركوب الأمواج، والسلامة فوق الشعاب.",
    },
    photo: {
      alt: { en: "Surfer walking along the Cloud 9 boardwalk at sunrise" },
      brief: "Siargao, sunrise: a surfer with a board on the Cloud 9 boardwalk, wave peeling behind, soft gold light.",
      tone: "dusk",
    },
    body: { en: surfingBody },
    insiders: [
      {
        type: "skip-this",
        title: { en: "Skip Cloud 9 for your first reef wave" },
        body: { en: "It is shallow, fast and crowded with good surfers. Learn at Jacking Horse or Daku at the right tide, then go and watch Cloud 9 from the boardwalk." },
      },
      {
        type: "worth-the-detour",
        title: { en: "Pacifico, an hour north" },
        body: { en: "A long left in a quiet village, at its best when the northeast monsoon is blowing and the General Luna breaks are messy. Few people, slow evenings." },
      },
      {
        type: "inside-tip",
        title: { en: "Pack booties and antiseptic" },
        body: { en: "Reef cuts infect easily in tropical heat. Clean every scrape the same day, and wear booties until you know the break at low tide." },
      },
    ],
    faqs: [
      {
        q: { en: "When is surf season in Siargao?" },
        a: { en: "The surf is generally at its best from around August to November. From November to March there is more swell but often onshore wind at many breaks; April to July is usually small, good for beginners." },
      },
      {
        q: { en: "Is Siargao good for beginner surfers?" },
        a: { en: "Yes, with the right spot and tide. Jacking Horse, Daku Reef and Guiwan are popular for lessons. Leave Cloud 9 to experienced surfers." },
      },
      {
        q: { en: "Where can I surf near Manila?" },
        a: { en: "La Union, about five to six hours north by road, has beginner-friendly beach breaks from roughly October to March. Baler in Aurora is another option, with a season of roughly October to February." },
      },
      {
        q: { en: "Do I need a wetsuit to surf in the Philippines?" },
        a: { en: "No. The water is warm all year. A rash guard protects against sun and reef, and booties are useful on shallow reefs." },
      },
      {
        q: { en: "Can I rent a surfboard in Siargao?" },
        a: { en: "Yes, boards for every level are easy to rent in General Luna. Bringing your own is possible, but it must be booked as sports equipment on domestic flights." },
      },
    ],
    related: {
      destinations: ["siargao"],
      journeys: ["surf-and-islands", "the-slow-philippines"],
    },
  },

  /* ---------------------------- PRACTICAL --------------------------- */
  {
    slug: "domestic-flights-in-the-philippines",
    group: "practical",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Domestic Flights in the Philippines",
      fr: "Vols intérieurs aux Philippines",
      es: "Vuelos domésticos en Filipinas",
      ru: "Внутренние перелёты на Филиппинах",
      ar: "الرحلات الداخلية في الفلبين",
    },
    description: {
      en: "How domestic flights work: hubs, baggage limits, small airports, delays and how to build connections that survive the wet season.",
      fr: "Comment fonctionnent les vols intérieurs : hubs, franchises bagages, petits aéroports, retards et correspondances qui résistent à la saison des pluies.",
      es: "Cómo funcionan los vuelos internos: hubs, límites de equipaje, aeropuertos pequeños, retrasos y conexiones que resisten la temporada de lluvias.",
      ru: "Как устроены внутренние рейсы: хабы, нормы багажа, маленькие аэропорты, задержки и стыковки, которые выдержат сезон дождей.",
      ar: "كيف تعمل الرحلات الداخلية: المطارات المحورية، وحدود الأمتعة، والمطارات الصغيرة، والتأخيرات، وكيف تبني رحلات ربط تصمد في موسم الأمطار.",
    },
    photo: {
      alt: { en: "Turboprop aircraft on a small island airstrip surrounded by palms" },
      brief: "A small turboprop on a palm-fringed island runway, passengers walking across the apron. No airline livery visible.",
      tone: "sand",
    },
    body: { en: moreGuides["domestic-flights-in-the-philippines"].body },
    insiders: moreGuides["domestic-flights-in-the-philippines"].insiders,
    faqs: moreGuides["domestic-flights-in-the-philippines"].faqs,
    related: moreGuides["domestic-flights-in-the-philippines"].related,
  },
  {
    slug: "ferries-in-the-philippines",
    group: "practical",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Ferries in the Philippines",
      fr: "Ferries aux Philippines",
      es: "Ferris en Filipinas",
      ru: "Паромы на Филиппинах",
      ar: "العبّارات في الفلبين",
    },
    description: {
      en: "Fast craft, slow ferries and bangkas: the sea routes worth taking, booking tips, and what happens when the Coast Guard stops sailings.",
      fr: "Navettes rapides, ferries lents et bangkas : les liaisons maritimes qui valent le coup, conseils de réservation et que faire quand les départs sont suspendus.",
      es: "Barcos rápidos, ferris lentos y bangkas: las rutas marítimas que valen la pena, consejos para reservar y qué pasa cuando se suspenden las salidas.",
      ru: "Скоростные катера, медленные паромы и банки: какие морские маршруты стоят того, как бронировать и что делать, если рейсы отменили из-за погоды.",
      ar: "قوارب سريعة وعبّارات بطيئة وقوارب بانكا: الخطوط البحرية التي تستحق، ونصائح الحجز، وماذا يحدث عند تعليق الإبحار.",
    },
    photo: {
      alt: { en: "View from a ferry deck towards a green island" },
      brief: "From the open rear deck of a fast craft: wake, a green island on the horizon, a passenger's arm on the rail.",
      tone: "stone",
    },
    body: { en: moreGuides["ferries-in-the-philippines"].body },
    insiders: moreGuides["ferries-in-the-philippines"].insiders,
    faqs: moreGuides["ferries-in-the-philippines"].faqs,
    related: moreGuides["ferries-in-the-philippines"].related,
  },
  {
    slug: "sim-cards-in-the-philippines",
    group: "practical",
    status: "published",
    updated: UPDATED,
    title: {
      en: "SIM Cards and eSIMs in the Philippines",
      fr: "Carte SIM et eSIM aux Philippines",
      es: "Tarjeta SIM y eSIM en Filipinas",
      ru: "SIM-карта и eSIM на Филиппинах",
      ar: "شرائح الاتصال وeSIM في الفلبين",
    },
    description: {
      en: "Which SIM or eSIM to buy, where to get it, the registration rules and what coverage is really like on the islands.",
      fr: "Quelle carte SIM ou eSIM choisir, où l'acheter, l'enregistrement obligatoire et la couverture réelle dans les îles.",
      es: "Qué SIM o eSIM comprar, dónde conseguirla, el registro obligatorio y cómo es de verdad la cobertura en las islas.",
      ru: "Какую SIM-карту или eSIM купить, где это сделать, обязательная регистрация и реальное покрытие на островах.",
      ar: "أي شريحة أو eSIM تشتري، ومن أين، وقواعد التسجيل، وكيف هي التغطية فعلاً في الجزر.",
    },
    photo: {
      alt: { en: "Phone showing a map, resting on a beach bag" },
      brief: "Close-up of a phone with an offline map open, resting on a woven bag on a beach bench. No brand logos.",
      tone: "sand",
    },
    body: { en: moreGuides["sim-cards-in-the-philippines"].body },
    insiders: moreGuides["sim-cards-in-the-philippines"].insiders,
    faqs: moreGuides["sim-cards-in-the-philippines"].faqs,
    related: moreGuides["sim-cards-in-the-philippines"].related,
  },
  {
    slug: "internet-in-the-philippines",
    group: "practical",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Internet and Wi-Fi in the Philippines",
      fr: "Internet et Wi-Fi aux Philippines",
      es: "Internet y wifi en Filipinas",
      ru: "Интернет и Wi-Fi на Филиппинах",
      ar: "الإنترنت والواي فاي في الفلبين",
    },
    description: {
      en: "Mobile data, hotel Wi-Fi and remote work on the islands: where the connection is good, where it is not, and how to plan around it.",
      fr: "Données mobiles, Wi-Fi des hôtels et télétravail dans les îles : où la connexion est bonne, où elle ne l'est pas, et comment s'organiser.",
      es: "Datos móviles, wifi en hoteles y teletrabajo en las islas: dónde la conexión es buena, dónde no y cómo organizarte.",
      ru: "Мобильный интернет, Wi-Fi в отелях и удалённая работа на островах: где связь хорошая, где нет и как это учесть.",
      ar: "بيانات الهاتف وواي فاي الفنادق والعمل عن بُعد في الجزر: أين يكون الاتصال جيداً وأين لا، وكيف تخطط لذلك.",
    },
    photo: {
      alt: { en: "Laptop on a shaded wooden table facing the sea" },
      brief: "A laptop on a weathered wooden table under a nipa roof, sea beyond. Remote work, honestly framed.",
      tone: "jungle",
    },
    body: { en: moreGuides["internet-in-the-philippines"].body },
    insiders: moreGuides["internet-in-the-philippines"].insiders,
    faqs: moreGuides["internet-in-the-philippines"].faqs,
    related: moreGuides["internet-in-the-philippines"].related,
  },
  {
    slug: "money-and-currency-in-the-philippines",
    group: "practical",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Money and Currency in the Philippines",
      fr: "Argent et devise aux Philippines",
      es: "Dinero y moneda en Filipinas",
      ru: "Деньги и валюта на Филиппинах",
      ar: "المال والعملة في الفلبين",
    },
    description: {
      en: "The Philippine peso, ATMs, cards, cash on the islands, fees and tipping: how to handle money without surprises.",
      fr: "Le peso philippin, distributeurs, cartes, espèces dans les îles, frais et pourboires : gérer son argent sans mauvaises surprises.",
      es: "El peso filipino, cajeros, tarjetas, efectivo en las islas, comisiones y propinas: cómo manejar el dinero sin sorpresas.",
      ru: "Филиппинское песо, банкоматы, карты, наличные на островах, комиссии и чаевые: как обращаться с деньгами без сюрпризов.",
      ar: "البيزو الفلبيني وأجهزة الصراف والبطاقات والنقد في الجزر والرسوم والإكراميات: كيف تدير مالك دون مفاجآت.",
    },
    photo: {
      alt: { en: "Peso notes and coins on a market stall counter beside mangoes" },
      brief: "A market stall counter: a few peso notes and coins next to ripe mangoes and a handwritten price card.",
      tone: "sand",
    },
    body: { en: moreGuides["money-and-currency-in-the-philippines"].body },
    insiders: moreGuides["money-and-currency-in-the-philippines"].insiders,
    faqs: moreGuides["money-and-currency-in-the-philippines"].faqs,
    related: moreGuides["money-and-currency-in-the-philippines"].related,
  },
  {
    slug: "philippines-visa-information",
    group: "practical",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Philippines Visa and Entry Requirements",
      fr: "Visa pour les Philippines : formalités d'entrée",
      es: "Visado para Filipinas: requisitos de entrada",
      ru: "Виза на Филиппины и правила въезда",
      ar: "تأشيرة الفلبين وشروط الدخول",
    },
    description: {
      en: "Visa-free stays, the eTravel registration, passport validity, onward tickets and extensions, with where to verify the current rules.",
      fr: "Séjour sans visa, enregistrement eTravel, validité du passeport, billet de sortie et prolongations, et où vérifier les règles en vigueur.",
      es: "Estancia sin visado, registro eTravel, validez del pasaporte, billete de salida y prórrogas, y dónde comprobar las normas vigentes.",
      ru: "Безвизовый въезд, регистрация eTravel, срок действия паспорта, обратный билет и продление — и где проверить актуальные правила.",
      ar: "الإقامة دون تأشيرة، والتسجيل في eTravel، وصلاحية جواز السفر، وتذكرة المغادرة، والتمديد، ومن أين تتحقق من القواعد الحالية.",
    },
    photo: {
      alt: { en: "Passport and boarding pass on a table by an airport window" },
      brief: "A passport (cover not identifiable) and boarding pass on a café table by an airport window, aircraft blurred outside.",
      tone: "stone",
    },
    body: { en: visaBody },
    insiders: [
      {
        type: "inside-tip",
        title: { en: "Do eTravel the evening before you fly" },
        body: { en: "The window opens 72 hours before arrival. Complete it the night before departure, screenshot the QR code for every traveller, and you will not be hunting for signal on landing." },
      },
      {
        type: "skip-this",
        title: { en: "Skip paid eTravel websites" },
        body: { en: "Registration on the official site, etravel.gov.ph, is free. Third-party sites that charge for it add nothing but a fee." },
      },
    ],
    faqs: [
      {
        q: { en: "Do I need a visa to visit the Philippines?" },
        a: { en: "Many nationalities, including EU, UK and UAE passport holders, can currently enter visa-free for up to 30 days for tourism. Rules differ by nationality and can change, so check with the Bureau of Immigration, the Department of Foreign Affairs or your nearest Philippine embassy." },
      },
      {
        q: { en: "What is eTravel and when do I need to complete it?" },
        a: { en: "eTravel is the Philippines' online travel registration at etravel.gov.ph. Every traveller must complete it within 72 hours before arrival. It is free on the official site." },
      },
      {
        q: { en: "How long must my passport be valid?" },
        a: { en: "At least six months beyond your intended stay in the Philippines." },
      },
      {
        q: { en: "Do I need a return ticket to enter the Philippines?" },
        a: { en: "Yes. Visa-free visitors need a confirmed return or onward ticket leaving within the permitted stay. Airlines may refuse boarding without one." },
      },
      {
        q: { en: "Can I extend my stay in the Philippines?" },
        a: { en: "Visa-free stays can usually be extended at a Bureau of Immigration office in the Philippines, for a fee. Apply before your permitted stay ends." },
      },
      {
        q: { en: "Can Russian citizens enter the Philippines without a visa?" },
        a: { en: "Please check the current rules directly with the Philippine embassy in Moscow or the Department of Foreign Affairs before travelling. We prefer not to give an answer that may be out of date." },
      },
    ],
    related: {
      destinations: ["manila", "cebu"],
      journeys: ["island-classics"],
    },
  },
  {
    slug: "is-the-philippines-safe",
    group: "practical",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Is the Philippines Safe? A Practical Guide",
      fr: "Les Philippines sont-elles sûres ?",
      es: "¿Es seguro viajar a Filipinas?",
      ru: "Безопасно ли на Филиппинах?",
      ar: "هل السفر إلى الفلبين آمن؟",
    },
    description: {
      en: "Safety on the islands, in cities and at sea: what to watch for, typhoons, boat safety, health and the official advice worth reading.",
      fr: "Sécurité dans les îles, en ville et en mer : à quoi faire attention, typhons, bateaux, santé et conseils officiels à consulter.",
      es: "Seguridad en las islas, en la ciudad y en el mar: a qué prestar atención, tifones, barcos, salud y los avisos oficiales que conviene leer.",
      ru: "Безопасность на островах, в городах и на море: на что обращать внимание, тайфуны, лодки, здоровье и официальные рекомендации.",
      ar: "السلامة في الجزر والمدن والبحر: ما الذي يجب الانتباه إليه، والأعاصير، وسلامة القوارب، والصحة، والإرشادات الرسمية التي تستحق القراءة.",
    },
    photo: {
      alt: { en: "Life jackets hanging in a row on a wooden outrigger boat" },
      brief: "Orange life jackets hanging neatly along the frame of a bangka, sea and island behind. Reassuring, practical.",
      tone: "lagoon",
    },
    body: { en: moreGuides["is-the-philippines-safe"].body },
    insiders: moreGuides["is-the-philippines-safe"].insiders,
    faqs: moreGuides["is-the-philippines-safe"].faqs,
    related: moreGuides["is-the-philippines-safe"].related,
  },
  {
    slug: "philippines-packing-guide",
    group: "practical",
    status: "published",
    updated: UPDATED,
    title: {
      en: "What to Pack for the Philippines",
      fr: "Que mettre dans sa valise pour les Philippines ?",
      es: "Qué llevar en la maleta a Filipinas",
      ru: "Что взять с собой на Филиппины",
      ar: "ماذا تحزم في حقيبتك للفلبين",
    },
    description: {
      en: "A packing list built for islands: light layers, reef-safe sun protection, dry bags, the right shoes and what to leave at home.",
      fr: "Une liste pensée pour les îles : vêtements légers, protection solaire respectueuse des récifs, sacs étanches, bonnes chaussures et ce qu'il faut laisser chez soi.",
      es: "Una lista pensada para las islas: ropa ligera, protección solar respetuosa con los arrecifes, bolsas estancas, el calzado adecuado y lo que puedes dejar en casa.",
      ru: "Список вещей для островов: лёгкая одежда, солнцезащита, безопасная для рифов, гермомешки, правильная обувь и то, что можно оставить дома.",
      ar: "قائمة مصممة للجزر: ملابس خفيفة، وواقٍ من الشمس آمن للشعاب، وحقائب مقاومة للماء، والأحذية المناسبة، وما يمكنك تركه في المنزل.",
    },
    photo: {
      alt: { en: "Neatly packed soft bag with rash guard, hat and dry bag" },
      brief: "Overhead flat lay on linen: soft duffel, rash guard, hat, dry bag, sandals, reef-safe sunscreen without visible brands.",
      tone: "sand",
    },
    body: { en: moreGuides["philippines-packing-guide"].body },
    insiders: moreGuides["philippines-packing-guide"].insiders,
    faqs: moreGuides["philippines-packing-guide"].faqs,
    related: moreGuides["philippines-packing-guide"].related,
  },

  /* ----------------------------- CULTURE ---------------------------- */
  {
    slug: "philippine-customs-and-etiquette",
    group: "culture",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Local Customs and Etiquette in the Philippines",
      fr: "Coutumes et savoir-vivre aux Philippines",
      es: "Costumbres y etiqueta en Filipinas",
      ru: "Местные обычаи и этикет на Филиппинах",
      ar: "العادات وآداب التعامل في الفلبين",
    },
    description: {
      en: "Po and opo, church dress, tipping, eating with your hands and the small gestures that make a big difference with Filipino hosts.",
      fr: "« Po » et « opo », tenue à l'église, pourboires, manger avec les mains : les petits gestes qui comptent auprès des Philippins.",
      es: "«Po» y «opo», vestimenta en las iglesias, propinas, comer con las manos y los pequeños gestos que cuentan con los filipinos.",
      ru: "«По» и «опо», одежда для церкви, чаевые, еда руками и маленькие жесты, которые много значат для филиппинцев.",
      ar: "كلمتا «بو» و«أوبو»، واللباس في الكنائس، والإكراميات، والأكل باليد، والإيماءات الصغيرة التي تُحدث فرقاً كبيراً مع الفلبينيين.",
    },
    photo: {
      alt: { en: "Family meal shared on banana leaves at a long table" },
      brief: "A boodle-style meal on banana leaves, hands reaching in, laughter, rice mounds and grilled fish. Faces partially out of frame.",
      tone: "rice",
    },
    body: { en: moreGuides["philippine-customs-and-etiquette"].body },
    insiders: moreGuides["philippine-customs-and-etiquette"].insiders,
    faqs: moreGuides["philippine-customs-and-etiquette"].faqs,
    related: moreGuides["philippine-customs-and-etiquette"].related,
  },
  {
    slug: "philippine-food-guide",
    group: "culture",
    status: "published",
    updated: UPDATED,
    title: {
      en: "Philippine Food Guide: What to Eat",
      fr: "Cuisine philippine : que manger aux Philippines ?",
      es: "Comida filipina: qué comer en Filipinas",
      ru: "Филиппинская кухня: что попробовать",
      ar: "دليل المطبخ الفلبيني: ماذا تأكل",
    },
    description: {
      en: "Adobo, sinigang, lechon, kinilaw, halo-halo and the silog breakfast: the dishes to know, regional specialities and how to eat like a local.",
      fr: "Adobo, sinigang, lechon, kinilaw, halo-halo et petit-déjeuner silog : les plats à connaître, les spécialités régionales et comment manger comme un local.",
      es: "Adobo, sinigang, lechón, kinilaw, halo-halo y el desayuno silog: los platos imprescindibles, las especialidades regionales y cómo comer como un local.",
      ru: "Адобо, синиганг, лечон, кинилау, хало-хало и завтрак силог: главные блюда, региональные особенности и как есть по-местному.",
      ar: "أدوبو وسينيغانغ وليتشون وكينيلاو وهالو هالو وفطور سيلوغ: الأطباق التي يجب أن تعرفها، والأطباق الإقليمية، وكيف تأكل مثل السكان المحليين.",
    },
    photo: {
      alt: { en: "Table of Filipino dishes with rice, kinilaw and dipping sauces" },
      brief: "A shared table from above: adobo, sinigang, kinilaw, grilled fish, rice, small saucers of vinegar and calamansi. Natural light, hands at the edges.",
      tone: "rice",
    },
    body: { en: foodBody },
    insiders: [
      {
        type: "best-breakfast",
        title: { en: "A silog, not the hotel buffet" },
        body: { en: "Garlic rice, a fried egg and longganisa or tapa, with strong local coffee. Every province has its own longganisa; try a different one on each island." },
      },
      {
        type: "local-favorite",
        title: { en: "Lechon in Cebu" },
        body: { en: "Cebu's roast pig is stuffed with lemongrass and spices, so it needs no sauce. Go at lunchtime, when it is freshly carved and the skin still crackles." },
      },
      {
        type: "inside-tip",
        title: { en: "Build your own sawsawan" },
        body: { en: "The small dishes on the table are not decoration. Mix vinegar, soy, calamansi and chilli to your taste. It changes every dish, and Filipinos will notice that you did." },
      },
    ],
    faqs: [
      {
        q: { en: "What is the national dish of the Philippines?" },
        a: { en: "Adobo is often called the unofficial national dish: meat braised in vinegar, soy sauce, garlic and bay leaf. There is no single official version." },
      },
      {
        q: { en: "Is Filipino food spicy?" },
        a: { en: "Mostly not. Filipino food leans sour, salty and sweet, with chilli added at the table. Bicol is the exception, where coconut and chilli go into almost everything." },
      },
      {
        q: { en: "Is street food safe in the Philippines?" },
        a: { en: "Generally yes if it is cooked fresh and hot in front of you. Choose busy stalls and go gently for the first few days." },
      },
      {
        q: { en: "Is it easy to eat vegetarian in the Philippines?" },
        a: { en: "Easier in cities and tourist areas than in the provinces. Many vegetable dishes contain pork, fish sauce or shrimp paste, so be specific when you order." },
      },
      {
        q: { en: "Can I find halal food in the Philippines?" },
        a: { en: "Yes, especially in Manila, in parts of Mindanao and in larger tourist areas. Pork is common in Filipino cooking, so tell your hotel and travel designer in advance and we will plan around it." },
      },
    ],
    related: {
      destinations: ["cebu", "manila", "negros", "siargao", "dumaguete"],
      journeys: ["the-slow-philippines", "the-grand-philippines"],
    },
  },
];
