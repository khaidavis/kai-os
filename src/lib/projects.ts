export type ProjectStatus = "LIVE" | "BUILDING" | "PLANNED";

export type Project = {
  slug: string;          // used in the URL: /projects/cleb
  name: string;
  status: ProjectStatus;
  summary: string;       // one plain sentence a recruiter understands
  stack: string[];       // shown as "ingredients" + used by the mixer
  method: string[];      // how it was built (or the plan)
  liveUrl?: string;      // ? = optional (not every project is live)
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "cleb",
    name: "Campus Lab & Equipment Booking",
    status: "LIVE",
    summary: "Book labs and equipment, with a two-step approval flow for students, technicians and admins.",
    stack: ["Java 21", "Spring Boot 3", "PostgreSQL 16", "Spring Security", "JWT", "Next.js", "Docker"],
    method: ["Database and data model", "REST API", "Hashing, tokens, roles", "Frontend", "Tests and CI", "Deployed live"],
    liveUrl: "https://cleb-nu.vercel.app",
    codeUrl: "https://github.com/khaidavis/CLEB",
  },
  {
    slug: "kaliflower",
    name: "Kaliflower Ordering",
    status: "BUILDING",
    summary: "Online ordering and payments for a Kingston catering business.",
    stack: ["Java 21", "Spring Boot 3", "PostgreSQL 16", "Next.js", "Stripe"],
    method: ["Fork the shared foundation", "Menu and ordering", "Test-mode payments", "Deploy live"],
  },
  {
    slug: "rag-lab",
    name: "RAG Lab",
    status: "PLANNED",
    summary: "Upload documents, ask questions, and get answers that cite their sources.",
    stack: ["Python", "LLM", "Vector search"],
    method: ["Upload documents", "Ask questions", "Answer with sources"],
  },
  {
    slug: "systems",
    name: "systems/",
    status: "PLANNED",
    summary: "A from-scratch HTTP server or key-value store, built to show low-level CS depth.",
    stack: ["C", "Sockets", "Low-level I/O"],
    method: ["Pick: HTTP server or key-value store", "Build it from scratch", "Benchmark it"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}