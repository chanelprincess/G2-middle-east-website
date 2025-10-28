# DNS Setup Guide for G2 Middle East (g2middleeast.com)
**Date:** 2025-10-28  
**Project:** g2-middle-east  
**Current Pages URL:** https://g2-middle-east-zuj.pages.dev  
**Target Domain:** g2middleeast.com

---

## Prerequisites

Before starting, ensure you have:
- ✅ Cloudflare account access
- ✅ Domain ownership of `g2middleeast.com`
- ✅ Domain nameservers already pointing to Cloudflare
- ✅ Cloudflare API token (already configured)

---

## Step 1: Add Custom Domain to Cloudflare Pages Project

### Option A: Using Cloudflare Dashboard (RECOMMENDED)

1. **Navigate to Cloudflare Pages:**
   - Go to https://dash.cloudflare.com/
   - Select your account
   - Click on **Workers & Pages** in the left sidebar
   - Click on your **g2-middle-east** project

2. **Add Custom Domain:**
   - Click on the **Custom domains** tab
   - Click **Set up a custom domain**
   - Enter your domain: `g2middleeast.com`
   - Click **Continue**

3. **Choose Root Domain or Subdomain:**
   - **For root domain (g2middleeast.com):**
     - Select "Set up g2middleeast.com"
   - **For www subdomain (www.g2middleeast.com):**
     - Select "Set up www.g2middleeast.com"
   - **RECOMMENDED:** Set up BOTH and configure one to redirect to the other

4. **Cloudflare will provide DNS instructions:**
   - You'll see specific DNS records to add
   - Usually a CNAME record pointing to your Pages deployment

### Option B: Using Wrangler CLI

Since the CLI approach has changed, here's the manual command approach:

```bash
# Unfortunately, wrangler doesn't support adding domains via CLI in the current version
# You must use the Cloudflare Dashboard
```

---

## Step 2: Configure DNS Records

### For Root Domain (g2middleeast.com)

Cloudflare Pages requires specific DNS setup:

#### **Method 1: CNAME Flattening (Recommended by Cloudflare)**

Add these DNS records in your Cloudflare DNS settings:

| Type | Name | Content | Proxy Status | TTL |
|------|------|---------|--------------|-----|
| CNAME | @ | g2-middle-east-zuj.pages.dev | Proxied (Orange Cloud) | Auto |
| CNAME | www | g2-middle-east-zuj.pages.dev | Proxied (Orange Cloud) | Auto |

**Important:** Cloudflare automatically flattens the CNAME at the root (@) to work properly.

#### **Method 2: A Records (Alternative)**

If CNAME doesn't work, Cloudflare may provide specific IP addresses:

| Type | Name | Content | Proxy Status | TTL |
|------|------|---------|--------------|-----|
| A | @ | [Cloudflare IP 1] | Proxied | Auto |
| A | @ | [Cloudflare IP 2] | Proxied | Auto |
| CNAME | www | g2-middle-east-zuj.pages.dev | Proxied | Auto |

**Note:** Cloudflare will provide the exact IP addresses in the Pages dashboard.

---

## Step 3: Add DNS Records via Cloudflare Dashboard

### Using Cloudflare Dashboard:

1. **Go to DNS Management:**
   - Log in to https://dash.cloudflare.com/
   - Select your account
   - Click on `g2middleeast.com` domain
   - Click on **DNS** → **Records**

2. **Add CNAME Record for Root:**
   - Click **Add record**
   - Type: `CNAME`
   - Name: `@` (represents root domain)
   - Target: `g2-middle-east-zuj.pages.dev`
   - Proxy status: **Proxied** (orange cloud)
   - TTL: Auto
   - Click **Save**

3. **Add CNAME Record for WWW:**
   - Click **Add record**
   - Type: `CNAME`
   - Name: `www`
   - Target: `g2-middle-east-zuj.pages.dev`
   - Proxy status: **Proxied** (orange cloud)
   - TTL: Auto
   - Click **Save**

---

## Step 4: Configure Page Rules (Optional but Recommended)

To ensure www redirects to non-www (or vice versa):

1. **Go to Rules:**
   - In Cloudflare dashboard for `g2middleeast.com`
   - Click on **Rules** → **Page Rules**

2. **Create WWW → Non-WWW Redirect:**
   - URL: `www.g2middleeast.com/*`
   - Setting: **Forwarding URL**
   - Status Code: `301 - Permanent Redirect`
   - Destination URL: `https://g2middleeast.com/$1`
   - Click **Save and Deploy**

