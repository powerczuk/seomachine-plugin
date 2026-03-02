---
description: Map topic clusters with pillar pages, subtopics, and internal linking
argument-hint: "<seed topic or keyword>"
allowed-tools: Read, Write, WebSearch, WebFetch
---

# /topic-clusters — Topic Cluster Architecture

Build a comprehensive topic cluster strategy for the given seed topic. Load the `programmatic-seo` skill and read `${CLAUDE_PLUGIN_ROOT}/skills/programmatic-seo/references/cluster-mapping-guide.md`.

Seed topic: `$ARGUMENTS`

## Process

### 1. Seed Topic Validation
- Confirm the seed topic is broad enough for a cluster (8-15+ subtopics)
- Verify sufficient aggregate search volume
- Check that the user/business has relevant expertise
- Ensure it's not dominated by mega-sites for every subtopic

### 2. Subtopic Discovery
Use web search to mine subtopics from:
- Google autocomplete suggestions for the seed keyword
- People Also Ask questions
- Related searches at bottom of SERPs
- Competitor content coverage (what subtopics do their blogs cover?)
- Question formats: "how to [topic]", "what is [topic]", "[topic] vs [alternative]", "best [topic]"

Discover 15-30 potential subtopics.

### 3. Subtopic Filtering & Prioritization
For each subtopic, assess:
- Search volume signals (high/medium/low)
- Keyword difficulty estimate
- Search intent classification
- Business relevance
- Content gap (are competitors already covering this well?)
- Conversion potential

Score and rank by priority: High / Medium / Low.

### 4. Cluster Organization

Organize into a structured map:

```
PILLAR: [Broad Topic] — [target keyword, word count target]
│
├── CLUSTER GROUP: [Theme 1]
│   ├── [Subtopic page] — [keyword, intent, priority]
│   ├── [Subtopic page] — [keyword, intent, priority]
│   └── [Subtopic page] — [keyword, intent, priority]
│
├── CLUSTER GROUP: [Theme 2]
│   ├── [Subtopic page] — [keyword, intent, priority]
│   └── [Subtopic page] — [keyword, intent, priority]
│
├── CLUSTER GROUP: [Theme 3]
│   ├── ...
│
└── SUPPORTING CONTENT
    ├── FAQ page — [questions, intent]
    ├── Glossary page — [terms]
    └── Template/Tool page — [type, intent]
```

### 5. Internal Linking Map
Define all linking relationships:
- Pillar → every cluster page (descriptive anchor text)
- Every cluster page → pillar (primary keyword anchor)
- Cluster pages → 2-3 related cluster pages
- Cross-cluster links where relevant
- Supporting content links

### 6. Content Calendar
Recommend publication order and cadence:
1. Pillar page first (establish the hub)
2. Highest-priority cluster pages (sorted by volume × relevance)
3. Supporting content (FAQs, glossaries, tools)
4. Remaining cluster pages to complete coverage
Cadence: 2-4 pages per month to complete cluster in 2-3 months.

## Output

### Cluster Overview
- Seed topic and primary pillar keyword
- Total cluster pages planned
- Estimated total monthly search volume (aggregate)
- Completion timeline estimate

### Pillar Page Specification
- Target keyword and search intent
- Recommended word count (3,000-5,000+)
- Key sections to cover
- Table of contents structure
- Internal links to include

### Cluster Page Table
| Page Title | Primary Keyword | Intent | Volume | Difficulty | Priority | Group | Status |
|-----------|----------------|--------|--------|-----------|----------|-------|--------|

### Internal Linking Matrix
Visual or tabular representation of all link relationships.

### Content Calendar
| Week | Content Piece | Type | Keyword | Priority | Est. Effort |
|------|-------------|------|---------|----------|-------------|

### Schema Markup Recommendations
Per page type:
- Pillar: Article + BreadcrumbList + FAQ (for common questions section)
- Cluster pages: Article + relevant type (HowTo, FAQ, etc.)
- Supporting: FAQ, HowTo, or Glossary schema as appropriate

Offer: "Generate a content brief for the pillar page with `/content-brief`?"
