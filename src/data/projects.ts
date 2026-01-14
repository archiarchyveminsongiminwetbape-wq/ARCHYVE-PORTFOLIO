export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  links: {
    website?: string;
    github?: string;
    demo?: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 5,
    title: "Archyve Academy",
    description: "Plateforme de formation en ligne pour l'apprentissage et le développement des compétences",
    longDescription: "Archyve Academy propose des formations de qualité dans divers domaines, avec des cours accessibles à tous les niveaux. Notre plateforme interactive permet un apprentissage personnalisé et efficace.",
    image: "/images/archyve-academy.jpg",
    tags: ["Education", "Formation en ligne", "Développement personnel"],
    links: {
      website: "https://archyve-accademy.vercel.app/"
    },
    featured: true
  },
  {
    id: 1,
    title: "Explore Cameroun",
    description: "Découvrez les merveilles du Cameroun à travers ce guide touristique interactif",
    longDescription: "Plateforme présentant les sites touristiques, la culture et les expériences uniques à vivre au Cameroun avec des fonctionnalités interactives et des itinéraires personnalisables.",
    image: "/images/explore-cameroun.jpg",
    tags: ["React", "TypeScript", "Next.js", "Tourisme"],
    links: {
      website: "https://explore-cameroun.vercel.app/",
      github: "#"
    },
    featured: true
  },
  {
    id: 2,
    title: "Répétition chez toi",
    description: "Plateforme de mise en relation entre parents et professeurs à Douala",
    longDescription: "Trouvez facilement des professeurs qualifiés pour des cours particuliers à domicile à Douala. Notre plateforme met en relation les parents avec des enseignants expérimentés pour toutes les matières et tous les niveaux.",
    image: "/images/repetition-chez-toi.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    links: {
      website: "https://r-p-tition-chez-toi.vercel.app/",
      github: "#"
    },
    featured: true
  },
  {
    id: 3,
    title: "Kelev Security SARL",
    description: "Entreprise de sécurité avec protection 24/7 et interventions rapides",
    longDescription: "Votre partenaire de confiance pour la protection des personnes et des biens. Équipe expérimentée, dispositifs fiables, solutions sur mesure.",
    image: "/images/kelev-security.jpg",
    tags: ["React", "TypeScript"],
    links: {
      website: "https://kelev.vercel.app/",
      github: "#"
    },
    featured: false
  },
  {
    id: 4,
    title: "HonorésClean",
    description: "Savon liquide multi-usage et doux pour le nettoyage complet",
    longDescription: "Découvrez nos savons liquides de qualité pour la lessive, la vaisselle et le nettoyage complet de la maison. Disponible en plusieurs formats et parfums.",
    image: "/images/honores-clean.jpg",
    tags: ["E-commerce", "React"],
    links: {
      website: "https://savon-blush.vercel.app/",
      github: "#"
    },
    featured: false
  }
];

export const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Python"] },
  { category: "Outils", items: ["Git", "Docker", "VS Code"] }
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/archarchieveminsongiminwetbape-wq", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourname", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/yourname", icon: "twitter" },
  { name: "Email", url: "mailto:your.email@example.com", icon: "email" }
];
