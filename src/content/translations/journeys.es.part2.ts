import type { JourneyTranslation } from "./types";

const t: Record<string, JourneyTranslation> = {
  "surf-and-islands": {
    intro:
      "Siargao es donde la mayoría de la gente aprende a surfear en Filipinas, y es un buen sitio para hacerlo: agua cálida, olas de arrecife para todos los niveles y profesores que han crecido en ellas. Le dedicamos seis días, que es la diferencia entre ponerse de pie una vez y empezar de verdad a surfear. Después te llevamos a Bohol, donde los ríos y las colinas son un descanso para los hombros cansados, y terminamos en El Nido, cambiando las tablas por barcos y lagunas.\n\nTen en cuenta la temporada. Las grandes marejadas de Siargao llegan más o menos de septiembre a noviembre: es emocionante verlas, pero demasiado para principiantes en las olas famosas; de marzo a julio las olas son más pequeñas y amables. Hay dos días de traslado con conexión en Cebú y Manila. Como siempre, es un punto de partida: los surfistas con experiencia quizá quieran más Siargao y menos de todo lo demás, y podemos añadir un surf camp o una salida en barco a olas exteriores.",
    itinerary: [
      ["Llegada a Manila", "Te recibimos en el aeropuerto y te llevamos a un hotel cercano. Si llegas temprano, podemos volar a Siargao el mismo día."],
      ["Vuelo a Siargao", "Un vuelo de 1 h 50 min y 45 minutos por carretera hasta General Luna. Conoce a tu profesor, revisa tu tabla y mira la sesión de la tarde desde la playa."],
      ["Cinco días de surf, con un día de descanso", "Sesiones de mañana en olas de arrecife y de playa elegidas según tu nivel y el oleaje del día, con análisis en vídeo para quienes ya tienen algo de nivel. Las tardes son para dormir, comer y recuperarse. A mitad de semana te llevamos de excursión por las islas o a la laguna de Sugba, porque tus brazos lo necesitarán."],
      ["De Siargao a Bohol por Cebú", "Un vuelo de una hora a Cebú, traslado al muelle y un ferry rápido de unas dos horas a Tagbilaran. Llegas a Panglao a última hora de la tarde."],
      ["Bohol: colinas, río y una playa tranquila", "Visita temprana a las Colinas de Chocolate, el santuario de tarseros y el río Loboc. El décimo día es tuyo: snorkel en Balicasag, un almuerzo largo o simplemente la playa."],
      ["De Bohol a El Nido por Manila", "Dos vuelos con escala en Manila, o uno por Cebú cuando esa temporada hay un servicio directo en avioneta. Llegada a El Nido a última hora de la tarde."],
      ["El Nido: lagunas y caliza", "Un barco temprano a las lagunas, un segundo día a las islas exteriores y un día libre para la playa de Nacpan o el kayak. Aquí no hay surf, y en parte esa es la idea."],
      ["Vuelo de salida por Manila", "Un vuelo corto a Manila para tu conexión internacional, con margen."],
    ],
    experiences: ["Cinco mañanas de clases de surf en Siargao", "Sesión de análisis en vídeo para quienes ya tienen nivel", "Excursión por las islas de Siargao o a la laguna de Sugba", "La pasarela de Cloud 9 al atardecer", "Colinas de Chocolate, tarseros y el río Loboc", "Lagunas e islas exteriores de El Nido en barco"],
    upgrades: ["Barco privado a las olas de arrecife exteriores de Siargao", "Más días de surf en lugar de Bohol", "Estancia de surf y yoga con clases diarias", "Barco privado los dos días en El Nido"],
    faqs: [
      ["Nunca he hecho surf. ¿Es para mí?", "Sí. La mayoría de nuestros viajeros de surf son principiantes. Cinco mañanas con profesor en las olas adecuadas suelen bastar para pasar de la primera ola a coger las tuyas."],
      ["¿Puedo cambiar las islas?", "Sí. Los surfistas con experiencia suelen quitar Bohol para tener más Siargao; las parejas que no surfean a veces prefieren Siquijor. Es un punto de partida."],
      ["¿Cuál es el mejor mes?", "Para aprender, de marzo a julio: olas más pequeñas y buen tiempo. Palawan también está en su mejor momento de marzo a mayo. Desde junio, en El Nido llueve más."],
      ["¿Cómo funcionan los vuelos?", "Siargao conecta por Manila o Cebú, y Palawan por Manila. Dos de tus días son de traslado. Los reservamos y gestionamos todos."],
    ],
    legNotes: { 4: "Algunas temporadas hay un servicio directo en avioneta Cebú–El Nido; lo usamos cuando ahorra tiempo." },
  },

  "the-grand-philippines": {
    intro:
      "Las islas son lo que atrae a casi todo el mundo a Filipinas, pero el país se entiende mejor cuando has visto dónde empieza. Este viaje arranca en Manila, con un día en Intramuros y un almuerzo largo y serio, y después sube hacia la Cordillera: los arrozales en terrazas de Banaue y Batad, de 2.000 años de antigüedad, y los pinares, cuevas y mañanas frescas de Sagada. Solo entonces bajas a la costa, pasando por las lagunas de El Nido, el campo de Bohol y, por último, Siargao.\n\nEs un viaje grande y no vamos a fingir lo contrario. Las montañas están a un largo trayecto por carretera desde Manila, ida y vuelta, y hay tres días de traslado entre islas. A cambio te llevas una imagen de Filipinas que la mayoría de los visitantes nunca ve. Es un punto de partida: puedes cambiar Bohol por Siquijor o la costa sur de Cebú, volar en lugar de ir por carretera cuando sea posible, o quitar el norte para un final más tranquilo en las islas. Te ayudamos a decidir qué conservar.",
    itinerary: [
      ["Manila: llegada y la ciudad antigua", "Llegada y descanso. Al día siguiente, recorre Intramuros con un guía capaz de dar sentido a cuatro siglos de historia, y después a comer: la cocina chino-filipina de Binondo o un almuerzo largo con platos que no encontrarás fuera. Manila es caótica, pero con el guía adecuado es mucho mejor compañía de lo que dice su fama."],
      ["Hacia el norte, a Banaue", "Unas nueve horas por carretera. En Essential es el autobús nocturno, que sale de Manila por la tarde y llega al amanecer; desde Boutique te llevamos en coche privado, de día y con paradas. Es un viaje largo, y la llegada, cuando aparecen las terrazas, merece la pena."],
      ["Los arrozales de Batad", "Un trayecto corto en coche y una hora a pie te llevan a Batad, un anfiteatro de terrazas construido por el pueblo ifugao y que se sigue cultivando. Con un guía local, baja por los muros de las terrazas hasta el pueblo y sigue hasta las cascadas de Tappiya si las piernas acompañan. Hay mucha pendiente y es mejor para caminantes en forma."],
      ["Sagada: cuevas, pinos y mañanas frescas", "Unas tres horas por carretera de montaña hasta Sagada. Explora la cueva de Sumaguing con un guía, ve los ataúdes colgantes de Echo Valley y madruga para ver el mar de nubes en Kiltepan. Por la noche hace fresco como para llevar chaqueta, una sensación curiosa en Filipinas."],
      ["La larga carretera de vuelta a Manila", "El día más largo del viaje: unas 11–12 horas por carretera, pasando por Baguio. Lo dividimos con paradas y duermes cerca del aeropuerto, listo para el vuelo de mañana."],
      ["Vuelo a El Nido", "Un vuelo corto a El Nido. Después de las montañas, una tarde en el mar."],
      ["Lagunas e islas de El Nido", "Un barco temprano a las lagunas, un segundo día de barco a las islas exteriores y un día libre para la playa de Nacpan o hacer muy poco."],
      ["De El Nido a Bohol por Manila", "Dos vuelos con escala en Manila (o Cebú, según los horarios). Llegada a Panglao a media tarde."],
      ["Bohol, o Siquijor, o el sur de Cebú", "Lo hemos planteado como Bohol: las Colinas de Chocolate al amanecer, los tarseros, el río Loboc y un día en Balicasag. Es la parte más flexible del viaje. Siquijor encaja con quien busca tranquilidad, y la costa sur de Cebú (las sardinas de Moalboal, Oslob, las cascadas de Kawasan) con quien quiere pasar más tiempo en el agua."],
      ["De Bohol a Siargao por Cebú", "Un ferry rápido de dos horas a Cebú, un vuelo de una hora a Siargao y 45 minutos por carretera hasta General Luna."],
      ["Cuatro días en Siargao", "Un final sin planes, a propósito: excursión por las islas, la laguna de Sugba, una clase de surf, las piscinas naturales con la marea baja y buenas cenas en General Luna. Después de tres semanas, agradecerás quedarte quieto."],
      ["Vuelo de regreso por Manila o Cebú", "Un vuelo doméstico conecta con tu salida internacional, con un margen cómodo."],
    ],
    experiences: ["Paseo guiado por Intramuros y ruta gastronómica por Binondo", "Los arrozales de Batad y las cascadas de Tappiya con un guía ifugao", "La cueva de Sumaguing y Echo Valley en Sagada", "Amanecer sobre las nubes en Kiltepan", "Lagunas de El Nido y excursión por las islas", "Colinas de Chocolate, tarseros y el río Loboc", "Excursión por las islas de Siargao y la laguna de Sugba", "Clase de surf de iniciación"],
    upgrades: ["Una noche en Baguio para dividir el regreso desde Sagada", "Barcos privados todos los días en las islas", "Cambiar Bohol por Siquijor o la costa sur de Cebú", "Añadir tres noches en Coron entre Manila y El Nido", "Vuelo chárter de El Nido a Siargao en Signature"],
    faqs: [
      ["¿Puedo cambiar la ruta?", "Sí, y en un viaje de este tamaño casi todo el mundo lo hace. La parte de las Visayas es la más fácil de cambiar, y el norte se puede acortar o quitar. Es un punto de partida."],
      ["¿Merece la pena el viaje por carretera hasta los arrozales?", "Creemos que sí, pero lo honesto es decir que te cuesta dos días largos de carretera. Si vas justo de tiempo o de paciencia, te sugerimos alternativas más cercanas."],
      ["¿Es adecuado para niños?", "Para niños mayores y adolescentes que caminan bien, sí. Los días de carretera y los escalones de Batad son duros para menores de diez años."],
      ["¿Cuál es la mejor época?", "De febrero a mayo funciona tanto para las montañas como para las islas. Desde junio las terrazas están muy verdes, pero en las islas llueve más, y puede haber tifones más o menos de agosto a noviembre."],
    ],
    legNotes: { 0: "Autobús nocturno en Essential; coche privado de día desde Boutique.", 2: "En Signature podemos pasar por Baguio con una noche allí, u organizar un chárter cuando esté disponible." },
  },

  "ten-days-two-islands": {
    intro:
      "El error más habitual que vemos en los planes de viaje a Filipinas desde Europa es intentar meter cuatro islas en diez días. Sobre el papel funciona. En la práctica, cada cambio de isla cuesta casi un día entero, a menudo pasando por Manila, y acabas pasando las vacaciones en salas de embarque. Así que aquí va la alternativa: dos islas, elegidas porque son distintas entre sí, con un solo día de traslado entre ellas. El Nido para la caliza, las lagunas y los días de barco; Siargao para las palmeras, el surf y un pueblo donde es fácil no hacer nada.\n\nSi aterrizas en Manila a primera hora de la mañana, incluso podemos conectarte con El Nido el mismo día y darte una noche más en la playa. Es un punto de partida, claro. Bohol puede sustituir a Siargao si prefieres no pasar dos veces por Manila, y Coron puede sustituir a El Nido para los buceadores. Lo que no haríamos es añadir una tercera isla. Confía en nosotros.",
    itinerary: [
      ["Llegada a Manila", "Una noche cerca del aeropuerto después del vuelo de largo recorrido. Si aterrizas antes de media mañana, intentaremos conectarte directamente con El Nido y añadir la noche allí."],
      ["Vuelo a El Nido", "Un vuelo corto al aeródromo de El Nido y 20 minutos hasta tu hotel. Un baño y la puesta de sol sobre la bahía de Bacuit."],
      ["Dos días de barco y un día libre", "Un barco temprano a las lagunas, antes que la flota; un segundo día por las islas exteriores; y un día para la playa de Nacpan, el kayak o una hamaca. Tres días completos es la medida justa: suficiente para ver El Nido, sin que los días de barco se confundan."],
      ["De El Nido a Siargao por Manila", "El único día de traslado del viaje: de El Nido a Manila y de Manila a Siargao, con una conexión razonable entre ambos. Aterrizas en Siargao por la tarde y 45 minutos después estás en tu hotel en General Luna."],
      ["Siargao: islas, laguna y una clase de surf", "Excursión por las islas Naked, Daku y Guyam; un día hacia el norte a la laguna de Sugba; y un día libre para una clase de surf, las piscinas naturales de Magpupungko con la marea baja o una vuelta tranquila a la isla en moto."],
      ["Vuelo de salida por Manila o Cebú", "Un vuelo doméstico para enlazar con tu salida internacional, con margen."],
    ],
    experiences: ["Las lagunas de El Nido en barco a primera hora", "Excursión por las islas exteriores de la bahía de Bacuit", "La playa de Nacpan", "Excursión por las islas de Siargao: Naked, Daku y Guyam", "Excursión de un día a la laguna de Sugba", "Clase de surf de iniciación"],
    upgrades: ["Barcos privados en El Nido y Siargao", "Cambiar Siargao por Bohol para evitar una segunda escala en Manila", "Una noche en un resort en una isla privada del norte de Palawan", "Vuelo chárter de El Nido a Siargao (Signature)"],
    faqs: [
      ["¿Puedo añadir otra isla?", "Puedes, pero te lo desaconsejaríamos amablemente. Cada isla extra cuesta casi un día de traslados. Con diez días, dos islas es lo que hace que el viaje se sienta como unas vacaciones. Si quieres variedad, mejor cambia una de las dos."],
      ["¿Cuál es el mejor mes?", "De marzo a mayo, para tener buen tiempo en las dos islas. Desde junio empieza la época de lluvias en El Nido; de noviembre a enero es más probable que llueva en Siargao."],
      ["¿Funciona para familias?", "Sí. Dos bases y un solo día de traslado es el formato más fácil para viajar con niños. Elegimos habitaciones familiares y playas más tranquilas, y acortamos los días de barco con los más pequeños."],
      ["¿Cómo funcionan los vuelos?", "El Nido y Siargao no tienen conexión directa, así que el sexto día hace escala en Manila. Lo reservamos, vigilamos los horarios y gestionamos cualquier cambio."],
    ],
    legNotes: { 0: "Alternativa: volar a Puerto Princesa y conducir 5–6 h hacia el norte, si los vuelos a El Nido están llenos.", 4: "O por Cebú, según tu conexión internacional." },
  },
};

export default t;
