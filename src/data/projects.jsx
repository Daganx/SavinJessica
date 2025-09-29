import projects1_1 from "../assets/images/projects/projects.jpg";
import projects1_2 from "../assets/images/projects/projects1.jpg";
import projects1_3 from "../assets/images/projects/projects2.jpg";
import projects1_4 from "../assets/images/projects/projects3.jpg";

// Projet 1 :
import project1_1 from "../assets/images/projects/project1/project1_1.jpg";
import project1_2 from "../assets/images/projects/project1/project1_2.jpg";
import project1_3 from "../assets/images/projects/project1/project1_3.jpg";
// Projet 2 :
import project2_1 from "../assets/images/projects/project2/project2_1.jpg";
import project2_2 from "../assets/images/projects/project2/project2_2.jpg";
import project2_3 from "../assets/images/projects/project2/project2_3.jpg";
import project2_4 from "../assets/images/projects/project2/project2_4.jpg";
import project2_5 from "../assets/images/projects/project2/project2_5.jpg";
import project2_6 from "../assets/images/projects/project2/project2_6.jpg";

const projects = [
  {
    id: 1,
    title: "Boutique pour enfants",
    images: [project1_1, project1_2, project1_3],
    description:
      "Lors d'une création d'entreprise,  il est très apprécié par les différents intervenants de pouvoir visualiser votre projet. En plus de leurs donner des vues, des chiffres, cela participe à la création de votre image de marque et vous aide à trouver votre positionnement. Ici, les travaux ont été réalisés en famille. ",
    prestation:
      "Brief clients, Conception (Agencement, aménagement, éclairage). Réalisation de plans et vues. Prestation de décoration.",
    customer: "Professionnel",
    year: "2025",
    price: "10.000 HT",
    besoin:
      "trouver l'inspiration pour votre marque, vous aider à visualiser les espaces necessaires à l'exploitation de votre activité.",
    time: "NC",
    place: "Arpajon",
  },
  {
    id: 2,
    title: "Agence immobilière",
    images: [
      project2_1,
      project2_2,
      project2_3,
      project2_4,
      project2_5,
      project2_6,
    ],
    description:
      "Les volumes de l'agence, toute en longueur, ont dû être repensés pour fluidifier le parcours client. J’ai dans un 1er temps défini les espaces, puis sélectionné les couleurs en fonction des éléments forts que je devais conserver.Le vert vient ici unifier les volumes. La pièce parait plus grande, plus harmonieuse. Elle vient gommer les multiples recoins.  L'éclairage a été travaillé en changeant spots et LED, et, en ajoutant des dalles CCT TRUE LIGHT dans la 2eme partie d’agence afin d’uniformiser l’ensemble. Enfin, un ameublement fonctionnel et venu compléter l’ensemble. ",
    prestation:
      "Brief clients. Conception (éclairage, aménagement, décoration) sur la base du brief clients. Réalisation de vues. Planification et suivi de travaux. ",
    customer: "Professionnel",
    year: "2025",
    price: "7000 HT",
    besoin:
      "Améliorer l’éclairage intérieur et extérieur. Moderniser les lieux, revoir l'espace accueil en ajoutant un petit salon. ",
    time: "4 jours",
    place: "Arpajon",
  },
  {
    id: 3,
    title: "Rénovations en plusieurs temps",
    images: [projects1_1, projects1_2, projects1_3, projects1_4],
    description:
      "Mes clients avaient déjà de l'expérience dans les travaux qu'une maison peut nécessiter. Ils étaient échaudés par certains choix faits qu'ils ont remis en question quelques mois plus tard. La clé, prendre le projet dans sa globalité, même si les travaux ne concernent qu'une partie plus ou moins grande au démarrage. Cela évite la perte de temps, les coups au moral et de gaspiller son argent.",
    prestation:
      "Concept décoratif établi en fonction du brief clients et des éléments à conserver (sol, murs en brique, crepis …) Bilan éclairage pour le RDC. Visuels Cuisine amorçant les choix décoratifs du concept.",
    customer: "Particulier",
    year: "2025",
    price: "10.000 TTC",
    besoin:
      "Etablir un concept décoratif qui perdure avec les rénovations à venir, etablir un concept décoratif pour éviter de refaire sa décoration dans 3 ans",
    time: "NC",
    place: "La Norville",
  },
  {
    id: 4,
    title: "Agencement sur mesure",
    images: [projects1_1, projects1_2, projects1_3, projects1_4],
    description:
      "L'idée était d'offrir des possibilités de rangement dans un espace qui semblait 'perdu'. Creation de meuble de différents hauteurs et différents profondeurs pour loger vaiselles et electromenagers. S'ajoute un plan de travail pour donner l'illusion que la cuisine se poursuit et créer ainsi un espace où l'on peut s'installer pour boire un café.",
    prestation:
      "Brief clients,Conception,Réalisation de vues, Réalisation de devis, comparaisons et suivi de travaux, Shopping liste pour les elements de décoration.",
    customer: "Particulier",
    year: "2025",
    price: "En cours",
    besoin:
      "sentiment d'espace mal optimisé, décoration partielle ou peu élaborée. Besoin de rangements.",
    time: "2 jours",
    place: "La Norville",
  },
  {
    id: 5,
    title: "Chambre d'amis",
    images: [projects1_1, projects1_2, projects1_3, projects1_4],
    description:
      "Rénover un chambre suite à dégat des eaux. Respecter le style chic parisien de la maison.",
    prestation: "Brief clients, réalisation de vues, shopping liste",
    customer: "#Client",
    year: "2025",
    price: "En cours",
    besoin: "Petit Budget",
    time: "3 jours",
    place: "La Norville",
  },
];

export default projects;
