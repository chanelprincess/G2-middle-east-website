# Resend Email Configuration Troubleshooting

**Date:** October 28, 2025  
**Issue:** Emails not being sent from contact form  
**Root Cause:** Domain verification required in Resend

---

## Problem Diagnosis

### Current Configuration
- **Email Service:** Resend API
- **From Email:** `noreply@g2middleeast.com`
- **From Name:** G2 Middle East
- **API Key:** ✅ Configured in Cloudflare Pages secrets
- **Status:** Contact form submits successfully but emails don't send

### Root Cause
**Resend requires domain verification before sending emails from custom domains.**

Currently using: `noreply@g2middleeast.com`  
This domain (`g2middleeast.com`) is **not yet verified** in your Resend account.

---

## Solution Options

### Option 1: Use Resend's Onboarding Domain (Quick Fix - Recommended for Testing)

**Pros:**
- ✅ Works immediately
- ✅ No DNS configuration needed
- ✅ Good for testing and development

**Cons:**
- ⚠️ Uses Resend's domain (`onboarding@resend.dev`)
- ⚠️ Less professional appearance
- ⚠️ May have lower deliverability

**Implementation:**
1. Update the from email in code to use Resend's onboarding domain
2. Rebuild and redeploy

**Code Change Required:**
```typescript
// src/utils/email.ts
const fromEmail = params.from || 'onboarding@resend.dev'  // Changed from noreply@g2middleeast.com
const fromName = 'G2 Middle East'
```

---

### Option 2: Verify g2middleeast.com Domain in Resend (Recommended for Production)

**Pros:**
- ✅ Professional appearance
- ✅ Better deliverability
- ✅ Matches your brand
- ✅ No code changes needed

**Cons:**
- ⚠️ Requires DNS configuration
- ⚠️ Takes 24-48 hours for DNS propagation

**Steps to Verify Domain:**

#### Step 1: Access Resend Dashboard
1. Go to https://resend.com/domains
2. Log in with your Resend account
3. Click "Add Domain"

#### Step 2: Add Domain
1. Enter domain: `g2middleeast.com`
2. Click "Add"
3. Resend will provide DNS records to add

#### Step 3: Add DNS Records to Cloudflare
You'll need to add these DNS records (exact values from Resend):

**SPF Record (TXT):**
```
Type: TXT
Name: @
Content: v=spf1 include:_spf.resend.com ~all
TTL: Auto
```

**DKIM Record (TXT):**
```
Type: TXT
Name: resend._domainkey
Content: [Value provided by Resend - looks like: p=MIGfMA0GCSqGSIb3...]
TTL: Auto
```

**Return-Path Record (CNAME):**
```
Type: CNAME
Name: resend
Content: [Value provided by Resend - looks like: re.resend.com]
TTL: Auto
```

#### Step 4: Verify in Resend
1. Wait 5-10 minutes for DNS propagation
2. Click "Verify Domain" in Resend dashboard
3. Resend will check DNS records
4. Once verified, you can send from `noreply@g2middleeast.com`

---

### Option 3: Use Gmail SMTP (Alternative)

**Pros:**
- ✅ Works with any Gmail account
- ✅ No domain verification needed
- ✅ Reliable delivery

**Cons:**
- ⚠️ Limited to 500 emails/day (free account)
- ⚠️ Requires storing Gmail password as secret
- ⚠️ May show "via gmail.com" in recipient's email

**Not recommended** - Resend is better for production use.

---

## Recommended Action Plan

### Immediate Fix (5 minutes)
**Use Resend's onboarding domain** to get emails working now:

1. Update `src/utils/email.ts`:
```typescript
const fromEmail = params.from || 'onboarding@resend.dev'
```

2. Build and deploy:
```bash
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name g2-middle-east
```

3. Test contact form:
```bash
curl -X POST https://g2middleeast.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "your-email@example.com",
    "message": "Test message"
  }'
```

4. Check your inbox for confirmation email

---

### Production Setup (1-2 hours)

**Verify your domain** for professional emails:

1. **Access Resend Dashboard:**
   - URL: https://resend.com/domains
   - Log in to your account

2. **Add Domain:**
   - Click "Add Domain"
   - Enter: `g2middleeast.com`
   - Copy the DNS records Resend provides

3. **Add DNS Records to Cloudflare:**
   - Go to https://dash.cloudflare.com/
   - Select `g2middleeast.com`
   - Click "DNS" → "Records"
   - Add the SPF, DKIM, and Return-Path records
   - Use "Auto" for TTL
   - Don't proxy these records (DNS only - grey cloud)

4. **Verify Domain:**
   - Wait 10 minutes for DNS propagation
   - Click "Verify Domain" in Resend dashboard
   - Check verification status

5. **Revert Code Change:**
```typescript
// src/utils/email.ts
const fromEmail = params.from || 'noreply@g2middleeast.com'  // Revert to custom domain
```

6. **Rebuild and Deploy:**
```bash
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name g2-middle-east
```

