import type { JourneyTranslation } from "./types";

const t: Record<string, JourneyTranslation> = {
  "bohol-beach-escape": {
    intro:
      "No todos los viajes a Filipinas necesitan tres islas. Si añades unos días a un viaje de trabajo, combinas Filipinas con otro país o simplemente quieres una escapada corta junto al mar, Bohol es la isla que te recomendamos. Está a un vuelo corto de Manila, las playas de Panglao son tranquilas y buenas para nadar, y el interior da para dos días muy completos: las Colinas de Chocolate, los diminutos tarseros, ríos y viejas iglesias de piedra.\n\nEl ritmo es tranquilo a propósito. Un día por el campo, una mañana en el mar en Balicasag y un día sin nada planeado. ¿Quieres más? Añade Siquijor en ferry rápido, o conviértelo en un viaje más largo con Siargao o El Nido. Lo rehacemos a tu medida.",
    itinerary: [
      ["Llegada a Manila", "Te recibimos en el aeropuerto y te llevamos a un hotel cómodo para descansar una noche después del vuelo largo."],
      ["Vuelo a Bohol", "Un vuelo corto por la mañana a Panglao. Check-in, baño y tarde de playa."],
      ["El interior de Bohol", "Las Colinas de Chocolate, el santuario de tarseros, el río Loboc con almuerzo a bordo y la antigua iglesia de Baclayon."],
      ["Balicasag en barco", "Un barco temprano al santuario marino de Balicasag para hacer snorkel con tortugas, con parada en el banco de arena de Virgin Island a la vuelta."],
      ["Un día libre", "Playa, spa o kayak por la costa. Te recomendamos un buen sitio para cenar."],
      ["Vuelo de salida", "Traslado al aeropuerto para tu vuelo a Manila y tu conexión internacional."],
    ],
    experiences: ["Colinas de Chocolate y tarseros", "Crucero con almuerzo por el río Loboc", "Tortugas en Balicasag", "Banco de arena de Virgin Island"],
    upgrades: ["Añadir Siquijor dos o tres noches en ferry rápido", "Barco privado para la mañana en Balicasag", "Una villa frente al mar en Panglao"],
    faqs: [
      ["¿Bastan seis días?", "Para una isla, sí. Es un viaje corto y relajado. Si tienes más tiempo, preferimos añadir una segunda isla antes que más noches en el mismo sitio."],
      ["¿Puedo volar a Bohol desde Cebú?", "Sí. Si tu vuelo internacional llega a Cebú, tomamos el ferry rápido a Bohol (unas dos horas) y nos saltamos Manila por completo."],
    ],
    legNotes: { 2: "O por Cebú, según tu conexión internacional." },
  },

  "essential-palawan": {
    intro:
      "Palawan es la isla que casi todo el mundo imagina cuando piensa en Filipinas, y esta es la forma más sencilla de verla bien. Vuelas a Puerto Princesa, pasas un día en el río subterráneo, Patrimonio de la UNESCO, donde entras en barca a remo en un sistema de cuevas, y luego subes por carretera a El Nido entre campos de cultivo, pueblos de pescadores y cocoteros.\n\nEl Nido tiene tres días completos: dos en el mar, entre las lagunas y las islas de caliza de la bahía de Bacuit, y uno para la playa de Nacpan o para no hacer nada. Vuelas de regreso a Manila desde El Nido, así que no hay trayecto largo al final. Si tienes unos días más, añade Coron o Port Barton; adaptamos la ruta.",
    itinerary: [
      ["Llegada a Manila", "Recogida en el aeropuerto y una noche en Manila para recuperarte del vuelo."],
      ["Vuelo a Puerto Princesa", "Vuelo de mañana a Palawan. Tarde tranquila y cena junto a la bahía."],
      ["El río subterráneo", "Traslado a Sabang y paseo en barca a remo por el río de la cueva, seguido de un paseo por los manglares."],
      ["Hacia el norte, a El Nido", "Unas cinco o seis horas por carretera, con paradas por el camino. Llegada a tiempo para el atardecer."],
      ["El Nido: dos días en barco y un día libre", "Excursiones por las lagunas, playas y puntos de snorkel de la bahía de Bacuit durante dos días, y un día libre para la playa de Nacpan o el kayak."],
      ["Vuelo a Manila", "Vuelo de El Nido a Manila. Última tarde en la ciudad."],
      ["Vuelo de salida", "Traslado a la terminal internacional."],
    ],
    experiences: ["Río subterráneo de Puerto Princesa", "Excursión por las islas de El Nido", "Playa de Nacpan", "Paseo en barca por los manglares de Sabang"],
    upgrades: ["Barco privado para los días en El Nido", "Añadir Port Barton dos noches tranquilas de camino al norte", "Añadir Coron tres noches en ferry rápido (meses más secos)"],
    faqs: [
      ["¿Es largo el trayecto a El Nido?", "Son cinco o seis horas, con paradas. Lo partimos con un almuerzo por el camino. Si lo prefieres, puedes volar Manila–El Nido y visitar Puerto Princesa a la vuelta."],
      ["¿Necesito permiso para el río subterráneo?", "Sí, y el número de visitantes al día es limitado. Lo reservamos en cuanto se confirman tus fechas."],
    ],
  },

  "luxury-palawan": {
    intro:
      "Esto es Palawan sin multitudes. En El Nido tienes tu propio barco con tripulación durante tres días: salís temprano para llegar a las lagunas antes que nadie y paráis a comer en una playa elegida precisamente por estar vacía. Después te trasladas a un resort en una isla privada del norte de Palawan, con solo un puñado de villas, un arrecife frente a tu puerta y nada en la agenda salvo lo que tú quieras.\n\nHoteles, barcos y horarios se eligen pensando en ti, y todos los traslados son privados. Funciona de maravilla como luna de miel, e igual de bien para quien quiera Palawan en su mejor versión. Cuéntanos qué te importa, ya sea la comida, el buceo, el spa o la privacidad absoluta, y elegiremos los lugares a juego.",
    itinerary: [
      ["Llegada a Manila", "Recogida privada en el aeropuerto y una noche en uno de los mejores hoteles de Manila."],
      ["Vuelo a El Nido", "Vuelo de mañana a El Nido. Tarde libre y una copa al atardecer sobre la bahía de Bacuit."],
      ["El Nido en barco privado", "Tres días en tu propio barco: las lagunas a primera hora, las islas exteriores, snorkel y almuerzos en playas tranquilas."],
      ["A la isla privada", "Un barco privado o un vuelo corto hasta tu resort en la isla. Instálate y mira el atardecer desde tu villa."],
      ["Días en la isla", "Snorkel en el arrecife del resort, kayak, spa o absolutamente nada."],
      ["Vuelo de salida por Manila", "Traslado y vuelo a Manila para tu conexión internacional."],
    ],
    experiences: ["Lagunas de El Nido en barco privado", "Snorkel en el arrecife del resort", "Cena al atardecer en la playa", "Spa"],
    upgrades: ["Añadir Coron en barco privado", "Una cena con chef privado en un banco de arena", "Una villa con piscina privada"],
    faqs: [
      ["¿En qué isla privada nos alojaremos?", "La elegimos contigo, según tu presupuesto y lo que buscas: comida, buceo, spa o privacidad absoluta. Te confirmamos el nombre y la villa antes de reservar."],
      ["¿Están incluidas las comidas en la isla?", "Muchos resorts en islas incluyen pensión completa. Te decimos exactamente qué incluye el tuyo antes de reservar."],
    ],
    legNotes: { 1: "Algunos resorts usan en su lugar un vuelo privado corto." },
  },

  "rice-terraces-and-islands": {
    intro:
      "La mayoría de la gente nunca ve esta cara de Filipinas. En las montañas de la Cordillera, al norte de Manila, el pueblo ifugao talló arrozales en terrazas en las laderas hace dos mil años, y todavía se cultivan hoy. Caminas con un guía local hasta el anfiteatro de terrazas de Batad y continúas hacia Sagada, un pueblo fresco de montaña con pinares, cuevas y los famosos ataúdes colgantes.\n\nDespués de las montañas, el mar. Coron, en el norte de Palawan, tiene algunos de los lagos más transparentes y los mejores arrecifes del país, y tres días allí son el contraste perfecto tras la semana en la sierra. Las carreteras de montaña son largas, así que planificamos los trayectos con cuidado y usamos coches privados a partir de Boutique.",
    itinerary: [
      ["Llegada a Manila", "Recogida en el aeropuerto y una noche en Manila."],
      ["Por carretera a Banaue", "Un trayecto largo pero precioso hacia el norte, a la Cordillera, con paradas para comer y en miradores."],
      ["Batad y las terrazas", "Una caminata guiada por las terrazas de Batad hasta la cascada de Tappiya, y un segundo día más suave por los miradores y pueblos de Banaue."],
      ["Hacia Sagada", "Unas tres horas por carretera de montaña hasta Sagada. Paseo por el pueblo por la tarde."],
      ["Sagada", "La cueva de Sumaguing con guía, los ataúdes colgantes del valle de Echo y un amanecer temprano en Kiltepan, por encima de las nubes."],
      ["Regreso a Manila", "Un día entero de carretera de vuelta a Manila, o por Baguio con una parada. Tarde en la ciudad."],
      ["Vuelo a Coron", "Vuelo corto a Busuanga y traslado al pueblo de Coron."],
      ["Coron: lagos, arrecifes y un día libre", "Los lagos Kayangan y Barracuda, jardines de coral y playas en dos días de barco, y un día libre para las aguas termales o el monte Tapyas al atardecer."],
      ["Vuelo de salida por Manila", "Vuelo de vuelta a Manila para tu conexión internacional."],
    ],
    experiences: ["Caminata por las terrazas de Batad", "Cueva de Sumaguing", "Amanecer en Kiltepan", "Lagos y arrecifes de Coron"],
    upgrades: ["Coche privado con conductor para todo el norte", "Una noche en Baguio para partir el trayecto", "Barco privado en Coron"],
    faqs: [
      ["¿Es dura la caminata de Batad?", "Tiene tramos empinados, con muchos escalones de piedra, pero vas a tu ritmo con un guía. Cualquier viajero razonablemente en forma, de cualquier edad, puede hacerla. Hay una opción más corta si lo prefieres."],
      ["¿Por qué tanta carretera?", "No hay vuelos a los arrozales en terrazas. Las carreteras son lentas pero preciosas, y calculamos los trayectos para que llegues de día."],
    ],
    legNotes: { 2: "Si lo prefieres, podemos partirlo con una noche en Baguio." },
  },

  "luzon-adventure": {
    intro:
      "Un viaje para quienes quieren algo más que playas. Empieza en Manila, con las murallas de Intramuros y un paseo gastronómico por Binondo, el barrio chino más antiguo del mundo. Después sube hacia la Cordillera: los arrozales en terrazas de Banaue y Batad, y las cuevas y pinares de Sagada.\n\nDesde Sagada, la carretera baja serpenteando hasta la costa y Vigan, una ciudad Patrimonio de la UNESCO de calles empedradas, calesas tiradas por caballos y casas coloniales españolas, con su propia tradición culinaria. Vuelas de regreso a Manila desde la cercana Laoag. Combina perfectamente con unos días de playa al final: pídenos añadir Boracay, Bohol o El Nido.",
    itinerary: [
      ["Llegada a Manila", "Recogida en el aeropuerto y una noche en Manila."],
      ["El Manila antiguo y Binondo", "Un paseo guiado por Intramuros y la iglesia de San Agustín, y después un paseo gastronómico por Binondo."],
      ["Por carretera a Banaue", "Hacia el norte, a las montañas, con paradas por el camino."],
      ["Las terrazas de Batad", "Una caminata guiada por las terrazas de Batad hasta la cascada de Tappiya."],
      ["Hacia Sagada", "Carretera de montaña hasta Sagada y paseo por la tarde a los ataúdes colgantes del valle de Echo."],
      ["Cuevas y amanecer en Sagada", "Amanecer en Kiltepan y, después, la cueva de Sumaguing con un guía local."],
      ["Bajada a Vigan", "Un trayecto largo y precioso de las montañas a la costa. Paseo al anochecer por la calle Crisólogo."],
      ["Vigan", "Casas históricas, un paseo en calesa, los talleres de cerámica y platos locales como la empanada y la longganisa."],
      ["Vuelo de regreso a Manila", "Trayecto corto a Laoag y vuelo a Manila. Última tarde en la ciudad."],
      ["Vuelo de salida", "Traslado a la terminal internacional."],
    ],
    experiences: ["Paseo gastronómico por Binondo", "Caminata por las terrazas de Batad", "Cueva de Sumaguing", "Paseo por el Vigan histórico"],
    upgrades: ["Añadir tres noches de playa en Boracay o El Nido", "Coche privado con conductor durante todo el viaje", "Una noche en una casa histórica restaurada en Vigan"],
    faqs: [
      ["¿Puedo añadir playa al final?", "Sí, y la mayoría lo hace. Boracay, Bohol y El Nido están a un vuelo fácil de Manila."],
      ["¿Hace frío en las montañas?", "Sagada y Banaue son frescos, sobre todo de noche y a primera hora de diciembre a febrero. Lleva una prenda de abrigo."],
    ],
  },
};

export default t;
