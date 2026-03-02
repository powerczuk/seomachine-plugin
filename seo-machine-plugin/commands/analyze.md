---
description: Deep-analyze a specific page or content piece for SEO quality score
argument-hint: "<URL or file path>"
allowed-tools: Read, WebFetch, WebSearch
---

# /analyze — SEO Content Quality Analysis

Perform a deep SEO quality analysis on a specific page or content piece. Load the `content-optimizer` skill for scoring methodology. Read `${CLAUDE_PLUGIN_ROOT}/skills/content-optimizer/references/readability-formulas.md` for detailed metrics.

Target: `$ARGUMENTS`

If URL provided, fetch the page. If file path, read the file.

## Analysis Modules

Run all five analysis modules and compile results:

### Module 1: Search Intent Classification
- Identify the target keyword (from title, H1, URL, density)
- Classify intent: informational, navigational, commercial, transactional
- Assess content-intent alignment (does the content type match the intent?)
- Confidence score (0-100%)
- Recommendations if misaligned

### Module 2: Keyword Density & Distribution
- Primary keyword density (target: 1-2%)
- Keyword distribution heatmap (evenly spread or concentrated?)
- Critical placement check (H1, first 100 words, H2s, conclusion, meta)
- Secondary keyword coverage
- LSI/semantic keyword presence
- Keyword stuffing risk level (none/low/medium/high)

### Module 3: Content Length Comparison
- Current word count
- Estimate competitor median word count (via SERP analysis)
- Position relative to competitors (below/at/above median)
- Recommended target word count
- Specific sections to expand if below target

### Module 4: Readability Metrics
- Flesch Reading Ease (target: 60-70)
- Flesch-Kincaid Grade Level (target: 8-10)
- Gunning Fog Index
- Average sentence length
- Average paragraph length
- Passive voice ratio
- Complex word percentage
- Sentence length variety score
- Overall readability grade (A-F)

### Module 5: SEO Quality Rating (0-100)
Score across categories:

| Category | Weight | Score | Details |
|----------|--------|-------|---------|
| Content quality & depth | 20% | — | Word count, topic coverage, E-E-A-T signals |
| Keyword optimization | 20% | — | Density, placements, variations |
| Meta elements | 15% | — | Title, description, URL |
| Content structure | 15% | — | Headings, hierarchy, formatting |
| Internal/external links | 15% | — | Count, quality, anchor text |
| Readability | 15% | — | Flesch score, grade level, voice |

## Output

### SEO Quality Scorecard
```
OVERALL SCORE: --/100 (Grade: --)

Category Breakdown:
  Content Quality    --/20  ████████░░
  Keyword Optimization --/20  ██████░░░░
  Meta Elements      --/15  ███████████
  Content Structure  --/15  █████░░░░░
  Links              --/15  ████████░░
  Readability        --/15  ██████████
```

### Detailed Findings
For each category, list:
- What's working well (strengths)
- What needs improvement (with specific recommendations)
- Priority: Critical / High / Medium / Low

### Quick Fixes (Under 30 Minutes)
Numbered list of fast improvements with expected impact.

### Strategic Improvements (Require More Effort)
Bigger optimizations with estimated time and impact.

### Comparison to Competitors
How this content stacks up against top SERP results for the target keyword.
