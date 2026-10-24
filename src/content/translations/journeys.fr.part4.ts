import type { JourneyTranslation } from "./types";

const t: Record<string, JourneyTranslation> = {
  "cebu-islands-and-culture": {
    intro:
      "Cebu est le berceau de l'histoire espagnole des Philippines, et l'un des endroits les plus simples pour arriver, avec des vols internationaux directement à Mactan. Ce voyage n'a besoin d'aucun vol intérieur. Vous commencez par la ville de Cebu, ses vieux forts, ses églises et le célèbre lechon de l'île, puis montez au nord vers la petite île de Malapascua, où les plongeurs voient des requins-renards à l'aube et où les autres profitent de plages tranquilles.\n\nVient ensuite Moalboal, sur la côte ouest, où des millions de sardines tourbillonnent à quelques mètres de la plage, où les tortues sont faciles à trouver et où les canyons turquoise de Kawasan sont tout proches. Le voyage se termine à Bohol, avec ses collines, ses tarsiers et son sable blanc, à un ferry rapide de Cebu. Les plongeurs peuvent en faire un voyage plongée ; les autres ne manquent rien.",
    itinerary: [
      ["Arrivée à Cebu", "Accueil à l'aéroport de Mactan et une nuit à Cebu."],
      ["La ville de Cebu", "La croix de Magellan, la basilique du Santo Niño, le fort San Pedro et un déjeuner de lechon."],
      ["Vers le nord, à Malapascua", "Environ quatre heures de route jusqu'à Maya, puis une courte traversée en bateau jusqu'à l'île."],
      ["Malapascua", "Une plongée optionnelle à l'aube avec les requins-renards, du snorkeling et des plages, et un bateau vers une île voisine."],
      ["Vers Moalboal", "Un long transfert par la côte ouest de Cebu. Soirée au bord de l'eau à Panagsama."],
      ["Moalboal et Kawasan", "Snorkeling dans le banc de sardines et à la recherche des tortues, puis une journée de canyoning dans les bassins turquoise de Kawasan."],
      ["Vers Bohol", "Route jusqu'au port de Cebu et ferry rapide pour Bohol."],
      ["Bohol", "Les Chocolate Hills, les tarsiers et la rivière Loboc un jour, et une journée libre à la plage."],
      ["Vol retour depuis Cebu", "Ferry rapide jusqu'à Cebu et transfert à l'aéroport."],
    ],
    experiences: ["Le patrimoine de Cebu et le lechon", "Les requins-renards de Malapascua", "Le banc de sardines de Moalboal", "Canyoning à Kawasan", "La campagne de Bohol"],
    upgrades: ["Forfait plongée à Malapascua et Moalboal", "Voiture privée pour les longs transferts", "Ajouter Siquijor avant Bohol"],
    faqs: [
      ["Faut-il plonger ?", "Non. Les sardines et les tortues de Moalboal sont juste devant la plage, avec un masque et un tuba. Les requins-renards sont réservés aux plongeurs brevetés."],
      ["Peut-on arriver à Cebu depuis l'Europe ?", "Il n'y a pas de vols directs, mais Cebu est bien reliée via Singapour, Hong Kong, Doha, Dubaï et Séoul : vous pouvez donc éviter complètement Manille."],
    ],
  },

  "bohol-and-camiguin": {
    intro:
      "Camiguin est l'un des secrets les mieux gardés des Philippines : une petite île verte née des volcans, qui en compte plus que de villages. On peut en faire le tour en voiture en un après-midi, mais vous voudrez trois jours pour ses cascades, ses sources chaudes et froides, le cimetière englouti au large et White Island, un banc de sable avec un volcan en toile de fond.\n\nElle se combine naturellement avec Bohol, juste en face, et le ferry entre les deux évite des vols supplémentaires. Bohol vous offre les Chocolate Hills, les tarsiers et les plages calmes de Panglao. Vous rentrez depuis Cagayan de Oro, à Mindanao, à un court ferry et une petite route de Camiguin. Ce sont les Philippines des vacances des Philippins : simples, chaleureuses et sans hâte.",
    itinerary: [
      ["Arrivée à Manille", "Accueil à l'aéroport et une nuit à Manille."],
      ["Vol pour Bohol", "Vol le matin pour Panglao et après-midi à la plage."],
      ["Bohol", "Une journée à la campagne pour les Chocolate Hills, les tarsiers et la rivière Loboc ; un bateau vers Balicasag pour les tortues ; et une journée libre."],
      ["Ferry pour Camiguin", "Route jusqu'à Jagna et ferry jusqu'à Camiguin, environ quatre heures."],
      ["Camiguin", "White Island au lever du soleil, les chutes de Katibawasan et Tuasan, le cimetière englouti, les sources chaudes d'Ardent et la source froide de Santo Niño, avec chauffeur."],
      ["Vers Manille via Cagayan de Oro", "Court ferry jusqu'à Mindanao, route jusqu'à l'aéroport de Laguindingan et vol pour Manille."],
      ["Vol retour", "Transfert au terminal international."],
    ],
    experiences: ["La campagne de Bohol", "Les tortues de Balicasag", "Le banc de sable de White Island", "Cascades et sources de Camiguin"],
    upgrades: ["Voiture privée sur les deux îles", "Ajouter Siquijor avant Camiguin", "Ascension du mont Hibok-Hibok avec un guide"],
    faqs: [
      ["Camiguin est-elle sûre ?", "Oui. Camiguin est une petite province insulaire tranquille, très appréciée des familles philippines. Nous suivons les recommandations officielles aux voyageurs et ne prévoyons que ce que nous ferions nous-mêmes."],
      ["Le ferry part-il souvent ?", "Le ferry Bohol–Camiguin circule quelques fois par semaine : nous construisons donc vos dates autour de lui."],
    ],
    legNotes: { 1: "Pas tous les jours ; nous fixons les dates selon les horaires du ferry." },
  },

  "the-gentle-philippines": {
    intro:
      "Nous avons conçu cet itinéraire pour les voyageurs qui veulent bien découvrir les Philippines, mais à un rythme plus doux. Il est particulièrement apprécié des couples de plus de soixante ans et de ceux qui voyagent avec des parents âgés. Tous les transferts sont privés. Les hôtels sont choisis pour leur accès facile, sans longues marches dans le sable ni escaliers raides, et pour leur bonne table. Les journées en bateau sont courtes, à l'ombre, et se terminent à l'heure du déjeuner si vous préférez.\n\nVous commencez par une visite privée du vieux Manille, puis passez quatre jours à Bohol, entre campagne, rivière et plages, et quatre à El Nido, où les journées en bateau peuvent être aussi douces que vous le souhaitez. Il n'y a que deux journées de trajet, et toutes deux sont organisées pour éviter les départs très matinaux.",
    itinerary: [
      ["Arrivée à Manille", "Accueil privé à l'aéroport et une nuit dans un hôtel calme et central."],
      ["Le vieux Manille", "Une visite privée et sans hâte d'Intramuros et de l'église San Agustín, avec déjeuner dans un restaurant historique."],
      ["Vol pour Bohol", "Un vol en fin de matinée pour Panglao et un après-midi pour s'installer."],
      ["Bohol en douceur", "Les Chocolate Hills et les tarsiers en voiture privée, une croisière-déjeuner sur la rivière Loboc et une journée libre à l'hôtel."],
      ["De Bohol à El Nido", "Ferry rapide jusqu'à Cebu et vol direct pour El Nido."],
      ["El Nido", "Deux courtes sorties en bateau privé vers les lagons et les plages les plus calmes, et une journée de repos."],
      ["Vol pour Manille", "Vol pour Manille et un dernier dîner."],
      ["Vol retour", "Transfert privé au terminal international."],
    ],
    experiences: ["Visite privée d'Intramuros", "Croisière sur la rivière Loboc", "Les Chocolate Hills", "El Nido en bateau privé"],
    upgrades: ["Suites avec vue sur la mer", "Ajouter une journée spa à Bohol", "Prolonger El Nido de deux nuits"],
    faqs: [
      ["Est-ce adapté aux personnes à mobilité réduite ?", "Dites-nous précisément ce qui est facile et ce qui ne l'est pas, et nous choisirons hôtels, bateaux et visites en conséquence. Certains bateaux demandent une petite marche depuis la plage ; nous choisissons les options les plus simples."],
      ["Pouvons-nous avoir un guide hispanophone ?", "Oui, nous pouvons organiser des guides parlant espagnol ou anglais."],
    ],
  },

  "visayas-on-a-budget": {
    intro:
      "Un beau voyage aux Philippines n'a pas besoin d'être cher. Cet itinéraire économise aux bons endroits : aucun vol intérieur, des hôtels simples mais bien situés et bien notés, et des excursions partagées quand elles fonctionnent bien. Il n'économise ni sur la sécurité, ni sur la fiabilité des bateaux, ni sur notre assistance.\n\nVous arrivez à Cebu et filez directement à Moalboal pour les tortues et le banc de sardines. Vient ensuite Siquijor, une île de cascades, de routes désertes et de légendes populaires : trois jours pour presque rien. Bohol clôt le voyage avec ses collines et ses plages, et le ferry rapide vous ramène à Cebu pour votre vol retour.",
    itinerary: [
      ["Arrivée à Cebu", "Accueil à l'aéroport et une nuit à Cebu."],
      ["Vers Moalboal", "Environ trois heures de route jusqu'à la côte ouest. Snorkeling depuis la plage l'après-midi."],
      ["Moalboal", "Le banc de sardines et les tortues, et une journée de canyoning à Kawasan."],
      ["Vers Siquijor", "Route vers le sud, un court ferry jusqu'à Negros et un bateau rapide de Dumaguete à Siquijor."],
      ["Siquijor", "Les chutes de Cambugahay, le vieux balete, l'église de Lazi et la route côtière en scooter ou avec chauffeur, et du snorkeling à Tubod."],
      ["Bateau rapide pour Bohol", "Environ deux heures de mer jusqu'à Tagbilaran, puis Panglao."],
      ["Bohol", "Une excursion partagée à la campagne vers les Chocolate Hills et les tarsiers, et une journée à la plage."],
      ["Vol retour depuis Cebu", "Ferry rapide jusqu'à Cebu et transfert à l'aéroport."],
    ],
    experiences: ["Le banc de sardines de Moalboal", "Canyoning à Kawasan", "Les cascades de Siquijor", "La campagne de Bohol"],
    upgrades: ["Passer aux hôtels de la formule Boutique", "Ajouter Apo Island depuis Dumaguete", "Voiture privée à Siquijor"],
    faqs: [
      ["Quel type d'hôtels ?", "Propres, sûrs, bien notés et bien situés : de bons petits hôtels et maisons d'hôtes avec salle de bains privée et climatisation. Passez en Boutique pour plus de charme et de confort."],
      ["Est-ce toujours un voyage privé ?", "Les transferts sont partagés quand c'est logique pour garder un prix bas, mais votre programme, vos réservations et votre assistance n'appartiennent qu'à vous."],
    ],
    legNotes: { 4: "Horaires limités ; itinéraire de repli via Dumaguete." },
  },

  "family-islands": {
    intro:
      "Avec des enfants, le meilleur voyage aux Philippines est celui qui bouge le moins. Cet itinéraire ne compte que deux bases et une seule journée de transfert entre elles. D'abord Bohol, avec les minuscules tarsiers que les enfants adorent, les Chocolate Hills, une descente de rivière en radeau et les tortues de Balicasag. Puis Boracay, avec l'une des plages familiales les plus calmes et les moins profondes d'Asie, des restaurants faciles, des sorties en voilier au coucher du soleil et des excursions en bateau d'île en île.\n\nNous choisissons des chambres familiales ou communicantes, des hôtels avec piscine et une bonne cuisine pour les enfants, et nous gardons les journées d'excursion courtes. Avec de tout-petits, nous pouvons raccourcir les journées en bateau. Avec des ados, nous ajoutons kayak, paddle et baptême de plongée.",
    itinerary: [
      ["Arrivée à Manille", "Accueil à l'aéroport et une chambre familiale près de l'aéroport."],
      ["Vol pour Bohol", "Court vol pour Panglao et après-midi à la piscine ou à la plage."],
      ["Bohol", "Une journée à la campagne avec les tarsiers, les Chocolate Hills et un déjeuner sur la rivière ; une matinée en bateau vers Balicasag pour les tortues ; et deux journées libres."],
      ["De Bohol à Boracay", "Ferry rapide jusqu'à Cebu, court vol pour Caticlan et cinq minutes de bateau jusqu'à Boracay."],
      ["Boracay", "Journées à White Beach, excursion d'île en île avec snorkeling, sortie au coucher du soleil sur un paraw (voilier traditionnel) et Puka Beach. Du temps pour le kayak ou un baptême de plongée pour les plus grands."],
      ["Vol retour via Manille", "Vol de Caticlan à Manille pour votre correspondance internationale."],
    ],
    experiences: ["Le sanctuaire des tarsiers", "Les tortues de Balicasag", "D'île en île à Boracay", "Sortie en paraw au coucher du soleil"],
    upgrades: ["Villa familiale avec piscine privée", "Bateau privé à Boracay", "Un premier cours de plongée pour les enfants de plus de dix ans"],
    faqs: [
      ["Les Philippines conviennent-elles aux jeunes enfants ?", "Très bien. Les Philippins adorent les enfants, la cuisine est douce et, avec deux bases et des excursions courtes, le voyage est facile. Nous prévoyons les siestes et le temps de piscine dans chaque journée."],
      ["Les enfants paient-ils plein tarif ?", "En général, non. Le prix dépend des âges et du partage des chambres. Indiquez-nous l'âge de vos enfants et nous vous ferons un devis précis."],
    ],
  },
};

export default t;
