# Ángeles Bocharán — UX/UI Design Portfolio

Personal portfolio of **Ángeles Bocharán, Lead Product Designer**, showcasing her work in UX/UI, visual design, and design systems. The site presents her approach to creating clear, user-centred digital experiences that balance user needs with business goals.

## What's inside

- **Profile:** an introduction to Ángeles and her design practice.
- **Experience:** professional roles, design leadership, and collaboration with multidisciplinary teams.
- **Projects:** selected work across mobile apps, TV platforms, and design systems, with dedicated pages describing each project, her role, dates, and visual showcases.
- **Education and skills:** her background, product design capabilities, tools, and languages.
- **Contact links:** ways to connect through the site's social links.

Featured projects include PRADO, MutuaCity, MutuaMás, Colkie, UEFA Euro 2020, and XStream.

## Built with

- **Astro 7** for statically generated pages.
- **Tailwind CSS 4** for responsive styling.
- **TypeScript** for typed portfolio content.
- **Astro assets and Sharp** for responsive, optimized images.

The site includes mobile bottom-docked navigation, section-aware navigation, keyboard focus styles, a skip-to-content link, and reduced-motion support.

## Local development

Requires **Node.js 22.12.0 or newer** and **pnpm**.

```sh
pnpm install
pnpm dev
```

Open [localhost:4321](http://localhost:4321) to view the portfolio.

### Build and preview

```sh
pnpm build
pnpm preview
```

The production build is generated in `dist/` and can be deployed to a static hosting service.

## Project structure

```text
src/
├── assets/       # Portrait and project screenshots
├── components/   # Sections, cards, navigation, footer, and icons
├── data/         # Typed portfolio content
├── layouts/      # Shared page and project layouts
├── pages/        # Homepage, project detail routes, and 404 page
└── styles/       # Global styles and Tailwind import
public/           # Directly served assets, favicons, and robots.txt
```

See [AGENTS.md](./AGENTS.md) for development commands and project conventions.

## Copyright

Copyright © 2026 Ángeles Bocharán. All rights reserved.
