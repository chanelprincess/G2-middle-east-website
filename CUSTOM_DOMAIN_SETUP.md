# Custom Domain Setup Guide for Cloudflare Pages
## Connecting g2middleeast.com to Tim Jacobs Profile

---

## 🎯 **OBJECTIVE**

Connect the custom domain (likely **g2middleeast.com**) to the Cloudflare Pages deployment containing Tim Jacobs' 10/10 optimized profile.

---

## 📋 **PREREQUISITES**

✅ Domain transferred to Cloudflare  
✅ Cloudflare Pages project deployed: `g2-middle-east`  
✅ Current deployment URL: `https://3e41fa5b.g2-middle-east-zuj.pages.dev`  
✅ Cloudflare API token configured  

---

## 🚀 **DEPLOYMENT OPTIONS**

### Using Cloudflare Dashboard (Required Method)

**Note**: Custom domain management for Cloudflare Pages must be done through the Cloudflare Dashboard. The wrangler CLI does not currently support `pages domain` commands.

#### Step 1: Navigate to Pages Project
1. Go to: https://dash.cloudflare.com
2. Select your account
3. Click **Workers & Pages** in left sidebar
4. Find and click **g2-middle-east** project

#### Step 2: Add Custom Domain
1. Click **Custom domains** tab
2. Click **Set up a custom domain** button
3. Enter domain: `g2middleeast.com` or `www.g2middleeast.com`
4. Click **Continue**
5. Cloudflare will automatically configure DNS records

#### Step 3: Configure DNS (If Needed)
Cloudflare should auto-configure, but verify these records exist:

**For apex domain (g2middleeast.com)**:
- Type: `CNAME`
- Name: `@` (or root)
- Target: `g2-middle-east.pages.dev`
- Proxy: ✅ Enabled (orange cloud)

**For www subdomain**:
- Type: `CNAME`
- Name: `www`
- Target: `g2-middle-east.pages.dev`
- Proxy: ✅ Enabled (orange cloud)

---

## 🔐 **SSL/TLS CONFIGURATION**

### Automatic SSL Certificate
Cloudflare automatically provisions SSL certificates for custom domains. This typically takes 15-30 minutes.

### Verify SSL Status
1. Go to Cloudflare Dashboard
2. Select your domain
3. Click **SSL/TLS** in left sidebar
4. Ensure mode is set to: **Full (strict)** or **Full**
5. Check **Edge Certificates** tab for certificate status

---

## 🔄 **DNS PROPAGATION**

### Expected Timeline
- **Cloudflare Network**: Instant (within seconds)
- **Global DNS**: 15 minutes - 48 hours (typically < 1 hour)

### Check Propagation
```bash
# Check DNS resolution
dig g2middleeast.com
dig www.g2middleeast.com

# Check HTTPS access
curl -I https://g2middleeast.com
curl -I https://www.g2middleeast.com
```

---

## 📝 **UPDATE CANONICAL URLS**

### Critical: Update Schema URLs After Domain Connection

Once custom domain is active, update all schema URLs from:
- ❌ `https://3e41fa5b.g2-middle-east-zuj.pages.dev`

To:
- ✅ `https://g2middleeast.com`

#### Files to Update

**1. Team.tsx - Canonical URL**
```tsx
// OLD
<link rel="canonical" href="https://g2middleeast.com/team/tim-jacobs" />

// This is already correct! ✅
```

**2. Team.tsx - @id References**
```json
// Person @id
"@id": "https://g2middleeast.com/team/tim-jacobs#person"

// Organization @id
"@id": "https://g2middleeast.com#organization"

// These are already correct! ✅
```

**3. Team.tsx - mainEntityOfPage**
```json
"mainEntityOfPage": {
  "@type": "WebPage",
  "@id": "https://g2middleeast.com/team/tim-jacobs"
}

// This is already correct! ✅
```

