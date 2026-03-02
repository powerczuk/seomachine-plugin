---
name: seo-fundamentals
description: >
  Core SEO knowledge base covering on-page optimization, technical SEO, keyword strategy,
  and search engine ranking factors. Use when the user asks about "SEO best practices",
  "on-page SEO", "technical SEO", "keyword density", "meta tags", "structured data",
  "Core Web Vitals", "crawlability", "indexation", "schema markup", "SERP features",
  "search intent", "E-E-A-T", or any foundational SEO concept.
version: 1.0.0
---

# SEO Fundamentals

Core SEO knowledge for optimizing websites, content, and technical infrastructure to maximize organic search visibility.

## Search Intent Classification

Classify every target keyword into one of four intent categories before creating or optimizing content:

- **Informational** — user wants to learn ("how to", "what is", "guide", "tutorial"). Serve comprehensive educational content.
- **Navigational** — user wants a specific site or page ("brand name", "login", "pricing page"). Ensure brand pages are optimized.
- **Commercial Investigation** — user is comparing options ("best", "vs", "review", "top 10"). Serve comparison content with clear differentiators.
- **Transactional** — user wants to act ("buy", "download", "sign up", "free trial"). Serve landing pages with strong CTAs.

Content-intent misalignment is the #1 reason good content fails to rank. Always verify alignment.

## On-Page SEO Elements

### Title Tags
- 50-60 characters optimal (full display in SERPs)
- Include primary keyword naturally, front-loaded when possible
- Compelling and click-worthy — treat as an ad headline
- Unique per page — no duplicate titles across the site
- Consider brand mention at end if space allows: "Primary Keyword | Brand"

### Meta Descriptions
- 150-160 characters optimal
- Include primary keyword (bolded in SERPs when matched)
- Clear value proposition: what the reader gets
- Action-oriented language: Learn, Discover, Find, Get, Compare
- Unique per page — duplicates waste crawl budget

### Heading Hierarchy
- Exactly one H1 per page containing primary keyword
- 4-7 H2 sections for main content divisions
- H3 subsections for complex topics under each H2
- Never skip levels (H1 → H3 without H2 is invalid)
- Include secondary keywords naturally in H2/H3 tags

### URL Structure
- Lowercase, hyphen-separated: `/primary-keyword-topic`
- 3-5 words ideal — short and descriptive
- Include primary keyword
- Remove stop words (a, the, and, of) when possible
- No excessive parameters, session IDs, or depth (max 3 levels)

### Keyword Placement (Critical Positions)
- **H1 headline** — primary keyword required
- **First 100 words** — primary keyword must appear (critical for SERP relevance)
- **H2 headings** — primary keyword in 2-3 H2s naturally
- **Conclusion** — reinforce primary keyword
- **Meta title and description** — as specified above
- **URL slug** — primary keyword
- **Image alt text** — descriptive, keyword-relevant where natural
- **Target density**: 1-2% for primary keyword (natural integration, never stuffed)

## Technical SEO Checklist

### Crawlability & Indexation
- **robots.txt** — properly configured, not blocking important pages
- **XML sitemap** — present, accurate, submitted to Google Search Console
- **Canonical tags** — set on every page, self-referencing or pointing to preferred version
- **noindex/nofollow** — used intentionally only on pages that should not be indexed
- **Pagination** — proper rel="next"/"prev" or "view all" implementation
- **Hreflang** — correct language/region targeting for international sites

### Performance & Core Web Vitals
- **LCP (Largest Contentful Paint)** — under 2.5 seconds (optimize images, server response, render-blocking resources)
- **INP (Interaction to Next Paint)** — under 200ms (minimize JS, optimize event handlers)
- **CLS (Cumulative Layout Shift)** — under 0.1 (set dimensions on images/embeds, avoid dynamic content insertion above fold)
- **TTFB (Time to First Byte)** — under 800ms (server optimization, CDN, caching)

### Security & Infrastructure
- **HTTPS** — required, no mixed content
- **Mobile-first** — responsive design, proper viewport, readable fonts, tap targets ≥48px
- **Broken links** — zero tolerance for internal 404s, minimize external broken links
- **Redirect chains** — maximum 1 redirect hop, no loops
- **Duplicate content** — canonical tags, parameter handling, www/non-www consolidation

## Structured Data (Schema Markup)

Implement schema markup to enhance SERP appearance with rich results:

- **Article** — `headline`, `author`, `datePublished`, `dateModified`, `image`, `publisher`
- **FAQ** — question-answer pairs for FAQ-style content (triggers FAQ rich result)
- **HowTo** — step-by-step instructions with `name`, `step`, `tool`, `supply`
- **Product** — `name`, `description`, `price`, `availability`, `review`, `rating`
- **BreadcrumbList** — site navigation hierarchy
- **Organization** — company info, logo, social profiles
- **LocalBusiness** — address, hours, phone for local SEO
- **Review/AggregateRating** — star ratings in SERPs

Always validate with Google's Rich Results Test before publishing.

## E-E-A-T Signals (Experience, Expertise, Authoritativeness, Trustworthiness)

- **Experience** — first-hand experience signals (original research, case studies, personal insights, screenshots)
- **Expertise** — author credentials, bylines with bio, topical depth
- **Authoritativeness** — quality backlinks, brand mentions, industry recognition, domain age/history
- **Trustworthiness** — HTTPS, clear contact info, privacy policy, accurate citations, editorial standards

For YMYL (Your Money or Your Life) topics — health, finance, legal, safety — E-E-A-T requirements are elevated.

## Internal Linking Strategy

- **3-5+ internal links per article** (optimal: 4-5)
- **Descriptive anchor text** — 2-5 words, keyword-rich but natural, never "click here"
- **Contextual placement** — links embedded naturally within explanatory paragraphs
- **Topic cluster support** — link pillar pages to cluster pages and vice versa
- **Orphan page prevention** — every page should have at least one internal link pointing to it
- **Strategic distribution** — 1 link in introduction (to pillar), 2-3 in body, 1-2 in conclusion

## Featured Snippet Optimization

Target featured snippets by formatting content for snippet capture:

- **Paragraph snippets** — 40-60 word direct answer immediately after an H2 question
- **List snippets** — 5-9 item numbered or bulleted list under a descriptive heading
- **Table snippets** — 2-4 column comparison data in HTML table format
- **Definition snippets** — "[Term] is [definition]" format, concise and authoritative

## Additional Resources

- **`references/keyword-research-framework.md`** — detailed keyword research methodology
- **`references/technical-seo-deep-dive.md`** — advanced technical SEO patterns
- **`references/schema-markup-templates.md`** — copy-paste schema templates for common content types
