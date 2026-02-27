# Docs UX Improvements Design

**Date:** 2026-02-27
**Scope:** 4 changes to the SEO Machine documentation site

## 1. Snippet Container Colors

**Problem:** Code blocks use Starlight's default dark blue theme which doesn't match the site's design system.

**Solution:** Override Expressive Code backgrounds via CSS.

| Mode | Current | Target |
|------|---------|--------|
| Dark | Starlight dark blue | Neutral grey `oklch(0.22 0 0)` / `#1e1e1e` |
| Light | Starlight light | Near-black `oklch(0.18 0 0)` / `#1a1a1a` |

**Copy button vertical alignment:** Fix by ensuring `.copy` wrapper uses proper flexbox centering and explicit top positioning within the frame.

**Files:** `site/src/styles/custom.css`

## 2. Interactive API Key Config Wizard

**Problem:** Users must manually construct JSON config. No guidance on where to get API keys. No security warning.

**Solution:** Preact island component embedded in connectors page.

**Flow:**
1. User checks which tools they want (Ahrefs, Similarweb, GSC, GA4, Semrush, WordPress, DataForSEO)
2. For each selected tool, input field for API key/URL + link to official docs for key generation
3. Platform selector (Claude Code, Cursor, VS Code, Windsurf, Claude Desktop)
4. Generated JSON config with copy button
5. Security warning: "Nie udostępniaj kluczy API. Traktuj je jak hasla."

**API Key Documentation Links:**
- Ahrefs: https://ahrefs.com/api → MCP access docs
- Similarweb: https://www.similarweb.com/corp/developer/ → API docs
- Google Search Console: https://console.cloud.google.com/ → API setup
- Google Analytics 4: https://developers.google.com/analytics → GA4 API
- Semrush: https://www.semrush.com/api/ → API key generation
- WordPress: Application Passwords documentation
- DataForSEO: https://app.dataforseo.com/ → API credentials

**Dependencies:** `@astrojs/preact`, `preact`

**Files:**
- `site/src/components/ConfigWizard.tsx` (new)
- `site/src/content/docs/integrations/connectors.md` → rename to `.mdx`
- `site/astro.config.mjs` (add Preact integration)
- `site/package.json` (add dependencies)

## 3. MCP Callout on Installation Page

**Problem:** "Szybka instalacja MCP" section appears without context. Users don't know what MCP is or whether they need it.

**Solution:** Add `<Aside type="tip">` before MCP section:

> **MCP jest opcjonalne.** SEO Machine dziala w pelni bez zadnych zewnetrznych narzedzi — korzysta z wyszukiwania internetowego. MCP (Model Context Protocol) to sposob na podlaczenie narzedzi jak Ahrefs czy Similarweb, zeby uzyskac dokladniejsze dane (np. precyzyjne wolumeny wyszukiwan).

**Files:** `site/src/content/docs/getting-started/installation.mdx`

## 4. Simplified Language

**Problem:** Installation and connectors pages use jargon that's unclear to non-technical users.

**Changes:**
- Add recommendation callout at top: "Najlatwiejsza metoda: zainstaluj przez marketplace w Claude Cowork"
- Replace bare "CLI" with "wiersz polecen (terminal)"
- Add brief context before technical steps (what the user is about to do and why)
- Simplify MCP config instructions (explain what the JSON file does)
- Rewrite connectors page intro for clarity before diving into config

**Files:**
- `site/src/content/docs/getting-started/installation.mdx`
- `site/src/content/docs/integrations/connectors.md` (now `.mdx`)
