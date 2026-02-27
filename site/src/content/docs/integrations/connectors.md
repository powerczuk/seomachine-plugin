---
title: Connectors Guide
description: Connect Ahrefs, Similarweb, Google Search Console, and more via MCP
---

SEO Machine uses MCP (Model Context Protocol) to connect with external SEO tools. The plugin works without any connectors, but connected tools provide more precise data.

## Pre-configured Connectors

### Ahrefs

```json
{
  "ahrefs": {
    "type": "http",
    "url": "https://api.ahrefs.com/mcp/mcp"
  }
}
```

**Requires:** Ahrefs account with MCP access.
**Provides:** Keyword volumes, difficulty scores, backlink profiles, ranking positions, content gap data.
**Enhances:** `/research`, `/audit`, `/analyze`, `/low-hanging-fruit`, `/competitors`, `/topic-clusters`

### Similarweb

```json
{
  "similarweb": {
    "type": "http",
    "url": "https://mcp.similarweb.com"
  }
}
```

**Requires:** Similarweb account with API access.
**Provides:** Traffic estimates, audience demographics, traffic sources, competitive intelligence.
**Enhances:** `/audit`, `/competitors`

## Optional Connectors

| Tool | What it adds | Commands enhanced |
|------|-------------|------------------|
| Google Search Console | Impressions, clicks, CTR, positions | `/audit`, `/low-hanging-fruit`, `/analyze` |
| Google Analytics 4 | Traffic, engagement, conversions | `/audit`, `/low-hanging-fruit` |
| Semrush | Alternative to Ahrefs for keyword/backlink data | Same as Ahrefs |
| WordPress | Direct publishing, content inventory | `/write-seo`, `/meta-tags`, `/internal-links` |
| DataForSEO | Real-time SERP data, keyword suggestions | `/research`, `/audit` |

## Adding Connectors

Add MCP servers to your platform's configuration file:

**Claude Code / Cowork:** Edit the plugin's `.mcp.json`
**Cursor:** Edit `.cursor/mcp.json`
**VS Code:** Edit `.vscode/mcp.json`
**Claude Desktop:** Edit `claude_desktop_config.json`

## Without Connectors

SEO Machine uses web search as a fallback for all data. Connected tools add precision (exact volumes, positions, backlink counts) but the workflows and recommendations work identically.
