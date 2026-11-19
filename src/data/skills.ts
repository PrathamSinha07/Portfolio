export type SkillIcon =
  | "code"
  | "sparkles"
  | "brain"
  | "server"
  | "database"
  | "cloud";

export type SkillCategory = {
  id: string;
  label: string;
  /** Restrained category glyph — rendered from a small inline icon set. */
  icon: SkillIcon;
  /** AI and backend categories are visually prominent. */
  emphasis?: boolean;
  /** Plain technology names — no proficiency levels are implied. */
  skills: string[];
};

/**
 * Centralised skills data. Display order is the editorial order.
 * No percentages, ratings or experience levels are recorded anywhere.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    icon: "code",
    skills: ["Java", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    id: "genai-llms",
    label: "Generative AI and LLMs",
    icon: "sparkles",
    emphasis: true,
    skills: [
      "Large Language Models (LLMs)",
      "Generative AI",
      "Prompt Engineering",
      "Gemini API",
      "Multimodal AI",
      "AI Application Integration",
    ],
  },
  {
    id: "ai-concepts",
    label: "AI Concepts",
    icon: "brain",
    emphasis: true,
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "Embeddings",
      "Semantic Search",
      "Model Context Protocol (MCP)",
      "AI Agents",
      "Machine Learning Fundamentals",
    ],
  },
  {
    id: "backend",
    label: "Backend Development",
    icon: "server",
    emphasis: true,
    skills: ["Spring Boot", "Spring Data JPA", "RESTful APIs", "API Integration"],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "DynamoDB"],
  },
  {
    id: "cloud-tools",
    label: "Cloud and Developer Tools",
    icon: "cloud",
    skills: [
      "AWS Lambda",
      "API Gateway",
      "Firebase",
      "Git",
      "GitHub",
      "Maven",
      "Postman",
    ],
  },
];
