import type { JourneyTranslation } from "./types";

const t: Record<string, JourneyTranslation> = {
  "palawan-bohol-boracay": {
    intro:
      "Si vous avez deux semaines et que c'est votre premier voyage, c'est l'itinéraire qui montre le plus de diversité sans tourner à la course. Palawan vous offre la rivière souterraine et les lagons d'El Nido. Bohol, rejointe par un vol direct d'El Nido à Cebu et un ferry rapide, apporte rivières, collines et tortues. Boracay termine le voyage avec l'une des plus belles plages du monde, de bons restaurants et des sorties en voilier au coucher du soleil.\n\nNous avons évité de passer par Manille autant que possible : El Nido est reliée directement à Cebu, et Cebu à Boracay. Chaque île a au moins une journée libre. Comme toujours, c'est un point de départ : remplacez Boracay par Siargao pour une fin plus détendue dans une ville de surf, ou supprimez Puerto Princesa et arrivez directement à El Nido.",
    itinerary: [
      ["Arrivée à Manille", "Accueil à l'aéroport et une nuit à Manille."],
      ["Vol pour Puerto Princesa", "Vol le matin pour Palawan et après-midi tranquille."],
      ["La rivière souterraine", "Excursion à la journée à Sabang et à la rivière souterraine, avec la mangrove."],
      ["Vers le nord, à El Nido", "Cinq à six heures de route, avec des arrêts."],
      ["El Nido", "Une journée en bateau autour des lagons et des îles de la baie de Bacuit, et une journée libre."],
      ["D'El Nido à Bohol", "Vol direct pour Cebu et ferry rapide pour Bohol."],
      ["Bohol", "La campagne avec les Chocolate Hills et les tarsiers, une matinée à Balicasag avec les tortues et une journée libre."],
      ["De Bohol à Boracay", "Ferry rapide jusqu'à Cebu et court vol pour Caticlan."],
      ["Boracay", "White Beach, Puka Beach, snorkeling et une sortie en paraw au coucher du soleil."],
      ["Vol pour Manille", "Vol pour Manille et dernière soirée en ville."],
      ["Vol retour", "Transfert au terminal international."],
    ],
    experiences: ["La rivière souterraine", "D'île en île à El Nido", "La campagne de Bohol", "Les tortues de Balicasag", "Voile au coucher du soleil à Boracay"],
    upgrades: ["Deuxième journée à El Nido en bateau privé", "Remplacer Boracay par Siargao", "Chambres en bord de mer sur chaque île"],
    faqs: [
      ["Quatre îles en quinze jours, est-ce trop ?", "C'est le maximum que nous conseillerions, et seulement parce que les liaisons sont directes. Chaque île a au moins une journée libre."],
      ["Puis-je remplacer Boracay par Siargao ?", "Oui. Siargao est plus calme et plus verte, avec une ambiance de village de surf. Cela implique un vol via Cebu ou Manille au lieu de Caticlan."],
    ],
  },

  "whale-sharks-and-islands": {
    intro:
      "Donsol, village de pêcheurs à la pointe sud de Luçon, est l'un des meilleurs endroits au monde pour nager avec des requins-baleines en liberté, et on le fait ici de la bonne manière : petits bateaux, guetteurs locaux agréés, règles strictes et aucun nourrissage. Nous vous offrons deux matinées en mer pour augmenter vos chances, et une soirée sur la rivière au milieu des lucioles. Tout près se trouvent le cône parfait du volcan Mayon et les ruines de Cagsawa.\n\nAprès Donsol, le voyage devient un classique des îles : la campagne et les tortues de Bohol, puis quatre jours à El Nido. Vous terminez par une journée à Manille pour la cuisine et l'histoire. Les requins-baleines sont des animaux sauvages et leur observation n'est jamais garantie, mais de février à avril, les chances sont bonnes.",
    itinerary: [
      ["Arrivée à Manille", "Accueil à l'aéroport et une nuit à Manille."],
      ["Vol pour Legazpi, route vers Donsol", "Court vol pour la région de Bicol, avec vue sur le Mayon, et une heure de route jusqu'à Donsol."],
      ["Requins-baleines et lucioles", "Deux matinées en mer avec des guetteurs agréés à la recherche des requins-baleines, et une sortie le soir sur la rivière pour voir les lucioles."],
      ["Le Mayon et Cagsawa", "Les ruines de Cagsawa au pied du volcan Mayon et un déjeuner bicolano au piment et à la noix de coco. Nuit à Legazpi."],
      ["Vol pour Cebu, ferry pour Bohol", "Vol pour Cebu et ferry rapide pour Bohol."],
      ["Bohol", "Une journée à la campagne, les tortues de Balicasag et une journée libre."],
      ["Vers El Nido", "Ferry rapide jusqu'à Cebu et vol direct pour El Nido."],
      ["El Nido", "Deux journées en bateau dans la baie de Bacuit et deux journées libres pour la plage de Nacpan, le kayak ou le repos."],
      ["Vol pour Manille", "Vol pour Manille et une soirée en ville."],
      ["Manille", "Intramuros et une balade gourmande dans Binondo."],
      ["Vol retour", "Transfert au terminal international."],
    ],
    experiences: ["Les requins-baleines de Donsol", "Sortie sur la rivière aux lucioles", "Les ruines de Cagsawa", "La campagne de Bohol", "D'île en île à El Nido"],
    upgrades: ["Bateau privé à El Nido", "Ajouter une balade en quad sur le Mayon", "Ajouter Coron pour la plongée"],
    faqs: [
      ["Les requins-baleines sont-ils garantis ?", "Non. Ce sont des animaux sauvages et certains jours, il n'y en a aucun. C'est pourquoi nous prévoyons deux matinées. De février à avril, les chances sont les meilleures."],
      ["Est-ce éthique ?", "Oui, à Donsol. Les rencontres suivent des règles strictes : petits groupes, interdiction de toucher, pas de flash, une distance minimale et aucun nourrissage. Nous n'incluons pas les endroits où l'on nourrit les requins-baleines."],
    ],
  },

  "dive-the-philippines": {
    intro:
      "Les Philippines sont au cœur du Triangle de corail, et ce voyage vous emmène vers quatre types de plongée totalement différents. Coron abrite une flotte de navires de ravitaillement japonais coulés en 1944, aujourd'hui couverts de corail. Malapascua est l'un des rares endroits au monde où l'on voit régulièrement des requins-renards, à l'aube. Moalboal a un tombant à quelques mètres de la plage et un banc de millions de sardines. Dumaguete a Apo Island, l'une des plus anciennes réserves marines du pays, et la plongée macro sur sable noir de Dauin.\n\nNous réservons des centres de plongée de confiance, avec de petits groupes et une bonne sécurité, et logeons dans des hôtels proches des sites. Les partenaires non plongeurs ont beaucoup à faire à chaque étape. Les plongées sont facturées par le centre : vous ne payez que ce que vous plongez.",
    itinerary: [
      ["Arrivée à Manille", "Accueil à l'aéroport et une nuit à Manille."],
      ["Vol pour Coron", "Vol pour Busuanga et transfert à Coron. Enregistrement au centre de plongée."],
      ["Les épaves de Coron", "Trois jours de plongée sur les épaves de la flotte japonaise de 1944, plus le lac Barracuda, et une journée libre."],
      ["De Coron à Malapascua", "Vol pour Cebu, route vers le nord jusqu'à Maya et courte traversée en bateau jusqu'à Malapascua."],
      ["Malapascua", "Plongées à l'aube à Monad Shoal pour les requins-renards, et plongées récif et macro autour de l'île."],
      ["Vers Moalboal", "Une longue route par la côte ouest de Cebu."],
      ["Moalboal", "Le banc de sardines, l'île de Pescador et les tortues sur le récif devant l'hôtel."],
      ["Vers Dumaguete", "Route vers le sud et un court ferry jusqu'à Negros."],
      ["Apo Island et Dauin", "Une journée en bateau vers la réserve marine d'Apo Island, et des plongées muck et macro le long de la côte de sable noir de Dauin."],
      ["Vol pour Manille", "Une journée sans plongée avant de prendre l'avion, puis le vol pour Manille."],
      ["Vol retour", "Transfert au terminal international."],
    ],
    experiences: ["Les épaves de Coron", "Les requins-renards de Malapascua", "Le banc de sardines de Moalboal", "Apo Island", "La macro à Dauin"],
    upgrades: ["Guide de plongée privé pendant tout le voyage", "Nitrox", "Ajouter une croisière plongée à Tubbataha (de mars à juin)"],
    faqs: [
      ["Quel niveau faut-il ?", "Le niveau Open Water suffit pour la plupart des plongées. Plusieurs épaves de Coron et les requins de Malapascua se font mieux avec l'Advanced Open Water, que vous pouvez passer pendant le voyage."],
      ["Pourquoi les plongées ne sont-elles pas incluses ?", "Chaque plongeur plonge plus ou moins : les plongées sont donc payées directement au centre, à son tarif affiché. Nous réservons tout et vous indiquons le prix avant le départ."],
    ],
  },

  "linapacan-expedition": {
    intro:
      "Entre Coron et El Nido s'étendent des centaines d'îles que presque personne ne visite, et Linapacan a certaines des eaux les plus claires du pays. La seule façon de bien les voir, c'est en bateau. Pendant cette expédition, vous voyagez cinq jours sur une bangka traditionnelle avec un équipage local : snorkeling, baignades, visites de villages de pêcheurs et nuits dans de simples campements sur les îles, avec des produits frais cuisinés à bord.\n\nC'est une aventure, pas une croisière : les campements sont rudimentaires et le programme suit la météo. Avant, vous découvrez les lacs et les récifs de Coron. Après, El Nido et cinq jours tranquilles à Siargao pour vous reposer. Les expéditions partent surtout de novembre à mai et les places sont limitées : réservez tôt.",
    itinerary: [
      ["Arrivée à Manille", "Accueil à l'aéroport et une nuit à Manille."],
      ["Vol pour Coron", "Vol pour Busuanga et transfert à Coron."],
      ["Coron", "Les lacs Kayangan et Barracuda et les récifs en bateau, et une journée libre."],
      ["L'expédition à Linapacan", "Cinq jours sur un bateau traditionnel de Coron à El Nido, avec snorkeling, plages désertes, villages de pêcheurs et nuits en campement sur les îles. Tous les repas à bord."],
      ["El Nido", "Deux journées libres à El Nido après l'expédition : une douche chaude, un bon lit et la plage de Nacpan."],
      ["Vol pour Siargao", "Vol pour Siargao via Cebu."],
      ["Siargao", "D'île en île à Naked, Daku et Guyam, le lagon de Sugba, un cours de surf et du temps pour ne rien faire."],
      ["Vol pour Manille", "Vol pour Manille et dernière nuit en ville."],
      ["Vol retour", "Transfert au terminal international."],
    ],
    experiences: ["L'expédition en bateau à Linapacan", "Les lacs de Coron", "D'île en île à Siargao", "Le lagon de Sugba"],
    upgrades: ["Bateau d'expédition privé pour votre groupe", "Ajouter une nuit dans un resort sur île privée après l'expédition", "Coaching de surf chaque matin à Siargao"],
    faqs: [
      ["Les campements sont-ils très rudimentaires ?", "De simples huttes ou tentes sur la plage, avec toilettes partagées et douches au seau. Assez confortables, mais ce n'est pas un hôtel. Cela fait partie de l'expérience."],
      ["L'expédition peut-elle être annulée à cause de la météo ?", "Oui. Si la mer est trop forte, l'opérateur change l'itinéraire ou la date. Nous prévoyons une solution de repli pour que votre voyage fonctionne quand même."],
    ],
    legNotes: { 1: "Expédition partagée organisée par un opérateur local ; départs à dates fixes, surtout de novembre à mai." },
  },

  "exclusive-philippines": {
    intro:
      "C'est le voyage des voyageurs qui ont déjà beaucoup vu le monde et cherchent autre chose. Il commence à Batanes, les îles les plus au nord du pays, plus proches de Taïwan que de Manille. Collines vertes, maisons de pierre, phares et presque aucun touriste. Il passe ensuite par Palawan, avec des bateaux privés à El Nido et trois nuits dans un resort sur île privée, et se termine à Siargao avec un bateau privé, un moniteur de surf privé et les plus belles villas de l'île.\n\nTous les transferts, bateaux et guides sont privés, et les hôtels comptent parmi les meilleurs du pays. Batanes dépend de la météo : nous le programmons pendant les mois les plus secs et gardons une solution de repli.",
    itinerary: [
      ["Arrivée à Manille", "Accueil privé à l'aéroport et une nuit dans l'un des meilleurs hôtels de Manille."],
      ["Vol pour Batanes", "Vol vers le nord jusqu'à Basco et balade en voiture le long de la côte l'après-midi."],
      ["Batanes", "Les collines, les phares et les maisons de pierre ivatan de Batan avec un guide privé, et un bateau vers les villages de Sabtang."],
      ["De Batanes à El Nido", "Vol retour vers Manille et correspondance pour El Nido."],
      ["El Nido en bateau privé", "Deux jours sur votre propre bateau, avec les lagons au petit matin et un déjeuner sur une plage tranquille."],
      ["Vers l'île privée", "Transfert privé jusqu'à votre resort."],
      ["Journées sur l'île", "Snorkeling, spa et calme absolu."],
      ["Vol pour Siargao", "Vols via Manille ou Cebu jusqu'à Siargao."],
      ["Siargao en privé", "Un bateau privé vers les îles et le lagon de Sugba, et un coaching de surf privé."],
      ["Vol retour", "Vol pour Manille ou Cebu pour votre correspondance internationale."],
    ],
    experiences: ["Phares et maisons de pierre de Batanes", "L'île de Sabtang", "El Nido en bateau privé", "Resort sur île privée", "Bateau privé à Siargao"],
    upgrades: ["Vols charter entre les îles", "Un dîner avec chef privé sur un banc de sable", "Villas avec piscine privée pendant tout le voyage"],
    faqs: [
      ["Pourquoi Batanes ?", "Parce que l'endroit ne ressemble à aucun autre aux Philippines : collines vertes ondulantes, falaises et villages de pierre, avec très peu de visiteurs."],
      ["Et si le vol pour Batanes est annulé ?", "Cela peut arriver par mauvais temps. Nous gardons une journée de marge et ajustons le reste du voyage pour que vous ne perdiez rien d'important."],
    ],
    legNotes: { 1: "Les vols pour Batanes dépendent de la météo ; nous gardons une journée de marge." },
  },
};

export default t;