**OR**

2. **Create Non-WWW → WWW Redirect:**
   - URL: `g2middleeast.com/*`
   - Setting: **Forwarding URL**
   - Status Code: `301 - Permanent Redirect`
   - Destination URL: `https://www.g2middleeast.com/$1`
   - Click **Save and Deploy**

---

## Step 5: Verify DNS Propagation

### Check DNS Records:

```bash
# Check root domain
dig g2middleeast.com

# Check www subdomain
dig www.g2middleeast.com

# Check with Cloudflare DNS specifically
dig @1.1.1.1 g2middleeast.com
dig @1.1.1.1 www.g2middleeast.com
```

### Expected Results:

For **CNAME** setup:
```
g2middleeast.com.    300    IN    CNAME    g2-middle-east-zuj.pages.dev.
www.g2middleeast.com.    300    IN    CNAME    g2-middle-east-zuj.pages.dev.
```

### DNS Propagation Time:

- **Cloudflare Network:** Immediate (seconds)
- **Global Propagation:** 5-30 minutes typically
- **Full Propagation:** Up to 48 hours (rare)

---

## Step 6: Configure SSL/TLS Settings

1. **Go to SSL/TLS Settings:**
   - Cloudflare dashboard → `g2middleeast.com`
   - Click on **SSL/TLS**

2. **Set Encryption Mode:**
   - Choose **Full (strict)** for best security
   - This ensures end-to-end encryption

3. **Enable Always Use HTTPS:**
   - Go to **SSL/TLS** → **Edge Certificates**
   - Enable **Always Use HTTPS**
   - This forces HTTP → HTTPS redirect

4. **Enable HTTP Strict Transport Security (HSTS):**
   - Same page as above
   - Enable HSTS
   - Max Age: 6 months (15768000 seconds)
   - Include subdomains: Yes
   - Preload: Yes (optional but recommended)

---

## Step 7: Update Website Configuration

Once DNS is working, update your code to use the custom domain:

### Update Meta Tags:

**Files to update:**
- `src/renderer.tsx` - Update default canonical URLs
- `src/index.tsx` - Update OG URLs
- All schema.org markup - Update URLs from pages.dev to g2middleeast.com

**Example changes:**

```typescript
// OLD
canonicalUrl: 'https://c1751602.g2-middle-east-zuj.pages.dev'

// NEW
canonicalUrl: 'https://g2middleeast.com'
```

### Update Schema.org URLs:

Search and replace across all files:
```bash
# Find all references to pages.dev URLs
cd /home/user/webapp
grep -r "pages.dev" src/

# Replace with new domain
# This should be done carefully for each schema
```

---

## Step 8: Verification Checklist

After setup, verify everything works:

### DNS Verification:
- [ ] `g2middleeast.com` resolves to Cloudflare
- [ ] `www.g2middleeast.com` resolves to Cloudflare
- [ ] DNS records are proxied (orange cloud)

### SSL/TLS Verification:
- [ ] HTTPS works on `https://g2middleeast.com`
- [ ] HTTPS works on `https://www.g2middleeast.com`
- [ ] SSL certificate is valid (Cloudflare issued)
- [ ] HTTP automatically redirects to HTTPS

### Redirect Verification:
- [ ] WWW redirects to non-WWW (or vice versa)
- [ ] Old pages.dev URL still works (for backup)

### Website Verification:
- [ ] Homepage loads correctly
- [ ] All pages load without errors
- [ ] Images and assets load correctly
- [ ] Forms and interactive elements work

### SEO Verification:
- [ ] Canonical tags point to new domain
- [ ] Schema.org URLs updated
- [ ] Sitemap URLs updated
- [ ] robots.txt accessible at new domain

---

## Step 9: Update External Services

After DNS is live, update these services:

### Google Services:
1. **Google Search Console:**
   - Add `https://g2middleeast.com` as new property
   - Submit updated sitemap
   - Set up 301 redirects from old domain (if applicable)

2. **Google Analytics:**
   - Update property settings to new domain
   - Update any domain filters

### Social Media:
- Update Facebook Open Graph debugger
- Update Twitter Card validator
- Update LinkedIn post inspector

### Other Services:
- Update any third-party integrations
- Update email signatures with new domain
- Update business cards and marketing materials

---

## Troubleshooting

### Issue: DNS Not Resolving

**Symptoms:** Domain doesn't resolve or shows errors

