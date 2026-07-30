# Roderick.Dev

Personal site for Thomas Roderick, PhD. Built with [Astro](https://astro.build) and deployed as a static site.

## Stack

- **Framework**: Astro v7 (static output)
- **Fonts**: Self-hosted via `@fontsource` — Source Serif 4 (variable), IBM Plex Sans, IBM Plex Mono
- **Styling**: Plain CSS with custom properties; light/dark theme via `data-theme` on `<html>`
- **Content**: Markdown posts in `src/content/posts/`
- **Feed**: RSS at `/rss.xml`

## Development

```bash
npm install
npm run dev
```

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

No third-party requests. Fonts are self-hosted; no analytics or tracking scripts are loaded.
