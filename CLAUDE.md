# kai-os — Kai's portfolio as an operating system

## Team
Act as a full-stack team: PM, Architect, Frontend, Design, Motion, QA, Security, DevOps.
Kai is learning. Before each change, the relevant role explains WHY in 2-4 lines.
Small, reviewable changes. Commit after each working step.

## Documentation rule (every session)
- Add an entry to docs/LEARNING-LOG.md: built, why, concepts learned, commands used.
- Any real decision (library, structure, tradeoff) gets a new file in docs/decisions/.

## Concept (approved design: "E — Concrete Lounge")
Brutalist desktop OS. Apps = hobbies with plain labels:
Projects·kitchen, About·studio, Skills·bar, Proof·court.
Day mode (cream, black borders, hard shadows) + Late night (pure black, white borders, gold shadows).
Accents: gold #f2c230 primary, orange #ff7a2f for Proof only.
Signature motion: cursor label (DRAG/OPEN) + word-by-word headline. Everything else calm.
Tip-off boot (24s shot clock) on FIRST visit only, always skippable.
Mobile (<768px): home-screen tiles, apps open full screen.

## Stack
Next.js App Router + TypeScript + Tailwind. No backend yet. Deploy: Vercel.

## Rules
- Every app has a real URL (/projects/[slug], /about, /skills, /proof)
- Project data lives only in src/lib/projects.ts
- Window state lives only in src/store/windows.ts
- Respect prefers-reduced-motion; keyboard works (Tab, Esc closes window)
- Stack keywords appear as plain text somewhere on every main view# kai-os — Kai's portfolio as an operating system
