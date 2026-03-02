---
description: Analyze and suggest strategic internal linking improvements
argument-hint: "<URL or sitemap URL> [focus page URL]"
allowed-tools: Read, WebFetch, WebSearch
---

# /internal-links — Internal Linking Strategy

Analyze a site's internal linking structure and generate strategic linking suggestions. Load the `seo-fundamentals` skill for linking best practices.

Target: `$ARGUMENTS`

## Process

### 1. Site Structure Discovery
If a sitemap URL or domain is provided:
- Fetch the XML sitemap to identify key pages
- Categorize pages by type: pillar/hub, blog/article, landing page, product, support
- Identify the site's topic areas/clusters

If a specific page is provided:
- Fetch the page content
- Identify its topic, target keyword, and current internal links
- Find related pages that should be linked

### 2. Current Internal Link Audit

For each analyzed page, assess:
- **Link count**: How many internal links does it have? (target: 3-5+)
- **Anchor text quality**: Descriptive and keyword-rich, or generic? ("click here" = bad)
- **Link placement**: Contextual body links vs. navigation-only?
- **Orphan pages**: Pages with zero internal links pointing to them
- **Link depth**: Pages reachable only through 4+ clicks from homepage
- **Broken internal links**: 404s in internal link targets

### 3. Strategic Link Suggestions

For each page, recommend specific internal links:

**Link TO this page FROM:**
- High-authority pages on related topics
- Recently published content in the same cluster
- Pillar/hub pages that should reference this subtopic

**Link FROM this page TO:**
- Pillar page in the same topic cluster
- 2-3 related cluster pages
- Conversion pages where contextually relevant
- Recently published content that adds value

For each suggestion, provide:
- **Source page**: Where the link should be placed
- **Target page**: Where the link should point
- **Suggested anchor text**: 2-5 words, descriptive, keyword-relevant
- **Placement context**: Where in the content it fits naturally
- **Rationale**: Why this link helps (authority flow, user journey, topical relevance)

### 4. Topic Cluster Link Integrity

Verify cluster linking patterns:
- Does every cluster page link to its pillar? (required)
- Does the pillar link to every cluster page? (required)
- Do cluster pages cross-link to 2-3 siblings? (recommended)
- Are there orphan pages that belong to a cluster but aren't linked? (fix)

## Output

### Internal Link Health Summary
| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Avg links per page | -- | 3-5+ | ✓/✗ |
| Orphan pages | -- | 0 | ✓/✗ |
| Generic anchor text % | -- | <10% | ✓/✗ |
| Max click depth | -- | ≤3 | ✓/✗ |
| Broken internal links | -- | 0 | ✓/✗ |

### Priority Link Additions
| # | From Page | To Page | Anchor Text | Placement | Impact |
|---|-----------|---------|-------------|-----------|--------|
Sorted by expected impact: High / Medium / Low.

### Orphan Pages (Require Immediate Links)
List any pages with zero or minimal internal links.

### Anchor Text Improvements
| Current Anchor | On Page | Recommended Anchor | Why |
|---------------|---------|-------------------|-----|

### Topic Cluster Link Map
Visual representation of current linking structure with gaps highlighted.

### Implementation Checklist
Ordered action items to implement all recommended changes, estimated at effort per item.
