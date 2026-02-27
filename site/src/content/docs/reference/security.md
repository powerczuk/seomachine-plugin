---
title: Security
description: Security model, prompt injection defenses, and data handling
---

## Security Model

SEO Machine fetches and analyzes web content regularly. This document explains how the plugin handles security.

### Input Validation

All command inputs are treated as data, not instructions. URLs, keywords, and content files are validated and sanitized before processing.

### Prompt Injection Defenses

Web content fetched during analysis is processed as data for scoring and comparison. It is never interpreted as commands.

The plugin never automatically:
- Publishes content based on what it finds on the web
- Modifies files based on web instructions
- Sends data to URLs found in web content
- Follows redirect chains without user awareness

### Data Handling

**What SEO Machine reads:** URLs you provide, content files you point to, SERP results, competitor pages.

**What it does NOT do:** Store API keys, cache competitor data beyond sessions, send your content to third parties, access files you haven't provided.

### MCP Security

MCP authentication is handled by the protocol layer. API keys are stored in your platform's secure configuration, not in plugin files. The plugin never has direct access to credentials.

### Content Generation Safety

Generated content is original (not copied), includes source attribution for claims, contains no hidden elements, and produces clean schema output.

## Vulnerability Reporting

Report security issues via the GitHub repository. Do not disclose publicly before a fix is available. We aim to acknowledge within 48 hours and patch within 7 days.
