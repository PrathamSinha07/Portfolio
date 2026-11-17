export type NavItem = {
  /** Visible label in the navigation. */
  label: string;
  /** In-page section anchor. The portfolio is a single page. */
  href: string;
};

export type SocialLink = {
  id: "github" | "linkedin";
  label: string;
  href: string;
};

export type Fact = {
  label: string;
  value: string;
};

export type SiteConfig = {
  name: string;
  brand: string;
  role: string;
  tagline: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: NavItem[];
  socials: SocialLink[];
  /** Placeholder until the real resume file is added to /public. */
  resume: {
    label: string;
    href: string;
  };
  contact: {
    /** Placeholder address — replace with the real one before launch. */
    email: string;
    availability: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    summary: string;
    /** Short supporting statement beneath the main introduction. */
    supporting: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    focusAreas: string[];
  };
  about: {
    intro: string;
    /** Second paragraph — the working approach. */
    approach: string;
    facts: Fact[];
  };
};

export const siteConfig: SiteConfig = {
  name: "Pratham Sinha",
  brand: "Pratham Sinha",
  role: "Software Engineer",
  tagline:
    "I build practical software solutions using Java, modern web technologies, cloud services, and AI.",
  meta: {
    title: "Pratham Sinha — Software Engineer",
    description:
      "Portfolio of Pratham Sinha, a Software Engineer building practical products with Java, Spring Boot, Next.js, cloud services, and AI.",
    keywords: [
      "Pratham Sinha",
      "Software Engineer",
      "Java Developer",
      "Full-Stack Developer",
      "Spring Boot",
      "Next.js",
      "Portfolio",
    ],
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    // Placeholder handles — replace with the real profiles before launch.
    { id: "github", label: "GitHub", href: "https://github.com/prathamsinha" },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prathamsinha",
    },
  ],
  resume: {
    label: "Resume",
    // Placeholder link — swap for /resume.pdf once the file is added to /public.
    href: "#",
  },
  contact: {
    // Placeholder address — replace before launch.
    email: "pratham.sinha@example.com",
    availability: "Open to Software Engineer and Java Full-Stack roles.",
  },
  hero: {
    eyebrow: "Hello, I'm",
    name: "Pratham Sinha",
    role: "Software Engineer",
    summary:
      "I build practical software solutions using Java, modern web technologies, cloud services, and AI — turning ideas into reliable digital products.",
    supporting:
      "Focused on backend engineering, full-stack development, and solving real-world problems through technology.",
    primaryCta: { label: "Explore My Work", href: "#projects" },
    secondaryCta: { label: "Let's Connect", href: "#contact" },
    focusAreas: [
      "Backend Engineering",
      "Full-Stack Development",
      "AI Integration",
    ],
  },
  about: {
    intro:
      "I'm a B.Tech graduate in Electronics and Communication Engineering from MIT-WPU, Pune. I enjoy solving problems and building practical software applications across backend development, full-stack engineering, and AI integration.",
    approach:
      "My approach is to understand the problem first, design a practical solution, and build software that is reliable, maintainable, and useful.",
    facts: [
      {
        label: "Education",
        value: "B.Tech — Electronics and Communication Engineering",
      },
      { label: "University", value: "MIT World Peace University, Pune" },
      { label: "Graduation", value: "2026" },
      { label: "Primary focus", value: "Software Engineering" },
    ],
  },
};
