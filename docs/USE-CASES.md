# Use Cases & Workflows

Real-world workflows with example inputs and outputs showing how SEO Machine commands chain together for different scenarios.

---

## Workflow 1: Write a New SEO Article from Scratch

**Scenario:** You need to create a blog post targeting "best project management tools for startups" for a SaaS blog.

### Step 1: Research Keywords

```
/research "best project management tools for startups"
```

**Example output (abbreviated):**

```
KEYWORD OPPORTUNITIES
=====================
| Keyword                                | Volume | KD  | Intent      | Priority |
|----------------------------------------|--------|-----|-------------|----------|
| best project management tools startups | 2,400  | 35  | Commercial  | HIGH     |
| project management software small team | 1,800  | 28  | Commercial  | HIGH     |
| startup project management app         | 1,100  | 22  | Commercial  | HIGH     |
| free project management tools          | 8,100  | 45  | Commercial  | MEDIUM   |
| asana vs monday vs trello              | 3,200  | 40  | Commercial  | MEDIUM   |
| how to manage projects in a startup    | 720    | 15  | Informational| MEDIUM  |
| agile tools for startups               | 590    | 18  | Commercial  | MEDIUM   |
...

SERP LANDSCAPE
==============
- Content type: Listicles (7/10 results), comparison guides (3/10)
- Average word count: 2,800 words
- Featured snippet: List format (top 5 tools)
- SERP features: People Also Ask (6), Related searches (8)
- Must-cover tools: Asana, Monday.com, Trello, ClickUp, Notion, Linear

COMPETITIVE GAPS
================
- No top-10 result covers AI-powered PM tools specifically
- Most articles last updated 6+ months ago
- None address startup-specific constraints (budget, team size 1-10)
```

### Step 2: Generate Content Brief

```
/content-brief "best project management tools for startups"
```

**Example output (abbreviated):**

```
CONTENT BRIEF
=============
Target Keyword: best project management tools for startups
Search Intent: Commercial Investigation
Target Word Count: 2,500-3,000
Target Audience: Startup founders, early-stage CTOs, operations leads

RECOMMENDED OUTLINE
===================
H1: Best Project Management Tools for Startups in 2026
  H2: What to Look for in Startup PM Software
    H3: Budget constraints (free tiers matter)
    H3: Scalability from 2 to 50 people
    H3: Integration with developer tools
  H2: Top 8 Project Management Tools for Startups
    H3: [Tool Name] — Best for [Use Case]
    (repeat for each tool)
  H2: Comparison Table
  H2: How to Choose the Right Tool for Your Stage
    H3: Pre-seed / Solo founder
    H3: Seed / 2-10 person team
    H3: Series A / 10-50 person team
  H2: FAQ

META OPTIONS
============
Title 1: "8 Best Project Management Tools for Startups in 2026 [Tested]"
Title 2: "Best Startup PM Tools (2026) — From Free to Enterprise"
Title 3: "Project Management for Startups: 8 Tools That Actually Scale"
```

### Step 3: Write the Article

```
/write-seo "best project management tools for startups" 2800
```

Output: Full 2,800-word article with meta tags, schema recommendation, and quality score.

### Step 4: Optimize & Score

```
/optimize [article file]
```

Output: Scorecard (e.g., 82/100), specific improvements applied, before/after comparison.

### Step 5: Add Meta Tags & Schema

```
/meta-tags [article file]
/schema-gen [article URL] Article FAQ
```

### Step 6: Internal Linking

```
/internal-links https://yourblog.com/sitemap.xml https://yourblog.com/best-pm-tools-startups
```

---

## Workflow 2: Full Site SEO Audit

**Scenario:** You've been hired to audit a mid-size B2B SaaS website and produce an action plan.

### Step 1: Comprehensive Audit

```
/audit https://example-saas.com https://competitor1.com https://competitor2.com
```

**Example output (abbreviated):**

