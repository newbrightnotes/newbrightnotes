## Overview
- Next.js 16 App Router lives under `src/app`; runtime routes stay static by building `generateStaticParams` + `generateMetadata` in each page (see `src/app/posts/[slug]/page.tsx`).
- All content and taxonomy data are hard-coded in `src/data/posts.ts`; treat it as the single source for posts, categories, authors, tags, pagination helpers, and RSS/sitemap generation.
- Global layout (`src/app/layout.tsx`) injects fonts, FontAwesome CSS, GA (GT-NMDMW88Q), AdSense, and structured data; keep ConsentMode components (`ConsentManager`, `CookieConsent`, `CookieSettingsButton`) mounted in this order to avoid analytics regressions.

## Content & Routing
- Adding a post means extending the `posts` array, dropping the image under `public/images`, and letting `generateStaticParams` auto-expose new slugs across posts/category/tag/author routes.
- Category pagination is split between `src/app/category/[slug]/page.tsx` (page 1) and `src/app/category/[slug]/page/[page]/page.tsx`; use `getPostsByCategory` for counts and guard `notFound()` when page numbers fall outside `totalPages`.
- Site-wide pagination is handled by `src/app/page/[page]/page.tsx`; page 1 intentionally `notFound()`s to avoid duplicate content with `/`.
- Tag routes expect URL-encoded slugs (`encodeURIComponent`) and decode inside `src/app/tag/[slug]/page.tsx`; mirror this when linking from new components.

## SEO & Feeds
- Breadcrumbs and article schema rely on inline `<Script>` JSON-LD blocks in each template; when creating new listing/detail views, copy the pattern from `Breadcrumb.tsx` or `posts/[slug]/page.tsx`.
- `src/app/sitemap.ts`, `src/app/feed.xml/route.ts`, and `src/app/robots.ts` all derive URLs from the data module; keep helper signatures stable to avoid sitemap/feed drift.
- Metadata titles/descriptions are localized (pt-BR) and leverage `metadataBase`; update both OpenGraph and Twitter objects together for consistency.

## UI & Styling
- Styles mix Tailwind v4 (`@import "tailwindcss"`) with bespoke WordPress-like classes defined in `src/app/globals.css`; reuse existing classnames before introducing new utilities.
- Components lean on inline styles for widgets (`Sidebar.tsx`, `CookieConsent.tsx`); prefer matching that pattern to preserve the current look and feel.
- `BannerCarousel.tsx` rotates through the first five posts client-side; ensure any async data still passes a finite `posts` array to avoid modulo issues.

## Integrations & Compliance
- Contact submissions hit `src/app/api/contact/route.ts` using Resend; set `RESEND_API_KEY` in local `.env` and Render dashboard, and maintain the subject map so dropdown values stay translated.
- Newsletter signup (`NewsletterForm.tsx`) is a stubbed `setTimeout`; replace the placeholder fetch while keeping the variant prop (`sidebar` vs `inline`).
- Consent flow depends on `window.gtag`; any change that delays `ConsentManager` or renames localStorage keys (`cookieConsent`) breaks Consent Mode v2 defaults.

## Dev & Deploy
- Run locally with `npm install` then `npm run dev` (Turbopack). `npm run lint` uses the flat config in `eslint.config.mjs` (Next core web vitals).
- Production builds use `npm run build` and `npm start`; Render deploys follow `render.yaml`, so keep commands/environment in sync.
- `next.config.ts` enables remote images and ships `output: 'standalone'`; avoid adding server-only Node APIs to client components to keep the bundle edge-friendly.

## Practical Tips
- When introducing new data helpers, export them from `src/data/posts.ts` so downstream consumers (search, RSS, sitemap) stay in sync.
- Client search (`src/app/search/page.tsx`) filters the in-memory posts array; adjust the filter logic there when adding new searchable fields.
- Use `Pagination` (`src/components/Pagination.tsx`) for any new listings; pass `basePath` consistently so canonical URLs align with `generateMetadata`.
- Stick to Portuguese copy for user-facing text and UI labels unless a business stakeholder requests otherwise.
