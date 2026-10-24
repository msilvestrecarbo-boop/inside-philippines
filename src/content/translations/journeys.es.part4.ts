import type { JourneyTranslation } from "./types";

const t: Record<string, JourneyTranslation> = {
  "cebu-islands-and-culture": {
    intro:
      "Cebú es donde empezó la historia española de Filipinas, y es uno de los lugares más fáciles para llegar, con vuelos internacionales directos a Mactán. Este viaje no necesita ni un solo vuelo doméstico. Empiezas en la ciudad de Cebú, con sus viejos fuertes e iglesias y el famoso lechón de la isla, y luego subes al norte a la pequeña isla de Malapascua, donde los buceadores ven tiburones zorro al amanecer y los demás disfrutan de playas tranquilas.\n\nDespués llega Moalboal, en la costa oeste, donde millones de sardinas giran a pocos metros de la playa y es fácil encontrar tortugas, con los cañones turquesa de Kawasan muy cerca. El viaje termina en Bohol, con sus colinas, tarseros y arena blanca, a un ferry rápido de Cebú. Los buceadores pueden convertirlo en un viaje de buceo; quienes no bucean no se pierden nada.",
    itinerary: [
      ["Llegada a Cebú", "Recogida en el aeropuerto de Mactán y una noche en Cebú."],
      ["La ciudad de Cebú", "La Cruz de Magallanes, la basílica del Santo Niño, el fuerte de San Pedro y un almuerzo de lechón."],
      ["Hacia el norte, a Malapascua", "Unas cuatro horas por carretera hasta Maya y un trayecto corto en barco hasta la isla."],
      ["Malapascua", "Una inmersión opcional al amanecer con tiburones zorro, snorkel y playas, y un barco a una isla cercana."],
      ["Hacia Moalboal", "Un traslado largo por la costa oeste de Cebú. Tarde en el agua en Panagsama."],
      ["Moalboal y Kawasan", "Snorkel entre el banco de sardinas y en busca de tortugas, y un día de barranquismo por las pozas turquesa de Kawasan."],
      ["Hacia Bohol", "Por carretera al puerto de Cebú y ferry rápido a Bohol."],
      ["Bohol", "Las Colinas de Chocolate, los tarseros y el río Loboc un día, y un día libre de playa."],
      ["Vuelo de salida desde Cebú", "Ferry rápido de vuelta a Cebú y traslado al aeropuerto."],
    ],
    experiences: ["El Cebú histórico y el lechón", "Tiburones zorro en Malapascua", "El banco de sardinas de Moalboal", "Barranquismo en Kawasan", "El interior de Bohol"],
    upgrades: ["Paquete de buceo en Malapascua y Moalboal", "Coche privado para los traslados largos", "Añadir Siquijor antes de Bohol"],
    faqs: [
      ["¿Tengo que bucear?", "No. Las sardinas y las tortugas de Moalboal están junto a la playa, con gafas y tubo. Los tiburones zorro son solo para buceadores titulados."],
      ["¿Puedo volar a Cebú desde Europa?", "No hay vuelos directos, pero Cebú tiene buenas conexiones por Singapur, Hong Kong, Doha, Dubái y Seúl, así que puedes saltarte Manila por completo."],
    ],
  },

  "bohol-and-camiguin": {
    intro:
      "Camiguin es uno de los secretos mejor guardados de Filipinas: una isla pequeña y verde formada por volcanes, con más volcanes que pueblos. Puedes darle la vuelta en coche en una tarde, pero querrás tres días para sus cascadas, sus manantiales calientes y fríos, el cementerio hundido frente a la costa y White Island, un banco de arena con un volcán al fondo.\n\nCombina de forma natural con Bohol, justo al otro lado del mar, y el ferry entre ambas evita vuelos extra. Bohol te da las Colinas de Chocolate, los tarseros y las playas tranquilas de Panglao. Vuelas a casa desde Cagayán de Oro, en Mindanao, a un ferry corto y un trayecto por carretera de Camiguin. Así es como los filipinos pasan sus vacaciones: fácil, cercano y sin prisas.",
    itinerary: [
      ["Llegada a Manila", "Recogida en el aeropuerto y una noche en Manila."],
      ["Vuelo a Bohol", "Vuelo de mañana a Panglao y tarde de playa."],
      ["Bohol", "Un día por el interior para las Colinas de Chocolate, los tarseros y el río Loboc; un barco a Balicasag para ver tortugas; y un día libre."],
      ["Ferry a Camiguin", "Traslado a Jagna y ferry hasta Camiguin, unas cuatro horas."],
      ["Camiguin", "White Island al amanecer, las cascadas de Katibawasan y Tuasan, el cementerio hundido, las aguas termales de Ardent y el manantial frío de Santo Niño, con conductor."],
      ["A Manila por Cagayán de Oro", "Ferry corto a Mindanao, traslado al aeropuerto de Laguindingan y vuelo a Manila."],
      ["Vuelo de salida", "Traslado a la terminal internacional."],
    ],
    experiences: ["El interior de Bohol", "Tortugas en Balicasag", "Banco de arena de White Island", "Cascadas y manantiales de Camiguin"],
    upgrades: ["Coche privado en las dos islas", "Añadir Siquijor antes de Camiguin", "Subida al monte Hibok-Hibok con guía"],
    faqs: [
      ["¿Es seguro Camiguin?", "Sí. Camiguin es una provincia insular pequeña y tranquila, muy popular entre las familias filipinas. Seguimos las recomendaciones oficiales de viaje y solo planificamos lo que haríamos nosotros mismos."],
      ["¿Con qué frecuencia sale el ferry?", "El ferry Bohol–Camiguin sale unas pocas veces por semana, así que organizamos tus fechas en torno a él."],
    ],
    legNotes: { 1: "No es diario; planificamos las fechas según el horario del ferry." },
  },

  "the-gentle-philippines": {
    intro:
      "Diseñamos esta ruta para quienes quieren conocer Filipinas como se merece pero a un ritmo más tranquilo, y es especialmente popular entre parejas de más de sesenta años y entre quienes viajan con sus padres mayores. Todos los traslados son privados. Los hoteles se eligen por su fácil acceso, sin largos paseos por la arena ni escaleras empinadas, y por su buena cocina. Los días de barco son cortos, con sombra, y terminan a la hora de comer si lo prefieres.\n\nEmpiezas con una visita privada al Manila antiguo, luego pasas cuatro días en Bohol, con su campo, su río y sus playas, y cuatro en El Nido, donde los días de barco pueden ser tan suaves como quieras. Solo hay dos días de traslado, y los dos están organizados para evitar madrugones.",
    itinerary: [
      ["Llegada a Manila", "Recogida privada en el aeropuerto y una noche en un hotel céntrico y tranquilo."],
      ["El Manila antiguo", "Una visita privada y sin prisas por Intramuros y la iglesia de San Agustín, con almuerzo en un restaurante histórico."],
      ["Vuelo a Bohol", "Un vuelo a media mañana a Panglao y una tarde para instalarse."],
      ["Bohol con calma", "Las Colinas de Chocolate y los tarseros en coche privado, un crucero con almuerzo por el río Loboc y un día libre en el hotel."],
      ["De Bohol a El Nido", "Ferry rápido a Cebú y vuelo directo a El Nido."],
      ["El Nido", "Dos excursiones cortas en barco privado a las lagunas y playas más tranquilas, y un día para descansar."],
      ["Vuelo a Manila", "Vuelo a Manila y una última cena."],
      ["Vuelo de salida", "Traslado privado a la terminal internacional."],
    ],
    experiences: ["Visita privada a Intramuros", "Crucero por el río Loboc", "Colinas de Chocolate", "El Nido en barco privado"],
    upgrades: ["Suites con vistas al mar", "Añadir un día de spa en Bohol", "Ampliar El Nido dos noches"],
    faqs: [
      ["¿Es adecuado para personas con movilidad reducida?", "Cuéntanos exactamente qué te resulta fácil y qué no, y elegiremos hoteles, barcos y visitas a medida. Algunos barcos requieren un pequeño escalón desde la playa; elegimos las opciones más cómodas."],
      ["¿Podemos tener un guía de habla hispana?", "Sí, podemos organizar guías de habla hispana o inglesa."],
    ],
  },

  "visayas-on-a-budget": {
    intro:
      "Un buen viaje a Filipinas no tiene por qué ser caro. Esta ruta ahorra en los sitios adecuados: sin vuelos domésticos, hoteles sencillos pero bien situados y con buenas opiniones, y excursiones compartidas donde funcionan bien. No ahorra en seguridad, en barcos fiables ni en nuestra asistencia.\n\nVuelas a Cebú y vas directamente a Moalboal para ver tortugas y el banco de sardinas. Después llega Siquijor, una isla de cascadas, carreteras vacías y leyendas populares: tres días por muy poco dinero. Bohol cierra el viaje con sus colinas y playas, y el ferry rápido te devuelve a Cebú para tu vuelo de regreso.",
    itinerary: [
      ["Llegada a Cebú", "Recogida en el aeropuerto y una noche en Cebú."],
      ["Hacia Moalboal", "Unas tres horas por carretera hasta la costa oeste. Tarde de snorkel desde la playa."],
      ["Moalboal", "El banco de sardinas y las tortugas, y un día de barranquismo en Kawasan."],
      ["Hacia Siquijor", "Carretera al sur, un ferry corto a Negros y un barco rápido de Dumaguete a Siquijor."],
      ["Siquijor", "Las cascadas de Cambugahay, el viejo árbol balete, la iglesia de Lazi y la carretera de la costa en moto o con conductor, y snorkel en Tubod."],
      ["Barco rápido a Bohol", "Unas dos horas por mar hasta Tagbilaran y luego a Panglao."],
      ["Bohol", "Una excursión compartida por el interior a las Colinas de Chocolate y los tarseros, y un día de playa."],
      ["Vuelo de salida desde Cebú", "Ferry rápido de vuelta a Cebú y traslado al aeropuerto."],
    ],
    experiences: ["El banco de sardinas de Moalboal", "Barranquismo en Kawasan", "Cascadas de Siquijor", "El interior de Bohol"],
    upgrades: ["Hoteles de categoría Boutique", "Añadir Apo Island desde Dumaguete", "Coche privado en Siquijor"],
    faqs: [
      ["¿Qué tipo de hoteles son?", "Limpios, seguros, bien valorados y bien situados: pequeños hoteles y casas de huéspedes con baño privado y aire acondicionado. Pasa a Boutique para más encanto y comodidad."],
      ["¿Sigue siendo un viaje privado?", "Los traslados son compartidos cuando tiene sentido para mantener el precio bajo, pero tu plan, tus reservas y tu asistencia son solo tuyos."],
    ],
    legNotes: { 4: "Horarios limitados; ruta alternativa por Dumaguete." },
  },

  "family-islands": {
    intro:
      "Con niños, el mejor viaje a Filipinas es el que tiene menos cambios. Esta ruta tiene solo dos bases y un día de traslado entre ellas. Primero Bohol, con los diminutos tarseros que encantan a los niños, las Colinas de Chocolate, un paseo en balsa por el río y tortugas en Balicasag. Después Boracay, con una de las playas familiares más tranquilas y de aguas poco profundas de Asia, restaurantes fáciles, paseos en velero al atardecer y excursiones en barco por las islas.\n\nElegimos habitaciones familiares o comunicadas, hoteles con piscina y buena comida para niños, y mantenemos cortos los días de excursión. Con niños pequeños podemos acortar los días de barco. Con adolescentes añadimos kayak, paddle surf y un bautismo de buceo.",
    itinerary: [
      ["Llegada a Manila", "Recogida en el aeropuerto y una habitación familiar cerca del aeropuerto."],
      ["Vuelo a Bohol", "Vuelo corto a Panglao y tarde de piscina o playa."],
      ["Bohol", "Un día por el interior con los tarseros, las Colinas de Chocolate y un almuerzo en el río; una mañana en barco a Balicasag para ver tortugas; y dos días libres."],
      ["De Bohol a Boracay", "Ferry rápido a Cebú, vuelo corto a Caticlan y cinco minutos en barco hasta Boracay."],
      ["Boracay", "Días de playa en White Beach, excursión por las islas con snorkel, un paseo al atardecer en paraw (velero tradicional) y Puka Beach. Tiempo para kayak o un bautismo de buceo para los mayores."],
      ["Vuelo de salida por Manila", "Vuelo de Caticlan a Manila para tu conexión internacional."],
    ],
    experiences: ["Santuario de tarseros", "Tortugas en Balicasag", "Excursión por las islas de Boracay", "Paseo en paraw al atardecer"],
    upgrades: ["Villa familiar con piscina privada", "Barco privado en Boracay", "Un primer curso de buceo para niños mayores de diez años"],
    faqs: [
      ["¿Es Filipinas buen destino con niños pequeños?", "Mucho. A los filipinos les encantan los niños, la comida es suave y, con dos bases y excursiones cortas, es un viaje fácil. Incluimos la siesta y el tiempo de piscina en el plan de cada día."],
      ["¿Los niños pagan precio completo?", "Normalmente no. El precio depende de las edades y de cómo se compartan las habitaciones. Dinos las edades de tus hijos y te daremos un presupuesto exacto."],
    ],
  },
};

export default t;
