"use client";
import { getProject, projects } from "@/lib/projects";
import { useWindows } from "@/store/windows";
import { setUrl } from "@/lib/url";

export default function ProjectsApp() {
  const slug = useWindows((s) => s.projectSlug);
  const setProject = useWindows((s) => s.setProject);
  const p = getProject(slug) ?? projects[0];
  const index = projects.indexOf(p);
  const next = projects[(index + 1) % projects.length];
  const pad = (n: number) => String(n).padStart(2, "0");

  function goNext() {
    setProject(next.slug);
    setUrl(`/projects/${next.slug}`);
  }

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <span
          className={`border-2 border-line px-2.5 py-0.5 font-mono text-xs font-semibold ${
            p.status === "LIVE" ? "bg-gold text-[#111]" : "bg-panel text-ink"
          }`}
        >
          {p.status}
        </span>
        <button
          data-cursor="NEXT"
          onClick={goNext}
          className="flex min-h-11 items-center gap-2 border-[3px] border-line px-3 font-mono text-xs font-semibold"
        >
          {pad(index + 1)} / {pad(projects.length)} · NEXT: {next.name} →
        </button>
      </div>

      <h2 className="text-[38px] font-black leading-[0.95] tracking-tight">{p.name}</h2>
      <p className="text-[15px] font-medium opacity-85">{p.summary}</p>

      <div className="grid grid-cols-[0.9fr_1.1fr] border-[3px] border-line">
        <div className="border-r-[3px] border-line p-4">
          <h3 className="mb-2 font-mono text-[11px] font-semibold tracking-widest">STACK · ingredients</h3>
          <ul className="list-disc pl-5 text-sm font-medium leading-relaxed">
            {p.stack.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div className="bg-alt p-4">
          <h3 className="mb-2 font-mono text-[11px] font-semibold tracking-widest">
            {p.status === "LIVE" ? "HOW IT WAS BUILT · method" : "THE PLAN · method"}
          </h3>
          <ol className="list-decimal pl-5 text-sm font-medium leading-relaxed">
            {p.method.map((m) => <li key={m}>{m}</li>)}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {p.liveUrl && (
          <a data-cursor="OPEN" href={p.liveUrl} target="_blank" rel="noopener noreferrer"
             className="flex min-h-11 items-center border-[3px] border-line bg-gold px-4 font-mono text-[13px] font-semibold text-[#111]">
            TASTE IT LIVE →
          </a>
        )}
        {p.codeUrl && (
          <a data-cursor="OPEN" href={p.codeUrl} target="_blank" rel="noopener noreferrer"
             className="flex min-h-11 items-center border-[3px] border-line px-4 font-mono text-[13px] font-semibold">
            READ THE CODE
          </a>
        )}
      </div>
    </div>
  );
}