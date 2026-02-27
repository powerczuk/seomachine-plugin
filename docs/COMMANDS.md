# Commands Reference

SEO Machine provides 16 commands covering the full SEO and GEO workflow. Commands are invoked as slash commands in any Claude conversation where the plugin is active.

## Command Overview

### Content Creation & Optimization

| Command | Description | New in v2 |
|---------|-------------|-----------|
| `/research` | Keyword research, SERP analysis, and competitive gap identification | |
| `/write-seo` | Write SEO-optimized long-form content (2,000-3,000+ words) | |
| `/optimize` | Analyze and optimize existing content for maximum SEO performance | |
| `/analyze` | Deep SEO quality analysis with 0-100 scoring | |
| `/content-brief` | Generate comprehensive, writer-ready SEO content briefs | |
| `/meta-tags` | Generate optimized meta titles, descriptions, and OG tags | |
| `/rewrite` | Refresh and update declining or outdated content | v2 |

### Site Architecture & Technical

| Command | Description | New in v2 |
|---------|-------------|-----------|
| `/audit` | Full-site SEO audit — technical, on-page, content, and competitive | |
| `/topic-clusters` | Map topic clusters with pillar pages and internal linking | |
| `/internal-links` | Analyze and suggest strategic internal linking improvements | |
| `/schema-gen` | Generate JSON-LD schema markup for any page type | |
| `/low-hanging-fruit` | Find quick-win keywords and pages for immediate ranking gains | v2 |

### GEO & AI Search

| Command | Description | New in v2 |
|---------|-------------|-----------|
| `/geo-audit` | Audit your site's visibility and citability in AI search engines | v2 |
| `/llms-txt` | Generate an llms.txt file for AI crawler optimization | v2 |

### Local SEO

| Command | Description | New in v2 |
|---------|-------------|-----------|
| `/local-seo` | Local SEO audit — GBP, citations, NAP consistency, local keywords | v2 |

### Strategy & Reporting

| Command | Description | New in v2 |
|---------|-------------|-----------|
| `/competitors` | Deep competitive analysis with gap identification and battlecards | v2 |

---

## Detailed Command Reference

### `/research`

Keyword research, SERP analysis, and competitive gap identification.

**Syntax:**
```
/research <keyword or topic> [competitor URLs]
```

**What it does:**
1. Discovers primary keyword variations, long-tail opportunities, question-based keywords, and LSI terms
2. Analyzes the SERP — content types, average word counts, featured snippets, SERP features
3. Identifies competitive gaps — underexplored subtopics, outdated competitor content, missing formats
4. Classifies search intent (informational, navigational, commercial, transactional)

**Output:**
- Keyword opportunity table (15-25 keywords) with volume, difficulty, intent, and priority
- SERP landscape summary
- Competitive gap analysis
- Recommended content architecture
- 3 meta title and description options

**Example:**
```
/research "best CRM for small business" https://hubspot.com https://salesforce.com
```

---

### `/write-seo`

Write SEO-optimized long-form content (2,000-3,000+ words).

**Syntax:**
```
/write-seo <topic or keyword> [target word count]
```

**What it does:**
1. Quick research phase — keywords, competitor analysis, content gaps
2. Builds content architecture with heading hierarchy
3. Writes full article with:
   - Hook introduction using the APP method (Agree-Promise-Preview)
   - Evidence-backed body sections with H3 subheadings every 300-400 words
   - 2-3 mini-stories for engagement
   - 2-3 contextual CTAs (soft, medium, strong)
   - Key takeaways conclusion with final CTA
4. AI content scrubbing — removes robotic patterns, adds natural voice
5. Automatic quality scoring via the seo-analyzer agent

**Output:**
- Full article in markdown
- 3 meta title and 3 meta description options
- Internal linking suggestions
- Schema markup recommendation
- Content quality score (0-100)

**Example:**
```
/write-seo "remote team productivity tips" 2500
```

---

### `/optimize`

Analyze and optimize existing content for maximum SEO performance.

**Syntax:**
```
/optimize <content file path or URL>
```

**What it does:**
1. Performs five-dimension content analysis (keyword, readability, structure, engagement, technical)
2. Generates a visual scorecard with dimension breakdowns
3. Prioritizes issues by severity (critical, high, medium, low)
4. Produces an optimized version with all fixes applied
5. Provides before/after comparison and change log

**Publishing threshold:** 70/100 minimum.

**Example:**
```
/optimize https://myblog.com/article-to-fix
```

---

### `/audit`

Full-site SEO audit — technical, on-page, content, and competitive analysis.

**Syntax:**
```
/audit <domain URL> [competitor URLs]
```

