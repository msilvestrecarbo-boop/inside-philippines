import type { L } from "@/i18n/config";
import type { FAQ, Journey } from "@/content/types";

/**
 * Sample journeys. Each one is a starting point, not a package: the trip
 * builder and the "customise this journey" flow assume every stop, night
 * count and tier can change.
 *
 * Translation policy: title, short, bestMonths, highlights and photo.alt
 * are in all five languages. Long-form fields are English-only for now and
 * fall back to English on other locales until translated.
 *
 * Prices are indicative per person, double occupancy, PLACEHOLDERS until
 * the team confirms real costings (priceIsPlaceholder: true everywhere).
 */

const en = (s: string): L => ({ en: s });
const enList = (items: string[]): L<string[]> => ({ en: items });
const faq = (q: string, a: string): FAQ => ({ q: en(q), a: en(a) });

export const journeys: Journey[] = [
  // ---------------------------------------------------------------------------
  // 1. Island Classics
  // ---------------------------------------------------------------------------
  {
    slug: "island-classics",
    title: {
      en: "Island Classics",
      fr: "Les îles essentielles",
      es: "Islas clásicas",
      ru: "Классика островов",
      ar: "كلاسيكيات الجزر",
    },
    days: 14,
    route: ["manila", "el-nido", "bohol", "siargao"],
    styles: ["essential", "boutique", "premium", "signature"],
    categories: ["island-escapes", "nature-adventure", "surf", "private-journeys"],
    photo: {
      alt: {
        en: "A wooden outrigger boat at anchor in a green lagoon below limestone cliffs, El Nido",
        fr: "Une bangka en bois au mouillage dans un lagon vert, au pied des falaises calcaires d'El Nido",
        es: "Una bangka de madera fondeada en una laguna verde bajo acantilados de caliza, El Nido",
        ru: "Деревянная лодка-банка на якоре в зелёной лагуне под известняковыми скалами, Эль-Нидо",
        ar: "قارب بانكا خشبي راسٍ في بحيرة خضراء أسفل منحدرات الحجر الجيري في إل نيدو",
      },
      brief:
        "Early morning, around 7am, before the tour boats arrive. A single bangka at anchor in a lagoon in Bacuit Bay, shot from slightly above (cliff ledge or drone at low altitude). Limestone walls fill the top third. Water shows its real colour, no added saturation. No people, or one swimmer for scale.",
      tone: "lagoon",
    },
    short: {
      en: "El Nido's lagoons, Bohol's rivers and hills, Siargao's palm-lined roads. The three islands most people mean when they say the Philippines, in an order that actually works.",
      fr: "Les lagons d'El Nido, les rivières et collines de Bohol, les routes bordées de palmiers de Siargao. Les trois îles que l'on imagine en pensant aux Philippines, dans un ordre qui fonctionne vraiment.",
      es: "Las lagunas de El Nido, los ríos y colinas de Bohol, las carreteras entre palmeras de Siargao. Las tres islas que casi todos imaginan al pensar en Filipinas, en un orden que de verdad funciona.",
      ru: "Лагуны Эль-Нидо, реки и холмы Бохоля, пальмовые дороги Сиаргао. Три острова, которые обычно и представляют, говоря о Филиппинах, — в порядке, который действительно работает.",
      ar: "بحيرات إل نيدو، وأنهار بوهول وتلالها، وطرق سيارغاو المظللة بالنخيل. الجزر الثلاث التي يقصدها معظم الناس حين يتحدثون عن الفلبين، بترتيب ينجح فعلًا على أرض الواقع.",
    },
    intro: en(
      "This is the route we suggest most often to first-time visitors, because it shows three very different sides of the country without asking you to live on planes. El Nido is limestone and lagoons, best seen from a boat before nine in the morning. Bohol is rivers, the Chocolate Hills and quiet Panglao beaches, with an easy pace that resets you after the boat days. Siargao is the coconut-palm interior, the island-hopping lagoons of the south and a surf town that has grown up without losing its looseness.\n\nIt is honest about the logistics: there are two real transfer days, and both of them route through Manila or Cebu, because that is how domestic flights in the Philippines work. We time them so you are not up at 3am. Treat the whole thing as a starting point. Swap Bohol for Siquijor, add Coron, take a night out of Siargao and give it to El Nido: we will rebuild the route around what you want."
    ),
    highlights: {
      en: [
        "A private early boat into El Nido's lagoons before the tour fleet",
        "The Loboc River and the Chocolate Hills at first light",
        "Island-hopping Siargao's southern islands: Naked, Daku and Guyam",
        "Sugba Lagoon by outrigger, with time to paddle",
        "Two transfer days, planned so they cost you as little as possible",
        "One local support line from arrival to departure",
      ],
      fr: [
        "Un bateau privé à l'aube dans les lagons d'El Nido, avant la flotte des excursions",
        "La rivière Loboc et les Chocolate Hills aux premières lueurs",
        "Les îles du sud de Siargao en bangka : Naked, Daku et Guyam",
        "Le lagon de Sugba en pirogue à balancier, avec le temps de pagayer",
        "Deux journées de transfert, organisées pour vous coûter le moins possible",
        "Une seule ligne d'assistance locale, de l'arrivée au départ",
      ],
      es: [
        "Una barca privada al amanecer por las lagunas de El Nido, antes que la flota de excursiones",
        "El río Loboc y las Chocolate Hills con la primera luz",
        "Las islas del sur de Siargao en bangka: Naked, Daku y Guyam",
        "La laguna de Sugba en barca de batangas, con tiempo para remar",
        "Dos días de traslado, planificados para que te cuesten lo mínimo",
        "Una única línea de asistencia local, de la llegada a la salida",
      ],
      ru: [
        "Частная лодка на рассвете в лагуны Эль-Нидо — раньше туристических флотилий",
        "Река Лобок и Шоколадные холмы в первых лучах солнца",
        "Острова юга Сиаргао: Нейкед, Даку и Гуям",
        "Лагуна Сугба на лодке с балансирами и время для каякинга",
        "Два дня переездов, спланированные так, чтобы отнимать минимум времени",
        "Одна линия местной поддержки — от прилёта до вылета",
      ],
      ar: [
        "قارب خاص في الصباح الباكر إلى بحيرات إل نيدو قبل وصول قوارب الجولات",
        "نهر لوبوك وتلال الشوكولاتة مع أول ضوء للنهار",
        "جولة بين جزر جنوب سيارغاو: نيكد وداكو وغويام",
        "بحيرة سوغبا بقارب تقليدي مع وقت للتجديف",
        "يوما تنقّل مخططان بعناية ليأخذا من وقتك أقل ما يمكن",
        "خط دعم محلي واحد من لحظة الوصول حتى المغادرة",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Land in Manila, sleep near the airport"),
        body: en(
          "Most long-haul flights from Europe and the Gulf arrive into Manila. We meet you, take you to a quiet hotel near the airport and leave you alone. If your flight lands early enough we can connect you to El Nido the same day, but after twelve-plus hours in the air most people are glad of the night."
        ),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "el-nido",
        title: en("Fly to El Nido"),
        body: en(
          "A short flight on a small turboprop lands at El Nido's own airstrip, about 20 minutes from town. Seats are limited and luggage allowances are strict, so we book this early. The afternoon is yours: a swim at Corong Corong and the sunset over Bacuit Bay."
        ),
        overnight: "El Nido",
      },
      {
        days: "3–5",
        place: "el-nido",
        title: en("Lagoons, beaches and one day off the boat"),
        body: en(
          "We start with the lagoons on an early private or small-group boat, depending on your tier, so you are inside the Big and Small Lagoon before the main fleet. The next day takes in the quieter islands of the bay. Day five is deliberately loose: Nacpan beach by tricycle, a massage, or nothing at all."
        ),
        overnight: "El Nido",
      },
      {
        days: "6",
        place: "bohol",
        title: en("Transfer day: El Nido to Bohol via Manila"),
        body: en(
          "There is no direct way from Palawan to Bohol, so this is a two-flight day connecting in Manila (occasionally Cebu, depending on the season's schedules). We build in a sensible connection window and have someone meet you at Panglao airport. Expect to arrive mid-afternoon."
        ),
        overnight: "Panglao, Bohol",
      },
      {
        days: "7–9",
        place: "bohol",
        title: en("Bohol: hills, river and a slower pace"),
        body: en(
          "Go to the Chocolate Hills early: the light is softer and the tour vans arrive later in the morning. Add the tarsier sanctuary, a stretch of the Loboc River and lunch in the countryside. Keep one day for the beach and, if the sea is kind, an early boat to Balicasag for snorkelling."
        ),
        overnight: "Panglao, Bohol",
      },
      {
        days: "10",
        place: "siargao",
        title: en("Transfer day: Bohol to Siargao via Cebu"),
        body: en(
          "A fast ferry from Tagbilaran to Cebu takes about two hours, then a one-hour flight to Siargao. It is a full day, but a straightforward one. Your driver meets you at Sayak airport for the 45-minute ride to General Luna."
        ),
        overnight: "General Luna, Siargao",
      },
      {
        days: "11–13",
        place: "siargao",
        title: en("Siargao: islands, lagoons and a first surf lesson"),
        body: en(
          "One day island-hopping Naked, Daku and Guyam; one day north to Sugba Lagoon by boat from Del Carmen; one day for a beginner surf lesson on a gentle reef break, the Magpupungko rock pools at low tide, or a scooter ride through the palms. Evenings in General Luna are relaxed and good for eating well."
        ),
        overnight: "General Luna, Siargao",
      },
      {
        days: "14",
        place: "siargao",
        title: en("Fly out via Manila or Cebu"),
        body: en(
          "Siargao has no international flights, so you connect in Manila or Cebu for your flight home. We choose the domestic flight to leave a comfortable buffer, because island flights do run late."
        ),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "El Nido", time: "1h 20m flight", note: en("Small-plane service with a strict baggage allowance. Alternative: fly to Puerto Princesa and drive 5–6h north.") },
      { mode: "flight", from: "El Nido", to: "Manila", time: "1h 20m flight" },
      { mode: "flight", from: "Manila", to: "Bohol (Panglao)", time: "1h 20m flight" },
      { mode: "ferry", from: "Tagbilaran", to: "Cebu", time: "around 2h fast ferry" },
      { mode: "flight", from: "Cebu", to: "Siargao", time: "1h flight" },
      { mode: "road", from: "Siargao airport", to: "General Luna", time: "45m by road" },
      { mode: "flight", from: "Siargao", to: "Manila", time: "1h 50m flight", note: en("Or via Cebu, depending on your international connection.") },
    ],
    experiences: enList([
      "Early-start boat into El Nido's Big and Small Lagoon",
      "Bacuit Bay island-hopping on a quieter route",
      "Chocolate Hills at sunrise and the tarsier sanctuary",
      "Loboc River by paddleboard or traditional boat",
      "Balicasag snorkelling, weather permitting",
      "Siargao island-hopping: Naked, Daku and Guyam",
      "Sugba Lagoon day trip from Del Carmen",
      "A beginner surf lesson with a local coach",
    ]),
    included: {
      en: [
        "13 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Manila–El Nido, El Nido–Manila, Manila–Bohol, Cebu–Siargao",
        "Tagbilaran–Cebu fast ferry",
        "Airport and port transfers (shared in Essential, private from Boutique up)",
        "Two El Nido boat days, one Bohol countryside day, two Siargao boat days",
        "Pre-departure planning call and a printed-quality digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "13 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Manila–El Nido, El Nido–Manila, Manila–Bohol, Cebú–Siargao",
        "Ferry rápido Tagbilaran–Cebú",
        "Traslados de aeropuerto y puerto (compartidos en Essential, privados desde Boutique)",
        "Dos días en barco en El Nido, un día por el interior de Bohol y dos días en barco en Siargao",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "13 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Manille–El Nido, El Nido–Manille, Manille–Bohol, Cebu–Siargao",
        "Ferry rapide Tagbilaran–Cebu",
        "Transferts aéroport et port (partagés en Essential, privés à partir de Boutique)",
        "Deux journées en bateau à El Nido, une journée dans la campagne de Bohol, deux journées en bateau à Siargao",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "El Nido eco-tourism and environmental fees, terminal fees",
        "Drinks",
        "Tips for guides, boat crews and drivers",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas ecoturísticas y medioambientales de El Nido, tasas de terminal",
        "Bebidas",
        "Propinas para guías, tripulaciones y conductores",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes écotouristiques et environnementales d'El Nido, taxes de terminal",
        "Boissons",
        "Pourboires pour les guides, équipages et chauffeurs",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList([
      "Private boat for every El Nido day, with lunch on a quiet beach",
      "Add Coron for three nights by fast ferry (drier months only)",
      "Swap Bohol for Siquijor and a slower few days",
      "Private surf coaching every morning in Siargao",
      "Final night in a Manila hotel with a late check-out before your flight",
    ]),
    bestMonths: {
      en: "December to May; March to May is the sweet spot for Palawan and Siargao together",
      fr: "De décembre à mai ; de mars à mai, le meilleur moment pour combiner Palawan et Siargao",
      es: "De diciembre a mayo; de marzo a mayo es el mejor momento para combinar Palawan y Siargao",
      ru: "С декабря по май; март–май — лучшее время, чтобы совместить Палаван и Сиаргао",
      ar: "من ديسمبر إلى مايو، وأفضل فترة للجمع بين بالاوان وسيارغاو من مارس إلى مايو",
    },
    fromPriceEUR: { essential: 2300, boutique: 3400, premium: 5800, signature: 9800 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Can I change the islands?",
        "Yes. This is a starting point. The most common changes are swapping Bohol for Siquijor, adding Coron, or dropping a stop to slow down. We will tell you honestly what each change costs in transfer time."
      ),
      faq(
        "When is the best month?",
        "March to May gives you the best chance of good weather in El Nido and Siargao at the same time. December to February is also good for Palawan and Bohol, though Siargao can be wetter then."
      ),
      faq(
        "Does it work with children?",
        "Very well from about age six. Boat days are easy to shorten, Bohol is gentle, and we can choose family rooms and calmer beaches. With very young children we usually cut one stop."
      ),
      faq(
        "How do the domestic flights work?",
        "Most routes between islands connect through Manila or Cebu, so two of your days include a connection. We book everything, hold the schedule and rebook you if a flight is changed."
      ),
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. Palawan Deep Dive
  // ---------------------------------------------------------------------------
  {
    slug: "palawan-deep-dive",
    title: {
      en: "Palawan Deep Dive",
      fr: "Palawan en profondeur",
      es: "Palawan a fondo",
      ru: "Палаван вглубь",
      ar: "بالاوان بعمق",
    },
    days: 12,
    route: ["manila", "coron", "el-nido", "port-barton", "puerto-princesa"],
    styles: ["essential", "boutique", "premium"],
    categories: ["island-escapes", "diving", "nature-adventure", "off-the-beaten-path"],
    photo: {
      alt: {
        en: "A diver's view of a Second World War shipwreck covered in coral, Coron",
        fr: "Une épave de la Seconde Guerre mondiale couverte de corail, vue par un plongeur, Coron",
        es: "Un pecio de la Segunda Guerra Mundial cubierto de coral, visto por un buceador, Coron",
        ru: "Затонувшее судно времён Второй мировой войны, поросшее кораллами, глазами дайвера, Корон",
        ar: "حطام سفينة من الحرب العالمية الثانية تغطيه الشعاب المرجانية كما يراه الغواص في كورون",
      },
      brief:
        "Underwater, natural light, around 15–20m. The hull or deck structure of a Coron wreck encrusted with coral and soft growth, a single diver in the frame for scale, slightly above the wreck. Blue-green water, no flash glare. Alternative surface shot: a lake among karst cliffs in Coron with a boat just arriving.",
      tone: "reef",
    },
    short: {
      en: "One island, three speeds: Coron's wrecks and lakes, El Nido's lagoons, then Port Barton, where Palawan still feels like a fishing coast. Joined by sea and road, not airports.",
      fr: "Une île, trois rythmes : les épaves et les lacs de Coron, les lagons d'El Nido, puis Port Barton, où Palawan ressemble encore à une côte de pêcheurs. Reliés par la mer et la route, pas par les aéroports.",
      es: "Una isla, tres ritmos: los pecios y lagos de Coron, las lagunas de El Nido y Port Barton, donde Palawan aún parece una costa de pescadores. Unidos por mar y carretera, no por aeropuertos.",
      ru: "Один остров, три темпа: затонувшие корабли и озёра Корона, лагуны Эль-Нидо и Порт-Бартон, где Палаван всё ещё похож на рыбацкое побережье. Всё связано морем и дорогой, а не аэропортами.",
      ar: "جزيرة واحدة بثلاث إيقاعات: حطام السفن والبحيرات في كورون، وبحيرات إل نيدو، ثم بورت بارتون حيث لا تزال بالاوان تشبه ساحلًا للصيادين. تنتقل بينها بحرًا وبرًّا، لا عبر المطارات.",
    },
    intro: en(
      "Palawan rewards people who stay a while, and this route is built for that. You start in Coron, where the best of the island is underwater: Japanese wrecks from 1944 for divers, and coral gardens and freshwater lakes in the karst for everyone else. A fast ferry carries you south to El Nido, then a road through farmland and fishing villages brings you to Port Barton, a bay town with no airport, no big resorts and very little to do except swim, eat grilled fish and take a boat to a sandbar.\n\nThe trade-off is weather. The Coron–El Nido ferry runs mainly in the drier months and is cancelled when the sea is rough, so we keep a flight option in reserve. Like all our journeys, this is a starting point: divers often add a night in Coron, slower travellers drop Port Barton for San Vicente's long beach, and some people skip Coron altogether. Tell us and we will reshape it."
    ),
    highlights: {
      en: [
        "Wreck dives or wreck snorkelling in Coron Bay",
        "Kayangan and Barracuda Lakes on an early private boat",
        "The fast ferry from Coron to El Nido across open water",
        "El Nido's lagoons before the crowds",
        "Port Barton's bay, sandbars and turtles, at fishing-village pace",
        "No airports between Coron and Puerto Princesa",
      ],
      fr: [
        "Plongée ou snorkeling sur les épaves de la baie de Coron",
        "Les lacs Kayangan et Barracuda à bord d'un bateau privé, tôt le matin",
        "Le ferry rapide de Coron à El Nido, en pleine mer",
        "Les lagons d'El Nido avant la foule",
        "La baie de Port Barton, ses bancs de sable et ses tortues, au rythme d'un village de pêcheurs",
        "Aucun aéroport entre Coron et Puerto Princesa",
      ],
      es: [
        "Buceo o snorkel en los pecios de la bahía de Coron",
        "Los lagos Kayangan y Barracuda en barca privada, a primera hora",
        "El ferry rápido de Coron a El Nido en mar abierto",
        "Las lagunas de El Nido antes que la multitud",
        "La bahía de Port Barton, sus bancos de arena y tortugas, a ritmo de pueblo pesquero",
        "Ningún aeropuerto entre Coron y Puerto Princesa",
      ],
      ru: [
        "Дайвинг или снорклинг на затонувших кораблях в заливе Корон",
        "Озёра Каянган и Барракуда на частной лодке рано утром",
        "Скоростной паром из Корона в Эль-Нидо через открытое море",
        "Лагуны Эль-Нидо до наплыва туристов",
        "Залив Порт-Бартона, песчаные косы и черепахи в ритме рыбацкой деревни",
        "Ни одного аэропорта между Короном и Пуэрто-Принсесой",
      ],
      ar: [
        "غوص أو سباحة بالأنبوب فوق حطام السفن في خليج كورون",
        "بحيرتا كايانغان وباراكودا على متن قارب خاص في الصباح الباكر",
        "العبّارة السريعة من كورون إلى إل نيدو عبر البحر المفتوح",
        "بحيرات إل نيدو قبل وصول الحشود",
        "خليج بورت بارتون وكثبانه الرملية وسلاحفه، بإيقاع قرية صيادين",
        "لا مطارات بين كورون وبويرتو برنسيسا",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en(
          "We meet you off your international flight and take you to a hotel close to the domestic terminal. Coron flights leave early, so a night here keeps day two calm."
        ),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "coron",
        title: en("Fly to Busuanga, drive to Coron town"),
        body: en(
          "A one-hour flight to Busuanga, then about 40 minutes by road to Coron town. Climb Mount Tapyas for the view at sunset, all 700-odd steps of it, or save your legs for tomorrow."
        ),
        overnight: "Coron",
      },
      {
        days: "3–4",
        place: "coron",
        title: en("Lakes, reefs and wrecks"),
        body: en(
          "Leave early for Kayangan Lake and Barracuda Lake, ahead of the day-trip boats, with snorkelling stops on the reefs around Coron Island. Day four is for wrecks: certified divers do two or three dives on the Japanese supply ships sunk in 1944, and snorkellers visit the shallow Skeleton Wreck and Lusong Gunboat."
        ),
        overnight: "Coron",
      },
      {
        days: "5",
        place: "el-nido",
        title: en("By sea to El Nido"),
        body: en(
          "The fast ferry takes around four hours across open water and lands you in El Nido town in the afternoon. It runs mainly from about November to May and is cancelled in rough weather; if that happens we move you onto a flight instead."
        ),
        overnight: "El Nido",
      },
      {
        days: "6–8",
        place: "el-nido",
        title: en("El Nido's bay and the quieter north"),
        body: en(
          "One early boat day to the lagoons, one to the islands further out, and one on land: Nacpan beach, a kayak along the coast, or a lazy afternoon at Las Cabanas. By now you will have opinions about the best grilled fish in town."
        ),
        overnight: "El Nido",
      },
      {
        days: "9–10",
        place: "port-barton",
        title: en("South by road to Port Barton"),
        body: en(
          "About four hours by road through rice fields and small towns, with the last stretch winding down to the coast. Port Barton has no airport and few cars, and the boat tours here are small and unhurried: sandbars, turtle spots on the reef and lunch on an empty beach. It is the part of the trip people mention most when they get home."
        ),
        overnight: "Port Barton",
      },
      {
        days: "11",
        place: "puerto-princesa",
        title: en("Road to Puerto Princesa"),
        body: en(
          "Around three hours by road to Puerto Princesa. If you want to see the Underground River, we can route you via Sabang and do it on the way, which makes a long but worthwhile day. Otherwise, an easy afternoon and dinner in the city."
        ),
        overnight: "Puerto Princesa",
      },
      {
        days: "12",
        place: "puerto-princesa",
        title: en("Fly home via Manila"),
        body: en(
          "A 1h 20m flight to Manila connects to your international flight. We leave a generous buffer between the two."
        ),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "Busuanga (Coron)", time: "1h flight" },
      { mode: "road", from: "Busuanga airport", to: "Coron town", time: "around 40m by road" },
      { mode: "ferry", from: "Coron", to: "El Nido", time: "around 4h fast ferry", note: en("Runs mainly November to May and is weather-dependent. Backup: fly via Manila.") },
      { mode: "road", from: "El Nido", to: "Port Barton", time: "around 4h by road" },
      { mode: "road", from: "Port Barton", to: "Puerto Princesa", time: "around 3h by road" },
      { mode: "flight", from: "Puerto Princesa", to: "Manila", time: "1h 20m flight" },
    ],
    experiences: enList([
      "Kayangan and Barracuda Lakes on an early boat",
      "Wreck diving (certified) or wreck snorkelling in Coron Bay",
      "Sunset from Mount Tapyas",
      "El Nido lagoons and outer islands by boat",
      "Kayaking the El Nido coast",
      "Port Barton island-hopping: sandbars, reef and turtles",
      "Optional: Puerto Princesa Underground River via Sabang",
    ]),
    included: {
      en: [
        "11 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights Manila–Busuanga and Puerto Princesa–Manila",
        "Coron–El Nido fast ferry (or replacement flight if it is cancelled)",
        "Road transfers El Nido–Port Barton–Puerto Princesa (shared van in Essential, private car from Boutique up)",
        "Two Coron boat days, two El Nido boat days, one Port Barton boat day",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "11 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos Manila–Busuanga y Puerto Princesa–Manila",
        "Ferry rápido Coron–El Nido (o vuelo alternativo si se cancela)",
        "Traslados por carretera El Nido–Port Barton–Puerto Princesa (furgoneta compartida en Essential, coche privado desde Boutique)",
        "Dos días en barco en Coron, dos en El Nido y uno en Port Barton",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "11 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs Manille–Busuanga et Puerto Princesa–Manille",
        "Ferry rapide Coron–El Nido (ou vol de remplacement en cas d'annulation)",
        "Transferts par la route El Nido–Port Barton–Puerto Princesa (minibus partagé en Essential, voiture privée à partir de Boutique)",
        "Deux journées en bateau à Coron, deux à El Nido et une à Port Barton",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Extra insurance cover for diving, if you dive",
        "Dive fees and equipment rental",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Cobertura adicional del seguro para buceo, si buceas",
        "Tasas de buceo y alquiler de equipo",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Extension d'assurance pour la plongée, si vous plongez",
        "Frais de plongée et location de matériel",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList([
      "Private boat on every boat day",
      "Extra night in Coron for a second dive day",
      "Underground River permit and private transfer via Sabang",
      "Swap Port Barton for two nights on San Vicente's long beach",
    ]),
    bestMonths: {
      en: "November to May, when the Coron–El Nido ferry runs most reliably; February to April is calmest",
      fr: "De novembre à mai, quand le ferry Coron–El Nido est le plus fiable ; de février à avril, la mer est la plus calme",
      es: "De noviembre a mayo, cuando el ferry Coron–El Nido es más fiable; de febrero a abril el mar está más tranquilo",
      ru: "С ноября по май, когда паром Корон — Эль-Нидо ходит надёжнее всего; с февраля по апрель море спокойнее всего",
      ar: "من نوفمبر إلى مايو حين تكون عبّارة كورون–إل نيدو أكثر انتظامًا، والبحر أهدأ ما يكون من فبراير إلى أبريل",
    },
    fromPriceEUR: { essential: 2000, boutique: 3000, premium: 5200 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Can I change the route?",
        "Yes. Many people reverse it, flying into Puerto Princesa and out of Coron. You can also drop Port Barton, add San Vicente, or stay longer in one place. It is a starting point."
      ),
      faq(
        "What if the ferry is cancelled?",
        "It happens a few times a season in rough weather. We watch the forecast with the operator and, if needed, rebook you on a flight via Manila. You lose a few hours, not a day."
      ),
      faq(
        "Do I need to dive?",
        "No. The wreck day works as a snorkelling day, and two of Coron's wrecks are shallow enough to see from the surface. Divers need a certification card and recent experience."
      ),
      faq(
        "Is it suitable for children?",
        "Yes for confident swimmers from around eight. The road legs are long for small children, so families sometimes skip Port Barton or fly out of El Nido instead."
      ),
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. The Slow Philippines
  // ---------------------------------------------------------------------------
  {
    slug: "the-slow-philippines",
    title: {
      en: "The Slow Philippines",
      fr: "Les Philippines, lentement",
      es: "Filipinas sin prisa",
      ru: "Неспешные Филиппины",
      ar: "الفلبين على مهل",
    },
    days: 16,
    route: ["manila", "dumaguete", "siquijor", "bohol", "siargao"],
    styles: ["essential", "boutique", "premium"],
    categories: ["wellness", "off-the-beaten-path", "island-escapes", "food-culture"],
    photo: {
      alt: {
        en: "Late afternoon on a quiet beach in Siquijor, with a single bangka pulled up on the sand",
        fr: "Fin d'après-midi sur une plage tranquille de Siquijor, une seule bangka tirée sur le sable",
        es: "Última hora de la tarde en una playa tranquila de Siquijor, con una sola bangka varada en la arena",
        ru: "Поздний вечер на тихом пляже Сикихора, на песке одна вытащенная лодка",
        ar: "آخر النهار على شاطئ هادئ في سيكيخور وقارب بانكا وحيد مسحوب إلى الرمال",
      },
      brief:
        "Golden hour on Siquijor's west coast (San Juan area). One bangka hauled up on the sand, low sun behind, long shadows, a few palms. Calm water. Shoot wide and slightly low. A local family or fisherman small in the frame is fine; no posed tourists.",
      tone: "dusk",
    },
    short: {
      en: "Fewer stops, longer stays. Siquijor's waterfalls and healers, Bohol's countryside, then four unhurried days in Siargao. For people who would rather know one place well than see six.",
      fr: "Moins d'étapes, des séjours plus longs. Les cascades et guérisseurs de Siquijor, la campagne de Bohol, puis quatre jours sans hâte à Siargao. Pour ceux qui préfèrent bien connaître un lieu plutôt qu'en voir six.",
      es: "Menos paradas, estancias más largas. Las cascadas y curanderos de Siquijor, el campo de Bohol y cuatro días sin prisa en Siargao. Para quien prefiere conocer bien un lugar antes que ver seis.",
      ru: "Меньше остановок, дольше на каждой. Водопады и целители Сикихора, сельский Бохоль, затем четыре неторопливых дня на Сиаргао. Для тех, кто лучше узнает одно место, чем мельком увидит шесть.",
      ar: "محطات أقل وإقامات أطول. شلالات سيكيخور ومعالجوها التقليديون، وريف بوهول، ثم أربعة أيام هادئة في سيارغاو. لمن يفضّل أن يعرف مكانًا واحدًا جيدًا على أن يرى ستة أماكن على عجل.",
    },
    intro: en(
      "Most Philippines itineraries are built around how much you can see. This one is built around how little you need to move. Siquijor gets four full days: enough to swim at Cambugahay Falls before the day-trippers, drive the coast road in an afternoon, meet a traditional healer if you are curious, and then do very little. Bohol follows, with its rivers and hills, and the trip ends with four days in Siargao, where the rhythm is set by tides and breakfast.\n\nThere is still logistics. Getting to Siquijor means a flight to Dumaguete and a fast craft across, and reaching Siargao from Bohol means a ferry to Cebu and a short flight. We have kept those to three travel days in sixteen. This is a starting point, not a fixed programme: add Apo Island from Dumaguete, trade Bohol for Camiguin, or give Siquijor a fifth night."
    ),
    highlights: {
      en: [
        "Four full days on Siquijor, an island most itineraries rush",
        "Cambugahay Falls at 8am, before the day trips",
        "Bohol's Loboc River and Chocolate Hills without hurrying",
        "Four days in Siargao to learn the tides and the town",
        "Only three real travel days in sixteen",
      ],
      fr: [
        "Quatre jours pleins à Siquijor, une île que la plupart des circuits traversent en courant",
        "Les chutes de Cambugahay à 8 h, avant les excursions",
        "La rivière Loboc et les Chocolate Hills de Bohol, sans se presser",
        "Quatre jours à Siargao pour apprendre les marées et la ville",
        "Seulement trois vraies journées de trajet sur seize",
      ],
      es: [
        "Cuatro días completos en Siquijor, una isla que casi todos los itinerarios recorren deprisa",
        "Las cascadas de Cambugahay a las 8 de la mañana, antes de las excursiones",
        "El río Loboc y las Chocolate Hills de Bohol, sin prisas",
        "Cuatro días en Siargao para aprender las mareas y el pueblo",
        "Solo tres días de viaje de verdad en dieciséis",
      ],
      ru: [
        "Четыре полных дня на Сикихоре — острове, который большинство маршрутов пробегает",
        "Водопады Камбугахай в 8 утра, до экскурсионных групп",
        "Река Лобок и Шоколадные холмы Бохоля без спешки",
        "Четыре дня на Сиаргао, чтобы понять приливы и сам городок",
        "Всего три настоящих дня в дороге из шестнадцати",
      ],
      ar: [
        "أربعة أيام كاملة في سيكيخور، الجزيرة التي تمر بها معظم البرامج على عجل",
        "شلالات كامبوغاهاي في الثامنة صباحًا قبل الرحلات اليومية",
        "نهر لوبوك وتلال الشوكولاتة في بوهول دون استعجال",
        "أربعة أيام في سيارغاو لتتعرف إلى المد والجزر وإلى البلدة",
        "ثلاثة أيام تنقّل فقط من أصل ستة عشر يومًا",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en(
          "Met at the airport and taken to a hotel nearby. Rest; tomorrow is a two-step travel day."
        ),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "siquijor",
        title: en("Fly to Dumaguete, cross to Siquijor"),
        body: en(
          "A 1h 20m flight to Dumaguete, a short drive to the port and a fast craft of about an hour to an hour and a half to Siquijor. If time allows, lunch on Dumaguete's seafront boulevard before the crossing. Your driver meets you at the pier."
        ),
        overnight: "San Juan, Siquijor",
      },
      {
        days: "3–6",
        place: "siquijor",
        title: en("Siquijor at its own pace"),
        body: en(
          "Swim at Cambugahay Falls early, then circle the island's 70-odd-kilometre coast road in an afternoon, with stops at the old balete tree and Lazi's coral-stone church. Snorkel off Tubod, take a boat to Apo Island if the sea allows, and leave at least one day with nothing planned. Siquijor is known for its folk healers; we can arrange a respectful visit for those who are interested."
        ),
        overnight: "San Juan, Siquijor",
      },
      {
        days: "7",
        place: "bohol",
        title: en("Fast craft to Bohol"),
        body: en(
          "A direct fast craft runs from Siquijor to Tagbilaran in around two hours, though schedules are thin and change, so we confirm it close to the date. If it is not running, we go via Dumaguete. Afternoon on Panglao."
        ),
        overnight: "Panglao, Bohol",
      },
      {
        days: "8–10",
        place: "bohol",
        title: en("Bohol: river, hills and countryside"),
        body: en(
          "The Chocolate Hills early in the morning, the tarsier sanctuary and a slow hour on the Loboc River. Give a day to the quieter east coast or Anda's beaches, and another to a long lunch and a swim."
        ),
        overnight: "Panglao, Bohol",
      },
      {
        days: "11",
        place: "siargao",
        title: en("Bohol to Siargao via Cebu"),
        body: en(
          "About two hours by fast ferry to Cebu, then a one-hour flight to Siargao and a 45-minute drive to General Luna. A long day, but you will not move again until you leave."
        ),
        overnight: "General Luna, Siargao",
      },
      {
        days: "12–15",
        place: "siargao",
        title: en("Four slow days in Siargao"),
        body: en(
          "Surf if you want to, yoga if you prefer, both if you are ambitious. Take one island-hopping day to Naked, Daku and Guyam, one to Sugba Lagoon, and let the rest arrange itself around low tide at Magpupungko and dinner in town."
        ),
        overnight: "General Luna, Siargao",
      },
      {
        days: "16",
        place: "siargao",
        title: en("Fly out via Manila or Cebu"),
        body: en(
          "A domestic flight connects you to your international departure, with a comfortable buffer built in."
        ),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "Dumaguete", time: "1h 20m flight" },
      { mode: "ferry", from: "Dumaguete", to: "Siquijor", time: "1h–1h 30m fast craft" },
      { mode: "ferry", from: "Siquijor", to: "Tagbilaran (Bohol)", time: "around 2h fast craft", note: en("Limited and changeable schedule; backup route via Dumaguete.") },
      { mode: "ferry", from: "Tagbilaran", to: "Cebu", time: "around 2h fast ferry" },
      { mode: "flight", from: "Cebu", to: "Siargao", time: "1h flight" },
      { mode: "flight", from: "Siargao", to: "Manila", time: "1h 50m flight" },
    ],
    experiences: enList([
      "Cambugahay Falls before the day trips",
      "Siquijor coast road by private car or scooter",
      "Snorkelling off Siquijor's west coast",
      "Optional Apo Island boat trip, sea permitting",
      "Chocolate Hills, tarsiers and the Loboc River",
      "Siargao island-hopping and Sugba Lagoon",
      "Surf lessons or morning yoga in General Luna",
    ]),
    included: {
      en: [
        "15 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights Manila–Dumaguete and Cebu–Siargao",
        "Fast craft Dumaguete–Siquijor, Siquijor–Bohol and Bohol–Cebu",
        "Airport and pier transfers (shared in Essential, private from Boutique up)",
        "Siquijor island day with driver, Bohol countryside day, two Siargao boat days",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "15 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos Manila–Dumaguete y Cebú–Siargao",
        "Barco rápido Dumaguete–Siquijor, Siquijor–Bohol y Bohol–Cebú",
        "Traslados de aeropuerto y muelle (compartidos en Essential, privados desde Boutique)",
        "Un día por Siquijor con conductor, un día por el interior de Bohol y dos días en barco en Siargao",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "15 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs Manille–Dumaguete et Cebu–Siargao",
        "Bateau rapide Dumaguete–Siquijor, Siquijor–Bohol et Bohol–Cebu",
        "Transferts aéroport et embarcadère (partagés en Essential, privés à partir de Boutique)",
        "Une journée à Siquijor avec chauffeur, une journée dans la campagne de Bohol, deux journées en bateau à Siargao",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Surf lessons, yoga classes and spa treatments",
        "Drinks",
        "Environmental, terminal and port fees; tips",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Clases de surf, yoga y tratamientos de spa",
        "Bebidas",
        "Tasas medioambientales, de terminal y de puerto; propinas",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Cours de surf, de yoga et soins au spa",
        "Boissons",
        "Taxes environnementales, de terminal et portuaires ; pourboires",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList([
      "A wellness-focused stay in Siargao with daily treatments",
      "Private boat to Apo Island for snorkelling with turtles",
      "Swap Bohol for Camiguin's volcanoes and hot springs",
      "A fifth night in Siquijor",
    ]),
    bestMonths: {
      en: "February to June; March to May is the best balance of calm seas and sunshine",
      fr: "De février à juin ; de mars à mai, le meilleur équilibre entre mer calme et soleil",
      es: "De febrero a junio; de marzo a mayo, el mejor equilibrio entre mar tranquilo y sol",
      ru: "С февраля по июнь; март–май — лучшее сочетание спокойного моря и солнца",
      ar: "من فبراير إلى يونيو، وأفضل توازن بين هدوء البحر والشمس من مارس إلى مايو",
    },
    fromPriceEUR: { essential: 2400, boutique: 3600, premium: 6200 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Can I change the islands?",
        "Of course. Camiguin, Dumaguete and Apo Island all fit this pace. We would advise against adding a fourth stop, which is the one change that undoes what the trip is for."
      ),
      faq(
        "Is Siquijor safe? I have read about witchcraft.",
        "Yes. Siquijor's reputation for folk healing and 'mystery' is mostly a point of local pride and a good story. It is one of the calmest and friendliest islands we work on."
      ),
      faq(
        "Is it suitable for kids?",
        "Very. The pace is gentle, the transfers are short, and Siquijor's waterfalls and Bohol's tarsiers are a hit with children."
      ),
      faq(
        "How reliable is the Siquijor–Bohol boat?",
        "It runs, but not every day, and schedules change. We confirm a few days ahead and reroute via Dumaguete if needed, which adds a couple of hours."
      ),
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Honeymoon Inside Philippines
  // ---------------------------------------------------------------------------
  {
    slug: "honeymoon-inside-philippines",
    title: {
      en: "Honeymoon Inside Philippines",
      fr: "Lune de miel Inside Philippines",
      es: "Luna de miel Inside Philippines",
      ru: "Медовый месяц Inside Philippines",
      ar: "شهر عسل مع Inside Philippines",
    },
    days: 12,
    route: ["manila", "el-nido", "private-island", "siargao"],
    styles: ["boutique", "premium", "signature"],
    categories: ["honeymoons", "luxury", "island-escapes", "private-journeys"],
    photo: {
      alt: {
        en: "A couple's dinner table set on the sand at dusk on a private island in northern Palawan",
        fr: "Une table pour deux dressée sur le sable au crépuscule, sur une île privée du nord de Palawan",
        es: "Una mesa para dos sobre la arena al atardecer en una isla privada del norte de Palawan",
        ru: "Ужин для двоих на песке в сумерках на частном острове северного Палавана",
        ar: "طاولة عشاء لشخصين على الرمال عند الغروب في جزيرة خاصة شمال بالاوان",
      },
      brief:
        "Blue hour on a small beach. A simple table for two with lanterns and linen, set near the waterline, karst islands silhouetted behind. Restrained styling: no rose petals, no heart shapes. Couple optional and only from behind or at a distance.",
      tone: "dusk",
    },
    short: {
      en: "El Nido from a private boat, three nights on an island where yours is one of very few villas, then Siargao's easy evenings. Two people, one plan, nobody else's schedule.",
      fr: "El Nido depuis un bateau privé, trois nuits sur une île où votre villa est l'une des rares, puis les soirées tranquilles de Siargao. Deux personnes, un seul plan, l'emploi du temps de personne d'autre.",
      es: "El Nido desde una barca privada, tres noches en una isla donde la vuestra es una de muy pocas villas y después las tardes tranquilas de Siargao. Dos personas, un plan, sin horarios ajenos.",
      ru: "Эль-Нидо с частной лодки, три ночи на острове, где ваша вилла — одна из немногих, затем лёгкие вечера Сиаргао. Двое, один план и ничьё чужое расписание.",
      ar: "إل نيدو من على قارب خاص، وثلاث ليالٍ في جزيرة تكون فيها فيلتكما واحدة من فلل قليلة جدًا، ثم أمسيات سيارغاو الهادئة. شخصان وخطة واحدة، ودون جدول أحد غيركما.",
    },
    intro: en(
      "A honeymoon should not involve queuing for a tour boat, so this one does not. In El Nido you have your own boat and your own timings: lagoons at seven, lunch on a beach nobody else has reached, back for a nap. Then a short boat ride takes you to a private-island resort in northern Palawan, where there are more staff than guests and the main decision of the day is which side of the island to swim from. Siargao comes last because it is the right contrast: a little more life, good food, a surf lesson you will laugh about, and sunsets over the palms.\n\nThere is one long travel day, from the island to Siargao via Manila, and we make it as smooth as it can be with private transfers and a lounge between flights. As with all our journeys, this is a starting point. Some couples swap Siargao for a second island resort; others add Bohol or Coron. We will shape it around the two of you."
    ),
    highlights: {
      en: [
        "Your own boat and crew for every El Nido day",
        "Three nights on a private-island resort in northern Palawan",
        "A dinner on the sand, set up just for you",
        "Siargao's lagoons and a surf lesson for two",
        "Private transfers throughout, and someone to call at any hour",
      ],
      fr: [
        "Votre propre bateau et son équipage pour chaque journée à El Nido",
        "Trois nuits dans un resort sur une île privée du nord de Palawan",
        "Un dîner sur le sable, dressé rien que pour vous",
        "Les lagons de Siargao et un cours de surf à deux",
        "Transferts privés du début à la fin, et quelqu'un à appeler à toute heure",
      ],
      es: [
        "Vuestra propia barca y tripulación para cada día en El Nido",
        "Tres noches en un resort en una isla privada del norte de Palawan",
        "Una cena sobre la arena, preparada solo para vosotros",
        "Las lagunas de Siargao y una clase de surf para dos",
        "Traslados privados en todo momento y alguien a quien llamar a cualquier hora",
      ],
      ru: [
        "Собственная лодка с командой на каждый день в Эль-Нидо",
        "Три ночи на курорте на частном острове на севере Палавана",
        "Ужин на песке, накрытый только для вас двоих",
        "Лагуны Сиаргао и урок сёрфинга на двоих",
        "Частные трансферы на всём маршруте и связь с нами в любое время",
      ],
      ar: [
        "قارب خاص بطاقمه لكل يوم في إل نيدو",
        "ثلاث ليالٍ في منتجع على جزيرة خاصة شمال بالاوان",
        "عشاء على الرمال مُعدّ لكما وحدكما",
        "بحيرات سيارغاو ودرس ركوب أمواج لشخصين",
        "تنقلات خاصة طوال الرحلة وشخص يمكنكما الاتصال به في أي ساعة",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en(
          "Met at the aircraft door or arrivals hall, depending on your tier, and driven to a hotel near the airport with a late dinner if you want one. If your flight lands in the morning, we can connect you straight to El Nido."
        ),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "el-nido",
        title: en("Fly to El Nido"),
        body: en(
          "A short flight lands you at El Nido's airstrip; your driver takes you to a boutique hotel on a quiet stretch of beach away from town. Afternoon in the water, sunset with a drink."
        ),
        overnight: "El Nido",
      },
      {
        days: "3–5",
        place: "el-nido",
        title: en("El Nido on your own boat"),
        body: en(
          "Three days, three different routes around Bacuit Bay, all by private bangka. We start early to see the lagoons empty, then head for beaches the standard tours skip. One afternoon is for a couples' massage and nothing else."
        ),
        overnight: "El Nido",
      },
      {
        days: "6–8",
        place: "private-island",
        title: en("Three nights on a private island"),
        body: en(
          "A boat transfer of around an hour brings you to a private-island resort in northern Palawan. Villas sit over the water or above the beach, the house reef is a few fins from your door, and days fill themselves with kayaks, snorkelling and long lunches. On one evening we set a table for two on the sand."
        ),
        overnight: "Private island, northern Palawan",
      },
      {
        days: "9",
        place: "siargao",
        title: en("To Siargao via Manila"),
        body: en(
          "The one long day of the trip: boat to the mainland, a flight to Manila, a lounge between connections and a flight to Siargao, with private transfers at every end. You arrive in time for dinner."
        ),
        overnight: "Siargao",
      },
      {
        days: "10–11",
        place: "siargao",
        title: en("Siargao: lagoons, palms and a surf lesson"),
        body: en(
          "A private boat to Naked, Daku and Guyam islands, or north to Sugba Lagoon. A gentle surf lesson for two, a scooter ride through the palms, and dinners in General Luna, which has some of the best casual food in the islands."
        ),
        overnight: "Siargao",
      },
      {
        days: "12",
        place: "siargao",
        title: en("Fly out via Manila"),
        body: en(
          "A domestic flight to Manila connects you to your flight home, with a comfortable buffer and lounge access."
        ),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "El Nido", time: "1h 20m flight" },
      { mode: "boat", from: "El Nido", to: "Private island", time: "45m–1h 30m by private boat", note: en("Depends on which island; some resorts transfer via their own airstrip or a mainland jetty.") },
      { mode: "boat", from: "Private island", to: "El Nido", time: "45m–1h 30m by private boat" },
      { mode: "flight", from: "El Nido", to: "Manila", time: "1h 20m flight" },
      { mode: "flight", from: "Manila", to: "Siargao", time: "1h 50m flight" },
      { mode: "flight", from: "Siargao", to: "Manila", time: "1h 50m flight" },
    ],
    experiences: enList([
      "Private bangka days around Bacuit Bay",
      "Couples' massage in El Nido",
      "Private dinner on the sand",
      "House-reef snorkelling and kayaking on the private island",
      "Siargao island-hopping by private boat",
      "A surf lesson for two",
    ]),
    included: {
      en: [
        "11 nights in boutique hotels, high-end resorts or private-island villas, according to tier",
        "Domestic flights Manila–El Nido, El Nido–Manila, Manila–Siargao, Siargao–Manila",
        "Private airport, pier and boat transfers throughout",
        "Three private boat days in El Nido and one in Siargao",
        "One private dinner on the beach",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "11 noches en hoteles boutique, resorts de alta gama o villas en isla privada, según la categoría",
        "Vuelos domésticos Manila–El Nido, El Nido–Manila, Manila–Siargao, Siargao–Manila",
        "Todos los traslados privados de aeropuerto, muelle y barco",
        "Tres días en barco privado en El Nido y uno en Siargao",
        "Una cena privada en la playa",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "11 nuits en hôtels de charme, resorts haut de gamme ou villas sur île privée, selon la gamme",
        "Vols intérieurs Manille–El Nido, El Nido–Manille, Manille–Siargao, Siargao–Manille",
        "Tous les transferts privés aéroport, embarcadère et bateau",
        "Trois journées en bateau privé à El Nido et une à Siargao",
        "Un dîner privé sur la plage",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Meals outside the private island (where resort packages usually include full board)",
        "Spa treatments beyond the one listed",
        "Drinks",
        "Environmental and terminal fees; tips",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Comidas fuera de la isla privada (donde el paquete del resort suele incluir pensión completa)",
        "Tratamientos de spa adicionales al indicado",
        "Bebidas",
        "Tasas medioambientales y de terminal; propinas",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Repas hors de l'île privée (où la formule du resort inclut généralement la pension complète)",
        "Soins au spa au-delà de celui indiqué",
        "Boissons",
        "Taxes environnementales et de terminal ; pourboires",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList([
      "Charter flight from El Nido to Siargao to save most of the transfer day",
      "Overwater villa or pool villa on the private island",
      "Swap Siargao for a second island resort for complete stillness",
      "A sunset sail on a traditional paraw",
      "Professional photographer for one morning",
    ]),
    bestMonths: {
      en: "January to May; the private island is at its best from February to April",
      fr: "De janvier à mai ; l'île privée est au meilleur de sa forme de février à avril",
      es: "De enero a mayo; la isla privada está en su mejor momento de febrero a abril",
      ru: "С января по май; на частном острове лучше всего с февраля по апрель",
      ar: "من يناير إلى مايو، وتكون الجزيرة الخاصة في أجمل حالاتها من فبراير إلى أبريل",
    },
    fromPriceEUR: { boutique: 3900, premium: 6400, signature: 11500 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Can we change the islands?",
        "Yes, and couples often do. Common changes are a second resort instead of Siargao, adding Coron, or more nights on the private island. Treat this as our first draft."
      ),
      faq(
        "When is the best month?",
        "February to April gives calm seas for the boat days and the island transfer. June to October is the wetter season in Palawan; still possible, with fewer guests and lower rates, but less predictable."
      ),
      faq(
        "How do the flights work?",
        "El Nido and Siargao are not connected directly, so day nine routes through Manila. In Signature we can quote a charter that cuts this to a couple of hours."
      ),
      faq(
        "Can you help with a proposal or anniversary surprise?",
        "Yes. Tell us privately and we will arrange it quietly with the boat crew or resort."
      ),
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. Surf & Islands
  // ---------------------------------------------------------------------------
  {
    slug: "surf-and-islands",
    title: {
      en: "Surf & Islands",
      fr: "Surf & îles",
      es: "Surf e islas",
      ru: "Сёрфинг и острова",
      ar: "ركوب الأمواج والجزر",
    },
    days: 15,
    route: ["manila", "siargao", "bohol", "el-nido"],
    styles: ["essential", "boutique", "premium"],
    categories: ["surf", "island-escapes", "nature-adventure"],
    photo: {
      alt: {
        en: "A surfer paddling out at sunrise past palm trees on the coast of Siargao",
        fr: "Un surfeur rame vers le large au lever du soleil, le long des palmiers de la côte de Siargao",
        es: "Un surfista remando mar adentro al amanecer junto a las palmeras de la costa de Siargao",
        ru: "Сёрфер выгребает на рассвете вдоль пальм на побережье Сиаргао",
        ar: "راكب أمواج يجدّف نحو البحر عند شروق الشمس بمحاذاة أشجار النخيل على ساحل سيارغاو",
      },
      brief:
        "Sunrise in General Luna. A lone surfer paddling out across a reef break, shot from the shore or a boardwalk at a low angle, palm silhouettes on one side. Soft orange light on the water. Avoid the Cloud 9 boardwalk cliché framing; find a quieter break.",
      tone: "dusk",
    },
    short: {
      en: "Six days on Siargao with proper surf coaching, then Bohol to rest your shoulders and El Nido's lagoons to finish. Built for beginners and improvers, with something for non-surfers too.",
      fr: "Six jours à Siargao avec un vrai coaching de surf, puis Bohol pour reposer les épaules et les lagons d'El Nido pour finir. Pensé pour les débutants et ceux qui progressent, avec de quoi faire pour les non-surfeurs.",
      es: "Seis días en Siargao con clases de surf de verdad, luego Bohol para descansar los hombros y las lagunas de El Nido para terminar. Para principiantes y quien quiere mejorar, con planes también para quien no surfea.",
      ru: "Шесть дней на Сиаргао с настоящим тренером по сёрфингу, затем Бохоль, чтобы дать отдых плечам, и лагуны Эль-Нидо в финале. Для новичков и тех, кто уже катается, и не только для сёрферов.",
      ar: "ستة أيام في سيارغاو مع تدريب حقيقي على ركوب الأمواج، ثم بوهول لإراحة الكتفين، وبحيرات إل نيدو في الختام. مصممة للمبتدئين ومن يريد التطور، مع ما يناسب من لا يركب الأمواج أيضًا.",
    },
    intro: en(
      "Siargao is where most people in the Philippines learn to surf, and it is a good place to do it: warm water, reef breaks for every level, and coaches who have grown up on them. We give it six days, which is the difference between standing up once and actually starting to surf. Then we move you to Bohol, where the rivers and hills are a rest for sore shoulders, and finish in El Nido, swapping boards for boats and lagoons.\n\nBe aware of the season. Siargao's big swells arrive from around September to November, which is exciting to watch and too much for beginners on the famous breaks; from March to July the waves are smaller and friendlier. There are two travel days connecting through Cebu and Manila. As always, this is a starting point: experienced surfers might want more Siargao and less of everything else, and we can add a surf camp or a boat trip to outer breaks."
    ),
    highlights: {
      en: [
        "Daily surf coaching on Siargao's reef breaks, matched to your level",
        "Watching the pros at Cloud 9 from the boardwalk",
        "Sugba Lagoon and the southern islands on a rest day",
        "Bohol's countryside to slow down",
        "El Nido's lagoons to finish",
        "Board and coach chosen for you before you arrive",
      ],
      fr: [
        "Coaching de surf quotidien sur les vagues de récif de Siargao, adapté à votre niveau",
        "Regarder les pros à Cloud 9 depuis la passerelle",
        "Le lagon de Sugba et les îles du sud pendant un jour de repos",
        "La campagne de Bohol pour ralentir",
        "Les lagons d'El Nido pour finir",
        "Planche et coach choisis pour vous avant votre arrivée",
      ],
      es: [
        "Clases de surf diarias en los arrecifes de Siargao, según tu nivel",
        "Ver a los profesionales en Cloud 9 desde la pasarela",
        "La laguna de Sugba y las islas del sur en un día de descanso",
        "El campo de Bohol para bajar el ritmo",
        "Las lagunas de El Nido para terminar",
        "Tabla y profesor elegidos antes de que llegues",
      ],
      ru: [
        "Ежедневные тренировки по сёрфингу на рифовых волнах Сиаргао под ваш уровень",
        "Профи на Cloud 9 — с деревянного помоста",
        "Лагуна Сугба и южные острова в день отдыха",
        "Сельский Бохоль, чтобы сбавить темп",
        "Лагуны Эль-Нидо в финале",
        "Доска и тренер подобраны ещё до вашего приезда",
      ],
      ar: [
        "تدريب يومي على ركوب الأمواج فوق الشعاب في سيارغاو بما يناسب مستواك",
        "مشاهدة المحترفين في كلاود 9 من الممشى الخشبي",
        "بحيرة سوغبا والجزر الجنوبية في يوم راحة",
        "ريف بوهول لتهدئة الإيقاع",
        "بحيرات إل نيدو في الختام",
        "لوح ومدرب يُختاران لك قبل وصولك",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en(
          "Met at the airport and taken to a hotel close by. If you land early, we can fly you to Siargao the same day."
        ),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "siargao",
        title: en("Fly to Siargao"),
        body: en(
          "A 1h 50m flight, then 45 minutes by road to General Luna. Meet your coach, check your board and watch the evening session from the beach."
        ),
        overnight: "General Luna, Siargao",
      },
      {
        days: "3–7",
        place: "siargao",
        title: en("Five days of surf, with a rest day built in"),
        body: en(
          "Morning sessions on reef and beach breaks chosen for your level and the day's swell, with video feedback for improvers. Afternoons are for sleeping, eating and recovering. Halfway through, we take you island-hopping or to Sugba Lagoon, because your arms will need it."
        ),
        overnight: "General Luna, Siargao",
      },
      {
        days: "8",
        place: "bohol",
        title: en("Siargao to Bohol via Cebu"),
        body: en(
          "A one-hour flight to Cebu, a transfer to the pier and a fast ferry of about two hours to Tagbilaran. You reach Panglao in the late afternoon."
        ),
        overnight: "Panglao, Bohol",
      },
      {
        days: "9–10",
        place: "bohol",
        title: en("Bohol: hills, river and a quiet beach"),
        body: en(
          "An early visit to the Chocolate Hills, the tarsier sanctuary and the Loboc River. Day ten is yours: Balicasag snorkelling, a long lunch, or simply the beach."
        ),
        overnight: "Panglao, Bohol",
      },
      {
        days: "11",
        place: "el-nido",
        title: en("Bohol to El Nido via Manila"),
        body: en(
          "Two flights connecting in Manila, or one via Cebu when a direct small-plane service is running that season. Arrive in El Nido by late afternoon."
        ),
        overnight: "El Nido",
      },
      {
        days: "12–14",
        place: "el-nido",
        title: en("El Nido: lagoons and limestone"),
        body: en(
          "An early boat to the lagoons, a second day to the outer islands, and a free day for Nacpan beach or kayaking. There is no surf here, which is part of the point."
        ),
        overnight: "El Nido",
      },
      {
        days: "15",
        place: "el-nido",
        title: en("Fly out via Manila"),
        body: en(
          "A short flight to Manila for your international connection, with a buffer built in."
        ),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "Siargao", time: "1h 50m flight" },
      { mode: "road", from: "Siargao airport", to: "General Luna", time: "45m by road" },
      { mode: "flight", from: "Siargao", to: "Cebu", time: "1h flight" },
      { mode: "ferry", from: "Cebu", to: "Tagbilaran (Bohol)", time: "around 2h fast ferry" },
      { mode: "flight", from: "Bohol (Panglao)", to: "Manila", time: "1h 20m flight", note: en("Some seasons a small-plane service runs Cebu–El Nido directly; we use it when it saves time.") },
      { mode: "flight", from: "Manila", to: "El Nido", time: "1h 20m flight" },
      { mode: "flight", from: "El Nido", to: "Manila", time: "1h 20m flight" },
    ],
    experiences: enList([
      "Five mornings of surf coaching in Siargao",
      "Video analysis session for improvers",
      "Siargao island-hopping or Sugba Lagoon",
      "Cloud 9 boardwalk at sunset",
      "Chocolate Hills, tarsiers and the Loboc River",
      "El Nido lagoons and outer islands by boat",
    ]),
    included: {
      en: [
        "14 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights Manila–Siargao, Siargao–Cebu, Bohol–Manila, Manila–El Nido, El Nido–Manila",
        "Cebu–Tagbilaran fast ferry",
        "Five surf sessions with a coach (group in Essential, private from Boutique up), board included",
        "One Siargao boat day, one Bohol countryside day, two El Nido boat days",
        "Airport and pier transfers (shared in Essential, private from Boutique up)",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "14 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos Manila–Siargao, Siargao–Cebú, Bohol–Manila, Manila–El Nido, El Nido–Manila",
        "Ferry rápido Cebú–Tagbilaran",
        "Cinco sesiones de surf con monitor (en grupo en Essential, privadas desde Boutique), tabla incluida",
        "Un día en barco en Siargao, un día por el interior de Bohol y dos días en barco en El Nido",
        "Traslados de aeropuerto y muelle (compartidos en Essential, privados desde Boutique)",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "14 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs Manille–Siargao, Siargao–Cebu, Bohol–Manille, Manille–El Nido, El Nido–Manille",
        "Ferry rapide Cebu–Tagbilaran",
        "Cinq sessions de surf avec moniteur (en groupe en Essential, privées à partir de Boutique), planche incluse",
        "Une journée en bateau à Siargao, une journée dans la campagne de Bohol, deux journées en bateau à El Nido",
        "Transferts aéroport et embarcadère (partagés en Essential, privés à partir de Boutique)",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Extra insurance cover for surfing",
        "Other meals not listed as included",
        "Surf board rental beyond coached sessions",
        "Drinks",
        "Environmental and terminal fees; tips",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Cobertura adicional del seguro para surf",
        "Otras comidas no indicadas como incluidas",
        "Alquiler de tabla fuera de las sesiones con monitor",
        "Bebidas",
        "Tasas medioambientales y de terminal; propinas",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Extension d'assurance pour le surf",
        "Autres repas non mentionnés comme inclus",
        "Location de planche en dehors des sessions encadrées",
        "Boissons",
        "Taxes environnementales et de terminal ; pourboires",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList([
      "Private boat to Siargao's outer reef breaks",
      "Extra surf days instead of Bohol",
      "A surf-and-yoga stay with daily classes",
      "Private boat for both El Nido days",
    ]),
    bestMonths: {
      en: "March to July for learning; September to November for big swell (experienced surfers only)",
      fr: "De mars à juillet pour apprendre ; de septembre à novembre pour la grosse houle (surfeurs confirmés uniquement)",
      es: "De marzo a julio para aprender; de septiembre a noviembre para el oleaje grande (solo surfistas con experiencia)",
      ru: "С марта по июль — для обучения; с сентября по ноябрь — большие волны (только для опытных сёрферов)",
      ar: "من مارس إلى يوليو للتعلّم، ومن سبتمبر إلى نوفمبر للأمواج الكبيرة (لأصحاب الخبرة فقط)",
    },
    fromPriceEUR: { essential: 2300, boutique: 3500, premium: 6000 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "I have never surfed. Is this for me?",
        "Yes. Most of our surf travellers are beginners. Five coached mornings on the right breaks is usually enough to go from first wave to catching your own."
      ),
      faq(
        "Can I change the islands?",
        "Yes. Experienced surfers often skip Bohol for more Siargao; non-surfing partners sometimes prefer Siquijor. This is a starting point."
      ),
      faq(
        "When is the best month?",
        "For learning, March to July: smaller waves and decent weather. Palawan is also at its best from March to May. From June, El Nido gets wetter."
      ),
      faq(
        "How do the flights work?",
        "Siargao connects through Manila or Cebu, and Palawan through Manila. Two of your days are travel days. We book and manage them all."
      ),
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. The Grand Philippines
  // ---------------------------------------------------------------------------
  {
    slug: "the-grand-philippines",
    title: {
      en: "The Grand Philippines",
      fr: "Les grandes Philippines",
      es: "La gran ruta de Filipinas",
      ru: "Большое путешествие по Филиппинам",
      ar: "الرحلة الكبرى في الفلبين",
    },
    days: 21,
    route: ["manila", "banaue", "sagada", "el-nido", "bohol", "siargao"],
    styles: ["essential", "boutique", "premium", "signature"],
    categories: ["food-culture", "nature-adventure", "island-escapes", "private-journeys"],
    photo: {
      alt: {
        en: "Rice terraces carved into the mountains around Batad, in the Cordillera of northern Luzon",
        fr: "Rizières en terrasses taillées dans les montagnes autour de Batad, dans la Cordillère du nord de Luçon",
        es: "Terrazas de arroz talladas en las montañas de Batad, en la Cordillera del norte de Luzón",
        ru: "Рисовые террасы, вырезанные в горах вокруг Батада, Кордильера на севере Лусона",
        ar: "مدرجات الأرز المنحوتة في الجبال حول باتاد في سلسلة كورديليرا شمال لوزون",
      },
      brief:
        "Batad amphitheatre from the viewpoint above the village, mid-morning after mist lifts. Terraces in strong green (around April–May) or golden near harvest. A farmer working a terrace small in the frame. No tourists in bright clothing. Medium-telephoto compression to stack the terrace walls.",
      tone: "rice",
    },
    short: {
      en: "Three weeks from Manila's old city to the rice terraces of the Cordillera, then Palawan, Bohol and Siargao. The whole country in one trip, without pretending it is a small one.",
      fr: "Trois semaines, de la vieille ville de Manille aux rizières en terrasses de la Cordillère, puis Palawan, Bohol et Siargao. Tout le pays en un seul voyage, sans prétendre qu'il est petit.",
      es: "Tres semanas desde el casco antiguo de Manila hasta las terrazas de arroz de la Cordillera, y después Palawan, Bohol y Siargao. Todo el país en un viaje, sin fingir que es pequeño.",
      ru: "Три недели: от старого города Манилы до рисовых террас Кордильеры, затем Палаван, Бохоль и Сиаргао. Вся страна за одну поездку — без иллюзий, что она маленькая.",
      ar: "ثلاثة أسابيع من مدينة مانيلا القديمة إلى مدرجات الأرز في الكورديليرا، ثم بالاوان وبوهول وسيارغاو. البلد كله في رحلة واحدة، دون التظاهر بأنه بلد صغير.",
    },
    intro: en(
      "The islands are what bring most people to the Philippines, but the country makes more sense once you have seen where it starts. This journey opens in Manila, with a day in Intramuros and a long, serious lunch, then heads north into the Cordillera: the 2,000-year-old rice terraces of Banaue and Batad, and Sagada's pine forests, caves and cool mornings. Only then do you go to the coast, through El Nido's lagoons, Bohol's countryside and finally Siargao.\n\nIt is a big trip, and we will not pretend otherwise. The mountains are a long drive from Manila each way, and there are three island transfer days. In return you get a picture of the Philippines that most visitors never see. It is a starting point: you can swap Bohol for Siquijor or Cebu's south coast, fly instead of driving where possible, or cut the north for a slower island finish. We will help you decide what to keep."
    ),
    highlights: {
      en: [
        "Intramuros and a proper Filipino lunch in Manila",
        "Walking the Batad rice terraces with a local guide",
        "Sagada's caves, hanging coffins and pine forests",
        "El Nido's lagoons from an early boat",
        "Bohol's Chocolate Hills and Loboc River",
        "Four days in Siargao to finish",
      ],
      fr: [
        "Intramuros et un vrai déjeuner philippin à Manille",
        "Randonnée dans les rizières en terrasses de Batad avec un guide local",
        "Les grottes, les cercueils suspendus et les forêts de pins de Sagada",
        "Les lagons d'El Nido à bord d'un bateau matinal",
        "Les Chocolate Hills et la rivière Loboc à Bohol",
        "Quatre jours à Siargao pour finir",
      ],
      es: [
        "Intramuros y un buen almuerzo filipino en Manila",
        "Caminata por las terrazas de arroz de Batad con un guía local",
        "Las cuevas, los ataúdes colgantes y los pinares de Sagada",
        "Las lagunas de El Nido en barca a primera hora",
        "Las Chocolate Hills y el río Loboc en Bohol",
        "Cuatro días en Siargao para terminar",
      ],
      ru: [
        "Интрамурос и настоящий филиппинский обед в Маниле",
        "Прогулка по рисовым террасам Батада с местным гидом",
        "Пещеры, висячие гробы и сосновые леса Сагады",
        "Лагуны Эль-Нидо на ранней лодке",
        "Шоколадные холмы и река Лобок на Бохоле",
        "Четыре дня на Сиаргао в финале",
      ],
      ar: [
        "إنتراموروس وغداء فلبيني حقيقي في مانيلا",
        "المشي بين مدرجات الأرز في باتاد مع مرشد محلي",
        "كهوف ساغادا وتوابيتها المعلّقة وغابات الصنوبر",
        "بحيرات إل نيدو على متن قارب الصباح الباكر",
        "تلال الشوكولاتة ونهر لوبوك في بوهول",
        "أربعة أيام في سيارغاو في الختام",
      ],
    },
    itinerary: [
      {
        days: "1–2",
        place: "manila",
        title: en("Manila: arrival and the old city"),
        body: en(
          "Arrive and rest. The next day, walk Intramuros with a guide who can make sense of four centuries of history, then eat: Binondo's Chinese-Filipino food, or a long lunch of dishes you will not find abroad. Manila is chaotic, but with the right guide it is far better company than its reputation."
        ),
        overnight: "Manila",
      },
      {
        days: "3",
        place: "banaue",
        title: en("North to Banaue"),
        body: en(
          "About nine hours by road. In Essential this is the overnight bus, which leaves Manila in the evening and arrives at dawn; from Boutique up we drive you in a private car, by day, with stops. It is a long journey and the arrival, as the terraces appear, is worth it."
        ),
        overnight: "Banaue",
      },
      {
        days: "4",
        place: "banaue",
        title: en("Batad's rice terraces"),
        body: en(
          "A short drive and an hour's walk bring you to Batad, an amphitheatre of terraces built by the Ifugao people and still farmed. With a local guide, walk the terrace walls down to the village and on to Tappiya Falls if your legs agree. It is steep and best for reasonably fit walkers."
        ),
        overnight: "Banaue",
      },
      {
        days: "5–6",
        place: "sagada",
        title: en("Sagada: caves, pines and cool mornings"),
        body: en(
          "Around three hours by mountain road to Sagada. Explore Sumaguing Cave with a guide, see the hanging coffins of Echo Valley, and get up early for the sea of clouds at Kiltepan. Evenings are cool enough for a jacket, a strange feeling in the Philippines."
        ),
        overnight: "Sagada",
      },
      {
        days: "7",
        place: "manila",
        title: en("The long road back to Manila"),
        body: en(
          "The trip's longest day: around 11–12 hours by road, via Baguio. We break it up with stops and you spend the night near the airport, ready for tomorrow's flight."
        ),
        overnight: "Manila",
      },
      {
        days: "8",
        place: "el-nido",
        title: en("Fly to El Nido"),
        body: en(
          "A short flight to El Nido. After the mountains, an afternoon in the sea."
        ),
        overnight: "El Nido",
      },
      {
        days: "9–11",
        place: "el-nido",
        title: en("El Nido's lagoons and islands"),
        body: en(
          "An early boat into the lagoons, a second boat day to the outer islands, and a free day for Nacpan beach or doing very little."
        ),
        overnight: "El Nido",
      },
      {
        days: "12",
        place: "bohol",
        title: en("El Nido to Bohol via Manila"),
        body: en(
          "Two flights connecting in Manila (or Cebu, depending on schedules). Arrive on Panglao mid-afternoon."
        ),
        overnight: "Panglao, Bohol",
      },
      {
        days: "13–15",
        place: "bohol",
        title: en("Bohol, or Siquijor, or Cebu's south"),
        body: en(
          "We have written this as Bohol: the Chocolate Hills at dawn, the tarsiers, the Loboc River and a day on Balicasag. It is the most flexible part of the trip. Siquijor suits people who want quiet, and Cebu's south coast (Moalboal's sardine run, Oslob, Kawasan Falls) suits people who want more in the water."
        ),
        overnight: "Panglao, Bohol",
      },
      {
        days: "16",
        place: "siargao",
        title: en("Bohol to Siargao via Cebu"),
        body: en(
          "A two-hour fast ferry to Cebu, a one-hour flight to Siargao and 45 minutes by road to General Luna."
        ),
        overnight: "General Luna, Siargao",
      },
      {
        days: "17–20",
        place: "siargao",
        title: en("Four days in Siargao"),
        body: en(
          "A deliberately unplanned finish: island-hopping, Sugba Lagoon, a surf lesson, the rock pools at low tide and good dinners in General Luna. After three weeks, you will be glad to stay put."
        ),
        overnight: "General Luna, Siargao",
      },
      {
        days: "21",
        place: "siargao",
        title: en("Fly home via Manila or Cebu"),
        body: en(
          "A domestic flight connects to your international departure, with a comfortable buffer."
        ),
      },
    ],
    legs: [
      { mode: "road", from: "Manila", to: "Banaue", time: "around 9h by road", note: en("Overnight bus in Essential; private car by day from Boutique up.") },
      { mode: "road", from: "Banaue", to: "Sagada", time: "around 3h by road" },
      { mode: "road", from: "Sagada", to: "Manila", time: "11–12h by road, via Baguio", note: en("In Signature we can route via Baguio with a night there, or arrange a charter where available.") },
      { mode: "flight", from: "Manila", to: "El Nido", time: "1h 20m flight" },
      { mode: "flight", from: "El Nido", to: "Manila", time: "1h 20m flight" },
      { mode: "flight", from: "Manila", to: "Bohol (Panglao)", time: "1h 20m flight" },
      { mode: "ferry", from: "Tagbilaran", to: "Cebu", time: "around 2h fast ferry" },
      { mode: "flight", from: "Cebu", to: "Siargao", time: "1h flight" },
      { mode: "flight", from: "Siargao", to: "Manila", time: "1h 50m flight" },
    ],
    experiences: enList([
      "Guided walk through Intramuros and a food tour of Binondo",
      "Batad rice terraces and Tappiya Falls with an Ifugao guide",
      "Sumaguing Cave and Echo Valley in Sagada",
      "Sunrise over the clouds at Kiltepan",
      "El Nido lagoons and island-hopping",
      "Chocolate Hills, tarsiers and the Loboc River",
      "Siargao island-hopping and Sugba Lagoon",
      "A beginner surf lesson",
    ]),
    included: {
      en: [
        "20 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights Manila–El Nido, El Nido–Manila, Manila–Bohol, Cebu–Siargao",
        "Tagbilaran–Cebu fast ferry",
        "Road transport Manila–Banaue–Sagada–Manila (bus in Essential, private car from Boutique up)",
        "Local guides in Manila, Batad and Sagada",
        "Two El Nido boat days, one Bohol countryside day, two Siargao boat days",
        "Airport and pier transfers throughout",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "20 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos Manila–El Nido, El Nido–Manila, Manila–Bohol, Cebú–Siargao",
        "Ferry rápido Tagbilaran–Cebú",
        "Transporte por carretera Manila–Banaue–Sagada–Manila (autobús en Essential, coche privado desde Boutique)",
        "Guías locales en Manila, Batad y Sagada",
        "Dos días en barco en El Nido, un día por el interior de Bohol y dos días en barco en Siargao",
        "Todos los traslados de aeropuerto y muelle",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "20 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs Manille–El Nido, El Nido–Manille, Manille–Bohol, Cebu–Siargao",
        "Ferry rapide Tagbilaran–Cebu",
        "Transport routier Manille–Banaue–Sagada–Manille (bus en Essential, voiture privée à partir de Boutique)",
        "Guides locaux à Manille, Batad et Sagada",
        "Deux journées en bateau à El Nido, une journée dans la campagne de Bohol, deux journées en bateau à Siargao",
        "Tous les transferts aéroport et embarcadère",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList([
      "A night in Baguio to split the drive back from Sagada",
      "Private boats for every island day",
      "Swap Bohol for Siquijor or Cebu's south coast",
      "Add Coron for three nights between Manila and El Nido",
      "Charter flight from El Nido to Siargao in Signature",
    ]),
    bestMonths: {
      en: "February to May; terraces are greenest around April and May, islands are dry and seas calm",
      fr: "De février à mai ; les rizières sont les plus vertes en avril et mai, les îles sèches et la mer calme",
      es: "De febrero a mayo; las terrazas están más verdes en abril y mayo, y las islas, secas y con mar tranquilo",
      ru: "С февраля по май; террасы зеленее всего в апреле и мае, на островах сухо, море спокойное",
      ar: "من فبراير إلى مايو، حين تكون المدرجات في أشد خضرتها في أبريل ومايو، والجزر جافة والبحر هادئًا",
    },
    fromPriceEUR: { essential: 3300, boutique: 4900, premium: 8400, signature: 14500 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Can I change the route?",
        "Yes, and on a trip this size most people do. The Visayas section is the easiest to swap, and the north can be shortened or dropped. It is a starting point."
      ),
      faq(
        "Is the drive to the rice terraces worth it?",
        "We think so, but it is honest to say it costs you two long road days. If you are short of time or patience, we can suggest closer alternatives."
      ),
      faq(
        "Is it suitable for children?",
        "For older children and teenagers who walk well, yes. The road days and Batad's steps are hard for under-tens."
      ),
      faq(
        "When is the best time?",
        "February to May works for both the mountains and the islands. From June the terraces are lush but the islands get wetter, and typhoons are possible from around August to November."
      ),
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. Ten Days, Two Islands
  // ---------------------------------------------------------------------------
  {
    slug: "ten-days-two-islands",
    title: {
      en: "Ten Days, Two Islands",
      fr: "Dix jours, deux îles",
      es: "Diez días, dos islas",
      ru: "Десять дней, два острова",
      ar: "عشرة أيام وجزيرتان",
    },
    days: 10,
    route: ["manila", "el-nido", "siargao"],
    styles: ["essential", "boutique", "premium", "signature"],
    categories: ["island-escapes", "surf", "honeymoons", "family"],
    photo: {
      alt: {
        en: "A tricycle on an empty road through coconut palms in Siargao, late afternoon",
        fr: "Un tricycle sur une route vide entre les cocotiers de Siargao, en fin d'après-midi",
        es: "Un triciclo en una carretera vacía entre cocoteros en Siargao, a última hora de la tarde",
        ru: "Трицикл на пустой дороге среди кокосовых пальм на Сиаргао, ближе к вечеру",
        ar: "دراجة ثلاثية العجلات على طريق خالٍ بين أشجار جوز الهند في سيارغاو بعد الظهر",
      },
      brief:
        "The palm-lined road between General Luna and Pacifico, late afternoon. Shoot down the road with a long lens so the palms stack on both sides; one tricycle or scooter coming towards camera. Warm side light. No drone.",
      tone: "jungle",
    },
    short: {
      en: "Ten days is enough for two islands done well, not four done badly. El Nido's lagoons and Siargao's palms, with one transfer day in the middle and nothing rushed.",
      fr: "Dix jours suffisent pour deux îles bien vécues, pas quatre bâclées. Les lagons d'El Nido et les palmiers de Siargao, avec une seule journée de transfert au milieu et rien de précipité.",
      es: "Diez días dan para dos islas bien vividas, no para cuatro a la carrera. Las lagunas de El Nido y las palmeras de Siargao, con un solo día de traslado en medio y nada de prisas.",
      ru: "Десяти дней хватит на два острова как следует, а не на четыре кое-как. Лагуны Эль-Нидо и пальмы Сиаргао, один день переезда посередине и никакой спешки.",
      ar: "عشرة أيام تكفي لجزيرتين تعيشهما جيدًا، لا لأربع جزر على عجل. بحيرات إل نيدو ونخيل سيارغاو، مع يوم تنقّل واحد في المنتصف ودون أي استعجال.",
    },
    intro: en(
      "The most common mistake we see in Philippines plans from Europe is trying to fit four islands into ten days. On paper it works. In practice, every island change costs most of a day, often via Manila, and you end up spending your holiday in departure lounges. So here is the alternative: two islands, chosen because they are different from each other, with a single transfer day between them. El Nido for limestone, lagoons and boat days; Siargao for palms, surf, and a town where it is easy to do nothing.\n\nIf you land in Manila early in the morning, we can even connect you to El Nido the same day and give you an extra night on the beach. It is a starting point, of course. Bohol can replace Siargao if you would rather not fly through Manila twice, and Coron can replace El Nido for divers. What we would not do is add a third island. Trust us on this one."
    ),
    highlights: {
      en: [
        "Two islands, one transfer day, no rushing",
        "El Nido's lagoons on an early boat",
        "Siargao's islands, lagoons and a first surf lesson",
        "Time for a day with nothing planned on each island",
        "A same-day connection option if you land early",
      ],
      fr: [
        "Deux îles, une journée de transfert, aucune précipitation",
        "Les lagons d'El Nido sur un bateau matinal",
        "Les îles et lagons de Siargao, et un premier cours de surf",
        "Une journée sans programme sur chaque île",
        "Une correspondance le jour même si vous atterrissez tôt",
      ],
      es: [
        "Dos islas, un día de traslado, ninguna prisa",
        "Las lagunas de El Nido en barca a primera hora",
        "Las islas y lagunas de Siargao y una primera clase de surf",
        "Un día sin planes en cada isla",
        "Conexión el mismo día si aterrizas temprano",
      ],
      ru: [
        "Два острова, один день переезда, никакой спешки",
        "Лагуны Эль-Нидо на ранней лодке",
        "Острова и лагуны Сиаргао и первый урок сёрфинга",
        "На каждом острове — день без планов",
        "Стыковка в тот же день, если вы прилетаете рано",
      ],
      ar: [
        "جزيرتان ويوم تنقّل واحد ولا استعجال",
        "بحيرات إل نيدو على قارب الصباح الباكر",
        "جزر سيارغاو وبحيراتها وأول درس في ركوب الأمواج",
        "يوم بلا خطط في كل جزيرة",
        "إمكانية مواصلة الرحلة في اليوم نفسه إذا وصلت مبكرًا",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en(
          "A night near the airport after your long-haul flight. If you land before late morning, we will try to connect you straight to El Nido instead and add the night there."
        ),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "el-nido",
        title: en("Fly to El Nido"),
        body: en(
          "A short flight to El Nido's airstrip and a 20-minute drive to your hotel. Swim, then watch the sun go down over Bacuit Bay."
        ),
        overnight: "El Nido",
      },
      {
        days: "3–5",
        place: "el-nido",
        title: en("Two boat days and one free day"),
        body: en(
          "An early boat to the lagoons, before the fleet; a second day around the outer islands; and a day for Nacpan beach, kayaking or a hammock. Three full days is the right amount: enough to see El Nido, not so much that the boat days blur."
        ),
        overnight: "El Nido",
      },
      {
        days: "6",
        place: "siargao",
        title: en("El Nido to Siargao via Manila"),
        body: en(
          "The trip's single transfer day: El Nido to Manila, then Manila to Siargao, with a sensible connection between them. You land in Siargao in the afternoon and are at your hotel in General Luna 45 minutes later."
        ),
        overnight: "General Luna, Siargao",
      },
      {
        days: "7–9",
        place: "siargao",
        title: en("Siargao: islands, lagoon and a surf lesson"),
        body: en(
          "Island-hopping to Naked, Daku and Guyam; a day north to Sugba Lagoon; and a free day for a surf lesson, the Magpupungko rock pools at low tide or a slow loop of the island by scooter."
        ),
        overnight: "General Luna, Siargao",
      },
      {
        days: "10",
        place: "siargao",
        title: en("Fly out via Manila or Cebu"),
        body: en(
          "A domestic flight to meet your international departure, with a buffer built in."
        ),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "El Nido", time: "1h 20m flight", note: en("Alternative: fly to Puerto Princesa and drive 5–6h north, if El Nido flights are full.") },
      { mode: "flight", from: "El Nido", to: "Manila", time: "1h 20m flight" },
      { mode: "flight", from: "Manila", to: "Siargao", time: "1h 50m flight" },
      { mode: "road", from: "Siargao airport", to: "General Luna", time: "45m by road" },
      { mode: "flight", from: "Siargao", to: "Manila", time: "1h 50m flight", note: en("Or via Cebu, depending on your international connection.") },
    ],
    experiences: enList([
      "El Nido lagoons on an early boat",
      "Outer-island hopping in Bacuit Bay",
      "Nacpan beach",
      "Siargao island-hopping: Naked, Daku and Guyam",
      "Sugba Lagoon day trip",
      "A beginner surf lesson",
    ]),
    included: {
      en: [
        "9 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights Manila–El Nido, El Nido–Manila, Manila–Siargao, Siargao–Manila",
        "Airport transfers (shared in Essential, private from Boutique up)",
        "Two El Nido boat days and two Siargao boat days",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "9 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos Manila–El Nido, El Nido–Manila, Manila–Siargao, Siargao–Manila",
        "Traslados de aeropuerto (compartidos en Essential, privados desde Boutique)",
        "Dos días en barco en El Nido y dos en Siargao",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "9 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs Manille–El Nido, El Nido–Manille, Manille–Siargao, Siargao–Manille",
        "Transferts aéroport (partagés en Essential, privés à partir de Boutique)",
        "Deux journées en bateau à El Nido et deux à Siargao",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList([
      "Private boats in El Nido and Siargao",
      "Swap Siargao for Bohol to avoid a second Manila connection",
      "A night at a private-island resort in northern Palawan",
      "Charter flight from El Nido to Siargao (Signature)",
    ]),
    bestMonths: {
      en: "March to May is ideal for both islands; December to February also works, with more chance of rain in Siargao",
      fr: "De mars à mai, idéal pour les deux îles ; de décembre à février, cela fonctionne aussi, avec plus de risques de pluie à Siargao",
      es: "De marzo a mayo es ideal para las dos islas; de diciembre a febrero también funciona, con más probabilidad de lluvia en Siargao",
      ru: "Март–май идеальны для обоих островов; декабрь–февраль тоже подходят, но на Сиаргао выше шанс дождя",
      ar: "من مارس إلى مايو هي الفترة المثالية للجزيرتين، ومن ديسمبر إلى فبراير مناسبة أيضًا مع احتمال أكبر للمطر في سيارغاو",
    },
    fromPriceEUR: { essential: 1700, boutique: 2600, premium: 4300, signature: 7500 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Can I add another island?",
        "You can, but we would gently argue against it. Each extra island costs most of a day in transfers. With ten days, two islands is where the trip feels like a holiday. If you want variety, swap one of the two instead."
      ),
      faq(
        "When is the best month?",
        "March to May for good weather on both islands. From June, El Nido enters its wetter season; from November to January, Siargao is more likely to see rain."
      ),
      faq(
        "Does it work for families?",
        "Yes. Two bases and a single transfer day is the easiest shape there is for children. We choose family rooms and calmer beaches, and shorten boat days for younger kids."
      ),
      faq(
        "How do the flights work?",
        "El Nido and Siargao are not directly linked, so day six connects in Manila. We book it, hold the schedule and handle any changes."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Bohol Beach Escape
  // ---------------------------------------------------------------------------
  {
    slug: "bohol-beach-escape",
    title: {
      en: "Bohol Beach Escape",
      fr: "Escapade à Bohol",
      es: "Escapada a Bohol",
      ru: "Пляжный отдых на Бохоле",
      ar: "استراحة شاطئية في بوهول",
    },
    days: 6,
    route: ["manila", "bohol"],
    styles: ["essential", "boutique", "premium", "signature"],
    categories: ["island-escapes", "family"],
    photo: {
      alt: { en: "A white-sand beach with clear shallow water on Panglao, Bohol", es: "Una playa de arena blanca con aguas claras y poco profundas en Panglao, Bohol", fr: "Une plage de sable blanc aux eaux claires et peu profondes à Panglao, Bohol" },
      brief: "Panglao beach mid-morning, a single bangka pulled up on the sand, clear shallow water in the foreground. Natural colour, no people or one swimmer.",
      tone: "sand",
    },
    short: {
      en: "Six easy days on one island: Panglao's white beaches, the Chocolate Hills and tarsiers, turtles off Balicasag. A short trip with no rushing and one flight each way.",
      fr: "Six jours tranquilles sur une seule île : les plages blanches de Panglao, les Chocolate Hills et les tarsiers, les tortues de Balicasag. Un court séjour sans précipitation, avec un seul vol aller et retour.",
      es: "Seis días tranquilos en una sola isla: las playas blancas de Panglao, las Colinas de Chocolate y los tarseros, las tortugas de Balicasag. Un viaje corto, sin prisas y con un solo vuelo de ida y otro de vuelta.",
      ru: "Шесть спокойных дней на одном острове: белые пляжи Панглао, Шоколадные холмы и долгопяты, черепахи у Баликасага. Короткая поездка без спешки и с одним перелётом в каждую сторону.",
      ar: "ستة أيام هادئة في جزيرة واحدة: شواطئ بانغلاو البيضاء، وتلال الشوكولاتة وقرود التارسير، والسلاحف قبالة باليكاساغ. رحلة قصيرة بلا استعجال، مع رحلة طيران واحدة في كل اتجاه.",
    },
    intro: en(
      "Not every trip to the Philippines needs three islands. If you are adding a few days to a business trip, combining the Philippines with another country, or simply want a short break by the sea, Bohol is the island we suggest. It is a short flight from Manila, the beaches of Panglao are calm and swimmable, and the interior has enough to fill two good days: the Chocolate Hills, the tiny tarsiers, rivers and old stone churches.\n\nThe pace is deliberately easy. One countryside day, one morning on the water at Balicasag, and one day with nothing planned. Want more? Add Siquijor by fast craft, or turn it into a longer trip with Siargao or El Nido. We will rebuild it around you."
    ),
    highlights: {
      en: [
        "Panglao's white-sand beaches",
        "The Chocolate Hills and the tarsier sanctuary",
        "Snorkelling with turtles at Balicasag",
        "A slow lunch cruise on the Loboc River",
        "One flight each way, no rushing",
      ],
      es: [
        "Las playas de arena blanca de Panglao",
        "Las Colinas de Chocolate y el santuario de tarseros",
        "Snorkel con tortugas en Balicasag",
        "Almuerzo en barca por el río Loboc",
        "Un solo vuelo de ida y vuelta, sin prisas",
      ],
      fr: [
        "Les plages de sable blanc de Panglao",
        "Les Chocolate Hills et le sanctuaire des tarsiers",
        "Snorkeling avec les tortues à Balicasag",
        "Un déjeuner au fil de la rivière Loboc",
        "Un seul vol aller et retour, sans précipitation",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en("Met at the airport and taken to a comfortable hotel for a night of rest after the long-haul flight."),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "bohol",
        title: en("Fly to Bohol"),
        body: en("A short morning flight to Panglao. Check in, swim and spend the afternoon on the beach."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "3",
        place: "bohol",
        title: en("Bohol countryside"),
        body: en("The Chocolate Hills, the tarsier sanctuary, the Loboc River with lunch on board, and the old church of Baclayon."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "4",
        place: "bohol",
        title: en("Balicasag by boat"),
        body: en("An early boat to Balicasag's marine sanctuary to snorkel with turtles, with a stop at the Virgin Island sandbar on the way back."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "5",
        place: "bohol",
        title: en("A free day"),
        body: en("Beach, spa or a kayak along the coast. We can suggest a good place for dinner."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "6",
        place: "bohol",
        title: en("Fly out"),
        body: en("Transfer to the airport for your flight to Manila and your international connection."),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "Bohol (Panglao)", time: "1h 20m flight" },
      { mode: "road", from: "Panglao airport", to: "Your hotel", time: "15–30m by road" },
      { mode: "flight", from: "Bohol (Panglao)", to: "Manila", time: "1h 20m flight", note: en("Or via Cebu, depending on your international connection.") },
    ],
    experiences: enList(["Chocolate Hills and tarsiers", "Loboc River lunch cruise", "Balicasag turtles", "Virgin Island sandbar"]),
    included: {
      en: [
        "5 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Manila–Bohol, Bohol–Manila",
        "Airport, port and road transfers (shared in Essential, private from Boutique up)",
        "Bohol countryside day and a Balicasag snorkelling boat trip",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "5 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Manila–Bohol, Bohol–Manila",
        "Traslados de aeropuerto, puerto y carretera (compartidos en Essential, privados desde Boutique)",
        "Día por el interior de Bohol y salida en barco a Balicasag para hacer snorkel",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "5 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Manille–Bohol, Bohol–Manille",
        "Transferts aéroport, port et route (partagés en Essential, privés à partir de Boutique)",
        "Journée dans la campagne de Bohol et sortie en bateau à Balicasag pour le snorkeling",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Add Siquijor for two or three nights by fast craft", "Private boat for the Balicasag morning", "A beachfront villa in Panglao"]),
    bestMonths: { en: "December to May is the driest; Bohol works most of the year", es: "De diciembre a mayo es la época más seca; Bohol funciona casi todo el año", fr: "De décembre à mai, la saison la plus sèche ; Bohol se visite presque toute l'année" },
    fromPriceEUR: { essential: 1100, boutique: 1600, premium: 2600, signature: 4500 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Is six days enough?",
        "For one island, yes. It is a short, relaxed trip. If you have more time, we would add a second island rather than more nights in the same place."
      ),
      faq(
        "Can I fly to Bohol from Cebu instead?",
        "Yes. If your international flight lands in Cebu, we use the fast ferry to Bohol (about two hours) and skip Manila completely."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Essential Palawan
  // ---------------------------------------------------------------------------
  {
    slug: "essential-palawan",
    title: {
      en: "Essential Palawan",
      fr: "Palawan l'essentiel",
      es: "Lo esencial de Palawan",
      ru: "Палаван: главное",
      ar: "أساسيات بالاوان",
    },
    days: 9,
    route: ["manila", "puerto-princesa", "el-nido"],
    styles: ["essential", "boutique", "premium", "signature"],
    categories: ["island-escapes", "nature-adventure"],
    photo: {
      alt: { en: "Limestone cliffs above turquoise water in Palawan", es: "Acantilados de caliza sobre aguas turquesas en Palawan", fr: "Falaises calcaires au-dessus d'une eau turquoise à Palawan" },
      brief: "Karst cliffs and turquoise water in northern Palawan, early light, no boats in frame.",
      tone: "lagoon",
    },
    short: {
      en: "The Underground River near Puerto Princesa, a road trip north through Palawan's countryside, then El Nido's lagoons by boat. Palawan's best in nine days.",
      fr: "La rivière souterraine près de Puerto Princesa, une route vers le nord à travers la campagne de Palawan, puis les lagons d'El Nido en bateau. Le meilleur de Palawan en neuf jours.",
      es: "El río subterráneo cerca de Puerto Princesa, una ruta por carretera hacia el norte entre paisajes rurales de Palawan y las lagunas de El Nido en barco. Lo mejor de Palawan en nueve días.",
      ru: "Подземная река у Пуэрто-Принсесы, дорога на север через сельский Палаван и лагуны Эль-Нидо на лодке. Лучшее на Палаване за девять дней.",
      ar: "النهر الجوفي قرب بويرتو برينسيسا، ثم رحلة برية شمالًا عبر ريف بالاوان، ثم بحيرات إل نيدو بالقارب. أفضل ما في بالاوان في تسعة أيام.",
    },
    intro: en(
      "Palawan is the island most people picture when they think of the Philippines, and this is the simplest way to see it well. You fly into Puerto Princesa, spend a day on the Underground River, a UNESCO site where you paddle into a cave system by boat, then drive north to El Nido through farmland, fishing villages and coconut groves.\n\nEl Nido gets three full days: two on the water among the lagoons and limestone islands of Bacuit Bay, and one for Nacpan beach or simply doing nothing. You fly back to Manila from El Nido, so there is no long drive at the end. If you have a few more days, add Coron or Port Barton; we will reshape the route."
    ),
    highlights: {
      en: [
        "Paddle into the Puerto Princesa Underground River",
        "Two boat days among El Nido's lagoons",
        "Overland through Palawan's countryside",
        "A free day for Nacpan beach",
        "Fly home from El Nido, no long drive back",
      ],
      es: [
        "Entrar en barca en el río subterráneo de Puerto Princesa",
        "Dos días en barco entre las lagunas de El Nido",
        "Por carretera a través del Palawan rural",
        "Un día libre para la playa de Nacpan",
        "Regreso en avión desde El Nido, sin volver por carretera",
      ],
      fr: [
        "Entrer en barque dans la rivière souterraine de Puerto Princesa",
        "Deux journées en bateau parmi les lagons d'El Nido",
        "Par la route à travers la campagne de Palawan",
        "Une journée libre pour la plage de Nacpan",
        "Retour en avion depuis El Nido, sans longue route",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en("Airport pick-up and a night in Manila to recover from the flight."),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "puerto-princesa",
        title: en("Fly to Puerto Princesa"),
        body: en("Morning flight to Palawan. A relaxed afternoon and dinner by the bay."),
        overnight: "Puerto Princesa",
      },
      {
        days: "3",
        place: "puerto-princesa",
        title: en("The Underground River"),
        body: en("Drive to Sabang and take a paddle boat into the cave river, with a walk through the mangroves after."),
        overnight: "Puerto Princesa",
      },
      {
        days: "4",
        place: "el-nido",
        title: en("North to El Nido"),
        body: en("Around five to six hours by road, with stops along the way. Arrive in time for the sunset."),
        overnight: "El Nido",
      },
      {
        days: "5–7",
        place: "el-nido",
        title: en("El Nido: two boat days and a free day"),
        body: en("Island-hopping to the lagoons, beaches and snorkelling spots of Bacuit Bay on two days, and a free day for Nacpan beach or a kayak."),
        overnight: "El Nido",
      },
      {
        days: "8",
        place: "manila",
        title: en("Fly to Manila"),
        body: en("Flight from El Nido back to Manila. A last evening in the city."),
        overnight: "Manila",
      },
      {
        days: "9",
        place: "manila",
        title: en("Fly out"),
        body: en("Transfer to the international terminal."),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "Puerto Princesa", time: "1h 20m flight" },
      { mode: "road", from: "Puerto Princesa", to: "Sabang (Underground River)", time: "around 2h by road" },
      { mode: "road", from: "Puerto Princesa", to: "El Nido", time: "5–6h by road" },
      { mode: "flight", from: "El Nido", to: "Manila", time: "1h 20m flight" },
    ],
    experiences: enList(["Puerto Princesa Underground River", "El Nido island-hopping", "Nacpan beach", "Mangrove paddle in Sabang"]),
    included: {
      en: [
        "8 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Manila–Puerto Princesa, El Nido–Manila",
        "Airport, port and road transfers (shared in Essential, private from Boutique up)",
        "Underground River day trip from Puerto Princesa and two El Nido boat days",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "8 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Manila–Puerto Princesa, El Nido–Manila",
        "Traslados de aeropuerto, puerto y carretera (compartidos en Essential, privados desde Boutique)",
        "Excursión al río subterráneo desde Puerto Princesa y dos días en barco en El Nido",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "8 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Manille–Puerto Princesa, El Nido–Manille",
        "Transferts aéroport, port et route (partagés en Essential, privés à partir de Boutique)",
        "Excursion à la rivière souterraine depuis Puerto Princesa et deux journées en bateau à El Nido",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Private boat for the El Nido days", "Add Port Barton for two quiet nights on the way north", "Add Coron for three nights by fast ferry (drier months)"]),
    bestMonths: { en: "November to May; the calmest seas are from February to May", es: "De noviembre a mayo; el mar más tranquilo de febrero a mayo", fr: "De novembre à mai ; la mer la plus calme de février à mai" },
    fromPriceEUR: { essential: 1400, boutique: 2100, premium: 3500, signature: 6000 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Is the drive to El Nido long?",
        "It is five to six hours, with stops. We break it up with lunch on the way. If you prefer, you can fly Manila–El Nido and visit Puerto Princesa on the way back."
      ),
      faq(
        "Do I need a permit for the Underground River?",
        "Yes, and the number of visitors per day is limited. We book it for you as soon as your dates are confirmed."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Luxury Palawan
  // ---------------------------------------------------------------------------
  {
    slug: "luxury-palawan",
    title: {
      en: "Luxury Palawan",
      fr: "Palawan de luxe",
      es: "Palawan de lujo",
      ru: "Роскошный Палаван",
      ar: "بالاوان الفاخرة",
    },
    days: 9,
    route: ["manila", "el-nido", "private-island"],
    styles: ["premium", "signature"],
    categories: ["luxury", "honeymoons", "island-escapes"],
    photo: {
      alt: { en: "An overwater villa above a calm lagoon in northern Palawan", es: "Una villa sobre el agua en una laguna tranquila del norte de Palawan", fr: "Une villa sur pilotis au-dessus d'un lagon calme du nord de Palawan" },
      brief: "A villa deck over calm water at golden hour, northern Palawan. Quiet, no people.",
      tone: "lagoon",
    },
    short: {
      en: "Private boats in El Nido, then a private-island resort where yours is one of very few villas. Nine days of Palawan at its most beautiful and its most quiet.",
      fr: "Des bateaux privés à El Nido, puis un resort sur une île privée où votre villa est l'une des rares. Neuf jours de Palawan, au plus beau et au plus calme.",
      es: "Barcos privados en El Nido y después un resort en una isla privada con muy pocas villas. Nueve días de Palawan en su versión más bella y tranquila.",
      ru: "Частные лодки в Эль-Нидо, затем курорт на частном острове, где ваша вилла — одна из немногих. Девять дней на Палаване — самом красивом и самом тихом.",
      ar: "قوارب خاصة في إل نيدو، ثم منتجع على جزيرة خاصة لا يضم سوى عدد قليل جدًا من الفلل. تسعة أيام في بالاوان بأجمل وأهدأ صورها.",
    },
    intro: en(
      "This is Palawan without the crowds. In El Nido you have your own boat and crew for three days, leaving early to reach the lagoons before anyone else and stopping for lunch on a beach chosen for being empty. Then you move to a private-island resort in northern Palawan, where there are only a handful of villas, a house reef in front of your door and nothing on the schedule unless you want it.\n\nHotels, boats and timings are chosen around you, and every transfer is private. It works beautifully as a honeymoon, and just as well for anyone who wants Palawan at its best. Tell us what matters to you, whether that is food, diving, spa or complete privacy, and we will choose the places to match."
    ),
    highlights: {
      en: [
        "Three private boat days in El Nido",
        "A private-island resort with only a handful of villas",
        "Lunch on empty beaches, prepared by your crew",
        "Private transfers throughout",
      ],
      es: [
        "Tres días en barco privado en El Nido",
        "Un resort en isla privada con muy pocas villas",
        "Almuerzos en playas vacías, preparados por tu tripulación",
        "Traslados privados en todo el viaje",
      ],
      fr: [
        "Trois journées en bateau privé à El Nido",
        "Un resort sur une île privée avec très peu de villas",
        "Déjeuners sur des plages désertes, préparés par votre équipage",
        "Transferts privés tout au long du voyage",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en("Private airport pick-up and a night in one of Manila's best hotels."),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "el-nido",
        title: en("Fly to El Nido"),
        body: en("Morning flight to El Nido. Afternoon at leisure and a sunset drink over Bacuit Bay."),
        overnight: "El Nido",
      },
      {
        days: "3–5",
        place: "el-nido",
        title: en("El Nido by private boat"),
        body: en("Three days on your own boat: the lagoons early in the morning, the outer islands, snorkelling, and lunch on quiet beaches."),
        overnight: "El Nido",
      },
      {
        days: "6",
        place: "private-island",
        title: en("To the private island"),
        body: en("A private boat or short flight to your island resort. Settle in and watch the sunset from your villa."),
        overnight: "Private island, northern Palawan",
      },
      {
        days: "7–8",
        place: "private-island",
        title: en("Island days"),
        body: en("Snorkel the house reef, kayak, go to the spa or do absolutely nothing."),
        overnight: "Private island, northern Palawan",
      },
      {
        days: "9",
        place: "manila",
        title: en("Fly out via Manila"),
        body: en("Transfer and flight to Manila for your international connection."),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "El Nido", time: "1h 20m flight" },
      { mode: "boat", from: "El Nido", to: "Private island", time: "1–2h by private boat", note: en("Some resorts use a short private flight instead.") },
      { mode: "flight", from: "Northern Palawan", to: "Manila", time: "1h–1h 20m flight" },
    ],
    experiences: enList(["El Nido lagoons by private boat", "House reef snorkelling", "Sunset dinner on the beach", "Spa"]),
    included: {
      en: [
        "8 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Manila–El Nido, return to Manila",
        "Private boat or air transfer to the island resort",
        "Private airport, port and road transfers throughout",
        "Three private boat days in El Nido with lunch on a quiet beach",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "8 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Manila–El Nido, return to Manila",
        "Traslado en barco privado o avioneta al resort de la isla",
        "Traslados privados de aeropuerto, puerto y carretera durante todo el viaje",
        "Tres días en barco privado en El Nido con almuerzo en una playa tranquila",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "8 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Manille–El Nido, return to Manille",
        "Transfert en bateau privé ou en avion jusqu'au resort de l'île",
        "Transferts privés aéroport, port et route pendant tout le voyage",
        "Trois journées en bateau privé à El Nido avec déjeuner sur une plage tranquille",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Add Coron by private boat", "A private chef dinner on a sandbar", "A villa with a private pool"]),
    bestMonths: { en: "November to May; February to May for the calmest seas", es: "De noviembre a mayo; de febrero a mayo para el mar más tranquilo", fr: "De novembre à mai ; de février à mai pour la mer la plus calme" },
    fromPriceEUR: { premium: 4800, signature: 8500 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Which private island will we stay on?",
        "We choose it with you, depending on your budget and what you want: food, diving, spa or complete privacy. We confirm the name and the villa before you book."
      ),
      faq(
        "Are meals included on the island?",
        "Many island resorts include full board. We tell you exactly what your resort includes before you book."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Rice Terraces and Islands
  // ---------------------------------------------------------------------------
  {
    slug: "rice-terraces-and-islands",
    title: {
      en: "Rice Terraces and Islands",
      fr: "Rizières et îles",
      es: "Entre arrozales y paraísos",
      ru: "Рисовые террасы и острова",
      ar: "مدرجات الأرز والجزر",
    },
    days: 13,
    route: ["manila", "banaue", "sagada", "coron"],
    styles: ["essential", "boutique", "premium"],
    categories: ["nature-adventure", "off-the-beaten-path", "island-escapes"],
    photo: {
      alt: { en: "Green rice terraces on steep mountainsides at Batad", es: "Arrozales verdes en terrazas sobre las laderas de Batad", fr: "Rizières en terrasses vertes sur les pentes de Batad" },
      brief: "The Batad amphitheatre of terraces in morning light, a small village in the bowl.",
      tone: "rice",
    },
    short: {
      en: "The mountains of the north first: the rice terraces of Batad and the caves and pine forests of Sagada. Then Coron's lakes, reefs and limestone islands.",
      fr: "D'abord les montagnes du nord : les rizières en terrasses de Batad, les grottes et les pinèdes de Sagada. Puis les lacs, les récifs et les îles calcaires de Coron.",
      es: "Primero las montañas del norte: los arrozales en terrazas de Batad y las cuevas y pinares de Sagada. Después, los lagos, arrecifes e islas de caliza de Coron.",
      ru: "Сначала горы севера: рисовые террасы Батада, пещеры и сосновые леса Сагады. Затем озёра, рифы и известняковые острова Корона.",
      ar: "الجبال الشمالية أولًا: مدرجات الأرز في باتاد وكهوف ساغادا وغابات الصنوبر فيها. ثم بحيرات كورون وشعابها المرجانية وجزرها الكلسية.",
    },
    intro: en(
      "Most people never see this side of the Philippines. In the Cordillera mountains north of Manila, the Ifugao people carved rice terraces into the slopes two thousand years ago, and they are still farmed today. You hike into Batad's amphitheatre of terraces with a local guide, then continue to Sagada, a cool mountain town of pine forests, caves and the famous hanging coffins.\n\nAfter the mountains, the sea. Coron in northern Palawan has some of the clearest lakes and best reefs in the country, and three days there are a perfect contrast to the week in the hills. The mountain roads are long, so we plan the driving carefully and use private cars from Boutique up."
    ),
    highlights: {
      en: [
        "Hike the Batad rice terraces with a local guide",
        "Sagada's caves, pine forests and hanging coffins",
        "Kayangan and Barracuda lakes in Coron",
        "Mountains and islands in one trip",
      ],
      es: [
        "Caminata por los arrozales de Batad con guía local",
        "Las cuevas, pinares y ataúdes colgantes de Sagada",
        "Los lagos Kayangan y Barracuda en Coron",
        "Montañas e islas en un solo viaje",
      ],
      fr: [
        "Randonnée dans les rizières de Batad avec un guide local",
        "Les grottes, pinèdes et cercueils suspendus de Sagada",
        "Les lacs Kayangan et Barracuda à Coron",
        "Montagnes et îles en un seul voyage",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en("Airport pick-up and a night in Manila."),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "banaue",
        title: en("Drive to Banaue"),
        body: en("A long but scenic drive north into the Cordillera, with stops for lunch and viewpoints."),
        overnight: "Banaue",
      },
      {
        days: "3–4",
        place: "banaue",
        title: en("Batad and the terraces"),
        body: en("A guided hike into Batad's terraces and down to Tappiya waterfall, and a second, gentler day around Banaue's viewpoints and villages."),
        overnight: "Banaue or Batad",
      },
      {
        days: "5",
        place: "sagada",
        title: en("To Sagada"),
        body: en("Around three hours by mountain road to Sagada. Afternoon walk through the town."),
        overnight: "Sagada",
      },
      {
        days: "6–7",
        place: "sagada",
        title: en("Sagada"),
        body: en("Sumaguing cave with a guide, the hanging coffins of Echo Valley and an early sunrise at Kiltepan, above the clouds."),
        overnight: "Sagada",
      },
      {
        days: "8",
        place: "manila",
        title: en("Back to Manila"),
        body: en("A full day on the road back to Manila, or via Baguio with a stop. Evening in the city."),
        overnight: "Manila",
      },
      {
        days: "9",
        place: "coron",
        title: en("Fly to Coron"),
        body: en("Short flight to Busuanga and a transfer to Coron town."),
        overnight: "Coron",
      },
      {
        days: "10–12",
        place: "coron",
        title: en("Coron: lakes, reefs and a free day"),
        body: en("Kayangan and Barracuda lakes, coral gardens and beaches on two boat days, and one free day for the hot springs or Mount Tapyas at sunset."),
        overnight: "Coron",
      },
      {
        days: "13",
        place: "coron",
        title: en("Fly out via Manila"),
        body: en("Flight back to Manila for your international connection."),
      },
    ],
    legs: [
      { mode: "road", from: "Manila", to: "Banaue", time: "8–9h by road" },
      { mode: "road", from: "Banaue", to: "Sagada", time: "around 3h by road" },
      { mode: "road", from: "Sagada", to: "Manila", time: "10–12h by road", note: en("We can break this with a night in Baguio if you prefer.") },
      { mode: "flight", from: "Manila", to: "Busuanga (Coron)", time: "1h flight" },
      { mode: "flight", from: "Busuanga (Coron)", to: "Manila", time: "1h flight" },
    ],
    experiences: enList(["Batad terraces hike", "Sumaguing cave", "Kiltepan sunrise", "Coron lakes and reefs"]),
    included: {
      en: [
        "12 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Manila–Busuanga (Coron), Busuanga–Manila",
        "Airport, port and road transfers (shared in Essential, private from Boutique up)",
        "Road transport Manila–Banaue–Sagada–Manila (bus in Essential, private car from Boutique up)",
        "Guided Batad hike, Sagada cave and village walks, two Coron boat days",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "12 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Manila–Busuanga (Coron), Busuanga–Manila",
        "Traslados de aeropuerto, puerto y carretera (compartidos en Essential, privados desde Boutique)",
        "Transporte por carretera Manila–Banaue–Sagada–Manila (autobús en Essential, coche privado desde Boutique)",
        "Caminata guiada en Batad, cueva y paseos por Sagada, dos días en barco en Coron",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "12 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Manille–Busuanga (Coron), Busuanga–Manille",
        "Transferts aéroport, port et route (partagés en Essential, privés à partir de Boutique)",
        "Transport par la route Manille–Banaue–Sagada–Manille (bus en Essential, voiture privée à partir de Boutique)",
        "Randonnée guidée à Batad, grotte et balades à Sagada, deux journées en bateau à Coron",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Private car and driver for the whole of the north", "A night in Baguio to break the drive", "Private boat in Coron"]),
    bestMonths: { en: "December to May; the terraces are greenest from April to July", es: "De diciembre a mayo; los arrozales están más verdes de abril a julio", fr: "De décembre à mai ; les rizières sont les plus vertes d'avril à juillet" },
    fromPriceEUR: { essential: 2000, boutique: 3000, premium: 5000 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "How hard is the Batad hike?",
        "It is steep in places, with many stone steps, but you go at your own pace with a guide. Reasonably fit travellers of any age can do it. There is a shorter option if you prefer."
      ),
      faq(
        "Why so much driving?",
        "There are no flights to the rice terraces. The roads are slow but beautiful, and we time the drives so you arrive in daylight."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Luzon Adventure
  // ---------------------------------------------------------------------------
  {
    slug: "luzon-adventure",
    title: {
      en: "Luzon Adventure",
      fr: "Aventure à Luzon",
      es: "Aventura por Luzón",
      ru: "Приключение на Лусоне",
      ar: "مغامرة في لوزون",
    },
    days: 10,
    route: ["manila", "banaue", "sagada", "vigan"],
    styles: ["essential", "boutique", "premium"],
    categories: ["nature-adventure", "food-culture", "off-the-beaten-path"],
    photo: {
      alt: { en: "Pine forests and mountains above the clouds at Sagada", es: "Pinares y montañas sobre las nubes en Sagada", fr: "Pinèdes et montagnes au-dessus des nuages à Sagada" },
      brief: "Sunrise over a sea of clouds from Kiltepan, Sagada, pine silhouettes in the foreground.",
      tone: "stone",
    },
    short: {
      en: "Manila's old town and food, the rice terraces of Banaue and Batad, Sagada's caves, then the Spanish colonial streets of Vigan. The Philippines' history and mountains in ten days.",
      fr: "La vieille ville et la cuisine de Manille, les rizières de Banaue et Batad, les grottes de Sagada, puis les rues coloniales espagnoles de Vigan. L'histoire et les montagnes des Philippines en dix jours.",
      es: "El casco antiguo y la cocina de Manila, los arrozales de Banaue y Batad, las cuevas de Sagada y las calles coloniales españolas de Vigan. La historia y las montañas de Filipinas en diez días.",
      ru: "Старый город и кухня Манилы, рисовые террасы Банауэ и Батада, пещеры Сагады, затем испанские колониальные улицы Вигана. История и горы Филиппин за десять дней.",
      ar: "المدينة القديمة في مانيلا ومطبخها، ومدرجات الأرز في باناوي وباتاد، وكهوف ساغادا، ثم شوارع فيغان الاستعمارية الإسبانية. تاريخ الفلبين وجبالها في عشرة أيام.",
    },
    intro: en(
      "A trip for people who want more than beaches. It starts in Manila with the walls of Intramuros and a food walk through Binondo, the oldest Chinatown in the world. Then it heads north into the Cordillera: the rice terraces of Banaue and Batad, and the caves and pine forests of Sagada.\n\nFrom Sagada the road winds down to the coast and Vigan, a UNESCO-listed town of cobbled streets, horse-drawn calesas and Spanish colonial houses, with its own food traditions. You fly back to Manila from nearby Laoag. It pairs perfectly with a few beach days afterwards: ask us to add Boracay, Bohol or El Nido."
    ),
    highlights: {
      en: [
        "Intramuros and a Binondo food walk in Manila",
        "The rice terraces of Banaue and Batad",
        "Caves and sunrise above the clouds in Sagada",
        "Vigan's Spanish colonial streets",
      ],
      es: [
        "Intramuros y un paseo gastronómico por Binondo en Manila",
        "Los arrozales de Banaue y Batad",
        "Cuevas y amanecer sobre las nubes en Sagada",
        "Las calles coloniales españolas de Vigan",
      ],
      fr: [
        "Intramuros et une balade gourmande à Binondo, à Manille",
        "Les rizières de Banaue et Batad",
        "Grottes et lever de soleil au-dessus des nuages à Sagada",
        "Les rues coloniales espagnoles de Vigan",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en("Airport pick-up and a night in Manila."),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "manila",
        title: en("Old Manila and Binondo"),
        body: en("A guided walk through Intramuros and San Agustín church, then a food walk in Binondo."),
        overnight: "Manila",
      },
      {
        days: "3",
        place: "banaue",
        title: en("Drive to Banaue"),
        body: en("North into the mountains, with stops on the way."),
        overnight: "Banaue",
      },
      {
        days: "4",
        place: "banaue",
        title: en("Batad terraces"),
        body: en("A guided hike into the Batad terraces and to Tappiya waterfall."),
        overnight: "Banaue or Batad",
      },
      {
        days: "5",
        place: "sagada",
        title: en("To Sagada"),
        body: en("Mountain road to Sagada and an afternoon walk to the hanging coffins of Echo Valley."),
        overnight: "Sagada",
      },
      {
        days: "6",
        place: "sagada",
        title: en("Sagada caves and sunrise"),
        body: en("Sunrise at Kiltepan, then Sumaguing cave with a local guide."),
        overnight: "Sagada",
      },
      {
        days: "7",
        place: "vigan",
        title: en("Down to Vigan"),
        body: en("A long, scenic drive from the mountains to the coast. Evening walk along Calle Crisologo."),
        overnight: "Vigan",
      },
      {
        days: "8",
        place: "vigan",
        title: en("Vigan"),
        body: en("Heritage houses, a calesa ride, the pottery workshops and local dishes like empanada and longganisa."),
        overnight: "Vigan",
      },
      {
        days: "9",
        place: "manila",
        title: en("Fly back to Manila"),
        body: en("Short drive to Laoag and a flight to Manila. Last evening in the city."),
        overnight: "Manila",
      },
      {
        days: "10",
        place: "manila",
        title: en("Fly out"),
        body: en("Transfer to the international terminal."),
      },
    ],
    legs: [
      { mode: "road", from: "Manila", to: "Banaue", time: "8–9h by road" },
      { mode: "road", from: "Banaue", to: "Sagada", time: "around 3h by road" },
      { mode: "road", from: "Sagada", to: "Vigan", time: "5–6h by road" },
      { mode: "road", from: "Vigan", to: "Laoag airport", time: "around 1h 30m by road" },
      { mode: "flight", from: "Laoag", to: "Manila", time: "1h flight" },
    ],
    experiences: enList(["Binondo food walk", "Batad terraces hike", "Sumaguing cave", "Vigan heritage walk"]),
    included: {
      en: [
        "9 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Laoag–Manila",
        "Airport, port and road transfers (shared in Essential, private from Boutique up)",
        "Road transport Manila–Banaue–Sagada–Vigan (bus in Essential, private car from Boutique up)",
        "Intramuros walk and Binondo food walk, Batad hike, Sagada cave, Vigan heritage walk and calesa ride",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "9 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Laoag–Manila",
        "Traslados de aeropuerto, puerto y carretera (compartidos en Essential, privados desde Boutique)",
        "Transporte por carretera Manila–Banaue–Sagada–Vigan (autobús en Essential, coche privado desde Boutique)",
        "Paseo por Intramuros y ruta gastronómica en Binondo, caminata en Batad, cueva de Sagada, paseo por Vigan y paseo en calesa",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "9 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Laoag–Manille",
        "Transferts aéroport, port et route (partagés en Essential, privés à partir de Boutique)",
        "Transport par la route Manille–Banaue–Sagada–Vigan (bus en Essential, voiture privée à partir de Boutique)",
        "Visite d'Intramuros et balade gourmande à Binondo, randonnée à Batad, grotte de Sagada, visite de Vigan et promenade en calesa",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Add three beach nights in Boracay or El Nido", "Private car and driver throughout", "A night in a restored heritage house in Vigan"]),
    bestMonths: { en: "November to May for dry mountain roads", es: "De noviembre a mayo, con carreteras de montaña secas", fr: "De novembre à mai, pour des routes de montagne sèches" },
    fromPriceEUR: { essential: 1700, boutique: 2500, premium: 4100 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Can I add a beach at the end?",
        "Yes, and most people do. Boracay, Bohol or El Nido are all an easy flight from Manila."
      ),
      faq(
        "Is it cold in the mountains?",
        "Sagada and Banaue are cool, especially at night and early morning from December to February. Bring a warm layer."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Cebu Islands and Culture
  // ---------------------------------------------------------------------------
  {
    slug: "cebu-islands-and-culture",
    title: {
      en: "Cebu Islands and Culture",
      fr: "Cebu, îles et culture",
      es: "Cultura isleña por Cebú",
      ru: "Острова и культура Себу",
      ar: "جزر سيبو وثقافتها",
    },
    days: 12,
    route: ["cebu", "malapascua", "moalboal", "bohol"],
    styles: ["essential", "boutique", "premium"],
    categories: ["diving", "island-escapes", "food-culture"],
    photo: {
      alt: { en: "Clear blue water over a coral reef off Moalboal, Cebu", es: "Agua azul y clara sobre un arrecife de coral en Moalboal, Cebú", fr: "Eau bleue et claire au-dessus d'un récif corallien à Moalboal, Cebu" },
      brief: "Over-under shot of a reef wall at Moalboal, clear water, soft morning light.",
      tone: "reef",
    },
    short: {
      en: "All by road and sea, with no domestic flights: Cebu city's history and food, Malapascua's sharks, Moalboal's sardine run and canyons, then Bohol.",
      fr: "Tout par la route et la mer, sans vol intérieur : l'histoire et la cuisine de Cebu, les requins de Malapascua, les sardines et canyons de Moalboal, puis Bohol.",
      es: "Todo por carretera y mar, sin vuelos domésticos: la historia y la cocina de Cebú, los tiburones de Malapascua, las sardinas y cañones de Moalboal, y después Bohol.",
      ru: "Только дорогой и морем, без внутренних перелётов: история и кухня Себу, акулы Малапаскуа, сардины и каньоны Моалбоала, затем Бохоль.",
      ar: "كلها برًا وبحرًا دون رحلات داخلية: تاريخ مدينة سيبو ومطبخها، وأسماك القرش في مالاباسكوا، وأسراب السردين والأخاديد في موالبوال، ثم بوهول.",
    },
    intro: en(
      "Cebu is where the Philippines' Spanish history began, and it is one of the easiest places to arrive, with international flights straight into Mactan. This trip never needs a domestic flight. You start in Cebu city with its old forts and churches and the island's famous lechon, then head north to the small island of Malapascua, where divers see thresher sharks at dawn and everyone else gets quiet beaches.\n\nNext comes Moalboal on the west coast, where millions of sardines swirl just off the beach and the turtles are easy to find, and where Kawasan's turquoise canyons are close by. The trip ends on Bohol, with its hills, tarsiers and white sand, a fast ferry from Cebu. Divers can turn this into a dive trip; non-divers miss nothing."
    ),
    highlights: {
      en: [
        "Cebu city's history and lechon",
        "Malapascua, home of the thresher sharks",
        "Snorkel the Moalboal sardine run",
        "Canyoneering at Kawasan",
        "Bohol's hills and beaches to finish",
      ],
      es: [
        "La historia de Cebú y su famoso lechón",
        "Malapascua, la isla de los tiburones zorro",
        "Snorkel entre los bancos de sardinas de Moalboal",
        "Barranquismo en Kawasan",
        "Las colinas y playas de Bohol para terminar",
      ],
      fr: [
        "L'histoire de Cebu et son célèbre lechon",
        "Malapascua, l'île des requins-renards",
        "Snorkeling au milieu des sardines de Moalboal",
        "Canyoning à Kawasan",
        "Les collines et plages de Bohol pour finir",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "cebu",
        title: en("Arrive in Cebu"),
        body: en("Airport pick-up on Mactan and a night in Cebu."),
        overnight: "Cebu",
      },
      {
        days: "2",
        place: "cebu",
        title: en("Cebu city"),
        body: en("Magellan's Cross, the Santo Niño basilica, Fort San Pedro and a lechon lunch."),
        overnight: "Cebu",
      },
      {
        days: "3",
        place: "malapascua",
        title: en("North to Malapascua"),
        body: en("Around four hours by road to Maya, then a short boat ride to the island."),
        overnight: "Malapascua",
      },
      {
        days: "4–5",
        place: "malapascua",
        title: en("Malapascua"),
        body: en("An optional dawn dive with thresher sharks, snorkelling and beaches, and a boat to a nearby island."),
        overnight: "Malapascua",
      },
      {
        days: "6",
        place: "moalboal",
        title: en("Across to Moalboal"),
        body: en("A long transfer down Cebu's west coast. Evening on the water at Panagsama."),
        overnight: "Moalboal",
      },
      {
        days: "7–8",
        place: "moalboal",
        title: en("Moalboal and Kawasan"),
        body: en("Snorkel the sardine run and look for turtles, then a day of canyoneering through Kawasan's turquoise pools."),
        overnight: "Moalboal",
      },
      {
        days: "9",
        place: "bohol",
        title: en("To Bohol"),
        body: en("By road to Cebu port and fast ferry to Bohol."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "10–11",
        place: "bohol",
        title: en("Bohol"),
        body: en("Chocolate Hills, tarsiers and the Loboc River on one day, and a free beach day."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "12",
        place: "bohol",
        title: en("Fly out from Cebu"),
        body: en("Fast ferry back to Cebu and transfer to the airport."),
      },
    ],
    legs: [
      { mode: "road", from: "Cebu", to: "Maya port", time: "around 4h by road" },
      { mode: "boat", from: "Maya", to: "Malapascua", time: "around 30m by boat" },
      { mode: "road", from: "Maya", to: "Moalboal", time: "5–6h by road" },
      { mode: "road", from: "Moalboal", to: "Cebu port", time: "around 3h by road" },
      { mode: "ferry", from: "Cebu", to: "Tagbilaran (Bohol)", time: "around 2h fast ferry" },
      { mode: "ferry", from: "Tagbilaran (Bohol)", to: "Cebu", time: "around 2h fast ferry" },
    ],
    experiences: enList(["Cebu heritage and lechon", "Malapascua thresher sharks", "Moalboal sardine run", "Kawasan canyoneering", "Bohol countryside"]),
    included: {
      en: [
        "11 nights' accommodation in your chosen tier, breakfast daily",
        "Boats Maya–Malapascua and fast ferry Cebu–Bohol–Cebu",
        "Airport, port and road transfers (shared in Essential, private from Boutique up)",
        "Cebu city tour, Kawasan canyoneering, Moalboal snorkelling, Bohol countryside day",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "11 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Barcos Maya–Malapascua y ferry rápido Cebú–Bohol–Cebú",
        "Traslados de aeropuerto, puerto y carretera (compartidos en Essential, privados desde Boutique)",
        "Visita de Cebú, barranquismo en Kawasan, snorkel en Moalboal, día por el interior de Bohol",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "11 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Bateaux Maya–Malapascua et ferry rapide Cebu–Bohol–Cebu",
        "Transferts aéroport, port et route (partagés en Essential, privés à partir de Boutique)",
        "Visite de Cebu, canyoning à Kawasan, snorkeling à Moalboal, journée dans la campagne de Bohol",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Dives, dive fees and equipment rental (priced with the dive centre)",
        "Extra insurance cover for diving, if you dive",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Inmersiones, tasas de buceo y alquiler de equipo (según tarifa del centro de buceo)",
        "Cobertura adicional del seguro para buceo, si buceas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Plongées, taxes de plongée et location de matériel (au tarif du centre de plongée)",
        "Extension d'assurance pour la plongée, si vous plongez",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Dive package in Malapascua and Moalboal", "Private car for the long transfers", "Add Siquijor before Bohol"]),
    bestMonths: { en: "December to May; Malapascua's sharks can be seen all year", es: "De diciembre a mayo; los tiburones de Malapascua se ven todo el año", fr: "De décembre à mai ; les requins de Malapascua se voient toute l'année" },
    fromPriceEUR: { essential: 1700, boutique: 2600, premium: 4300 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Do I need to dive?",
        "No. The sardines and turtles in Moalboal are right off the beach with a mask and snorkel. The thresher sharks are for certified divers only."
      ),
      faq(
        "Can I fly into Cebu from Europe?",
        "There are no direct flights, but Cebu has good connections via Singapore, Hong Kong, Doha, Dubai and Seoul, so you can skip Manila completely."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Bohol and Camiguin
  // ---------------------------------------------------------------------------
  {
    slug: "bohol-and-camiguin",
    title: {
      en: "Bohol and Camiguin",
      fr: "Bohol et Camiguin",
      es: "Bohol y Camiguin",
      ru: "Бохоль и Камигин",
      ar: "بوهول وكاميغين",
    },
    days: 11,
    route: ["manila", "bohol", "camiguin"],
    styles: ["essential", "boutique", "premium"],
    categories: ["off-the-beaten-path", "island-escapes", "nature-adventure"],
    photo: {
      alt: { en: "A volcano rising behind palm trees on Camiguin island", es: "Un volcán entre palmeras en la isla de Camiguin", fr: "Un volcan derrière les palmiers sur l'île de Camiguin" },
      brief: "Camiguin's volcano behind coconut palms, late afternoon, with the sea in the foreground.",
      tone: "jungle",
    },
    short: {
      en: "Bohol's hills and beaches, then a ferry to Camiguin, a small volcanic island of waterfalls, hot springs and a white sandbar. Local life and very few tourists.",
      fr: "Les collines et plages de Bohol, puis un ferry vers Camiguin, petite île volcanique de cascades, sources chaudes et banc de sable blanc. La vie locale, et très peu de touristes.",
      es: "Las colinas y playas de Bohol y después un ferry a Camiguin, una pequeña isla volcánica de cascadas, aguas termales y un banco de arena blanca. Vida local y muy pocos turistas.",
      ru: "Холмы и пляжи Бохоля, затем паром на Камигин — маленький вулканический остров с водопадами, горячими источниками и белой отмелью. Местная жизнь и мало туристов.",
      ar: "تلال بوهول وشواطئها، ثم عبّارة إلى كاميغين، جزيرة بركانية صغيرة من الشلالات والينابيع الساخنة والضفة الرملية البيضاء. حياة محلية وقليل جدًا من السياح.",
    },
    intro: en(
      "Camiguin is one of the Philippines' best-kept secrets: a small, green island formed by volcanoes, with more of them than towns. You can drive around it in an afternoon, but you will want three days for its waterfalls, its hot and cold springs, the sunken cemetery off the coast and White Island, a sandbar with a volcano behind it.\n\nIt pairs naturally with Bohol, just across the water, and the ferry between them means no extra flights. Bohol gives you the Chocolate Hills, tarsiers and calm Panglao beaches. You fly home from Cagayan de Oro on Mindanao, a short ferry and drive from Camiguin. This is the Philippines as Filipinos holiday: easy, friendly and unhurried."
    ),
    highlights: {
      en: [
        "Bohol's Chocolate Hills and tarsiers",
        "White Island sandbar below Camiguin's volcano",
        "Waterfalls and hot and cold springs",
        "Two islands linked by ferry, not flights",
      ],
      es: [
        "Las Colinas de Chocolate y los tarseros de Bohol",
        "El banco de arena de White Island a los pies del volcán",
        "Cascadas y aguas termales frías y calientes",
        "Dos islas unidas en ferry, sin vuelos",
      ],
      fr: [
        "Les Chocolate Hills et les tarsiers de Bohol",
        "Le banc de sable de White Island au pied du volcan",
        "Cascades et sources chaudes et froides",
        "Deux îles reliées par ferry, sans vol",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en("Airport pick-up and a night in Manila."),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "bohol",
        title: en("Fly to Bohol"),
        body: en("Morning flight to Panglao and an afternoon on the beach."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "3–5",
        place: "bohol",
        title: en("Bohol"),
        body: en("A countryside day for the Chocolate Hills, tarsiers and the Loboc River; a boat to Balicasag for turtles; and a free day."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "6",
        place: "camiguin",
        title: en("Ferry to Camiguin"),
        body: en("Drive to Jagna and take the ferry across to Camiguin, around four hours."),
        overnight: "Camiguin",
      },
      {
        days: "7–9",
        place: "camiguin",
        title: en("Camiguin"),
        body: en("White Island at sunrise, Katibawasan and Tuasan falls, the Sunken Cemetery, Ardent hot springs and Santo Niño cold spring, with a driver."),
        overnight: "Camiguin",
      },
      {
        days: "10",
        place: "manila",
        title: en("Via Cagayan de Oro to Manila"),
        body: en("Short ferry to Mindanao, drive to Laguindingan airport and fly to Manila."),
        overnight: "Manila",
      },
      {
        days: "11",
        place: "manila",
        title: en("Fly out"),
        body: en("Transfer to the international terminal."),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "Bohol (Panglao)", time: "1h 20m flight" },
      { mode: "ferry", from: "Jagna (Bohol)", to: "Camiguin", time: "around 4h ferry", note: en("Not daily; we plan the dates around the ferry schedule.") },
      { mode: "ferry", from: "Camiguin", to: "Balingoan (Mindanao)", time: "around 1h ferry" },
      { mode: "road", from: "Balingoan", to: "Laguindingan airport", time: "around 2h 30m by road" },
      { mode: "flight", from: "Cagayan de Oro (Laguindingan)", to: "Manila", time: "1h 40m flight" },
    ],
    experiences: enList(["Bohol countryside", "Balicasag turtles", "White Island sandbar", "Camiguin falls and springs"]),
    included: {
      en: [
        "10 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Manila–Bohol, Cagayan de Oro–Manila",
        "Ferries Bohol–Camiguin and Camiguin–Mindanao",
        "Airport, port and road transfers (shared in Essential, private from Boutique up)",
        "Bohol countryside day, Balicasag snorkelling, a Camiguin island day with driver and a White Island boat trip",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "10 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Manila–Bohol, Cagayan de Oro–Manila",
        "Ferris Bohol–Camiguin y Camiguin–Mindanao",
        "Traslados de aeropuerto, puerto y carretera (compartidos en Essential, privados desde Boutique)",
        "Día por el interior de Bohol, snorkel en Balicasag, día por Camiguin con conductor y barco a White Island",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "10 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Manille–Bohol, Cagayan de Oro–Manille",
        "Ferrys Bohol–Camiguin et Camiguin–Mindanao",
        "Transferts aéroport, port et route (partagés en Essential, privés à partir de Boutique)",
        "Journée dans la campagne de Bohol, snorkeling à Balicasag, journée sur Camiguin avec chauffeur et bateau vers White Island",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Private car on both islands", "Add Siquijor before Camiguin", "A hike up Mount Hibok-Hibok with a guide"]),
    bestMonths: { en: "March to June is the driest on Camiguin; December to May for Bohol", es: "De marzo a junio es lo más seco en Camiguin; de diciembre a mayo para Bohol", fr: "De mars à juin, la période la plus sèche à Camiguin ; de décembre à mai pour Bohol" },
    fromPriceEUR: { essential: 1600, boutique: 2400, premium: 4000 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Is Camiguin safe?",
        "Yes. Camiguin is a small, quiet island province, popular with Filipino families. We follow official travel advice and plan only what we would do ourselves."
      ),
      faq(
        "How often is the ferry?",
        "The Bohol–Camiguin ferry runs a few times a week, so we build your dates around it."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // The Gentle Philippines
  // ---------------------------------------------------------------------------
  {
    slug: "the-gentle-philippines",
    title: {
      en: "The Gentle Philippines",
      fr: "Les Philippines en douceur",
      es: "Filipinas a ritmo suave",
      ru: "Филиппины в мягком ритме",
      ar: "الفلبين على مهل",
    },
    days: 12,
    route: ["manila", "bohol", "el-nido"],
    styles: ["boutique", "premium", "signature"],
    categories: ["private-journeys", "island-escapes", "food-culture"],
    photo: {
      alt: { en: "A calm bay at sunset in El Nido, Palawan", es: "Una bahía tranquila al atardecer en El Nido, Palawan", fr: "Une baie calme au coucher du soleil à El Nido, Palawan" },
      brief: "Bacuit Bay at sunset from a hotel terrace, calm water, warm light.",
      tone: "dusk",
    },
    short: {
      en: "For travellers who want comfort and fewer early starts: a private car and guide, good hotels that are easy to reach, short boat days and time to rest.",
      fr: "Pour ceux qui veulent du confort et moins de réveils matinaux : voiture et guide privés, bons hôtels faciles d'accès, courtes sorties en bateau et du temps pour se reposer.",
      es: "Para quienes buscan comodidad y menos madrugones: coche y guía privados, buenos hoteles de fácil acceso, salidas cortas en barco y tiempo para descansar.",
      ru: "Для тех, кто ценит комфорт и не любит ранних подъёмов: частная машина и гид, хорошие и удобные отели, короткие морские прогулки и время на отдых.",
      ar: "لمن يريد الراحة وعددًا أقل من الاستيقاظ المبكر: سيارة ومرشد خاصان، وفنادق جيدة يسهل الوصول إليها، ورحلات بحرية قصيرة، ووقت للراحة.",
    },
    intro: en(
      "We designed this route for travellers who want to see the Philippines properly but at an easier pace, and it is especially popular with couples over sixty and with anyone travelling with older parents. Every transfer is private. Hotels are chosen for easy access, with no long walks on sand or steep steps, and for good food. Boat days are short, with shade, and finish by lunchtime if you prefer.\n\nYou begin with a private tour of old Manila, then spend four days on Bohol, with its countryside, river and beaches, and four in El Nido, where the boat days can be as gentle as you like. There are only two travel days, and both are timed so there are no very early starts."
    ),
    highlights: {
      en: [
        "Private car, driver and guide throughout",
        "Hotels chosen for easy access and good food",
        "Short, shaded boat days in El Nido",
        "No very early starts",
      ],
      es: [
        "Coche, conductor y guía privados en todo el viaje",
        "Hoteles elegidos por su fácil acceso y buena cocina",
        "Salidas en barco cortas y con sombra en El Nido",
        "Sin grandes madrugones",
      ],
      fr: [
        "Voiture, chauffeur et guide privés tout au long du voyage",
        "Des hôtels choisis pour leur accès facile et leur bonne cuisine",
        "Des sorties en bateau courtes et ombragées à El Nido",
        "Pas de réveils très matinaux",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en("Private airport pick-up and a night in a quiet, central hotel."),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "manila",
        title: en("Old Manila"),
        body: en("A private, unhurried tour of Intramuros and San Agustín church, with lunch in a heritage restaurant."),
        overnight: "Manila",
      },
      {
        days: "3",
        place: "bohol",
        title: en("Fly to Bohol"),
        body: en("A late-morning flight to Panglao and an afternoon to settle in."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "4–6",
        place: "bohol",
        title: en("Bohol at an easy pace"),
        body: en("The Chocolate Hills and tarsiers by private car, a lunch cruise on the Loboc River, and a free day at the hotel."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "7",
        place: "el-nido",
        title: en("Bohol to El Nido"),
        body: en("Fast ferry to Cebu and a direct flight to El Nido."),
        overnight: "El Nido",
      },
      {
        days: "8–10",
        place: "el-nido",
        title: en("El Nido"),
        body: en("Two short private boat trips to the calmest lagoons and beaches, and a day to rest."),
        overnight: "El Nido",
      },
      {
        days: "11",
        place: "manila",
        title: en("Fly to Manila"),
        body: en("Flight to Manila and a final dinner."),
        overnight: "Manila",
      },
      {
        days: "12",
        place: "manila",
        title: en("Fly out"),
        body: en("Private transfer to the international terminal."),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "Bohol (Panglao)", time: "1h 20m flight" },
      { mode: "ferry", from: "Tagbilaran (Bohol)", to: "Cebu", time: "around 2h fast ferry" },
      { mode: "flight", from: "Cebu", to: "El Nido", time: "1h 30m flight" },
      { mode: "flight", from: "El Nido", to: "Manila", time: "1h 20m flight" },
    ],
    experiences: enList(["Intramuros private tour", "Loboc River cruise", "Chocolate Hills", "El Nido by private boat"]),
    included: {
      en: [
        "11 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Manila–Bohol, Cebu–El Nido, El Nido–Manila",
        "Fast ferry Bohol–Cebu",
        "Airport, port and road transfers (shared in Essential, private from Boutique up)",
        "Private Manila tour, private Bohol countryside day and river cruise, two private boat trips in El Nido",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "11 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Manila–Bohol, Cebú–El Nido, El Nido–Manila",
        "Ferry rápido Bohol–Cebú",
        "Traslados de aeropuerto, puerto y carretera (compartidos en Essential, privados desde Boutique)",
        "Visita privada de Manila, día privado por el interior de Bohol con crucero por el río y dos salidas en barco privado en El Nido",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "11 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Manille–Bohol, Cebu–El Nido, El Nido–Manille",
        "Ferry rapide Bohol–Cebu",
        "Transferts aéroport, port et route (partagés en Essential, privés à partir de Boutique)",
        "Visite privée de Manille, journée privée dans la campagne de Bohol avec croisière sur la rivière, deux sorties en bateau privé à El Nido",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Upgrade to suites with sea views", "Add a spa day in Bohol", "Extend El Nido by two nights"]),
    bestMonths: { en: "December to May", es: "De diciembre a mayo", fr: "De décembre à mai" },
    fromPriceEUR: { boutique: 3200, premium: 5200, signature: 9000 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Is it suitable for limited mobility?",
        "Tell us exactly what is easy and what is not, and we will choose hotels, boats and visits to match. Some boats need a short step from the beach; we choose the easiest options."
      ),
      faq(
        "Can we have a Spanish-speaking guide?",
        "Yes, we can arrange Spanish- or English-speaking guides."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Visayas on a Budget
  // ---------------------------------------------------------------------------
  {
    slug: "visayas-on-a-budget",
    title: {
      en: "Visayas on a Budget",
      fr: "Les Visayas à petit prix",
      es: "Visayas económico",
      ru: "Висайи без лишних трат",
      ar: "جزر فيساياس بميزانية معقولة",
    },
    days: 12,
    route: ["cebu", "moalboal", "siquijor", "bohol"],
    styles: ["essential", "boutique"],
    categories: ["island-escapes", "off-the-beaten-path"],
    photo: {
      alt: { en: "A turquoise waterfall pool in the forest on Siquijor", es: "Una poza turquesa bajo una cascada en el bosque de Siquijor", fr: "Un bassin turquoise sous une cascade dans la forêt de Siquijor" },
      brief: "Cambugahay Falls on Siquijor, early morning, turquoise pools, no crowds.",
      tone: "jungle",
    },
    short: {
      en: "Three islands for a sensible price: Moalboal's turtles and sardines, Siquijor's waterfalls and Bohol's hills. Simple, well-chosen hotels and transfers by road and sea.",
      fr: "Trois îles à un prix raisonnable : les tortues et sardines de Moalboal, les cascades de Siquijor et les collines de Bohol. Des hôtels simples et bien choisis, et des transferts par route et par mer.",
      es: "Tres islas a un precio razonable: las tortugas y sardinas de Moalboal, las cascadas de Siquijor y las colinas de Bohol. Hoteles sencillos y bien elegidos, y traslados por carretera y mar.",
      ru: "Три острова по разумной цене: черепахи и сардины Моалбоала, водопады Сикихора и холмы Бохоля. Простые, хорошо подобранные отели и переезды по суше и морю.",
      ar: "ثلاث جزر بسعر معقول: سلاحف موالبوال وأسراب السردين، وشلالات سيكيخور، وتلال بوهول. فنادق بسيطة ومختارة بعناية، وتنقلات برًا وبحرًا.",
    },
    intro: en(
      "A good Philippines trip does not need to be expensive. This route saves money in the right places: no domestic flights, simple but well-located hotels with good reviews, and shared tours where they work well. It does not save on safety, on reliable boats or on our support.\n\nYou fly into Cebu and head straight to Moalboal for turtles and the sardine run. Next comes Siquijor, an island of waterfalls, empty roads and folk legends, three days for the price of very little. Bohol closes the trip with its hills and beaches, and the fast ferry takes you back to Cebu for your flight home."
    ),
    highlights: {
      en: [
        "No domestic flights: road and sea only",
        "Turtles and sardines in Moalboal",
        "Siquijor's waterfalls and coast road",
        "Bohol's Chocolate Hills",
      ],
      es: [
        "Sin vuelos domésticos: solo carretera y mar",
        "Tortugas y sardinas en Moalboal",
        "Las cascadas y la carretera costera de Siquijor",
        "Las Colinas de Chocolate de Bohol",
      ],
      fr: [
        "Aucun vol intérieur : uniquement route et mer",
        "Tortues et sardines à Moalboal",
        "Les cascades et la route côtière de Siquijor",
        "Les Chocolate Hills de Bohol",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "cebu",
        title: en("Arrive in Cebu"),
        body: en("Airport pick-up and a night in Cebu."),
        overnight: "Cebu",
      },
      {
        days: "2",
        place: "moalboal",
        title: en("To Moalboal"),
        body: en("Around three hours by road to the west coast. Afternoon snorkelling off the beach."),
        overnight: "Moalboal",
      },
      {
        days: "3–4",
        place: "moalboal",
        title: en("Moalboal"),
        body: en("The sardine run and turtles, and a day of canyoneering at Kawasan."),
        overnight: "Moalboal",
      },
      {
        days: "5",
        place: "siquijor",
        title: en("To Siquijor"),
        body: en("Road south, a short ferry to Negros and a fast craft from Dumaguete to Siquijor."),
        overnight: "Siquijor",
      },
      {
        days: "6–8",
        place: "siquijor",
        title: en("Siquijor"),
        body: en("Cambugahay Falls, the old balete tree, Lazi church and the coast road by scooter or with a driver, and snorkelling at Tubod."),
        overnight: "Siquijor",
      },
      {
        days: "9",
        place: "bohol",
        title: en("Fast craft to Bohol"),
        body: en("Around two hours by sea to Tagbilaran, then to Panglao."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "10–11",
        place: "bohol",
        title: en("Bohol"),
        body: en("A shared countryside tour of the Chocolate Hills and tarsiers, and a beach day."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "12",
        place: "bohol",
        title: en("Fly out from Cebu"),
        body: en("Fast ferry back to Cebu and transfer to the airport."),
      },
    ],
    legs: [
      { mode: "road", from: "Cebu", to: "Moalboal", time: "around 3h by road" },
      { mode: "road", from: "Moalboal", to: "Liloan port", time: "around 2h by road" },
      { mode: "ferry", from: "Liloan", to: "Sibulan (Negros)", time: "around 30m ferry" },
      { mode: "ferry", from: "Dumaguete", to: "Siquijor", time: "1h–1h 30m fast craft" },
      { mode: "ferry", from: "Siquijor", to: "Tagbilaran (Bohol)", time: "around 2h fast craft", note: en("Limited schedule; backup route via Dumaguete.") },
      { mode: "ferry", from: "Tagbilaran (Bohol)", to: "Cebu", time: "around 2h fast ferry" },
    ],
    experiences: enList(["Moalboal sardine run", "Kawasan canyoneering", "Siquijor waterfalls", "Bohol countryside"]),
    included: {
      en: [
        "11 nights' accommodation in your chosen tier, breakfast daily",
        "Ferries and fast craft Cebu–Negros–Siquijor–Bohol–Cebu",
        "Airport, port and road transfers (shared in Essential, private from Boutique up)",
        "Moalboal snorkelling, Kawasan canyoneering, a Siquijor island day and a Bohol countryside tour",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "11 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Ferris y barcos rápidos Cebú–Negros–Siquijor–Bohol–Cebú",
        "Traslados de aeropuerto, puerto y carretera (compartidos en Essential, privados desde Boutique)",
        "Snorkel en Moalboal, barranquismo en Kawasan, día por Siquijor y excursión por el interior de Bohol",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "11 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Ferrys et bateaux rapides Cebu–Negros–Siquijor–Bohol–Cebu",
        "Transferts aéroport, port et route (partagés en Essential, privés à partir de Boutique)",
        "Snorkeling à Moalboal, canyoning à Kawasan, journée sur Siquijor et excursion dans la campagne de Bohol",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Upgrade to Boutique hotels", "Add Apo Island from Dumaguete", "Private car on Siquijor"]),
    bestMonths: { en: "December to May", es: "De diciembre a mayo", fr: "De décembre à mai" },
    fromPriceEUR: { essential: 1300, boutique: 1900 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "What kind of hotels are they?",
        "Clean, safe, well-reviewed and well-located: good small hotels and guesthouses with private bathrooms and air-conditioning. Upgrade to Boutique for more character and comfort."
      ),
      faq(
        "Is it still a private trip?",
        "Transfers are shared where it makes sense to keep the price down, but your plan, bookings and support are all your own."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Family Islands
  // ---------------------------------------------------------------------------
  {
    slug: "family-islands",
    title: {
      en: "Family Islands",
      fr: "Îles en famille",
      es: "Islas en familia",
      ru: "Острова всей семьёй",
      ar: "جزر للعائلة",
    },
    days: 13,
    route: ["manila", "bohol", "boracay"],
    styles: ["essential", "boutique", "premium", "signature"],
    categories: ["family", "island-escapes"],
    photo: {
      alt: { en: "Families on a long white beach with calm water in Boracay", es: "Familias en una larga playa blanca con aguas tranquilas en Boracay", fr: "Des familles sur une longue plage blanche aux eaux calmes à Boracay" },
      brief: "White Beach in Boracay in the late afternoon, children playing at the water's edge, sailboats offshore.",
      tone: "sand",
    },
    short: {
      en: "Two bases, one transfer day and calm beaches: Bohol's tarsiers, turtles and river, then Boracay's shallow water and sunset sailing. Built for children of all ages.",
      fr: "Deux étapes, une journée de transfert et des plages calmes : les tarsiers, tortues et rivières de Bohol, puis l'eau peu profonde et les voiliers au coucher du soleil à Boracay. Pensé pour les enfants de tous âges.",
      es: "Dos bases, un día de traslado y playas tranquilas: los tarseros, tortugas y el río de Bohol, y después el agua poco profunda y los veleros al atardecer en Boracay. Pensado para niños de todas las edades.",
      ru: "Две базы, один день переезда и спокойные пляжи: долгопяты, черепахи и река на Бохоле, затем мелкая вода и парусники на закате на Боракае. Для детей любого возраста.",
      ar: "قاعدتان ويوم تنقّل واحد وشواطئ هادئة: قرود التارسير والسلاحف والنهر في بوهول، ثم المياه الضحلة والإبحار عند الغروب في بوراكاي. مصممة للأطفال من جميع الأعمار.",
    },
    intro: en(
      "With children, the best Philippines trip is the one with the fewest moves. This route has just two bases and one transfer day between them. Bohol comes first, with the tiny tarsiers children love, the Chocolate Hills, a raft ride on the river and turtles at Balicasag. Then comes Boracay, with one of the calmest, shallowest family beaches in Asia, and easy restaurants, sailing at sunset and island-hopping by boat.\n\nWe choose family rooms or connecting rooms, hotels with pools and good food for children, and we keep tour days short. With toddlers, we can shorten the boat days. With teenagers, we add kayaking, paddleboarding and a first dive."
    ),
    highlights: {
      en: [
        "Tarsiers, the Chocolate Hills and a river raft in Bohol",
        "Turtles at Balicasag",
        "Boracay's calm, shallow White Beach",
        "Sunset sailing on a traditional paraw",
        "Two bases, one transfer day",
      ],
      es: [
        "Tarseros, Colinas de Chocolate y balsa por el río en Bohol",
        "Tortugas en Balicasag",
        "La playa White Beach de Boracay, tranquila y poco profunda",
        "Navegación al atardecer en un paraw tradicional",
        "Dos bases, un día de traslado",
      ],
      fr: [
        "Tarsiers, Chocolate Hills et radeau sur la rivière à Bohol",
        "Tortues à Balicasag",
        "La White Beach de Boracay, calme et peu profonde",
        "Navigation au coucher du soleil sur un paraw traditionnel",
        "Deux étapes, une journée de transfert",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en("Airport pick-up and a family room near the airport."),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "bohol",
        title: en("Fly to Bohol"),
        body: en("Short flight to Panglao and an afternoon at the pool or beach."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "3–6",
        place: "bohol",
        title: en("Bohol"),
        body: en("A countryside day with the tarsiers, the Chocolate Hills and a river lunch; a morning boat to Balicasag for turtles; and two free days."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "7",
        place: "boracay",
        title: en("Bohol to Boracay"),
        body: en("Fast ferry to Cebu, a short flight to Caticlan and a five-minute boat to Boracay."),
        overnight: "Boracay",
      },
      {
        days: "8–12",
        place: "boracay",
        title: en("Boracay"),
        body: en("Beach days on White Beach, island-hopping with snorkelling, a sunset sail on a paraw, and Puka Beach. Time for kayaking or a first dive for older children."),
        overnight: "Boracay",
      },
      {
        days: "13",
        place: "boracay",
        title: en("Fly out via Manila"),
        body: en("Flight from Caticlan to Manila for your international connection."),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "Bohol (Panglao)", time: "1h 20m flight" },
      { mode: "ferry", from: "Tagbilaran (Bohol)", to: "Cebu", time: "around 2h fast ferry" },
      { mode: "flight", from: "Cebu", to: "Caticlan (Boracay)", time: "1h flight" },
      { mode: "boat", from: "Caticlan", to: "Boracay", time: "around 15m by boat" },
      { mode: "flight", from: "Caticlan (Boracay)", to: "Manila", time: "1h flight" },
    ],
    experiences: enList(["Tarsier sanctuary", "Balicasag turtles", "Boracay island-hopping", "Sunset paraw sail"]),
    included: {
      en: [
        "12 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Manila–Bohol, Cebu–Caticlan, Caticlan–Manila",
        "Fast ferry Bohol–Cebu and boat transfers to Boracay",
        "Airport, port and road transfers (shared in Essential, private from Boutique up)",
        "Bohol countryside day, Balicasag turtles, Boracay island-hopping and a sunset paraw sail",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "12 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Manila–Bohol, Cebú–Caticlan, Caticlan–Manila",
        "Ferry rápido Bohol–Cebú y traslados en barco a Boracay",
        "Traslados de aeropuerto, puerto y carretera (compartidos en Essential, privados desde Boutique)",
        "Día por el interior de Bohol, tortugas en Balicasag, excursión por las islas de Boracay y paseo en paraw al atardecer",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "12 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Manille–Bohol, Cebu–Caticlan, Caticlan–Manille",
        "Ferry rapide Bohol–Cebu et transferts en bateau vers Boracay",
        "Transferts aéroport, port et route (partagés en Essential, privés à partir de Boutique)",
        "Journée dans la campagne de Bohol, tortues à Balicasag, tour des îles à Boracay et sortie en paraw au coucher du soleil",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Family villa with a private pool", "Private boat in Boracay", "A first dive course for children over ten"]),
    bestMonths: { en: "November to May; Boracay's White Beach is calmest from November to May", es: "De noviembre a mayo; White Beach en Boracay está más tranquila de noviembre a mayo", fr: "De novembre à mai ; la White Beach de Boracay est la plus calme de novembre à mai" },
    fromPriceEUR: { essential: 1700, boutique: 2600, premium: 4300, signature: 7400 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Is the Philippines good with small children?",
        "Very. Filipinos love children, the food is mild, and with two bases and short tours it is an easy trip. We plan nap times and pool time into the days."
      ),
      faq(
        "Do children pay full price?",
        "Usually not. Prices depend on ages and room sharing. Tell us your children's ages and we will quote exactly."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Palawan, Bohol and Boracay
  // ---------------------------------------------------------------------------
  {
    slug: "palawan-bohol-boracay",
    title: {
      en: "Palawan, Bohol and Boracay",
      fr: "Palawan, Bohol et Boracay",
      es: "Palawan, Bohol y Boracay",
      ru: "Палаван, Бохоль и Боракай",
      ar: "بالاوان وبوهول وبوراكاي",
    },
    days: 15,
    route: ["manila", "puerto-princesa", "el-nido", "bohol", "boracay"],
    styles: ["essential", "boutique", "premium", "signature"],
    categories: ["island-escapes", "private-journeys"],
    photo: {
      alt: { en: "Island-hopping boats in a turquoise bay in the Philippines", es: "Barcos de island-hopping en una bahía turquesa de Filipinas", fr: "Bateaux d'excursion dans une baie turquoise aux Philippines" },
      brief: "Bangkas moored in a turquoise bay, limestone behind, morning light.",
      tone: "lagoon",
    },
    short: {
      en: "The classic first trip: the Underground River and El Nido in Palawan, Bohol's hills and turtles, then Boracay's White Beach. Four islands in fifteen days, with sensible connections.",
      fr: "Le grand classique d'un premier voyage : la rivière souterraine et El Nido à Palawan, les collines et tortues de Bohol, puis la White Beach de Boracay. Quatre îles en quinze jours, avec des correspondances bien pensées.",
      es: "El gran clásico para un primer viaje: el río subterráneo y El Nido en Palawan, las colinas y tortugas de Bohol y la White Beach de Boracay. Cuatro islas en quince días, con conexiones sensatas.",
      ru: "Классика для первой поездки: Подземная река и Эль-Нидо на Палаване, холмы и черепахи Бохоля, затем White Beach на Боракае. Четыре острова за пятнадцать дней с продуманными стыковками.",
      ar: "الرحلة الكلاسيكية الأولى: النهر الجوفي وإل نيدو في بالاوان، وتلال بوهول وسلاحفها، ثم الشاطئ الأبيض في بوراكاي. أربع جزر في خمسة عشر يومًا، مع وصلات مدروسة.",
    },
    intro: en(
      "If you have two weeks and this is your first time, this is the route that shows the most variety without turning into a race. Palawan gives you the Underground River and the lagoons of El Nido. Bohol, reached by a direct flight from El Nido to Cebu and a fast ferry, brings rivers, hills and turtles. Boracay ends the trip with one of the world's great beaches, good restaurants and sailing at sunset.\n\nWe have avoided routing through Manila wherever possible: El Nido connects directly to Cebu, and Cebu to Boracay. Every island has at least one free day. As always, this is a starting point: swap Boracay for Siargao for a more relaxed surf-town ending, or drop Puerto Princesa and fly straight into El Nido."
    ),
    highlights: {
      en: [
        "The Puerto Princesa Underground River",
        "El Nido's lagoons by boat",
        "Bohol's Chocolate Hills and Balicasag turtles",
        "Boracay's White Beach and a sunset sail",
        "Direct connections, avoiding Manila",
      ],
      es: [
        "El río subterráneo de Puerto Princesa",
        "Las lagunas de El Nido en barco",
        "Las Colinas de Chocolate y las tortugas de Balicasag",
        "La White Beach de Boracay y un paseo en velero al atardecer",
        "Conexiones directas, evitando Manila",
      ],
      fr: [
        "La rivière souterraine de Puerto Princesa",
        "Les lagons d'El Nido en bateau",
        "Les Chocolate Hills et les tortues de Balicasag",
        "La White Beach de Boracay et une sortie en voilier au coucher du soleil",
        "Des liaisons directes, sans repasser par Manille",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en("Airport pick-up and a night in Manila."),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "puerto-princesa",
        title: en("Fly to Puerto Princesa"),
        body: en("Morning flight to Palawan and an easy afternoon."),
        overnight: "Puerto Princesa",
      },
      {
        days: "3",
        place: "puerto-princesa",
        title: en("Underground River"),
        body: en("Day trip to Sabang and the Underground River, with the mangroves."),
        overnight: "Puerto Princesa",
      },
      {
        days: "4",
        place: "el-nido",
        title: en("North to El Nido"),
        body: en("Five to six hours by road, with stops."),
        overnight: "El Nido",
      },
      {
        days: "5–6",
        place: "el-nido",
        title: en("El Nido"),
        body: en("A boat day around the lagoons and islands of Bacuit Bay, and a free day."),
        overnight: "El Nido",
      },
      {
        days: "7",
        place: "bohol",
        title: en("El Nido to Bohol"),
        body: en("Direct flight to Cebu and a fast ferry to Bohol."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "8–10",
        place: "bohol",
        title: en("Bohol"),
        body: en("The countryside with the Chocolate Hills and tarsiers, a morning at Balicasag with the turtles, and a free day."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "11",
        place: "boracay",
        title: en("Bohol to Boracay"),
        body: en("Fast ferry to Cebu and a short flight to Caticlan."),
        overnight: "Boracay",
      },
      {
        days: "12–13",
        place: "boracay",
        title: en("Boracay"),
        body: en("White Beach, Puka Beach, snorkelling and a sunset paraw sail."),
        overnight: "Boracay",
      },
      {
        days: "14",
        place: "manila",
        title: en("Fly to Manila"),
        body: en("Flight to Manila and a last evening in the city."),
        overnight: "Manila",
      },
      {
        days: "15",
        place: "manila",
        title: en("Fly out"),
        body: en("Transfer to the international terminal."),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "Puerto Princesa", time: "1h 20m flight" },
      { mode: "road", from: "Puerto Princesa", to: "El Nido", time: "5–6h by road" },
      { mode: "flight", from: "El Nido", to: "Cebu", time: "1h 30m flight" },
      { mode: "ferry", from: "Cebu", to: "Tagbilaran (Bohol)", time: "around 2h fast ferry" },
      { mode: "ferry", from: "Tagbilaran (Bohol)", to: "Cebu", time: "around 2h fast ferry" },
      { mode: "flight", from: "Cebu", to: "Caticlan (Boracay)", time: "1h flight" },
      { mode: "flight", from: "Caticlan (Boracay)", to: "Manila", time: "1h flight" },
    ],
    experiences: enList(["Underground River", "El Nido island-hopping", "Bohol countryside", "Balicasag turtles", "Boracay sunset sail"]),
    included: {
      en: [
        "14 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Manila–Puerto Princesa, El Nido–Cebu, Cebu–Caticlan, Caticlan–Manila",
        "Fast ferry Cebu–Bohol–Cebu and boat transfers to Boracay",
        "Airport, port and road transfers (shared in Essential, private from Boutique up)",
        "Underground River day, an El Nido boat day, Bohol countryside day, Balicasag snorkelling and a Boracay sunset sail",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "14 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Manila–Puerto Princesa, El Nido–Cebú, Cebú–Caticlan, Caticlan–Manila",
        "Ferry rápido Cebú–Bohol–Cebú y traslados en barco a Boracay",
        "Traslados de aeropuerto, puerto y carretera (compartidos en Essential, privados desde Boutique)",
        "Excursión al río subterráneo, un día en barco en El Nido, día por el interior de Bohol, snorkel en Balicasag y paseo en velero al atardecer en Boracay",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "14 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Manille–Puerto Princesa, El Nido–Cebu, Cebu–Caticlan, Caticlan–Manille",
        "Ferry rapide Cebu–Bohol–Cebu et transferts en bateau vers Boracay",
        "Transferts aéroport, port et route (partagés en Essential, privés à partir de Boutique)",
        "Journée à la rivière souterraine, une journée en bateau à El Nido, journée dans la campagne de Bohol, snorkeling à Balicasag et sortie en voilier au coucher du soleil à Boracay",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Second El Nido boat day on a private boat", "Swap Boracay for Siargao", "Beachfront rooms on every island"]),
    bestMonths: { en: "December to May; the best chance of good weather on all four islands is from February to May", es: "De diciembre a mayo; de febrero a mayo hay más probabilidad de buen tiempo en las cuatro islas", fr: "De décembre à mai ; de février à mai, les meilleures chances de beau temps sur les quatre îles" },
    fromPriceEUR: { essential: 2100, boutique: 3200, premium: 5300, signature: 9200 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Is four islands too many for fifteen days?",
        "It is the most we would suggest, and only because the connections are direct. Each island has at least one free day."
      ),
      faq(
        "Can I swap Boracay for Siargao?",
        "Yes. Siargao is quieter and greener, with a surf-town feel. It means a flight via Cebu or Manila instead of Caticlan."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Whale Sharks and Islands
  // ---------------------------------------------------------------------------
  {
    slug: "whale-sharks-and-islands",
    title: {
      en: "Whale Sharks and Islands",
      fr: "Requins-baleines et îles",
      es: "Tiburones ballena e islas",
      ru: "Китовые акулы и острова",
      ar: "أسماك القرش الحوتية والجزر",
    },
    days: 17,
    route: ["manila", "donsol", "bohol", "el-nido"],
    styles: ["essential", "boutique", "premium"],
    categories: ["nature-adventure", "diving", "island-escapes"],
    photo: {
      alt: { en: "Deep blue open water off the coast of Donsol", es: "Aguas azules y profundas frente a la costa de Donsol", fr: "Eau bleu profond au large de Donsol" },
      brief: "Snorkeller on the surface in deep blue water, a large shadow below. Respectful distance, no flash.",
      tone: "reef",
    },
    short: {
      en: "Swim with whale sharks in the wild at Donsol, under the Mayon volcano, then Bohol's hills and El Nido's lagoons. Seventeen days of wildlife, volcanoes and islands.",
      fr: "Nager avec des requins-baleines en liberté à Donsol, au pied du volcan Mayon, puis les collines de Bohol et les lagons d'El Nido. Dix-sept jours de faune, de volcans et d'îles.",
      es: "Nadar con tiburones ballena en libertad en Donsol, a los pies del volcán Mayon, y después las colinas de Bohol y las lagunas de El Nido. Diecisiete días de fauna, volcanes e islas.",
      ru: "Плавание с китовыми акулами в дикой природе в Донсоле у вулкана Майон, затем холмы Бохоля и лагуны Эль-Нидо. Семнадцать дней природы, вулканов и островов.",
      ar: "السباحة مع أسماك القرش الحوتية في بيئتها الطبيعية في دونسول، تحت بركان مايون، ثم تلال بوهول وبحيرات إل نيدو. سبعة عشر يومًا من الحياة البرية والبراكين والجزر.",
    },
    intro: en(
      "Donsol, a fishing town at the southern tip of Luzon, is one of the best places in the world to swim with whale sharks in the wild, and it does it the right way: small boats, licensed local spotters, strict rules and no feeding. We give you two mornings on the water to improve your chances, and an evening on the river among the fireflies. Nearby is the perfect cone of the Mayon volcano and the Cagsawa ruins.\n\nAfter Donsol, the trip turns into a classic island journey: Bohol's countryside and turtles, then four days in El Nido. You finish with a day in Manila for food and history. Whale sharks are wild animals and sightings are never guaranteed, but from February to April the odds are good."
    ),
    highlights: {
      en: [
        "Swim with whale sharks in Donsol, the responsible way",
        "Fireflies on the Donsol River",
        "Mayon volcano and the Cagsawa ruins",
        "Bohol's hills and El Nido's lagoons",
      ],
      es: [
        "Nadar con tiburones ballena en Donsol, de forma responsable",
        "Luciérnagas en el río Donsol",
        "El volcán Mayon y las ruinas de Cagsawa",
        "Las colinas de Bohol y las lagunas de El Nido",
      ],
      fr: [
        "Nager avec les requins-baleines à Donsol, de façon responsable",
        "Les lucioles sur la rivière Donsol",
        "Le volcan Mayon et les ruines de Cagsawa",
        "Les collines de Bohol et les lagons d'El Nido",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en("Airport pick-up and a night in Manila."),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "donsol",
        title: en("Fly to Legazpi, drive to Donsol"),
        body: en("Short flight to Bicol, with views of Mayon, and an hour's drive to Donsol."),
        overnight: "Donsol",
      },
      {
        days: "3–4",
        place: "donsol",
        title: en("Whale sharks and fireflies"),
        body: en("Two mornings on the water with licensed spotters looking for whale sharks, and an evening firefly trip on the river."),
        overnight: "Donsol",
      },
      {
        days: "5",
        place: "donsol",
        title: en("Mayon and Cagsawa"),
        body: en("The Cagsawa ruins below Mayon volcano and a Bicol lunch with chilli and coconut. Night in Legazpi."),
        overnight: "Legazpi",
      },
      {
        days: "6",
        place: "bohol",
        title: en("Fly to Cebu, ferry to Bohol"),
        body: en("Flight to Cebu and a fast ferry to Bohol."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "7–9",
        place: "bohol",
        title: en("Bohol"),
        body: en("Countryside day, Balicasag turtles and a free day."),
        overnight: "Panglao, Bohol",
      },
      {
        days: "10",
        place: "el-nido",
        title: en("To El Nido"),
        body: en("Fast ferry to Cebu and a direct flight to El Nido."),
        overnight: "El Nido",
      },
      {
        days: "11–14",
        place: "el-nido",
        title: en("El Nido"),
        body: en("Two boat days around Bacuit Bay and two free days for Nacpan beach, kayaking or rest."),
        overnight: "El Nido",
      },
      {
        days: "15",
        place: "manila",
        title: en("Fly to Manila"),
        body: en("Flight to Manila and an evening in the city."),
        overnight: "Manila",
      },
      {
        days: "16",
        place: "manila",
        title: en("Manila"),
        body: en("Intramuros and a food walk in Binondo."),
        overnight: "Manila",
      },
      {
        days: "17",
        place: "manila",
        title: en("Fly out"),
        body: en("Transfer to the international terminal."),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "Legazpi (Bicol)", time: "1h flight" },
      { mode: "road", from: "Legazpi", to: "Donsol", time: "around 1h by road" },
      { mode: "flight", from: "Legazpi", to: "Cebu", time: "1h 15m flight" },
      { mode: "ferry", from: "Cebu", to: "Tagbilaran (Bohol)", time: "around 2h fast ferry" },
      { mode: "ferry", from: "Tagbilaran (Bohol)", to: "Cebu", time: "around 2h fast ferry" },
      { mode: "flight", from: "Cebu", to: "El Nido", time: "1h 30m flight" },
      { mode: "flight", from: "El Nido", to: "Manila", time: "1h 20m flight" },
    ],
    experiences: enList(["Donsol whale sharks", "Firefly river trip", "Cagsawa ruins", "Bohol countryside", "El Nido island-hopping"]),
    included: {
      en: [
        "16 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Manila–Legazpi, Legazpi–Cebu, Cebu–El Nido, El Nido–Manila",
        "Fast ferry Cebu–Bohol–Cebu",
        "Airport, port and road transfers (shared in Essential, private from Boutique up)",
        "Two whale-shark mornings with licensed local spotters, a firefly river trip, Mayon and Cagsawa, Bohol countryside, Balicasag snorkelling, two El Nido boat days and a Manila food walk",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "16 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Manila–Legazpi, Legazpi–Cebú, Cebú–El Nido, El Nido–Manila",
        "Ferry rápido Cebú–Bohol–Cebú",
        "Traslados de aeropuerto, puerto y carretera (compartidos en Essential, privados desde Boutique)",
        "Dos mañanas de avistamiento de tiburones ballena con guías locales autorizados, paseo por el río de las luciérnagas, Mayon y Cagsawa, interior de Bohol, snorkel en Balicasag, dos días en barco en El Nido y ruta gastronómica en Manila",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "16 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Manille–Legazpi, Legazpi–Cebu, Cebu–El Nido, El Nido–Manille",
        "Ferry rapide Cebu–Bohol–Cebu",
        "Transferts aéroport, port et route (partagés en Essential, privés à partir de Boutique)",
        "Deux matinées avec les requins-baleines et des guides locaux agréés, sortie aux lucioles, Mayon et Cagsawa, campagne de Bohol, snorkeling à Balicasag, deux journées en bateau à El Nido et balade gourmande à Manille",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Private boat in El Nido", "Add a Mayon ATV ride", "Add Coron for diving"]),
    bestMonths: { en: "February to April for whale sharks; the Donsol season usually runs from December to May", es: "De febrero a abril para los tiburones ballena; la temporada en Donsol suele ir de diciembre a mayo", fr: "De février à avril pour les requins-baleines ; la saison à Donsol va généralement de décembre à mai" },
    fromPriceEUR: { essential: 2400, boutique: 3600, premium: 6000 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Are whale sharks guaranteed?",
        "No. They are wild animals and some days there are none. That is why we plan two mornings. February to April gives the best chance."
      ),
      faq(
        "Is it ethical?",
        "Yes, in Donsol. Interactions follow strict rules: small groups, no touching, no flash, a minimum distance and no feeding. We do not include places where whale sharks are fed."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Dive the Philippines
  // ---------------------------------------------------------------------------
  {
    slug: "dive-the-philippines",
    title: {
      en: "Dive the Philippines",
      fr: "Plongée aux Philippines",
      es: "Buceo en Filipinas",
      ru: "Дайвинг на Филиппинах",
      ar: "الغوص في الفلبين",
    },
    days: 20,
    route: ["manila", "coron", "malapascua", "moalboal", "dumaguete"],
    styles: ["essential", "boutique", "premium"],
    categories: ["diving", "off-the-beaten-path"],
    photo: {
      alt: { en: "A diver over a coral reef in clear blue water in the Philippines", es: "Un buceador sobre un arrecife de coral en aguas azules y claras de Filipinas", fr: "Un plongeur au-dessus d'un récif corallien dans une eau bleue et claire aux Philippines" },
      brief: "Diver silhouetted over a reef wall, sun rays from above, natural colour.",
      tone: "reef",
    },
    short: {
      en: "Four of the best dive areas in the country: the wrecks of Coron, thresher sharks at Malapascua, the sardine run at Moalboal, and Apo Island and macro diving at Dauin.",
      fr: "Quatre des meilleurs sites de plongée du pays : les épaves de Coron, les requins-renards de Malapascua, les sardines de Moalboal, puis Apo Island et la plongée macro à Dauin.",
      es: "Cuatro de las mejores zonas de buceo del país: los pecios de Coron, los tiburones zorro de Malapascua, las sardinas de Moalboal, y Apo Island y el buceo macro en Dauin.",
      ru: "Четыре лучших района для дайвинга в стране: затонувшие корабли Корона, лисьи акулы Малапаскуа, сардины Моалбоала, остров Апо и макро-дайвинг в Дауине.",
      ar: "أربع من أفضل مناطق الغوص في البلاد: حطام السفن في كورون، وأسماك القرش الدرّاسة في مالاباسكوا، وأسراب السردين في موالبوال، وجزيرة آبو والغوص الدقيق في داوين.",
    },
    intro: en(
      "The Philippines sits at the heart of the Coral Triangle, and this trip takes you to four completely different kinds of diving. Coron has a fleet of Japanese supply ships sunk in 1944, now covered in coral. Malapascua is one of the only places in the world where you can reliably see thresher sharks, at dawn. Moalboal has a wall just off the beach and a sardine run of millions of fish. Dumaguete has Apo Island, one of the country's oldest marine sanctuaries, and the black-sand macro diving of Dauin.\n\nWe book dive centres we trust, with small groups and good safety, and stay in hotels close to the dive sites. Non-diving partners have plenty to do in each place. Dives are priced with the dive centre, so you pay only for what you dive."
    ),
    highlights: {
      en: [
        "World War II wrecks in Coron",
        "Thresher sharks at dawn in Malapascua",
        "The Moalboal sardine run",
        "Apo Island and macro diving at Dauin",
        "Trusted dive centres with small groups",
      ],
      es: [
        "Pecios de la Segunda Guerra Mundial en Coron",
        "Tiburones zorro al amanecer en Malapascua",
        "Los bancos de sardinas de Moalboal",
        "Apo Island y el buceo macro en Dauin",
        "Centros de buceo de confianza con grupos reducidos",
      ],
      fr: [
        "Les épaves de la Seconde Guerre mondiale à Coron",
        "Les requins-renards à l'aube à Malapascua",
        "Les bancs de sardines de Moalboal",
        "Apo Island et la plongée macro à Dauin",
        "Des centres de plongée de confiance, en petits groupes",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en("Airport pick-up and a night in Manila."),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "coron",
        title: en("Fly to Coron"),
        body: en("Flight to Busuanga and transfer to Coron town. Check in with the dive centre."),
        overnight: "Coron",
      },
      {
        days: "3–6",
        place: "coron",
        title: en("Coron wrecks"),
        body: en("Three days of wreck dives on the 1944 Japanese fleet, plus Barracuda Lake, and one free day."),
        overnight: "Coron",
      },
      {
        days: "7",
        place: "malapascua",
        title: en("Coron to Malapascua"),
        body: en("Flight to Cebu, drive north to Maya and a short boat to Malapascua."),
        overnight: "Malapascua",
      },
      {
        days: "8–10",
        place: "malapascua",
        title: en("Malapascua"),
        body: en("Dawn dives at Monad Shoal for thresher sharks, and reef and macro dives around the island."),
        overnight: "Malapascua",
      },
      {
        days: "11",
        place: "moalboal",
        title: en("To Moalboal"),
        body: en("A long drive down Cebu's west coast."),
        overnight: "Moalboal",
      },
      {
        days: "12–14",
        place: "moalboal",
        title: en("Moalboal"),
        body: en("The sardine run, Pescador Island and turtles on the house reef."),
        overnight: "Moalboal",
      },
      {
        days: "15",
        place: "dumaguete",
        title: en("To Dumaguete"),
        body: en("Road south and a short ferry across to Negros."),
        overnight: "Dauin, Dumaguete",
      },
      {
        days: "16–18",
        place: "dumaguete",
        title: en("Apo Island and Dauin"),
        body: en("A boat day to Apo Island's marine sanctuary, and muck and macro dives along Dauin's black-sand coast."),
        overnight: "Dauin, Dumaguete",
      },
      {
        days: "19",
        place: "manila",
        title: en("Fly to Manila"),
        body: en("A day without diving before you fly, then the flight to Manila."),
        overnight: "Manila",
      },
      {
        days: "20",
        place: "manila",
        title: en("Fly out"),
        body: en("Transfer to the international terminal."),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "Busuanga (Coron)", time: "1h flight" },
      { mode: "flight", from: "Busuanga (Coron)", to: "Cebu", time: "1h 15m flight" },
      { mode: "road", from: "Cebu", to: "Maya port", time: "around 4h by road" },
      { mode: "boat", from: "Maya", to: "Malapascua", time: "around 30m by boat" },
      { mode: "road", from: "Maya", to: "Moalboal", time: "5–6h by road" },
      { mode: "road", from: "Moalboal", to: "Bato port", time: "around 2h by road" },
      { mode: "ferry", from: "Bato", to: "Tampi (Negros)", time: "around 30m ferry" },
      { mode: "flight", from: "Dumaguete", to: "Manila", time: "1h 20m flight" },
    ],
    experiences: enList(["Coron wrecks", "Malapascua thresher sharks", "Moalboal sardine run", "Apo Island", "Dauin macro"]),
    included: {
      en: [
        "19 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Manila–Busuanga (Coron), Busuanga–Cebu, Dumaguete–Manila",
        "Boats Maya–Malapascua and ferry Cebu–Negros",
        "Airport, port and road transfers (shared in Essential, private from Boutique up)",
        "Hotels close to the dive sites and dive centre bookings made for you",
        "A non-diving activity in each place for partners who do not dive",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "19 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Manila–Busuanga (Coron), Busuanga–Cebú, Dumaguete–Manila",
        "Barcos Maya–Malapascua y ferry Cebú–Negros",
        "Traslados de aeropuerto, puerto y carretera (compartidos en Essential, privados desde Boutique)",
        "Hoteles cerca de los puntos de buceo y reservas con los centros de buceo",
        "Una actividad sin buceo en cada lugar para acompañantes que no bucean",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "19 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Manille–Busuanga (Coron), Busuanga–Cebu, Dumaguete–Manille",
        "Bateaux Maya–Malapascua et ferry Cebu–Negros",
        "Transferts aéroport, port et route (partagés en Essential, privés à partir de Boutique)",
        "Hôtels proches des sites de plongée et réservations auprès des centres de plongée",
        "Une activité sans plongée à chaque étape pour les accompagnants qui ne plongent pas",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Dives, dive fees and equipment rental (priced with the dive centre)",
        "Extra insurance cover for diving, if you dive",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Inmersiones, tasas de buceo y alquiler de equipo (según tarifa del centro de buceo)",
        "Cobertura adicional del seguro para buceo, si buceas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Plongées, taxes de plongée et location de matériel (au tarif du centre de plongée)",
        "Extension d'assurance pour la plongée, si vous plongez",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Private dive guide throughout", "Nitrox", "Add a liveaboard to Tubbataha (March to June)"]),
    bestMonths: { en: "November to May; Malapascua and Moalboal are good all year", es: "De noviembre a mayo; Malapascua y Moalboal son buenos todo el año", fr: "De novembre à mai ; Malapascua et Moalboal sont bons toute l'année" },
    fromPriceEUR: { essential: 2600, boutique: 3900, premium: 6400 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "What certification do I need?",
        "Open Water is enough for most dives. Several Coron wrecks and the Malapascua sharks are better with Advanced Open Water, which you can take on the trip."
      ),
      faq(
        "Why are dives not included?",
        "Divers dive different amounts, so the dives are paid directly to the dive centre at their published price. We book everything and tell you the price before you go."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Linapacan Expedition
  // ---------------------------------------------------------------------------
  {
    slug: "linapacan-expedition",
    title: {
      en: "Linapacan Expedition",
      fr: "Expédition Linapacan",
      es: "Expedición a Linapacan",
      ru: "Экспедиция на Линапакан",
      ar: "رحلة استكشافية إلى لينابكان",
    },
    days: 19,
    route: ["manila", "coron", "linapacan", "el-nido", "siargao"],
    styles: ["essential", "boutique", "premium"],
    categories: ["off-the-beaten-path", "island-escapes", "nature-adventure"],
    photo: {
      alt: { en: "A traditional outrigger boat anchored off an empty island in northern Palawan", es: "Un barco tradicional fondeado frente a una isla desierta del norte de Palawan", fr: "Un bateau traditionnel ancré au large d'une île déserte du nord de Palawan" },
      brief: "A large wooden expedition bangka anchored off a small empty island, clear water, simple camp on the beach.",
      tone: "lagoon",
    },
    short: {
      en: "Five days by traditional boat from Coron to El Nido through the remote Linapacan islands, sleeping in simple island camps. Then El Nido and Siargao to finish.",
      fr: "Cinq jours en bateau traditionnel de Coron à El Nido à travers les îles isolées de Linapacan, en dormant dans des camps simples sur les îles. Puis El Nido et Siargao pour finir.",
      es: "Cinco días en barco tradicional de Coron a El Nido por las remotas islas de Linapacan, durmiendo en campamentos sencillos en las islas. Y para terminar, El Nido y Siargao.",
      ru: "Пять дней на традиционной лодке от Корона до Эль-Нидо через отдалённые острова Линапакан с ночёвками в простых лагерях. Затем Эль-Нидо и Сиаргао.",
      ar: "خمسة أيام بقارب تقليدي من كورون إلى إل نيدو عبر جزر لينابكان النائية، مع المبيت في مخيمات بسيطة على الجزر. ثم إل نيدو وسيارغاو في الختام.",
    },
    intro: en(
      "Between Coron and El Nido lie hundreds of islands that almost no one visits, and Linapacan has some of the clearest water in the country. The only way to see them properly is by boat. On this expedition you travel five days on a traditional outrigger with a local crew, snorkelling, swimming, visiting fishing villages and sleeping in simple island base camps, with fresh food cooked on board.\n\nIt is an adventure, not a cruise: the camps are basic and the schedule follows the weather. Before it, you have Coron's lakes and reefs. After it come El Nido and five easy days in Siargao to rest. Expeditions run mainly from November to May and have limited places, so book early."
    ),
    highlights: {
      en: [
        "Five days by boat through the Linapacan islands",
        "Nights in simple island base camps",
        "Coron's lakes and reefs",
        "Five days to rest in Siargao",
      ],
      es: [
        "Cinco días en barco por las islas de Linapacan",
        "Noches en campamentos sencillos en las islas",
        "Los lagos y arrecifes de Coron",
        "Cinco días para descansar en Siargao",
      ],
      fr: [
        "Cinq jours en bateau à travers les îles de Linapacan",
        "Des nuits dans des camps simples sur les îles",
        "Les lacs et récifs de Coron",
        "Cinq jours pour se reposer à Siargao",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en("Airport pick-up and a night in Manila."),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "coron",
        title: en("Fly to Coron"),
        body: en("Flight to Busuanga and transfer to Coron town."),
        overnight: "Coron",
      },
      {
        days: "3–4",
        place: "coron",
        title: en("Coron"),
        body: en("Kayangan and Barracuda lakes and the reefs by boat, and a free day."),
        overnight: "Coron",
      },
      {
        days: "5–9",
        place: "linapacan",
        title: en("The Linapacan expedition"),
        body: en("Five days on a traditional boat from Coron to El Nido, with snorkelling, empty beaches, fishing villages and nights in island base camps. All meals on board."),
        overnight: "Island base camps",
      },
      {
        days: "10–11",
        place: "el-nido",
        title: en("El Nido"),
        body: en("Two free days in El Nido after the expedition: a hot shower, a good bed and Nacpan beach."),
        overnight: "El Nido",
      },
      {
        days: "12",
        place: "siargao",
        title: en("Fly to Siargao"),
        body: en("Flight to Siargao via Cebu."),
        overnight: "General Luna, Siargao",
      },
      {
        days: "13–17",
        place: "siargao",
        title: en("Siargao"),
        body: en("Island-hopping to Naked, Daku and Guyam, Sugba Lagoon, a surf lesson and time to do nothing."),
        overnight: "General Luna, Siargao",
      },
      {
        days: "18",
        place: "manila",
        title: en("Fly to Manila"),
        body: en("Flight to Manila and a last night in the city."),
        overnight: "Manila",
      },
      {
        days: "19",
        place: "manila",
        title: en("Fly out"),
        body: en("Transfer to the international terminal."),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "Busuanga (Coron)", time: "1h flight" },
      { mode: "boat", from: "Coron", to: "El Nido", time: "5 days by expedition boat", note: en("Shared expedition run by a local operator; departures on set dates, mainly November to May.") },
      { mode: "flight", from: "El Nido", to: "Cebu", time: "1h 30m flight" },
      { mode: "flight", from: "Cebu", to: "Siargao", time: "1h flight" },
      { mode: "flight", from: "Siargao", to: "Manila", time: "1h 50m flight" },
    ],
    experiences: enList(["Linapacan boat expedition", "Coron lakes", "Siargao island-hopping", "Sugba Lagoon"]),
    included: {
      en: [
        "18 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Manila–Busuanga (Coron), El Nido–Cebu, Cebu–Siargao, Siargao–Manila",
        "Five-day boat expedition Coron–El Nido, with all meals on board",
        "Airport, port and road transfers (shared in Essential, private from Boutique up)",
        "A Coron boat day, Siargao island-hopping and Sugba Lagoon",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "18 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Manila–Busuanga (Coron), El Nido–Cebú, Cebú–Siargao, Siargao–Manila",
        "Expedición de cinco días en barco Coron–El Nido, con todas las comidas a bordo",
        "Traslados de aeropuerto, puerto y carretera (compartidos en Essential, privados desde Boutique)",
        "Un día en barco en Coron, excursión por las islas de Siargao y la laguna de Sugba",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "18 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Manille–Busuanga (Coron), El Nido–Cebu, Cebu–Siargao, Siargao–Manille",
        "Expédition de cinq jours en bateau Coron–El Nido, tous repas à bord",
        "Transferts aéroport, port et route (partagés en Essential, privés à partir de Boutique)",
        "Une journée en bateau à Coron, tour des îles de Siargao et lagon de Sugba",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Private expedition boat for your group", "Add a night at a private-island resort after the expedition", "Surf coaching every morning in Siargao"]),
    bestMonths: { en: "November to May, when the expeditions run", es: "De noviembre a mayo, cuando salen las expediciones", fr: "De novembre à mai, pendant la saison des expéditions" },
    fromPriceEUR: { essential: 2600, boutique: 3600, premium: 5600 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "How basic are the camps?",
        "Simple huts or tents on the beach, with shared toilets and bucket showers. Comfortable enough, but not a hotel. That is part of the experience."
      ),
      faq(
        "Can it be cancelled because of the weather?",
        "Yes. If the sea is too rough, the operator changes the route or the date. We plan a backup so your trip still works."
      ),
    ],
  },
  // ---------------------------------------------------------------------------
  // Exclusive Philippines
  // ---------------------------------------------------------------------------
  {
    slug: "exclusive-philippines",
    title: {
      en: "Exclusive Philippines",
      fr: "Philippines d'exception",
      es: "Filipinas exclusiva",
      ru: "Эксклюзивные Филиппины",
      ar: "الفلبين الحصرية",
    },
    days: 16,
    route: ["manila", "batanes", "el-nido", "private-island", "siargao"],
    styles: ["premium", "signature"],
    categories: ["luxury", "private-journeys", "off-the-beaten-path"],
    photo: {
      alt: { en: "Green hills and cliffs above the sea in Batanes", es: "Colinas verdes y acantilados sobre el mar en Batanes", fr: "Collines vertes et falaises au-dessus de la mer à Batanes" },
      brief: "Rolling green headlands and a lighthouse in Batanes, clear day, sea on the horizon.",
      tone: "jungle",
    },
    short: {
      en: "The far north of Batanes, private boats in El Nido, a private-island resort and Siargao in private. Sixteen days of places few travellers reach, with everything private.",
      fr: "L'extrême nord de Batanes, des bateaux privés à El Nido, un resort sur une île privée et Siargao en privé. Seize jours dans des lieux que peu de voyageurs atteignent, tout en privé.",
      es: "El extremo norte de Batanes, barcos privados en El Nido, un resort en una isla privada y Siargao en privado. Dieciséis días en lugares a los que llegan pocos viajeros, todo en privado.",
      ru: "Крайний север — Батанес, частные лодки в Эль-Нидо, курорт на частном острове и Сиаргао в частном формате. Шестнадцать дней в местах, куда добираются немногие, и всё — индивидуально.",
      ar: "أقصى الشمال في باتانيس، وقوارب خاصة في إل نيدو، ومنتجع على جزيرة خاصة، وسيارغاو بشكل خاص. ستة عشر يومًا في أماكن يصلها قليل من المسافرين، وكل شيء خاص.",
    },
    intro: en(
      "This is the trip for travellers who have seen a lot of the world and want something different. It starts in Batanes, the country's northernmost islands, closer to Taiwan than to Manila. There are green hills, stone houses, lighthouses and almost no tourists. Then it moves to Palawan, with private boats in El Nido and three nights on a private-island resort, and ends in Siargao with a private boat, a private surf coach and the best villas on the island.\n\nEvery transfer, boat and guide is private, and the hotels are among the best in the country. Batanes depends on the weather, so we plan it for the drier months and keep a backup."
    ),
    highlights: {
      en: [
        "Batanes: hills, lighthouses and stone villages",
        "Private boats in El Nido",
        "Three nights on a private-island resort",
        "Siargao by private boat, with a private surf coach",
      ],
      es: [
        "Batanes: colinas, faros y pueblos de piedra",
        "Barcos privados en El Nido",
        "Tres noches en un resort de isla privada",
        "Siargao en barco privado, con profesor de surf privado",
      ],
      fr: [
        "Batanes : collines, phares et villages de pierre",
        "Bateaux privés à El Nido",
        "Trois nuits dans un resort sur une île privée",
        "Siargao en bateau privé, avec un coach de surf privé",
      ],
    },
    itinerary: [
      {
        days: "1",
        place: "manila",
        title: en("Arrive in Manila"),
        body: en("Private airport pick-up and a night in one of Manila's best hotels."),
        overnight: "Manila",
      },
      {
        days: "2",
        place: "batanes",
        title: en("Fly to Batanes"),
        body: en("Flight north to Basco and an afternoon drive along the coast."),
        overnight: "Batan Island",
      },
      {
        days: "3–4",
        place: "batanes",
        title: en("Batanes"),
        body: en("Batan's hills, lighthouses and Ivatan stone houses with a private guide, and a boat across to Sabtang's villages."),
        overnight: "Batan Island",
      },
      {
        days: "5",
        place: "el-nido",
        title: en("Batanes to El Nido"),
        body: en("Flight back to Manila and a connection to El Nido."),
        overnight: "El Nido",
      },
      {
        days: "6–7",
        place: "el-nido",
        title: en("El Nido by private boat"),
        body: en("Two days on your own boat, with the lagoons early and lunch on a quiet beach."),
        overnight: "El Nido",
      },
      {
        days: "8",
        place: "private-island",
        title: en("To the private island"),
        body: en("Private transfer to your island resort."),
        overnight: "Private island, northern Palawan",
      },
      {
        days: "9–11",
        place: "private-island",
        title: en("Island days"),
        body: en("Snorkelling, spa and complete quiet."),
        overnight: "Private island, northern Palawan",
      },
      {
        days: "12",
        place: "siargao",
        title: en("Fly to Siargao"),
        body: en("Flights via Manila or Cebu to Siargao."),
        overnight: "Siargao",
      },
      {
        days: "13–15",
        place: "siargao",
        title: en("Siargao in private"),
        body: en("A private boat to the islands and Sugba Lagoon, and private surf coaching."),
        overnight: "Siargao",
      },
      {
        days: "16",
        place: "siargao",
        title: en("Fly out"),
        body: en("Flight to Manila or Cebu for your international connection."),
      },
    ],
    legs: [
      { mode: "flight", from: "Manila", to: "Basco (Batanes)", time: "1h 30m flight" },
      { mode: "flight", from: "Basco (Batanes)", to: "Manila", time: "1h 30m flight", note: en("Batanes flights depend on the weather; we keep a spare day.") },
      { mode: "flight", from: "Manila", to: "El Nido", time: "1h 20m flight" },
      { mode: "boat", from: "El Nido", to: "Private island", time: "1–2h by private boat" },
      { mode: "flight", from: "Northern Palawan", to: "Siargao", time: "via Manila or Cebu" },
      { mode: "flight", from: "Siargao", to: "Manila", time: "1h 50m flight" },
    ],
    experiences: enList(["Batanes lighthouses and stone houses", "Sabtang island", "El Nido by private boat", "Private-island resort", "Siargao private boat"]),
    included: {
      en: [
        "15 nights' accommodation in your chosen tier, breakfast daily",
        "Domestic flights: Manila–Basco, Basco–Manila, Manila–El Nido, Palawan–Siargao (via Manila or Cebu), Siargao–Manila",
        "Private boat or air transfer to the island resort",
        "Private airport, port and road transfers throughout",
        "Private guide and driver in Batanes with a Sabtang boat day, two private boat days in El Nido, a private boat day and private surf coaching in Siargao",
        "Pre-departure planning call and digital travel guide",
        "Tours with a Spanish- or English-speaking local guide, private or shared depending on the trip",
        "Lunch on boat and tour days",
        "Entrance fees for the visits in the itinerary",
        "Premium and Signature: dinner at a top-rated restaurant in every destination, plus a local food experience with a guide (market visit and tasting)",
        "International travel insurance, with cancellation cover up to €2,000",
        "24/7 local support by WhatsApp throughout your trip",
      ],
      es: [
        "15 noches de alojamiento en la categoría elegida, con desayuno diario",
        "Vuelos domésticos: Manila–Basco, Basco–Manila, Manila–El Nido, Palawan–Siargao (via Manila or Cebú), Siargao–Manila",
        "Traslado en barco privado o avioneta al resort de la isla",
        "Traslados privados de aeropuerto, puerto y carretera durante todo el viaje",
        "Guía y conductor privados en Batanes con día en barco a Sabtang, dos días en barco privado en El Nido, un día en barco privado y clases de surf privadas en Siargao",
        "Llamada de planificación antes de la salida y guía de viaje digital",
        "Excursiones con guía local de habla hispana o inglesa, en privado o compartidas según el viaje",
        "Almuerzo en los días de barco y excursión",
        "Entradas a las visitas del itinerario",
        "Premium y Signature: cena en un restaurante de los mejor valorados en cada destino, y una experiencia gastronómica local con guía (visita a un mercado y degustación)",
        "Seguro internacional de viaje, con garantía de cancelación de hasta 2.000 €",
        "Asistencia local 24/7 por WhatsApp durante todo el viaje",
      ],
      fr: [
        "15 nuits d'hébergement dans la gamme choisie, petit-déjeuner inclus",
        "Vols intérieurs : Manille–Basco, Basco–Manille, Manille–El Nido, Palawan–Siargao (via Manille or Cebu), Siargao–Manille",
        "Transfert en bateau privé ou en avion jusqu'au resort de l'île",
        "Transferts privés aéroport, port et route pendant tout le voyage",
        "Guide et chauffeur privés à Batanes avec une journée en bateau à Sabtang, deux journées en bateau privé à El Nido, une journée en bateau privé et coaching de surf privé à Siargao",
        "Appel de préparation avant le départ et carnet de voyage numérique",
        "Excursions avec un guide local hispanophone ou anglophone, en privé ou partagées selon le voyage",
        "Déjeuner les jours de bateau et d'excursion",
        "Droits d'entrée des visites prévues au programme",
        "Premium et Signature : un dîner dans l'un des restaurants les mieux notés à chaque étape, et une expérience culinaire locale avec un guide (marché et dégustation)",
        "Assurance voyage internationale, avec garantie annulation jusqu'à 2 000 €",
        "Assistance locale 24 h/24 par WhatsApp pendant tout le voyage",
      ],
    },
    notIncluded: {
      en: [
        "International flights",
        "Other meals not listed as included",
        "Environmental and terminal fees",
        "Drinks",
        "Tips for guides, drivers and boat crews",
        "Extra costs caused by weather or other events outside our control, such as cancelled boats or flights",
      ],
      es: [
        "Vuelos internacionales",
        "Otras comidas no indicadas como incluidas",
        "Tasas medioambientales y de terminal",
        "Bebidas",
        "Propinas para guías, conductores y tripulaciones",
        "Gastos derivados de la meteorología u otras causas ajenas a la organización, como barcos o vuelos cancelados",
      ],
      fr: [
        "Vols internationaux",
        "Autres repas non mentionnés comme inclus",
        "Taxes environnementales et de terminal",
        "Boissons",
        "Pourboires pour les guides, chauffeurs et équipages",
        "Frais liés à la météo ou à d'autres causes indépendantes de notre volonté, comme des bateaux ou vols annulés",
      ],
    },
    upgrades: enList(["Charter flights between islands", "A private chef dinner on a sandbar", "Villas with private pools throughout"]),
    bestMonths: { en: "March to May is best for Batanes and for the whole route; avoid August to October", es: "De marzo a mayo es lo mejor para Batanes y para toda la ruta; mejor evitar de agosto a octubre", fr: "De mars à mai, idéal pour Batanes et pour tout le circuit ; à éviter d'août à octobre" },
    fromPriceEUR: { premium: 6800, signature: 12500 },
    priceIsPlaceholder: true,
    faqs: [
      faq(
        "Why Batanes?",
        "Because it looks like nowhere else in the Philippines: rolling green hills, cliffs and stone villages, and very few visitors."
      ),
      faq(
        "What if the Batanes flight is cancelled?",
        "It can happen in bad weather. We keep a spare day and adjust the rest of the trip so you lose nothing important."
      ),
    ],
  },
];
