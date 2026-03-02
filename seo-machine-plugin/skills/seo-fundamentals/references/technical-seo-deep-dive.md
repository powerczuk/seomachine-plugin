# Technical SEO Deep Dive

## Crawl Budget Optimization

### What Consumes Crawl Budget
- Duplicate content (parameterized URLs, www/non-www, HTTP/HTTPS)
- Infinite crawl traps (calendar pages, faceted navigation, session IDs)
- Soft 404s (pages returning 200 but showing error content)
- Large XML sitemaps with non-indexable URLs
- Redirect chains (3+ hops)

### How to Optimize
- Block non-essential URLs in robots.txt (filters, sorts, internal search)
- Use canonical tags consistently on every page
- Submit clean XML sitemaps (only indexable, 200-status URLs)
- Fix or remove redirect chains (max 1 hop)
- Implement pagination correctly (rel="next"/"prev" or "view all")
- Monitor crawl stats in Google Search Console

## Site Architecture Best Practices

### URL Hierarchy
```
domain.com/
├── /category/              (pillar page)
│   ├── /category/subtopic-1/  (cluster page)
│   ├── /category/subtopic-2/  (cluster page)
│   └── /category/subtopic-3/  (cluster page)
├── /tools/                 (utility pages)
└── /blog/                  (editorial content)
```

### Click Depth
- Every important page reachable in 3 clicks or fewer from homepage
- Flatten deep hierarchies with hub pages and strategic internal links
- Orphan pages (0 internal links) get crawled less and rank worse

### Navigation SEO
- HTML-based navigation (not JavaScript-only)
- Breadcrumbs with BreadcrumbList schema
- Footer links to important category/pillar pages
- Sidebar links to related content within same topic cluster

## Core Web Vitals Optimization

### LCP (Largest Contentful Paint) — Target: <2.5s
**Common causes & fixes:**
- Slow server response → CDN, server-side caching, upgrade hosting
- Render-blocking CSS/JS → inline critical CSS, defer non-critical JS
- Large images → WebP/AVIF format, responsive images with srcset, lazy loading below fold
- Client-side rendering → server-side rendering or static generation

### INP (Interaction to Next Paint) — Target: <200ms
**Common causes & fixes:**
- Heavy JavaScript → code splitting, tree shaking, defer non-critical scripts
- Long tasks → break into smaller async tasks, use web workers
- Third-party scripts → audit and remove unnecessary scripts, lazy-load others
- DOM size → reduce elements, virtualize long lists

### CLS (Cumulative Layout Shift) — Target: <0.1
**Common causes & fixes:**
- Images without dimensions → always set width/height or aspect-ratio
- Dynamic content injection → reserve space with CSS min-height
- Web fonts → font-display: swap with matched fallback font
- Ads/embeds → fixed-size containers

## Advanced Indexation Control

### Index Management Strategy
| Page Type | Index? | Canonical | Sitemap? |
|-----------|--------|-----------|----------|
| Core pages | Yes | Self | Yes |
| Blog posts | Yes | Self | Yes |
| Category pages | Yes | Self | Yes |
| Paginated pages | Depends | Page 1 or self | No |
| Filter/sort URLs | No | Category page | No |
| Internal search results | No | — | No |
| Thank you pages | No | — | No |
| Staging/dev pages | No | — | No |

### Robots.txt Template
```
User-agent: *
Allow: /
Disallow: /internal-search/
Disallow: /cart/
Disallow: /checkout/
Disallow: /account/
Disallow: /*?sort=
Disallow: /*?filter=
Disallow: /*?page=
Sitemap: https://domain.com/sitemap.xml
```

## Log File Analysis

Monitor server logs to understand crawler behavior:
- Which pages Googlebot visits most frequently
- Which pages get crawled but never indexed
- Crawl frequency changes after site updates
- Status codes returned to crawlers (should be 200 or 301, not 404/500)
- Crawl budget waste (bots crawling non-important pages)

## International SEO

### Hreflang Implementation
```html
<link rel="alternate" hreflang="en-us" href="https://domain.com/page/" />
<link rel="alternate" hreflang="en-gb" href="https://domain.co.uk/page/" />
<link rel="alternate" hreflang="x-default" href="https://domain.com/page/" />
```

### Rules
- Every page must reference itself in hreflang tags
- Hreflang must be reciprocal (page A references B, B references A)
- x-default for the fallback version
- Can be implemented in HTML head, HTTP headers, or XML sitemap