---

## Testing After Fix

### Test Contact Form
```bash
curl -X POST https://g2middleeast.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "YOUR_EMAIL_HERE",
    "company": "Test Company",
    "phone": "+971501234567",
    "subject": "Test",
    "message": "Testing email functionality"
  }'
```

**Expected Result:**
- ✅ API returns success message
- ✅ Email arrives in YOUR_EMAIL_HERE inbox within 1-2 minutes
- ✅ Admin email arrives in tim@ktsglobal.live inbox

---

## Current Resend Account Details

### API Key Location
- **Environment Variable:** `EMAIL_API_KEY`
- **Storage:** Cloudflare Pages secrets
- **Status:** ✅ Configured

### Check API Key Status
```bash
npx wrangler pages secret list --project-name g2-middle-east
```

**Output should show:**
```
- EMAIL_API_KEY: Value Encrypted ✓
- EMAIL_SERVICE: Value Encrypted ✓
```

---

## Common Issues & Solutions

### Issue 1: "Domain not verified" Error

**Symptom:** Email API returns 403 or 422 error about domain verification

**Solution:** 
- Use Option 1 (onboarding domain) temporarily
- Complete Option 2 (domain verification) for production

### Issue 2: Emails Going to Spam

**Symptoms:**
- Emails arrive but in spam folder
- Gmail shows "via resend.dev"

**Solutions:**
1. Verify domain (Option 2)
2. Add DMARC policy:
```
Type: TXT
Name: _dmarc
Content: v=DMARC1; p=none; rua=mailto:dmarc@g2middleeast.com
```
3. Wait for sender reputation to build (7-14 days)

### Issue 3: No Emails Received

**Possible Causes:**
1. API key incorrect → Check Cloudflare secrets
2. Domain not verified → Use onboarding domain or verify domain
3. Rate limit exceeded → Check Resend dashboard for quota
4. Firewall blocking → Check recipient's email filters

**Debugging Steps:**
1. Check Cloudflare Pages logs:
   ```bash
   npx wrangler pages deployment tail --project-name g2-middle-east
   ```

2. Check Resend dashboard:
   - URL: https://resend.com/emails
   - Look for sent emails and delivery status

3. Test with curl and check response

---

## Email Templates Being Used

### 1. Contact Form - Admin Notification
- **To:** tim@ktsglobal.live
- **Subject:** "New Contact Form Submission - [Name]"
- **Content:** Full inquiry details with metadata

### 2. Contact Form - User Confirmation
- **To:** User's email
- **Subject:** "Thank you for contacting G2 Middle East"
- **Content:** Confirmation with 24-hour response promise

### 3. Whitepaper Registration - Admin Alert
- **To:** Admin email
- **Subject:** "New White Paper Access Request"
- **Content:** User details with one-click approval link

### 4. Whitepaper Registration - User Confirmation
- **To:** User's email
- **Subject:** "Registration Received"
- **Content:** Pending approval message

### 5. Whitepaper Approval - User Welcome
- **To:** User's email
- **Subject:** "Access Approved!"
- **Content:** Welcome message with login link

---

## Next Steps

### Immediate (Do Now)
1. ✅ **Choose Option 1 or Option 2** from above
2. ✅ **Implement the chosen solution**
3. ✅ **Test with real email addresses**
4. ✅ **Verify emails arrive in inbox (not spam)**

### Short-Term (This Week)
1. **Monitor email delivery**
   - Check Resend dashboard daily
   - Track bounce rates
   - Monitor spam complaints

2. **Configure DMARC policy**
   - Improves deliverability
   - Protects from spoofing
   - Builds sender reputation

### Long-Term (This Month)
1. **Set up dedicated email domain**
   - Consider using subdomain: `mail.g2middleeast.com`
   - Better organization
   - Separate email infrastructure

2. **Implement email analytics**
   - Track open rates
   - Track click rates
   - Monitor engagement

---

## Support Resources

### Resend Documentation
- **Getting Started:** https://resend.com/docs/introduction
- **Domain Verification:** https://resend.com/docs/dashboard/domains/introduction
- **API Reference:** https://resend.com/docs/api-reference/introduction

### Cloudflare Documentation
- **DNS Management:** https://developers.cloudflare.com/dns/
- **Email Routing:** https://developers.cloudflare.com/email-routing/

### Contact Support
- **Resend Support:** support@resend.com
- **Cloudflare Support:** Via dashboard ticket system

---

## Summary

**Current Status:** ❌ Emails not sending (domain verification issue)

**Quick Fix:** Use `onboarding@resend.dev` from email (5 minutes)

**Production Fix:** Verify `g2middleeast.com` domain in Resend (1-2 hours)

**Priority:** HIGH - Contact form is currently not functional for email notifications

**Recommended Action:** Implement Option 1 immediately, then complete Option 2 for production

---

**Last Updated:** October 28, 2025  
**Status:** Awaiting implementation  
**Next Review:** After fix is deployed and tested