**4. Team.tsx - BreadcrumbList URLs**
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://g2middleeast.com"  // ✅ Already correct
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Team",
      "item": "https://g2middleeast.com/team"  // ✅ Already correct
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Tim Jacobs",
      "item": "https://g2middleeast.com/team/tim-jacobs"  // ✅ Already correct
    }
  ]
}
```

**GOOD NEWS**: All schema URLs already use `g2middleeast.com` domain! No changes needed! ✅

---

## 🔀 **REDIRECT CONFIGURATION**

### Recommended: Redirect www to non-www (or vice versa)

#### Option 1: Redirect www → non-www (Recommended)
Add Page Rule in Cloudflare:
- URL: `www.g2middleeast.com/*`
- Setting: **Forwarding URL** - 301 Permanent Redirect
- Destination: `https://g2middleeast.com/$1`

#### Option 2: Redirect non-www → www
Add Page Rule in Cloudflare:
- URL: `g2middleeast.com/*`
- Setting: **Forwarding URL** - 301 Permanent Redirect
- Destination: `https://www.g2middleeast.com/$1`

---

## 🧪 **TESTING CHECKLIST**

### After Domain Connection

#### 1. DNS Resolution
```bash
# Test DNS
dig g2middleeast.com +short
dig www.g2middleeast.com +short
```

#### 2. HTTPS Access
```bash
# Test HTTPS
curl -I https://g2middleeast.com
curl -I https://www.g2middleeast.com

# Expected: 200 OK or 301 redirect
```

#### 3. Page Access
- [ ] Visit: https://g2middleeast.com
- [ ] Visit: https://g2middleeast.com/team
- [ ] Visit: https://g2middleeast.com/team/tim-jacobs  ← **Critical**
- [ ] Verify: SSL certificate is valid (green padlock)
- [ ] Verify: Page loads without errors

#### 4. Schema Validation
- [ ] Run Google Rich Results Test on custom domain
  - URL: https://search.google.com/test/rich-results
  - Test: https://g2middleeast.com/team/tim-jacobs
  
- [ ] Run Schema.org Validator
  - URL: https://validator.schema.org/
  - Test: https://g2middleeast.com/team/tim-jacobs

#### 5. SEO Verification
- [ ] Check canonical URL points to custom domain
- [ ] Verify all @id references use custom domain
- [ ] Check breadcrumb URLs use custom domain
- [ ] Verify sameAs URLs are accessible

---

## 📊 **POST-DEPLOYMENT UPDATES**

### Update Testing Documentation

**Files to Update**:
1. `AI_PLATFORM_TESTING_REPORT_2025-01-15.md`
   - Change production URL from `.pages.dev` to `g2middleeast.com`
   
2. `QUICK_TEST_GUIDE.md`
   - Update production URL
   
3. `TIM_JACOBS_10_10_SEO_OPTIMIZATION_2025-01-15.md`
   - Update deployment URLs

### Update Testing Commands
```bash
# OLD testing URL
curl https://3e41fa5b.g2-middle-east-zuj.pages.dev/team

# NEW testing URL
curl https://g2middleeast.com/team
```

---

## 🔍 **GOOGLE SEARCH CONSOLE**

### Add Custom Domain to Search Console

#### Step 1: Add Property
1. Go to: https://search.google.com/search-console
2. Click **Add Property**
3. Enter: `https://g2middleeast.com`
4. Verify ownership (DNS TXT record or HTML file)

#### Step 2: Submit Sitemap
```bash
# Create and submit sitemap at:
https://g2middleeast.com/sitemap.xml

# Or submit via Search Console:
https://search.google.com/search-console
```

#### Step 3: Request Indexing
1. Go to URL Inspection tool
2. Enter: `https://g2middleeast.com/team/tim-jacobs`
3. Click **Request Indexing**
4. Wait 1-7 days for indexing

---

## 🚨 **TROUBLESHOOTING**

### Domain Not Connecting
**Issue**: Domain doesn't resolve or shows error page

**Solutions**:
1. Verify DNS records are correct (CNAME to pages.dev)
2. Check if domain is active on Cloudflare
3. Wait 15-30 minutes for DNS propagation
4. Clear browser cache and try incognito mode

### SSL Certificate Error
**Issue**: Browser shows "Not Secure" or certificate error

**Solutions**:
1. Wait 15-30 minutes for SSL provisioning
2. Check SSL/TLS mode is set to "Full" or "Full (strict)"
3. Verify Universal SSL is enabled in Cloudflare
4. Force refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### 404 Not Found
**Issue**: Custom domain connects but shows 404 error

**Solutions**:
1. Verify Cloudflare Pages build is successful
2. Check that `dist/` directory contains `_worker.js`
3. Verify project name matches: `g2-middle-east`
4. Redeploy using: `npx wrangler pages deploy dist --project-name g2-middle-east`

### Redirect Loop
**Issue**: Page keeps redirecting infinitely

**Solutions**:
1. Check Page Rules for conflicting redirects
2. Verify SSL/TLS mode (should be Full or Full strict, not Flexible)
3. Check for duplicate CNAME records
4. Temporarily disable Cloudflare proxy (grey cloud) to test

---

## 📞 **NEXT STEPS AFTER DOMAIN CONNECTION**

### Immediate (Within 1 Hour)
1. ✅ Verify domain resolves correctly
2. ✅ Check HTTPS and SSL certificate
3. ✅ Test all main pages load
4. ✅ Verify schema validation on custom domain
5. ✅ Update documentation with new URLs

### Within 24 Hours
1. ✅ Submit sitemap to Google Search Console
2. ✅ Request indexing for key pages
3. ✅ Update any external links to use new domain
4. ✅ Test AI platform responses with new domain

### Within 1 Week
1. ✅ Monitor Google Search Console for errors
2. ✅ Check analytics for traffic patterns
3. ✅ Verify rich results appear in search
4. ✅ Test entity recognition on AI platforms

---

## 🎯 **EXPECTED TIMELINE**

| Step | Time | Status |
|------|------|--------|
| **Domain Connection** | 5 minutes | ⏳ Pending |
| **SSL Certificate** | 15-30 minutes | ⏳ Pending |
| **DNS Propagation** | 15 min - 2 hours | ⏳ Pending |
| **Schema Validation** | Immediate | ⏳ Pending |
| **Google Indexing** | 1-7 days | ⏳ Pending |
| **AI Platform Recognition** | 1-7 days | ⏳ Pending |

---

## 📝 **COMMAND REFERENCE**

### Domain Management (via Dashboard Only)
**Note**: Domain management must be done through Cloudflare Dashboard:
1. Go to https://dash.cloudflare.com
2. Select account → Workers & Pages → g2-middle-east
3. Click "Custom domains" tab
4. Click "Set up a custom domain" and follow prompts

### Test Deployment
```bash
# Test HTTP access
curl -I https://g2middleeast.com

# Test specific page
curl https://g2middleeast.com/team/tim-jacobs
```

### Redeploy (if needed)
```bash
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name g2-middle-east
```

---

## ✅ **VERIFICATION CHECKLIST**

### Domain Connection Successful When:
- [ ] ✅ `g2middleeast.com` resolves to Cloudflare IP
- [ ] ✅ HTTPS works without SSL errors
- [ ] ✅ Homepage loads correctly
- [ ] ✅ `/team` page loads correctly
- [ ] ✅ `/team/tim-jacobs` page loads correctly (CRITICAL)
- [ ] ✅ Google Rich Results Test passes with zero errors
- [ ] ✅ Schema.org Validator shows valid schemas
- [ ] ✅ Canonical URL points to custom domain
- [ ] ✅ All @id references use custom domain

---

**Document Version**: 1.0  
**Last Updated**: January 15, 2025  
**Status**: ⏳ Ready for domain connection  
**Project**: g2-middle-east  
**Current URL**: https://3e41fa5b.g2-middle-east-zuj.pages.dev  
**Target URL**: https://g2middleeast.com

---

*This guide provides complete instructions for connecting your custom domain to the Cloudflare Pages deployment containing Tim Jacobs' 10/10 optimized profile.*
