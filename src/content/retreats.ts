import type { L } from "@/i18n/config";
import type { FAQ } from "./types";

/**
 * Wellness retreats: a top-menu section at /{lang}/wellness-retreats with one
 * page per retreat. Activities (yoga, surf, cooking lessons, hilot, breathwork)
 * and vegetarian / vegan food are part of every retreat. Every string is
 * translated in all five languages. Prices live in ./retreatDetails.ts.
 */

export type Retreat = {
  slug: string;
  nights: number;
  place: L;
  title: L;
  short: L;
  intro: L;
  highlights: L<string[]>;
  day: L; // a typical day
  food: L;
  photo: string; // photos.json key
  programTitle?: L;
  program?: { name: L; body: L }[];
  variantsTitle?: L;
  variants?: { name: L; body: L }[];
  seo: { title: L; description: L };
};

export const retreatsPage = {
  nav: { en: "Wellness retreats", fr: "Retraites bien-être", es: "Retiros de bienestar", ru: "Wellness-ретриты", ar: "رحلات الاستجمام" } as L,
  kicker: { en: "Wellness retreats", fr: "Retraites bien-être", es: "Retiros de bienestar", ru: "Wellness-ретриты", ar: "رحلات الاستجمام والعافية" } as L,
  title: {
    en: "Wellness retreats in the Philippines",
    fr: "Retraites bien-être aux Philippines",
    es: "Retiros de bienestar en Filipinas",
    ru: "Wellness-ретриты на Филиппинах",
    ar: "رحلات الاستجمام والعافية في الفلبين",
  } as L,
  intro: {
    en: "Five private retreats built on four pillars: physical wellness, healthy nutrition, relaxation and recovery, and mental and emotional wellness. Yoga, surf and cooking lessons, spa and fully vegetarian or vegan food, designed around you.",
    fr: "Cinq retraites privées bâties sur quatre piliers : bien-être physique, alimentation saine, détente et récupération, bien-être mental et émotionnel. Yoga, surf, cours de cuisine, spa et une cuisine entièrement végétarienne ou végane, pensés pour vous.",
    es: "Cinco retiros privados sobre cuatro pilares: bienestar físico, alimentación saludable, relajación y recuperación, y bienestar mental y emocional. Yoga, surf, clases de cocina, spa y comida totalmente vegetariana o vegana, a tu medida.",
    ru: "Пять частных ретритов на четырёх опорах: физическое здоровье, здоровое питание, расслабление и восстановление, ментальное и эмоциональное здоровье. Йога, сёрфинг, уроки кулинарии, спа и полностью вегетарианское или веганское питание — всё под вас.",
    ar: "خمس رحلات استجمام خاصة تقوم على أربع ركائز: العافية الجسدية، والتغذية الصحية، والاسترخاء والتعافي، والعافية الذهنية والعاطفية. يوغا وركوب أمواج ودروس طبخ وسبا وطعام نباتي بالكامل، مصمّمة لكم.",
  } as L,
  retreatsTitle: { en: "Choose your retreat", fr: "Choisissez votre retraite", es: "Elige tu retiro", ru: "Выберите свой ретрит", ar: "اختاروا رحلتكم" } as L,
  nightsLabel: { en: "nights", fr: "nuits", es: "noches", ru: "ночей", ar: "ليالٍ" } as L,
  pillarsTitle: {
    en: "The four pillars of every retreat",
    fr: "Les quatre piliers de chaque retraite",
    es: "Los cuatro pilares de cada retiro",
    ru: "Четыре опоры каждого ретрита",
    ar: "الركائز الأربع لكل رحلة",
  } as L,
  pillarsIntro: {
    en: "Every retreat balances body, food, rest and mind. You choose how much of each, and we build your days around it.",
    fr: "Chaque retraite équilibre le corps, l'alimentation, le repos et l'esprit. Vous choisissez la part de chacun, et nous construisons vos journées autour.",
    es: "Cada retiro equilibra cuerpo, alimentación, descanso y mente. Tú eliges cuánto de cada uno y organizamos tus días en torno a ello.",
    ru: "Каждый ретрит сочетает тело, питание, отдых и ум. Вы выбираете пропорции, а мы выстраиваем вокруг них ваши дни.",
    ar: "توازن كل رحلة بين الجسد والغذاء والراحة والذهن. أنتم تختارون نصيب كل منها، ونبني أيامكم حوله.",
  } as L,
  pillars: [
    {
      key: "physical",
      photo: "retreat/yoga",
      name: { en: "Physical wellness", fr: "Bien-être physique", es: "Bienestar físico", ru: "Физическое здоровье", ar: "العافية الجسدية" } as L,
      body: {
        en: "Move every day, at your level, mostly outdoors and by the sea.",
        fr: "Bouger chaque jour, à votre niveau, surtout en plein air et au bord de la mer.",
        es: "Moverte cada día, a tu nivel, casi siempre al aire libre y junto al mar.",
        ru: "Двигаться каждый день, в своём темпе, в основном на свежем воздухе и у моря.",
        ar: "حركة يومية بحسب مستواكم، وغالباً في الهواء الطلق وعلى شاطئ البحر.",
      } as L,
      items: {
        en: ["Yoga", "Pilates", "Stretching", "Fitness sessions", "Breathwork", "Hiking", "Surfing", "Swimming"],
        fr: ["Yoga", "Pilates", "Étirements", "Séances de fitness", "Respiration", "Randonnée", "Surf", "Natation"],
        es: ["Yoga", "Pilates", "Estiramientos", "Sesiones de fitness", "Respiración", "Senderismo", "Surf", "Natación"],
        ru: ["Йога", "Пилатес", "Растяжка", "Фитнес-тренировки", "Дыхательные практики", "Походы", "Сёрфинг", "Плавание"],
        ar: ["اليوغا", "البيلاتس", "تمارين الإطالة", "حصص اللياقة", "تمارين التنفس", "المشي في الطبيعة", "ركوب الأمواج", "السباحة"],
      } as L<string[]>,
    },
    {
      key: "nutrition",
      photo: "retreat/cooking",
      name: { en: "Healthy nutrition", fr: "Alimentation saine", es: "Alimentación saludable", ru: "Здоровое питание", ar: "التغذية الصحية" } as L,
      body: {
        en: "Fresh, balanced food planned around you, fully vegetarian or vegan if you wish.",
        fr: "Une cuisine fraîche et équilibrée pensée pour vous, entièrement végétarienne ou végane si vous le souhaitez.",
        es: "Comida fresca y equilibrada pensada para ti, totalmente vegetariana o vegana si quieres.",
        ru: "Свежая сбалансированная еда под вас, полностью вегетарианская или веганская по желанию.",
        ar: "طعام طازج ومتوازن مصمّم لكم، نباتي أو نباتي صرف بالكامل إن رغبتم.",
      } as L,
      items: {
        en: ["Chef-prepared balanced meals", "Fresh juices", "Nutritious breakfasts", "Cooking workshops", "Personalised menus"],
        fr: ["Repas équilibrés préparés par un chef", "Jus frais", "Petits-déjeuners nutritifs", "Ateliers de cuisine", "Menus personnalisés"],
        es: ["Comidas equilibradas preparadas por un chef", "Zumos naturales", "Desayunos nutritivos", "Talleres de cocina", "Menús personalizados"],
        ru: ["Сбалансированные блюда от шеф-повара", "Свежевыжатые соки", "Питательные завтраки", "Кулинарные мастер-классы", "Индивидуальное меню"],
        ar: ["وجبات متوازنة يعدّها طاهٍ", "عصائر طازجة", "وجبات إفطار مغذية", "ورش طبخ", "قوائم طعام مخصّصة"],
      } as L<string[]>,
    },
    {
      key: "recovery",
      photo: "gallery/massage-4",
      name: { en: "Relaxation and recovery", fr: "Détente et récupération", es: "Relajación y recuperación", ru: "Расслабление и восстановление", ar: "الاسترخاء والتعافي" } as L,
      body: {
        en: "Time and treatments to let the body recover, and nights of deep, restorative sleep.",
        fr: "Du temps et des soins pour laisser le corps récupérer, et des nuits de sommeil profond et réparateur.",
        es: "Tiempo y tratamientos para que el cuerpo se recupere, y noches de sueño profundo y reparador.",
        ru: "Время и процедуры, чтобы тело восстановилось, и ночи глубокого восстанавливающего сна.",
        ar: "وقت وعلاجات تمنح الجسد فرصة التعافي، وليالٍ من النوم العميق المريح.",
      } as L,
      items: {
        en: ["Massages, including Filipino hilot", "Spa treatments", "Meditation", "Sound healing", "Sauna", "Ice baths", "Restorative sleep"],
        fr: ["Massages, dont le hilot philippin", "Soins au spa", "Méditation", "Bain sonore", "Sauna", "Bains glacés", "Sommeil réparateur"],
        es: ["Masajes, incluido el hilot filipino", "Tratamientos de spa", "Meditación", "Baño de sonido", "Sauna", "Baños de hielo", "Sueño reparador"],
        ru: ["Массаж, включая филиппинский хилот", "Спа-процедуры", "Медитация", "Звукотерапия", "Сауна", "Ледяные ванны", "Восстанавливающий сон"],
        ar: ["التدليك، ومنه الهيلوت الفلبيني", "علاجات السبا", "التأمل", "العلاج بالصوت", "الساونا", "حمّامات الثلج", "نوم مريح"],
      } as L<string[]>,
    },
    {
      key: "mind",
      photo: "retreat/meditation",
      name: { en: "Mental and emotional wellness", fr: "Bien-être mental et émotionnel", es: "Bienestar mental y emocional", ru: "Ментальное и эмоциональное здоровье", ar: "العافية الذهنية والعاطفية" } as L,
      body: {
        en: "Space to switch off, reflect and come home lighter than you left.",
        fr: "De l'espace pour déconnecter, prendre du recul et rentrer plus léger qu'au départ.",
        es: "Espacio para desconectar, reflexionar y volver a casa más ligero de lo que te fuiste.",
        ru: "Пространство, чтобы отключиться, подумать и вернуться домой легче, чем уезжали.",
        ar: "مساحة للانفصال والتأمل والعودة إلى البيت أخفّ مما غادرتم.",
      } as L,
      items: {
        en: ["Mindfulness", "Journaling", "Digital detox", "Stress management", "Guided group activities"],
        fr: ["Pleine conscience", "Écriture introspective", "Détox numérique", "Gestion du stress", "Activités de groupe guidées"],
        es: ["Mindfulness", "Escritura reflexiva", "Desconexión digital", "Gestión del estrés", "Actividades guiadas en grupo"],
        ru: ["Осознанность", "Ведение дневника", "Цифровой детокс", "Управление стрессом", "Групповые занятия с ведущим"],
        ar: ["اليقظة الذهنية", "كتابة اليوميات", "الانقطاع عن الأجهزة", "إدارة التوتر", "أنشطة جماعية بإشراف مرشد"],
      } as L<string[]>,
    },
  ],
  pillarsNote: {
    en: "Some facilities, such as saunas, ice baths and sound healing, are only found at certain places, so we choose where you stay to match what matters most to you.",
    fr: "Certains équipements, comme le sauna, les bains glacés ou les bains sonores, n'existent qu'à certaines adresses : nous choisissons vos hébergements selon ce qui compte le plus pour vous.",
    es: "Algunas instalaciones, como sauna, baños de hielo o baños de sonido, solo existen en ciertos lugares, así que elegimos tu alojamiento según lo que más te importe.",
    ru: "Некоторые удобства, например сауна, ледяные ванны и звукотерапия, есть не везде, поэтому мы подбираем места проживания под то, что важно именно вам.",
    ar: "بعض المرافق، مثل الساونا وحمّامات الثلج والعلاج بالصوت، لا تتوفر إلا في أماكن معيّنة، لذا نختار إقامتكم بحسب ما يهمّكم أكثر.",
  } as L,
  foodTitle: {
    en: "Vegetarian and vegan, fully planned",
    fr: "Végétarien et végan, entièrement prévu",
    es: "Vegetariano y vegano, todo previsto",
    ru: "Вегетарианское и веганское питание — всё продумано",
    ar: "طعام نباتي ونباتي صرف، مخطّط له بالكامل",
  } as L,
  foodBody: {
    en: "Filipino food is famous for pork and seafood, and many dishes hide fish sauce or shrimp paste. That is exactly why we plan it for you. Before you arrive, we brief every resort, restaurant and guide on your diet: vegetarian, vegan, gluten-free or any allergy. Your meals are agreed in advance, and your cooking lesson can be fully plant-based. Expect fresh tropical fruit at breakfast, coconut-based curries, tofu adobo, fresh spring rolls and green mango salads. Siargao and Tagaytay are especially easy for vegan travellers; on small islands we arrange menus with the kitchen beforehand.",
    fr: "La cuisine philippine est connue pour le porc et les fruits de mer, et beaucoup de plats cachent de la sauce de poisson ou de la pâte de crevettes. C'est justement pour cela que nous organisons tout. Avant votre arrivée, nous informons chaque hôtel, restaurant et guide de votre régime : végétarien, végan, sans gluten ou allergie. Vos repas sont validés à l'avance et votre cours de cuisine peut être entièrement végétal. Au programme : fruits tropicaux frais au petit-déjeuner, currys au lait de coco, adobo de tofu, rouleaux de printemps frais et salades de mangue verte. Siargao et Tagaytay sont particulièrement faciles pour les véganes ; sur les petites îles, nous préparons les menus avec la cuisine à l'avance.",
    es: "La cocina filipina es famosa por el cerdo y el marisco, y muchos platos llevan salsa de pescado o pasta de gambas. Justo por eso lo organizamos por ti. Antes de tu llegada informamos a cada hotel, restaurante y guía de tu dieta: vegetariana, vegana, sin gluten o cualquier alergia. Las comidas se acuerdan con antelación y tu clase de cocina puede ser cien por cien vegetal. Fruta tropical fresca en el desayuno, guisos con leche de coco, adobo de tofu, rollitos frescos y ensalada de mango verde. Siargao y Tagaytay son especialmente fáciles para veganos; en islas pequeñas preparamos los menús con la cocina de antemano.",
    ru: "Филиппинская кухня славится свининой и морепродуктами, а во многих блюдах есть рыбный соус или креветочная паста. Именно поэтому мы всё планируем за вас. До вашего приезда мы предупреждаем каждый отель, ресторан и гида о вашем питании: вегетарианском, веганском, безглютеновом или об аллергиях. Меню согласуется заранее, а урок кулинарии может быть полностью растительным. Свежие тропические фрукты на завтрак, блюда на кокосовом молоке, адобо из тофу, свежие спринг-роллы и салаты из зелёного манго. На Сиаргао и в Тагайтае веганам особенно легко; на маленьких островах мы заранее согласуем меню с кухней.",
    ar: "يشتهر المطبخ الفلبيني بلحم الخنزير والمأكولات البحرية، وتحتوي أطباق كثيرة على صلصة السمك أو معجون الروبيان. ولهذا تحديداً نخطّط لكل شيء نيابة عنكم. قبل وصولكم نُبلغ كل منتجع ومطعم ومرشد بنظامكم الغذائي: نباتي، أو نباتي صرف، أو خالٍ من الغلوتين، أو أي حساسية. تُتّفق الوجبات مسبقاً، ويمكن أن يكون درس الطبخ نباتياً بالكامل. فواكه استوائية طازجة على الإفطار، وأطباق بحليب جوز الهند، وأدوبو التوفو، ولفائف ربيع طازجة، وسلطة المانجو الخضراء. سيارغاو وتاغايتاي سهلتان جداً للنباتيين؛ وفي الجزر الصغيرة نُعدّ القوائم مع المطبخ مسبقاً.",
  } as L,
  foodPhoto: "retreat/vegan-food",
  dietTags: {
    en: ["Vegetarian", "Vegan", "Gluten-free", "Allergies handled"],
    fr: ["Végétarien", "Végan", "Sans gluten", "Allergies prises en compte"],
    es: ["Vegetariano", "Vegano", "Sin gluten", "Alergias contempladas"],
    ru: ["Вегетарианское", "Веганское", "Без глютена", "С учётом аллергий"],
    ar: ["نباتي", "نباتي صرف", "خالٍ من الغلوتين", "مراعاة الحساسية"],
  } as L<string[]>,
  included: {
    en: "Every retreat includes private transfers and travel insurance with €2,000 cancellation cover. Guides speak English or Spanish.",
    fr: "Chaque retraite comprend les transferts privés et une assurance voyage avec 2 000 € de garantie annulation. Guides anglophones ou hispanophones.",
    es: "Cada retiro incluye traslados privados y seguro de viaje con 2.000 € de cobertura de cancelación. Guías de habla inglesa o española.",
    ru: "В каждый ретрит входят частные трансферы и туристическая страховка с покрытием отмены до 2 000 €. Гиды говорят по-английски или по-испански.",
    ar: "تشمل كل رحلة التنقلات الخاصة وتأمين السفر مع تغطية إلغاء بقيمة 2,000 يورو. مرشدون يتحدثون الإنجليزية أو الإسبانية.",
  } as L,
  faqs: [
    {
      q: {
        en: "Are the retreats suitable for vegans?",
        fr: "Les retraites conviennent-elles aux véganes ?",
        es: "¿Los retiros son aptos para veganos?",
        ru: "Подходят ли ретриты веганам?",
        ar: "هل تناسب الرحلات النباتيين الصرف؟",
      },
      a: {
        en: "Yes. We plan every meal in advance with the resorts and restaurants, including the cooking lesson. Tell us your diet and any allergies when you design your trip.",
        fr: "Oui. Nous prévoyons chaque repas à l'avance avec les hôtels et restaurants, cours de cuisine compris. Indiquez-nous votre régime et vos allergies lors de la création de votre voyage.",
        es: "Sí. Planificamos cada comida con antelación con los hoteles y restaurantes, incluida la clase de cocina. Cuéntanos tu dieta y tus alergias al diseñar tu viaje.",
        ru: "Да. Мы заранее планируем каждый приём пищи с отелями и ресторанами, включая урок кулинарии. Укажите ваше питание и аллергии при планировании поездки.",
        ar: "نعم. نخطّط لكل وجبة مسبقاً مع المنتجعات والمطاعم، بما في ذلك درس الطبخ. أخبرونا بنظامكم الغذائي وأي حساسية عند تصميم رحلتكم.",
      },
    },
    {
      q: {
        en: "Do I need yoga or surf experience?",
        fr: "Faut-il avoir déjà pratiqué le yoga ou le surf ?",
        es: "¿Necesito experiencia en yoga o surf?",
        ru: "Нужен ли опыт в йоге или сёрфинге?",
        ar: "هل أحتاج إلى خبرة في اليوغا أو ركوب الأمواج؟",
      },
      a: {
        en: "No. Classes are matched to your level, from first-timers to regular practitioners, and every activity is optional.",
        fr: "Non. Les cours sont adaptés à votre niveau, du débutant au pratiquant régulier, et chaque activité est facultative.",
        es: "No. Las clases se adaptan a tu nivel, desde principiantes hasta practicantes habituales, y todas las actividades son opcionales.",
        ru: "Нет. Занятия подбираются под ваш уровень, от новичков до опытных, и любое из них можно пропустить.",
        ar: "لا. تُكيَّف الحصص مع مستواكم، من المبتدئين إلى الممارسين المنتظمين، وكل نشاط اختياري.",
      },
    },
    {
      q: {
        en: "Can I combine two retreats, or add one to a longer trip?",
        fr: "Peut-on combiner deux retraites ou en ajouter une à un voyage plus long ?",
        es: "¿Puedo combinar dos retiros o añadir uno a un viaje más largo?",
        ru: "Можно ли совместить два ретрита или добавить один к более длинной поездке?",
        ar: "هل يمكن الجمع بين رحلتين أو إضافة واحدة إلى رحلة أطول؟",
      },
      a: {
        en: "Yes. Tagaytay works well right after the flight into Manila, and any retreat can be joined to island hopping in Palawan, Bohol or Siargao.",
        fr: "Oui. Tagaytay est idéal juste après l'arrivée à Manille, et chaque retraite peut se combiner avec Palawan, Bohol ou Siargao.",
        es: "Sí. Tagaytay encaja muy bien justo después de aterrizar en Manila, y cualquier retiro se puede combinar con Palawan, Bohol o Siargao.",
        ru: "Да. Тагайтай отлично подходит сразу после прилёта в Манилу, а любой ретрит можно совместить с Палаваном, Бохолом или Сиаргао.",
        ar: "نعم. تناسب تاغايتاي ما بعد الوصول إلى مانيلا مباشرة، ويمكن دمج أي رحلة مع التنقّل بين جزر بالاوان أو بوهول أو سيارغاو.",
      },
    },
    {
      q: {
        en: "Are the retreats private or in a group?",
        fr: "Les retraites sont-elles privées ou en groupe ?",
        es: "¿Los retiros son privados o en grupo?",
        ru: "Ретриты индивидуальные или групповые?",
        ar: "هل الرحلات خاصة أم ضمن مجموعة؟",
      },
      a: {
        en: "They are designed for you alone, as a couple, with friends or for a company group. Some classes can be shared with other guests if you prefer.",
        fr: "Elles sont conçues pour vous seul, en couple, entre amis ou pour un groupe d'entreprise. Certains cours peuvent être partagés avec d'autres voyageurs si vous le souhaitez.",
        es: "Se diseñan para ti solo, en pareja, con amigos o para un grupo de empresa. Algunas clases pueden ser compartidas con otros viajeros si lo prefieres.",
        ru: "Они создаются для вас одного, для пары, друзей или корпоративной группы. Некоторые занятия при желании можно проходить вместе с другими гостями.",
        ar: "تُصمَّم لكم وحدكم، أو للأزواج، أو للأصدقاء، أو لمجموعات الشركات. ويمكن مشاركة بعض الحصص مع ضيوف آخرين إن رغبتم.",
      },
    },
  ] as FAQ[],
  seo: {
    title: {
      en: "Wellness Retreats Philippines: Yoga, Surf & Vegan",
      fr: "Retraite bien-être Philippines : yoga, surf, végan",
      es: "Retiros de bienestar en Filipinas: yoga, surf, vegano",
      ru: "Wellness-ретриты на Филиппинах: йога, сёрф, веган",
      ar: "رحلات استجمام في الفلبين: يوغا وأمواج وطعام نباتي",
    } as L,
    description: {
      en: "Private wellness retreats in the Philippines: yoga, surf and cooking lessons, hilot massage and fully vegetarian or vegan meals in Siargao, Palawan, Siquijor, Bohol and Tagaytay.",
      fr: "Retraites bien-être privées aux Philippines : yoga, surf, cours de cuisine, massage hilot et repas végétariens ou véganes à Siargao, Palawan, Siquijor, Bohol et Tagaytay.",
      es: "Retiros de bienestar privados en Filipinas: yoga, surf, clases de cocina, masaje hilot y comida vegetariana o vegana en Siargao, Palawan, Siquijor, Bohol y Tagaytay.",
      ru: "Частные wellness-ретриты на Филиппинах: йога, сёрфинг, уроки кулинарии, массаж хилот и вегетарианское или веганское питание на Сиаргао, Палаване, Сикихоре, Бохоле и в Тагайтае.",
      ar: "رحلات استجمام خاصة في الفلبين: يوغا وركوب أمواج ودروس طبخ وتدليك الهيلوت ووجبات نباتية في سيارغاو وبالاوان وسيكيهور وبوهول وتاغايتاي.",
    } as L,
  },
};

