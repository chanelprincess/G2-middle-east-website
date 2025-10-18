# Email Setup - Quick Start Guide

## 🎯 Current Status
- ✅ Resend API Key: Configured
- ✅ Email Code: Working
- ✅ Templates: Ready
- ⏳ Domain: Needs Verification

## 🚀 Start Here

### Choose Your Path:

**Option A: Full Setup (Production Ready)**
- Time: 10 min setup + 2-6 hours DNS wait
- Result: Production email from noreply@g2middleeast.com
- File: `DOMAIN_SETUP_CHECKLIST.md`

**Option B: Quick Test (Immediate)**
- Time: 5 minutes
- Result: Test emails work right now
- File: `DOMAIN_SETUP_CHECKLIST.md` → Option 2

## 📋 Option A: Full Domain Setup

### Step 1: Add Domain (2 min)
1. Go to: https://resend.com/domains
2. Click "Add Domain"
3. Enter: `g2middleeast.com`
4. Get 3 DNS records (SPF, DKIM, DMARC)

### Step 2: Add DNS Records (5 min)
**Your DNS Provider:** [Choose from list in checklist]

**3 Records to Add:**
```
1. TXT @ [SPF value from Resend]
2. TXT resend._domainkey [DKIM value from Resend]
3. TXT _dmarc [DMARC value from Resend]
```

### Step 3: Verify (1 min + wait)
1. Return to Resend domains page
2. Click "Verify"
3. Wait for DNS propagation (1-6 hours typically)
4. Check again until verified

### Step 4: Test (2 min)
```bash
cd /home/user/webapp
./test-email.sh
```

✅ **Done!** Emails now send from noreply@g2middleeast.com

---

## 📋 Option B: Quick Email Test

### Step 1: Verify Personal Email (3 min)
1. Go to: https://resend.com/domains
2. Find "Single Sender Verification"
3. Add your email address
4. Click verification link in your inbox

### Step 2: Update Code (1 min)
```bash
cd /home/user/webapp
nano src/utils/email.ts
```

Change line ~30 from:
```typescript
const fromEmail = params.from || 'noreply@g2middleeast.com'
```

To:
```typescript
const fromEmail = params.from || 'your.verified@email.com'
```

Save: Ctrl+X, Y, Enter

### Step 3: Test (1 min)
```bash
npm run build
pm2 restart g2-middle-east
./test-email.sh
```

✅ **Done!** Emails work immediately for testing!

---

## 🔍 What You'll See

### Success Logs:
```
✅ Email sent via Resend to: tim@ktsglobal.live
✅ Email sent via Resend to: user@example.com
```

### Error (Before Verification):
```
❌ Resend API error: Domain not verified
```

---

## 📞 Quick Help

### DNS Not Verifying?
- Wait longer (can take up to 48 hours)
- Check: https://dnschecker.org
- Verify no typos in DNS records

### Still Getting 403 Error?
- Domain must show "Verified" in Resend
- Restart server after verification
- Check `.dev.vars` has correct API key

### Emails to Spam?
- Normal initially!
- Mark as "Not Spam"
- Will improve over time

---

## 📁 All Documentation

1. **START_HERE.md** - Original setup guide
2. **DOMAIN_SETUP_CHECKLIST.md** ⭐ - Step-by-step checklist
3. **DOMAIN_VERIFICATION_GUIDE.md** - Detailed technical guide
4. **EMAIL_SETUP.md** - Provider comparison
5. **EMAIL_TEST_RESULTS.md** - What we tested

---

## ✅ Quick Checklist

- [ ] Read this file
- [ ] Choose Option A or B
- [ ] Follow steps in DOMAIN_SETUP_CHECKLIST.md
- [ ] Test with `./test-email.sh`
- [ ] Confirm emails received
- [ ] System 100% operational!

---

**Ready?** Open `DOMAIN_SETUP_CHECKLIST.md` and start checking boxes! 🚀

---

## 🎯 Expected Timeline

| Option | Setup Time | Wait Time | Total |
|--------|-----------|-----------|-------|
| A (Full) | 10 min | 2-6 hours | ~6 hours |
| B (Test) | 5 min | None | 5 min |

**Recommendation:** Start with Option B for immediate testing, then do Option A for production.

---

**Need help?** Everything is documented in DOMAIN_SETUP_CHECKLIST.md!
