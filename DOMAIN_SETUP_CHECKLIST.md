# Domain Verification Setup - Interactive Checklist

## 🎯 Goal
Set up domain verification for `g2middleeast.com` to enable email sending from `noreply@g2middleeast.com`

---

## ⏱️ Time Required
- **Setup:** 10-15 minutes
- **DNS Propagation:** 1-48 hours (typically 2-6 hours)
- **Total:** ~2-6 hours to full functionality

---

## 📋 Pre-Setup Questions

Before we begin, answer these questions:

### 1. Do you have access to g2middleeast.com DNS settings?
- [ ] **Yes** → Continue with Option 1 (Domain Verification)
- [ ] **No** → Use Option 2 (Verify Personal Email - see below)
- [ ] **Not sure** → Check who manages your domain (usually hosting provider)

### 2. Who is your DNS provider?
- [ ] Cloudflare
- [ ] GoDaddy
- [ ] Namecheap
- [ ] Amazon Route 53
- [ ] Google Domains
- [ ] Other: _______________

### 3. What's your priority?
- [ ] **Production-ready ASAP** → Option 1 (Full domain verification)
- [ ] **Quick testing today** → Option 2 (Verify personal email)

---

## ✅ OPTION 1: Full Domain Verification (Production Ready)

### Phase 1: Add Domain to Resend (5 minutes)

#### Step 1.1: Access Resend Domains
- [ ] Open browser
- [ ] Go to: https://resend.com/domains
- [ ] Log in with your Resend account
- [ ] You should see the Resend dashboard

#### Step 1.2: Add Your Domain
- [ ] Click **"Add Domain"** button (usually blue, top right)
- [ ] In the popup, enter: `g2middleeast.com`
- [ ] Click **"Add"** or **"Continue"**

#### Step 1.3: Get DNS Records
After adding the domain, Resend will show you 3 DNS records. 

**✍️ Write down or screenshot these records:**

**Record 1 - SPF (TXT Record):**
```
Type: TXT
Name: @ (or leave empty)
Value: [COPY FROM RESEND - starts with "v=spf1"]

Example: v=spf1 include:_spf.resend.com ~all
```
- [ ] Copied SPF record value

**Record 2 - DKIM (TXT Record):**
```
Type: TXT
Name: resend._domainkey
Value: [COPY FROM RESEND - long string starting with "p="]

Example: p=MIGfMA0GCSqGSIb3DQEBA...
```
- [ ] Copied DKIM record name
- [ ] Copied DKIM record value

**Record 3 - DMARC (TXT Record):**
```
Type: TXT
Name: _dmarc
Value: [COPY FROM RESEND - starts with "v=DMARC1"]

Example: v=DMARC1; p=none; rua=mailto:dmarc@resend.com
```
- [ ] Copied DMARC record value

**💡 Tip:** Keep this Resend tab open - you'll need to come back to verify!

---

### Phase 2: Add DNS Records (5-10 minutes)

Choose your DNS provider and follow the specific instructions:

#### Option A: Cloudflare DNS

1. **Access DNS Settings:**
   - [ ] Go to: https://dash.cloudflare.com
   - [ ] Select your domain: `g2middleeast.com`
   - [ ] Click **"DNS"** in the left menu
   - [ ] Click **"Records"** tab

2. **Add SPF Record:**
   - [ ] Click **"Add record"** button
   - [ ] Type: Select **"TXT"**
   - [ ] Name: Enter **"@"** (or leave as root)
   - [ ] Content: Paste SPF value from Resend
   - [ ] TTL: Select **"Auto"** (or 3600)
   - [ ] Proxy status: **Gray cloud** (DNS only)
   - [ ] Click **"Save"**

3. **Add DKIM Record:**
   - [ ] Click **"Add record"** button
   - [ ] Type: Select **"TXT"**
   - [ ] Name: Enter **"resend._domainkey"**
   - [ ] Content: Paste DKIM value from Resend
   - [ ] TTL: Select **"Auto"** (or 3600)
   - [ ] Proxy status: **Gray cloud** (DNS only)
   - [ ] Click **"Save"**

