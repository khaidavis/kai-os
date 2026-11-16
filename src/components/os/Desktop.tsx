"use client";
import Window from "./Window";
import ProjectsApp from "@/components/apps/ProjectsApp";

export default function Desktop() {
  return (
    <div className="relative h-[calc(100vh-48px)] overflow-hidden">
      <Window id="projects" title="PROJECTS · kitchen — /projects/cleb" width={600}>
        <ProjectsApp />
      </Window>
    </div>
  );
}