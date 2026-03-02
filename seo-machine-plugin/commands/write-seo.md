---
description: Write SEO-optimized long-form content (2000-3000+ words)
argument-hint: "<topic or keyword> [target word count]"
allowed-tools: Read, Write, Edit, WebSearch, WebFetch
---

# /write-seo — Write SEO-Optimized Content

Write comprehensive, SEO-optimized long-form content for the given topic. Load the `content-optimizer` skill and read these reference files:
- `${CLAUDE_PLUGIN_ROOT}/skills/content-optimizer/references/engagement-techniques.md`
- `${CLAUDE_PLUGIN_ROOT}/skills/content-optimizer/references/cta-playbook.md`

Target topic/keyword: `$ARGUMENTS`

## Pre-Writing Phase

### 1. Quick Research (if no /research was run first)
Use web search to determine:
- Primary keyword and 3-5 secondary keywords
- Search intent (informational, commercial, transactional)
- Top 5 competitor content lengths and structures
- Must-cover topics and differentiation angles
- Featured snippet opportunities

### 2. Content Architecture
Plan the article structure before writing:
- **H1**: Include primary keyword, benefit-driven, under 70 characters
- **H2 sections**: 4-7 sections covering must-have topics + differentiators
- **H3 subsections**: Under complex H2s for depth
- **Target length**: 2,000-3,000+ words (beat competitor median by 20-30%)

## Writing Phase

### Introduction (100-150 words)
Apply the complete engagement framework:

1. **Hook** (first 1-2 sentences): Use one of five proven formulas:
   - Provocative question that challenges assumptions
   - Surprising statistic with exact numbers
   - Bold/contrarian statement
   - Specific scenario the reader recognizes
   - Counterintuitive claim with evidence preview

2. **APP Method**:
   - **Agree** — acknowledge the reader's situation or frustration
   - **Promise** — state what they'll gain from reading
   - **Preview** — brief roadmap of what's coming

3. Primary keyword MUST appear in first 100 words.

### Body Sections (Each H2)
For each major section:
- Open with a clear topic sentence
- Provide data, evidence, or examples
- Include specific details (numbers, names, dates, tools)
- Use short paragraphs (2-4 sentences max)
- Mix sentence lengths (5-25 words)
- Add subheadings (H3) every 300-400 words
- Write in active voice (>80%)

### Engagement Elements (Mandatory)
- **Mini-stories**: Include 2-3 throughout (50-150 words each)
  - Specific character name: "Sarah, a content manager at..."
  - Concrete situation with real details
  - Clear outcome that illustrates the point
  - Placement: early section, middle, near conclusion

- **Contextual CTAs**: Include 2-3 throughout
  - Soft CTA within first 500 words (free resource, template)
  - Medium CTA after proof section (trial, demo, audit)
  - Strong CTA in conclusion (with risk reversal)
  - Never use generic "click here" — be specific about what they get

- **Visual notes**: Mark where images/screenshots/charts should appear with `[IMAGE: description of recommended visual]`

### Conclusion (75-100 words)
- Summarize 3 key takeaways
- Reinforce primary keyword naturally
- Strong CTA with risk reversal
- Forward link to related content

## Post-Writing Checklist

Verify before delivering:

### Keyword Optimization
- [ ] Primary keyword in H1, first 100 words, 2-3 H2s, conclusion, meta elements
- [ ] Primary keyword density: 1-2%
- [ ] Secondary keywords used naturally throughout
- [ ] No keyword stuffing (nothing above 2.5%)

### Readability
- [ ] Average sentence length under 20 words
- [ ] Paragraphs 2-4 sentences max
- [ ] Grade level 8-10 (Flesch-Kincaid)
- [ ] Active voice >80%
- [ ] Subheadings every 300-400 words

### Structure
- [ ] Single H1 with primary keyword
- [ ] 4-7 H2 sections
- [ ] No skipped heading levels
- [ ] Prose ratio 40-70% (not all bullet lists)
- [ ] Word count meets target (2,000+ minimum)

### Engagement
- [ ] Hook uses proven formula
- [ ] APP introduction method applied
- [ ] 2-3 mini-stories with names and specifics
- [ ] 2-3 contextual CTAs (first within 500 words)
- [ ] Visual break indicators included

### Technical SEO
- [ ] Meta title: 50-60 chars with keyword
- [ ] Meta description: 150-160 chars with keyword + CTA
- [ ] URL slug: 3-5 words with keyword
- [ ] 3-5+ internal link suggestions (descriptive anchors)
- [ ] 2-3 external authority link suggestions
- [ ] Schema markup recommendation (FAQ, HowTo, Article)

## AI Content Scrubbing

Before final delivery, clean the content:
- Remove AI filler phrases ("It's worth noting", "In today's landscape")
- Replace generic superlatives ("groundbreaking", "revolutionary")
- Add contractions for natural voice
- Vary paragraph lengths (break uniformity)
- Ensure specific numbers replace vague qualifiers
- Check for em-dash overuse

## Output

Deliver the complete article in markdown format with:
1. The full article content
2. Meta elements (title, description, slug) — 3 options each
3. Internal linking suggestions
4. Schema markup recommendation
5. Content score (run the optimization scorecard from content-optimizer skill)

Offer: "Run `/optimize` for a deep quality analysis and further improvements?"
