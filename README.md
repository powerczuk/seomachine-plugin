# SEO Machine

![Version](https://img.shields.io/badge/version-v2.0.0-blue)

**The best SEO plugin for Claude-powered tools.**

16 commands · 5 skills · 4 agents · Ahrefs & Similarweb MCP

## What is it

A plugin for Claude (Cowork, Code CLI, Cursor, VS Code, Windsurf, Desktop) covering the entire SEO workflow — from keyword research to technical audits, GEO, and local SEO.

## Quick Install

```bash
# Claude Code CLI
claude plugin add seo-machine

# Cursor / VS Code / Windsurf
# Use native plugin support in your IDE
```

## Commands

| Category | Commands |
|----------|----------|
| **Content** | `/research` · `/write-seo` · `/optimize` · `/analyze` · `/content-brief` · `/meta-tags` · `/rewrite` |
| **Architecture** | `/audit` · `/topic-clusters` · `/internal-links` · `/schema-gen` · `/low-hanging-fruit` |
| **GEO & AI** | `/geo-audit` · `/llms-txt` |
| **Local SEO** | `/local-seo` |
| **Strategy** | `/competitors` |

## Quick Start

```bash
/research "best email marketing tools"
/content-brief "best email marketing tools"
/write-seo "best email marketing tools" 2500
/optimize [file]
```

## Integrations (MCP)

| Tool | MCP Server URL |
|------|----------------|
| Ahrefs | `https://api.ahrefs.com/mcp/mcp` |
| Similarweb | `https://mcp.similarweb.com` |

The plugin works fully without connectors — web search provides fallback data.

## Scoring System

Content scored 0–100: keywords (25%), readability (20%), structure (20%), engagement (20%), technical SEO (15%). Publishing threshold: **70+**.

## Documentation

**[Full documentation](./docs/)** — 12 MD files with details on every command, skill, and agent.

**[Docs site (Astro)](./site/)** — interactive documentation site with search.

## Version

**v2.0.0** — 6 new commands, 2 new skills, 2 new agents, Polish documentation.

Run `./scripts/release.sh` to create a new release.

## Origin

Fork of [SEO Machine](https://github.com/TheCraigHewitt/seomachine) by Craig Hewitt.

## License

MIT
