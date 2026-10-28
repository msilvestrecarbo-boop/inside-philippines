import type { Story } from "./types";

/**
 * Stories: opinionated editorial pieces, as opposed to the practical guides
 * in ./guides.ts. Bodies are English-only markdown-lite ("## Heading",
 * paragraphs, "- " bullets). Titles and descriptions exist in all five
 * languages so planned stories can be listed as "in preparation".
 *
 * Integrity rule: no hotels, restaurants or operators are named until the
 * team has verified them. The Palawan hotels and Siargao food stories
 * therefore describe areas and criteria, not named places.
 */

const UPDATED = "2026-10-01";
const AUTHOR = "Inside Philippines team"; // placeholder until real bylines

/* ------------------------------------------------------------------ */
/* Bodies                                                              */
/* ------------------------------------------------------------------ */

const elNidoVsCoronBody = `It is the question we are asked more than any other, usually in the first five minutes of a call: El Nido or Coron? Both are in northern Palawan, both are limestone islands rising out of improbably blue water, and they are only around four hours apart by fast ferry. They are also very different places, and choosing the wrong one for you is the most common way to come home slightly disappointed from a trip that looked perfect on paper.

Here is how we explain the difference to friends.

## The short answer

El Nido is the more beautiful place above the water. Coron is the more interesting one below it. El Nido is better organised, with more places to stay and eat and a wider choice of experiences. Coron is rougher around the edges, less polished and, for some people, more fun for exactly that reason.

If you can, see both. If you can only see one, read on.

## El Nido: the postcard, with a queue

Bacuit Bay is, frankly, ridiculous. Karst cliffs rise vertically from the water, islands shelter hidden lagoons you paddle into by kayak, and beaches appear in the gaps between rock walls. The standard island-hopping tours, labelled A to D, take you to the Big and Small Lagoons, the Secret Lagoon, Shimizu Island, the beaches of Seven Commandos and Helicopter Island, and more.

The trade-off is that everyone is doing the same thing at the same time. Shared tours leave at around 9am and arrive at the lagoons together. At the Small Lagoon in peak season, you can find yourself in a kayak traffic jam. El Nido town itself is crowded, noisy and still building around its own success.

None of this is a reason to skip it. It is a reason to do it differently:

- Stay outside town, on a quieter beach to the north or on an island.
- Take a private boat and leave at 7am. The lagoons are a different place before the shared tours arrive.
- Reverse the standard route, so you reach the famous spots as everyone else leaves.
- Give it four nights, so you are never forced to go out on a day the wind is up.

Nacpan Beach, about an hour's drive north, is a long, wide curve of sand that still feels open, even in high season. Go late in the afternoon.

## Coron: wilder, wetter, stranger

Coron is the name of both a town on Busuanga Island and the dramatic limestone island facing it. The town is functional, more market town than resort. You do not come for the town.

You come for what lies around it. Kayangan Lake, reached by a short, steep climb, has the view that appears on every poster of Coron, and freshwater so clear the limestone below looks close enough to touch. Twin Lagoon is two bodies of water separated by a rock wall that you swim or climb through, depending on the tide. Barracuda Lake has a thermocline where the water suddenly turns hot, and is one of the strangest swims you will ever do.

Then there are the wrecks. In September 1944, a US air raid sank a fleet of Japanese supply ships in the bays around Coron. Today they make it one of the best wreck-diving areas in the world. Some, like the Skeleton Wreck, are shallow enough for snorkellers. Others are serious dives for trained wreck divers.

Coron's trade-offs: it takes longer to reach the best spots, the town has fewer good places to stay, and the experience is less curated. Some of the most popular sites get crowded around midday. For travellers who like their beauty slightly unruly, that is a feature.

## How they compare, point by point

- Scenery above water: El Nido wins, by a margin.
- Diving and snorkelling: Coron wins, by a larger margin.
- Places to stay: El Nido has much more choice at every level, especially boutique and luxury.
- Crowds: both busy in peak season; El Nido feels busier because more of it happens in one bay.
- Getting there: El Nido has its own small airport with limited flights, or a 5 to 6 hour drive from Puerto Princesa. Coron is served by Busuanga airport, around 40 minutes from town, with more frequent flights from Manila.
- Wet season: Coron is somewhat more sheltered than El Nido from the southwest monsoon.
- Families: El Nido, for its beaches and easier logistics.
- Divers and adventurous couples: Coron.

## How to do both

The best way is the fast ferry between Coron and El Nido, which takes around four hours and runs mainly in the dry season, weather permitting. In the wet season, or if the sea is up, you fly via Manila instead, which takes most of a day.

For something special, multi-day expedition boat trips cross between the two over three to five days, stopping at remote islands, fishing villages and beaches with no road. Accommodation is simple and the experience is not. It is one of the very best things you can do in the Philippines.

Our recommendation for a two-island Palawan trip: three nights in Coron first, then the ferry, then four nights in El Nido to finish slowly. Starting in Coron means you end in the more comfortable place, with the better beaches, just when you want to stop moving.

## The verdict

Choose El Nido if this is your first time in the Philippines, if you want the most beautiful version of the limestone islands, and if you care about where you sleep. Choose Coron if you dive, if you prefer rough edges to polish, or if you are travelling in the wet season.

And if you have ten days in Palawan, stop choosing. Do both.`;

const siargaoBeyondSurfingBody = `Siargao has a reputation that precedes it. Mention the island in Manila and people picture Cloud 9, sun-bleached surfers and a party scene in General Luna. All of that exists. But most visitors to Siargao do not surf at all, or surf for an hour in the morning and spend the rest of the day doing something else. The island is far bigger, greener and more varied than its surf reputation suggests.

Here is the Siargao we love when the boards are back on the rack.

## The island-hopping

From General Luna, bangkas run out to three islands that make up the classic day trip. Naked Island is a bare strip of white sand with no shade at all, which explains the name and should explain your sunscreen. Daku is the largest, with a fishing village, a long beach and a lunch of grilled fish under the coconut trees. Guyam is a tiny, round island with a few palms, made for a swim and a nap.

Go early. By 11am the boats bunch up and Naked Island stops feeling naked.

## The rock pools at Magpupungko

On the northeast coast near Pilar, the ocean recedes at low tide to reveal a set of natural rock pools of clear seawater, some deep enough to jump into from the surrounding rocks. It only works at low tide, and the timing changes every day, so check before you set off. At high tide, it is just waves on rocks.

## Sugba Lagoon and the mangroves

On the western side of the island, near Del Carmen, Siargao has one of the largest mangrove forests in Mindanao, a vast maze of channels and green walls. Boats wind through it to Sugba Lagoon, a jade-green inlet ringed by forested limestone, where you can swim, paddleboard or jump from a wooden platform. It is one of the most peaceful places on the island, and the boat ride there is half the pleasure.

## The road north

Hire a scooter or a driver and head north from General Luna. The coconut palm road, a stretch of tall palms lining both sides of the road, is the island's most photographed view, and worth stopping for once. Beyond it, the island becomes quieter and more rural: rice fields, fishing villages, waterfalls, small churches and long, empty beaches.

Pacifico, in the far north, has a long left-hand wave and a village feel that General Luna lost years ago. Even if you do not surf, it is a beautiful place to spend a night or two, with a beach you will likely share with a few fishermen and a dog.

## Sohoton Cove

Further away, on Bucas Grande island to the southwest, Sohoton Cove is a full-day trip by boat. You pass through a low cave entrance into a hidden lagoon, swim in clear water among limestone walls and, in certain seasons, in a lake where stingless jellyfish gather. Seasons and access rules change, so we check before every trip.

## The food

Siargao eats better than an island its size has any right to. General Luna has a remarkable range of cafés and restaurants for a small town, opened by Filipinos from Manila and Cebu and by people from around the world who came to surf and stayed. But do not skip the local side: kinilaw made with the morning's catch, grilled fish at a beach stall, and a simple carinderia lunch of whatever is in the pots.

We are not naming places yet, because we prefer to recommend restaurants only once our team has eaten there recently. When you travel with us, you will get our current list.

## When to come for non-surfers

The best months for beaches, island-hopping and calm water are usually around March to October, with long sunny spells. The surf season, roughly August to November, is the island's liveliest time and still very good for non-surfers. From around December to February, the northeast monsoon often brings rain and rough seas to the island, and some boat trips can be cancelled.

## Who Siargao is for

Siargao suits couples and friends who like a laid-back, social place with good food and a young, international energy. It suits families who are happy with a simpler style of resort. It is less suited to travellers who want a classic luxury beach resort with everything on site, although that is slowly changing.

## How we put it together

Four or five nights is right for Siargao. Fly in from Manila or Cebu, stay outside the busiest part of General Luna, and spread the excursions out so you have a day of nothing in the middle. If you surf, mornings are for the waves and afternoons for everything above. If you do not, take one surf lesson anyway. Everyone on Siargao does, eventually.`;

const tenIslandsBody = `Most Philippine itineraries are built backwards. People pick a list of famous names, draw lines between them and only then discover that two of them have no direct connection and a third is under monsoon rain in their month. We prefer to start with the island: one place good enough to anchor a whole trip, with everything else arranged around it.

These are the ten we would build a trip around, and what each one needs from you.

## 1. El Nido, Palawan

The classic. Limestone cliffs, hidden lagoons and some of the best island-hopping in Asia. El Nido justifies a long-haul flight on its own, as long as you stay outside the busy town and go out early. Give it four nights. Best roughly December to May.

Build around it: Coron by fast ferry in season, or Port Barton on the road from Puerto Princesa.

## 2. Coron, Palawan

For divers, the reason to come to the Philippines: Japanese wrecks from 1944, freshwater lakes and dramatic limestone scenery. For non-divers, Kayangan Lake and the snorkelling are reason enough. Coron needs three nights at least.

Build around it: El Nido, or an expedition boat trip between the two.

## 3. Siargao

The island that changed how a generation of Filipinos travels. Surf at Cloud 9, island-hopping, mangroves, rock pools and an easy, sociable beach life. It suits couples and friends who prefer a lively village to a quiet resort. Five nights. Best roughly March to November, with the best surf from around August.

Build around it: Bohol or Siquijor via Cebu, or Camiguin for a slower finish.

## 4. Bohol

The easiest island in the country to love: the Chocolate Hills, tarsiers, the Loboc River, old stone churches and the beaches of Panglao, with good diving off Balicasag. Families do especially well here. Four nights, all year.

Build around it: Cebu by fast ferry, Siquijor by fast craft, Siargao via Cebu.

## 5. Siquijor

A small island with a big reputation for healers and folklore, waterfalls you can swim in and a coastal road you can drive around in a day. Siquijor is where we send people who need to stop. Three or four nights. Best roughly November to May.

Build around it: Dumaguete and Apo Island, or Bohol.

## 6. Cebu: Moalboal and Malapascua

Cebu is usually treated as an airport. It deserves better. In Moalboal, millions of sardines swirl a short swim from shore; in tiny Malapascua, thresher sharks rise at dawn. Southern Cebu has canyoneering and waterfalls. Three nights in each, all year.

Build around it: Bohol by ferry, and Cebu's international airport makes it an easy final stop.

## 7. Camiguin

A small volcanic island off northern Mindanao: seven volcanoes, hot springs, cold springs, waterfalls, a sunken cemetery and a white sandbar. Camiguin feels like the Philippines before tourism, partly because it is awkward to reach. Three or four nights. Generally good much of the year, and outside the main typhoon belt.

Build around it: Siargao or Bohol, via Cebu or Cagayan de Oro.

## 8. Batanes

The northernmost islands of the Philippines, closer to Taiwan than to Manila. Rolling hills, stone houses built against typhoons, cliffs and lighthouses. Batanes looks nothing like the rest of the country. Flights are limited and often cancelled in poor weather, so give it four nights and keep the following day free. Best roughly March to May.

Build around it: Manila only. Batanes is a trip within a trip.

## 9. Negros: Dumaguete and Apo Island

A gentle university town with a seaside boulevard, and offshore, Apo Island, one of the country's best-known community-managed marine sanctuaries, where turtles graze on seagrass in the shallows. Nearby Dauin is a favourite for muck divers. Three or four nights, all year.

Build around it: Siquijor by fast craft, an hour away.

## 10. Boracay

Yes, Boracay. It is busy and it is not a secret, but White Beach at sunset remains one of the great beach scenes in Asia, and since its 2018 closure and rehabilitation, the island is cleaner and better managed. Go if you want ease, good food and a sociable evening, not seclusion. Three or four nights. Best roughly November to May.

Build around it: Manila or Cebu, by air to Caticlan.

## How to pick

Choose one island from this list as the anchor of your trip. Then add one or two that share a hub with it and contrast with it: a limestone island with a countryside island, a busy island with a quiet one, a diving island with a surfing one. Three islands in two weeks is plenty. Two in ten days is better.

What you will notice is that every island here needs at least three nights. That is not padding. In a country where every transfer costs half a day, three nights is the minimum for an island to give you more than it takes.

## Ones we left out, for now

Plenty of places almost made this list: Port Barton and the quiet north of Palawan, Malapascua on its own, the rice terraces of Banaue and Batad, Sagada, Bantayan, the far south of Palawan towards Balabac. Some are better as additions than anchors. Some, we are still getting to know well enough to recommend with confidence. They will appear in our Hidden Philippines series.`;

