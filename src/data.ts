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
    id: "ecojeune-ci",
    title: "ECOJEUNE CI / EcoLife",
    subtitle: "Sensibilisation à l’écologie et aux bonnes pratiques environnementales",
    category: "UX/UI Design & Conception",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    context: "Projet d’apprentissage et de recherche axé sur la sensibilisation des jeunes citoyens en Côte d’Ivoire aux enjeux environnementaux et au développement durable.",
    problem: "Le manque de sensibilisation ludique et accessible sur les écogestes du quotidien et la gestion des déchets urbains chez les jeunes générations.",
    solution: "Conception d’un parcours utilisateur intuitif et d’une interface mobile moderne (Wireframes et Prototypage) proposant des guides pratiques, des éco-défis et un suivi d'impact environnemental local.",
    tools: ["Figma", "Wireframes", "Parcours utilisateur", "Principes UX", "Prototypage interactif"],
    learnings: "Approfondissement de la méthodologie UX (recherche utilisateur, wireframing, tests d'ergonomie) et importance de l'accessibilité visuelle pour un public jeune.",
    badge: "UX/UI Design"
  },
  {
    id: "digifemmes-kotlin",
    title: "Application Android Kotlin",
    subtitle: "Projet d'apprentissage - Formation DigiFemmes Côte d’Ivoire",
    category: "Développement Mobile Android",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    context: "Projet pratique réalisé dans le cadre de la formation intensive en développement d’applications mobiles Android avec Kotlin chez DigiFemmes Côte d’Ivoire.",
    problem: "Mettre en pratique l'architecture moderne Android, la gestion du cycle de vie des Activity et la synchronisation de données en temps réel pour une application mobile fonctionnelle.",
    solution: "Développement d’une application Android native en Kotlin structurée avec Android Studio, intégration de l'authentification sécurisée, persistance cloud et notifications push.",
    tools: ["Kotlin", "Android Studio", "Android SDK", "Firebase Auth", "Cloud Firestore", "Firebase Cloud Messaging", "Activity Lifecycle"],
    learnings: "Maîtrise de la syntaxe Kotlin, gestion rigoureuse du cycle de vie des Activity, configuration des builds Gradle et intégration fluide des services cloud Firebase.",
    badge: "Mobile Android"
  },
  {
    id: "ecitoyen-ci",
    title: "e-Citoyen CI",
    subtitle: "Digitalisation et accès aux services administratifs en Côte d’Ivoire",
    category: "Conception & Développement Web / Mobile",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    context: "Projet académique et personnel explorant les solutions numériques pour simplifier l'accès aux démarches administrutives citoyennes.",
    problem: "La complexité et la lenteur dans l'accès aux informations pratiques et aux formulaires administratifs pour les citoyens.",
    solution: "Architecture d'un prototype d'interface centralisant les informations clés, structurant les parcours usagers et offrant des repères clairs basés sur les besoins réels.",
    tools: ["UI/UX Design", "HTML / CSS", "JavaScript", "Bases de données", "SQL", "Analyse des besoins"],
    learnings: "Importance de la structuration des données administratives, simplification des parcours utilisateurs complexes et bases de la persistance relationnelle.",
    badge: "Web & Informatique"
  }
];

export const SKILLS_DATA = {
  uxui: [
    "Conception d’interfaces utilisateur",
    "Wireframes",
    "Prototypage",
    "Parcours utilisateur",
    "Principes UX",
    "Design d’interfaces modernes"
  ],
  mobile: [
    "Kotlin",
    "Android Studio",
    "Android",
    "Firebase",
    "Authentification Firebase",
    "Cloud Firestore",
    "Firebase Cloud Messaging",
    "Gestion du cycle de vie des Activity",
    "Build et Release Android"
  ],
  webIt: [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Bases de données",
    "Notions de développement d’applications"
  ]
};

export const TIMELINE_DATA = [
  {
    step: 1,
    title: "Études en informatique",
    description: "Apprentissage des fondamentaux de l'informatique, des algorithmes, de la logique de programmation et des architectures logicielles."
  },
  {
    step: 2,
    title: "Formation UX/UI Design",
    description: "Formation spécialisée axée sur la conception d’interfaces, l’expérience utilisateur, la structuration des parcours et le prototypage."
  },
  {
    step: 3,
    title: "Formation Android Kotlin avec DigiFemmes Côte d’Ivoire",
    description: "Formation intensive en développement mobile natif : Kotlin, Android Studio, architecture, cycle de vie et services Firebase."
  },
  {
    step: 4,
    title: "Développement de projets personnels et académiques",
    description: "Mise en pratique à travers la conception de projets réels (ECOJEUNE CI, applications Android, e-Citoyen CI)."
  },
  {
    step: 5,
    title: "Progression vers le développement logiciel et la conception",
    description: "Volonté constante de progresser dans la création de solutions numériques utiles, intuitives et adaptées aux utilisateurs."
  }
];

export const FORMATIONS_DATA = [
  {
    title: "Formation en développement d’applications mobiles Android – Kotlin",
    org: "DigiFemmes Côte d’Ivoire",
    description: "Compétences acquises : architecture des applications, cycle de vie des Activity, intégration de Firebase (Authentication, Firestore, Cloud Messaging), bonnes pratiques de build et release."
  },
  {
    title: "Formation UX/UI Design",
    org: "Parcours Spécialisé Design & Expérience Utilisateur",
    description: "Formation axée sur la conception d’interfaces, l’expérience utilisateur, la structuration des parcours et le prototypage."
  },
  {
    title: "Informatique et Développement d’Applications",
    org: "Études Supérieures en Informatique",
    description: "Étudiant en informatique, avec un intérêt particulier pour le développement logiciel, le mobile et le design d’interfaces."
  }
];

export const CONTACT_INFO = {
  name: "Franck Chadel",
  email: "gueufranckchadel0160@gmail.com",
  phone: "+225 07 00 00 00 00", // Standard professional placeholder format or real if user provides
  linkedin: "https://linkedin.com/in/franck-chadel",
  github: "https://github.com/franckchadel",
  location: "Côte d’Ivoire"
};
