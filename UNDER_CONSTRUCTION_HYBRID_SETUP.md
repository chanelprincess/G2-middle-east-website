# Under Construction - Hybrid Setup (SEO-Friendly)

## 🎯 Best of Both Worlds

This hybrid approach allows you to:
- ✅ **Show "Under Construction" to human visitors**
- ✅ **Allow AI crawlers full access** (maintain SEO, schema.org, AI citations)
- ✅ **Give stakeholders token-based access**

---

## How It Works

### Public Human Visitors → Under Construction Page
Regular users see professional landing page

### AI Crawlers → Full Site Access
- GPTBot (ChatGPT)
- Claude-Web (Claude)
- Googlebot (Google Search)
- PerplexityBot (Perplexity)
- All major search engines
- All AI/LLM crawlers

**Result:** Your site remains indexed, schema.org data stays active, AI can cite your content

### Stakeholders with Token → Full Site Access
Share: `https://g2middleeast.com?access=g2me-preview-2025`

---

## Why This Approach?

### ❌ Problem with Basic Token Protection:
```
Human Visitor → Under Construction ✅
AI Crawler → Under Construction ❌ (loses all SEO & AI visibility)
Stakeholder → Full Access ✅
```

### ✅ Solution with Hybrid Protection:
```
Human Visitor → Under Construction ✅
AI Crawler → Full Access ✅ (maintains SEO & AI visibility)
Stakeholder → Full Access ✅
```

---

## Implementation

### Step 1: Update src/index.tsx Imports

Replace the basic imports with hybrid version:

```typescript
import { UnderConstructionPage } from './pages/UnderConstruction'
import { requireSiteAccessHybrid, hasSiteAccessHybrid } from './middleware/site-access-hybrid'
```

### Step 2: Update Homepage Route

```typescript
// Homepage - Shows under construction for humans, full site for AI crawlers
app.get('/', (c) => {
  // Check if user/crawler has site access
  if (!hasSiteAccessHybrid(c)) {
    // Show under construction to regular human visitors
    return c.render(
      <UnderConstructionPage />,
      {
        title: 'Under Construction | G2 Middle East & Africa',
        description: 'G2 Middle East & Africa website is currently under development. Contact us at info@g2middleeast.com',
        canonicalUrl: 'https://g2middleeast.com',
        ogImage: 'https://g2middleeast.com/static/og-homepage.jpg',
        ogImageAlt: 'G2 Middle East - Under Construction'
      }
    )
  }
  
  // Show regular homepage for AI crawlers and authorized users
  return c.render(
    <HomePage />,
    {
      title: 'Government Event Management UAE | G2 Middle East',
      description: 'Leading government event management in Dubai & Middle East. 50+ major projects including state visits, diplomatic protocol, Papal Mass Abu Dhabi (180,000 attendees). Expert strategic advisory. 24-hour response.',
      canonicalUrl: 'https://g2middleeast.com',
      ogImage: 'https://g2middleeast.com/static/og-homepage.jpg',
      ogImageAlt: 'G2 Middle East - Leading Government Event Management in UAE and Middle East'
    }
  )
})
```

### Step 3: Protect Other Routes (Optional)

If you want to protect all routes:

```typescript
// Services Page - Protected (but AI crawlers have access)
app.get('/services', requireSiteAccessHybrid, (c) => {
  return c.render(<ServicesPage />, { /* ... */ })
})

// Team Page - Protected (but AI crawlers have access)
app.get('/team', requireSiteAccessHybrid, (c) => {
  return c.render(<TeamPage />, { /* ... */ })
})
```

### Step 4: Deploy

```bash
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name g2-middle-east
```

---

## AI Crawlers Allowed

The hybrid middleware automatically detects and allows these crawlers:

### **AI/LLM Crawlers:**
- **GPTBot** (ChatGPT/OpenAI)
- **Claude-Web** (Anthropic Claude)
- **anthropic-ai** (Anthropic)
- **Google-Extended** (Google AI)
- **PerplexityBot** (Perplexity AI)
- **CCBot** (Common Crawl - used by many AI companies)
- **cohere-ai** (Cohere)
- **meta-externalagent** (Meta AI)
- **Applebot-Extended** (Apple Intelligence)
- **YouBot** (You.com AI)
- **Omgilibot** (Omgili AI)

### **Search Engine Crawlers:**
- **Googlebot** (Google Search)
- **Bingbot** (Microsoft Bing)
- **YandexBot** (Yandex)
- **Baiduspider** (Baidu)
- **DuckDuckBot** (DuckDuckGo)

### **Archive/Research:**
- **ia_archiver** (Internet Archive)
- **archive.org_bot** (Wayback Machine)

### **Social Crawlers:**
- **facebookexternalhit** (Facebook link preview)

---

## Benefits

