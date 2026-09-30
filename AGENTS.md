# AGENTS.md

Single-package Astro site. No monorepo, tests, lint script, or CI.

## Stack

- Astro `^7` + Tailwind CSS `^4` + TypeScript (strict via `astro/tsconfigs/strict`).
- Tailwind v4 is wired via `@tailwindcss/vite` in `astro.config.mjs` plus `@import 'tailwindcss'` in `src/styles/global.css`. There is no `tailwind.config.js` — do not add one or the Astro Tailwind integration.
- Pages import global CSS explicitly in frontmatter: `import '../styles/global.css'`.

## Commands

- Requires Node `>=22.12.0`, pnpm only (`pnpm-lock.yaml` committed).
- `pnpm install` — install
- `pnpm dev` — dev server at `localhost:4321`
- `pnpm build` / `pnpm preview` — build to `dist/` / preview build
- `pnpm astro check` — closest thing to typecheck (no `check`/`lint`/`test` scripts exist)
- `pnpm exec prettier --write <files>` — format (no format script; config in `.prettierrc`: no semicolons, single quotes, `prettier-plugin-astro` + `prettier-plugin-tailwindcss`)

Run dev server in background:

```sh
astro dev --background
```

Manage with `astro dev status`, `astro dev logs`, `astro dev stop`.

## Conventions

- `src/pages/*.astro|*.md` is file-based routing; `public/` is static output; `dist/` and `.astro/` are generated and gitignored.
- `tsconfig.json` defines `@components/*` → `src/components/*` and `@layouts/*` → `src/layouts/*`, but those directories do not exist yet — create them before using the aliases.
- Full docs: https://docs.astro.build — check the routing guide before adding pages, dynamic routes, or middleware: https://docs.astro.build/en/guides/routing/
