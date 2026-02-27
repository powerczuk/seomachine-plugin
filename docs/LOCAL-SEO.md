# Local SEO Guide

Local SEO optimization for businesses serving specific geographic areas. Mobile "near me" searches grew 150% year-over-year, and the local pack captures 44% of all clicks on local search result pages.

## Overview

Local SEO differs from traditional SEO in its focus on geographic relevance, Google Business Profile optimization, and citation consistency. SEO Machine's `/local-seo` command handles the full audit, but this guide explains the framework behind it.

## Google Business Profile (GBP) Optimization

Your GBP is the primary touchpoint between your business and local searchers.

### Essential Profile Elements

| Element | Best Practice |
|---------|--------------|
| Business Name | Exact legal name — no keyword stuffing |
| Address | Full address matching website and citations exactly |
| Phone | Local number preferred over toll-free |
| Hours | Accurate, including holidays and special hours |
| Primary Category | Most specific accurate category available |
| Secondary Categories | 3-5 relevant additional categories |
| Business Description | 750 chars, include key services and location |
| Photos | Exterior, interior, team, products (10+ minimum) |
| Google Posts | Weekly posts with offers, updates, or events |
| Q&A | Pre-populate common questions with answers |
| Attributes | Complete all available attributes (wheelchair access, Wi-Fi, etc.) |

### GBP Signals That Affect Rankings
- Profile completeness
- Primary category relevance
- Keywords in business description
- Photo quantity and quality
- Review rating and volume
- Post frequency and recency
- Q&A activity

## NAP Consistency

NAP (Name, Address, Phone) must be identical across every online mention — including punctuation and abbreviations.

### Common Inconsistencies to Fix

| Inconsistency Type | Example |
|-------------------|---------|
| Abbreviations | "Street" vs "St." vs "St" |
| Suite numbers | "Suite 200" vs "Ste 200" vs "#200" |
| Phone format | "(555) 123-4567" vs "555-123-4567" |
| Business name | "Joe's Pizza" vs "Joes Pizza" vs "Joe's Pizza LLC" |
| City naming | "New York" vs "New York City" vs "NYC" |

**Pick one canonical format and use it everywhere.**

## Citation Building Strategy

### Tier 1: Data Aggregators (Submit First)
These distribute your NAP to 50-150+ downstream directories within 60-90 days:
- Data Axle (formerly InfoUSA)
- Neustar Localeze
- Foursquare

### Tier 2: Major Directories
- Google Business Profile
- Apple Maps Connect
- Bing Places
- Yelp
- Better Business Bureau
- Facebook Business Page
- Yellow Pages / YP.com

### Tier 3: Industry-Specific

| Industry | Key Directories |
|----------|----------------|
| Healthcare | Healthgrades, Zocdoc, Vitals, WebMD |
| Legal | Avvo, FindLaw, Justia, Lawyers.com |
| Restaurants | TripAdvisor, OpenTable, Zomato, DoorDash |
| Home Services | Angi, HomeAdvisor, Thumbtack, Houzz |
| Automotive | Cars.com, AutoTrader, CarGurus |
| Real Estate | Zillow, Realtor.com, Redfin |
| Hotels | Booking.com, TripAdvisor, Expedia |

## Local Keyword Strategy

### Keyword Patterns
- `[service] in [city]` — "plumber in Brooklyn"
- `[service] near me` — "dentist near me"
- `best [service] [city]` — "best Italian restaurant Manhattan"
- `[service] [neighborhood]` — "yoga studio Williamsburg"
- `affordable [service] [city]` — "affordable auto repair Queens"
- `emergency [service] [city]` — "emergency locksmith Brooklyn"

### Local Content Types
- **Location pages** — one per city/neighborhood you serve (60%+ unique content each)
- **Area guides** — "Complete Guide to [Neighborhood]" with local knowledge
- **Local event tie-ins** — content related to community events
- **Case studies** — location-specific success stories
- **FAQ pages** — locally-relevant questions

## Local Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "image": "https://example.com/photo.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Brooklyn",
    "addressRegion": "NY",
    "postalCode": "11201",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.6892,
    "longitude": -73.9857
  },
  "telephone": "+1-555-123-4567",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
```

## Review Management

### Key Metrics
- **Average rating:** Aim for 4.5+ stars
- **Review volume:** More reviews = more trust (aim for 50+)
- **Recency:** Recent reviews matter more than old ones
- **Response rate:** Respond to 100% of reviews (positive and negative)
- **Response time:** Within 24-48 hours

### Review Response Best Practices
- Thank the reviewer by name
- Reference specific details from their review
- For negative reviews: acknowledge, apologize, offer resolution offline
- Include a keyword naturally (the business name or service type)
- Keep responses concise (2-4 sentences)

## AI and Local Search

78% of consumers now discover local businesses through AI-generated recommendations (BrightLocal 2024). For AI visibility, businesses need consistent mentions across a minimum of 10 external platforms, plus reviews, Q&A activity, and user engagement.

## Using SEO Machine for Local SEO

```
/local-seo "Business Name" "City, State" [GBP URL]
```

This runs the full local SEO audit including GBP analysis, NAP consistency check, citation coverage, local keyword opportunities, schema recommendations, and review analysis.
