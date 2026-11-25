import { SiWacom } from "react-icons/si"

export const profil = {
  nom: 'Laetitia Foudja Nzuala',
  titre: 'Développeuse Full Stack & Architecte Logiciel',
  accroche:
    "Je ne me voyais pas du tout en informatique. Par curiosité, j'ai poussé la porte, et j'ai découvert une passion : transformer une idée en solution qui fonctionne et qui plaît, du premier croquis à la dernière ligne de code. Rigueur d'ingénieure, sensibilité de créatrice.",
  email: 'foudjalaeti@gmail.com',
  telephone: '+33 651 434 306',
  ville: 'Limoges',
  github: 'https://github.com/foudja-laeti',
  linkedin: 'https://linkedin.com/in/laeti-foudja',
  cv: '/CV - Laetitia Foudja.pdf',
  logo: '/logo.png',
  photo: '/photo.jpg',
  formulaire: '', // lien Formspree, voir les explications plus bas
}
export const roles = [
  'Développeuse Full Stack',
  'Architecte Logiciel',
  'Maquettiste Figma',
  'Cheffe de projet / PO',
]

export const apropos = [
  "Étudiante en architecture et développement logiciel, je suis curieuse, rigoureuse et motivée par l'envie d'apprendre au contact de professionnels.",
  "Je suis à l'aise sur toute la chaîne d'un projet : étude d'avant-projet, rédaction du cahier des charges, maquettage avec Figma, développement full stack et pilotage d'équipe en mode agile (Scrum, Kanban).",
  "Mon objectif : gagner en expérience dans un environnement stimulant et grandir progressivement vers un rôle d'architecte logiciel.",
]

export const bilingue = {
  titre: 'Parfaitement bilingue anglais - français',
  texte:
    "Je travaille aussi naturellement en anglais qu'en français : documentation technique, échanges d'équipe, présentations. Cela me permet d'évoluer dans des équipes et des projets internationaux.",
}

export const stats = [
  { valeur: 5, suffixe: '+', label: 'projets académiques coordonnés' },

  { valeur: 2, suffixe: '', label: 'langues parfaitement maîtrisées : anglais et français' },
]