const siquijorBody = `There is a certain kind of traveller who arrives in the Philippines, sees El Nido and Boracay, and quietly wonders whether there is anything slower. There is. It is a small island in the Visayas, about an hour by fast craft from Dumaguete, and Filipinos still lower their voices slightly when they say its name.

Siquijor.

## The reputation

For generations, Siquijor has been known around the Philippines as an island of healers and sorcery. Its mananambal, traditional folk healers, use herbs, roots, prayers and rituals passed down through families. In Holy Week, healers from across the region gather in the mountain town of San Antonio to prepare potions, a tradition that draws curious visitors as well as people seeking cures. Some Filipinos still tease friends who are heading to Siquijor, telling them to be careful what they eat.

The reality is gentler. Siquijor is one of the friendliest and safest-feeling islands in the country, and its mystery is mostly in the atmosphere: dark jungle roads at dusk, old trees, quiet churches and the sense of a place that has kept its own rhythm.

## The coastal road

The best way to see Siquijor is to drive around it. The coastal road is roughly 70 to 75 kilometres, which you can complete in a day by scooter or with a driver, though it is better spread over two. On the way, you will pass most of what the island is known for.

- Cambugahay Falls, near Lazi: a series of turquoise pools fed by a river, with rope swings and wooden rafts. Go early, before the day-trippers from Dumaguete arrive.
- The Lazi church and convent: a coral-stone church from the Spanish era, and across the road, a large old convent of timber and stone, one of the most impressive historic buildings in the Visayas.
- The old balete tree: an enormous strangler fig, said to be several centuries old, with a spring at its roots where small fish nibble your feet.
- Salagdoong Beach: a pretty cove on the east coast with cliff jumps into deep water.
- Paliton Beach: a small, white-sand beach on the west coast, our favourite for sunset.
- The Siquijor and Larena churches, and small chapels in almost every village.

## Under water

Siquijor's coastline is lined with reefs, and much of the snorkelling starts from the beach. Turtles are common. There is good diving along the walls on the west and south coasts, and it is a short boat ride to Apo Island, one of the country's best-known marine sanctuaries.

## The pace

Here is what nobody tells you: there is not much to do on Siquijor. That is its gift. After a busy island, two or three days here feel like a week. Most evenings are spent watching the sun go down from a beach or a clifftop, followed by dinner and an early night. The island goes quiet by 9pm.

If you need nightlife, go to Boracay or Siargao. If you need a bookshop, bring a book.

## Where it fits in a trip

Siquijor works best after somewhere busier, not before. Our favourite combinations:

- Bohol and Siquijor: around two hours by fast craft from Tagbilaran, a gentle pairing of countryside and coast.
- Dumaguete, Apo Island and Siquijor: a slow Visayas loop for divers and snorkellers.
- El Nido, then Siquijor: limestone drama followed by complete calm, via a flight to Dumaguete or Cebu and a fast craft.

Three or four nights is the right amount. Two is too few to slow down; five is wonderful if you have the time.

## When to go

Siquijor is generally at its best from around November to May, when the sea is calmer and days are dry. From June to October, the southwest monsoon can bring rain and choppier crossings, though the island is reasonably sheltered compared with Palawan's west coast. Holy Week is a special time to visit for the healers' gathering, but book well ahead.

## Practical notes

- Getting there: most visitors arrive by fast craft from Dumaguete (about an hour), or from Tagbilaran in Bohol or Cebu City (longer, fewer departures). The nearest airport is Dumaguete.
- Getting around: scooters are widely available, and drivers can be arranged if you prefer not to ride. Roads in the interior are steep and winding; take it slowly, especially after rain.
- Money: bring cash. ATMs exist but are few and can run out.
- Connectivity: decent in the main towns, patchy elsewhere. This is not a bad thing.

## Why we love it

Siquijor is not the most spectacular island in the Philippines. It does not have El Nido's cliffs or Siargao's waves. What it has is harder to find: a place where you can drive for an hour and see more goats than tourists, swim in a waterfall at 7am with nobody else around, and end each day with a sunset you did not rush to catch.

Put it on your itinerary. Then try very hard to leave it on time.`;

const manilaBody = `Most visitors treat Manila as a necessary evil: a night at an airport hotel and an early flight to the islands. We understand why. The traffic is legendary, the heat is serious and the city's first impression is not its best. But Manila rewards anyone who gives it 48 hours and a plan. It is a city of 400-year-old churches, the oldest Chinatown in the world, a great national museum, a food scene that runs from street stalls to some of the most exciting kitchens in Asia, and people who are delighted when you take an interest.

Here is how we would spend two days.

## Day one, morning: Intramuros

Start in Intramuros, the walled city the Spanish began building in the late 16th century. Much of it was destroyed in the Battle of Manila in 1945, but enough survives, or has been rebuilt, to give you a sense of the old capital.

- San Agustin Church: completed in 1607, the oldest stone church in the Philippines and part of a UNESCO World Heritage listing. The interior, with its painted trompe-l'oeil ceiling, is extraordinary. The adjoining museum is worth an hour.
- Manila Cathedral: rebuilt several times after earthquakes and war, with a calm, light interior.
- Fort Santiago: the citadel at the mouth of the Pasig River, where national hero José Rizal was imprisoned before his execution in 1896.
- The walls themselves: walk a section in the morning, when it is still cool.

Go early. By 11am the heat is fierce, and a calesa (horse carriage) or a bamboo bicycle tour is a sensible way to finish.

## Day one, afternoon: the National Museum

Take a short ride to the National Museum complex beside Rizal Park. The National Museum of Fine Arts holds the great Filipino paintings, including Juan Luna's vast Spoliarium. The National Museum of Anthropology and the Museum of Natural History are next door. Entry to the national museums has been free for some years; check opening days before you go, as they close on Mondays.

## Day one, evening: Manila Bay and dinner

Manila Bay is famous for its sunsets, a smoky orange across the water. Watch it from the bayside promenade, then head to dinner. Manila's best restaurants are spread across Makati, Bonifacio Global City and the older neighbourhoods. We do not name restaurants in our stories until our team has eaten there recently, but when you travel with us, you will get our current list.

## Day two, morning: Binondo

Binondo, established in 1594, is often described as the oldest Chinatown in the world. It is crowded, chaotic and one of the best places in the city to eat. The best way to experience it is on foot, grazing:

- Hopia, flaky pastries filled with mung bean or ube.
- Dumplings and siopao (steamed buns) from small family shops.
- Fried siopao, lumpia and fresh spring rolls.
- Kiampong, Chinese-Filipino sticky rice.
- Strong coffee in an old-style café.

Visit Binondo Church, then walk to Escolta Street, once the grandest commercial street in Manila, where a younger generation is restoring old buildings and running weekend markets.

Next door, Quiapo is home to the Black Nazarene, a revered statue of Christ that draws vast crowds every January. The streets around the church sell everything from herbal remedies to religious medallions. Keep your phone and wallet close.

## Day two, afternoon: rest

Do not underestimate Manila's heat and traffic. Go back to your hotel, swim, sleep. The city is best in the mornings and evenings.

## Day two, evening: Poblacion or BGC

For your last evening, head to Poblacion in Makati, a few streets of old houses turned into bars, small restaurants and late-night food stalls. It is lively, young and very Manila. If you prefer something calmer, Bonifacio Global City (BGC) is a modern district with wide pavements, parks and plenty of places to eat.

## Practical notes

- Getting around: ride-hailing apps are the easiest way to get around. Allow far more time than distance suggests: 10 kilometres can take an hour at rush hour.
- Where to stay: Makati or BGC for convenience and restaurants, or close to the airport if you are only passing through.
- When to go: the dry months of December to April are most comfortable. April and May are very hot. The wet season, roughly June to October, brings heavy afternoon storms and occasional flooding.
- Safety: take normal big-city precautions, especially in crowded markets and on public transport.

## Why it is worth it

Manila will not give you a beach or a lagoon. What it gives you is context: the history, faith, food and energy that explain the rest of the country. Two days here and the islands make more sense. And on the way home, a final night in Manila means you never risk missing your international flight because of a delayed island connection.`;

/* ------------------------------------------------------------------ */
/* Stories                                                             */
/* ------------------------------------------------------------------ */

/**
 * Stories added 2026-10-28 for searches such as "travel agency Philippines",
 * "Philippines tours" and "private custom trips". Same integrity rule as
 * ./stories.ts: no hotels, restaurants or operators are named, and nothing is
 * claimed about the company that MARC has not confirmed.
 */
const UPDATED_MORE = "2026-10-28";

const travelAgencyBody = `Most people planning a first trip to the Philippines start the same way: forty browser tabs, three booking sites, a spreadsheet of ferry times and a growing doubt about whether the plan actually works. It is a country of more than 7,600 islands, and the hard part is not choosing beautiful places. It is connecting them. That is the work a local travel agency, or tour agency, in the Philippines does for you.

## What a local agency actually does

- **Plans the route.** Which islands fit your dates and the season, in which order, and how many nights each one needs. Most disappointing trips are caused by too many islands, not too few.
- **Books the pieces that do not talk to each other.** Domestic flights, fast craft, private boats, drivers and hotels are run by different companies. We put them in the right order, with sensible gaps between them.
- **Is there when something changes.** Flights are delayed and boats stay in port when the sea is rough. A team on the ground rebooks for you, so you are not standing at a pier trying to sort it out.

## A local tour agency or an international one?

A large international agency can sell you the Philippines, but it usually does not live here. We do. Our team works from Taguig in Metro Manila and General Luna in Siargao. That means we know which boat days are worth it in March and which ones are not, which areas flood in the wet season, and how long the drive really takes.

## What to ask any agency before you book

1. Who will I talk to during the trip, and how? Ask for a real person on WhatsApp, at any hour.
2. What exactly is included? Flights, transfers, boat days, entrance fees, meals and insurance should all be listed clearly.
3. What happens if the weather cancels a boat or a flight?
4. Is the trip private, shared, or a mix?
5. Will they tell you honestly when a place is not right for you or for your dates?

## How we work

You tell us how you like to travel, with the trip form, on WhatsApp or on a free video call. A travel designer replies personally, usually within one working day, with a route and a proposal. We adjust it together until it feels right. Every trip includes travel insurance with cancellation cover, and our team answers WhatsApp 24/7 while you travel.

## Our advice

Whoever you book with, choose a team that lives in the Philippines and answers you personally. It makes more difference to your trip than any hotel.`;

