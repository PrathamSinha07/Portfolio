export type ProjectImage = {
  /**
   * Public path inside /images/projects/<project-slug>/,
   * e.g. /images/projects/agro-assist/sign-in.webp
   */
  src: string;
  /** Short caption shown under the preview. */
  label: string;
  /** Descriptive alt text — screenshots are always explained. */
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  /** Two-digit editorial index. */
  number: string;
  name: string;
  category: string;
  stack: string[];
  description: string;
  /** Verified highlights drawn from the repository documentation. */
  highlights: string[];
  githubUrl: string;
  /** Only set where the deployment was verified to respond. */
  liveUrl?: string;
  /** Genuine screenshot, shown inside a browser-style plate. */
  image?: ProjectImage;
  /**
   * Custom visual used when a repository contains no screenshots. It only
   * illustrates documented behaviour — nothing is invented.
   */
  visual?: "delivery-flow";
  /** Rendering treatment so each row feels distinct. */
  layout: "featured" | "split" | "wide";
};

/**
 * Ordered exactly as it should appear in the portfolio.
 * Links, screenshots and highlights are verified against the repositories.
 */
export const projects: Project[] = [
  {
    slug: "agro-assist",
    number: "01",
    name: "Agro-Assist",
    category: "Multilingual AI Farming Assistant",
    stack: ["Java", "Spring Boot", "REST APIs", "Gemini API", "SQL"],
    description:
      "A multilingual AI-powered farming assistant that uses AI to help identify crop diseases and provide farming recommendations.",
    highlights: [
      "Spring Boot backend proxies every Gemini API call, keeping the API key server-side",
      "Crop diagnosis returned as structured JSON — status, disease, cause and remedy",
      "Remedies delivered in English, Hindi, Marathi, Bengali and Odia",
      "Containerised with Docker and deployed as a live web application",
    ],
    githubUrl: "https://github.com/PrathamSinha07/Agro-Assist-",
    liveUrl: "https://agro-assist-5nt3.onrender.com",
    image: {
      src: "/images/projects/agro-assist/sign-in.webp",
      label: "Deployed app — sign-in screen",
      alt: "Sign-in screen of the deployed Agro Assist application, branded in green with the tagline AI-Powered Crop Pathology & Sustainable Agriculture.",
      width: 1440,
      height: 900,
    },
    layout: "featured",
  },
  {
    slug: "smart-delivery",
    number: "02",
    name: "Smart Delivery Tracking System",
    category: "Logistics Tracking & Analytics",
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript"],
    description:
      "A shipment tracking system pairing a Spring Boot and PostgreSQL API with a React dashboard for order management, status workflows and delivery analytics.",
    highlights: [
      "Status timeline following each shipment from Order Placed to Delivered",
      "REST endpoints for shipment lookup, shipment lists and dashboard analytics",
      "Spring Data JPA over PostgreSQL for structured shipment records",
      "React dashboard with search, sorting, pagination and status filtering",
    ],
    githubUrl: "https://github.com/PrathamSinha07/Smart-Delivery-Tracking-System",
    liveUrl: "https://deliverytracking.vercel.app/",
    visual: "delivery-flow",
    layout: "split",
  },
  {
    slug: "placement-tracker",
    number: "03",
    name: "AI Placement & Career Tracker",
    category: "Job Application & Recruitment Pipeline",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "Firebase",
    ],
    description:
      "A full-stack platform to track job applications and manage the recruitment pipeline.",
    highlights: [
      "Applications tracked across five pipeline stages, from applied to offer",
      "Serverless backend — AWS Lambda functions behind API Gateway",
      "DynamoDB for application data with Firebase authentication",
      "Typed Next.js frontend built with React and TypeScript",
    ],
    githubUrl: "https://github.com/PrathamSinha07/Placement-tracker-AI",
    liveUrl: "https://placement-tracker-ai-xi.vercel.app",
    image: {
      src: "/images/projects/placement-tracker-ai/sign-in-card.webp",
      label: "Deployed app — sign-in screen",
      alt: "Sign-in screen of the deployed Placement Tracker application, with a dark theme and the message Sign in to manage your placement tracks.",
      width: 700,
      height: 560,
    },
    layout: "split",
  },
  {
    slug: "food-delivery-analytics",
    number: "04",
    name: "Food Delivery Analytics",
    category: "Data Analytics & Reporting",
    stack: ["Python", "Pandas", "PostgreSQL", "SQL", "Power BI"],
    description:
      "A data analytics project exploring food delivery data, revenue, order trends and performance through SQL, Python and dashboards.",
    highlights: [
      "Data cleaned and prepared with Python and Pandas",
      "Relational analysis in PostgreSQL using SQL joins and aggregations",
      "Interactive Power BI dashboard covering revenue, order status and city trends",
    ],
    githubUrl: "https://github.com/PrathamSinha07/Food-Delivery-Analytics-Project",
    image: {
      src: "/images/projects/food-delivery-analytics/dashboard.png",
      label: "Power BI — final dashboard",
      alt: "Power BI dashboard for the food delivery analytics project showing revenue, order status distribution, city-level performance and order trends over time.",
      width: 1317,
      height: 722,
    },
    layout: "wide",
  },
];
