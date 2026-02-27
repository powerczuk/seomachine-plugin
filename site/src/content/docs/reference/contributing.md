---
title: Contributing
description: How to contribute to SEO Machine — architecture, adding commands, skills, and agents
---

## Plugin Architecture

```
seo-machine/
├── .claude-plugin/plugin.json    # Metadata, version
├── .mcp.json                     # MCP server configs
├── commands/                     # Slash commands
├── skills/                       # Knowledge modules
│   └── [skill-name]/
│       ├── SKILL.md              # Skill definition
│       └── references/           # Supporting guides
├── agents/                       # Autonomous agents
└── docs/                         # Documentation
```

## Adding Features

### New Command

1. Create `commands/your-command.md` with description, argument hint, allowed tools, process steps, and output format
2. Update `docs/COMMANDS.md` and `README.md`
3. Add examples to `docs/USE-CASES.md`
4. Bump minor version

### New Skill

1. Create `skills/your-skill/SKILL.md` with triggers and knowledge content
2. Add reference files in `skills/your-skill/references/`
3. Update `docs/SKILLS.md`
4. Bump minor version

### New Agent

1. Create `agents/your-agent.md` with model, tools, modules, and output format
2. Update `docs/AGENTS.md`
3. Bump minor version

## Pull Request Process

1. Fork and create a feature branch
2. Make changes and update docs
3. Bump version in `plugin.json`
4. Add entry to `CHANGELOG.md`
5. Submit PR with description, example inputs/outputs, and affected components
