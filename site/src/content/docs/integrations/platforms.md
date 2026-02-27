---
title: Platform Setup
description: Detailed platform-specific configuration for Claude Cowork, Claude Code, Cursor, VS Code, Windsurf, and Claude Desktop
---

import { Tabs, TabItem } from '@astrojs/starlight/components';

## Configuration Files

Each platform stores MCP and plugin configuration in different locations:

| Platform | MCP Config Location | Plugin Storage |
|----------|-------------------|----------------|
| Claude Code CLI | `~/.claude/settings.json` | `~/.claude/plugins/` |
| Claude Cowork | Managed by app | Managed by app |
| Cursor | `.cursor/mcp.json` | Via Claude Code extension |
| VS Code | `.vscode/mcp.json` | Via Claude Code extension |
| Windsurf | Windsurf MCP settings | Via Claude Code extension |
| Claude Desktop | `claude_desktop_config.json` | App-managed |

## Multi-Platform Setup

Use `add-mcp` to configure MCP servers across all platforms at once:

```bash
npx add-mcp https://api.ahrefs.com/mcp/mcp -a cursor -a claude-code
npx add-mcp https://mcp.similarweb.com -a cursor -a claude-code
```

This automatically detects installed tools and writes the correct configuration files.

## IDE-Specific Notes

### Cursor

The Claude Code extension for Cursor requires manual installation:

```bash
npm pack @anthropic-ai/claude-code
tar -xzf anthropic-ai-claude-code-*.tgz
cursor --install-extension package/vendor/claude-code.vsix
```

After installing, the Claude Code panel is available via `Cmd+Shift+P > Claude Code: Open`.

### VS Code

The Claude Code extension is available directly from the VS Code marketplace. Search for "Claude Code" in the Extensions panel.

### Windsurf

Install the Claude Code extension from Windsurf's extension marketplace, then configure MCP servers through Windsurf's MCP settings panel.

## Verifying Setup

After installation, test with:

```
/research test keyword
```

If you see structured output, the plugin is active. If not:

1. Check `claude plugin list` to confirm installation
2. Verify MCP server URLs are correct
3. Restart the application/IDE
4. Check for API credential issues in connected tools