4. **Add DMARC Record:**
   - [ ] Click **"Add record"** button
   - [ ] Type: Select **"TXT"**
   - [ ] Name: Enter **"_dmarc"**
   - [ ] Content: Paste DMARC value from Resend
   - [ ] TTL: Select **"Auto"** (or 3600)
   - [ ] Proxy status: **Gray cloud** (DNS only)
   - [ ] Click **"Save"**

---

#### Option B: GoDaddy DNS

1. **Access DNS Settings:**
   - [ ] Go to: https://account.godaddy.com
   - [ ] Navigate to **"My Products"**
   - [ ] Find `g2middleeast.com`
   - [ ] Click **"DNS"** button

2. **Add Each Record:**
   - [ ] Click **"Add"** button (bottom of DNS records)
   - [ ] **For SPF:**
     - Type: **TXT**
     - Name: **@**
     - Value: [Paste SPF from Resend]
     - TTL: **1 Hour**
   - [ ] Click **"Save"**
   - [ ] Repeat for DKIM and DMARC (use names from Resend)

---

#### Option C: Namecheap DNS

1. **Access DNS Settings:**
   - [ ] Go to: https://www.namecheap.com
   - [ ] Navigate to **"Domain List"**
   - [ ] Click **"Manage"** next to g2middleeast.com
   - [ ] Click **"Advanced DNS"** tab

2. **Add Each Record:**
   - [ ] Click **"Add New Record"**
   - [ ] **For SPF:**
     - Type: **TXT Record**
     - Host: **@**
     - Value: [Paste SPF from Resend]
     - TTL: **Automatic**
   - [ ] Click checkmark to save
   - [ ] Repeat for DKIM and DMARC

---

#### Option D: Other DNS Provider

**General Steps:**
1. [ ] Log into your DNS provider's control panel
2. [ ] Find DNS management section
3. [ ] Look for "Add Record", "Add DNS Record", or similar button
4. [ ] For each of the 3 records from Resend:
   - [ ] Choose record type: **TXT**
   - [ ] Enter the **Name/Host** value
   - [ ] Enter the **Value/Content**
   - [ ] Set TTL to **3600** (1 hour) or **Auto**
   - [ ] Save the record
5. [ ] Confirm all 3 records are added

---

### Phase 3: Verify Domain in Resend (1-2 minutes)

#### Step 3.1: Return to Resend
- [ ] Go back to Resend domains page: https://resend.com/domains
- [ ] Find your domain: `g2middleeast.com`
- [ ] Click **"Verify"** or **"Check Verification"** button

#### Step 3.2: Check Status
You'll see one of these messages:

**✅ Success: "Domain Verified"**
- [ ] All records verified
- [ ] Domain is ready to use
- [ ] Skip to Phase 4: Testing

**⏳ Pending: "DNS records not found"**
- [ ] This is normal! DNS takes time to propagate
- [ ] Wait 15-30 minutes
- [ ] Try clicking "Verify" again
- [ ] If still pending, wait longer (up to 48 hours, usually 2-6 hours)

**❌ Error: Specific record failed**
- [ ] Check which record failed
- [ ] Verify you copied it correctly
- [ ] Double-check Name and Value in DNS provider
- [ ] Fix the record and try again

---

### Phase 4: Test Email Sending (2 minutes)

#### Step 4.1: Wait for Verification
- [ ] Domain status shows **"Verified"** in Resend dashboard
- [ ] All 3 records show green checkmarks

#### Step 4.2: Run Test Script
```bash
cd /home/user/webapp
./test-email.sh
```

- [ ] Script runs successfully
- [ ] Logs show: `✅ Email sent via Resend to: [email]`
- [ ] No 403 domain verification errors

#### Step 4.3: Check Email Inbox
- [ ] Check your test email inbox
- [ ] Check tim@ktsglobal.live inbox
- [ ] Emails received successfully
- [ ] From address shows: `noreply@g2middleeast.com`
- [ ] Emails not in spam folder (or marked not spam)

---

### Phase 5: Confirm Production Ready (1 minute)

- [ ] Domain verified in Resend
- [ ] Test emails sent successfully
- [ ] Test emails received
- [ ] No errors in logs
- [ ] System is 100% operational! 🎉

---

## ✅ OPTION 2: Quick Testing with Verified Email (5 Minutes)

