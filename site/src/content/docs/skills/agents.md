---
title: Agents Reference
description: Autonomous analysis agents that perform specialized SEO tasks
---

Agents are autonomous sub-processes that run specialized analysis. They have their own tool access and return structured results.

## Agents Overview

| Agent | Purpose | Trigger |
|-------|---------|---------|
| seo-analyzer | Content quality scoring (0-100) | After `/write-seo`, on `/analyze` |
| keyword-mapper | Keyword mapping and cannibalization | `/topic-clusters`, `/audit` |
| geo-scorer | GEO readiness scoring | `/geo-audit` |
| local-seo-auditor | Local SEO health assessment | `/local-seo` |

## seo-analyzer

Multi-module content quality analysis producing a 0-100 scorecard.

**Runs automatically:** After `/write-seo` completes (as a quality gate) and when `/analyze` is invoked.

**Five analysis modules:**
1. **Search Intent Classification** — identifies target keyword, classifies intent, measures alignment
2. **Keyword Density & Distribution** — density (target 1-2%), critical placements, LSI coverage, stuffing risk
3. **Content Length Comparison** — word count vs competitor median from SERP top 10
4. **Readability Metrics** — Flesch Reading Ease (60-70), Kincaid Grade (8-10), passive voice, sentence variety
5. **SEO Quality Rating** — composite score: content quality (20%), keywords (20%), meta (15%), structure (15%), links (15%), readability (15%)

**Additional checks:** AI content indicators, engagement elements, schema opportunities, featured snippet potential.

**Output:** Visual scorecard with publishing verdict (READY / NEEDS WORK / NOT READY).

## keyword-mapper

Keyword-to-page mapping, cannibalization detection, and gap analysis.

**Core functions:**
1. Assign unique primary keyword to each page
2. Detect cannibalization (multiple pages targeting same keywords)
3. Recommend resolution: consolidate, differentiate, canonical, redirect, or de-index
4. Identify keyword gaps (competitor keywords you're missing)
5. Map keywords to topic clusters

## geo-scorer

GEO readiness scoring for AI search visibility.

**Scoring dimensions:** AI crawler access (20%), llms.txt quality (15%), content citability (20%), schema markup (15%), E-E-A-T signals (15%), brand presence (10%), content freshness (5%).

## local-seo-auditor

Local SEO health assessment covering GBP completeness, NAP consistency, citation coverage, local keywords, schema, reviews, and local content.
