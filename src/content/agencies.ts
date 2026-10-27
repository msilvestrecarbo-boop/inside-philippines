import type { L } from "@/i18n/config";
import type { FAQ } from "./types";

/**
 * /travel-agencies: the trade page for agencies and tour operators who want a
 * ground partner in the Philippines. Every string is in all five languages.
 * Commercial terms (net rates or commission) are deliberately not stated here:
 * they are agreed with each agency.
 */

export const agencies = {
  menu: { en: "For travel agencies", fr: "Agences de voyages", es: "Para agencias de viajes", ru: "Для турагентств", ar: "لوكالات السفر" } as L,
  navLabel: { en: "Agencies", fr: "Agences", es: "Agencias", ru: "Агентствам", ar: "للوكالات" } as L,
  kicker: { en: "Trade partners", fr: "Partenaires professionnels", es: "Para profesionales", ru: "Партнёрам", ar: "للشركاء المحترفين" } as L,
  title: {
    en: "Your team on the ground in the Philippines",
    fr: "Votre équipe sur place aux Philippines",
    es: "Tu equipo sobre el terreno en Filipinas",
    ru: "Ваша команда на месте, на Филиппинах",
    ar: "فريقك على أرض الواقع في الفلبين",
  } as L,
  intro: {
    en: "Inside Philippines is a travel design studio based in the islands. Agencies and tour operators work with us to plan, book and run their clients' trips across the Philippines, from a single honeymoon to a full group.",
    fr: "Inside Philippines est un studio de création de voyages basé dans l'archipel. Agences et tour-opérateurs travaillent avec nous pour concevoir, réserver et accompagner les voyages de leurs clients aux Philippines, d'un voyage de noces à un groupe complet.",
    es: "Inside Philippines es un estudio de diseño de viajes con base en las islas. Agencias y turoperadores trabajan con nosotros para diseñar, reservar y atender los viajes de sus clientes por Filipinas, desde una luna de miel hasta un grupo completo.",
    ru: "Inside Philippines — студия авторских путешествий, которая работает прямо на островах. Агентства и туроператоры доверяют нам планирование, бронирование и сопровождение поездок своих клиентов по Филиппинам — от свадебного путешествия до целой группы.",
    ar: "Inside Philippines استوديو لتصميم الرحلات مقرّه في الجزر. تعمل معنا وكالات السفر ومنظّمو الرحلات لتخطيط رحلات عملائهم في الفلبين وحجزها ومتابعتها، من رحلة شهر عسل واحدة إلى مجموعة كاملة.",
  } as L,
  seo: {
    title: {
      en: "Philippines ground partner for travel agencies (DMC)",
      fr: "Réceptif aux Philippines pour agences de voyages (DMC)",
      es: "Receptivo en Filipinas para agencias de viajes (DMC)",
      ru: "Принимающая компания (DMC) на Филиппинах для турагентств",
      ar: "شريك محلي (DMC) في الفلبين لوكالات السفر",
    } as L,
    description: {
      en: "A local team in Manila and Siargao that designs, books and looks after your clients' Philippines trips: private, groups, incentives and white label.",
      fr: "Une équipe locale à Manille et Siargao qui conçoit, réserve et accompagne les voyages de vos clients aux Philippines : privatif, groupes, incentives et marque blanche.",
      es: "Un equipo local en Manila y Siargao que diseña, reserva y atiende los viajes de tus clientes a Filipinas: privados, grupos, incentivos y marca blanca.",
      ru: "Местная команда в Маниле и на Сиаргао: проектируем, бронируем и сопровождаем поездки ваших клиентов по Филиппинам — индивидуальные, групповые, инсентив и white label.",
      ar: "فريق محلي في مانيلا وسيارغاو يصمّم رحلات عملائك في الفلبين ويحجزها ويتابعها: رحلات خاصة ومجموعات ورحلات تحفيزية وعلامة بيضاء.",
    } as L,
  },
  whyTitle: { en: "Why agencies work with us", fr: "Pourquoi les agences travaillent avec nous", es: "Por qué las agencias trabajan con nosotros", ru: "Почему агентства работают с нами", ar: "لماذا تعمل الوكالات معنا" } as L,
  why: [
    {
      title: { en: "We live here", fr: "Nous vivons ici", es: "Vivimos aquí", ru: "Мы живём здесь", ar: "نحن نعيش هنا" } as L,
      body: {
        en: "Our team works from Taguig in Metro Manila and General Luna in Siargao, and deals directly with the hotels, boat crews, drivers and guides we use.",
        fr: "Notre équipe travaille depuis Taguig, dans le Grand Manille, et General Luna, à Siargao, en direct avec les hôtels, équipages, chauffeurs et guides que nous utilisons.",
        es: "Nuestro equipo trabaja desde Taguig, en Metro Manila, y General Luna, en Siargao, y trata directamente con los hoteles, tripulaciones, conductores y guías con los que trabajamos.",
        ru: "Наша команда работает в Тагиге (Метро Манила) и в Генерал-Луне на Сиаргао и напрямую общается с отелями, экипажами лодок, водителями и гидами.",
        ar: "يعمل فريقنا من تاغيغ في مانيلا الكبرى ومن جنرال لونا في سيارغاو، ويتعامل مباشرة مع الفنادق وطواقم القوارب والسائقين والمرشدين الذين نعمل معهم.",
      } as L,
    },
    {
      title: { en: "Routes that work", fr: "Des itinéraires qui fonctionnent", es: "Rutas que funcionan", ru: "Маршруты, которые работают", ar: "مسارات مدروسة" } as L,
      body: {
        en: "With more than 7,600 islands, the order of a trip matters. We sequence domestic flights, ferries and transfers so your clients spend their days on the islands, not in airports.",
        fr: "Avec plus de 7 600 îles, l'ordre du voyage compte. Nous enchaînons vols intérieurs, ferries et transferts pour que vos clients passent leurs journées sur les îles, pas dans les aéroports.",
        es: "Con más de 7.600 islas, el orden del viaje importa. Encadenamos vuelos internos, ferris y traslados para que tus clientes pasen el día en las islas, no en los aeropuertos.",
        ru: "Островов больше 7600, и порядок маршрута решает всё. Мы выстраиваем внутренние перелёты, паромы и трансферы так, чтобы ваши клиенты проводили дни на островах, а не в аэропортах.",
        ar: "مع أكثر من 7,600 جزيرة، ترتيب الرحلة مهم. ننسّق الرحلات الداخلية والعبّارات والتنقلات ليقضي عملاؤك أيامهم في الجزر لا في المطارات.",
      } as L,
    },
    {
      title: { en: "Quick, clear proposals", fr: "Des propositions rapides et claires", es: "Propuestas rápidas y claras", ru: "Быстрые и понятные предложения", ar: "عروض سريعة وواضحة" } as L,
      body: {
        en: "Send us a brief and a real person replies, usually within one working day, with a route and prices you can send to your client.",
        fr: "Envoyez-nous un brief : une vraie personne vous répond, en général sous un jour ouvré, avec un itinéraire et des prix à transmettre à votre client.",
        es: "Envíanos un briefing y te responde una persona real, normalmente en un día laborable, con una ruta y precios que puedes enviar a tu cliente.",
        ru: "Пришлите запрос — живой человек ответит, как правило, в течение рабочего дня, с маршрутом и ценами, которые можно сразу отправить клиенту.",
        ar: "أرسل لنا طلبك وسيرد عليك شخص حقيقي، عادةً خلال يوم عمل واحد، بمسار وأسعار يمكنك إرسالها إلى عميلك.",
      } as L,
    },
    {
      title: { en: "Covered while they travel", fr: "Accompagnés pendant le voyage", es: "Atendidos durante el viaje", ru: "На связи во время поездки", ar: "متابعة طوال الرحلة" } as L,
      body: {
        en: "Your clients can reach our team by phone or WhatsApp 24 hours a day, and every journey includes travel insurance. Spanish-speaking guides are available.",
        fr: "Vos clients joignent notre équipe par téléphone ou WhatsApp 24 h/24, et chaque voyage inclut une assurance voyage. Des guides hispanophones sont disponibles.",
        es: "Tus clientes pueden contactar con nuestro equipo por teléfono o WhatsApp las 24 horas, y todos los viajes incluyen seguro de viaje. Hay guías de habla hispana disponibles.",
        ru: "Ваши клиенты могут связаться с нашей командой по телефону или WhatsApp круглосуточно, а в каждое путешествие входит страховка. Есть испаноговорящие гиды.",
        ar: "يمكن لعملائك التواصل مع فريقنا بالهاتف أو واتساب على مدار الساعة، وكل رحلة تشمل تأمين السفر. يتوفر مرشدون يتحدثون الإسبانية.",
      } as L,
    },
  ],
  servicesTitle: { en: "What we can do for your agency", fr: "Ce que nous proposons à votre agence", es: "Qué ofrecemos a tu agencia", ru: "Что мы предлагаем вашему агентству", ar: "ما نقدّمه لوكالتك" } as L,
  services: [
    {
      title: { en: "Private, tailor-made trips", fr: "Voyages privés sur mesure", es: "Viajes privados a medida", ru: "Индивидуальные авторские поездки", ar: "رحلات خاصة مصمّمة حسب الطلب" } as L,
      body: {
        en: "Couples, families and honeymooners, planned around each client's dates, budget and pace.",
        fr: "Couples, familles et jeunes mariés, selon les dates, le budget et le rythme de chaque client.",
        es: "Parejas, familias y lunas de miel, según las fechas, el presupuesto y el ritmo de cada cliente.",
        ru: "Пары, семьи и молодожёны — под даты, бюджет и темп каждого клиента.",
        ar: "للأزواج والعائلات وشهر العسل، حسب مواعيد كل عميل وميزانيته وإيقاعه.",
      } as L,
    },
    {
      title: { en: "Groups and incentives", fr: "Groupes et incentives", es: "Grupos e incentivos", ru: "Группы и инсентив", ar: "المجموعات والرحلات التحفيزية" } as L,
      body: {
        en: "Group tours, company trips and retreats, with the logistics handled from arrival to departure.",
        fr: "Circuits de groupe, voyages d'entreprise et retraites, avec toute la logistique de l'arrivée au départ.",
        es: "Circuitos de grupo, viajes de empresa y retiros, con toda la logística desde la llegada hasta la salida.",
        ru: "Групповые туры, корпоративные поездки и ретриты — вся логистика от прилёта до вылета.",
        ar: "جولات جماعية ورحلات شركات وخلوات، مع تنظيم كامل من الوصول حتى المغادرة.",
      } as L,
    },
    {
      title: { en: "White label", fr: "Marque blanche", es: "Marca blanca", ru: "White label", ar: "العلامة البيضاء" } as L,
      body: {
        en: "Itineraries and travel documents under your agency's name, so the client relationship stays yours.",
        fr: "Itinéraires et documents de voyage au nom de votre agence : la relation client reste la vôtre.",
        es: "Itinerarios y documentos de viaje con el nombre de tu agencia, para que la relación con el cliente siga siendo tuya.",
        ru: "Маршруты и документы под брендом вашего агентства — отношения с клиентом остаются вашими.",
        ar: "برامج الرحلات ووثائق السفر باسم وكالتك، لتبقى العلاقة مع العميل لك.",
      } as L,
    },
    {
      title: { en: "Exclusive products", fr: "Produits exclusifs", es: "Productos exclusivos", ru: "Эксклюзивные продукты", ar: "منتجات حصرية" } as L,
      body: {
        en: "Routes and experiences built for your agency, beyond El Nido and Boracay: Siargao, Siquijor, Camiguin, Batanes and more.",
        fr: "Itinéraires et expériences créés pour votre agence, au-delà d'El Nido et Boracay : Siargao, Siquijor, Camiguin, Batanes et bien d'autres.",
        es: "Rutas y experiencias creadas para tu agencia, más allá de El Nido y Boracay: Siargao, Siquijor, Camiguin, Batanes y más.",
        ru: "Маршруты и впечатления специально для вашего агентства, дальше Эль-Нидо и Боракая: Сиаргао, Сикихор, Камигин, Батанес и не только.",
        ar: "مسارات وتجارب نصمّمها لوكالتك، أبعد من إل نيدو وبوراكاي: سيارغاو وسيكيهور وكاميغين وباتانيس وغيرها.",
      } as L,
    },
    {
      title: { en: "Ground services only", fr: "Prestations terrestres seules", es: "Solo servicios de tierra", ru: "Только наземное обслуживание", ar: "خدمات أرضية فقط" } as L,
      body: {
        en: "Already have the plan? We book the hotels, transfers, boats, guides and domestic flights.",
        fr: "Vous avez déjà le programme ? Nous réservons hôtels, transferts, bateaux, guides et vols intérieurs.",
        es: "¿Ya tienes el programa? Reservamos hoteles, traslados, barcos, guías y vuelos internos.",
        ru: "Программа уже готова? Мы забронируем отели, трансферы, лодки, гидов и внутренние перелёты.",
        ar: "لديك البرنامج جاهز؟ نحجز الفنادق والتنقلات والقوارب والمرشدين والرحلات الداخلية.",
      } as L,
    },
    {
      title: { en: "Wellness retreats", fr: "Retraites bien-être", es: "Retiros de bienestar", ru: "Велнес-ретриты", ar: "خلوات العافية" } as L,
      body: {
        en: "Yoga, food and rest by the sea in Siargao, Palawan, Siquijor, Bohol and Tagaytay, private or for groups.",
        fr: "Yoga, cuisine saine et repos face à la mer à Siargao, Palawan, Siquijor, Bohol et Tagaytay, en privé ou en groupe.",
        es: "Yoga, comida sana y descanso junto al mar en Siargao, Palawan, Siquijor, Bohol y Tagaytay, en privado o en grupo.",
        ru: "Йога, здоровая еда и отдых у моря на Сиаргао, Палаване, Сикихоре, Бохоле и в Тагайтае — индивидуально или группой.",
        ar: "يوغا وطعام صحي وراحة على البحر في سيارغاو وبالاوان وسيكيهور وبوهول وتاغايتاي، بشكل خاص أو للمجموعات.",
      } as L,
    },
  ],
  stepsTitle: { en: "How it works", fr: "Comment ça marche", es: "Cómo funciona", ru: "Как это работает", ar: "كيف نعمل" } as L,
  steps: [
    {
      en: "Send us your client's brief: dates, group size, budget and style.",
      fr: "Envoyez-nous le brief de votre client : dates, nombre de voyageurs, budget et style.",
      es: "Envíanos el briefing de tu cliente: fechas, número de viajeros, presupuesto y estilo.",
      ru: "Пришлите запрос клиента: даты, состав группы, бюджет и стиль.",
      ar: "أرسل لنا طلب عميلك: المواعيد وعدد المسافرين والميزانية والأسلوب.",
    },
    {
      en: "We propose a route with prices, and adjust it with you until it's right.",
      fr: "Nous proposons un itinéraire chiffré et l'ajustons avec vous jusqu'à ce qu'il soit parfait.",
      es: "Te proponemos una ruta con precios y la ajustamos contigo hasta que esté perfecta.",
      ru: "Мы предлагаем маршрут с ценами и дорабатываем его вместе с вами.",
      ar: "نقترح مسارًا مع الأسعار ونعدّله معك حتى يصبح مناسبًا.",
    },
    {
      en: "Your client confirms with you, and we book everything on the ground.",
      fr: "Votre client confirme auprès de vous, et nous réservons tout sur place.",
      es: "Tu cliente confirma contigo y nosotros reservamos todo en destino.",
      ru: "Клиент подтверждает поездку у вас, а мы бронируем всё на месте.",
      ar: "يؤكد عميلك الحجز معك، ونحجز نحن كل شيء على الأرض.",
    },
    {
      en: "We look after your clients during the trip and keep you informed.",
      fr: "Nous accompagnons vos clients pendant le voyage et vous tenons informés.",
      es: "Atendemos a tus clientes durante el viaje y te mantenemos informado.",
      ru: "Мы сопровождаем ваших клиентов в поездке и держим вас в курсе.",
      ar: "نتابع عملاءك خلال الرحلة ونبقيك على اطلاع.",
    },
  ] as L[],
  formTitle: { en: "Tell us about your agency", fr: "Parlez-nous de votre agence", es: "Cuéntanos sobre tu agencia", ru: "Расскажите о вашем агентстве", ar: "أخبرنا عن وكالتك" } as L,
  formBody: {
    en: "Tell us where you're based, the clients you work with, and any trip you're quoting right now.",
    fr: "Dites-nous où vous êtes basés, quels clients vous servez, et tout voyage que vous chiffrez en ce moment.",
    es: "Cuéntanos dónde estás, con qué clientes trabajas y cualquier viaje que estés cotizando ahora mismo.",
    ru: "Расскажите, где вы находитесь, с какими клиентами работаете и какую поездку рассчитываете сейчас.",
    ar: "أخبرنا أين مقرّك، ونوع العملاء الذين تعمل معهم، وأي رحلة تعمل على تسعيرها الآن.",
  } as L,
  agencyLabel: { en: "Agency name", fr: "Nom de l'agence", es: "Nombre de la agencia", ru: "Название агентства", ar: "اسم الوكالة" } as L,
  faqsTitle: { en: "Questions from agencies", fr: "Les questions des agences", es: "Preguntas de las agencias", ru: "Вопросы агентств", ar: "أسئلة الوكالات" } as L,
  faqs: [
    {
      q: { en: "Do you work with agencies outside the Philippines?", fr: "Travaillez-vous avec des agences hors des Philippines ?", es: "¿Trabajáis con agencias de fuera de Filipinas?", ru: "Вы работаете с агентствами за пределами Филиппин?", ar: "هل تعملون مع وكالات من خارج الفلبين؟" },
      a: {
        en: "Yes. We work with agencies and tour operators wherever they are, with a focus on Europe and the Middle East.",
        fr: "Oui. Nous travaillons avec des agences et tour-opérateurs où qu'ils soient, en particulier en Europe et au Moyen-Orient.",
        es: "Sí. Trabajamos con agencias y turoperadores de cualquier país, sobre todo de Europa y Oriente Medio.",
        ru: "Да. Мы работаем с агентствами и туроператорами из любой страны, прежде всего из Европы и с Ближнего Востока.",
        ar: "نعم. نعمل مع الوكالات ومنظّمي الرحلات أينما كانوا، مع تركيز على أوروبا والشرق الأوسط.",
      },
    },
    {
      q: { en: "Can our clients see your name?", fr: "Vos clients voient-ils notre nom ?", es: "¿Verán tus clientes nuestro nombre?", ru: "Увидят ли клиенты ваше название?", ar: "هل سيرى عملاؤنا اسمكم؟" },
      a: {
        en: "Only if you want them to. We can prepare itineraries and documents under your agency's name.",
        fr: "Seulement si vous le souhaitez. Nous pouvons préparer itinéraires et documents au nom de votre agence.",
        es: "Solo si tú quieres. Podemos preparar itinerarios y documentos con el nombre de tu agencia.",
        ru: "Только если вы этого захотите. Мы можем готовить маршруты и документы под названием вашего агентства.",
        ar: "فقط إذا رغبت في ذلك. يمكننا إعداد البرامج والوثائق باسم وكالتك.",
      },
    },
    {
      q: { en: "In which currencies do you quote?", fr: "Dans quelles devises établissez-vous vos devis ?", es: "¿En qué monedas cotizáis?", ru: "В какой валюте вы считаете цены?", ar: "بأي عملات تقدّمون الأسعار؟" },
      a: {
        en: "Euros, US dollars, UAE dirhams or Philippine pesos, whichever suits your agency.",
        fr: "En euros, dollars américains, dirhams émiratis ou pesos philippins, selon ce qui convient à votre agence.",
        es: "En euros, dólares estadounidenses, dírhams de EAU o pesos filipinos, lo que mejor le venga a tu agencia.",
        ru: "В евро, долларах США, дирхамах ОАЭ или филиппинских песо — как удобнее вашему агентству.",
        ar: "باليورو أو الدولار الأمريكي أو الدرهم الإماراتي أو البيزو الفلبيني، حسب ما يناسب وكالتك.",
      },
    },
    {
      q: { en: "How do commercial terms work?", fr: "Comment fonctionnent les conditions commerciales ?", es: "¿Cómo son las condiciones comerciales?", ru: "Какие у вас коммерческие условия?", ar: "كيف تعمل الشروط التجارية؟" },
      a: {
        en: "We agree them with each agency. Send us a message and we'll explain how we work with partners.",
        fr: "Nous les définissons avec chaque agence. Écrivez-nous et nous vous expliquerons comment nous travaillons avec nos partenaires.",
        es: "Las acordamos con cada agencia. Escríbenos y te explicamos cómo trabajamos con nuestros socios.",
        ru: "Мы согласовываем их с каждым агентством. Напишите нам, и мы расскажем, как работаем с партнёрами.",
        ar: "نتفق عليها مع كل وكالة. راسلنا وسنشرح لك كيف نعمل مع شركائنا.",
      },
    },
  ] as FAQ[],
};
