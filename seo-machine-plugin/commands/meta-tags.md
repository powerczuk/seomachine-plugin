---
description: Generate optimized meta titles, descriptions, and OG tags for pages
argument-hint: "<URL, keyword, or content file>"
allowed-tools: Read, WebFetch, WebSearch
---

# /meta-tags — Meta Element Optimizer

Generate optimized meta titles, descriptions, Open Graph tags, and URL slugs for one or multiple pages.

Target: `$ARGUMENTS`

If URL provided, fetch the page and analyze current meta elements. If keyword/topic provided, generate fresh meta elements based on research.

## Process

### 1. Current State Analysis (if URL provided)
- Extract current title tag, meta description, OG tags, URL
- Measure title length (target: 50-60 chars)
- Measure description length (target: 150-160 chars)
- Check keyword inclusion in both
- Identify issues: too long, too short, missing keyword, not compelling, duplicate

### 2. Keyword Identification
- Identify or confirm the primary keyword for the page
- Note 2-3 secondary keywords to potentially include
- Classify search intent to inform tone

### 3. Meta Title Generation

Generate 5 title options, each following these rules:
- 50-60 characters (will truncate in SERPs beyond 60)
- Primary keyword included, front-loaded when possible
- Compelling and click-worthy (treat as ad headline)
- Power words where appropriate (Complete, Ultimate, Proven, Essential)
- Consider adding year for freshness signals where relevant
- Brand mention at end if space permits: "Title | Brand"

**Title formulas**:
- `[Primary Keyword]: [Benefit or Promise]`
- `How to [Primary Keyword] [in Timeframe/Without Obstacle]`
- `[Number] [Adjective] [Primary Keyword] [Strategies/Tips/Examples]`
- `[Primary Keyword] Guide: [What Reader Gets] ([Year])`
- `[Primary Keyword] — [Unique Angle or Promise]`

### 4. Meta Description Generation

Generate 5 description options, each following these rules:
- 150-160 characters (truncates beyond 160)
- Primary keyword included (bolded in SERPs when matched)
- Clear value proposition: what the reader gets
- Action-oriented language: Learn, Discover, Find, Get, Compare, See
- End with implicit or explicit CTA
- NOT just a summary — sell the click

**Description formulas**:
- `[Benefit statement]. [What's covered]. [CTA].`
- `Learn [what] with our [type of content]. [Specific value]. [CTA].`
- `[Question matching search intent]? [Promise of answer]. [Differentiator].`
- `[Statistic or hook]. Discover [what's inside]. [CTA].`

### 5. URL Slug
- 3-5 words, lowercase, hyphenated
- Primary keyword included
- Stop words removed
- Clean and descriptive

### 6. Open Graph Tags
- `og:title` — can be slightly different from meta title (more descriptive for social)
- `og:description` — social-optimized version (can be more casual/compelling)
- `og:type` — article, website, or product
- `og:image` — recommended dimensions (1200x630px)
- `twitter:card` — summary_large_image

## Output

For each page, present:

### Meta Title Options
| # | Title | Length | Keyword | Notes |
|---|-------|--------|---------|-------|
| 1 | [title] | 58 chars | ✓ Front-loaded | Recommended |
| 2 | [title] | 55 chars | ✓ | How-to formula |
| 3 | [title] | 60 chars | ✓ | Number formula |
| 4 | [title] | 52 chars | ✓ | With brand |
| 5 | [title] | 57 chars | ✓ | Power word variant |

### Meta Description Options
| # | Description | Length | Keyword | CTA |
|---|------------|--------|---------|-----|
| 1 | [desc] | 155 chars | ✓ | ✓ | Recommended |
| 2-5 | ... | ... | ... | ... |

### URL Slug
Recommended: `/primary-keyword-topic`

### Open Graph Tags
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:type" content="article" />
<meta property="og:image" content="..." />
<meta name="twitter:card" content="summary_large_image" />
```

### Before/After Comparison (if optimizing existing page)
| Element | Before | After | Improvement |
|---------|--------|-------|-------------|
| Title | ... | ... | +keyword, better length |
| Description | ... | ... | +CTA, +keyword |
| URL | ... | ... | Cleaner, shorter |
