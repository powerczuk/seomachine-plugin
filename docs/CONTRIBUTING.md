# Contributing to SEO Machine

Thank you for your interest in contributing to SEO Machine. This guide explains the plugin architecture and how to add new features.

## Plugin Architecture

```
seo-machine-plugin/
├── .claude-plugin/
│   └── plugin.json          # Plugin metadata, version, keywords
├── .mcp.json                # MCP server configurations
├── README.md                # Plugin overview shown in marketplace
├── CONNECTORS.md            # Tool connector documentation
├── commands/                # Slash command definitions
│   ├── research.md
│   ├── write-seo.md
│   ├── optimize.md
│   └── ...
├── skills/                  # Deep knowledge modules
│   ├── seo-fundamentals/
│   │   ├── SKILL.md         # Skill definition and triggers
│   │   └── references/      # Supporting reference files
│   │       ├── keyword-research-framework.md
│   │       └── ...
│   ├── content-optimizer/
│   │   ├── SKILL.md
│   │   └── references/
│   └── ...
├── agents/                  # Autonomous analysis agents
│   ├── seo-analyzer.md
│   ├── keyword-mapper.md
│   └── ...
└── docs/                    # Documentation suite
    ├── README.md
    ├── COMMANDS.md
    └── ...
```

## Key Concepts

### Commands (`commands/*.md`)

Commands are slash-command definitions that users invoke directly (e.g., `/research`, `/write-seo`). Each command file defines:

- **Description** — what the command does
- **Argument hint** — expected input format
- **Allowed tools** — which Claude tools the command can use (Read, Write, Edit, WebSearch, WebFetch, etc.)
- **Process** — step-by-step instructions for Claude to follow
- **Output format** — what the user should receive

### Skills (`skills/*/SKILL.md`)

Skills are knowledge modules that Claude loads for context. They provide:

- **Trigger keywords** — when to load the skill
- **Frameworks** — scoring systems, methodologies, checklists
- **Reference files** — detailed guides in `references/` subdirectory

Skills are loaded automatically based on trigger context — you don't invoke them directly.

### Agents (`agents/*.md`)

Agents are autonomous sub-processes that run specialized analysis. They define:

- **Trigger context** — when the agent should be invoked
- **Model** — which model to use (typically `inherit` from parent)
- **Tools** — which tools the agent has access to
- **Analysis modules** — specific analysis steps to perform
- **Output format** — structured result format

### Connectors (`.mcp.json`)

MCP server definitions that provide external tool integrations. Commands reference tool categories (`~~SEO tools`) rather than specific products.

## Adding a New Command

1. Create `commands/your-command.md`:

```markdown
---
description: Brief description of what the command does
argument_hint: "<required arg> [optional arg]"
allowed_tools:
  - Read
  - Write
  - WebSearch
  - WebFetch
---

# /your-command

[Detailed instructions for Claude on how to execute this command]

## Process

1. Step one
2. Step two
3. Step three

## Output Format

[Define the expected output structure]
```

2. Update `docs/COMMANDS.md` with the new command
3. Update `README.md` command table
4. Add tests/examples in `docs/USE-CASES.md`
5. Bump the version in `plugin.json` (minor version for new commands)

## Adding a New Skill

1. Create `skills/your-skill/SKILL.md`:

```markdown
---
triggers:
  - keyword1
  - keyword2
  - keyword3
---

# Skill Name

[Skill knowledge content — frameworks, scoring systems, best practices]

## Module 1: [Name]

[Content]

## Module 2: [Name]

[Content]
```

2. Add reference files in `skills/your-skill/references/` as needed
3. Update `docs/SKILLS.md`
4. Bump the version

## Adding a New Agent

1. Create `agents/your-agent.md`:

```markdown
---
model: inherit
color: green
tools:
  - Read
  - Grep
  - WebFetch
  - WebSearch
---

# Agent Name

## Trigger Context
- When this agent should run

## Analysis Modules

### Module 1
[Analysis steps]

### Module 2
[Analysis steps]

## Output Format
[Structured output definition]
```

2. Update `docs/AGENTS.md`
3. Bump the version

## Adding a New Connector

1. Add the MCP server to `.mcp.json`:

```json
{
  "mcpServers": {
    "your-tool": {
      "type": "http",
      "url": "https://your-tool-mcp.com/endpoint"
    }
  }
}
```

2. Update `CONNECTORS.md` with the new tool
3. Update `docs/CONNECTORS.md`

## Code Style

- **Markdown files** — use consistent heading hierarchy, tables for structured data
- **Command instructions** — be specific and step-by-step; Claude follows these literally
- **Scoring systems** — always define weights, thresholds, and grade boundaries
- **Output formats** — show exact format with example data

## Testing

Before submitting a PR:

1. Test each new command with at least 3 different inputs
2. Verify the scoring/analysis produces reasonable results
3. Check that new features don't break existing commands
4. Update documentation for any changes
5. Bump the version number appropriately

## Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-command-name`
3. Make your changes
4. Update documentation
5. Bump version in `plugin.json`
6. Add entry to `CHANGELOG.md`
7. Submit a pull request with:
   - Description of what you added/changed
   - Example inputs and outputs
   - Which commands/skills/agents are affected

## Versioning

Follow [Semantic Versioning](https://semver.org/):
- **MAJOR** — Breaking changes to command syntax or output format
- **MINOR** — New commands, skills, agents (backward compatible)
- **PATCH** — Bug fixes, reference updates, documentation
