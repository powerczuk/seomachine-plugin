---
description: Generate JSON-LD schema markup for any page type
argument-hint: "<URL or page type> [schema types]"
allowed-tools: Read, WebFetch, WebSearch
---

# /schema-gen — Schema Markup Generator

Generate ready-to-deploy JSON-LD structured data for any page. Read `${CLAUDE_PLUGIN_ROOT}/skills/seo-fundamentals/references/schema-markup-templates.md` for templates.

Target: `$ARGUMENTS`

## Process

### 1. Page Analysis
If URL provided, fetch the page and identify:
- Page type (article, product, FAQ, how-to, landing, local business, organization)
- Existing schema markup (if any)
- Key content elements (title, author, dates, questions, steps, products)
- Missing schema opportunities

If page type provided, generate template-based schema.

### 2. Schema Type Selection
Recommend applicable schema types based on content:

| Content Type | Primary Schema | Additional Schema |
|-------------|---------------|-------------------|
| Blog post | Article | FAQ (if has questions), BreadcrumbList |
| How-to guide | HowTo | Article, BreadcrumbList |
| FAQ page | FAQPage | BreadcrumbList |
| Product page | Product | BreadcrumbList, AggregateRating |
| Landing page | Organization/Product | FAQ, BreadcrumbList |
| Local business | LocalBusiness | BreadcrumbList |
| Homepage | Organization | WebSite (with SearchAction) |
| Comparison page | Article | FAQ, BreadcrumbList |

### 3. Schema Generation
For each recommended schema type, generate complete JSON-LD with:
- All required fields populated from page content
- Recommended optional fields included
- Proper nesting and relationships
- ISO 8601 dates
- Absolute URLs (not relative)
- Accurate content matching (schema data must match visible page content)

### 4. Validation Guidance
Provide instructions to validate:
- Google Rich Results Test URL
- Common errors to watch for
- Fields that trigger specific rich result types in SERPs

## Output

### Recommended Schema Types
List each recommended type with rationale and expected SERP enhancement.

### Generated JSON-LD
Complete, copy-paste ready `<script type="application/ld+json">` blocks for each schema type.

### Implementation Instructions
- Where to place the code (in `<head>` section)
- How to test before deploying
- Expected rich results after indexing
- Monitoring in Search Console (Enhancements reports)

### Existing Schema Issues (if URL provided)
List any problems with current implementation:
- Missing required fields
- Data mismatches between schema and visible content
- Deprecated schema types
- Validation errors
