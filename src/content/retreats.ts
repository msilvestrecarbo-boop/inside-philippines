import type { L } from "@/i18n/config";
import type { FAQ } from "./types";

/**
 * Wellness retreats: a top-menu section at /{lang}/wellness-retreats with one
 * page per retreat. Activities (yoga, surf, cooking lessons, hilot, breathwork)
 * and vegetarian / vegan food are part of every retreat. Every string is
 * translated in all five languages. No prices: these are designed per guest.
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
    en: "Yoga by the sea, surf lessons, Filipino cooking classes, hilot massage and fully vegetarian or vegan food. Five private retreats, designed around you, with time to actually rest.",
    fr: "Yoga face à la mer, cours de surf, cours de cuisine philippine, massage hilot et une cuisine entièrement végétarienne ou végane. Cinq retraites privées, pensées pour vous, avec le temps de vraiment vous reposer.",
    es: "Yoga frente al mar, clases de surf, clases de cocina filipina, masaje hilot y comida totalmente vegetariana o vegana. Cinco retiros privados, diseñados a tu medida, con tiempo para descansar de verdad.",
    ru: "Йога у моря, уроки сёрфинга, уроки филиппинской кухни, массаж хилот и полностью вегетарианское или веганское питание. Пять частных ретритов, созданных под вас, со временем на настоящий отдых.",
    ar: "يوغا على شاطئ البحر، ودروس ركوب الأمواج، ودروس طبخ فلبيني، وتدليك الهيلوت، وطعام نباتي أو نباتي صرف بالكامل. خمس رحلات استجمام خاصة مصمّمة لكم، مع وقت كافٍ للراحة الحقيقية.",
  } as L,
  retreatsTitle: { en: "Choose your retreat", fr: "Choisissez votre retraite", es: "Elige tu retiro", ru: "Выберите свой ретрит", ar: "اختاروا رحلتكم" } as L,
  nightsLabel: { en: "nights", fr: "nuits", es: "noches", ru: "ночей", ar: "ليالٍ" } as L,
  activitiesTitle: {
    en: "Activities included in every retreat",
    fr: "Les activités de chaque retraite",
    es: "Actividades en cada retiro",
    ru: "Занятия в каждом ретрите",
    ar: "الأنشطة في كل رحلة",
  } as L,
  activities: [
    {
      key: "yoga",
      photo: "retreat/yoga",
      name: { en: "Yoga", fr: "Yoga", es: "Yoga", ru: "Йога", ar: "اليوغا" } as L,
      body: {
        en: "Morning classes facing the sea or the garden, private or in a small group, for complete beginners to regular practitioners.",
        fr: "Des cours le matin face à la mer ou au jardin, en privé ou en petit groupe, du grand débutant au pratiquant régulier.",
        es: "Clases por la mañana frente al mar o al jardín, en privado o en grupo reducido, desde principiantes hasta practicantes habituales.",
        ru: "Утренние занятия с видом на море или сад, индивидуально или в маленькой группе — от новичков до опытных практиков.",
        ar: "حصص صباحية مطلّة على البحر أو الحديقة، خاصة أو ضمن مجموعة صغيرة، للمبتدئين تماماً وللممارسين المنتظمين.",
      } as L,
    },
    {
      key: "surf",
      photo: "category/surf",
      name: { en: "Surf lessons", fr: "Cours de surf", es: "Clases de surf", ru: "Уроки сёрфинга", ar: "دروس ركوب الأمواج" } as L,
      body: {
        en: "Gentle lessons with local coaches on beginner-friendly waves, timed to the tide. No experience needed.",
        fr: "Des cours en douceur avec des coachs locaux, sur des vagues faciles et à la bonne marée. Aucune expérience nécessaire.",
        es: "Clases tranquilas con monitores locales en olas para principiantes, según la marea. No hace falta experiencia.",
        ru: "Спокойные уроки с местными тренерами на волнах для новичков, по приливу. Опыт не нужен.",
        ar: "دروس هادئة مع مدرّبين محليين على أمواج مناسبة للمبتدئين وفي توقيت المدّ المناسب. لا حاجة إلى خبرة سابقة.",
      } as L,
    },
    {
      key: "cooking",
      photo: "retreat/cooking",
      name: { en: "Cooking lessons", fr: "Cours de cuisine", es: "Clases de cocina", ru: "Уроки кулинарии", ar: "دروس الطبخ" } as L,
      body: {
        en: "A hands-on Filipino cooking class, fully vegetarian or vegan on request: coconut curries, fresh spring rolls and tropical fruit desserts.",
        fr: "Un cours de cuisine philippine pratique, entièrement végétarien ou végan sur demande : currys au coco, rouleaux de printemps frais et desserts aux fruits tropicaux.",
        es: "Una clase práctica de cocina filipina, totalmente vegetariana o vegana si lo pides: guisos con coco, rollitos frescos y postres de fruta tropical.",
        ru: "Практический урок филиппинской кухни, полностью вегетарианский или веганский по запросу: блюда на кокосовом молоке, свежие спринг-роллы и десерты из тропических фруктов.",
        ar: "درس عملي في الطبخ الفلبيني، نباتي أو نباتي صرف بالكامل عند الطلب: أطباق بحليب جوز الهند، ولفائف ربيع طازجة، وحلويات بالفواكه الاستوائية.",
      } as L,
    },
    {
      key: "hilot",
      photo: "gallery/massage-4",
      name: { en: "Hilot and spa", fr: "Hilot et spa", es: "Hilot y spa", ru: "Хилот и спа", ar: "الهيلوت والسبا" } as L,
      body: {
        en: "Hilot, the traditional Filipino massage with warm coconut oil, plus spa treatments at the places you stay.",
        fr: "Le hilot, massage traditionnel philippin à l'huile de coco tiède, et des soins au spa des adresses où vous dormez.",
        es: "El hilot, el masaje tradicional filipino con aceite de coco templado, y tratamientos de spa en los alojamientos.",
        ru: "Хилот — традиционный филиппинский массаж с тёплым кокосовым маслом, а также спа-процедуры в местах проживания.",
        ar: "الهيلوت، التدليك الفلبيني التقليدي بزيت جوز الهند الدافئ، إضافة إلى جلسات السبا في أماكن إقامتكم.",
      } as L,
    },
    {
      key: "breath",
      photo: "retreat/meditation",
      name: { en: "Meditation and breathwork", fr: "Méditation et respiration", es: "Meditación y respiración", ru: "Медитация и дыхание", ar: "التأمل وتمارين التنفس" } as L,
      body: {
        en: "Quiet sessions at sunrise or sunset to slow the mind down, never more than you want.",
        fr: "Des séances calmes au lever ou au coucher du soleil pour apaiser l'esprit, jamais plus que ce que vous souhaitez.",
        es: "Sesiones tranquilas al amanecer o al atardecer para calmar la mente, nunca más de lo que quieras.",
        ru: "Спокойные практики на рассвете или закате, чтобы замедлиться, — ровно столько, сколько хочется вам.",
        ar: "جلسات هادئة عند الشروق أو الغروب لتهدئة الذهن، دون أن تتجاوز ما ترغبون فيه.",
      } as L,
    },
    {
      key: "nature",
      photo: "destination/siquijor",
      name: { en: "Nature days", fr: "Journées nature", es: "Días de naturaleza", ru: "Дни на природе", ar: "أيام في الطبيعة" } as L,
      body: {
        en: "Waterfalls, kayaking, snorkelling and slow island hopping by private boat, away from the crowds.",
        fr: "Cascades, kayak, snorkeling et balades d'île en île en bateau privé, loin de la foule.",
        es: "Cascadas, kayak, snorkel e islas en barco privado, lejos de las multitudes.",
        ru: "Водопады, каяки, снорклинг и неспешные прогулки по островам на частной лодке, вдали от толп.",
        ar: "شلالات، وتجديف بالكاياك، وسنوركل، وتنقّل هادئ بين الجزر بقارب خاص بعيداً عن الزحام.",
      } as L,
    },
  ],
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
      en: "Siargao Yoga & Surf Reset",
      fr: "Siargao : yoga et surf pour se ressourcer",
      es: "Siargao: yoga y surf para recargar",
      ru: "Сиаргао: перезагрузка с йогой и сёрфингом",
      ar: "سيارغاو: استعادة النشاط باليوغا وركوب الأمواج",
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
      en: "General Luna has many vegetarian and vegan cafés, so this is the easiest retreat for plant-based travellers.",
      fr: "General Luna compte de nombreux cafés végétariens et véganes : c'est la retraite la plus simple pour les voyageurs végétaux.",
      es: "General Luna tiene muchos cafés vegetarianos y veganos: es el retiro más fácil para quien come vegetal.",
      ru: "В Дженерал-Луне много вегетарианских и веганских кафе, поэтому это самый простой ретрит для тех, кто ест растительное.",
      ar: "في جنرال لونا مقاهٍ نباتية كثيرة، لذا فهي أسهل رحلة للمسافرين النباتيين.",
    },
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

export const getRetreat = (slug: string) => retreats.find((r) => r.slug === slug);
