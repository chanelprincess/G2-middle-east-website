# Domain Transfer Guide: g2middleeast.com → Cloudflare

**Date Started:** 2025-10-19  
**Domain:** g2middleeast.com  
**From:** Domain.com  
**To:** Cloudflare Registrar

---

## ✅ **Why Transferring to Cloudflare**

### Cost Savings
- **Domain Registration:** $8.86/year (vs Domain.com ~$15.99/year)
- **SSL Certificate:** FREE (vs Domain.com $99.95/year)
- **Annual Savings:** ~$107/year
- **3-Year Savings:** ~$321

### Benefits
- ✅ Free automatic SSL certificates (no manual CSR/validation)
- ✅ Integrated management (domain + DNS + SSL + CDN in one place)
- ✅ No coordination between registrar and DNS provider
- ✅ Developer-friendly with full API access
- ✅ DDoS protection and security included

### Email Independence
- ✅ Using Google Workspace for email (completely separate)
- ✅ No email disruption during transfer
- ✅ MX records already in Cloudflare DNS

---

## 📋 **Step 1: Domain.com - Request Authorization Code**

### Current Dialog
You're seeing: "Request Authorization code" with options:
- "I'll do it myself" → Setup Host Records
- "I need more help" → Chat With An Expert

### ⚠️ Important Decision

**DO NOT click "Setup Host Records"** - This is unnecessary because:
1. Your DNS is already managed by Cloudflare (nameservers already pointed)
2. All DNS records are already configured in Cloudflare
3. Host records are only needed if using Domain.com DNS

### ✅ What to Do

**Click: "Continue With Transfer"** (bottom right button)

This will:
1. Show you the authorization/EPP code
2. Allow you to copy the code
3. Proceed with the transfer without changing DNS

**The authorization code dialog is just informing you about optional DNS setup help - you can ignore it since DNS is already configured.**

---

## 📋 **Step 2: Get Authorization Code**

After clicking "Continue With Transfer":

