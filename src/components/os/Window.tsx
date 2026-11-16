"use client";
import { useRef } from "react";
import { useWindows, type AppId } from "@/store/windows";

type Props = {
  id: AppId;
  title: string;
  width: number;
  children: React.ReactNode;
};

export default function Window({ id, title, width, children }: Props) {
  const win = useWindows((s) => s.windows[id]);
  const focus = useWindows((s) => s.focus);
  const close = useWindows((s) => s.close);
  const move = useWindows((s) => s.move);
  const drag = useRef<{ sx: number; sy: number; ox: number; oy: number } | null>(null);

  if (!win.open) return null;

  function startDrag(e: React.PointerEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).closest("button")) return; // don't drag from the X
    drag.current = { sx: e.clientX, sy: e.clientY, ox: win.x, oy: win.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function onDrag(e: React.PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    if (!d) return;
    move(id, Math.max(0, d.ox + e.clientX - d.sx), Math.max(0, d.oy + e.clientY - d.sy));
  }

  function endDrag() {
    drag.current = null;
  }

  return (
    <section
      role="dialog"
      aria-label={title}
      tabIndex={-1}
      onPointerDown={() => focus(id)}
      onKeyDown={(e) => e.key === "Escape" && close(id)}
      style={{ left: win.x, top: win.y, zIndex: win.z, width }}
      className="absolute border-[3px] border-line bg-panel shadow-[10px_10px_0_var(--shadow)] outline-none"
    >
      <div
        data-cursor="DRAG"
        onPointerDown={startDrag}
        onPointerMove={onDrag}
        onPointerUp={endDrag}
        className="flex h-[38px] cursor-grab touch-none select-none items-center justify-between border-b-[3px] border-line bg-alt px-3.5 font-mono text-xs font-semibold active:cursor-grabbing"
      >
        <span>{title}</span>
        <button
          data-cursor="CLOSE"
          onClick={() => close(id)}
          aria-label={`Close ${title}`}
          className="h-7 w-7 border-2 border-line bg-panel font-bold"
        >
          X
        </button>
      </div>
      {children}
    </section>
  );
}