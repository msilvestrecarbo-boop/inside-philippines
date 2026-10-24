import type { L } from "@/i18n/config";
import type { FAQ } from "./types";

/**
 * Site-wide extras that live outside the page dictionaries: the practical
 * "Travelling to the Philippines" FAQ, the photo gallery and the curated-
 * journeys band on the home page. Every string is translated in all five
 * languages, so these pages are indexable everywhere.
 */

export const extraLinks = {
  gallery: { en: "Gallery", fr: "Galerie", es: "Galería", ru: "Галерея", ar: "معرض الصور" } as L,
  faq: { en: "Travel FAQ", fr: "FAQ voyage", es: "Preguntas frecuentes", ru: "Частые вопросы", ar: "أسئلة السفر الشائعة" } as L,
  corporate: { en: "Corporate travel", fr: "Voyages d'entreprise", es: "Viajes de empresa", ru: "Корпоративные поездки", ar: "رحلات الشركات" } as L,
};

// ─────────────────────────────────────────────────────────────── CURATED BAND

export const curated = {
  kicker: { en: "Inside Philippines", fr: "Inside Philippines", es: "Inside Philippines", ru: "Inside Philippines", ar: "Inside Philippines" } as L,
  title: {
    en: "We curate journeys that inspire, and stay with you.",
    fr: "Nous imaginons des voyages qui inspirent, et qui restent.",
    es: "Creamos viajes que inspiran, y que se quedan contigo.",
    ru: "Мы создаём путешествия, которые вдохновляют и остаются с вами.",
    ar: "نصمّم رحلات تُلهمك وتبقى في ذاكرتك.",
  } as L,
  body: {
    en: "We go beyond booking. Every trip is designed by our own team in the Philippines, around your dates, your pace and the way you like to travel, then looked after by the same people from the first message to the flight home. Elegant where it matters, authentic everywhere, and always seamless.",
    fr: "Nous allons au-delà de la simple réservation. Chaque voyage est conçu par notre propre équipe aux Philippines, selon vos dates, votre rythme et votre façon de voyager, puis suivi par les mêmes personnes du premier message jusqu'au vol retour. Élégant là où cela compte, authentique partout, et toujours fluide.",
    es: "Vamos más allá de la reserva. Cada viaje lo diseña nuestro propio equipo en Filipinas, según tus fechas, tu ritmo y tu manera de viajar, y lo cuidan las mismas personas desde el primer mensaje hasta el vuelo de vuelta. Elegante donde importa, auténtico en todo y siempre sin complicaciones.",
    ru: "Мы делаем больше, чем бронирование. Каждое путешествие проектирует наша собственная команда на Филиппинах — под ваши даты, ваш темп и ваш стиль, — и ведут его одни и те же люди от первого сообщения до обратного рейса. Элегантно там, где это важно, подлинно во всём и всегда без хлопот.",
    ar: "نحن لا نكتفي بالحجز. فريقنا في الفلبين يصمّم كل رحلة حسب مواعيدك وإيقاعك وطريقتك في السفر، ويتابعها الأشخاص أنفسهم من أول رسالة حتى رحلة العودة. أناقة حيث تهمّ، وأصالة في كل التفاصيل، وتنظيم سلس دائمًا.",
  } as L,
  pillars: [
    {
      title: { en: "Designed on the ground", fr: "Conçu sur place", es: "Diseñado sobre el terreno", ru: "Создано на месте", ar: "مصمَّمة على أرض الواقع" } as L,
      body: {
        en: "Our team works from Taguig in Metro Manila and General Luna in Siargao.",
        fr: "Notre équipe travaille depuis Taguig, dans le Grand Manille, et General Luna, à Siargao.",
        es: "Nuestro equipo trabaja desde Taguig, en Metro Manila, y General Luna, en Siargao.",
        ru: "Наша команда работает в Тагиге (Метро Манила) и в Генерал-Луне на Сиаргао.",
        ar: "يعمل فريقنا من تاغيغ في مانيلا الكبرى ومن جنرال لونا في سيارغاو.",
      } as L,
    },
    {
      title: { en: "Insured, every trip", fr: "Assuré, à chaque voyage", es: "Con seguro, en cada viaje", ru: "Страховка в каждой поездке", ar: "تأمين في كل رحلة" } as L,
      body: {
        en: "Travel insurance is included in every journey, with up to €2,000 of cancellation cover.",
        fr: "L'assurance voyage est incluse dans chaque voyage, avec une garantie annulation jusqu'à 2 000 €.",
        es: "El seguro de viaje está incluido en todos los viajes, con cobertura de cancelación de hasta 2.000 €.",
        ru: "Страховка включена в каждое путешествие, с покрытием отмены поездки до 2000 €.",
        ar: "تأمين السفر مشمول في كل رحلة، مع تغطية للإلغاء تصل إلى 2,000 يورو.",
      } as L,
    },
    {
      title: { en: "A real person, 24/7", fr: "Une vraie personne, 24 h/24", es: "Una persona real, 24/7", ru: "Живой человек 24/7", ar: "شخص حقيقي على مدار الساعة" } as L,
      body: {
        en: "While you travel, our team answers WhatsApp day and night.",
        fr: "Pendant votre voyage, notre équipe répond sur WhatsApp jour et nuit.",
        es: "Mientras viajas, nuestro equipo responde por WhatsApp día y noche.",
        ru: "Во время поездки наша команда отвечает в WhatsApp днём и ночью.",
        ar: "خلال رحلتك، يردّ فريقنا عبر واتساب ليلًا ونهارًا.",
      } as L,
    },
    {
      title: { en: "Private or shared, your choice", fr: "Privé ou partagé, à vous de choisir", es: "Privado o compartido, tú eliges", ru: "Индивидуально или в группе — на ваш выбор", ar: "خاص أو مشترك، القرار لك" } as L,
      body: {
        en: "Tours run private or shared depending on the trip, with Spanish-speaking guides available.",
        fr: "Les excursions sont privées ou partagées selon le voyage, avec des guides hispanophones disponibles.",
        es: "Las excursiones son privadas o compartidas según el viaje, y hay guías de habla hispana disponibles.",
        ru: "Экскурсии индивидуальные или групповые в зависимости от маршрута; есть испаноговорящие гиды.",
        ar: "الجولات خاصة أو مشتركة حسب الرحلة، مع توفر مرشدين يتحدثون الإسبانية.",
      } as L,
    },
  ],
  /** Verified company figures only. Empty until Inside Philippines confirms its own numbers. */
  stats: [] as { value: string; label: L }[],
};

