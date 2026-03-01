---
title: Komendy tworzenia treści
description: Komendy do badania keywords, pisania treści, optymalizacji i meta tagów
---

## /research

Badanie słów kluczowych, analiza SERP i identyfikacja luk konkurencji.

**Składnia:**

```bash
/research <keyword lub temat> [URL-e konkurencji]
```

**Co robi:**

1. Odkrywa warianty keywords — primary, long-tail, pytania, terminy LSI
2. Analizuje SERP — typy treści, długości, featured snippets
3. Identyfikuje luki konkurencji — niezbadane podtematy, przestarzałe treści
4. Klasyfikuje intencję wyszukiwania

**Output:** Tabela okazji keywords (15–25 fraz), podsumowanie SERP, luki konkurencji, rekomendacja architektury treści, 3 opcje meta title/description.

**Przykład:**

```bash
/research "najlepszy CRM dla małych firm" https://hubspot.com https://salesforce.com
```

---

## /write-seo

Pisanie zoptymalizowanego artykułu SEO.

**Składnia:**

```bash
/write-seo <temat lub keyword> [docelowa liczba słów]
```

Domyślna liczba słów: 2 500. Zalecany zakres: 2 000–3 000+.

**Co robi:**

1. Szybki research — keywords, konkurencja, luki
2. Buduje hierarchię nagłówków
3. Pisze pełny artykuł z hookiem we wstępie (metoda APP), sekcjami popartymi dowodami, 2–3 mini-stories, 2–3 CTA
4. AI content scrubbing — usuwanie robotycznych wzorców
5. Automatyczny scoring jakości

**Output:** Pełny artykuł w markdown, opcje meta, sugestie linków wewnętrznych, rekomendacja schema, wynik jakości.

---

## /optimize

Analiza i optymalizacja istniejącej treści.

**Składnia:**

```bash
/optimize <plik treści lub URL>
```

**Proces:** Analiza pięciowymiarowa → scorecard → priorytetyzacja problemów → zoptymalizowana wersja z poprawkami → porównanie przed/po.

**Próg publikacji:** minimum 70/100.

---

## /analyze

Głęboka analiza jakości SEO ze scoringiem 0–100.

**Składnia:**

```bash
/analyze <URL lub ścieżka do pliku>
```

Uruchamia pięć modułów: klasyfikację intencji wyszukiwania, gęstość i dystrybucję keywords, porównanie długości treści, metryki czytelności (Flesch, Kincaid, Gunning Fog) i kompozytowy rating jakości SEO.

---

## /content-brief

Generowanie kompleksowego briefu contentowego dla copywriterów.

**Składnia:**

```bash
/content-brief <docelowe keyword>
```

**Output:** Nagłówek briefu, tabele keywords, rekomendowany outline z hierarchią H1/H2/H3, opcje meta, strategia featured snippet, cele linkowania, rekomendacja schema, standardy jakości.

---

## /meta-tags

Generowanie zoptymalizowanych meta title, description i Open Graph tagów.

**Składnia:**

```bash
/meta-tags <URL, keyword lub plik treści>
```

**Output:** 5 opcji title (50–60 znaków), 5 opcji description (150–160 znaków), 3 sugestie URL slug, kompletny zestaw OG tagów, porównanie przed/po przy optymalizacji istniejącej strony.

---

## /rewrite

Odświeżanie i aktualizacja spadającej treści.

**Składnia:**

```bash
/rewrite <URL lub plik> [docelowe keyword]
```

**Co robi:** Analizuje bieżącą wydajność, identyfikuje co jest przestarzałe vs liderzy SERP, przepisuje z aktualnymi danymi, zachowuje URL i equity rankingowe, dodaje timestamp świeżości, przeprowadza pełny scoring.

---

## /humanize

Usuwanie wzorców AI i nadawanie treściom naturalnego, ludzkiego głosu.

**Składnia:**

```bash
/humanize [--tone casual|professional|editorial|conversational] [--score-only] <tekst, ścieżka do pliku lub URL>
```

**Co robi:**

1. Oblicza początkowy wynik humanizacji (0–100) mierzący wykrywalność AI
2. Skanuje dziewięć kategorii wzorców AI (nadmierny patos, język promocyjny, ogólnikowe źródła, nadużycie em dash, reguła trzech, słownictwo AI, negatywne paralelizmy, spójnikowe wypełniacze, powierzchowne analizy)
3. Przepisuje oznaczone fragmenty na naturalne, bezpośrednie alternatywy
4. Stosuje wybrany preset tonu (`casual`, `professional`, `editorial` lub `conversational` [domyślny])
5. Wstrzykuje głos — opinie, zmienność rytmu, pierwsza osoba, konkretność
6. Finalny przegląd anty-AI — „Co sprawia, że to brzmi jak AI?" i poprawki
7. Oblicza finalny wynik i pokazuje porównanie przed/po

**Flagi:**

- `--tone <preset>` — kierunek głosu: `casual`, `professional`, `editorial` lub `conversational` (domyślny)
- `--score-only` — pokaż wynik humanizacji bez przepisywania (tryb diagnostyczny)

**Output:** Wynik humanizacji (przed → po), zhumanizowana wersja treści w wybranym tonie, opcjonalny log zmian.

**Przykład:**

```bash
/humanize "Furthermore, our platform offers a comprehensive suite of tools that are crucial for modern businesses seeking to leverage synergies in the evolving digital landscape."
```

**Aktywuje się też naturalnie gdy powiesz:**
- „Spraw, żeby to brzmiało bardziej ludzko"
- „Usuń wzorce AI z tego tekstu"
- „Zhumanizuj tę treść"
