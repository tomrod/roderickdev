# Roderick.Dev

Personal site for Tom Roderick, PhD. Built with [Astro](https://astro.build) and deployed as a static site via GitHub Pages through Cloudflare.

## Stack

- **Framework**: Astro v7 (static output)
- **Fonts**: Self-hosted via `@fontsource` -- Source Serif 4 (variable), IBM Plex Sans, IBM Plex Mono
- **Styling**: Plain CSS with custom properties; light/dark theme via `data-theme` on `<html>`
- **Content**: Markdown posts in `src/content/posts/`
- **Sitemap**: Auto-generated at `/sitemap-index.xml`
- **Feed**: RSS at `/rss.xml`

## Development

```bash
npm install
npm run dev
```

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run check` | Astro + TypeScript type check |
| `npm run lint` | ESLint |
| `npm test` | Vitest unit tests |

## Testing

Tests live in `src/tests/`. Coverage areas:

- **`utils.test.ts`** -- `readTime`, `formatDate`, `slugFromId` pure functions
- **`contrast.test.ts`** -- WCAG AA (4.5:1) contrast ratios for all color pairs in light and dark modes
- **`posts.test.ts`** -- Validates all markdown posts have required frontmatter and consistent filenames

## CI / CD

Two GitHub Actions workflows:

- **`ci.yml`** -- Runs on non-main branches and PRs: lint → type check → test → build → dependency review
- **`deploy.yml`** -- Runs on `main`: same checks → build → deploy to GitHub Pages

Supply chain: Dependabot (monthly npm, weekly actions), `npm audit`, and `dependency-review-action` on PRs.

## Git Hooks

Hooks are in `.githooks/` (tracked) and activated via `npm install` → `prepare` script.

- **pre-commit** -- syncs lockfile if `package.json` was staged; lints staged `.ts`/`.astro` files
- **pre-push** -- runs `astro check` and full test suite before any push

## Theme

Dark/light toggle stored in `localStorage` under the key `rd-theme`. Defaults to the OS preference (`prefers-color-scheme`). Theme is applied before first paint (no FOUC) via an inline script in `<head>`.

## Accessibility

Targets WCAG 2.1 AA / Section 508:

- Skip-to-main-content link
- `aria-current="page"` on active nav item
- `aria-label` and `aria-pressed` on theme toggle
- Nav sections labelled with `aria-labelledby`
- Decorative icons marked `aria-hidden`

## Privacy

No third-party requests at page load. Fonts are self-hosted; analytics (Cloudflare) run at the edge without client-side scripts.
