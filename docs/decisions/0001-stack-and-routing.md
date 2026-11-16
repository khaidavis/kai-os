# 0001 — Next.js App Router, one URL per app

Date: 2026-11-15 · Status: Accepted

## Context
Portfolio is an OS-style desktop. OS-style sites often live on one URL,
which breaks sharing links and search.

## Decision
Next.js App Router. Each app is a real route (/projects/cleb, /about...).
The desktop opens the matching window when you land on a route.

## Consequences
+ Can send a recruiter a direct link to one project
+ Search engines can index each project
- Window manager must sync with the URL (a bit more work)