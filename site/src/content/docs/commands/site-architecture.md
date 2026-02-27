---
title: Site Architecture Commands
description: Commands for audits, topic clusters, internal linking, schema, and quick wins
---

## /audit

Full-site SEO audit — technical, on-page, content, and competitive analysis.

**Syntax:**
```
/audit <domain URL> [competitor URLs]
```

**Audit sections:**
1. **Technical SEO** — crawlability, performance, Core Web Vitals, structured data, security
2. **On-Page SEO** — samples 5-10 key pages for element analysis
3. **Content Analysis** — depth, freshness, thin content, duplicates, topic gaps
4. **Keyword Analysis** — current targeting, cannibalization, quick wins
5. **Competitor Comparison** — side-by-side with 1-3 competitors

**Output:** Executive summary with health score, technical checklist, on-page issues table, content gap recommendations, prioritized action plan.

**Example:**
```
/audit https://example.com https://competitor1.com https://competitor2.com
```

---

## /topic-clusters

Map topic clusters with pillar pages, subtopics, and internal linking.

**Syntax:**
```
/topic-clusters <seed topic or keyword>
```

**What it produces:**
- Cluster overview with page count, total volume, timeline
- Pillar page specification (3,000-5,000+ words)
- Cluster page table with keyword, intent, volume, difficulty, priority
- Internal linking matrix
- Content calendar (2-4 pages/month cadence)
- Schema recommendations per page type

**Example:**
```
/topic-clusters "email marketing"
```

---

## /internal-links

Analyze and suggest strategic internal linking improvements.

**Syntax:**
```
/internal-links <URL or sitemap URL> [focus page URL]
```

**Output:** Link health summary, priority link additions, orphan pages list, anchor text improvements, topic cluster link map, implementation checklist.

---

## /schema-gen

Generate JSON-LD schema markup for any page type.

**Syntax:**
```
/schema-gen <URL or page type> [schema types]
```

**Supported types:** Article, FAQ, HowTo, Product, BreadcrumbList, LocalBusiness, Organization, Review, AggregateRating, Event, Recipe, VideoObject, SoftwareApplication.

**Output:** Recommended schema types, copy-paste ready `<script>` blocks, implementation instructions, validation guidance.

**Example:**
```
/schema-gen https://myblog.com/how-to-guide HowTo FAQ
```

---

## /low-hanging-fruit

Find quick-win keywords and pages for immediate ranking gains.

**Syntax:**
```
/low-hanging-fruit <domain URL>
```

**What it finds:**
- Keywords at positions 11-20 (close to page 1)
- High-impression, low-CTR pages
- Pages with missing meta descriptions
- Content ranking for low-difficulty keywords with no dedicated page
- Internal link opportunities to boost existing rankings

**Output:** Prioritized opportunity table with estimated impact, specific action items, effort vs impact matrix.
