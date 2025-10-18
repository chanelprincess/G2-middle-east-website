# Perspectives Article Card Style Guide

## Overview
This guide defines the standard styling approach for article cards in the Perspectives section, ensuring consistency across all articles.

---

## Card Structure

### Featured Article Card (Large Format)

```tsx
<a href="/perspectives/article-slug" class="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
  {/* Hero Image Section */}
  <div class="relative h-64 md:h-96 w-full overflow-hidden">
    <img 
      src="[HERO_IMAGE_URL]" 
      alt="[ARTICLE_TITLE]"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      style="opacity: 0.7;"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
  </div>

  {/* Content Section */}
  <div class="p-8 md:p-12">
    {/* Metadata */}
    <div class="flex items-center gap-4 mb-6">
      <span class="px-4 py-1 bg-g2-gold/10 text-g2-gold text-sm font-semibold rounded-full border border-g2-gold/20">
        Featured
      </span>
      <span class="text-gray-500 text-sm">[DATE]</span>
    </div>

    {/* Title */}
    <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white group-hover:text-g2-gold transition-colors">
      [ARTICLE_TITLE]
    </h2>

    {/* Author Info */}
    <div class="flex items-center gap-4 mb-8">
      <div class="w-12 h-12 rounded-full bg-g2-gold/20 flex items-center justify-center">
        <i class="fas fa-user text-g2-gold"></i>
      </div>
      <div>
        <div class="text-white font-semibold">[AUTHOR_NAME]</div>
        <div class="text-gray-500 text-sm">[AUTHOR_TITLE]</div>
      </div>
      <div class="text-gray-500">•</div>
      <div class="text-gray-400 text-sm">[READ_TIME] min read</div>
    </div>

    {/* Excerpt */}
    <p class="text-gray-400 text-lg leading-relaxed mb-6">
      [ARTICLE_EXCERPT]
    </p>

    {/* CTA */}
    <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors font-semibold">
      Read article <i class="fas fa-arrow-right ml-2"></i>
    </div>
  </div>
</a>
```

---

### Recent Article Card (Grid Format)

```tsx
<a href="/perspectives/article-slug" class="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
  {/* Hero Image Section */}
  <div class="relative h-48 w-full overflow-hidden">
    <img 
      src="[HERO_IMAGE_URL]" 
      alt="[ARTICLE_TITLE]"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      style="opacity: 0.7;"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
  </div>

  {/* Content Section */}
  <div class="p-8">
    {/* Category Badge */}
    <div class="mb-6">
      <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">[CATEGORY]</span>
    </div>

    {/* Title */}
    <h4 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
      [ARTICLE_TITLE]
    </h4>

    {/* Excerpt */}
    <p class="text-gray-400 leading-relaxed mb-6">
      [ARTICLE_EXCERPT]
    </p>

    {/* CTA */}
    <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
      Read More <i class="fas fa-arrow-right ml-2"></i>
    </div>
  </div>
</a>
```

---

## Fallback: Card Without Hero Image

For articles without hero images, use a gradient background with decorative icon:

```tsx
<a href="/perspectives/article-slug" class="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
  {/* Gradient Background with Icon */}
  <div class="relative h-48 w-full overflow-hidden bg-gradient-to-br from-g2-gold/20 to-g2-darker">
    <div class="absolute inset-0 flex items-center justify-center">
      <i class="fas fa-[ICON_NAME] text-6xl text-g2-gold/30"></i>
    </div>
  </div>

  {/* Content Section - Same as above */}
  <div class="p-8">
    <!-- Same content structure as Recent Article Card -->
  </div>
</a>
```

**Suggested Icons by Category:**
- Strategy: `fa-chess-knight`, `fa-chart-line`, `fa-lightbulb`
- Creativity: `fa-palette`, `fa-magic`, `fa-pen-fancy`
- Culture: `fa-globe`, `fa-users`, `fa-landmark`
- Technology: `fa-microchip`, `fa-robot`, `fa-network-wired`
- Leadership: `fa-crown`, `fa-medal`, `fa-trophy`

---

## Design Specifications

### Hero Image Settings
- **Opacity:** 70% (`style="opacity: 0.7;"`)
- **Object-fit:** `cover` (fills space, crops if needed)
- **Aspect Ratio:** 
  - Featured: `h-64 md:h-96` (256px mobile, 384px desktop)
  - Recent: `h-48` (192px)
