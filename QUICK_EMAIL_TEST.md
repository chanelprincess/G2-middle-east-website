# Quick Email Service Test Guide

## Step 1: Get Resend API Key (5 minutes)

### Option A: Use Resend (Recommended)

1. **Sign up for Resend:**
   - Go to: https://resend.com/signup
   - Sign up with your email (free account)
   - No credit card required

2. **Create API Key:**
   - After signup, go to: https://resend.com/api-keys
   - Click "Create API Key"
   - Name: "G2 Middle East Development"
   - Permissions: "Sending access"
   - Click "Add"
   - Copy the API key (starts with `re_`)

3. **Important:** The API key is shown only once - copy it immediately!

### Option B: Use SendGrid (Alternative)

1. **Sign up for SendGrid:**
   - Go to: https://signup.sendgrid.com/
   - Complete registration (free account)
   - Verify your email

2. **Create API Key:**
   - Go to: https://app.sendgrid.com/settings/api_keys
   - Click "Create API Key"
   - Name: "G2 Middle East Development"
   - Permissions: "Full Access" or "Mail Send"
   - Click "Create & View"
   - Copy the API key (starts with `SG.`)

## Step 2: Configure Local Environment

1. **Edit `.dev.vars` file:**
   ```bash
   cd /home/user/webapp
   nano .dev.vars
   ```

2. **Update with your API key:**
   
   **For Resend:**
   ```bash
   EMAIL_SERVICE=resend
   EMAIL_API_KEY=re_your_actual_api_key_here
   ```
   
   **For SendGrid:**
   ```bash
   EMAIL_SERVICE=sendgrid
   EMAIL_API_KEY=SG.your_actual_api_key_here
   ```

3. **Save and exit:**
   - Press `Ctrl+X`
   - Press `Y` to confirm
   - Press `Enter`

## Step 3: Restart Development Server

```bash
cd /home/user/webapp

# Stop current service
pm2 stop g2-middle-east

# Start with new environment variables
pm2 start ecosystem.config.cjs

# Wait for startup
sleep 3

# Verify service is running
curl -s http://localhost:3000/whitepapers/login | grep -o "Login" | head -1
```

## Step 4: Test Email Workflow

### Test 1: Register a New User

```bash
# Register with YOUR email address so you can verify it arrives
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "full_name=Test User" \
  -d "company=Test Company" \
  -d "job_title=Tester" \
  -d "email=YOUR_EMAIL_HERE@example.com" \
  -d "username=testuser1" \
  -d "password=test123" \
  -d "confirm_password=test123" \
  -i
```

**Expected Result:**
- Response: `302 Found` redirect to `/whitepapers/pending`
- Check console logs for email confirmation

### Test 2: Check PM2 Logs for Email Status

```bash
pm2 logs g2-middle-east --nostream --lines 30 | grep -A5 "Email"
```

**Expected Output (Success):**
```
✅ Email sent via Resend to: tim@ktsglobal.live
✅ Email sent via Resend to: YOUR_EMAIL_HERE@example.com
```

**Expected Output (Error - Need to verify domain):**
```
Resend API error: Domain not verified
```

### Test 3: Check Your Email Inbox

1. **Check tim@ktsglobal.live inbox** (or admin email):
   - Subject: "New White Paper Access Request"
   - Contains user details
   - Contains approval link

2. **Check YOUR email inbox:**
   - Subject: "Registration Received - G2 Middle East"
   - Welcome message
   - Explains pending approval status

### Test 4: Approve User and Test Approval Email

```bash
# First, get the user ID from database
npx wrangler d1 execute webapp-production --local \
  --command="SELECT id, username, email FROM users WHERE username='testuser1'"

# Approve the user (replace USER_ID with actual ID from above)
curl -X POST http://localhost:3000/api/admin/users/approve/USER_ID \
  -H "Cookie: auth_session=$(echo -n '{"userId":1,"username":"admin","timestamp":'$(date +%s)'000}' | base64)" \
  -i

# Check logs
pm2 logs g2-middle-east --nostream --lines 20 | grep -A3 "Email"
```

**Expected Result:**
- Email sent to your address
- Subject: "Access Approved - G2 Middle East White Papers"
- Contains login link

## Troubleshooting

### Issue: "Domain not verified" Error

**For Resend:**
Most likely you need to verify your sending domain. Resend free tier has restrictions:

**Quick Fix for Testing:**
1. Resend allows sending TO verified emails without domain verification
2. Go to https://resend.com/domains
3. Add your personal email as a verified recipient
4. Or use Resend's test mode

**Proper Solution:**
1. Add domain: g2middleeast.com to Resend
2. Add DNS records provided by Resend
3. Wait for verification (can take minutes to hours)

**For SendGrid:**
1. Go to Settings > Sender Authentication
2. Complete Single Sender Verification (quick)
3. Or Authenticate Domain (proper, takes longer)

### Issue: 401 Unauthorized

**Solution:**
- Check API key is correct in `.dev.vars`
- Ensure no extra spaces before/after key
- Regenerate API key if needed

### Issue: No emails received

**Check:**
1. Spam/junk folder
2. Email provider dashboard for delivery logs
3. PM2 logs for error messages
4. Verify API key has send permissions

### Issue: Emails going to spam

**For testing:** This is normal for development
**For production:** Need proper domain verification with SPF/DKIM/DMARC

## Expected Timeline

- ✅ **Get API Key:** 2-3 minutes
- ✅ **Configure `.dev.vars`:** 1 minute  
- ✅ **Restart server:** 30 seconds
- ✅ **Test registration:** 1 minute
- ✅ **Verify emails:** 1-2 minutes

**Total Time:** ~5-10 minutes

## What Success Looks Like

### 1. PM2 Logs Show:
```
✅ Email sent via Resend to: tim@ktsglobal.live
✅ Email sent via Resend to: test@example.com
```

### 2. Tim's Inbox Receives:
- Professional email with dark theme
- User details clearly displayed
- One-click "Approve User Access" button
- Works on mobile and desktop

### 3. User's Inbox Receives:
- Welcome email after registration
- Approval email after admin approves
- Professional G2 branding
- Clear call-to-action buttons

### 4. Complete User Flow Works:
```
Register → Email confirmation → Admin approval → Email notification → Login → Download
```

## After Successful Testing

Once emails are working:

1. **Document your configuration:**
   ```bash
   echo "✅ Email service configured and tested" >> DEPLOYMENT_STATUS.md
   echo "Provider: Resend" >> DEPLOYMENT_STATUS.md
   echo "Test completed: $(date)" >> DEPLOYMENT_STATUS.md
   ```

2. **Next steps:**
   - Configure R2 bucket for PDF storage
   - Deploy to production
   - Set production secrets with same API key

## Need Help?

### Resend Support
- Documentation: https://resend.com/docs
- Discord: https://resend.com/discord
- Email: support@resend.com

### SendGrid Support
- Documentation: https://docs.sendgrid.com
- Support: https://support.sendgrid.com

### Check Status Pages
- Resend: https://resend.com/status
- SendGrid: https://status.sendgrid.com

---

**Ready to start?** Follow Step 1 above to get your API key! 🚀