**What it does:**
1. **Technical SEO** — crawlability, performance, Core Web Vitals, structured data, security
2. **On-Page SEO** — samples 5-10 key pages for element analysis
3. **Content Analysis** — content depth, freshness, thin content, duplicates, topic gaps
4. **Keyword Analysis** — current targeting, cannibalization, quick wins, high-impression low-CTR pages
5. **Competitor Comparison** — side-by-side analysis with 1-3 competitors

**Output:**
- Executive summary with overall health score
- Technical SEO checklist with pass/fail/warning indicators
- On-page issues table
- Content gap recommendations
- Prioritized action plan (quick wins + strategic investments)

**Example:**
```
/audit https://example.com https://competitor1.com https://competitor2.com
```

---

### `/analyze`

Deep-analyze a specific page or content piece for SEO quality score.

**Syntax:**
```
/analyze <URL or file path>
```

**What it does:**
Runs five analysis modules in sequence:
1. Search Intent Classification — keyword identification, intent type, alignment score
2. Keyword Density & Distribution — density calculation, placement check, LSI coverage, stuffing risk
3. Content Length Comparison — word count vs competitor median from SERP analysis
4. Readability Metrics — Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, sentence variety
5. SEO Quality Rating — composite 0-100 score across 6 weighted categories

**Example:**
```
/analyze https://myblog.com/guide-to-seo
```

---

### `/content-brief`

Generate a comprehensive, writer-ready SEO content brief.

**Syntax:**
```
/content-brief <target keyword or topic>
```

**Output includes:**
- Brief header (keyword, intent, word count, audience, difficulty)
- Keyword tables (primary, secondary, questions, LSI)
- Recommended outline with H1/H2/H3 hierarchy and section descriptions
- 3 meta title and description options
- Featured snippet strategy
- Internal and external linking targets
- Schema markup recommendations
- Engagement requirements and quality standards

**Example:**
```
/content-brief "how to start a podcast in 2026"
```

---

### `/meta-tags`

Generate optimized meta titles, descriptions, and Open Graph tags.

**Syntax:**
```
/meta-tags <URL, keyword, or content file>
```

**Output:**
- 5 meta title options (50-60 characters) with power words and keyword placement
- 5 meta description options (150-160 characters) with value prop and CTA
- 3 URL slug suggestions
- Complete Open Graph tag set (og:title, og:description, og:type, og:image, twitter:card)
- Before/after comparison if optimizing an existing page

**Example:**
```
/meta-tags https://myblog.com/old-article
```

---

### `/topic-clusters`

Map topic clusters with pillar pages, subtopics, and internal linking strategy.

**Syntax:**
```
/topic-clusters <seed topic or keyword>
```

**Output:**
- Cluster overview with page count, total volume, and timeline
- Pillar page specification (3,000-5,000+ words)
- Cluster page table with keyword, intent, volume, difficulty, priority, and status
- Internal linking matrix (pillar to clusters, clusters to pillar, cross-cluster)
- Content calendar with recommended publish cadence (2-4 pages/month)
- Schema markup recommendations per page type

**Example:**
```
/topic-clusters "email marketing"
```

---

### `/internal-links`

Analyze and suggest strategic internal linking improvements.

**Syntax:**
```
/internal-links <URL or sitemap URL> [focus page URL]
```

**Output:**
- Internal link health summary (average links per page, orphan count, depth distribution)
- Priority link additions table
- Orphan pages list
- Anchor text improvement suggestions
- Topic cluster link integrity map
- Implementation checklist

**Example:**
```
/internal-links https://example.com/sitemap.xml https://example.com/key-page
```

---

### `/schema-gen`

Generate JSON-LD schema markup for any page type.

**Syntax:**
```
/schema-gen <URL or page type> [schema types]
```

**Supported schema types:** Article, FAQ, HowTo, Product, BreadcrumbList, LocalBusiness, Organization, Review, AggregateRating, Event, Recipe, VideoObject, SoftwareApplication

**Output:**
- Recommended schema types based on content analysis
- Copy-paste ready `<script type="application/ld+json">` blocks
- Implementation instructions
- Existing schema issues (if URL provided)
- Validation guidance (Google Rich Results Test link)

**Example:**
```
/schema-gen https://myblog.com/how-to-guide HowTo FAQ
```

---

### `/rewrite` (New in v2)

Refresh and update declining or outdated content to recover rankings.

**Syntax:**
```
/rewrite <URL or file path> [target keyword]
```

**What it does:**
1. Analyzes the current content's performance signals (if analytics connected)
2. Identifies what's outdated, thin, or missing vs current SERP leaders
3. Rewrites with fresh data, updated examples, and improved structure
4. Preserves the URL and existing ranking equity
5. Adds "Last updated" timestamp for freshness signals
6. Runs full optimization scoring after rewrite

