# Connectors

## How tool references work

Plugin files use `~~category` as a placeholder for whatever tool the user connects in that category. Plugins are tool-agnostic — they describe workflows in terms of categories rather than specific products.

## Connectors for this plugin

| Category | Placeholder | Included servers | Other options |
|----------|-------------|-----------------|---------------|
| SEO | `~~SEO tools` | Ahrefs, Similarweb | Semrush, Moz, SE Ranking, Mangools |
| Analytics | `~~product analytics` | — | Google Analytics (via API), Plausible, Matomo |
| Search Console | `~~search console` | — | Google Search Console (via API) |
| CMS | `~~CMS` | — | WordPress, Webflow, Ghost, Contentful |

## How connectors enhance the plugin

### With SEO tools connected (Ahrefs, Similarweb, Semrush)
- Real keyword volume and difficulty scores in `/research`
- Actual ranking positions in `/audit`
- Competitor backlink analysis in `/audit`
- Domain authority metrics in competitive comparisons

### With analytics connected
- Traffic data to identify quick wins and declining content
- Conversion data for content prioritization
- Engagement metrics for content quality assessment

### With CMS connected
- Direct publishing of optimized content from `/write-seo`
- Bulk meta tag updates from `/meta-tags`
- Content inventory for `/internal-links` analysis

### Without any tools connected
The plugin works fully using web search for research, analysis, and recommendations. Connected tools enhance the data precision but are not required.
