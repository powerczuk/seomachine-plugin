---
title: Komendy architektury strony
description: Komendy do audytów, klastrów tematycznych, linkowania wewnętrznego, schema i szybkich wygranych
---

## /audit

Pełny audyt SEO — techniczny, on-page, content i analiza konkurencji.

**Składnia:**

```bash
/audit <URL domeny> [URL-e konkurencji]
```

**Sekcje audytu:**

1. **Techniczne SEO** — crawlability, wydajność, Core Web Vitals, structured data, bezpieczeństwo
2. **On-Page SEO** — próbka 5–10 kluczowych stron pod kątem elementów
3. **Analiza treści** — głębokość, świeżość, thin content, duplikaty, luki tematyczne
4. **Analiza keywords** — aktualne targetowanie, kanibalizacja, szybkie wygrane
5. **Porównanie z konkurencją** — zestawienie z 1–3 konkurentami

**Output:** Executive summary z health score, checklist techniczny, tabela problemów on-page, rekomendacje content gap, priorytetyzowany plan działania.

**Przykład:**

```bash
/audit https://example.com https://konkurent1.com https://konkurent2.com
```

---

## /topic-clusters

Mapowanie klastrów tematycznych z pillar pages, podtematami i linkowaniem wewnętrznym.

**Składnia:**

```bash
/topic-clusters <temat bazowy lub keyword>
```

**Co produkuje:**

- Przegląd klastra z liczbą stron, łącznym wolumenem, timeline
- Specyfikacja pillar page (3 000–5 000+ słów)
- Tabela stron klastra z keyword, intencją, wolumenem, difficulty, priorytetem
- Matryca linkowania wewnętrznego
- Kalendarz contentowy (kadencja 2–4 strony/miesiąc)
- Rekomendacje schema per typ strony

**Przykład:**

```bash
/topic-clusters "email marketing"
```

---

## /internal-links

Analiza i sugestie strategicznego linkowania wewnętrznego.

**Składnia:**

```bash
/internal-links <URL lub sitemap URL> [URL strony docelowej]
```

**Output:** Podsumowanie zdrowia linków, priorytetowe dodania linków, lista stron-sierot, poprawki anchor text, mapa linków klastrów tematycznych, checklist implementacji.

---

## /schema-gen

Generowanie JSON-LD schema markup dla dowolnego typu strony.

**Składnia:**

```bash
/schema-gen <URL lub typ strony> [typy schema]
```

**Obsługiwane typy:** Article, FAQ, HowTo, Product, BreadcrumbList, LocalBusiness, Organization, Review, AggregateRating, Event, Recipe, VideoObject, SoftwareApplication.

**Output:** Rekomendowane typy schema, gotowe do wklejenia bloki `<script>`, instrukcje implementacji, wskazówki walidacji.

**Przykład:**

```bash
/schema-gen https://mojblog.pl/poradnik HowTo FAQ
```

---

## /low-hanging-fruit

Znajdowanie szybkich wygranych — keywords i strony do natychmiastowego wzrostu pozycji.

**Składnia:**

```bash
/low-hanging-fruit <URL domeny>
```

**Co znajduje:**

- Keywords na pozycjach 11–20 (blisko strony 1)
- Strony z dużą liczbą wyświetleń ale niskim CTR
- Strony z brakującymi meta description
- Treści rankujące na łatwe keywords bez dedykowanej strony
- Okazje linkowania wewnętrznego do wzmocnienia istniejących pozycji

**Output:** Priorytetyzowana tabela okazji z szacowanym wpływem, konkretne elementy do działania, matryca wysiłek vs wpływ.