1. **Copy the Authorization Code**
   - It will look something like: `Ab12Cd34Ef56`
   - Copy it to clipboard
   - Save it somewhere safe (you'll need it for Cloudflare)

2. **Verify Domain is Unlocked**
   - Domain lock should be disabled
   - Transfer lock should be off
   - If not, Domain.com will guide you to unlock it

3. **Verify Admin Email Access**
   - Make sure you can access the admin email for the domain
   - Transfer approval email will be sent there

---

## 📋 **Step 3: Cloudflare - Initiate Transfer**

Once you have the authorization code:

### 3.1 Go to Cloudflare Registrar
**URL:** https://dash.cloudflare.com/sign-up/registrar

Or:
1. Log in to Cloudflare Dashboard: https://dash.cloudflare.com
2. Select domain: g2middleeast.com
3. Go to **Domain Registration** tab
4. Click **"Transfer Domain"**

### 3.2 Enter Domain Details
1. **Domain Name:** g2middleeast.com
2. **Authorization Code:** [Paste the code from Domain.com]
3. Click **"Continue"**

### 3.3 Review Transfer Details
- **Domain:** g2middleeast.com
- **Cost:** $8.86 (includes 1-year renewal)
- **Current Registrar:** Domain.com
- **Transfer Timeline:** 5-7 days
- Click **"Confirm Transfer"**

### 3.4 Payment
- Add payment method (credit card)
- Pay $8.86 transfer fee
- This includes 1-year domain renewal

---

## 📧 **Step 4: Approve Transfer via Email**

### Within 1-2 Hours
You'll receive an email at your domain admin email:

**Subject:** "Transfer of g2middleeast.com - Action Required"

**Email Content:**
- Transfer request details
- Approval link
- Cancellation option

**Action Required:**
1. Open the email
2. Click **"Approve Transfer"** link
3. Confirm on the web page

### Domain.com Confirmation
Domain.com may also send a release confirmation:
- They might ask you to confirm the transfer out
- Approve any Domain.com release requests

---

## ⏱️ **Step 5: Wait for Transfer Completion**

### Timeline
- **Day 0:** Transfer initiated and approved
- **Day 1-2:** Domain.com releases domain
- **Day 3-5:** Transfer processes
- **Day 5-7:** Transfer completes automatically

### What Happens During Transfer
- ✅ Domain remains fully functional (no downtime)
- ✅ DNS records stay active (managed by Cloudflare)
- ✅ Website continues working (no interruption)
- ✅ Email continues working (Google Workspace)
- ✅ All services remain operational

### Transfer Status Check
**Cloudflare Dashboard:**
1. Log in to https://dash.cloudflare.com
2. Go to **Domain Registration** → **Transfer Status**
3. Monitor transfer progress

---

## 🎉 **Step 6: After Transfer Completes**

### Automatic Actions (Cloudflare Handles)
- ✅ Domain registration extended by 1 year
- ✅ Free Universal SSL certificate activated automatically
- ✅ All DNS records preserved and active
- ✅ Cloudflare becomes registrar of record

### Manual Actions Required

#### 6.1 Enable Free SSL Certificates
Since DNS is already on Cloudflare, free SSL is already active, but verify:

1. Go to Cloudflare Dashboard → g2middleeast.com
2. Navigate to **SSL/TLS** → **Edge Certificates**
3. Verify **Universal SSL** is active (should show "Active" status)

#### 6.2 Change SSL Mode to Full (Strict)
Now you can use Cloudflare's Origin CA certificate (free):

**Option A: Use Cloudflare Origin CA Certificate (Recommended)**

1. **Create Origin Certificate:**
   ```bash
   # In Cloudflare Dashboard:
   SSL/TLS → Origin Server → Create Certificate
   ```
   
2. **Download:**
   - Origin Certificate (.pem)
   - Private Key (.key)
   
3. **Install on Domain.com Server:**
   - Upload via cPanel SSL/TLS Manager
   - Or contact Domain.com support for installation
   
4. **Change SSL Mode:**
   ```bash
   # After origin certificate installed:
   curl -X PATCH "https://api.cloudflare.com/client/v4/zones/3680b593a0877c78cf613968aa3f2351/settings/ssl" \
     -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
     -H "Content-Type: application/json" \
     --data '{"value":"strict"}'
   ```

**Option B: Cancel Domain.com SSL (Save $99.95)**

Since you now have free Cloudflare SSL:
1. Contact Domain.com to cancel Order #408458756
2. Request refund if possible
3. Use Cloudflare Origin CA certificate instead (free, auto-renewing)

#### 6.3 Update Domain Auto-Renewal
1. Go to Cloudflare Dashboard → Domain Registration
2. Enable **Auto-Renewal** for g2middleeast.com
3. Cloudflare will auto-renew at cost price ($8.86/year)

#### 6.4 Re-enable WHOIS Privacy
If you disabled it for transfer:
1. Cloudflare Dashboard → Domain Registration
2. Enable **WHOIS Privacy Protection** (free)
3. Your personal info will be redacted

---

## 🔐 **DNS Records Verification**

### Current DNS Records (Already in Cloudflare)

Your DNS is already configured and won't change during transfer:

#### A Records
- **@** (root) → 209.17.116.163 (Domain.com hosting)
- **www** → 209.17.116.163 (Domain.com hosting)

#### MX Records (Google Workspace)
- Priority 1: smtp.google.com
- Priority 10: feedback-smtp.ap-northeast-1.amazonses.com

#### CNAME Records
- **_438e4ac31dc0c2ea7d52cf07d300e310** → sectigo.com (SSL validation - can delete after transfer)

#### Other Records
- Various verification records (Google, etc.)

**Action:** No changes needed - all records stay active during and after transfer

---

## 💡 **What About Domain.com SSL Certificate?**

### Current Status
- Order #408458756 (Domain.com Premium SSL - $99.95/year)
- Status: Pending validation (~10+ hours)
- Not yet installed

### Recommendation After Transfer

**Option 1: Cancel Domain.com SSL (Recommended)**
- Contact Domain.com support
- Cancel Order #408458756
- Request refund (not yet delivered)
- Use Cloudflare free SSL instead
- **Saves:** $99.95/year

**Option 2: Complete Domain.com SSL**
- Wait for certificate issuance
- Install on origin server
- Use until expiration
- Switch to Cloudflare Origin CA after expiration
- **Cost:** $99.95 (already paid)

**My Recommendation:** Cancel Domain.com SSL and use Cloudflare's free solution:
- ✅ Free forever
- ✅ Auto-renewing (no manual CSR/validation)
- ✅ 15-year validity
- ✅ Same security level
- ✅ Better integration

---

## 🆘 **Troubleshooting**

### Transfer Delays
**If transfer takes longer than 7 days:**
1. Check Cloudflare Dashboard for transfer status
2. Check email for pending approvals
3. Contact Cloudflare support if stuck

### Transfer Rejection
**If Domain.com rejects transfer:**
1. Verify domain is unlocked
2. Check WHOIS privacy is disabled
3. Verify authorization code is correct
4. Contact Domain.com to release domain

### DNS Issues
**If website stops working during transfer:**
1. DNS should remain active (managed by Cloudflare)
2. Check Cloudflare DNS records are still configured
3. Verify nameservers are still pointing to Cloudflare
4. Contact Cloudflare support if DNS stops resolving

### Email Issues
**If Google Workspace email stops working:**
1. Verify MX records in Cloudflare DNS
2. Check Google Workspace admin console
3. MX records should not change during transfer
4. Contact Google Workspace support if needed

---

## 📞 **Support Contacts**

### Cloudflare Support
- **Dashboard:** https://dash.cloudflare.com
- **Support:** https://support.cloudflare.com
- **Community:** https://community.cloudflare.com

### Domain.com Support
- **For:** Authorization code, unlock domain, transfer release
- **Phone:** Check Domain.com website
- **Chat:** Available in Domain.com dashboard

### Google Workspace Support
- **For:** Email issues during/after transfer
- **Admin Console:** https://admin.google.com
- **Support:** https://support.google.com/a

---

## ✅ **Transfer Checklist**

### Pre-Transfer (Domain.com)
- [ ] Unlock domain
- [ ] Get authorization/EPP code
- [ ] Disable WHOIS privacy temporarily
- [ ] Verify admin email access

### Initiate Transfer (Cloudflare)
- [ ] Go to Cloudflare Registrar
- [ ] Enter domain and auth code
- [ ] Pay $8.86 transfer fee
- [ ] Confirm transfer request

### Approve Transfer (Email)
- [ ] Check admin email for approval link
- [ ] Click "Approve Transfer"
- [ ] Confirm any Domain.com release requests

### Wait for Completion (5-7 Days)
- [ ] Monitor transfer status in Cloudflare
- [ ] Verify website remains accessible
- [ ] Verify email continues working

### Post-Transfer (Cloudflare)
- [ ] Verify free Universal SSL is active
- [ ] Create Cloudflare Origin CA certificate
- [ ] Install origin certificate on Domain.com server
- [ ] Change SSL mode to "Full (Strict)"
- [ ] Enable domain auto-renewal
- [ ] Re-enable WHOIS privacy
- [ ] Cancel Domain.com SSL (optional, save $99.95)

---

## 🎯 **Expected Timeline**

| Day | Activity | Status |
|-----|----------|--------|
| **Day 0** | Get auth code from Domain.com | ⏳ In Progress |
| **Day 0** | Initiate transfer at Cloudflare | ⏳ Pending auth code |
| **Day 0-1** | Approve transfer via email | ⏳ Awaiting |
| **Day 1-2** | Domain.com releases domain | ⏳ Automatic |
| **Day 3-5** | Transfer processing | ⏳ Automatic |
| **Day 5-7** | Transfer completes | ⏳ Automatic |
| **Day 7+** | Setup Cloudflare Origin CA | ⏳ Manual action |
| **Day 7+** | Change SSL mode to Full (Strict) | ⏳ Manual action |

**Total Time:** 5-7 days for transfer + 1 hour for post-transfer setup

---

## 💰 **Cost Summary**

### One-Time Transfer Cost
- **Cloudflare Transfer Fee:** $8.86 (includes 1-year renewal)
- **Total:** $8.86

### Annual Costs Comparison

| Service | Domain.com | Cloudflare | Savings |
|---------|------------|------------|---------|
| Domain Registration | $15.99 | $8.86 | $7.13 |
| SSL Certificate | $99.95 | $0 (Free) | $99.95 |
| **Annual Total** | **$115.94** | **$8.86** | **$107.08** |

### Long-Term Savings
- **Year 1:** Save $107.08
- **Year 2:** Save $107.08
- **Year 3:** Save $107.08
- **3-Year Total Savings:** $321.24

---

**Last Updated:** 2025-10-19 01:45 UTC  
**Status:** Awaiting authorization code from Domain.com  
**Next Step:** Copy auth code and proceed to Cloudflare
