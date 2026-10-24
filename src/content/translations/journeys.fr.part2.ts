import type { JourneyTranslation } from "./types";

const t: Record<string, JourneyTranslation> = {
  "surf-and-islands": {
    intro:
      "Siargao est l'endroit où la plupart des gens apprennent à surfer aux Philippines, et c'est un bon choix : une eau chaude, des vagues de récif pour tous les niveaux et des moniteurs qui ont grandi dessus. Nous lui consacrons six jours, soit la différence entre se lever une fois sur la planche et commencer vraiment à surfer. Ensuite, direction Bohol, où les rivières et les collines reposent les épaules fatiguées, et fin du voyage à El Nido, où les planches laissent place aux bateaux et aux lagons.\n\nAttention à la saison. Les grosses houles de Siargao arrivent à peu près de septembre à novembre : impressionnantes à regarder, mais trop fortes pour les débutants sur les spots célèbres ; de mars à juillet, les vagues sont plus petites et plus accessibles. Il y a deux journées de trajet avec correspondance à Cebu et à Manille. Comme toujours, c'est un point de départ : les surfeurs confirmés voudront peut-être plus de Siargao et moins du reste, et nous pouvons ajouter un surf camp ou une sortie en bateau vers les vagues du large.",
    itinerary: [
      ["Arrivée à Manille", "Accueil à l'aéroport et transfert dans un hôtel tout proche. Si vous arrivez tôt, nous pouvons vous faire rejoindre Siargao le jour même."],
      ["Vol pour Siargao", "Un vol d'1 h 50, puis 45 minutes de route jusqu'à General Luna. Rencontrez votre moniteur, essayez votre planche et regardez la session du soir depuis la plage."],
      ["Cinq jours de surf, avec un jour de repos", "Des sessions le matin sur des vagues de récif et de plage choisies selon votre niveau et la houle du jour, avec analyse vidéo pour ceux qui progressent. Les après-midi sont faits pour dormir, manger et récupérer. À mi-parcours, nous vous emmenons d'île en île ou au lagon de Sugba, car vos bras en auront besoin."],
      ["De Siargao à Bohol via Cebu", "Un vol d'une heure jusqu'à Cebu, un transfert au port et un ferry rapide d'environ deux heures jusqu'à Tagbilaran. Vous arrivez à Panglao en fin d'après-midi."],
      ["Bohol : collines, rivière et plage tranquille", "Visite matinale des Chocolate Hills, du sanctuaire des tarsiers et de la rivière Loboc. Le dixième jour est à vous : snorkeling à Balicasag, long déjeuner ou simplement la plage."],
      ["De Bohol à El Nido via Manille", "Deux vols avec correspondance à Manille, ou un seul via Cebu quand un petit avion direct circule cette saison-là. Arrivée à El Nido en fin d'après-midi."],
      ["El Nido : lagons et calcaire", "Un bateau matinal vers les lagons, une deuxième journée vers les îles du large et une journée libre pour la plage de Nacpan ou le kayak. Il n'y a pas de surf ici, et c'est un peu le but."],
      ["Vol retour via Manille", "Un court vol jusqu'à Manille pour votre vol international, avec une marge prévue."],
    ],
    experiences: ["Cinq matinées de cours de surf à Siargao", "Séance d'analyse vidéo pour ceux qui progressent", "D'île en île à Siargao ou lagon de Sugba", "La jetée de Cloud 9 au coucher du soleil", "Chocolate Hills, tarsiers et rivière Loboc", "Lagons et îles du large d'El Nido en bateau"],
    upgrades: ["Bateau privé vers les vagues de récif au large de Siargao", "Plus de jours de surf à la place de Bohol", "Un séjour surf et yoga avec des cours chaque jour", "Bateau privé pour les deux journées à El Nido"],
    faqs: [
      ["Je n'ai jamais surfé. Est-ce pour moi ?", "Oui. La plupart de nos voyageurs surf sont débutants. Cinq matinées encadrées sur les bonnes vagues suffisent généralement pour passer de la première vague à prendre les vôtres."],
      ["Puis-je changer les îles ?", "Oui. Les surfeurs confirmés laissent souvent Bohol de côté pour plus de Siargao ; les partenaires non surfeurs préfèrent parfois Siquijor. C'est un point de départ."],
      ["Quel est le meilleur mois ?", "Pour apprendre, de mars à juillet : des vagues plus petites et un temps correct. Palawan est aussi au mieux de mars à mai. À partir de juin, il pleut davantage à El Nido."],
      ["Comment fonctionnent les vols ?", "Siargao est reliée via Manille ou Cebu, et Palawan via Manille. Deux de vos journées sont des journées de trajet. Nous les réservons et les gérons toutes."],
    ],
    legNotes: { 4: "Certaines saisons, un petit avion relie directement Cebu à El Nido ; nous l'utilisons quand il fait gagner du temps." },
  },

  "the-grand-philippines": {
    intro:
      "Ce sont les îles qui attirent la plupart des voyageurs aux Philippines, mais le pays se comprend mieux quand on a vu d'où il part. Ce voyage commence à Manille, avec une journée dans Intramuros et un long et vrai déjeuner, puis monte au nord dans la Cordillère : les rizières en terrasses de Banaue et Batad, vieilles de 2 000 ans, et les forêts de pins, les grottes et les matins frais de Sagada. Ce n'est qu'ensuite que vous rejoignez la côte, par les lagons d'El Nido, la campagne de Bohol et enfin Siargao.\n\nC'est un grand voyage, et nous ne prétendrons pas le contraire. Les montagnes sont à une longue route de Manille, à l'aller comme au retour, et il y a trois journées de transfert entre les îles. En échange, vous découvrez une image des Philippines que la plupart des visiteurs ne voient jamais. C'est un point de départ : vous pouvez remplacer Bohol par Siquijor ou la côte sud de Cebu, prendre l'avion plutôt que la route quand c'est possible, ou supprimer le nord pour une fin plus tranquille dans les îles. Nous vous aidons à choisir ce que vous gardez.",
    itinerary: [
      ["Manille : arrivée et vieille ville", "Arrivée et repos. Le lendemain, visite d'Intramuros avec un guide capable de donner du sens à quatre siècles d'histoire, puis place à la table : la cuisine sino-philippine de Binondo, ou un long déjeuner de plats introuvables à l'étranger. Manille est chaotique, mais avec le bon guide elle est bien plus agréable que sa réputation."],
      ["Vers le nord, à Banaue", "Environ neuf heures de route. En formule Essential, c'est le bus de nuit, qui quitte Manille le soir et arrive à l'aube ; à partir de Boutique, nous vous conduisons en voiture privée, de jour, avec des arrêts. Le trajet est long, et l'arrivée, quand les terrasses apparaissent, en vaut la peine."],
      ["Les rizières en terrasses de Batad", "Une courte route et une heure de marche vous mènent à Batad, un amphithéâtre de terrasses construit par le peuple ifugao et toujours cultivé. Avec un guide local, descendez par les murets des terrasses jusqu'au village, puis jusqu'à la cascade de Tappiya si vos jambes sont d'accord. C'est raide et mieux adapté aux marcheurs en bonne forme."],
      ["Sagada : grottes, pins et matins frais", "Environ trois heures de route de montagne jusqu'à Sagada. Explorez la grotte de Sumaguing avec un guide, voyez les cercueils suspendus d'Echo Valley et levez-vous tôt pour la mer de nuages de Kiltepan. Les soirées sont assez fraîches pour une veste, une sensation étrange aux Philippines."],
      ["La longue route du retour vers Manille", "La journée la plus longue du voyage : environ 11 à 12 heures de route, via Baguio. Nous la découpons avec des arrêts et vous dormez près de l'aéroport, prêts pour le vol du lendemain."],
      ["Vol pour El Nido", "Un court vol jusqu'à El Nido. Après les montagnes, un après-midi dans la mer."],
      ["Lagons et îles d'El Nido", "Un bateau matinal dans les lagons, une deuxième journée en mer vers les îles du large et une journée libre pour la plage de Nacpan ou pour ne presque rien faire."],
      ["D'El Nido à Bohol via Manille", "Deux vols avec correspondance à Manille (ou Cebu, selon les horaires). Arrivée à Panglao en milieu d'après-midi."],
      ["Bohol, Siquijor ou le sud de Cebu", "Nous l'avons écrit avec Bohol : les Chocolate Hills à l'aube, les tarsiers, la rivière Loboc et une journée à Balicasag. C'est la partie la plus flexible du voyage. Siquijor convient à ceux qui cherchent le calme, et la côte sud de Cebu (le banc de sardines de Moalboal, Oslob, les chutes de Kawasan) à ceux qui veulent passer plus de temps dans l'eau."],
      ["De Bohol à Siargao via Cebu", "Deux heures de ferry rapide jusqu'à Cebu, un vol d'une heure jusqu'à Siargao et 45 minutes de route jusqu'à General Luna."],
      ["Quatre jours à Siargao", "Une fin volontairement sans programme : d'île en île, le lagon de Sugba, un cours de surf, les piscines naturelles à marée basse et de bons dîners à General Luna. Après trois semaines, vous serez contents de ne plus bouger."],
      ["Vol retour via Manille ou Cebu", "Un vol intérieur rejoint votre vol international, avec une marge confortable."],
    ],
    experiences: ["Visite guidée d'Intramuros et balade gourmande à Binondo", "Les terrasses de Batad et la cascade de Tappiya avec un guide ifugao", "La grotte de Sumaguing et Echo Valley à Sagada", "Lever du soleil au-dessus des nuages à Kiltepan", "Lagons d'El Nido et excursions d'île en île", "Chocolate Hills, tarsiers et rivière Loboc", "D'île en île à Siargao et lagon de Sugba", "Un cours de surf débutant"],
    upgrades: ["Une nuit à Baguio pour couper la route du retour depuis Sagada", "Bateaux privés à chaque journée dans les îles", "Remplacer Bohol par Siquijor ou la côte sud de Cebu", "Ajouter Coron pour trois nuits entre Manille et El Nido", "Vol charter d'El Nido à Siargao en formule Signature"],
    faqs: [
      ["Puis-je changer l'itinéraire ?", "Oui, et sur un voyage de cette taille, la plupart des gens le font. La partie Visayas est la plus facile à modifier, et le nord peut être raccourci ou supprimé. C'est un point de départ."],
      ["La route jusqu'aux rizières vaut-elle la peine ?", "Nous le pensons, mais il est honnête de dire qu'elle vous coûte deux longues journées de route. Si vous manquez de temps ou de patience, nous pouvons vous proposer des alternatives plus proches."],
      ["Est-ce adapté aux enfants ?", "Pour les enfants plus grands et les adolescents bons marcheurs, oui. Les journées de route et les marches de Batad sont difficiles pour les moins de dix ans."],
      ["Quelle est la meilleure période ?", "De février à mai, pour les montagnes comme pour les îles. À partir de juin, les terrasses sont luxuriantes mais il pleut davantage dans les îles, et des typhons sont possibles d'août à novembre environ."],
    ],
    legNotes: { 0: "Bus de nuit en Essential ; voiture privée de jour à partir de Boutique.", 2: "En formule Signature, nous pouvons passer par Baguio avec une nuit sur place, ou organiser un vol charter quand il existe." },
  },

  "ten-days-two-islands": {
    intro:
      "L'erreur la plus fréquente que nous voyons dans les projets de voyage aux Philippines depuis l'Europe, c'est de vouloir caser quatre îles en dix jours. Sur le papier, ça passe. En pratique, chaque changement d'île coûte presque une journée, souvent via Manille, et vous passez vos vacances en salle d'embarquement. Voici donc l'alternative : deux îles, choisies parce qu'elles sont différentes, avec une seule journée de transfert entre les deux. El Nido pour le calcaire, les lagons et les journées en bateau ; Siargao pour les palmiers, le surf et un village où il est facile de ne rien faire.\n\nSi vous atterrissez à Manille tôt le matin, nous pouvons même enchaîner vers El Nido le jour même et vous offrir une nuit de plus sur la plage. C'est un point de départ, bien sûr. Bohol peut remplacer Siargao si vous préférez ne pas passer deux fois par Manille, et Coron peut remplacer El Nido pour les plongeurs. Ce que nous ne ferions pas, c'est ajouter une troisième île. Faites-nous confiance sur ce point.",
    itinerary: [
      ["Arrivée à Manille", "Une nuit près de l'aéroport après votre vol long-courrier. Si vous arrivez avant la fin de matinée, nous essaierons plutôt de vous faire rejoindre directement El Nido et d'y ajouter la nuit."],
      ["Vol pour El Nido", "Un court vol jusqu'à la piste d'El Nido et 20 minutes de route jusqu'à votre hôtel. Baignade, puis coucher de soleil sur la baie de Bacuit."],
      ["Deux journées en bateau et une journée libre", "Un bateau matinal vers les lagons, avant la flotte ; une deuxième journée autour des îles du large ; et une journée pour la plage de Nacpan, le kayak ou un hamac. Trois jours pleins, c'est la bonne mesure : assez pour voir El Nido, pas trop pour que les journées en bateau se confondent."],
      ["D'El Nido à Siargao via Manille", "La seule journée de transfert du voyage : El Nido–Manille, puis Manille–Siargao, avec une correspondance raisonnable. Vous atterrissez à Siargao l'après-midi et êtes à votre hôtel de General Luna 45 minutes plus tard."],
      ["Siargao : îles, lagon et cours de surf", "D'île en île à Naked, Daku et Guyam ; une journée au nord au lagon de Sugba ; et une journée libre pour un cours de surf, les piscines naturelles de Magpupungko à marée basse ou un tour de l'île en scooter, tranquillement."],
      ["Vol retour via Manille ou Cebu", "Un vol intérieur pour rejoindre votre vol international, avec une marge prévue."],
    ],
    experiences: ["Les lagons d'El Nido en bateau matinal", "D'île en île au large dans la baie de Bacuit", "La plage de Nacpan", "D'île en île à Siargao : Naked, Daku et Guyam", "Excursion au lagon de Sugba", "Un cours de surf débutant"],
    upgrades: ["Bateaux privés à El Nido et à Siargao", "Remplacer Siargao par Bohol pour éviter une deuxième correspondance à Manille", "Une nuit dans un resort sur une île privée du nord de Palawan", "Vol charter d'El Nido à Siargao (Signature)"],
    faqs: [
      ["Puis-je ajouter une autre île ?", "Vous pouvez, mais nous vous le déconseillerions gentiment. Chaque île en plus coûte presque une journée de transferts. En dix jours, c'est avec deux îles que le voyage ressemble à des vacances. Si vous voulez de la variété, remplacez plutôt l'une des deux."],
      ["Quel est le meilleur mois ?", "De mars à mai, pour du beau temps sur les deux îles. À partir de juin, El Nido entre dans sa saison humide ; de novembre à janvier, Siargao a plus de chances d'avoir de la pluie."],
      ["Est-ce adapté aux familles ?", "Oui. Deux bases et une seule journée de transfert, c'est la formule la plus simple avec des enfants. Nous choisissons des chambres familiales et des plages plus calmes, et raccourcissons les journées en bateau pour les plus jeunes."],
      ["Comment fonctionnent les vols ?", "El Nido et Siargao ne sont pas reliées directement : le sixième jour passe donc par Manille. Nous le réservons, suivons les horaires et gérons tout changement."],
    ],
    legNotes: { 0: "Alternative : vol pour Puerto Princesa puis 5 à 6 h de route vers le nord, si les vols pour El Nido sont complets.", 4: "Ou via Cebu, selon votre vol international." },
  },
};

export default t;
