<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Overview
Next.js 16 App Router portfolio application with React 19, Tailwind CSS v4, and React Compiler enabled.

## Environment & Shell Gotchas
- Windows PowerShell environment: run commands via `npm.cmd` rather than `npm` when calling scripts directly, or execute `npm.cmd run <script>`.
- Keep the `<!-- BEGIN:nextjs-agent-rules -->` block in `AGENTS.md` to avoid uncommitted diff noise when `next dev` runs.

## Commands
- Dev server: `npm.cmd run dev`
- Build: `npm.cmd run build`
- Start: `npm.cmd run start`
- Lint: `npm.cmd run lint` (runs `eslint`)

## Tech Stack & Conventions
- Next.js 16 (App Router in `src/app`)
- React 19 with `reactCompiler: true` set in `next.config.mjs`
- Tailwind CSS v4 via `@tailwindcss/postcss` and `@import "tailwindcss";` in `src/app/globals.css`
- Path alias: `@/*` maps to `./src/*` (configured in `jsconfig.json`)
