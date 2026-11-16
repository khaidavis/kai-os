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