import type { JourneyTranslation } from "./types";

const t: Record<string, JourneyTranslation> = {
  "bohol-beach-escape": {
    intro:
      "Un voyage aux Philippines n'a pas toujours besoin de trois îles. Si vous ajoutez quelques jours à un déplacement professionnel, combinez les Philippines avec un autre pays ou voulez simplement une courte pause au bord de la mer, Bohol est l'île que nous vous conseillons. Elle est à un court vol de Manille, les plages de Panglao sont calmes et agréables pour nager, et l'intérieur offre de quoi remplir deux belles journées : les Chocolate Hills, les minuscules tarsiers, des rivières et de vieilles églises en pierre.\n\nLe rythme est volontairement tranquille. Une journée à la campagne, une matinée en mer à Balicasag et une journée sans rien de prévu. Envie de plus ? Ajoutez Siquijor en bateau rapide, ou transformez-le en un voyage plus long avec Siargao ou El Nido. Nous le reconstruisons autour de vous.",
    itinerary: [
      ["Arrivée à Manille", "Accueil à l'aéroport et transfert dans un hôtel confortable pour une nuit de repos après le vol long-courrier."],
      ["Vol pour Bohol", "Un court vol le matin jusqu'à Panglao. Installation, baignade et après-midi à la plage."],
      ["La campagne de Bohol", "Les Chocolate Hills, le sanctuaire des tarsiers, la rivière Loboc avec déjeuner à bord et la vieille église de Baclayon."],
      ["Balicasag en bateau", "Un bateau matinal vers la réserve marine de Balicasag pour nager avec les tortues, avec un arrêt au banc de sable de Virgin Island au retour."],
      ["Une journée libre", "Plage, spa ou kayak le long de la côte. Nous pouvons vous conseiller une bonne adresse pour le dîner."],
      ["Vol retour", "Transfert à l'aéroport pour votre vol vers Manille et votre correspondance internationale."],
    ],
    experiences: ["Chocolate Hills et tarsiers", "Croisière-déjeuner sur la rivière Loboc", "Les tortues de Balicasag", "Le banc de sable de Virgin Island"],
    upgrades: ["Ajouter Siquijor pour deux ou trois nuits en bateau rapide", "Bateau privé pour la matinée à Balicasag", "Une villa en bord de mer à Panglao"],
    faqs: [
      ["Six jours, est-ce suffisant ?", "Pour une île, oui. C'est un voyage court et détendu. Si vous avez plus de temps, nous ajouterions une deuxième île plutôt que des nuits supplémentaires au même endroit."],
      ["Puis-je rejoindre Bohol depuis Cebu ?", "Oui. Si votre vol international arrive à Cebu, nous prenons le ferry rapide jusqu'à Bohol (environ deux heures) et évitons complètement Manille."],
    ],
    legNotes: { 2: "Ou via Cebu, selon votre vol international." },
  },

  "essential-palawan": {
    intro:
      "Palawan est l'île que la plupart des gens imaginent en pensant aux Philippines, et voici la façon la plus simple de bien la découvrir. Vous arrivez à Puerto Princesa, passez une journée sur la rivière souterraine, site classé par l'UNESCO où l'on entre en barque dans un réseau de grottes, puis montez vers El Nido par la route, entre terres agricoles, villages de pêcheurs et cocoteraies.\n\nEl Nido a droit à trois jours pleins : deux en mer, entre les lagons et les îles calcaires de la baie de Bacuit, et un pour la plage de Nacpan ou pour ne rien faire. Vous repartez vers Manille depuis El Nido, donc pas de longue route à la fin. Si vous avez quelques jours de plus, ajoutez Coron ou Port Barton ; nous adaptons l'itinéraire.",
    itinerary: [
      ["Arrivée à Manille", "Accueil à l'aéroport et une nuit à Manille pour récupérer du vol."],
      ["Vol pour Puerto Princesa", "Vol le matin pour Palawan. Après-midi tranquille et dîner au bord de la baie."],
      ["La rivière souterraine", "Route jusqu'à Sabang, puis barque à rames dans la rivière de la grotte, suivie d'une balade dans la mangrove."],
      ["Vers le nord, à El Nido", "Environ cinq à six heures de route, avec des arrêts en chemin. Arrivée à temps pour le coucher du soleil."],
      ["El Nido : deux journées en bateau et une journée libre", "D'île en île vers les lagons, les plages et les spots de snorkeling de la baie de Bacuit pendant deux jours, et une journée libre pour la plage de Nacpan ou le kayak."],
      ["Vol pour Manille", "Vol d'El Nido à Manille. Dernière soirée en ville."],
      ["Vol retour", "Transfert au terminal international."],
    ],
    experiences: ["La rivière souterraine de Puerto Princesa", "D'île en île à El Nido", "La plage de Nacpan", "Balade en barque dans la mangrove de Sabang"],
    upgrades: ["Bateau privé pour les journées à El Nido", "Ajouter Port Barton pour deux nuits tranquilles sur la route du nord", "Ajouter Coron pour trois nuits en ferry rapide (mois secs)"],
    faqs: [
      ["La route jusqu'à El Nido est-elle longue ?", "Cinq à six heures, avec des arrêts. Nous la coupons par un déjeuner en chemin. Si vous préférez, vous pouvez prendre un vol Manille–El Nido et visiter Puerto Princesa au retour."],
      ["Faut-il un permis pour la rivière souterraine ?", "Oui, et le nombre de visiteurs par jour est limité. Nous le réservons dès que vos dates sont confirmées."],
    ],
  },

  "luxury-palawan": {
    intro:
      "Voici Palawan sans la foule. À El Nido, vous avez votre propre bateau et son équipage pendant trois jours : départ tôt pour atteindre les lagons avant tout le monde, et déjeuner sur une plage choisie parce qu'elle est déserte. Vous rejoignez ensuite un resort sur une île privée du nord de Palawan, avec seulement quelques villas, un récif devant votre porte et rien au programme, sauf si vous le souhaitez.\n\nHôtels, bateaux et horaires sont choisis pour vous, et tous les transferts sont privés. C'est un voyage de noces idéal, et tout aussi réussi pour qui veut Palawan sous son meilleur jour. Dites-nous ce qui compte pour vous, la table, la plongée, le spa ou l'intimité totale, et nous choisirons les adresses en conséquence.",
    itinerary: [
      ["Arrivée à Manille", "Accueil privé à l'aéroport et une nuit dans l'un des meilleurs hôtels de Manille."],
      ["Vol pour El Nido", "Vol le matin pour El Nido. Après-midi libre et un verre au coucher du soleil sur la baie de Bacuit."],
      ["El Nido en bateau privé", "Trois jours sur votre propre bateau : les lagons au petit matin, les îles du large, le snorkeling et des déjeuners sur des plages tranquilles."],
      ["Vers l'île privée", "Un bateau privé ou un court vol jusqu'à votre resort. Installation et coucher de soleil depuis votre villa."],
      ["Journées sur l'île", "Snorkeling sur le récif, kayak, spa ou absolument rien."],
      ["Vol retour via Manille", "Transfert et vol pour Manille pour votre correspondance internationale."],
    ],
    experiences: ["Les lagons d'El Nido en bateau privé", "Snorkeling sur le récif du resort", "Dîner sur la plage au coucher du soleil", "Spa"],
    upgrades: ["Ajouter Coron en bateau privé", "Un dîner avec chef privé sur un banc de sable", "Une villa avec piscine privée"],
    faqs: [
      ["Sur quelle île privée logerons-nous ?", "Nous la choisissons avec vous, selon votre budget et vos envies : table, plongée, spa ou intimité totale. Nous confirmons le nom et la villa avant votre réservation."],
      ["Les repas sont-ils inclus sur l'île ?", "Beaucoup de resorts sur île proposent la pension complète. Nous vous disons précisément ce que comprend le vôtre avant de réserver."],
    ],
    legNotes: { 1: "Certains resorts utilisent plutôt un court vol privé." },
  },

  "rice-terraces-and-islands": {
    intro:
      "La plupart des voyageurs ne voient jamais ce visage des Philippines. Dans les montagnes de la Cordillère, au nord de Manille, le peuple ifugao a sculpté des rizières en terrasses à flanc de montagne il y a deux mille ans, et elles sont encore cultivées aujourd'hui. Vous marchez avec un guide local jusqu'à l'amphithéâtre de terrasses de Batad, puis continuez vers Sagada, une ville de montagne fraîche entourée de pins et de grottes, connue pour ses célèbres cercueils suspendus.\n\nAprès les montagnes, la mer. Coron, au nord de Palawan, a certains des lacs les plus limpides et des plus beaux récifs du pays, et trois jours là-bas sont le contraste parfait après une semaine en altitude. Les routes de montagne sont longues : nous planifions les trajets avec soin et utilisons des voitures privées à partir de la formule Boutique.",
    itinerary: [
      ["Arrivée à Manille", "Accueil à l'aéroport et une nuit à Manille."],
      ["Route vers Banaue", "Une longue mais belle route vers le nord, dans la Cordillère, avec des arrêts pour déjeuner et aux points de vue."],
      ["Batad et les terrasses", "Une randonnée guidée dans les terrasses de Batad jusqu'à la cascade de Tappiya, puis une deuxième journée plus douce entre les points de vue et les villages de Banaue."],
      ["Vers Sagada", "Environ trois heures de route de montagne jusqu'à Sagada. Balade en ville l'après-midi."],
      ["Sagada", "La grotte de Sumaguing avec un guide, les cercueils suspendus d'Echo Valley et un lever de soleil matinal à Kiltepan, au-dessus des nuages."],
      ["Retour à Manille", "Une journée entière de route jusqu'à Manille, ou via Baguio avec un arrêt. Soirée en ville."],
      ["Vol pour Coron", "Court vol jusqu'à Busuanga et transfert à Coron."],
      ["Coron : lacs, récifs et une journée libre", "Les lacs Kayangan et Barracuda, les jardins de corail et les plages pendant deux journées en bateau, et une journée libre pour les sources chaudes ou le mont Tapyas au coucher du soleil."],
      ["Vol retour via Manille", "Vol pour Manille pour votre correspondance internationale."],
    ],
    experiences: ["Randonnée dans les terrasses de Batad", "La grotte de Sumaguing", "Lever de soleil à Kiltepan", "Lacs et récifs de Coron"],
    upgrades: ["Voiture privée avec chauffeur pour tout le nord", "Une nuit à Baguio pour couper la route", "Bateau privé à Coron"],
    faqs: [
      ["La randonnée de Batad est-elle difficile ?", "Elle est raide par endroits, avec beaucoup de marches en pierre, mais vous avancez à votre rythme avec un guide. Les voyageurs en forme raisonnable, de tout âge, peuvent la faire. Il existe une option plus courte si vous préférez."],
      ["Pourquoi autant de route ?", "Il n'y a pas de vols vers les rizières en terrasses. Les routes sont lentes mais superbes, et nous organisons les trajets pour que vous arriviez de jour."],
    ],
    legNotes: { 2: "Nous pouvons la couper par une nuit à Baguio si vous préférez." },
  },

  "luzon-adventure": {
    intro:
      "Un voyage pour ceux qui veulent plus que des plages. Il commence à Manille, avec les remparts d'Intramuros et une balade gourmande dans Binondo, le plus ancien quartier chinois du monde. Puis il monte vers la Cordillère : les rizières en terrasses de Banaue et Batad, et les grottes et forêts de pins de Sagada.\n\nDepuis Sagada, la route descend en lacets jusqu'à la côte et Vigan, ville classée par l'UNESCO, avec ses rues pavées, ses calèches et ses maisons coloniales espagnoles, et ses propres traditions culinaires. Vous rentrez à Manille en avion depuis Laoag, tout proche. Le voyage se combine parfaitement avec quelques jours de plage à la fin : demandez-nous d'ajouter Boracay, Bohol ou El Nido.",
    itinerary: [
      ["Arrivée à Manille", "Accueil à l'aéroport et une nuit à Manille."],
      ["Le vieux Manille et Binondo", "Une visite guidée d'Intramuros et de l'église San Agustín, puis une balade gourmande dans Binondo."],
      ["Route vers Banaue", "Vers le nord dans les montagnes, avec des arrêts en chemin."],
      ["Les terrasses de Batad", "Une randonnée guidée dans les terrasses de Batad jusqu'à la cascade de Tappiya."],
      ["Vers Sagada", "Route de montagne jusqu'à Sagada et balade l'après-midi jusqu'aux cercueils suspendus d'Echo Valley."],
      ["Grottes et lever de soleil à Sagada", "Lever de soleil à Kiltepan, puis la grotte de Sumaguing avec un guide local."],
      ["Descente vers Vigan", "Une longue et belle route des montagnes jusqu'à la côte. Balade le soir sur la Calle Crisologo."],
      ["Vigan", "Maisons historiques, promenade en calèche, ateliers de poterie et plats locaux comme l'empanada et la longganisa."],
      ["Vol retour vers Manille", "Courte route jusqu'à Laoag et vol pour Manille. Dernière soirée en ville."],
      ["Vol retour", "Transfert au terminal international."],
    ],
    experiences: ["Balade gourmande à Binondo", "Randonnée dans les terrasses de Batad", "La grotte de Sumaguing", "Visite du Vigan historique"],
    upgrades: ["Ajouter trois nuits de plage à Boracay ou El Nido", "Voiture privée avec chauffeur pendant tout le voyage", "Une nuit dans une maison historique restaurée à Vigan"],
    faqs: [
      ["Puis-je ajouter une plage à la fin ?", "Oui, et la plupart des voyageurs le font. Boracay, Bohol et El Nido sont tous à un vol facile de Manille."],
      ["Fait-il froid en montagne ?", "Sagada et Banaue sont frais, surtout la nuit et tôt le matin de décembre à février. Prévoyez une couche chaude."],
    ],
  },
};

export default t;