**Solutions:**
1. Check nameservers are pointed to Cloudflare
2. Verify DNS records are correct
3. Wait 5-30 minutes for propagation
4. Clear DNS cache: `sudo systemd-resolve --flush-caches` (Linux)

### Issue: SSL Certificate Error

**Symptoms:** Browser shows "Not Secure" warning

**Solutions:**
1. Wait 15 minutes for certificate provisioning
2. Check SSL/TLS mode is set to "Full (strict)"
3. Disable "Always Use HTTPS" temporarily, then re-enable

### Issue: Redirect Loop

**Symptoms:** Page keeps redirecting infinitely

**Solutions:**
1. Check Page Rules aren't conflicting
2. Ensure only ONE redirect rule (www → non-www OR non-www → www)
3. Check Cloudflare SSL/TLS settings

### Issue: Mixed Content Warnings

**Symptoms:** Some resources load over HTTP

**Solutions:**
1. Update all asset URLs to use HTTPS
2. Enable "Automatic HTTPS Rewrites" in Cloudflare
3. Check third-party scripts and CDN URLs

---

## Expected Timeline

| Task | Time Required |
|------|--------------|
| Add custom domain to Pages | 2 minutes |
| Configure DNS records | 5 minutes |
| DNS propagation | 5-30 minutes |
| SSL certificate provisioning | 15 minutes |
| Setup page rules | 5 minutes |
| Update code references | 30 minutes |
| Testing and verification | 15 minutes |
| **Total** | **~1-2 hours** |

---

## Command Reference

### Useful DNS Commands:

```bash
# Check DNS resolution
dig g2middleeast.com
dig www.g2middleeast.com

# Check DNS with specific nameserver
dig @1.1.1.1 g2middleeast.com

# Check DNS propagation globally
# Use online tool: https://dnschecker.org/

# Flush local DNS cache (if needed)
# macOS:
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux:
sudo systemd-resolve --flush-caches

# Windows:
ipconfig /flushdns
```

### Useful SSL Commands:

```bash
# Test SSL certificate
openssl s_client -connect g2middleeast.com:443 -servername g2middleeast.com

# Check SSL expiry
echo | openssl s_client -servername g2middleeast.com -connect g2middleeast.com:443 2>/dev/null | openssl x509 -noout -dates
```

---

## Security Best Practices

1. **Enable DNSSEC:**
   - Cloudflare → DNS → Settings → Enable DNSSEC
   - Follow instructions to add DS records at registrar

2. **Enable CAA Records:**
   - Prevents unauthorized certificate issuance
   - Add CAA record: `0 issue "pki.goog"` (for Cloudflare)

3. **Configure Security Headers:**
   - Set up via Cloudflare Transform Rules
   - Add: X-Content-Type-Options, X-Frame-Options, etc.

4. **Enable Bot Fight Mode:**
   - Cloudflare → Security → Bots
   - Enable to protect against automated attacks

---

## Post-Setup Optimization

### Performance:
- Enable **Auto Minify** (HTML, CSS, JS)
- Enable **Brotli** compression
- Set **Browser Cache TTL** appropriately

### Caching:
- Configure **Cache Rules** for static assets
- Set **Edge Cache TTL** for better performance

### Analytics:
- Enable **Cloudflare Web Analytics**
- Monitor traffic patterns
- Track performance metrics

---

## Support Resources

### Cloudflare Documentation:
- Pages Custom Domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
- DNS Records: https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/
- SSL/TLS Settings: https://developers.cloudflare.com/ssl/

### Tools:
- DNS Checker: https://dnschecker.org/
- SSL Test: https://www.ssllabs.com/ssltest/
- Google Rich Results Test: https://search.google.com/test/rich-results

---

## Summary

Once you complete these steps:

✅ Your website will be accessible at `https://g2middleeast.com`  
✅ SSL/TLS encryption will be automatic  
✅ WWW will redirect to non-WWW (or vice versa)  
✅ All SEO and schema.org markup will point to new domain  
✅ DNS will be optimized with Cloudflare's global network  

**Estimated Total Time:** 1-2 hours (including propagation)

**Next Steps After DNS Setup:**
1. Update all code references to new domain
2. Submit new sitemap to Google Search Console
3. Update social media metadata debuggers
4. Monitor DNS propagation and SSL provisioning

---

**Need Help?** Contact Cloudflare Support or refer to their documentation at https://developers.cloudflare.com/

**Status:** 🟡 PENDING - Requires manual setup via Cloudflare Dashboard

---

**END OF DNS SETUP GUIDE**