```
EXECUTIVE SUMMARY
=================
Overall SEO Health: 62/100

Technical: 71/100 — 3 critical issues found
On-Page: 58/100 — Widespread meta tag problems
Content: 55/100 — Thin content on key pages, no topic clusters
Keywords: 65/100 — Significant cannibalization detected

CRITICAL ISSUES
===============
1. [CRITICAL] 47 pages return 404 errors
2. [CRITICAL] No XML sitemap submitted to Google
3. [CRITICAL] Core Web Vitals failing on mobile (LCP 4.2s)
4. [HIGH] 23 pages missing meta descriptions
5. [HIGH] 8 keyword cannibalization pairs detected
...

QUICK WINS (implement this week)
=================================
1. Fix 47 broken URLs with 301 redirects
2. Submit XML sitemap to Google Search Console
3. Add meta descriptions to 23 pages
4. Compress hero images (saving ~2.3s on LCP)

STRATEGIC INVESTMENTS (next 90 days)
=====================================
1. Build topic cluster around core product category
2. Resolve 8 cannibalization issues
3. Create 12 new content pieces targeting identified gaps
4. Implement schema markup on all product pages
```

### Step 2: Find Quick Wins

```
/low-hanging-fruit https://example-saas.com
```

### Step 3: Build Topic Strategy

```
/topic-clusters "project management software"
```

### Step 4: Fix Internal Linking

```
/internal-links https://example-saas.com/sitemap.xml
```

---

## Workflow 3: Content Refresh & Recovery

**Scenario:** An article that used to rank on page 1 has dropped to page 2-3 over the past 6 months.

### Step 1: Analyze Current State

```
/analyze https://yourblog.com/declining-article
```

**Example output:**
```
SEO QUALITY SCORECARD: 48/100 [NOT READY - Needs significant work]

Key Issues:
- Content outdated (references 2023 data)
- Missing H3 subheadings (wall of text)
- No internal links to newer content
- Keyword density too low (0.3%, target 1-2%)
- No schema markup
- Competitor median word count: 3,200 (you: 1,400)
```

### Step 2: Rewrite

```
/rewrite https://yourblog.com/declining-article "target keyword"
```

### Step 3: Verify Quality

```
/analyze [rewritten content]
```

Target: 70+ score before republishing.

---

## Workflow 4: GEO Optimization for AI Search

**Scenario:** You want your brand to appear in ChatGPT, Perplexity, and Google AI Overview answers.

### Step 1: GEO Audit

```
/geo-audit https://example.com "Example Brand"
```

**Example output:**
```
GEO READINESS: 42/100

CRITICAL:
- robots.txt blocks GPTBot and ClaudeBot
- No llms.txt file
- 60% of content uses "as mentioned above" references

HIGH:
- No author bios on articles
- Schema markup on only 3/47 pages
- Brand mentioned on only 4 external platforms
```

### Step 2: Generate llms.txt

```
/llms-txt https://example.com https://example.com/sitemap.xml
```

### Step 3: Fix Content Citability

```
/optimize [key articles]
```
(Focus on making passages standalone)

### Step 4: Add Schema

```
/schema-gen https://example.com/key-page Article FAQ Organization
```

---

## Workflow 5: Local Business SEO

**Scenario:** A local restaurant wants to improve visibility in "near me" searches and Google Maps.

### Step 1: Local SEO Audit

```
/local-seo "Mario's Italian Kitchen" "Austin, TX" https://g.page/marios-italian-austin
```

**Example output:**
```
LOCAL SEO HEALTH: 55/100

GBP: 68/100
- Missing: special hours, 3 secondary categories, menu link
- Photos: 4 (need 10+)
- Posts: None in 3 months
- Q&A: 0 pre-populated

NAP CONSISTENCY: 45/100
- Found 12 citations, 5 have inconsistent data
- "Mario's Italian Kitchen" vs "Marios Italian Kitchen" on Yelp
- Old phone number on TripAdvisor

CITATIONS: 38/100
- Missing from: Apple Maps, Bing Places, BBB
- Not on key food directories: OpenTable, Zomato

KEYWORD OPPORTUNITIES:
- "italian restaurant austin" — 2,400/mo
- "best pasta austin tx" — 880/mo
- "italian food near me" — 12,100/mo (local intent)
```

### Step 2: Schema Markup

```
/schema-gen https://marios-italian.com LocalBusiness Restaurant
```

### Step 3: Content Strategy

```
/content-brief "best Italian restaurants in Austin"
```

---

## Workflow 6: Competitive Intelligence

**Scenario:** Before launching a new product, you want to understand the competitive SEO landscape.

```
/competitors https://yoursite.com https://rival1.com https://rival2.com https://rival3.com
```

Then build your content strategy to fill the gaps:

```
/topic-clusters "[your core topic]"
```

And create targeted content:

```
/content-brief "[gap keyword]"
/write-seo "[gap keyword]"
```
