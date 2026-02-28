# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server on port 3000
npm run build    # Build to dist/ (postbuild auto-generates sitemap via scripts/generate-sitemap.js)
npm run preview  # Preview the dist/ build
```

There are no tests or linters configured.

Vite auto-discovers all `*.html` files at the repo root via `globSync` in `vite.config.js` — any new page HTML placed at root level is automatically included in the build.

---

## Architecture

This is a **Vite MPA (multi-page app)** with no framework. All interactivity is vanilla JS using the Web Components API. The database is SQLite Wasm (sql.js), synthesized in-memory in the browser on every page load from two SQL files:

- `public/assets/database/schema.sql` — table/view definitions
- `public/assets/database/seed.sql` — all content data

### Three JS Files

**`js/db-service.js`** — Exposes `window.IPS_DB` (an IIFE singleton). Loads sql.js from CDN, creates an in-memory DB, runs schema + seed, and provides the public query API: `query()`, `getCase()`, `getCaseFragments()`, `getFragments()`, `getFragment()`, `search()`, `getReferringCases()`, `getPatterns()`, `getCases()`. All other JS polls `window.IPS_DB` before use.

**`js/ips-components.js`** — Registers all Custom Elements. Components that need DB data poll `window.IPS_DB` with a retry loop (up to 100 × 60ms). Inter-component communication for filters uses a custom DOM event: `document.dispatchEvent(new CustomEvent('ips-filter-update', { detail: filters }))`. `TGFilterPanel` dispatches it; `TGCaseList` and `TGArchiveList` listen for it.

**`js/ips-views.js`** — `window.IPS_VIEW_UTILS` (shared DB-wait helper + error handler), MPA view transition logic using the Navigation API + `pagereveal`, and home page statistics population.

**`css/archive.css`** — Single stylesheet containing the entire design system: CSS custom properties (tokens), theme definitions for dark (STB) and light (MFB) modes, all component styles.

**CDN: marked.js** — Loaded by all HTML pages (`https://cdn.jsdelivr.net/npm/marked/marked.min.js`). Used by `interpretMarkdown()` in `ips-components.js` to render markdown in case analysis text.

### Custom Elements

| Element | Purpose |
|---|---|
| `<tg-box>` | Base container (wraps content in `.terminal-box`) |
| `<tg-footer>` | Page footer with theme-aware SVG logo |
| `<tg-nav>` | Navigation menu from child `<a>` tags (defined but not currently used in any page) |
| `<tg-breadcrumb>` | Breadcrumb from child `<a>`/`<span>` tags |
| `<tg-status>` | Pattern status badge |
| `<tg-filter-panel>` | Filter checkboxes; auto-detects case vs fragment mode by pathname |
| `<tg-case-list>` | DB-driven case card list; listens for `ips-filter-update` |
| `<tg-archive-list>` | DB-driven fragment card list; listens for `ips-filter-update` |
| `<tg-fragment-list>` | Simple fragment list (no filtering) |
| `<tg-recently-catalogued-cases>` | First 2 cases by `case_id ASC` for homepage |
| `<tg-browse-phenomenology>` | Pattern-grouped case browser |
| `<tg-browse-chronological>` | Epoch-grouped fragment browser |
| `<tg-theme-toggle>` | STB/MFB/AUTO buttons; writes `ips-basis` to `localStorage` |
| `<tg-metadata-modal>` | Modal for stratigraphic metadata (opened via `window.showMetadataModal(data)`) |

### Data Model

```
phenomenological_patterns (A/B/C)
    ↑
cases ──────────── case_fragments ──── fragments
(CS-S## IDs)      (junction table)    (RF-#### IDs)

view_institutional_cases = cases JOIN phenomenological_patterns
```

Cases contain `analysis_text` (institutional prose). Fragments contain `content_text` (verbatim artifacts). The `[[SURFACE_FRAGMENT:RF-####]]` shortcode in `analysis_text` is used to embed fragment frames inline within case views.

### Theme System

`data-theme="dark"|"light"` on `<html>`. Set by an inline script in `<head>` (before render, to avoid flash) reading `localStorage.getItem('ips-basis')`. `TGThemeToggle` updates both the attribute and the favicon (`/assets/favicons/favicon-dark.svg` or `favicon-light.svg`). `TGFooter` observes `data-theme` via `MutationObserver` to swap its SVG logo.

---

## Design Constraints

This site has a **brutalist terminal aesthetic with two approved skeuomorphic exceptions**. The full spec lives in `public/assets/guidance/`. The enforced rules:

**Never add:** box shadows, drop shadows, text shadows, gradients, blur, opacity transitions, rounded corners, background images, loading spinners, glitch/flicker effects, typewriter effects, or any decorative element.

**Approved exceptions (skeuomorphic, mode-specific):**
- **CRT scanline overlay** — dark mode (`data-theme="dark"`) only.
- **Page transition animation** — light mode (`data-theme="light"`) only. Must mimic lateral microfiche tray movement. No fades, no generic slides.

**Interactions are instant:** hover states flip colors with no transition delay. Buttons invert (white bg / black text). Nav links turn white with `> ` prefix appearing.

**Typography:** Recursive variable font only. Axes: `MONO 1` always. `CASL 0.0` = institutional analysis. `CASL 0.3` = raw testimony. `slnt -5 to -12` for slight slant. Do not exceed `CASL 0.35`.

**Spacing:** All spacing must be on the 8px grid using `--space-*` tokens.

**Accent colors:** Green `#00ff00` (Pattern B / success), Red `#ff0000` (Pattern C / critical), Amber `#ffaa00` (Pattern A / advisory). Use sparingly and only for meaning, not decoration.

**Voice:** Institutional, clinical. "ACCESS CASE FILES" not "Check out our stories".

---

## Content Structure

The in-universe framing: this site *is* an institutional archive terminal (not a website *about* one). Epoch system: **AI** (Ante-Institutional) = older records, **PI** (Post-Institutional) = newer records. Phenomenological patterns A/B/C replace genre/category labels.

`archive/ruins/` contains previous versions of pages kept for reference — not part of the active build.