export const competences = [
  {
    id: 'backend',
    icone: 'backend',
    categorie: 'Backend',
    description: 'La logique métier et les services qui font tourner les applications.',
    items: [
      { nom: 'Django', icone: 'django' },
      {nom: 'FastAPI', icone: 'fastapi' },
      { nom: 'Laravel', icone: 'laravel' },
      {nom: 'Node.js', icone: 'node' },
      { nom: 'PHP', icone: 'php' },
      {nom : 'C#', icone: 'Csharp' },

    ],
  },
  {
    id: 'frontend',
    icone: 'frontend',
    categorie: 'Frontend',
    description: 'Des interfaces claires, rapides et agréables à utiliser.',
    items: [
      { nom: 'JavaScript', icone: 'javascript' },
      { nom: 'React.js', icone: 'react' },
      { nom: 'Angular', icone: 'angular' },
      { nom: 'HTML5 / CSS3', icone: 'html5' },
      {nom: 'typescript', icone: 'typescript' },
      {nom : 'Next.js', icone: 'next' },
    ],
  },
  {
    id: 'mobile',
    icone: 'mobile',
    categorie: 'Mobile',
    description: 'Des applications pour smartphones, pensées pour le quotidien.',
    items: [{ nom: 'Flutter / Dart', icone: 'flutter' }],
  },
  {
    id: 'outils',
    icone: 'outils',
    categorie: 'Outils & DevOps',
    description: 'Pour concevoir, tester, versionner, surveiller et déployer.',
    items: [
      { nom: 'Postman', icone: 'postman' },
      { nom: 'Insomnia', icone: 'insomnia' },
      { nom: 'Git', icone: 'git' },
      { nom: 'GitHub', icone: 'github' },
      { nom: 'Figma', icone: 'figma' },
      { nom: 'VS Code', icone: 'vscode' },
      { nom: 'SonarQube', icone: 'sonarqube' },
      { nom: 'Grafana', icone: 'grafana' },
      { nom: 'Prometheus', icone: 'prometheus' },
      { nom: 'Docker', icone: 'docker' },
      { nom: 'O2switch', icone: 'o2switch' },
      { nom: 'Vercel', icone: 'vercel' },
      {nom : 'Trello', icone: 'trello' },
      {nom : 'Jira', icone: 'jira' },
      {nom : 'Swagger', icone: 'swagger' },
    ],
  },
  {
    id: 'bdd',
    icone: 'bdd',
    categorie: 'Base de données',
    description: 'Structurer, stocker et retrouver les données efficacement.',
    items: [
      { nom: 'PostgreSQL', icone: 'postgresql' },
      { nom: 'MySQL', icone: 'mysql' },
      {nom: 'MongoDB', icone: 'mongodb' },
    ],
  },
  {
    id: 'Architecture',
    icone: 'architecture',
    categorie: 'Architecture',
    description: 'Concevoir et structurer les systèmes logiciels de manière efficace et maintenable.',
    items: [
      { nom: 'Monolithique', icone: 'monolithique' },
      { nom: 'Microservices', icone: 'microservices' },
    ],
  },
  {
    id: 'bureautique',
    icone: 'bureautique',
    categorie: 'Bureautique',
    description: 'Outils de bureautique pour la rédaction, la présentation et l’organisation.',
    items: [
      { nom: 'Word', icone: 'word' },
      { nom: 'Excel', icone: 'excel' },
      { nom: 'PowerPoint', icone: 'powerpoint' },
    ],
  },
]
export const projets = [
  {
    titre: "Gestion du parc automobile de l'IUC",
    description:
      "Application web de gestion du parc automobile de l'IUC, avec un module de gestion du carburant. Un backend Django expose une API, consommée par des interfaces React.js. Projet réalisé en équipe avec les méthodes agiles (Scrum, Kanban).",
    techno: ['Python', 'Django', 'React.js', 'Vite'],
    image: '/driveparc.png', // ex : '/projets/parc-auto.png' (image dans public/projets/)
    code: 'https://github.com/foudja-laeti/driveparc.git', // lien GitHub
    demo: 'https://driveparc.vercel.app/', // lien hébergé
  },
  {
    titre: 'Gestion des enrôlements des étudiants',
    description:
      "Application d'enrôlement des étudiants : backend Django REST, connexion avec les comptes Google et Microsoft (OAuth), envoi automatique d'e-mails et interfaces React.js.",
    techno: ['Python', 'Django', 'React.js', 'Vite'],
    image: '/sgee.jpg',
    code: 'https://github.com/foudja-laeti/enrollement-backend.git',
    demo: 'https://sgee-frontend-ii7y.vercel.app/',
  },
 
  {
    titre: 'Mon portfolio',
    description:
      "Mon portfolio personnel, conçu pour présenter mon profil de développeuse full stack et d'architecte logiciel : site multi-pages, animations et design responsive, pensé comme une vitrine professionnelle.",
    techno: ['React.js', 'Vite'],
    image: '/logo.png',
    code: 'https://github.com/foudja-laeti/portfolio.git',
    demo: 'https://laetitia-foudja.vercel.app',
  },

  {
    titre: 'DiabeteCam : Application de prédiction du diabète avec IA',
    description:
      "Application de surveillance médicale du diabète avec IA - Python, pandas, scikit-learn. Prédiction du diabète avec deux modèles de classification : régression logistique et arbre de décision",
    techno: ['Python', 'pandas', 'scikit-learn'],
    image: '/logodiabete.png',
    code: 'https://github.com/foudja-laeti/surveillance-diabete.git',
    demo: '',
  },
]
export const experiences = [
  {
    icone: 'experience',
    titre: 'Stagiaire Développeuse Mobile',
    lieu: '2TCorpCV, Douala, Cameroun',
    date: '2025 · 6 semaines',
    description:
      "Stage au sein d'une équipe projet, consacré au développement d'une application mobile et de solutions numériques (Web CV, E-Card).",
    points: [
      "Développement d'applications mobiles avec Flutter et Dart.",
      "Conception et développement du module de gestion des utilisateurs de l'application.",
      'Implémentation de la fonctionnalité de visibilité des produits commandés par chaque utilisateur.',
      "Collaboration avec l'équipe projet : échanges réguliers, partage des tâches et intégration du code de chacun.",
    ],
    tags: ['Flutter', 'Dart', 'Travail en équipe', 'Gestion des utilisateurs'],
  },
]

export const formations = [
  {
    icone: 'diplome',
    titre: 'Master Architecture et Développement Logiciel',
    lieu: '3iL Ingénieurs, Limoges',
    date: "En cours · jusqu'en 2028",
    description:
      "Formation Expert en architecture et développement logiciel, axée sur la conception d'architectures applicatives et le développement de solutions logicielles.",
    
  },
  {
    icone: 'diplome',
    titre: 'Bachelor Concepteur Développeur Web Full Stack',
    lieu: 'IUC, Cameroun',
    date: '09/2026',
    description:
      'Conception et développement web full stack : interfaces front-end et services back-end, avec de nombreux projets réalisés en équipe.',
    
  },
  {
    icone: 'mobile',
    titre: "DEC Programmation d'Applications Mobiles",
    lieu: 'IUC, Cameroun',
    date: '08/2025',
    description: "Développement d'applications mobiles natives et cross-platform.",
   
  },
  {
    icone: 'sciences',
    titre: 'GCE Advanced Level Science',
    lieu: "Collège Moderne Bilingue L'Étoile",
    date: '08/2023',
    description: 'Diplôme anglophone de fin de lycée, filière scientifique.',
    
  },
]