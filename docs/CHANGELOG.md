# Changelog

All notable changes to the SEO Machine plugin are documented here. This project follows [Semantic Versioning](https://semver.org/).

---

## [2.2.0] — 2026-03-01

### Added

**Humanizer Enhancements:**
- **Tone Presets** — four voice direction presets for humanized content: `casual` (blog posts, social), `professional` (B2B, whitepapers), `editorial` (thought leadership, opinion), `conversational` (default, general content)
- **Humanization Score** — 0-100 AI-detectability score shown before and after humanization, based on six weighted factors: AI vocabulary density (25%), sentence variety (20%), pattern repetition (15%), voice presence (15%), transitional padding (15%), punctuation patterns (10%)
- **`--score-only` flag** — diagnostic mode that shows the humanization score without rewriting
- **`--tone` flag** — set the voice direction for `/humanize` output

### Changed
- Humanizer workflow updated from 4 steps to 6 steps (adds initial scoring and re-scoring)
- `SKILLS.md` — Added Tone Presets and Humanization Score sections to Humanizer skill
- `COMMANDS.md` — Updated `/humanize` syntax with new flags

---

## [2.1.0] — 2026-03-01

### Added

**New Skill:**
- **Humanizer** — AI writing detection and removal engine based on Wikipedia's "Signs of AI Writing" guide (WikiProject AI Cleanup). Detects and rewrites nine AI writing pattern categories: inflated significance language, promotional phrasing, superficial -ing analyses, vague attributions, em dash overuse, rule of three, AI vocabulary words, negative parallelisms, and conjunctive padding. Also actively injects human voice — opinions, rhythm variation, first-person perspective, and specificity. Includes a final anti-AI pass step.

**New Command:**
- `/humanize` — Remove AI writing patterns from any content and inject natural human voice. Accepts inline text, file paths, or URLs. Also triggers naturally when the user says "make this more human", "remove AI patterns", or "edit this to not sound like AI".

### Changed
- `SKILLS.md` — Added full Humanizer skill reference section with pattern table, voice injection techniques, workflow, trigger phrases, and before/after example
- `COMMANDS.md` — Updated command count from 16 to 17, added `/humanize` to the Content Creation & Optimization table, added full `/humanize` command reference entry

---

## [2.0.0] — 2026-02-27

### Added

**New Commands:**
- `/rewrite` — Refresh and update declining or outdated content to recover rankings
- `/low-hanging-fruit` — Find quick-win keywords and pages for immediate ranking gains
- `/geo-audit` — Audit site visibility and citability in AI search engines (ChatGPT, Perplexity, Gemini)
- `/llms-txt` — Generate an optimized llms.txt file for AI crawler guidance
- `/local-seo` — Full local SEO audit including GBP, citations, NAP consistency, local keywords
- `/competitors` — Deep competitive analysis with gap identification and battlecards

**New Skills:**
- **GEO Fundamentals** — Generative Engine Optimization knowledge base covering AI crawler access, llms.txt, content citability, brand authority, and GEO scoring
- **Local SEO** — Local search optimization covering Google Business Profile, NAP consistency, citation building, local schema, and review management

**New Agents:**
- **geo-scorer** — GEO readiness scoring agent for AI search visibility assessment
- **local-seo-auditor** — Local SEO health assessment agent

**New Reference Files:**
- `geo-checklist.md` — Step-by-step GEO implementation checklist
- `llms-txt-spec.md` — llms.txt file specification and examples
- `ai-crawler-guide.md` — Configuration guide for all major AI crawlers
- `local-seo-checklist.md` — Complete local SEO audit checklist
- `citation-sources.md` — Directory of citation sources by industry
- `gbp-optimization-guide.md` — Step-by-step GBP optimization guide

**Documentation:**
- Complete documentation suite (12 MD files)
- Astro-based documentation website
- Installation guides for Claude Cowork, Claude Code, Cursor, VS Code, Windsurf, Claude Desktop
- Security documentation with prompt injection defense details
- Real-world use case workflows with example outputs
- Contributing guide

**Infrastructure:**
- Semantic versioning introduced (SemVer)
- Security model documented
- Multi-platform installation support

### Changed
- Plugin version bumped from 1.0.0 to 2.0.0
- README expanded with full feature overview
- CONNECTORS.md updated with additional connector categories
- Content scoring now includes GEO citability as an optional dimension

### Migration from 1.x

No breaking changes to existing commands. All v1 commands (`/research`, `/write-seo`, `/optimize`, `/audit`, `/analyze`, `/content-brief`, `/meta-tags`, `/topic-clusters`, `/internal-links`, `/schema-gen`) work identically in v2. New commands and features are purely additive.

---

## [1.0.0] — 2025-10-29

### Initial Release

**Commands:**
- `/research` — Keyword research, SERP analysis, competitive gap identification
- `/write-seo` — SEO-optimized long-form content creation (2,000-3,000+ words)
- `/optimize` — Content analysis and optimization with 5-dimension scoring
- `/audit` — Full-site SEO audit (technical, on-page, content, competitive)
- `/analyze` — Deep SEO quality analysis with 0-100 scoring
- `/content-brief` — Writer-ready SEO content briefs
- `/meta-tags` — Meta title, description, and OG tag generation
- `/topic-clusters` — Topic cluster mapping with pillar pages and internal linking
- `/internal-links` — Internal linking analysis and recommendations
- `/schema-gen` — JSON-LD schema markup generation

**Skills:**
- SEO Fundamentals
- Content Optimizer
- Programmatic SEO

**Agents:**
- seo-analyzer
- keyword-mapper

**Connectors:**
- Ahrefs (MCP)
- Similarweb (MCP)

---

## Versioning Policy

SEO Machine follows [Semantic Versioning](https://semver.org/):

- **MAJOR** (X.0.0) — Breaking changes to command syntax or output format
- **MINOR** (0.X.0) — New commands, skills, agents, or features (backward compatible)
- **PATCH** (0.0.X) — Bug fixes, reference file updates, documentation improvements

### Version Locations

The version is maintained in:
1. `.claude-plugin/plugin.json` — `"version"` field (source of truth)
2. `docs/CHANGELOG.md` — Human-readable history
3. Git tags — `v2.0.0` format for releases

### Checking Your Version

In Claude Code:
```bash
claude plugin info seo-machine
```

Or check the plugin.json file directly.
