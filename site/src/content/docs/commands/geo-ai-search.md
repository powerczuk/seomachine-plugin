---
title: GEO & AI Search Commands
description: Commands for optimizing visibility in AI search engines
---

## /geo-audit

Audit your site's visibility and citability in AI search engines like ChatGPT, Perplexity, and Google AI Overviews.

**Syntax:**
```
/geo-audit <domain URL> [brand name]
```

**What it checks:**

| Dimension | What it measures |
|-----------|-----------------|
| AI Crawler Access | robots.txt allowing GPTBot, ClaudeBot, PerplexityBot |
| llms.txt Presence | Whether you have an llms.txt file and its quality |
| Content Citability | Whether passages can stand alone when extracted by AI |
| Schema Markup | Structured data that helps AI engines parse content |
| E-E-A-T Signals | Author bios, credentials, citations, expert quotes |
| Brand Mentions | Third-party mentions, earned media, social sentiment |
| Content Freshness | Last-updated timestamps, recency of data |
| Technical Readiness | JavaScript rendering, hidden content issues |

**Output:** GEO readiness score (0-100), issue-by-issue breakdown with fix instructions, prioritized action plan, competitor comparison.

**Example:**
```
/geo-audit https://example.com "Example Brand"
```

See the [GEO Guide](/guides/geo/) for the full framework behind this command.

---

## /llms-txt

Generate an optimized llms.txt file for AI crawler guidance.

**Syntax:**
```
/llms-txt <domain URL> [sitemap URL]
```

**What it does:**
1. Crawls your sitemap or top pages to identify authoritative content
2. Categorizes pages by topic and importance
3. Generates a Markdown-formatted llms.txt following the specification
4. Provides placement instructions

**Output:** Ready-to-deploy llms.txt file, deployment instructions (place at `domain.com/llms.txt`), optional llms-full.txt for comprehensive coverage.

**Example:**
```
/llms-txt https://example.com https://example.com/sitemap.xml
```

### What is llms.txt?

The llms.txt file is a standard that acts as a curated Markdown index for LLM crawlers. Unlike robots.txt (which controls access), llms.txt tells AI systems which content is most important and how it's organized.

LLMs have limited context windows and struggle to process entire websites. By providing a standardized Markdown file at `/llms.txt`, you give AI systems a clear overview of your most important content.

As of mid-2025, over 950 domains have adopted this standard, including Anthropic, Cloudflare, Stripe, and Vercel.
