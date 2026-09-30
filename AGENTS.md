# AGENTS.md

Single-package, statically generated portfolio for Ángeles Bocharán, Lead Product Designer. No monorepo, automated tests, lint script, or CI.

## Stack

- Astro `^7.3.4` + Tailwind CSS `^4.3.3` + TypeScript (strict via `astro/tsconfigs/strict`). Images are processed with `astro:assets` and Sharp.
- Tailwind v4 is wired via `@tailwindcss/vite` in `astro.config.mjs` plus `@import 'tailwindcss'` in `src/styles/global.css`. There is no `tailwind.config.js` — do not add one or the Astro Tailwind integration.
- Pages import `src/styles/global.css` explicitly in frontmatter using the appropriate relative path; layouts do not import it.

## Commands

- Requires Node `>=22.12.0`, pnpm only (`pnpm-lock.yaml` committed).
- `pnpm-workspace.yaml` allows dependency build scripts for `esbuild` and `sharp`; it does not define a multi-package workspace.
- `pnpm install` — install
- `pnpm dev` — dev server at `localhost:4321`
- `pnpm build` / `pnpm preview` — build to `dist/` / preview build
- `pnpm astro check` — Astro diagnostics; `@astrojs/check` and `typescript` are not currently declared, so this command may prompt to install them. No `check`/`lint`/`test` scripts exist.
- `pnpm exec prettier --write <files>` — format changed files (no format script; config in `.prettierrc`: two spaces, no semicolons, single quotes, `prettier-plugin-astro` + `prettier-plugin-tailwindcss`).
- `pnpm exec prettier --check <files>` — verify formatting. Use `pnpm build` to verify application changes; a build is not a substitute for typechecking.

Run dev server in background:

```sh
pnpm exec astro dev --background
```

Manage with `pnpm exec astro dev status`, `pnpm exec astro dev logs`, `pnpm exec astro dev stop`.

## Project structure

- `src/pages/index.astro` composes the home, experience, projects, education, and skills sections from typed data.
- `src/pages/projects/[id].astro` generates a detail page for each entry in `src/data/projects.ts` via `getStaticPaths`; project IDs are URL slugs.
- `src/pages/404.astro` is a standalone error page with its own document markup.
- `src/layouts/BaseLayout.astro` owns the shared document, metadata, favicons, skip link, navbar, and footer. `ProjectLayout.astro` wraps project details in `BaseLayout`.
- `src/components/` contains section components, reusable items/cards, `SectionHeading`, navigation, footer, and SVG icon components under `icons/`.
- `src/data/` is the source of portfolio content: `profile`, `experience`, `projects`, `education`, `skills`, `navigation`, and `socials`. Edit these typed modules for content changes.
- `src/assets/` contains the portrait and project screenshots imported into source code. `public/` contains directly served static assets, including favicons and `robots.txt`.

## Conventions

- `src/pages/*.astro|*.md` is file-based routing; `public/` is static output; `dist/` and `.astro/` are generated and gitignored.
- Use the existing aliases: `@components/*` → `src/components/*` and `@layouts/*` → `src/layouts/*`. Data, styles, and assets use relative imports.
- Astro components use a frontmatter `Props` interface and `Astro.props`. Keep content in data modules and presentation in components/layouts.
- Project images use imported `ImageMetadata`, descriptive alt text, and Astro's `Image` component with responsive widths and WebP output. Each project's `images` field is a two-image tuple. Projects are ordered newest first, with ongoing work first; `websiteUrl` is optional.
- Project dates use the optional `date` property as display text (for example, `2024 - Present` or `June 2024`). Render it directly without date parsing; the detail layout shows `Dates to be added.` when it is missing or empty.
- Navigation hashes in `src/data/navigation.ts` must match section IDs. `Navbar.astro` handles scrollspy and scroll state with browser JavaScript; it is bottom-docked on mobile and sticky at the top on desktop. Global CSS reserves mobile bottom space and handles scroll offsets, reduced motion, and focus outlines.
- Styling uses Tailwind utilities with a neutral palette, rounded cards, and responsive layouts; scoped CSS handles navbar state changes. Preserve semantic headings, accessible labels, keyboard focus, and reduced-motion support.
- Full docs: https://docs.astro.build — check the routing guide before adding pages, dynamic routes, or middleware: https://docs.astro.build/en/guides/routing/
