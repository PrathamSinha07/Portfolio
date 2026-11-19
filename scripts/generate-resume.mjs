/**
 * Generates public/resume/Pratham-Sinha-Resume.pdf — a dependency-free,
 * single-source resume built from the same verified profile data shown on
 * the site. Run with: npm run resume
 *
 * The output is a plain PDF 1.4 file using the base-14 Helvetica fonts, so
 * it renders in every PDF reader without embedded font data.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public", "resume", "Pratham-Sinha-Resume.pdf");

/* ---------------------------------------------------------------- page -- */

const PAGE_W = 612; // US Letter
const PAGE_H = 792;
const MARGIN_X = 54;
const TOP_Y = 738;
const BOTTOM_Y = 56;

const INK = "0.098 0.094 0.075 rg"; // #191813
const MUTED = "0.333 0.325 0.290 rg"; // #55534A
const FAINT = "0.435 0.424 0.369 rg"; // #6F6C5E
const ACCENT = "0.337 0.478 0.051 rg"; // #567A0D
const RULE = "0.890 0.874 0.820 RG"; // #E3DFD1

const AVG_W = { F1: 0.5, F2: 0.53, F3: 0.5 };

/** PDF string escaping + WinAnsi-safe coercion (ASCII only in this resume). */
function esc(str) {
  const ascii = str
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\u2022/g, "-")
    .replace(/[^\x20-\x7e]/g, "");
  return ascii.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function widthOf(str, size, font) {
  return str.length * size * (AVG_W[font] ?? 0.5);
}

