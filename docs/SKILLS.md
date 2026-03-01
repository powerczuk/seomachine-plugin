# Skills Reference

Skills are deep knowledge modules that Claude loads when performing SEO tasks. They provide frameworks, scoring systems, templates, and best practices that power the plugin's commands.

## Skills Overview

| Skill | Purpose | Key Capabilities |
|-------|---------|-----------------|
| SEO Fundamentals | Core SEO knowledge base | Search intent, on-page elements, technical SEO, E-E-A-T, schema |
| Content Optimizer | Content quality and scoring | 5-dimension scoring, readability formulas, engagement techniques, AI scrubbing |
| Programmatic SEO | Scaling content production | Topic clusters, content prioritization, quick wins, landing page CRO |
| GEO Fundamentals | AI search optimization | AI crawler access, llms.txt, citability, brand mentions, GEO scoring |
| Local SEO | Local search optimization | GBP optimization, NAP consistency, citations, local schema, reviews |
| Humanizer | AI writing detection & removal | Pattern detection, voice injection, Wikipedia AI writing guide, final anti-AI pass |

---

## SEO Fundamentals

The foundational skill covering on-page optimization, technical SEO, keyword strategy, and search engine ranking factors.

### Modules

**Search Intent Classification**
Classifies queries into four intent types:
- **Informational** — user wants to learn something ("how to...", "what is...")
- **Navigational** — user looking for a specific site ("facebook login", "gmail")
- **Commercial Investigation** — user researching before buying ("best CRM", "X vs Y")
- **Transactional** — user ready to act ("buy iPhone 16", "sign up for...")

**On-Page SEO Elements**
Covers: title tags (50-60 chars), meta descriptions (150-160 chars), heading hierarchy (single H1, logical H2/H3 nesting), URL structure (short, keyword-included, hyphenated), keyword placement rules, and featured snippet optimization strategies.

**Technical SEO Checklist**
- Crawlability & Indexation — robots.txt, XML sitemaps, canonical tags, pagination, crawl budget
- Performance & Core Web Vitals — LCP (<2.5s), INP (<200ms), CLS (<0.1)
- Security & Infrastructure — HTTPS, redirect chains, 404 handling, mobile responsiveness
- Structured Data — JSON-LD implementation, validation, rich result eligibility

**E-E-A-T Signals**
Experience, Expertise, Authoritativeness, Trustworthiness framework:
- Author bios with credentials
- Expert quotes and citations
- First-hand experience signals
- Trust indicators (HTTPS, privacy policy, contact info)

**Internal Linking Strategy**
- 3-5+ internal links per article minimum
- Descriptive anchor text (not "click here")
- Contextual placement within content
- Topic cluster support (pillar to cluster, cluster to pillar)

### Reference Files
- `keyword-research-framework.md` — 6-step research methodology, keyword mapping matrix, cannibalization detection
- `technical-seo-deep-dive.md` — Crawl budget optimization, site architecture, Core Web Vitals, hreflang
- `schema-markup-templates.md` — Copy-paste JSON-LD templates for 7+ schema types

---

## Content Optimizer

Advanced content optimization with a systematic scoring framework.

### Content Quality Scoring System (0-100)

| Dimension | Weight | Target Metrics |
|-----------|--------|---------------|
| Keyword Optimization | 25% | 1-2% density, critical placements, secondary keywords, LSI terms |
| Readability | 20% | Flesch 60-70, Grade 8-10, sentences <20 words avg, passive <20% |
| Content Structure | 20% | Single H1, H2 every 300 words, H3 for subsections, 2,000+ words |
| Engagement | 20% | Hook intro, 2-3 mini-stories, 2-3 CTAs, visual break indicators |
| Technical SEO | 15% | Meta elements, 3-5+ internal links, 2-3 external links, schema |

### AI Content Scrubbing

