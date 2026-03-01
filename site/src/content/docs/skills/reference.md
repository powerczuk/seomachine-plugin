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
| Humanizer | Usuwanie wzorców AI i humanizacja treści | `/humanize` |

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

## Humanizer

Wykrywa i przepisuje wzorce typowe dla treści generowanych przez AI, nadając im naturalny, ludzki ton. Oparty na przewodniku „Signs of AI Writing" z Wikipedii (WikiProject AI Cleanup).

**9 kategorii wykrywanych wzorców:**

| Wzorzec | Jak wygląda | Naprawa |
|---------|-------------|---------|
| Nadmierny patos | „marks a pivotal moment", „stands as a testament" | Wyciąć lub przepisać z konkretnymi faktami |
| Język promocyjny | „groundbreaking", „revolutionary", „game-changing" | Zastąpić konkretnymi danymi |
| Powierzchowne analizy z -ing | „exploring the nuances of...", „delving into..." | Pominąć wstępy; przejść do sedna |
| Ogólnikowe źródła | „experts say", „studies show", „many believe" | Podać źródło lub usunąć |
| Nadużycie em dash | zdanie — zdanie — zdanie | Używać oszczędnie; restrukturyzować zdania |
| Reguła trzech | „fast, reliable, and scalable" | Wybrać jedno słowo lub przeformułować |
| Słownictwo AI | „delve", „meticulous", „crucial", „leverage", „tapestry" | Zastąpić prostym językiem |
| Negatywne paralelizmy | „not only...but also", „not just...but" | Przeformułować bezpośrednio |
| Spójnikowe wypełniacze | „Furthermore,", „Moreover,", „In conclusion," | Usunąć; pozwolić myślom łączyć się naturalnie |

**Wstrzykiwanie głosu:**

- **Opinie** — reaguje na fakty zamiast neutralnego raportowania
- **Zmienność rytmu** — miesza krótkie, dynamiczne zdania z dłuższymi
- **Złożoność** — dopuszcza mieszane odczucia i niepewność
- **Pierwsza osoba** — używa „ja" tam, gdzie pasuje
- **Konkretność** — zastępuje ogólnikowe opisy liczbami, nazwami, datami

**Presety tonu (v2.2):**

| Preset | Styl | Najlepszy dla |
|--------|------|---------------|
| `casual` | Krótkie zdania, kolokwializmy, „ty/ja" | Posty blogowe, social media, newslettery |
| `professional` | Czysto i bezpośrednio, bez slangu | B2B, whitepapers, case studies |
| `editorial` | Opiniodawczy, pewny głos, ustrukturyzowane argumenty | Thought leadership, felietony |
| `conversational` (domyślny) | Naturalny miks, jak wyjaśnianie koledze | Treści ogólne, landing pages, poradniki |

**Humanization Score (v2.2):** Wynik 0–100 mierzący wykrywalność AI, pokazywany przed i po humanizacji.

| Czynnik | Waga | Co mierzy |
|---------|------|-----------|
| Słownictwo AI | 25% | Częstotliwość znanych słów AI („delve", „crucial", „leverage" itp.) |
| Różnorodność zdań | 20% | Odchylenie standardowe długości i typów zdań |
| Powtarzalność wzorców | 15% | Reguła trzech, negatywne paralelizmy, szablonowe konstrukcje |
| Obecność głosu | 15% | Opinie, pierwsza osoba, konkretność, markery osobowości |
| Wypełniacze przejściowe | 15% | Gęstość „Furthermore", „Moreover", „In conclusion" |
| Wzorce interpunkcji | 10% | Częstotliwość em dash, jednolite nawyki interpunkcyjne |
