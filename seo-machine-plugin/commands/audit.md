---
description: Full-site SEO audit — technical, on-page, content, and competitive analysis
argument-hint: "<domain URL> [competitor URLs]"
allowed-tools: Read, Write, WebSearch, WebFetch
---

# /audit — Comprehensive Site SEO Audit

Run a complete SEO audit of the target website. Load the `seo-fundamentals` skill and read these references:
- `${CLAUDE_PLUGIN_ROOT}/skills/seo-fundamentals/references/technical-seo-deep-dive.md`
- `${CLAUDE_PLUGIN_ROOT}/skills/seo-fundamentals/references/schema-markup-templates.md`

Target: `$ARGUMENTS`

## Gather Inputs

If not provided, ask:
1. **Domain URL** — the site to audit
2. **Audit scope** — full site audit (default), technical-only, on-page-only, content-only, or competitive comparison
3. **Target keywords** (optional) — keywords already being targeted
4. **Competitors** (optional) — 2-3 competitor domains. If not provided and needed, use web search to identify likely competitors.

**If ~~SEO tools are connected**: Pull domain metrics, keyword rankings, backlink data automatically.

## Audit Sections

### 1. Technical SEO

Evaluate using web fetch on the target domain:

**Crawlability & Indexation**:
- Check robots.txt configuration (fetch /robots.txt)
- Check XML sitemap (fetch /sitemap.xml)
- Identify canonical tag implementation
- Check for noindex directives on important pages
- Look for redirect chains and broken links

**Performance**:
- Page load indicators (render-blocking resources, image optimization)
- Mobile responsiveness signals
- HTTPS implementation and mixed content

**Structured Data**:
- Check for existing schema markup
- Identify missing schema opportunities (Article, FAQ, HowTo, Product, BreadcrumbList, Organization)
- Validate implementation correctness

**Infrastructure**:
- URL structure cleanliness
- Site architecture depth (click depth from homepage)
- Internal navigation structure

### 2. On-Page SEO (Sample 5-10 Key Pages)

For homepage + top landing pages + recent blog posts:

| Element | Status | Finding | Recommendation |
|---------|--------|---------|----------------|
| Title tag | ✓/✗ | Current value, length | Optimized version |
| Meta description | ✓/✗ | Current value, length | Optimized version |
| H1 | ✓/✗ | Count, keyword presence | Fix |
| H2/H3 hierarchy | ✓/✗ | Structure | Improvements |
| Keyword in first 100 words | ✓/✗ | — | — |
| Internal links | Count | Anchor text quality | Suggestions |
| Image alt text | ✓/✗ | Coverage % | Missing alts |
| URL structure | ✓/✗ | Current URL | Recommended URL |

### 3. Content Analysis

- **Content depth**: Average word count across key pages
- **Content freshness**: Pages not updated in 12+ months
- **Thin content**: Pages under 300 words that should be expanded
- **Duplicate content risks**: Similar pages competing for same keywords
- **Content gap analysis**: Topics competitors cover that this site doesn't
- **Missing content types**: Guides, comparisons, FAQs, glossaries, templates
- **Topic cluster assessment**: Are related pages properly interlinked?

### 4. Keyword Analysis

- Keywords the site currently appears to target
- Keyword-to-page mapping (cannibalization check)
- Quick win opportunities (keywords close to page 1)
- High-impression, low-CTR pages (title/description optimization targets)

### 5. Competitor Comparison (if competitors provided or discovered)

| Dimension | Target Site | Competitor A | Competitor B | Winner |
|-----------|-----------|-------------|-------------|--------|
| Content depth | — | — | — | — |
| Publishing frequency | — | — | — | — |
| Keyword coverage | — | — | — | — |
| Technical score | — | — | — | — |
| Schema markup | — | — | — | — |
| SERP features | — | — | — | — |

## Output

### Executive Summary
3-5 sentence overall assessment:
- Biggest SEO strength
- Top 3 highest-impact priorities
- Overall health: Strong Foundation / Needs Work / Critical Issues

### Technical SEO Checklist
| Check | Status | Details |
|-------|--------|---------|
(Pass/Fail/Warning for each item)

### On-Page Issues Table
| Page | Issue | Severity | Recommended Fix |
|------|-------|----------|-----------------|

### Content Gap Recommendations
For each gap: topic, why it matters, recommended format, priority, estimated effort.

### Prioritized Action Plan

**Quick Wins (this week)**:
Actions under 2 hours with immediate impact.

**Strategic Investments (this quarter)**:
Larger initiatives driving long-term growth.

Each item: what to do, expected impact, effort, dependencies.

## Follow-Up
Offer:
- "Draft optimized meta tags for your key pages with `/meta-tags`?"
- "Build a topic cluster strategy with `/topic-clusters`?"
- "Generate internal linking suggestions with `/internal-links`?"
- "Write optimized content for top keyword opportunities with `/write-seo`?"
