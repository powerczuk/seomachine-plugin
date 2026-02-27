---
title: Komendy GEO i wyszukiwania AI
description: Komendy do optymalizacji widoczności w wyszukiwarkach AI
---

## /geo-audit

Audyt widoczności i cytowalności Twojej strony w wyszukiwarkach AI (ChatGPT, Perplexity, Google AI Overviews).

**Składnia:**

```bash
/geo-audit <URL domeny> [nazwa marki]
```

**Co sprawdza:**

| Wymiar | Co mierzy |
|--------|-----------|
| Dostęp crawlerów AI | robots.txt zezwalający GPTBot, ClaudeBot, PerplexityBot |
| Obecność llms.txt | Czy masz plik llms.txt i jaka jest jego jakość |
| Cytowalność treści | Czy fragmenty mogą samodzielnie funkcjonować po wyciągnięciu przez AI |
| Schema Markup | Structured data pomagające AI parsować treść |
| Sygnały E-E-A-T | Biogramy autorów, referencje, cytaty ekspertów |
| Wzmianki marki | Wzmianki stron trzecich, earned media, sentiment |
| Świeżość treści | Timestampy ostatniej aktualizacji, aktualność danych |
| Gotowość techniczna | Renderowanie JavaScript, ukryte treści |

**Output:** GEO readiness score (0–100), szczegółowy breakdown problemów z instrukcjami naprawy, priorytetyzowany plan działania, porównanie z konkurencją.

**Przykład:**

```bash
/geo-audit https://example.com "Example Brand"
```

Zobacz [przewodnik GEO](/guides/geo/) po pełny framework stojący za tą komendą.

---

## /llms-txt

Generowanie zoptymalizowanego pliku llms.txt do nawigacji crawlerów AI.

**Składnia:**

```bash
/llms-txt <URL domeny> [URL sitemap]
```

**Co robi:**

1. Crawluje Twoją sitemap lub top strony aby zidentyfikować autorytatywne treści
2. Kategoryzuje strony po tematach i ważności
3. Generuje llms.txt w formacie Markdown zgodnie ze specyfikacją
4. Dostarcza instrukcje umieszczenia

**Output:** Gotowy do wdrożenia plik llms.txt, instrukcje deploymentu (umieść pod `domena.pl/llms.txt`), opcjonalny llms-full.txt dla pełnego pokrycia.

**Przykład:**

```bash
/llms-txt https://example.com https://example.com/sitemap.xml
```

### Czym jest llms.txt?

Plik llms.txt to standard działający jako kuratorowany indeks Markdown dla crawlerów LLM. W odróżnieniu od robots.txt (który kontroluje dostęp), llms.txt mówi systemom AI, które treści są najważniejsze i jak są zorganizowane.

LLM-y mają ograniczone okna kontekstu i nie radzą sobie z przetwarzaniem całych stron. Udostępniając ustandaryzowany plik Markdown pod `/llms.txt`, dajesz systemom AI jasny przegląd najważniejszych treści.

Od połowy 2025 roku ponad 950 domen przyjęło ten standard, w tym Anthropic, Cloudflare, Stripe i Vercel.
