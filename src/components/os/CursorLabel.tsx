"use client";
import { useEffect, useRef, useState } from "react";

export default function CursorLabel() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (e.pointerType !== "mouse") return; // no fake cursor on touch screens
      const el = ref.current;
      if (el) el.style.transform = `translate(${e.clientX + 14}px, ${e.clientY + 14}px)`;
      const target = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[100] rounded-full border-2 border-[#111] bg-gold px-3 py-1.5 font-mono text-xs font-semibold tracking-wider text-[#111] transition-opacity duration-150 ${
        label ? "opacity-100" : "opacity-0"
      }`}
    >
      {label}
    </div>
  );
}