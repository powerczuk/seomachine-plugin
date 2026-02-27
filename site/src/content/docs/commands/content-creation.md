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
