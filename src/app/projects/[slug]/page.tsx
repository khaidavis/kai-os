import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OsShell from "@/components/os/OsShell";
import { getProject, projects } from "@/lib/projects";

type Params = { params: Promise<{ slug: string }> };

// Pre-build one page per project at build time
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Each project gets its own tab title + share preview text
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return p ? { title: `${p.name} — Kai OS`, description: p.summary } : {};
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();
  return <OsShell app="projects" slug={slug} />;
}
