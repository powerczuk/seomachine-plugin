# Getting Started with SEO Machine

SEO Machine is a comprehensive SEO plugin for Claude-powered tools. It covers the entire SEO workflow from keyword research through content creation, optimization, technical audits, and AI search visibility (GEO).

## Prerequisites

- One of the supported platforms installed (see [Installation Guide](./INSTALLATION.md)):
  - Claude Cowork (desktop app)
  - Claude Code (CLI)
  - Cursor IDE
  - VS Code with Claude Code extension
  - Windsurf

## Installation

### Claude Cowork (Recommended for non-developers)

1. Open the Claude desktop app
2. Navigate to **Settings > Plugins**
3. Search for "SEO Machine" or install from the plugin marketplace
4. The plugin loads automatically in Cowork sessions

### Claude Code CLI

```bash
# Install from the plugin registry
claude plugin add seo-machine

# Or clone and install locally
git clone https://github.com/TheCraigHewitt/seomachine.git
cd seomachine
claude plugin add .
```

### Cursor / VS Code / Windsurf

See the detailed [Installation Guide](./INSTALLATION.md) for IDE-specific instructions.

## First Steps

### 1. Verify Installation

In any Claude conversation, type:

```
/research test keyword
```

If the plugin is active, it will perform keyword research on "test keyword" and return a structured analysis.

### 2. Connect SEO Tools (Optional)

SEO Machine works without any external tools by using web search for data. However, connecting SEO tools provides significantly more precise data.

**Recommended connectors:**

| Tool | What it adds |
|------|-------------|
| Ahrefs | Keyword volumes, difficulty scores, backlink data, ranking positions |
| Similarweb | Traffic estimates, competitive intelligence, audience data |
| Google Search Console | Your actual search performance data, impressions, clicks, positions |
| Google Analytics | Traffic, engagement, conversions for content prioritization |

See [Connectors Guide](./CONNECTORS.md) for setup instructions.

### 3. Run Your First Workflow

**Option A: Write a new SEO article**

```
/research "best project management tools for startups"
```

Review the keyword opportunities, then:

```
/content-brief "best project management tools for startups"
```

Then create the full article:

```
/write-seo "best project management tools for startups" 2500
```

**Option B: Audit an existing site**

```
/audit https://example.com
```

**Option C: Optimize existing content**

```
/analyze https://example.com/blog/some-article
```

Then apply optimizations:

```
/optimize https://example.com/blog/some-article
```

### 4. Understand the Scoring System

All content produced or analyzed by SEO Machine is scored on a 0-100 scale across five dimensions:

| Dimension | Weight | What it measures |
|-----------|--------|-----------------|
| Keyword Optimization | 25% | Density, placements, variations, LSI terms |
| Readability | 20% | Flesch score, grade level, sentence structure |
| Content Structure | 20% | Headings, hierarchy, length, formatting |
| Engagement | 20% | Hooks, stories, CTAs, visual breaks |
| Technical SEO | 15% | Meta elements, links, schema markup |

**Publishing threshold:** 70/100 minimum.

## What's Next?

- Browse all [Commands](./COMMANDS.md) to see what's available
- Read [Use Cases](./USE-CASES.md) for real-world workflow examples
- Check out the [GEO Guide](./GEO-GUIDE.md) to optimize for AI search engines
- Explore [Local SEO](./LOCAL-SEO.md) if you serve local customers
