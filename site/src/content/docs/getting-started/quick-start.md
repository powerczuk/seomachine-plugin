---
title: Quick Start
description: Your first SEO Machine workflow in 5 minutes
---

This guide walks you through a complete content creation workflow — from keyword research to a published-ready article — in about 5 minutes.

## Step 1: Research your topic

```
/research "best email marketing tools for small business"
```

This returns:
- 15-25 keyword opportunities with volume, difficulty, and intent
- SERP landscape analysis (what's ranking, content formats, word counts)
- Competitive gaps (what top results are missing)
- 3 meta title and description options

## Step 2: Generate a content brief

```
/content-brief "best email marketing tools for small business"
```

This returns a writer-ready brief including:
- Recommended article structure (H1, H2, H3 hierarchy)
- Keywords to include (primary, secondary, questions, LSI)
- Featured snippet strategy
- Schema markup recommendations

## Step 3: Write the article

```
/write-seo "best email marketing tools for small business" 2500
```

This produces a full 2,500-word SEO-optimized article with:
- Hook introduction using the APP method
- Evidence-backed body sections
- Mini-stories for engagement
- Contextual CTAs
- Automatic quality scoring (0-100)

## Step 4: Check the score

The article is automatically scored after writing. If it needs work:

```
/optimize [article file]
```

This applies fixes and shows a before/after comparison. Target: 70+ to publish.

## Step 5: Add meta tags and schema

```
/meta-tags [article file]
/schema-gen [article URL] Article FAQ
```

## What's next?

- Run a full site audit: `/audit https://yoursite.com`
- Find quick wins: `/low-hanging-fruit https://yoursite.com`
- Check AI search visibility: `/geo-audit https://yoursite.com`
- Build topic clusters: `/topic-clusters "your core topic"`

See [Use Cases & Workflows](/guides/use-cases/) for complete real-world examples.
