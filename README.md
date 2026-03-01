# SEO Machine

**The most comprehensive SEO plugin for Claude-powered tools.**

17 commands · 6 skills · 4 agents · Ahrefs & Similarweb MCP

## What is it

A plugin for Claude (Cowork, Code CLI, Cursor, VS Code, Windsurf) covering the entire SEO workflow — from keyword research to technical audits, GEO, and local SEO.

## Quick install

```bash
# Clone and install locally
git clone https://github.com/TheCraigHewitt/seomachine.git
cd seomachine
claude plugin install .

# Or install from a local path
claude plugin install /path/to/seo-machine
```

## Commands

| Category | Commands |
|----------|----------|
| **Content** | `/research` · `/write-seo` · `/optimize` · `/analyze` · `/content-brief` · `/meta-tags` · `/rewrite` · `/humanize` |
| **Architecture** | `/audit` · `/topic-clusters` · `/internal-links` · `/schema-gen` · `/low-hanging-fruit` |
| **GEO & AI** | `/geo-audit` · `/llms-txt` |
| **Local SEO** | `/local-seo` |
| **Strategy** | `/competitors` |

## Quick start

```bash
/research "best email marketing tools"
/content-brief "best email marketing tools"
/write-seo "best email marketing tools" 2500
/optimize [file]
```

## Integrations (MCP)

| Tool | MCP server URL |
|------|----------------|
| Ahrefs | `https://api.ahrefs.com/mcp/mcp` |
| Similarweb | `https://mcp.similarweb.com` |

The plugin works fully without connectors — web search provides fallback data.

## Scoring system

Content scored 0–100: keywords (25%), readability (20%), structure (20%), engagement (20%), technical SEO (15%). Publishing threshold: **70+**.

## Documentation

📖 **[Full documentation](./docs/)** — 12 MD files covering every command, skill, and agent.

🌐 **[Docs site (Astro)](./site/)** — interactive documentation site with search.

## Version

**v2.2.0** — Humanizer with tone presets (`--tone`) and humanization scoring (`--score-only`).

## Origin

Fork of [SEO Machine](https://github.com/TheCraigHewitt/seomachine) by Craig Hewitt.

## License

MIT
