---
description: Keyword research, SERP analysis, and competitive gap identification
argument-hint: "<keyword or topic> [competitor URLs]"
allowed-tools: Read, Write, Grep, WebSearch, WebFetch
---

# /research — SEO Keyword Research & SERP Analysis

Conduct comprehensive keyword research for the given topic or keyword. Load the `seo-fundamentals` skill and read `${CLAUDE_PLUGIN_ROOT}/skills/seo-fundamentals/references/keyword-research-framework.md` for the full research methodology.

## Process

### 1. Keyword Discovery
Research the target keyword/topic: `$ARGUMENTS`

Use web search to discover:
- Primary keyword variations and exact-match alternatives
- Long-tail keyword opportunities (3-5 word phrases)
- Question-based keywords ("how to", "what is", "why does")
- Commercial intent keywords ("best", "vs", "review", "top")
- Related/LSI keywords (semantically connected terms)

**If ~~SEO tools are connected**: Pull keyword volume, difficulty scores, and ranking positions automatically.

### 2. SERP Analysis
For the primary keyword, analyze the current top 10 results:
- Content types ranking (blog posts, landing pages, tools, videos)
- Average content length of top results
- Common topics covered by ALL top results (must-haves)
- Topics covered by SOME but not all (differentiation opportunities)
- Topics NO ONE covers (competitive advantage)
- SERP features present (featured snippets, PAA, image packs, knowledge panels)
- Featured snippet format (paragraph, list, table)

### 3. Competitive Gap Analysis
Identify what competitors miss:
- Underexplored subtopics and angles
- Outdated information in competing content
- Missing content formats (no comparison tables, no visuals, no templates)
- Weak areas (thin sections, poor structure, missing schema)

### 4. Search Intent Classification
Classify the primary keyword intent:
- **Informational** → recommend educational content (guide, tutorial, explainer)
- **Commercial Investigation** → recommend comparison content (vs page, review, listicle)
- **Transactional** → recommend conversion-optimized landing page
- **Navigational** → recommend brand/feature page optimization

## Output

### Keyword Opportunity Table

| Keyword | Est. Volume | Difficulty | Intent | Opportunity | Recommended Content Type |
|---------|------------|-----------|--------|-------------|--------------------------|

Include 15-25 keywords sorted by opportunity score (high/medium/low).

### SERP Landscape Summary
- Current SERP feature ownership
- Average content length of top 10
- Common content structure patterns
- Differentiation opportunities

### Competitive Gaps
For each gap found:
- What's missing and why it matters
- Recommended approach to fill it
- Estimated effort and impact

### Recommended Content Architecture
- Suggested H1 (3 options)
- Recommended H2 outline (must-cover + differentiator sections)
- Target word count
- Featured snippet strategy
- Schema markup recommendations

### Meta Element Previews
Draft 3 options each:
- **Title tags** (50-60 characters, keyword included)
- **Meta descriptions** (150-160 characters, keyword + CTA)
- **URL slug** (3-5 words, keyword included)

## Follow-Up
After presenting research, offer:
- "Generate a full content brief with `/content-brief`?"
- "Write the optimized article with `/write-seo`?"
- "Map this into a topic cluster with `/topic-clusters`?"