// ──────────────────────────────────────────────────────────────── PRACTICAL FAQ

export const practicalFaq = {
  kicker: { en: "Travelling to the Philippines", fr: "Voyager aux Philippines", es: "Viajar a Filipinas", ru: "Поездка на Филиппины", ar: "السفر إلى الفلبين" } as L,
  title: {
    en: "Before you fly: the practical questions",
    fr: "Avant de partir : les questions pratiques",
    es: "Antes de volar: las preguntas prácticas",
    ru: "Перед вылетом: практические вопросы",
    ar: "قبل السفر: الأسئلة العملية",
  } as L,
  intro: {
    en: "eTravel, airport pick-up, SIM cards, money, weather and plugs. The answers our guests ask for most before a trip to the Philippines.",
    fr: "eTravel, accueil à l'aéroport, carte SIM, argent, météo et prises : les réponses que nos voyageurs nous demandent le plus avant un voyage aux Philippines.",
    es: "eTravel, recogida en el aeropuerto, tarjeta SIM, dinero, clima y enchufes: las respuestas que más nos piden nuestros viajeros antes de un viaje a Filipinas.",
    ru: "eTravel, встреча в аэропорту, SIM-карта, деньги, погода и розетки — ответы на вопросы, которые наши гости задают чаще всего перед поездкой на Филиппины.",
    ar: "eTravel، الاستقبال في المطار، شريحة الاتصال، المال، الطقس والمقابس: إجابات أكثر الأسئلة التي يطرحها ضيوفنا قبل السفر إلى الفلبين.",
  } as L,
  seoTitle: {
    en: "Philippines travel FAQ: eTravel, SIM, money, plugs",
    fr: "FAQ voyage Philippines : eTravel, SIM, argent, prises",
    es: "Preguntas frecuentes viaje a Filipinas: eTravel, SIM, dinero",
    ru: "Филиппины: частые вопросы туриста — eTravel, SIM, деньги",
    ar: "أسئلة السفر إلى الفلبين: eTravel والشريحة والعملة",
  } as L,
  faqs: [
    {
      q: {
        en: "Is there an e-travel form I need to fill out?",
        fr: "Y a-t-il un formulaire eTravel à remplir ?",
        es: "¿Tengo que rellenar el formulario eTravel?",
        ru: "Нужно ли заполнять форму eTravel?",
        ar: "هل يجب أن أملأ استمارة eTravel؟",
      },
      a: {
        en: "Yes. Every traveller, children included, must register on eTravel, the official online arrival form at etravel.gov.ph, within 72 hours before arrival. It is free on the official site, so avoid websites that charge for it. Save the QR code on your phone in case you have no signal when you land. We send you a reminder before your trip.",
        fr: "Oui. Chaque voyageur, enfants compris, doit s'enregistrer sur eTravel, le formulaire d'arrivée officiel en ligne sur etravel.gov.ph, dans les 72 heures précédant l'arrivée. Il est gratuit sur le site officiel : évitez les sites qui le font payer. Enregistrez le QR code sur votre téléphone au cas où vous n'auriez pas de réseau à l'atterrissage. Nous vous envoyons un rappel avant le départ.",
        es: "Sí. Cada viajero, niños incluidos, debe registrarse en eTravel, el formulario oficial de llegada en etravel.gov.ph, dentro de las 72 horas anteriores a la llegada. Es gratuito en la web oficial, así que evita las webs que cobran por él. Guarda el código QR en el móvil por si no tienes cobertura al aterrizar. Te enviamos un recordatorio antes del viaje.",
        ru: "Да. Каждый путешественник, включая детей, должен зарегистрироваться в eTravel — официальной онлайн-форме прибытия на сайте etravel.gov.ph — не ранее чем за 72 часа до прилёта. На официальном сайте это бесплатно, поэтому не пользуйтесь платными сайтами-посредниками. Сохраните QR-код в телефоне на случай, если после посадки не будет связи. Перед поездкой мы пришлём вам напоминание.",
        ar: "نعم. يجب على كل مسافر، بمن فيهم الأطفال، التسجيل في eTravel، وهي استمارة الوصول الرسمية عبر الإنترنت على etravel.gov.ph، خلال 72 ساعة قبل الوصول. التسجيل مجاني على الموقع الرسمي، فتجنّب المواقع التي تطلب رسومًا. احفظ رمز QR على هاتفك تحسّبًا لعدم توفر الشبكة عند الهبوط. نرسل لك تذكيرًا قبل الرحلة.",
      },
    },
    {
      q: {
        en: "Where is the designated pick-up area at the airport?",
        fr: "Où se trouve le point de rendez-vous à l'aéroport ?",
        es: "¿Dónde está el punto de recogida en el aeropuerto?",
        ru: "Где место встречи в аэропорту?",
        ar: "أين نقطة الاستقبال المحددة في المطار؟",
      },
      a: {
        en: "Your transfer meets you in the arrivals area once you have cleared immigration, collected your bags and passed customs. The exact meeting point depends on the airport and the terminal, so we send it to you on WhatsApp before you fly, together with your driver's details. If you cannot find each other, message or call our 24/7 line and we will guide you.",
        fr: "Votre transfert vous attend dans la zone des arrivées, une fois l'immigration, les bagages et la douane passés. Le point de rendez-vous exact dépend de l'aéroport et du terminal : nous vous l'envoyons sur WhatsApp avant le départ, avec les coordonnées de votre chauffeur. Si vous ne vous trouvez pas, écrivez-nous ou appelez notre ligne 24 h/24 et nous vous guiderons.",
        es: "Tu traslado te espera en la zona de llegadas, después de pasar inmigración, recoger el equipaje y cruzar la aduana. El punto exacto depende del aeropuerto y de la terminal, así que te lo enviamos por WhatsApp antes del vuelo, junto con los datos de tu conductor. Si no os encontráis, escríbenos o llama a nuestra línea 24/7 y te guiaremos.",
        ru: "Вас встретят в зоне прилёта после паспортного контроля, получения багажа и таможни. Точное место встречи зависит от аэропорта и терминала, поэтому мы присылаем его в WhatsApp до вылета вместе с данными водителя. Если вы не нашли друг друга, напишите или позвоните на нашу круглосуточную линию — мы подскажем.",
        ar: "يستقبلك ممثل النقل في منطقة الوصول بعد إنهاء إجراءات الجوازات واستلام الأمتعة والجمارك. تختلف نقطة اللقاء حسب المطار والمبنى، لذلك نرسلها إليك عبر واتساب قبل السفر مع بيانات السائق. وإذا لم تجده، راسلنا أو اتصل بخطنا المتاح على مدار الساعة وسنرشدك.",
      },
    },
    {
      q: {
        en: "How will I communicate with the team?",
        fr: "Comment communiquer avec l'équipe ?",
        es: "¿Cómo me comunico con el equipo?",
        ru: "Как связаться с командой?",
        ar: "كيف أتواصل مع الفريق؟",
      },
      a: {
        en: "Mostly on WhatsApp, at +63 952 405 0513. Before your trip, our office replies Monday to Saturday, 9:00 to 18:00 Philippine time, and you can also email marc@lymaculinary.com. While you are travelling, the same WhatsApp number is answered 24/7 for anything urgent: a delayed flight, a cancelled boat or a change of plan.",
        fr: "Principalement sur WhatsApp, au +63 952 405 0513. Avant le voyage, notre bureau répond du lundi au samedi, de 9 h à 18 h (heure des Philippines), et vous pouvez aussi écrire à marc@lymaculinary.com. Pendant votre voyage, ce même numéro WhatsApp répond 24 h/24 pour toute urgence : vol retardé, bateau annulé ou changement de programme.",
        es: "Sobre todo por WhatsApp, en el +63 952 405 0513. Antes del viaje, nuestra oficina responde de lunes a sábado, de 9:00 a 18:00 (hora de Filipinas), y también puedes escribir a marc@lymaculinary.com. Durante el viaje, ese mismo número de WhatsApp atiende 24/7 cualquier urgencia: un vuelo retrasado, un barco cancelado o un cambio de planes.",
        ru: "В основном через WhatsApp: +63 952 405 0513. До поездки офис отвечает с понедельника по субботу с 9:00 до 18:00 по филиппинскому времени; также можно писать на marc@lymaculinary.com. Во время путешествия этот же номер WhatsApp работает круглосуточно для срочных вопросов: задержка рейса, отмена лодки или смена планов.",
        ar: "غالبًا عبر واتساب على الرقم ‎+63 952 405 0513. قبل الرحلة يردّ مكتبنا من الاثنين إلى السبت، من 9:00 إلى 18:00 بتوقيت الفلبين، ويمكنك أيضًا مراسلتنا على marc@lymaculinary.com. وأثناء رحلتك يعمل رقم واتساب نفسه على مدار الساعة لأي أمر عاجل: تأخر رحلة أو إلغاء قارب أو تغيير في الخطة.",
      },
    },
    {
      q: {
        en: "What should I do about mobile connectivity?",
        fr: "Comment rester connecté (téléphone et internet) ?",
        es: "¿Qué hago con el móvil y los datos?",
        ru: "Как быть с мобильной связью и интернетом?",
        ar: "ماذا أفعل بخصوص الاتصال والإنترنت؟",
      },
      a: {
        en: "The simplest option is an eSIM for mobile data, bought before you arrive. Airalo offers eSIMs for the Philippines that you can check and buy on their website. You can also buy a local SIM at the airport; registration with your passport is required by law. Data is good in towns and patchy on boats and remote beaches, so download offline maps before you go.",
        fr: "Le plus simple est une eSIM pour les données mobiles, achetée avant l'arrivée. Airalo propose des eSIM pour les Philippines, à consulter et acheter sur son site. Vous pouvez aussi acheter une carte SIM locale à l'aéroport ; l'enregistrement avec votre passeport est obligatoire. Le réseau est bon en ville et aléatoire en bateau ou sur les plages isolées : téléchargez des cartes hors ligne avant de partir.",
        es: "Lo más sencillo es una eSIM de datos comprada antes de llegar. Airalo ofrece eSIM para Filipinas que puedes consultar y comprar en su web. También puedes comprar una SIM local en el aeropuerto; la ley exige registrarla con tu pasaporte. La cobertura es buena en los pueblos e irregular en los barcos y las playas remotas, así que descarga mapas sin conexión antes de ir.",
        ru: "Проще всего купить eSIM с мобильным интернетом до прилёта. У Airalo есть eSIM для Филиппин — их можно посмотреть и купить на сайте компании. Также можно купить местную SIM-карту в аэропорту; по закону её нужно зарегистрировать по паспорту. В городах связь хорошая, на лодках и удалённых пляжах — с перебоями, поэтому заранее скачайте офлайн-карты.",
        ar: "أسهل خيار هو شريحة eSIM للبيانات تشتريها قبل الوصول. تقدّم Airalo شرائح eSIM للفلبين يمكنك الاطلاع عليها وشراؤها من موقعها. ويمكنك أيضًا شراء شريحة محلية في المطار، ويشترط القانون تسجيلها بجواز السفر. التغطية جيدة في المدن ومتقطعة في القوارب والشواطئ النائية، لذا حمّل الخرائط دون اتصال قبل السفر.",
      },
    },
    {
      q: {
        en: "How do I handle currency and payments in the Philippines?",
        fr: "Comment gérer la monnaie et les paiements aux Philippines ?",
        es: "¿Cómo funcionan la moneda y los pagos en Filipinas?",
        ru: "Какая валюта и как платить на Филиппинах?",
        ar: "كيف أتعامل مع العملة والدفع في الفلبين؟",
      },
      a: {
        en: "The currency is the Philippine peso (PHP). Cards are accepted in most hotels and many city restaurants, but cash is still essential on the islands for tricycles, small eateries, markets, boat tips and environmental fees. ATMs are easy to find in cities and main towns, but they charge a fee per withdrawal, often limit the amount, and can run dry on small islands at weekends. Withdraw in Manila or Cebu before you fly on, and carry small notes.",
        fr: "La monnaie est le peso philippin (PHP). La carte est acceptée dans la plupart des hôtels et de nombreux restaurants en ville, mais l'argent liquide reste indispensable dans les îles pour les tricycles, les petits restaurants, les marchés, les pourboires en bateau et les taxes environnementales. Les distributeurs sont faciles à trouver en ville, mais facturent des frais par retrait, limitent souvent le montant et peuvent être à sec sur les petites îles le week-end. Retirez à Manille ou à Cebu avant de repartir, et gardez des petites coupures.",
        es: "La moneda es el peso filipino (PHP). Las tarjetas se aceptan en la mayoría de los hoteles y en muchos restaurantes de ciudad, pero el efectivo sigue siendo imprescindible en las islas para triciclos, pequeños restaurantes, mercados, propinas en los barcos y tasas medioambientales. Los cajeros abundan en ciudades y pueblos grandes, pero cobran comisión por retirada, suelen limitar la cantidad y pueden quedarse vacíos en islas pequeñas los fines de semana. Saca dinero en Manila o Cebú antes de seguir viaje y lleva billetes pequeños.",
        ru: "Валюта — филиппинское песо (PHP). Карты принимают в большинстве отелей и во многих ресторанах в городах, но на островах наличные по-прежнему нужны для трициклов, небольших кафе, рынков, чаевых на лодках и экологических сборов. Банкоматы легко найти в городах, но они берут комиссию за снятие, часто ограничивают сумму и на маленьких островах в выходные могут оставаться пустыми. Снимите деньги в Маниле или Себу перед перелётом дальше и держите мелкие купюры.",
        ar: "العملة هي البيزو الفلبيني (PHP). تُقبل البطاقات في معظم الفنادق وكثير من مطاعم المدن، لكن النقد ما زال ضروريًا في الجزر للتريسيكل والمطاعم الصغيرة والأسواق وإكراميات القوارب والرسوم البيئية. أجهزة الصراف الآلي متوفرة في المدن، لكنها تفرض رسومًا على كل سحب، وتحدّ غالبًا من المبلغ، وقد تنفد أموالها في الجزر الصغيرة في عطلة نهاية الأسبوع. اسحب ما تحتاجه في مانيلا أو سيبو قبل مواصلة الرحلة، واحمل فئات نقدية صغيرة.",
      },
    },
    {
      q: {
        en: "Where should I exchange my money?",
        fr: "Où changer mon argent ?",
        es: "¿Dónde cambio dinero?",
        ru: "Где обменять деньги?",
        ar: "أين أصرف أموالي؟",
      },
      a: {
        en: "Bring euros, US dollars or dirhams in clean, undamaged notes. Licensed money changers in city shopping malls usually offer better rates than the airport, so change only a small amount on arrival. Avoid changing money on the street. Using a card at ATMs is the main alternative. On small islands, exchange options are limited, so arrive with the pesos you need.",
        fr: "Apportez des euros, des dollars américains ou des dirhams en billets propres et en bon état. Les bureaux de change agréés des centres commerciaux en ville offrent généralement de meilleurs taux que l'aéroport : n'y changez qu'une petite somme à l'arrivée. Évitez de changer de l'argent dans la rue. Le retrait par carte aux distributeurs est la principale alternative. Sur les petites îles, les possibilités de change sont limitées : arrivez avec les pesos nécessaires.",
        es: "Lleva euros, dólares estadounidenses o dírhams en billetes limpios y en buen estado. Las casas de cambio autorizadas de los centros comerciales suelen ofrecer mejor cambio que el aeropuerto, así que cambia solo una pequeña cantidad al llegar. Evita cambiar dinero en la calle. Sacar con tarjeta en cajeros es la principal alternativa. En las islas pequeñas hay pocas opciones de cambio, así que llega con los pesos que necesites.",
        ru: "Берите евро, доллары США или дирхамы — чистые купюры без повреждений. Лицензированные обменники в торговых центрах обычно дают лучший курс, чем в аэропорту, поэтому по прилёте меняйте только небольшую сумму. Не меняйте деньги на улице. Основная альтернатива — снятие наличных картой в банкомате. На маленьких островах обменять деньги сложно, поэтому приезжайте туда с нужной суммой в песо.",
        ar: "أحضر اليورو أو الدولار الأمريكي أو الدرهم بأوراق نظيفة وسليمة. تقدّم محلات الصرافة المرخّصة في المراكز التجارية عادةً أسعارًا أفضل من المطار، لذا اصرف مبلغًا صغيرًا فقط عند الوصول. تجنّب الصرف في الشارع. والبديل الرئيسي هو السحب بالبطاقة من أجهزة الصراف. خيارات الصرف محدودة في الجزر الصغيرة، فاحرص على الوصول إليها ومعك ما يكفي من البيزو.",
      },
    },
    {
      q: {
        en: "What should I know about the weather and clothing?",
        fr: "Que savoir sur la météo et les vêtements ?",
        es: "¿Qué debo saber sobre el clima y la ropa?",
        ru: "Какая погода и что взять из одежды?",
        ar: "ماذا أعرف عن الطقس والملابس؟",
      },
      a: {
        en: "It is tropical all year: roughly 24°C to 33°C at sea level and humid. December to May is the drier season in most of the west; June to October brings the wet season and most typhoons. Pack light, breathable clothes, swimwear, a long-sleeved rash guard, a hat and reef-safe sunscreen, plus a light rain jacket in the wet months. Bring a warm layer for the mountains (Baguio, Sagada, Banaue) and for chilly air-conditioning, sturdy shoes for treks, and clothes that cover shoulders and knees for churches.",
        fr: "Le climat est tropical toute l'année : environ 24 °C à 33 °C au niveau de la mer, avec une forte humidité. De décembre à mai, c'est la saison plus sèche sur la majeure partie de l'ouest ; de juin à octobre, la saison des pluies et la plupart des typhons. Prévoyez des vêtements légers et respirants, maillot de bain, lycra à manches longues, chapeau et crème solaire respectueuse des récifs, plus une veste de pluie légère pendant les mois humides. Emportez une couche chaude pour les montagnes (Baguio, Sagada, Banaue) et la climatisation, de bonnes chaussures pour les randonnées et une tenue couvrant épaules et genoux pour les églises.",
        es: "El clima es tropical todo el año: unos 24 °C a 33 °C a nivel del mar y mucha humedad. De diciembre a mayo es la temporada más seca en casi todo el oeste; de junio a octubre llegan las lluvias y la mayoría de los tifones. Lleva ropa ligera y transpirable, bañador, una camiseta de licra de manga larga, sombrero y protector solar respetuoso con los arrecifes, además de un chubasquero ligero en los meses de lluvia. Añade una prenda de abrigo para la montaña (Baguio, Sagada, Banaue) y el aire acondicionado, calzado resistente para las caminatas y ropa que cubra hombros y rodillas para las iglesias.",
        ru: "Климат тропический круглый год: около +24…+33 °C на уровне моря и высокая влажность. С декабря по май на большей части запада сухой сезон; с июня по октябрь — сезон дождей и большинство тайфунов. Возьмите лёгкую дышащую одежду, купальник, лайкру с длинным рукавом, шляпу и безопасный для рифов солнцезащитный крем, а в дождливые месяцы — лёгкую дождевую куртку. Для гор (Багио, Сагада, Банауэ) и холодных кондиционеров пригодится тёплая вещь, для треккинга — крепкая обувь, для церквей — одежда, закрывающая плечи и колени.",
        ar: "المناخ استوائي طوال العام: نحو 24 إلى 33 درجة مئوية عند مستوى البحر مع رطوبة عالية. من ديسمبر إلى مايو موسم أكثر جفافًا في معظم الغرب، ومن يونيو إلى أكتوبر موسم الأمطار ومعظم الأعاصير. احمل ملابس خفيفة تسمح بالتهوية، وملابس سباحة، وقميص سباحة بأكمام طويلة، وقبعة، وواقي شمس آمنًا للشعاب المرجانية، إضافة إلى سترة مطر خفيفة في الأشهر الماطرة. وأحضر طبقة دافئة للجبال (باغيو، ساغادا، باناوي) وللتكييف البارد، وحذاءً متينًا للمشي، وملابس تغطي الكتفين والركبتين لزيارة الكنائس.",
      },
    },
    {
      q: {
        en: "What kind of electricity and adapters do I need?",
        fr: "Quelle électricité et quels adaptateurs faut-il ?",
        es: "¿Qué electricidad y adaptadores necesito?",
        ru: "Какое напряжение и какие нужны переходники?",
        ar: "ما نوع الكهرباء والمحوّلات التي أحتاجها؟",
      },
      a: {
        en: "The Philippines uses 220V at 60Hz. Most sockets take flat two-pin plugs (type A), sometimes with a ground pin (type B), and many also accept round two-pin European plugs (type C). Bring a universal adapter. Most phone and laptop chargers work from 100V to 240V, but check hair dryers and other appliances before you plug them in.",
        fr: "Les Philippines utilisent du 220 V à 60 Hz. La plupart des prises acceptent les fiches plates à deux broches (type A), parfois avec une broche de terre (type B), et beaucoup acceptent aussi les fiches rondes européennes à deux broches (type C). Emportez un adaptateur universel. La plupart des chargeurs de téléphone et d'ordinateur fonctionnent de 100 V à 240 V, mais vérifiez les sèche-cheveux et autres appareils avant de les brancher.",
        es: "Filipinas usa 220 V a 60 Hz. La mayoría de los enchufes admiten clavijas planas de dos patas (tipo A), a veces con toma de tierra (tipo B), y muchos aceptan también las clavijas redondas europeas de dos patas (tipo C). Lleva un adaptador universal. La mayoría de los cargadores de móvil y portátil funcionan de 100 V a 240 V, pero revisa secadores y otros aparatos antes de enchufarlos.",
        ru: "На Филиппинах напряжение 220 В, частота 60 Гц. Большинство розеток рассчитаны на плоские двухконтактные вилки (тип A), иногда с заземлением (тип B), и многие принимают также круглые европейские вилки (тип C). Возьмите универсальный переходник. Большинство зарядок для телефонов и ноутбуков работают от 100 до 240 В, но фены и другие приборы лучше проверить перед включением.",
        ar: "تعمل الكهرباء في الفلبين بجهد 220 فولت وتردد 60 هرتز. تقبل معظم المقابس القوابس المسطحة ذات السنّين (النوع A)، وأحيانًا مع سنّ أرضي (النوع B)، ويقبل كثير منها أيضًا القوابس الأوروبية المستديرة ذات السنّين (النوع C). أحضر محوّلًا عالميًا. تعمل معظم شواحن الهواتف والحواسيب من 100 إلى 240 فولت، لكن تحقّق من مجففات الشعر والأجهزة الأخرى قبل توصيلها.",
      },
    },
  ] as FAQ[],
};

