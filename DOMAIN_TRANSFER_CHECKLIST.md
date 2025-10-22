# Domain Transfer Checklist: g2middleeast.com → Cloudflare

## Current Status
- **Domain:** g2middleeast.com
- **Current Registrar:** Domain.com → Cloudflare (Transfer in progress)
- **Authorization Code:** ✅ Used
- **Cloudflare Account:** Tim@ktsglobal.live's Account
- **Transfer Status:** 🟢 ACTIVE - Domain reaching Cloudflare servers
- **DNS Propagation:** ✅ COMPLETE - Domain resolving to Cloudflare IPs
- **Next Step:** Add custom domain to Cloudflare Pages

## Phase 1: Add Domain to Cloudflare ✅
- [x] Go to https://dash.cloudflare.com/
- [x] Click "Add a Site"
- [x] Enter "g2middleeast.com"
- [x] Select Free Plan
- [x] Review DNS records scan
- [x] Note down Cloudflare nameservers

## Phase 2: Update Nameservers at Domain.com ✅
- [x] Login to Domain.com account
- [x] Navigate to Domain Management → g2middleeast.com
- [x] Go to DNS & Nameservers settings
- [x] Update to Cloudflare nameservers
- [x] Save changes
- [x] Wait 24-48 hours for propagation → **COMPLETE!**

## Phase 3: Configure DNS Records ✅
- [x] DNS is now resolving to Cloudflare IPs
- [x] Domain reaching Cloudflare servers (104.26.2.38, 104.26.3.38, 172.67.74.236)
- [x] SSL handshake working
- **Status:** DNS fully propagated and working!

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
