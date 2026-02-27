# Connectors Guide

SEO Machine uses MCP (Model Context Protocol) to connect with external SEO tools. The plugin works without any connectors (using web search for data), but connected tools provide significantly more precise metrics.

## How Connectors Work

Plugin commands reference tool categories (like `~~SEO tools`) rather than specific products. This means you can swap Ahrefs for Semrush without changing the plugin's behavior. The plugin adapts to whatever tools you have connected.

## Included Connectors

These MCP servers are pre-configured in the plugin's `.mcp.json`:

### Ahrefs

```json
{
  "ahrefs": {
    "type": "http",
    "url": "https://api.ahrefs.com/mcp/mcp"
  }
}
```

**Requirements:** Ahrefs account with MCP/API access enabled.

**What it provides:**
- Keyword search volume and difficulty scores
- Keyword ranking positions
- Backlink profiles and referring domains
- Domain authority / domain rating
- Content gap analysis data
- SERP feature data

**Commands enhanced:** `/research`, `/audit`, `/analyze`, `/low-hanging-fruit`, `/competitors`, `/topic-clusters`

### Similarweb

```json
{
  "similarweb": {
    "type": "http",
    "url": "https://mcp.similarweb.com"
  }
}
```

**Requirements:** Similarweb account with API access.

**What it provides:**
- Website traffic estimates
- Audience demographics
- Traffic sources breakdown
- Competitive intelligence
- Industry benchmarks

**Commands enhanced:** `/audit`, `/competitors`

## Optional Connectors

These are not pre-configured but can be added to your MCP configuration:

### Google Search Console

Connect your GSC data for actual search performance metrics.

**Add to `.mcp.json` or your IDE's MCP config:**
```json
{
  "google-search-console": {
    "type": "http",
    "url": "[GSC MCP server URL]"
  }
}
```

**What it provides:**
- Actual impressions and clicks for your pages
- Real search queries driving traffic
- Click-through rates by query
- Average positions for your rankings
- Index coverage issues

**Commands enhanced:** `/audit`, `/low-hanging-fruit`, `/analyze`, `/optimize`

### Google Analytics 4

Connect GA4 for traffic and conversion data.

**What it provides:**
- Page-level traffic data
- User engagement metrics
- Conversion tracking
- Traffic source attribution
- Content performance trends

**Commands enhanced:** `/audit`, `/low-hanging-fruit`, `/competitors`

### Semrush (Alternative to Ahrefs)

If you use Semrush instead of Ahrefs:

```json
{
  "semrush": {
    "type": "http",
    "url": "[Semrush MCP server URL]"
  }
}
```

**What it provides:** Similar keyword and backlink data to Ahrefs.

### WordPress

Connect WordPress for direct content publishing.

**What it provides:**
- Publish articles directly from `/write-seo`
- Bulk update meta tags from `/meta-tags`
- Pull content inventory for `/internal-links`
- Retrieve existing content for `/optimize`

### DataForSEO

Provides comprehensive SERP data and keyword metrics.

**What it provides:**
- Real-time SERP results
- Keyword suggestions and metrics
- Competitor domain analytics
- On-page SEO data

## Connector Categories

| Category | Placeholder | Pre-configured | Alternatives |
|----------|-------------|---------------|-------------|
| SEO Tools | `~~SEO tools` | Ahrefs, Similarweb | Semrush, Moz, SE Ranking, Mangools |
| Analytics | `~~analytics` | — | Google Analytics 4, Plausible, Matomo |
| Search Console | `~~search console` | — | Google Search Console |
| CMS | `~~CMS` | — | WordPress, Webflow, Ghost, Contentful |
| Data API | `~~data API` | — | DataForSEO, SerpAPI |

## Adding a Custom Connector

To add any MCP-compatible tool:

1. Get the MCP server URL from the tool provider
2. Add it to your MCP configuration:

**For Claude Code / Cowork:**
Edit the plugin's `.mcp.json`:
```json
{
  "mcpServers": {
    "your-tool": {
      "type": "http",
      "url": "https://your-tool-mcp-url.com"
    }
  }
}
```

**For Cursor:**
Edit `.cursor/mcp.json` in your workspace.

**For VS Code:**
Edit `.vscode/mcp.json` in your workspace.

3. Restart your tool/IDE.

## Without Any Connectors

SEO Machine is fully functional without any connected tools. It uses web search to:
- Estimate keyword difficulty and competition
- Analyze SERP results
- Research competitors
- Gather content data

Connected tools add precision (exact volumes, rankings, backlink counts) but the workflows and recommendations remain the same.