- **Hover Effect:** Scale to 105% with 500ms transition
- **Gradient Overlay:** `from-black/50 via-black/30 to-g2-darker`

### Card Container
- **Border:** `border-white/10` (default), `border-g2-gold/30` (hover)
- **Border Radius:** `rounded-2xl`
- **Background:** `bg-g2-darker/30`
- **Overflow:** `overflow-hidden` (contains image scaling)
- **Padding:** 
  - Featured: `p-8 md:p-12`
  - Recent: `p-8`

### Typography
- **Featured Title:** `text-3xl md:text-5xl font-bold`
- **Recent Title:** `text-2xl md:text-3xl font-bold`
- **Excerpt:** `text-gray-400 leading-relaxed`
- **Category Badge:** `text-xs font-semibold uppercase tracking-wider`

### Color System
- **Primary Text:** `text-white`
- **Secondary Text:** `text-gray-400`
- **Meta Text:** `text-gray-500`
- **Accent:** `text-g2-gold`
- **Hover State:** Title changes to `text-g2-gold`, CTA to `text-white`

### Transitions
- **Border Hover:** `transition-all duration-300`
- **Image Scale:** `transition-transform duration-500`
- **Text Color:** `transition-colors`

---

## Adding a New Article

### Step 1: Add Article Data
In `src/pages/PerspectiveDetail.tsx`, add to `perspectivesData`:

```typescript
'article-slug': {
  slug: 'article-slug',
  title: 'Article Title',
  author: 'Tim Jacobs',
  authorTitle: 'Regional COO, G2 Middle East',
  date: 'Month Year',
  readTime: 'X min',
  excerpt: 'Brief description for card preview',
  heroImage: 'https://url-to-hero-image.jpg', // Optional
  content: (
    <>
      {/* Article content in JSX */}
    </>
  )
}
```

### Step 2: Add Card to Perspectives Page
In `src/pages/Perspectives.tsx`, add to appropriate section:

**For Featured Article:** Replace existing featured card
**For Recent Articles:** Add to grid in Recent Articles section

### Step 3: Choose Card Type
- **Has Hero Image?** Use standard card with image
- **No Hero Image?** Use gradient fallback with icon

### Step 4: Update Route
In `src/index.tsx`, add route handler:

```typescript
app.get('/perspectives/article-slug', (c) => {
  const articleData = perspectivesData['article-slug']
  return c.render(
    <PerspectiveDetailPage {...articleData} />,
    { title: articleData.title }
  )
})
```

---

## Category Guidelines

Standard categories and their badge styling:

| Category | Badge Text | Typical Topics |
|----------|-----------|----------------|
| STRATEGY | `text-g2-gold` | Business strategy, competitive positioning, market analysis |
| CREATIVITY | `text-g2-gold` | Design thinking, storytelling, creative approaches |
| CULTURE | `text-g2-gold` | Cultural intelligence, regional insights, community |
| TECHNOLOGY | `text-g2-gold` | AI, digital transformation, innovation |
| LEADERSHIP | `text-g2-gold` | Executive insights, organizational development |
| BRANDING | `text-g2-gold` | Brand architecture, positioning, identity |

All categories use the same `text-g2-gold` color for consistency.

---

## Image Requirements

### Technical Specs
- **Format:** JPG or WebP recommended
- **Dimensions:** Minimum 1280x720px (16:9 aspect ratio preferred)
- **File Size:** Under 500KB for performance
- **Quality:** High resolution for Retina displays

### Content Guidelines
- **Relevance:** Image should relate to article topic
- **Readability:** Ensure gradient overlay doesn't obscure important details
- **Professional:** Match G2 brand aesthetic (premium, strategic)
- **Contrast:** Works well with dark gradient overlay

### Image Sources
- LinkedIn article cover images
- Stock photo services (Unsplash, Pexels)
- Custom photography/design
- AI-generated imagery (if brand-appropriate)

---

## Responsive Behavior

### Breakpoints
- **Mobile (< 768px):**
  - Featured: Single column, h-64 image
  - Recent: Single column, h-48 image
  - Font sizes scale down
  
