# SEO & Performance Optimization Implementation Plan

## Executive Summary

This plan addresses **Mobile LCP of 4.92s** and **Desktop TBT of 326ms** while preserving excellent CLS and SEO fundamentals. The Arden 360 website is a Next.js 16 application with Cloudinary/Unsplash images, GTM/GA analytics, and multiple hero/background images.

---

## 1. Mobile Performance Priority – Fix LCP (4.92s)

### 1.1 Image Optimization Strategy

#### Compression Formats & Responsive Images

| Location | Current | Target | Implementation |
|----------|---------|--------|----------------|
| Hero carousel (`/hero-background-2.jpg`, `/hero-background-4.jpg`) | JPG, full-size | WebP/AVIF, responsive srcset | Next.js Image with `sizes` + Cloudinary transforms or local WebP conversion |
| Background stats (`/background-stats.jpg`) | JPG | WebP, 75% quality | Convert to WebP in `/public`, use `quality={75}` |
| Call-to-action (`/call-to-action-background.jpeg`) | JPEG | WebP, lazy | Convert + remove `priority` |
| Service grid (`/services/*.jpeg`) | JPEG | WebP, lazy | Convert + `loading="lazy"` |
| About page (`/company/*.jpg`) | JPG | WebP, responsive | Convert + proper `sizes` |

**File structure for optimized images:**
```
public/
├── hero-background-2.webp      # Primary LCP candidate (mobile)
├── hero-background-2-mobile.webp  # Optional: smaller for mobile
├── hero-background-4.webp
├── background-stats.webp
├── call-to-action-background.webp
├── services/
│   ├── msp-ip.webp
│   ├── voip.webp
│   └── ...
└── company/
    ├── company-image-1.webp
    └── ...
```

**Next.js config enhancements** (`next.config.ts`):
```typescript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  imageSizes: [16, 32, 48, 64, 96, 128, 256],
  minimumCacheTTL: 60,
}
```

#### LCP Image Priority Rules

- **Above-the-fold hero (slide 0)**: `priority`, `fetchPriority="high"`, `sizes="100vw"`
- **Below-the-fold**: `loading="lazy"`, no `priority`
- **Background decorative images**: `loading="lazy"`, `quality={75}`

### 1.2 Lazy Loading Implementation

**Components requiring lazy loading:**

| Component | File | Change |
|-----------|------|--------|
| CallToAction | `call-to-action.tsx` | Remove `priority`, add `loading="lazy"` |
| WhyUsStats | `why-us-stats.tsx` | Already has `loading="lazy"` ✓ |
| ServicesExpandGrid | `services-expand-grid.tsx` | Ensure `loading="lazy"` (default for non-priority) |
| SecondaryHero8 | `secondary-hero-8.tsx` | Keep `priority` only when above fold (e.g. partners page) |
| LogoCloud | `logo-cloud.tsx` | Already has `loading="lazy"` ✓ |
| FeaturedStories, Blog | `featured-stories.tsx`, `blog-4.tsx` | Ensure lazy for below-fold images |

**Native `loading="lazy"`** is used by Next.js Image when `priority` is false. Verify no `priority` on below-fold images.

### 1.3 Render-Blocking Resource Elimination

**Current render-blocking resources:**

1. **Google Tag Manager / gtag.js** – `strategy="beforeInteractive"`
2. **Tailwind CSS** – `@import` in globals.css (unavoidable, but can inline critical CSS)
3. **Fonts** – Using system fonts (Helvetica), no external font blocking ✓

**Action:** Change GTM/GA from `beforeInteractive` to `afterInteractive` or `lazyOnload` to prevent blocking initial paint.

---

## 2. Desktop Performance – Reduce TBT (326ms)

### 2.1 Defer Non-Critical JavaScript

**Script loading strategy changes** (`app/layout.tsx`):

| Script | Current | New | Impact |
|--------|---------|-----|--------|
| gtag.js | `beforeInteractive` | `afterInteractive` | Defers ~50–100ms |
| gtag config | `beforeInteractive` | `afterInteractive` | Defers inline script |
| GTM | `beforeInteractive` | `afterInteractive` | Defers ~80–150ms |

**Code change:**
```tsx
<Script src={...} strategy="afterInteractive" />
<Script id="ga-script-config" strategy="afterInteractive">...</Script>
<Script id="gtm-script" strategy="afterInteractive">...</Script>
```

### 2.2 Main Thread Optimization

**Heavy components to audit:**

1. **Hero Carousel** (`hero-carousel.tsx`) – Client component with `useState`, `useEffect`, `useCallback`
   - Consider `React.lazy()` + `Suspense` for below-fold carousel
   - Or: Server-render first slide, hydrate carousel after

2. **Motion/animations** – `motion` library (framer-motion fork)
   - Lazy load motion for below-fold sections
   - Use `will-change` sparingly

3. **InfiniteSlider** – Used in LogoCloud
   - Ensure no layout thrashing
   - Consider `content-visibility: auto` for off-screen sections

**Dynamic imports for below-fold components:**
```tsx
const ServicesExpandGrid = dynamic(() => import('@/components/services-expand-grid'), {
  loading: () => <ServicesGridSkeleton />,
  ssr: true, // Keep SSR for SEO
});
```

---

## 3. Preserve Existing Strengths

