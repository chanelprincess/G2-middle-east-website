# Resend Domain Verification Guide

## Current Status

✅ **Email API Key:** Configured and working  
❌ **Domain Verification:** Required  
⚠️ **Error:** "The g2middleeast.com domain is not verified"

---

## What Happened

Your Resend API key is working correctly! However, Resend requires domain verification before sending emails FROM `noreply@g2middleeast.com`.

**Error seen in logs:**
```
Resend API error: {
  "statusCode": 403,
  "message": "The g2middleeast.com domain is not verified. 
              Please, add and verify your domain on https://resend.com/domains",
  "name": "validation_error"
}
```

This is a **standard security requirement** for all email services to prevent spam.

---

## Quick Solutions

### Option 1: Verify Domain (Recommended for Production)

**Time Required:** 5-10 minutes setup + 24-48 hours DNS propagation

#### Step 1: Add Domain to Resend

1. Go to: **https://resend.com/domains**
2. Click **"Add Domain"**
3. Enter: `g2middleeast.com`
4. Click **"Add"**

#### Step 2: Add DNS Records

Resend will show you 3 DNS records to add. They'll look like this:

**SPF Record (TXT)**
```
Type: TXT
Name: @
Value: v=spf1 include:amazonses.com include:_spf.resend.com ~all
```

**DKIM Record (TXT)**
```
Type: TXT  
Name: resend._domainkey
Value: p=MIGfMA0GCSqGSIb3... (long string)
```

**DMARC Record (TXT)**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@resend.com
```

#### Step 3: Add to Your DNS Provider

**Where to add DNS records:**
- If using Cloudflare: Dashboard → DNS → Add Record
- If using GoDaddy: Domain settings → DNS Management
- If using Namecheap: Domain list → Manage → Advanced DNS
- Other providers: Look for "DNS Management" or "DNS Settings"

**How to add:**
1. Copy the **Type**, **Name**, and **Value** from Resend
2. Add each record to your DNS provider
3. Save changes

#### Step 4: Verify in Resend

1. Return to Resend domains page
2. Click **"Verify Records"**
3. Wait for DNS propagation (can take up to 48 hours)
4. Check verification status

#### Step 5: Test

Once verified:
```bash
cd /home/user/webapp
./test-email.sh
```

---

### Option 2: Use Verified Email for Testing (Quick - 5 Minutes)

**Perfect for immediate testing without waiting for DNS!**

#### Step 1: Verify Your Personal Email

1. Go to: **https://resend.com/domains**
2. Click **"Verify Single Sender"** (or similar option)
3. Enter your personal email (e.g., your.name@gmail.com)
4. Click the verification link sent to your email
5. Your email is now verified!

#### Step 2: Update Email Configuration

Since we can't send FROM unverified domains, we need to update the "from" address temporarily:

```bash
cd /home/user/webapp
nano src/utils/email.ts
```

Find this line (around line 30):
```typescript
const fromEmail = params.from || 'noreply@g2middleeast.com'
```

Change to your verified email:
```typescript
const fromEmail = params.from || 'your.verified.email@gmail.com'
```

Save and rebuild:
```bash
cd /home/user/webapp
npm run build
pm2 restart g2-middle-east
```

#### Step 3: Test

```bash
./test-email.sh
```

**Note:** Emails will now come FROM your verified email instead of `noreply@g2middleeast.com`. This is fine for testing!

---

### Option 3: Use Resend Test Mode (Development Only)

Resend may have a test/sandbox mode. Check their dashboard for:
- Test API keys
- Sandbox domains
- Development mode settings

---

## Production Checklist

Before production deployment:

- [ ] Domain added to Resend
- [ ] SPF record added to DNS
- [ ] DKIM record added to DNS  
- [ ] DMARC record added to DNS
- [ ] DNS propagation complete (24-48 hours)
- [ ] Domain verified in Resend dashboard
- [ ] Test email sent successfully
- [ ] Email received without spam warnings

---

## Understanding DNS Records

### SPF (Sender Policy Framework)
- Tells email servers which servers can send email from your domain
- Prevents email spoofing
- Required for email delivery

### DKIM (DomainKeys Identified Mail)
- Adds digital signature to emails
- Proves emails actually came from your domain
- Improves deliverability

### DMARC (Domain-based Message Authentication)
- Policy for handling failed SPF/DKIM checks
- Provides reporting on email authentication
- Prevents email fraud

---

## Verification Timeline

| Step | Time |
|------|------|
| Add domain to Resend | 1 minute |
| Get DNS records | Instant |
| Add to DNS provider | 5 minutes |
| DNS propagation | 1-48 hours |
| Resend verification check | 1 minute |
| **Total** | **~24 hours typically** |

---

## Troubleshooting

### DNS Records Not Verifying

**Check:**
1. Wait longer (DNS can take up to 48 hours)
2. Verify records were added correctly (no extra spaces)
3. Check with DNS checker: https://dnschecker.org
4. Ensure using correct subdomain (@, _dmarc, resend._domainkey)

### Still Getting 403 Error

**Solutions:**
1. Check domain verification status in Resend dashboard
2. Wait for DNS propagation
3. Use verified single sender email (Option 2)
4. Contact Resend support: support@resend.com

### Emails Going to Spam

**After verification:**
- Build sender reputation gradually
- Don't send too many emails at once
- Ensure content isn't spammy
- Monitor bounce rates

---

## Alternative: Use SendGrid Instead

If domain verification is blocked or taking too long:

### Switch to SendGrid

**Advantages:**
- Has "Single Sender Verification" (no domain needed)
- Can start sending immediately  
- Free tier available

**How to switch:**
```bash
cd /home/user/webapp
nano .dev.vars
```

Change:
```bash
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=SG.your_sendgrid_key_here
```

**Get SendGrid key:**
1. Sign up: https://signup.sendgrid.com
2. Settings → API Keys → Create API Key
3. Copy key (starts with SG.)
4. Settings → Sender Authentication → Verify Single Sender
5. Verify your email
6. Start sending!

---

## Current Workaround for Testing

While waiting for domain verification, you can:

1. **Use console logging** (already working)
   - Registration and approval workflow work
   - Emails logged to PM2 logs
   - Can see what would be sent

2. **Verify your personal email** in Resend
   - Update from address to verified email
   - Send to any address for testing
   - Proves integration works

3. **Test locally** with approval workflow
   - System works end-to-end
   - Database updates correctly
   - Only email sending blocked

---

## Contact Support

### Resend Support
- **Email:** support@resend.com
- **Discord:** https://resend.com/discord
- **Docs:** https://resend.com/docs/send-with-api

### DNS Help
- **Cloudflare Support:** https://support.cloudflare.com
- **DNS Checker:** https://dnschecker.org
- **MX Toolbox:** https://mxtoolbox.com

---

## Summary

**Current Status:**
- ✅ Email service integration: **Working**
- ✅ API key configuration: **Working**  
- ✅ Email templates: **Ready**
- ✅ Registration workflow: **Working**
- ✅ Database integration: **Working**
- ❌ Email sending: **Blocked** (domain verification required)

**Next Step:**
Choose Option 1 (domain verification) or Option 2 (verified single sender) above.

**Estimated time to resolution:**
- Option 1: 24-48 hours (DNS propagation)
- Option 2: 5 minutes (immediate testing)

---

**Need help?** Contact Resend support or see the troubleshooting section above!
