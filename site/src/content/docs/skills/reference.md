---
title: Referencje skills
description: Głębokie moduły wiedzy napędzające analizy i rekomendacje SEO Machine
---

Skills to moduły wiedzy, które Claude ładuje automatycznie gdy są potrzebne. Dostarczają frameworki, systemy scoringowe i najlepsze praktyki stojące za komendami.

## Przegląd skills

| Skill | Przeznaczenie | Ładowany przez |
|-------|--------------|----------------|
| SEO Fundamentals | Podstawowa wiedza SEO | `/research`, `/audit`, `/internal-links`, `/schema-gen` |
| Content Optimizer | Scoring i optymalizacja treści | `/write-seo`, `/optimize`, `/analyze`, `/content-brief` |
| Programmatic SEO | Skalowanie produkcji treści | `/topic-clusters`, `/audit`, `/low-hanging-fruit` |
| GEO Fundamentals | Optymalizacja pod AI search | `/geo-audit`, `/llms-txt` |
| Local SEO | Optymalizacja wyszukiwania lokalnego | `/local-seo` |

## SEO Fundamentals

Podstawowa wiedza obejmująca on-page optimization, techniczne SEO, strategię keywords i czynniki rankingowe.

**Kluczowe moduły:**

- **Klasyfikacja intencji wyszukiwania** — informacyjna, nawigacyjna, komercyjna, transakcyjna
- **Elementy On-Page SEO** — title tags, meta descriptions, nagłówki, struktura URL, umiejscowienie keywords
- **Checklist technicznego SEO** — crawlability, Core Web Vitals (LCP <2.5s, INP <200ms, CLS <0.1), bezpieczeństwo, structured data
- **Sygnały E-E-A-T** — doświadczenie, ekspertyza, autorytatywność, wiarygodność
- **Strategia linkowania wewnętrznego** — 3–5+ linków per artykuł, opisowe anchory, wsparcie klastrów

## Content Optimizer

Systematyczny framework scoringu i optymalizacji treści.

**System scoringowy (0–100):**

| Wymiar | Waga | Docelowe metryki |
|--------|------|-----------------|
| Optymalizacja keywords | 25% | 1–2% gęstości, krytyczne umiejscowienia, terminy LSI |
| Czytelność | 20% | Flesch 60–70, Grade 8–10, passive <20% |
| Struktura treści | 20% | H2 co 300 słów, 2 000+ słów łącznie |
| Zaangażowanie | 20% | Hook we wstępie, 2–3 stories, 2–3 CTA |
| Techniczne SEO | 15% | Elementy meta, linki, schema |

**AI Content Scrubbing:** Wykrywa formuliczne wzorce, jednolitą strukturę i brak specyfiki typowy dla treści generowanych przez AI. Stosuje naturalny głos, zróżnicowaną długość zdań, konkretne przykłady i konwersacyjne wtręty.

## Programmatic SEO

Frameworki do skalowania treści i znajdowania okazji.

**Architektura klastrów tematycznych:**

- Pillar Page (3 000–5 000+ słów)
- Strony klastra (1 500–2 500 słów)
- Treści wspierające (FAQ, glosariusze, case studies)

**8-czynnikowy scoring okazji:** Wolumen wyszukiwania (20%), keyword difficulty (15%), obecna pozycja (15%), content gap (15%), relevancja biznesowa (15%), potencjał konwersji (10%), potrzeba odświeżenia (5%), trending momentum (5%).

**Szybkie wygrane:** Keywords pozycje 11–20, strony z dużymi wyświetleniami i niskim CTR, brakujące meta descriptions, thin ranking content.

## GEO Fundamentals

Baza wiedzy o optymalizacji pod AI search.

**Wymiary scoringu GEO:** Dostęp crawlerów AI, jakość llms.txt, cytowalność treści, schema markup, sygnały E-E-A-T, obecność marki, świeżość treści.

**Kluczowe techniki:** Samodzielne fragmenty (~800 tokenów), statystyki ze źródłami, cytaty ekspertów z atrybucją, obecność marki na 10+ platformach, implementacja llms.txt.

## Local SEO

Optymalizacja wyszukiwania lokalnego obejmująca GBP, cytacje i lokalne schema.

**Zakres:** Optymalizacja Google Business Profile, spójność NAP, budowanie cytacji (agregatory danych, główne katalogi, branżowe), wzorce lokalnych keywords, schema LocalBusiness, zarządzanie opiniami.
