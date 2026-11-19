export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  /** Duration exactly as supported by the resume. */
  duration: string;
  location: string;
  /** Resume-supported responsibilities only — nothing is inferred. */
  responsibilities: string[];
};

export type EducationEntry = {
  id: string;
  degree: string;
  school: string;
  detail: string;
};

/**
 * Centralised experience data. Every line here also appears on the generated
 * resume, so the site and the PDF never disagree.
 */
export const experienceEntries: ExperienceEntry[] = [
  {
    id: "canspirit-ai-intern",
    role: "Intern",
    company: "Canspirit.ai",
    duration: "January 2025 – July 2025",
    location: "Pune, India",
    responsibilities: [
      "Contributed to a no-code Web-to-Print platform using Magento and CloudLab.",
      "Developed a data-driven dynamic pricing engine in MS Excel covering 5+ product categories.",
      "Researched competitor pricing and refined pricing formulas.",
      "Used AI applications to support pricing-related workflows.",
    ],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    id: "btech-ece",
    degree: "B.Tech, Electronics and Communication Engineering",
    school: "MIT World Peace University, Pune",
    detail: "Graduated July 2026",
  },
];
