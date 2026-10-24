import type { L } from "@/i18n/config";

/**
 * Detailed programme for each wellness retreat: key facts, day-by-day
 * schedule, a sample daily timetable, inclusions and accommodation.
 * Schedules are examples and move with tides and weather. No prices.
 */

type Day = { title: L; body: L };
type Slot = { time: string; what: L };
export type RetreatDetails = {
  facts: { location: L; group: L; level: L; arrival: L; season: L };
  days: Day[];
  daily: Slot[];
  included: L<string[]>;
  stay: L;
};

export const detailLabels = {
  facts: {
    duration: { en: "Duration", fr: "Durée", es: "Duración", ru: "Длительность", ar: "المدة" },
    location: { en: "Location", fr: "Lieu", es: "Lugar", ru: "Место", ar: "المكان" },
    group: { en: "Group", fr: "Groupe", es: "Grupo", ru: "Группа", ar: "المجموعة" },
    level: { en: "Level", fr: "Niveau", es: "Nivel", ru: "Уровень", ar: "المستوى" },
    arrival: { en: "Arrival", fr: "Arrivée", es: "Llegada", ru: "Прибытие", ar: "الوصول" },
    season: { en: "Best season", fr: "Meilleure saison", es: "Mejor temporada", ru: "Лучший сезон", ar: "أفضل موسم" },
  },
  daysWord: { en: "days", fr: "jours", es: "días", ru: "дней", ar: "أيام" } as L,
  dayWord: { en: "Day", fr: "Jour", es: "Día", ru: "День", ar: "اليوم" } as L,
  scheduleTitle: { en: "Day-by-day schedule", fr: "Programme jour par jour", es: "Programa día a día", ru: "Программа по дням", ar: "البرنامج يوماً بيوم" } as L,
  dailyTitle: { en: "A typical day", fr: "Une journée type", es: "Un día tipo", ru: "Типичный день", ar: "يوم نموذجي" } as L,
  scheduleNote: {
    en: "This is an example schedule. We adapt it to the tides, the weather and your energy, and every activity is optional.",
    fr: "Ce programme est un exemple. Nous l'adaptons aux marées, à la météo et à votre énergie, et chaque activité est facultative.",
    es: "Este programa es un ejemplo. Lo adaptamos a las mareas, al tiempo y a tu energía, y cada actividad es opcional.",
    ru: "Это примерная программа. Мы подстраиваем её под приливы, погоду и ваше самочувствие, а любое занятие можно пропустить.",
    ar: "هذا برنامج نموذجي نكيّفه بحسب المدّ والطقس وطاقتكم، وكل نشاط فيه اختياري.",
  } as L,
  includedTitle: { en: "What's included", fr: "Ce qui est inclus", es: "Qué incluye", ru: "Что включено", ar: "ما يشمله البرنامج" } as L,
  notIncludedTitle: { en: "Not included", fr: "Non inclus", es: "No incluye", ru: "Не включено", ar: "غير مشمول" } as L,
  addOnsTitle: { en: "Optional extras", fr: "Options", es: "Extras opcionales", ru: "Дополнительно", ar: "إضافات اختيارية" } as L,
  stayTitle: { en: "Where you stay", fr: "Où vous dormez", es: "Dónde te alojas", ru: "Где вы живёте", ar: "مكان الإقامة" } as L,
  notIncluded: {
    en: ["International flights", "Domestic flights (we can book them with your trip)", "Alcoholic drinks", "Personal expenses and tips", "Extra treatments and private classes beyond the programme"],
    fr: ["Vols internationaux", "Vols intérieurs (nous pouvons les réserver avec votre voyage)", "Boissons alcoolisées", "Dépenses personnelles et pourboires", "Soins et cours privés en plus du programme"],
    es: ["Vuelos internacionales", "Vuelos nacionales (podemos reservarlos con tu viaje)", "Bebidas alcohólicas", "Gastos personales y propinas", "Tratamientos y clases privadas fuera del programa"],
    ru: ["Международные перелёты", "Внутренние перелёты (можем забронировать вместе с поездкой)", "Алкогольные напитки", "Личные расходы и чаевые", "Дополнительные процедуры и индивидуальные занятия сверх программы"],
    ar: ["الرحلات الدولية", "الرحلات الداخلية (يمكننا حجزها مع رحلتكم)", "المشروبات الكحولية", "المصاريف الشخصية والإكراميات", "العلاجات والحصص الخاصة الإضافية خارج البرنامج"],
  } as L<string[]>,
  addOns: {
    en: ["Private yoga, surf, Pilates or fitness classes", "Extra massages and spa treatments", "A private photo shoot", "Freediving or scuba diving", "Extra nights before or after the retreat", "Combine with another retreat or island"],
    fr: ["Cours privés de yoga, surf, Pilates ou fitness", "Massages et soins supplémentaires", "Une séance photo privée", "Apnée ou plongée sous-marine", "Nuits supplémentaires avant ou après la retraite", "Combinaison avec une autre retraite ou une autre île"],
    es: ["Clases privadas de yoga, surf, Pilates o fitness", "Masajes y tratamientos de spa extra", "Una sesión de fotos privada", "Apnea o buceo", "Noches extra antes o después del retiro", "Combinar con otro retiro u otra isla"],
    ru: ["Индивидуальные занятия йогой, сёрфингом, пилатесом или фитнесом", "Дополнительные массажи и спа-процедуры", "Частная фотосессия", "Фридайвинг или дайвинг", "Дополнительные ночи до или после ретрита", "Совмещение с другим ретритом или островом"],
    ar: ["حصص خاصة لليوغا أو ركوب الأمواج أو البيلاتس أو اللياقة", "جلسات تدليك وسبا إضافية", "جلسة تصوير خاصة", "الغوص الحر أو الغوص بالأسطوانات", "ليالٍ إضافية قبل الرحلة أو بعدها", "الجمع مع رحلة أو جزيرة أخرى"],
  } as L<string[]>,
};

const privateOrSmall: L = {
  en: "Private, or a small group (ask us for group dates)",
  fr: "Privé, ou en petit groupe (demandez-nous les dates)",
  es: "Privado o en grupo reducido (pregúntanos las fechas)",
  ru: "Индивидуально или в малой группе (уточните даты)",
  ar: "خاصة أو ضمن مجموعة صغيرة (اسألونا عن المواعيد)",
};
const allLevels: L = {
  en: "All levels, no experience needed",
  fr: "Tous niveaux, aucune expérience requise",
  es: "Todos los niveles, sin experiencia previa",
  ru: "Любой уровень, опыт не нужен",
  ar: "كل المستويات، دون خبرة مسبقة",
};
const insurance: L = {
  en: "Travel insurance with €2,000 cancellation cover and 24/7 WhatsApp support",
  fr: "Assurance voyage avec 2 000 € de garantie annulation et assistance WhatsApp 24 h/24",
  es: "Seguro de viaje con 2.000 € de cobertura de cancelación y asistencia por WhatsApp 24/7",
  ru: "Туристическая страховка с покрытием отмены до 2 000 € и поддержка в WhatsApp 24/7",
  ar: "تأمين سفر مع تغطية إلغاء بقيمة 2,000 يورو ودعم عبر واتساب على مدار الساعة",
};
const withInsurance = (x: L<string[]>): L<string[]> =>
  Object.fromEntries(Object.entries(x).map(([k, v]) => [k, [...(v as string[]), (insurance as Record<string, string>)[k]]])) as L<string[]>;

