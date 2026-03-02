# Schema Markup Templates

Copy-paste JSON-LD templates for common content types. Customize values for each page.

## Article Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Article Title (max 110 characters)",
  "description": "Brief description of the article",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://domain.com/about/author-name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Company Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://domain.com/logo.png"
    }
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-03-20",
  "image": "https://domain.com/images/article-image.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://domain.com/article-url/"
  }
}
```

## FAQ Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is [topic]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Concise answer to the question. Can include <a href='url'>links</a> and basic HTML formatting."
      }
    },
    {
      "@type": "Question",
      "name": "How does [topic] work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Detailed answer explaining the mechanism or process."
      }
    }
  ]
}
```

## HowTo Schema

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to [achieve result]",
  "description": "Brief overview of what this guide covers",
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "tool": [
    { "@type": "HowToTool", "name": "Tool name" }
  ],
  "supply": [
    { "@type": "HowToSupply", "name": "Supply name" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Step 1 title",
      "text": "Detailed instructions for step 1",
      "url": "https://domain.com/guide/#step1",
      "image": "https://domain.com/images/step1.jpg"
    },
    {
      "@type": "HowToStep",
      "name": "Step 2 title",
      "text": "Detailed instructions for step 2",
      "url": "https://domain.com/guide/#step2"
    }
  ]
}
```

## Product Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "description": "Product description",
  "image": "https://domain.com/images/product.jpg",
  "brand": {
    "@type": "Brand",
    "name": "Brand Name"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://domain.com/product/",
    "priceCurrency": "USD",
    "price": "29.99",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2025-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "156"
  }
}
```

## BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://domain.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Category",
      "item": "https://domain.com/category/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Current Page",
      "item": "https://domain.com/category/current-page/"
    }
  ]
}
```

## LocalBusiness Schema

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "description": "Brief description of the business",
  "url": "https://domain.com",
  "telephone": "+1-555-123-4567",
  "email": "info@domain.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "City",
    "addressRegion": "ST",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$"
}
```

## Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://domain.com",
  "logo": "https://domain.com/logo.png",
  "description": "Brief company description",
  "foundingDate": "2020",
  "sameAs": [
    "https://twitter.com/company",
    "https://linkedin.com/company/company",
    "https://facebook.com/company"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+1-555-123-4567",
    "email": "support@domain.com"
  }
}
```

## Validation Checklist

Before deploying any schema:
1. Test with Google's Rich Results Test (https://search.google.com/test/rich-results)
2. Validate JSON-LD syntax (no trailing commas, proper nesting)
3. Ensure all URLs are absolute (not relative)
4. Verify dates are ISO 8601 format (YYYY-MM-DD)
5. Confirm data matches visible page content (Google penalizes mismatches)
6. Monitor Search Console for structured data errors after deployment
