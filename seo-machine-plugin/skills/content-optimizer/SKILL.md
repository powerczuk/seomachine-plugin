---
name: content-optimizer
description: >
  Advanced content optimization for SEO performance, readability, and engagement.
  Use when the user asks to "optimize content for SEO", "improve readability",
  "check keyword density", "optimize meta tags", "improve content score",
  "analyze content quality", "check SEO score", "scrub AI content",
  "humanize content", "improve engagement", or wants content graded against
  SEO quality standards.
version: 1.0.0
---

# Content Optimizer

Systematic framework for analyzing and improving content across five scoring dimensions: keyword optimization, readability, structure, engagement, and technical SEO compliance.

## Content Quality Scoring System (0-100)

Rate every piece of content across five weighted dimensions:

### 1. Keyword Optimization (25%)
- **Primary keyword density**: 1-2% (calculate: occurrences × 100 / total words)
- **Critical placements verified**: H1, first 100 words, 2-3 H2s, conclusion, meta title, meta description, URL
- **Secondary keywords**: 3-5 variations used naturally throughout
- **LSI keywords**: Semantically related terms present (use topic clustering logic)
- **No keyword stuffing**: Density above 2.5% triggers warning, above 3% is critical
- **Keyword distribution**: Even spread across sections, not concentrated in one area

### 2. Readability (20%)
- **Flesch Reading Ease**: Target 60-70 (fairly easy)
- **Grade level**: 8th-10th grade (Flesch-Kincaid)
- **Average sentence length**: Under 20 words
- **Paragraph length**: 2-4 sentences maximum
- **Passive voice ratio**: Under 20%
- **Complex word percentage**: Under 15%
- **Sentence variety**: Mix short (5-10 words) and medium (15-25 words) sentences
- **Transition words**: Present between sections and paragraphs

### 3. Content Structure (20%)
- **H1**: Exactly one, contains primary keyword
- **H2 sections**: 4-7 for standard content
- **H3 subsections**: Used under complex H2s
- **No skipped heading levels**
- **Subheading frequency**: Every 300-400 words
- **Content length**: Minimum 2,000 words (2,500-3,000+ preferred for competitive terms)
- **Prose ratio**: 40-70% of content is flowing paragraphs (not all bullet lists)

### 4. Engagement (20%)
- **Hook quality**: Opening 1-2 sentences use proven formula (provocative question, surprising statistic, bold statement, specific scenario, or contrarian claim)
- **Introduction method**: APP formula (Agree-Promise-Preview) with primary keyword in first 100 words
- **Mini-stories**: 2-3 per article, 50-150 words each, with specific names/details/outcomes
  - One in intro/early section (hook readers)
  - One in middle (re-engage skimmers)
  - One near conclusion (reinforce main point)
- **Contextual CTAs**: 2-3 throughout (not just at the end)
  - First CTA within first 500 words
  - Vary format: inline text, bold callout, button-style
  - Make specific and contextual, never generic "click here"
- **Visual break indicators**: Notes where images, screenshots, charts, or tables should appear

### 5. Technical SEO Compliance (15%)
- **Meta title**: 50-60 characters, keyword included, compelling
- **Meta description**: 150-160 characters, keyword included, action-oriented
- **URL slug**: Clean, keyword-included, 3-5 words
- **Internal links**: 3-5+ with descriptive anchor text
- **External links**: 2-3 to authoritative sources
- **Image alt text**: Descriptive, keyword-relevant
- **Schema markup opportunities**: Identified (FAQ, HowTo, Article)

## Optimization Process

### Step 1: Analyze Current State
Score the content across all five dimensions. Present a scorecard:

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

Publishing threshold: 70/100 minimum.

### Step 2: Identify Critical Issues
Prioritize fixes by impact:
- **Critical** (blocks publishing): Missing H1, no meta title, keyword stuffing, broken heading hierarchy
- **High** (significant ranking impact): Missing keyword in first 100 words, no internal links, readability score below 50
- **Medium** (optimization opportunity): Suboptimal meta description, insufficient content length, low engagement signals
- **Low** (polish): Minor keyword distribution imbalance, extra transition words

### Step 3: Apply Fixes
Execute improvements in priority order. After each fix, recalculate affected dimension score.

### Step 4: Final Validation
Re-score the full content. Confirm 70+ threshold. Generate the optimized version with all improvements applied.

## AI Content Scrubbing

When optimizing AI-generated content, apply these humanization techniques:

### Pattern Detection & Removal
- Remove invisible Unicode watermarks (zero-width spaces, joiners)
- Replace overused em-dashes with varied punctuation
- Eliminate "filler" phrases: "It's worth noting that", "In today's landscape", "It's important to understand", "Dive deep into", "Navigating the world of"
- Replace generic superlatives: "groundbreaking", "revolutionary", "game-changing", "cutting-edge"
- Fix over-structured lists (AI tends to list everything — convert some to flowing prose)

### Voice Naturalization
- Add contractions (don't, won't, it's, they're)
- Insert opinion signals ("I think", "in my experience", "what I've found")
- Vary paragraph lengths (AI tends toward uniform 3-sentence paragraphs)
- Add informal asides and parenthetical comments
- Use specific numbers instead of vague qualifiers ("47%" instead of "many")
- Include first-hand experience signals and concrete examples

## Featured Snippet Targeting

When optimizing for snippet capture:

1. Identify the target query format (what, how, why, list, comparison)
2. Place a concise 40-60 word answer directly after an H2 matching the query
3. For list queries: format as 5-9 item numbered/bulleted list
4. For comparison queries: format as HTML table with 2-4 columns
5. For definition queries: use "[Term] is [definition]" format in first sentence after heading

## Additional Resources

- **`references/readability-formulas.md`** — detailed readability scoring algorithms
- **`references/engagement-techniques.md`** — complete hook and story frameworks
- **`references/cta-playbook.md`** — CTA formulas, placement strategy, and conversion psychology
