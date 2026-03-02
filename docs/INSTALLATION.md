# Installation Guide

SEO Machine can be installed on multiple Claude-powered platforms and IDEs. Choose the method that matches your setup.

## Supported Platforms

| Platform | Type | Best For |
|----------|------|----------|
| Claude Cowork | Desktop app | Non-developers, content teams, marketers |
| Claude Code CLI | Terminal | Developers, power users |
| Cursor | IDE | Developers who use Cursor for coding |
| VS Code | IDE | Developers who use VS Code |
| Windsurf | IDE | Developers who use Windsurf |
| Claude Desktop | Desktop app | General Claude users |

---

## Claude Cowork

The recommended installation for marketers, content teams, and non-developers.

### From Plugin Marketplace

1. Open the **Claude desktop app**
2. Start or open a **Cowork** session
3. Go to **Settings > Plugins** (or click the plugin icon)
4. Search for **"SEO Machine"**
5. Click **Install**
6. The plugin loads automatically in all future Cowork sessions

### Manual Installation

1. Download the plugin from the [GitHub releases page](https://github.com/powerczuk/seomachine-plugin/releases)
2. In Cowork, go to **Settings > Plugins > Install from file**
3. Select the downloaded `.zip` file
4. Restart the Cowork session

### Verify Installation

Type any command in your Cowork session:
```
/research test keyword
```

If the plugin is active, you'll see structured keyword research output.

---

## Claude Code CLI

For developers and power users who work in the terminal.

### From GitHub

```bash
# Clone the repository
git clone https://github.com/powerczuk/seomachine-plugin.git

# Navigate to the directory
cd seomachine-plugin

# Install as a local plugin
claude plugin install .
```

### From a Local Directory

If you already have the plugin files on disk:

```bash
claude plugin install /path/to/seo-machine
```

### Verify Installation

```bash
# List installed plugins
claude plugin list

# Test a command
claude "/research test keyword"
```

### Configuration

Plugin settings are stored in `~/.claude/plugins/seo-machine/`. You can customize:

```json
{
  "publishing_threshold": 70,
  "default_word_count": 2500,
  "content_language": "en"
}
```

---

## Cursor IDE

### Method 1: Via Claude Code Extension

1. **Install Claude Code extension in Cursor:**
   ```bash
   # Download the extension
   npm pack @anthropic-ai/claude-code

   # Extract it
   tar -xzf anthropic-ai-claude-code-*.tgz

   # Install the extension
   cursor --install-extension package/vendor/claude-code.vsix
   ```

2. **Install the SEO Machine plugin:**
   ```bash
   git clone https://github.com/powerczuk/seomachine-plugin.git
   cd seomachine-plugin
   claude plugin install .
   ```

3. **Open Claude Code panel in Cursor** (Cmd+Shift+P > "Claude Code: Open")

4. **Use commands directly:**
   ```
   /research "target keyword"
   ```

### Method 2: MCP Server Configuration

If you want to use SEO Machine's MCP connectors (Ahrefs, Similarweb) directly in Cursor:

1. Open Cursor Settings > MCP
2. Click "Add MCP Server" or edit `.cursor/mcp.json`:

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

3. Restart Cursor to activate the MCP servers.

---

## VS Code

### Install Claude Code Extension

1. Open VS Code
2. Press `Cmd+Shift+X` (Mac) or `Ctrl+Shift+X` (Windows/Linux)
3. Search for **"Claude Code"**
4. Click **Install**

### Install SEO Machine Plugin

Open the integrated terminal and run:

```bash
git clone https://github.com/powerczuk/seomachine-plugin.git
cd seomachine-plugin
claude plugin install .
```

### MCP Server Configuration

To add SEO tool integrations, edit `.vscode/mcp.json` in your workspace:

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

### Verify

Open the Claude Code panel and type:
```
/research test keyword
```

---

## Windsurf

### Install Claude Code Extension

1. Open Windsurf
2. Go to Extensions marketplace
3. Search for **"Claude Code"**
4. Install

### Install SEO Machine Plugin

```bash
git clone https://github.com/powerczuk/seomachine-plugin.git
cd seomachine-plugin
claude plugin install .
```

### MCP Configuration

Edit Windsurf's MCP configuration file:

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

---

## Claude Desktop App

### Plugin Installation

1. Open the Claude desktop app
2. Go to **Settings > Developer > Plugins** (may require enabling developer mode)
3. Add the plugin directory path or install from marketplace

### MCP Server Setup

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac) or the equivalent config on Windows/Linux:

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

Restart Claude Desktop to apply.

---

## Multi-Platform MCP Setup (add-mcp)

Use the `add-mcp` CLI to install MCP servers across all your tools at once:

```bash
# Install Ahrefs MCP for both Claude Code and Cursor
npx add-mcp https://api.ahrefs.com/mcp/mcp -a cursor -a claude-code

# Install Similarweb MCP
npx add-mcp https://mcp.similarweb.com -a cursor -a claude-code
```

This automatically detects your installed tools and writes the correct configuration files.

---

## Connecting SEO Tools

After installation, connect external SEO tools for enhanced data:

| Tool | Setup | What it adds |
|------|-------|-------------|
| **Ahrefs** | Included in `.mcp.json` — requires Ahrefs account with MCP access | Keyword volumes, difficulty, backlinks, rankings |
| **Similarweb** | Included in `.mcp.json` — requires Similarweb account | Traffic data, competitive intelligence |
| **Google Search Console** | Connect via API key in plugin settings | Your actual search performance data |
| **Google Analytics 4** | Connect via API key in plugin settings | Traffic, engagement, conversions |
| **WordPress** | Connect via REST API credentials | Direct publishing from `/write-seo` |

See [Connectors Guide](./CONNECTORS.md) for detailed setup instructions for each tool.

---

## Troubleshooting

### Plugin not loading
- Verify the plugin files are in the correct directory
- Check `claude plugin list` to confirm installation
- Restart the application/IDE

### MCP servers not connecting
- Verify your API credentials for each service
- Check network connectivity to the MCP endpoints
- Look for errors in the Claude Code output panel

### Commands not recognized
- Ensure the plugin is installed (not just the MCP servers)
- Check for version compatibility
- Try reinstalling: `claude plugin uninstall seo-machine && claude plugin install .` (from the plugin directory)

### Performance issues
- Large site audits may take several minutes — this is normal
- Connected SEO tools provide faster, more precise data than web search fallback
- For very large sites (1000+ pages), use focused audits on specific sections