/** Naive but effective word wrap for the fixed page width. */
function wrap(str, size, font, maxWidth) {
  const words = str.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (widthOf(next, size, font) > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/* ------------------------------------------------------------ layout -- */

const pages = [];
let ops = [];
let y = TOP_Y;

function newPage() {
  pages.push(ops);
  ops = [];
  y = TOP_Y;
}

function ensure(space) {
  if (y - space < BOTTOM_Y) newPage();
}

/** Draws one line; `after` is the gap left below the baseline. */
function line(str, { font = "F1", size = 10, color = INK, x = MARGIN_X, after = 0 } = {}) {
  ensure(size + after + 2);
  y -= size;
  ops.push(
    `BT /${font} ${size} Tf ${color} 1 0 0 1 ${x} ${y} Tm (${esc(str)}) Tj ET`,
  );
  y -= after;
}

/** Draws a wrapped paragraph; returns the space consumed. */
function paragraph(str, { font = "F1", size = 9.5, color = MUTED, x = MARGIN_X, after = 8, leading = null, width = null } = {}) {
  const max = width ?? PAGE_W - MARGIN_X * 2;
  const lead = leading ?? size + 3;
  const lines = wrap(str, size, font, max);
  for (const text of lines) {
    ensure(lead + 2);
    y -= lead;
    ops.push(
      `BT /${font} ${size} Tf ${color} 1 0 0 1 ${x} ${y} Tm (${esc(text)}) Tj ET`,
    );
  }
  y -= after;
  return lines.length * lead + after;
}

function rule({ after = 10, color = RULE, weight = 0.75 } = {}) {
  ensure(after + 4);
  const yPos = y - 3;
  ops.push(
    `${color} RG ${weight} w ${MARGIN_X} ${yPos} m ${PAGE_W - MARGIN_X} ${yPos} l S`,
  );
  y -= after;
}

/** Section heading: uppercase label with a short lime rule above it. */
function heading(label) {
  ensure(34);
  y -= 4;
  ops.push(
    `${ACCENT} RG 2 w ${MARGIN_X} ${y} m ${MARGIN_X + 22} ${y} l S`,
  );
  y -= 12;
  line(label.toUpperCase(), { font: "F2", size: 10, color: INK, after: 7 });
}

/** Bullet with a small lime square marker. */
function bullet(str, { size = 9.5, color = MUTED, after = 3 } = {}) {
  const lines = wrap(str, size, "F1", PAGE_W - MARGIN_X * 2 - 14);
  const total = lines.length * (size + 3) + after;
  ensure(total + 2);
  const markerY = y - (size + 3) + 3;
  ops.push(`${ACCENT} rg ${MARGIN_X + 1} ${markerY} 3.5 3.5 re f`);
  for (const text of lines) {
    y -= size + 3;
    ops.push(
      `BT /F1 ${size} Tf ${color} 1 0 0 1 ${MARGIN_X + 14} ${y} Tm (${esc(text)}) Tj ET`,
    );
  }
  y -= after;
}

/* ------------------------------------------------------------ content -- */

// Masthead
line("PRATHAM SINHA", { font: "F2", size: 23, color: INK, after: 5 });
line("AI Engineer  |  Software Developer  |  AI Integration", {
  font: "F3",
  size: 11,
  color: ACCENT,
  after: 5,
});
line(
  "pratham.sinha2002@gmail.com   |   linkedin.com/in/prathamsinha04   |   github.com/PrathamSinha07",
  { font: "F1", size: 8.5, color: FAINT, after: 4 },
);
rule({ after: 12 });

// Summary
heading("Summary");
paragraph(
  "Engineering graduate focused on building practical software, AI-powered applications, backend systems and digital experiences. Interested in the full path from understanding a problem to shipping a working product, with hands-on work across Java backends, generative AI integration, full-stack development and data analytics.",
  { after: 10 },
);

// Education
heading("Education");
line("B.Tech, Electronics and Communication Engineering", {
  font: "F2",
  size: 10.5,
  color: INK,
  after: 3,
});
line("MIT World Peace University, Pune   |   Graduated July 2026", {
  font: "F1",
  size: 9.5,
  color: MUTED,
  after: 10,
});

// Experience
heading("Experience");
line("Canspirit.ai  -  Intern", { font: "F2", size: 10.5, color: INK, after: 3 });
line("January 2025 - July 2025", { font: "F1", size: 9, color: FAINT, after: 5 });
bullet(
  "Contributed to a no-code Web-to-Print platform using Magento and CloudLab.",
);
bullet(
  "Developed a dynamic Excel-based pricing engine for multiple product categories using competitor pricing data and pricing logic.",
);
bullet("Worked with competitor pricing data and pricing formulas.", {
  after: 10,
});

// Projects
heading("Projects");

const projects = [
  {
    name: "Agro-Assist",
    meta: "Multilingual AI farming assistant",
    stack: "Java, Spring Boot, REST APIs, Gemini API, SQL",
    description:
      "Uses AI to help identify crop diseases and provide farming recommendations through a multilingual interface.",
  },
  {
    name: "Smart Delivery Tracking System",
    meta: "Shipment management and tracking",
    stack: "Java, Spring Boot, PostgreSQL",
    description:
      "Backend-focused application with structured database design, delivery status workflows and APIs.",
  },
  {
    name: "AI Placement & Career Tracker",
    meta: "Job application and recruitment pipeline platform",
    stack: "Next.js, React, TypeScript, AWS Lambda, API Gateway, DynamoDB, Firebase",
    description:
      "Full-stack platform to track job applications and manage the recruitment pipeline.",
  },
  {
    name: "Food Delivery Analytics",
    meta: "Data analytics and reporting",
    stack: "Python, Pandas, PostgreSQL, SQL, Power BI",
    description:
      "Explores food delivery data, revenue, order trends and performance through SQL, Python and dashboards.",
  },
];

for (const project of projects) {
  line(`${project.name}  -  ${project.meta}`, {
    font: "F2",
    size: 10,
    color: INK,
    after: 2,
  });
  line(project.stack, { font: "F3", size: 8.5, color: ACCENT, after: 2 });
  paragraph(project.description, { size: 9, color: MUTED, after: 8 });
}

// Skills
heading("Skills");

const skillGroups = [
  ["Programming", "Java, Python, JavaScript, SQL, HTML, CSS"],
  [
    "AI & Generative AI",
    "Generative AI, LLMs, Prompt Engineering, Gemini API, RAG, Embeddings, Semantic Search, MCP, AI Agents, Machine Learning Fundamentals",
  ],
  ["Backend", "Spring Boot, Spring Data JPA, REST APIs, API Integration"],
  ["Databases", "PostgreSQL, MySQL, DynamoDB"],
  ["Frontend", "HTML, CSS, JavaScript, React, Next.js"],
  ["Cloud & Tools", "AWS Lambda, API Gateway, Firebase, Git, GitHub, Maven, Postman"],
];

for (const [label, items] of skillGroups) {
  ensure(24);
  const labelWidth = 96;
  const lines = wrap(items, 9, "F1", PAGE_W - MARGIN_X * 2 - labelWidth);
  const total = lines.length * 12 + 4;
  ensure(total + 2);
  const startY = y;
  line(label, { font: "F2", size: 9, color: INK, x: MARGIN_X, after: 0 });
  const savedY = y;
  y = startY; // draw items from the same top line
  for (const text of lines) {
    y -= 12;
    ops.push(
      `BT /F1 9 Tf ${MUTED} 1 0 0 1 ${MARGIN_X + labelWidth} ${y} Tm (${esc(text)}) Tj ET`,
    );
  }
  y = Math.min(savedY, y) - 4;
}

newPage(); // flush the final page

/* ------------------------------------------------------------- write -- */

let objects = [];

function addObject(body) {
  objects.push(body);
  return objects.length; // 1-based object number
}

const catalogId = addObject(""); // placeholder, filled below
const pagesId = addObject(""); // placeholder, filled below
const fontRegularId = addObject(
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
);
const fontBoldId = addObject(
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
);
const fontItalicId = addObject(
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>",
);

const kids = [];
for (const pageOps of pages) {
  const stream = pageOps.join("\n");
  const contentId = addObject(
    `<< /Length ${Buffer.byteLength(stream, "latin1")} >>\nstream\n${stream}\nendstream`,
  );
  const pageId = addObject(
    `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] ` +
      `/Resources << /Font << /F1 ${fontRegularId} 0 R /F2 ${fontBoldId} 0 R /F3 ${fontItalicId} 0 R >> >> ` +
      `/Contents ${contentId} 0 R >>`,
  );
  kids.push(pageId);
}

objects[catalogId - 1] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;
objects[pagesId - 1] = `<< /Type /Pages /Kids [${kids.map((id) => `${id} 0 R`).join(" ")}] /Count ${kids.length} >>`;

/* --------------------------------------------------------------- emit -- */

let pdf = "%PDF-1.4\n%\xe2\xe3\xcf\xd3\n";
const offsets = [0];

for (let i = 0; i < objects.length; i += 1) {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
}

const xrefOffset = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let i = 1; i <= objects.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\n`;
pdf += `startxref\n${xrefOffset}\n%%EOF\n`;

mkdirSync(path.dirname(OUT), { recursive: true });
writeFileSync(OUT, Buffer.from(pdf, "latin1"));
console.log(
  `Wrote ${path.relative(ROOT, OUT)} (${pages.length} page${pages.length === 1 ? "" : "s"}, ${Buffer.byteLength(pdf, "latin1")} bytes)`,
);
