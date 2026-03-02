# SEO Machine

A comprehensive SEO powerhouse plugin for Claude Cowork. Covers the entire SEO workflow: keyword research, content optimization, technical audits, SERP analysis, topic cluster architecture, internal linking, schema markup, and programmatic SEO at scale.

## Commands

| Command | Description |
|---------|-------------|
| `/research` | Keyword research, SERP analysis, and competitive gap identification |
| `/write-seo` | Write SEO-optimized long-form content (2,000-3,000+ words) |
| `/optimize` | Analyze and optimize existing content for maximum SEO performance |
| `/audit` | Full-site SEO audit — technical, on-page, content, and competitive |
| `/analyze` | Deep SEO quality analysis with 0-100 scoring |
| `/content-brief` | Generate comprehensive, writer-ready SEO content briefs |
| `/meta-tags` | Generate optimized meta titles, descriptions, and OG tags |
| `/topic-clusters` | Map topic clusters with pillar pages and internal linking |
| `/internal-links` | Analyze and suggest strategic internal linking improvements |
| `/schema-gen` | Generate JSON-LD schema markup for any page type |

## Skills

| Skill | Triggers |
|-------|----------|
| **SEO Fundamentals** | On-page SEO, technical SEO, keyword strategy, schema markup, E-E-A-T, Core Web Vitals |
| **Content Optimizer** | Content scoring, keyword density, readability, engagement analysis, AI content scrubbing |
| **Programmatic SEO** | Topic clusters, content at scale, quick wins, landing page CRO, analytics |
| **Humanizer** | Remove AI writing patterns, make content sound natural, de-slop text before publishing |

### Humanizer

Detects and rewrites 24 AI writing patterns based on [Wikipedia's "Signs of AI writing"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) guide. Essential as a final pass before publishing SEO content.

**Patterns it fixes:**
- Content patterns — significance inflation, promotional language, vague attributions, formulaic "challenges" sections, superficial -ing analyses, notability name-dropping
- Language patterns — AI vocabulary words (pivotal, tapestry, underscore, delve…), copula avoidance (serves as / stands as), negative parallelisms, rule of three, synonym cycling, false ranges
- Style patterns — em dash overuse, boldface overuse, inline-header lists, title case headings, emojis, curly quotes
- Communication patterns — chatbot artifacts (I hope this helps!), knowledge-cutoff disclaimers, sycophantic tone
- Filler & hedging — filler phrases, excessive hedging, generic positive conclusions

**Two-pass process:** The skill drafts a rewrite, then self-audits with "What makes this still obviously AI-generated?" before producing a final, cleaner version.

**Recommended position in workflow:** After `/write-seo` or `/optimize`, and before publishing.

## Agents

| Agent | Purpose |
|-------|---------|
| **seo-analyzer** | Multi-module content quality analysis with 0-100 scoring |
| **keyword-mapper** | Keyword mapping, cannibalization detection, gap analysis |

## SEO Tool Integrations

Connects with Ahrefs and Similarweb via MCP for real-time keyword data, ranking positions, and competitive intelligence. See CONNECTORS.md for details.

The plugin works fully without connected tools (using web search), but connected SEO tools provide more precise data.

## Content Quality Standards

All content is scored across five dimensions:
- **Keyword Optimization** (25%) — density, placements, variations
- **Readability** (20%) — Flesch score, grade level, sentence structure
- **Content Structure** (20%) — headings, hierarchy, length, formatting
- **Engagement** (20%) — hooks, stories, CTAs, visual breaks
- **Technical SEO** (15%) — meta elements, links, schema

Publishing threshold: **70/100** minimum.

## Typical Workflow

1. `/research` — discover keywords and analyze competition
2. `/content-brief` — create a detailed brief for the writer
3. `/write-seo` — produce the optimized article
4. `/optimize` — score and refine the content
5. **Humanizer skill** — remove AI writing patterns for natural-sounding copy
6. `/meta-tags` — finalize meta elements
7. `/schema-gen` — add structured data
8. `/internal-links` — connect to site's link network

For site-level strategy:
1. `/audit` — comprehensive site assessment
2. `/topic-clusters` — build cluster architecture
3. `/internal-links` — optimize link structure
