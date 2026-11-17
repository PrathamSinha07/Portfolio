export type Project = {
  slug: string;
  name: string;
  category: string;
  technologies: string[];
  description: string;
  /** Optional external links — only set when a real, working URL exists. */
  liveUrl?: string;
  githubUrl?: string;
};

/**
 * Ordered exactly as it should appear in the portfolio.
 * Detailed cards are built in a later milestone.
 */
export const projects: Project[] = [
  {
    slug: "agro-assist",
    name: "Agro-Assist",
    category: "AI-powered multilingual farming assistant",
    technologies: ["Java", "Spring Boot", "Gemini API"],
    description:
      "An AI-powered farming assistant designed to provide agricultural information in multiple Indian languages.",
  },
  {
    slug: "shri-sai-vatika",
    name: "Shri Sai Vatika",
    category: "Client website and booking management",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    description:
      "A deployed website for a banquet venue featuring venue information, booking enquiries, availability handling, and an admin dashboard.",
    liveUrl: "https://shri-sai-vatika-website.vercel.app/",
  },
  {
    slug: "placement-tracker-ai",
    name: "Placement Tracker AI",
    category: "AI-powered placement management platform",
    technologies: [
      "Next.js",
      "AWS Lambda",
      "DynamoDB",
      "S3",
      "Gemini API",
      "Firebase Authentication",
    ],
    description:
      "A platform for tracking job applications, managing resumes, and generating AI-powered company summaries and interview preparation notes.",
  },
];
