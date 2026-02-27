---
title: Content Creation Commands
description: Commands for keyword research, content writing, optimization, and meta tags
---

## /research

Keyword research, SERP analysis, and competitive gap identification.

**Syntax:**
```
/research <keyword or topic> [competitor URLs]
```

**What it does:**
1. Discovers keyword variations — primary, long-tail, questions, LSI terms
2. Analyzes the SERP — content types, word counts, featured snippets
3. Identifies competitive gaps — underexplored subtopics, outdated content
4. Classifies search intent

**Output:** Keyword opportunity table (15-25 keywords), SERP summary, competitive gaps, content architecture recommendation, 3 meta title/description options.

**Example:**
```
/research "best CRM for small business" https://hubspot.com https://salesforce.com
```

---

## /write-seo

Write SEO-optimized long-form content.

**Syntax:**
```
/write-seo <topic or keyword> [target word count]
```

Default word count: 2,500. Recommended range: 2,000-3,000+.

**What it does:**
1. Quick research — keywords, competitors, gaps
2. Builds heading hierarchy
3. Writes full article with hook intro (APP method), evidence-backed sections, 2-3 mini-stories, 2-3 CTAs
4. AI content scrubbing — removes robotic patterns
5. Automatic quality scoring

**Output:** Full article in markdown, meta options, internal link suggestions, schema recommendation, quality score.

---

## /optimize

Analyze and optimize existing content.

**Syntax:**
```
/optimize <content file or URL>
```

**Process:** Five-dimension analysis → scorecard → issue prioritization → optimized version with all fixes → before/after comparison.

**Publishing threshold:** 70/100 minimum.

---

## /analyze

Deep SEO quality analysis with 0-100 scoring.

**Syntax:**
```
/analyze <URL or file path>
```

Runs five modules: search intent classification, keyword density and distribution, content length comparison, readability metrics (Flesch, Kincaid, Gunning Fog), and composite SEO quality rating.

---

## /content-brief

Generate a comprehensive content brief for writers.

**Syntax:**
```
/content-brief <target keyword>
```

**Output:** Brief header, keyword tables, recommended outline with H1/H2/H3 hierarchy, meta options, featured snippet strategy, link targets, schema recommendation, quality standards.

---

## /meta-tags

Generate optimized meta titles, descriptions, and Open Graph tags.

**Syntax:**
```
/meta-tags <URL, keyword, or content file>
```

**Output:** 5 title options (50-60 chars), 5 description options (150-160 chars), 3 URL slug suggestions, complete OG tag set, before/after comparison if optimizing existing page.

---

## /rewrite

Refresh and update declining content.

**Syntax:**
```
/rewrite <URL or file> [target keyword]
```

**What it does:** Analyzes current performance, identifies what's outdated vs current SERP leaders, rewrites with fresh data, preserves URL and ranking equity, adds freshness timestamp, runs full scoring.