**Example:**
```
/rewrite https://myblog.com/old-guide-from-2024 "best seo tools 2026"
```

---

### `/low-hanging-fruit` (New in v2)

Find quick-win keywords and pages for immediate ranking gains.

**Syntax:**
```
/low-hanging-fruit <domain URL>
```

**What it finds:**
- Keywords ranking positions 11-20 (page 2, close to page 1)
- High-impression, low-CTR pages (title/description improvements)
- Pages with missing or thin meta descriptions
- Content ranking for keywords with low difficulty but no dedicated page
- Internal link opportunities to boost existing rankings

**Output:**
- Prioritized opportunity table with estimated impact
- Specific action items for each opportunity
- Estimated effort vs. impact matrix

**Example:**
```
/low-hanging-fruit https://example.com
```

---

### `/geo-audit` (New in v2)

Audit your site's visibility and citability in AI search engines.

**Syntax:**
```
/geo-audit <domain URL> [brand name]
```

**What it checks:**
1. **AI Crawler Access** — robots.txt blocking GPTBot, ClaudeBot, PerplexityBot
2. **llms.txt Presence** — whether you have an llms.txt file and its quality
3. **Content Citability** — whether passages can stand alone when extracted by AI
4. **Schema Markup** — structured data that helps AI engines parse your content
5. **E-E-A-T Signals** — author bios, credentials, citations, expert quotes
6. **Brand Mentions** — third-party mentions, earned media, social sentiment
7. **Content Freshness** — last-updated timestamps, recency of data
8. **Technical Readiness** — JavaScript rendering issues, hidden content, tab/accordion problems

**Output:**
- GEO readiness score (0-100)
- Issue-by-issue breakdown with fix instructions
- Prioritized action plan
- Competitor GEO comparison (if competitor URLs provided)

**Example:**
```
/geo-audit https://example.com "Example Brand"
```

---

### `/llms-txt` (New in v2)

Generate an optimized llms.txt file for AI crawler guidance.

**Syntax:**
```
/llms-txt <domain URL> [sitemap URL]
```

**What it does:**
1. Crawls your sitemap or top pages to identify your most authoritative content
2. Categorizes pages by topic and importance
3. Generates a Markdown-formatted llms.txt file following the specification
4. Includes page titles, descriptions, and URLs organized by section
5. Provides placement instructions

**Output:**
- Ready-to-deploy llms.txt file content
- Deployment instructions (place at domain.com/llms.txt)
- Optional llms-full.txt for comprehensive site coverage

**Example:**
```
/llms-txt https://example.com https://example.com/sitemap.xml
```

---

### `/local-seo` (New in v2)

Local SEO audit and optimization for businesses serving local customers.

**Syntax:**
```
/local-seo <business name> <location> [Google Business Profile URL]
```

**What it covers:**
1. **Google Business Profile Audit** — completeness, categories, photos, posts, Q&A, attributes
2. **NAP Consistency Check** — compares Name, Address, Phone across citations
3. **Citation Analysis** — presence on key directories (Yelp, BBB, industry-specific)
4. **Local Keyword Research** — "near me" keywords, city/neighborhood modifiers, service+location combos
5. **Local Schema Markup** — LocalBusiness, GeoCoordinates, OpeningHoursSpecification
6. **Review Analysis** — rating distribution, response rate, sentiment patterns
7. **Local Content Recommendations** — location pages, area guides, local event tie-ins

**Output:**
- Local SEO health score
- GBP optimization checklist
- Citation gaps and recommended directories
- Local keyword opportunities table
- Schema markup for local business (copy-paste ready)
- Review management recommendations

**Example:**
```
/local-seo "Joe's Pizza" "Brooklyn, NY" https://g.page/joes-pizza-brooklyn
```

---

### `/competitors` (New in v2)

Deep competitive analysis with gap identification and battlecards.

**Syntax:**
```
/competitors <your domain> <competitor 1> [competitor 2] [competitor 3]
```

**What it analyzes:**
1. **Content Gap Analysis** — topics competitors cover that you don't
2. **Keyword Overlap & Gaps** — shared keywords, unique advantages, missed opportunities
3. **Technical Comparison** — site speed, mobile usability, schema usage, Core Web Vitals
4. **Backlink Profile Comparison** — domain authority, referring domains, link velocity
5. **Content Strategy Comparison** — publishing frequency, content types, topic focus areas
6. **SERP Feature Ownership** — who owns featured snippets, PAA, local packs

**Output:**
- Competitive landscape overview
- Gap analysis with prioritized opportunities
- Competitor battlecards (one per competitor)
- Strategic recommendations

**Example:**
```
/competitors https://mysite.com https://rival1.com https://rival2.com
```
