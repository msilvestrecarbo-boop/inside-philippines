import type { Landing } from "./types";

/**
 * Conversion landing pages for social and paid traffic, served at /{lang}/{slug}.
 * Short, specific, one clear action (Design my trip, prefilled via `prefill`).
 *
 * Languages: en everywhere; fr/es/ru on global pages; ar on GCC pages and on
 * honeymoon, family-philippines and luxury-philippines (which serve both).
 * SEO strings target native search phrasing, not literal translation.
 */

export const landings: Landing[] = [
  // ─────────────────────────────────────────────────────────── GLOBAL / EUROPE
  {
    slug: "siargao",
    market: "global",
    title: {
      en: "Siargao, planned by people who know the tides.",
      fr: "Siargao, organisé par des gens qui connaissent les marées.",
      es: "Siargao, organizado por quien conoce las mareas.",
      ru: "Сиаргао с теми, кто знает приливы наизусть.",
    },
    kicker: {
      en: "Inside Siargao",
      fr: "Inside Siargao",
      es: "Inside Siargao",
      ru: "Inside Siargao",
    },
    intro: {
      en: "Surf in the morning, a sandbar by lunch, a lagoon by paddleboard in the afternoon. Siargao is easy to love and surprisingly easy to get wrong: tides, swell and the one road decide what works on which day. We plan it around all three.",
      fr: "Surf le matin, banc de sable à midi, lagon en paddle l'après-midi. Siargao se laisse aimer facilement, mais se rate tout aussi vite : marées, houle et l'unique route décident de ce qui marche chaque jour. Nous organisons tout en fonction des trois.",
      es: "Surf por la mañana, un banco de arena a mediodía y una laguna en paddle por la tarde. Siargao es fácil de querer y sorprendentemente fácil de planificar mal: las mareas, el oleaje y la única carretera deciden qué funciona cada día. Lo organizamos teniendo en cuenta los tres.",
      ru: "Утром сёрфинг, к обеду песчаная коса, после — лагуна на сапе. Сиаргао легко полюбить и удивительно легко спланировать неправильно: приливы, свелл и единственная дорога решают, что получится в конкретный день. Мы планируем с учётом всех трёх.",
    },
    points: {
      en: [
        "Surf lessons timed to the tide, with local coaches on beginner-friendly breaks",
        "Naked, Daku and Guyam by private boat, before the midday crowd",
        "Sugba Lagoon through the Del Carmen mangroves, and Magpupungko pools at low tide",
        "Connections via Manila or Cebu planned so you don't lose a day each way",
        "Pair it with Palawan or Bohol for a two-island trip that flows",
      ],
      fr: [
        "Cours de surf calés sur la marée, avec des coachs locaux sur des spots faciles",
        "Naked, Daku et Guyam en bateau privé, avant la foule de midi",
        "Le lagon de Sugba par les mangroves de Del Carmen, et les piscines de Magpupungko à marée basse",
        "Correspondances via Manille ou Cebu pensées pour ne pas perdre une journée à chaque trajet",
        "À combiner avec Palawan ou Bohol pour un voyage deux îles fluide",
      ],
      es: [
        "Clases de surf según la marea, con monitores locales en olas para principiantes",
        "Naked, Daku y Guyam en barco privado, antes del gentío del mediodía",
        "La laguna de Sugba entre los manglares de Del Carmen y las pozas de Magpupungko con marea baja",
        "Conexiones por Manila o Cebú pensadas para no perder un día en cada trayecto",
        "Combínalo con Palawan o Bohol para un viaje a dos islas sin fricciones",
      ],
      ru: [
        "Уроки сёрфинга по приливу с местными тренерами на волнах для новичков",
        "Naked, Daku и Guyam на частной лодке — раньше полуденной толпы",
        "Лагуна Сугба через мангры Дель-Кармен и бассейны Магпупунгко в отлив",
        "Стыковки через Манилу или Себу без потери дня на каждом перелёте",
        "В паре с Палаваном или Бохолом — маршрут по двум островам без суеты",
      ],
    },
    journeys: ["surf-and-islands", "island-classics", "the-slow-philippines"],
    destinations: ["siargao", "bohol", "el-nido", "camiguin"],
    photo: {
      alt: {
        en: "Palm forest stretching to the sea on Siargao, seen from above at sunrise",
        fr: "La forêt de cocotiers jusqu'à la mer à Siargao, vue du ciel au lever du soleil",
        es: "El palmeral llegando hasta el mar en Siargao, visto desde el aire al amanecer",
        ru: "Пальмовый лес до самого моря на Сиаргао, вид сверху на рассвете",
      },
      brief:
        "Drone at sunrise over Siargao's coconut palm 'sea' with the coast and a reef line beyond. Optional second frame: surfer paddling out at a beginner break.",
      tone: "jungle",
    },
    faqs: [
      {
        q: { en: "When is the best time to visit Siargao?" },
        a: {
          en: "March to October is generally calmer and drier for island hopping. The big surf season is roughly August to November. December to February brings more rain on this Pacific-facing coast, though it rarely rains all day.",
        },
      },
      {
        q: { en: "Can complete beginners learn to surf there?" },
        a: {
          en: "Yes. Cloud 9 is for experienced surfers, but several breaks nearby are soft and forgiving, and most beginners stand up in their first lesson with a good coach.",
        },
      },
      {
        q: { en: "How do we get to Siargao?" },
        a: {
          en: "By domestic flight from Manila or Cebu to Sayak airport, then about 45 minutes by road to General Luna. We plan international and domestic flights together so connections are realistic.",
        },
      },
    ],
    prefill: { destination: "siargao", interest: "surf,beaches,nature", duration: "11-14" },
    seo: {
      title: {
        en: "Siargao Trip: Surf, Islands & Lagoons | Inside Philippines",
        fr: "Voyage Siargao : surf, îles et lagons | Inside Philippines",
        es: "Viaje a Siargao: surf, islas y lagunas | Inside Philippines",
        ru: "Туры на Сиаргао: сёрфинг, острова | Inside Philippines",
      },
      description: {
        en: "A Siargao trip planned around tides and swell: surf lessons, private island hopping, Sugba Lagoon and smooth connections. Designed in the Philippines.",
        fr: "Voyage à Siargao calé sur les marées : cours de surf, îles en bateau privé, lagon de Sugba et vols bien connectés. Conçu par une équipe sur place.",
        es: "Viaje a Siargao organizado según mareas y oleaje: clases de surf, islas en barco privado, laguna de Sugba y buenas conexiones. Diseñado desde Filipinas.",
        ru: "Отдых на Сиаргао с учётом приливов: уроки сёрфинга, острова на частной лодке, лагуна Сугба и удобные перелёты. Маршрут от команды на Филиппинах.",
      },
    },
  },
  {
    slug: "palawan",
    market: "global",
    title: {
      en: "Palawan, minus the crowded lagoons.",
      fr: "Palawan, sans les lagons bondés.",
      es: "Palawan, sin las lagunas abarrotadas.",
      ru: "Палаван без толп в лагунах.",
    },
    kicker: {
      en: "Inside Palawan",
      fr: "Inside Palawan",
      es: "Inside Palawan",
      ru: "Inside Palawan",
    },
    intro: {
      en: "El Nido and Coron are as good as the photographs, if you get the timing right. We plan Palawan with early boats, the right season and the ferry or flight between them, so your days go to limestone and lagoons rather than queues.",
      fr: "El Nido et Coron sont à la hauteur des photos, à condition de bien choisir le moment. Nous organisons Palawan avec des départs matinaux, la bonne saison et le ferry ou le vol qui les relie, pour que vos journées soient faites de lagons et non de files d'attente.",
      es: "El Nido y Coron están a la altura de las fotos si aciertas con los horarios. Organizamos Palawan con barcos tempraneros, la temporada adecuada y el ferry o vuelo que los une, para que tus días sean de caliza y lagunas, no de colas.",
      ru: "Эль-Нидо и Корон выглядят так же, как на фотографиях, если правильно выбрать время. Мы планируем Палаван с ранними лодками, в нужный сезон и с удобным паромом или перелётом между ними — чтобы дни уходили на лагуны, а не на очереди.",
    },
    points: {
      en: [
        "Private banca at 7am: the Small Lagoon before the shared tours arrive",
        "El Nido to Coron by ferry or flight, chosen by season and sea state",
        "Kayangan Lake, Twin Lagoon and Second World War wrecks in Coron",
        "From characterful beach hotels to island resorts with their own coastline",
        "Honest advice on the wet season: what still works and what doesn't",
      ],
      fr: [
        "Bangka privée à 7 h : le Small Lagoon avant les excursions collectives",
        "El Nido–Coron en ferry ou en avion, selon la saison et l'état de la mer",
        "Lac Kayangan, Twin Lagoon et épaves de la Seconde Guerre mondiale à Coron",
        "Des hôtels de plage pleins de caractère aux resorts dotés de leur propre littoral",
        "Des conseils francs sur la saison des pluies : ce qui marche encore, et ce qui ne marche pas",
      ],
      es: [
        "Bangka privada a las 7: la Small Lagoon antes de que lleguen las excursiones compartidas",
        "De El Nido a Coron en ferry o avión, según la temporada y el estado del mar",
        "Lago Kayangan, Twin Lagoon y pecios de la Segunda Guerra Mundial en Coron",
        "De hoteles de playa con carácter a resorts con su propia costa",
        "Consejos sinceros sobre la temporada de lluvias: qué funciona y qué no",
      ],
      ru: [
        "Частная банка в 7 утра: Малая лагуна до прихода групповых туров",
        "Из Эль-Нидо в Корон паромом или самолётом — в зависимости от сезона и моря",
        "Озеро Каянган, Twin Lagoon и затонувшие корабли Второй мировой в Короне",
        "От атмосферных отелей у пляжа до курортов со своей береговой линией",
        "Честно о сезоне дождей: что работает, а что нет",
      ],
    },
    journeys: ["palawan-deep-dive", "island-classics", "ten-days-two-islands"],
    destinations: ["el-nido", "coron", "palawan"],
    photo: {
      alt: {
        en: "A private boat entering a narrow limestone lagoon in El Nido",
        fr: "Un bateau privé entrant dans un lagon étroit entre les falaises calcaires d'El Nido",
        es: "Un barco privado entrando en una estrecha laguna de caliza en El Nido",
        ru: "Частная лодка входит в узкую известняковую лагуну в Эль-Нидо",
      },
      brief:
        "Bacuit Bay just after sunrise. A single banca entering a narrow lagoon, karst walls close on both sides, mirror water. No other boats in frame.",
      tone: "lagoon",
    },
    faqs: [
      {
        q: { en: "El Nido or Coron?" },
        a: {
          en: "Both, if you have ten days or more. El Nido is about lagoons, beaches and island hopping; Coron is better for wrecks, lakes and snorkelling. With a week, we usually suggest choosing one and doing it properly.",
        },
      },
      {
        q: { en: "When is the best time to go to Palawan?" },
        a: {
          en: "November to May is the most reliable. June to October brings the southwest monsoon: fewer people and lower rates, but some boat days are cancelled. We plan buffers if you travel then.",
        },
      },
      {
        q: { en: "How long does it take to get between El Nido and Coron?" },
        a: {
          en: "The fast ferry takes around four hours and depends on the sea. There are also short flights on some days. We choose the option that suits the season and your schedule.",
        },
      },
    ],
    prefill: { destination: "palawan", interest: "beaches,nature,diving", duration: "11-14" },
    seo: {
      title: {
        en: "Palawan Trip: El Nido & Coron, Planned | Inside Philippines",
        fr: "Voyage Palawan : El Nido et Coron sur mesure",
        es: "Viaje a Palawan: El Nido y Coron a medida",
        ru: "Туры на Палаван: Эль-Нидо и Корон | Inside Philippines",
      },
      description: {
        en: "El Nido and Coron without the queues: private boats at dawn, the right season, ferries and flights that connect. Designed in the Philippines.",
        fr: "Voyage aux Philippines à Palawan : El Nido et Coron en bateau privé à l'aube, la bonne saison et des liaisons fiables. Conçu sur place, sur mesure.",
        es: "Viaje a Filipinas por Palawan: El Nido y Coron en barco privado al amanecer, la mejor época y conexiones fiables. Diseñado a medida desde Filipinas.",
        ru: "Туры на Филиппины, Палаван: Эль-Нидо и Корон на частной лодке на рассвете, правильный сезон и надёжные переезды. Индивидуальный маршрут.",
      },
    },
  },
  {
    slug: "honeymoon",
    market: "global",
    title: {
      en: "A Philippines honeymoon with fewer stops and better ones.",
      fr: "Une lune de miel aux Philippines : moins d'étapes, mieux choisies.",
      es: "Luna de miel en Filipinas: menos paradas, mejor elegidas.",
      ru: "Медовый месяц на Филиппинах: меньше остановок, но точнее.",
      ar: "شهر عسل في الفلبين: محطات أقل، واختيار أدق.",
    },
    kicker: {
      en: "Inside Honeymoons",
      fr: "Inside Honeymoons",
      es: "Inside Honeymoons",
      ru: "Inside Honeymoons",
      ar: "Inside Honeymoons",
    },
    intro: {
      en: "Two islands, private transfers and no arrivals after dark. We design honeymoons around lagoons at 7am, villas with their own beach and a dinner on a sandbar as the tide goes out, and we tell you which famous places to skip.",
      fr: "Deux îles, des transferts privés et jamais d'arrivée de nuit. Nous concevons des lunes de miel autour des lagons à 7 h, de villas avec leur propre plage et d'un dîner sur un banc de sable à marée descendante, et nous vous disons quels lieux célèbres éviter.",
      es: "Dos islas, traslados privados y ninguna llegada de noche. Diseñamos lunas de miel con lagunas a las 7 de la mañana, villas con playa propia y una cena sobre un banco de arena con la marea bajando, y os decimos qué lugares famosos podéis saltaros.",
      ru: "Два острова, частные трансферы и никаких прилётов в темноте. Мы строим медовый месяц вокруг лагун в 7 утра, вилл со своим пляжем и ужина на песчаной косе в отлив — и подскажем, какие известные места можно пропустить.",
      ar: "جزيرتان، وتنقلات خاصة، ولا وصول بعد حلول الظلام. نصمّم شهر العسل حول بحيرات في السابعة صباحاً، وفلل بشاطئ خاص، وعشاء على لسان رملي مع انحسار المد، ونخبركما بالأماكن الشهيرة التي يمكن تخطيها.",
    },
    points: {
      en: [
        "Two islands over 10 to 14 nights, with a villa for the slow half",
        "Private boats that leave before the shared tours",
        "A private dinner on a sandbar, timed to the tide",
        "Every transfer private, every flight timed to land in daylight",
        "Someone on our team reachable on WhatsApp throughout",
      ],
      fr: [
        "Deux îles sur 10 à 14 nuits, avec une villa pour la partie farniente",
        "Des bateaux privés qui partent avant les excursions collectives",
        "Un dîner privé sur un banc de sable, calé sur la marée",
        "Tous les transferts privés, tous les vols prévus pour atterrir de jour",
        "Quelqu'un de notre équipe joignable sur WhatsApp pendant tout le voyage",
      ],
      es: [
        "Dos islas en 10 a 14 noches, con una villa para la parte más tranquila",
        "Barcos privados que salen antes que las excursiones compartidas",
        "Una cena privada sobre un banco de arena, según la marea",
        "Todos los traslados privados y vuelos que aterrizan de día",
        "Alguien de nuestro equipo disponible por WhatsApp durante todo el viaje",
      ],
      ru: [
        "Два острова на 10–14 ночей, вторая половина — на вилле",
        "Частные лодки, которые выходят раньше групповых туров",
        "Частный ужин на песчаной косе, по времени отлива",
        "Все трансферы частные, все перелёты — с посадкой засветло",
        "Человек из нашей команды на связи в WhatsApp всю поездку",
      ],
      ar: [
        "جزيرتان خلال 10 إلى 14 ليلة، مع فيلا للنصف الأكثر هدوءاً",
        "قوارب خاصة تنطلق قبل الجولات الجماعية",
        "عشاء خاص على لسان رملي في توقيت انحسار المد",
        "جميع التنقلات خاصة، والرحلات الجوية مرتّبة للوصول في النهار",
        "فريقنا متاح عبر واتساب طوال الرحلة",
      ],
    },
    journeys: ["honeymoon-inside-philippines", "palawan-deep-dive", "ten-days-two-islands"],
    destinations: ["el-nido", "coron", "siargao", "bohol", "boracay"],
    photo: {
      alt: {
        en: "A couple walking along an empty sandbar in Palawan at golden hour",
        fr: "Un couple marchant sur un banc de sable désert à Palawan, à l'heure dorée",
        es: "Una pareja caminando por un banco de arena vacío en Palawan a la hora dorada",
        ru: "Пара идёт по пустой песчаной косе на Палаване в золотой час",
        ar: "زوجان يسيران على لسان رملي خالٍ في بالاوان وقت الغروب",
      },
      brief:
        "Golden hour, Palawan sandbar. Couple seen from behind or at distance, modestly dressed so the image works for all markets. Banca waiting in the shallows. Natural, unposed.",
      tone: "dusk",
    },
    faqs: [
      {
        q: {
          en: "How many days do we need for a Philippines honeymoon?",
          ar: "كم يوماً نحتاج لشهر العسل في الفلبين؟",
        },
        a: {
          en: "Ten to fourteen nights is ideal for two islands at an unhurried pace. With a week, choose one island and add a short stay in a villa.",
          ar: "من عشر إلى أربع عشرة ليلة مدة مثالية لجزيرتين بإيقاع هادئ. وإن كان لديكما أسبوع واحد، فننصح بجزيرة واحدة مع إقامة قصيرة في فيلا.",
        },
      },
      {
        q: {
          en: "Which months are best?",
          ar: "ما أفضل الأشهر للسفر؟",
        },
        a: {
          en: "November to May for Palawan and most of the Visayas. Siargao is often at its best from March to October. We match the islands to your dates rather than the other way round.",
          ar: "من نوفمبر إلى مايو لبالاوان ومعظم جزر فيساياس. أما سيارغاو فغالباً ما تكون في أفضل حالاتها من مارس إلى أكتوبر. نختار الجزر بحسب مواعيدكما وليس العكس.",
        },
      },
      {
        q: {
          en: "Can you arrange halal dining and privacy?",
          ar: "هل يمكنكم ترتيب طعام حلال وخصوصية تامة؟",
        },
        a: {
          en: "Yes for privacy: private villas, boats and transfers throughout. For halal, we arrange it where available and tell you honestly where options are limited, which is more often the case outside the main resorts.",
          ar: "الخصوصية نعم: فلل وقوارب وتنقلات خاصة طوال الرحلة. أما الطعام الحلال فنرتّبه حيث يتوفر، ونخبركما بصراحة أين تكون الخيارات محدودة، وهذا يحدث أكثر خارج المنتجعات الكبرى.",
        },
      },
    ],
    prefill: { who: "honeymoon", duration: "11-14", style: "premium", interest: "beaches,luxury,wellness" },
    seo: {
      title: {
        en: "Philippines Honeymoon, Tailor-Made | Inside Philippines",
        fr: "Lune de miel Philippines sur mesure | Inside Philippines",
        es: "Luna de miel en Filipinas a medida | Inside Philippines",
        ru: "Медовый месяц на Филиппинах | Inside Philippines",
        ar: "رحلات شهر العسل في الفلبين | Inside Philippines",
      },
      description: {
        en: "A tailor-made Philippines honeymoon: two islands, private boats and villas, a sandbar dinner and every transfer arranged. Planned by a team in the country.",
        fr: "Lune de miel aux Philippines sur mesure : deux îles, bateaux privés, villas, dîner sur un banc de sable et tous les transferts organisés depuis le pays.",
        es: "Luna de miel en Filipinas a medida: dos islas, barcos privados, villas, cena en un banco de arena y todos los traslados organizados desde allí.",
        ru: "Медовый месяц на Филиппинах: два острова, частные лодки и виллы, ужин на песчаной косе и все трансферы. Индивидуальный тур от команды на месте.",
        ar: "رحلات شهر العسل إلى الفلبين حسب الطلب: جزيرتان، وقوارب وفلل خاصة، وعشاء على لسان رملي، وجميع التنقلات مرتّبة من فريق داخل البلاد.",
      },
    },
  },
  {
    slug: "family-philippines",
    market: "global",
    title: {
      en: "The Philippines with children, without the long transfer days.",
      fr: "Les Philippines en famille, sans les journées de transfert interminables.",
      es: "Filipinas con niños, sin días eternos de traslados.",
      ru: "Филиппины с детьми — без изматывающих переездов.",
      ar: "الفلبين مع الأطفال، من دون أيام تنقل طويلة.",
    },
    kicker: {
      en: "Inside Family Travel",
      fr: "Inside Family Travel",
      es: "Inside Family Travel",
      ru: "Inside Family Travel",
      ar: "Inside Family Travel",
    },
    intro: {
      en: "Warm water, calm lagoons and people who genuinely like children. The Philippines is a wonderful family trip, as long as nobody plans a flight, a van and a boat into one afternoon. We build it around fewer bases, short hops and resorts that make family life easy.",
      fr: "Une eau chaude, des lagons calmes et des habitants qui aiment sincèrement les enfants. Les Philippines sont un voyage en famille formidable, tant que personne ne prévoit avion, minibus et bateau dans le même après-midi. Nous l'organisons avec moins d'étapes, des trajets courts et des hôtels qui simplifient la vie des familles.",
      es: "Agua templada, lagunas tranquilas y gente a la que le encantan los niños. Filipinas es un viaje en familia estupendo, siempre que nadie meta vuelo, furgoneta y barco en la misma tarde. Lo organizamos con menos bases, trayectos cortos y hoteles que facilitan la vida a las familias.",
      ru: "Тёплая вода, спокойные лагуны и люди, которые искренне любят детей. Филиппины — прекрасное семейное путешествие, если не планировать перелёт, минивэн и лодку в один день. Мы строим его вокруг меньшего числа баз, коротких переездов и отелей, где семьям удобно.",
      ar: "مياه دافئة، وبحيرات هادئة، وناس يحبون الأطفال بصدق. الفلبين رحلة عائلية رائعة، بشرط ألا يخطط أحد لطيران وسيارة وقارب في عصر واحد. نبنيها حول محطات أقل، وتنقلات قصيرة، ومنتجعات تجعل الحياة العائلية سهلة.",
    },
    points: {
      en: [
        "Two or three bases in two weeks, with one free day at every stop",
        "Family rooms, connecting villas and calm swimming beaches",
        "Private vans with child seats on request, private boats at your pace",
        "Snorkelling with turtles, tarsiers in Bohol, rivers by kayak",
        "Kitchens briefed for simple food, and halal where available",
      ],
      fr: [
        "Deux ou trois étapes en deux semaines, avec un jour libre à chacune",
        "Chambres familiales, villas communicantes et plages calmes pour se baigner",
        "Minibus privés avec sièges enfants sur demande, bateaux privés à votre rythme",
        "Snorkeling avec les tortues, tarsiers à Bohol, rivières en kayak",
        "Des cuisines prévenues pour des repas simples, et le halal là où c'est possible",
      ],
      es: [
        "Dos o tres bases en dos semanas, con un día libre en cada parada",
        "Habitaciones familiares, villas comunicadas y playas tranquilas para bañarse",
        "Furgonetas privadas con sillas infantiles si las pedís, barcos privados a vuestro ritmo",
        "Snorkel con tortugas, tarseros en Bohol y ríos en kayak",
        "Cocinas avisadas para comida sencilla, y halal donde lo hay",
      ],
      ru: [
        "Две-три базы за две недели и свободный день в каждой",
        "Семейные номера, смежные виллы и спокойные пляжи для купания",
        "Частные минивэны с детскими креслами по запросу, частные лодки в вашем темпе",
        "Снорклинг с черепахами, долгопяты на Бохоле, реки на каяке",
        "Кухня готова к простой еде, а халяль — там, где он доступен",
      ],
      ar: [
        "محطتان أو ثلاث خلال أسبوعين، مع يوم حر في كل محطة",
        "غرف عائلية، وفلل متصلة، وشواطئ هادئة للسباحة",
        "سيارات خاصة بمقاعد أطفال عند الطلب، وقوارب خاصة على إيقاعكم",
        "سباحة مع السلاحف، وقرود الترسير في بوهول، وجولات بالكاياك في الأنهار",
        "مطابخ تحضّر طعاماً بسيطاً للأطفال، وطعام حلال حيث يتوفر",
      ],
    },
    journeys: ["island-classics", "ten-days-two-islands", "the-slow-philippines"],
    destinations: ["bohol", "el-nido", "palawan", "boracay", "cebu"],
    photo: {
      alt: {
        en: "A family on a private boat heading out across calm water in Bohol",
        fr: "Une famille sur un bateau privé traversant une eau calme à Bohol",
        es: "Una familia en un barco privado cruzando aguas tranquilas en Bohol",
        ru: "Семья на частной лодке выходит в спокойное море у Бохола",
        ar: "عائلة على قارب خاص تعبر مياهاً هادئة في بوهول",
      },
      brief:
        "Morning on a private banca off Bohol or Palawan. A family of four from behind or side-on, children in life jackets pointing at the water. Real, relaxed, modest clothing.",
      tone: "sand",
    },
    faqs: [
      {
        q: {
          en: "Is the Philippines a good destination for young children?",
          ar: "هل الفلبين وجهة مناسبة للأطفال الصغار؟",
        },
        a: {
          en: "Yes, with the right route. We keep transfers short, choose resorts with calm beaches and medical access within reasonable reach, and avoid stacking travel legs.",
          ar: "نعم، مع المسار المناسب. نحرص على تنقلات قصيرة، ونختار منتجعات بشواطئ هادئة وقريبة بشكل معقول من الخدمات الطبية، ونتجنب تكديس أيام السفر.",
        },
      },
      {
        q: {
          en: "Which islands work best for families?",
          ar: "ما أفضل الجزر للعائلات؟",
        },
        a: {
          en: "Bohol is the easiest all-rounder: beaches, rivers, tarsiers and short drives. Palawan suits slightly older children who love boats. Boracay is convenient, with a long, gentle beach.",
          ar: "بوهول هي الخيار الأسهل والأشمل: شواطئ وأنهار وقرود الترسير ومسافات قصيرة. وبالاوان تناسب الأطفال الأكبر سناً ممن يحبون القوارب. أما بوراكاي فمريحة بشاطئها الطويل والهادئ.",
        },
      },
      {
        q: {
          en: "Can you arrange halal food for the family?",
          ar: "هل يمكنكم ترتيب طعام حلال للعائلة؟",
        },
        a: {
          en: "We arrange halal dining where available and tell you honestly where options are limited. Larger resorts and Manila are easier; small islands are more limited, and we plan around that.",
          ar: "نرتّب الطعام الحلال حيث يتوفر، ونخبركم بصراحة أين تكون الخيارات محدودة. الأمر أسهل في المنتجعات الكبرى وفي مانيلا، وأصعب في الجزر الصغيرة، ونخطط على هذا الأساس.",
        },
      },
    ],
    prefill: { who: "family", duration: "11-14", style: "boutique", interest: "family,beaches,nature" },
    seo: {
      title: {
        en: "Philippines Family Holiday, Tailor-Made | Inside Philippines",
        fr: "Voyage Philippines en famille sur mesure",
        es: "Viaje a Filipinas con niños, a medida",
        ru: "Филиппины с детьми: семейный тур | Inside Philippines",
        ar: "الفلبين للعائلات: رحلات خاصة | Inside Philippines",
      },
      description: {
        en: "A Philippines family holiday with short transfers, calm beaches, family villas and private boats. Tailor-made by a team based in the Philippines.",
        fr: "Voyage aux Philippines en famille : transferts courts, plages calmes, villas familiales et bateaux privés. Un itinéraire sur mesure conçu sur place.",
        es: "Viaje a Filipinas en familia: traslados cortos, playas tranquilas, villas familiares y barcos privados. Ruta a medida diseñada desde Filipinas.",
        ru: "Отдых на Филиппинах с детьми: короткие переезды, спокойные пляжи, семейные виллы и частные лодки. Индивидуальный маршрут от команды на месте.",
        ar: "الفلبين للعائلات: تنقلات قصيرة، وشواطئ هادئة، وفلل عائلية، وقوارب خاصة، وطعام حلال حيث يتوفر. رحلة مصمّمة من فريق داخل الفلبين.",
      },
    },
  },
  {
    slug: "luxury-philippines",
    market: "global",
    title: {
      en: "Luxury in the Philippines is access. We arrange it.",
      fr: "Aux Philippines, le luxe, c'est l'accès. Nous l'organisons.",
      es: "En Filipinas, el lujo es el acceso. Nosotros lo organizamos.",
      ru: "Роскошь на Филиппинах — это доступ. Мы его обеспечим.",
      ar: "الفخامة في الفلبين تعني سهولة الوصول، ونحن نرتّبها.",
    },
    kicker: {
      en: "Premium & Signature journeys",
      fr: "Voyages Premium & Signature",
      es: "Viajes Premium y Signature",
      ru: "Путешествия Premium и Signature",
      ar: "رحلات بريميوم وسيغنتشر",
    },
    intro: {
      en: "The country's best resorts own their islands, and the best days start on a private boat. We connect them with private transfers, seaplanes or charters where they save time, and a team on the ground who answers when you message.",
      fr: "Les plus beaux resorts du pays possèdent leur île, et les meilleures journées commencent sur un bateau privé. Nous les relions par des transferts privés, des hydravions ou des vols charter quand ils font gagner du temps, avec une équipe sur place qui répond quand vous écrivez.",
      es: "Los mejores resorts del país son dueños de su isla y los mejores días empiezan en un barco privado. Los conectamos con traslados privados, hidroaviones o chárteres cuando ahorran tiempo, y un equipo sobre el terreno que responde cuando escribes.",
      ru: "Лучшие курорты страны владеют целыми островами, а лучшие дни начинаются на частной лодке. Мы связываем их частными трансферами, гидросамолётами или чартерами, когда они экономят время, — и командой на месте, которая отвечает, когда вы пишете.",
      ar: "أفضل منتجعات البلاد تملك جزرها، وأجمل الأيام تبدأ على قارب خاص. نربط بينها بتنقلات خاصة، وطائرات مائية أو رحلات خاصة حين توفّر الوقت، وفريق على الأرض يرد عليكم متى راسلتمونا.",
    },
    points: {
      en: [
        "Private-island resorts and villas with staff, chosen for privacy, service and setting",
        "Private transfers door to door; charters when they save a day",
        "Your own boat and crew, leaving before everyone else",
        "Guides chosen for you, not from a rota",
        "WhatsApp concierge support from our team throughout",
      ],
      fr: [
        "Resorts sur îles privées et villas avec personnel, choisis pour leur intimité, leur service et leur cadre",
        "Transferts privés de porte à porte ; vols charter quand ils font gagner un jour",
        "Votre bateau et votre équipage, au départ avant tout le monde",
        "Des guides choisis pour vous, pas selon un planning",
        "Conciergerie sur WhatsApp assurée par notre équipe pendant tout le voyage",
      ],
      es: [
        "Resorts en islas privadas y villas con personal, elegidos por su privacidad, servicio y entorno",
        "Traslados privados puerta a puerta; chárteres cuando ahorran un día",
        "Tu propio barco y tripulación, saliendo antes que nadie",
        "Guías elegidos para ti, no por turnos",
        "Conserjería por WhatsApp con nuestro equipo durante todo el viaje",
      ],
      ru: [
        "Курорты на частных островах и виллы с персоналом — выбраны за приватность, сервис и расположение",
        "Частные трансферы от двери до двери; чартер, когда он экономит день",
        "Своя лодка с командой, выход раньше всех",
        "Гиды, подобранные под вас, а не по графику",
        "Консьерж-поддержка нашей команды в WhatsApp на протяжении всей поездки",
      ],
      ar: [
        "منتجعات على جزر خاصة وفلل بطاقم خدمة، نختارها للخصوصية والخدمة والموقع",
        "تنقلات خاصة من الباب إلى الباب، ورحلات طيران خاصة حين توفّر يوماً",
        "قاربكم وطاقمكم الخاص، ينطلق قبل الجميع",
        "مرشدون نختارهم لكم خصيصاً",
        "خدمة كونسيرج من فريقنا عبر واتساب طوال الرحلة",
      ],
    },
    journeys: ["honeymoon-inside-philippines", "palawan-deep-dive", "the-grand-philippines"],
    destinations: ["palawan", "el-nido", "coron", "boracay", "siargao"],
    photo: {
      alt: {
        en: "An infinity pool on a private island looking out over Palawan's limestone islets",
        fr: "Une piscine à débordement sur une île privée face aux îlots calcaires de Palawan",
        es: "Una piscina infinita en una isla privada frente a los islotes de caliza de Palawan",
        ru: "Бассейн-инфинити на частном острове с видом на известняковые островки Палавана",
        ar: "مسبح لا متناهٍ على جزيرة خاصة يطل على جزر بالاوان الكلسية",
      },
      brief:
        "Late afternoon, northern Palawan private-island resort. Infinity edge in foreground, karst islets beyond, nobody in the pool. Architectural and calm; no recognisable branding.",
      tone: "lagoon",
    },
    faqs: [
      {
        q: {
          en: "Which tier is right for a luxury trip?",
          ar: "أي مستوى يناسب رحلة فاخرة؟",
        },
        a: {
          en: "Premium covers high-end resorts and private transfers throughout. Signature adds private-island resorts, villas with staff, private boats and charter flights where they save a day.",
          ar: "مستوى بريميوم يشمل منتجعات راقية وتنقلات خاصة طوال الرحلة. أما سيغنتشر فيضيف منتجعات الجزر الخاصة، وفللاً بطاقم خدمة، وقوارب خاصة، ورحلات طيران خاصة حين توفّر يوماً.",
        },
      },
      {
        q: {
          en: "How do we fly to the Philippines from the UAE or Europe?",
          ar: "كيف نسافر إلى الفلبين من الإمارات أو أوروبا؟",
        },
        a: {
          en: "There are direct flights from the UAE to Manila, typically around nine hours. From Europe, most routes connect once via the Gulf or Asia. Schedules change, so we check current options when we plan.",
          ar: "توجد رحلات مباشرة من الإمارات إلى مانيلا، تستغرق عادةً نحو تسع ساعات. ومن أوروبا تتطلب معظم الرحلات توقفاً واحداً في الخليج أو آسيا. الجداول تتغير، لذا نتحقق من الخيارات الحالية عند التخطيط.",
        },
      },
      {
        q: {
          en: "Can you arrange halal dining?",
          ar: "هل يمكنكم ترتيب طعام حلال؟",
        },
        a: {
          en: "We arrange halal dining where available and tell you honestly where options are limited. High-end resorts are usually accommodating with notice; remote islands less so.",
          ar: "نرتّب الطعام الحلال حيث يتوفر، ونخبركم بصراحة أين تكون الخيارات محدودة. المنتجعات الراقية عادةً ما تتعاون عند الإشعار المسبق، أما الجزر النائية فأقل مرونة.",
        },
      },
    ],
    prefill: { style: "signature", duration: "11-14", interest: "luxury,beaches,wellness" },
    seo: {
      title: {
        en: "Luxury Philippines Holidays, Private & Tailor-Made",
        fr: "Voyage de luxe aux Philippines sur mesure",
        es: "Viaje de lujo a Filipinas a medida",
        ru: "Элитный отдых на Филиппинах | Inside Philippines",
        ar: "رحلة فاخرة الى الفلبين | Inside Philippines",
      },
      description: {
        en: "Luxury Philippines holidays: private-island resorts, villas, private boats and charters, with WhatsApp concierge. Designed by a team in the country.",
        fr: "Voyage de luxe aux Philippines : resorts sur îles privées, villas, bateaux privés et vols charter, avec conciergerie WhatsApp. Conçu sur place.",
        es: "Viaje de lujo a Filipinas: resorts en islas privadas, villas, barcos privados y chárteres, con conserjería por WhatsApp. Diseñado desde Filipinas.",
        ru: "Люксовые туры на Филиппины: курорты на частных островах, виллы, частные лодки и чартеры, консьерж в WhatsApp. Маршрут от команды на месте.",
        ar: "رحلة فاخرة إلى الفلبين: منتجعات جزر خاصة، وفلل، وقوارب خاصة، وطيران خاص، مع خدمة كونسيرج عبر واتساب من فريق داخل البلاد.",
      },
    },
  },
  {
    slug: "14-day-philippines-itinerary",
    market: "global",
    title: {
      en: "14 days in the Philippines: three islands, no wasted days.",
      fr: "14 jours aux Philippines : trois îles, aucune journée perdue.",
      es: "14 días en Filipinas: tres islas, ningún día perdido.",
      ru: "14 дней на Филиппинах: три острова без потерянных дней.",
    },
    kicker: {
      en: "Two-week itineraries",
      fr: "Itinéraires de deux semaines",
      es: "Rutas de dos semanas",
      ru: "Маршруты на две недели",
    },
    intro: {
      en: "Two weeks is the sweet spot: enough for Palawan plus one or two Visayan islands, if the connections are right. Our sample routes show every flight and ferry, so you can see exactly where the days go before you commit.",
      fr: "Deux semaines, c'est l'idéal : assez pour Palawan et une ou deux îles des Visayas, à condition de bien gérer les liaisons. Nos itinéraires types montrent chaque vol et chaque ferry, pour voir précisément où passent les journées avant de vous engager.",
      es: "Dos semanas es la medida perfecta: suficiente para Palawan y una o dos islas de las Bisayas, si las conexiones encajan. Nuestras rutas de ejemplo muestran cada vuelo y cada ferry, para que veas en qué se va cada día antes de decidir.",
      ru: "Две недели — идеальный срок: хватает на Палаван и один-два острова Висайских островов, если стыковки продуманы. В наших примерах маршрутов видно каждый перелёт и паром, чтобы вы заранее понимали, куда уходит каждый день.",
    },
    points: {
      en: [
        "Three bases, not five: the most common planning mistake, fixed",
        "Every flight and ferry shown, with real travel times",
        "Routes built around the season, not just the map",
        "Easy to adjust: swap Siargao for Bohol, add a villa, slow it down",
        "A first proposal from our team, then refined with you",
      ],
      fr: [
        "Trois étapes, pas cinq : l'erreur de planification la plus courante, corrigée",
        "Chaque vol et chaque ferry indiqués, avec les vrais temps de trajet",
        "Des itinéraires pensés selon la saison, pas seulement selon la carte",
        "Facile à ajuster : Bohol à la place de Siargao, une villa en plus, un rythme plus lent",
        "Une première proposition de notre équipe, puis affinée avec vous",
      ],
      es: [
        "Tres bases, no cinco: el error más habitual al planificar, resuelto",
        "Cada vuelo y ferry indicado, con tiempos de viaje reales",
        "Rutas pensadas según la temporada, no solo según el mapa",
        "Fácil de ajustar: Bohol en lugar de Siargao, una villa más, un ritmo más lento",
        "Una primera propuesta de nuestro equipo, que afinamos contigo",
      ],
      ru: [
        "Три базы, а не пять — исправляем самую частую ошибку планирования",
        "Каждый перелёт и паром с реальным временем в пути",
        "Маршруты под сезон, а не только по карте",
        "Легко изменить: Бохол вместо Сиаргао, вилла, более медленный темп",
        "Первое предложение от нашей команды — и доработка вместе с вами",
      ],
    },
    journeys: ["island-classics", "surf-and-islands", "palawan-deep-dive"],
    destinations: ["el-nido", "coron", "siargao", "bohol", "manila"],
    photo: {
      alt: {
        en: "A small propeller plane on a runway between palm trees and sea",
        fr: "Un petit avion à hélices sur une piste entre palmiers et mer",
        es: "Una avioneta de hélice en una pista entre palmeras y mar",
        ru: "Небольшой винтовой самолёт на полосе между пальмами и морем",
        ar: "طائرة مروحية صغيرة على مدرج بين أشجار النخيل والبحر",
      },
      brief:
        "A turboprop on a small island airstrip (Sayak, El Nido or Busuanga feel), passengers walking across the apron, palms and sea behind. Says 'connections' without a map.",
      tone: "sand",
    },
    faqs: [
      {
        q: { en: "Is 14 days enough for the Philippines?" },
        a: {
          en: "It's enough for three places done well, or four with a fast pace. Trying for more usually means a travel day out of every three.",
        },
      },
      {
        q: { en: "What's a good first-time route?" },
        a: {
          en: "El Nido, Coron and Bohol or Siargao is the most balanced. A night in Manila on arrival or departure helps with long-haul timings.",
        },
      },
      {
        q: { en: "Can we do it in the rainy season?" },
        a: {
          en: "Yes, with a different route. From June to October we lean towards places less exposed to the southwest monsoon and build in buffer days.",
        },
      },
    ],
    prefill: { duration: "11-14", interest: "beaches,nature,culture" },
    seo: {
      title: {
        en: "14-Day Philippines Itinerary: 3 Islands | Inside Philippines",
        fr: "Itinéraire Philippines 14 jours : 3 îles",
        es: "Ruta Filipinas 14 días: 3 islas | Inside Philippines",
        ru: "Филиппины маршрут на 2 недели | Inside Philippines",
      },
      description: {
        en: "A 14-day Philippines itinerary with every flight and ferry shown: El Nido, Coron, Bohol or Siargao. Sample routes you can customise with our team.",
        fr: "Itinéraire Philippines 14 jours : El Nido, Coron, Bohol ou Siargao, avec chaque vol et ferry indiqués. Des exemples à personnaliser avec notre équipe.",
        es: "Ruta por Filipinas en 14 días: El Nido, Coron, Bohol o Siargao, con cada vuelo y ferry. Itinerarios de ejemplo para adaptar con nuestro equipo.",
        ru: "Филиппины: маршрут на 2 недели — Эль-Нидо, Корон, Бохол или Сиаргао, все перелёты и паромы. Примеры маршрутов, которые мы адаптируем под вас.",
      },
    },
  },
  {
    slug: "21-day-philippines-itinerary",
    market: "global",
    title: {
      en: "Three weeks in the Philippines: north to south, at a human pace.",
      fr: "Trois semaines aux Philippines : du nord au sud, à un rythme humain.",
      es: "Tres semanas en Filipinas: de norte a sur, a un ritmo humano.",
      ru: "Три недели на Филиппинах: с севера на юг в человеческом темпе.",
    },
    kicker: {
      en: "Three-week itineraries",
      fr: "Itinéraires de trois semaines",
      es: "Rutas de tres semanas",
      ru: "Маршруты на три недели",
    },
    intro: {
      en: "With 21 days you can add what most trips leave out: the rice terraces of the Cordillera, a quieter island like Siquijor or Camiguin, or a proper stretch of doing nothing. We plan it so the country unfolds rather than rushes past.",
      fr: "Avec 21 jours, vous pouvez ajouter ce que la plupart des voyages laissent de côté : les rizières en terrasses de la Cordillère, une île plus calme comme Siquijor ou Camiguin, ou une vraie pause. Nous l'organisons pour que le pays se dévoile au lieu de défiler.",
      es: "Con 21 días puedes añadir lo que la mayoría de viajes deja fuera: las terrazas de arroz de la Cordillera, una isla más tranquila como Siquijor o Camiguin, o unos días de no hacer nada. Lo planificamos para que el país se descubra sin prisas.",
      ru: "За 21 день можно добавить то, что обычно остаётся за бортом: рисовые террасы Кордильер, тихий остров вроде Сикихора или Камигина или просто несколько дней ничегонеделания. Мы планируем так, чтобы страна раскрывалась, а не проносилась мимо.",
    },
    points: {
      en: [
        "Banaue, Batad and Sagada: the Philippines most beach trips never see",
        "Palawan's lagoons plus a Visayan island or two",
        "One slow stop with nothing scheduled, by design",
        "Overland and domestic flight legs planned as a whole, not piece by piece",
        "Buffer days placed where weather is most likely to interfere",
      ],
      fr: [
        "Banaue, Batad et Sagada : les Philippines que la plupart des voyages balnéaires ne voient jamais",
        "Les lagons de Palawan, plus une ou deux îles des Visayas",
        "Une étape lente sans rien au programme, volontairement",
        "Trajets par la route et vols intérieurs pensés comme un tout, pas au coup par coup",
        "Des jours tampons placés là où la météo risque le plus de jouer",
      ],
      es: [
        "Banaue, Batad y Sagada: la Filipinas que casi ningún viaje de playa llega a ver",
        "Las lagunas de Palawan y una o dos islas de las Bisayas",
        "Una parada lenta sin nada programado, a propósito",
        "Trayectos por carretera y vuelos internos planificados como un todo",
        "Días de margen donde el tiempo tiene más probabilidades de interferir",
      ],
      ru: [
        "Банауэ, Батад и Сагада — Филиппины, которых не видит большинство пляжных туристов",
        "Лагуны Палавана плюс один-два Висайских острова",
        "Одна неспешная остановка без программы — специально",
        "Наземные переезды и внутренние перелёты спланированы как единое целое",
        "Резервные дни там, где погода вероятнее всего вмешается",
      ],
    },
    journeys: ["the-grand-philippines", "the-slow-philippines"],
    destinations: ["banaue", "sagada", "el-nido", "bohol", "siquijor"],
    photo: {
      alt: {
        en: "Mist lifting from the Batad rice terraces in the early morning",
        fr: "La brume se lève sur les rizières en terrasses de Batad au petit matin",
        es: "La niebla se levanta sobre las terrazas de arroz de Batad a primera hora",
        ru: "Утренний туман поднимается над рисовыми террасами Батада",
        ar: "الضباب يرتفع فوق مدرجات الأرز في باتاد صباحاً",
      },
      brief:
        "Batad at dawn, mist in the amphitheatre, first light catching the terrace walls. Wide, quiet, one small figure optional.",
      tone: "rice",
    },
    faqs: [
      {
        q: { en: "Is three weeks too long?" },
        a: {
          en: "Not if you vary it. Mountains, islands and a city stop feel like three different trips. Most people who go for three weeks wish they'd planned it that way from the start.",
        },
      },
      {
        q: { en: "How hard is it to get to the rice terraces?" },
        a: {
          en: "Banaue is roughly 8 to 9 hours by road from Manila, which is why we often route it with Sagada and allow two nights at least. A private driver makes it far more comfortable.",
        },
      },
      {
        q: { en: "Can we include diving?" },
        a: {
          en: "Easily. Malapascua, Moalboal or Coron fit well into a three-week route. We schedule them so you don't fly within 24 hours of your last dive.",
        },
      },
    ],
    prefill: { duration: "19-21", interest: "beaches,nature,culture,adventure" },
    seo: {
      title: {
        en: "21-Day Philippines Itinerary: 3 Weeks | Inside Philippines",
        fr: "Itinéraire Philippines 3 semaines (21 jours)",
        es: "Ruta Filipinas 3 semanas (21 días) | Inside Philippines",
        ru: "Филиппины маршрут на 3 недели | Inside Philippines",
      },
      description: {
        en: "A three-week Philippines itinerary: rice terraces, Palawan's lagoons and a quieter Visayan island, with every leg shown. Tailor-made by our team.",
        fr: "Itinéraire Philippines 3 semaines : rizières de Banaue, lagons de Palawan et une île plus calme des Visayas, chaque trajet indiqué. Voyage sur mesure.",
        es: "Ruta por Filipinas en 3 semanas: arrozales de Banaue, lagunas de Palawan y una isla tranquila de las Bisayas, con cada trayecto. Viaje a medida.",
        ru: "Филиппины: маршрут на 3 недели — рисовые террасы, лагуны Палавана и тихий остров Висайев, все переезды расписаны. Индивидуальный тур.",
      },
    },
  },
  {
    slug: "island-hopping",
    market: "global",
    title: {
      en: "Island hopping in the Philippines, in the right order.",
      fr: "Les Philippines d'île en île, dans le bon ordre.",
      es: "Islas de Filipinas, en el orden correcto.",
      ru: "Филиппины от острова к острову — в правильном порядке.",
    },
    kicker: {
      en: "Inside the Islands",
      fr: "Inside the Islands",
      es: "Inside the Islands",
      ru: "Inside the Islands",
    },
    intro: {
      en: "There are over 7,000 islands and only some of them connect easily. We plan island-hopping routes around the flights and ferries that actually run, the season on each coast, and boat days that start before the crowds.",
      fr: "Il y a plus de 7 000 îles, et seules certaines se relient facilement. Nous concevons des itinéraires d'île en île autour des vols et ferries qui fonctionnent vraiment, de la saison sur chaque côte et de sorties en bateau qui partent avant la foule.",
      es: "Hay más de 7.000 islas y solo algunas se conectan con facilidad. Diseñamos rutas entre islas según los vuelos y ferris que de verdad operan, la temporada en cada costa y días de barco que empiezan antes que la multitud.",
      ru: "Островов больше 7000, и лишь некоторые легко связаны между собой. Мы строим маршруты по тем рейсам и паромам, которые реально ходят, с учётом сезона на каждом побережье и лодочных дней, начинающихся раньше толпы.",
    },
    points: {
      en: [
        "Routes built on real flight and ferry schedules",
        "Private boats in El Nido, Coron and Siargao, out before 8am",
        "The order matters: we sequence islands by season and connection",
        "Fewer transfer days, longer stays where it counts",
        "Every leg shown on your itinerary, with honest travel times",
      ],
      fr: [
        "Des itinéraires fondés sur les vrais horaires de vols et de ferries",
        "Bateaux privés à El Nido, Coron et Siargao, au départ avant 8 h",
        "L'ordre compte : nous enchaînons les îles selon la saison et les liaisons",
        "Moins de journées de transfert, des séjours plus longs là où ça compte",
        "Chaque trajet indiqué sur votre itinéraire, avec des durées honnêtes",
      ],
      es: [
        "Rutas basadas en horarios reales de vuelos y ferris",
        "Barcos privados en El Nido, Coron y Siargao, saliendo antes de las 8",
        "El orden importa: encadenamos las islas según temporada y conexiones",
        "Menos días de traslado, estancias más largas donde merece la pena",
        "Cada trayecto en tu itinerario, con tiempos de viaje honestos",
      ],
      ru: [
        "Маршруты по реальному расписанию рейсов и паромов",
        "Частные лодки в Эль-Нидо, Короне и на Сиаргао — выход до 8 утра",
        "Порядок важен: выстраиваем острова по сезону и стыковкам",
        "Меньше дней в дороге, дольше там, где это того стоит",
        "Каждый переезд в маршруте с честным временем в пути",
      ],
    },
    journeys: ["island-classics", "palawan-deep-dive", "surf-and-islands"],
    destinations: ["el-nido", "coron", "siargao", "bohol", "boracay"],
    photo: {
      alt: {
        en: "Seen from above, a wooden boat crossing between two small green islands",
        fr: "Vu du ciel, un bateau en bois naviguant entre deux petites îles vertes",
        es: "Visto desde el aire, un barco de madera cruzando entre dos pequeñas islas verdes",
        ru: "Вид сверху: деревянная лодка идёт между двумя маленькими зелёными островами",
        ar: "منظر علوي لقارب خشبي يعبر بين جزيرتين خضراوين صغيرتين",
      },
      brief:
        "Drone, mid-morning. A single banca with a white wake crossing a channel between two small islands, reef visible in the shallows. Strong sense of movement and connection.",
      tone: "reef",
    },
    faqs: [
      {
        q: { en: "How many islands can we visit in two weeks?" },
        a: {
          en: "Three is comfortable, four is possible. Each extra island usually costs a travel day, so we help you decide whether it's worth it.",
        },
      },
      {
        q: { en: "Shared tours or private boats?" },
        a: {
          en: "Shared tours are good value and fun. Private boats let you leave earlier, skip the busiest stops at peak times and stay longer where you like. We often mix both.",
        },
      },
      {
        q: { en: "What happens if a ferry or boat is cancelled?" },
        a: {
          en: "It happens, especially in the wet season. We build buffer days into exposed routes and our team rearranges onward plans with you if the weather changes.",
        },
      },
    ],
    prefill: { duration: "11-14", interest: "beaches,nature,diving" },
    seo: {
      title: {
        en: "Philippines Island Hopping Trips | Inside Philippines",
        fr: "Voyage Philippines d'île en île | Inside Philippines",
        es: "Viaje a Filipinas en islas: ruta a medida",
        ru: "Туры на Филиппины по островам | Inside Philippines",
      },
      description: {
        en: "Philippines island hopping planned around real flights and ferries: El Nido, Coron, Siargao, Bohol. Private boats, the right order, fewer transfer days.",
        fr: "Voyage Philippines d'île en île : El Nido, Coron, Siargao, Bohol, avec vrais horaires de vols et ferries, bateaux privés et moins de transferts.",
        es: "Viaje a Filipinas de isla en isla: El Nido, Coron, Siargao y Bohol, con vuelos y ferris reales, barcos privados y menos días de traslado.",
        ru: "Туры на Филиппины по островам: Эль-Нидо, Корон, Сиаргао, Бохол — реальные рейсы и паромы, частные лодки и меньше дней в дороге.",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────── GCC (UAE)
  {
    slug: "private-villas",
    market: "gcc",
    title: {
      en: "Private villas in the Philippines, for families and couples who value privacy.",
      ar: "فلل خاصة في الفلبين، للعائلات والأزواج الذين يقدّرون الخصوصية.",
    },
    kicker: {
      en: "Private villas",
      ar: "الفلل الخاصة",
    },
    intro: {
      en: "Your own pool, your own stretch of beach, staff who know your routine by day two. We match villas to your family or your honeymoon, connect them with private transfers, and keep our team on WhatsApp throughout.",
      ar: "مسبحكم الخاص، وشاطئكم الخاص، وطاقم خدمة يعرف عاداتكم منذ اليوم الثاني. نختار الفلل بما يناسب عائلتكم أو شهر عسلكم، ونربط بينها بتنقلات خاصة، ويبقى فريقنا متاحاً عبر واتساب طوال الرحلة.",
    },
    points: {
      en: [
        "Villas with private pools and beach access, chosen for privacy and layout",
        "Multi-bedroom options for families travelling together",
        "Private airport and boat transfers at every step",
        "Halal dining arranged where available, with honest notes where options are limited",
        "Concierge support from our team on WhatsApp, before and during the trip",
      ],
      ar: [
        "فلل بمسابح خاصة ووصول مباشر إلى الشاطئ، نختارها للخصوصية وحسن التصميم",
        "خيارات متعددة الغرف للعائلات التي تسافر معاً",
        "تنقلات خاصة من المطار وبالقارب في كل محطة",
        "طعام حلال نرتّبه حيث يتوفر، مع ملاحظات صريحة حين تكون الخيارات محدودة",
        "خدمة كونسيرج من فريقنا عبر واتساب قبل الرحلة وخلالها",
      ],
    },
    journeys: ["honeymoon-inside-philippines", "palawan-deep-dive", "ten-days-two-islands"],
    destinations: ["palawan", "el-nido", "boracay", "siargao", "bohol"],
    photo: {
      alt: {
        en: "A private villa with a pool among palms, opening onto a quiet beach",
        ar: "فيلا خاصة بمسبح بين أشجار النخيل تطل على شاطئ هادئ",
      },
      brief:
        "Late afternoon at a private pool villa in Palawan or Boracay. Pool in foreground, open living pavilion, palms and quiet beach beyond. No people, no branding. Privacy is the message: no neighbouring villas in frame.",
      tone: "sand",
    },
    faqs: [
      {
        q: { en: "Are the villas suitable for families?", ar: "هل الفلل مناسبة للعائلات؟" },
        a: {
          en: "Many are. We look at bedroom layout, pool safety, beach conditions and kitchen flexibility before recommending a villa to a family.",
          ar: "كثير منها مناسب. ننظر في توزيع غرف النوم، وسلامة المسبح، وحالة الشاطئ، ومرونة المطبخ قبل أن نرشّح أي فيلا لعائلة.",
        },
      },
      {
        q: { en: "Can we have halal food in the villa?", ar: "هل يمكن توفير طعام حلال في الفيلا؟" },
        a: {
          en: "We arrange halal dining where available and tell you honestly where options are limited. Some villas can source halal ingredients with notice; on smaller islands it is harder, and we say so before you book.",
          ar: "نرتّب الطعام الحلال حيث يتوفر، ونخبركم بصراحة أين تكون الخيارات محدودة. بعض الفلل تستطيع توفير مكونات حلال عند الإشعار المسبق، أما في الجزر الصغيرة فالأمر أصعب، ونخبركم بذلك قبل الحجز.",
        },
      },
      {
        q: { en: "How do we get there from the UAE?", ar: "كيف نصل إلى هناك من الإمارات؟" },
        a: {
          en: "There are direct flights from the UAE to Manila, typically around nine hours, then a short domestic flight and a private transfer. Schedules change, so we confirm the best connection when we plan.",
          ar: "توجد رحلات مباشرة من الإمارات إلى مانيلا تستغرق عادةً نحو تسع ساعات، ثم رحلة داخلية قصيرة وتنقل خاص. الجداول تتغير، لذا نؤكد أفضل اتصال عند التخطيط.",
        },
      },
    ],
    prefill: { who: "family", style: "signature", duration: "11-14", interest: "luxury,beaches,family" },
    seo: {
      title: {
        en: "Private Villas in the Philippines | Inside Philippines",
        ar: "فلل خاصة في الفلبين | Inside Philippines",
      },
      description: {
        en: "Private pool villas in the Philippines for families and couples: privacy, private transfers, halal dining where available and WhatsApp concierge support.",
        ar: "فلل خاصة في الفلبين بمسابح خاصة للعائلات والأزواج: خصوصية، وتنقلات خاصة، وطعام حلال حيث يتوفر، ودعم كونسيرج عبر واتساب.",
      },
    },
  },
  {
    slug: "private-boats",
    market: "gcc",
    title: {
      en: "Your own boat, your own lagoons, your own timing.",
      ar: "قاربكم الخاص، وبحيراتكم الخاصة، وتوقيتكم الخاص.",
    },
    kicker: {
      en: "Private boats & charters",
      ar: "القوارب الخاصة والرحلات البحرية",
    },
    intro: {
      en: "In El Nido, Coron and Siargao, the difference between a crowded day and a quiet one is usually two hours and a private boat. Your crew leaves when you want, goes where the others aren't, and serves lunch on board or on an empty beach.",
      ar: "في إل نيدو وكورون وسيارغاو، الفرق بين يوم مزدحم ويوم هادئ هو عادةً ساعتان وقارب خاص. ينطلق طاقمكم متى شئتم، ويتجه حيث لا يوجد الآخرون، ويقدّم الغداء على متن القارب أو على شاطئ خالٍ.",
    },
    points: {
      en: [
        "Private bancas and speedboats with an experienced crew",
        "Early departures to reach the famous lagoons before the shared tours",
        "Lunch on board or on a quiet beach, with halal menus where available",
        "Life jackets in children's sizes and shaded seating as standard requests",
        "Multi-day island-to-island charters when the season allows",
      ],
      ar: [
        "قوارب بانكا تقليدية وقوارب سريعة خاصة بطاقم متمرّس",
        "انطلاق مبكر للوصول إلى البحيرات الشهيرة قبل الجولات الجماعية",
        "غداء على القارب أو على شاطئ هادئ، مع قوائم حلال حيث تتوفر",
        "سترات نجاة بمقاسات الأطفال ومقاعد مظللة ضمن طلباتنا المعتادة",
        "رحلات بحرية لعدة أيام بين الجزر حين يسمح الموسم",
      ],
    },
    journeys: ["palawan-deep-dive", "island-classics", "honeymoon-inside-philippines"],
    destinations: ["el-nido", "coron", "siargao", "palawan"],
    photo: {
      alt: {
        en: "A private banca anchored alone in a lagoon in the early morning",
        ar: "قارب بانكا خاص راسٍ وحده في بحيرة في الصباح الباكر",
      },
      brief:
        "El Nido or Coron, 7am. One private banca with shade canopy, crew setting out cushions, empty lagoon. Calm, discreet, premium without showing off.",
      tone: "lagoon",
    },
    faqs: [
      {
        q: { en: "Is a private boat worth it?", ar: "هل يستحق القارب الخاص تكلفته؟" },
        a: {
          en: "For families and couples, almost always. You choose the start time, the route and how long you stay at each stop, and you avoid the busiest lagoons at peak hours.",
          ar: "للعائلات والأزواج، نعم في الغالب. تختارون وقت الانطلاق والمسار ومدة البقاء في كل محطة، وتتجنبون البحيرات الأكثر ازدحاماً في أوقات الذروة.",
        },
      },
      {
        q: { en: "Is it safe for children?", ar: "هل هو آمن للأطفال؟" },
        a: {
          en: "We work with crews we know, request children's life jackets and choose sheltered routes. Boats only sail when the coast guard allows it, and we plan alternatives for rough days.",
          ar: "نعمل مع طواقم نعرفها، ونطلب سترات نجاة للأطفال، ونختار مسارات محمية. لا تبحر القوارب إلا بإذن خفر السواحل، ونجهّز بدائل للأيام ذات البحر الهائج.",
        },
      },
      {
        q: { en: "When is the sea calmest?", ar: "متى يكون البحر أهدأ؟" },
        a: {
          en: "In Palawan, generally November to May. In Siargao, March to October. We match boat days to the season and keep flexible days in the plan.",
          ar: "في بالاوان عادةً من نوفمبر إلى مايو، وفي سيارغاو من مارس إلى أكتوبر. ننسّق أيام القارب مع الموسم ونترك أياماً مرنة في البرنامج.",
        },
      },
    ],
    prefill: { style: "premium", duration: "7-10", interest: "beaches,luxury,family" },
    seo: {
      title: {
        en: "Private Boat Tours in the Philippines | Inside Philippines",
        ar: "رحلات قوارب خاصة في الفلبين | Inside Philippines",
      },
      description: {
        en: "Private boats in El Nido, Coron and Siargao: early starts, quiet lagoons, lunch on board and family-safe crews. Planned with WhatsApp concierge support.",
        ar: "قوارب خاصة في إل نيدو وكورون وسيارغاو: انطلاق مبكر، وبحيرات هادئة، وغداء على متن القارب، وطاقم آمن للعائلات، مع دعم عبر واتساب.",
      },
    },
  },
  {
    slug: "luxury-island-escapes",
    market: "gcc",
    title: {
      en: "Luxury island escapes in the Philippines, arranged end to end.",
      ar: "رحلات فاخرة إلى جزر الفلبين، مرتّبة من البداية إلى النهاية.",
    },
    kicker: {
      en: "Signature journeys from the UAE",
      ar: "رحلات سيغنتشر من الإمارات",
    },
    intro: {
      en: "High-end island resorts, private transfers from the moment you land, and a team in the Philippines who plans every connection. Direct flights from the UAE to Manila take around nine hours, and we handle everything after that.",
      ar: "منتجعات جزر راقية، وتنقلات خاصة منذ لحظة الوصول، وفريق داخل الفلبين يخطط لكل اتصال. تستغرق الرحلات المباشرة من الإمارات إلى مانيلا نحو تسع ساعات، ونتولى كل ما يأتي بعدها.",
    },
    points: {
      en: [
        "Island resorts and villas chosen for comfort, privacy and service",
        "Private transfers throughout, with charters where they save a day",
        "Family-friendly routes with short hops and connecting rooms",
        "Halal dining arranged where available; we tell you honestly where it's limited",
        "Concierge support on WhatsApp from planning to departure",
      ],
      ar: [
        "منتجعات جزر وفلل نختارها للراحة والخصوصية وجودة الخدمة",
        "تنقلات خاصة طوال الرحلة، وطيران خاص حين يوفّر يوماً",
        "مسارات مناسبة للعائلات بتنقلات قصيرة وغرف متصلة",
        "طعام حلال نرتّبه حيث يتوفر، ونخبركم بصراحة أين يكون محدوداً",
        "خدمة كونسيرج عبر واتساب من التخطيط حتى المغادرة",
      ],
    },
    journeys: ["honeymoon-inside-philippines", "the-grand-philippines", "palawan-deep-dive"],
    destinations: ["palawan", "el-nido", "coron", "boracay", "cebu"],
    photo: {
      alt: {
        en: "A resort jetty stretching into calm turquoise water at sunset",
        ar: "رصيف منتجع يمتد إلى مياه فيروزية هادئة عند الغروب",
      },
      brief:
        "Sunset at an island resort jetty in northern Palawan. Long timber jetty, lanterns, a private boat arriving. Calm, warm, unbranded.",
      tone: "dusk",
    },
    faqs: [
      {
        q: { en: "How long is the flight from Dubai or Abu Dhabi?", ar: "كم تستغرق الرحلة من دبي أو أبوظبي؟" },
        a: {
          en: "Direct flights from the UAE to Manila typically take around nine hours. Schedules and routes change, so we confirm the best options for your dates.",
          ar: "تستغرق الرحلات المباشرة من الإمارات إلى مانيلا عادةً نحو تسع ساعات. الجداول والمسارات تتغير، لذا نؤكد أفضل الخيارات لمواعيدكم.",
        },
      },
      {
        q: { en: "Do you work with high-end resorts only?", ar: "هل تتعاملون مع المنتجعات الراقية فقط؟" },
        a: {
          en: "For these journeys, yes: Premium and Signature tiers. We recommend only places we know, and we'll tell you when a remote island has just one option worth staying at.",
          ar: "في هذه الرحلات نعم، ضمن مستويي بريميوم وسيغنتشر. لا نرشّح إلا أماكن نعرفها، ونخبركم حين لا يكون في جزيرة نائية إلا خيار واحد يستحق الإقامة.",
        },
      },
      {
        q: { en: "Can you help with prayer times and quiet spaces?", ar: "هل يمكنكم المساعدة في أوقات الصلاة والأماكن الهادئة؟" },
        a: {
          en: "Yes. We plan days around your routine, and private villas and transfers make it easier. Mosques are found in Manila and some cities; on smaller islands, your villa is usually the best option.",
          ar: "نعم. نخطط الأيام بما يناسب روتينكم، والفلل والتنقلات الخاصة تسهّل ذلك. توجد مساجد في مانيلا وبعض المدن، أما في الجزر الصغيرة فالفيلا عادةً هي الخيار الأنسب.",
        },
      },
    ],
    prefill: { style: "signature", duration: "11-14", interest: "luxury,beaches,family" },
    seo: {
      title: {
        en: "Luxury Philippines Islands from the UAE | Inside Philippines",
        ar: "رحلة فاخرة الى الفلبين من الإمارات",
      },
      description: {
        en: "Luxury island escapes in the Philippines from the UAE: high-end resorts, private transfers, family routes, halal where available, WhatsApp support.",
        ar: "رحلة فاخرة إلى الفلبين من الإمارات: منتجعات جزر راقية، وتنقلات خاصة، ومسارات للعائلات، وطعام حلال حيث يتوفر، ودعم عبر واتساب.",
      },
    },
  },
  {
    slug: "wellness-journeys",
    market: "gcc",
    title: {
      en: "Wellness journeys in the Philippines: slow mornings, warm sea, nothing to organise.",
      ar: "رحلات العافية في الفلبين: صباحات هادئة، وبحر دافئ، ولا شيء عليكم ترتيبه.",
    },
    kicker: {
      en: "Inside Wellness",
      ar: "Inside Wellness",
    },
    intro: {
      en: "Traditional hilot massage with warm coconut oil, morning yoga by the water, and resorts designed for quiet. We plan wellness journeys with fewer moves, longer stays and private transfers, so the rest actually happens.",
      ar: "تدليك الهيلوت التقليدي بزيت جوز الهند الدافئ، ويوغا صباحية على حافة الماء، ومنتجعات صُمّمت للهدوء. نخطط رحلات العافية بتنقلات أقل وإقامات أطول وتنقلات خاصة، حتى تتحقق الراحة فعلاً.",
    },
    points: {
      en: [
        "Two calm bases instead of four busy ones",
        "Spa-led resorts and private treatment pavilions",
        "Hilot, the Filipino healing massage, from experienced therapists",
        "Private yoga or breathwork sessions, at your level",
        "Healthy menus, and halal dining arranged where available",
      ],
      ar: [
        "محطتان هادئتان بدلاً من أربع محطات مزدحمة",
        "منتجعات تتمحور حول السبا وأجنحة علاج خاصة",
        "الهيلوت، التدليك الفلبيني التقليدي، على أيدي معالجين متمرسين",
        "جلسات يوغا أو تمارين تنفس خاصة بما يناسب مستواكم",
        "قوائم طعام صحية، وطعام حلال نرتّبه حيث يتوفر",
      ],
    },
    journeys: ["the-slow-philippines", "honeymoon-inside-philippines", "surf-and-islands"],
    destinations: ["siargao", "palawan", "bohol", "siquijor", "dumaguete"],
    photo: {
      alt: {
        en: "Banana leaves and coconut oil prepared for a hilot massage in an open pavilion",
        ar: "أوراق الموز وزيت جوز الهند معدّة لجلسة تدليك الهيلوت في جناح مفتوح",
      },
      brief:
        "Detail shot in an open-air treatment pavilion: banana leaves, a bowl of warm coconut oil, linen, morning light, sea blurred in the background. No people or only hands.",
      tone: "jungle",
    },
    faqs: [
      {
        q: { en: "What is hilot?", ar: "ما هو الهيلوت؟" },
        a: {
          en: "Hilot is the traditional Filipino healing massage, using warm coconut oil and often banana leaves. It's gentle but thorough, and a good introduction to local wellness.",
          ar: "الهيلوت هو التدليك العلاجي الفلبيني التقليدي، ويُستخدم فيه زيت جوز الهند الدافئ وغالباً أوراق الموز. لطيف لكنه عميق، ومدخل جميل إلى العافية المحلية.",
        },
      },
      {
        q: { en: "Can therapists be same-gender?", ar: "هل يمكن أن يكون المعالج من نفس الجنس؟" },
        a: {
          en: "In most resorts, yes, with notice. We request it in advance and confirm before you arrive.",
          ar: "في معظم المنتجعات نعم، مع إشعار مسبق. نطلب ذلك مقدماً ونؤكده قبل وصولكم.",
        },
      },
      {
        q: { en: "Is it suitable as a family trip?", ar: "هل تناسب الرحلة العائلات؟" },
        a: {
          en: "Yes. We choose resorts where adults can rest while children are looked after, with calm beaches and short transfers.",
          ar: "نعم. نختار منتجعات يرتاح فيها الكبار بينما يحظى الأطفال بالرعاية، مع شواطئ هادئة وتنقلات قصيرة.",
        },
      },
    ],
    prefill: { style: "premium", duration: "7-10", interest: "wellness,luxury,beaches" },
    seo: {
      title: {
        en: "Wellness Retreats in the Philippines | Inside Philippines",
        ar: "رحلات استجمام وعافية في الفلبين",
      },
      description: {
        en: "Wellness journeys in the Philippines: spa resorts, traditional hilot massage, private yoga and calm islands, with private transfers and WhatsApp support.",
        ar: "رحلات استجمام وعافية في الفلبين: منتجعات سبا، وتدليك الهيلوت التقليدي، ويوغا خاصة، وجزر هادئة، مع تنقلات خاصة ودعم عبر واتساب.",
      },
    },
  },
  // ─────────────────────────────────────────────────────── GROUPS & PACKAGES
  {
    slug: "corporate-travel",
    market: "global",
    title: {
      en: "Corporate travel, retreats and team building in the Philippines.",
      fr: "Voyages d'entreprise, séminaires et team building aux Philippines.",
      es: "Viajes de empresa, retiros y team building en Filipinas.",
      ru: "Корпоративные поездки, ретриты и тимбилдинг на Филиппинах.",
      ar: "رحلات الشركات والخلوات وبناء الفرق في الفلبين.",
    },
    kicker: {
      en: "Inside Corporate",
      fr: "Inside Corporate",
      es: "Inside Corporate",
      ru: "Inside Corporate",
      ar: "Inside Corporate",
    },
    intro: {
      en: "An executive retreat on a quiet island, an incentive trip to Boracay or Palawan, a team offsite with boats, beaches and a long dinner by the sea. We plan every business journey with precision and a personal touch, so your people come home closer, and you never have to chase a single booking.",
      fr: "Un séminaire de direction sur une île tranquille, un voyage incentive à Boracay ou Palawan, un offsite d'équipe entre bateaux, plages et long dîner face à la mer. Nous organisons chaque voyage d'affaires avec précision et une attention personnelle : vos équipes rentrent plus soudées, et vous n'avez aucune réservation à relancer.",
      es: "Un retiro de dirección en una isla tranquila, un viaje de incentivo a Boracay o Palawan, un offsite de equipo con barcos, playas y una larga cena junto al mar. Organizamos cada viaje de empresa con precisión y un trato personal, para que tu equipo vuelva más unido y tú no tengas que perseguir ni una sola reserva.",
      ru: "Ретрит для руководства на тихом острове, инсентив-поездка на Боракай или Палаван, выездная сессия команды с лодками, пляжами и долгим ужином у моря. Мы организуем каждую деловую поездку точно и с личным вниманием: ваша команда возвращается сплочённее, а вам не нужно контролировать ни одного бронирования.",
      ar: "خلوة للإدارة التنفيذية على جزيرة هادئة، أو رحلة تحفيزية إلى بوراكاي أو بالاوان، أو لقاء للفريق بين القوارب والشواطئ وعشاء طويل على البحر. ننظّم كل رحلة عمل بدقة ولمسة شخصية، ليعود فريقك أكثر ترابطًا دون أن تضطر لمتابعة أي حجز.",
    },
    points: {
      en: [
        "Executive retreats and leadership offsites on quiet islands and in private villas",
        "Incentive trips to Boracay, Palawan, Cebu and Siargao that feel like a reward, not a schedule",
        "Team building the islands are made for: private island hopping, kayaking, cooking with local hosts, beach games",
        "Group logistics handled as one plan: domestic flights, private boats, transfers, rooms and dietary needs",
        "One coordinator for your company before the trip, and our 24/7 WhatsApp line during it",
      ],
      fr: [
        "Séminaires de direction et offsites sur des îles calmes et dans des villas privées",
        "Voyages incentive à Boracay, Palawan, Cebu et Siargao, vécus comme une récompense et non comme un planning",
        "Le team building dont les îles ont le secret : îles en bateau privé, kayak, cuisine avec des hôtes locaux, jeux de plage",
        "Toute la logistique de groupe en un seul plan : vols intérieurs, bateaux privés, transferts, chambres et régimes alimentaires",
        "Un interlocuteur unique pour votre entreprise avant le voyage, et notre ligne WhatsApp 24 h/24 pendant",
      ],
      es: [
        "Retiros de dirección y offsites en islas tranquilas y villas privadas",
        "Viajes de incentivo a Boracay, Palawan, Cebú y Siargao que se viven como un premio, no como una agenda",
        "El team building para el que están hechas las islas: excursiones en barco privado, kayak, cocina con anfitriones locales, juegos en la playa",
        "Toda la logística del grupo en un solo plan: vuelos domésticos, barcos privados, traslados, habitaciones y dietas",
        "Un coordinador para tu empresa antes del viaje, y nuestra línea de WhatsApp 24/7 durante el mismo",
      ],
      ru: [
        "Ретриты для руководства и выездные сессии на тихих островах и в частных виллах",
        "Инсентив-туры на Боракай, Палаван, Себу и Сиаргао — как награда, а не как расписание",
        "Тимбилдинг, для которого созданы острова: частные лодочные туры, каяки, кулинария с местными хозяевами, пляжные игры",
        "Вся логистика группы в одном плане: внутренние перелёты, частные лодки, трансферы, номера и особенности питания",
        "Один координатор для вашей компании до поездки и наша круглосуточная линия WhatsApp во время неё",
      ],
      ar: [
        "خلوات للإدارة التنفيذية ولقاءات خارج المكتب على جزر هادئة وفي فلل خاصة",
        "رحلات تحفيزية إلى بوراكاي وبالاوان وسيبو وسيارغاو تُعاش كمكافأة لا كجدول مزدحم",
        "أنشطة بناء الفريق التي خُلقت لها الجزر: جولات بقوارب خاصة، تجديف، طهي مع مضيفين محليين، ألعاب على الشاطئ",
        "كل تفاصيل المجموعة في خطة واحدة: الطيران الداخلي، القوارب الخاصة، التنقلات، الغرف ومتطلبات الطعام بما فيها الحلال",
        "منسّق واحد لشركتك قبل الرحلة، وخط واتساب على مدار الساعة أثناءها",
      ],
    },
    journeys: ["exclusive-philippines", "luxury-palawan", "palawan-bohol-boracay"],
    destinations: ["boracay", "el-nido", "cebu", "siargao"],
    photo: {
      alt: {
        en: "Thatched villa overlooking the sea at a resort in Boracay",
        fr: "Villa au toit de chaume face à la mer dans un resort de Boracay",
        es: "Villa con techo de paja frente al mar en un resort de Boracay",
        ru: "Вилла под соломенной крышей с видом на море на курорте Боракая",
        ar: "فيلا بسقف من القش تطل على البحر في منتجع ببوراكاي",
      },
      brief: "A group of colleagues on the bow of a private bangka between limestone islands, relaxed and laughing, no logos. Second frame: a long dinner table set on the sand at dusk.",
      tone: "dusk",
    },
    faqs: [
      {
        q: {
          en: "What kinds of corporate trips do you organise?",
          fr: "Quels types de voyages d'entreprise organisez-vous ?",
          es: "¿Qué tipo de viajes de empresa organizáis?",
          ru: "Какие корпоративные поездки вы организуете?",
          ar: "ما أنواع رحلات الشركات التي تنظمونها؟",
        },
        a: {
          en: "Executive retreats, incentive trips, team offsites and team building, and group journeys for companies and associations. Each one is designed around your goals, your dates and the size of your group.",
          fr: "Séminaires de direction, voyages incentive, offsites et team building, ainsi que des voyages de groupe pour entreprises et associations. Chacun est conçu selon vos objectifs, vos dates et la taille de votre groupe.",
          es: "Retiros de dirección, viajes de incentivo, offsites y team building, y viajes de grupo para empresas y asociaciones. Cada uno se diseña según vuestros objetivos, vuestras fechas y el tamaño del grupo.",
          ru: "Ретриты для руководства, инсентив-туры, выездные сессии и тимбилдинг, а также групповые поездки для компаний и ассоциаций. Каждая программа строится под ваши цели, даты и размер группы.",
          ar: "خلوات للإدارة التنفيذية، ورحلات تحفيزية، ولقاءات وأنشطة لبناء الفريق، ورحلات جماعية للشركات والجمعيات. نصمّم كل رحلة حسب أهدافكم ومواعيدكم وحجم مجموعتكم.",
        },
      },
      {
        q: {
          en: "How far ahead should we plan a group trip?",
          fr: "Combien de temps à l'avance faut-il prévoir un voyage de groupe ?",
          es: "¿Con cuánta antelación conviene planificar un viaje de grupo?",
          ru: "За сколько времени планировать групповую поездку?",
          ar: "كم من الوقت مسبقًا يجب أن نخطط لرحلة جماعية؟",
        },
        a: {
          en: "Ideally three to six months ahead, and earlier for Christmas, Chinese New Year and Holy Week, when island resorts, boats and domestic flights fill up first. Tell us your dates and numbers and we will tell you honestly what is still possible.",
          fr: "Idéalement trois à six mois à l'avance, et plus tôt pour Noël, le Nouvel An chinois et la Semaine sainte, quand les resorts, les bateaux et les vols intérieurs se remplissent en premier. Donnez-nous vos dates et votre effectif : nous vous dirons honnêtement ce qui reste possible.",
          es: "Lo ideal es de tres a seis meses antes, y con más tiempo para Navidad, el Año Nuevo chino y Semana Santa, cuando resorts, barcos y vuelos domésticos se llenan primero. Dinos fechas y número de personas y te diremos con sinceridad qué sigue siendo posible.",
          ru: "В идеале за три–шесть месяцев, а на Рождество, китайский Новый год и Страстную неделю — раньше: в эти даты курорты, лодки и внутренние рейсы заполняются первыми. Назовите даты и число участников, и мы честно скажем, что ещё возможно.",
          ar: "يُفضَّل قبل ثلاثة إلى ستة أشهر، وقبل ذلك في عيد الميلاد ورأس السنة الصينية وأسبوع الآلام، حين تمتلئ المنتجعات والقوارب والرحلات الداخلية أولًا. أخبرونا بالمواعيد والعدد وسنخبركم بصدق بما زال ممكنًا.",
        },
      },
      {
        q: {
          en: "Can you handle dietary needs, including halal?",
          fr: "Gérez-vous les régimes alimentaires, y compris halal ?",
          es: "¿Podéis gestionar dietas especiales, incluida la halal?",
          ru: "Учитываете ли вы особенности питания, включая халяль?",
          ar: "هل تراعون متطلبات الطعام، بما فيها الحلال؟",
        },
        a: {
          en: "Yes. Tell us in advance about halal, vegetarian, allergies or any other needs, and we plan hotels, restaurants and boat lunches around them.",
          fr: "Oui. Indiquez-nous à l'avance les besoins halal, végétariens, allergies ou autres, et nous choisissons hôtels, restaurants et déjeuners en bateau en conséquence.",
          es: "Sí. Avísanos con antelación de necesidades halal, vegetarianas, alergias o cualquier otra, y planificamos hoteles, restaurantes y comidas en barco en función de ellas.",
          ru: "Да. Сообщите заранее о халяльном или вегетарианском питании, аллергиях и других потребностях, и мы подберём отели, рестораны и обеды на лодках с их учётом.",
          ar: "نعم. أخبرونا مسبقًا بمتطلبات الحلال أو النباتي أو الحساسية أو أي احتياجات أخرى، وسنخطط الفنادق والمطاعم ووجبات القوارب على أساسها.",
        },
      },
    ],
    prefill: { who: "group", interest: "luxury,beaches", duration: "7-10" },
    seo: {
      title: {
        en: "Corporate Travel & Retreats Philippines | Inside Philippines",
        fr: "Voyage d'entreprise Philippines : séminaire et incentive",
        es: "Viajes de empresa a Filipinas: incentivos y retiros",
        ru: "Корпоративные туры на Филиппины: инсентив, тимбилдинг",
        ar: "رحلات الشركات إلى الفلبين: تحفيز وبناء فريق",
      },
      description: {
        en: "Corporate travel in the Philippines: executive retreats, incentive trips to Boracay and Palawan, team building and group logistics, planned by a local team.",
        fr: "Voyages d'entreprise aux Philippines : séminaires, incentives à Boracay et Palawan, team building et logistique de groupe, organisés par une équipe sur place.",
        es: "Viajes de empresa a Filipinas: retiros de dirección, incentivos a Boracay y Palawan, team building y logística de grupos, organizados por un equipo local.",
        ru: "Корпоративные поездки на Филиппины: ретриты, инсентив-туры на Боракай и Палаван, тимбилдинг и логистика групп от местной команды.",
        ar: "رحلات الشركات إلى الفلبين: خلوات تنفيذية، ورحلات تحفيزية إلى بوراكاي وبالاوان، وبناء الفرق وتنظيم المجموعات بفريق محلي.",
      },
    },
  },
  {
    slug: "philippines-tour-packages",
    market: "global",
    title: {
      en: "Philippines tour packages, made to measure.",
      fr: "Circuits aux Philippines, sur mesure.",
      es: "Viajes organizados a Filipinas, a tu medida.",
      ru: "Туры на Филиппины, собранные под вас.",
      ar: "باقات سياحية إلى الفلبين، مصمّمة على مقاسك.",
    },
    kicker: {
      en: "Inside Philippines",
      fr: "Inside Philippines",
      es: "Inside Philippines",
      ru: "Inside Philippines",
      ar: "Inside Philippines",
    },
    intro: {
      en: "Start from one of our 22 sample journeys, from a week in Palawan to three weeks across the islands, then change anything: the islands, the hotels, the pace, the dates. Flights between islands, transfers, boats and insurance come together as one plan.",
      fr: "Partez de l'un de nos 22 itinéraires types, d'une semaine à Palawan à trois semaines à travers l'archipel, puis changez ce que vous voulez : les îles, les hôtels, le rythme, les dates. Vols intérieurs, transferts, bateaux et assurance réunis en un seul plan.",
      es: "Parte de uno de nuestros 22 itinerarios de ejemplo, desde una semana en Palawan hasta tres semanas por todo el archipiélago, y cambia lo que quieras: las islas, los hoteles, el ritmo, las fechas. Vuelos entre islas, traslados, barcos y seguro, todo en un solo plan.",
      ru: "Возьмите за основу один из 22 примерных маршрутов — от недели на Палаване до трёх недель по всему архипелагу — и измените что угодно: острова, отели, темп, даты. Перелёты между островами, трансферы, лодки и страховка — в одном плане.",
      ar: "ابدأ من أحد مساراتنا النموذجية الـ22، من أسبوع في بالاوان إلى ثلاثة أسابيع بين الجزر، ثم غيّر ما تشاء: الجزر والفنادق والإيقاع والمواعيد. الطيران بين الجزر والتنقلات والقوارب والتأمين في خطة واحدة.",
    },
    points: {
      en: [
        "22 sample itineraries from 7 to 21 days, each adaptable to you",
        "Four comfort levels, from charming 3★ hotels to private-island villas",
        "Domestic flights, ferries, private boats and transfers included in one plan",
        "Travel insurance on every trip, with up to €2,000 of cancellation cover",
        "Private or shared tours, with Spanish-speaking guides available",
      ],
      fr: [
        "22 itinéraires types de 7 à 21 jours, tous adaptables",
        "Quatre niveaux de confort, de l'hôtel 3★ de charme à la villa sur île privée",
        "Vols intérieurs, ferrys, bateaux privés et transferts inclus dans un seul plan",
        "Assurance voyage sur chaque voyage, avec une garantie annulation jusqu'à 2 000 €",
        "Excursions privées ou partagées, avec des guides hispanophones disponibles",
      ],
      es: [
        "22 itinerarios de ejemplo de 7 a 21 días, todos adaptables",
        "Cuatro niveles de confort, del hotel 3★ con encanto a la villa en isla privada",
        "Vuelos domésticos, ferris, barcos privados y traslados incluidos en un solo plan",
        "Seguro de viaje en todos los viajes, con cobertura de cancelación de hasta 2.000 €",
        "Excursiones privadas o compartidas, con guías de habla hispana disponibles",
      ],
      ru: [
        "22 примерных маршрута от 7 до 21 дня, каждый можно изменить",
        "Четыре уровня комфорта — от уютных отелей 3★ до вилл на частных островах",
        "Внутренние перелёты, паромы, частные лодки и трансферы в одном плане",
        "Страховка в каждой поездке с покрытием отмены до 2000 €",
        "Индивидуальные или групповые экскурсии; есть испаноговорящие гиды",
      ],
      ar: [
        "22 مسارًا نموذجيًا من 7 إلى 21 يومًا، وكلها قابلة للتعديل",
        "أربعة مستويات من الراحة، من فنادق 3 نجوم مميزة إلى فلل على جزر خاصة",
        "الطيران الداخلي والعبّارات والقوارب الخاصة والتنقلات في خطة واحدة",
        "تأمين سفر في كل رحلة مع تغطية للإلغاء تصل إلى 2,000 يورو",
        "جولات خاصة أو مشتركة، مع توفر مرشدين يتحدثون الإسبانية",
      ],
    },
    journeys: ["island-classics", "essential-palawan", "the-grand-philippines"],
    destinations: ["palawan", "el-nido", "siargao", "bohol"],
    photo: {
      alt: {
        en: "Bangkas below limestone cliffs in El Nido, Palawan, seen from above",
        fr: "Bangkas au pied des falaises calcaires d'El Nido, Palawan, vues du ciel",
        es: "Bancas bajo los acantilados de roca caliza de El Nido, Palawan, vistas desde el aire",
        ru: "Лодки-банки у известняковых скал Эль-Нидо на Палаване, вид сверху",
        ar: "قوارب بانكا أسفل منحدرات الحجر الجيري في إل نيدو، بالاوان، من الأعلى",
      },
      brief: "Aerial of bangkas below limestone cliffs, El Nido.",
      tone: "lagoon",
    },
    faqs: [
      {
        q: {
          en: "Are your tour packages fixed?",
          fr: "Vos circuits sont-ils fixes ?",
          es: "¿Vuestros paquetes son cerrados?",
          ru: "Ваши туры фиксированные?",
          ar: "هل باقاتكم ثابتة؟",
        },
        a: {
          en: "No. Our journeys are starting points. We adapt the islands, hotels, length and pace to you, and the price follows the choices you make.",
          fr: "Non. Nos voyages sont des points de départ. Nous adaptons les îles, les hôtels, la durée et le rythme, et le prix suit vos choix.",
          es: "No. Nuestros viajes son puntos de partida. Adaptamos las islas, los hoteles, la duración y el ritmo, y el precio sigue a tus elecciones.",
          ru: "Нет. Наши маршруты — это отправная точка. Мы подстраиваем острова, отели, длительность и темп под вас, а цена зависит от вашего выбора.",
          ar: "لا. رحلاتنا نقطة انطلاق. نعدّل الجزر والفنادق والمدة والإيقاع حسبك، والسعر يتبع اختياراتك.",
        },
      },
      {
        q: {
          en: "Are international flights included?",
          fr: "Les vols internationaux sont-ils inclus ?",
          es: "¿Están incluidos los vuelos internacionales?",
          ru: "Включены ли международные перелёты?",
          ar: "هل الرحلات الدولية مشمولة؟",
        },
        a: {
          en: "Our journeys include domestic flights, ferries, boats and transfers inside the Philippines. We help you time your international flights so the connections work.",
          fr: "Nos voyages incluent les vols intérieurs, ferrys, bateaux et transferts aux Philippines. Nous vous aidons à caler vos vols internationaux pour que les correspondances fonctionnent.",
          es: "Nuestros viajes incluyen vuelos domésticos, ferris, barcos y traslados dentro de Filipinas. Te ayudamos a cuadrar los vuelos internacionales para que las conexiones funcionen.",
          ru: "В наши маршруты входят внутренние перелёты, паромы, лодки и трансферы по Филиппинам. Мы поможем подобрать международные рейсы так, чтобы стыковки работали.",
          ar: "تشمل رحلاتنا الطيران الداخلي والعبّارات والقوارب والتنقلات داخل الفلبين، ونساعدك في توقيت رحلاتك الدولية لتنجح الوصلات.",
        },
      },
    ],
    prefill: { duration: "11-14" },
    seo: {
      title: {
        en: "Philippines Tour Packages, Tailor-Made | Inside Philippines",
        fr: "Circuit Philippines sur mesure : voyages organisés",
        es: "Viajes a Filipinas a medida: circuitos y paquetes",
        ru: "Туры на Филиппины: индивидуальные программы",
        ar: "باقات سياحية إلى الفلبين حسب الطلب",
      },
      description: {
        en: "Tailor-made Philippines tour packages from 7 to 21 days: Palawan, Siargao, Bohol and more, with domestic flights, boats, transfers and insurance in one plan.",
        fr: "Circuits sur mesure aux Philippines de 7 à 21 jours : Palawan, Siargao, Bohol et plus, avec vols intérieurs, bateaux, transferts et assurance en un seul plan.",
        es: "Viajes a Filipinas a medida de 7 a 21 días: Palawan, Siargao, Bohol y más, con vuelos domésticos, barcos, traslados y seguro en un solo plan.",
        ru: "Индивидуальные туры на Филиппины от 7 до 21 дня: Палаван, Сиаргао, Бохоль и другие острова — перелёты, лодки, трансферы и страховка в одном плане.",
        ar: "باقات سياحية إلى الفلبين حسب الطلب من 7 إلى 21 يومًا: بالاوان وسيارغاو وبوهول وغيرها، مع الطيران الداخلي والقوارب والتنقلات والتأمين.",
      },
    },
  },
];