Detects and removes patterns that signal AI-generated content:
- Formulaic transitions ("Furthermore", "Moreover", "In conclusion")
- Overly balanced perspectives without strong positions
- Lack of specific examples, data, or personal anecdotes
- Uniform sentence length and paragraph structure

Replacement techniques:
- Inject conversational asides and voice
- Add specific numbers, dates, and named examples
- Vary sentence length dramatically (5-word and 25-word in same paragraph)
- Include first-person experience where appropriate

### Reference Files
- `readability-formulas.md` — Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog formulas and targets
- `engagement-techniques.md` — 5 hook formulas, APP method, mini-story structure, CTA framework
- `cta-playbook.md` — CTA formula, placement rules, risk reversal, A/B testing priority

---

## Programmatic SEO

Frameworks for scaling SEO content production and data-driven prioritization.

### Topic Cluster Architecture

**Hub-and-spoke model:**
- Pillar Page (3,000-5,000+ words) — comprehensive authority piece
- Cluster Pages (1,500-2,500 words) — specific subtopics
- Supporting Content — FAQs, glossaries, case studies, tools, templates

### Data-Driven Content Prioritization

8-factor opportunity scoring model:

| Factor | Weight |
|--------|--------|
| Search volume | 20% |
| Keyword difficulty | 15% |
| Current ranking position | 15% |
| Content gap vs competitors | 15% |
| Business relevance | 15% |
| Conversion potential | 10% |
| Content freshness need | 5% |
| Trending momentum | 5% |

### Quick Wins Identification
- Position 11-20 keywords (page 2, close to page 1)
- High-impression, low-CTR pages (title/description fixes)
- Missing meta descriptions on ranking pages
- Thin content ranking for valuable keywords
- Internal link opportunities to boost existing rankings

### Programmatic Content Templates
- Location pages — `[service] in [city]` with 60%+ unique content
- Comparison pages — `[product A] vs [product B]`
- Integration pages — `[tool] + [integration] guide`
- Use case pages — `[tool] for [audience/industry]`

### Reference Files
- `cluster-mapping-guide.md` — 6-phase cluster building with complete worked example

---

## GEO Fundamentals (New in v2)

Generative Engine Optimization — making your content visible and citable in AI search engines (ChatGPT, Gemini, Perplexity, Claude).

### Why GEO Matters
- ChatGPT has 400M+ weekly active users
- Traditional search volume predicted to drop 25% by 2026
- LLM visitors convert 4.4x better than organic search visitors
- AI engines cite only 2-7 domains per response vs 10 blue links

### GEO Scoring Dimensions

| Dimension | What it measures |
|-----------|-----------------|
| AI Crawler Access | robots.txt allows GPTBot, ClaudeBot, PerplexityBot |
| llms.txt Quality | Presence and completeness of llms.txt file |
| Content Citability | Passages can stand alone when extracted by AI |
| Schema Markup | Structured data that helps AI parse content |
| E-E-A-T Signals | Author credentials, expert quotes, trust indicators |
| Brand Presence | Third-party mentions, earned media, social sentiment |
| Content Freshness | Last-updated timestamps, current data and examples |
| Technical Readiness | No JS-only content, no hidden tabs/accordions |

### Key GEO Techniques
- Write passages that retain meaning in isolation (no "as mentioned above")
- Break content into ~800-token blocks for optimal embedding
- Add statistics with sources for citation-ready content
- Include expert quotes with attribution
- Maintain consistent brand mentions across 10+ external platforms
- Implement llms.txt file at domain root

### Reference Files
- `geo-checklist.md` — Step-by-step GEO implementation checklist
- `llms-txt-spec.md` — llms.txt file specification and examples
- `ai-crawler-guide.md` — Configuration for all major AI crawlers

---

## Local SEO (New in v2)

Local search optimization for businesses serving geographic areas.

### Google Business Profile (GBP) Optimization
- Complete all profile fields (name, address, phone, hours, categories, attributes)
- Select accurate primary and secondary categories
- Regular Google Posts (weekly minimum)
- Photo uploads (exterior, interior, team, products)
- Active Q&A management
- Review response strategy

