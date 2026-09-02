export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  context: string;
  problem: string;
  solution: string;
  tools: string[];
  learnings: string;
  badge: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "batilec-creation",
    title: "Supports Publicitaires & Visuels - Batilec Plus",
    subtitle: "Création d’affiches, visuels réseaux sociaux et vidéos promotionnelles",
    category: "Infographie & Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    context: "Réalisations graphiques et multimédias dans le cadre de l'expérience professionnelle chez BATILEC PLUS (2025-2026).",
    problem: "Besoin de renforcer l'impact visuel de la marque, d'animer les réseaux sociaux avec des visuels percutants et de produire des supports publicitaires professionnels.",
    solution: "Conception d'affiches publicitaires attractives, de bannières pour les réseaux sociaux et de vidéos promotionnelles dynamiques valorisant les services et produits de l'entreprise.",
    tools: ["Photoshop", "Figma", "Canva", "Capcut", "Infographie"],
    learnings: "Maîtrise des codes de la communication visuelle d'entreprise, respect des chartes graphiques et rapidité de production multimédia.",
    badge: "Infographie"
  },
  {
    id: "sgbt-print",
    title: "Impression & Techniques de Création - SGBT Print",
    subtitle: "Conception d'affiches, logos et flyers publicitaires",
    category: "Design Graphique & Impression",
    image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=800&q=80",
    context: "Immersion professionnelle et technique chez SGBT PRINT (Juillet - Septembre 2025).",
    problem: "Répondre aux demandes variées des clients en matière de supports imprimés de qualité professionnelle.",
    solution: "Apprentissage approfondi et application des techniques de création graphique (affiches, logos, flyers) et gestion du processus d'impression.",
    tools: ["Photoshop", "Canva", "Figma", "Techniques d'impression"],
    learnings: "Compréhension des contraintes techniques d'impression (CMJN, formats, résolutions) et rigueur dans la déclinaison des identités visuelles.",
    badge: "SGBT Print"
  },
  {
    id: "moov-ci-fibre",
    title: "Sensibilisation & Promotion Commerciale - Moov CI",
    subtitle: "Agent Promoteur Fibre Optique",
    category: "Commercial & Sensibilisation",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    context: "Mission de promotion et de sensibilisation pour Moov Africa Côte d’Ivoire (Juillet - Septembre 2024).",
    problem: "Informer le grand public des avantages de la fibre optique et contribuer au développement commercial des offres internet.",
    solution: "Contribution commerciale active, présentation claire et argumentée des offres télécoms, et sensibilisation de proximité auprès de la clientèle.",
    tools: ["Relation client", "Communication", "Argumentaire commercial", "Sensibilisation"],
    learnings: "Développement du sens du contact, de l'écoute active et de la persuasion commerciale sur le terrain.",
    badge: "Moov CI"
  }
];

export const SKILLS_DATA = {
  uxui: [
    "Conception d’interfaces utilisateur (UI/UX)",
    "Wireframes & Prototypage",
    "Parcours utilisateur",
    "Design d’interfaces web et mobiles",
    "Principes ergonomiques"
  ],
  mobile: [
    "Infographie créative",
    "Communication visuelle",
    "Notion des Outils IA",
    "Création de supports publicitaires",
    "Montage et réalisation vidéo"
  ],
  webIt: [
    "Photoshop",
    "Figma",
    "Canva",
    "Capcut",
    "Bases de développement web et mobile (Licence 2 UVCI)"
  ]
};

export const EXPERIENCES_DATA = [
  {
    role: "Assistant polyvalent & infographe",
    company: "BATILEC PLUS",
    period: "2025 - 2026",
    tasks: [
      "Création d'affiches publicitaires percutantes.",
      "Conception de visuels professionnels pour les réseaux sociaux.",
      "Réalisation de vidéos promotionnelles et montage."
    ]
  },
  {
    role: "Assistant en infographie",
    company: "SGBT PRINT",
    period: "Juill 2025 - Sept 2025",
    tasks: [
      "Apprentissage et application des techniques de création (Affiche, logo, flyer).",
      "Préparation des fichiers et gestion de l'impression professionnelle."
    ]
  },
  {
    role: "Agent Promoteur Fibre Optique",
    company: "Moov CI",
    period: "Juill 2024 - Sept 2024",
    tasks: [
      "Contribution commerciale sur le terrain.",
      "Présentation et vente des offres Internet fibre.",
      "Sensibilisation des clients aux technologies très haut débit."
    ]
  }
];

export const TIMELINE_DATA = [
  {
    step: 1,
    title: "BEPC – Lycée Moderne Cocody-angré",
    description: "2017-2018 : Obtention du BEPC et acquisition des bases scolaires fondamentales à Abidjan."
  },
  {
    step: 2,
    title: "BAC D – Groupe Scolaire Saint-cyr de Port-bouet",
    description: "2021-2022 : Obtention du Baccalauréat série D, orientant vers les sciences et l'informatique."
  },
  {
    step: 3,
    title: "Licence 2 (DAS) – Université virtuelle de Côte d’Ivoire (UVCI)",
    description: "Depuis 2025 : Cursus en Développement d’application et E-service (DAS)."
  },
  {
    step: 4,
    title: "Formations & Expériences professionnelles (Infographie & UI/UX)",
    description: "2024-2026 : Expériences pratiques chez Moov CI, SGBT Print et Batilec Plus, consolidant l'expertise en infographie, design UI/UX et outils IA."
  }
];

export const FORMATIONS_DATA = [
  {
    title: "Licence 2 en Développement d’application et E-service (DAS)",
    org: "Université virtuelle de Côte d’Ivoire (UVCI)",
    description: "Depuis 2025 : Formation supérieure en informatique, technologies web, mobiles et services numériques."
  },
  {
    title: "BAC D",
    org: "Groupe Scolaire Saint-cyr de Port-bouet",
    description: "2021-2022 : Enseignement secondaire scientifique."
  },
  {
    title: "BEPC",
    org: "Lycée Moderne Cocody-angré",
    description: "2017-2018 : Diplôme de fin de premier cycle."
  }
];

export const LOGICIELS_DATA = [
  { name: "Photoshop", category: "Création graphique & Retouche" },
  { name: "Figma", category: "UI/UX Design & Prototypage" },
  { name: "Canva", category: "Design rapide & Supports" },
  { name: "Capcut", category: "Montage vidéo & Réalisation" }
];

export const CONTACT_INFO = {
  name: "Gueu Franck Chadel",
  title: "Infographe & UX/UI Design",
  emails: ["franck1.gueu@uvci.edu.ci", "gueufranckchadel0160@gmail.com"],
  phones: ["+225 01 60 17 25 72", "+225 05 65 69 76 94"],
  linkedin: "https://linkedin.com/in/franck-chadel",
  github: "https://github.com/franckchadel",
  location: "Côte d’Ivoire"
};