- **Tablet (768px - 1024px):**
  - Featured: Full width, h-96 image
  - Recent: 2-column grid, h-48 image
  
- **Desktop (> 1024px):**
  - Featured: Max-width container, h-96 image
  - Recent: 2-column grid, h-48 image

### Touch Interactions
- Hover states work on pointer devices
- Cards remain tappable on touch devices
- No hover scale effect on touch (handled by browser)

---

## Accessibility

### Required Attributes
- **Alt Text:** Descriptive, concise image description
- **Semantic HTML:** Use `<article>` tags for screen readers
- **Color Contrast:** Ensure text meets WCAG AA standards
- **Focus States:** Visible keyboard navigation

### Example Alt Text
```
✅ Good: "Competing in the AI Arena - Strategic planning visualization"
❌ Bad: "Image" or "Article image"
```

---

## Quality Checklist

Before adding a new article card:

- [ ] Hero image (if available) is high quality and on-brand
- [ ] Image opacity set to 70%
- [ ] Gradient overlay applied correctly
- [ ] Hover scale effect works smoothly
- [ ] Title is concise and compelling
- [ ] Excerpt is informative (2-3 sentences max)
- [ ] Category badge uses correct uppercase styling
- [ ] CTA uses "Read article" (featured) or "Read More" (recent)
- [ ] Link href matches article slug
- [ ] Card maintains consistent padding and spacing
- [ ] Responsive behavior tested on mobile/tablet/desktop
- [ ] Alt text is descriptive and meaningful

---

## Example: Complete Implementation

```tsx
{/* Example: Recent Article with Hero Image */}
<a href="/perspectives/ai-brand-strategy" class="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
  <div class="relative h-48 w-full overflow-hidden">
    <img 
      src="https://example.com/hero-image.jpg" 
      alt="AI Brand Strategy visualization showing interconnected nodes"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      style="opacity: 0.7;"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
  </div>

  <div class="p-8">
    <div class="mb-6">
      <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">TECHNOLOGY</span>
    </div>
    <h4 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
      AI-Driven Brand Strategy: The Next Evolution
    </h4>
    <p class="text-gray-400 leading-relaxed mb-6">
      How artificial intelligence is reshaping strategic brand positioning and what it means for competitive advantage in 2025.
    </p>
    <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
      Read More <i class="fas fa-arrow-right ml-2"></i>
    </div>
  </div>
</a>
```

---

## Common Issues and Solutions

### Issue: Image Not Scaling on Hover
**Solution:** Ensure parent div has `overflow-hidden`

### Issue: Text Readability Poor
**Solution:** Adjust gradient overlay darkness or image opacity

### Issue: Card Height Inconsistent
**Solution:** Use fixed height classes for image section

### Issue: Border Not Showing on Hover
**Solution:** Check `hover:border-g2-gold/30` is applied to parent `<a>` tag

### Issue: Image Distorted
**Solution:** Verify `object-cover` class is applied to `<img>` tag

---

## Performance Optimization

### Image Loading
```tsx
{/* Add loading="lazy" for images below fold */}
<img 
  src="[URL]" 
  alt="[ALT]"
  loading="lazy"
  class="w-full h-full object-cover"
/>
```

### WebP Format
```tsx
{/* Use WebP with JPG fallback */}
<picture>
  <source srcset="[IMAGE].webp" type="image/webp" />
  <img src="[IMAGE].jpg" alt="[ALT]" />
</picture>
```

---

## Maintenance Notes

- **Consistency First:** Always match this style guide exactly
- **Update Regularly:** Keep this document current with any design changes
- **Version Control:** Commit style changes with clear documentation
- **Design Review:** Have new cards reviewed before production deployment

---

**Last Updated:** 2025-10-17  
**Version:** 1.0  
**Maintained By:** Development Team

---

## Quick Reference

**Card Types:**
1. Featured (large, h-64/h-96)
2. Recent (grid, h-48)
3. Fallback (no image, gradient + icon)

**Key Classes:**
- Container: `border-white/10 hover:border-g2-gold/30`
- Image: `opacity: 0.7;` + `group-hover:scale-105`
- Gradient: `from-black/50 via-black/30 to-g2-darker`
- Title Hover: `group-hover:text-g2-gold`

**Remember:** Images stop before "Read More" link!
