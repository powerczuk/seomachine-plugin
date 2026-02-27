# Security

SEO Machine is designed with security as a core principle. This document covers the security model, prompt injection defenses, and data handling practices.

## Security Model

### Input Validation

All command inputs are treated as data, not instructions. When SEO Machine processes URLs, keywords, or content files, it:

1. **Validates URLs** — checks format, rejects obviously malicious URLs
2. **Sanitizes keywords** — strips any instruction-like content from keyword inputs
3. **Treats web content as untrusted** — content fetched from websites is never executed as instructions

### Prompt Injection Defenses

SEO Machine fetches and analyzes web content regularly (for SERP analysis, competitor research, content auditing). This creates a potential attack surface where malicious web content could try to manipulate the plugin's behavior.

**Defenses in place:**

1. **Content Isolation** — Web content fetched during analysis is processed as data for scoring and comparison. It is never interpreted as commands or instructions.

2. **No Automatic Actions on Web Content** — The plugin never automatically:
   - Publishes content based on what it finds on the web
   - Modifies files based on web instructions
   - Sends data to URLs found in web content
   - Follows redirect chains without user awareness

3. **Output Validation** — Generated content (articles, meta tags, schema) is validated against the plugin's own frameworks, not against instructions found in source material.

4. **Schema Markup Safety** — Generated JSON-LD schema only includes data explicitly provided by the user or derived from their content. It never imports URLs or data found on external websites into schema output without flagging it.

### Data Handling

**What SEO Machine reads:**
- URLs you provide for analysis
- Content files you point it to
- SERP results for keyword research
- Competitor pages for gap analysis

**What SEO Machine does NOT do:**
- Store or transmit your API keys (MCP handles authentication)
- Cache competitor data beyond the current session
- Send your content to third-party services (analysis happens locally)
- Access files or URLs you haven't explicitly provided

### MCP Connector Security

MCP (Model Context Protocol) connections to Ahrefs, Similarweb, and other tools:

- Authentication is handled by the MCP protocol, not the plugin
- API keys are stored in your platform's secure configuration (not in plugin files)
- The plugin never has direct access to your API credentials
- Each MCP server connection is independent and sandboxed

### Content Generation Safety

When generating content with `/write-seo` or `/rewrite`:

1. **No plagiarism** — Content is original, not copied from competitor pages
2. **Source attribution** — When statistics or claims are included, sources are cited
3. **No hidden content** — Generated HTML/schema contains no hidden text, links, or scripts
4. **Clean schema** — JSON-LD output contains only standard schema.org properties

## Security Best Practices for Users

### Protecting API Keys

- Never paste API keys in chat messages — use MCP configuration files
- Review your MCP config files periodically for unexpected entries
- Use environment variables for sensitive credentials when possible

### Reviewing Generated Content

- Always review generated articles before publishing
- Check schema markup output before deploying
- Verify internal link suggestions make sense for your site
- Review meta tags for accuracy before implementation

### Safe Auditing

- When auditing competitor sites, be aware of rate limiting
- Don't run audits on sites you don't have permission to analyze
- Large-scale audits may trigger bot detection on target sites

## Vulnerability Reporting

If you discover a security issue in SEO Machine, please report it responsibly:

1. **Do not** disclose the issue publicly before it's fixed
2. Email security concerns to the maintainers via the GitHub repository
3. Include steps to reproduce the issue
4. We aim to acknowledge reports within 48 hours and patch within 7 days

## Version Security

Each version of SEO Machine is tagged and checksummed. When installing:

- Verify you're installing from the official repository
- Check the version number matches the latest release
- Review the changelog for any security-related updates
- Pin to specific versions in production environments