const toursBody = `Search for "Philippines tours" and you will find everything from a four-hour island-hopping trip to a three-week journey across the archipelago. They are very different things, and the right choice depends on how much time you have and how you like to travel.

## The three kinds of tours

- **Day tours.** Island-hopping in El Nido or Coron, the Chocolate Hills and tarsiers in Bohol, a walk through Intramuros in Manila. Easy to book once you are there, usually shared with other travellers.
- **Fixed group tours.** A set route, set dates and a group of strangers. Good value if the dates suit you, less good if you want to change anything.
- **Private, tailor-made tours.** Your own route, your own dates and your own pace, with private transfers and boats where they matter. This is what we design.

## How many islands, and for how long?

From Europe, most travellers choose 12 to 16 days. That is enough for two or three islands without spending half the trip in transit. A rule we use: one travel day for every three or four days on the islands.

- **10 days:** Palawan (El Nido or Coron) plus one more island, such as Bohol or Siargao.
- **14 days:** El Nido, Bohol and Siargao, or Coron, El Nido and a quiet island to finish.
- **3 weeks:** add the rice terraces of Banaue and Batad, or a remote island such as Batanes in the right season.

## What a good tour should include

Hotels, domestic flights and ferries, transfers, boat days, entrance fees and a local guide on tour days. Check whether lunch on boat days, environmental fees and travel insurance are included, because they often are not. On our trips, travel insurance with cancellation cover is included every time.

## Private or shared?

Shared boat tours are fine and sociable. A private boat changes the day: you leave earlier, skip the busiest lagoons at peak hour and stop where you like. Many of our travellers mix the two, with shared tours on some days and a private boat on the day that matters most.

## Our advice

Choose the season first, then the islands, then the hotels. Look at our ready-made journeys for ideas, then tell us what to change. Every route can be adapted.`;

const privateTripsBody = `A private, custom-made trip is not just a more expensive version of a package. It is a different way of travelling: a route built around you rather than around a brochure, with your own transfers, your own boats and nobody else's timetable.

## What "private" means in practice

- **Private transfers.** A driver waiting at every airport and pier, rather than a shared van that stops at six hotels.
- **Private boats.** You leave at 7am, reach the lagoons before the crowds and stop for lunch on a beach you choose.
- **Private guides.** A local guide for you alone, in Spanish or English, who adapts the day to your pace.
- **Your own dates.** You start when you want, stay longer where you are happy and skip what does not interest you.

## What "custom" means

We start with questions, not a catalogue. When do you want to travel? Who is coming? Do you prefer beaches, food, diving, culture or doing very little? What is your budget? Then we design a route that fits the season and connects well, and we choose hotels that suit the way you travel.

## How the process works

1. You tell us about your trip with the form, on WhatsApp or on a free video call.
2. A travel designer replies personally, usually within one working day.
3. You receive a proposal with the route, hotels and what is included.
4. We adjust it together until it feels right.
5. While you travel, our team is on WhatsApp 24/7.

## Is it much more expensive?

Less than people expect. The biggest costs in the Philippines are hotels and domestic flights, and those are the same whether you book privately or not. Private transfers and boats add to the price, but they also save hours on travel days. We show you the options at each level, from Essential to Signature, and you choose where to spend.

## Who it suits best

Couples and honeymooners, families with children, friends travelling together, slow travellers, and anyone visiting for the first time who wants it to go smoothly. It also suits experienced travellers who want to reach the places group tours do not go.

## Our advice

Tell us the three things that matter most to you on this trip. That is usually enough for us to design a first route.`;

const personalizedBody = `Two travellers can visit the same island in the same week and come home with completely different trips. The difference is rarely the hotel. It is the small, personal decisions: when you go, who shows you around, and the one or two moments planned just for you.

## Start with the person, not the place

When we design a trip, our first questions are about you. Is this a honeymoon, an anniversary, a birthday, a first trip together as a family? Do you wake up early or late? Do you want to dive, eat, walk, read or do nothing at all? The answers shape the route more than any list of famous places.

## Touches that make a trip yours

- **A celebration.** A private dinner on the beach for a honeymoon or an anniversary, a cake waiting for a birthday, or a quiet proposal at sunset. Tell us and we will plan it discreetly.
- **The right timing.** A private boat leaving at 7am, so you reach the lagoon before the crowds.
- **A guide who fits.** Spanish or English, and someone who matches your pace, whether you want history, food or just the best swimming spot.
- **Food that means something.** A market visit, a cooking class or a family-run place for kinilaw and grilled fish, according to your trip.
- **Space to do nothing.** Some of the best days are the ones with no plan at all. We leave them in on purpose.

## Personal does not mean complicated

A personalised trip is often simpler than a standard one: fewer islands, longer stays and less time in transit. We take care of the logistics, the flights, ferries, transfers and boats, so the days are yours.

## Travelling with specific needs

Tell us about dietary needs, mobility, young children or older parents. We choose hotels, boats and routes that work for everyone, and we tell you honestly when a place is not suitable.

## How to start

Tell us what would make this trip unforgettable for you, in a few lines, on the trip form, on WhatsApp or on a free video call. We will design the rest around it.`;

const spanishHeritageBody = `For travellers from Spain and Latin America, the Philippines holds a surprise. More than three centuries of Spanish rule, from the 1560s to 1898, left churches, forts, street names, family names and hundreds of words in the local languages. You hear "mesa", "cuchara", "pantalón" and "kumusta" in daily life, and you count money in pesos.

## Manila: Intramuros

The old walled city of Manila was the centre of Spanish rule in Asia. Walk the walls early in the morning, visit San Agustin Church, the oldest stone church in the Philippines and part of a UNESCO World Heritage site, and stop at Fort Santiago at the mouth of the Pasig River. Binondo, next door, is the oldest Chinatown in the world, founded in the Spanish era.

## Vigan

In the north of Luzon, Vigan is the best-preserved Spanish colonial town in Asia and a UNESCO World Heritage site. Calle Crisologo, with its cobblestones, stone houses with capiz-shell windows and horse-drawn calesas, feels like another century, especially in the evening.

## The baroque churches

Four Spanish-era churches in the Philippines are listed together by UNESCO: San Agustin in Manila, Paoay in Ilocos Norte, Santa Maria in Ilocos Sur and Miagao in Iloilo. Paoay, with its huge buttresses built against earthquakes, is one of the most striking buildings in the country.

## Cebu and Bohol

Cebu is where Magellan arrived in 1521, and the Cross of Magellan and the Basilica del Santo Niño are still at the heart of the city. In Bohol, the old stone churches of Baclayon and Loboc sit in the countryside between the Chocolate Hills and the river.

## Food with a Spanish accent

Adobo, lechón, leche flan, embutido, menudo, ensaimada and churros all have Spanish names, and most have taken a very Filipino turn. Trying them is one of the pleasures of the trip.

## How to include it in your trip

Two days in Manila for Intramuros and Binondo, two or three in Vigan, and a day in Cebu or Bohol fit easily around the islands. We have Spanish-speaking guides available, so travellers from Spain and Latin America can hear the history in their own language.`;

const fromEuropeBody = `From Europe, the Philippines feels far away, and it is: there are no direct flights from most European cities, and the journey usually takes 15 to 20 hours door to door. With a little planning, the long journey becomes the easy part.

## Flights

- Most travellers fly via a hub in the Middle East or Asia, such as Doha, Dubai, Istanbul, Singapore or Hong Kong.
- Most international flights land in Manila. Some also land in Cebu, which is closer to Bohol, Siquijor and Siargao.
- Look at the arrival time before the price. Landing in the evening means a night near the airport, which is often the best plan anyway.

## The first night

Do not try to connect an international flight to a domestic flight on the same day. Delays are common, and a missed connection costs a day of your trip. Spend the first night in Manila or Cebu and take the first domestic flight the next morning. Morning flights are the most likely to leave on time.

## Jet lag

The Philippines is 6 to 7 hours ahead of Central Europe, depending on the season. Most travellers feel it for two or three days. Plan an easy first island, with a beach and nothing to do, and save the long boat days and early starts for later in the trip.

## Before you fly

- Check the entry rules for your passport. Most European nationalities can enter visa-free for a short stay, but rules change, so always check before booking.
- Register on eTravel, the official arrival form, within 72 hours before landing. It is free on the official site.
- Pack light: domestic flights often allow only 7 kg in the cabin, with checked bags paid separately.

## The best months from Europe

December to May is the dry season and the best time for most of the islands. It is also when Europe is coldest, which makes the Philippines a perfect winter escape. Book 3 to 4 months ahead, and earlier for Christmas, New Year and Easter.

## How we help

We plan the domestic part around your international flights, arrange a driver to meet you on arrival, and keep a buffer where the sea or the weather could change things. You just need to land.`;

const christmasBody = `The Philippines celebrates the longest Christmas season in the world. Carols start playing in September, the first of the "-ber" months, and the celebrations last until early January. If you visit in December, you will see a side of the country most travellers never expect.

## Parols and lights

The parol, a star-shaped lantern, is the symbol of Filipino Christmas. You will see them in every window, street and church, from simple paper stars to huge illuminated ones. In Pampanga, north of Manila, the city of San Fernando holds a famous Giant Lantern Festival in December.

## Simbang Gabi

From 16 to 24 December, many Filipinos attend a series of nine dawn masses called Simbang Gabi. Outside the churches, stalls sell bibingka, a rice cake cooked over charcoal, and puto bumbong, a purple sticky rice dessert. Even if you do not attend mass, going early for the food is a lovely way to see local life.

## Noche Buena

Christmas Eve is the big night. Families gather after midnight for Noche Buena, a feast with ham, queso de bola, lechón and spaghetti with a sweet sauce. New Year's Eve is just as lively, with fireworks, noise and twelve round fruits on the table for luck.

## Travelling at Christmas: what to know

- It is the busiest time of the year for domestic travel. Flights, ferries and the best small hotels sell out early, so book 4 to 6 months ahead.
- Prices are higher between about 20 December and 5 January.
- Many Filipinos travel home to their families, so airports and ports are crowded around 23 to 25 December and 30 December to 1 January. Avoid travel days on those dates if you can.

## Where to spend it

- **Manila** for the lights, the food and the dawn masses before flying to the islands.
- **Palawan** for a warm, beach Christmas with a private boat day.
- **Siargao** for a relaxed, barefoot New Year.
- **Bohol and Siquijor** for something calmer, away from the crowds.

## Our advice

Spend Christmas Eve in one place rather than travelling, and plan the long journeys before 20 December or after 2 January. We will build the trip around the dates that matter to you.`;

const slowTravelBody = `Not everyone wants to see five islands in ten days. More and more travellers, many of them over 55, ask for something different: fewer places, more comfort, no early starts and time to enjoy each day. The Philippines suits this way of travelling very well.

## Fewer islands, longer stays

We usually plan two or three islands for a two-week trip, with at least four nights in each. That means unpacking once or twice, not every other day, and having time to come back to the beach you liked.

## Comfort where it matters

- **Private transfers** at every airport and pier, with help with bags.
- **Hotels chosen for ease:** few stairs where possible, short walks to the beach, good beds and quiet rooms.
- **Boats chosen for the conditions:** calmer routes, shaded seats and a private boat if you prefer not to share.
- **No very early flights** unless there is no alternative, and rest after long travel days.

## Islands that suit a slower pace

- **Bohol:** easy beaches in Panglao and Anda, the Chocolate Hills, the tarsiers and a gentle river cruise.
- **Siquijor and Dumaguete:** a small island with a quiet coastal road, and a pleasant university town by the sea.
- **El Nido:** for the famous lagoons, seen from a private boat at your own pace.
- **Manila and Vigan:** for history and culture, with a guide and a car.

## Health and peace of mind

Every trip includes travel insurance with cancellation cover, and our team answers WhatsApp 24/7 during your trip. Tell us about any health needs, medication or mobility questions before you travel, and we will plan around them. Good hospitals are found in Manila, Cebu and the main regional cities. On small islands, care is more basic, which we take into account when choosing where you stay.

## When to go

January to April has the most comfortable weather for most of the country: dry, sunny and not yet at the peak heat of May.

## Our advice

Choose the pace first, then the places. Our Gentle Philippines journey is a good starting point, and we can slow it down further.`;

