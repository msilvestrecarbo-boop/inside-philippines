import type { JourneyTranslation } from "./types";

const t: Record<string, JourneyTranslation> = {
  "palawan-bohol-boracay": {
    intro:
      "Si tienes dos semanas y es tu primera vez, esta es la ruta que muestra más variedad sin convertirse en una carrera. Palawan te da el río subterráneo y las lagunas de El Nido. Bohol, al que llegas con un vuelo directo de El Nido a Cebú y un ferry rápido, aporta ríos, colinas y tortugas. Boracay cierra el viaje con una de las grandes playas del mundo, buenos restaurantes y paseos en velero al atardecer.\n\nHemos evitado pasar por Manila siempre que ha sido posible: El Nido conecta directamente con Cebú, y Cebú con Boracay. Cada isla tiene al menos un día libre. Como siempre, es un punto de partida: cambia Boracay por Siargao para un final más relajado con ambiente surfero, o quita Puerto Princesa y vuela directamente a El Nido.",
    itinerary: [
      ["Llegada a Manila", "Recogida en el aeropuerto y una noche en Manila."],
      ["Vuelo a Puerto Princesa", "Vuelo de mañana a Palawan y tarde tranquila."],
      ["El río subterráneo", "Excursión de un día a Sabang y al río subterráneo, con los manglares."],
      ["Hacia el norte, a El Nido", "Cinco o seis horas por carretera, con paradas."],
      ["El Nido", "Un día en barco por las lagunas e islas de la bahía de Bacuit, y un día libre."],
      ["De El Nido a Bohol", "Vuelo directo a Cebú y ferry rápido a Bohol."],
      ["Bohol", "El interior con las Colinas de Chocolate y los tarseros, una mañana en Balicasag con las tortugas y un día libre."],
      ["De Bohol a Boracay", "Ferry rápido a Cebú y vuelo corto a Caticlan."],
      ["Boracay", "White Beach, Puka Beach, snorkel y un paseo en paraw al atardecer."],
      ["Vuelo a Manila", "Vuelo a Manila y última tarde en la ciudad."],
      ["Vuelo de salida", "Traslado a la terminal internacional."],
    ],
    experiences: ["El río subterráneo", "Excursión por las islas de El Nido", "El interior de Bohol", "Tortugas en Balicasag", "Paseo en velero al atardecer en Boracay"],
    upgrades: ["Segundo día en El Nido en barco privado", "Cambiar Boracay por Siargao", "Habitaciones frente al mar en todas las islas"],
    faqs: [
      ["¿Son demasiadas cuatro islas en quince días?", "Es lo máximo que recomendaríamos, y solo porque las conexiones son directas. Cada isla tiene al menos un día libre."],
      ["¿Puedo cambiar Boracay por Siargao?", "Sí. Siargao es más tranquila y verde, con ambiente de pueblo surfero. Supone un vuelo por Cebú o Manila en lugar de Caticlan."],
    ],
  },

  "whale-sharks-and-islands": {
    intro:
      "Donsol, un pueblo de pescadores en el extremo sur de Luzón, es uno de los mejores lugares del mundo para nadar con tiburones ballena en libertad, y lo hace de la forma correcta: barcos pequeños, avistadores locales con licencia, normas estrictas y nada de alimentarlos. Te damos dos mañanas en el agua para mejorar tus posibilidades y una noche en el río entre luciérnagas. Muy cerca están el cono perfecto del volcán Mayon y las ruinas de Cagsawa.\n\nDespués de Donsol, el viaje se convierte en un clásico recorrido por las islas: el interior y las tortugas de Bohol, y luego cuatro días en El Nido. Terminas con un día en Manila para la gastronomía y la historia. Los tiburones ballena son animales salvajes y los avistamientos nunca están garantizados, pero de febrero a abril las probabilidades son buenas.",
    itinerary: [
      ["Llegada a Manila", "Recogida en el aeropuerto y una noche en Manila."],
      ["Vuelo a Legazpi y traslado a Donsol", "Vuelo corto a Bicol, con vistas al Mayon, y una hora por carretera hasta Donsol."],
      ["Tiburones ballena y luciérnagas", "Dos mañanas en el agua con avistadores con licencia en busca de tiburones ballena, y una salida nocturna por el río para ver luciérnagas."],
      ["El Mayon y Cagsawa", "Las ruinas de Cagsawa a los pies del volcán Mayon y un almuerzo bicolano con chile y coco. Noche en Legazpi."],
      ["Vuelo a Cebú y ferry a Bohol", "Vuelo a Cebú y ferry rápido a Bohol."],
      ["Bohol", "Un día por el interior, tortugas en Balicasag y un día libre."],
      ["Hacia El Nido", "Ferry rápido a Cebú y vuelo directo a El Nido."],
      ["El Nido", "Dos días en barco por la bahía de Bacuit y dos días libres para la playa de Nacpan, el kayak o descansar."],
      ["Vuelo a Manila", "Vuelo a Manila y una tarde en la ciudad."],
      ["Manila", "Intramuros y un paseo gastronómico por Binondo."],
      ["Vuelo de salida", "Traslado a la terminal internacional."],
    ],
    experiences: ["Tiburones ballena en Donsol", "Salida por el río para ver luciérnagas", "Ruinas de Cagsawa", "El interior de Bohol", "Excursión por las islas de El Nido"],
    upgrades: ["Barco privado en El Nido", "Añadir una ruta en quad por el Mayon", "Añadir Coron para bucear"],
    faqs: [
      ["¿Están garantizados los tiburones ballena?", "No. Son animales salvajes y hay días en que no aparecen. Por eso planificamos dos mañanas. De febrero a abril hay más posibilidades."],
      ["¿Es ético?", "Sí, en Donsol. Los encuentros siguen normas estrictas: grupos pequeños, sin tocar, sin flash, una distancia mínima y sin alimentarlos. No incluimos lugares donde se alimenta a los tiburones ballena."],
    ],
  },

  "dive-the-philippines": {
    intro:
      "Filipinas está en el corazón del Triángulo de Coral, y este viaje te lleva a cuatro tipos de buceo completamente distintos. Coron tiene una flota de buques de suministro japoneses hundidos en 1944, hoy cubiertos de coral. Malapascua es uno de los pocos lugares del mundo donde se ven con regularidad tiburones zorro, al amanecer. Moalboal tiene una pared a pocos metros de la playa y un banco de millones de sardinas. Dumaguete tiene Apo Island, uno de los santuarios marinos más antiguos del país, y el buceo macro sobre arena negra de Dauin.\n\nReservamos centros de buceo de confianza, con grupos pequeños y buena seguridad, y nos alojamos en hoteles cerca de los puntos de inmersión. Los acompañantes que no bucean tienen mucho que hacer en cada lugar. Las inmersiones se pagan al centro de buceo, así que solo pagas lo que buceas.",
    itinerary: [
      ["Llegada a Manila", "Recogida en el aeropuerto y una noche en Manila."],
      ["Vuelo a Coron", "Vuelo a Busuanga y traslado al pueblo de Coron. Registro en el centro de buceo."],
      ["Los pecios de Coron", "Tres días de inmersiones en los pecios de la flota japonesa de 1944, además del lago Barracuda, y un día libre."],
      ["De Coron a Malapascua", "Vuelo a Cebú, carretera al norte hasta Maya y un barco corto a Malapascua."],
      ["Malapascua", "Inmersiones al amanecer en Monad Shoal para ver tiburones zorro, y buceo de arrecife y macro alrededor de la isla."],
      ["Hacia Moalboal", "Un trayecto largo por la costa oeste de Cebú."],
      ["Moalboal", "El banco de sardinas, la isla de Pescador y tortugas en el arrecife de casa."],
      ["Hacia Dumaguete", "Carretera al sur y un ferry corto hasta Negros."],
      ["Apo Island y Dauin", "Un día en barco al santuario marino de Apo Island, e inmersiones de muck y macro por la costa de arena negra de Dauin."],
      ["Vuelo a Manila", "Un día sin bucear antes de volar y, después, el vuelo a Manila."],
      ["Vuelo de salida", "Traslado a la terminal internacional."],
    ],
    experiences: ["Los pecios de Coron", "Tiburones zorro en Malapascua", "El banco de sardinas de Moalboal", "Apo Island", "Macro en Dauin"],
    upgrades: ["Guía de buceo privado durante todo el viaje", "Nitrox", "Añadir un crucero de buceo a Tubbataha (de marzo a junio)"],
    faqs: [
      ["¿Qué titulación necesito?", "Open Water basta para la mayoría de las inmersiones. Varios pecios de Coron y los tiburones de Malapascua se disfrutan más con Advanced Open Water, que puedes sacarte durante el viaje."],
      ["¿Por qué no están incluidas las inmersiones?", "Cada buceador bucea una cantidad distinta, así que las inmersiones se pagan directamente al centro de buceo a su precio publicado. Nosotros lo reservamos todo y te decimos el precio antes de salir."],
    ],
  },

  "linapacan-expedition": {
    intro:
      "Entre Coron y El Nido hay cientos de islas que casi nadie visita, y Linapacan tiene algunas de las aguas más transparentes del país. La única forma de verlas bien es en barco. En esta expedición viajas cinco días en una banca tradicional con tripulación local: snorkel, baños, visitas a pueblos de pescadores y noches en sencillos campamentos en las islas, con comida fresca cocinada a bordo.\n\nEs una aventura, no un crucero: los campamentos son básicos y el plan depende del tiempo. Antes, tienes los lagos y arrecifes de Coron. Después llegan El Nido y cinco días tranquilos en Siargao para descansar. Las expediciones salen sobre todo de noviembre a mayo y tienen plazas limitadas, así que reserva con antelación.",
    itinerary: [
      ["Llegada a Manila", "Recogida en el aeropuerto y una noche en Manila."],
      ["Vuelo a Coron", "Vuelo a Busuanga y traslado al pueblo de Coron."],
      ["Coron", "Los lagos Kayangan y Barracuda y los arrecifes en barco, y un día libre."],
      ["La expedición a Linapacan", "Cinco días en un barco tradicional de Coron a El Nido, con snorkel, playas vacías, pueblos de pescadores y noches en campamentos en las islas. Todas las comidas a bordo."],
      ["El Nido", "Dos días libres en El Nido después de la expedición: una ducha caliente, una buena cama y la playa de Nacpan."],
      ["Vuelo a Siargao", "Vuelo a Siargao por Cebú."],
      ["Siargao", "Excursión a las islas Naked, Daku y Guyam, la laguna de Sugba, una clase de surf y tiempo para no hacer nada."],
      ["Vuelo a Manila", "Vuelo a Manila y última noche en la ciudad."],
      ["Vuelo de salida", "Traslado a la terminal internacional."],
    ],
    experiences: ["Expedición en barco por Linapacan", "Lagos de Coron", "Excursión por las islas de Siargao", "Laguna de Sugba"],
    upgrades: ["Barco de expedición privado para tu grupo", "Añadir una noche en un resort en isla privada después de la expedición", "Clases de surf cada mañana en Siargao"],
    faqs: [
      ["¿Cómo de básicos son los campamentos?", "Cabañas sencillas o tiendas en la playa, con baños compartidos y duchas de cubo. Bastante cómodos, pero no es un hotel. Eso forma parte de la experiencia."],
      ["¿Puede cancelarse por el tiempo?", "Sí. Si el mar está demasiado agitado, el operador cambia la ruta o la fecha. Preparamos un plan alternativo para que tu viaje siga funcionando."],
    ],
    legNotes: { 1: "Expedición compartida con un operador local; salidas en fechas fijas, sobre todo de noviembre a mayo." },
  },

  "exclusive-philippines": {
    intro:
      "Este es el viaje para quienes han visto mucho mundo y buscan algo distinto. Empieza en Batanes, las islas más septentrionales del país, más cerca de Taiwán que de Manila. Hay colinas verdes, casas de piedra, faros y casi ningún turista. Después pasa a Palawan, con barcos privados en El Nido y tres noches en un resort en isla privada, y termina en Siargao con barco privado, profesor de surf privado y las mejores villas de la isla.\n\nTodos los traslados, barcos y guías son privados, y los hoteles están entre los mejores del país. Batanes depende del tiempo, así que lo planificamos para los meses más secos y tenemos un plan alternativo.",
    itinerary: [
      ["Llegada a Manila", "Recogida privada en el aeropuerto y una noche en uno de los mejores hoteles de Manila."],
      ["Vuelo a Batanes", "Vuelo al norte, a Basco, y un recorrido por la costa por la tarde."],
      ["Batanes", "Las colinas, los faros y las casas de piedra ivatan de Batan con un guía privado, y un barco a los pueblos de Sabtang."],
      ["De Batanes a El Nido", "Vuelo de vuelta a Manila y conexión a El Nido."],
      ["El Nido en barco privado", "Dos días en tu propio barco, con las lagunas a primera hora y almuerzo en una playa tranquila."],
      ["A la isla privada", "Traslado privado a tu resort en la isla."],
      ["Días en la isla", "Snorkel, spa y calma absoluta."],
      ["Vuelo a Siargao", "Vuelos por Manila o Cebú hasta Siargao."],
      ["Siargao en privado", "Un barco privado a las islas y a la laguna de Sugba, y clases de surf privadas."],
      ["Vuelo de salida", "Vuelo a Manila o Cebú para tu conexión internacional."],
    ],
    experiences: ["Faros y casas de piedra de Batanes", "La isla de Sabtang", "El Nido en barco privado", "Resort en isla privada", "Barco privado en Siargao"],
    upgrades: ["Vuelos chárter entre islas", "Una cena con chef privado en un banco de arena", "Villas con piscina privada en todo el viaje"],
    faqs: [
      ["¿Por qué Batanes?", "Porque no se parece a ningún otro lugar de Filipinas: colinas verdes onduladas, acantilados y pueblos de piedra, y muy pocos visitantes."],
      ["¿Y si se cancela el vuelo a Batanes?", "Puede ocurrir con mal tiempo. Guardamos un día de margen y ajustamos el resto del viaje para que no pierdas nada importante."],
    ],
    legNotes: { 1: "Los vuelos a Batanes dependen del tiempo; guardamos un día de margen." },
  },
};

export default t;
