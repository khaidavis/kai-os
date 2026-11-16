# Learning Log

## Session 1 — 2026-11-15 · Design + new Windows machine setup

**Built**
- 5 design directions on a canvas → chose E (Concrete Lounge) + black late-night mode
- Interactive prototypes: draggable windows, cursor label, mixer, tip-off boot, mobile
- Set up new Windows dev machine; scaffolded Next.js app `kai-os`

**Why**
- Explored designs visually before coding: cheap to change a design, expensive to change code
- Team + recruiter review → 7 fixes (URLs, mobile, plain labels, calmer motion,
  resume/contact, CLEB demo logins, proof over counts)

**Concepts learned**
- Concept vs aesthetic are separate axes (D = idea, B = look → E combines them)
- UI = function of state (night: true/false swaps the whole palette)
- Drag = pointer down (remember start) → move (add the change) → up (release)
- ADRs: write down WHY a decision was made, not just what
- PATH = list of folders Windows searches for commands; terminals copy it on open → restart after installs
- User vs Machine PATH; add with [Environment]::SetEnvironmentVariable, not setx
- PowerShell execution policy blocks scripts like npx.ps1 → RemoteSigned for CurrentUser

**Commands**
- `winget install OpenJS.NodeJS.LTS` / `Git.Git` — install tools
- `git config --global user.name/user.email` — identity on every commit (match GitHub)
- `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` — allow local scripts
- `npx create-next-app@latest kai-os ...` — scaffold the app
- `npm run dev` — run locally at localhost:3000

**Next**
- Menu bar + day/night toggle (first real component)

## Session 2 — 2026-11-15 · Menu bar + day/night theme

**Built**
- MenuBar component (KAI OS block, tagline, Resume link)
- ThemeToggle: switches day ↔ late night, remembers choice
- Fonts via next/font (Archivo + IBM Plex Mono)
- VS Code Tailwind settings

**Why**
- Theme as CSS variables → one attribute flip recolors the whole site, no React re-render
- Head script sets theme before paint → no white flash for night-mode visitors
- Fonts bundled at build → no waiting on Google Fonts

**Concepts learned**
- CSS variables (`--bg`, `--ink`) + `[data-theme="night"]` override
- Tailwind v4 `@theme inline` turns variables into classes (`bg-panel`, `text-ink`)
- Server components (default, no JS shipped) vs client components (`"use client"`, for clicks/state)
- `useState` + `useEffect`: read the theme once after the page loads
- `localStorage` saves small preferences in the browser
- Editor warnings ≠ build errors

**Commands**
- `mkdir` / `New-Item` — create folders/files in PowerShell
- `git log --oneline` — view commit history

**Next**
- projects.ts (data file), then the Window component

“Union types + optional fields (?) — TypeScript catches bad data before runtime.”