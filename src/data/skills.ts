export type SkillCategory = {
  id: string;
  label: string;
  /** Plain technology names — no proficiency levels are implied. */
  skills: string[];
};

/**
 * Initial data foundation. Visual treatment is applied in a later milestone.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Spring Boot", "REST APIs", "Spring Data JPA"],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: ["PostgreSQL", "DynamoDB"],
  },
  {
    id: "cloud-tools",
    label: "Cloud and Tools",
    skills: ["AWS", "Docker", "Git", "GitHub", "Postman"],
  },
  {
    id: "ai",
    label: "AI",
    skills: ["Gemini API", "LLM Integration", "Prompt Engineering"],
  },
];
