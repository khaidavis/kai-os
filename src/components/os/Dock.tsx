"use client";
import { useWindows, type AppId } from "@/store/windows";

const apps: { id: AppId; label: string; hobby: string; onClass: string }[] = [
  { id: "projects", label: "Projects", hobby: "kitchen", onClass: "bg-gold text-[#111]" },
  { id: "about", label: "About", hobby: "studio", onClass: "bg-gold text-[#111]" },
  { id: "skills", label: "Skills", hobby: "bar", onClass: "bg-gold text-[#111]" },
  { id: "proof", label: "Proof", hobby: "court", onClass: "bg-orange text-[#111]" },
];

export default function Dock() {
  const windows = useWindows((s) => s.windows);
  const toggle = useWindows((s) => s.toggle);

  return (
    <nav
      aria-label="Dock"
      className="fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 border-[3px] border-line bg-panel shadow-[6px_6px_0_var(--shadow)]"
    >
      {apps.map((a, i) => {
        const open = windows[a.id].open;
        return (
          <button
            key={a.id}
            onClick={() => toggle(a.id)}
            aria-pressed={open}
            className={`flex h-[70px] w-[92px] flex-col items-center justify-center gap-0.5 ${
              i > 0 ? "border-l-[3px] border-line" : ""
            } ${open ? a.onClass : "bg-panel text-ink"}`}
          >
            <span className="text-sm font-black">{a.label}</span>
            <span className="font-mono text-[11px] font-semibold opacity-85">{a.hobby}</span>
          </button>
        );
      })}
    </nav>
  );
}