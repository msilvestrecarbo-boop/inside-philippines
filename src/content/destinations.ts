import type { Destination } from "./types";

/**
 * Destinations for Inside Philippines.
 *
 * Card fields are written in all five languages. Long-form "Inside X" page
 * fields are English-first; other languages fall back to English until
 * native copywriters supply them.
 *
 * Editorial rule: no hotels, restaurants or operators are named here. We
 * describe areas, beaches, dishes, natural sites and public landmarks only.
 */
export const destinations: Destination[] = [
  // ───────────────────────────────────────────── PALAWAN
  {
    slug: "palawan",
    name: "Palawan",
    nameLocal: { ru: "Палаван", ar: "بالاوان" },
    region: "palawan",
    coords: [9.8349, 118.7384],
    photo: {
      alt: {
        en: "Limestone islands rising from a calm green bay off northern Palawan",
        fr: "Îlots calcaires dressés dans une baie verte et calme au nord de Palawan",
        es: "Islotes de caliza sobre una bahía verde y tranquila en el norte de Palawan",
        ru: "Известняковые островки над спокойной зелёной бухтой на севере Палавана",
        ar: "جزر كلسية تعلو خليجًا أخضر هادئًا في شمال بالاوان",
      },
      brief:
        "Wide aerial at 6:30am over Bacuit Bay or the coast near Port Barton: karst islands in layers, flat water, one small bangka leaving a thin wake. Soft, cool morning light, no people on deck. Mood: scale and quiet.",
      tone: "lagoon",
    },
    short: {
      en: "A long, thin island of karst lagoons, empty beaches and slow coastal towns, stretching 450 km between the South China Sea and the Sulu Sea.",
      fr: "Une île longue et étroite de lagons karstiques, de plages vides et de petites villes côtières sans hâte, étirée sur 450 km entre deux mers.",
      es: "Una isla larga y estrecha de lagunas kársticas, playas vacías y pueblos costeros tranquilos, estirada 450 km entre el mar de China Meridional y el de Joló.",
      ru: "Длинный узкий остров карстовых лагун, пустых пляжей и неспешных прибрежных городков — 450 км между Южно-Китайским морем и морем Сулу.",
      ar: "جزيرة طويلة ونحيلة من البحيرات الكارستية والشواطئ الخالية والبلدات الساحلية الهادئة، تمتد 450 كيلومترًا بين بحر الصين الجنوبي وبحر سولو.",
    },
    whyGo: {
      en: "Because no other province packs this much limestone, lagoon and open sea into a single trip.",
      fr: "Parce qu'aucune autre province ne réunit autant de calcaire, de lagons et de mer ouverte en un seul voyage.",
      es: "Porque ninguna otra provincia reúne tanta caliza, laguna y mar abierto en un solo viaje.",
      ru: "Потому что ни одна другая провинция не собирает столько известняка, лагун и открытого моря в одном путешествии.",
      ar: "لأنه لا توجد مقاطعة أخرى تجمع هذا القدر من الصخور الكلسية والبحيرات والبحر المفتوح في رحلة واحدة.",
    },
    bestFor: {
      en: ["Island hopping", "Honeymoons", "Slow travel", "Snorkelling"],
      fr: ["Sauts d'île en île", "Voyages de noces", "Voyage lent", "Snorkeling"],
      es: ["Ruta entre islas", "Lunas de miel", "Viaje pausado", "Esnórquel"],
      ru: ["Островные прогулки", "Медовый месяц", "Неспешные поездки", "Снорклинг"],
      ar: ["التنقل بين الجزر", "شهر العسل", "السفر الهادئ", "الغطس السطحي"],
    },
    nights: "7–12",
    bestSeason: {
      en: "December to May",
      fr: "De décembre à mai",
      es: "De diciembre a mayo",
      ru: "С декабря по май",
      ar: "من ديسمبر إلى مايو",
    },
    intro: {
      en: "Palawan is less a destination than a corridor. The island runs roughly 450 km from Coron's wrecks in the north to the scattered reefs of Balabac in the south, and most travellers see only a slice of it: El Nido, maybe Coron, a night in Puerto Princesa on the way. That slice is spectacular, but the province rewards people who give it room: a few nights in Port Barton between the big names, a day on San Vicente's 14-km Long Beach, a boat day with nobody else's itinerary attached.\n\nThe honest trade-off is distance. Roads are long, boats depend on weather and the best places are rarely next to each other. We plan Palawan as a sequence, north to south or the reverse, with one transfer day for every two or three days of doing very little. Done that way it is the most rewarding island trip in the country.",
    },
    whoShouldVisit: {
      en: "Couples, first-time visitors who want the classic limestone-and-lagoon Philippines, families with older children, and anyone happy to trade a few long transfers for days on the water. Less ideal if you want nightlife, big resorts with everything on site or a trip under a week.",
    },
    gettingThere: {
      en: "Most trips start at Puerto Princesa (PPS), around 1 hour 20 minutes by air from Manila, with flights from Cebu and Clark too. From there it is roughly 5–6 hours by road to El Nido, about 3 hours to Port Barton and around 4 hours to San Vicente. Small planes also fly from Manila to Lio airport just outside El Nido, which saves the long drive. Coron is reached through Busuanga (USU) airport, or by fast ferry from El Nido in about 4 hours when seas allow. Ferry schedules are seasonal and weather-dependent, so we always build in a buffer.",
    },
    sections: [
      {
        id: "why",
        title: { en: "Why Palawan" },
        body: {
          en: "Limestone is the story here. The same karst that makes El Nido's lagoons and Coron's inland lakes also shapes the Underground River near Puerto Princesa, one of the longest navigable underground rivers in the world. Add a coastline with very little heavy development, reefs that still hold turtles and reef sharks, and towns where the evening plan is a grilled fish and a sunset.\n\nWhat Palawan doesn't do is speed. The roads are improving but still slow, and inter-island boats need calm seas. If you accept that, the rewards scale with the time you give it.",
        },
      },
      {
        id: "stay",
        title: { en: "Where to stay" },
        body: {
          en: "Think in bases, not hotels. Each part of the island suits a different mood, and the right combination depends on how many nights you have.",
        },
        items: [
          { name: { en: "El Nido" }, text: { en: "The main event for lagoons and island hopping. Stay outside the busy town, around Corong Corong for sunsets or near Nacpan and Lio for space." } },
          { name: { en: "Coron" }, text: { en: "Wrecks, inland lakes and a working harbour town. Best paired with El Nido by ferry or by flight via Manila." } },
          { name: { en: "Port Barton" }, text: { en: "A small bay village with no big roads and an easy pace. Two or three nights here make the El Nido drive feel like a journey instead of a chore." } },
          { name: { en: "San Vicente" }, text: { en: "Long Beach is 14 km of mostly empty sand. Quiet, low-key, and still very little built." } },
          { name: { en: "Puerto Princesa" }, text: { en: "The provincial capital and arrival point. One night for the Underground River is usually enough." } },
        ],
      },
      {
        id: "beaches",
        title: { en: "Beaches" },
        body: {
          en: "Palawan's best beaches are often the ones you reach by boat, but a few on the road are worth planning a day around.",
        },
        items: [
          { name: { en: "Nacpan Beach, El Nido" }, text: { en: "A 4-km curve of pale sand about 40 minutes north of El Nido town. Wide enough to find your own stretch even in high season." } },
          { name: { en: "Long Beach, San Vicente" }, text: { en: "14 km long and rarely busy. Walk it early, swim at high tide." } },
          { name: { en: "Malcapuya and Banana Island, Coron" }, text: { en: "Soft sand and clear shallows on the outer islands, reached on a full-day boat trip." } },
          { name: { en: "German Island, Port Barton" }, text: { en: "A small, easy island stop with good snorkelling just offshore." } },
        ],
      },
      {
        id: "things-to-do",
        title: { en: "Things to do" },
        body: {
          en: "Most days revolve around the water, but there is more to Palawan than lagoons.",
        },
        items: [
          { name: { en: "Puerto Princesa Underground River" }, text: { en: "A UNESCO-listed river cave explored by paddle boat. Permits are limited per day, so we book well ahead." } },
          { name: { en: "Island hopping" }, text: { en: "El Nido's lettered tours, Coron's lakes and Port Barton's quieter islands. A private boat changes everything about the timing." } },
          { name: { en: "Kayaking the lagoons" }, text: { en: "The Big and Small Lagoons in El Nido are best seen from a kayak, early, before the boats arrive." } },
          { name: { en: "Wreck diving" }, text: { en: "Coron's Second World War Japanese wrecks are among the best wreck dives in Asia." } },
          { name: { en: "Honda Bay" }, text: { en: "Easy island and sandbar day trips from Puerto Princesa, good for families." } },
        ],
      },
      {
        id: "island-hopping",
        title: { en: "Island hopping, done well" },
        body: {
          en: "Shared tours follow the same order at the same time, which is why the famous lagoons can feel crowded at 11am. A private bangka lets you reverse the route, start at 7am and stop for lunch on a beach the group tours skip.\n\nFor a longer route, multi-day expedition-style boat trips between El Nido and Coron run in the dry season, sleeping in simple island camps. They are rustic and depend on weather, but they are the most memorable way to cross between the two.",
        },
        insider: {
          type: "inside-tip",
          title: { en: "Reverse the route" },
          body: { en: "Ask your boat crew to run the day backwards. You'll reach the lagoons when everyone else is eating lunch." },
        },
      },
      {
        id: "food",
        title: { en: "Food" },
        body: {
          en: "Palawan eats from the sea. Look for kinilaw (raw fish cured in vinegar and calamansi), grilled squid and whatever the boats brought in that morning. Puerto Princesa has a small but serious local food scene, including tamilok (woodworm from mangroves) for the curious, and cashews from the island's own farms.\n\nOn boat days, lunch is usually grilled on board or on a beach: fish, pork skewers, rice, fruit. Simple, and very often the best meal of the trip.",
        },
      },
      {
        id: "when",
        title: { en: "When to go" },
        body: {
          en: "December to May is dry and the seas are generally calm, with March to May the hottest and calmest. June to October brings the southwest monsoon: more rain, rougher crossings and occasional cancelled boat trips, but also far fewer people and lower prices. November is a transition month that can go either way.",
        },
      },
    ],
    insiders: [
      {
        type: "worth-the-detour",
        title: { en: "Port Barton" },
        body: { en: "Two nights here split the long drive to El Nido and show you the Palawan of fifteen years ago: one road, a bay full of boats and very little else." },
      },
      {
        type: "go-early",
        title: { en: "Underground River" },
        body: { en: "Take the first permit slot of the day. The boat queue at Sabang builds quickly after 9am." },
      },
      {
        type: "our-favorite",
        title: { en: "A private bangka" },
        body: { en: "On a coast this beautiful, the single biggest upgrade is your own boat and crew for the day." },
      },
      {
        type: "skip-this",
        title: { en: "Skip the El Nido day trip from Puerto Princesa" },
        body: { en: "It means 10+ hours in a van for a few hours in town. Stay at least three nights or don't go." },
      },
    ],
    nearby: ["el-nido", "coron"],
    faqs: [
      {
        q: { en: "How many days do I need for Palawan?" },
        a: { en: "A week covers El Nido and one other base comfortably. Ten to twelve nights lets you add Coron or Port Barton without rushing." },
      },
      {
        q: { en: "Should I choose El Nido or Coron?" },
        a: { en: "If you only have time for one, El Nido has the bigger range of beaches and lagoons; Coron is better for divers and for inland lakes. With a week or more, do both." },
      },
      {
        q: { en: "Is Palawan good in the rainy season?" },
        a: { en: "It can be. Rain usually comes in bursts rather than all day, but boat trips are sometimes cancelled. Allow flexible days and avoid tight onward connections." },
      },
      {
        q: { en: "Do I need to book the Underground River in advance?" },
        a: { en: "Yes. Daily visitor numbers are capped and permits sell out in busy months. We arrange them as part of the trip." },
      },
    ],
    experienceCategories: ["island-escapes", "honeymoons", "luxury", "family", "nature-adventure", "private-journeys"],
  },

  // ───────────────────────────────────────────── EL NIDO
  {
    slug: "el-nido",
    name: "El Nido",
    nameLocal: { ru: "Эль-Нидо", ar: "إل نيدو" },
    region: "palawan",
    coords: [11.1957, 119.4075],
    photo: {
      alt: {
        en: "Kayaks drifting into a limestone lagoon in El Nido at sunrise",
        fr: "Kayaks glissant dans un lagon calcaire d'El Nido au lever du soleil",
        es: "Kayaks entrando en una laguna de caliza de El Nido al amanecer",
        ru: "Каяки входят в известняковую лагуну Эль-Нидо на рассвете",
        ar: "قوارب كاياك تنساب داخل بحيرة كلسية في إل نيدو عند الشروق",
      },
      brief:
        "Small Lagoon or Big Lagoon at 7am before the boats arrive: two kayaks entering through the cliff gap, jade water, vertical limestone in soft shade, mist still on the rock. Mood: hush, first light, discovery.",
      tone: "lagoon",
    },
    short: {
      en: "The Philippines' best-known lagoons, set in Bacuit Bay's 45-odd limestone islands, with beaches that look unreal and a small town that grew up fast around them.",
      fr: "Les lagons les plus célèbres des Philippines, parmi la quarantaine d'îles calcaires de la baie de Bacuit, avec des plages presque irréelles et une petite ville qui a grandi vite.",
      es: "Las lagunas más famosas de Filipinas, entre la cuarentena de islas de caliza de la bahía de Bacuit, con playas que parecen irreales y un pueblo que creció deprisa.",
      ru: "Самые известные лагуны Филиппин среди примерно 45 известняковых островов залива Бакуит — пляжи, похожие на декорацию, и городок, выросший слишком быстро.",
      ar: "أشهر بحيرات الفلبين بين نحو 45 جزيرة كلسية في خليج باكويت، مع شواطئ تبدو غير حقيقية وبلدة صغيرة نمت بسرعة حولها.",
    },
    whyGo: {
      en: "To paddle into the lagoons that made the Philippines famous, ideally before anyone else does.",
      fr: "Pour entrer en kayak dans les lagons qui ont fait la réputation des Philippines, idéalement avant tout le monde.",
      es: "Para entrar en kayak en las lagunas que hicieron famosa a Filipinas, a ser posible antes que nadie.",
      ru: "Чтобы на каяке зайти в лагуны, прославившие Филиппины, — желательно раньше всех.",
      ar: "لتجدّف داخل البحيرات التي صنعت شهرة الفلبين، ويفضَّل قبل وصول الآخرين.",
    },
    bestFor: {
      en: ["Lagoons", "Island hopping", "Couples", "Sunsets"],
      fr: ["Lagons", "Sauts d'île en île", "Couples", "Couchers de soleil"],
      es: ["Lagunas", "Ruta entre islas", "Parejas", "Atardeceres"],
      ru: ["Лагуны", "Островные прогулки", "Пары", "Закаты"],
      ar: ["البحيرات", "التنقل بين الجزر", "الأزواج", "الغروب"],
    },
    nights: "3–5",
    bestSeason: {
      en: "December to May",
      fr: "De décembre à mai",
      es: "De diciembre a mayo",
      ru: "С декабря по май",
      ar: "من ديسمبر إلى مايو",
    },
    intro: {
      en: "El Nido is the reason many people book a flight to the Philippines, and it mostly lives up to it. Bacuit Bay is a scatter of sheer limestone islands with lagoons tucked inside them, white-sand coves between the cliffs and water that turns from jade to deep blue within a few metres. On a calm morning in a kayak it is genuinely hard to believe.\n\nThe town itself is another matter: busy, noisy in places and still catching up with its own popularity. Our advice is simple. Stay a little outside it, get on the water early, and give yourself at least three full days so a rainy morning doesn't cost you the lagoons.",
    },
    whoShouldVisit: {
      en: "Couples, honeymooners, first-time visitors and families with children old enough to enjoy long boat days. Not ideal for anyone looking for serious diving (Coron is better) or a quiet village feel in town.",
    },
    gettingThere: {
      en: "Two options. Fly from Manila (sometimes Cebu) on a small plane to Lio airport, about 1 hour 15 minutes, then 15–20 minutes by road into town. Or fly to Puerto Princesa and drive roughly 5–6 hours north by private van. From Coron, fast ferries take around 4 hours, usually once or twice a day in the dry season; they are weather-dependent and can be cancelled at short notice. Lio flights carry tight baggage limits, so pack accordingly.",
    },
    sections: [
      {
        id: "why",
        title: { en: "Why El Nido" },
        body: {
          en: "Nowhere else in the country puts so many classic scenes within a short boat ride: enclosed lagoons, snorkelling over coral at the foot of cliffs, sandbars that appear at low tide, and a westward view that makes sunset the event of every evening.\n\nIt's busy because it's good. With the right timing and a private boat, you'll spend most of your day somewhere that feels far quieter than its reputation.",
        },
      },
      {
        id: "stay",
        title: { en: "Where to stay" },
        body: {
          en: "Where you sleep shapes the trip more than in most places, because El Nido town is compact and crowded while the best beaches are spread out.",
        },
        items: [
          { name: { en: "Corong Corong" }, text: { en: "Just south of town, facing west over the bay. Our usual pick: close to the boats, calmer evenings, the best sunsets." } },
          { name: { en: "El Nido town" }, text: { en: "Convenient and lively but loud and tight. Fine for one or two nights if you want to be in the middle of it." } },
          { name: { en: "Lio" }, text: { en: "A planned beachfront area near the airport, 15–20 minutes from town. Good for families and for easy arrival days." } },
          { name: { en: "Nacpan and Duli" }, text: { en: "Quiet northern beaches about 40 minutes away. Wide sand, surf in season, very little nightlife." } },
          { name: { en: "Private islands" }, text: { en: "A handful of island resorts in Bacuit Bay offer the most secluded version of El Nido, reached only by boat." } },
        ],
        insider: {
          type: "inside-tip",
          title: { en: "Two bases, one stay" },
          body: { en: "On a five-night trip, split it: three nights at Corong Corong for the boats, two at Nacpan for the beach." },
        },
      },
      {
        id: "beaches",
        title: { en: "Beaches" },
        body: {
          en: "Some of the best beaches here are only reachable by boat, so the beach list and the island-hopping list overlap.",
        },
        items: [
          { name: { en: "Nacpan Beach" }, text: { en: "Four kilometres of soft sand north of town. Go in the afternoon and stay for sunset." } },
          { name: { en: "Las Cabanas (Marimegmeg)" }, text: { en: "The easy sunset beach south of town, with small islands in the foreground. Busy, but for a reason." } },
          { name: { en: "Seven Commando Beach" }, text: { en: "A palm-backed cove on the mainland, usually a lunch stop on tours." } },
          { name: { en: "Hidden Beach, Matinloc" }, text: { en: "A beach enclosed by cliffs, entered through a gap in the rock. Best at high tide." } },
          { name: { en: "Helicopter Island" }, text: { en: "Named for its silhouette; good snorkelling on the reef off its beach." } },
        ],
      },
      {
        id: "island-hopping",
        title: { en: "Island hopping" },
        body: {
          en: "El Nido's shared tours are labelled A, B, C and D. Tour A covers the Big Lagoon, Small Lagoon and Secret Lagoon; Tour C takes in Hidden Beach, Secret Beach and Matinloc Shrine; B and D are mixes of caves, beaches and snorkel stops. The Small and Big Lagoons have visitor caps and timed slots, which is another reason to plan.\n\nA private boat lets you mix the tours, start early and stay longer where you like it. It also means lunch where you want it, not where 30 other boats have anchored.",
        },
        items: [
          { name: { en: "Big Lagoon" }, text: { en: "A wide, shallow channel between cliffs. Kayak in and the water deepens to a green bowl at the end." } },
          { name: { en: "Small Lagoon" }, text: { en: "Entered through a narrow gap by kayak or swimming. The most photographed spot in the bay." } },
          { name: { en: "Secret Lagoon" }, text: { en: "A pool behind a small hole in the rock wall. Tiny, and crowded at peak times." } },
          { name: { en: "Cadlao Island" }, text: { en: "The biggest island in the bay, with a lagoon and beaches the group tours often skip." } },
        ],
      },
      {
        id: "things-to-do",
        title: { en: "Things to do" },
        body: {
          en: "Beyond the boats, there's enough to fill an off day without feeling short-changed.",
        },
        items: [
          { name: { en: "Taraw Cliff" }, text: { en: "A steep guided climb over sharp limestone to a view over town and the bay. Hard on the hands; not for everyone." } },
          { name: { en: "Sunset sail" }, text: { en: "A traditional outrigger or small sailboat out into the bay at golden hour." } },
          { name: { en: "Diving" }, text: { en: "Easy reef diving around the bay; good for beginners and refreshers." } },
          { name: { en: "Nacpan by scooter or tricycle" }, text: { en: "The road north runs past rice fields and small barangays. A pleasant half day." } },
        ],
      },
      {
        id: "food",
        title: { en: "Food" },
        body: {
          en: "El Nido's food is mostly about seafood and the boat lunch. On tours, crews grill fish, pork and squid on board and serve them with rice, salad and mango on a beach. In town, look for kinilaw, grilled fish sold by weight and halo-halo on a hot afternoon.\n\nThe town also has a wide range of international cafés and restaurants, especially along the main beachfront and in Corong Corong. Quality changes quickly with staff and seasons, so we give current suggestions when you travel rather than printing a list.",
        },
      },
      {
        id: "sunsets",
        title: { en: "Sunsets" },
        body: {
          en: "El Nido faces west, so every evening is a show if the sky is clear. Las Cabanas is the classic, Corong Corong is the calm option, and Nacpan offers the widest horizon. From the water, a sunset sail is the best seat in the house.",
        },
        insider: {
          type: "best-sunset",
          title: { en: "Corong Corong" },
          body: { en: "Quieter than Las Cabanas, with the islands of the bay lined up in front of you." },
        },
      },
      {
        id: "when",
        title: { en: "When to go" },
        body: {
          en: "The dry season runs roughly December to May, with calm seas and the best visibility from March to May. From June to October, the southwest monsoon brings rain, wind and some cancelled tours; it can still be lovely between showers, and much quieter. Christmas, New Year and Holy Week are the busiest weeks of the year.",
        },
      },
    ],
    insiders: [
      {
        type: "go-early",
        title: { en: "Lagoons at 7am" },
        body: { en: "Leave at 7am, not 9am. The Big Lagoon at first light, with three other kayaks, is a different place." },
      },
      {
        type: "skip-this",
        title: { en: "Skip staying on the main town strip" },
        body: { en: "Sleep in Corong Corong or Lio and come into town for dinner. You'll sleep better and see the sunset." },
      },
      {
        type: "best-beach",
        title: { en: "Nacpan, late afternoon" },
        body: { en: "Swim, walk the full length to the twin-beach viewpoint, and stay until the light turns gold." },
      },
      {
        type: "worth-the-detour",
        title: { en: "Cadlao Island" },
        body: { en: "The bay's biggest island is a short ride from town and quieter than the lettered-tour stops." },
      },
    ],
    nearby: ["coron", "palawan"],
    faqs: [
      {
        q: { en: "How many days should I spend in El Nido?" },
        a: { en: "Three full days is the minimum we recommend: two boat days and one for beaches or rest, plus a buffer for weather. Four or five is better." },
      },
      {
        q: { en: "Is it better to fly to Lio or drive from Puerto Princesa?" },
        a: { en: "Flying to Lio saves most of a day and is worth it on shorter trips. The drive is fine if you split it with a night in Port Barton." },
      },
      {
        q: { en: "Is there an environmental fee?" },
        a: { en: "Yes. Visitors pay an eco-tourism development fee, valid for several days, plus lagoon fees on some tours. We include them in the plan." },
      },
      {
        q: { en: "Can I go from El Nido to Coron by boat?" },
        a: { en: "Yes, by fast ferry in about 4 hours in decent weather, or on a multi-day expedition boat in the dry season. Both depend on sea conditions." },
      },
      {
        q: { en: "Is El Nido too crowded?" },
        a: { en: "The town and the most famous lagoons can be, especially at midday in high season. Early starts, a private boat and staying outside town solve most of it." },
      },
    ],
    experienceCategories: ["island-escapes", "honeymoons", "luxury", "family", "private-journeys"],
  },

  // ───────────────────────────────────────────── CORON
  {
    slug: "coron",
    name: "Coron",
    nameLocal: { ru: "Корон", ar: "كورون" },
    region: "palawan",
    coords: [11.9986, 120.2043],
    photo: {
      alt: {
        en: "Wooden walkway and green limestone around Kayangan Lake in Coron",
        fr: "Passerelle en bois et falaises calcaires autour du lac Kayangan, à Coron",
        es: "Pasarela de madera y caliza verde junto al lago Kayangan, en Coron",
        ru: "Деревянные мостки и зелёные известняковые скалы у озера Каянган на Короне",
        ar: "ممر خشبي وصخور كلسية خضراء حول بحيرة كايانغان في كورون",
      },
      brief:
        "Kayangan Lake at 8am from water level: a lone swimmer floating in clear brackish water, limestone spires reflected, the wooden walkway in soft side light. Mood: cool, still, slightly otherworldly.",
      tone: "lagoon",
    },
    short: {
      en: "Inland lakes inside limestone cliffs, Second World War shipwrecks you can dive or snorkel, and a busy harbour town on Busuanga Island.",
      fr: "Des lacs intérieurs cernés de falaises calcaires, des épaves de la Seconde Guerre mondiale à explorer et une petite ville portuaire animée sur l'île de Busuanga.",
      es: "Lagos interiores entre acantilados de caliza, pecios de la Segunda Guerra Mundial para bucear o hacer esnórquel y un pueblo portuario con mucho movimiento en Busuanga.",
      ru: "Озёра внутри известняковых скал, затонувшие корабли Второй мировой для дайвинга и снорклинга и оживлённый портовый городок на острове Бусуанга.",
      ar: "بحيرات داخلية بين منحدرات كلسية، وحطام سفن من الحرب العالمية الثانية للغوص أو السباحة فوقه، وبلدة ميناء نشطة في جزيرة بوسوانغا.",
    },
    whyGo: {
      en: "For the strangest swim of your life in Kayangan Lake, and some of the best wreck diving in Asia.",
      fr: "Pour la baignade la plus étrange de votre vie au lac Kayangan, et certaines des plus belles plongées sur épave d'Asie.",
      es: "Por el baño más extraño de tu vida en el lago Kayangan y algunas de las mejores inmersiones en pecios de Asia.",
      ru: "Ради самого необычного купания в жизни — в озере Каянган — и одного из лучших рэк-дайвингов в Азии.",
      ar: "من أجل أغرب سباحة في حياتك في بحيرة كايانغان، وبعض أفضل مواقع الغوص على الحطام في آسيا.",
    },
    bestFor: {
      en: ["Wreck diving", "Lakes and lagoons", "Island hopping", "Adventurous couples"],
      fr: ["Plongée sur épaves", "Lacs et lagons", "Sauts d'île en île", "Couples aventureux"],
      es: ["Buceo en pecios", "Lagos y lagunas", "Ruta entre islas", "Parejas aventureras"],
      ru: ["Рэк-дайвинг", "Озёра и лагуны", "Островные прогулки", "Пары, любящие приключения"],
      ar: ["الغوص على الحطام", "البحيرات", "التنقل بين الجزر", "الأزواج المغامرون"],
    },
    nights: "3–4",
    bestSeason: {
      en: "November to May",
      fr: "De novembre à mai",
      es: "De noviembre a mayo",
      ru: "С ноября по май",
      ar: "من نوفمبر إلى مايو",
    },
    intro: {
      en: "Coron is the name everyone uses, but it covers three things: Coron town, a working harbour on Busuanga Island; Coron Island across the water, a wall of black-and-green limestone that is ancestral land of the Tagbanua people; and the scattered islands and reefs of the Calamian group around them. The town is functional rather than pretty. The point is what lies a short boat ride away.\n\nThat means lakes of brackish, glass-clear water held inside cliffs, white-sand islands on the outer reefs and a fleet of Japanese supply ships sunk by US aircraft in September 1944. Divers come for the wrecks; everyone else comes for the lakes and stays for the islands. Three or four nights is right for most people.",
    },
    whoShouldVisit: {
      en: "Divers (especially wreck divers), confident swimmers, active couples and anyone pairing it with El Nido. Less suited to travellers who want a polished resort town on the beach; most accommodation is in town or on outlying islands.",
    },
    gettingThere: {
      en: "Fly into Francisco B. Reyes Airport (USU) on Busuanga, around 1 hour from Manila, with some flights from Cebu and Clark. The drive from the airport to Coron town takes roughly 30–40 minutes. From El Nido, fast ferries run in about 4 hours when the sea allows, and expedition-style boats make the crossing over several days in the dry season. Overnight ferries from Manila also exist but take most of a day and night.",
    },
    sections: [
      {
        id: "why",
        title: { en: "Why Coron" },
        body: {
          en: "Coron feels wilder than El Nido. The cliffs of Coron Island are taller and darker, the lakes are unlike anything elsewhere in the country, and you can snorkel over a shipwreck in a few metres of water without a dive certificate.\n\nThe trade-off: the town is not a beach town, and the best sites are shared by many boats at peak hours. Leave early, or stay on one of the outer islands.",
        },
      },
      {
        id: "stay",
        title: { en: "Where to stay" },
        body: {
          en: "Your choice is between convenience and seclusion.",
        },
        items: [
          { name: { en: "Coron town" }, text: { en: "Close to the harbour, restaurants and dive centres. Practical and good value, not scenic." } },
          { name: { en: "Hillside above town" }, text: { en: "A few places sit on the slopes with views over the bay toward Coron Island. Worth it for the evenings." } },
          { name: { en: "Outer islands" }, text: { en: "Island resorts around Busuanga and the Calamian group are remote and quiet. Best for honeymoons, with boat transfers built in." } },
        ],
      },
      {
        id: "island-hopping",
        title: { en: "Lakes, lagoons and islands" },
        body: {
          en: "Coron's tours combine Coron Island's lakes with beaches and reefs. Kayangan Lake involves a climb of around 150 steps to a famous viewpoint before you descend to the water. Barracuda Lake is known for its thermocline, where warm and cool layers meet at depth. The Twin Lagoon is two bodies of water joined by a gap you swim or squeeze through, depending on the tide.\n\nFor beaches, take a separate day to the outer islands: Malcapuya, Banana Island and Bulog Dos are around 1.5 hours away by boat and far quieter.",
        },
        items: [
          { name: { en: "Kayangan Lake" }, text: { en: "The postcard view, then the swim. Managed by the Tagbanua community." } },
          { name: { en: "Barracuda Lake" }, text: { en: "Freshwater over saltwater, sharp limestone underwater. Good snorkelling, even better freediving." } },
          { name: { en: "Twin Lagoon" }, text: { en: "Swim from the first lagoon into the second through a narrow gap in the rock." } },
          { name: { en: "Siete Pecados" }, text: { en: "A small marine park of seven islets near town. Good, easy snorkelling." } },
          { name: { en: "Malcapuya, Banana Island, Bulog Dos" }, text: { en: "The outer-island beach day. Soft sand, clear shallows." } },
        ],
        insider: {
          type: "go-early",
          title: { en: "Kayangan before 8am" },
          body: { en: "By late morning the viewpoint queue can take a while. Be the first boat at the dock." },
        },
      },
      {
        id: "diving",
        title: { en: "Diving the wrecks" },
        body: {
          en: "In September 1944, US Navy aircraft attacked a Japanese supply fleet sheltering in Coron Bay. Around a dozen wrecks now lie between roughly 10 and 40 metres, covered in coral and full of fish. Some, like the Skeleton Wreck and the Lusong Gunboat, are shallow enough to snorkel.\n\nWreck penetration requires the right training and a careful guide. Most dive centres run two-tank trips daily; advanced divers can plan several days here.",
        },
        items: [
          { name: { en: "Okikawa Maru" }, text: { en: "A large tanker, one of the biggest wrecks in the bay. Strong currents at times." } },
          { name: { en: "Akitsushima" }, text: { en: "A seaplane tender, the only true warship here. For experienced divers." } },
          { name: { en: "Irako" }, text: { en: "A refrigeration ship in deeper water, with good visibility and big fish life." } },
          { name: { en: "Lusong Gunboat" }, text: { en: "Shallow enough that the stern almost breaks the surface at low tide. Ideal for snorkellers." } },
        ],
      },
      {
        id: "things-to-do",
        title: { en: "On land" },
        body: {
          en: "Busuanga is a big island, and a day on land is a good break between boat days.",
        },
        items: [
          { name: { en: "Mount Tapyas" }, text: { en: "Roughly 700 steps from town to a viewpoint over the bay. Climb before sunset." } },
          { name: { en: "Maquinit Hot Spring" }, text: { en: "A saltwater hot spring by the mangroves. Best after dark." } },
          { name: { en: "Calauit Safari Park" }, text: { en: "African giraffes and zebras, brought here in the 1970s, alongside native Calamian deer. A long day trip on rough roads." } },
          { name: { en: "Culion" }, text: { en: "A former leper colony with a moving museum and a quiet town. A half-day boat trip." } },
        ],
      },
      {
        id: "food",
        title: { en: "Food" },
        body: {
          en: "Coron town eats like a harbour town: grilled fish, seafood by weight, kinilaw and cashews from Palawan. On boat days, lunch is grilled on board. In town there's a small range of cafés and restaurants around the main road and the harbour; for a good dinner, the hillside spots with bay views are usually the better choice.",
        },
      },
      {
        id: "when",
        title: { en: "When to go" },
        body: {
          en: "November to May is the dry, calmer season. From June to October the southwest monsoon brings rain and rougher seas; boat trips and the El Nido ferry can be suspended for days at a time. Wreck diving runs year-round when conditions allow.",
        },
      },
    ],
    insiders: [
      {
        type: "our-favorite",
        title: { en: "Snorkelling the Lusong Gunboat" },
        body: { en: "A Second World War wreck you can see from the surface, no dive certificate needed." },
      },
      {
        type: "best-sunset",
        title: { en: "Mount Tapyas" },
        body: { en: "Start the climb about an hour before sunset; the bay goes gold and the town lights come on below." },
      },
      {
        type: "worth-the-detour",
        title: { en: "Culion" },
        body: { en: "Half a day on Culion tells you more about this region's history than a week of beaches." },
      },
      {
        type: "inside-tip",
        title: { en: "Separate the lakes and the beaches" },
        body: { en: "Do Coron Island's lakes one day and the outer islands another. Combined tours rush both." },
      },
    ],
    nearby: ["el-nido", "palawan"],
    faqs: [
      {
        q: { en: "Do I need to dive to enjoy Coron?" },
        a: { en: "No. The lakes, lagoons and several shallow wrecks are all accessible with a mask and fins." },
      },
      {
        q: { en: "How do I get from Coron to El Nido?" },
        a: { en: "By fast ferry, about 4 hours in good conditions, or on a multi-day expedition boat. Flights go via Manila." },
      },
      {
        q: { en: "Is Coron town nice to stay in?" },
        a: { en: "It's practical rather than pretty. Choose a hillside view or an island resort if atmosphere matters to you." },
      },
      {
        q: { en: "How many nights do I need?" },
        a: { en: "Three nights for lakes and islands; four or more if you want to dive the wrecks properly." },
      },
    ],
    experienceCategories: ["island-escapes", "diving", "nature-adventure", "honeymoons", "private-journeys"],
  },

  // ───────────────────────────────────────────── SIARGAO
  {
    slug: "siargao",
    name: "Siargao",
    nameLocal: { ru: "Сиаргао", ar: "سيارغاو" },
    region: "mindanao",
    coords: [9.8482, 126.0458],
    photo: {
      alt: {
        en: "Coconut palms stretching to the horizon along a road in Siargao",
        fr: "Cocotiers à perte de vue le long d'une route de Siargao",
        es: "Cocoteros hasta el horizonte junto a una carretera de Siargao",
        ru: "Кокосовые пальмы до самого горизонта вдоль дороги на Сиаргао",
        ar: "أشجار جوز الهند تمتد حتى الأفق على طول طريق في سيارغاو",
      },
      brief:
        "Elevated shot from the coconut-palm viewpoint road outside General Luna at 5:30pm: an ocean of palms to the horizon, one scooter with a surfboard rack on the road below, warm low light and haze. Mood: freedom, end of a surf day.",
      tone: "jungle",
    },
    short: {
      en: "A teardrop-shaped surf island in the Pacific with a famous reef break, island-hopping lagoons, coconut forests and the most relaxed social scene in the country.",
      fr: "Une île de surf en forme de goutte dans le Pacifique : une vague de récif célèbre, des lagons, des forêts de cocotiers et l'ambiance la plus détendue du pays.",
      es: "Una isla surfera con forma de lágrima en el Pacífico: una ola de arrecife famosa, lagunas, bosques de cocoteros y el ambiente más relajado del país.",
      ru: "Остров в форме капли на краю Тихого океана: знаменитая рифовая волна, лагуны, кокосовые леса и самая расслабленная атмосфера в стране.",
      ar: "جزيرة على شكل قطرة في المحيط الهادئ: موجة شعاب شهيرة وبحيرات وغابات جوز هند وأكثر أجواء البلاد استرخاءً.",
    },
    whyGo: {
      en: "For days that start with surf, end barefoot at a beach bar and never once involve a schedule.",
      fr: "Pour des journées qui commencent par une session de surf, finissent pieds nus au bord de l'eau et ne suivent jamais d'horaire.",
      es: "Por días que empiezan con surf, terminan descalzo en un bar de playa y nunca siguen un horario.",
      ru: "Ради дней, которые начинаются с сёрфинга, заканчиваются босиком в пляжном баре и обходятся без всякого расписания.",
      ar: "من أجل أيام تبدأ بركوب الأمواج وتنتهي حافي القدمين في مقهى على الشاطئ، دون أي جدول.",
    },
    bestFor: {
      en: ["Surf", "Island hopping", "Wellness", "Young couples"],
      fr: ["Surf", "Sauts d'île en île", "Bien-être", "Jeunes couples"],
      es: ["Surf", "Ruta entre islas", "Bienestar", "Parejas jóvenes"],
      ru: ["Сёрфинг", "Островные прогулки", "Велнес", "Молодые пары"],
      ar: ["ركوب الأمواج", "التنقل بين الجزر", "العافية", "الأزواج الشباب"],
    },
    nights: "4–7",
    bestSeason: {
      en: "March to October (surf peaks September to November)",
      fr: "De mars à octobre (meilleure houle de septembre à novembre)",
      es: "De marzo a octubre (mejores olas de septiembre a noviembre)",
      ru: "С марта по октябрь (лучшие волны — с сентября по ноябрь)",
      ar: "من مارس إلى أكتوبر (أفضل الأمواج من سبتمبر إلى نوفمبر)",
    },
    intro: {
      en: "Siargao sits on the Pacific edge of Mindanao, and for a long time it was known only to surfers chasing Cloud 9, the hollow right-hander off General Luna. The surfers are still here, but the island has grown into something broader: a place where people come for a week and stay for a season, where the best evening plan is a sunset on the boardwalk and the main traffic jam is scooters on Tourism Road.\n\nIt has changed fast, especially after rebuilding from Typhoon Odette in December 2021, and General Luna is busier than it was. But drive twenty minutes in any direction and you are back among coconut palms, rice fields and quiet fishing villages. Our advice: stay near General Luna for the food and the energy, and spend your days getting out of it.",
    },
    whoShouldVisit: {
      en: "Surfers of every level, young couples, friends travelling together, digital nomads and anyone who wants a laid-back island with a social side. Also good for active families. Less suited to travellers who want polished luxury resorts throughout, or a classic powdery-white beach holiday with nothing else going on.",
    },
    gettingThere: {
      en: "Fly into Sayak Airport (IAO) in Del Carmen, with direct flights from Manila (around 1 hour 40 minutes), Cebu (about 1 hour) and, on some schedules, Clark. From the airport it is roughly 45 minutes to an hour by road to General Luna. An alternative is to fly to Surigao or Butuan and take a fast craft from Surigao City to Dapa port, around 1.5–2 hours, then 20 minutes by road. Flights to Siargao fill quickly in peak months, so book early.",
    },
    sections: [
      {
        id: "why",
        title: { en: "Why Siargao" },
        body: {
          en: "Siargao works because it does several things well at once. There's world-class surf for experienced riders and gentle reef breaks for beginners. There's island hopping that rivals Palawan's, with sandbars and lagoons a short boat ride away. And there's a food and café scene in General Luna that is unusually good for an island this size.\n\nMostly, though, people love the pace. Days are built around tides and swell. Evenings are built around the sunset. Nothing starts on time, and after two days you won't mind.",
        },
      },
      {
        id: "stay",
        title: { en: "Where to stay" },
        body: {
          en: "Almost everything happens in and around General Luna, the town in the island's southeast. How close you want to be depends on whether you value walking to dinner or waking to silence.",
        },
        items: [
          { name: { en: "General Luna and Tourism Road" }, text: { en: "The centre of everything: cafés, restaurants, surf schools and nightlife. Convenient, lively and sometimes noisy." } },
          { name: { en: "Cloud 9" }, text: { en: "A stretch of coast north of town around the famous boardwalk. Ideal for surfers who want to see the break from bed." } },
          { name: { en: "Catangnan and Malinao" }, text: { en: "Quieter areas just outside town, with garden villas and easy scooter rides to dinner." } },
          { name: { en: "Pacifico" }, text: { en: "Around an hour north on the east coast. A long beach, an exposed reef break and very little else. Best for a slower final few nights." } },
          { name: { en: "Pilar and Burgos" }, text: { en: "Rural, coastal and quiet, with a handful of small places to stay for people who want to be away from the crowd." } },
        ],
        insider: {
          type: "inside-tip",
          title: { en: "Split your stay" },
          body: { en: "Four nights in General Luna for the energy, two or three in Pacifico for the silence. The drive between them is part of the trip." },
        },
      },
      {
        id: "beaches",
        title: { en: "Beaches" },
        body: {
          en: "Siargao's beaches are not all postcard-white. The east coast faces the Pacific, and many shorelines are reef rather than sand, especially at low tide. The best swimming beaches are on the islands offshore and in the north.",
        },
        items: [
          { name: { en: "Guyam Island" }, text: { en: "A tiny palm-covered island ten minutes by boat from General Luna. The classic first stop." } },
          { name: { en: "Daku Island" }, text: { en: "The largest of the nearby islands, with a long beach, a small community and grilled-seafood lunches." } },
          { name: { en: "Naked Island" }, text: { en: "A bare sandbar with nothing on it at all. Brilliant at low tide, completely exposed to the sun." } },
          { name: { en: "Pacifico Beach" }, text: { en: "A long curve of sand in the north with clear water and space to breathe." } },
          { name: { en: "Alegria Beach" }, text: { en: "Pale sand at the far northern tip of the island. Worth combining with a north-loop day." } },
        ],
      },
      {
        id: "things-to-do",
        title: { en: "Things to do" },
        body: {
          en: "Rent a scooter or hire a driver for a day and loop the island. Siargao's best sights are spread out, and the drive through palms and paddy fields is half the pleasure.",
        },
        items: [
          { name: { en: "Magpupungko Rock Pools" }, text: { en: "Natural tidal pools in Pilar that appear only at low tide. Check the tide table before you go." } },
          { name: { en: "Sugba Lagoon" }, text: { en: "A turquoise lagoon in the mangroves off Del Carmen, reached by boat. Paddleboard, swim and jump from the platform." } },
          { name: { en: "Maasin River" }, text: { en: "The leaning coconut palm and rope swing. Better from a small boat or paddleboard upstream." } },
          { name: { en: "Coconut palm viewpoint" }, text: { en: "The roadside lookout over an ocean of palms just outside General Luna. Go at golden hour." } },
          { name: { en: "Del Carmen mangroves" }, text: { en: "One of the largest contiguous mangrove forests in Mindanao. Explore by small boat or kayak." } },
        ],
      },
      {
        id: "surf",
        title: { en: "Surf" },
        body: {
          en: "Cloud 9 is the famous one: a heavy, hollow reef break that shows its best from roughly September to November, when it hosts an international surfing competition in most years. It is for experienced surfers only, and the reef is shallow.\n\nThe good news for everyone else is that the island has a surprising range of gentler waves. Most beginners learn at Jacking Horse right next to Cloud 9, or at Daku Reef and Guiwan by boat. Surf schools and coaches are everywhere in General Luna; a week of lessons will have most people standing up comfortably.",
        },
        items: [
          { name: { en: "Cloud 9" }, text: { en: "The flagship right-hand reef break, best on mid to high tide. Watch from the boardwalk tower if you're not surfing it." } },
          { name: { en: "Jacking Horse" }, text: { en: "Beginner-friendly waves a short paddle from shore near Cloud 9." } },
          { name: { en: "Quiksilver and Stimpy's" }, text: { en: "Offshore reef breaks reached by boat. For intermediate to advanced surfers." } },
          { name: { en: "Pacifico" }, text: { en: "An exposed reef break in the north that can work when the south is flat." } },
          { name: { en: "Daku Reef and Guiwan" }, text: { en: "Mellow, forgiving waves for learners and longboarders." } },
        ],
        insider: {
          type: "go-early",
          title: { en: "Dawn patrol" },
          body: { en: "Paddle out at first light. The wind is usually lighter, the water is glassier and the line-up at Cloud 9 is at its least crowded." },
        },
      },
      {
        id: "island-hopping",
        title: { en: "Island hopping" },
        body: {
          en: "The classic three-island trip — Naked, Daku and Guyam — leaves from General Luna's harbour and takes most of a day. It's simple and fun: swim, eat grilled fish on Daku, nap under the palms on Guyam.\n\nFor more space, book a private boat to Sugba Lagoon and the islands off Del Carmen, or go further south to Bucas Grande island and Sohoton Cove, a lagoon system with caves and jellyfish-filled lakes (access depends on season and local rules). It's a long day, but a memorable one.",
        },
        insider: {
          type: "skip-this",
          title: { en: "Skip the midday three-island run" },
          body: { en: "Go early, or go in reverse. Naked Island at noon has no shade and plenty of company." },
        },
      },
      {
        id: "food",
        title: { en: "Food" },
        body: {
          en: "Siargao's local food is about the sea. Look for kinilaw (raw fish with vinegar, calamansi and chilli), sinuglaw (kinilaw mixed with grilled pork belly), grilled fish and squid, and fresh coconut. Morning markets in Dapa and General Luna sell what the boats brought in.\n\nIn General Luna, the international influence is strong: excellent coffee, bowls and bakeries, wood-fired pizza, Mediterranean, Japanese and very good Filipino fusion. Quality is high but it changes quickly with the seasons, which is why we give current recommendations when you travel rather than a list here.",
        },
        items: [
          { name: { en: "Kinilaw" }, text: { en: "The island's signature: raw fish, vinegar, calamansi, onion, chilli. Best at lunch, with something cold." } },
          { name: { en: "Sinuglaw" }, text: { en: "Kinilaw with grilled pork belly. The local favourite." } },
          { name: { en: "Grilled seafood on Daku" }, text: { en: "Pick your catch and let the island cooks grill it." } },
        ],
      },
      {
        id: "restaurants",
        title: { en: "Restaurants" },
        body: {
          en: "Most of the island's restaurants line Tourism Road in General Luna and the road toward Cloud 9. You'll find relaxed open-air places under thatched roofs, garden restaurants lit with lanterns, small Filipino eateries (carinderias) serving dishes from pots at lunchtime, and a growing number of chef-led kitchens.\n\nFor dinner, book ahead in high season, especially in December, around Holy Week and during the surf competition. For lunch, follow the queue of locals to the carinderias.",
        },
        insider: {
          type: "local-favorite",
          title: { en: "Carinderia lunch" },
          body: { en: "Point at whatever looks good in the pots: adobo, grilled fish, vegetable stews. It costs a fraction of a café lunch." },
        },
      },
      {
        id: "nightlife",
        title: { en: "Nightlife" },
        body: {
          en: "Siargao's nightlife runs on a rota: different bars host the big night on different days of the week, so the crowd moves around General Luna together. Expect live music, DJs, beach bonfires and people still sandy from the day.\n\nIt's friendly rather than wild, and it winds down earlier than you'd think because everyone wants to surf in the morning. If you'd rather not hear it, stay in Catangnan, Malinao or further north.",
        },
      },
      {
        id: "wellness",
        title: { en: "Wellness" },
        body: {
          en: "General Luna has a strong wellness scene for an island this size: open-air yoga shalas with daily classes, breathwork, sound sessions and plunge pools, saunas and ice baths for post-surf recovery. Traditional Filipino hilot massage is widely available too, often in simple garden spaces.\n\nWe can build a few slower days around morning yoga, a massage and an afternoon on the water. After a week of surfing, your shoulders will thank you.",
        },
        insider: {
          type: "our-favorite",
          title: { en: "Hilot after surf" },
          body: { en: "Traditional Filipino massage with coconut oil, ideal after a few days of paddling." },
        },
      },
    ],
    insiders: [
      {
        type: "best-sunset",
        title: { en: "Cloud 9 boardwalk" },
        body: { en: "Watch the last surfers of the day from the end of the boardwalk while the sky turns pink over the reef." },
      },
      {
        type: "worth-the-detour",
        title: { en: "The north loop" },
        body: { en: "Pacifico, Burgos and Alegria in one day by scooter or with a driver. Rice fields, empty beaches and almost no traffic." },
      },
      {
        type: "inside-tip",
        title: { en: "Check the tide" },
        body: { en: "Magpupungko, Naked Island and several breaks depend on it. One tide app will save you a wasted trip." },
      },
      {
        type: "best-breakfast",
        title: { en: "Tourism Road" },
        body: { en: "Excellent coffee and big bowls after the morning surf. Go before 9am to get a table." },
      },
      {
        type: "go-early",
        title: { en: "Sugba Lagoon" },
        body: { en: "Arrive first and you'll have the lagoon almost to yourself for an hour." },
      },
    ],
    nearby: ["bohol", "camiguin", "cebu"],
    faqs: [
      {
        q: { en: "Is Siargao good for beginner surfers?" },
        a: { en: "Very. Jacking Horse, Daku Reef and Guiwan are gentle, and General Luna has many surf schools. Cloud 9 itself is for experienced surfers only." },
      },
      {
        q: { en: "When is the best time to visit Siargao?" },
        a: { en: "March to October is generally drier. The best swell for Cloud 9 arrives roughly September to November. November to January can be wet and windy on the Pacific coast." },
      },
      {
        q: { en: "How do I get to Siargao?" },
        a: { en: "Fly to Sayak Airport (IAO) from Manila, Cebu or Clark, then drive around 45 minutes to an hour to General Luna. Or fly to Surigao and take a fast craft to Dapa." },
      },
      {
        q: { en: "How many days do I need?" },
        a: { en: "Five to seven nights lets you surf, island hop, loop the island and still have lazy days." },
      },
      {
        q: { en: "Do I need a scooter?" },
        a: { en: "It helps, but if you're not confident on one, hire a driver. Roads are generally fine but can be slippery after rain." },
      },
      {
        q: { en: "Is Siargao good for families?" },
        a: { en: "Yes, for active families. Kids can learn to surf, and the island hopping is easy. Plan stays a little away from the nightlife." },
      },
    ],
    experienceCategories: ["surf", "island-escapes", "wellness", "nature-adventure", "food-culture", "honeymoons"],
  },

  // ───────────────────────────────────────────── BOHOL
  {
    slug: "bohol",
    name: "Bohol",
    nameLocal: { ru: "Бохоль", ar: "بوهول" },
    region: "visayas",
    coords: [9.8500, 124.1435],
    photo: {
      alt: {
        en: "Rounded Chocolate Hills in morning mist in Bohol",
        fr: "Les collines rondes des Chocolate Hills dans la brume du matin, à Bohol",
        es: "Las colinas redondeadas de las Chocolate Hills entre la bruma matinal de Bohol",
        ru: "Округлые Шоколадные холмы в утренней дымке на Бохоле",
        ar: "تلال الشوكولاتة المستديرة في ضباب الصباح في بوهول",
      },
      brief:
        "Chocolate Hills from a quiet vantage point at 6am: rows of rounded hills fading into mist, low golden side light, a single farmer's track between paddies. No crowds, no viewing deck railing. Mood: soft, strange, calm.",
      tone: "rice",
    },
    short: {
      en: "The Chocolate Hills, tiny tarsiers, a slow green river and the beaches of Panglao, all within an easy two hours of each other.",
      fr: "Les Chocolate Hills, les minuscules tarsiers, une rivière verte et paisible et les plages de Panglao, le tout à moins de deux heures les uns des autres.",
      es: "Las Chocolate Hills, los diminutos tarseros, un río verde y tranquilo y las playas de Panglao, todo a menos de dos horas entre sí.",
      ru: "Шоколадные холмы, крошечные долгопяты, тихая зелёная река и пляжи Панглао — всё в пределах двух часов друг от друга.",
      ar: "تلال الشوكولاتة وقرود الترسير الصغيرة ونهر أخضر هادئ وشواطئ بانغلاو، وكلها على بُعد ساعتين على الأكثر من بعضها.",
    },
    whyGo: {
      en: "For the easiest mix of beach, countryside and wildlife in the Philippines, with very short transfers.",
      fr: "Pour le mélange le plus simple de plage, de campagne et de faune des Philippines, avec des trajets très courts.",
      es: "Por la combinación más sencilla de playa, campo y fauna de Filipinas, con traslados muy cortos.",
      ru: "Ради самого удобного сочетания пляжа, сельских пейзажей и дикой природы на Филиппинах — с очень короткими переездами.",
      ar: "لأسهل مزيج من الشاطئ والريف والحياة البرية في الفلبين، مع تنقلات قصيرة جدًا.",
    },
    bestFor: {
      en: ["Families", "Countryside", "Diving", "First visits"],
      fr: ["Familles", "Campagne", "Plongée", "Premier voyage"],
      es: ["Familias", "Campo", "Buceo", "Primer viaje"],
      ru: ["Семьи", "Сельские пейзажи", "Дайвинг", "Первая поездка"],
      ar: ["العائلات", "الريف", "الغوص", "الزيارة الأولى"],
    },
    nights: "3–5",
    bestSeason: {
      en: "December to May",
      fr: "De décembre à mai",
      es: "De diciembre a mayo",
      ru: "С декабря по май",
      ar: "من ديسمبر إلى مايو",
    },
    intro: {
      en: "Bohol is the island we send people to when they want a bit of everything without long transfers. The Chocolate Hills — more than a thousand grassy domes that brown in the dry season — are an hour and a half from the beaches of Panglao. The Philippine tarsier, a palm-sized primate with enormous eyes, lives in protected forest in Corella. The Loboc River slides through jungle under a canopy of nipa palms. And Spanish-era stone churches, many rebuilt after the 2013 earthquake, mark almost every town.\n\nMost visitors base themselves on Panglao, a smaller island joined to Bohol by bridges, and do the countryside as a day trip. That works. But if you have time, a night or two inland or on the quieter east coast at Anda changes the feel of the trip completely.",
    },
    whoShouldVisit: {
      en: "Families with children of any age, first-time visitors, couples who want a mix of beach and sightseeing, and divers looking for easy, varied reefs. Less suited to anyone who wants wild, empty beaches all to themselves; Panglao's main beaches are developed.",
    },
    gettingThere: {
      en: "Bohol-Panglao International Airport (TAG) has direct flights from Manila (about 1 hour 20 minutes) and some international routes. From Cebu, fast ferries reach Tagbilaran port in roughly 2 hours, several times a day. The airport is around 15–20 minutes from Alona Beach. Ferries also connect Bohol with Siquijor, Dumaguete and Camiguin; schedules vary, so check close to travel.",
    },
    sections: [
      {
        id: "why",
        title: { en: "Why Bohol" },
        body: {
          en: "Bohol is the Philippines at a manageable scale. In three or four days you can see a geological oddity, a rare primate, a river cruise and some of the easiest diving in the Visayas, and still spend afternoons by the pool.\n\nIt's also well organised. Roads are good by island standards, the airport is close to the beaches, and the ferry to Cebu makes it easy to combine with other islands.",
        },
      },
      {
        id: "stay",
        title: { en: "Where to stay" },
        body: {
          en: "Panglao is the default; Anda and the countryside are the alternatives that reward more time.",
        },
        items: [
          { name: { en: "Alona Beach, Panglao" }, text: { en: "Busy and convenient, with dive centres and restaurants along the sand. Good for one or two nights." } },
          { name: { en: "Dumaluan and Bikini Beach, Panglao" }, text: { en: "Quieter stretches of pale sand on the south coast, with larger resorts." } },
          { name: { en: "North Panglao" }, text: { en: "Calmer areas around Doljo and Momo beaches, with sunset views." } },
          { name: { en: "Anda" }, text: { en: "The east coast: white-sand coves, cave pools and very few people. About 2–2.5 hours from Panglao." } },
          { name: { en: "Loboc and the countryside" }, text: { en: "Riverside and forest stays for a night away from the beach." } },
        ],
      },
      {
        id: "things-to-do",
        title: { en: "Things to do" },
        body: {
          en: "A classic countryside day covers the highlights in a loop from Panglao. With a private driver you can do it in the right order: hills early, tarsiers mid-morning, river at lunch.",
        },
        items: [
          { name: { en: "Chocolate Hills" }, text: { en: "Over 1,200 near-symmetrical hills around Carmen. Green after the rains, brown by April." } },
          { name: { en: "Tarsier sanctuary, Corella" }, text: { en: "Protected forest where tarsiers live wild. Quiet voices, no flash." } },
          { name: { en: "Loboc River" }, text: { en: "Floating restaurant cruises are popular; a paddleboard or kayak trip is quieter." } },
          { name: { en: "Baclayon Church" }, text: { en: "One of the oldest stone churches in the country, carefully restored after the 2013 earthquake." } },
          { name: { en: "Bilar man-made forest" }, text: { en: "A dense stretch of planted mahogany along the road. A good photo stop." } },
          { name: { en: "Hinagdanan Cave" }, text: { en: "A small cave pool on Panglao lit by holes in the roof." } },
        ],
        insider: {
          type: "go-early",
          title: { en: "Chocolate Hills at 6am" },
          body: { en: "The light is softer and the tour vans don't arrive until around nine." },
        },
      },
      {
        id: "beaches",
        title: { en: "Beaches" },
        body: {
          en: "Panglao has good beaches but not empty ones. For quieter sand, take a boat to the islands offshore or drive east to Anda.",
        },
        items: [
          { name: { en: "Alona Beach" }, text: { en: "The busy centre, best for an evening walk and easy access to boats." } },
          { name: { en: "Dumaluan Beach" }, text: { en: "Long, pale and calmer, with shallow water good for children." } },
          { name: { en: "Virgin Island" }, text: { en: "A sandbar off Panglao that appears at low tide. Usually part of a morning boat trip." } },
          { name: { en: "Anda's coves" }, text: { en: "Quinale and the small beaches around Anda: white sand and very few people." } },
        ],
      },
      {
        id: "diving",
        title: { en: "Diving and snorkelling" },
        body: {
          en: "Balicasag Island, around 30–45 minutes by boat from Panglao, is a marine sanctuary with walls, turtles and big schools of jacks. Snorkellers can see a lot from the surface; divers get some of the easiest wall dives in the region. Pamilacan Island, further out, is known for dolphin sightings on early-morning trips.\n\nThe classic morning: leave around 6am for dolphins near Pamilacan, snorkel at Balicasag, and stop at the Virgin Island sandbar on the way back.",
        },
      },
      {
        id: "food",
        title: { en: "Food" },
        body: {
          en: "Boholano food is home cooking: grilled fish, pork, rice and seasonal vegetables. Look for calamay, a sweet sticky treat of coconut and sugar packed in coconut shells, and peanut kisses, small peanut cookies shaped like the Chocolate Hills. Panglao has a broad range of restaurants around Alona and the main road; in the countryside, eat at small local places along the river.",
        },
      },
    ],
    insiders: [
      {
        type: "skip-this",
        title: { en: "Skip roadside tarsier attractions" },
        body: { en: "Tarsiers are stressed by handling and light. Visit the protected sanctuary in Corella instead." },
      },
      {
        type: "worth-the-detour",
        title: { en: "Anda" },
        body: { en: "Two hours east and a different Bohol: white coves, cave pools and quiet evenings." },
      },
      {
        type: "go-early",
        title: { en: "Dolphins off Pamilacan" },
        body: { en: "Sightings are most likely early in the morning. Leave Panglao by 6am." },
      },
      {
        type: "local-favorite",
        title: { en: "Calamay from Jagna" },
        body: { en: "The coconut-shell sweet from the south coast. Buy some for the flight home." },
      },
    ],
    nearby: ["cebu", "siquijor", "camiguin", "dumaguete"],
    faqs: [
      {
        q: { en: "How do I get from Cebu to Bohol?" },
        a: { en: "By fast ferry from Cebu City to Tagbilaran, around 2 hours, several times a day." },
      },
      {
        q: { en: "Can I see the Chocolate Hills on a day trip?" },
        a: { en: "Yes. A countryside loop from Panglao covers the hills, tarsiers and river in one long day." },
      },
      {
        q: { en: "Is Bohol good for families?" },
        a: { en: "It's one of the best islands for families: short drives, gentle beaches and lots to see." },
      },
      {
        q: { en: "When are the Chocolate Hills brown?" },
        a: { en: "Towards the end of the dry season, usually around March to May. They're green for much of the rest of the year." },
      },
    ],
    experienceCategories: ["family", "island-escapes", "diving", "nature-adventure", "food-culture"],
  },

  // ───────────────────────────────────────────── SIQUIJOR
  {
    slug: "siquijor",
    name: "Siquijor",
    nameLocal: { ru: "Сикихор", ar: "سيكيهور" },
    region: "visayas",
    coords: [9.1999, 123.5952],
    photo: {
      alt: {
        en: "Turquoise tiers of Cambugahay Falls in Siquijor's forest",
        fr: "Les vasques turquoise de la cascade de Cambugahay, dans la forêt de Siquijor",
        es: "Las pozas turquesa de la cascada de Cambugahay, en el bosque de Siquijor",
        ru: "Бирюзовые каскады водопада Камбугахай в лесу Сикихора",
        ar: "شلالات كامبوغاهاي الفيروزية المتدرجة في غابة سيكيهور",
      },
      brief:
        "Cambugahay Falls at 7:30am before the crowds: three turquoise tiers, soft green light through the canopy, a single bamboo raft resting on the bank. Mood: secret, fresh, gentle.",
      tone: "jungle",
    },
    short: {
      en: "A small island with an outsized reputation for folk healers, plus turquoise waterfalls, a quiet ring road and sunsets over empty beaches.",
      fr: "Une petite île à la réputation démesurée pour ses guérisseurs, avec des cascades turquoise, une route côtière paisible et des couchers de soleil sur des plages vides.",
      es: "Una isla pequeña con una gran fama de curanderos, cascadas turquesa, una carretera costera tranquila y atardeceres sobre playas vacías.",
      ru: "Небольшой остров с громкой славой народных целителей, бирюзовые водопады, тихая кольцевая дорога и закаты над пустыми пляжами.",
      ar: "جزيرة صغيرة ذات شهرة كبيرة بمعالجيها الشعبيين، مع شلالات فيروزية وطريق ساحلي هادئ وغروب فوق شواطئ خالية.",
    },
    whyGo: {
      en: "To slow right down on an island you can circle in a day and still not want to leave.",
      fr: "Pour ralentir vraiment sur une île dont on fait le tour en une journée, et qu'on n'a pourtant pas envie de quitter.",
      es: "Para bajar el ritmo de verdad en una isla que se recorre en un día y de la que aun así no quieres irte.",
      ru: "Чтобы по-настоящему замедлиться на острове, который можно объехать за день, — и всё равно не хотеть уезжать.",
      ar: "لتبطئ إيقاعك حقًا في جزيرة يمكنك الدوران حولها في يوم واحد ومع ذلك لا تريد مغادرتها.",
    },
    bestFor: {
      en: ["Slow travel", "Waterfalls", "Couples", "Culture"],
      fr: ["Voyage lent", "Cascades", "Couples", "Culture"],
      es: ["Viaje pausado", "Cascadas", "Parejas", "Cultura"],
      ru: ["Неспешные поездки", "Водопады", "Пары", "Культура"],
      ar: ["السفر الهادئ", "الشلالات", "الأزواج", "الثقافة"],
    },
    nights: "2–4",
    bestSeason: {
      en: "December to May",
      fr: "De décembre à mai",
      es: "De diciembre a mayo",
      ru: "С декабря по май",
      ar: "من ديسمبر إلى مايو",
    },
    intro: {
      en: "For generations, Filipinos have spoken about Siquijor in a lowered voice. It's the island of mananambal, the traditional folk healers who work with herbs, oils and prayer, and of stories about love potions and spells. The reputation kept tourism away for a long time, which is partly why the island still feels so unhurried.\n\nWhat you find is gentle: a 70-odd-kilometre ring road through villages and forest, waterfalls the colour of mouthwash, Spanish-era churches, white-sand coves and a west-facing coast made for sunsets. Rent a scooter or hire a driver, loop the island in a day, and spend the rest of your time doing very little.",
    },
    whoShouldVisit: {
      en: "Couples, slow travellers, anyone curious about Filipino folk culture, and people combining Dumaguete, Apo Island and Bohol. Less suited to anyone who wants big resorts, nightlife or a wide choice of restaurants.",
    },
    gettingThere: {
      en: "The usual route is by fast craft from Dumaguete, around 1–1.5 hours to Siquijor port or Larena. Dumaguete's airport (DGT) has flights from Manila and Cebu. There are also ferries from Tagbilaran (Bohol) and Cebu, which take longer; schedules change, so check close to travel. Most accommodation is in San Juan, around 20–30 minutes by road from the port.",
    },
    sections: [
      {
        id: "why",
        title: { en: "Why Siquijor" },
        body: {
          en: "Siquijor sits in the sweet spot between easy and undiscovered. It's well connected to Dumaguete and Bohol, it has enough good places to stay, and the roads are quiet enough to explore by scooter. Yet it still feels like a rural island where the main event is the evening light.\n\nIt's also small. You can see everything in a day, which leaves the rest of your stay for swimming, reading and long dinners.",
        },
      },
      {
        id: "stay",
        title: { en: "Where to stay" },
        body: {
          en: "Most places to stay are along the west and southwest coasts, where the sunsets are.",
        },
        items: [
          { name: { en: "San Juan" }, text: { en: "The main hub for small resorts, cafés and dive centres. Best for first visits." } },
          { name: { en: "Siquijor town and Larena" }, text: { en: "The port towns. Practical, less scenic." } },
          { name: { en: "Lazi and the south" }, text: { en: "Quieter, close to Cambugahay Falls and the old convent." } },
          { name: { en: "Maria and Salagdoong" }, text: { en: "The east coast: very few visitors, rocky coves and forest." } },
        ],
      },
      {
        id: "things-to-do",
        title: { en: "Things to do" },
        body: {
          en: "The island loop is the classic day. Start early, go anticlockwise or clockwise, and stop wherever you like.",
        },
        items: [
          { name: { en: "Cambugahay Falls" }, text: { en: "Three tiers of turquoise pools near Lazi. Rope swings and bamboo rafts. Go early." } },
          { name: { en: "Lazi Church and Convent" }, text: { en: "A coral-stone church finished in 1884 and a vast wooden-floored convent completed in the 1890s, often called one of the largest in Asia." } },
          { name: { en: "Old Enchanted Balete Tree" }, text: { en: "A huge banyan tree, reputedly several centuries old, with a spring and small fish pool at its roots." } },
          { name: { en: "Salagdoong Beach" }, text: { en: "Cliff-jumping platforms and clear water on the east coast." } },
          { name: { en: "Mount Bandilaan" }, text: { en: "The island's highest point, with forest trails and a view." } },
          { name: { en: "Tulapos Marine Sanctuary" }, text: { en: "Coral and fish just off the north-east coast; good snorkelling." } },
        ],
      },
      {
        id: "beaches",
        title: { en: "Beaches" },
        body: {
          en: "Siquijor's beaches are small and peaceful rather than spectacular. The west coast is best for swimming and sunsets.",
        },
        items: [
          { name: { en: "Paliton Beach" }, text: { en: "A short stretch of white sand under palms. The island's sunset spot." } },
          { name: { en: "Kagusuan Beach" }, text: { en: "Down a flight of steps in the south, rocky with small pockets of sand. Feels private." } },
          { name: { en: "Salagdoong" }, text: { en: "The east-coast beach for cliff jumping and snorkelling." } },
        ],
      },
      {
        id: "healers",
        title: { en: "Healers and folk culture" },
        body: {
          en: "Siquijor's mananambal (folk healers) still practise across the island, mostly for local people. Some will see visitors for a traditional treatment such as bolo-bolo, which uses a glass of water and a bamboo straw. Approach it with respect and curiosity rather than as a show.\n\nEvery Holy Week, healers gather in the hills to prepare potions of herbs, roots and oils, a ritual that has drawn more interest from visitors in recent years. If you're there at that time, ask us how to go respectfully.",
        },
      },
      {
        id: "diving",
        title: { en: "Diving" },
        body: {
          en: "Siquijor's reefs are healthy and rarely busy, with walls, macro life and the occasional turtle close to shore. San Juan has several dive centres. Apo Island, one of the country's best-known marine sanctuaries, is reachable by boat from the island or from Dumaguete.",
        },
      },
    ],
    insiders: [
      {
        type: "go-early",
        title: { en: "Cambugahay at opening" },
        body: { en: "By late morning the falls fill with day-trippers from Dumaguete. Before 8am you'll share them with a few locals." },
      },
      {
        type: "best-sunset",
        title: { en: "Paliton Beach" },
        body: { en: "Small, palm-lined and facing due west. Bring a cold drink and stay until dark." },
      },
      {
        type: "inside-tip",
        title: { en: "Bring cash" },
        body: { en: "ATMs are limited and cards are not always accepted. Arrive with enough pesos for your stay." },
      },
      {
        type: "worth-the-detour",
        title: { en: "Lazi Convent" },
        body: { en: "Walk the long wooden halls of the old convent. Quietly impressive." },
      },
    ],
    nearby: ["dumaguete", "bohol", "negros", "cebu"],
    faqs: [
      {
        q: { en: "How do I get to Siquijor?" },
        a: { en: "Fly to Dumaguete, then take a fast craft of around 1–1.5 hours. Ferries also run from Bohol and Cebu." },
      },
      {
        q: { en: "Is Siquijor safe?" },
        a: { en: "Yes. Its reputation for witchcraft is folklore; the island is peaceful and welcoming." },
      },
      {
        q: { en: "How many days do I need?" },
        a: { en: "Two nights is enough to see the island; three or four lets you actually relax." },
      },
      {
        q: { en: "Should I rent a scooter?" },
        a: { en: "If you're confident, yes. Roads are quiet. Otherwise a driver with a tricycle or van is easy to arrange." },
      },
    ],
    experienceCategories: ["off-the-beaten-path", "wellness", "island-escapes", "food-culture", "diving"],
  },

  // ───────────────────────────────────────────── BORACAY
  {
    slug: "boracay",
    name: "Boracay",
    nameLocal: { ru: "Боракай", ar: "بوراكاي" },
    region: "visayas",
    coords: [11.9674, 121.9248],
    photo: {
      alt: {
        en: "Paraw sailboats on calm water off White Beach, Boracay, at sunset",
        fr: "Voiliers paraw sur une mer calme au large de White Beach, à Boracay, au coucher du soleil",
        es: "Veleros paraw sobre el agua en calma frente a White Beach, en Boracay, al atardecer",
        ru: "Парусники парао на спокойной воде у Уайт-Бич на Боракае на закате",
        ar: "قوارب باراو الشراعية على مياه هادئة قبالة الشاطئ الأبيض في بوراكاي عند الغروب",
      },
      brief:
        "White Beach at 5:45pm from the waterline: two paraw sailboats with patched sails in silhouette, wet sand reflecting orange sky, a few figures walking in the shallows. Mood: warm, social, end of day.",
      tone: "dusk",
    },
    short: {
      en: "Four kilometres of powder-white sand on a small island built for easy holidays: sunset sails, good food, kitesurfing and very short distances.",
      fr: "Quatre kilomètres de sable blanc et fin sur une petite île faite pour les vacances faciles : voile au couchant, bonne cuisine, kitesurf et distances très courtes.",
      es: "Cuatro kilómetros de arena blanca y fina en una isla pequeña pensada para unas vacaciones fáciles: velero al atardecer, buena comida, kitesurf y distancias cortas.",
      ru: "Четыре километра белого, как пудра, песка на небольшом острове для лёгкого отдыха: закатные парусники, хорошая еда, кайтсёрфинг и всё рядом.",
      ar: "أربعة كيلومترات من الرمال البيضاء الناعمة في جزيرة صغيرة مهيأة لعطلة سهلة: إبحار عند الغروب وطعام جيد وركوب الأمواج بالطائرة الورقية ومسافات قصيرة جدًا.",
    },
    whyGo: {
      en: "Boracay is busy, but its sand and sunsets are still among the best in Asia, and nothing is easier.",
      fr: "Boracay est fréquentée, mais son sable et ses couchers de soleil restent parmi les plus beaux d'Asie, et rien n'est plus simple.",
      es: "Boracay tiene mucha gente, pero su arena y sus atardeceres siguen entre los mejores de Asia, y nada es más fácil.",
      ru: "На Боракае многолюдно, но песок и закаты здесь по-прежнему одни из лучших в Азии, а проще отдыха не придумать.",
      ar: "بوراكاي مزدحمة، لكن رمالها وغروبها ما زالا من الأجمل في آسيا، ولا شيء أسهل منها.",
    },
    bestFor: {
      en: ["Beach time", "Families", "Kitesurfing", "Short breaks"],
      fr: ["Plage", "Familles", "Kitesurf", "Courts séjours"],
      es: ["Playa", "Familias", "Kitesurf", "Escapadas cortas"],
      ru: ["Пляжный отдых", "Семьи", "Кайтсёрфинг", "Короткие поездки"],
      ar: ["الشاطئ", "العائلات", "ركوب الأمواج بالطائرة الورقية", "الإقامات القصيرة"],
    },
    nights: "3–5",
    bestSeason: {
      en: "November to May",
      fr: "De novembre à mai",
      es: "De noviembre a mayo",
      ru: "С ноября по май",
      ar: "من نوفمبر إلى مايو",
    },
    intro: {
      en: "Boracay is the Philippines' most famous beach island and it knows it. White Beach is busy, lined with restaurants and hotels, and the island was closed for six months in 2018 for a clean-up that brought stricter rules on building, drinking and smoking on the sand. The result is calmer and cleaner than it was, though still far from quiet. What hasn't changed is the sand, which stays cool underfoot, and a west-facing sunset with paraw sailboats crossing it every evening. Stay at the quieter ends of the island, plan around the season, and it's an easy, happy place.",
    },
    whoShouldVisit: {
      en: "Families, groups of friends, couples who want ease over seclusion, kitesurfers in the dry season and anyone ending a longer trip with a few simple beach days. Not for travellers who want to feel they've found somewhere undiscovered.",
    },
    gettingThere: {
      en: "Fly to Caticlan (MPH), around 1 hour from Manila, then take a short transfer to the jetty and a boat of roughly 15 minutes to Cagban port on Boracay. Larger planes and some international flights land at Kalibo (KLO), roughly 1.5–2 hours by road from Caticlan. Environmental and terminal fees apply at the jetty.",
    },
    sections: [
      {
        id: "stay",
        title: { en: "Where to stay" },
        body: {
          en: "White Beach is divided into Stations 1, 2 and 3. Station 1 has the widest sand and the larger hotels; Station 2 is the busy centre; Station 3 is quieter and simpler. Away from White Beach, Diniwid in the north-west and the coves around the island's northern end are calmer, and the east coast facing Bulabog is where kitesurfers stay.",
        },
      },
      {
        id: "things-to-do",
        title: { en: "Things to do" },
        body: {
          en: "Take a paraw sail at sunset, the island's signature hour. Walk or cycle to Puka Beach in the north for a quieter swim. Snorkel on an island-hopping trip around Crocodile Island and the nearby reefs. And from roughly November to April, when the northeast wind blows, Bulabog Beach becomes one of Asia's busiest kitesurfing spots, with schools for beginners.",
        },
        insider: {
          type: "best-sunset",
          title: { en: "From a paraw" },
          body: { en: "Book the last sail of the afternoon and watch the sun set from the water rather than the crowded sand." },
        },
      },
      {
        id: "when",
        title: { en: "When to go" },
        body: {
          en: "November to May is best: the northeast wind (amihan) keeps White Beach calm and clear. From June to October the southwest monsoon (habagat) can bring waves, seaweed and wind to White Beach, while Bulabog on the other side becomes the calmer swimming beach. Christmas, Chinese New Year and Holy Week are extremely busy.",
        },
      },
    ],
    insiders: [
      {
        type: "go-early",
        title: { en: "White Beach at 7am" },
        body: { en: "Before the beach fills up, the sand is empty and the water is flat. Swim, then breakfast." },
      },
      {
        type: "skip-this",
        title: { en: "Skip Station 2 for sleeping" },
        body: { en: "It's the noisiest part of the beach. Stay at Station 1, Diniwid or the north end and visit for dinner." },
      },
    ],
    nearby: ["palawan", "cebu", "negros"],
    faqs: [
      {
        q: { en: "Should I fly to Caticlan or Kalibo?" },
        a: { en: "Caticlan, if flights fit your plan; it's minutes from the jetty. Kalibo means 1.5–2 hours more by road." },
      },
      {
        q: { en: "Is Boracay too crowded?" },
        a: { en: "In peak weeks, it's busy. Staying at the quieter ends, getting up early and avoiding major holidays make a big difference." },
      },
      {
        q: { en: "Is Boracay good for families?" },
        a: { en: "Very. Short distances, shallow water on White Beach in the dry season and plenty of food options." },
      },
    ],
    experienceCategories: ["island-escapes", "family", "honeymoons", "luxury"],
  },

  // ───────────────────────────────────────────── CEBU
  {
    slug: "cebu",
    name: "Cebu",
    nameLocal: { ru: "Себу", ar: "سيبو" },
    region: "visayas",
    coords: [10.3157, 123.8854],
    photo: {
      alt: {
        en: "Whole roast lechon being carved at a market in Cebu",
        fr: "Lechon entier découpé sur un marché de Cebu",
        es: "Un lechón entero trinchado en un mercado de Cebu",
        ru: "Целого запечённого поросёнка-лечон разделывают на рынке в Себу",
        ar: "شواء لتشون كامل يُقطَّع في سوق في سيبو",
      },
      brief:
        "Tight shot at a lechon stall around 10am: crackling golden skin being chopped with a cleaver, steam, hands, banana leaves, a queue of locals blurred behind. Warm market light. Mood: appetite, noise, real life.",
      tone: "sand",
    },
    short: {
      en: "The country's oldest city and the busiest hub in the Visayas, with the best lechon in the Philippines and waterfalls, whale sharks and reefs a few hours south.",
      fr: "La plus ancienne ville du pays et la grande plaque tournante des Visayas : le meilleur lechon des Philippines, et des cascades et des récifs à quelques heures au sud.",
      es: "La ciudad más antigua del país y el gran centro de las Visayas: el mejor lechón de Filipinas, y cascadas y arrecifes a pocas horas al sur.",
      ru: "Старейший город страны и главный узел Висайских островов: лучший лечон на Филиппинах, а в нескольких часах к югу — водопады и рифы.",
      ar: "أقدم مدينة في البلاد والمركز الأكثر حركة في جزر فيساياس، مع أفضل لتشون في الفلبين، وشلالات وشعاب مرجانية على بُعد ساعات قليلة جنوبًا.",
    },
    whyGo: {
      en: "Cebu connects to almost everywhere in the Visayas, and it's worth a few days in its own right.",
      fr: "Cebu dessert presque toutes les Visayas, et mérite quelques jours pour elle-même.",
      es: "Cebu conecta con casi todas las Visayas, y merece unos días por sí misma.",
      ru: "Из Себу можно добраться почти куда угодно на Висайях, и сам остров стоит нескольких дней.",
      ar: "سيبو متصلة بمعظم جزر فيساياس تقريبًا، وتستحق بضعة أيام لذاتها.",
    },
    bestFor: {
      en: ["Food", "Waterfalls", "Diving", "Island connections"],
      fr: ["Gastronomie", "Cascades", "Plongée", "Correspondances"],
      es: ["Gastronomía", "Cascadas", "Buceo", "Conexiones"],
      ru: ["Еда", "Водопады", "Дайвинг", "Пересадки"],
      ar: ["الطعام", "الشلالات", "الغوص", "الربط بين الجزر"],
    },
    nights: "2–5",
    bestSeason: {
      en: "December to May",
      fr: "De décembre à mai",
      es: "De diciembre a mayo",
      ru: "С декабря по май",
      ar: "من ديسمبر إلى مايو",
    },
    intro: {
      en: "Cebu is where the Philippines as a Spanish colony began: Magellan landed on Mactan in 1521, and Cebu City was founded in 1565, making it the oldest city in the country. Today it's a busy, sprawling metropolis and the main gateway to the central islands, with direct international flights and ferries to Bohol, Siquijor, Leyte and beyond.\n\nMost travellers pass through. The ones who stop a few days find a very good food city, a long, mountainous island with waterfalls and canyons in the south, and some of the country's most accessible diving in Moalboal and Malapascua. Think of Cebu as two trips: the city for a night or two, then the island beyond it.",
    },
    whoShouldVisit: {
      en: "Food lovers, divers, active travellers who want canyoneering and waterfalls, and anyone routing through the Visayas. Also families who want a resort on Mactan near the airport. Less suited to travellers who only want a quiet beach: the best beaches are on the islands around Cebu rather than near the city.",
    },
    gettingThere: {
      en: "Mactan-Cebu International Airport (CEB) has direct international flights from several cities in Asia, and domestic flights to most islands. From Manila it's about 1 hour 20 minutes. The airport is on Mactan Island, roughly 30–60 minutes from central Cebu City depending on traffic. Fast ferries leave from Cebu City's port to Bohol (about 2 hours), Dumaguete, Siquijor and other islands.",
    },
    sections: [
      {
        id: "why",
        title: { en: "Why Cebu" },
        body: {
          en: "Cebu is the most practical hub in the country, and that's a real advantage. It cuts out Manila connections for much of the Visayas and Mindanao, and its long island has a lot to do within a few hours' drive.\n\nThe city itself is not beautiful in the obvious way, and traffic can be heavy. But it has history, very good food and a confident local identity. Cebuanos are proud of their island and their language, and it shows.",
        },
      },
      {
        id: "stay",
        title: { en: "Where to stay" },
        body: {
          en: "Your base depends on why you're here.",
        },
        items: [
          { name: { en: "Mactan Island" }, text: { en: "Beach resorts near the airport. Ideal for the first or last night of a trip, or for families." } },
          { name: { en: "Cebu City: IT Park and Lahug" }, text: { en: "Modern hotels near restaurants and cafés. Good for a city night." } },
          { name: { en: "Moalboal" }, text: { en: "Around 3 hours south-west: sardines, turtles and Kawasan Falls nearby." } },
          { name: { en: "Malapascua" }, text: { en: "Small island off the northern tip, around 4 hours plus a boat. Thresher sharks." } },
          { name: { en: "Bantayan Island" }, text: { en: "Flat, quiet and white-sanded, off the north-west coast by ferry." } },
        ],
      },
      {
        id: "city",
        title: { en: "Cebu City" },
        body: {
          en: "The historic centre is compact enough to walk in a morning. Start at Magellan's Cross, the wooden cross said to contain fragments of the one planted in 1521, then step into the Basilica Minore del Santo Niño, home to the country's oldest Catholic relic. Fort San Pedro, a small triangular Spanish fort, is a short walk away.\n\nFrom there, walk Colon Street, the oldest street in the country, and Carbon Market, the city's oldest and largest public market, for fruit, dried fish and everyday life. In the hills above the city, the Taoist Temple and the viewpoints of Busay look over the whole metro.",
        },
        insider: {
          type: "inside-tip",
          title: { en: "Sinulog" },
          body: { en: "Cebu's biggest festival takes place around the third Sunday of January. Spectacular, and hotels book out months ahead." },
        },
      },
      {
        id: "food",
        title: { en: "Food" },
        body: {
          en: "Cebu claims the best lechon in the Philippines, and most Filipinos agree. Whole pigs are stuffed with lemongrass, garlic and spring onion, then roasted over charcoal until the skin shatters. You don't need sauce; that's the point.\n\nBeyond lechon, eat sutukil on Mactan (sugba, tuwa, kilaw: grilled, soup, raw), puso (rice cooked inside a woven coconut-leaf pouch), ngohiong (a Cebuano-Chinese spring roll), and dried mangoes, which the island is famous for.",
        },
        items: [
          { name: { en: "Lechon" }, text: { en: "Look for it in Carcar and Talisay, south of the city, and at stalls across town." } },
          { name: { en: "Sutukil" }, text: { en: "Choose your fish and decide how to have it: grilled, in soup or as kinilaw." } },
          { name: { en: "Puso" }, text: { en: "Hanging rice, sold by street grills and eaten with your hands." } },
          { name: { en: "Ngohiong" }, text: { en: "A five-spice spring roll, a Cebu speciality." } },
          { name: { en: "Dried mangoes" }, text: { en: "Buy them at the airport or at markets to take home." } },
        ],
        insider: {
          type: "local-favorite",
          title: { en: "Carcar" },
          body: { en: "A heritage town around an hour south, known for lechon, chicharon and old ancestral houses." },
        },
      },
      {
        id: "south",
        title: { en: "South Cebu" },
        body: {
          en: "The southern half of the island is mountains, rivers and reefs. A loop south takes you through Carcar, over to the west coast and down to Moalboal and Badian.",
        },
        items: [
          { name: { en: "Kawasan Falls" }, text: { en: "Turquoise river pools in Badian. Canyoneering from upstream ends here: jumps, swims and scrambles." } },
          { name: { en: "Moalboal" }, text: { en: "The sardine run, turtles and good diving just off the shore." } },
          { name: { en: "Osmeña Peak" }, text: { en: "Cebu's highest point, with jagged hills and sunrise views. A short hike." } },
          { name: { en: "Tumalog Falls" }, text: { en: "A thin, mossy curtain of water near Oslob." } },
        ],
      },
      {
        id: "diving",
        title: { en: "Diving" },
        body: {
          en: "Cebu is one of the best-placed islands in the country for diving. Moalboal has walls, turtles and a sardine shoal you can snorkel from the beach; Malapascua is one of the few places in the world where thresher sharks are seen regularly; and Mactan has easy reef dives close to the airport.",
        },
      },
      {
        id: "whale-sharks",
        title: { en: "About Oslob" },
        body: {
          en: "In Oslob, in the far south, whale sharks are fed by fishermen so tourists can swim with them. It's popular, but feeding changes the animals' natural behaviour, and many marine scientists and conservationists question it. We don't include it in our trips.\n\nFor whale sharks in the wild, consider Donsol (seasonal, roughly December to May) or simply enjoy what Cebu's reefs do on their own.",
        },
        insider: {
          type: "skip-this",
          title: { en: "Skip Oslob, try canyoneering" },
          body: { en: "Spend the same morning jumping into turquoise pools on the way to Kawasan Falls." },
        },
      },
    ],
    insiders: [
      {
        type: "go-early",
        title: { en: "Kawasan Falls" },
        body: { en: "Arrive by 7am. Canyoneering groups reach the lower falls from late morning." },
      },
      {
        type: "our-favorite",
        title: { en: "A lechon lunch in Carcar" },
        body: { en: "Eat it fresh off the spit. That's the whole tip." },
      },
      {
        type: "worth-the-detour",
        title: { en: "Bantayan Island" },
        body: { en: "Flat, white and quiet, with very little development. A few days of doing nothing." },
      },
      {
        type: "inside-tip",
        title: { en: "Beat the traffic" },
        body: { en: "Avoid crossing Cebu City between 7–9am and 4–7pm. A 30-minute drive can easily double." },
      },
    ],
    nearby: ["moalboal", "malapascua", "bohol", "siquijor", "dumaguete"],
    faqs: [
      {
        q: { en: "Is Cebu worth visiting or just a hub?" },
        a: { en: "Both. Spend at least a night for the food and history, then go south or north for the island itself." },
      },
      {
        q: { en: "How far is Moalboal from Cebu City?" },
        a: { en: "Around 3 hours by road, depending on traffic." },
      },
      {
        q: { en: "Are there international flights to Cebu?" },
        a: { en: "Yes. Cebu has direct international flights from several cities in Asia, which can save a connection in Manila." },
      },
      {
        q: { en: "Do you recommend Oslob whale sharks?" },
        a: { en: "No. The sharks are fed to keep them there. We suggest Donsol in season or other wildlife experiences." },
      },
      {
        q: { en: "Where is the best beach near Cebu City?" },
        a: { en: "Mactan has resort beaches, but for real beaches we'd go to Bantayan, Malapascua or Bohol." },
      },
    ],
    experienceCategories: ["food-culture", "diving", "nature-adventure", "family", "island-escapes"],
  },

  // ───────────────────────────────────────────── CAMIGUIN
  {
    slug: "camiguin",
    name: "Camiguin",
    nameLocal: { ru: "Камигин", ar: "كاميغين" },
    region: "mindanao",
    coords: [9.1732, 124.7299],
    photo: {
      alt: {
        en: "White Island sandbar with Camiguin's volcanoes behind it",
        fr: "Le banc de sable de White Island, avec les volcans de Camiguin en arrière-plan",
        es: "El banco de arena de White Island con los volcanes de Camiguin al fondo",
        ru: "Песчаная коса Уайт-Айленд на фоне вулканов Камигина",
        ar: "شريط رملي في الجزيرة البيضاء وخلفه براكين كاميغين",
      },
      brief:
        "Low drone or boat-level shot of White Island at 6:30am: a bare crescent of sand, still water, Mount Hibok-Hibok and its neighbours in soft cloud behind. One small bangka pulled up on the sand. Mood: early, elemental, empty.",
      tone: "stone",
    },
    short: {
      en: "A small, round volcanic island off northern Mindanao with seven volcanoes, hot and cold springs, waterfalls and a white sandbar facing the peaks.",
      fr: "Une petite île volcanique ronde au large du nord de Mindanao : sept volcans, des sources chaudes et froides, des cascades et un banc de sable blanc face aux sommets.",
      es: "Una pequeña isla volcánica y redonda frente al norte de Mindanao: siete volcanes, fuentes termales y frías, cascadas y un banco de arena blanca frente a los picos.",
      ru: "Небольшой круглый вулканический остров у северного Минданао: семь вулканов, горячие и холодные источники, водопады и белая песчаная коса напротив вершин.",
      ar: "جزيرة بركانية صغيرة ومستديرة قبالة شمال مينداناو، فيها سبعة براكين وينابيع حارة وباردة وشلالات وشريط رملي أبيض يواجه القمم.",
    },
    whyGo: {
      en: "For a volcanic island you can circle in a morning and a pace that feels decades behind the rest of the country.",
      fr: "Pour une île volcanique dont on fait le tour en une matinée, et un rythme qui semble avoir des décennies de retard.",
      es: "Por una isla volcánica que se recorre en una mañana y un ritmo que parece de otra época.",
      ru: "Ради вулканического острова, который можно объехать за утро, и ритма жизни, отставшего от остальной страны на десятилетия.",
      ar: "من أجل جزيرة بركانية يمكنك الدوران حولها في صباح واحد، وإيقاع حياة يبدو متأخرًا عقودًا عن بقية البلاد.",
    },
    bestFor: {
      en: ["Volcanoes", "Hot springs", "Slow travel", "Families"],
      fr: ["Volcans", "Sources chaudes", "Voyage lent", "Familles"],
      es: ["Volcanes", "Aguas termales", "Viaje pausado", "Familias"],
      ru: ["Вулканы", "Горячие источники", "Неспешные поездки", "Семьи"],
      ar: ["البراكين", "الينابيع الحارة", "السفر الهادئ", "العائلات"],
    },
    nights: "2–4",
    bestSeason: {
      en: "March to June",
      fr: "De mars à juin",
      es: "De marzo a junio",
      ru: "С марта по июнь",
      ar: "من مارس إلى يونيو",
    },
    intro: {
      en: "Camiguin is about 64 kilometres around, which means you can loop it on a single coastal road in a couple of hours, though it's better done slowly over a day. It was shaped by volcanoes, including Hibok-Hibok, which is still active and last erupted in the early 1950s. An earlier eruption in 1871 sank part of a town; a large white cross in the sea now marks the Sunken Cemetery. In between are waterfalls, cold springs, hot springs, lanzones orchards and a pace of life that hasn't changed much in a long time.",
    },
    whoShouldVisit: {
      en: "Slow travellers, families, hikers and anyone combining Bohol or Siargao with northern Mindanao. Less suited to people who want polished resorts or long, white-sand beaches; most of Camiguin's coast is dark volcanic sand.",
    },
    gettingThere: {
      en: "The main route is by ferry from Balingoan port in Misamis Oriental, about an hour to Benoni on Camiguin. Balingoan is roughly 2 hours by road from Laguindingan Airport (CGY), which serves Cagayan de Oro with flights from Manila and Cebu. There are also seasonal ferries from Jagna on Bohol, around 3–4 hours, and limited direct flights from Cebu to Camiguin's small airport. Schedules change, so check close to travel.",
    },
    sections: [
      {
        id: "things-to-do",
        title: { en: "Things to do" },
        body: {
          en: "Take a boat at dawn to White Island, a bare sandbar a short ride from Mambajao with the volcanoes as a backdrop. Swim at Katibawasan Falls, a tall, thin fall into a cold pool, and walk to Tuasan Falls. Soak in Ardent Hot Springs in the evening, and visit the Sunken Cemetery at sunset. Experienced hikers can climb Hibok-Hibok with a registered guide and permit; it's a steep day.",
        },
        items: [
          { name: { en: "White Island" }, text: { en: "Go at sunrise. The sand has no shade at all by 10am." } },
          { name: { en: "Mantigue Island" }, text: { en: "A small forested island with a marine sanctuary and good snorkelling." } },
          { name: { en: "Old Guiob Church ruins" }, text: { en: "Coral-stone walls left after the 1871 eruption, now covered in moss." } },
        ],
      },
      {
        id: "food",
        title: { en: "Food" },
        body: {
          en: "Camiguin is known for lanzones, a sweet, translucent fruit celebrated every October with the Lanzones Festival. Also look for pastel, a soft bun filled with custard, which visitors carry home by the box.",
        },
      },
    ],
    insiders: [
      {
        type: "go-early",
        title: { en: "White Island at sunrise" },
        body: { en: "The light on the volcanoes is best, and the sandbar is empty." },
      },
      {
        type: "best-sunset",
        title: { en: "Sunken Cemetery" },
        body: { en: "The cross in the water catches the last light. Quiet and moving." },
      },
    ],
    nearby: ["bohol", "siargao"],
    faqs: [
      {
        q: { en: "How do I get to Camiguin?" },
        a: { en: "Fly to Laguindingan (Cagayan de Oro), drive about 2 hours to Balingoan, then take the ferry of roughly an hour to Benoni." },
      },
      {
        q: { en: "How many days do I need?" },
        a: { en: "Two nights covers the highlights; three or four suits a slower stay." },
      },
      {
        q: { en: "Can I combine Camiguin with Bohol?" },
        a: { en: "Yes, ferries usually run between Jagna (Bohol) and Benoni. Check schedules, which change with the season." },
      },
    ],
    experienceCategories: ["off-the-beaten-path", "nature-adventure", "family", "island-escapes"],
  },

  // ───────────────────────────────────────────── BANAUE
  {
    slug: "banaue",
    name: "Banaue",
    nameLocal: { ru: "Банауэ", ar: "باناوي" },
    region: "luzon",
    coords: [16.9132, 121.0590],
    photo: {
      alt: {
        en: "The Batad rice terraces curving around a mountain amphitheatre",
        fr: "Les rizières en terrasses de Batad, dessinant un amphithéâtre dans la montagne",
        es: "Las terrazas de arroz de Batad formando un anfiteatro en la montaña",
        ru: "Рисовые террасы Батада, изгибающиеся амфитеатром в горах",
        ar: "مدرجات الأرز في باتاد تلتف حول مدرج جبلي",
      },
      brief:
        "Batad from the upper viewpoint at 7am: the full amphitheatre of terraces in morning shade, mist lifting off the lower walls, a few thatched Ifugao houses in the village below. Mood: ancient, vast, quiet.",
      tone: "rice",
    },
    short: {
      en: "The Ifugao rice terraces, carved into the Cordillera mountains by hand over many generations and still farmed by the same communities today.",
      fr: "Les rizières en terrasses des Ifugao, taillées à la main dans les montagnes de la Cordillère au fil des générations et toujours cultivées par les mêmes communautés.",
      es: "Las terrazas de arroz ifugao, talladas a mano en la cordillera a lo largo de generaciones y aún cultivadas por las mismas comunidades.",
      ru: "Рисовые террасы народа ифугао, вырезанные вручную в горах Кордильеры многими поколениями и до сих пор возделываемые теми же общинами.",
      ar: "مدرجات الأرز لشعب إيفوغاو، نُحتت يدويًا في جبال الكورديليرا عبر أجيال كثيرة وما زالت المجتمعات نفسها تزرعها حتى اليوم.",
    },
    whyGo: {
      en: "To walk through a landscape that people have tended by hand for centuries, and still do.",
      fr: "Pour marcher dans un paysage entretenu à la main depuis des siècles, et qui l'est encore.",
      es: "Para caminar por un paisaje cuidado a mano durante siglos, y que todavía lo es.",
      ru: "Чтобы пройти по ландшафту, который веками возделывают вручную — и возделывают до сих пор.",
      ar: "لتمشي في مشهد يعتني به الناس بأيديهم منذ قرون، وما زالوا يفعلون.",
    },
    bestFor: {
      en: ["Trekking", "Culture", "Mountain landscapes", "Photography"],
      fr: ["Randonnée", "Culture", "Paysages de montagne", "Photographie"],
      es: ["Senderismo", "Cultura", "Paisajes de montaña", "Fotografía"],
      ru: ["Треккинг", "Культура", "Горные пейзажи", "Фотография"],
      ar: ["المشي الجبلي", "الثقافة", "المناظر الجبلية", "التصوير"],
    },
    nights: "2–3",
    bestSeason: {
      en: "February to May, or June–July for the harvest",
      fr: "De février à mai, ou en juin–juillet pour la récolte",
      es: "De febrero a mayo, o en junio–julio para la cosecha",
      ru: "С февраля по май, или в июне–июле на время урожая",
      ar: "من فبراير إلى مايو، أو يونيو–يوليو لموسم الحصاد",
    },
    intro: {
      en: "Banaue is the gateway town to the rice terraces of Ifugao, high in the Cordillera of northern Luzon. The terraces you see from the town viewpoint are famous, but the UNESCO-listed clusters are nearby: Batad, Bangaan, Hungduan, Mayoyao and Nagacadan. Batad, a village in a natural amphitheatre reached on foot, is the one to see. Getting here takes effort and the town itself is plain, but the walking is extraordinary, and the terraces change completely through the year: flooded and mirror-like before planting, bright green as the rice grows, gold before the harvest.",
    },
    whoShouldVisit: {
      en: "Walkers, culturally curious travellers, photographers and anyone combining northern Luzon with Sagada. Not for travellers short on time or who dislike long road journeys and steep steps.",
    },
    gettingThere: {
      en: "Overnight buses from Manila take around 9 hours. By private car it's similar, sometimes faster, with stops; many travellers split the drive with a night on the way. From Banaue, the trailhead for Batad is roughly 30–45 minutes by road, then a walk of 30–60 minutes down to the village. Sagada is about 3 hours further by road.",
    },
    sections: [
      {
        id: "things-to-do",
        title: { en: "Walking the terraces" },
        body: {
          en: "The classic walk is down into Batad, along the terrace walls through the village and on to Tappiyah Falls, a steep descent to a cold pool below. Allow most of a day and wear good shoes; the stone walls are narrow and can be slippery. A local guide is strongly recommended and supports the community.\n\nThe Banaue viewpoint, a short drive from town, gives the classic panorama in minutes. Bangaan and Hungduan are quieter alternatives for travellers who've seen Batad.",
        },
        items: [
          { name: { en: "Batad" }, text: { en: "The amphitheatre of terraces, a UNESCO World Heritage site. Stay a night in the village if you can." } },
          { name: { en: "Tappiyah Falls" }, text: { en: "A tall waterfall below Batad. Steep steps down and back up." } },
          { name: { en: "Banaue viewpoint" }, text: { en: "The famous view, a few minutes from town by tricycle." } },
        ],
      },
      {
        id: "culture",
        title: { en: "Ifugao culture" },
        body: {
          en: "The terraces are a living system, not a monument: managed by Ifugao communities, with rituals tied to the rice cycle and traditional houses raised on posts. Many young people now work outside the region, and maintaining the walls is hard. Staying in village homestays, hiring local guides and buying local woodcarvings and textiles all help.",
        },
      },
    ],
    insiders: [
      {
        type: "our-favorite",
        title: { en: "A night in Batad" },
        body: { en: "When the day hikers leave, the village goes silent. Sunrise over the terraces is worth the climb." },
      },
      {
        type: "inside-tip",
        title: { en: "Pack light, walk heavy" },
        body: { en: "Leave big luggage in Banaue. Porters can be hired for the walk down to Batad." },
      },
    ],
    nearby: ["sagada", "manila"],
    faqs: [
      {
        q: { en: "Are the Banaue terraces a UNESCO site?" },
        a: { en: "The UNESCO listing covers five clusters in Ifugao, including Batad and Bangaan. The view right above Banaue town is not one of them, though it's still lovely." },
      },
      {
        q: { en: "How do I get to Banaue from Manila?" },
        a: { en: "By overnight bus, around 9 hours, or by private car with a stop on the way." },
      },
      {
        q: { en: "When are the terraces green?" },
        a: { en: "It varies by village and altitude, but generally from around March to May after planting; harvest-gold is roughly June–July." },
      },
    ],
    experienceCategories: ["nature-adventure", "food-culture", "off-the-beaten-path", "private-journeys"],
  },

  // ───────────────────────────────────────────── SAGADA
  {
    slug: "sagada",
    name: "Sagada",
    nameLocal: { ru: "Сагада", ar: "ساغادا" },
    region: "luzon",
    coords: [17.0836, 120.9006],
    photo: {
      alt: {
        en: "Pine-covered ridges above a sea of clouds at sunrise in Sagada",
        fr: "Crêtes couvertes de pins au-dessus d'une mer de nuages, au lever du soleil à Sagada",
        es: "Crestas cubiertas de pinos sobre un mar de nubes al amanecer en Sagada",
        ru: "Сосновые хребты над морем облаков на рассвете в Сагаде",
        ar: "قمم مغطاة بأشجار الصنوبر فوق بحر من الغيوم عند شروق الشمس في ساغادا",
      },
      brief:
        "From Kiltepan viewpoint at 5:45am: a sea of cloud filling the valley, pine ridges as dark silhouettes, first light turning the cloud pink. A couple of figures in jackets at the edge, small in frame. Mood: cold, hushed, high up.",
      tone: "stone",
    },
    short: {
      en: "A cool mountain town of pine forests, limestone caves and hanging coffins in the Cordillera, where mornings start above a sea of clouds.",
      fr: "Une petite ville de montagne fraîche dans la Cordillère : forêts de pins, grottes calcaires, cercueils suspendus et matins au-dessus d'une mer de nuages.",
      es: "Un pueblo de montaña fresco en la cordillera: pinares, cuevas de caliza, ataúdes colgantes y mañanas sobre un mar de nubes.",
      ru: "Прохладный горный городок в Кордильере: сосновые леса, известняковые пещеры, висячие гробы и утра над морем облаков.",
      ar: "بلدة جبلية باردة في الكورديليرا، فيها غابات صنوبر وكهوف كلسية وتوابيت معلقة، وصباحات فوق بحر من الغيوم.",
    },
    whyGo: {
      en: "To see a very different Philippines: cold, pine-scented and shaped by mountain traditions.",
      fr: "Pour voir d'autres Philippines : fraîches, parfumées aux pins et façonnées par les traditions de montagne.",
      es: "Para ver otra Filipinas: fría, con olor a pino y moldeada por tradiciones de montaña.",
      ru: "Чтобы увидеть совсем другие Филиппины — прохладные, пахнущие сосной и живущие горными традициями.",
      ar: "لترى فلبين مختلفة تمامًا: باردة، تعبق برائحة الصنوبر، وتشكّلها تقاليد الجبال.",
    },
    bestFor: {
      en: ["Caving", "Hiking", "Culture", "Cool weather"],
      fr: ["Spéléologie", "Randonnée", "Culture", "Fraîcheur"],
      es: ["Espeleología", "Senderismo", "Cultura", "Clima fresco"],
      ru: ["Пещеры", "Пешие прогулки", "Культура", "Прохлада"],
      ar: ["استكشاف الكهوف", "المشي", "الثقافة", "الطقس البارد"],
    },
    nights: "2–3",
    bestSeason: {
      en: "November to April",
      fr: "De novembre à avril",
      es: "De noviembre a abril",
      ru: "С ноября по апрель",
      ar: "من نوفمبر إلى أبريل",
    },
    intro: {
      en: "Sagada sits at around 1,500 metres in Mountain Province, and the first thing you notice is the cold. Nights can drop close to 10°C in January, which makes it a favourite escape for Filipinos from the lowland heat. The Igorot people of the area traditionally laid their dead in coffins hung on cliff faces or stacked in caves, and you can still see them in Echo Valley and Lumiang Cave. Add caves you can wade and climb through, pine-forest walks and a strong local food culture, and Sagada is one of the most distinctive places in the north.",
    },
    whoShouldVisit: {
      en: "Active travellers, hikers, caving enthusiasts and anyone interested in Cordillera culture. Not for travellers who dislike long mountain drives or basic accommodation.",
    },
    gettingThere: {
      en: "Sagada is a long drive from Manila: roughly 11–13 hours direct by bus or car. Most travellers combine it with Banaue (about 3 hours by road) or come via Baguio (around 5–6 hours on mountain roads). On arrival, visitors register at the tourism office and pay an environmental fee; many sites require a local guide.",
    },
    sections: [
      {
        id: "things-to-do",
        title: { en: "Things to do" },
        body: {
          en: "Sagada's highlights are close together but almost all require guides arranged through the town. Sumaguing Cave is the big one: a descent into slippery limestone chambers with pools and rock formations. The cave connection, from Lumiang to Sumaguing, takes around 3–4 hours and is for fit, confident people only. Echo Valley's hanging coffins are a short guided walk from town, and Bomod-ok Falls is a pleasant walk through rice terraces.",
        },
        items: [
          { name: { en: "Kiltepan viewpoint" }, text: { en: "The classic sea-of-clouds sunrise. Go between roughly November and February for the best chance." } },
          { name: { en: "Sumaguing Cave" }, text: { en: "Bare feet, ropes and cold water. Great fun." } },
          { name: { en: "Echo Valley" }, text: { en: "The hanging coffins, on a short walk with a guide." } },
          { name: { en: "Bomod-ok Falls" }, text: { en: "A big waterfall reached through rice terraces and villages." } },
        ],
      },
      {
        id: "food",
        title: { en: "Food" },
        body: {
          en: "Sagada is known for etag, salted and smoked pork used in soups and stews, local coffee grown in the hills, and fruit pies. In the cold, a bowl of hot broth with etag is exactly right.",
        },
      },
    ],
    insiders: [
      {
        type: "go-early",
        title: { en: "Kiltepan before 5:30am" },
        body: { en: "The cloud sea appears before sunrise and burns off soon after. Bring a jacket." },
      },
      {
        type: "inside-tip",
        title: { en: "Respect the coffins" },
        body: { en: "These are burial sites, not attractions. Don't touch them, and follow your guide." },
      },
    ],
    nearby: ["banaue", "manila"],
    faqs: [
      {
        q: { en: "How long does it take to get to Sagada?" },
        a: { en: "Around 11–13 hours from Manila directly. It's better as part of a northern Luzon trip with Banaue or Baguio." },
      },
      {
        q: { en: "Do I need a guide in Sagada?" },
        a: { en: "For caves, hanging coffins and most trails, yes. Guides are arranged through the town's tourism office or guide association." },
      },
      {
        q: { en: "How cold does it get?" },
        a: { en: "Nights from December to February can be around 10–15°C. Bring layers." },
      },
    ],
    experienceCategories: ["nature-adventure", "off-the-beaten-path", "food-culture"],
  },

  // ───────────────────────────────────────────── MANILA
  {
    slug: "manila",
    name: "Manila",
    nameLocal: { ru: "Манила", ar: "مانيلا" },
    region: "luzon",
    coords: [14.5995, 120.9842],
    photo: {
      alt: {
        en: "Old stone walls and a calesa on a quiet street in Intramuros, Manila",
        fr: "Vieux remparts de pierre et calèche dans une rue calme d'Intramuros, à Manille",
        es: "Murallas de piedra y una calesa en una calle tranquila de Intramuros, Manila",
        ru: "Старые каменные стены и повозка-калеса на тихой улице Интрамуроса в Маниле",
        ar: "أسوار حجرية قديمة وعربة كاليسا في شارع هادئ في إنترامروس بمانيلا",
      },
      brief:
        "A cobbled street in Intramuros at 6:30am: weathered adobe walls, capiz-shell windows above, a horse-drawn calesa waiting, warm early light slanting along the street, no traffic yet. Mood: layered history, a city before it wakes.",
      tone: "stone",
    },
    short: {
      en: "A huge, hectic capital with a walled Spanish city at its heart, the world's oldest Chinatown, serious museums and the country's best food scene.",
      fr: "Une capitale immense et trépidante, avec une ville espagnole fortifiée en son cœur, le plus ancien quartier chinois du monde, de vrais musées et la meilleure scène culinaire du pays.",
      es: "Una capital enorme y frenética con una ciudad amurallada española en su centro, el barrio chino más antiguo del mundo, buenos museos y la mejor escena gastronómica del país.",
      ru: "Огромная, суматошная столица с испанским городом-крепостью в центре, старейшим чайна-тауном в мире, серьёзными музеями и лучшей едой в стране.",
      ar: "عاصمة ضخمة ومزدحمة، في قلبها مدينة إسبانية مسوّرة، وأقدم حي صيني في العالم، ومتاحف جادة، وأفضل مشهد للطعام في البلاد.",
    },
    whyGo: {
      en: "Give Manila a day or two and it explains the rest of the country.",
      fr: "Accordez un jour ou deux à Manille : elle explique tout le reste du pays.",
      es: "Dale a Manila uno o dos días y te explicará el resto del país.",
      ru: "Дайте Маниле день-другой — и она объяснит вам всю остальную страну.",
      ar: "امنح مانيلا يومًا أو يومين، وستشرح لك بقية البلاد.",
    },
    bestFor: {
      en: ["Food", "History", "Culture", "Stopovers"],
      fr: ["Gastronomie", "Histoire", "Culture", "Escales"],
      es: ["Gastronomía", "Historia", "Cultura", "Escalas"],
      ru: ["Еда", "История", "Культура", "Остановки в пути"],
      ar: ["الطعام", "التاريخ", "الثقافة", "التوقف القصير"],
    },
    nights: "1–3",
    bestSeason: {
      en: "December to April",
      fr: "De décembre à avril",
      es: "De diciembre a abril",
      ru: "С декабря по апрель",
      ar: "من ديسمبر إلى أبريل",
    },
    intro: {
      en: "Most people try to avoid Manila, and we understand why: the traffic is heavy, the heat is real and the city sprawls across sixteen cities and one municipality with no obvious centre. But spend a day or two here with a plan, and Manila becomes the key to everything else. This is where the country's Spanish, Chinese, American and Malay layers sit side by side, often on the same street.\n\nThe historic heart is Intramuros, the walled city founded by the Spanish in the 16th century. Across the river is Binondo, established in 1594 and widely considered the oldest Chinatown in the world. To the south, Makati and Bonifacio Global City (BGC) are where the modern city lives, eats and goes out. Our advice: pick one or two neighbourhoods per day, travel outside rush hour, and eat as much as you can.",
    },
    whoShouldVisit: {
      en: "Food lovers, history and architecture fans, anyone on a long-haul arrival who needs a night to reset, and travellers who want to understand the Philippines rather than just its beaches. Less suited to anyone with only a week who wants maximum beach time: in that case, a single airport night is enough.",
    },
    gettingThere: {
      en: "Ninoy Aquino International Airport (MNL) is the main international gateway, with direct flights from the Middle East and across Asia, and connections to Europe. Note that MNL has several terminals that are not all connected airside; allow time if you change between them. Depending on traffic, central Makati is roughly 30–60 minutes from the airport, Intramuros and Binondo can take an hour or more at busy times. Clark International Airport (CRK), around 2 hours north, is an alternative for some routes.",
    },
    sections: [
      {
        id: "why",
        title: { en: "Why Manila" },
        body: {
          en: "Manila is where the Philippines makes sense. Walk Intramuros and you understand three centuries of Spanish rule; eat your way through Binondo and you see the Chinese influence on Filipino cooking; spend an evening in Poblacion and you meet the young, confident, creative country that's often missing from beach itineraries.\n\nIt also has the country's best museums, most varied restaurants and the most interesting contemporary art scene. None of that is visible from the airport road.",
        },
      },
      {
        id: "stay",
        title: { en: "Where to stay" },
        body: {
          en: "Choose your neighbourhood by what you want to do, and remember that crossing the city can take an hour.",
        },
        items: [
          { name: { en: "Makati" }, text: { en: "Central, walkable by Manila standards, with parks, malls and the Legazpi and Salcedo villages. The easiest base for most visitors." } },
          { name: { en: "Bonifacio Global City (BGC)" }, text: { en: "Modern, clean and orderly, with wide pavements. Good for families and business trips." } },
          { name: { en: "Poblacion" }, text: { en: "Makati's old town, now the city's liveliest bar and food district. Fun, but noisy at night." } },
          { name: { en: "Manila Bay and Ermita" }, text: { en: "Close to Intramuros and the National Museum, with sunset views over the bay. Busier and grittier." } },
          { name: { en: "Near the airport" }, text: { en: "For a single night between flights, stay near your terminal and skip the traffic." } },
        ],
      },
      {
        id: "things-to-do",
        title: { en: "Things to do" },
        body: {
          en: "Manila rewards a plan. A good first day starts early in Intramuros, moves to the National Museum through the heat of midday, then crosses to Binondo for a late lunch and an afternoon walk.",
        },
        items: [
          { name: { en: "Intramuros" }, text: { en: "The walled city. Walk the ramparts, visit Fort Santiago and Casa Manila, and step into San Agustin Church." } },
          { name: { en: "San Agustin Church" }, text: { en: "Completed in 1607, the oldest stone church in the country and a UNESCO World Heritage site." } },
          { name: { en: "National Museum complex" }, text: { en: "Fine arts, anthropology and natural history in grand buildings by Rizal Park. Entry is free; check opening days." } },
          { name: { en: "Binondo" }, text: { en: "The old Chinatown: temples, dumpling shops, herbal stores and the busy streets around Ongpin." } },
          { name: { en: "Escolta" }, text: { en: "Manila's pre-war commercial street, with old Art Deco buildings and a small creative scene." } },
          { name: { en: "Quiapo" }, text: { en: "Around the basilica of the Black Nazarene: markets, street life and devotion. Intense and fascinating." } },
          { name: { en: "Manila Bay sunset" }, text: { en: "From Roxas Boulevard or the bay walk, one of the city's famous sights." } },
        ],
        insider: {
          type: "go-early",
          title: { en: "Intramuros at 7am" },
          body: { en: "Walk the walls before the heat and the traffic. The light on the old stone is beautiful, and you'll have it almost to yourself." },
        },
      },
      {
        id: "food",
        title: { en: "Food" },
        body: {
          en: "Manila is the best place in the country to eat your way through Filipino cooking, from carinderias to modern Filipino kitchens. Many dishes are regional, but they all end up here.\n\nStart with the classics. Adobo, the national dish, is meat braised in vinegar, soy, garlic and bay leaf; every family has its own. Sinigang is a sour, tamarind-based soup. Kare-kare is oxtail in peanut sauce with bagoong (fermented shrimp paste). Sisig, from Pampanga, is chopped pork on a sizzling plate. Finish with halo-halo, a towering mix of shaved ice, milk, sweet beans, jellies and ube.",
        },
        items: [
          { name: { en: "Adobo" }, text: { en: "The national dish, and a different one in every kitchen." } },
          { name: { en: "Sinigang" }, text: { en: "Sour tamarind soup with pork, shrimp or fish. Comfort food." } },
          { name: { en: "Kare-kare" }, text: { en: "Peanut stew with oxtail and vegetables, served with bagoong." } },
          { name: { en: "Sisig" }, text: { en: "Sizzling chopped pork with chilli and calamansi. Order it with a cold beer." } },
          { name: { en: "Halo-halo" }, text: { en: "The great Filipino dessert. Mix it all together before eating." } },
          { name: { en: "Binondo dumplings and hopia" }, text: { en: "Chinese-Filipino snacks from the old shops along Ongpin and nearby streets." } },
        ],
        insider: {
          type: "local-favorite",
          title: { en: "Weekend markets" },
          body: { en: "Makati's Saturday market in Salcedo Village and Sunday market in Legazpi Village are where locals go for breakfast, regional dishes and fruit." },
        },
      },
      {
        id: "binondo",
        title: { en: "A Binondo food walk" },
        body: {
          en: "Binondo is best explored on foot and on an empty stomach. Start at Binondo Church, walk along Ongpin Street and the narrow alleys around it, and stop for dumplings, fried siopao, lumpia and hopia, then finish with tea or coffee in an old shop.\n\nIt's crowded, noisy and best done with someone who knows where to go. A guided walk with a local food writer or historian adds a lot.",
        },
      },
      {
        id: "nightlife",
        title: { en: "Nightlife" },
        body: {
          en: "Poblacion, in Makati, is the city's most fun neighbourhood after dark: small bars, rooftop terraces, craft-beer spots and cheap street food in a few walkable blocks. BGC is more polished, with cocktail bars and late restaurants. Manila also has a serious live-music and cocktail culture; ask us for what's open and good when you travel.",
        },
      },
      {
        id: "day-trips",
        title: { en: "Day trips" },
        body: {
          en: "Tagaytay, roughly 2 hours south, overlooks Taal Volcano and its lake and is cooler than the city. Pampanga, around 2 hours north, is the country's food capital. Both make good stops at the start or end of a trip.",
        },
      },
    ],
    insiders: [
      {
        type: "inside-tip",
        title: { en: "Avoid rush hour" },
        body: { en: "Plan cross-city journeys between roughly 10am and 4pm, or after 8pm. The same trip at 6pm can take three times as long." },
      },
      {
        type: "our-favorite",
        title: { en: "National Museum of Fine Arts" },
        body: { en: "Juan Luna's Spoliarium, a huge 19th-century canvas, and free entry. The coolest place to spend a hot afternoon." },
      },
      {
        type: "best-sunset",
        title: { en: "Manila Bay" },
        body: { en: "The sun drops into the bay behind the ships. Watch from the bay walk near the Cultural Center." },
      },
      {
        type: "skip-this",
        title: { en: "Skip the mall day" },
        body: { en: "The malls are huge but similar to those elsewhere. Spend the day in Intramuros and Binondo instead." },
      },
    ],
    nearby: ["banaue", "sagada", "palawan", "boracay"],
    faqs: [
      {
        q: { en: "How long should I stay in Manila?" },
        a: { en: "One or two nights is usually right: enough for Intramuros, Binondo and a good dinner. Food lovers can happily stay three." },
      },
      {
        q: { en: "Is Manila safe for visitors?" },
        a: { en: "Most areas visitors go to are fine with normal city precautions. Keep valuables out of sight in crowded places and use registered taxis or ride-hailing apps." },
      },
      {
        q: { en: "Where is the best area to stay?" },
        a: { en: "Makati is the easiest all-round base. BGC suits families. Stay near the airport for a single night between flights." },
      },
      {
        q: { en: "How do I get around Manila?" },
        a: { en: "Ride-hailing apps and private drivers are easiest. Trains help for some routes but are crowded at rush hour." },
      },
      {
        q: { en: "Can I skip Manila entirely?" },
        a: { en: "Yes, if you fly into Cebu or connect directly to an island. But even one day here adds context to the whole trip." },
      },
    ],
    experienceCategories: ["food-culture", "private-journeys", "luxury"],
  },

  // ───────────────────────────────────────────── BATANES
  {
    slug: "batanes",
    name: "Batanes",
    nameLocal: { ru: "Батанес", ar: "باتانيس" },
    region: "luzon",
    coords: [20.4487, 121.9702],
    photo: {
      alt: {
        en: "Rolling green hills above the sea in Batanes, with a stone house below",
        fr: "Collines vertes ondulant au-dessus de la mer à Batanes, avec une maison de pierre en contrebas",
        es: "Colinas verdes y onduladas sobre el mar en Batanes, con una casa de piedra abajo",
        ru: "Зелёные холмы над морем на Батанесе и каменный дом внизу",
        ar: "تلال خضراء متموجة فوق البحر في باتانيس، وبيت حجري في الأسفل",
      },
      brief:
        "Vayang Rolling Hills at 4:30pm in clear weather: grassy ridges dropping to a dark blue sea, wind moving the grass, a few grazing cattle, one Ivatan stone house with a thick cogon roof in the lower third. Mood: windswept, remote, open.",
      tone: "stone",
    },
    short: {
      en: "The country's northernmost islands, closer to Taiwan than to Manila: rolling green hills, stone houses with thick thatched roofs and a culture shaped by wind.",
      fr: "Les îles les plus au nord du pays, plus proches de Taïwan que de Manille : collines vertes, maisons de pierre aux toits de chaume épais et une culture façonnée par le vent.",
      es: "Las islas más septentrionales del país, más cerca de Taiwán que de Manila: colinas verdes, casas de piedra con gruesos techos de paja y una cultura moldeada por el viento.",
      ru: "Самые северные острова страны, ближе к Тайваню, чем к Маниле: зелёные холмы, каменные дома с толстыми соломенными крышами и культура, созданная ветром.",
      ar: "أقصى جزر البلاد شمالًا، أقرب إلى تايوان منها إلى مانيلا: تلال خضراء وبيوت حجرية بأسقف قش سميكة وثقافة صاغتها الرياح.",
    },
    whyGo: {
      en: "Because nowhere else in the Philippines looks, feels or sounds anything like it.",
      fr: "Parce qu'aucun autre endroit des Philippines ne lui ressemble, ni dans les paysages, ni dans l'ambiance.",
      es: "Porque ningún otro lugar de Filipinas se le parece, ni en el paisaje ni en el ambiente.",
      ru: "Потому что ничто на Филиппинах не похоже на эти острова — ни пейзажи, ни атмосфера.",
      ar: "لأنه لا يوجد مكان آخر في الفلبين يشبهها في مناظرها أو أجوائها.",
    },
    bestFor: {
      en: ["Landscapes", "Culture", "Photography", "Remote travel"],
      fr: ["Paysages", "Culture", "Photographie", "Voyage isolé"],
      es: ["Paisajes", "Cultura", "Fotografía", "Viaje remoto"],
      ru: ["Пейзажи", "Культура", "Фотография", "Уединённые места"],
      ar: ["المناظر الطبيعية", "الثقافة", "التصوير", "السفر إلى أماكن نائية"],
    },
    nights: "3–4",
    bestSeason: {
      en: "March to May",
      fr: "De mars à mai",
      es: "De marzo a mayo",
      ru: "С марта по май",
      ar: "من مارس إلى مايو",
    },
    intro: {
      en: "Batanes sits in the Luzon Strait, closer to Taiwan than to Manila. Its people, the Ivatan, have built their lives around typhoons: houses of limestone and coral with walls up to a metre thick, roofs of cogon grass, and the vakul, a headdress of woven palm fibre that shields women from sun and rain. The landscape is grassy hills, cliffs and stone-walled pastures, closer to the Atlantic coast of Europe than to a tropical island. Only a few thousand visitors come each year, which is a large part of its charm. The catch is the weather: flights are small and can be cancelled, so trips need a buffer day.",
    },
    whoShouldVisit: {
      en: "Travellers who have seen the beaches and want something completely different, walkers, photographers and anyone interested in island culture. Not suited to tight schedules or anyone looking for swimming beaches.",
    },
    gettingThere: {
      en: "Fly to Basco (BSO) from Manila, roughly 1.5–2 hours; some seasonal flights run from Clark. Flights are limited, fill early in the best months and are weather-dependent, so allow at least one buffer day before an international connection. Sabtang Island is reached by a traditional faluwa boat from Ivana, around 30–40 minutes, in calm seas only.",
    },
    sections: [
      {
        id: "things-to-do",
        title: { en: "Things to do" },
        body: {
          en: "Batan Island, the main island, splits naturally into a north and a south tour, best done with a local driver who can talk about the island along the way. Sabtang deserves its own day for its stone villages.",
        },
        items: [
          { name: { en: "Vayang Rolling Hills" }, text: { en: "Green ridges above the sea north of Basco. Best in the late afternoon." } },
          { name: { en: "Racuh a Payaman (Marlboro Country)" }, text: { en: "A communal pasture with cattle, stone walls and huge views. The classic Batanes scene." } },
          { name: { en: "Naidi Hills and Basco Lighthouse" }, text: { en: "A short walk from Basco for sunset." } },
          { name: { en: "Valugan Boulder Beach" }, text: { en: "Smooth volcanic boulders on the Pacific side, thrown up by the sea." } },
          { name: { en: "Sabtang Island" }, text: { en: "Chavayan and Savidug, villages of traditional stone houses. Calm weather only." } },
        ],
      },
      {
        id: "culture",
        title: { en: "Ivatan life and food" },
        body: {
          en: "Batanes is small, safe and close-knit, and visitors are welcomed with a quiet courtesy that's easy to return: greet people, ask before photographing homes, and take your rubbish with you. Accommodation is mostly small inns and homestays; comfort is simple, which suits the place.\n\nIvatan cooking makes the most of a short growing season and a rough sea. Look for uvod, a dish made from the pith of the banana stem, flying fish dried in the sun, and fresh lobster in season. You may see coconut crab offered; it's a vulnerable species, and we'd skip it.",
        },
      },
    ],
    insiders: [
      {
        type: "inside-tip",
        title: { en: "Add a buffer day" },
        body: { en: "Flights in and out of Basco are cancelled in bad weather. Never plan an international flight the day after you leave." },
      },
      {
        type: "worth-the-detour",
        title: { en: "Chavayan, Sabtang" },
        body: { en: "Women here still weave vakul headdresses. Ask before taking photographs." },
      },
    ],
    nearby: ["manila"],
    faqs: [
      {
        q: { en: "When is the best time to visit Batanes?" },
        a: { en: "March to May has the calmest seas and most stable weather. June to November is typhoon season; flights and boats are frequently cancelled." },
      },
      {
        q: { en: "How many days do I need?" },
        a: { en: "Three nights covers Batan and Sabtang, plus a buffer day for weather." },
      },
      {
        q: { en: "Can I swim in Batanes?" },
        a: { en: "Some coves are swimmable in calm weather, but most of the coastline is rocky with strong currents. Come for the landscape, not the beaches." },
      },
    ],
    experienceCategories: ["off-the-beaten-path", "nature-adventure", "food-culture", "private-journeys"],
  },

  // ───────────────────────────────────────────── NEGROS
  {
    slug: "negros",
    name: "Negros",
    nameLocal: { ru: "Негрос", ar: "نيغروس" },
    region: "visayas",
    coords: [10.0, 122.9],
    photo: {
      alt: {
        en: "Sugarcane fields below the slopes of Mount Kanlaon in Negros",
        fr: "Champs de canne à sucre au pied du mont Kanlaon, à Negros",
        es: "Campos de caña de azúcar bajo las laderas del monte Kanlaon, en Negros",
        ru: "Плантации сахарного тростника у подножия вулкана Канлаон на Негросе",
        ar: "حقول قصب السكر عند سفوح جبل كانلاون في نيغروس",
      },
      brief:
        "Wide shot at 5pm: tall sugarcane in the foreground catching gold light, a narrow-gauge cane track cutting through, Mount Kanlaon's cone faint in haze behind. Mood: agricultural, warm, unhurried.",
      tone: "rice",
    },
    short: {
      en: "A big island of sugar country, heritage towns and grilled chicken in the north, and quiet beaches, marine reserves and Dumaguete's easy pace in the south.",
      fr: "Une grande île : au nord, le pays du sucre, des villes patrimoniales et le poulet grillé ; au sud, plages tranquilles, réserves marines et douceur de Dumaguete.",
      es: "Una isla grande: al norte, tierra de azúcar, pueblos históricos y pollo a la brasa; al sur, playas tranquilas, reservas marinas y el ritmo sereno de Dumaguete.",
      ru: "Большой остров: на севере — сахарные плантации, исторические городки и курица гриль, на юге — тихие пляжи, морские заповедники и спокойный Думагете.",
      ar: "جزيرة كبيرة: في الشمال أرض السكر والبلدات التراثية والدجاج المشوي، وفي الجنوب شواطئ هادئة ومحميات بحرية وإيقاع دوماغيتي الهادئ.",
    },
    whyGo: {
      en: "For a slice of the Philippines that few international travellers see, with very good food at every stop.",
      fr: "Pour une part des Philippines que peu de voyageurs étrangers découvrent, avec une excellente cuisine à chaque étape.",
      es: "Por una parte de Filipinas que pocos viajeros extranjeros conocen, con muy buena comida en cada parada.",
      ru: "Ради той части Филиппин, которую видят немногие иностранцы, — и отличной еды на каждой остановке.",
      ar: "من أجل جانب من الفلبين لا يراه كثير من المسافرين الأجانب، مع طعام ممتاز في كل محطة.",
    },
    bestFor: {
      en: ["Food", "Heritage", "Road trips", "Quiet beaches"],
      fr: ["Gastronomie", "Patrimoine", "Road trips", "Plages tranquilles"],
      es: ["Gastronomía", "Patrimonio", "Viajes por carretera", "Playas tranquilas"],
      ru: ["Еда", "Наследие", "Автопутешествия", "Тихие пляжи"],
      ar: ["الطعام", "التراث", "الرحلات البرية", "الشواطئ الهادئة"],
    },
    nights: "3–6",
    bestSeason: {
      en: "December to May",
      fr: "De décembre à mai",
      es: "De diciembre a mayo",
      ru: "С декабря по май",
      ar: "من ديسمبر إلى مايو",
    },
    intro: {
      en: "Negros is the fourth-largest island in the Philippines and one of the least visited by international travellers. Its north, Negros Occidental, grew rich on sugar in the 19th century, and the old planter towns of Silay and Talisay still have grand ancestral houses. Bacolod, the provincial capital, is known for chicken inasal and for the MassKara Festival every October. The south is quieter: the beaches of Sipalay, the marine reserve at Danjugan Island and, on the other side of the mountains, Dumaguete, the gateway to Apo Island and Siquijor. Driving between them, past cane fields and the volcanic slopes of Mount Kanlaon, is part of the appeal.",
    },
    whoShouldVisit: {
      en: "Food lovers, heritage enthusiasts, return visitors and travellers who like road trips. Not for anyone who wants a polished resort island; Negros is about variety and authenticity rather than luxury.",
    },
    gettingThere: {
      en: "Fly into Bacolod-Silay Airport (BCD) for the north, or Dumaguete (DGT) for the south; both have flights from Manila and Cebu. Fast ferries link Bacolod with Iloilo in roughly 1–1.5 hours. Driving from Bacolod to Sipalay takes around 4–5 hours, and from Sipalay to Dumaguete around 4 hours.",
    },
    sections: [
      {
        id: "north",
        title: { en: "Bacolod and the sugar towns" },
        body: {
          en: "Spend a day in Silay, about 30 minutes from Bacolod, walking among restored ancestral houses, some of which are museums. In Talisay, The Ruins, the shell of an early 20th-century mansion burned in the Second World War, is especially beautiful at dusk. Back in Bacolod, eat chicken inasal, grilled chicken basted in annatto oil, and try piaya, a flat pastry filled with muscovado sugar.",
        },
      },
      {
        id: "south",
        title: { en: "Sipalay and the south coast" },
        body: {
          en: "Sipalay has long, quiet beaches and good diving, with Sugar Beach reached by a short boat ride or a walk at low tide. Danjugan Island, a protected marine and wildlife reserve, can be visited by arrangement with its managers. From here it's a scenic drive to Dumaguete and the ferries to Siquijor.",
        },
      },
    ],
    insiders: [
      {
        type: "local-favorite",
        title: { en: "Chicken inasal in Bacolod" },
        body: { en: "Eat it the local way: with garlic rice, chicken oil drizzled on top and calamansi on the side." },
      },
      {
        type: "best-sunset",
        title: { en: "The Ruins, Talisay" },
        body: { en: "The old mansion walls glow in the late light. Arrive an hour before sunset." },
      },
    ],
    nearby: ["dumaguete", "siquijor", "boracay", "cebu"],
    faqs: [
      {
        q: { en: "Is Negros worth visiting?" },
        a: { en: "Yes, especially for food, heritage and a quieter Philippines. It pairs well with Siquijor, Dumaguete and Iloilo." },
      },
      {
        q: { en: "When is the MassKara Festival?" },
        a: { en: "It's held in Bacolod in October, with the main events usually on the weekend closest to the fourth Sunday." },
      },
    ],
    experienceCategories: ["food-culture", "off-the-beaten-path", "diving", "private-journeys"],
  },

  // ───────────────────────────────────────────── MALAPASCUA
  {
    slug: "malapascua",
    name: "Malapascua",
    nameLocal: { ru: "Малапаскуа", ar: "مالاباسكوا" },
    region: "visayas",
    coords: [11.3307, 124.1152],
    photo: {
      alt: {
        en: "Bangka boats moored off the white sand of Bounty Beach, Malapascua",
        fr: "Bangkas amarrées devant le sable blanc de Bounty Beach, à Malapascua",
        es: "Bangkas fondeadas frente a la arena blanca de Bounty Beach, en Malapascua",
        ru: "Лодки-банка у белого песка Баунти-Бич на Малапаскуа",
        ar: "قوارب بانكا راسية أمام رمال شاطئ باونتي الأبيض في مالاباسكوا",
      },
      brief:
        "Bounty Beach at 5:15am: dive boats lit by headlamps preparing to leave for Monad Shoal, dark blue sky just lightening, white sand and calm water. Mood: anticipation, early start, small-island quiet.",
      tone: "reef",
    },
    short: {
      en: "A small, car-free island off Cebu's northern tip, known worldwide for early-morning dives with thresher sharks, and for its easy, barefoot pace.",
      fr: "Une petite île sans voitures au nord de Cebu, connue dans le monde entier pour ses plongées à l'aube avec les requins-renards, et pour son rythme pieds nus.",
      es: "Una pequeña isla sin coches al norte de Cebu, conocida en todo el mundo por sus inmersiones al amanecer con tiburones zorro y su ritmo descalzo.",
      ru: "Маленький остров без машин у северной оконечности Себу, известный во всём мире утренними погружениями с акулами-лисицами и неспешной босоногой жизнью.",
      ar: "جزيرة صغيرة بلا سيارات قبالة الطرف الشمالي لسيبو، مشهورة عالميًا بالغوص فجرًا مع أسماك القرش الدرّاس وبإيقاعها الحافي الهادئ.",
    },
    whyGo: {
      en: "To see thresher sharks at dawn: one of the few places on earth where that happens almost daily.",
      fr: "Pour voir des requins-renards à l'aube : l'un des rares endroits au monde où cela arrive presque chaque jour.",
      es: "Para ver tiburones zorro al amanecer: uno de los pocos lugares del mundo donde ocurre casi a diario.",
      ru: "Чтобы на рассвете увидеть акул-лисиц — одно из немногих мест на Земле, где это происходит почти каждый день.",
      ar: "لرؤية أسماك القرش الدرّاس عند الفجر، في أحد الأماكن القليلة على الأرض التي يحدث فيها ذلك يوميًا تقريبًا.",
    },
    bestFor: {
      en: ["Diving", "Small-island life", "Snorkelling", "Couples"],
      fr: ["Plongée", "Vie insulaire", "Snorkeling", "Couples"],
      es: ["Buceo", "Vida isleña", "Esnórquel", "Parejas"],
      ru: ["Дайвинг", "Жизнь на маленьком острове", "Снорклинг", "Пары"],
      ar: ["الغوص", "حياة الجزر الصغيرة", "الغطس السطحي", "الأزواج"],
    },
    nights: "3–4",
    bestSeason: {
      en: "March to June",
      fr: "De mars à juin",
      es: "De marzo a junio",
      ru: "С марта по июнь",
      ar: "من مارس إلى يونيو",
    },
    intro: {
      en: "Malapascua is barely 2.5 kilometres long, with sandy paths instead of roads and a scatter of small resorts and dive centres along Bounty Beach. Its fame comes from Monad Shoal, an underwater plateau a short boat ride away where thresher sharks rise from deep water at dawn to visit cleaning stations. It's one of the few places in the world where you can see them reliably. The island was badly hit by Typhoon Haiyan in 2013 and has since rebuilt. Non-divers come too, for snorkelling trips, quiet beaches and a day trip to the sandbar island of Kalanggaman.",
    },
    whoShouldVisit: {
      en: "Divers above all (Advanced Open Water certification helps for Monad Shoal, where the sharks are usually seen at around 20–30 metres), couples and slow travellers. Less suited to families wanting big resorts and to anyone who dislikes long transfers.",
    },
    gettingThere: {
      en: "From Cebu City or Mactan airport, drive around 4 hours north to Maya port in Daanbantayan (traffic can add more). From Maya, small boats cross to Malapascua in roughly 30–45 minutes. Boats may require wading ashore, depending on tide.",
    },
    sections: [
      {
        id: "diving",
        title: { en: "Diving" },
        body: {
          en: "Thresher dives leave around 5am for Monad Shoal. Sightings are frequent but never guaranteed. Other dives include Gato Island, a marine sanctuary with a swim-through tunnel, white-tip reef sharks and sea snakes, and sites with good macro life, including mandarin fish at dusk.",
        },
      },
      {
        id: "things-to-do",
        title: { en: "Beyond the dives" },
        body: {
          en: "Walk the island in a couple of hours, through villages and to the lighthouse. Spend an afternoon on Langob or Bounty Beach. Take a day trip to Kalanggaman Island, roughly 1.5–2 hours by boat, a long sandbar with a strip of palm trees in the middle. And don't miss sunset from the north-west coast.",
        },
      },
    ],
    insiders: [
      {
        type: "go-early",
        title: { en: "The 5am thresher dive" },
        body: { en: "It sounds brutal; it's worth it. Then breakfast and back to bed." },
      },
      {
        type: "worth-the-detour",
        title: { en: "Kalanggaman Island" },
        body: { en: "A long, narrow island of white sand. Bring shade and food; facilities are basic." },
      },
    ],
    nearby: ["cebu", "moalboal", "bohol"],
    faqs: [
      {
        q: { en: "Do I need to be an advanced diver to see thresher sharks?" },
        a: { en: "Advanced Open Water is recommended because of the depth. Some operators offer training on the island." },
      },
      {
        q: { en: "How long does it take to get to Malapascua from Cebu?" },
        a: { en: "Around 4 hours by road to Maya port, then 30–45 minutes by boat." },
      },
    ],
    experienceCategories: ["diving", "island-escapes", "off-the-beaten-path"],
  },

  // ───────────────────────────────────────────── MOALBOAL
  {
    slug: "moalboal",
    name: "Moalboal",
    nameLocal: { ru: "Моалбоал", ar: "موالبوال" },
    region: "visayas",
    coords: [9.9476, 123.3711],
    photo: {
      alt: {
        en: "A swirling shoal of sardines above the reef wall in Moalboal",
        fr: "Un banc de sardines tourbillonnant au-dessus du tombant de Moalboal",
        es: "Un banco de sardinas girando sobre la pared de arrecife en Moalboal",
        ru: "Кружащийся косяк сардин над рифовой стеной в Моалбоале",
        ar: "سرب من السردين يدور فوق الجدار المرجاني في موالبوال",
      },
      brief:
        "Underwater, 10am, from just below the surface: a dense silver ball of sardines bending around a freediver in a dark wetsuit, sun rays piercing the blue, reef wall dropping off below. Mood: wonder, motion, light.",
      tone: "reef",
    },
    short: {
      en: "A small dive town on Cebu's west coast where millions of sardines swirl a few metres from shore and turtles graze on the reef wall.",
      fr: "Un petit village de plongée sur la côte ouest de Cebu, où des millions de sardines tourbillonnent à quelques mètres du rivage et où les tortues broutent le long du tombant.",
      es: "Un pequeño pueblo de buceo en la costa oeste de Cebu, donde millones de sardinas giran a pocos metros de la orilla y las tortugas se alimentan en la pared de arrecife.",
      ru: "Небольшой дайверский городок на западном побережье Себу, где миллионы сардин кружатся в нескольких метрах от берега, а черепахи пасутся у рифовой стены.",
      ar: "بلدة غوص صغيرة على الساحل الغربي لسيبو، حيث تدور ملايين أسماك السردين على بعد أمتار من الشاطئ وتتغذى السلاحف على الجدار المرجاني.",
    },
    whyGo: {
      en: "To swim into a sardine shoal straight off the beach, no boat needed.",
      fr: "Pour nager au milieu d'un banc de sardines directement depuis la plage, sans bateau.",
      es: "Para nadar dentro de un banco de sardinas desde la misma playa, sin barco.",
      ru: "Чтобы заплыть в косяк сардин прямо с пляжа — без всякой лодки.",
      ar: "لتسبح داخل سرب من السردين مباشرة من الشاطئ، دون حاجة إلى قارب.",
    },
    bestFor: {
      en: ["Diving", "Snorkelling", "Canyoneering", "Backpackers and couples"],
      fr: ["Plongée", "Snorkeling", "Canyoning", "Routards et couples"],
      es: ["Buceo", "Esnórquel", "Barranquismo", "Mochileros y parejas"],
      ru: ["Дайвинг", "Снорклинг", "Каньонинг", "Бэкпекеры и пары"],
      ar: ["الغوص", "الغطس السطحي", "استكشاف الوديان", "الرحالة والأزواج"],
    },
    nights: "2–4",
    bestSeason: {
      en: "December to May",
      fr: "De décembre à mai",
      es: "De diciembre a mayo",
      ru: "С декабря по май",
      ar: "من ديسمبر إلى مايو",
    },
    intro: {
      en: "Moalboal is really Panagsama, a strip of dive shops, small guesthouses and bars along a rocky shore a few kilometres from the town itself. It's not a beach destination in the usual sense; the point is what's just offshore. A reef wall drops away almost from the water's edge, and since around 2010 a huge shoal of sardines has lived there, often visible with a mask and snorkel. Turtles are common, Pescador Island is a short boat ride away, and Kawasan Falls and the canyoneering route through Badian are close by.",
    },
    whoShouldVisit: {
      en: "Divers, snorkellers, freedivers and active travellers. Also good for a few nights on a Cebu road trip. Less suited to anyone wanting a sandy beach in front of the hotel.",
    },
    gettingThere: {
      en: "From Cebu City, roughly 3 hours by road, depending on traffic and route. From Mactan airport, allow a little more. Short ferries from Liloan (Santander) or Bato in southern Cebu cross to Negros near Dumaguete, making it easy to continue south.",
    },
    sections: [
      {
        id: "diving",
        title: { en: "Sardines, turtles and Pescador" },
        body: {
          en: "The sardine run is the main event: a shoal of millions, a short swim from Panagsama. Behaviour varies daily, but it's usually there. Pescador Island, around 20–30 minutes by boat, has a wall and a cathedral-like swim-through. Turtles are common along the house reef. Freediving schools are increasingly popular here, thanks to deep water close to shore.",
        },
      },
      {
        id: "things-to-do",
        title: { en: "On land" },
        body: {
          en: "Canyoneering from Alegria or Badian down to Kawasan Falls is the standout: several hours of jumping, swimming and sliding through a turquoise river canyon, with guides and helmets. White Beach (Basdaku), around 10 minutes north of Panagsama, is the nearest proper sandy beach.",
        },
      },
    ],
    insiders: [
      {
        type: "go-early",
        title: { en: "Sardines before breakfast" },
        body: { en: "Snorkel before the boats arrive. The water is calm and the shoal is often closer to the surface." },
      },
      {
        type: "our-favorite",
        title: { en: "Canyoneering to Kawasan" },
        body: { en: "The most fun half day in Cebu. Go early to beat the groups." },
      },
    ],
    nearby: ["cebu", "dumaguete", "malapascua", "negros"],
    faqs: [
      {
        q: { en: "Can I see the sardines without diving?" },
        a: { en: "Yes, snorkelling is usually enough. The shoal is often a few metres down, a short swim from shore." },
      },
      {
        q: { en: "Is there a beach in Moalboal?" },
        a: { en: "Panagsama is rocky. For sand, go to White Beach (Basdaku), a short drive north." },
      },
    ],
    experienceCategories: ["diving", "nature-adventure", "off-the-beaten-path"],
  },

  // ───────────────────────────────────────────── DUMAGUETE
  {
    slug: "dumaguete",
    name: "Dumaguete",
    nameLocal: { ru: "Думагете", ar: "دوماغيتي" },
    region: "visayas",
    coords: [9.3068, 123.3054],
    photo: {
      alt: {
        en: "Palm-lined Rizal Boulevard by the sea in Dumaguete at dusk",
        fr: "Le Rizal Boulevard bordé de palmiers au bord de la mer, à Dumaguete au crépuscule",
        es: "El paseo Rizal Boulevard, con palmeras junto al mar, en Dumaguete al anochecer",
        ru: "Набережная Ризал-Бульвар с пальмами в Думагете в сумерках",
        ar: "شارع ريزال المحاط بأشجار النخيل بجانب البحر في دوماغيتي عند الغسق",
      },
      brief:
        "Rizal Boulevard at 6pm: acacia and palm silhouettes, old-style lamp posts just lighting up, students and families on the seawall, Siquijor faint on the horizon. Mood: gentle, everyday, small-city evening.",
      tone: "dusk",
    },
    short: {
      en: "A relaxed university town on Negros with a seafront promenade, very good diving at Apo Island and Dauin, and ferries to Siquijor.",
      fr: "Une ville universitaire tranquille sur l'île de Negros, avec une promenade en bord de mer, d'excellentes plongées à Apo et Dauin, et des ferries pour Siquijor.",
      es: "Una tranquila ciudad universitaria en Negros, con paseo marítimo, muy buen buceo en Apo y Dauin, y ferris a Siquijor.",
      ru: "Спокойный университетский город на Негросе: набережная, отличный дайвинг на острове Апо и в Дауине и паромы на Сикихор.",
      ar: "مدينة جامعية هادئة في نيغروس، فيها كورنيش بحري وغوص ممتاز في جزيرة آبو وداوين، وعبّارات إلى سيكيهور.",
    },
    whyGo: {
      en: "For Apo Island's turtles and some of the best macro diving in the country, with a pleasant small city as your base.",
      fr: "Pour les tortues d'Apo et certaines des meilleures plongées macro du pays, avec une petite ville agréable comme base.",
      es: "Por las tortugas de Apo y parte del mejor buceo macro del país, con una pequeña ciudad agradable como base.",
      ru: "Ради черепах острова Апо и одного из лучших макро-дайвингов в стране — с приятным небольшим городом в качестве базы.",
      ar: "من أجل سلاحف جزيرة آبو وبعض أفضل مواقع الغوص للكائنات الدقيقة في البلاد، مع مدينة صغيرة لطيفة كقاعدة.",
    },
    bestFor: {
      en: ["Diving", "Snorkelling", "Slow city life", "Island connections"],
      fr: ["Plongée", "Snorkeling", "Vie citadine paisible", "Correspondances"],
      es: ["Buceo", "Esnórquel", "Vida urbana tranquila", "Conexiones"],
      ru: ["Дайвинг", "Снорклинг", "Спокойная городская жизнь", "Пересадки"],
      ar: ["الغوص", "الغطس السطحي", "حياة المدينة الهادئة", "الربط بين الجزر"],
    },
    nights: "2–4",
    bestSeason: {
      en: "December to May",
      fr: "De décembre à mai",
      es: "De diciembre a mayo",
      ru: "С декабря по май",
      ar: "من ديسمبر إلى مايو",
    },
    intro: {
      en: "Dumaguete is the capital of Negros Oriental and a university town, home to Silliman University, founded in 1901 by American missionaries. Students, retirees and divers give it an easy, friendly mood, and its seafront, Rizal Boulevard, is one of the most pleasant evening walks in the country. Most visitors come for what's around it: Apo Island, one of the country's oldest community-run marine sanctuaries; Dauin's black-sand dive sites full of macro life; the twin crater lakes of Balinsasayao and Danao in the hills; and the fast craft to Siquijor.",
    },
    whoShouldVisit: {
      en: "Divers, snorkellers, travellers heading to Siquijor and anyone who likes a small city with good, cheap food. Not a beach destination in itself; the beaches are south in Dauin and Zamboanguita.",
    },
    gettingThere: {
      en: "Fly to Dumaguete (DGT), around 1 hour 20 minutes from Manila, with flights from Cebu too. Ferries connect Dumaguete with Siquijor (about 1–1.5 hours), Bohol and Cebu. From Moalboal in Cebu, a short ferry from Liloan or Bato links to Sibulan, near Dumaguete.",
    },
    sections: [
      {
        id: "diving",
        title: { en: "Apo Island and Dauin" },
        body: {
          en: "Apo Island, around 30 minutes by boat from Malatapay south of Dumaguete, is a small volcanic island protected since the 1980s by its own community. The reef is healthy and turtles are seen on almost every snorkel. Visitor numbers and fees are managed, so book ahead.\n\nDauin, around 30 minutes south of the city, is a world-class macro destination: black-sand slopes with frogfish, seahorses, ghost pipefish and nudibranchs. Several dive resorts line the coast.",
        },
      },
      {
        id: "things-to-do",
        title: { en: "Around the city" },
        body: {
          en: "Walk Rizal Boulevard at dusk. Drive into the hills for the Twin Lakes of Balinsasayao and Danao, in a forest park around an hour away, or to Casaroro Falls near Valencia. From Bais, around an hour north, boat trips look for dolphins in the morning and visit the Manjuyod sandbar.",
        },
      },
      {
        id: "food",
        title: { en: "Food" },
        body: {
          en: "Dumaguete is known for its silvanas and sans rival, layered cashew-meringue desserts, and for budbud kabog, a sticky millet cake eaten with hot chocolate and ripe mango. The Malatapay market south of the city is a weekly market (traditionally on Wednesdays) with livestock trading and lechon.",
        },
      },
    ],
    insiders: [
      {
        type: "best-breakfast",
        title: { en: "Budbud kabog and tsokolate" },
        body: { en: "Millet cake with thick hot chocolate and mango. The classic Dumaguete morning." },
      },
      {
        type: "go-early",
        title: { en: "Apo Island by 8am" },
        body: { en: "Calmer seas and fewer boats. The turtles don't care what time it is." },
      },
    ],
    nearby: ["siquijor", "negros", "bohol", "moalboal"],
    faqs: [
      {
        q: { en: "Is Dumaguete worth staying in or just a transit point?" },
        a: { en: "Stay at least two nights. Apo Island and Dauin are among the best diving and snorkelling in the country." },
      },
      {
        q: { en: "How do I get from Dumaguete to Siquijor?" },
        a: { en: "By fast craft, around 1–1.5 hours, several times a day." },
      },
      {
        q: { en: "Can I visit Apo Island without diving?" },
        a: { en: "Yes. Snorkelling with turtles there is excellent." },
      },
    ],
    experienceCategories: ["diving", "food-culture", "off-the-beaten-path", "family"],
  },
];
