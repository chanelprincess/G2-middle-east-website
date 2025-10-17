# 🚀 Start Here: Email Service Configuration

## Quick Start (3 Steps, 10 Minutes)

This is your starting point for configuring and testing the email notification system.

---

## 📋 Step 1: Get Your API Key (5 minutes)

### Go to Resend and Sign Up
**URL:** https://resend.com/signup

1. Enter your email
2. Create password
3. Verify your email
4. **No credit card needed!**

### Create API Key
After signup, you'll be taken to the dashboard:

1. Click **"API Keys"** in sidebar (or go to https://resend.com/api-keys)
2. Click the **"Create API Key"** button
3. Name it: `G2 Middle East Development`
4. Leave permission as: `Sending access`
5. Click **"Add"**

### Copy Your Key
**IMPORTANT:** You'll see something like:
```
re_AbCdEfGh_1234567890abcdefghijklmnop
```

**Copy it NOW** - you can only see it once!

---

## ⚙️ Step 2: Configure Local Environment (2 minutes)

### Open Terminal and Run:

```bash
cd /home/user/webapp

# Edit the configuration file
nano .dev.vars
```

### Update These Two Lines:

Find these lines:
```bash
EMAIL_SERVICE=resend
EMAIL_API_KEY=re_placeholder_get_real_key_from_resend
```

Replace with your actual key:
```bash
EMAIL_SERVICE=resend
EMAIL_API_KEY=re_AbCdEfGh_1234567890abcdefghijklmnop
```

### Save and Exit:
- Press `Ctrl+X`
- Press `Y` to confirm
- Press `Enter` to save

---

## 🧪 Step 3: Run the Test (3 minutes)

### Run Automated Test Script:

```bash
cd /home/user/webapp
./test-email.sh
```

### What Happens:
1. Script validates your configuration ✅
2. Restarts development server ✅
3. Asks for YOUR email address (so you can verify emails arrive)
4. Registers a test user ✅
5. Sends two emails:
   - ✉️ To you: Registration confirmation
   - ✉️ To tim@ktsglobal.live: Admin notification
6. Approves the test user ✅
7. Sends approval email to you ✉️
8. Shows results ✅

### Expected Output:

```
🧪 G2 Middle East - Email Service Test
========================================

✅ Configuration validated

🔄 Step 1: Restarting development server...
✅ Server restarted

🔍 Step 2: Verifying server is running...
✅ Server is running

📝 Step 3: Registering test user...
✅ User registered successfully
   Username: testuser1729175234
   Email: YOUR_EMAIL@example.com

📧 Step 4: Checking email notification logs...
✅ Emails sent successfully!

Emails sent:
✅ Email sent via Resend to: tim@ktsglobal.live
✅ Email sent via Resend to: YOUR_EMAIL@example.com

🎉 SUCCESS! Check your email inbox:
   - YOUR_EMAIL@example.com
   - tim@ktsglobal.live
```

---

## ✅ Verify Success

### Check Your Email Inbox

You should receive **TWO** emails:

**Email 1: Registration Confirmation**
- Subject: "Registration Received - G2 Middle East"
- Dark theme with gold accents
- Explains approval process

**Email 2: Access Approved**
- Subject: "Access Approved - G2 Middle East White Papers"
- Login button
- Welcome message

### Check Admin Email (tim@ktsglobal.live)

Should receive **ONE** email:
- Subject: "New White Paper Access Request"
- User details (name, company, etc.)
- One-click "Approve User Access" button

---

## 🎯 What If Something Goes Wrong?

### "Domain not verified" Error

**This is normal for new Resend accounts!**

**Quick Fix:**
1. Go to: https://resend.com/domains
2. Click "Verify single sender"
3. Add YOUR email address
4. Verify it
5. Run test script again

Now emails will be sent TO your verified email address for testing.

### "401 Unauthorized" Error

**Your API key might be wrong.**

**Fix:**
```bash
# Check your .dev.vars file
cd /home/user/webapp
cat .dev.vars

# Make sure API key is correct with no extra spaces
# If wrong, run step 2 again with correct key
```

### No Emails Received

**Checklist:**
1. ✅ Check spam/junk folder (development emails often go there)
2. ✅ Verify API key is correct: `cat .dev.vars`
3. ✅ Check logs: `pm2 logs g2-middle-east`
4. ✅ Verify Resend account is active

---

## 📚 Need More Help?

### Detailed Guides Available:

1. **EMAIL_CONFIGURATION_GUIDE.md**
   - Complete walkthrough with screenshots
   - Troubleshooting section
   - Manual testing steps

2. **QUICK_EMAIL_TEST.md**
   - Fast testing without automation
   - Step-by-step commands
   - Expected outputs

3. **EMAIL_SETUP.md**
   - Provider comparison (Resend vs SendGrid vs Mailgun)
   - Domain verification instructions
   - Production deployment guide

### Get Help:
- **Resend Docs:** https://resend.com/docs
- **Resend Discord:** https://resend.com/discord
- **Resend Support:** support@resend.com

---

## 🎉 Success! What's Next?

### After emails are working:

1. **Test the complete user flow:**
   ```bash
   # Open in browser:
   http://localhost:3000/whitepapers/login
   
   # Login with:
   Username: (shown in test script output)
   Password: test123
   ```

2. **View admin dashboard:**
   ```bash
   # Open in browser:
   http://localhost:3000/admin/users
   
   # Login with:
   Username: admin
   Password: admin123
   ```

3. **Set up R2 for PDF storage:**
   - Upload actual whitepaper PDFs
   - Configure download endpoint
   - Test file downloads

4. **Deploy to production:**
   - Set Cloudflare secrets
   - Deploy to Cloudflare Pages
   - Verify production emails work

---

## ⚡ TL;DR (Too Long; Didn't Read)

```bash
# 1. Get API key from https://resend.com/api-keys
# 2. Add it to .dev.vars:
cd /home/user/webapp
nano .dev.vars
# Replace: EMAIL_API_KEY=re_placeholder_get_real_key_from_resend
# With: EMAIL_API_KEY=re_your_actual_key

# 3. Run test:
./test-email.sh

# 4. Check your email inbox!
```

---

**Ready?** Follow the steps above starting with Step 1! 🚀

**Estimated time:** 10 minutes from start to finish
**Difficulty:** Easy
**Cost:** Free (Resend free tier: 3,000 emails/month)
