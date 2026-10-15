import type { Experience, ExperienceCategory } from "./types";

/**
 * Travel styles ("Inside ___" hubs) and the experience database.
 * Category slugs are fixed: they are referenced by journeys, destinations,
 * landings and the trip builder.
 */

export const experienceCategories: ExperienceCategory[] = [
  {
    slug: "island-escapes",
    title: {
      en: "Island Escapes",
      fr: "Évasions insulaires",
      es: "Escapadas a las islas",
      ru: "Острова",
      ar: "رحلات الجزر",
    },
    short: {
      en: "Limestone lagoons, sandbars at low tide and the boat days that make the Philippines worth the flight.",
      fr: "Lagons de calcaire, bancs de sable à marée basse et journées en bateau : la raison même du voyage aux Philippines.",
      es: "Lagunas de roca caliza, bancos de arena con la marea baja y días en barco: la razón de cruzar medio mundo.",
      ru: "Известняковые лагуны, песчаные косы в отлив и дни на лодке — то, ради чего стоит лететь на Филиппины.",
      ar: "بحيرات بين صخور الحجر الجيري، وألسنة رملية تظهر مع الجزر، وأيام على القارب تجعل الرحلة إلى الفلبين تستحق العناء.",
    },
    body: {
      en: "The Philippines has more than 7,000 islands, and the hard part is not finding a good one. It is choosing three that connect well, in the right order, in the right season. We plan island escapes around flight and ferry schedules that actually run, so you spend your days on the water rather than in departure lounges.\n\nMost first trips pair Palawan (El Nido or Coron) with one Visayan island: Bohol for rivers and reefs, Siargao for a slower surf-town rhythm, or Boracay if you want a long beach with good restaurants and do not mind company. We add private boats where the shared tours get crowded, and we tell you which lagoons are best at 7am.",
    },
    destinations: ["el-nido", "coron", "siargao", "bohol", "boracay", "palawan"],
    photo: {
      alt: {
        en: "A wooden outrigger boat anchored in a green lagoon between limestone cliffs",
        fr: "Une bangka en bois ancrée dans un lagon vert entre des falaises calcaires",
        es: "Una bangka de madera fondeada en una laguna verde entre acantilados de caliza",
        ru: "Деревянная лодка-банка на якоре в зелёной лагуне среди известняковых скал",
        ar: "قارب خشبي تقليدي راسٍ في بحيرة خضراء بين منحدرات من الحجر الجيري",
      },
      brief:
        "Early morning, El Nido or Coron. A single banca at anchor in a lagoon, karst walls on both sides, no other boats. Shot from a low angle on the water or a gentle drone height. Soft light, no people or one swimmer for scale.",
      tone: "lagoon",
    },
  },
  {
    slug: "honeymoons",
    title: {
      en: "Honeymoons",
      fr: "Lunes de miel",
      es: "Lunas de miel",
      ru: "Медовый месяц",
      ar: "شهر العسل",
    },
    short: {
      en: "Private boats, quiet villas and dinners on the sand, planned so the only decision left is which beach first.",
      fr: "Bateaux privés, villas au calme et dîners sur le sable : il ne vous reste qu'à choisir la première plage.",
      es: "Barcos privados, villas tranquilas y cenas en la arena: solo os queda decidir por qué playa empezar.",
      ru: "Частные лодки, тихие виллы и ужин на песке — вам останется только выбрать, с какого пляжа начать.",
      ar: "قوارب خاصة، وفلل هادئة، وعشاء على الرمل؛ نخطط لكل شيء فلا يبقى لكما إلا اختيار الشاطئ الأول.",
    },
    body: {
      en: "A Philippine honeymoon works best with fewer stops and better ones. We usually suggest two islands over 10 to 14 nights: one with drama (Palawan's lagoons and limestone) and one to slow down completely, often a villa with its own stretch of beach. Every transfer between them is private, and we time flights so you never arrive after dark on a small island.\n\nThe details are where it shows. A private banca that leaves before the shared tours, a table set on a sandbar as the tide goes out, a spa afternoon on the day after a long flight. We also tell you what to skip: the crowded lagoons at midday, the resorts that photograph better than they feel.",
      fr: "Une lune de miel aux Philippines se réussit avec moins d'étapes, mais mieux choisies. Nous proposons généralement deux îles sur 10 à 14 nuits : l'une spectaculaire (les lagons et falaises de Palawan), l'autre pour ralentir complètement, souvent une villa avec sa propre plage. Tous les transferts sont privés, et nous calons les vols pour que vous n'arriviez jamais de nuit sur une petite île.\n\nC'est dans les détails que tout se joue. Une bangka privée qui part avant les excursions collectives, une table dressée sur un banc de sable à marée descendante, un après-midi au spa le lendemain du long vol. Nous vous disons aussi ce qu'il vaut mieux éviter : les lagons bondés à midi, les hôtels plus beaux en photo qu'en vrai.",
      es: "Una luna de miel en Filipinas funciona mejor con menos paradas y mejor elegidas. Solemos proponer dos islas en 10 a 14 noches: una espectacular (las lagunas y la caliza de Palawan) y otra para bajar el ritmo del todo, a menudo una villa con su propio tramo de playa. Todos los traslados son privados y ajustamos los vuelos para que nunca lleguéis de noche a una isla pequeña.\n\nLa diferencia está en los detalles. Una bangka privada que sale antes que las excursiones compartidas, una mesa sobre un banco de arena mientras baja la marea, una tarde de spa al día siguiente del vuelo largo. Y también os decimos qué evitar: las lagunas abarrotadas a mediodía y los hoteles que lucen más en foto que en persona.",
      ru: "Медовый месяц на Филиппинах удаётся лучше, когда остановок меньше, но они точнее. Обычно мы предлагаем два острова на 10–14 ночей: один эффектный (лагуны и скалы Палавана), второй — чтобы полностью замедлиться, чаще всего вилла со своим участком пляжа. Все переезды — частные, а рейсы мы подбираем так, чтобы вы не прилетали на маленький остров в темноте.\n\nВсё решают детали. Частная банка, которая выходит раньше групповых туров, стол на песчаной косе во время отлива, день в спа после долгого перелёта. И мы честно скажем, что пропустить: переполненные лагуны в полдень и отели, которые на фото лучше, чем в жизни.",
      ar: "ينجح شهر العسل في الفلبين أكثر حين تقلّ المحطات وتُختار بعناية. نقترح عادةً جزيرتين خلال 10 إلى 14 ليلة: واحدة بمناظر مذهلة (بحيرات بالاوان وصخورها الكلسية)، وأخرى للاسترخاء التام، وغالباً ما تكون فيلا بشاطئ خاص بها. جميع التنقلات بينهما خاصة، ونرتّب الرحلات الجوية بحيث لا تصلان إلى جزيرة صغيرة بعد حلول الظلام.\n\nالفرق الحقيقي في التفاصيل: قارب خاص ينطلق قبل الجولات الجماعية، وطاولة عشاء على لسان رملي مع انحسار المد، وجلسة سبا في اليوم التالي للرحلة الطويلة. ونخبركما أيضاً بما يجدر تجنّبه: البحيرات المزدحمة وقت الظهيرة، والمنتجعات التي تبدو في الصور أجمل مما هي عليه في الواقع.",
    },
    destinations: ["el-nido", "coron", "palawan", "siargao", "bohol", "boracay"],
    market: "gcc",
    photo: {
      alt: {
        en: "A table for two set on a sandbar at sunset, the tide going out",
        fr: "Une table pour deux dressée sur un banc de sable au coucher du soleil, à marée descendante",
        es: "Una mesa para dos sobre un banco de arena al atardecer, con la marea bajando",
        ru: "Стол на двоих на песчаной косе на закате, во время отлива",
        ar: "طاولة لشخصين على لسان رملي عند الغروب مع انحسار المد",
      },
      brief:
        "Golden hour on a Palawan sandbar. A simple, well-dressed table for two, lanterns not yet lit, a banca waiting in the shallows. Couple optional and seen from behind or at distance. No rose petals, no heart shapes.",
      tone: "dusk",
    },
  },
  {
    slug: "luxury",
    title: {
      en: "Luxury",
      fr: "Luxe",
      es: "Lujo",
      ru: "Люкс",
      ar: "الفخامة",
    },
    short: {
      en: "Private-island resorts, villas with staff, boats on standby and charter flights when they save a day.",
      fr: "Resorts sur îles privées, villas avec personnel, bateaux à disposition et vols charter quand ils font gagner une journée.",
      es: "Resorts en islas privadas, villas con personal, barcos a disposición y vuelos chárter cuando ahorran un día.",
      ru: "Курорты на частных островах, виллы с персоналом, лодка в вашем распоряжении и чартер, когда он экономит день.",
      ar: "منتجعات على جزر خاصة، وفلل بطاقم خدمة، وقوارب جاهزة متى شئتم، ورحلات طيران خاصة حين توفّر عليكم يوماً كاملاً.",
    },
    body: {
      en: "Luxury in the Philippines is less about marble lobbies and more about access: a resort that owns its island, a boat and crew that wait for you, a seaplane or charter that turns a six-hour transfer into forty minutes. The country's best addresses are small and spread out, and getting between them smoothly is most of the work.\n\nWe plan Premium and Signature journeys with private transfers door to door, guides chosen for the guest (not the rota), and someone on our team reachable throughout your trip. We are also straightforward about limits: some remote islands have one good place to stay, and in typhoon season we would rather move you than leave you waiting for a boat.",
      fr: "Aux Philippines, le luxe tient moins aux halls en marbre qu'à l'accès : un resort propriétaire de son île, un bateau et un équipage qui vous attendent, un hydravion ou un vol charter qui transforme six heures de transfert en quarante minutes. Les plus belles adresses du pays sont petites et dispersées ; les relier sans accroc, c'est l'essentiel du travail.\n\nNous concevons les voyages Premium et Signature avec des transferts privés de porte à porte, des guides choisis pour vous (et non selon un planning) et quelqu'un de notre équipe joignable pendant tout le séjour. Nous sommes aussi francs sur les limites : certaines îles reculées n'ont qu'une seule bonne adresse, et en saison des typhons nous préférons vous déplacer plutôt que vous laisser attendre un bateau.",
      es: "En Filipinas, el lujo tiene menos que ver con vestíbulos de mármol y más con el acceso: un resort dueño de su propia isla, un barco y una tripulación que os esperan, un hidroavión o un chárter que convierte seis horas de traslado en cuarenta minutos. Las mejores direcciones del país son pequeñas y están dispersas; conectarlas sin fricciones es la mayor parte del trabajo.\n\nDiseñamos los viajes Premium y Signature con traslados privados puerta a puerta, guías elegidos para cada viajero (no por turno) y alguien de nuestro equipo localizable durante todo el viaje. También somos claros con los límites: algunas islas remotas tienen un único buen alojamiento y, en temporada de tifones, preferimos moveros antes que dejaros esperando un barco.",
      ru: "Роскошь на Филиппинах — это не мраморные лобби, а доступ: курорт, которому принадлежит целый остров, лодка с командой, которая ждёт именно вас, гидросамолёт или чартер, превращающий шесть часов дороги в сорок минут. Лучшие отели страны небольшие и разбросаны по островам, и главная работа — связать их без единой заминки.\n\nМы проектируем путешествия уровня Premium и Signature с частными трансферами от двери до двери, гидами, подобранными под гостя, а не по графику, и человеком из нашей команды на связи всю поездку. И честно говорим об ограничениях: на некоторых отдалённых островах есть только один достойный отель, а в сезон тайфунов мы скорее перестроим маршрут, чем оставим вас ждать лодку.",
      ar: "الفخامة في الفلبين لا تعني بهواً من الرخام بقدر ما تعني سهولة الوصول: منتجع يملك جزيرته بالكامل، وقارب بطاقمه في انتظاركم، وطائرة مائية أو رحلة خاصة تختصر ست ساعات من التنقل إلى أربعين دقيقة. أفضل العناوين في البلاد صغيرة ومتباعدة، والربط بينها بسلاسة هو جوهر عملنا.\n\nنصمّم رحلات بريميوم وسيغنتشر بتنقلات خاصة من الباب إلى الباب، ومرشدين نختارهم بما يناسب الضيف، وفريق متاح للتواصل طوال الرحلة. ونتحدث بصراحة عن الحدود أيضاً: بعض الجزر النائية لا يوجد فيها إلا مكان إقامة واحد جيد، وفي موسم الأعاصير نفضّل تعديل المسار على أن نترككم في انتظار قارب.",
    },
    destinations: ["palawan", "el-nido", "coron", "boracay", "siargao", "cebu"],
    market: "gcc",
    photo: {
      alt: {
        en: "A private villa deck over the water at dusk, with a boat moored below",
        fr: "La terrasse d'une villa privée au-dessus de l'eau au crépuscule, un bateau amarré en contrebas",
        es: "La terraza de una villa privada sobre el agua al anochecer, con un barco amarrado debajo",
        ru: "Терраса частной виллы над водой в сумерках, внизу пришвартована лодка",
        ar: "سطح فيلا خاصة فوق الماء عند الغسق وقارب راسٍ في الأسفل",
      },
      brief:
        "Blue hour at a high-end island villa in northern Palawan. Timber deck, warm interior light, private boat tied up below. Calm, architectural, uncluttered. No logos or recognisable resort signage.",
      tone: "dusk",
    },
  },
  {
    slug: "family",
    title: {
      en: "Family",
      fr: "En famille",
      es: "En familia",
      ru: "С детьми",
      ar: "العائلات",
    },
    short: {
      en: "Shallow lagoons, short transfers and resorts that like children, with the long travel days taken out.",
      fr: "Lagons peu profonds, transferts courts et hôtels qui aiment les enfants, sans les longues journées de route.",
      es: "Lagunas poco profundas, traslados cortos y hoteles a los que les gustan los niños, sin los días eternos de viaje.",
      ru: "Мелкие лагуны, короткие переезды и отели, где рады детям, — без изматывающих дней в дороге.",
      ar: "بحيرات ضحلة، وتنقلات قصيرة، ومنتجعات ترحّب بالأطفال، من دون أيام السفر الطويلة المرهقة.",
    },
    body: {
      en: "The Philippines is easy to love with children: Filipinos are warm with kids, the water is warm, and a boat ride is the best part of any day. The hard part is logistics. A route that looks simple on a map can mean a flight, a van and a boat in one afternoon, which is fine at 35 and miserable at 5.\n\nWe build family trips around fewer bases and shorter hops, usually two or three places over two weeks. We choose resorts with family rooms or connecting villas, calm swimming beaches and kitchens that will cook plain food without a fuss. Private vans have child seats when you ask, private boats go at your pace, and we keep one empty day in every stop.",
      fr: "Les Philippines se prêtent merveilleusement aux voyages en famille : les Philippins adorent les enfants, l'eau est chaude et une sortie en bateau devient le meilleur moment de la journée. La difficulté, c'est la logistique. Un trajet simple sur la carte peut cumuler vol, minibus et bateau en un après-midi : supportable à 35 ans, pénible à 5.\n\nNous construisons les voyages en famille autour de moins d'étapes et de trajets plus courts, généralement deux ou trois lieux en deux semaines. Nous choisissons des hôtels avec chambres familiales ou villas communicantes, des plages calmes pour la baignade et des cuisines prêtes à préparer un repas simple. Les minibus privés ont des sièges enfants sur demande, les bateaux privés vont à votre rythme, et nous laissons un jour libre à chaque étape.",
      es: "Filipinas es muy fácil de disfrutar con niños: los filipinos son cariñosos con ellos, el agua está templada y un paseo en barco es lo mejor del día. Lo difícil es la logística. Una ruta que parece sencilla en el mapa puede suponer vuelo, furgoneta y barco en una sola tarde, algo llevadero a los 35 y agotador a los 5.\n\nDiseñamos los viajes en familia con menos bases y trayectos más cortos, normalmente dos o tres lugares en dos semanas. Elegimos hoteles con habitaciones familiares o villas comunicadas, playas tranquilas para bañarse y cocinas que preparan comida sencilla sin problema. Las furgonetas privadas llevan sillas infantiles si las pedís, los barcos privados van a vuestro ritmo y dejamos un día libre en cada parada.",
      ru: "Филиппины легко полюбить вместе с детьми: местные жители обожают малышей, вода тёплая, а прогулка на лодке — лучшая часть любого дня. Сложность в логистике. Маршрут, простой на карте, может означать перелёт, минивэн и лодку за один день: в 35 лет терпимо, в 5 — мучительно.\n\nМы строим семейные поездки вокруг меньшего числа баз и коротких переездов — обычно два-три места за две недели. Подбираем отели с семейными номерами или смежными виллами, спокойными пляжами для купания и кухней, где без проблем приготовят простую еду. В частных минивэнах по запросу есть детские кресла, частные лодки идут в вашем темпе, а в каждом месте мы оставляем один свободный день.",
      ar: "الفلبين وجهة يسهل أن تحبها العائلات: الفلبينيون ودودون جداً مع الأطفال، والمياه دافئة، وجولة القارب هي أجمل جزء في أي يوم. التحدي الحقيقي هو التنقل؛ فالمسار الذي يبدو بسيطاً على الخريطة قد يعني رحلة طيران ثم سيارة ثم قارباً في عصر واحد، وهذا محتمل للكبار ومتعب جداً للصغار.\n\nلذلك نبني رحلات العائلات على عدد أقل من المحطات وتنقلات أقصر، عادةً مكانان أو ثلاثة خلال أسبوعين. نختار منتجعات فيها غرف عائلية أو فلل متصلة، وشواطئ هادئة للسباحة، ومطابخ تحضّر طعاماً بسيطاً للأطفال من دون تعقيد. السيارات الخاصة مجهزة بمقاعد أطفال عند الطلب، والقوارب الخاصة تسير على إيقاعكم، ونترك يوماً حراً في كل محطة.",
    },
    destinations: ["bohol", "palawan", "el-nido", "boracay", "cebu", "camiguin"],
    market: "gcc",
    photo: {
      alt: {
        en: "Children wading in a shallow, calm lagoon beside a wooden boat",
        fr: "Des enfants marchant dans l'eau peu profonde d'un lagon calme, près d'un bateau en bois",
        es: "Niños caminando por el agua poco profunda de una laguna tranquila junto a un barco de madera",
        ru: "Дети идут по мелководью спокойной лагуны рядом с деревянной лодкой",
        ar: "أطفال يخوضون في مياه بحيرة ضحلة وهادئة بجانب قارب خشبي",
      },
      brief:
        "Mid-morning on a calm beach in Bohol or Palawan. Two children (seen from behind or at distance, no faces needed) wading in knee-deep water, a banca nearby, a parent close. Relaxed and real, not posed.",
      tone: "sand",
    },
  },
  {
    slug: "surf",
    title: {
      en: "Surf",
      fr: "Surf",
      es: "Surf",
      ru: "Сёрфинг",
      ar: "ركوب الأمواج",
    },
    short: {
      en: "Siargao's reef breaks for the experienced, soft beginner waves nearby, and a surf town worth staying in.",
      fr: "Les vagues de récif de Siargao pour les confirmés, des spots doux pour débuter juste à côté, et une ville de surf où l'on a envie de rester.",
      es: "Las olas de arrecife de Siargao para quien ya surfea, olas suaves para aprender muy cerca y un pueblo surfero donde apetece quedarse.",
      ru: "Рифовые волны Сиаргао для опытных, мягкие волны для новичков совсем рядом и сёрф-городок, где хочется задержаться.",
      ar: "أمواج الشعاب في سيارغاو للمحترفين، وأمواج لطيفة للمبتدئين على مقربة، وبلدة لركوب الأمواج تستحق البقاء فيها.",
    },
    body: {
      en: "Siargao is the reason most surfers come. Cloud 9 is a heavy, shallow reef break best left to experienced surfers, but the island has plenty of friendlier waves within a short boat ride or scooter trip, and local coaches who are very good with first-timers.\n\nThe main swell season runs roughly from August to November, when the Pacific sends its best. Outside that, conditions are smaller and often ideal for learning. We pair surf days with island hopping and lagoon trips so non-surfers in the group have just as good a week, and we can extend to quieter breaks on other coasts for those who want to chase waves.",
    },
    destinations: ["siargao", "camiguin", "bohol", "boracay"],
    photo: {
      alt: {
        en: "A surfer paddling out over a reef at sunrise in Siargao",
        fr: "Un surfeur qui rame vers le large au-dessus du récif au lever du soleil à Siargao",
        es: "Un surfista remando sobre el arrecife al amanecer en Siargao",
        ru: "Сёрфер гребёт к волне над рифом на рассвете на Сиаргао",
        ar: "راكب أمواج يجدّف فوق الشعاب عند شروق الشمس في سيارغاو",
      },
      brief:
        "Sunrise in Siargao, shot from the water or a long lens on the boardwalk. One surfer paddling out, clean lines of swell behind, palms on the horizon. Natural, no posing.",
      tone: "reef",
    },
  },
  {
    slug: "diving",
    title: {
      en: "Diving",
      fr: "Plongée",
      es: "Buceo",
      ru: "Дайвинг",
      ar: "الغوص",
    },
    short: {
      en: "Thresher sharks at dawn, sardine shoals off the shore and Second World War wrecks: some of Asia's best diving.",
      fr: "Requins-renards à l'aube, bancs de sardines depuis la plage et épaves de la Seconde Guerre mondiale : parmi les meilleures plongées d'Asie.",
      es: "Tiburones zorro al amanecer, bancos de sardinas desde la orilla y pecios de la Segunda Guerra Mundial: de lo mejor de Asia bajo el agua.",
      ru: "Лисьи акулы на рассвете, косяки сардин у самого берега и затонувшие корабли Второй мировой — одни из лучших погружений в Азии.",
      ar: "أسماك القرش الدرّاس عند الفجر، وأسراب السردين قرب الشاطئ، وحطام سفن من الحرب العالمية الثانية: من أفضل مواقع الغوص في آسيا.",
    },
    body: {
      en: "The Philippines sits at the heart of the Coral Triangle, and the diving matches the reputation. Malapascua is one of very few places where thresher sharks are seen regularly, at a cleaning station shortly after dawn. Moalboal has a sardine shoal you can snorkel from the beach. Coron's bays hold a fleet of Japanese wrecks from 1944.\n\nWe plan dive trips with the logistics in mind: no flying within 18 to 24 hours of your last dive, realistic transfer times between dive towns, and dive centres matched to your level and certification. Non-divers are covered too: most of these places have very good snorkelling and plenty to do on land.",
    },
    destinations: ["malapascua", "moalboal", "coron", "dumaguete", "bohol"],
    photo: {
      alt: {
        en: "A diver beneath a vast, swirling shoal of sardines",
        fr: "Un plongeur sous un immense banc de sardines en spirale",
        es: "Un buceador bajo un enorme banco de sardinas en remolino",
        ru: "Дайвер под огромным кружащимся косяком сардин",
        ar: "غوّاص تحت سرب هائل من أسماك السردين يدور في الماء",
      },
      brief:
        "Moalboal, mid-morning, natural light. A single diver or snorkeller below a dense sardine ball, sun rays through the water. Wide angle, blue tones, no flash.",
      tone: "reef",
    },
  },
  {
    slug: "food-culture",
    title: {
      en: "Food & Culture",
      fr: "Gastronomie & culture",
      es: "Gastronomía y cultura",
      ru: "Еда и культура",
      ar: "المطبخ والثقافة",
    },
    short: {
      en: "Binondo's dumpling houses, Visayan lechon, heirloom rice in the Cordillera: the country tastes better with a guide.",
      fr: "Les raviolis de Binondo, le lechon des Visayas, le riz ancestral de la Cordillère : le pays se goûte mieux avec un guide.",
      es: "Las casas de dumplings de Binondo, el lechón de las Bisayas, el arroz ancestral de la Cordillera: el país sabe mejor con guía.",
      ru: "Пельменные Бинондо, висайский лечон, древние сорта риса Кордильер — страну лучше пробовать с гидом.",
      ar: "مطاعم الزلابية في بينوندو، وأطباق جزر فيساياس، والأرز التراثي في جبال كورديليرا: المطبخ الفلبيني أطيب برفقة مرشد.",
    },
    body: {
      en: "Filipino food is regional, generous and badly underrated abroad. Manila alone runs from Binondo, the world's oldest Chinatown, to a new generation of chefs cooking with Philippine ingredients. In Cebu, lechon is a serious subject. In the Cordillera, rice terraces built by hand grow varieties you will not find anywhere else.\n\nWe add food and culture to most journeys rather than treating it as a separate trip: a market walk on your first morning, a family-run carinderia over a resort buffet, an afternoon with a weaver or a church that survived three centuries of earthquakes. Guides are chosen because they know the subject, not because they speak the script.",
    },
    destinations: ["manila", "cebu", "negros", "banaue", "dumaguete"],
    photo: {
      alt: {
        en: "Steaming dumplings and bowls of noodles on a table in Binondo, Manila",
        fr: "Raviolis fumants et bols de nouilles sur une table à Binondo, Manille",
        es: "Dumplings humeantes y cuencos de fideos sobre una mesa en Binondo, Manila",
        ru: "Дымящиеся пельмени и миски с лапшой на столе в Бинондо, Манила",
        ar: "زلابية يتصاعد منها البخار وأطباق نودلز على طاولة في بينوندو بمانيلا",
      },
      brief:
        "Binondo, late morning. Overhead or 45-degree shot of a well-used table: dumplings, noodles, hands reaching in. Warm practical light, real restaurant, no styling props.",
      tone: "night",
    },
  },
  {
    slug: "nature-adventure",
    title: {
      en: "Nature & Adventure",
      fr: "Nature & aventure",
      es: "Naturaleza y aventura",
      ru: "Природа и приключения",
      ar: "الطبيعة والمغامرة",
    },
    short: {
      en: "Rice terrace trails, waterfalls you swim under, volcanoes and caves, with a guide who knows the way down too.",
      fr: "Sentiers dans les rizières, cascades où l'on se baigne, volcans et grottes, avec un guide qui connaît aussi le chemin du retour.",
      es: "Senderos entre arrozales, cascadas para bañarse, volcanes y cuevas, con un guía que también conoce el camino de vuelta.",
      ru: "Тропы по рисовым террасам, водопады, под которыми можно плавать, вулканы и пещеры — с гидом, который знает и дорогу назад.",
      ar: "مسارات بين مدرجات الأرز، وشلالات تسبح تحتها، وبراكين وكهوف، برفقة مرشد يعرف طريق العودة أيضاً.",
    },
    body: {
      en: "Away from the beaches, the Philippines is mountains, rivers and volcanoes. The Cordillera has the rice terraces of Banaue and Batad and the caves and hanging coffins of Sagada. Camiguin has seven volcanoes on an island you can drive around in a morning. Siquijor and Bohol have waterfalls you can actually swim in.\n\nMost of these trips are active rather than extreme: a three-hour hike, a cave walk with some scrambling, a river by kayak. We grade them honestly, set start times around the heat and the weather, and use local guides from the communities you walk through. Northern Luzon especially rewards an extra day: roads are slow and the views are worth not rushing.",
    },
    destinations: ["banaue", "sagada", "camiguin", "siquijor", "bohol", "batanes"],
    photo: {
      alt: {
        en: "Hikers on a narrow path along the edge of the Batad rice terraces",
        fr: "Des randonneurs sur un étroit sentier au bord des rizières en terrasses de Batad",
        es: "Senderistas en un sendero estrecho al borde de las terrazas de arroz de Batad",
        ru: "Путешественники на узкой тропе вдоль рисовых террас Батада",
        ar: "متنزهون على ممر ضيق على حافة مدرجات الأرز في باتاد",
      },
      brief:
        "Batad amphitheatre, morning after rain, mist lifting. Two small figures with a local guide on a terrace wall. Wide frame, terraces fill most of it, deep greens.",
      tone: "rice",
    },
  },
  {
    slug: "wellness",
    title: {
      en: "Wellness",
      fr: "Bien-être",
      es: "Bienestar",
      ru: "Wellness",
      ar: "العافية والاسترخاء",
    },
    short: {
      en: "Slow mornings, yoga by the water, Filipino hilot massage and resorts designed for doing very little, very well.",
      fr: "Matins lents, yoga au bord de l'eau, massage philippin hilot et lieux pensés pour ne presque rien faire, mais bien.",
      es: "Mañanas lentas, yoga junto al agua, masaje filipino hilot y lugares pensados para hacer muy poco, y muy bien.",
      ru: "Неспешные утра, йога у воды, филиппинский массаж хилот и места, созданные для того, чтобы делать очень мало, но очень хорошо.",
      ar: "صباحات هادئة، ويوغا على حافة الماء، وتدليك الهيلوت الفلبيني التقليدي، ومنتجعات صُمّمت للاسترخاء على أكمل وجه.",
    },
    body: {
      en: "Wellness here is less clinical than in many destinations and more connected to place. Hilot, the traditional Filipino massage, uses warm coconut oil and banana leaves. Siargao has a strong yoga and breathwork scene with morning classes overlooking the water. A handful of resorts in Palawan and the Visayas are built around spa programmes, healthy kitchens and very quiet grounds.\n\nWe design wellness journeys with fewer moves and longer stays, private transfers and gentle days in between: a morning swim, a treatment, an early dinner. If you want a structured retreat, we find one that matches your level. If you simply want to rest well after a hard year, we plan for that too, and keep the itinerary light enough to let it happen.",
      fr: "Ici, le bien-être est moins clinique qu'ailleurs et plus lié au lieu. Le hilot, massage traditionnel philippin, utilise de l'huile de coco tiède et des feuilles de bananier. Siargao a une vraie culture du yoga et du travail sur la respiration, avec des cours matinaux face à l'eau. Quelques resorts de Palawan et des Visayas sont pensés autour du spa, d'une cuisine saine et d'un grand calme.\n\nNous concevons les voyages bien-être avec moins de déplacements, des séjours plus longs, des transferts privés et des journées douces : une baignade le matin, un soin, un dîner tôt. Si vous cherchez une retraite encadrée, nous trouvons celle qui correspond à votre niveau. Si vous voulez simplement bien vous reposer après une année difficile, nous le prévoyons aussi, avec un programme assez léger pour que cela arrive vraiment.",
      es: "Aquí el bienestar es menos clínico que en otros destinos y está más ligado al lugar. El hilot, el masaje tradicional filipino, usa aceite de coco templado y hojas de plátano. Siargao tiene una escena de yoga y respiración muy viva, con clases matinales frente al agua. Unos pocos resorts de Palawan y las Bisayas giran en torno al spa, la cocina saludable y el silencio.\n\nDiseñamos viajes de bienestar con menos desplazamientos, estancias más largas, traslados privados y días tranquilos: un baño por la mañana, un tratamiento, una cena temprana. Si buscáis un retiro estructurado, encontramos el que encaja con vuestro nivel. Si solo queréis descansar de verdad tras un año duro, también lo planificamos, con un itinerario lo bastante ligero para que ocurra.",
      ru: "Wellness здесь не столько клинический, сколько связанный с местом. Хилот — традиционный филиппинский массаж с тёплым кокосовым маслом и банановыми листьями. На Сиаргао сильная йога- и брезворк-культура, утренние занятия с видом на воду. Несколько курортов на Палаване и Висайях построены вокруг спа-программ, здоровой кухни и полной тишины.\n\nМы проектируем wellness-путешествия с меньшим числом переездов, более долгими остановками, частными трансферами и мягким ритмом дня: утреннее купание, процедура, ранний ужин. Если вам нужен структурированный ретрит, подберём его под ваш уровень. Если хочется просто хорошо отдохнуть после тяжёлого года, спланируем и это — и оставим программу достаточно лёгкой, чтобы отдых действительно случился.",
      ar: "العافية هنا أقل طابعاً طبياً مما هي عليه في وجهات كثيرة، وأكثر ارتباطاً بالمكان. الهيلوت، وهو التدليك الفلبيني التقليدي، يستخدم زيت جوز الهند الدافئ وأوراق الموز. وفي سيارغاو حضور قوي لليوغا وتمارين التنفس مع حصص صباحية تطل على الماء. كما صُمّمت بعض المنتجعات في بالاوان وفيساياس حول برامج السبا والمطبخ الصحي والهدوء التام.\n\nنصمّم رحلات العافية بتنقلات أقل وإقامات أطول وتنقلات خاصة وأيام هادئة: سباحة في الصباح، ثم جلسة علاجية، ثم عشاء مبكر. إن كنتم تبحثون عن برنامج استشفائي منظّم نختار ما يناسب مستواكم، وإن كنتم تريدون راحة حقيقية بعد عام مرهق نخطط لذلك أيضاً، ونترك البرنامج خفيفاً بما يكفي لتتحقق الراحة فعلاً.",
    },
    destinations: ["siargao", "palawan", "bohol", "siquijor", "dumaguete"],
    market: "gcc",
    photo: {
      alt: {
        en: "An open-sided treatment pavilion among palms, facing the sea",
        fr: "Un pavillon de soins ouvert parmi les palmiers, face à la mer",
        es: "Un pabellón de tratamientos abierto entre palmeras, frente al mar",
        ru: "Открытый павильон для процедур среди пальм с видом на море",
        ar: "جناح علاجي مفتوح بين أشجار النخيل يطل على البحر",
      },
      brief:
        "Early morning, Siargao or Palawan. An open bamboo or timber spa pavilion, linen and a treatment bed, sea and palms beyond. No people, or a therapist preparing oils. Quiet, soft, natural.",
      tone: "jungle",
    },
  },
  {
    slug: "off-the-beaten-path",
    title: {
      en: "Off the Beaten Path",
      fr: "Hors des sentiers battus",
      es: "Fuera de lo común",
      ru: "Вдали от туристов",
      ar: "بعيداً عن المسارات المعتادة",
    },
    short: {
      en: "Batanes, Siquijor, Camiguin and the islands most visitors never reach, for people who like a slower route.",
      fr: "Batanes, Siquijor, Camiguin et les îles que la plupart des voyageurs n'atteignent jamais, pour ceux qui aiment prendre leur temps.",
      es: "Batanes, Siquijor, Camiguin y las islas a las que casi nadie llega, para quien prefiere una ruta más lenta.",
      ru: "Батанес, Сикихор, Камигин и острова, до которых доезжают немногие, — для тех, кто любит неспешные маршруты.",
      ar: "باتانيس وسيكيهور وكاميغين وجزر لا يصلها معظم الزوار، لمن يفضّلون الطريق الأبطأ.",
    },
    body: {
      en: "Some of the best places in the Philippines are the ones with fewer flights. Batanes, at the far north, looks more like the Scottish coast than the tropics, with stone houses, rolling hills and weather that sometimes cancels the plane. Siquijor is small, quiet and known for its healers. Camiguin has volcanoes, hot springs and almost no crowds.\n\nGetting to these places takes more planning and a little flexibility, which is exactly where we help. We build in buffer days for weather, pick the few good places to stay, and pair a remote island with an easier stop so the whole trip still flows. Hidden Philippines is also a state of mind: early starts, a different beach to everyone else, a town that isn't on the tour.",
    },
    destinations: ["batanes", "siquijor", "camiguin", "sagada", "negros"],
    photo: {
      alt: {
        en: "A stone house on a green headland above a rough sea in Batanes",
        fr: "Une maison en pierre sur un promontoire vert au-dessus d'une mer agitée à Batanes",
        es: "Una casa de piedra sobre un cabo verde frente a un mar agitado en Batanes",
        ru: "Каменный дом на зелёном мысу над бурным морем, Батанес",
        ar: "منزل حجري على رأس أخضر فوق بحر هائج في باتانيس",
      },
      brief:
        "Batanes, overcast or late light. A traditional Ivatan stone house on rolling green hills, sea and wind visible. Wide, moody, no people or one small figure.",
      tone: "stone",
    },
  },
  {
    slug: "private-journeys",
    title: {
      en: "Private Journeys",
      fr: "Voyages privés",
      es: "Viajes privados",
      ru: "Частные путешествия",
      ar: "رحلات خاصة",
    },
    short: {
      en: "Your own guide, your own boat, your own timing: the whole trip arranged privately, from arrival to departure.",
      fr: "Votre guide, votre bateau, votre rythme : tout le voyage organisé en privé, de l'arrivée au départ.",
      es: "Vuestro propio guía, vuestro barco, vuestros horarios: todo el viaje en privado, de la llegada a la salida.",
      ru: "Свой гид, своя лодка, своё расписание — всё путешествие в частном формате, от прилёта до вылета.",
      ar: "مرشدكم الخاص، وقاربكم الخاص، وتوقيتكم الخاص: الرحلة كلها مرتبة بشكل خاص من لحظة الوصول حتى المغادرة.",
    },
    body: {
      en: "Every Inside Philippines journey is tailor-made, but a private journey goes a step further: no shared tours, no shared transfers, nothing on a fixed timetable unless an airline sets it. You are met at the aircraft door where the airport allows it, driven in a private vehicle, and taken out on a private boat with a crew who knows where the others will be and goes somewhere else.\n\nPrivate journeys suit families who want to move together without waiting for strangers, couples who value privacy, and travellers who simply prefer their own pace. We handle the parts that are hard to arrange from abroad: island-to-island charters, guides for specific interests, dietary needs such as halal (we arrange it where available and tell you honestly where options are limited), and a direct line to our team throughout.",
      fr: "Tous nos voyages sont sur mesure, mais un voyage privé va plus loin : aucune excursion partagée, aucun transfert partagé, aucun horaire fixe sauf ceux des compagnies aériennes. On vous accueille dès la porte de l'avion quand l'aéroport le permet, vous circulez en véhicule privé et vous naviguez sur un bateau privé dont l'équipage sait où seront les autres, et va ailleurs.\n\nLes voyages privés conviennent aux familles qui veulent se déplacer ensemble sans attendre d'inconnus, aux couples qui tiennent à leur intimité et aux voyageurs qui préfèrent simplement leur propre rythme. Nous gérons ce qui est difficile à organiser depuis l'étranger : charters d'île en île, guides spécialisés, besoins alimentaires comme le halal (nous l'organisons là où c'est possible et vous disons franchement où l'offre est limitée), et une ligne directe avec notre équipe tout au long du voyage.",
      es: "Todos nuestros viajes son a medida, pero un viaje privado va un paso más allá: sin excursiones ni traslados compartidos, sin horarios fijos salvo los que marque una aerolínea. Os reciben en la puerta del avión cuando el aeropuerto lo permite, os desplazáis en vehículo privado y salís en un barco privado con una tripulación que sabe dónde estarán los demás y va a otro sitio.\n\nLos viajes privados encajan con familias que quieren moverse juntas sin esperar a desconocidos, con parejas que valoran la intimidad y con quien simplemente prefiere su propio ritmo. Nos ocupamos de lo difícil de organizar desde fuera: chárteres entre islas, guías para intereses concretos, necesidades alimentarias como el halal (lo organizamos donde hay opciones y os decimos con franqueza dónde son limitadas) y una línea directa con nuestro equipo durante todo el viaje.",
      ru: "Каждое путешествие Inside Philippines создаётся индивидуально, но частный формат идёт дальше: никаких групповых экскурсий и общих трансферов, никакого фиксированного расписания, кроме авиакомпаний. Вас встречают у трапа там, где это позволяет аэропорт, возят на частном автомобиле и вывозят в море на частной лодке, команда которой знает, где будут остальные, и выбирает другое место.\n\nЧастные путешествия подходят семьям, которые хотят передвигаться вместе, не дожидаясь чужих людей, парам, для которых важна приватность, и всем, кто просто предпочитает свой темп. Мы берём на себя то, что сложно организовать из-за границы: чартеры между островами, гидов под конкретные интересы, особые требования к питанию, например халяль (организуем там, где он доступен, и честно предупредим, где выбор ограничен), и прямую связь с нашей командой на протяжении всей поездки.",
      ar: "كل رحلة من Inside Philippines مصمّمة حسب الطلب، لكن الرحلة الخاصة تذهب أبعد من ذلك: لا جولات مشتركة، ولا تنقلات مشتركة، ولا مواعيد ثابتة إلا ما تفرضه شركات الطيران. نستقبلكم عند باب الطائرة حيث يسمح المطار بذلك، وتتنقلون بسيارة خاصة، وتبحرون على قارب خاص بطاقم يعرف أين سيكون الآخرون فيذهب بكم إلى مكان آخر.\n\nتناسب الرحلات الخاصة العائلات التي تريد التنقل معاً من دون انتظار غرباء، والأزواج الذين يقدّرون الخصوصية، وكل من يفضّل إيقاعه الخاص. نتولى ما يصعب ترتيبه من الخارج: رحلات خاصة بين الجزر، ومرشدين متخصصين حسب اهتماماتكم، ومتطلبات الطعام مثل الحلال (نرتّبه حيث يتوفر ونخبركم بصراحة أين تكون الخيارات محدودة)، وخط تواصل مباشر مع فريقنا طوال الرحلة.",
    },
    destinations: ["palawan", "el-nido", "coron", "siargao", "bohol", "manila"],
    market: "gcc",
    photo: {
      alt: {
        en: "A private boat with its crew waiting at a quiet jetty in the early morning",
        fr: "Un bateau privé et son équipage qui attendent à un ponton tranquille au petit matin",
        es: "Un barco privado con su tripulación esperando en un muelle tranquilo a primera hora",
        ru: "Частная лодка с командой ждёт у тихого причала ранним утром",
        ar: "قارب خاص وطاقمه في الانتظار عند رصيف هادئ في الصباح الباكر",
      },
      brief:
        "First light at a small jetty in northern Palawan. A clean private banca, crew in simple uniform shirts loading towels and a cool box. Calm water, no other boats. Feels discreet and ready.",
      tone: "lagoon",
    },
  },
];

