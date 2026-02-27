---
title: Przypadki użycia i workflow
description: Realne workflow SEO Machine z przykładowymi danymi wejściowymi i wynikami
---

## Workflow 1 — Napisz nowy artykuł SEO

```bash
/research "najlepsze narzędzia do zarządzania projektami dla startupów"
/content-brief "najlepsze narzędzia do zarządzania projektami dla startupów"
/write-seo "najlepsze narzędzia do zarządzania projektami dla startupów" 2800
/optimize [plik artykułu]
/meta-tags [plik artykułu]
/schema-gen [URL artykułu] Article FAQ
/internal-links https://twojblog.pl/sitemap.xml [URL artykułu]
```

**Czas realizacji:** ~15–20 minut na kompletny artykuł gotowy do publikacji.

## Workflow 2 — Pełny audyt strony

```bash
/audit https://example.com https://konkurent1.com https://konkurent2.com
/low-hanging-fruit https://example.com
/topic-clusters "kluczowy temat produktu"
/internal-links https://example.com/sitemap.xml
```

**Output:** Kompletny raport audytu, okazje szybkich wygranych, strategia klastrów tematycznych i plan optymalizacji linków.

## Workflow 3 — Odzyskiwanie treści

Dla strony, która spadła ze strony 1 na stronę 2–3:

```bash
/analyze https://twojblog.pl/spadajacy-artykul
/rewrite https://twojblog.pl/spadajacy-artykul "docelowe keyword"
/analyze [przepisana treść]
```

Cel: wynik 70+ przed ponowną publikacją.

## Workflow 4 — Optymalizacja GEO

```bash
/geo-audit https://example.com "Nazwa Marki"
/llms-txt https://example.com https://example.com/sitemap.xml
/schema-gen https://example.com/kluczowa-strona Article FAQ Organization
```

## Workflow 5 — Firma lokalna

```bash
/local-seo "Pizzeria Roma" "Warszawa, Mokotów" https://g.page/pizzeria-roma
/schema-gen https://pizzeria-roma.pl LocalBusiness Restaurant
/content-brief "najlepsza pizzeria w Warszawie"
```

## Workflow 6 — Wywiad konkurencyjny

```bash
/competitors https://twojastrona.pl https://rywal1.pl https://rywal2.pl
/topic-clusters "[kluczowy temat]"
/content-brief "[keyword z luki]"
/write-seo "[keyword z luki]"
```
