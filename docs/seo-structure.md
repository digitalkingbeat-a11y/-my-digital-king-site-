# Digital King Local SEO Structure

## Primary Goal

Build topical and local authority for Tampa Bay DJ searches while keeping the site scalable for future automation, booking, venue, nightlife, wedding, and event content.

## Homepage Target

- Primary keyword: Tampa Bay DJ
- Supporting keywords: Tampa Bay club DJ, Tampa Bay private event DJ, Tampa Bay wedding DJ, custom DJ sets, nightlife DJ Tampa Bay
- Search intent: broad discovery, brand trust, booking action
- H1: Tampa Bay's Premier DJ
- Core internal links:
  - `/booking`
  - `/service-areas`
  - `/service-areas/tampa-dj`
  - `/service-areas/st-pete-dj`
  - `/service-areas/clearwater-dj`
  - `/service-areas/largo-dj`
  - `/service-areas/new-port-richey-dj`
  - `/blog`
  - `/venues`
  - `/nightlife`
  - `/events`

## Local Landing Pages

Generated from `lib/seo.ts` and rendered by `app/service-areas/[slug]/page.tsx`.

| URL | Title Tag | Primary H1 |
| --- | --- | --- |
| `/service-areas/tampa-dj` | Tampa DJ Services \| Club, Private Event & Wedding DJ | Tampa DJ Services for Clubs, Weddings, and Private Events |
| `/service-areas/st-pete-dj` | St. Pete DJ Services \| Nightlife & Private Event DJ | St. Pete DJ Services for Nightlife and Private Events |
| `/service-areas/clearwater-dj` | Clearwater DJ Services \| Beach Events, Weddings & Parties | Clearwater DJ Services for Beach Events, Weddings, and Parties |
| `/service-areas/largo-dj` | Largo DJ Services \| Private Events, Weddings & Parties | Largo DJ Services for Private Events, Weddings, and Parties |
| `/service-areas/new-port-richey-dj` | New Port Richey DJ Services \| Events, Weddings & Parties | New Port Richey DJ Services for Events, Weddings, and Parties |

## H2 Structure

Each city page uses:

- DJ Services in {City}
- Neighborhoods and Nearby Areas
- {City} DJ FAQ
- Other Tampa Bay DJ Service Areas

## Schema Strategy

Sitewide:

- `EntertainmentBusiness` in `app/layout.tsx`
- `areaServed` generated from all city pages

City pages:

- `Service`
- `BreadcrumbList`
- `FAQPage`

Content pages:

- `BlogPosting` for blog pages
- `Article` for venue, nightlife, and event pages
- `FAQPage` where useful

## Content Engine

Editable source of truth:

- `lib/seo.ts`

Route groups:

- `app/service-areas/page.tsx`
- `app/service-areas/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/venues/page.tsx`
- `app/venues/[slug]/page.tsx`
- `app/nightlife/page.tsx`
- `app/nightlife/[slug]/page.tsx`
- `app/events/page.tsx`
- `app/events/[slug]/page.tsx`

Crawler files:

- `app/sitemap.ts`
- `app/robots.ts`

## Internal Linking Strategy

- Homepage links to every city page and every content hub.
- Every city page links to all service pages and nearby city pages.
- Content pages link back to core service pages and city pages.
- Sitemap includes homepage, service pages, city pages, hubs, and generated content entries.

## Expansion Plan

Add new local pages by adding city records to `serviceAreaCities`.

Add new blog, venue, nightlife, or event pages by adding entries to `contentCollections`.

Future content clusters:

- `/weddings`
- `/corporate-events`
- `/promoters`
- `/bars-and-clubs`
- `/ai-event-automation`
