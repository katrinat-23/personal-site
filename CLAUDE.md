# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Astro dev server on http://localhost:4321
- `npm run build` — runs `astro check` (TypeScript + content schema validation) then `astro build` into `dist/`. This is the only verification step; there are no tests or linter.
- `npm run preview` — serve the built `dist/`

## Architecture

Static Astro 5 personal portfolio site (no UI framework, no CSS framework). Deployed on Vercel.

**Projects are Markdown content.** Each file in `src/content/projects/` becomes a project. The frontmatter schema is defined in `src/content/config.ts` (`title`, `description`, optional `date`, optional `link` which must be a full URL, `order`). Adding a project means adding a `.md` file — no page code changes needed:
- `src/pages/projects/[slug].astro` generates one page per entry (slug = filename) and renders the "View project" link from `link`.
- Both `src/pages/index.astro` (home) and `src/pages/projects/index.astro` list projects sorted ascending by `order`. To reorder, change `order` values across files.
- Project files follow a loose structure: optional one-line intro, then `## Overview`, `## What I used`, `## What I learned`.

**Styling:** global design tokens (`--color-*`, `--font-sans`, `--content-width`) and dark-mode overrides live in the `<style is:global>` block of `src/layouts/BaseLayout.astro`. Components use scoped `<style>` blocks referencing those variables; styling inside rendered Markdown needs `:global(...)`.

**Static assets:** `public/` is served as-is. Project images live under `public/images/` (e.g. `public/images/nm/`). `public/misophonia-demo.html` is a standalone, self-contained HTML/JS demo (TensorFlow.js YAMNet + Web Audio) that is not processed by Astro; the misophonia project links to its deployed URL.

`astro.config.mjs` still has the placeholder `site: 'https://example.com'`.