// ──────────────────────────────────────────────────────────────────── GALLERY

export type GalleryItem = { key: string; place: string };

export const gallery = {
  kicker: { en: "Gallery", fr: "Galerie", es: "Galería", ru: "Галерея", ar: "معرض الصور" } as L,
  title: {
    en: "The Philippines, in pictures",
    fr: "Les Philippines en images",
    es: "Filipinas en imágenes",
    ru: "Филиппины в фотографиях",
    ar: "الفلبين بالصور",
  } as L,
  intro: {
    en: "Island hopping, private boats, lagoons, diving, mountains and the places you will stay. A first look at the trips we design.",
    fr: "Îles en bateau, bateaux privés, lagons, plongée, montagnes et les adresses où vous dormirez : un premier aperçu des voyages que nous concevons.",
    es: "Excursiones entre islas, barcos privados, lagunas, buceo, montañas y los lugares donde te alojarás: un primer vistazo a los viajes que diseñamos.",
    ru: "Острова на лодке, частные яхты, лагуны, дайвинг, горы и места, где вы будете жить, — первый взгляд на путешествия, которые мы создаём.",
    ar: "التنقّل بين الجزر، القوارب الخاصة، البحيرات، الغوص، الجبال وأماكن إقامتك: لمحة أولى عن الرحلات التي نصمّمها.",
  } as L,
  seoTitle: {
    en: "Philippines travel photos: islands, boats, resorts",
    fr: "Photos de voyage aux Philippines : îles, bateaux, hôtels",
    es: "Fotos de viaje a Filipinas: islas, barcos y hoteles",
    ru: "Фото Филиппин: острова, лодки, курорты",
    ar: "صور السفر إلى الفلبين: جزر وقوارب ومنتجعات",
  } as L,
  categories: [
    {
      id: "island-hopping",
      label: { en: "Island hopping", fr: "D'île en île", es: "De isla en isla", ru: "Острова на лодке", ar: "التنقّل بين الجزر" } as L,
      items: [
        { key: "destination/el-nido", place: "El Nido, Palawan" },
        { key: "category/island-escapes", place: "Small Lagoon, El Nido" },
        { key: "landing/island-hopping", place: "Naked Island, Siargao" },
        { key: "destination/siargao", place: "Guyam Island, Siargao" },
        { key: "story/ten-islands", place: "Virgin Island, Bantayan" },
        { key: "landing/14-day-philippines-itinerary", place: "Siargao" },
        { key: "gallery/ph-boat-3", place: "Philippines" },
        { key: "gallery/ph-boat-1", place: "Philippines" },
        { key: "gallery/ph-boat-2", place: "Philippines" },
      ],
    },
    {
      id: "boats",
      label: { en: "Boats and sailing", fr: "Bateaux et voile", es: "Barcos y vela", ru: "Лодки и парусники", ar: "القوارب والإبحار" } as L,
      items: [
        { key: "site/final-cta", place: "Balabac, Palawan" },
        { key: "journey/honeymoon-inside-philippines", place: "El Nido, Palawan" },
        { key: "destination/boracay", place: "Boracay" },
        { key: "landing/private-boats", place: "Coron, Palawan" },
        { key: "destination/negros", place: "Apo Island, Negros" },
        { key: "category/private-journeys", place: "Philippines" },
      ],
    },
    {
      id: "yachts",
      label: { en: "Yachts and private charters", fr: "Yachts et charters privés", es: "Yates y chárter privados", ru: "Яхты и частные чартеры", ar: "اليخوت والرحلات الخاصة" } as L,
      items: [
        { key: "gallery/yacht-1", place: "Yacht charter" },
        { key: "gallery/yacht-2", place: "Yacht charter" },
        { key: "gallery/yacht-3", place: "Yacht charter" },
        { key: "gallery/yacht-4", place: "Yacht charter" },
        { key: "gallery/yacht-5", place: "Private speedboat" },
        { key: "gallery/ph-islet", place: "Philippines" },
      ],
    },
    {
      id: "private-islands",
      label: { en: "Private islands and villas", fr: "Îles privées et villas", es: "Islas privadas y villas", ru: "Частные острова и виллы", ar: "جزر خاصة وفلل" } as L,
      items: [
        { key: "landing/luxury-philippines", place: "Cauayan Island, El Nido" },
        { key: "category/honeymoons", place: "Amanpulo, Palawan" },
        { key: "destination/siquijor", place: "Siquijor" },
      ],
    },
    {
      id: "hotels",
      label: { en: "Hotels and resorts", fr: "Hôtels et resorts", es: "Hoteles y resorts", ru: "Отели и курорты", ar: "الفنادق والمنتجعات" } as L,
      items: [
        { key: "category/luxury", place: "Shangri-La Boracay" },
        { key: "landing/wellness-journeys", place: "Boracay" },
        { key: "landing/private-villas", place: "Cauayan Island, El Nido" },
        { key: "landing/luxury-island-escapes", place: "Amanpulo, Palawan" },
      ],
    },
    {
      id: "lagoons-sea",
      label: { en: "Lagoons and sea", fr: "Lagons et mer", es: "Lagunas y mar", ru: "Лагуны и море", ar: "البحيرات والبحر" } as L,
      items: [
        { key: "site/hero", place: "El Nido, Palawan" },
        { key: "landing/palawan", place: "Big Lagoon, El Nido" },
        { key: "destination/palawan", place: "Secret Beach, Palawan" },
        { key: "journey/palawan-deep-dive", place: "Barracuda Lake, Coron" },
        { key: "destination/coron", place: "Coron, Palawan" },
        { key: "story/siquijor", place: "Siquijor" },
      ],
    },
    {
      id: "diving",
      label: { en: "Diving and snorkelling", fr: "Plongée et snorkeling", es: "Buceo y snorkel", ru: "Дайвинг и снорклинг", ar: "الغوص والسنوركل" } as L,
      items: [
        { key: "category/diving", place: "Moalboal, Cebu" },
        { key: "guide/diving", place: "Moalboal, Cebu" },
        { key: "destination/moalboal", place: "Pescador Island, Moalboal" },
        { key: "destination/malapascua", place: "Malapascua" },
      ],
    },
    {
      id: "mountains",
      label: { en: "Mountains and trekking", fr: "Montagnes et randonnée", es: "Montañas y senderismo", ru: "Горы и треккинг", ar: "الجبال والمشي" } as L,
      items: [
        { key: "destination/banaue", place: "Batad, Ifugao" },
        { key: "destination/sagada", place: "Sagada" },
        { key: "landing/21-day-philippines-itinerary", place: "Sagada" },
        { key: "destination/batanes", place: "Batanes" },
        { key: "destination/bohol", place: "Chocolate Hills, Bohol" },
        { key: "destination/cebu", place: "Kawasan Falls, Cebu" },
      ],
    },
    {
      id: "wellness",
      label: { en: "Wellness and slow days", fr: "Bien-être et douceur", es: "Bienestar y calma", ru: "Велнес и отдых", ar: "العافية والاسترخاء" } as L,
      items: [
        { key: "category/wellness", place: "Siquijor" },
        { key: "journey/the-slow-philippines", place: "Siquijor" },
        { key: "destination/camiguin", place: "Camiguin" },
        { key: "story/siargao-beyond-surfing", place: "Siargao" },
      ],
    },
    {
      id: "spa",
      label: { en: "Spa and massage", fr: "Spa et massages", es: "Spa y masajes", ru: "Спа и массаж", ar: "السبا والتدليك" } as L,
      items: [
        { key: "gallery/massage-4", place: "Spa" },
        { key: "gallery/massage-1", place: "Hot-stone massage" },
        { key: "gallery/massage-2", place: "Spa" },
        { key: "gallery/massage-3", place: "Massage" },
        { key: "gallery/massage-5", place: "Spa" },
      ],
    },
    {
      id: "helicopters-jets",
      label: { en: "Helicopters and private jets", fr: "Hélicoptères et jets privés", es: "Helicópteros y jets privados", ru: "Вертолёты и частные самолёты", ar: "المروحيات والطائرات الخاصة" } as L,
      items: [
        { key: "gallery/helicopter-1", place: "Helicopter transfer" },
        { key: "gallery/helicopter-3", place: "Helicopter flight" },
        { key: "gallery/helicopter-2", place: "Helicopter" },
        { key: "gallery/jet-1", place: "Private jet" },
        { key: "gallery/jet-2", place: "Private jet cabin" },
        { key: "gallery/jet-4", place: "Private jet" },
      ],
    },
  ] as { id: string; label: L; items: GalleryItem[] }[],
};