const s = (
  slug: string,
  group: Story["group"],
  series: string,
  readMinutes: number,
  title: Story["title"],
  description: Story["description"],
  photo: Story["photo"],
  body: string,
  related: Story["related"],
): Story => ({ slug, group, status: "published", series, author: AUTHOR, readMinutes, updated: UPDATED_MORE, title, description, photo, body: { en: body }, related });

const moreStories: Story[] = [
  s(
    "travel-agency-in-the-philippines",
    "planning",
    "Inside Planning",
    3,
    {
      en: "Why Book With a Local Travel Agency in the Philippines",
      fr: "Pourquoi réserver avec une agence de voyage locale aux Philippines",
      es: "Por qué reservar con una agencia de viajes local en Filipinas",
      ru: "Зачем бронировать поездку через местное турагентство на Филиппинах",
      ar: "لماذا تحجز مع وكالة سفر محلية في الفلبين",
    },
    {
      en: "What a local travel and tour agency in the Philippines does for you, what to ask before you book, and how our team plans your trip.",
      fr: "Ce que fait pour vous une agence de voyage et de circuits basée aux Philippines, les questions à poser avant de réserver et comment notre équipe prépare votre voyage.",
      es: "Qué hace por ti una agencia de viajes y tours con sede en Filipinas, qué preguntar antes de reservar y cómo prepara tu viaje nuestro equipo.",
      ru: "Что делает для вас турагентство, работающее на Филиппинах, что спросить перед бронированием и как наша команда планирует поездку.",
      ar: "ما الذي تقدمه لك وكالة سفر مقرها الفلبين، وما الذي تسأله قبل الحجز، وكيف يخطط فريقنا لرحلتك.",
    },
    { alt: { en: "Traditional bangka on calm blue water in the Philippines" }, brief: "", tone: "lagoon" },
    travelAgencyBody,
    { destinations: ["palawan", "siargao", "bohol"], journeys: ["island-classics", "ten-days-two-islands"] },
  ),
  s(
    "philippines-tours",
    "planning",
    "Inside Planning",
    3,
    {
      en: "Philippines Tours: How to Choose the Right One",
      fr: "Circuits aux Philippines : comment choisir le bon",
      es: "Tours por Filipinas: cómo elegir el adecuado",
      ru: "Туры по Филиппинам: как выбрать подходящий",
      ar: "جولات في الفلبين: كيف تختار الجولة المناسبة",
    },
    {
      en: "Day tours, group tours or a private journey? How many islands, for how long, and what a good Philippines tour should include.",
      fr: "Excursions, circuits en groupe ou voyage privé ? Combien d'îles, pour combien de temps, et ce qu'un bon circuit aux Philippines doit inclure.",
      es: "¿Excursiones, tours en grupo o un viaje privado? Cuántas islas, durante cuánto tiempo y qué debe incluir un buen tour por Filipinas.",
      ru: "Экскурсии, групповые туры или индивидуальное путешествие? Сколько островов, на какой срок и что должно входить в хороший тур по Филиппинам.",
      ar: "جولات يومية أم جماعية أم رحلة خاصة؟ كم جزيرة ولأي مدة، وما الذي يجب أن تشمله جولة جيدة في الفلبين.",
    },
    { alt: { en: "Island-hopping boats in the Philippines" }, brief: "", tone: "lagoon" },
    toursBody,
    { destinations: ["el-nido", "coron", "bohol", "siargao"], journeys: ["island-classics", "palawan-bohol-boracay", "the-grand-philippines"] },
  ),
  s(
    "private-custom-trips-philippines",
    "travel-styles",
    "Inside Private Travel",
    3,
    {
      en: "Private, Custom-Made Trips in the Philippines: How They Work",
      fr: "Voyages privés et sur mesure aux Philippines : comment ça marche",
      es: "Viajes privados y a medida en Filipinas: cómo funcionan",
      ru: "Индивидуальные путешествия по Филиппинам: как это работает",
      ar: "رحلات خاصة ومصممة حسب الطلب في الفلبين: كيف تعمل",
    },
    {
      en: "Private transfers, private boats, your own dates and a route built around you: what a tailor-made Philippines trip includes and how we plan it.",
      fr: "Transferts privés, bateaux privés, vos propres dates et un itinéraire construit pour vous : ce que comprend un voyage sur mesure aux Philippines et comment nous le préparons.",
      es: "Traslados privados, barcos privados, tus propias fechas y una ruta pensada para ti: qué incluye un viaje a medida por Filipinas y cómo lo preparamos.",
      ru: "Индивидуальные трансферы и лодки, ваши даты и маршрут, построенный вокруг вас: что входит в индивидуальную поездку на Филиппины и как мы её планируем.",
      ar: "تنقلات خاصة وقوارب خاصة وتواريخك أنت ومسار مبني حولك: ما الذي تشمله رحلة مصممة حسب الطلب في الفلبين وكيف نخطط لها.",
    },
    { alt: { en: "Bangkas moored below limestone rocks in Coron, Palawan" }, brief: "", tone: "lagoon" },
    privateTripsBody,
    { destinations: ["el-nido", "coron", "siargao"], journeys: ["luxury-palawan", "exclusive-philippines", "honeymoon-inside-philippines"] },
  ),
  s(
    "personalized-trip-philippines",
    "travel-styles",
    "Inside Private Travel",
    3,
    {
      en: "Make Your Philippines Trip Unique: The Personal Touches We Love",
      fr: "Rendez votre voyage aux Philippines unique : les attentions personnelles que nous aimons",
      es: "Haz que tu viaje a Filipinas sea único: los detalles personales que nos encantan",
      ru: "Сделайте поездку на Филиппины особенной: личные детали, которые мы любим",
      ar: "اجعل رحلتك إلى الفلبين فريدة: اللمسات الشخصية التي نحبها",
    },
    {
      en: "Celebrations, private dinners, the right guide and the right timing: how we make a Philippines trip feel like it was designed only for you.",
      fr: "Célébrations, dîners privés, le bon guide et le bon moment : comment nous faisons d'un voyage aux Philippines un voyage pensé uniquement pour vous.",
      es: "Celebraciones, cenas privadas, el guía adecuado y el momento justo: cómo hacemos que un viaje a Filipinas parezca diseñado solo para ti.",
      ru: "Праздники, частные ужины, подходящий гид и правильное время: как мы делаем поездку на Филиппины созданной только для вас.",
      ar: "احتفالات وعشاء خاص والمرشد المناسب والتوقيت المناسب: كيف نجعل رحلتك إلى الفلبين وكأنها صُممت لك وحدك.",
    },
    { alt: { en: "Couple watching a sunset over the sea in the Philippines" }, brief: "", tone: "dusk" },
    personalizedBody,
    { destinations: ["siquijor", "el-nido", "bohol"], journeys: ["honeymoon-inside-philippines", "the-slow-philippines"] },
  ),
  s(
    "spanish-heritage-in-the-philippines",
    "culture",
    "Inside Culture",
    4,
    {
      en: "Spanish Heritage in the Philippines: Where to See It",
      fr: "L'héritage espagnol aux Philippines : où le découvrir",
      es: "La herencia española en Filipinas: dónde descubrirla",
      ru: "Испанское наследие на Филиппинах: где его увидеть",
      ar: "التراث الإسباني في الفلبين: أين تراه",
    },
    {
      en: "Intramuros, Vigan, baroque churches and Spanish words in everyday life: where to find three centuries of shared history on your trip.",
      fr: "Intramuros, Vigan, églises baroques et mots espagnols du quotidien : où retrouver trois siècles d'histoire commune pendant votre voyage.",
      es: "Intramuros, Vigan, iglesias barrocas y palabras españolas en el día a día: dónde encontrar tres siglos de historia compartida en tu viaje.",
      ru: "Интрамурос, Виган, барочные церкви и испанские слова в повседневной речи: где увидеть три века общей истории.",
      ar: "إنتراموروس وفيغان والكنائس الباروكية والكلمات الإسبانية في الحياة اليومية: أين تجد ثلاثة قرون من التاريخ المشترك في رحلتك.",
    },
    { alt: { en: "Stone facade of San Agustin Church in Intramuros, Manila" }, brief: "", tone: "stone" },
    spanishHeritageBody,
    { destinations: ["manila", "cebu", "bohol"], journeys: ["luzon-adventure", "cebu-islands-and-culture"] },
  ),
  s(
    "travelling-to-the-philippines-from-europe",
    "practical",
    "Inside Planning",
    3,
    {
      en: "Travelling to the Philippines From Europe: Flights, Jet Lag and the First Night",
      fr: "Aller aux Philippines depuis l'Europe : vols, décalage horaire et première nuit",
      es: "Viajar a Filipinas desde Europa: vuelos, jet lag y la primera noche",
      ru: "Как добраться на Филиппины из Европы: перелёты, джетлаг и первая ночь",
      ar: "السفر إلى الفلبين من أوروبا: الرحلات وفارق التوقيت والليلة الأولى",
    },
    {
      en: "How long the journey takes, where to connect, why to spend the first night near the airport and how to beat jet lag on a trip from Europe.",
      fr: "Durée du trajet, escales, pourquoi passer la première nuit près de l'aéroport et comment gérer le décalage horaire depuis l'Europe.",
      es: "Cuánto dura el viaje, dónde hacer escala, por qué pasar la primera noche cerca del aeropuerto y cómo combatir el jet lag desde Europa.",
      ru: "Сколько длится дорога, где делать пересадку, почему первую ночь лучше провести у аэропорта и как справиться с джетлагом.",
      ar: "كم تستغرق الرحلة، وأين تتوقف، ولماذا تقضي الليلة الأولى قرب المطار، وكيف تتغلب على فارق التوقيت عند السفر من أوروبا.",
    },
    { alt: { en: "Green outrigger bangka near a tropical island in the Philippines" }, brief: "", tone: "lagoon" },
    fromEuropeBody,
    { destinations: ["manila", "cebu", "bohol"], journeys: ["island-classics", "ten-days-two-islands"] },
  ),
  s(
    "christmas-and-new-year-in-the-philippines",
    "culture",
    "Inside Culture",
    3,
    {
      en: "Christmas and New Year in the Philippines",
      fr: "Noël et le Nouvel An aux Philippines",
      es: "Navidad y Año Nuevo en Filipinas",
      ru: "Рождество и Новый год на Филиппинах",
      ar: "عيد الميلاد ورأس السنة في الفلبين",
    },
    {
      en: "The world's longest Christmas season: parols, dawn masses, Noche Buena and where to spend the holidays, plus how to book around the busiest dates.",
      fr: "La plus longue saison de Noël du monde : parols, messes de l'aube, Noche Buena, où passer les fêtes et comment réserver autour des dates les plus chargées.",
      es: "La temporada navideña más larga del mundo: parols, misas del alba, Nochebuena, dónde pasar las fiestas y cómo reservar en las fechas más concurridas.",
      ru: "Самый долгий рождественский сезон в мире: фонари-паролы, рассветные мессы, Noche Buena, где провести праздники и как бронировать в самые загруженные даты.",
      ar: "أطول موسم لعيد الميلاد في العالم: فوانيس البارول، وقداسات الفجر، وليلة نوتشي بوينا، وأين تقضي العطلة، وكيف تحجز في أكثر التواريخ ازدحامًا.",
    },
    { alt: { en: "Wooden boat on still water at a purple sunset, El Nido" }, brief: "", tone: "dusk" },
    christmasBody,
    { destinations: ["manila", "el-nido", "siargao", "bohol"], journeys: ["island-classics", "the-gentle-philippines"] },
  ),
  s(
    "slow-travel-philippines",
    "travel-styles",
    "Inside Slow Travel",
    3,
    {
      en: "Slow Travel in the Philippines: A Gentler Way to See the Islands",
      fr: "Voyager lentement aux Philippines : une façon plus douce de découvrir les îles",
      es: "Viajar sin prisa por Filipinas: una forma más tranquila de conocer las islas",
      ru: "Неспешное путешествие по Филиппинам: спокойный способ увидеть острова",
      ar: "السفر الهادئ في الفلبين: طريقة ألطف لاكتشاف الجزر",
    },
    {
      en: "Fewer islands, longer stays, private transfers and comfortable hotels: how we plan relaxed Philippines trips for travellers who prefer an easy pace.",
      fr: "Moins d'îles, des séjours plus longs, des transferts privés et des hôtels confortables : comment nous préparons des voyages tranquilles pour ceux qui préfèrent un rythme doux.",
      es: "Menos islas, estancias más largas, traslados privados y hoteles cómodos: cómo preparamos viajes tranquilos para quienes prefieren un ritmo pausado.",
      ru: "Меньше островов, дольше на каждом, индивидуальные трансферы и удобные отели: как мы планируем спокойные поездки для тех, кто любит неспешный ритм.",
      ar: "جزر أقل وإقامات أطول وتنقلات خاصة وفنادق مريحة: كيف نخطط لرحلات هادئة في الفلبين لمن يفضلون إيقاعًا مريحًا.",
    },
    { alt: { en: "Woman sitting by the sea at sunset" }, brief: "", tone: "sand" },
    slowTravelBody,
    { destinations: ["bohol", "siquijor", "dumaguete", "el-nido"], journeys: ["the-gentle-philippines", "the-slow-philippines", "bohol-beach-escape"] },
  ),
];

