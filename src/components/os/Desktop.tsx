"use client";
import Window from "./Window";
import Dock from "./Dock";
import ProjectsApp from "@/components/apps/ProjectsApp";
import AboutApp from "@/components/apps/AboutApp";
import SkillsApp from "@/components/apps/SkillsApp";
import ProofApp from "@/components/apps/ProofApp";

export default function Desktop() {
  return (
    <div className="relative h-[calc(100vh-48px)] overflow-hidden">
      <Window id="projects" title="PROJECTS · kitchen — /projects/cleb" width={600}>
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
    </div>
  );
}