### 3.1 CLS (Layout Stability)

- **Do not** remove `width`/`height` or `sizes` from images
- **Do not** change layout structure of hero/carousel
- Keep explicit dimensions on all `<Image>` components
- Maintain `aspect-ratio` or `aspect-[4/5]` on service cards

### 3.2 SEO Fundamentals

- **Schema markup** – Keep `SchemaMarkup` component as-is
- **Metadata** – Preserve `metadataBase`, OpenGraph, Twitter cards
- **Sitemap** – Keep `app/sitemap.ts`
- **Robots** – Keep `app/robots.ts`
- **Canonical URLs** – Preserve `alternates.canonical`

---

## 4. Implementation Checklist

### Phase 1: Quick Wins (1–2 hours)

- [x] Change GTM/GA scripts to `afterInteractive`
- [x] Remove `priority` from CallToAction background image
- [x] Add `fetchPriority="high"` to hero carousel first slide image
- [x] Add `sizes` to all hero/background images for responsive loading
- [x] Reduce `quality` on decorative backgrounds from 90 to 75

### Phase 2: Image Optimization (2–4 hours)

- [ ] Convert hero images to WebP (or use Next.js automatic formats)
- [x] Add `formats: ['image/avif', 'image/webp']` to next.config
- [x] Audit all Image components for correct `sizes` attribute
- [ ] Ensure Cloudinary URLs use `f_auto,q_auto` for remote images

### Phase 3: JavaScript Optimization (2–3 hours)

- [ ] Dynamic import for below-fold heavy components (optional)
- [ ] Audit motion library usage – defer animations
- [ ] Consider `React.lazy` for Blog, FeaturedStories if large

### Phase 4: Advanced (Optional)

- [ ] Implement critical CSS extraction for above-fold
- [ ] Add `preload` for LCP image: `<link rel="preload" as="image" href="..." />`
- [ ] Service worker for image caching (if PWA)

---

## 5. Testing & Validation

### 5.1 Local Testing

```bash
# Build and analyze
npm run build
npx @next/bundle-analyzer  # If configured

# Lighthouse CI (add to package.json)
npx lighthouse https://localhost:3000 --view --preset=perf
```

### 5.2 Lighthouse Targets

| Metric | Current (Mobile) | Target | Current (Desktop) | Target |
|--------|------------------|--------|-------------------|--------|
| LCP | 4.92s | < 2.5s | - | < 2.5s |
| TBT | - | < 200ms | 326ms | < 200ms |
| CLS | Good | < 0.1 | Good | < 0.1 |
| FCP | - | < 1.8s | - | < 1.0s |

### 5.3 Validation Steps

1. **Chrome DevTools** → Lighthouse → Mobile + Desktop
2. **WebPageTest** – Multi-location testing
3. **PageSpeed Insights** – Field + Lab data
4. **Visual regression** – Ensure no layout shifts after image changes

---

## 6. Performance Monitoring Setup

### 6.1 Real User Monitoring (RUM)

**Vercel Analytics** (already installed) provides:
- Core Web Vitals (LCP, FID, CLS)
- Geographic breakdown
- Device breakdown

**Enhancement:** Custom Web Vitals reporting to GA4 via `WebVitalsReporter` component (implemented in `components/web-vitals-reporter.tsx`). Uses `web-vitals` package to send LCP, INP, and CLS to gtag.

### 6.2 Synthetic Monitoring

- **Lighthouse CI** in GitHub Actions for every PR
- **Vercel Speed Insights** (optional add-on)
- **Sentry Performance** (optional) for TBT breakdown

### 6.3 Recommended GitHub Action

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse
on: [pull_request]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci && npm run build
      - uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            http://localhost:3000
            http://localhost:3000/services/msp-managed-it
          uploadArtifacts: true
```

---

## 7. File Structure Summary

```
workspace/
├── app/
│   ├── layout.tsx              # Script strategy changes
│   └── ...
├── components/
│   ├── hero-carousel.tsx       # LCP image priority, sizes
│   ├── call-to-action.tsx      # Remove priority
│   ├── why-us-stats.tsx       # Verify lazy
│   ├── services-expand-grid.tsx # Lazy, quality
│   ├── secondary-hero-8.tsx   # Conditional priority
│   └── ...
├── next.config.ts             # Image formats, deviceSizes
├── public/
│   ├── hero-background-2.webp # Convert from jpg
│   ├── hero-background-4.webp
│   └── ...
├── docs/
│   └── PERFORMANCE-SEO-IMPLEMENTATION-PLAN.md  # This file
└── .github/
    └── workflows/
        └── lighthouse.yml     # Optional CI
```

---

## 8. Risk Mitigation

| Risk | Mitigation |
|------|------------|
| GTM/GA delayed → missed pageviews | `afterInteractive` loads before user interaction; minimal impact |
| Image format support | Next.js serves WebP/AVIF with JPEG fallback |
| CLS regression | Test each change; maintain dimensions |
| SEO regression | No metadata/schema changes; preserve crawlability |

---

## 9. Success Criteria

- **Mobile LCP**: < 2.5s (from 4.92s)
- **Desktop TBT**: < 200ms (from 326ms)
- **CLS**: Maintain < 0.1
- **SEO**: No regression in indexing or rich results
