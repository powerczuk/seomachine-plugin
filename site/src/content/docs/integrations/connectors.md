---
title: Przewodnik konektorów
description: Podłącz Ahrefs, Similarweb, Google Search Console i więcej przez MCP
---

SEO Machine używa MCP (Model Context Protocol) do łączenia z zewnętrznymi narzędziami SEO. Plugin działa bez żadnych konektorów, ale podłączone narzędzia zapewniają bardziej precyzyjne dane.

## Wstępnie skonfigurowane konektory

### Ahrefs

```json
{
  "ahrefs": {
    "type": "http",
    "url": "https://api.ahrefs.com/mcp/mcp"
  }
}
```

**Wymaga:** Konto Ahrefs z dostępem MCP.

**Dostarcza:** Wolumeny keywords, difficulty scores, profile backlinków, pozycje w rankingu, dane content gap.

**Wzbogaca:** `/research`, `/audit`, `/analyze`, `/low-hanging-fruit`, `/competitors`, `/topic-clusters`

### Similarweb

```json
{
  "similarweb": {
    "type": "http",
    "url": "https://mcp.similarweb.com"
  }
}
```

**Wymaga:** Konto Similarweb z dostępem API.

**Dostarcza:** Szacunki ruchu, demografia odbiorców, źródła ruchu, competitive intelligence.

**Wzbogaca:** `/audit`, `/competitors`

## Opcjonalne konektory

| Narzędzie | Co dodaje | Wzbogacane komendy |
|-----------|-----------|-------------------|
| Google Search Console | Wyświetlenia, kliknięcia, CTR, pozycje | `/audit`, `/low-hanging-fruit`, `/analyze` |
| Google Analytics 4 | Ruch, zaangażowanie, konwersje | `/audit`, `/low-hanging-fruit` |
| Semrush | Alternatywa dla Ahrefs — dane keywords/backlinków | Jak Ahrefs |
| WordPress | Bezpośrednie publikowanie, inwentarz treści | `/write-seo`, `/meta-tags`, `/internal-links` |
| DataForSEO | Real-time dane SERP, sugestie keywords | `/research`, `/audit` |

## Dodawanie konektorów

Dodaj serwery MCP do pliku konfiguracyjnego Twojej platformy:

**Claude Code / Cowork:** Edytuj `.mcp.json` pluginu

**Cursor:** Edytuj `.cursor/mcp.json`

**VS Code:** Edytuj `.vscode/mcp.json`

**Claude Desktop:** Edytuj `claude_desktop_config.json`

## Bez konektorów

SEO Machine używa web search jako fallbacku dla wszystkich danych. Podłączone narzędzia dodają precyzję (dokładne wolumeny, pozycje, liczby backlinków), ale workflow i rekomendacje działają identycznie.