export const retreats: Retreat[] = [
  {
    slug: "siargao-yoga-surf-reset",
    nights: 7,
    place: { en: "Siargao", fr: "Siargao", es: "Siargao", ru: "Сиаргао", ar: "سيارغاو" },
    photo: "destination/siargao",
    title: {
      en: "Siargao Surf, Yoga & Wellness Retreat",
      fr: "Siargao : retraite surf, yoga et bien-être",
      es: "Siargao: retiro de surf, yoga y bienestar",
      ru: "Сиаргао: сёрф, йога и wellness-ретрит",
      ar: "سيارغاو: رحلة أمواج ويوغا وعافية",
    },
    short: {
      en: "Daily yoga by the sea in General Luna, gentle surf lessons, breathwork and a hilot massage.",
      fr: "Yoga quotidien face à la mer à General Luna, cours de surf en douceur, respiration et massage hilot.",
      es: "Yoga diario frente al mar en General Luna, clases de surf suaves, respiración y masaje hilot.",
      ru: "Ежедневная йога у моря в Дженерал-Луне, мягкие уроки сёрфинга, дыхательные практики и массаж хилот.",
      ar: "يوغا يومية على البحر في جنرال لونا، ودروس هادئة لركوب الأمواج، وتمارين تنفّس، وتدليك الهيلوت.",
    },
    intro: {
      en: "One of our two bases is in General Luna, Siargao, home to the most relaxed wellness scene in the Philippines. Seven nights in General Luna, with yoga every morning, surf lessons when the tide is right and long, plant-based lunches in town. The rest of the day is yours: a nap, a swim, a lagoon by paddleboard.",
      fr: "L'une de nos deux bases est à General Luna, à Siargao, où règne la scène bien-être la plus détendue des Philippines. Sept nuits à General Luna, avec du yoga chaque matin, du surf quand la marée s'y prête et de longs déjeuners végétaux en ville. Le reste de la journée vous appartient : une sieste, une baignade, un lagon en paddle.",
      es: "Una de nuestras dos bases está en General Luna, Siargao, la escena de bienestar más relajada de Filipinas. Siete noches en General Luna, con yoga cada mañana, surf cuando la marea acompaña y largas comidas vegetales en el pueblo. El resto del día es tuyo: una siesta, un baño, una laguna en paddle.",
      ru: "Одна из двух наших баз — в Дженерал-Луне на Сиаргао, где самая расслабленная wellness-атмосфера на Филиппинах. Семь ночей в Дженерал-Луне: йога каждое утро, сёрфинг по приливу и долгие растительные обеды в городке. Остальное время ваше: сон, купание, лагуна на сапе.",
      ar: "إحدى قاعدتينا في جنرال لونا بسيارغاو، حيث أكثر أجواء العافية استرخاءً في الفلبين. سبع ليالٍ في جنرال لونا مع يوغا كل صباح، وركوب الأمواج حين يناسب المدّ، وغداء نباتي طويل في البلدة. وبقية اليوم لكم: قيلولة، أو سباحة، أو بحيرة على لوح التجديف.",
    },
    highlights: {
      en: ["Morning yoga every day, private or in a small group", "Three surf lessons with a local coach", "Sunrise breathwork and a traditional hilot massage", "A Filipino cooking lesson, fully plant-based on request", "A slow island-hopping day to Naked, Daku and Guyam", "Sugba Lagoon by paddleboard"],
      fr: ["Yoga chaque matin, en privé ou en petit groupe", "Trois cours de surf avec un coach local", "Respiration au lever du soleil et massage hilot traditionnel", "Un cours de cuisine philippine, entièrement végétal sur demande", "Une journée tranquille sur Naked, Daku et Guyam", "Le lagon de Sugba en paddle"],
      es: ["Yoga cada mañana, en privado o en grupo reducido", "Tres clases de surf con un monitor local", "Respiración al amanecer y masaje hilot tradicional", "Una clase de cocina filipina, cien por cien vegetal si lo pides", "Un día tranquilo por Naked, Daku y Guyam", "La laguna de Sugba en paddle"],
      ru: ["Утренняя йога каждый день, индивидуально или в маленькой группе", "Три урока сёрфинга с местным тренером", "Дыхательные практики на рассвете и традиционный массаж хилот", "Урок филиппинской кухни, полностью растительный по запросу", "Неспешный день на островах Naked, Daku и Guyam", "Лагуна Сугба на сапе"],
      ar: ["يوغا صباحية كل يوم، خاصة أو ضمن مجموعة صغيرة", "ثلاثة دروس لركوب الأمواج مع مدرّب محلي", "تمارين تنفّس عند الشروق وتدليك هيلوت تقليدي", "درس طبخ فلبيني، نباتي بالكامل عند الطلب", "يوم هادئ بين جزر Naked وDaku وGuyam", "بحيرة سوغبا على لوح التجديف"],
    },
    day: {
      en: "Yoga at 7:00, a fruit and smoothie-bowl breakfast, a surf lesson on the morning tide, a long vegan lunch, a nap or a swim, and sunset breathwork on the beach.",
      fr: "Yoga à 7 h, petit-déjeuner fruits et smoothie bowl, surf à la marée du matin, long déjeuner végan, sieste ou baignade, et respiration au coucher du soleil sur la plage.",
      es: "Yoga a las 7:00, desayuno de fruta y smoothie bowl, surf con la marea de la mañana, comida vegana sin prisa, siesta o baño, y respiración al atardecer en la playa.",
      ru: "Йога в 7:00, завтрак из фруктов и смузи-боула, сёрфинг на утреннем приливе, долгий веганский обед, сон или купание и дыхательная практика на закате на пляже.",
      ar: "يوغا في السابعة صباحاً، ثم إفطار من الفواكه وأوعية السموذي، ودرس ركوب أمواج مع مدّ الصباح، وغداء نباتي طويل، وقيلولة أو سباحة، وتمارين تنفّس عند الغروب على الشاطئ.",
    },
    food: {
      en: "Balanced meals cooked with fresh produce from the Siargao market, mixing island flavours and international dishes, with fresh juices and smoothie bowls. General Luna also has many vegetarian and vegan cafés, so this is the easiest retreat for plant-based travellers.",
      fr: "Des repas équilibrés préparés avec les produits frais du marché de Siargao, entre saveurs de l'île et plats internationaux, avec jus frais et smoothie bowls. General Luna compte aussi de nombreux cafés végétariens et véganes : c'est la retraite la plus simple pour les voyageurs végétaux.",
      es: "Comidas equilibradas con producto fresco del mercado de Siargao, entre sabores de la isla y platos internacionales, con zumos naturales y smoothie bowls. General Luna tiene además muchos cafés vegetarianos y veganos: es el retiro más fácil para quien come vegetal.",
      ru: "Сбалансированное питание из свежих продуктов с рынка Сиаргао — местные вкусы и интернациональные блюда, свежие соки и смузи-боулы. В Дженерал-Луне много вегетарианских и веганских кафе, поэтому это самый простой ретрит для тех, кто ест растительное.",
      ar: "وجبات متوازنة تُحضَّر من منتجات سوق سيارغاو الطازجة، تمزج نكهات الجزيرة بأطباق عالمية، مع عصائر طازجة وأوعية سموذي. وفي جنرال لونا مقاهٍ نباتية كثيرة، لذا فهي أسهل رحلة للمسافرين النباتيين.",
    },
    programTitle: {
      en: "Programme and highlights",
      fr: "Programme et temps forts",
      es: "Programa y momentos clave",
      ru: "Программа и главное",
      ar: "البرنامج وأبرز اللحظات",
    },
    program: [
      {
        name: { en: "Surf", fr: "Surf", es: "Surf", ru: "Сёрфинг", ar: "ركوب الأمواج" },
        body: {
          en: "Coaching for every level with local surf coaches, from your first wave on a gentle beach break to improving your turns on the reef.",
          fr: "Du coaching pour tous les niveaux avec des coachs locaux, de votre première vague sur un beach break doux à vos virages sur le récif.",
          es: "Clases para todos los niveles con monitores locales, desde tu primera ola en un beach break suave hasta mejorar tus giros en el arrecife.",
          ru: "Тренировки для любого уровня с местными тренерами — от первой волны на мягком бич-брейке до отработки поворотов на рифе.",
          ar: "تدريب لكل المستويات مع مدرّبين محليين، من موجتكم الأولى على شاطئ هادئ إلى تحسين انعطافاتكم على الشعاب.",
        },
      },
      {
        name: { en: "Yoga and meditation", fr: "Yoga et méditation", es: "Yoga y meditación", ru: "Йога и медитация", ar: "اليوغا والتأمل" },
        body: {
          en: "Flow and restorative yoga in an open-air shala among the palms, with breathwork and guided meditation.",
          fr: "Yoga dynamique et restauratif dans une shala ouverte parmi les palmiers, avec respiration et méditation guidée.",
          es: "Yoga dinámico y restaurativo en una shala al aire libre entre palmeras, con respiración y meditación guiada.",
          ru: "Динамическая и восстановительная йога в открытой шале среди пальм, дыхательные практики и медитация с ведущим.",
          ar: "يوغا حركية واسترخائية في شالا مفتوحة بين أشجار النخيل، مع تمارين تنفّس وتأمل موجّه.",
        },
      },
      {
        name: { en: "Fitness", fr: "Fitness", es: "Fitness", ru: "Фитнес", ar: "اللياقة" },
        body: {
          en: "Surf-specific strength, mobility and conditioning sessions to paddle longer and surf better.",
          fr: "Renforcement, mobilité et cardio spécifiques au surf pour ramer plus longtemps et mieux surfer.",
          es: "Fuerza, movilidad y acondicionamiento específicos para el surf, para remar más y surfear mejor.",
          ru: "Силовые, мобилити- и функциональные тренировки под сёрфинг, чтобы дольше грести и лучше кататься.",
          ar: "تمارين قوة ومرونة ولياقة مخصّصة لركوب الأمواج، لتجديف أطول وأداء أفضل.",
        },
      },
      {
        name: { en: "Explore Siargao", fr: "Explorer Siargao", es: "Explorar Siargao", ru: "Знакомство с Сиаргао", ar: "استكشاف سيارغاو" },
        body: {
          en: "A boat day to Naked, Daku and Guyam islands, the palm-forest viewpoint, the Magpupungko rock pools at low tide and a sunset with a Filipino barbecue.",
          fr: "Une journée en bateau vers Naked, Daku et Guyam, le point de vue sur la forêt de cocotiers, les piscines naturelles de Magpupungko à marée basse et un coucher de soleil avec barbecue philippin.",
          es: "Un día en barco a Naked, Daku y Guyam, el mirador del bosque de cocoteros, las piscinas naturales de Magpupungko con marea baja y un atardecer con barbacoa filipina.",
          ru: "День на лодке к островам Naked, Daku и Guyam, смотровая площадка над кокосовым лесом, природные бассейны Магпупунгко в отлив и закат с филиппинским барбекю.",
          ar: "يوم بالقارب إلى جزر Naked وDaku وGuyam، وإطلالة على غابة النخيل، وأحواض ماغبوبونغكو الصخرية عند الجزر، وغروب مع شواء فلبيني.",
        },
      },
      {
        name: { en: "Wellness and recharge", fr: "Bien-être et récupération", es: "Bienestar y recuperación", ru: "Восстановление", ar: "العافية واستعادة النشاط" },
        body: {
          en: "Traditional hilot massage, ice baths and recovery time built into every day.",
          fr: "Massage hilot traditionnel, bains glacés et temps de récupération chaque jour.",
          es: "Masaje hilot tradicional, baños de hielo y tiempo de recuperación cada día.",
          ru: "Традиционный массаж хилот, ледяные ванны и время на восстановление каждый день.",
          ar: "تدليك هيلوت تقليدي، وحمّامات ثلج، ووقت للتعافي في كل يوم.",
        },
      },
      {
        name: { en: "Workshops and giving back", fr: "Ateliers et engagement local", es: "Talleres y compromiso local", ru: "Мастер-классы и добрые дела", ar: "ورش وعطاء للمجتمع" },
        body: {
          en: "A Filipino cooking class with a local chef (plant-based on request), a beach clean-up and coconut tree planting with the community.",
          fr: "Un cours de cuisine philippine avec un chef local (végétal sur demande), un nettoyage de plage et la plantation de cocotiers avec les habitants.",
          es: "Una clase de cocina filipina con un chef local (vegetal si lo pides), una limpieza de playa y plantación de cocoteros con la comunidad.",
          ru: "Урок филиппинской кухни с местным поваром (растительный по запросу), уборка пляжа и посадка кокосовых пальм вместе с местными жителями.",
          ar: "درس طبخ فلبيني مع طاهٍ محلي (نباتي عند الطلب)، وتنظيف الشاطئ، وزراعة أشجار جوز الهند مع المجتمع المحلي.",
        },
      },
      {
        name: { en: "Community", fr: "Communauté", es: "Comunidad", ru: "Сообщество", ar: "المجتمع" },
        body: {
          en: "On group dates, share the week with like-minded travellers from around the world. On a private retreat, it is just you and your people.",
          fr: "Aux dates de groupe, partagez la semaine avec des voyageurs du monde entier qui vous ressemblent. En retraite privée, c'est juste vous et vos proches.",
          es: "En las fechas de grupo, comparte la semana con viajeros afines de todo el mundo. En un retiro privado, solo tú y los tuyos.",
          ru: "В групповые даты вы проводите неделю с единомышленниками со всего мира. В частном ретрите — только вы и ваши близкие.",
          ar: "في مواعيد المجموعات، تشاركون الأسبوع مع مسافرين يشبهونكم من حول العالم. وفي الرحلة الخاصة، أنتم وأحباؤكم فقط.",
        },
      },
    ],
    variantsTitle: {
      en: "Choose your focus, any date of the year",
      fr: "Choisissez votre formule, toute l'année",
      es: "Elige tu enfoque, cualquier fecha del año",
      ru: "Выберите формат — в любые даты",
      ar: "اختاروا التركيز الذي يناسبكم، في أي وقت من العام",
    },
    variants: [
      {
        name: { en: "Surf & Yoga", fr: "Surf & Yoga", es: "Surf y Yoga", ru: "Сёрф и йога", ar: "أمواج ويوغا" },
        body: {
          en: "The balanced week: surf in the morning, yoga in the evening, time to rest in between.",
          fr: "La semaine équilibrée : surf le matin, yoga le soir, du repos entre les deux.",
          es: "La semana equilibrada: surf por la mañana, yoga por la tarde y descanso entre medias.",
          ru: "Сбалансированная неделя: сёрфинг утром, йога вечером и отдых между ними.",
          ar: "الأسبوع المتوازن: أمواج في الصباح، ويوغا في المساء، وراحة بينهما.",
        },
      },
      {
        name: { en: "Surf & Fitness", fr: "Surf & Fitness", es: "Surf y Fitness", ru: "Сёрф и фитнес", ar: "أمواج ولياقة" },
        body: {
          en: "For active guests who want to keep moving: surf sessions plus strength, mobility and conditioning.",
          fr: "Pour les actifs qui veulent bouger : sessions de surf plus renforcement, mobilité et cardio.",
          es: "Para quien quiere moverse sin parar: surf más fuerza, movilidad y acondicionamiento.",
          ru: "Для активных: сёрфинг плюс силовые, мобилити и функциональные тренировки.",
          ar: "للضيوف النشطين: جلسات أمواج مع تمارين القوة والمرونة واللياقة.",
        },
      },
      {
        name: { en: "Surf All Out", fr: "Surf All Out", es: "Surf All Out", ru: "Только сёрфинг", ar: "أمواج بلا حدود" },
        body: {
          en: "For surfers who want to progress fast: a full week of one-to-one coaching, matched to the tides and swell.",
          fr: "Pour progresser vite : une semaine complète de coaching individuel, calée sur les marées et la houle.",
          es: "Para progresar rápido: una semana entera de clases individuales, según mareas y oleaje.",
          ru: "Для быстрого прогресса: целая неделя индивидуальных тренировок под приливы и свелл.",
          ar: "لمن يريد التقدّم بسرعة: أسبوع كامل من التدريب الفردي، بحسب المد والأمواج.",
        },
      },
    ],
    seo: {
      title: {
        en: "Siargao Yoga & Surf Retreat",
        fr: "Retraite yoga et surf à Siargao",
        es: "Retiro de yoga y surf en Siargao",
        ru: "Йога и сёрф-ретрит на Сиаргао",
        ar: "رحلة يوغا وركوب أمواج في سيارغاو",
      },
      description: {
        en: "A 7-night private yoga and surf retreat in Siargao, with surf lessons, breathwork, hilot massage, a cooking lesson and vegan or vegetarian meals.",
        fr: "Retraite privée de 7 nuits à Siargao : yoga, cours de surf, respiration, massage hilot, cours de cuisine et repas végétariens ou véganes.",
        es: "Retiro privado de 7 noches en Siargao: yoga, clases de surf, respiración, masaje hilot, clase de cocina y comida vegetariana o vegana.",
        ru: "Частный ретрит на 7 ночей на Сиаргао: йога, уроки сёрфинга, дыхание, массаж хилот, урок кулинарии и вегетарианское или веганское питание.",
        ar: "رحلة خاصة لسبع ليالٍ في سيارغاو: يوغا، ودروس ركوب الأمواج، وتمارين تنفّس، وتدليك الهيلوت، ودرس طبخ، ووجبات نباتية.",
      },
    },
  },
  {
    slug: "palawan-island-detox",
    nights: 6,
    place: { en: "Palawan", fr: "Palawan", es: "Palawan", ru: "Палаван", ar: "بالاوان" },
    photo: "landing/luxury-philippines",
    title: {
      en: "Palawan Island Detox",
      fr: "Palawan : détox sur une île",
      es: "Palawan: detox en una isla",
      ru: "Палаван: детокс на острове",
      ar: "بالاوان: استرخاء وتخلّص من الضغوط على جزيرة",
    },
    short: {
      en: "A quiet island resort with spa treatments, healthy food, kayaking, snorkelling and a break from screens.",
      fr: "Un resort insulaire au calme, avec spa, cuisine saine, kayak, snorkeling et une pause loin des écrans.",
      es: "Un resort tranquilo en una isla con spa, comida sana, kayak, snorkel y un descanso de las pantallas.",
      ru: "Тихий островной курорт со спа, здоровой едой, каяками, снорклингом и отдыхом от экранов.",
      ar: "منتجع هادئ على جزيرة مع جلسات سبا وطعام صحي وتجديف وسنوركل واستراحة من الشاشات.",
    },
    intro: {
      en: "Six nights on an island resort near El Nido, where the only traffic is a boat. Daily yoga, spa treatments, a healthy kitchen and a gentle digital detox if you want one. You kayak to empty beaches, snorkel the reef in front of your room and watch the sun go down behind the limestone.",
      fr: "Six nuits dans un resort sur une île près d'El Nido, où le seul trafic est celui des bateaux. Yoga quotidien, soins au spa, cuisine saine et une détox numérique en douceur si vous le souhaitez. Kayak vers des plages désertes, snorkeling devant votre chambre et coucher de soleil derrière les falaises calcaires.",
      es: "Seis noches en un resort en una isla cerca de El Nido, donde el único tráfico es el de los barcos. Yoga diario, spa, cocina sana y una desconexión digital suave si te apetece. Kayak hasta playas vacías, snorkel en el arrecife frente a tu habitación y atardeceres detrás de la caliza.",
      ru: "Шесть ночей на островном курорте недалеко от Эль-Нидо, где единственный транспорт — лодка. Ежедневная йога, спа, здоровая кухня и мягкий цифровой детокс по желанию. Каяки к пустым пляжам, снорклинг на рифе прямо перед номером и закаты за известняковыми скалами.",
      ar: "ست ليالٍ في منتجع على جزيرة قرب إل نيدو، حيث لا حركة سوى القوارب. يوغا يومية، وجلسات سبا، ومطبخ صحي، وانقطاع لطيف عن الأجهزة إن رغبتم. تجديف إلى شواطئ خالية، وسنوركل على الشعاب أمام غرفتكم، وغروب خلف المنحدرات الكلسية.",
    },
    highlights: {
      en: ["Daily yoga and meditation facing the sea", "Two spa treatments, including a hilot massage", "Kayaking and snorkelling on the house reef", "A private boat day to the lagoons before the crowds", "Healthy, plant-forward meals planned in advance", "An optional digital detox: phones in a box, if you like"],
      fr: ["Yoga et méditation chaque jour face à la mer", "Deux soins au spa, dont un massage hilot", "Kayak et snorkeling sur le récif de l'hôtel", "Une journée en bateau privé vers les lagons, avant la foule", "Des repas sains et végétaux prévus à l'avance", "Une détox numérique facultative : téléphones au placard, si vous voulez"],
      es: ["Yoga y meditación diarios frente al mar", "Dos tratamientos de spa, uno de ellos masaje hilot", "Kayak y snorkel en el arrecife del hotel", "Un día en barco privado por las lagunas antes de las multitudes", "Comidas sanas y vegetales acordadas de antemano", "Desconexión digital opcional: el móvil en una caja, si quieres"],
      ru: ["Ежедневная йога и медитация с видом на море", "Две спа-процедуры, включая массаж хилот", "Каяки и снорклинг на домашнем рифе", "День на частной лодке по лагунам раньше толп", "Здоровое растительное меню, согласованное заранее", "Цифровой детокс по желанию: телефон в коробку, если хотите"],
      ar: ["يوغا وتأمل يومياً مطلّان على البحر", "جلستا سبا، منهما تدليك هيلوت", "تجديف وسنوركل على شعاب المنتجع", "يوم بقارب خاص إلى البحيرات قبل الزحام", "وجبات صحية نباتية مُتّفق عليها مسبقاً", "انقطاع اختياري عن الأجهزة: الهاتف في صندوق إن شئتم"],
    },
    day: {
      en: "Sunrise yoga, breakfast by the water, a kayak to a quiet beach, a light lunch, a spa treatment in the afternoon and an early dinner under the stars.",
      fr: "Yoga au lever du soleil, petit-déjeuner au bord de l'eau, kayak vers une plage tranquille, déjeuner léger, soin au spa l'après-midi et dîner tôt sous les étoiles.",
      es: "Yoga al amanecer, desayuno junto al agua, kayak hasta una playa tranquila, comida ligera, spa por la tarde y cena temprana bajo las estrellas.",
      ru: "Йога на рассвете, завтрак у воды, каяк к тихому пляжу, лёгкий обед, спа после полудня и ранний ужин под звёздами.",
      ar: "يوغا عند الشروق، وإفطار على حافة الماء، وتجديف إلى شاطئ هادئ، وغداء خفيف، وجلسة سبا بعد الظهر، وعشاء مبكر تحت النجوم.",
    },
    food: {
      en: "Island resorts cook to order, so we send your vegetarian or vegan menu to the kitchen before you arrive.",
      fr: "Les resorts insulaires cuisinent à la demande : nous envoyons votre menu végétarien ou végan à la cuisine avant votre arrivée.",
      es: "Los resorts en islas cocinan por encargo: enviamos tu menú vegetariano o vegano a la cocina antes de tu llegada.",
      ru: "Островные курорты готовят под заказ, поэтому мы заранее отправляем на кухню ваше вегетарианское или веганское меню.",
      ar: "تطبخ منتجعات الجزر حسب الطلب، لذا نرسل قائمتكم النباتية إلى المطبخ قبل وصولكم.",
    },
    seo: {
      title: {
        en: "Palawan Wellness & Detox Retreat",
        fr: "Retraite détox et bien-être à Palawan",
        es: "Retiro detox y bienestar en Palawan",
        ru: "Детокс-ретрит на Палаване",
        ar: "رحلة استجمام وديتوكس في بالاوان",
      },
      description: {
        en: "A 6-night island detox retreat near El Nido, Palawan: yoga, spa, kayaking, snorkelling and healthy vegetarian or vegan meals.",
        fr: "Retraite détox de 6 nuits sur une île près d'El Nido, Palawan : yoga, spa, kayak, snorkeling et repas sains végétariens ou véganes.",
        es: "Retiro detox de 6 noches en una isla cerca de El Nido, Palawan: yoga, spa, kayak, snorkel y comida sana vegetariana o vegana.",
        ru: "Детокс-ретрит на 6 ночей на острове у Эль-Нидо, Палаван: йога, спа, каяки, снорклинг и здоровое вегетарианское или веганское питание.",
        ar: "رحلة ديتوكس لست ليالٍ على جزيرة قرب إل نيدو في بالاوان: يوغا وسبا وتجديف وسنوركل ووجبات نباتية صحية.",
      },
    },
  },
  {
    slug: "siquijor-healing-journey",
    nights: 5,
    place: { en: "Siquijor", fr: "Siquijor", es: "Siquijor", ru: "Сикихор", ar: "سيكيهور" },
    photo: "category/wellness",
    title: {
      en: "Siquijor Healing Journey",
      fr: "Siquijor : un voyage de guérison",
      es: "Siquijor: un viaje de sanación",
      ru: "Сикихор: путешествие к исцелению",
      ar: "سيكيهور: رحلة الشفاء",
    },
    short: {
      en: "An island known for its traditional healers, with hilot massage, waterfalls, cold springs and quiet beaches.",
      fr: "Une île connue pour ses guérisseurs traditionnels : massage hilot, cascades, sources fraîches et plages tranquilles.",
      es: "Una isla conocida por sus curanderos tradicionales: masaje hilot, cascadas, manantiales frescos y playas tranquilas.",
      ru: "Остров, известный традиционными целителями: массаж хилот, водопады, прохладные источники и тихие пляжи.",
      ar: "جزيرة معروفة بمعالجيها التقليديين، مع تدليك الهيلوت والشلالات والينابيع الباردة والشواطئ الهادئة.",
    },
    intro: {
      en: "Siquijor is known across the Philippines for its traditional healers and herbal remedies. Five nights on a small, green island with very little traffic: a hilot massage, a visit to learn about local healing traditions, swims under Cambugahay Falls and yoga on a quiet beach. It is the most soulful of our retreats.",
      fr: "Siquijor est connue dans tout le pays pour ses guérisseurs traditionnels et ses remèdes à base de plantes. Cinq nuits sur une petite île verte presque sans circulation : massage hilot, rencontre autour des traditions de guérison locales, baignades sous les cascades de Cambugahay et yoga sur une plage tranquille. C'est la plus spirituelle de nos retraites.",
      es: "Siquijor es conocida en todo el país por sus curanderos tradicionales y sus remedios de hierbas. Cinco noches en una isla pequeña y verde, casi sin tráfico: masaje hilot, un encuentro para conocer las tradiciones de sanación locales, baños bajo las cascadas de Cambugahay y yoga en una playa tranquila. Es el más espiritual de nuestros retiros.",
      ru: "Сикихор известен по всей стране своими традиционными целителями и травяными средствами. Пять ночей на маленьком зелёном острове почти без машин: массаж хилот, знакомство с местными традициями врачевания, купание под водопадами Камбугахай и йога на тихом пляже. Это самый душевный из наших ретритов.",
      ar: "تشتهر سيكيهور في أنحاء الفلبين بمعالجيها التقليديين وعلاجاتها العشبية. خمس ليالٍ على جزيرة صغيرة خضراء قليلة الحركة: تدليك هيلوت، وزيارة للتعرّف إلى تقاليد الشفاء المحلية، وسباحة تحت شلالات كامبوغاهاي، ويوغا على شاطئ هادئ. إنها أكثر رحلاتنا روحانية.",
    },
    highlights: {
      en: ["A traditional hilot massage with warm coconut oil", "Learning about Siquijor's healing traditions with a local guide", "Swims at Cambugahay Falls and a cold spring", "Daily yoga and sunset meditation", "A cooking lesson with local vegetables and coconut", "Snorkelling and an easy coastal loop by private car"],
      fr: ["Un massage hilot traditionnel à l'huile de coco tiède", "Découverte des traditions de guérison de Siquijor avec un guide local", "Baignades aux cascades de Cambugahay et dans une source fraîche", "Yoga quotidien et méditation au coucher du soleil", "Un cours de cuisine avec légumes locaux et noix de coco", "Snorkeling et tour de l'île en voiture privée"],
      es: ["Un masaje hilot tradicional con aceite de coco templado", "Conocer las tradiciones de sanación de Siquijor con un guía local", "Baños en las cascadas de Cambugahay y en un manantial fresco", "Yoga diario y meditación al atardecer", "Una clase de cocina con verduras locales y coco", "Snorkel y vuelta a la isla en coche privado"],
      ru: ["Традиционный массаж хилот с тёплым кокосовым маслом", "Знакомство с целительскими традициями Сикихора с местным гидом", "Купание у водопадов Камбугахай и в прохладном источнике", "Ежедневная йога и медитация на закате", "Урок кулинарии с местными овощами и кокосом", "Снорклинг и неспешная поездка вокруг острова на частной машине"],
      ar: ["تدليك هيلوت تقليدي بزيت جوز الهند الدافئ", "التعرّف إلى تقاليد الشفاء في سيكيهور مع مرشد محلي", "سباحة في شلالات كامبوغاهاي وفي نبع بارد", "يوغا يومية وتأمل عند الغروب", "درس طبخ بالخضار المحلية وجوز الهند", "سنوركل وجولة هادئة حول الجزيرة بسيارة خاصة"],
    },
    day: {
      en: "Slow yoga, a tropical breakfast, a swim at a waterfall before anyone else arrives, lunch in the shade, a hilot massage and dinner on the beach.",
      fr: "Yoga lent, petit-déjeuner tropical, baignade dans une cascade avant tout le monde, déjeuner à l'ombre, massage hilot et dîner sur la plage.",
      es: "Yoga suave, desayuno tropical, baño en una cascada antes que nadie, comida a la sombra, masaje hilot y cena en la playa.",
      ru: "Медленная йога, тропический завтрак, купание у водопада раньше всех, обед в тени, массаж хилот и ужин на пляже.",
      ar: "يوغا هادئة، وإفطار استوائي، وسباحة في شلال قبل وصول أي أحد، وغداء في الظل، وتدليك هيلوت، وعشاء على الشاطئ.",
    },
    food: {
      en: "Siquijor's kitchens use plenty of coconut, root vegetables and greens; we agree a vegetarian or vegan menu with each place in advance.",
      fr: "À Siquijor, on cuisine beaucoup la noix de coco, les tubercules et les légumes verts ; nous validons un menu végétarien ou végan avec chaque adresse à l'avance.",
      es: "En Siquijor se cocina mucho con coco, tubérculos y verduras; acordamos un menú vegetariano o vegano con cada lugar de antemano.",
      ru: "На Сикихоре много готовят с кокосом, корнеплодами и зеленью; мы заранее согласуем вегетарианское или веганское меню с каждым местом.",
      ar: "تعتمد مطابخ سيكيهور كثيراً على جوز الهند والخضار الجذرية والورقية؛ ونتّفق مسبقاً مع كل مكان على قائمة نباتية.",
    },
    seo: {
      title: {
        en: "Siquijor Healing & Wellness Retreat",
        fr: "Retraite bien-être et guérison à Siquijor",
        es: "Retiro de sanación y bienestar en Siquijor",
        ru: "Ретрит исцеления на Сикихоре",
        ar: "رحلة شفاء واستجمام في سيكيهور",
      },
      description: {
        en: "A 5-night healing retreat in Siquijor: hilot massage, local healing traditions, waterfalls, yoga and vegetarian or vegan meals.",
        fr: "Retraite de 5 nuits à Siquijor : massage hilot, traditions de guérison, cascades, yoga et repas végétariens ou véganes.",
        es: "Retiro de 5 noches en Siquijor: masaje hilot, tradiciones de sanación, cascadas, yoga y comida vegetariana o vegana.",
        ru: "Ретрит на 5 ночей на Сикихоре: массаж хилот, целительские традиции, водопады, йога и вегетарианское или веганское питание.",
        ar: "رحلة شفاء لخمس ليالٍ في سيكيهور: تدليك الهيلوت، وتقاليد الشفاء، والشلالات، واليوغا، ووجبات نباتية.",
      },
    },
  },
  {
    slug: "bohol-spa-beach-escape",
    nights: 5,
    place: { en: "Bohol", fr: "Bohol", es: "Bohol", ru: "Бохол", ar: "بوهول" },
    photo: "destination/bohol",
    title: {
      en: "Bohol Spa & Beach Escape",
      fr: "Bohol : spa et plage",
      es: "Bohol: spa y playa",
      ru: "Бохол: спа и пляж",
      ar: "بوهول: سبا وشاطئ",
    },
    short: {
      en: "A beachfront spa resort on Panglao, couples' treatments and a slow day on the Loboc River.",
      fr: "Un resort spa en bord de plage à Panglao, des soins en duo et une journée paisible sur la rivière Loboc.",
      es: "Un resort con spa frente a la playa en Panglao, tratamientos en pareja y un día tranquilo en el río Loboc.",
      ru: "Пляжный спа-курорт на Панглао, процедуры для пар и неспешный день на реке Лобок.",
      ar: "منتجع سبا على الشاطئ في بانغلاو، وجلسات للأزواج، ويوم هادئ على نهر لوبوك.",
    },
    intro: {
      en: "Five nights on Panglao, Bohol's beach island, in a resort with a proper spa. It is the easiest retreat to reach, with direct flights from Manila, and the gentlest: spa treatments for two, yoga on the sand, a paddle on the Loboc River and an afternoon among the Chocolate Hills.",
      fr: "Cinq nuits à Panglao, l'île plage de Bohol, dans un resort doté d'un vrai spa. C'est la retraite la plus simple d'accès, avec des vols directs depuis Manille, et la plus douce : soins en duo, yoga sur le sable, balade sur la rivière Loboc et après-midi dans les Chocolate Hills.",
      es: "Cinco noches en Panglao, la isla de playa de Bohol, en un resort con un spa de verdad. Es el retiro más fácil de alcanzar, con vuelos directos desde Manila, y el más suave: tratamientos en pareja, yoga en la arena, paddle en el río Loboc y una tarde entre las Chocolate Hills.",
      ru: "Пять ночей на Панглао, пляжном острове Бохола, в отеле с настоящим спа. Это самый доступный ретрит — прямые рейсы из Манилы — и самый мягкий: процедуры для двоих, йога на песке, сап по реке Лобок и день среди Шоколадных холмов.",
      ar: "خمس ليالٍ في بانغلاو، جزيرة الشواطئ في بوهول، في منتجع فيه سبا حقيقي. إنها أسهل رحلاتنا وصولاً، برحلات مباشرة من مانيلا، وأكثرها هدوءاً: جلسات سبا لشخصين، ويوغا على الرمل، وتجديف على نهر لوبوك، وعصر بين تلال الشوكولاتة.",
    },
    highlights: {
      en: ["Three spa treatments, including a couples' massage", "Yoga on the beach at sunrise", "Stand-up paddle or a quiet boat on the Loboc River", "The Chocolate Hills and the tarsier sanctuary, at your pace", "A cooking lesson with Boholano dishes made plant-based", "Snorkelling at Balicasag island"],
      fr: ["Trois soins au spa, dont un massage en duo", "Yoga sur la plage au lever du soleil", "Paddle ou bateau tranquille sur la rivière Loboc", "Les Chocolate Hills et le sanctuaire des tarsiers, à votre rythme", "Un cours de cuisine boholaine en version végétale", "Snorkeling à l'île de Balicasag"],
      es: ["Tres tratamientos de spa, entre ellos un masaje en pareja", "Yoga en la playa al amanecer", "Paddle o barca tranquila por el río Loboc", "Las Chocolate Hills y el santuario de tarseros, a tu ritmo", "Una clase de cocina de Bohol en versión vegetal", "Snorkel en la isla de Balicasag"],
      ru: ["Три спа-процедуры, включая массаж для пар", "Йога на пляже на рассвете", "Сап или тихая лодка по реке Лобок", "Шоколадные холмы и заповедник долгопятов в вашем темпе", "Урок кулинарии: блюда Бохола в растительной версии", "Снорклинг у острова Баликасаг"],
      ar: ["ثلاث جلسات سبا، منها تدليك للأزواج", "يوغا على الشاطئ عند الشروق", "تجديف وقوفاً أو قارب هادئ على نهر لوبوك", "تلال الشوكولاتة ومحمية التارسير على مهلكم", "درس طبخ لأطباق بوهول بنسخة نباتية", "سنوركل عند جزيرة باليكاساغ"],
    },
    day: {
      en: "Beach yoga, a long breakfast, a morning in the sea, lunch at the resort, an afternoon spa treatment and a candlelit dinner on the sand.",
      fr: "Yoga sur la plage, long petit-déjeuner, matinée dans la mer, déjeuner à l'hôtel, soin au spa l'après-midi et dîner aux chandelles sur le sable.",
      es: "Yoga en la playa, desayuno sin prisa, mañana en el mar, comida en el resort, spa por la tarde y cena con velas en la arena.",
      ru: "Йога на пляже, долгий завтрак, утро в море, обед в отеле, спа после полудня и ужин при свечах на песке.",
      ar: "يوغا على الشاطئ، وإفطار طويل، وصباح في البحر، وغداء في المنتجع، وجلسة سبا بعد الظهر، وعشاء على ضوء الشموع فوق الرمل.",
    },
    food: {
      en: "Panglao has a good choice of restaurants, and we confirm vegetarian or vegan menus with the resort before you travel.",
      fr: "Panglao offre un bon choix de restaurants, et nous confirmons les menus végétariens ou véganes avec l'hôtel avant votre départ.",
      es: "Panglao tiene buena oferta de restaurantes, y confirmamos los menús vegetarianos o veganos con el resort antes del viaje.",
      ru: "На Панглао хороший выбор ресторанов, а вегетарианское или веганское меню мы подтверждаем с отелем до поездки.",
      ar: "في بانغلاو خيارات جيدة من المطاعم، ونؤكد القوائم النباتية مع المنتجع قبل سفركم.",
    },
    seo: {
      title: {
        en: "Bohol Spa & Beach Wellness Retreat",
        fr: "Retraite spa et plage à Bohol",
        es: "Retiro de spa y playa en Bohol",
        ru: "Спа-ретрит на пляже Бохола",
        ar: "رحلة سبا وشاطئ في بوهول",
      },
      description: {
        en: "A 5-night spa and beach retreat on Panglao, Bohol: couples' treatments, beach yoga, the Loboc River and vegetarian or vegan meals.",
        fr: "Retraite spa et plage de 5 nuits à Panglao, Bohol : soins en duo, yoga sur la plage, rivière Loboc et repas végétariens ou véganes.",
        es: "Retiro de spa y playa de 5 noches en Panglao, Bohol: tratamientos en pareja, yoga en la playa, río Loboc y comida vegetariana o vegana.",
        ru: "Спа-ретрит на 5 ночей на Панглао, Бохол: процедуры для пар, йога на пляже, река Лобок и вегетарианское или веганское питание.",
        ar: "رحلة سبا وشاطئ لخمس ليالٍ في بانغلاو، بوهول: جلسات للأزواج، ويوغا على الشاطئ، ونهر لوبوك، ووجبات نباتية.",
      },
    },
  },
  {
    slug: "tagaytay-highland-retreat",
    nights: 3,
    place: { en: "Tagaytay", fr: "Tagaytay", es: "Tagaytay", ru: "Тагайтай", ar: "تاغايتاي" },
    photo: "retreat/tagaytay",
    title: {
      en: "Tagaytay Highland Retreat",
      fr: "Tagaytay : retraite dans les hauteurs",
      es: "Tagaytay: retiro en las alturas",
      ru: "Тагайтай: ретрит в горах",
      ar: "تاغايتاي: استجمام في المرتفعات",
    },
    short: {
      en: "Cool hillside air above Taal Lake, about two hours from Manila. A perfect first stop after the long flight from Europe.",
      fr: "L'air frais des collines au-dessus du lac Taal, à environ deux heures de Manille. La première étape idéale après le long vol depuis l'Europe.",
      es: "Aire fresco de montaña sobre el lago Taal, a unas dos horas de Manila. La primera parada perfecta tras el vuelo largo desde Europa.",
      ru: "Прохладный горный воздух над озером Таал, примерно в двух часах от Манилы. Идеальная первая остановка после долгого перелёта из Европы.",
      ar: "هواء المرتفعات المنعش فوق بحيرة تال، على بُعد ساعتين تقريباً من مانيلا. المحطة الأولى المثالية بعد الرحلة الطويلة من أوروبا.",
    },
    intro: {
      en: "Tagaytay sits on a ridge above Taal Lake and its volcano, cooler than the coast and green all year. Three nights here let you recover from the flight before the islands: a garden spa, gentle yoga, farm-to-table vegetarian food and walks with views over the lake. We pick you up at Manila airport and drive you straight up.",
      fr: "Tagaytay est perchée sur une crête au-dessus du lac Taal et de son volcan, plus fraîche que la côte et verte toute l'année. Trois nuits ici pour récupérer du vol avant les îles : spa au jardin, yoga doux, cuisine végétarienne de la ferme à la table et promenades avec vue sur le lac. Nous venons vous chercher à l'aéroport de Manille et vous y conduisons directement.",
      es: "Tagaytay está sobre una cresta que domina el lago Taal y su volcán, más fresca que la costa y verde todo el año. Tres noches aquí para recuperarte del vuelo antes de las islas: spa en un jardín, yoga suave, cocina vegetariana de la huerta a la mesa y paseos con vistas al lago. Te recogemos en el aeropuerto de Manila y subimos directamente.",
      ru: "Тагайтай расположен на хребте над озером Таал и его вулканом: здесь прохладнее, чем на побережье, и зелено круглый год. Три ночи, чтобы восстановиться после перелёта перед островами: спа в саду, мягкая йога, вегетарианская кухня с фермы и прогулки с видом на озеро. Мы встретим вас в аэропорту Манилы и сразу отвезём наверх.",
      ar: "تقع تاغايتاي على سلسلة تلال تطل على بحيرة تال وبركانها، وهي أبرد من الساحل وخضراء طوال العام. ثلاث ليالٍ هنا تتيح لكم التعافي من الرحلة قبل الجزر: سبا في حديقة، ويوغا لطيفة، وطعام نباتي من المزرعة إلى المائدة، ونزهات مطلّة على البحيرة. نستقبلكم في مطار مانيلا ونصعد بكم مباشرة.",
    },
    highlights: {
      en: ["Private pick-up at Manila airport and transfer up the hill", "A garden spa day with a hilot massage", "Gentle yoga to reset after the long flight", "Farm-to-table vegetarian and vegan meals", "A plant-based Filipino cooking lesson", "Views over Taal Lake and its volcano"],
      fr: ["Accueil privé à l'aéroport de Manille et transfert dans les hauteurs", "Une journée spa au jardin avec massage hilot", "Yoga doux pour récupérer du long vol", "Repas végétariens et véganes de la ferme à la table", "Un cours de cuisine philippine végétale", "Vue sur le lac Taal et son volcan"],
      es: ["Recogida privada en el aeropuerto de Manila y traslado a las alturas", "Un día de spa en un jardín con masaje hilot", "Yoga suave para recuperarte del vuelo largo", "Comidas vegetarianas y veganas de la huerta a la mesa", "Una clase de cocina filipina vegetal", "Vistas al lago Taal y su volcán"],
      ru: ["Частная встреча в аэропорту Манилы и трансфер в горы", "День в спа в саду с массажем хилот", "Мягкая йога, чтобы прийти в себя после перелёта", "Вегетарианская и веганская еда с фермы", "Урок растительной филиппинской кухни", "Виды на озеро Таал и вулкан"],
      ar: ["استقبال خاص في مطار مانيلا ونقل إلى المرتفعات", "يوم سبا في حديقة مع تدليك هيلوت", "يوغا لطيفة لاستعادة التوازن بعد الرحلة الطويلة", "وجبات نباتية من المزرعة إلى المائدة", "درس طبخ فلبيني نباتي", "إطلالات على بحيرة تال وبركانها"],
    },
    day: {
      en: "A late, slow breakfast with lake views, yoga in the garden, a vegetarian lunch from the farm, a spa treatment and an early night to beat the jet lag.",
      fr: "Petit-déjeuner tardif face au lac, yoga au jardin, déjeuner végétarien de la ferme, soin au spa et coucher tôt pour vaincre le décalage horaire.",
      es: "Desayuno tardío con vistas al lago, yoga en el jardín, comida vegetariana de la huerta, spa y a dormir pronto para vencer el jet lag.",
      ru: "Поздний неспешный завтрак с видом на озеро, йога в саду, вегетарианский обед с фермы, спа и ранний сон, чтобы победить джетлаг.",
      ar: "إفطار متأخر وهادئ مطلّ على البحيرة، ويوغا في الحديقة، وغداء نباتي من المزرعة، وجلسة سبا، ونوم مبكر للتغلّب على فارق التوقيت.",
    },
    food: {
      en: "Tagaytay is known for its farms and garden restaurants, which makes vegetarian and vegan eating easy.",
      fr: "Tagaytay est réputée pour ses fermes et ses restaurants-jardins : manger végétarien ou végan y est facile.",
      es: "Tagaytay es conocida por sus huertas y restaurantes con jardín, así que comer vegetariano o vegano es fácil.",
      ru: "Тагайтай известен фермами и ресторанами-садами, поэтому вегетарианцам и веганам здесь легко.",
      ar: "تشتهر تاغايتاي بمزارعها ومطاعم الحدائق، ما يجعل الأكل النباتي سهلاً.",
    },
    seo: {
      title: {
        en: "Tagaytay Wellness Retreat near Manila",
        fr: "Retraite bien-être à Tagaytay, près de Manille",
        es: "Retiro de bienestar en Tagaytay, cerca de Manila",
        ru: "Wellness-ретрит в Тагайтае у Манилы",
        ar: "رحلة استجمام في تاغايتاي قرب مانيلا",
      },
      description: {
        en: "A 3-night wellness retreat in Tagaytay, two hours from Manila: garden spa, yoga, hilot massage and farm-to-table vegetarian or vegan food.",
        fr: "Retraite de 3 nuits à Tagaytay, à deux heures de Manille : spa, yoga, massage hilot et cuisine végétarienne ou végane de la ferme.",
        es: "Retiro de 3 noches en Tagaytay, a dos horas de Manila: spa, yoga, masaje hilot y comida vegetariana o vegana de la huerta.",
        ru: "Ретрит на 3 ночи в Тагайтае, в двух часах от Манилы: спа, йога, массаж хилот и вегетарианская или веганская еда с фермы.",
        ar: "رحلة استجمام لثلاث ليالٍ في تاغايتاي على بُعد ساعتين من مانيلا: سبا ويوغا وتدليك هيلوت وطعام نباتي من المزرعة.",
      },
    },
  },
];

