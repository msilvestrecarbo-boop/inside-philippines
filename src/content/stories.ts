import type { Story } from "./types";

/**
 * Stories: opinionated editorial pieces, as opposed to the practical guides
 * in ./guides.ts. Bodies are English-only markdown-lite ("## Heading",
 * paragraphs, "- " bullets). Titles and descriptions exist in all five
 * languages so planned stories can be listed as "in preparation".
 *
 * Integrity rule: no hotels, restaurants or operators are named until the
 * team has verified them. "Best Boutique Hotels in Palawan" and "Best
 * Restaurants in Siargao" therefore stay planned.
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

export const stories: Story[] = [
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
    status: "planned",
    series: "Inside the Islands",
    author: AUTHOR,
    readMinutes: 6,
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
      alt: { en: "Open notebook with a handwritten island route beside a boarding pass" },
      brief: "Notebook page with a hand-drawn route Manila – El Nido – Coron – Siargao, boarding pass and sunglasses beside it on a timber table.",
      tone: "sand",
    },
    body: { en: "" },
  },
  {
    slug: "philippines-in-january",
    group: "planning",
    status: "planned",
    series: "Inside the Seasons",
    author: AUTHOR,
    readMinutes: 5,
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
      alt: { en: "Festival dancers in bright costumes on a street in Cebu" },
      brief: "Sinulog, Cebu: dancers mid-movement in bright costumes, confetti, crowd blurred. Colour and energy, faces not the focus.",
      tone: "dusk",
    },
    body: { en: "" },
  },
  {
    slug: "philippines-in-february",
    group: "planning",
    status: "planned",
    series: "Inside the Seasons",
    author: AUTHOR,
    readMinutes: 5,
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
      alt: { en: "Clear morning over a quiet beach with a single outrigger boat" },
      brief: "February clarity: wide beach, low sun, one bangka pulled up on the sand, long shadows. Calm and dependable.",
      tone: "sand",
    },
    body: { en: "" },
  },
  {
    slug: "best-boutique-hotels-in-palawan",
    group: "travel-styles",
    status: "planned",
    series: "Inside Hotels",
    author: AUTHOR,
    readMinutes: 7,
    updated: UPDATED,
    title: {
      en: "Best Boutique Hotels in Palawan",
      fr: "Les meilleurs hôtels de charme à Palawan",
      es: "Los mejores hoteles boutique de Palawan",
      ru: "Лучшие бутик-отели Палавана",
      ar: "أفضل الفنادق البوتيك في بالاوان",
    },
    description: {
      en: "Small, design-led places to stay in El Nido, Coron and Port Barton, each one visited and verified by our team before it makes the list.",
      fr: "Petites adresses au design soigné à El Nido, Coron et Port Barton, chacune visitée et vérifiée par notre équipe avant d'entrer dans la liste.",
      es: "Pequeños alojamientos con diseño en El Nido, Coron y Port Barton, cada uno visitado y verificado por nuestro equipo antes de entrar en la lista.",
      ru: "Небольшие дизайнерские отели в Эль-Нидо, Короне и Порт-Бартоне — каждый мы проверяем лично, прежде чем включить в список.",
      ar: "أماكن إقامة صغيرة بتصاميم مميزة في إل نيدو وكورون وبورت بارتون، يزورها فريقنا ويتحقق منها قبل أن تدخل القائمة.",
    },
    photo: {
      alt: { en: "Timber-and-thatch room opening onto a garden and the sea" },
      brief: "Generic boutique interior, no identifiable property: timber floor, linen bed, thatched roof, doors open to garden and sea.",
      tone: "jungle",
    },
    body: { en: "" },
  },
  {
    slug: "best-restaurants-in-siargao",
    group: "culture",
    status: "planned",
    series: "Inside Food",
    author: AUTHOR,
    readMinutes: 6,
    updated: UPDATED,
    title: {
      en: "Best Restaurants in Siargao",
      fr: "Les meilleurs restaurants de Siargao",
      es: "Los mejores restaurantes de Siargao",
      ru: "Лучшие рестораны Сиаргао",
      ar: "أفضل المطاعم في سيارغاو",
    },
    description: {
      en: "Where to eat on Siargao, from kinilaw by the beach to the cafés of General Luna, tested by our team before we name a single place.",
      fr: "Où manger à Siargao, du kinilaw en bord de plage aux cafés de General Luna, testés par notre équipe avant d'être recommandés.",
      es: "Dónde comer en Siargao, del kinilaw junto a la playa a los cafés de General Luna, probados por nuestro equipo antes de recomendarlos.",
      ru: "Где поесть на Сиаргао — от кинилау на пляже до кафе Генерал-Луны. Мы рекомендуем только то, что проверили сами.",
      ar: "أين تأكل في سيارغاو، من الكينيلاو على الشاطئ إلى مقاهي جنرال لونا، بعد أن يجربها فريقنا بنفسه.",
    },
    photo: {
      alt: { en: "Bowl of kinilaw with calamansi on a wooden table by the sea" },
      brief: "Close-up: kinilaw in a coconut-shell bowl, calamansi halves, chilli, sea out of focus behind. No signage or branding.",
      tone: "rice",
    },
    body: { en: "" },
  },
  {
    slug: "most-beautiful-remote-islands-in-the-philippines",
    group: "islands",
    status: "planned",
    series: "Hidden Philippines",
    author: AUTHOR,
    readMinutes: 7,
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
      alt: { en: "Green rolling hills meeting cliffs and sea in Batanes" },
      brief: "Batanes: rolling green headland, stone house, cliffs dropping to a deep-blue sea, clouds moving. Wide and windswept.",
      tone: "stone",
    },
    body: { en: "" },
  },
  {
    slug: "how-to-travel-between-philippine-islands",
    group: "islands",
    status: "planned",
    series: "Inside the Islands",
    author: AUTHOR,
    readMinutes: 6,
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
      alt: { en: "Passengers stepping from an outrigger boat onto a beach with their bags" },
      brief: "Arrival by bangka: two travellers stepping into shin-deep water holding bags overhead, crew helping, island beach ahead.",
      tone: "lagoon",
    },
    body: { en: "" },
  },
  {
    slug: "where-to-honeymoon-in-the-philippines",
    group: "travel-styles",
    status: "planned",
    series: "Inside Honeymoons",
    author: AUTHOR,
    readMinutes: 6,
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
      alt: { en: "Couple watching the sunset from the bow of a private boat" },
      brief: "From behind: a couple seated on the bow of a private bangka at sunset, silhouetted islands. Unposed, no faces.",
      tone: "dusk",
    },
    body: { en: "" },
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