export const stories: Story[] = [
  ...moreStories,
  {
    slug: "ten-islands-worth-building-a-philippines-trip-around",
    group: "islands",
    status: "published",
    series: "Inside the Islands",
    author: AUTHOR,
    readMinutes: 4,
    updated: UPDATED,
    title: {
      en: "10 Islands Worth Building a Philippines Trip Around",
      fr: "10 îles des Philippines qui valent à elles seules le voyage",
      es: "10 islas de Filipinas que justifican todo un viaje",
      ru: "10 островов Филиппин, ради которых стоит строить весь маршрут",
      ar: "10 جزر في الفلبين تستحق أن تُبنى حولها رحلتك",
    },
    description: {
      en: "The ten islands good enough to anchor a whole trip, how many nights each needs, the best months and what to pair them with.",
      fr: "Les dix îles qui méritent qu'on construise tout un voyage autour d'elles : nombre de nuits, meilleure saison et avec quoi les combiner.",
      es: "Las diez islas que merecen ser el eje de tu viaje: cuántas noches necesita cada una, la mejor época y con qué combinarlas.",
      ru: "Десять островов, вокруг которых можно выстроить целое путешествие: сколько ночей на каждый, лучший сезон и с чем их сочетать.",
      ar: "عشر جزر تكفي كل منها لتكون محور رحلة كاملة: كم ليلة تحتاج، وأفضل موسم، وما الذي يناسب أن تجمعه معها.",
    },
    photo: {
      alt: { en: "Bangka moored off a small island with a white-sand spit" },
      brief: "A single bangka anchored off a small island with a curving white-sand spit, late-morning light, aerial at a low angle. Feels like an anchor point.",
      tone: "lagoon",
    },
    body: { en: tenIslandsBody },
    related: {
      destinations: ["el-nido", "coron", "siargao", "bohol", "siquijor", "cebu", "camiguin", "batanes", "dumaguete", "boracay"],
      journeys: ["island-classics", "the-grand-philippines", "the-slow-philippines"],
    },
  },
  {
    slug: "siargao-beyond-surfing",
    group: "islands",
    status: "published",
    series: "Inside Siargao",
    author: AUTHOR,
    readMinutes: 4,
    updated: UPDATED,
    title: {
      en: "Siargao Beyond Surfing",
      fr: "Siargao au-delà du surf",
      es: "Siargao más allá del surf",
      ru: "Сиаргао: не только сёрфинг",
      ar: "سيارغاو أبعد من ركوب الأمواج",
    },
    description: {
      en: "Rock pools, mangroves, island-hopping, the road north and the food: the Siargao we love when the boards are back on the rack.",
      fr: "Piscines naturelles, mangroves, balades d'île en île, la route du nord et la table : le Siargao que nous aimons quand les planches sont rangées.",
      es: "Piscinas naturales, manglares, excursiones entre islas, la carretera del norte y la comida: el Siargao que nos gusta cuando las tablas descansan.",
      ru: "Каменные бассейны, мангровые заросли, прогулки по островам, дорога на север и еда: Сиаргао, который мы любим, когда доски отдыхают.",
      ar: "برك صخرية وغابات مانغروف وجولات بين الجزر والطريق شمالاً والطعام: سيارغاو التي نحبها حين تستريح الألواح.",
    },
    photo: {
      alt: { en: "Swimmers in a natural rock pool at low tide on Siargao's coast" },
      brief: "Magpupungko at low tide: a turquoise rock pool framed by dark rock, a swimmer mid-jump, ocean beyond. No surfboards in frame.",
      tone: "reef",
    },
    body: { en: siargaoBeyondSurfingBody },
    related: {
      destinations: ["siargao", "camiguin", "bohol"],
      journeys: ["surf-and-islands", "the-slow-philippines"],
    },
  },
  {
    slug: "el-nido-vs-coron",
    group: "islands",
    status: "published",
    series: "Inside Palawan",
    author: AUTHOR,
    readMinutes: 4,
    updated: UPDATED,
    title: {
      en: "El Nido vs Coron: Which Should You Choose?",
      fr: "El Nido ou Coron : lequel choisir ?",
      es: "El Nido o Coron: ¿cuál elegir?",
      ru: "Эль-Нидо или Корон: что выбрать?",
      ar: "إل نيدو أم كورون: أيهما تختار؟",
    },
    description: {
      en: "Lagoons or wrecks, polish or rough edges: an honest comparison of Palawan's two great limestone islands, and how to do both.",
      fr: "Lagons ou épaves, confort ou caractère brut : une comparaison honnête des deux grandes îles calcaires de Palawan, et comment voir les deux.",
      es: "Lagunas o pecios, comodidad o aventura: una comparación sincera de las dos grandes islas de roca caliza de Palawan, y cómo visitar ambas.",
      ru: "Лагуны или затонувшие корабли, комфорт или дикость: честное сравнение двух главных известняковых островов Палавана — и как успеть оба.",
      ar: "بحيرات أم حطام سفن، راحة أم طبيعة أكثر وعورة: مقارنة صادقة بين أشهر جزيرتين كلسيتين في بالاوان، وكيف تزور الاثنتين.",
    },
    photo: {
      alt: { en: "Kayaks in a limestone lagoon beside a viewpoint over a turquoise lake" },
      brief: "Diptych: left, kayaks entering El Nido's Small Lagoon at 7am; right, Kayangan Lake from the viewpoint. Same light, same palette.",
      tone: "lagoon",
    },
    body: { en: elNidoVsCoronBody },
    related: {
      destinations: ["el-nido", "coron", "palawan"],
      journeys: ["palawan-deep-dive", "island-classics", "ten-days-two-islands"],
    },
  },
  {
    slug: "perfect-14-day-philippines-itinerary",
    group: "planning",
    status: "published",
    series: "Inside the Islands",
    author: AUTHOR,
    readMinutes: 4,
    updated: UPDATED,
    title: {
      en: "The Perfect 14-Day Philippines Itinerary",
      fr: "Le circuit idéal de 14 jours aux Philippines",
      es: "El itinerario perfecto de 14 días por Filipinas",
      ru: "Идеальный маршрут по Филиппинам на 14 дней",
      ar: "برنامج مثالي للفلبين في 14 يوماً",
    },
    description: {
      en: "Two weeks, three islands, real connections: the route we suggest most often for a first trip, day by day.",
      fr: "Deux semaines, trois îles, de vraies correspondances : l'itinéraire que nous proposons le plus souvent pour un premier voyage, jour par jour.",
      es: "Dos semanas, tres islas y conexiones reales: la ruta que más recomendamos para un primer viaje, día a día.",
      ru: "Две недели, три острова, реальные стыковки: маршрут, который мы чаще всего советуем для первой поездки, по дням.",
      ar: "أسبوعان وثلاث جزر ورحلات ربط حقيقية: المسار الذي نقترحه غالباً للرحلة الأولى، يوماً بيوم.",
    },
    photo: {
      alt: { en: "Close-up of a map of the Philippines" },
      brief: "Notebook page with a hand-drawn route Manila – El Nido – Coron – Siargao, boarding pass and sunglasses beside it on a timber table.",
      tone: "sand",
    },
    body: { en: "Two weeks is the length of trip we plan most often for travellers coming from Europe, and it is the minimum we recommend for a first visit. It is enough time to see three very different islands without spending half your holiday in airports. Any more islands than that, and you will remember the transfers better than the beaches.\n\nHere is the route we suggest most often, day by day, with the reasoning behind it.\n\n## Days 1 and 2: Manila, then straight to Coron\n\nMost long-haul flights from Europe land in Manila in the morning or late at night. We do not try to connect onwards the same day. A delayed international flight is common, and a missed domestic connection can cost you a full day. Spend your first night near the airport or in Makati, sleep off the journey, and fly to Busuanga (the airport for Coron) on day 2.\n\nIf you land early and feel good, a few hours in Intramuros is the gentlest introduction to the country.\n\n## Days 2 to 5: Coron\n\nThree nights in Coron gives you two full days on the water. One day for the classic sites, Kayangan Lake, Twin Lagoon and Barracuda Lake, ideally on a private boat that leaves before the shared tours. One day for something wilder: the Skeleton Wreck and a reef for snorkellers, or two wreck dives if you are certified.\n\nKeep the evenings simple. Coron town is not the reason you came.\n\n## Days 5 to 9: El Nido\n\nIn the dry season, the fast ferry from Coron to El Nido takes around four hours and is one of the most beautiful journeys in the country. In the wet season, or when the sea is rough, you fly back through Manila instead.\n\nFour nights in El Nido is the right amount. It means you can wait out a windy day without missing anything. Take a private boat for the lagoons and leave early, spend one day at Nacpan Beach, and keep one day completely free. Stay outside town if you can: a quieter beach or an island makes a huge difference to how El Nido feels.\n\n## Days 9 to 13: Siargao or Bohol\n\nThis is where the trip changes character. After the limestone and lagoons of Palawan, we send most people to one of two places.\n\nSiargao, for surf lessons, palm forests, rock pools at low tide and the most relaxed island atmosphere in the Philippines. It suits couples, friends and anyone who wants to slow right down. It is best from March to October.\n\nBohol, for families and anyone who prefers gentle days: the Chocolate Hills, the tarsiers, the Loboc River and calm beaches on Panglao or in Anda, plus a day trip to see the sardine run and turtles around Balicasag.\n\nBoth usually connect through Manila or Cebu. Allow most of a day for the journey.\n\n## Day 14: back to Manila\n\nWe always bring travellers back to Manila the day before their international flight. Domestic flights are delayed often enough that a same-day connection is a risk we do not like to take. Use the evening for a last dinner in the city.\n\n## How to adapt it\n\n- Short on time: drop the third island and give Palawan the whole two weeks, with a night in Port Barton between Puerto Princesa and El Nido.\n- In the wet season (roughly June to October): swap Palawan for Bohol and Siquijor, which are more sheltered, and keep plenty of flexibility.\n- For a honeymoon: replace one of the Palawan stops with a few nights on a private island.\n- For more culture: add two nights in the rice terraces of Banaue and Batad at the start.\n\n## Our advice\n\nResist the temptation to add a fourth island. Every extra stop costs you most of a day. The best trips we plan have fewer places and more time in each of them, and that is what this route is built around." },
    related: {
      destinations: ["manila", "coron", "el-nido", "siargao", "bohol"],
      journeys: ["island-classics", "the-grand-philippines", "surf-and-islands"],
    },
  },
  {
    slug: "philippines-in-january",
    group: "planning",
    status: "published",
    series: "Inside the Seasons",
    author: AUTHOR,
    readMinutes: 3,
    updated: UPDATED,
    title: {
      en: "The Philippines in January",
      fr: "Les Philippines en janvier",
      es: "Filipinas en enero",
      ru: "Филиппины в январе",
      ar: "الفلبين في يناير",
    },
    description: {
      en: "Dry skies in the west, festivals in Cebu and Kalibo, rough seas in the east: where to go in January and how to beat the crowds.",
      fr: "Ciel sec à l'ouest, fêtes à Cebu et Kalibo, mer agitée à l'est : où aller en janvier et comment éviter la foule.",
      es: "Cielos secos en el oeste, fiestas en Cebú y Kalibo, mar agitado en el este: adónde ir en enero y cómo evitar las multitudes.",
      ru: "Сухая погода на западе, фестивали в Себу и Калибо, волны на востоке: куда ехать в январе и как избежать толп.",
      ar: "سماء جافة في الغرب ومهرجانات في سيبو وكاليبو وبحر مضطرب في الشرق: إلى أين تذهب في يناير وكيف تتجنب الزحام.",
    },
    photo: {
      alt: { en: "Festival dancers in traditional costume on a street in Cebu" },
      brief: "Sinulog, Cebu: dancers mid-movement in bright costumes, confetti, crowd blurred. Colour and energy, faces not the focus.",
      tone: "dusk",
    },
    body: { en: "January is one of the best months of the year to visit the Philippines, as long as you know where to go. The northeast monsoon, the amihan, brings cooler air and dry skies to most of the west of the country. It also brings wind, swell and rain to the east coast. Choosing the right side of the archipelago makes all the difference.\n\n## The weather\n\nAcross most of the country, January is dry, warm and comfortable, with daytime temperatures of around 28 to 30°C and cooler nights. It is the coolest month in Manila and the mountains, and the humidity is lower than at any other time of year.\n\nThe exceptions are the islands facing the Pacific. Siargao, eastern Samar and the east coast of Luzon often get heavy showers and rough seas in January. Batanes, far to the north, is cool and windy, with sea crossings frequently cancelled.\n\n## Where to go\n\n- Palawan: El Nido, Coron and Port Barton are at their best, with calm seas and clear skies. It is high season, so book early.\n- Boracay: the wind blows from the northeast, so White Beach on the west side is sheltered and calm. Bulabog Beach on the other side is perfect for kitesurfing.\n- Bohol and Siquijor: dry, gentle and much quieter than Palawan.\n- Cebu: whale sharks, sardines and turtles around Moalboal, and the island is easy to combine with Bohol.\n- Banaue and Sagada: cool and clear, the most comfortable month for walking the rice terraces, although the fields are not at their greenest.\n\n## Where to avoid, or plan carefully\n\n- Siargao: it is still lovely, but expect rain on some days and a choppy sea. Surfers will find waves, beginners less so. From March, it is a different island.\n- Batanes: wait until March to May.\n\n## The festivals\n\nJanuary is festival month in the Visayas, and they are spectacular.\n\n- Sinulog, in Cebu City, on the third Sunday of January: a huge street parade of dancers in bright costumes honouring the Santo Niño, with music and celebrations all weekend.\n- Ati-Atihan, in Kalibo, Aklan, in the same week: one of the oldest festivals in the country, with painted faces, drums and dancing in the streets. Kalibo is the gateway to Boracay, so the two combine easily.\n- Dinagyang, in Iloilo City, usually on the fourth weekend of January: tribal dance competitions and drumming.\n\nFestival weekends fill hotels and flights in those cities months ahead. If you want to see one, tell us early.\n\n## Crowds and prices\n\nJanuary is high season. The first week, after New Year, is very busy and expensive, especially in El Nido and Boracay. From the second week, things quieten down noticeably. Chinese New Year, which falls in late January or February, brings another busy period.\n\nOur tips:\n\n- Book the most popular hotels and island boats three to six months ahead.\n- Travel from the second week of January for lower prices and fewer people.\n- Take private boats and start early to avoid the crowds at the famous lagoons.\n\n## A two-week January route\n\nManila, then four nights in El Nido, three in Coron, a night in Cebu for Sinulog weekend, then four nights in Bohol or Siquijor, and back to Manila. Dry skies all the way, and a festival in the middle." },
    related: {
      destinations: ["el-nido", "coron", "boracay", "cebu", "bohol"],
      journeys: ["island-classics", "cebu-islands-and-culture", "palawan-deep-dive"],
    },
  },
  {
    slug: "philippines-in-february",
    group: "planning",
    status: "published",
    series: "Inside the Seasons",
    author: AUTHOR,
    readMinutes: 3,
    updated: UPDATED,
    title: {
      en: "The Philippines in February",
      fr: "Les Philippines en février",
      es: "Filipinas en febrero",
      ru: "Филиппины в феврале",
      ar: "الفلبين في فبراير",
    },
    description: {
      en: "Probably the most reliable month for a first trip: where the weather is best, what to book early and where to go as a couple.",
      fr: "Sans doute le mois le plus sûr pour un premier voyage : où la météo est la meilleure, quoi réserver tôt et où partir à deux.",
      es: "Probablemente el mes más fiable para un primer viaje: dónde hace mejor tiempo, qué reservar con antelación y adónde ir en pareja.",
      ru: "Пожалуй, самый надёжный месяц для первой поездки: где лучшая погода, что бронировать заранее и куда поехать вдвоём.",
      ar: "ربما أكثر الأشهر موثوقية للرحلة الأولى: أين يكون الطقس في أفضل حالاته، وما الذي يجب حجزه مبكراً، وإلى أين تسافر مع شريكك.",
    },
    photo: {
      alt: { en: "Aerial view of tropical islands and clear turquoise water" },
      brief: "February clarity: wide beach, low sun, one bangka pulled up on the sand, long shadows. Calm and dependable.",
      tone: "sand",
    },
    body: { en: "If we had to pick one month for a first trip to the Philippines, it would be February. The weather is at its most reliable, the sea is calm on most coasts, and the crowds of the holidays and New Year have gone home.\n\n## The weather\n\nFebruary is one of the driest months across most of the country. Daytime temperatures are around 29 to 31°C, it is less humid than later in the year, and the heat of April and May has not yet arrived. The northeast winds start to ease, and seas on the west of the archipelago are generally calm.\n\nThe east coast still gets some showers. Siargao is improving through the month but can still be wet, and its best season starts in March.\n\n## Where to go\n\n- Palawan: El Nido, Coron and Port Barton in perfect conditions. The fast ferry between Coron and El Nido runs reliably.\n- Bohol, Panglao and Anda: dry and calm, ideal for families.\n- Siquijor: quiet, green and at its most relaxed.\n- Boracay: still the calm season on White Beach, and less crowded than in January.\n- Donsol, in Sorsogon: whale shark season is usually from about December to May, and February to April is often the best time for sightings in the wild. Sightings are never guaranteed.\n- Cebu: Moalboal for turtles and the sardine run, and Malapascua for thresher sharks at dawn.\n\n## Festivals and dates\n\n- Panagbenga, the flower festival in Baguio, runs throughout February, with parades of flower floats at the end of the month. Baguio is up in the mountains, so it combines well with the rice terraces of Banaue and Sagada.\n- Chinese New Year often falls in February. Binondo, Manila's Chinatown, celebrates with dragon dances, fireworks and food stalls. Expect flights and hotels to be busier around that week.\n- Valentine's Day is big in the Philippines. Restaurants and the most romantic hotels fill up, so book ahead if you are travelling as a couple.\n\n## What to book early\n\nFebruary is still high season, especially for travellers from Europe escaping the winter. We recommend booking:\n\n- Island resorts in El Nido and Coron, and private islands, three to six months ahead.\n- The fast ferry between Coron and El Nido once your dates are set.\n- Domestic flights, which rise in price as they fill.\n\n## February for couples\n\nFebruary is our favourite month for honeymoons and anniversaries. The weather is good almost everywhere, the light is soft and the sunsets are long. A classic route: three nights on a private island in northern Palawan, four nights in El Nido with a private boat, and four nights in Siquijor or on a quiet beach in Bohol to finish slowly.\n\n## Our advice\n\nFebruary rewards people who plan. If you book early, take private boats and leave early in the morning, you will see the Philippines at its very best, with almost nothing to worry about except which beach to choose." },
    related: {
      destinations: ["el-nido", "coron", "bohol", "siquijor", "malapascua"],
      journeys: ["honeymoon-inside-philippines", "island-classics", "whale-sharks-and-islands"],
    },
  },
  {
    slug: "best-boutique-hotels-in-palawan",
    group: "travel-styles",
    status: "published",
    series: "Inside Hotels",
    author: AUTHOR,
    readMinutes: 3,
    updated: UPDATED,
    title: {
      en: "Boutique Hotels in Palawan: Where to Stay",
      fr: "Hôtels de charme à Palawan : où séjourner",
      es: "Hoteles boutique en Palawan: dónde alojarse",
      ru: "Бутик-отели Палавана: где остановиться",
      ar: "فنادق البوتيك في بالاوان: أين تقيم",
    },
    description: {
      en: "The areas of El Nido, Coron and Port Barton worth staying in, what we look for in a small hotel, and what we check before we recommend one.",
      fr: "Les quartiers d'El Nido, de Coron et de Port Barton où séjourner, ce que nous attendons d'un petit hôtel et ce que nous vérifions avant de le recommander.",
      es: "Las zonas de El Nido, Coron y Port Barton donde alojarse, lo que buscamos en un hotel pequeño y lo que comprobamos antes de recomendarlo.",
      ru: "Районы Эль-Нидо, Корона и Порт-Бартона, где стоит жить, что мы ищем в небольшом отеле и что проверяем, прежде чем его рекомендовать.",
      ar: "أفضل مناطق الإقامة في إل نيدو وكورون وبورت بارتون، وما نبحث عنه في الفندق الصغير، وما نتحقق منه قبل أن نوصي به.",
    },
    photo: {
      alt: { en: "Small huts on a tropical island with rocky cliffs" },
      brief: "Generic boutique interior, no identifiable property: timber floor, linen bed, thatched roof, doors open to garden and sea.",
      tone: "jungle",
    },
    body: { en: "Palawan has some of the best small hotels in Asia, and some that look wonderful online and disappoint in person. We only recommend a place by name once our team has stayed there or inspected it recently, and we update our list after every season. So rather than a list that ages quickly, this is how we choose, and where to look.\n\nWhen you plan a trip with us, we send you our current shortlist for your dates and budget.\n\n## What we mean by boutique\n\nFor us, a boutique hotel in Palawan is small, usually fewer than 30 rooms. It has a strong sense of place, built with local materials such as timber, bamboo, nipa thatch and stone. It is run by people who know their guests by name, has excellent food, and is located somewhere you would want to be even without the hotel.\n\nIt does not have to be expensive. Some of our favourite places are simple cottages on a quiet beach. Some are among the most luxurious island resorts in the region.\n\n## Where to stay in El Nido\n\n- Town: convenient, lively and noisy. We rarely recommend it for more than one night.\n- Corong-Corong and Marimegmeg: just south of town, with sunset views over Bacuit Bay and easy access to the boats. The best balance for most people.\n- Lio and the north: a planned beach area close to the airport, calm and walkable, with good small hotels and restaurants.\n- Nacpan and Duli: wild, long beaches an hour north. For travellers who want space and quiet.\n- The islands of Bacuit Bay: private island resorts where the lagoons are on your doorstep. The ultimate El Nido stay, and the most expensive.\n\n## Where to stay in Coron\n\n- Coron town: practical rather than beautiful, but close to the boats.\n- The west and north of Busuanga: quieter beach and hillside hotels, further from the main sites.\n- Private islands: the best option for a special trip, with the reefs and wrecks close by.\n\n## Port Barton and San Vicente\n\nPort Barton is a small, slow fishing village with simple, charming guesthouses and islands just offshore. San Vicente, with its 14 km Long Beach, is quieter still. Both are perfect for two or three nights between Puerto Princesa and El Nido.\n\n## What we check before recommending a hotel\n\n- The room you will actually get, not just the best one in the photos.\n- Noise: generators, karaoke and nearby bars.\n- Power and water: backup generators, water pressure and hot water.\n- Internet, if you need to work.\n- Food: the quality, the variety, and how well they handle vegetarian, vegan and allergy needs.\n- The beach in front at low tide, and in the wind of each season.\n- Transfers: how long it really takes to reach the airport and the boats.\n- How the team responds when something goes wrong.\n\n## Our advice\n\nMix two styles in one trip: a few nights in a beautifully located island resort, and a few nights in a smaller, simpler place with more character. And whatever you book, look at where it is before you look at the pool.\n\nAsk us for our current recommendations. We will only suggest places we know." },
    related: {
      destinations: ["el-nido", "coron", "palawan"],
      journeys: ["luxury-palawan", "palawan-deep-dive", "essential-palawan"],
    },
  },
  {
    slug: "best-restaurants-in-siargao",
    group: "culture",
    status: "published",
    series: "Inside Food",
    author: AUTHOR,
    readMinutes: 3,
    updated: UPDATED,
    title: {
      en: "Where and What to Eat in Siargao",
      fr: "Où et quoi manger à Siargao",
      es: "Dónde y qué comer en Siargao",
      ru: "Где и что есть на Сиаргао",
      ar: "أين وماذا تأكل في سيارغاو",
    },
    description: {
      en: "Kinilaw by the beach, grilled fish at a carinderia, the cafés of Tourism Road and plant-based menus: how to eat well on Siargao.",
      fr: "Kinilaw sur la plage, poisson grillé dans une carinderia, cafés de Tourism Road et menus végétaux : bien manger à Siargao.",
      es: "Kinilaw junto a la playa, pescado a la parrilla en una carinderia, los cafés de Tourism Road y menús vegetales: cómo comer bien en Siargao.",
      ru: "Кинилау у моря, рыба на гриле в местной столовой, кафе на Туризм-роуд и растительные меню: как вкусно есть на Сиаргао.",
      ar: "كينيلاو على الشاطئ، وسمك مشوي في مطعم شعبي، ومقاهي طريق السياحة، وقوائم نباتية: كيف تأكل جيداً في سيارغاو.",
    },
    photo: {
      alt: { en: "Grilled seafood on a wooden plate" },
      brief: "Close-up: kinilaw in a coconut-shell bowl, calamansi halves, chilli, sea out of focus behind. No signage or branding.",
      tone: "rice",
    },
    body: { en: "Siargao has become one of the best places to eat in the Philippines. In a few years, General Luna has gone from a handful of surfer canteens to a small town full of cafés, wood-fired kitchens, plant-based restaurants and beach grills. Restaurants open and close quickly here, so we only recommend a place by name once our team has eaten there recently. This guide tells you what to eat, where to find it and how to eat well on the island.\n\nWhen you travel with us, we send you our current favourites for your dates.\n\n## What to eat\n\n- Kinilaw: the Philippines' answer to ceviche. Raw fish, usually tuna or mackerel, cured in coconut vinegar with calamansi, ginger, onion and chilli. On Siargao it is often made with fish caught that morning.\n- Sinuglaw: kinilaw served with grilled pork belly. Fresh, smoky and very good with a cold drink.\n- Grilled seafood: squid, tuna jaw, prawns and whole fish, cooked over charcoal and eaten with rice and a dipping sauce of soy, vinegar, calamansi and chilli.\n- Lechon: whole roast pig, for celebrations and Sunday lunches.\n- Fresh coconut, mango, pineapple and banana, everywhere and all day.\n- Bowls and smoothie bowls: the surf breakfast of choice, with local fruit, granola and coconut.\n\n## Where to eat\n\n- Tourism Road, General Luna: the island's main strip, between the town and Cloud 9. This is where you will find most of the cafés, bakeries and dinner restaurants, from casual to quite refined.\n- Cloud 9: breakfast and coffee after the morning surf, with the boardwalk and the famous wave in front.\n- Catangnan and the bridge area: small kitchens and bars, popular at sunset.\n- General Luna town and the boulevard: local eateries (carinderias) with dishes of the day, and barbecue stalls in the evening. Cheap, simple and often delicious.\n- The north, around Pacifico and Burgos: fewer options, slower and more local, perfect on a road trip day.\n\n## Vegetarian and vegan\n\nSiargao is one of the easiest places in the Philippines for plant-based food. Many cafés in General Luna have entirely vegetarian or vegan menus, and most restaurants have several dishes without meat or fish. Outside General Luna, it is harder: ask for gulay (vegetables) and dishes with tofu, coconut milk or monggo (mung beans).\n\n## Practical tips\n\n- Many restaurants close one day a week, and some close for part of the wet season. Check before you go.\n- Card payments are increasingly accepted, but always carry cash for smaller places and for the north.\n- Popular dinner spots get full in high season: reserve for groups and on weekends.\n- Drink bottled or filtered water. Most cafés will refill your bottle.\n- Tipping is not expected but is appreciated. A service charge is sometimes added.\n\n## Our advice\n\nEat one meal a day where the locals eat. A plate of grilled fish and rice at a carinderia, or kinilaw from a beach stall, will tell you more about Siargao than any brunch menu. Then spend the evenings in General Luna, where the island's new food scene is one of the most exciting in the country." },
    related: {
      destinations: ["siargao"],
      journeys: ["surf-and-islands", "the-slow-philippines"],
    },
  },
  {
    slug: "most-beautiful-remote-islands-in-the-philippines",
    group: "islands",
    status: "published",
    series: "Hidden Philippines",
    author: AUTHOR,
    readMinutes: 3,
    updated: UPDATED,
    title: {
      en: "The Most Beautiful Remote Islands in the Philippines",
      fr: "Les plus belles îles isolées des Philippines",
      es: "Las islas remotas más bonitas de Filipinas",
      ru: "Самые красивые отдалённые острова Филиппин",
      ar: "أجمل الجزر النائية في الفلبين",
    },
    description: {
      en: "Batanes, Balabac, Camiguin and the far corners of the archipelago: islands that take effort to reach, and repay it.",
      fr: "Batanes, Balabac, Camiguin et les confins de l'archipel : des îles difficiles d'accès qui récompensent l'effort.",
      es: "Batanes, Balabac, Camiguin y los rincones más lejanos del archipiélago: islas a las que cuesta llegar y que compensan el esfuerzo.",
      ru: "Батанес, Балабак, Камигин и дальние уголки архипелага: острова, до которых непросто добраться, но которые того стоят.",
      ar: "باتانيس وبالاباك وكاميغين وأقاصي الأرخبيل: جزر يصعب الوصول إليها لكنها تستحق العناء.",
    },
    photo: {
      alt: { en: "Outrigger boats pulled up on a sandy beach in Palawan" },
      brief: "Batanes: rolling green headland, stone house, cliffs dropping to a deep-blue sea, clouds moving. Wide and windswept.",
      tone: "stone",
    },
    body: { en: "With more than 7,600 islands, the Philippines has plenty of places that few visitors ever reach. Some need a small plane, some a long boat ride, and some both. They are not for everyone, and they are not for a first trip. But for travellers who have seen the classics, these are the islands we love most.\n\n## Batanes\n\nThe northernmost province of the Philippines feels like nowhere else in the country: rolling green hills, cliffs dropping into a deep blue sea, stone houses built to resist typhoons, and cattle grazing on the headlands. It is closer to Taiwan than to Manila.\n\n- Getting there: flights from Manila to Basco, around an hour and a half, weather permitting.\n- Best time: March to May. The rest of the year brings strong winds, typhoons or rough seas.\n- How long: four nights, with a buffer day for weather.\n\n## Balabac\n\nAt the far southern tip of Palawan, Balabac is a group of islands with some of the whitest sandbars and clearest water in the country, and very little infrastructure. It is a true expedition, reached by a long road from Puerto Princesa and then by boat.\n\n- Best time: March to May, when the sea is calmest.\n- Good to know: accommodation is very simple. We check current travel advisories before every trip.\n\n## Linapacan\n\nBetween Coron and El Nido, the islands of Linapacan have some of the clearest water in Asia. There are almost no hotels. The best way to see it is on a multi-day expedition boat between Coron and El Nido, sleeping on deserted beaches or in simple island camps.\n\n## Camiguin\n\nThe island born of fire: seven volcanoes on an island you can drive around in a few hours, with hot and cold springs, waterfalls, a sunken cemetery and White Island, a sandbar facing Mount Hibok-Hibok. More accessible than the others, via Cagayan de Oro and a ferry.\n\n## Calaguas\n\nOff the coast of Camarines Norte, in southern Luzon, Calaguas is known for Mahabang Buhangin, a long beach of fine white sand with rolling green hills behind it. Most visitors come for a night or two of simple camping or very basic cottages. Go between March and May, when the sea is calm.\n\n## Apo Island\n\nA small volcanic island off Negros, about 30 minutes by boat from the coast south of Dumaguete. It is one of the oldest community-run marine sanctuaries in the Philippines, and the snorkelling with turtles in the shallows is extraordinary.\n\n## Cuyo\n\nA group of islands in the Sulu Sea, between Palawan and Panay, with old Spanish forts, quiet villages and empty beaches. It is one of the least visited corners of the country, and home to some of its most exclusive private island resorts.\n\n## How to plan a remote island trip\n\n- Add buffer days. Flights and boats to remote islands are often delayed or cancelled by weather.\n- Travel light. Small planes have strict baggage limits, and many arrivals are by beach landing.\n- Carry cash. Cards and ATMs are rare or non-existent.\n- Expect simple comforts, and do not expect reliable internet.\n- Combine one remote island with an easier one, so the trip has a rhythm.\n\n## Our advice\n\nRemote islands repay the effort, but only if you give them time. Tell us how adventurous you want to be, and we will tell you which one suits you, and when." },
    related: {
      destinations: ["batanes", "camiguin", "coron", "dumaguete"],
      journeys: ["linapacan-expedition", "exclusive-philippines", "bohol-and-camiguin"],
    },
  },
  {
    slug: "how-to-travel-between-philippine-islands",
    group: "islands",
    status: "published",
    series: "Inside the Islands",
    author: AUTHOR,
    readMinutes: 4,
    updated: UPDATED,
    title: {
      en: "How to Travel Between Philippine Islands",
      fr: "Voyager d'île en île aux Philippines",
      es: "Cómo viajar de isla en isla por Filipinas",
      ru: "Как путешествовать между островами Филиппин",
      ar: "كيف تسافر بين جزر الفلبين",
    },
    description: {
      en: "A story from the road: one week, four islands, two flights, a fast craft and a bangka, and what we learned about connecting the archipelago.",
      fr: "Récit de route : une semaine, quatre îles, deux vols, une navette rapide et une bangka, et ce que nous avons appris sur les liaisons de l'archipel.",
      es: "Crónica de viaje: una semana, cuatro islas, dos vuelos, un barco rápido y una bangka, y lo que aprendimos sobre cómo se conecta el archipiélago.",
      ru: "Дорожная история: неделя, четыре острова, два перелёта, скоростной катер и банка — и что мы узнали о том, как связан архипелаг.",
      ar: "حكاية من الطريق: أسبوع واحد وأربع جزر ورحلتان جويتان وقارب سريع وقارب بانكا، وما تعلمناه عن التنقل في الأرخبيل.",
    },
    photo: {
      alt: { en: "Boat at sea near a green island in the Philippines" },
      brief: "Arrival by bangka: two travellers stepping into shin-deep water holding bags overhead, crew helping, island beach ahead.",
      tone: "lagoon",
    },
    body: { en: "We tell travellers that in the Philippines, getting there is part of the trip. To test that, one of our team set off with a small bag for a week across the Visayas: four islands, two flights, two fast craft and a bangka. Here is how it went, and what it taught us about connecting the archipelago.\n\n## Day 1: Manila to Cebu\n\nThe day started at 4am, as many domestic travel days do. Morning flights are the most likely to leave on time, because delays build up through the day. The flight to Cebu took about an hour and a half. The longest part was the traffic to the airport in Manila.\n\nLesson one: always take the first flight of the day if you can, and never plan a tight connection between an international and a domestic flight.\n\n## Day 2: Cebu to Bohol by fast craft\n\nFrom Pier 1 in Cebu City, the fast craft to Tagbilaran in Bohol takes around two hours. You buy your ticket, pay a small terminal fee, check in your bag like at an airport, and choose between economy and a slightly more comfortable business class.\n\nLesson two: arrive at the port at least an hour early. In high season and around holidays, ferries sell out, so we always book ahead for our travellers.\n\n## Days 3 and 4: Bohol by land and by bangka\n\nIn Bohol, the best way to get around is with a private driver: the Chocolate Hills, the tarsiers and the Loboc River in a day. The next morning, a bangka, the traditional outrigger boat, took us to Balicasag Island to snorkel with turtles.\n\nLesson three: bangkas are wonderful, but they are not covered. Waterproof bags are essential, and so is flexibility, because boats do not go out when the sea is too rough.\n\n## Day 5: Bohol to Siquijor\n\nThe fast craft from Tagbilaran to Siquijor usually takes around two hours, sometimes with a stop in Dumaguete on the way. That day, the sea was choppy and the crossing took longer. The Philippine Coast Guard suspends sailings when the weather is bad, sometimes at short notice.\n\nLesson four: keep a free day in your schedule on any route that relies on the sea.\n\n## Days 6 and 7: Siquijor to Dumaguete, then home\n\nFrom Siquijor, ferries to Dumaguete, on Negros, take around an hour and leave several times a day. From Dumaguete, there are direct flights back to Manila. On the last day, the flight was delayed by an hour and a half, which is quite normal.\n\nLesson five: always spend your last night in Manila, or near your international departure airport, before the flight home.\n\n## What we learned\n\n- Flights are the fastest way to cross long distances, but most routes go through Manila or Cebu, so two islands that look close on the map may need a connection.\n- Domestic airlines have strict baggage limits, often 7 kg in the cabin, with checked bags paid separately. Pack light.\n- Fast craft and ferries are excellent in the Visayas, but are weather-dependent.\n- Bangkas are perfect for short hops and island-hopping, and they are part of the magic.\n- Private transfers between airports, ports and hotels save hours and a lot of stress.\n- A good rule: one travel day for every three or four days on islands.\n\n## How we plan it for you\n\nWhen we design your trip, we choose the order of the islands to minimise backtracking, book the first flights of the day, add buffer days for sea crossings and arrange a driver or boat at every arrival. You will still see the bangka and the fast craft, but you will not have to worry about them." },
    related: {
      destinations: ["cebu", "bohol", "siquijor", "dumaguete"],
      journeys: ["cebu-islands-and-culture", "the-gentle-philippines", "visayas-on-a-budget"],
    },
  },
  {
    slug: "where-to-honeymoon-in-the-philippines",
    group: "travel-styles",
    status: "published",
    series: "Inside Honeymoons",
    author: AUTHOR,
    readMinutes: 3,
    updated: UPDATED,
    title: {
      en: "Where to Honeymoon in the Philippines",
      fr: "Où partir en lune de miel aux Philippines",
      es: "Dónde pasar la luna de miel en Filipinas",
      ru: "Где провести медовый месяц на Филиппинах",
      ar: "أين تقضي شهر العسل في الفلبين",
    },
    description: {
      en: "Private lagoons, island villas and sunsets without a crowd: the places we send couples, and how to time the trip.",
      fr: "Lagons privés, villas sur les îles et couchers de soleil sans foule : les lieux où nous envoyons les jeunes mariés, et quand partir.",
      es: "Lagunas privadas, villas en islas y atardeceres sin multitudes: los lugares a los que enviamos a las parejas y cuándo ir.",
      ru: "Уединённые лагуны, виллы на островах и закаты без толп: куда мы отправляем молодожёнов и когда лучше ехать.",
      ar: "بحيرات خاصة وفلل على الجزر وغروب بلا زحام: الأماكن التي نرسل إليها العرسان، وأفضل توقيت للرحلة.",
    },
    photo: {
      alt: { en: "Couple watching a vibrant sunset over the sea with boats" },
      brief: "From behind: a couple seated on the bow of a private bangka at sunset, silhouetted islands. Unposed, no faces.",
      tone: "dusk",
    },
    body: { en: "The Philippines is one of the most romantic places in Asia for a honeymoon: lagoons you can have to yourselves at dawn, private island villas, long sunsets and a warmth of welcome you will remember for years. Here are the places we send couples most often, and how to time the trip.\n\n## Northern Palawan: El Nido and Coron\n\nFor most couples, this is the heart of the honeymoon. Limestone islands, turquoise lagoons and some of the most beautiful island resorts in the country.\n\n- What to do: a private boat to the lagoons at 7am, before anyone else; kayaking into the Secret Lagoon; a picnic on a deserted beach; sunset from the boat.\n- Where to stay: an island resort in Bacuit Bay, or a quiet beach outside El Nido town.\n- How long: four or five nights.\n\n## A private island\n\nThe Philippines has some of the most exclusive private island resorts in Asia, in Palawan and in the Cuyo islands. Villas on the beach, your own stretch of sand, and service to match. It is the most expensive part of any trip, and for many couples the most memorable. Two or three nights is enough to fall in love with it.\n\n## Siquijor\n\nFor couples who want something slower and more mysterious: an island of folk healers, waterfalls, quiet beaches and the best sunsets in the Visayas. Rent a scooter, drive the coastal road, swim at Cambugahay Falls early in the morning and watch the sun go down over the sea.\n\n## Siargao\n\nFor active couples: surf lessons together, palm forests, rock pools at low tide and island-hopping to Naked, Daku and Guyam. Siargao is relaxed and barefoot, with excellent food and a small-town feel. It is best from March to October.\n\n## Bohol\n\nGentle and easy, with beautiful beaches in Panglao and Anda, the Chocolate Hills, the tarsiers, a river cruise and some lovely boutique hotels. It is a good place to finish a trip slowly.\n\n## When to go\n\n- December to May is the dry season, and the best time for most of the country.\n- February and March are our favourite months: good weather almost everywhere and fewer crowds than at New Year.\n- April and May are the hottest months, with the calmest seas, perfect for private islands and remote beaches.\n- June to November is the wet season, with the risk of typhoons. A honeymoon is still possible, but we choose more sheltered islands and keep the plan flexible.\n\n## A two-week honeymoon route\n\nTwo nights in Manila or near the airport, three nights on a private island, four nights in El Nido with a private boat, then four nights in Siquijor or Siargao, and a final night in Manila before flying home.\n\n## The touches that make a difference\n\n- A private boat rather than shared tours.\n- A dinner on the beach, just the two of you.\n- A traditional hilot massage for two.\n- Villas with a view over the sea, not over the garden.\n- A local guide who shows you a side of the island most visitors never see.\n\n## Our advice\n\nDo fewer places, and stay longer in each. Three islands in two weeks is the maximum. Tell us what kind of couple you are, adventurous or lazy, food-lovers or beach-lovers, and we will design the honeymoon around you. See our honeymoon journey for a complete example." },
    related: {
      destinations: ["el-nido", "coron", "siquijor", "siargao", "bohol"],
      journeys: ["honeymoon-inside-philippines", "luxury-palawan", "exclusive-philippines"],
    },
  },
  {
    slug: "why-siquijor-should-be-on-your-itinerary",
    group: "islands",
    status: "published",
    series: "Inside Siquijor",
    author: AUTHOR,
    readMinutes: 4,
    updated: UPDATED,
    title: {
      en: "Why Siquijor Should Be on Your Itinerary",
      fr: "Pourquoi Siquijor doit figurer dans votre itinéraire",
      es: "Por qué Siquijor debe estar en tu itinerario",
      ru: "Почему Сикихор стоит включить в маршрут",
      ar: "لماذا يجب أن تكون سيكيهور في برنامج رحلتك",
    },
    description: {
      en: "Folk healers, waterfalls, a coastal road you can drive in a day and the best sunsets in the Visayas: the case for the Philippines' slowest island.",
      fr: "Guérisseurs, cascades, une route côtière qui se parcourt en une journée et les plus beaux couchers de soleil des Visayas : plaidoyer pour l'île la plus lente des Philippines.",
      es: "Curanderos, cascadas, una carretera costera que se recorre en un día y los mejores atardeceres de las Visayas: en defensa de la isla más tranquila de Filipinas.",
      ru: "Народные целители, водопады, прибрежная дорога, которую можно объехать за день, и лучшие закаты Висайских островов: в защиту самого неспешного острова Филиппин.",
      ar: "معالجون شعبيون وشلالات وطريق ساحلي تقطعه في يوم واحد وأجمل غروب في فيساياس: دفاعاً عن أهدأ جزر الفلبين.",
    },
    photo: {
      alt: { en: "Turquoise waterfall pools in the jungle at Cambugahay, Siquijor" },
      brief: "Cambugahay Falls at 7am: tiered turquoise pools, jungle, one swimmer on a rope swing, soft early light, nobody else.",
      tone: "jungle",
    },
    body: { en: siquijorBody },
    related: {
      destinations: ["siquijor", "dumaguete", "bohol", "negros"],
      journeys: ["the-slow-philippines", "honeymoon-inside-philippines"],
    },
  },
  {
    slug: "48-hours-in-manila",
    group: "culture",
    status: "published",
    series: "Inside Manila",
    author: AUTHOR,
    readMinutes: 4,
    updated: UPDATED,
    title: {
      en: "48 Hours in Manila",
      fr: "48 heures à Manille",
      es: "48 horas en Manila",
      ru: "48 часов в Маниле",
      ar: "48 ساعة في مانيلا",
    },
    description: {
      en: "Intramuros at 8am, Binondo on an empty stomach, sunset over Manila Bay: how to spend two good days in the capital most visitors skip.",
      fr: "Intramuros à 8 h, Binondo le ventre vide, coucher de soleil sur la baie : deux belles journées dans la capitale que la plupart des voyageurs zappent.",
      es: "Intramuros a las 8 de la mañana, Binondo con hambre y atardecer en la bahía: cómo aprovechar dos días en la capital que casi todos se saltan.",
      ru: "Интрамурос в 8 утра, Бинондо на голодный желудок, закат над Манильским заливом: как провести два отличных дня в столице, которую многие пропускают.",
      ar: "إنتراموروس في الثامنة صباحاً، وبينوندو على معدة فارغة، وغروب الشمس فوق خليج مانيلا: كيف تقضي يومين رائعين في العاصمة التي يتجاوزها معظم الزوار.",
    },
    photo: {
      alt: { en: "Stone facade of San Agustin Church in Intramuros in morning light" },
      brief: "San Agustin Church, Intramuros, early morning: weathered stone facade, a calesa passing, warm side light, street still quiet.",
      tone: "stone",
    },
    body: { en: manilaBody },
    insiders: [
      {
        type: "go-early",
        title: { en: "Intramuros before 9am" },
        body: { en: "The walls and churches are at their best in the soft early light, and you will be indoors at the museum when the midday heat arrives." },
      },
      {
        type: "local-favorite",
        title: { en: "Graze Binondo, do not sit down" },
        body: { en: "Skip a single big meal. Walk the streets and eat a little everywhere: hopia, dumplings, siopao, kiampong. Go hungry and bring small notes." },
      },
    ],
    related: {
      destinations: ["manila", "banaue", "sagada"],
      journeys: ["the-grand-philippines", "island-classics"],
    },
  },
];
