---
title: Installation
description: Install SEO Machine on Claude Cowork, Claude Code, Cursor, VS Code, Windsurf, or Claude Desktop
---

import { Tabs, TabItem } from '@astrojs/starlight/components';

## Choose your platform

<Tabs>
  <TabItem label="Claude Cowork">
    ### From Plugin Marketplace (recommended)

    1. Open the Claude desktop app
    2. Start or open a Cowork session
    3. Go to **Settings > Plugins**
    4. Search for **"SEO Machine"**
    5. Click **Install**

    ### Manual Installation

    1. Download the plugin from the [GitHub releases page](https://github.com/TheCraigHewitt/seomachine/releases)
    2. In Cowork, go to **Settings > Plugins > Install from file**
    3. Select the downloaded `.zip` file
  </TabItem>

  <TabItem label="Claude Code CLI">
    ### From Plugin Registry

    ```bash
    claude plugin add seo-machine
    ```

    ### From GitHub

    ```bash
    git clone https://github.com/TheCraigHewitt/seomachine.git
    cd seomachine
    claude plugin add .
    ```

    ### Verify

    ```bash
    claude plugin list
    ```
  </TabItem>

  <TabItem label="Cursor">
    ### Step 1: Install Claude Code extension

    ```bash
    npm pack @anthropic-ai/claude-code
    tar -xzf anthropic-ai-claude-code-*.tgz
    cursor --install-extension package/vendor/claude-code.vsix
    ```

    ### Step 2: Install the plugin

    ```bash
    claude plugin add seo-machine
    ```

    ### Step 3: (Optional) Add MCP connectors

    Edit `.cursor/mcp.json`:

    ```json
    {
      "mcpServers": {
        "ahrefs": {
          "type": "http",
          "url": "https://api.ahrefs.com/mcp/mcp"
        },
        "similarweb": {
          "type": "http",
          "url": "https://mcp.similarweb.com"
        }
      }
    }
    ```
  </TabItem>

  <TabItem label="VS Code">
    ### Step 1: Install Claude Code extension

    Press `Cmd+Shift+X` (Mac) or `Ctrl+Shift+X` (Windows/Linux), search for "Claude Code", and install.

    ### Step 2: Install the plugin

    Open the integrated terminal:

    ```bash
    claude plugin add seo-machine
    ```

    ### Step 3: (Optional) Add MCP connectors

    Edit `.vscode/mcp.json` in your workspace.
  </TabItem>

  <TabItem label="Windsurf">
    ### Step 1: Install Claude Code extension

    Open Extensions marketplace, search for "Claude Code", install.

    ### Step 2: Install the plugin

    ```bash
    claude plugin add seo-machine
    ```
  </TabItem>

  <TabItem label="Claude Desktop">
    1. Open Claude Desktop
    2. Go to **Settings > Developer > Plugins**
    3. Add the plugin directory path or install from marketplace

    For MCP servers, edit:

    **Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`

    ```json
    {
      "mcpServers": {
        "ahrefs": {
          "type": "http",
          "url": "https://api.ahrefs.com/mcp/mcp"
        }
      }
    }
    ```
  </TabItem>
</Tabs>

## Multi-platform MCP setup

Use the `add-mcp` CLI to install MCP servers across all your tools at once:

```bash
npx add-mcp https://api.ahrefs.com/mcp/mcp -a cursor -a claude-code
npx add-mcp https://mcp.similarweb.com -a cursor -a claude-code
```

## Verify installation

In any Claude conversation, run:

```
/research test keyword
```

If you see structured keyword research output, the plugin is active.

## Connect SEO tools (optional)

| Tool | What it adds | Required? |
|------|-------------|-----------|
| Ahrefs | Keyword volumes, difficulty, backlinks | No |
| Similarweb | Traffic data, competitive intelligence | No |
| Google Search Console | Your actual search performance data | No |
| Google Analytics 4 | Traffic, engagement, conversions | No |
| WordPress | Direct publishing | No |

The plugin works fully without any connected tools. See [Connectors Guide](/integrations/connectors/) for setup details.