**Use this if you need to test immediately or don't have DNS access.**

### Step 2.1: Verify Your Personal Email in Resend

1. **Go to Resend Domains:**
   - [ ] Visit: https://resend.com/domains
   - [ ] Look for **"Single Sender Verification"** or **"Verified Senders"**
   - [ ] Click **"Add Email"** or similar

2. **Add Your Email:**
   - [ ] Enter your personal email (e.g., your.name@gmail.com)
   - [ ] Click **"Send Verification"**
   - [ ] Check your email inbox
   - [ ] Click verification link in email
   - [ ] Return to Resend - email should show as verified

3. **Update Code to Use Verified Email:**
   ```bash
   cd /home/user/webapp
   nano src/utils/email.ts
   ```
   
   - [ ] Find line ~30: `const fromEmail = params.from || 'noreply@g2middleeast.com'`
   - [ ] Change to: `const fromEmail = params.from || 'your.verified@email.com'`
   - [ ] Save file (Ctrl+X, Y, Enter)

4. **Rebuild and Test:**
   ```bash
   npm run build
   pm2 restart g2-middle-east
   sleep 3
   ./test-email.sh
   ```
   
   - [ ] Test completes successfully
   - [ ] Emails sent from your verified email
   - [ ] Emails received successfully

**Note:** This is for testing only. For production, use Option 1 (full domain verification).

---

## 🔍 Verification Troubleshooting

### DNS Records Not Verifying After 1+ Hours

**Check DNS Propagation:**
```bash
# Check if records are visible globally
# Visit: https://dnschecker.org

# Enter your domain: g2middleeast.com
# Select record type: TXT
# Check if Resend records appear
```

**Common Issues:**
- [ ] **Wrong Name Field:**
  - SPF should be: `@` or empty (root domain)
  - DKIM should be: `resend._domainkey` (exact)
  - DMARC should be: `_dmarc` (exact)

- [ ] **Extra Characters:**
  - [ ] No quotes around TXT values (some providers add automatically)
  - [ ] No trailing dots in Name field
  - [ ] No extra spaces in Value field

- [ ] **TTL Too High:**
  - [ ] Change TTL to 3600 (1 hour) or lower
  - [ ] This speeds up propagation

### Emails Going to Spam

**This is normal initially!**

**To improve deliverability:**
- [ ] Complete domain verification (all 3 records)
- [ ] Send a few test emails first
- [ ] Ask recipients to mark as "Not Spam"
- [ ] Build sender reputation gradually
- [ ] For production, consider SPF, DKIM alignment

### 403 Error Persists After Verification

**Solutions:**
- [ ] Refresh Resend dashboard
- [ ] Check domain shows "Verified" status
- [ ] Restart your development server
- [ ] Clear any caching in your application
- [ ] Wait 5-10 minutes after verification

---

## 📞 Need Help?

### Still Stuck?

**Resend Support:**
- Email: support@resend.com
- Discord: https://resend.com/discord
- Docs: https://resend.com/docs

**DNS Provider Support:**
- Cloudflare: https://support.cloudflare.com
- GoDaddy: https://www.godaddy.com/help
- Namecheap: https://www.namecheap.com/support

**DNS Tools:**
- DNS Checker: https://dnschecker.org
- MX Toolbox: https://mxtoolbox.com
- DNS Propagation: https://www.whatsmydns.net

---

## 🎯 Quick Decision Guide

**Choose Your Path:**

| Situation | Recommended Option | Time |
|-----------|-------------------|------|
| Have DNS access + Want production setup | Option 1 | 2-6 hours |
| No DNS access OR need to test NOW | Option 2 | 5 minutes |
| DNS records already added | Wait + Verify | 1-48 hours |

---

## ✅ Completion Checklist

Mark when complete:

- [ ] Chose verification option (1 or 2)
- [ ] Completed all steps for chosen option
- [ ] Domain verified (Option 1) OR Email verified (Option 2)
- [ ] Ran test script successfully
- [ ] Received test emails
- [ ] No errors in logs
- [ ] System fully operational
- [ ] Documented completion date: __________

---

**Status:** Ready to proceed!  
**Next Step:** Choose Option 1 or Option 2 above and start checking boxes!

🚀 **Let's get your emails sending!**
