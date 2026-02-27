---
title: Współtworzenie
description: Jak współtworzyć SEO Machine — architektura, dodawanie komend, skills i agentów
---

## Architektura pluginu

```
seo-machine/
├── .claude-plugin/plugin.json    # Metadane, wersja
├── .mcp.json                     # Konfiguracja serwerów MCP
├── commands/                     # Slash komendy
├── skills/                       # Moduły wiedzy
│   └── [nazwa-skill]/
│       ├── SKILL.md              # Definicja skill
│       └── references/           # Materiały wspierające
├── agents/                       # Autonomiczni agenci
└── docs/                         # Dokumentacja
```

## Dodawanie funkcji

### Nowa komenda

1. Utwórz `commands/twoja-komenda.md` z opisem, podpowiedzią argumentów, dozwolonymi narzędziami, krokami procesu i formatem outputu
2. Zaktualizuj `docs/COMMANDS.md` i `README.md`
3. Dodaj przykłady do `docs/USE-CASES.md`
4. Podnieś wersję minor

### Nowy skill

1. Utwórz `skills/twoj-skill/SKILL.md` z triggerami i treścią wiedzy
2. Dodaj pliki referencyjne w `skills/twoj-skill/references/`
3. Zaktualizuj `docs/SKILLS.md`
4. Podnieś wersję minor

### Nowy agent

1. Utwórz `agents/twoj-agent.md` z modelem, narzędziami, modułami i formatem outputu
2. Zaktualizuj `docs/AGENTS.md`
3. Podnieś wersję minor

## Proces Pull Request

1. Fork i utwórz feature branch
2. Wprowadź zmiany i zaktualizuj dokumentację
3. Podnieś wersję w `plugin.json`
4. Dodaj wpis do `CHANGELOG.md`
5. Złóż PR z opisem, przykładowymi inputami/outputami i listą dotkniętych komponentów
