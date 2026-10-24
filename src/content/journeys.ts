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
];