### ✅ Maintains SEO & AI Visibility
- Google continues indexing your site
- Schema.org markup remains active
- Tim Jacobs Person schema stays visible
- Project schemas remain discoverable
- AI can cite your content in responses

### ✅ Professional Public Experience
- Clean "Under Construction" landing page
- Contact information accessible
- Brand presence maintained

### ✅ Stakeholder Access
- Easy token-based access
- No login required
- Persistent cookie (30 days)

---

## Testing

### 1. Test Human Visitor (No Access)
```bash
curl -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" https://g2middleeast.com
# Should return: Under Construction page
```

### 2. Test AI Crawler (Has Access)
```bash
curl -A "GPTBot/1.0" https://g2middleeast.com
# Should return: Full homepage HTML
```

```bash
curl -A "Claude-Web/1.0" https://g2middleeast.com/team
# Should return: Full team page HTML
```

### 3. Test Google Crawler (Has Access)
```bash
curl -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" https://g2middleeast.com
# Should return: Full homepage HTML
```

### 4. Test Token Access (Human with Token)
```
Visit: https://g2middleeast.com?access=g2me-preview-2025
# Should show: Full homepage
```

---

## Verification

### Check AI Crawler Logs

After deployment, monitor Cloudflare logs to verify AI crawlers are getting through:

```
[Site Access] AI Crawler allowed: GPTBot/1.0
[Site Access] AI Crawler allowed: Googlebot/2.1
[Site Access] Access denied - User Agent: Mozilla/5.0 (Human browser)
[Site Access] Token access granted
```

### Verify Schema.org Visibility

Test with Google Rich Results:
```
https://search.google.com/test/rich-results
Test URL: https://g2middleeast.com/team/tim-jacobs
User-Agent: Googlebot
Expected: Should see Tim Jacobs Person schema
```

---

## Customization

### Add More AI Crawlers

Edit `src/middleware/site-access-hybrid.ts`:

```typescript
const AI_CRAWLER_PATTERNS = [
  // ... existing crawlers ...
  'YourNewBot',
  'AnotherAICrawler'
]
```

### Change Access Token

```typescript
const SITE_ACCESS_TOKEN = 'your-custom-token'
```

### Block Specific Crawlers

If you want to block certain crawlers while allowing others:

```typescript
const BLOCKED_CRAWLERS = ['AhrefsBot', 'SemrushBot', 'MJ12bot']

const isBlockedCrawler = (userAgent: string): boolean => {
  const ua = userAgent.toLowerCase()
  return BLOCKED_CRAWLERS.some(pattern => 
    ua.includes(pattern.toLowerCase())
  )
}

// In middleware:
if (isBlockedCrawler(userAgent)) {
  return c.redirect('/')
}
```

---

## Comparison: Basic vs Hybrid

| Feature | Basic Token | Hybrid (Recommended) |
|---------|-------------|---------------------|
| **Human Visitors** | Under Construction | Under Construction |
| **AI Crawlers** | ❌ Blocked | ✅ Full Access |
| **Google Indexing** | ❌ Lost | ✅ Maintained |
| **Schema.org** | ❌ Invisible | ✅ Visible |
| **AI Citations** | ❌ Lost | ✅ Maintained |
| **SEO Rankings** | ❌ Degraded | ✅ Maintained |
| **Stakeholder Access** | ✅ Token | ✅ Token |
| **Complexity** | Simple | Slightly more complex |

---

## Security Considerations

### ✅ Safe Because:
- Only allows **known, verified** AI crawlers
- Uses official user agent patterns
- Human visitors still blocked
- Token access still required for stakeholders
- No sensitive data exposure (Projects portal remains separate)

### ⚠️ Note:
- AI crawlers can see public content (same as current live site)
- Projects portal remains separately protected with authentication
- Whitepapers remain separately protected

---

## Going Live

When ready to make site fully public:

1. Remove under construction checks
2. Remove middleware
3. Deploy

```bash
npm run build
npx wrangler pages deploy dist --project-name g2-middle-east
```

---

## Recommended: Use Hybrid Approach

**Why:** Maintains all your SEO, schema.org, and AI visibility work while showing professional "Under Construction" to human visitors.

**Alternative:** If you want to completely hide from everyone (including AI), use the basic token approach from `site-access.ts` instead.

---

## Files

- **Hybrid Middleware**: `src/middleware/site-access-hybrid.ts` ✅ Created
- **Basic Middleware**: `src/middleware/site-access.ts` (alternative)
- **Landing Page**: `src/pages/UnderConstruction.tsx` ✅ Created
- **This Guide**: `UNDER_CONSTRUCTION_HYBRID_SETUP.md` ✅ Created

---

**Status**: Ready for implementation  
**Recommendation**: Use hybrid approach to maintain SEO & AI visibility  
**Last Updated**: 2025-01-15
