"use client";
import { useEffect } from "react";
import { useWindows, type AppId } from "@/store/windows";
import Window from "./Window";
import Dock from "./Dock";
import CursorLabel from "./CursorLabel";
import ProjectsApp from "@/components/apps/ProjectsApp";
import AboutApp from "@/components/apps/AboutApp";
import SkillsApp from "@/components/apps/SkillsApp";
import ProofApp from "@/components/apps/ProofApp";

export default function Desktop({ app, slug }: { app?: AppId; slug?: string }) {
  const open = useWindows((s) => s.open);
  const setProject = useWindows((s) => s.setProject);
  const projectSlug = useWindows((s) => s.projectSlug);

  // URL → window: open whatever the address asked for
  useEffect(() => {
    if (slug) setProject(slug);
    if (app) open(app);
  }, [app, slug, open, setProject]);

  return (
    <div className="relative h-[calc(100vh-48px)] overflow-hidden">
      <Window id="projects" title={`PROJECTS · kitchen — /projects/${projectSlug}`} width={600}>
        <ProjectsApp />
      </Window>
      <Window id="about" title="ABOUT · studio — /about" width={460}>
        <AboutApp />
      </Window>
      <Window id="skills" title="SKILLS · bar — /skills" width={420}>
        <SkillsApp />
      </Window>
      <Window id="proof" title="PROOF · court — /proof" width={460}>
        <ProofApp />
      </Window>
      <Dock />
      <CursorLabel />
    </div>
  );
}