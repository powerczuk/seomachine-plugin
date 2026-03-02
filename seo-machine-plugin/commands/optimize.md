---
description: Analyze and optimize existing content for maximum SEO performance
argument-hint: "<content or URL to optimize>"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch
---

# /optimize — Content SEO Optimization

Analyze existing content and optimize it for maximum SEO performance. Load the `content-optimizer` skill for the full scoring methodology.

Target content: `$ARGUMENTS`

If a file path is provided, read the file. If a URL is provided, fetch and analyze the page content.

## Phase 1: Content Analysis

### Keyword Analysis
- Identify the apparent primary keyword (or ask the user)
- Calculate keyword density (occurrences × 100 / total words)
- Check critical placements: H1, first 100 words, H2s, conclusion, meta elements
- Identify secondary and LSI keywords present
- Detect keyword stuffing (>2.5% = warning, >3% = critical)
- Map keyword distribution across sections (should be even, not concentrated)

### Readability Assessment
Calculate and report:
- Flesch Reading Ease score (target: 60-70)
- Flesch-Kincaid Grade Level (target: 8-10)
- Average sentence length (target: <20 words)
- Average paragraph length (target: 2-4 sentences)
- Passive voice ratio (target: <20%)
- Sentence variety score (mix of short/medium/long)

### Structure Audit
- H1 count (should be exactly 1)
- Heading hierarchy (H1 → H2 → H3, no skips)
- H2 section count (target: 4-7)
- Subheading frequency (every 300-400 words)
- Total word count vs. competitive benchmark
- Prose-to-list ratio (target: 40-70% prose)

### Engagement Check
- Hook quality (does opening use a proven formula?)
- Introduction method (APP method applied?)
- Mini-story count (target: 2-3)
- CTA count and placement (target: 2-3, first within 500 words)
- Visual break indicators present?

### Technical SEO Check
- Meta title: present, length, keyword inclusion
- Meta description: present, length, keyword, CTA
- Internal links: count, anchor text quality
- External links: count, authority of sources
- Image alt text: presence, keyword relevance
- Schema markup opportunities

## Phase 2: Scorecard

Present the 5-dimension scorecard:

```
DIMENSION              SCORE    GRADE    STATUS
Keyword Optimization    --/25    --      [Pass/Warn/Fail]
Readability             --/20    --      [Pass/Warn/Fail]
Content Structure       --/20    --      [Pass/Warn/Fail]
Engagement              --/20    --      [Pass/Warn/Fail]
Technical SEO           --/15    --      [Pass/Warn/Fail]
─────────────────────────────────────────────────
TOTAL                   --/100   --      [Publishing Ready / Needs Work / Critical Issues]
```

## Phase 3: Issue Prioritization

List all issues found, sorted by severity:

| # | Issue | Severity | Dimension | Recommended Fix | Impact |
|---|-------|----------|-----------|----------------|--------|

Severity levels:
- **Critical** — blocks publishing (missing H1, keyword stuffing, broken hierarchy)
- **High** — significant ranking impact (no keyword in first 100 words, zero internal links)
- **Medium** — optimization opportunity (suboptimal meta, short content)
- **Low** — polish (minor distribution, extra transitions)

## Phase 4: Optimized Version

Apply all fixes and deliver:
1. The fully optimized content
2. Before/after scorecard comparison
3. Change log listing every modification made
4. Updated meta elements (title, description, slug)
5. Internal and external link suggestions
6. Schema markup recommendation

## AI Content Detection & Scrubbing

If the content appears AI-generated, apply scrubbing:
- Flag AI indicator patterns (uniform paragraphs, filler phrases, generic superlatives)
- Remove invisible Unicode watermarks
- Replace AI-characteristic phrasing
- Add natural voice elements (contractions, specific numbers, opinion signals)
- Report before/after comparison

Publishing threshold: 70/100 minimum. If below, continue optimizing until threshold is met.
