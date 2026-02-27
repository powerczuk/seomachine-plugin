---
title: Skills Reference
description: Deep knowledge modules that power SEO Machine's analysis and recommendations
---

Skills are knowledge modules that Claude loads automatically when relevant. They provide the frameworks, scoring systems, and best practices behind the commands.

## Skills Overview

| Skill | Purpose | Loaded by |
|-------|---------|-----------|
| SEO Fundamentals | Core SEO knowledge | `/research`, `/audit`, `/internal-links`, `/schema-gen` |
| Content Optimizer | Content scoring and optimization | `/write-seo`, `/optimize`, `/analyze`, `/content-brief` |
| Programmatic SEO | Scaling content production | `/topic-clusters`, `/audit`, `/low-hanging-fruit` |
| GEO Fundamentals | AI search optimization | `/geo-audit`, `/llms-txt` |
| Local SEO | Local search optimization | `/local-seo` |

## SEO Fundamentals

Core knowledge covering on-page optimization, technical SEO, keyword strategy, and ranking factors.

**Key modules:**
- **Search Intent Classification** — informational, navigational, commercial, transactional
- **On-Page SEO Elements** — title tags, meta descriptions, headings, URL structure, keyword placement
- **Technical SEO Checklist** — crawlability, Core Web Vitals (LCP <2.5s, INP <200ms, CLS <0.1), security, structured data
- **E-E-A-T Signals** — experience, expertise, authoritativeness, trustworthiness
- **Internal Linking Strategy** — 3-5+ links per article, descriptive anchors, cluster support

## Content Optimizer

Systematic content scoring and optimization framework.

**Scoring System (0-100):**

| Dimension | Weight | Target Metrics |
|-----------|--------|---------------|
| Keyword Optimization | 25% | 1-2% density, critical placements, LSI terms |
| Readability | 20% | Flesch 60-70, Grade 8-10, passive <20% |
| Content Structure | 20% | H2 every 300 words, 2,000+ words total |
| Engagement | 20% | Hook intro, 2-3 stories, 2-3 CTAs |
| Technical SEO | 15% | Meta elements, links, schema |

**AI Content Scrubbing:** Detects formulaic patterns, uniform structure, and lack of specificity typical of AI-generated content. Applies natural voice, varied sentence lengths, specific examples, and conversational asides.

## Programmatic SEO

Frameworks for scaling content and finding opportunities.

**Topic Cluster Architecture:**
- Pillar Page (3,000-5,000+ words)
- Cluster Pages (1,500-2,500 words)
- Supporting Content (FAQs, glossaries, case studies)

**8-Factor Opportunity Scoring:** Search volume (20%), keyword difficulty (15%), current position (15%), content gap (15%), business relevance (15%), conversion potential (10%), freshness need (5%), trending momentum (5%).

**Quick Wins:** Position 11-20 keywords, high-impression low-CTR pages, missing meta descriptions, thin ranking content.

## GEO Fundamentals

AI search optimization knowledge base.

**GEO Scoring Dimensions:** AI crawler access, llms.txt quality, content citability, schema markup, E-E-A-T signals, brand presence, content freshness.

**Key Techniques:** Standalone passages (~800 tokens), statistics with sources, expert quotes with attribution, brand presence across 10+ platforms, llms.txt implementation.

## Local SEO

Local search optimization covering GBP, citations, and local schema.

**Coverage:** Google Business Profile optimization, NAP consistency, citation building (data aggregators, major directories, industry-specific), local keyword patterns, LocalBusiness schema, review management.
