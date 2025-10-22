# Domain Transfer Checklist: g2middleeast.com → Cloudflare

## Current Status
- **Domain:** g2middleeast.com
- **Current Registrar:** Domain.com
- **Target:** Cloudflare
- **Authorization Code:** ✅ Available
- **Cloudflare Account:** Tim@ktsglobal.live's Account

## Phase 1: Add Domain to Cloudflare ⏳
- [ ] Go to https://dash.cloudflare.com/
- [ ] Click "Add a Site"
- [ ] Enter "g2middleeast.com"
- [ ] Select Free Plan
- [ ] Review DNS records scan
- [ ] Note down Cloudflare nameservers

## Phase 2: Update Nameservers at Domain.com ⏳
- [ ] Login to Domain.com account
- [ ] Navigate to Domain Management → g2middleeast.com
- [ ] Go to DNS & Nameservers settings
- [ ] Update to Cloudflare nameservers
- [ ] Save changes
- [ ] Wait 24-48 hours for propagation

## Phase 3: Configure DNS Records ⏳
- [ ] Add CNAME: @ → g2-middle-east-zuj.pages.dev (Proxied)
- [ ] Add CNAME: www → g2middleeast.com (Proxied)
- [ ] Verify DNS propagation: `dig g2middleeast.com`

## Phase 4: Add Custom Domain to Pages ⏳
- [ ] Dashboard → Pages → g2-middle-east
- [ ] Custom domains tab
- [ ] Add: g2middleeast.com
- [ ] Add: www.g2middleeast.com
- [ ] Wait for SSL certificate (10-30 min)

## Phase 5: Test Website ⏳
- [ ] Visit: https://g2middleeast.com
- [ ] Visit: https://www.g2middleeast.com
- [ ] Check SSL certificate (green padlock)
- [ ] Test all pages and navigation
- [ ] Verify project content loads correctly

## Phase 6: Optional - Transfer Registration ⏳
- [ ] Dashboard → Domain Registration → Transfer Domains
- [ ] Enter: g2middleeast.com
- [ ] Input authorization code
- [ ] Review pricing (~$9.77/year)
- [ ] Authorize via email
- [ ] Wait 5-7 days for completion

## Verification Commands

### Check Nameservers:
```bash
dig NS g2middleeast.com +short
```

### Check DNS Records:
```bash
dig g2middleeast.com +short
dig www.g2middleeast.com +short
```

### Test Website:
```bash
curl -I https://g2middleeast.com
curl -I https://www.g2middleeast.com
```

## Production URLs
- **Current Cloudflare Pages:** https://cc6a4869.g2-middle-east-zuj.pages.dev
- **Target Custom Domain:** https://g2middleeast.com
- **Target WWW Domain:** https://www.g2middleeast.com

## Important Notes
1. Keep authorization code secure until transfer completes
2. Nameserver changes take 24-48 hours to propagate globally
3. SSL certificate generation takes 10-30 minutes
4. Domain transfer takes 5-7 days to complete
5. Website will work on Cloudflare nameservers before transfer completes

## Support Resources
- Cloudflare Dashboard: https://dash.cloudflare.com/
- Cloudflare Docs: https://developers.cloudflare.com/pages/
- Domain Transfer Guide: https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/

---
**Last Updated:** 2025-01-21
**Project:** G2 Middle East Website
**Cloudflare Project:** g2-middle-east