// ──────────────────────────────────────────────────── PRIVATE / GROUP / CORPORATE

export type RetreatType = {
  slug: "private-retreats" | "group-retreats" | "corporate-retreats";
  photo: string;
  who: string; // trip builder prefill
  menu: L;
  title: L;
  intro: L;
  points: L<string[]>;
  faqs: FAQ[];
  seo: { title: L; description: L };
};

export const retreatsMenuAll: L = { en: "All retreats", fr: "Toutes les retraites", es: "Todos los retiros", ru: "Все ретриты", ar: "جميع الرحلات" };

export const retreatTypes: RetreatType[] = [
  {
    slug: "private-retreats",
    photo: "landing/luxury-philippines",
    who: "couple",
    menu: { en: "Private retreats", fr: "Retraites privées", es: "Retiros privados", ru: "Частные ретриты", ar: "رحلات خاصة" },
    title: {
      en: "Private wellness retreats, on your dates",
      fr: "Retraites bien-être privées, à vos dates",
      es: "Retiros de bienestar privados, en tus fechas",
      ru: "Частные wellness-ретриты в ваши даты",
      ar: "رحلات استجمام خاصة في المواعيد التي تختارونها",
    },
    intro: {
      en: "Just you, your partner, your family or a few friends. Any date, all year round, with a programme built entirely around what you want to feel at the end of it.",
      fr: "Vous seul, en couple, en famille ou entre amis. À n'importe quelle date, toute l'année, avec un programme entièrement construit autour de ce que vous voulez ressentir à la fin.",
      es: "Tú solo, en pareja, en familia o con unos amigos. Cualquier fecha, todo el año, con un programa construido por completo en torno a cómo quieres sentirte al final.",
      ru: "Только вы, ваш партнёр, семья или несколько друзей. Любые даты круглый год и программа, полностью построенная вокруг того, что вы хотите почувствовать в конце.",
      ar: "أنتم وحدكم، أو مع الشريك أو العائلة أو بضعة أصدقاء. في أي موعد وعلى مدار العام، مع برنامج مبني بالكامل حول ما تريدون الشعور به في نهايته.",
    },
    points: {
      en: ["Any dates, from three nights to two weeks", "Private yoga, surf, fitness and breathwork sessions at your level", "Treatments and spa time chosen for you", "Menus planned around your diet, including vegetarian and vegan", "Private transfers and your own guide", "Combine two retreats, or add one to a longer trip"],
      fr: ["N'importe quelles dates, de trois nuits à deux semaines", "Séances privées de yoga, surf, fitness et respiration à votre niveau", "Soins et temps au spa choisis pour vous", "Menus pensés selon votre régime, végétarien et végan compris", "Transferts privés et guide dédié", "Deux retraites combinées, ou une retraite ajoutée à un voyage plus long"],
      es: ["Cualquier fecha, de tres noches a dos semanas", "Sesiones privadas de yoga, surf, fitness y respiración a tu nivel", "Tratamientos y tiempo de spa elegidos para ti", "Menús según tu dieta, incluida vegetariana y vegana", "Traslados privados y guía propio", "Combina dos retiros o añade uno a un viaje más largo"],
      ru: ["Любые даты — от трёх ночей до двух недель", "Индивидуальные занятия йогой, сёрфингом, фитнесом и дыханием под ваш уровень", "Процедуры и спа, подобранные для вас", "Меню под ваше питание, включая вегетарианское и веганское", "Частные трансферы и личный гид", "Совместите два ретрита или добавьте один к более длинной поездке"],
      ar: ["أي مواعيد، من ثلاث ليالٍ إلى أسبوعين", "حصص خاصة لليوغا وركوب الأمواج واللياقة والتنفس بحسب مستواكم", "علاجات ووقت سبا مختار لكم", "قوائم طعام بحسب نظامكم الغذائي، بما فيها النباتي والنباتي الصرف", "تنقلات خاصة ومرشد خاص بكم", "اجمعوا بين رحلتين أو أضيفوا واحدة إلى رحلة أطول"],
    },
    faqs: [
      {
        q: { en: "Can a private retreat be just for one person?", fr: "Une retraite privée peut-elle être pour une seule personne ?", es: "¿Un retiro privado puede ser para una sola persona?", ru: "Можно ли провести частный ретрит одному?", ar: "هل يمكن أن تكون الرحلة الخاصة لشخص واحد؟" },
        a: { en: "Yes. Many guests come alone to rest and reset. We plan the same care, privacy and support for solo travellers.", fr: "Oui. Beaucoup de voyageurs viennent seuls pour se reposer. Nous prévoyons le même soin, la même intimité et le même accompagnement.", es: "Sí. Muchos viajeros vienen solos para descansar. Planificamos el mismo cuidado, intimidad y acompañamiento.", ru: "Да. Многие гости приезжают одни, чтобы отдохнуть и перезагрузиться. Для них — та же забота, приватность и поддержка.", ar: "نعم. يأتي كثير من الضيوف بمفردهم للراحة واستعادة التوازن، ونخطط لهم بالعناية والخصوصية والدعم نفسها." },
      },
      {
        q: { en: "How far in advance should I book?", fr: "Combien de temps à l'avance réserver ?", es: "¿Con cuánta antelación debo reservar?", ru: "За сколько времени бронировать?", ar: "متى يجب أن أحجز؟" },
        a: { en: "Two to three months is ideal, and earlier for December to April. We can sometimes arrange shorter notice.", fr: "Deux à trois mois, c'est idéal, et plus tôt pour décembre à avril. Des délais plus courts sont parfois possibles.", es: "Lo ideal son dos o tres meses, y antes para diciembre a abril. A veces podemos organizarlo con menos tiempo.", ru: "Идеально — за два-три месяца, а на декабрь–апрель раньше. Иногда получается и в сжатые сроки.", ar: "المثالي قبل شهرين إلى ثلاثة أشهر، وأبكر لفترة ديسمبر إلى أبريل. وأحياناً يمكننا الترتيب في مهلة أقصر." },
      },
    ],
    seo: {
      title: { en: "Private Wellness Retreats Philippines", fr: "Retraite bien-être privée aux Philippines", es: "Retiros de bienestar privados en Filipinas", ru: "Частные wellness-ретриты на Филиппинах", ar: "رحلات استجمام خاصة في الفلبين" },
      description: { en: "Private wellness retreats in the Philippines on your dates: yoga, surf, fitness, spa, vegan and vegetarian menus, private transfers.", fr: "Retraites bien-être privées aux Philippines, à vos dates : yoga, surf, fitness, spa, menus végétariens et véganes, transferts privés.", es: "Retiros de bienestar privados en Filipinas, en tus fechas: yoga, surf, fitness, spa, menús vegetarianos y veganos, traslados privados.", ru: "Частные wellness-ретриты на Филиппинах в ваши даты: йога, сёрфинг, фитнес, спа, вегетарианское и веганское меню, частные трансферы.", ar: "رحلات استجمام خاصة في الفلبين في مواعيدكم: يوغا وركوب أمواج ولياقة وسبا وقوائم نباتية وتنقلات خاصة." },
    },
  },
  {
    slug: "group-retreats",
    photo: "retreat/yoga",
    who: "friends",
    menu: { en: "Group retreats", fr: "Retraites en groupe", es: "Retiros en grupo", ru: "Групповые ретриты", ar: "رحلات جماعية" },
    title: {
      en: "Group wellness retreats",
      fr: "Retraites bien-être en groupe",
      es: "Retiros de bienestar en grupo",
      ru: "Групповые wellness-ретриты",
      ar: "رحلات استجمام جماعية",
    },
    intro: {
      en: "Bring your friends, your yoga studio, your running club or your family, and share a week of movement, good food and rest. Or ask us about upcoming group dates you can join.",
      fr: "Venez avec vos amis, votre studio de yoga, votre club de course ou votre famille, et partagez une semaine de mouvement, de bonne cuisine et de repos. Ou demandez-nous les prochaines dates de groupe ouvertes.",
      es: "Ven con tus amigos, tu estudio de yoga, tu club de running o tu familia y compartid una semana de movimiento, buena comida y descanso. O pregúntanos por las próximas fechas de grupo abiertas.",
      ru: "Приезжайте с друзьями, своей йога-студией, беговым клубом или семьёй и проведите вместе неделю движения, вкусной еды и отдыха. Или спросите нас о ближайших групповых датах, к которым можно присоединиться.",
      ar: "تعالوا مع أصدقائكم أو استوديو اليوغا أو نادي الجري أو عائلتكم، وتشاركوا أسبوعاً من الحركة والطعام الجيد والراحة. أو اسألونا عن مواعيد المجموعات القادمة التي يمكنكم الانضمام إليها.",
    },
    points: {
      en: ["A shared programme for your group, with time apart too", "Group yoga, surf lessons, fitness and breathwork", "Guided group activities, workshops and a Filipino cooking class", "Shared villas or a resort booked just for your group", "One menu for everyone, adapted for vegetarian and vegan guests", "Yoga and fitness teachers welcome to bring their own students"],
      fr: ["Un programme commun pour votre groupe, avec aussi du temps libre", "Yoga en groupe, cours de surf, fitness et respiration", "Activités de groupe guidées, ateliers et cours de cuisine philippine", "Villas partagées ou un resort réservé pour votre groupe", "Un menu pour tous, adapté aux végétariens et véganes", "Les professeurs de yoga et de fitness peuvent venir avec leurs élèves"],
      es: ["Un programa común para tu grupo, con tiempo libre también", "Yoga en grupo, clases de surf, fitness y respiración", "Actividades guiadas en grupo, talleres y clase de cocina filipina", "Villas compartidas o un resort reservado para tu grupo", "Un menú para todos, adaptado a vegetarianos y veganos", "Profesores de yoga y fitness pueden venir con sus alumnos"],
      ru: ["Общая программа для вашей группы и время для себя", "Групповая йога, уроки сёрфинга, фитнес и дыхательные практики", "Групповые занятия с ведущим, мастер-классы и урок филиппинской кухни", "Общие виллы или курорт целиком для вашей группы", "Единое меню с учётом вегетарианцев и веганов", "Преподаватели йоги и фитнеса могут приехать со своими учениками"],
      ar: ["برنامج مشترك لمجموعتكم مع وقت خاص أيضاً", "يوغا جماعية ودروس ركوب أمواج ولياقة وتمارين تنفّس", "أنشطة جماعية بإشراف مرشد وورش ودرس طبخ فلبيني", "فلل مشتركة أو منتجع محجوز لمجموعتكم", "قائمة طعام واحدة للجميع مكيّفة للنباتيين", "يمكن لمدرّبي اليوغا واللياقة القدوم مع طلابهم"],
    },
    faqs: [
      {
        q: { en: "How big can a group be?", fr: "Quelle taille de groupe ?", es: "¿De cuántas personas puede ser el grupo?", ru: "Насколько большой может быть группа?", ar: "ما حجم المجموعة الممكن؟" },
        a: { en: "From a few friends to larger groups. Tell us your numbers and we will find villas or resorts that fit.", fr: "De quelques amis à des groupes plus grands. Donnez-nous le nombre et nous trouverons villas ou resorts adaptés.", es: "Desde unos pocos amigos hasta grupos más grandes. Dinos cuántos sois y encontraremos villas o resorts adecuados.", ru: "От нескольких друзей до больших групп. Назовите число участников — подберём виллы или курорты.", ar: "من بضعة أصدقاء إلى مجموعات أكبر. أخبرونا بالعدد ونجد الفلل أو المنتجعات المناسبة." },
      },
      {
        q: { en: "I teach yoga. Can I lead my own retreat?", fr: "Je suis professeur de yoga. Puis-je animer ma propre retraite ?", es: "Soy profesor de yoga. ¿Puedo guiar mi propio retiro?", ru: "Я преподаю йогу. Могу ли я провести свой ретрит?", ar: "أنا مدرّب يوغا. هل يمكنني قيادة رحلتي الخاصة؟" },
        a: { en: "Yes. You lead the practice; we handle venues, transfers, food, excursions and support on the ground.", fr: "Oui. Vous animez la pratique ; nous gérons lieux, transferts, repas, excursions et assistance sur place.", es: "Sí. Tú guías la práctica; nosotros nos ocupamos de lugares, traslados, comidas, excursiones y apoyo sobre el terreno.", ru: "Да. Вы ведёте практику, а мы берём на себя площадки, трансферы, питание, экскурсии и поддержку на месте.", ar: "نعم. أنتم تقودون الممارسة، ونحن نتولى الأماكن والتنقلات والطعام والرحلات والدعم على الأرض." },
      },
    ],
    seo: {
      title: { en: "Group Wellness & Yoga Retreats Philippines", fr: "Retraite yoga en groupe aux Philippines", es: "Retiros de yoga en grupo en Filipinas", ru: "Групповые йога-ретриты на Филиппинах", ar: "رحلات يوغا جماعية في الفلبين" },
      description: { en: "Group wellness and yoga retreats in the Philippines for friends, studios and clubs: yoga, surf, fitness, workshops and vegan-friendly food.", fr: "Retraites bien-être et yoga en groupe aux Philippines pour amis, studios et clubs : yoga, surf, fitness, ateliers et cuisine végétale.", es: "Retiros de bienestar y yoga en grupo en Filipinas para amigos, estudios y clubes: yoga, surf, fitness, talleres y comida vegana.", ru: "Групповые wellness- и йога-ретриты на Филиппинах для друзей, студий и клубов: йога, сёрфинг, фитнес, мастер-классы и веганское меню.", ar: "رحلات استجمام ويوغا جماعية في الفلبين للأصدقاء والاستوديوهات والأندية: يوغا وأمواج ولياقة وورش وطعام نباتي." },
    },
  },
  {
    slug: "corporate-retreats",
    photo: "landing/corporate-travel",
    who: "group",
    menu: { en: "Corporate retreats", fr: "Retraites d'entreprise", es: "Retiros de empresa", ru: "Корпоративные ретриты", ar: "رحلات الشركات" },
    title: {
      en: "Corporate wellness retreats",
      fr: "Retraites bien-être pour les entreprises",
      es: "Retiros de bienestar para empresas",
      ru: "Корпоративные wellness-ретриты",
      ar: "رحلات استجمام للشركات",
    },
    intro: {
      en: "Give your team time to recharge, reconnect and think clearly. Leadership offsites, team wellness weeks and incentive retreats, with work sessions where you want them and real rest everywhere else.",
      fr: "Offrez à votre équipe le temps de se ressourcer, de se retrouver et de prendre du recul. Séminaires de direction, semaines bien-être et voyages de récompense, avec des sessions de travail là où vous le souhaitez et du vrai repos ailleurs.",
      es: "Dale a tu equipo tiempo para recargar, reconectar y pensar con claridad. Retiros de dirección, semanas de bienestar e incentivos, con sesiones de trabajo donde quieras y descanso real en todo lo demás.",
      ru: "Дайте команде время восстановиться, сблизиться и ясно подумать. Выездные сессии руководства, wellness-недели и мотивационные ретриты — с рабочими сессиями там, где нужно, и настоящим отдыхом во всём остальном.",
      ar: "امنحوا فريقكم وقتاً لاستعادة النشاط والتواصل والتفكير بوضوح. اجتماعات القيادة خارج المكتب، وأسابيع العافية، ورحلات التحفيز، مع جلسات عمل حيث تريدون وراحة حقيقية في كل ما عداها.",
    },
    points: {
      en: ["Leadership offsites and strategy days in calm, inspiring places", "Team wellness: yoga, fitness, breathwork and stress management", "Team building on the water: island hopping, kayaking and surf lessons", "Meeting space, Wi-Fi and equipment arranged where you need them", "Healthy menus for the whole team, including vegetarian and vegan", "One coordinator for flights, transfers, rooms and the programme"],
      fr: ["Séminaires de direction et journées stratégiques dans des lieux calmes et inspirants", "Bien-être d'équipe : yoga, fitness, respiration et gestion du stress", "Team building sur l'eau : îles en bateau, kayak et cours de surf", "Salle de réunion, Wi-Fi et matériel prévus là où il le faut", "Menus sains pour toute l'équipe, végétariens et véganes compris", "Un seul coordinateur pour vols, transferts, chambres et programme"],
      es: ["Retiros de dirección y jornadas de estrategia en lugares tranquilos e inspiradores", "Bienestar de equipo: yoga, fitness, respiración y gestión del estrés", "Team building en el agua: islas en barco, kayak y clases de surf", "Sala de reuniones, wifi y equipos donde los necesitéis", "Menús saludables para todo el equipo, incluidos vegetarianos y veganos", "Un solo coordinador para vuelos, traslados, habitaciones y programa"],
      ru: ["Выездные сессии руководства и стратегические дни в спокойных вдохновляющих местах", "Wellness для команды: йога, фитнес, дыхание и управление стрессом", "Тимбилдинг на воде: острова на лодке, каяки и уроки сёрфинга", "Переговорные, Wi-Fi и оборудование там, где они нужны", "Здоровое меню для всей команды, включая вегетарианское и веганское", "Один координатор для перелётов, трансферов, номеров и программы"],
      ar: ["اجتماعات قيادة وأيام استراتيجية في أماكن هادئة وملهمة", "عافية الفريق: يوغا ولياقة وتمارين تنفّس وإدارة التوتر", "بناء الفريق على الماء: التنقّل بين الجزر والتجديف ودروس ركوب الأمواج", "قاعات اجتماعات وإنترنت ومعدّات حيث تحتاجونها", "قوائم طعام صحية للفريق كله، بما فيها النباتي", "منسّق واحد للرحلات الجوية والتنقلات والغرف والبرنامج"],
    },
    faqs: [
      {
        q: { en: "Can we combine work sessions with the retreat?", fr: "Peut-on combiner sessions de travail et retraite ?", es: "¿Podemos combinar sesiones de trabajo con el retiro?", ru: "Можно ли совместить рабочие сессии с ретритом?", ar: "هل يمكن الجمع بين جلسات العمل والرحلة؟" },
        a: { en: "Yes. Most teams plan focused morning sessions and keep afternoons for wellness and the sea. We arrange the meeting space and equipment.", fr: "Oui. La plupart des équipes travaillent le matin et gardent l'après-midi pour le bien-être et la mer. Nous prévoyons salle et matériel.", es: "Sí. La mayoría de equipos trabajan por la mañana y dejan las tardes para el bienestar y el mar. Organizamos sala y equipos.", ru: "Да. Обычно команды работают утром, а после обеда — wellness и море. Мы организуем переговорную и оборудование.", ar: "نعم. تخطط معظم الفرق لجلسات صباحية مركّزة وتترك فترة ما بعد الظهر للعافية والبحر. ونرتّب قاعة الاجتماعات والمعدّات." },
      },
      {
        q: { en: "Do you handle flights for the whole team?", fr: "Gérez-vous les vols de toute l'équipe ?", es: "¿Gestionáis los vuelos de todo el equipo?", ru: "Организуете ли вы перелёты для всей команды?", ar: "هل تتولون رحلات الفريق كله؟" },
        a: { en: "We arrange domestic flights, transfers and boats inside the Philippines, and coordinate arrivals so everyone starts together.", fr: "Nous organisons vols intérieurs, transferts et bateaux aux Philippines, et coordonnons les arrivées pour que tout le monde commence ensemble.", es: "Organizamos vuelos nacionales, traslados y barcos dentro de Filipinas y coordinamos las llegadas para que todos empiecen a la vez.", ru: "Мы организуем внутренние перелёты, трансферы и лодки по Филиппинам и координируем прилёты, чтобы все начали вместе.", ar: "نرتّب الرحلات الداخلية والتنقلات والقوارب داخل الفلبين، وننسّق مواعيد الوصول ليبدأ الجميع معاً." },
      },
    ],
    seo: {
      title: { en: "Corporate Wellness Retreats Philippines", fr: "Retraite d'entreprise bien-être Philippines", es: "Retiros de empresa y bienestar en Filipinas", ru: "Корпоративные wellness-ретриты, Филиппины", ar: "رحلات استجمام للشركات في الفلبين" },
      description: { en: "Corporate wellness retreats in the Philippines: leadership offsites, team wellness and incentive retreats with yoga, fitness, island days and healthy menus.", fr: "Retraites bien-être d'entreprise aux Philippines : séminaires de direction, bien-être d'équipe et incentives avec yoga, fitness, îles et menus sains.", es: "Retiros de bienestar para empresas en Filipinas: retiros de dirección, bienestar de equipo e incentivos con yoga, fitness, islas y menús saludables.", ru: "Корпоративные wellness-ретриты на Филиппинах: выездные сессии, wellness для команды и мотивационные поездки с йогой, фитнесом, островами и здоровым меню.", ar: "رحلات استجمام للشركات في الفلبين: اجتماعات قيادة وعافية الفريق ورحلات تحفيز مع اليوغا واللياقة والجزر والطعام الصحي." },
    },
  },
];

export const getRetreat = (slug: string) => retreats.find((r) => r.slug === slug);