export const retreatDetails: Record<string, RetreatDetails> = {
  /* ───────────────────────────────────────────────────────────── SIARGAO */
  "siargao-yoga-surf-reset": {
    facts: {
      location: { en: "General Luna, Siargao", fr: "General Luna, Siargao", es: "General Luna, Siargao", ru: "Дженерал-Луна, Сиаргао", ar: "جنرال لونا، سيارغاو" },
      group: privateOrSmall,
      level: allLevels,
      arrival: { en: "Siargao airport (Sayak)", fr: "Aéroport de Siargao (Sayak)", es: "Aeropuerto de Siargao (Sayak)", ru: "Аэропорт Сиаргао (Саяк)", ar: "مطار سيارغاو (ساياك)" },
      season: { en: "All year; surf best from August to November", fr: "Toute l'année ; surf au top d'août à novembre", es: "Todo el año; surf mejor de agosto a noviembre", ru: "Круглый год; лучший сёрфинг с августа по ноябрь", ar: "طوال العام؛ أفضل الأمواج من أغسطس إلى نوفمبر" },
    },
    days: [
      {
        title: { en: "Arrival in General Luna", fr: "Arrivée à General Luna", es: "Llegada a General Luna", ru: "Прибытие в Дженерал-Луну", ar: "الوصول إلى جنرال لونا" },
        body: { en: "Private pick-up at the airport, welcome drink and time to settle into your villa. Sunset welcome dinner and an introduction to the week.", fr: "Accueil privé à l'aéroport, boisson de bienvenue et installation dans votre villa. Dîner de bienvenue au coucher du soleil et présentation de la semaine.", es: "Recogida privada en el aeropuerto, bebida de bienvenida y tiempo para instalarte en tu villa. Cena de bienvenida al atardecer y presentación de la semana.", ru: "Частная встреча в аэропорту, приветственный напиток и заселение на виллу. Приветственный ужин на закате и знакомство с программой недели.", ar: "استقبال خاص في المطار، ومشروب ترحيبي، ووقت للاستقرار في الفيلا. عشاء ترحيبي عند الغروب وتعريف ببرنامج الأسبوع." },
      },
      {
        title: { en: "First waves", fr: "Premières vagues", es: "Primeras olas", ru: "Первые волны", ar: "الأمواج الأولى" },
        body: { en: "Surf theory, then your first coached session on a beginner-friendly break. Long lunch, a nap, and flow yoga in the open-air shala.", fr: "Théorie du surf, puis première séance encadrée sur une vague facile. Long déjeuner, sieste et yoga dynamique dans la shala en plein air.", es: "Teoría de surf y tu primera sesión con monitor en una ola para principiantes. Comida sin prisa, siesta y yoga dinámico en la shala al aire libre.", ru: "Теория сёрфинга и первое занятие с тренером на волне для новичков. Долгий обед, отдых и динамическая йога в открытой шале.", ar: "نظرية ركوب الأمواج ثم أول حصة مع المدرّب على موجة مناسبة للمبتدئين. غداء طويل وقيلولة ويوغا حركية في الشالا المفتوحة." },
      },
      {
        title: { en: "Surf and strength", fr: "Surf et renforcement", es: "Surf y fuerza", ru: "Сёрфинг и сила", ar: "الأمواج والقوة" },
        body: { en: "Early surf session on the morning tide, then surf-specific fitness. In the afternoon, video analysis of your waves and restorative yoga.", fr: "Session de surf tôt le matin à la marée, puis fitness spécifique surf. L'après-midi, analyse vidéo de vos vagues et yoga restauratif.", es: "Sesión de surf temprano con la marea de la mañana y fitness específico para surf. Por la tarde, análisis en vídeo de tus olas y yoga restaurativo.", ru: "Ранний сёрфинг на утреннем приливе и фитнес под сёрфинг. После обеда — видеоразбор ваших волн и восстановительная йога.", ar: "حصة أمواج مبكرة مع مدّ الصباح ثم لياقة مخصّصة لركوب الأمواج. بعد الظهر تحليل فيديو لأمواجكم ويوغا استرخائية." },
      },
      {
        title: { en: "Island hopping", fr: "D'île en île", es: "De isla en isla", ru: "Острова", ar: "التنقّل بين الجزر" },
        body: { en: "A full day by boat to Naked, Daku and Guyam islands, with snorkelling and a traditional boodle-fight lunch on the beach (plant-based on request).", fr: "Une journée en bateau vers Naked, Daku et Guyam, avec snorkeling et un déjeuner boodle fight traditionnel sur la plage (végétal sur demande).", es: "Un día entero en barco a Naked, Daku y Guyam, con snorkel y una comida boodle fight tradicional en la playa (vegetal si lo pides).", ru: "Целый день на лодке к островам Naked, Daku и Guyam: снорклинг и традиционный обед «будл-файт» на пляже (растительный по запросу).", ar: "يوم كامل بالقارب إلى جزر Naked وDaku وGuyam، مع سنوركل وغداء «بودل فايت» تقليدي على الشاطئ (نباتي عند الطلب)." },
      },
      {
        title: { en: "Recover and recharge", fr: "Récupérer et se ressourcer", es: "Recuperar y recargar", ru: "Восстановление", ar: "التعافي واستعادة النشاط" },
        body: { en: "Sunrise breathwork and an ice bath, then a traditional hilot massage. In the afternoon, a Filipino cooking class with a local chef.", fr: "Respiration au lever du soleil et bain glacé, puis massage hilot traditionnel. L'après-midi, cours de cuisine philippine avec un chef local.", es: "Respiración al amanecer y baño de hielo, y después masaje hilot tradicional. Por la tarde, clase de cocina filipina con un chef local.", ru: "Дыхательная практика на рассвете и ледяная ванна, затем традиционный массаж хилот. После обеда — урок филиппинской кухни с местным поваром.", ar: "تمارين تنفّس عند الشروق وحمّام ثلج، ثم تدليك هيلوت تقليدي. بعد الظهر درس طبخ فلبيني مع طاهٍ محلي." },
      },
      {
        title: { en: "Explore Siargao", fr: "Explorer Siargao", es: "Explorar Siargao", ru: "Сиаргао", ar: "استكشاف سيارغاو" },
        body: { en: "Morning surf, then the palm-forest viewpoint and the Magpupungko rock pools at low tide. Sunset with a Filipino barbecue.", fr: "Surf le matin, puis le point de vue sur la forêt de cocotiers et les piscines naturelles de Magpupungko à marée basse. Coucher de soleil et barbecue philippin.", es: "Surf por la mañana, luego el mirador del bosque de cocoteros y las piscinas de Magpupungko con marea baja. Atardecer con barbacoa filipina.", ru: "Утренний сёрфинг, затем смотровая площадка над кокосовым лесом и бассейны Магпупунгко в отлив. Закат с филиппинским барбекю.", ar: "أمواج في الصباح، ثم إطلالة غابة النخيل وأحواض ماغبوبونغكو عند الجزر. غروب مع شواء فلبيني." },
      },
      {
        title: { en: "Giving back and last waves", fr: "Engagement local et dernières vagues", es: "Compromiso local y últimas olas", ru: "Добрые дела и последние волны", ar: "العطاء والأمواج الأخيرة" },
        body: { en: "Your last coached surf session, a beach clean-up and coconut tree planting with the community. Sound bath at sunset and a farewell dinner.", fr: "Dernière séance de surf encadrée, nettoyage de plage et plantation de cocotiers avec les habitants. Bain sonore au coucher du soleil et dîner d'adieu.", es: "Última sesión de surf con monitor, limpieza de playa y plantación de cocoteros con la comunidad. Baño de sonido al atardecer y cena de despedida.", ru: "Последнее занятие сёрфингом с тренером, уборка пляжа и посадка кокосовых пальм с местными жителями. Звукотерапия на закате и прощальный ужин.", ar: "آخر حصة أمواج مع المدرّب، وتنظيف الشاطئ، وزراعة أشجار جوز الهند مع المجتمع. علاج بالصوت عند الغروب وعشاء وداع." },
      },
      {
        title: { en: "Departure", fr: "Départ", es: "Salida", ru: "Отъезд", ar: "المغادرة" },
        body: { en: "A last yoga class or swim, a slow breakfast and your private transfer to the airport.", fr: "Un dernier cours de yoga ou une baignade, un petit-déjeuner tranquille et votre transfert privé vers l'aéroport.", es: "Una última clase de yoga o un baño, desayuno sin prisa y traslado privado al aeropuerto.", ru: "Последняя йога или купание, неспешный завтрак и частный трансфер в аэропорт.", ar: "حصة يوغا أخيرة أو سباحة، وإفطار هادئ، ثم نقل خاص إلى المطار." },
      },
    ],
    daily: [
      { time: "06:30", what: { en: "Surf session (timed to the tide)", fr: "Session de surf (selon la marée)", es: "Sesión de surf (según la marea)", ru: "Сёрфинг (по приливу)", ar: "حصة ركوب الأمواج (بحسب المد)" } },
      { time: "09:00", what: { en: "Breakfast, fresh juices and smoothie bowls", fr: "Petit-déjeuner, jus frais et smoothie bowls", es: "Desayuno, zumos naturales y smoothie bowls", ru: "Завтрак, свежие соки и смузи-боулы", ar: "الإفطار والعصائر الطازجة وأوعية السموذي" } },
      { time: "10:30", what: { en: "Surf-specific fitness or surf theory", fr: "Fitness spécifique surf ou théorie", es: "Fitness para surf o teoría", ru: "Фитнес под сёрфинг или теория", ar: "لياقة مخصّصة أو نظرية ركوب الأمواج" } },
      { time: "12:30", what: { en: "Lunch", fr: "Déjeuner", es: "Comida", ru: "Обед", ar: "الغداء" } },
      { time: "14:00", what: { en: "Free time: pool, nap or massage", fr: "Temps libre : piscine, sieste ou massage", es: "Tiempo libre: piscina, siesta o masaje", ru: "Свободное время: бассейн, отдых или массаж", ar: "وقت حر: المسبح أو قيلولة أو تدليك" } },
      { time: "16:30", what: { en: "Yoga, breathwork or meditation", fr: "Yoga, respiration ou méditation", es: "Yoga, respiración o meditación", ru: "Йога, дыхание или медитация", ar: "يوغا أو تمارين تنفّس أو تأمل" } },
      { time: "18:00", what: { en: "Sunset", fr: "Coucher du soleil", es: "Atardecer", ru: "Закат", ar: "الغروب" } },
      { time: "19:00", what: { en: "Dinner", fr: "Dîner", es: "Cena", ru: "Ужин", ar: "العشاء" } },
    ],
    included: withInsurance({
      en: ["7 nights in a boutique villa, private or shared room", "Breakfast, lunch and dinner every day, with fresh juices", "Private airport transfers in Siargao", "5 coached surf sessions adapted to your level", "Surf video analysis and theory lessons", "Daily yoga, meditation, breathwork or sound bath", "Surf-specific fitness sessions", "Island-hopping boat day with a boodle-fight lunch", "Ice bath and recovery session", "A traditional hilot massage", "Filipino cooking class, beach clean-up and tree planting", "Transport for all programme activities"],
      fr: ["7 nuits en villa boutique, chambre privée ou partagée", "Petit-déjeuner, déjeuner et dîner chaque jour, avec jus frais", "Transferts privés aéroport à Siargao", "5 séances de surf encadrées adaptées à votre niveau", "Analyse vidéo et théorie du surf", "Yoga, méditation, respiration ou bain sonore chaque jour", "Séances de fitness spécifiques surf", "Journée en bateau d'île en île avec déjeuner boodle fight", "Bain glacé et séance de récupération", "Un massage hilot traditionnel", "Cours de cuisine philippine, nettoyage de plage et plantation d'arbres", "Transport pour toutes les activités du programme"],
      es: ["7 noches en villa boutique, habitación privada o compartida", "Desayuno, comida y cena cada día, con zumos naturales", "Traslados privados al aeropuerto en Siargao", "5 sesiones de surf con monitor adaptadas a tu nivel", "Análisis en vídeo y teoría de surf", "Yoga, meditación, respiración o baño de sonido cada día", "Sesiones de fitness específicas para surf", "Día de barco por las islas con comida boodle fight", "Baño de hielo y sesión de recuperación", "Un masaje hilot tradicional", "Clase de cocina filipina, limpieza de playa y plantación de árboles", "Transporte para todas las actividades del programa"],
      ru: ["7 ночей на бутик-вилле, отдельная или общая комната", "Завтрак, обед и ужин каждый день, свежие соки", "Частные трансферы из аэропорта Сиаргао и обратно", "5 занятий сёрфингом с тренером под ваш уровень", "Видеоразбор и теория сёрфинга", "Ежедневно йога, медитация, дыхание или звукотерапия", "Фитнес-тренировки под сёрфинг", "День на лодке по островам с обедом «будл-файт»", "Ледяная ванна и восстановительная сессия", "Традиционный массаж хилот", "Урок филиппинской кухни, уборка пляжа и посадка деревьев", "Транспорт на все занятия программы"],
      ar: ["7 ليالٍ في فيلا بوتيك، غرفة خاصة أو مشتركة", "الإفطار والغداء والعشاء يومياً مع عصائر طازجة", "تنقلات خاصة من المطار وإليه في سيارغاو", "5 حصص أمواج مع مدرّب بحسب مستواكم", "تحليل فيديو ودروس نظرية في ركوب الأمواج", "يوغا أو تأمل أو تمارين تنفّس أو علاج بالصوت يومياً", "حصص لياقة مخصّصة لركوب الأمواج", "يوم بالقارب بين الجزر مع غداء «بودل فايت»", "حمّام ثلج وجلسة تعافٍ", "تدليك هيلوت تقليدي", "درس طبخ فلبيني وتنظيف الشاطئ وزراعة الأشجار", "التنقلات لجميع أنشطة البرنامج"],
    }),
    stay: {
      en: "A boutique villa in General Luna with a pool, a few minutes from the main surf breaks. Choose a private room, or share a double room with your partner or a friend.",
      fr: "Une villa boutique avec piscine à General Luna, à quelques minutes des principaux spots de surf. Chambre privée, ou chambre double partagée avec votre partenaire ou un ami.",
      es: "Una villa boutique con piscina en General Luna, a pocos minutos de los principales spots de surf. Habitación privada o doble compartida con tu pareja o un amigo.",
      ru: "Бутик-вилла с бассейном в Дженерал-Луне, в нескольких минутах от главных спотов. Отдельная комната или общий двухместный номер с партнёром или другом.",
      ar: "فيلا بوتيك بمسبح في جنرال لونا، على بُعد دقائق من أهم مواقع ركوب الأمواج. غرفة خاصة، أو غرفة مزدوجة مشتركة مع الشريك أو صديق.",
    },
  },

  /* ───────────────────────────────────────────────────────────── PALAWAN */
  "palawan-island-detox": {
    facts: {
      location: { en: "An island resort near El Nido, Palawan", fr: "Un resort sur une île près d'El Nido, Palawan", es: "Un resort en una isla cerca de El Nido, Palawan", ru: "Островной курорт у Эль-Нидо, Палаван", ar: "منتجع على جزيرة قرب إل نيدو، بالاوان" },
      group: privateOrSmall,
      level: allLevels,
      arrival: { en: "El Nido airport, then a short boat ride", fr: "Aéroport d'El Nido, puis court trajet en bateau", es: "Aeropuerto de El Nido y un corto trayecto en barco", ru: "Аэропорт Эль-Нидо, затем короткий путь на лодке", ar: "مطار إل نيدو ثم رحلة قصيرة بالقارب" },
      season: { en: "December to May", fr: "Décembre à mai", es: "De diciembre a mayo", ru: "С декабря по май", ar: "من ديسمبر إلى مايو" },
    },
    days: [
      {
        title: { en: "Arrival on the island", fr: "Arrivée sur l'île", es: "Llegada a la isla", ru: "Прибытие на остров", ar: "الوصول إلى الجزيرة" },
        body: { en: "Flight to El Nido, private transfer and boat to your island resort. Welcome drink, a swim and a sunset meditation.", fr: "Vol pour El Nido, transfert privé et bateau jusqu'à votre resort. Boisson de bienvenue, baignade et méditation au coucher du soleil.", es: "Vuelo a El Nido, traslado privado y barco hasta tu resort. Bebida de bienvenida, un baño y meditación al atardecer.", ru: "Перелёт в Эль-Нидо, частный трансфер и лодка до курорта. Приветственный напиток, купание и медитация на закате.", ar: "رحلة إلى إل نيدو ونقل خاص وقارب إلى منتجعكم. مشروب ترحيبي وسباحة وتأمل عند الغروب." },
      },
      {
        title: { en: "Settle into island time", fr: "Au rythme de l'île", es: "Al ritmo de la isla", ru: "Островной ритм", ar: "إيقاع الجزيرة" },
        body: { en: "Sunrise yoga, snorkelling on the house reef and your first spa treatment. Early dinner and a long night's sleep.", fr: "Yoga au lever du soleil, snorkeling sur le récif de l'hôtel et premier soin au spa. Dîner tôt et longue nuit de sommeil.", es: "Yoga al amanecer, snorkel en el arrecife del hotel y tu primer tratamiento de spa. Cena temprana y una larga noche de sueño.", ru: "Йога на рассвете, снорклинг на домашнем рифе и первая спа-процедура. Ранний ужин и долгий сон.", ar: "يوغا عند الشروق وسنوركل على شعاب المنتجع وأول جلسة سبا. عشاء مبكر ونوم طويل." },
      },
      {
        title: { en: "Lagoons by private boat", fr: "Les lagons en bateau privé", es: "Lagunas en barco privado", ru: "Лагуны на частной лодке", ar: "البحيرات بقارب خاص" },
        body: { en: "Leave early to kayak the Big and Small Lagoons before the crowds, then a picnic lunch on a quiet beach.", fr: "Départ tôt pour le Big et le Small Lagoon en kayak avant la foule, puis pique-nique sur une plage tranquille.", es: "Salida temprano para recorrer en kayak la Big y la Small Lagoon antes de las multitudes, y picnic en una playa tranquila.", ru: "Ранний выезд, чтобы пройти на каяке Big и Small Lagoon до толп, затем пикник на тихом пляже.", ar: "انطلاق مبكر للتجديف في البحيرتين الكبيرة والصغيرة قبل الزحام، ثم غداء على شاطئ هادئ." },
      },
      {
        title: { en: "Digital detox day", fr: "Journée détox numérique", es: "Día de desconexión digital", ru: "День цифрового детокса", ar: "يوم الانقطاع عن الأجهزة" },
        body: { en: "Phones in a box if you like. A guided journaling session, a slow kayak along the coast and a sound bath at sunset.", fr: "Téléphones au placard si vous le souhaitez. Atelier d'écriture guidé, kayak tranquille le long de la côte et bain sonore au coucher du soleil.", es: "El móvil en una caja, si quieres. Sesión guiada de escritura, kayak tranquilo por la costa y baño de sonido al atardecer.", ru: "Телефон в коробку — по желанию. Ведение дневника с ведущим, неспешный каяк вдоль берега и звукотерапия на закате.", ar: "الهاتف في صندوق إن شئتم. جلسة كتابة يوميات موجّهة، وتجديف هادئ على طول الساحل، وعلاج بالصوت عند الغروب." },
      },
      {
        title: { en: "Move and breathe", fr: "Bouger et respirer", es: "Moverse y respirar", ru: "Движение и дыхание", ar: "الحركة والتنفس" },
        body: { en: "Pilates or a fitness session, a short hike to a viewpoint and a traditional hilot massage in the afternoon.", fr: "Pilates ou fitness, courte randonnée vers un point de vue et massage hilot traditionnel l'après-midi.", es: "Pilates o fitness, una caminata corta a un mirador y masaje hilot tradicional por la tarde.", ru: "Пилатес или фитнес, короткий подъём на смотровую площадку и традиционный массаж хилот после обеда.", ar: "بيلاتس أو لياقة، ومشي قصير إلى نقطة مطلّة، وتدليك هيلوت تقليدي بعد الظهر." },
      },
      {
        title: { en: "Cooking and stillness", fr: "Cuisine et calme", es: "Cocina y calma", ru: "Кухня и тишина", ar: "الطبخ والسكينة" },
        body: { en: "A plant-based cooking workshop with the resort kitchen, a free afternoon and a farewell dinner on the beach.", fr: "Atelier de cuisine végétale avec la cuisine du resort, après-midi libre et dîner d'adieu sur la plage.", es: "Taller de cocina vegetal con la cocina del resort, tarde libre y cena de despedida en la playa.", ru: "Мастер-класс растительной кухни с поварами курорта, свободное время и прощальный ужин на пляже.", ar: "ورشة طبخ نباتي مع مطبخ المنتجع، وبعد ظهر حر، وعشاء وداع على الشاطئ." },
      },
      {
        title: { en: "Departure", fr: "Départ", es: "Salida", ru: "Отъезд", ar: "المغادرة" },
        body: { en: "A sunrise swim, breakfast, then the boat and transfer back to El Nido airport.", fr: "Baignade au lever du soleil, petit-déjeuner, puis bateau et transfert vers l'aéroport d'El Nido.", es: "Baño al amanecer, desayuno y vuelta en barco y traslado al aeropuerto de El Nido.", ru: "Купание на рассвете, завтрак, лодка и трансфер в аэропорт Эль-Нидо.", ar: "سباحة عند الشروق وإفطار، ثم القارب والنقل إلى مطار إل نيدو." },
      },
    ],
    daily: [
      { time: "06:30", what: { en: "Sunrise yoga or meditation", fr: "Yoga ou méditation au lever du soleil", es: "Yoga o meditación al amanecer", ru: "Йога или медитация на рассвете", ar: "يوغا أو تأمل عند الشروق" } },
      { time: "08:00", what: { en: "Breakfast and fresh juice", fr: "Petit-déjeuner et jus frais", es: "Desayuno y zumo natural", ru: "Завтрак и свежий сок", ar: "الإفطار والعصير الطازج" } },
      { time: "09:30", what: { en: "Kayak, snorkel or boat trip", fr: "Kayak, snorkeling ou sortie en bateau", es: "Kayak, snorkel o salida en barco", ru: "Каяк, снорклинг или лодка", ar: "تجديف أو سنوركل أو رحلة بالقارب" } },
      { time: "12:30", what: { en: "Lunch", fr: "Déjeuner", es: "Comida", ru: "Обед", ar: "الغداء" } },
      { time: "14:00", what: { en: "Rest, reading or journaling", fr: "Repos, lecture ou écriture", es: "Descanso, lectura o escritura", ru: "Отдых, чтение или дневник", ar: "راحة أو قراءة أو كتابة يوميات" } },
      { time: "16:00", what: { en: "Spa treatment or Pilates", fr: "Soin au spa ou Pilates", es: "Spa o Pilates", ru: "Спа или пилатес", ar: "سبا أو بيلاتس" } },
      { time: "18:00", what: { en: "Sunset", fr: "Coucher du soleil", es: "Atardecer", ru: "Закат", ar: "الغروب" } },
      { time: "19:00", what: { en: "Dinner", fr: "Dîner", es: "Cena", ru: "Ужин", ar: "العشاء" } },
    ],
    included: withInsurance({
      en: ["6 nights in an island resort", "All meals with a healthy, plant-forward menu, fresh juices", "Private transfers between El Nido airport and the resort", "Daily yoga or meditation, plus Pilates or fitness", "Two spa treatments, including a hilot massage", "A private boat day to the lagoons with picnic lunch", "Kayaks and snorkelling gear", "Journaling session and sound bath", "Plant-based cooking workshop"],
      fr: ["6 nuits dans un resort sur une île", "Tous les repas, menu sain et végétal, jus frais", "Transferts privés entre l'aéroport d'El Nido et le resort", "Yoga ou méditation chaque jour, plus Pilates ou fitness", "Deux soins au spa, dont un massage hilot", "Une journée en bateau privé vers les lagons avec pique-nique", "Kayaks et matériel de snorkeling", "Atelier d'écriture et bain sonore", "Atelier de cuisine végétale"],
      es: ["6 noches en un resort en una isla", "Todas las comidas con menú sano y vegetal, zumos naturales", "Traslados privados entre el aeropuerto de El Nido y el resort", "Yoga o meditación diarios, más Pilates o fitness", "Dos tratamientos de spa, uno de ellos masaje hilot", "Un día en barco privado por las lagunas con picnic", "Kayaks y equipo de snorkel", "Sesión de escritura y baño de sonido", "Taller de cocina vegetal"],
      ru: ["6 ночей на островном курорте", "Полное питание со здоровым растительным меню, свежие соки", "Частные трансферы между аэропортом Эль-Нидо и курортом", "Ежедневная йога или медитация, плюс пилатес или фитнес", "Две спа-процедуры, включая массаж хилот", "День на частной лодке по лагунам с пикником", "Каяки и снаряжение для снорклинга", "Сессия с дневником и звукотерапия", "Мастер-класс растительной кухни"],
      ar: ["6 ليالٍ في منتجع على جزيرة", "جميع الوجبات بقائمة صحية نباتية وعصائر طازجة", "تنقلات خاصة بين مطار إل نيدو والمنتجع", "يوغا أو تأمل يومياً، إضافة إلى البيلاتس أو اللياقة", "جلستا سبا، منهما تدليك هيلوت", "يوم بقارب خاص إلى البحيرات مع غداء", "قوارب كاياك ومعدّات سنوركل", "جلسة كتابة يوميات وعلاج بالصوت", "ورشة طبخ نباتي"],
    }),
    stay: {
      en: "A quiet island resort near El Nido with rooms or villas facing the sea, a spa and its own reef.",
      fr: "Un resort tranquille sur une île près d'El Nido, avec chambres ou villas face à la mer, un spa et son propre récif.",
      es: "Un resort tranquilo en una isla cerca de El Nido, con habitaciones o villas frente al mar, spa y arrecife propio.",
      ru: "Тихий островной курорт у Эль-Нидо: номера или виллы с видом на море, спа и собственный риф.",
      ar: "منتجع هادئ على جزيرة قرب إل نيدو، بغرف أو فلل مطلّة على البحر وسبا وشعاب خاصة.",
    },
  },

  /* ──────────────────────────────────────────────────────────── SIQUIJOR */
  "siquijor-healing-journey": {
    facts: {
      location: { en: "Siquijor island", fr: "Île de Siquijor", es: "Isla de Siquijor", ru: "Остров Сикихор", ar: "جزيرة سيكيهور" },
      group: privateOrSmall,
      level: allLevels,
      arrival: { en: "Dumaguete airport, then a fast ferry (about 1 hour)", fr: "Aéroport de Dumaguete, puis ferry rapide (environ 1 h)", es: "Aeropuerto de Dumaguete y ferry rápido (alrededor de 1 h)", ru: "Аэропорт Думагете, затем скоростной паром (около 1 часа)", ar: "مطار دوماغيتي ثم عبّارة سريعة (نحو ساعة)" },
      season: { en: "December to May", fr: "Décembre à mai", es: "De diciembre a mayo", ru: "С декабря по май", ar: "من ديسمبر إلى مايو" },
    },
    days: [
      {
        title: { en: "Arrival on Siquijor", fr: "Arrivée à Siquijor", es: "Llegada a Siquijor", ru: "Прибытие на Сикихор", ar: "الوصول إلى سيكيهور" },
        body: { en: "Pick-up at Dumaguete airport, fast ferry across to Siquijor and transfer to your beach resort. Welcome dinner by the sea.", fr: "Accueil à l'aéroport de Dumaguete, ferry rapide jusqu'à Siquijor et transfert à votre resort. Dîner de bienvenue face à la mer.", es: "Recogida en el aeropuerto de Dumaguete, ferry rápido a Siquijor y traslado a tu resort. Cena de bienvenida junto al mar.", ru: "Встреча в аэропорту Думагете, скоростной паром на Сикихор и трансфер в отель. Приветственный ужин у моря.", ar: "استقبال في مطار دوماغيتي وعبّارة سريعة إلى سيكيهور ونقل إلى المنتجع. عشاء ترحيبي على البحر." },
      },
      {
        title: { en: "Island rhythm", fr: "Le rythme de l'île", es: "El ritmo de la isla", ru: "Ритм острова", ar: "إيقاع الجزيرة" },
        body: { en: "Morning yoga, a swim at Cambugahay Falls before anyone else arrives, and a hilot massage in the afternoon.", fr: "Yoga le matin, baignade aux cascades de Cambugahay avant tout le monde, et massage hilot l'après-midi.", es: "Yoga por la mañana, baño en las cascadas de Cambugahay antes que nadie y masaje hilot por la tarde.", ru: "Утренняя йога, купание у водопадов Камбугахай раньше всех и массаж хилот после обеда.", ar: "يوغا صباحية وسباحة في شلالات كامبوغاهاي قبل وصول أحد، وتدليك هيلوت بعد الظهر." },
      },
      {
        title: { en: "Healing traditions", fr: "Traditions de guérison", es: "Tradiciones de sanación", ru: "Целительские традиции", ar: "تقاليد الشفاء" },
        body: { en: "With a local guide, learn about Siquijor's traditional healers and herbal remedies, and visit the old balete tree. Mindfulness session at sunset.", fr: "Avec un guide local, découverte des guérisseurs traditionnels et des remèdes à base de plantes, et visite du vieux balete. Pleine conscience au coucher du soleil.", es: "Con un guía local, conoce a los curanderos tradicionales y sus remedios de hierbas, y visita el viejo árbol balete. Mindfulness al atardecer.", ru: "С местным гидом — о традиционных целителях и травах Сикихора, посещение старого дерева балете. Практика осознанности на закате.", ar: "مع مرشد محلي، تعرّفوا إلى معالجي سيكيهور التقليديين وعلاجاتهم العشبية، وزوروا شجرة باليتي القديمة. جلسة يقظة ذهنية عند الغروب." },
      },
      {
        title: { en: "Coast and cold spring", fr: "Côte et source fraîche", es: "Costa y manantial", ru: "Побережье и источник", ar: "الساحل والنبع البارد" },
        body: { en: "Snorkelling in a marine sanctuary, a dip in a cold spring and a quiet afternoon of journaling.", fr: "Snorkeling dans une réserve marine, baignade dans une source fraîche et après-midi d'écriture au calme.", es: "Snorkel en un santuario marino, un baño en un manantial frío y una tarde tranquila de escritura.", ru: "Снорклинг в морском заповеднике, купание в прохладном источнике и спокойный вечер с дневником.", ar: "سنوركل في محمية بحرية، وغطسة في نبع بارد، وبعد ظهر هادئ لكتابة اليوميات." },
      },
      {
        title: { en: "Cooking and sound", fr: "Cuisine et son", es: "Cocina y sonido", ru: "Кухня и звук", ar: "الطبخ والصوت" },
        body: { en: "A cooking class with local vegetables and coconut, a sound-healing session and a farewell dinner on the beach.", fr: "Cours de cuisine avec légumes locaux et noix de coco, séance de bain sonore et dîner d'adieu sur la plage.", es: "Clase de cocina con verduras locales y coco, sesión de sonido y cena de despedida en la playa.", ru: "Урок кулинарии с местными овощами и кокосом, звукотерапия и прощальный ужин на пляже.", ar: "درس طبخ بالخضار المحلية وجوز الهند، وجلسة علاج بالصوت، وعشاء وداع على الشاطئ." },
      },
      {
        title: { en: "Departure", fr: "Départ", es: "Salida", ru: "Отъезд", ar: "المغادرة" },
        body: { en: "Yoga, breakfast, then the ferry and transfer back to Dumaguete airport.", fr: "Yoga, petit-déjeuner, puis ferry et transfert vers l'aéroport de Dumaguete.", es: "Yoga, desayuno y vuelta en ferry y traslado al aeropuerto de Dumaguete.", ru: "Йога, завтрак, паром и трансфер в аэропорт Думагете.", ar: "يوغا وإفطار، ثم العبّارة والنقل إلى مطار دوماغيتي." },
      },
    ],
    daily: [
      { time: "07:00", what: { en: "Slow yoga", fr: "Yoga doux", es: "Yoga suave", ru: "Медленная йога", ar: "يوغا هادئة" } },
      { time: "08:30", what: { en: "Tropical breakfast", fr: "Petit-déjeuner tropical", es: "Desayuno tropical", ru: "Тропический завтрак", ar: "إفطار استوائي" } },
      { time: "10:00", what: { en: "Waterfall, snorkel or guided visit", fr: "Cascade, snorkeling ou visite guidée", es: "Cascada, snorkel o visita guiada", ru: "Водопад, снорклинг или экскурсия", ar: "شلال أو سنوركل أو زيارة مع مرشد" } },
      { time: "12:30", what: { en: "Lunch in the shade", fr: "Déjeuner à l'ombre", es: "Comida a la sombra", ru: "Обед в тени", ar: "غداء في الظل" } },
      { time: "14:00", what: { en: "Rest or massage", fr: "Repos ou massage", es: "Descanso o masaje", ru: "Отдых или массаж", ar: "راحة أو تدليك" } },
      { time: "16:30", what: { en: "Meditation or journaling", fr: "Méditation ou écriture", es: "Meditación o escritura", ru: "Медитация или дневник", ar: "تأمل أو كتابة يوميات" } },
      { time: "18:00", what: { en: "Sunset", fr: "Coucher du soleil", es: "Atardecer", ru: "Закат", ar: "الغروب" } },
      { time: "19:00", what: { en: "Dinner", fr: "Dîner", es: "Cena", ru: "Ужин", ar: "العشاء" } },
    ],
    included: withInsurance({
      en: ["5 nights in a beach resort", "All meals, vegetarian or vegan on request", "Private transfers, including the fast ferry from Dumaguete", "Daily yoga and meditation", "A traditional hilot massage", "A guided day on Siquijor's healing traditions", "Waterfalls, cold spring and snorkelling with a private driver", "Cooking class and sound-healing session"],
      fr: ["5 nuits dans un resort en bord de plage", "Tous les repas, végétariens ou véganes sur demande", "Transferts privés, ferry rapide depuis Dumaguete compris", "Yoga et méditation chaque jour", "Un massage hilot traditionnel", "Une journée guidée sur les traditions de guérison", "Cascades, source fraîche et snorkeling avec chauffeur privé", "Cours de cuisine et séance de bain sonore"],
      es: ["5 noches en un resort de playa", "Todas las comidas, vegetarianas o veganas si lo pides", "Traslados privados, incluido el ferry rápido desde Dumaguete", "Yoga y meditación cada día", "Un masaje hilot tradicional", "Un día guiado sobre las tradiciones de sanación", "Cascadas, manantial y snorkel con conductor privado", "Clase de cocina y sesión de sonido"],
      ru: ["5 ночей в пляжном отеле", "Полное питание, вегетарианское или веганское по запросу", "Частные трансферы, включая скоростной паром из Думагете", "Ежедневная йога и медитация", "Традиционный массаж хилот", "День с гидом о целительских традициях", "Водопады, источник и снорклинг с частным водителем", "Урок кулинарии и звукотерапия"],
      ar: ["5 ليالٍ في منتجع شاطئي", "جميع الوجبات، نباتية أو نباتية صرف عند الطلب", "تنقلات خاصة تشمل العبّارة السريعة من دوماغيتي", "يوغا وتأمل يومياً", "تدليك هيلوت تقليدي", "يوم مع مرشد حول تقاليد الشفاء", "شلالات ونبع بارد وسنوركل مع سائق خاص", "درس طبخ وجلسة علاج بالصوت"],
    }),
    stay: {
      en: "A small, quiet beach resort on Siquijor's west coast, chosen for its sunsets, garden and calm.",
      fr: "Un petit resort tranquille en bord de plage sur la côte ouest de Siquijor, choisi pour ses couchers de soleil, son jardin et son calme.",
      es: "Un resort pequeño y tranquilo en la costa oeste de Siquijor, elegido por sus atardeceres, su jardín y su calma.",
      ru: "Небольшой тихий пляжный отель на западном берегу Сикихора, выбранный за закаты, сад и спокойствие.",
      ar: "منتجع شاطئي صغير وهادئ على الساحل الغربي لسيكيهور، اخترناه لغروبه وحديقته وسكينته.",
    },
  },

  /* ─────────────────────────────────────────────────────────────── BOHOL */
  "bohol-spa-beach-escape": {
    facts: {
      location: { en: "Panglao, Bohol", fr: "Panglao, Bohol", es: "Panglao, Bohol", ru: "Панглао, Бохол", ar: "بانغلاو، بوهول" },
      group: privateOrSmall,
      level: allLevels,
      arrival: { en: "Bohol-Panglao airport", fr: "Aéroport de Bohol-Panglao", es: "Aeropuerto de Bohol-Panglao", ru: "Аэропорт Бохол-Панглао", ar: "مطار بوهول-بانغلاو" },
      season: { en: "All year; driest December to May", fr: "Toute l'année ; plus sec de décembre à mai", es: "Todo el año; más seco de diciembre a mayo", ru: "Круглый год; суше всего с декабря по май", ar: "طوال العام؛ الأكثر جفافاً من ديسمبر إلى مايو" },
    },
    days: [
      {
        title: { en: "Arrival in Panglao", fr: "Arrivée à Panglao", es: "Llegada a Panglao", ru: "Прибытие на Панглао", ar: "الوصول إلى بانغلاو" },
        body: { en: "Private pick-up at the airport, check-in at your beachfront resort and a welcome massage after the journey.", fr: "Accueil privé à l'aéroport, installation dans votre resort en bord de plage et massage de bienvenue après le voyage.", es: "Recogida privada en el aeropuerto, llegada a tu resort frente a la playa y masaje de bienvenida tras el viaje.", ru: "Частная встреча в аэропорту, заселение в пляжный отель и приветственный массаж после дороги.", ar: "استقبال خاص في المطار، وتسجيل الدخول في المنتجع الشاطئي، وتدليك ترحيبي بعد الرحلة." },
      },
      {
        title: { en: "Beach and spa", fr: "Plage et spa", es: "Playa y spa", ru: "Пляж и спа", ar: "الشاطئ والسبا" },
        body: { en: "Sunrise yoga on the sand, a morning swim and a couples' spa treatment in the afternoon.", fr: "Yoga sur le sable au lever du soleil, baignade le matin et soin en duo l'après-midi.", es: "Yoga en la arena al amanecer, baño por la mañana y tratamiento en pareja por la tarde.", ru: "Йога на песке на рассвете, утреннее купание и процедура для пары после обеда.", ar: "يوغا على الرمل عند الشروق، وسباحة صباحية، وجلسة سبا للأزواج بعد الظهر." },
      },
      {
        title: { en: "Bohol countryside", fr: "La campagne de Bohol", es: "El interior de Bohol", ru: "Бохол вглубь острова", ar: "ريف بوهول" },
        body: { en: "The Loboc River by paddleboard or a quiet boat, the Chocolate Hills and the tarsier sanctuary, with a healthy lunch on the way.", fr: "La rivière Loboc en paddle ou en bateau tranquille, les Chocolate Hills et le sanctuaire des tarsiers, avec un déjeuner sain en route.", es: "El río Loboc en paddle o en barca tranquila, las Chocolate Hills y el santuario de tarseros, con una comida sana por el camino.", ru: "Река Лобок на сапе или тихой лодке, Шоколадные холмы и заповедник долгопятов, здоровый обед по пути.", ar: "نهر لوبوك بلوح التجديف أو قارب هادئ، وتلال الشوكولاتة، ومحمية التارسير، مع غداء صحي في الطريق." },
      },
      {
        title: { en: "Turtles at Balicasag", fr: "Les tortues de Balicasag", es: "Tortugas en Balicasag", ru: "Черепахи у Баликасага", ar: "سلاحف باليكاساغ" },
        body: { en: "A morning boat to Balicasag island to snorkel with turtles, a restful afternoon and breathwork at sunset.", fr: "Bateau le matin vers l'île de Balicasag pour nager avec les tortues, après-midi au calme et respiration au coucher du soleil.", es: "Barco por la mañana a la isla de Balicasag para hacer snorkel con tortugas, tarde de descanso y respiración al atardecer.", ru: "Утренняя лодка к острову Баликасаг — снорклинг с черепахами, спокойный день и дыхательная практика на закате.", ar: "قارب صباحي إلى جزيرة باليكاساغ للسنوركل مع السلاحف، وبعد ظهر هادئ، وتمارين تنفّس عند الغروب." },
      },
      {
        title: { en: "Cook and unwind", fr: "Cuisiner et lâcher prise", es: "Cocinar y soltar", ru: "Кухня и отдых", ar: "الطبخ والاسترخاء" },
        body: { en: "A plant-based Boholano cooking lesson, a final spa treatment and a candlelit dinner on the sand.", fr: "Cours de cuisine boholaine en version végétale, dernier soin au spa et dîner aux chandelles sur le sable.", es: "Clase de cocina de Bohol en versión vegetal, último tratamiento de spa y cena con velas en la arena.", ru: "Урок бохольской кухни в растительной версии, последняя спа-процедура и ужин при свечах на песке.", ar: "درس طبخ لأطباق بوهول بنسخة نباتية، وجلسة سبا أخيرة، وعشاء على ضوء الشموع فوق الرمل." },
      },
      {
        title: { en: "Departure", fr: "Départ", es: "Salida", ru: "Отъезд", ar: "المغادرة" },
        body: { en: "A last swim and breakfast, then your private transfer to the airport.", fr: "Dernière baignade et petit-déjeuner, puis transfert privé vers l'aéroport.", es: "Último baño y desayuno, y traslado privado al aeropuerto.", ru: "Последнее купание и завтрак, затем частный трансфер в аэропорт.", ar: "سباحة أخيرة وإفطار، ثم نقل خاص إلى المطار." },
      },
    ],
    daily: [
      { time: "06:30", what: { en: "Beach yoga", fr: "Yoga sur la plage", es: "Yoga en la playa", ru: "Йога на пляже", ar: "يوغا على الشاطئ" } },
      { time: "08:00", what: { en: "Long breakfast", fr: "Long petit-déjeuner", es: "Desayuno sin prisa", ru: "Долгий завтрак", ar: "إفطار طويل" } },
      { time: "09:30", what: { en: "Swim, snorkel or excursion", fr: "Baignade, snorkeling ou excursion", es: "Baño, snorkel o excursión", ru: "Купание, снорклинг или экскурсия", ar: "سباحة أو سنوركل أو جولة" } },
      { time: "12:30", what: { en: "Lunch", fr: "Déjeuner", es: "Comida", ru: "Обед", ar: "الغداء" } },
      { time: "14:00", what: { en: "Rest by the pool", fr: "Repos au bord de la piscine", es: "Descanso junto a la piscina", ru: "Отдых у бассейна", ar: "راحة بجانب المسبح" } },
      { time: "16:00", what: { en: "Spa treatment or Pilates", fr: "Soin au spa ou Pilates", es: "Spa o Pilates", ru: "Спа или пилатес", ar: "سبا أو بيلاتس" } },
      { time: "18:00", what: { en: "Sunset", fr: "Coucher du soleil", es: "Atardecer", ru: "Закат", ar: "الغروب" } },
      { time: "19:00", what: { en: "Dinner", fr: "Dîner", es: "Cena", ru: "Ужин", ar: "العشاء" } },
    ],
    included: withInsurance({
      en: ["5 nights in a beachfront spa resort", "Daily breakfast and dinner, lunch on excursion days", "Private airport transfers", "Three spa treatments, including a couples' massage", "Daily beach yoga and breathwork", "A private countryside day: Loboc River, Chocolate Hills, tarsiers", "Boat trip to Balicasag with snorkelling gear", "Plant-based cooking lesson"],
      fr: ["5 nuits dans un resort spa en bord de plage", "Petit-déjeuner et dîner chaque jour, déjeuner les jours d'excursion", "Transferts privés aéroport", "Trois soins au spa, dont un massage en duo", "Yoga sur la plage et respiration chaque jour", "Une journée privée dans la campagne : rivière Loboc, Chocolate Hills, tarsiers", "Bateau vers Balicasag avec matériel de snorkeling", "Cours de cuisine végétale"],
      es: ["5 noches en un resort con spa frente a la playa", "Desayuno y cena diarios, comida en los días de excursión", "Traslados privados al aeropuerto", "Tres tratamientos de spa, uno de ellos en pareja", "Yoga en la playa y respiración cada día", "Un día privado por el interior: río Loboc, Chocolate Hills, tarseros", "Barco a Balicasag con equipo de snorkel", "Clase de cocina vegetal"],
      ru: ["5 ночей в пляжном спа-отеле", "Ежедневно завтрак и ужин, обед в дни экскурсий", "Частные трансферы из аэропорта и обратно", "Три спа-процедуры, включая массаж для пары", "Ежедневная йога на пляже и дыхательные практики", "Частный день вглубь острова: река Лобок, Шоколадные холмы, долгопяты", "Лодка к Баликасагу со снаряжением для снорклинга", "Урок растительной кухни"],
      ar: ["5 ليالٍ في منتجع سبا على الشاطئ", "الإفطار والعشاء يومياً والغداء في أيام الجولات", "تنقلات خاصة من المطار وإليه", "ثلاث جلسات سبا، منها تدليك للأزواج", "يوغا على الشاطئ وتمارين تنفّس يومياً", "يوم خاص في الريف: نهر لوبوك وتلال الشوكولاتة والتارسير", "رحلة بالقارب إلى باليكاساغ مع معدّات السنوركل", "درس طبخ نباتي"],
    }),
    stay: {
      en: "A beachfront resort on Panglao with a full spa, a pool and rooms a few steps from the sand.",
      fr: "Un resort en bord de plage à Panglao avec un vrai spa, une piscine et des chambres à quelques pas du sable.",
      es: "Un resort frente a la playa en Panglao con spa completo, piscina y habitaciones a pocos pasos de la arena.",
      ru: "Пляжный отель на Панглао с полноценным спа, бассейном и номерами в нескольких шагах от песка.",
      ar: "منتجع على شاطئ بانغلاو فيه سبا متكامل ومسبح وغرف على بُعد خطوات من الرمل.",
    },
  },

  /* ──────────────────────────────────────────────────────────── TAGAYTAY */
  "tagaytay-highland-retreat": {
    facts: {
      location: { en: "Tagaytay, about 2 hours from Manila", fr: "Tagaytay, à environ 2 h de Manille", es: "Tagaytay, a unas 2 h de Manila", ru: "Тагайтай, около 2 часов от Манилы", ar: "تاغايتاي، على بُعد نحو ساعتين من مانيلا" },
      group: privateOrSmall,
      level: allLevels,
      arrival: { en: "Manila airport, private car to Tagaytay", fr: "Aéroport de Manille, voiture privée jusqu'à Tagaytay", es: "Aeropuerto de Manila, coche privado a Tagaytay", ru: "Аэропорт Манилы, частная машина до Тагайтая", ar: "مطار مانيلا ثم سيارة خاصة إلى تاغايتاي" },
      season: { en: "All year; coolest December to February", fr: "Toute l'année ; plus frais de décembre à février", es: "Todo el año; más fresco de diciembre a febrero", ru: "Круглый год; прохладнее всего с декабря по февраль", ar: "طوال العام؛ الأبرد من ديسمبر إلى فبراير" },
    },
    days: [
      {
        title: { en: "Arrival from Manila", fr: "Arrivée depuis Manille", es: "Llegada desde Manila", ru: "Из Манилы", ar: "الوصول من مانيلا" },
        body: { en: "Private pick-up at Manila airport and the drive up to Tagaytay. Gentle stretching after the flight and an early farm-to-table dinner.", fr: "Accueil privé à l'aéroport de Manille et route vers Tagaytay. Étirements doux après le vol et dîner tôt, de la ferme à la table.", es: "Recogida privada en el aeropuerto de Manila y subida a Tagaytay. Estiramientos suaves tras el vuelo y cena temprana de la huerta a la mesa.", ru: "Частная встреча в аэропорту Манилы и дорога в Тагайтай. Мягкая растяжка после перелёта и ранний ужин с фермы.", ar: "استقبال خاص في مطار مانيلا والصعود إلى تاغايتاي. تمارين إطالة لطيفة بعد الرحلة وعشاء مبكر من المزرعة إلى المائدة." },
      },
      {
        title: { en: "Reset", fr: "Remise à zéro", es: "Reiniciar", ru: "Перезагрузка", ar: "إعادة الضبط" },
        body: { en: "A late breakfast with lake views, garden yoga, a hilot massage and sauna where available. Early night to beat the jet lag.", fr: "Petit-déjeuner tardif face au lac, yoga au jardin, massage hilot et sauna selon le lieu. Coucher tôt contre le décalage horaire.", es: "Desayuno tardío con vistas al lago, yoga en el jardín, masaje hilot y sauna donde la haya. A dormir pronto contra el jet lag.", ru: "Поздний завтрак с видом на озеро, йога в саду, массаж хилот и сауна, если есть. Ранний сон против джетлага.", ar: "إفطار متأخر مطلّ على البحيرة ويوغا في الحديقة وتدليك هيلوت وساونا حيث تتوفر. نوم مبكر للتغلّب على فارق التوقيت." },
      },
      {
        title: { en: "Farm and kitchen", fr: "Ferme et cuisine", es: "Huerta y cocina", ru: "Ферма и кухня", ar: "المزرعة والمطبخ" },
        body: { en: "A farm visit and a plant-based Filipino cooking lesson, a walk with views over Taal Lake and a sound bath or meditation in the evening.", fr: "Visite d'une ferme et cours de cuisine philippine végétale, promenade avec vue sur le lac Taal et bain sonore ou méditation le soir.", es: "Visita a una huerta y clase de cocina filipina vegetal, paseo con vistas al lago Taal y baño de sonido o meditación por la noche.", ru: "Поездка на ферму и урок растительной филиппинской кухни, прогулка с видом на озеро Таал и звукотерапия или медитация вечером.", ar: "زيارة مزرعة ودرس طبخ فلبيني نباتي، ونزهة مطلّة على بحيرة تال، وعلاج بالصوت أو تأمل في المساء." },
      },
      {
        title: { en: "Onward", fr: "Suite du voyage", es: "Seguir el viaje", ru: "Дальше в путь", ar: "متابعة الرحلة" },
        body: { en: "Breakfast, then your private transfer back to Manila airport for your flight to the islands or home.", fr: "Petit-déjeuner, puis transfert privé vers l'aéroport de Manille pour votre vol vers les îles ou le retour.", es: "Desayuno y traslado privado al aeropuerto de Manila para tu vuelo a las islas o de vuelta a casa.", ru: "Завтрак и частный трансфер в аэропорт Манилы — на острова или домой.", ar: "إفطار ثم نقل خاص إلى مطار مانيلا لرحلتكم إلى الجزر أو العودة." },
      },
    ],
    daily: [
      { time: "07:30", what: { en: "Gentle yoga in the garden", fr: "Yoga doux au jardin", es: "Yoga suave en el jardín", ru: "Мягкая йога в саду", ar: "يوغا لطيفة في الحديقة" } },
      { time: "09:00", what: { en: "Breakfast with lake views", fr: "Petit-déjeuner face au lac", es: "Desayuno con vistas al lago", ru: "Завтрак с видом на озеро", ar: "إفطار مطلّ على البحيرة" } },
      { time: "10:30", what: { en: "Walk or farm visit", fr: "Promenade ou visite de ferme", es: "Paseo o visita a la huerta", ru: "Прогулка или ферма", ar: "نزهة أو زيارة مزرعة" } },
      { time: "12:30", what: { en: "Farm-to-table lunch", fr: "Déjeuner de la ferme", es: "Comida de la huerta", ru: "Обед с фермы", ar: "غداء من المزرعة" } },
      { time: "14:00", what: { en: "Spa or rest", fr: "Spa ou repos", es: "Spa o descanso", ru: "Спа или отдых", ar: "سبا أو راحة" } },
      { time: "16:30", what: { en: "Meditation", fr: "Méditation", es: "Meditación", ru: "Медитация", ar: "تأمل" } },
      { time: "18:30", what: { en: "Dinner", fr: "Dîner", es: "Cena", ru: "Ужин", ar: "العشاء" } },
      { time: "21:00", what: { en: "Restorative sleep", fr: "Sommeil réparateur", es: "Sueño reparador", ru: "Восстанавливающий сон", ar: "نوم مريح" } },
    ],
    included: withInsurance({
      en: ["3 nights in a garden spa retreat", "All meals, farm-to-table and vegetarian-friendly", "Private transfers from and back to Manila airport", "Daily gentle yoga and meditation", "A hilot massage and spa access", "Farm visit and plant-based cooking lesson", "Sound bath or guided meditation"],
      fr: ["3 nuits dans un lieu de retraite avec spa et jardin", "Tous les repas, de la ferme à la table, adaptés aux végétariens", "Transferts privés aller-retour depuis l'aéroport de Manille", "Yoga doux et méditation chaque jour", "Un massage hilot et l'accès au spa", "Visite de ferme et cours de cuisine végétale", "Bain sonore ou méditation guidée"],
      es: ["3 noches en un retiro con spa y jardín", "Todas las comidas, de la huerta a la mesa y aptas para vegetarianos", "Traslados privados desde y hacia el aeropuerto de Manila", "Yoga suave y meditación cada día", "Un masaje hilot y acceso al spa", "Visita a una huerta y clase de cocina vegetal", "Baño de sonido o meditación guiada"],
      ru: ["3 ночи в спа-ретрите с садом", "Полное питание с фермы, подходит вегетарианцам", "Частные трансферы из аэропорта Манилы и обратно", "Ежедневная мягкая йога и медитация", "Массаж хилот и доступ в спа", "Поездка на ферму и урок растительной кухни", "Звукотерапия или медитация с ведущим"],
      ar: ["3 ليالٍ في مكان استجمام بسبا وحديقة", "جميع الوجبات من المزرعة ومناسبة للنباتيين", "تنقلات خاصة من مطار مانيلا وإليه", "يوغا لطيفة وتأمل يومياً", "تدليك هيلوت ودخول السبا", "زيارة مزرعة ودرس طبخ نباتي", "علاج بالصوت أو تأمل موجّه"],
    }),
    stay: {
      en: "A garden spa retreat on the Tagaytay ridge, cooler than the coast, with views towards Taal Lake.",
      fr: "Un lieu de retraite avec spa et jardin sur la crête de Tagaytay, plus frais que la côte, avec vue vers le lac Taal.",
      es: "Un retiro con spa y jardín en la cresta de Tagaytay, más fresco que la costa, con vistas al lago Taal.",
      ru: "Спа-ретрит с садом на хребте Тагайтая — прохладнее, чем на побережье, с видом на озеро Таал.",
      ar: "مكان استجمام بسبا وحديقة على مرتفعات تاغايتاي، أبرد من الساحل، مطلّ على بحيرة تال.",
    },
  },
};
