# Under Construction Landing Page Setup

## Overview

This setup provides a professional "Under Construction" landing page while keeping the rest of your site accessible only via a secret token.

## How It Works

### Public Access (No Token)
- **Homepage (`/`)**: Shows "Under Construction" landing page
- All other routes redirect back to homepage

### Protected Access (With Token)
- Access full site by adding `?access=g2me-preview-2025` to any URL
- Token is saved in secure cookie for 30 days
- Users can browse entire site normally after first access

## Implementation Steps

### Step 1: Update src/index.tsx

Add these imports at the top (after existing imports):

```typescript
import { UnderConstructionPage } from './pages/UnderConstruction'
import { requireSiteAccess, hasSiteAccess } from './middleware/site-access'
```

### Step 2: Replace Homepage Route

Find this code (around line 934):

```typescript
// Homepage
app.get('/', (c) => {
  return c.render(
    <HomePage />,
    {
      title: 'Government Event Management UAE | G2 Middle East',
      ...
    }
  )
})
```

Replace with:

```typescript
// Homepage - Shows under construction or regular homepage based on access
app.get('/', (c) => {
  // Check if user has site access
  if (!hasSiteAccess(c)) {
    // Show under construction page
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
  
  // Show regular homepage if user has access
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

### Step 3: Protect All Other Routes (OPTIONAL)

If you want to protect ALL routes (services, team, projects, etc.), add the middleware to each route group:

**Option A: Protect specific routes**

```typescript
// Services Page - Protected
app.get('/services', requireSiteAccess, (c) => {
  return c.render(<ServicesPage />, { ... })
})

// Team Page - Protected
app.get('/team', requireSiteAccess, (c) => {
  return c.render(<TeamPage />, { ... })
})

// ... add to other routes as needed
```

**Option B: Protect all routes except homepage and contact**

Add this middleware BEFORE your route definitions (around line 927):

```typescript
// Protect all routes except homepage, contact, and public assets
app.use('*', async (c, next) => {
  const path = c.req.path
  
  // Allow public access to these paths
  const publicPaths = [
    '/',
    '/contact',
    '/robots.txt',
    '/llms.txt',
    '/sitemap',
    '/static/'
  ]
  
  // Check if path should be public
  const isPublic = publicPaths.some(p => path === p || path.startsWith(p))
  
  if (isPublic) {
    await next()
    return
  }
  
  // Require site access for all other paths
  return requireSiteAccess(c, next)
})
```

## Access Methods

### Method 1: URL Parameter (Recommended for sharing)
Share these links with stakeholders:

```
https://g2middleeast.com?access=g2me-preview-2025
https://g2middleeast.com/services?access=g2me-preview-2025
https://g2middleeast.com/team?access=g2me-preview-2025
```

After first visit, users can browse normally (token saved in cookie).

### Method 2: Direct Access (After first visit)
Once token is set, users can access directly:

```
https://g2middleeast.com/services
https://g2middleeast.com/team
https://g2middleeast.com/projects
```

## Customization

### Change Access Token

Edit `/home/user/webapp/src/middleware/site-access.ts`:

```typescript
// Line 5 - Change to your preferred token
const SITE_ACCESS_TOKEN = 'your-secret-token-here'
```

### Change Cookie Duration

```typescript
// Line 7 - Change expiry (in seconds)
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30  // 30 days
```

### Customize Under Construction Page

Edit `/home/user/webapp/src/pages/UnderConstruction.tsx`:
- Update messaging
- Change colors/styling
- Add countdown timer
- Add notification signup form

## Testing

### Test Under Construction Page
```bash
# Clear cookies in browser
# Visit: https://g2middleeast.com
# Should see: Under Construction page
```

### Test Protected Access
```bash
# Visit: https://g2middleeast.com?access=g2me-preview-2025
# Should see: Normal homepage
# Navigate to: https://g2middleeast.com/services
# Should see: Services page (cookie persists)
```

### Test Invalid Token
```bash
# Visit: https://g2middleeast.com?access=wrong-token
# Should see: Under Construction page
```

## Deployment

```bash
# Build and deploy
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name g2-middle-east
```

## Alternative Approaches (Not Implemented)

### Option B: IP Whitelist
Restrict access by IP address (requires Cloudflare Workers environment variables):

```typescript
const ALLOWED_IPS = ['1.2.3.4', '5.6.7.8']
if (!ALLOWED_IPS.includes(clientIP)) {
  return c.redirect('/')
}
```

### Option C: Basic Auth
Simple username/password (less user-friendly):

```typescript
import { basicAuth } from 'hono/basic-auth'
app.use('*', basicAuth({ username: 'admin', password: 'secret' }))
```

### Option D: Separate Staging Domain
Deploy two versions:
- Production: g2middleeast.com (under construction)
- Staging: staging.g2middleeast.com (full site)

## Removal Instructions

When ready to go live:

1. **Remove under construction check from homepage:**
   ```typescript
   // Just keep the regular HomePage render
   app.get('/', (c) => {
     return c.render(<HomePage />, { ... })
   })
   ```

2. **Remove requireSiteAccess middleware from routes**

3. **Delete files (optional):**
   - `src/pages/UnderConstruction.tsx`
   - `src/middleware/site-access.ts`

4. **Redeploy:**
   ```bash
   npm run build
   npx wrangler pages deploy dist --project-name g2-middle-east
   ```

## Security Notes

- ✅ Token is NOT visible in URL after first visit (saved in cookie)
- ✅ Cookie is httpOnly (protected from JavaScript access)
- ✅ Cookie is secure (HTTPS only)
- ✅ No database changes required
- ✅ Easy to share with stakeholders
- ⚠️ Token is shared - anyone with token can access
- ⚠️ Not suitable for highly sensitive content (use Projects portal for that)

## Support

For questions or customization:
- Email: tim@g2middleeast.com
- Documentation: This file

---

**Status**: Ready for implementation
**Last Updated**: 2025-01-15