const enOnly = (en: string) => ({ en });

export const experiences: Experience[] = [
  {
    slug: "el-nido-shared-island-hopping",
    title: { en: "El Nido island hopping, shared Tour A or C" },
    destination: "el-nido",
    durationHours: 7,
    private: false,
    travelerTypes: ["couple", "friends", "solo", "family", "group"],
    seasonality: enOnly(
      "Runs most of the year; best November to May. Tours can be cancelled by the coast guard in rough weather, more often June to October."
    ),
    category: "island-escapes",
    photos: [
      {
        alt: { en: "Several bancas moored at the entrance to a limestone lagoon in Bacuit Bay" },
        brief: "Bacuit Bay, late morning. Shared bancas at a lagoon entrance, swimmers in life jackets. Honest, busy, still beautiful.",
        tone: "lagoon",
      },
    ],
    description: enOnly(
      "The classic El Nido day on a shared boat with 15 to 25 other people. Tour A takes in the Big and Small Lagoons, Secret Lagoon and a beach lunch; Tour C goes to Hidden Beach, Matinloc Shrine and Helicopter Island. Good value and fun, but the famous lagoons are busy by 10am. Lunch, kayak or entrance fees and the environmental fee are usually handled locally."
    ),
  },
  {
    slug: "el-nido-private-banca",
    title: { en: "El Nido by private banca, early start" },
    destination: "el-nido",
    durationHours: 8,
    private: true,
    travelerTypes: ["couple", "honeymoon", "family", "friends"],
    seasonality: enOnly("Best November to May. Sea conditions decide the route on the day; the crew picks the sheltered side when it is windy."),
    category: "private-journeys",
    photos: [
      {
        alt: { en: "A private banca alone in a quiet cove in Bacuit Bay at 7am" },
        brief: "Bacuit Bay at 7am. One private banca, empty cove, crew preparing snorkel gear. The contrast with the shared-tour shot is the point.",
        tone: "lagoon",
      },
    ],
    description: enOnly(
      "Your own boat and crew, leaving at 7am so you reach the Small Lagoon before the shared tours. Mix stops from Tours A and C, add a quiet beach for lunch grilled on board, and stay longer where you like it. The best way to see El Nido if you can afford it, and worth it for families and couples."
    ),
  },
  {
    slug: "coron-kayangan-lake-reefs",
    title: { en: "Coron: Kayangan Lake, Twin Lagoon and the reefs" },
    destination: "coron",
    durationHours: 7,
    private: true,
    travelerTypes: ["couple", "honeymoon", "family", "friends", "solo"],
    seasonality: enOnly("Best November to May. Kayangan Lake closes occasionally for maintenance or local reasons; we check before you go."),
    category: "island-escapes",
    photos: [
      {
        alt: { en: "The clear brackish water of Kayangan Lake against limestone walls" },
        brief: "Kayangan Lake from the water, early. Limestone pinnacles reflected, one swimmer for scale. Also a classic viewpoint frame if light allows.",
        tone: "lagoon",
      },
    ],
    description: enOnly(
      "A day around Coron Island: the short climb and swim at Kayangan Lake, the warm-and-cold water layers of Twin Lagoon, then snorkelling on the coral gardens at Siete Pecados and Skeleton Wreck. Private boat recommended so you can reach Kayangan before 8:30am."
    ),
  },
  {
    slug: "siargao-surf-lesson",
    title: { en: "Siargao surf lessons for beginners" },
    destination: "siargao",
    durationHours: 2,
    private: true,
    travelerTypes: ["couple", "honeymoon", "family", "friends", "solo"],
    seasonality: enOnly("Year round. Smaller, friendlier waves outside the August to November swell season make it easier to learn."),
    category: "surf",
    photos: [
      {
        alt: { en: "A surf coach pushing a beginner into a small wave in Siargao" },
        brief: "Beginner break near General Luna, morning. Coach in the water, student standing up on a soft-top. Joyful, not staged.",
        tone: "reef",
      },
    ],
    description: enOnly(
      "One-to-one or small-group lessons with a local coach on a beginner-friendly break. Most people stand up in the first session. Timed with the tide, with boards and rash vests supplied. Book three sessions over a week if you want to keep progressing."
    ),
  },
  {
    slug: "siargao-island-hopping",
    title: { en: "Siargao island hopping: Naked, Daku and Guyam" },
    destination: "siargao",
    durationHours: 6,
    private: true,
    travelerTypes: ["couple", "honeymoon", "family", "friends", "solo", "group"],
    seasonality: enOnly("Best March to October when seas are calmer. Naked Island is a bare sandbar, so go before noon or bring shade."),
    category: "island-escapes",
    photos: [
      {
        alt: { en: "Naked Island, a bare white sandbar surrounded by shallow turquoise water" },
        brief: "Drone shot of Naked Island mid-morning, a banca pulled up, few people. Then Guyam's single cluster of palms from the water.",
        tone: "sand",
      },
    ],
    description: enOnly(
      "Three islands off General Luna in a relaxed day: Naked Island, a sandbar with nothing on it; Daku, the largest, for a grilled seafood lunch in the shade; and tiny Guyam, a ring of palms you can walk around in five minutes. Easy on a shared boat, nicer on a private one."
    ),
  },
  {
    slug: "siargao-sugba-lagoon",
    title: { en: "Sugba Lagoon and the Del Carmen mangroves" },
    destination: "siargao",
    durationHours: 6,
    private: true,
    travelerTypes: ["couple", "honeymoon", "family", "friends", "solo"],
    seasonality: enOnly("Year round. Mornings are calmest and quietest; the boat crosses one of Asia's largest mangrove forests."),
    category: "nature-adventure",
    photos: [
      {
        alt: { en: "Paddleboards on the still green water of Sugba Lagoon" },
        brief: "Sugba Lagoon, morning. One or two paddleboards on glassy water, forested karst behind, the floating deck at frame edge.",
        tone: "jungle",
      },
    ],
    description: enOnly(
      "A boat ride through the mangroves from Del Carmen to Sugba, a calm, deep-green lagoon for swimming, paddleboarding and jumping off the diving board. Combine with Magpupungko rock pools at low tide on the drive back."
    ),
  },
  {
    slug: "bohol-countryside-tarsiers",
    title: { en: "Bohol countryside: Chocolate Hills, tarsiers and the Loboc River" },
    destination: "bohol",
    durationHours: 8,
    private: true,
    travelerTypes: ["couple", "honeymoon", "family", "friends", "solo", "group"],
    seasonality: enOnly("Year round. The Chocolate Hills are greener June to December and brown in the dry months; go at 6am for soft light."),
    category: "nature-adventure",
    photos: [
      {
        alt: { en: "A Philippine tarsier clinging to a branch, wide-eyed" },
        brief: "Ethical tarsier sanctuary, natural light only, no flash, long lens. Plus a dawn frame of the Chocolate Hills.",
        tone: "jungle",
      },
    ],
    description: enOnly(
      "A private driver-guide day across Bohol: the Chocolate Hills at sunrise before the vans, a quiet sanctuary where tarsiers are protected rather than handled, the Baclayon church, and a slow lunch on the Loboc River. We only use the sanctuary run for conservation, not the roadside enclosures."
    ),
  },
  {
    slug: "siquijor-waterfalls",
    title: { en: "Siquijor waterfalls and coast by private driver" },
    destination: "siquijor",
    durationHours: 6,
    private: true,
    travelerTypes: ["couple", "honeymoon", "family", "friends", "solo"],
    seasonality: enOnly("Year round. Cambugahay is bluest in the dry season and can turn murky after heavy rain."),
    category: "nature-adventure",
    photos: [
      {
        alt: { en: "The turquoise tiered pools of Cambugahay Falls" },
        brief: "Cambugahay Falls at 8am, before the crowds. Tiered pools, a swimmer on the rope swing if possible.",
        tone: "jungle",
      },
    ],
    description: enOnly(
      "A loop around Siquijor: swim and rope-swing at Cambugahay Falls before 9am, the old balete tree with fish nibbling your feet, the coral-stone church at Lazi and a late afternoon at Salagdoong or Paliton beach for sunset."
    ),
  },
  {
    slug: "moalboal-sardine-run",
    title: { en: "Moalboal sardine run and turtle snorkel" },
    destination: "moalboal",
    durationHours: 3,
    private: true,
    travelerTypes: ["couple", "honeymoon", "family", "friends", "solo"],
    seasonality: enOnly("Year round. The shoal stays close to shore at Panagsama Beach; best in the morning with calm seas."),
    category: "diving",
    photos: [
      {
        alt: { en: "A snorkeller above a huge shoal of sardines at Panagsama Beach" },
        brief: "Panagsama, morning, from below the surface. Snorkeller silhouetted above a sardine ball, sunlight in shafts.",
        tone: "reef",
      },
    ],
    description: enOnly(
      "Swim off the beach with a guide into millions of sardines a few metres from the reef wall, then boat to Pescador Island or a turtle spot. No diving certification needed. Divers can do the same as a shore or boat dive."
    ),
  },
  {
    slug: "malapascua-thresher-dive",
    title: { en: "Malapascua thresher shark dive at dawn" },
    destination: "malapascua",
    durationHours: 3,
    private: false,
    travelerTypes: ["couple", "friends", "solo"],
    seasonality: enOnly(
      "Year round, sightings are frequent but not guaranteed. Requires a certified diver; the site is around 25 to 30 metres, so Advanced Open Water or equivalent is usually asked for."
    ),
    category: "diving",
    photos: [
      {
        alt: { en: "A thresher shark with its long tail passing over Monad Shoal" },
        brief: "Monad Shoal at dawn, natural light only, no strobes (rule at the site). Blue, grainy, authentic.",
        tone: "reef",
      },
    ],
    description: enOnly(
      "A 5am departure to Monad Shoal, a sunken island where thresher sharks come up to a cleaning station in the early light. Small group with a dive centre that follows the site's no-flash code. Back on land in time for a late breakfast."
    ),
  },
  {
    slug: "manila-binondo-food-walk",
    title: { en: "Binondo food walk, Manila" },
    destination: "manila",
    durationHours: 3.5,
    private: true,
    travelerTypes: ["couple", "honeymoon", "family", "friends", "solo", "group"],
    seasonality: enOnly("Year round. Mornings are cooler; avoid Chinese New Year week unless you want the crowds and the festivities."),
    category: "food-culture",
    photos: [
      {
        alt: { en: "A busy Binondo street with a dumpling counter and red lanterns" },
        brief: "Ongpin Street, late morning. A dumpling counter, steam, signage in two scripts, the guide mid-story.",
        tone: "night",
      },
    ],
    description: enOnly(
      "A walk through the world's oldest Chinatown with a guide who grew up on its food: dumplings, hopia pastries, fresh lumpia, a Chinese-Filipino pharmacy and a church that tells Manila's history in one block. Can be adapted for halal and vegetarian travellers, with fewer stops."
    ),
  },
  {
    slug: "banaue-batad-hike",
    title: { en: "Banaue to Batad rice terrace hike" },
    destination: "banaue",
    durationHours: 7,
    private: true,
    travelerTypes: ["couple", "friends", "solo", "family"],
    seasonality: enOnly(
      "Year round. Terraces are greenest around April to July and gold before harvest; trails are slippery in heavy rain."
    ),
    category: "nature-adventure",
    photos: [
      {
        alt: { en: "The amphitheatre of the Batad rice terraces seen from the saddle" },
        brief: "Batad from the saddle viewpoint, morning, mist lifting. Then a close detail of a stone terrace wall and a farmer.",
        tone: "rice",
      },
    ],
    description: enOnly(
      "A guided day from Banaue to the amphitheatre-shaped terraces of Batad, with lunch in the village and an optional descent to Tappiya Falls. Moderate: lots of steps and narrow terrace walls. Guides are from the Ifugao communities whose terraces you walk across."
    ),
  },
  {
    slug: "palawan-sandbar-sunset-dinner",
    title: { en: "Private sunset dinner on a sandbar" },
    destination: "palawan",
    durationHours: 3,
    private: true,
    travelerTypes: ["couple", "honeymoon", "family"],
    seasonality: enOnly("Best November to May. Depends on the tide; we set the date around a low tide at sunset when possible, with a fallback beach."),
    category: "honeymoons",
    photos: [
      {
        alt: { en: "A lantern-lit table for two on a sandbar as the sun sets" },
        brief: "Sandbar near El Nido or Coron at golden hour. Table, lanterns, the crew grilling at a distance. No props beyond that.",
        tone: "dusk",
      },
    ],
    description: enOnly(
      "A private boat to a sandbar or a quiet beach in the late afternoon, a table set for you, a crew cooking grilled seafood and the sun going down over the islands. Halal or vegetarian menus on request. Back to the hotel by boat under the stars."
    ),
  },
  {
    slug: "siargao-wellness-day",
    title: { en: "Siargao wellness day: yoga, hilot and a slow lunch" },
    destination: "siargao",
    durationHours: 5,
    private: true,
    travelerTypes: ["couple", "honeymoon", "friends", "solo"],
    seasonality: enOnly("Year round. Morning classes start early to beat the heat."),
    category: "wellness",
    photos: [
      {
        alt: { en: "An open-air yoga shala among coconut palms in Siargao" },
        brief: "Morning in an open shala surrounded by palms, one or two people in practice, soft light. Then a hilot treatment detail with banana leaves.",
        tone: "jungle",
      },
    ],
    description: enOnly(
      "A morning yoga class in an open-air shala, a traditional hilot massage with warm coconut oil, and a long healthy lunch in General Luna. Private class or small group, with a driver between stops."
    ),
  },
  {
    slug: "camiguin-volcano-hot-springs",
    title: { en: "Camiguin: volcano, hot springs and White Island" },
    destination: "camiguin",
    durationHours: 8,
    private: true,
    travelerTypes: ["couple", "honeymoon", "family", "friends", "solo"],
    seasonality: enOnly("Best March to June for calm seas to White Island. The hot springs are nicest in the late afternoon."),
    category: "nature-adventure",
    photos: [
      {
        alt: { en: "White Island sandbar with Camiguin's volcanoes behind" },
        brief: "White Island at 7am, empty sandbar, Mount Hibok-Hibok behind. Then steam rising from a hot spring pool in the forest.",
        tone: "sand",
      },
    ],
    description: enOnly(
      "Sunrise on White Island, a sandbar facing the volcanoes; then a loop of the island: the sunken cemetery, Katibawasan Falls, the old Spanish church ruins and an evening soak in the Ardent hot springs. Active hikers can climb Hibok-Hibok with a permit and an early start."
    ),
  },
];
