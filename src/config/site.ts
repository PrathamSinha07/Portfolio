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
  /** Professional positioning — shown as the hero eyebrow. */
  positioning: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: NavItem[];
  /** Verified personal profiles. */
  socials: SocialLink[];
  resume: {
    label: string;
    href: string;
    fileName: string;
  };
  contact: {
    email: string;
    headline: string;
    subheading: string;
  };
  hero: {
    name: string;
    headline: string[];
    summary: string;
    status: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  about: {
    intro: string;
    approach: string;
    facts: Fact[];
    interests: string[];
  };
  footer: {
    closing: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Pratham Sinha",
  brand: "Pratham Sinha",
  positioning: "AI Engineer · Software Developer · AI Integration",
  meta: {
    title: "Pratham Sinha — AI Engineer & Software Developer",
    description:
      "Portfolio of Pratham Sinha, an AI engineer and software developer building practical applications, backend systems and AI-powered experiences.",
    keywords: [
      "Pratham Sinha",
      "AI Engineer",
      "Software Developer",
      "AI Integration",
      "Java Developer",
      "Spring Boot",
      "Generative AI",
      "Portfolio",
    ],
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    { id: "github", label: "GitHub", href: "https://github.com/PrathamSinha07" },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prathamsinha04/",
    },
  ],
  resume: {
    label: "Resume",
    href: "/resume/Pratham-Sinha-Resume.pdf",
    fileName: "Pratham-Sinha-Resume.pdf",
  },
  contact: {
    email: "pratham.sinha2002@gmail.com",
    headline: "Have an interesting problem to solve?",
    subheading:
      "I'm open to opportunities where I can learn, contribute and build.",
  },
  hero: {
    name: "Pratham Sinha",
    headline: ["Building useful software.", "Exploring intelligent systems."],
    summary:
      "AI & Software Developer building practical applications, backend systems and AI-powered experiences.",
    status: "Open to opportunities",
    primaryCta: { label: "View Projects", href: "#projects" },
    secondaryCta: { label: "Contact", href: "#contact" },
  },
  about: {
    intro:
      "I'm an engineering graduate with an interest in software development and AI integration. I've worked on projects spanning AI-powered applications, backend systems, full-stack development and data analytics.",
    approach:
      "I enjoy understanding problems, experimenting with technology and building solutions that are practical and functional.",
    facts: [
      {
        label: "Education",
        value: "B.Tech — Electronics and Communication Engineering",
      },
      { label: "University", value: "MIT World Peace University, Pune" },
      { label: "Graduation", value: "July 2026" },
      { label: "Experience", value: "Intern, Canspirit.ai — 2025" },
    ],
    interests: [
      "Artificial intelligence",
      "Software engineering",
      "Application development",
    ],
  },
  footer: {
    closing: "Designed and built with care — always learning, always building.",
  },
};
