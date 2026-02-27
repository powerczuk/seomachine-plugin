# Agents Reference

Agents are autonomous sub-processes that perform specialized analysis tasks. They run independently with their own tool access and return structured results.

## Agents Overview

| Agent | Purpose | Trigger Context |
|-------|---------|----------------|
| seo-analyzer | Multi-module content quality analysis with 0-100 scoring | After `/write-seo`, on `/analyze`, quality checks |
| keyword-mapper | Keyword mapping, cannibalization detection, gap analysis | `/topic-clusters`, `/audit`, keyword assignment |
| geo-scorer | GEO readiness scoring for AI search visibility | `/geo-audit`, site-level GEO assessment |
| local-seo-auditor | Local SEO health assessment | `/local-seo`, local business audit |

---

## seo-analyzer

Multi-module content quality analysis that produces a visual 0-100 scorecard.

### When it runs
- Automatically triggered after `/write-seo` completes (quality gate)
- Directly invoked by `/analyze` command
- When asking "How does this page score for SEO?"
- When checking content publishing readiness

### Analysis Modules

**Module 1: Search Intent Classification**
- Identifies the target keyword from the content
- Classifies intent type (informational, navigational, commercial, transactional)
- Measures content-intent alignment
- Outputs confidence score (0-100%)

**Module 2: Keyword Density & Distribution**
- Primary keyword density (target: 1-2%)
- Critical placement check: H1, first 100 words, H2s, last 100 words, URL, meta title
- Secondary and LSI keyword coverage
- Keyword stuffing risk assessment
- Distribution map (even spread vs front-loaded)

**Module 3: Content Length Comparison**
- Article word count
- Competitor median word count (from SERP analysis of top 10)
- Relative positioning (shorter/longer than median)
- Target word count recommendation

**Module 4: Readability Metrics**
- Flesch Reading Ease (target: 60-70)
- Flesch-Kincaid Grade Level (target: 8-10)
- Average sentence length
- Average paragraph length
- Passive voice ratio (target: <20%)
- Sentence variety score
- Overall readability grade

**Module 5: SEO Quality Rating (0-100)**

| Category | Weight |
|----------|--------|
| Content quality | 20% |
| Keyword optimization | 20% |
| Meta elements | 15% |
| Content structure | 15% |
| Internal/external links | 15% |
| Readability | 15% |

### Additional Checks
- AI content indicators (formulaic patterns, lack of specificity)
- Engagement elements (hooks, stories, CTAs)
- Schema markup opportunities
- Featured snippet targeting potential

### Output Format
```
SEO QUALITY SCORECARD
=====================
Overall Score: 78/100 [PASS - Publishing Ready]

Dimensions:
  Keyword Optimization:  82/100 ████████░░
  Readability:          75/100 ███████░░░
  Content Structure:    80/100 ████████░░
  Engagement:           70/100 ███████░░░
  Technical SEO:        79/100 ████████░░

Strengths: [list]
Critical Issues: [list]
High-Priority Improvements: [list]
Quick Fixes: [list]

Publishing Verdict: READY / NEEDS WORK / NOT READY
```

### Tools Available
Read, Grep, WebFetch, WebSearch

---

## keyword-mapper

Keyword mapping, cannibalization detection, and keyword-to-page assignment across a website.

### When it runs
- User asks if pages are competing for the same keywords
- Planning content for a topic cluster and needs keyword assignment
- Ranking drops suspected due to cannibalization
- Invoked during `/topic-clusters` and `/audit` commands

### Core Responsibilities

**1. Keyword-to-Page Mapping**
- Assigns a unique primary keyword to each page
- Ensures no two pages target the same primary keyword
- Maps secondary keywords without overlap

**2. Cannibalization Detection**
Flags pages that compete for the same keywords:
- Multiple pages with the same target keyword in title tags
- Overlapping H1 headings
- Similar content covering the same topic
- Multiple pages ranking for the same query in Search Console

**3. Resolution Recommendations**
For each cannibalization issue:
- **Consolidate** — merge content into one page + 301 redirect
- **Differentiate** — rewrite to target different intents or angles
- **Canonical** — set canonical tag to the preferred version
- **Redirect** — 301 the weaker page to the stronger one
- **De-index** — noindex the duplicate if not worth merging

**4. Keyword Gap Identification**
- Keywords your competitors rank for but you don't
- Keywords with search volume but no dedicated page
- Questions your audience asks that you haven't answered

**5. Cluster Assignment**
- Maps each keyword to a topic cluster
- Identifies cluster gaps (thin clusters, missing pillar pages)
- Recommends new cluster creation where warranted

### Output Format
```
KEYWORD MAP
===========
| Page URL | Primary Keyword | Secondary Keywords | Cluster |
|----------|-----------------|-------------------|---------|

CANNIBALIZATION ISSUES
======================
| Keywords | Competing Pages | Severity | Recommended Action |
|----------|----------------|----------|-------------------|

KEYWORD GAPS
============
| Keyword | Volume | Difficulty | Recommended Action |
|---------|--------|-----------|-------------------|

ACTION ITEMS (Prioritized)
==========================
1. [Critical] ...
2. [High] ...
3. [Medium] ...
```

### Tools Available
Read, Grep, WebFetch, WebSearch

---

## geo-scorer (New in v2)

GEO readiness scoring for AI search visibility.

### When it runs
- Invoked by `/geo-audit` command
- When user asks "How visible is my site to AI search engines?"
- Site-level GEO assessments

### Analysis Dimensions

| Dimension | Weight | What it checks |
|-----------|--------|---------------|
| AI Crawler Access | 20% | robots.txt allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended |
| llms.txt Quality | 15% | Presence, completeness, correct format, content coverage |
| Content Citability | 20% | Passages stand alone, no cross-references, ~800 token blocks |
| Schema Markup | 15% | JSON-LD coverage, correct types, validation |
| E-E-A-T Signals | 15% | Author bios, credentials, expert quotes, trust indicators |
| Brand Presence | 10% | Third-party mentions, directory listings, social profiles |
| Content Freshness | 5% | Last-updated timestamps, recency of data |

### Output Format
```
GEO READINESS SCORECARD
=======================
Overall Score: 64/100

AI Crawler Access:    90/100 █████████░
llms.txt:             0/100  ░░░░░░░░░░  [CRITICAL - Missing]
Content Citability:   72/100 ███████░░░
Schema Markup:        80/100 ████████░░
E-E-A-T Signals:      55/100 ██████░░░░
Brand Presence:       60/100 ██████░░░░
Content Freshness:    70/100 ███████░░░

Critical Actions:
1. Create llms.txt file (see /llms-txt command)
2. Add author bios with credentials to all articles
3. ...
```

### Tools Available
Read, Grep, WebFetch, WebSearch

---

## local-seo-auditor (New in v2)

Local SEO health assessment for businesses serving geographic areas.

### When it runs
- Invoked by `/local-seo` command
- When user asks about local search optimization
- Local business audits

### Analysis Areas

1. **Google Business Profile completeness** — categories, hours, photos, posts, Q&A
2. **NAP consistency** — cross-reference Name, Address, Phone across top 20 citation sources
3. **Citation coverage** — presence on data aggregators, major directories, industry-specific sites
4. **Local keyword targeting** — "near me" terms, city modifiers, service+location combinations
5. **Local schema markup** — LocalBusiness, GeoCoordinates, OpeningHours
6. **Review health** — rating, volume, recency, response rate, sentiment
7. **Local content** — location pages, area guides, community involvement

### Tools Available
Read, Grep, WebFetch, WebSearch
