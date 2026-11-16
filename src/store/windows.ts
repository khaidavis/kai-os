import { create } from "zustand";

export type AppId = "projects" | "about" | "skills" | "proof";

type Win = { open: boolean; x: number; y: number; z: number };

type WindowState = {
  windows: Record<AppId, Win>;
  top: number; // highest z-index so far
  open: (id: AppId) => void;
  close: (id: AppId) => void;
  toggle: (id: AppId) => void;
  focus: (id: AppId) => void;
  move: (id: AppId, x: number, y: number) => void;
};

export const useWindows = create<WindowState>((set, get) => ({
    windows: {
    projects: { open: true, x: 48, y: 32, z: 1 },
    about: { open: true, x: 700, y: 32, z: 2 },
    skills: { open: false, x: 960, y: 80, z: 0 },
    proof: { open: true, x: 700, y: 470, z: 3 },
  },
  top: 3,

  focus: (id) => {
    if (get().windows[id].z === get().top) return; // already in front
    const top = get().top + 1;
    set((s) => ({ top, windows: { ...s.windows, [id]: { ...s.windows[id], z: top } } }));
  },
  open: (id) => {
    const top = get().top + 1;
    set((s) => ({ top, windows: { ...s.windows, [id]: { ...s.windows[id], open: true, z: top } } }));
  },
  close: (id) =>
    set((s) => ({ windows: { ...s.windows, [id]: { ...s.windows[id], open: false } } })),
  toggle: (id) => (get().windows[id].open ? get().close(id) : get().open(id)),
  move: (id, x, y) =>
    set((s) => ({ windows: { ...s.windows, [id]: { ...s.windows[id], x, y } } })),
}));