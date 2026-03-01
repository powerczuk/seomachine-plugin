# SEO Machine

**Najlepszy plugin SEO do narzędzi opartych na Claude.**

17 komend · 6 skills · 4 agentów · Ahrefs & Similarweb MCP

## Co to jest

Plugin do Claude (Cowork, Code CLI, Cursor, VS Code, Windsurf, Desktop) obejmujący cały workflow SEO — od badania słów kluczowych po audyty techniczne, GEO i lokalne SEO.

## Szybka instalacja

```bash
# Claude Code CLI
claude plugin add seo-machine

# Cursor / VS Code / Windsurf
# Użyj natywnej obsługi pluginów w IDE
```

## Komendy

| Kategoria | Komendy |
|-----------|---------|
| **Treści** | `/research` · `/write-seo` · `/optimize` · `/analyze` · `/content-brief` · `/meta-tags` · `/rewrite` · `/humanize` |
| **Architektura** | `/audit` · `/topic-clusters` · `/internal-links` · `/schema-gen` · `/low-hanging-fruit` |
| **GEO & AI** | `/geo-audit` · `/llms-txt` |
| **Lokalne SEO** | `/local-seo` |
| **Strategia** | `/competitors` |

## Szybki start

```bash
/research "najlepsze narzędzia email marketing"
/content-brief "najlepsze narzędzia email marketing"
/write-seo "najlepsze narzędzia email marketing" 2500
/optimize [plik]
```

## Integracje (MCP)

| Narzędzie | URL serwera MCP |
|-----------|----------------|
| Ahrefs | `https://api.ahrefs.com/mcp/mcp` |
| Similarweb | `https://mcp.similarweb.com` |

Plugin działa w pełni bez konektorów — web search zapewnia dane zastępcze.

## System scoringowy

Treści oceniane 0–100: keywords (25%), czytelność (20%), struktura (20%), zaangażowanie (20%), techniczne SEO (15%). Próg publikacji: **70+**.

## Dokumentacja

📖 **[Pełna dokumentacja](./docs/)** — 12 plików MD z detalami każdej komendy, skill i agenta.

🌐 **[Strona docs (Astro)](./site/)** — interaktywna strona dokumentacji z wyszukiwarką.

## Wersja

**v2.1.0** — nowy skill Humanizer + komenda `/humanize` do usuwania wzorców AI z treści.

## Pochodzenie

Fork projektu [SEO Machine](https://github.com/TheCraigHewitt/seomachine) autorstwa Craiga Hewitta.

## Licencja

MIT
