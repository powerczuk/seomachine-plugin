# Docs UX Improvements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve the SEO Machine docs with better snippet colors, an interactive API key wizard, MCP context callouts, and simplified language for non-tech users.

**Architecture:** 4 independent changes — CSS overrides for code blocks, a Preact island component for config generation, Starlight Aside components for context, and content rewrites. The Preact component is the only new dependency.

**Tech Stack:** Astro 5, Starlight 0.32, Preact (new), Tailwind CSS 3.4, Expressive Code

---

### Task 1: Fix Snippet Container Colors

**Files:**
- Modify: `site/src/styles/custom.css:347-403`

**Step 1: Add dark mode code block background override**

In `site/src/styles/custom.css`, after the existing `.expressive-code .frame` rule (line 349), add background color overrides. Find the section `/* --- Code Blocks: compact, rounded, clean --- */` and add these rules:

```css
/* Override Expressive Code background — neutral grey (dark) */
.expressive-code .frame {
  --ec-codeBg: oklch(0.22 0 0) !important;
}

.expressive-code pre {
  background: oklch(0.22 0 0) !important;
}
```

**Step 2: Add light mode code block background override**

After the existing `:root[data-theme='light'] .expressive-code .frame` rule (line 354), add:

```css
/* Override Expressive Code background — near-black (light) */
:root[data-theme='light'] .expressive-code .frame {
  --ec-codeBg: oklch(0.18 0 0) !important;
}

:root[data-theme='light'] .expressive-code pre {
  background: oklch(0.18 0 0) !important;
}
```

**Step 3: Fix copy button vertical alignment**

Replace the existing `.expressive-code .copy button` rule (lines 377-385) with:

```css
.expressive-code .copy button {
  @apply !w-7 !h-7 !rounded-lg;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 4px !important;
  opacity: 0.35 !important;
  transition: opacity 0.15s ease !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
```

And update the `.expressive-code .copy` wrapper (lines 396-399) to:

```css
.expressive-code .copy {
  opacity: 0;
  transition: opacity 0.15s ease;
  display: flex !important;
  align-items: center !important;
  top: 0.5rem !important;
  right: 0.5rem !important;
}
```

**Step 4: Run dev server and verify visually**

Run: `cd site && npm run dev`

Check:
- Dark mode: code blocks have neutral grey background (not blue)
- Light mode: code blocks have near-black background
- Copy button is vertically centered within its container on both themes

**Step 5: Commit**

```bash
git add site/src/styles/custom.css
git commit -m "style: grey snippet containers + fix copy button alignment"
```

---

### Task 2: Add Preact Integration

**Files:**
- Modify: `site/package.json`
- Modify: `site/astro.config.mjs`

**Step 1: Install Preact integration**

Run:
```bash
cd site && npm install @astrojs/preact preact
```

Expected: packages added to `package.json` dependencies.

**Step 2: Add Preact to Astro config**

In `site/astro.config.mjs`, add import at the top:

```javascript
import preact from '@astrojs/preact';
```

Add `preact()` to the integrations array (after tailwind):

```javascript
integrations: [
    starlight({ ... }),
    tailwind({ applyBaseStyles: false }),
    preact(),
],
```

**Step 3: Verify build works**

Run: `cd site && npm run build`
Expected: Build completes with no errors.

**Step 4: Commit**

```bash
git add site/package.json site/package-lock.json site/astro.config.mjs
git commit -m "feat: add Preact integration for interactive components"
```

---

### Task 3: Build ConfigWizard Component

**Files:**
- Create: `site/src/components/ConfigWizard.tsx`

**Step 1: Create the ConfigWizard component**

Create `site/src/components/ConfigWizard.tsx` with the full interactive wizard:

```tsx
import { useState } from 'preact/hooks';

const TOOLS = [
  {
    id: 'ahrefs',
    name: 'Ahrefs',
    description: 'Wolumeny keywords, difficulty, backlinki',
    docsUrl: 'https://ahrefs.com/api',
    docsLabel: 'Jak uzyskac klucz API Ahrefs',
    configType: 'url' as const,
    defaultUrl: 'https://api.ahrefs.com/mcp/mcp',
  },
  {
    id: 'similarweb',
    name: 'Similarweb',
    description: 'Dane o ruchu, competitive intelligence',
    docsUrl: 'https://www.similarweb.com/corp/developer/',
    docsLabel: 'Jak uzyskac klucz API Similarweb',
    configType: 'url' as const,
    defaultUrl: 'https://mcp.similarweb.com',
  },
  {
    id: 'google-search-console',
    name: 'Google Search Console',
    description: 'Wyswietlenia, klikniecia, CTR, pozycje',
    docsUrl: 'https://developers.google.com/webmaster-tools/v1/how-tos/authorizing',
    docsLabel: 'Jak skonfigurowac Google Search Console API',
    configType: 'apikey' as const,
    defaultUrl: '',
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics 4',
    description: 'Ruch, zaangazowanie, konwersje',
    docsUrl: 'https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart-client-libraries',
    docsLabel: 'Jak skonfigurowac Google Analytics 4 API',
    configType: 'apikey' as const,
    defaultUrl: '',
  },
  {
    id: 'semrush',
    name: 'Semrush',
    description: 'Alternatywa dla Ahrefs — dane keywords/backlinkow',
    docsUrl: 'https://www.semrush.com/api/',
    docsLabel: 'Jak uzyskac klucz API Semrush',
    configType: 'apikey' as const,
    defaultUrl: '',
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    description: 'Bezposrednie publikowanie, inwentarz tresci',
    docsUrl: 'https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/',
    docsLabel: 'Jak utworzyc Application Password w WordPress',
    configType: 'apikey' as const,
    defaultUrl: '',
  },
  {
    id: 'dataforseo',
    name: 'DataForSEO',
    description: 'Real-time dane SERP, sugestie keywords',
    docsUrl: 'https://app.dataforseo.com/api-dashboard',
    docsLabel: 'Jak uzyskac dane logowania DataForSEO',
    configType: 'apikey' as const,
    defaultUrl: '',
  },
];

const PLATFORMS = [
  {
    id: 'claude-code',
    name: 'Claude Code / Cowork',
    path: '.mcp.json',
    wrapper: 'mcpServers',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    path: '.cursor/mcp.json',
    wrapper: 'mcpServers',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    path: '.vscode/mcp.json',
    wrapper: 'mcpServers',
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    path: 'Ustawienia MCP Windsurf',
    wrapper: 'mcpServers',
  },
  {
    id: 'claude-desktop',
    name: 'Claude Desktop',
    path: 'claude_desktop_config.json',
    wrapper: 'mcpServers',
  },
];

export default function ConfigWizard() {
  const [selectedTools, setSelectedTools] = useState<Set<string>>(new Set());
  const [apiKeys, setApiKeys] = useState<Record<string, string>>({});
  const [platform, setPlatform] = useState('claude-code');
  const [copied, setCopied] = useState(false);

  const toggleTool = (id: string) => {
    setSelectedTools((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const setApiKey = (id: string, value: string) => {
    setApiKeys((prev) => ({ ...prev, [id]: value }));
  };

  const generateConfig = () => {
    const plat = PLATFORMS.find((p) => p.id === platform)!;
    const servers: Record<string, any> = {};

    for (const toolId of selectedTools) {
      const tool = TOOLS.find((t) => t.id === toolId)!;
      if (tool.configType === 'url') {
        servers[tool.id] = {
          type: 'http',
          url: apiKeys[tool.id] || tool.defaultUrl,
        };
      } else {
        const key = apiKeys[tool.id] || 'TWOJ_KLUCZ_API';
        servers[tool.id] = {
          type: 'http',
          url: `https://mcp.${tool.id}.com`,
          headers: {
            Authorization: `Bearer ${key}`,
          },
        };
      }
    }

    return JSON.stringify({ [plat.wrapper]: servers }, null, 2);
  };

  const copyConfig = () => {
    navigator.clipboard.writeText(generateConfig());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedPlatform = PLATFORMS.find((p) => p.id === platform)!;

  return (
    <div style={{ marginTop: '2rem' }}>
      {/* Security warning */}
      <div
        style={{
          padding: '0.75rem 1rem',
          borderRadius: '0.75rem',
          border: '1px solid var(--destructive)',
          background: 'color-mix(in oklch, var(--destructive) 8%, var(--background))',
          marginBottom: '1.5rem',
          fontSize: '0.875rem',
          lineHeight: '1.5',
        }}
      >
        <strong>Nie udostepniaj kluczy API.</strong> Traktuj je jak hasla. Nigdy nie
        wklejaj ich na publicznych stronach, w repozytoriach Git ani w wiadomosciach.
      </div>

      {/* Step 1: Tool selection */}
      <h3 style={{ marginTop: 0 }}>1. Wybierz narzedzia</h3>
      <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {TOOLS.map((tool) => (
          <label
            key={tool.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              borderRadius: '0.75rem',
              border: `1px solid ${selectedTools.has(tool.id) ? 'var(--primary)' : 'var(--border)'}`,
              background: selectedTools.has(tool.id)
                ? 'color-mix(in oklch, var(--primary) 6%, var(--card))'
                : 'var(--card)',
              cursor: 'pointer',
              transition: 'border-color 0.15s ease, background 0.15s ease',
            }}
          >
            <input
              type="checkbox"
              checked={selectedTools.has(tool.id)}
              onChange={() => toggleTool(tool.id)}
              style={{ marginTop: '0.2rem' }}
            />
            <div>
              <div style={{ fontWeight: 600 }}>{tool.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>
                {tool.description}
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Step 2: API keys for selected tools */}
      {selectedTools.size > 0 && (
        <>
          <h3>2. Klucze API</h3>
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
            {TOOLS.filter((t) => selectedTools.has(t.id)).map((tool) => (
              <div key={tool.id}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.25rem' }}>
                  {tool.name}
                </label>
                {tool.configType === 'url' ? (
                  <input
                    type="text"
                    value={apiKeys[tool.id] || tool.defaultUrl}
                    onInput={(e) => setApiKey(tool.id, (e.target as HTMLInputElement).value)}
                    placeholder={tool.defaultUrl}
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '0.5rem',
                      border: '1px solid var(--border)',
                      background: 'var(--background)',
                      color: 'var(--foreground)',
                      fontSize: '0.85rem',
                      fontFamily: 'monospace',
                    }}
                  />
                ) : (
                  <input
                    type="password"
                    value={apiKeys[tool.id] || ''}
                    onInput={(e) => setApiKey(tool.id, (e.target as HTMLInputElement).value)}
                    placeholder="Wklej klucz API..."
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '0.5rem',
                      border: '1px solid var(--border)',
                      background: 'var(--background)',
                      color: 'var(--foreground)',
                      fontSize: '0.85rem',
                      fontFamily: 'monospace',
                    }}
                  />
                )}
                <a
                  href={tool.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '0.25rem',
                    fontSize: '0.78rem',
                    color: 'var(--primary)',
                  }}
                >
                  {tool.docsLabel} &rarr;
                </a>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Step 3: Platform selection */}
      {selectedTools.size > 0 && (
        <>
          <h3>3. Wybierz platforme</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {PLATFORMS.map((p) => (
              <button
                key={p.id}
                onClick={() => setPlatform(p.id)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  border: `1px solid ${platform === p.id ? 'var(--primary)' : 'var(--border)'}`,
                  background: platform === p.id ? 'var(--primary)' : 'var(--card)',
                  color: platform === p.id ? 'var(--primary-foreground)' : 'var(--foreground)',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {p.name}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Step 4: Generated config */}
      {selectedTools.size > 0 && (
        <>
          <h3>4. Skopiuj konfiguracje</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}>
            Wklej do pliku: <code>{selectedPlatform.path}</code>
          </p>
          <div style={{ position: 'relative' }}>
            <pre
              style={{
                padding: '1rem',
                borderRadius: '0.75rem',
                background: 'oklch(0.22 0 0)',
                color: 'oklch(0.85 0 0)',
                fontSize: '0.84rem',
                lineHeight: '1.55',
                overflow: 'auto',
                border: '1px solid var(--border)',
              }}
            >
              {generateConfig()}
            </pre>
            <button
              onClick={copyConfig}
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border)',
                background: 'var(--card)',
                color: 'var(--foreground)',
                fontSize: '0.78rem',
                cursor: 'pointer',
              }}
            >
              {copied ? 'Skopiowano!' : 'Kopiuj'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
```

**Step 2: Run dev server and verify component renders**

Run: `cd site && npm run dev`

Visit the connectors page (after Task 4 embeds it). For now, verify no TypeScript errors:
Run: `cd site && npx astro check` (if available) or `npm run build`

**Step 3: Commit**

```bash
git add site/src/components/ConfigWizard.tsx
git commit -m "feat: add interactive API key config wizard component"
```

---

### Task 4: Update Connectors Page

**Files:**
- Rename: `site/src/content/docs/integrations/connectors.md` → `connectors.mdx`
- Modify: `site/src/content/docs/integrations/connectors.mdx` (rewrite content)

**Step 1: Rename file to .mdx**

```bash
cd site && mv src/content/docs/integrations/connectors.md src/content/docs/integrations/connectors.mdx
```

**Step 2: Rewrite connectors page with wizard and simplified language**

Replace full contents of `site/src/content/docs/integrations/connectors.mdx` with:

```mdx
---
title: Podlaczanie narzedzi SEO
description: Podlacz Ahrefs, Similarweb, Google Search Console i wiecej aby uzyskac dokladniejsze dane
---

import { Aside } from '@astrojs/starlight/components';
import ConfigWizard from '../../../components/ConfigWizard.tsx';

<Aside type="tip" title="To jest opcjonalne">
SEO Machine dziala w pelni bez zadnych podlaczonych narzedzi — korzysta z wyszukiwania
internetowego jako zrodla danych. Podlaczenie narzedzi jak Ahrefs czy Similarweb daje Ci
**dokladniejsze dane**: precyzyjne wolumeny wyszukiwan, pozycje w rankingu, profile backlinkow.
</Aside>

## Co daja poszczegolne narzedzia?

| Narzedzie | Co dodaje | Wzbogacane komendy |
|-----------|-----------|-------------------|
| Ahrefs | Wolumeny keywords, difficulty scores, profile backlinkow | `/research`, `/audit`, `/analyze`, `/competitors` |
| Similarweb | Szacunki ruchu, demografia odbiorcow, zrodla ruchu | `/audit`, `/competitors` |
| Google Search Console | Twoje realne wyswietlenia, klikniecia, CTR, pozycje | `/audit`, `/low-hanging-fruit`, `/analyze` |
| Google Analytics 4 | Ruch na stronie, zaangazowanie, konwersje | `/audit`, `/low-hanging-fruit` |
| Semrush | Alternatywa dla Ahrefs — dane keywords i backlinkow | Jak Ahrefs |
| WordPress | Bezposrednie publikowanie tresci | `/write-seo`, `/meta-tags`, `/internal-links` |
| DataForSEO | Real-time dane SERP, sugestie keywords | `/research`, `/audit` |

## Konfigurator

Zaznacz narzedzia ktore chcesz podlaczyc, wklej klucze API, wybierz platforme — otrzymasz gotowa konfiguracje do skopiowania.

<ConfigWizard client:load />

## Reczna konfiguracja

Jezeli wolisz skonfigurowac recznie, dodaj serwery MCP do pliku konfiguracyjnego Twojej platformy:

- **Claude Code / Cowork:** `.mcp.json` w katalogu pluginu
- **Cursor:** `.cursor/mcp.json` w katalogu projektu
- **VS Code:** `.vscode/mcp.json` w katalogu projektu
- **Windsurf:** Panel ustawien MCP Windsurf
- **Claude Desktop:** `claude_desktop_config.json`
  - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

### Przyklad konfiguracji (Ahrefs + Similarweb)

```json
{
  "mcpServers": {
    "ahrefs": {
      "type": "http",
      "url": "https://api.ahrefs.com/mcp/mcp"
    },
    "similarweb": {
      "type": "http",
      "url": "https://mcp.similarweb.com"
    }
  }
}
```

<Aside type="caution" title="Bezpieczenstwo kluczy API">
Nigdy nie udostepniaj kluczy API publicznie. Nie dodawaj ich do repozytoriow Git. Traktuj je jak hasla.
</Aside>
```

**Step 3: Verify build**

Run: `cd site && npm run build`
Expected: Build succeeds, connectors page renders with wizard.

**Step 4: Commit**

```bash
git add site/src/content/docs/integrations/connectors.mdx
git rm site/src/content/docs/integrations/connectors.md 2>/dev/null || true
git commit -m "feat: add interactive config wizard to connectors page"
```

---

### Task 5: Simplify Installation Page + Add MCP Callout

**Files:**
- Modify: `site/src/content/docs/getting-started/installation.mdx`

**Step 1: Rewrite installation page with simplified language and MCP callout**

Replace full contents of `site/src/content/docs/getting-started/installation.mdx` with:

```mdx
---
title: Instalacja
description: Zainstaluj SEO Machine na Claude Cowork, Claude Code, Cursor, VS Code, Windsurf lub Claude Desktop
---

import { Tabs, TabItem, Aside } from '@astrojs/starlight/components';

<Aside type="tip" title="Najlatwiejsza metoda">
Jezeli nie masz doswiadczenia technicznego, wybierz **Claude Cowork** — wystarczy kilka klikniec
w interfejsie aplikacji. Nie musisz niczego wpisywac w terminalu.
</Aside>

## Wybierz platforme

<Tabs>
  <TabItem label="Claude Cowork">
    Cowork to aplikacja desktopowa Claude z interfejsem graficznym. To najlatwiejszy sposob na instalacje.

    **Z marketplace (zalecane)**

    1. Otworz aplikacje Claude Desktop
    2. Uruchom lub otworz sesje Cowork
    3. Przejdz do **Ustawienia → Pluginy**
    4. Wyszukaj **„SEO Machine"**
    5. Kliknij **Zainstaluj** — gotowe!

    **Instalacja reczna**

    1. Pobierz plugin ze [strony GitHub releases](https://github.com/powerczuk/seomachine-plugin/releases)
    2. W Cowork przejdz do **Ustawienia → Pluginy → Zainstaluj z pliku**
    3. Wybierz pobrany plik `.zip`
  </TabItem>

  <TabItem label="Claude Code CLI">
    Claude Code CLI to narzedzie uruchamiane w terminalu (wierszu polecen). Jezeli nie wiesz
    co to terminal — wybierz zakladke **Claude Cowork**.

    **Z repozytorium GitHub**

    Otworz terminal i wpisz:

    ```bash
    git clone https://github.com/powerczuk/seomachine-plugin.git
    cd seomachine-plugin
    claude plugin install .
    ```

    **Sprawdz czy sie zainstalowalo**

    ```bash
    claude plugin list
    # Powinno wyswietlic: seo-machine v2.0.0
    ```
  </TabItem>

  <TabItem label="Cursor">
    Cursor to edytor kodu z wbudowana obsluga pluginow Claude Code.

    **Krok 1 — Otworz panel Claude Code**

    Uzyj skrotu `Cmd+Shift+P` (Mac) lub `Ctrl+Shift+P` (Windows/Linux) i wpisz **„Claude Code: Open"**.

    **Krok 2 — Zainstaluj plugin**

    W panelu Claude Code wpisz:

    ```
    /install-plugin seo-machine
    ```

    Mozesz tez dodac plugin reczne: **Settings → Extensions → Claude Code** → w sekcji **Plugins** dodaj `seo-machine`.
  </TabItem>

  <TabItem label="VS Code">
    **Krok 1 — Zainstaluj rozszerzenie Claude Code**

    Nacisnij `Cmd+Shift+X` (Mac) lub `Ctrl+Shift+X` (Windows/Linux), wyszukaj **„Claude Code"** i zainstaluj.

    **Krok 2 — Zainstaluj plugin SEO Machine**

    Otworz terminal w VS Code (menu **Terminal → Nowy terminal**) i wpisz:

    ```bash
    git clone https://github.com/powerczuk/seomachine-plugin.git
    cd seomachine-plugin
    claude plugin install .
    ```

    Mozesz tez uzyc palety polecen: `Cmd+Shift+P` → **„Claude Code: Install Plugin"** → wpisz `seo-machine`.
  </TabItem>

  <TabItem label="Windsurf">
    **Krok 1 — Zainstaluj rozszerzenie Claude Code**

    Otworz marketplace rozszerzen Windsurf, wyszukaj **„Claude Code"** i zainstaluj.

    **Krok 2 — Zainstaluj plugin**

    W panelu Claude Code wpisz:

    ```
    /install-plugin seo-machine
    ```

    Lub w terminalu:

    ```bash
    git clone https://github.com/powerczuk/seomachine-plugin.git
    cd seomachine-plugin
    claude plugin install .
    ```
  </TabItem>

  <TabItem label="Claude Desktop">
    **Z marketplace (zalecane)**

    1. Otworz Claude Desktop
    2. Przejdz do **Settings → Developer → Plugins**
    3. Wyszukaj **„SEO Machine"** i zainstaluj
  </TabItem>
</Tabs>

## Sprawdz czy dziala

W dowolnej konwersacji z Claude wpisz:

```
/research testowe slowo kluczowe
```

Jezeli widzisz ustrukturyzowany wynik badania keywords — plugin jest aktywny.

## Podlaczanie narzedzi SEO (opcjonalne)

<Aside type="note" title="Co to jest MCP?">
**MCP jest opcjonalne.** SEO Machine dziala w pelni bez zadnych zewnetrznych narzedzi —
korzysta z wyszukiwania internetowego. MCP (Model Context Protocol) to sposob na podlaczenie
narzedzi jak Ahrefs czy Similarweb, zeby uzyskac dokladniejsze dane (np. precyzyjne wolumeny
wyszukiwan zamiast szacunkow).
</Aside>

| Narzedzie | Co dodaje | Wymagane? |
|-----------|-----------|-----------|
| Ahrefs | Wolumeny keywords, difficulty, backlinki | Nie |
| Similarweb | Dane o ruchu, competitive intelligence | Nie |
| Google Search Console | Twoje realne dane z wyszukiwarki | Nie |
| Google Analytics 4 | Ruch, zaangazowanie, konwersje | Nie |
| WordPress | Bezposrednie publikowanie | Nie |

Chcesz podlaczyc narzedzia? Przejdz do [konfiguratora konektorow](/integrations/connectors/) — wygeneruje
za Ciebie gotowy plik konfiguracyjny.

### Szybka instalacja na wielu platformach naraz

Jezeli masz zainstalowane narzedzie `npx` (instaluje sie razem z Node.js), mozesz skonfigurowac
serwery MCP na wszystkich platformach jednym poleceniem:

```bash
npx add-mcp https://api.ahrefs.com/mcp/mcp -a cursor -a claude-code
npx add-mcp https://mcp.similarweb.com -a cursor -a claude-code
```
```

**Step 2: Verify build**

Run: `cd site && npm run build`
Expected: Build succeeds, no errors.

**Step 3: Commit**

```bash
git add site/src/content/docs/getting-started/installation.mdx
git commit -m "docs: simplify installation page + add MCP context callout"
```

---

### Task 6: Visual Verification

**Files:** None (manual testing)

**Step 1: Start dev server**

Run: `cd site && npm run dev`

**Step 2: Verify all changes visually**

Check the following pages in browser:

1. **Any page with code blocks** — verify grey background in dark mode, blackish in light, copy button aligned
2. **Installation page** (`/getting-started/installation/`) — verify simplified language, tip callout, MCP note
3. **Connectors page** (`/integrations/connectors/`) — verify wizard renders, tool selection works, config generates, copy button works, security warning visible, doc links work

**Step 3: Verify production build**

Run: `cd site && npm run build && npm run preview`

Check the same pages in preview mode.

**Step 4: Final commit if any fixes needed**

Only if visual issues found during verification.