### NAP Consistency
Name, Address, Phone must be identical across all citations — including punctuation and abbreviations. Even "Street" vs "St." creates inconsistency signals.

### Citation Building Strategy
**Tier 1 — Data Aggregators** (submit first, distributes to 50-150+ directories):
- Data Axle (formerly InfoUSA)
- Neustar Localeze
- Foursquare

**Tier 2 — Major Directories:**
- Google Business Profile, Apple Maps, Bing Places
- Yelp, BBB, Facebook Business

**Tier 3 — Industry-Specific:**
- Healthcare: Healthgrades, Zocdoc, Vitals
- Legal: Avvo, FindLaw, Justia
- Restaurants: TripAdvisor, OpenTable, Zomato
- Home Services: Angi, HomeAdvisor, Thumbtack

### Local Schema Markup
- LocalBusiness with GeoCoordinates
- OpeningHoursSpecification
- Service area definitions
- Review/AggregateRating

### Reference Files
- `local-seo-checklist.md` — Complete local SEO audit checklist
- `citation-sources.md` — Directory of citation sources by industry
- `gbp-optimization-guide.md` — Step-by-step GBP optimization

---

## Humanizer (New in v2.1)

Removes AI writing patterns to make content sound natural and human. Based on Wikipedia's "Signs of AI Writing" guide maintained by WikiProject AI Cleanup.

### What It Fixes

The skill detects and rewrites nine categories of AI-generated patterns:

| Pattern | What it looks like | Fix |
|---------|-------------------|-----|
| **Inflated significance** | "marks a pivotal moment", "stands as a testament" | Cut or rewrite with specifics |
| **Promotional language** | "groundbreaking", "revolutionary", "game-changing" | Replace with concrete facts |
| **Superficial -ing analyses** | "exploring the nuances of...", "delving into..." | Skip throat-clearing; make the point |
| **Vague attributions** | "experts say", "studies show", "many believe" | Name the source or cut it |
| **Em dash overuse** | clause — clause — clause | Use sparingly; restructure sentences |
| **Rule of three** | "fast, reliable, and scalable" | Pick one word or rephrase |
| **AI vocabulary** | "delve", "meticulous", "crucial", "leverage", "tapestry" | Replace with plain language |
| **Negative parallelisms** | "not only...but also", "not just...but" | Rephrase directly |
| **Conjunctive padding** | "Furthermore,", "Moreover,", "In conclusion," | Delete; let ideas connect naturally |

### Voice Injection

Beyond pattern removal, the skill actively adds human voice:

- **Opinions** — reacts to facts rather than neutrally reporting them
- **Rhythm variation** — mixes short punchy sentences with longer ones
- **Acknowledged complexity** — allows mixed feelings and uncertainty
- **First-person** — uses "I" where appropriate for honest, personal tone
- **Specificity** — replaces vague descriptions with concrete numbers, names, dates

### Workflow

1. Scan text for all nine AI pattern categories
2. Rewrite flagged sections with natural alternatives
3. Inject personality — opinions, rhythm variation, voice
4. Final anti-AI pass: ask "What makes this obviously AI-generated?" then fix remaining tells

### Trigger Phrases

This skill activates when you ask Claude to:
- `/humanize` — dedicated humanize command
- "make this sound more human"
- "remove AI patterns from this"
- "edit this to not sound like AI"
- "humanize this content"

### Example

**Before (AI-generated):**
> Furthermore, the platform offers a comprehensive suite of tools that are crucial for modern businesses. It is worth noting that this represents a pivotal moment in the evolution of digital marketing, underscoring the importance of adapting to the ever-evolving landscape.

**After (humanized):**
> The platform covers most of what a modern marketing team actually needs day-to-day. Whether that's a "pivotal moment" — I'll leave that call to the press releases.
