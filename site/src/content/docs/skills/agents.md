---
title: Referencje agentów
description: Autonomiczni agenci analizy wykonujący specjalistyczne zadania SEO
---

Agenci to autonomiczne podprocesy prowadzące specjalistyczną analizę. Mają własny dostęp do narzędzi i zwracają ustrukturyzowane wyniki.

## Przegląd agentów

| Agent | Przeznaczenie | Wyzwalacz |
|-------|--------------|-----------|
| seo-analyzer | Scoring jakości treści (0–100) | Po `/write-seo`, przy `/analyze` |
| keyword-mapper | Mapowanie keywords i kanibalizacja | `/topic-clusters`, `/audit` |
| geo-scorer | Scoring gotowości GEO | `/geo-audit` |
| local-seo-auditor | Ocena zdrowia lokalnego SEO | `/local-seo` |

## seo-analyzer

Wielomodułowa analiza jakości treści produkująca scorecard 0–100.

**Uruchamia się automatycznie:** Po zakończeniu `/write-seo` (jako brama jakości) i przy wywołaniu `/analyze`.

**Pięć modułów analizy:**

1. **Klasyfikacja intencji wyszukiwania** — identyfikuje docelowe keyword, klasyfikuje intencję, mierzy dopasowanie
2. **Gęstość i dystrybucja keywords** — gęstość (cel 1–2%), krytyczne umiejscowienia, pokrycie LSI, ryzyko stuffingu
3. **Porównanie długości treści** — liczba słów vs mediana konkurencji z top 10 SERP
4. **Metryki czytelności** — Flesch Reading Ease (60–70), Kincaid Grade (8–10), passive voice, zróżnicowanie zdań
5. **Rating jakości SEO** — kompozytowy scoring: jakość treści (20%), keywords (20%), meta (15%), struktura (15%), linki (15%), czytelność (15%)

**Dodatkowe sprawdzenia:** Wskaźniki AI content, elementy zaangażowania, okazje schema, potencjał featured snippet.

**Output:** Wizualny scorecard z werdyktem publikacji (GOTOWY / WYMAGA PRACY / NIE GOTOWY).

## keyword-mapper

Mapowanie keywords do stron, wykrywanie kanibalizacji i analiza luk.

**Funkcje główne:**

1. Przypisanie unikalnego primary keyword do każdej strony
2. Wykrywanie kanibalizacji (wiele stron targetujących te same keywords)
3. Rekomendacja rozwiązania: konsolidacja, zróżnicowanie, canonical, redirect lub de-index
4. Identyfikacja luk keywords (keywords konkurencji, których brakuje u Ciebie)
5. Mapowanie keywords do klastrów tematycznych

## geo-scorer

Scoring gotowości GEO dla widoczności w AI search.

**Wymiary scoringu:** Dostęp crawlerów AI (20%), jakość llms.txt (15%), cytowalność treści (20%), schema markup (15%), sygnały E-E-A-T (15%), obecność marki (10%), świeżość treści (5%).

## local-seo-auditor

Ocena zdrowia lokalnego SEO obejmująca kompletność GBP, spójność NAP, pokrycie cytacji, lokalne keywords, schema, opinie i treści lokalne.
