# Email Service Configuration & Testing Guide

## Overview

This guide walks you through configuring and testing the email notification system for the G2 Middle East white paper gated section.

**Time Required:** 10-15 minutes  
**Difficulty:** Easy  
**Prerequisites:** None (we'll guide you through everything)

---

## Part 1: Get Your Email Service API Key

### Recommended: Resend (Best for Cloudflare Workers)

#### Step 1: Sign Up
1. Go to: **https://resend.com/signup**
2. Sign up with your email address
3. Verify your email
4. No credit card required for free tier

#### Step 2: Create API Key
1. After login, go to: **https://resend.com/api-keys**
2. Click **"Create API Key"** button
3. Fill in details:
   - **Name:** `G2 Middle East Development`
   - **Permission:** `Sending access`
4. Click **"Add"**
5. **IMPORTANT:** Copy the API key immediately (starts with `re_`)
   - It will look like: `re_abcdefgh12345678...`
   - You can only see it once!

#### Step 3: Save Your API Key
- Paste it somewhere safe temporarily (you'll add it to the project next)

### Alternative: SendGrid

If you prefer SendGrid:

1. Sign up: **https://signup.sendgrid.com/**
2. Verify email and complete onboarding
3. Go to: **Settings → API Keys**
4. Create new API key with "Mail Send" permission
5. Copy key (starts with `SG.`)

---

## Part 2: Configure Local Environment

### Option A: Use the Helper Script (Easiest)

```bash
cd /home/user/webapp

# Edit .dev.vars file
nano .dev.vars
```

**Replace the placeholder with your actual API key:**

```bash
# For Resend:
EMAIL_SERVICE=resend
EMAIL_API_KEY=re_your_actual_key_here_from_step_2

# Or for SendGrid:
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=SG.your_actual_key_here_from_step_2
```

**Save and exit:**
- Press `Ctrl + X`
- Press `Y` (yes to save)
- Press `Enter`

### Option B: Use Echo Command (Quick)

```bash
cd /home/user/webapp

# For Resend (replace with your actual key):
cat > .dev.vars << 'EOF'
EMAIL_SERVICE=resend
EMAIL_API_KEY=re_your_actual_key_here
EOF

# Or for SendGrid (replace with your actual key):
cat > .dev.vars << 'EOF'
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=SG.your_actual_key_here
EOF
```

### Verify Configuration

```bash
# Check file was created (should show your API key)
cat .dev.vars
```

---

## Part 3: Run Automated Test

We've created an automated test script that handles everything:

```bash
cd /home/user/webapp

# Run the test script
./test-email.sh
```

**The script will:**
1. ✅ Validate your configuration
2. ✅ Restart the development server
3. ✅ Register a test user
4. ✅ Send registration emails
5. ✅ Approve the user
6. ✅ Send approval email
7. ✅ Show you the results

**You'll be prompted to enter YOUR email address** so you can verify the emails arrive in your inbox.

---

## Part 4: Manual Testing (Alternative)

If you prefer to test manually:

### 4.1: Restart Server

```bash
cd /home/user/webapp

# Stop and restart with new env vars
pm2 stop g2-middle-east
pm2 start ecosystem.config.cjs

# Wait for startup
sleep 3

# Verify running
curl http://localhost:3000/whitepapers/login | grep "Login"
```

### 4.2: Register Test User

```bash
# Replace YOUR_EMAIL@example.com with your actual email
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "full_name=Test User" \
  -d "company=Test Company" \
  -d "job_title=Tester" \
  -d "email=YOUR_EMAIL@example.com" \
  -d "username=testuser123" \
  -d "password=test123" \
  -d "confirm_password=test123" \
  -i
```

**Expected Response:**
```
HTTP/1.1 302 Found
Location: /whitepapers/pending
```

### 4.3: Check Email Logs

```bash
pm2 logs g2-middle-east --nostream --lines 30 | grep -A5 "Email"
```

**Success looks like:**
```
✅ Email sent via Resend to: tim@ktsglobal.live
✅ Email sent via Resend to: YOUR_EMAIL@example.com
```

### 4.4: Check Your Inbox

**Two emails should arrive:**

1. **To: YOUR_EMAIL@example.com**
   - Subject: "Registration Received - G2 Middle East"
   - Professional dark theme email
   - Explains pending approval

2. **To: tim@ktsglobal.live**
   - Subject: "New White Paper Access Request"
   - User details displayed
   - One-click approval button

### 4.5: Test Approval Email

```bash
# Get the user ID
npx wrangler d1 execute webapp-production --local \
  --command="SELECT id, username FROM users WHERE username='testuser123'"

# Note the ID (e.g., 5), then approve:
curl -X POST http://localhost:3000/api/admin/users/approve/5 \
  -H "Cookie: auth_session=$(echo -n '{"userId":1,"username":"admin","timestamp":'$(date +%s)'000}' | base64)" \
  -i

# Check logs
pm2 logs g2-middle-east --nostream --lines 20 | grep "Email"
```

**Another email should arrive:**
- **To: YOUR_EMAIL@example.com**
- **Subject:** "Access Approved - G2 Middle East White Papers"
- Login button and instructions

---

## Part 5: Verify Complete Workflow

### Test the Full User Journey

1. **Open browser and go to:**
   ```
   http://localhost:3000/whitepapers/login
   ```

2. **Login with test credentials:**
   - Username: `testuser123`
   - Password: `test123`

3. **You should see:**
   - Three sample whitepapers
   - Download buttons
   - Your name displayed in header

4. **Click download button:**
   - Download should be tracked
   - Placeholder page shows (R2 integration pending)

---

## Troubleshooting

### Issue: "Domain not verified" Error

**This is common for new accounts!**

**Quick Solutions:**

**Option 1: Verify Your Email in Resend**
1. Go to https://resend.com/domains
2. Click "Verify single sender"
3. Add your email address
4. You can now send TO that email for testing

**Option 2: Verify Domain (Proper Solution)**
1. Go to https://resend.com/domains
2. Click "Add Domain"
3. Enter: `g2middleeast.com`
4. Add DNS records shown to your domain registrar:
   - SPF record (TXT)
   - DKIM record (TXT)
   - DMARC record (TXT)
5. Click "Verify"
6. Wait for DNS propagation (can take up to 48 hours)

**For Testing Only:**
- Use Resend's test mode
- Or send to your verified personal email
- Both admin and user emails will be sent to verified addresses

### Issue: 401 Unauthorized

**Causes:**
- API key is incorrect
- Extra spaces in .dev.vars file
- API key expired or revoked

**Solution:**
```bash
# Check your .dev.vars file
cat .dev.vars

# Verify no extra spaces
# Regenerate API key if needed
```

### Issue: No Emails Received

**Checklist:**
1. ✅ Check spam/junk folder
2. ✅ Verify API key is correct
3. ✅ Check PM2 logs for errors: `pm2 logs g2-middle-east`
4. ✅ Verify email service status page
5. ✅ Check domain verification status

### Issue: Emails Go to Spam

**For Development:** This is normal!
- Emails sent from development often flagged
- Check spam folder

**For Production:**
- Must verify domain with SPF/DKIM/DMARC
- Use proper sending domain (noreply@g2middleeast.com)
- Build sender reputation over time

---

## Success Checklist

After completing this guide, you should have:

- ✅ Resend account created
- ✅ API key obtained and configured
- ✅ `.dev.vars` file updated
- ✅ Development server restarted
- ✅ Test user registered
- ✅ Two emails received (registration confirmation + admin notification)
- ✅ Test user approved
- ✅ Approval email received
- ✅ Test login successful
- ✅ Download tracking working

---

## What's Next?

### For Production Deployment:

1. **Set Production Secrets:**
   ```bash
   npx wrangler pages secret put EMAIL_SERVICE --project-name webapp
   npx wrangler pages secret put EMAIL_API_KEY --project-name webapp
   ```

2. **Verify Domain:**
   - Add g2middleeast.com to Resend
   - Configure DNS records
   - Wait for verification

3. **Test in Production:**
   - Deploy to Cloudflare Pages
   - Register test user
   - Verify emails arrive

### For R2 Storage:

After email is working, next step is:
- Set up R2 bucket for PDF storage
- Upload whitepaper PDFs
- Configure download endpoint

---

## Support

### Resend Support
- Docs: https://resend.com/docs
- Discord: https://resend.com/discord
- Email: support@resend.com

### SendGrid Support
- Docs: https://docs.sendgrid.com
- Support: https://support.sendgrid.com

### Check Service Status
- Resend: https://resend.com/status
- SendGrid: https://status.sendgrid.com

---

## Quick Reference

### Important Files
- `.dev.vars` - Local environment variables (gitignored)
- `test-email.sh` - Automated test script
- `EMAIL_SETUP.md` - Detailed provider setup
- `QUICK_EMAIL_TEST.md` - Quick test guide

### Useful Commands
```bash
# View logs
pm2 logs g2-middle-east

# Restart server
pm2 restart g2-middle-east

# Check database
npx wrangler d1 execute webapp-production --local \
  --command="SELECT * FROM users"

# Run test script
./test-email.sh
```

---

**Ready to start?** Begin with Part 1 above! 🚀
