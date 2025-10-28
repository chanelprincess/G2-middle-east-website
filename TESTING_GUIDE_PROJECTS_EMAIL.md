# Projects Portal Email Integration - Testing Guide
**Created:** October 28, 2025  
**Status:** ✅ DEPLOYED TO PRODUCTION  
**Production URL:** https://g2middleeast.com/projects/register

---

## 🎯 Purpose

This guide provides step-by-step instructions for testing the newly implemented Projects portal email notification system. The integration ensures that both admins and users receive automated emails when someone registers for Projects portal access.

---

## 📋 What Was Implemented

### Email Notifications Added:
1. **Admin Notification** → `tim@ktsglobal.live`
   - Sent immediately when a user registers
   - Contains all registration details (name, company, email, phone, country, industry)
   - Includes approval action link to Projects dashboard

2. **User Confirmation** → Registrant's email address
   - Sent immediately after successful registration
   - Confirms registration was received
   - Explains pending approval status
   - Sets timeline expectations (24-48 hours)
   - Previews access benefits after approval

---

## 🧪 Testing Checklist

### Pre-Test Requirements:
- ✅ Code deployed to production (https://g2middleeast.com)
- ✅ EMAIL_API_KEY secret configured in Cloudflare Pages
- ✅ EMAIL_SERVICE set to 'resend'
- ✅ Admin email verified: tim@ktsglobal.live
- ✅ Using temporary from address: onboarding@resend.dev

---

## 📝 Test Case 1: Complete Registration Flow

### Step 1: Access Registration Page
1. Open browser (incognito/private mode recommended)
2. Navigate to: **https://g2middleeast.com/projects/register**
3. Verify page loads correctly with all form fields

### Step 2: Fill Out Registration Form

Use these **test values** for consistency:

| Field | Test Value |
|-------|------------|
| Full Name | Test User Projects |
| Email Address | **[Use your real email for testing]** |
| Company/Organization | Test Company Inc. |
| Phone Number | +971501234567 |
| Country | United Arab Emirates |
| Industry Sector | Government & Public Affairs |
| Password | Test@1234 |
| Confirm Password | Test@1234 |
| Terms of Service | ✓ Check |
| NDA Agreement | ✓ Check |

**Important:** Use a real email address you can access to verify the user confirmation email.

### Step 3: Submit Form
1. Click "Submit Registration" button
2. Wait for page to load (should show success page)

### Step 4: Verify Success Page
**Expected Result:**
- Green checkmark icon displayed
- Heading: "Registration Successful!"
- Message: "Your account has been created and is pending approval."
- Text: "You will receive an email notification once your account has been approved by our team. This usually takes 24-48 hours."
- Button: "Continue to Login"

**If Error Occurs:**
- Note the error message
- Check browser console for JavaScript errors
- Check Cloudflare Pages logs for backend errors

---

## 📧 Test Case 2: Admin Email Verification

### Check Admin Inbox: tim@ktsglobal.live

**Expected Email:**
- **From:** onboarding@resend.dev (G2 Middle East)
- **Subject:** "New Projects Portal Registration - Test User Projects"
- **Received Within:** 5-30 seconds of form submission

**Email Content Verification:**

✅ **Header Section:**
- Dark background (#1a1a1a)
- Gold text (#d4af37)
- Heading: "New Projects Portal Access Request"

✅ **User Details Box:**
- Name: Test User Projects
- Company: Test Company Inc.
- Email: [your test email]
- Phone: +971501234567
- Country: United Arab Emirates
- Industry: Government & Public Affairs

✅ **Action Button:**
- Gold button with text: "Review Application"
- Links to: https://g2middleeast.com/projects/dashboard

✅ **Footer:**
- Clickable link text for copy/paste

**If Email Not Received:**
1. Check spam/junk folder
2. Wait 5 minutes (possible delay)
3. Check Resend dashboard logs: https://resend.com/emails
4. Verify EMAIL_API_KEY is correctly set in Cloudflare secrets

---

## 📧 Test Case 3: User Email Verification

### Check User Inbox: [Your Test Email]

**Expected Email:**
- **From:** onboarding@resend.dev (G2 Middle East)
- **Subject:** "Registration Received - G2 Middle East Projects Portal"
- **Received Within:** 5-30 seconds of form submission

**Email Content Verification:**

✅ **Header Section:**
- Dark background (#1a1a1a)
- Gold text (#d4af37)
- Heading: "Registration Received"

✅ **Body Content:**
- Personalized greeting: "Dear Test User Projects,"
- Confirmation message: "Thank you for registering for access to the G2 Middle East Projects Portal."
- Pending status: "Your request is currently pending approval."
- Timeline: "This typically takes 24-48 hours."

✅ **Access Benefits List:**
- 42+ confidential project case studies
- Detailed insights on major government events
- Strategic advisory documentation
- Exclusive behind-the-scenes content

✅ **Footer:**
- Professional signature: "Best regards, G2 Middle East Team"

**If Email Not Received:**
1. Check spam/junk folder
2. Verify email address was entered correctly in form
3. Wait 5 minutes (possible delay)
4. Check Resend dashboard logs: https://resend.com/emails

---

## 🗄️ Test Case 4: Database Verification

### Check User Was Created in Database

**Using Cloudflare Dashboard:**
1. Log in to Cloudflare Dashboard
2. Navigate to Workers & Pages → g2-middle-east → D1 database: g2-projects-db
3. Run this query:
   ```sql
   SELECT * FROM projects_users ORDER BY created_at DESC LIMIT 1;
   ```

**Expected Result:**
- New user record with email matching your test
- `is_active` = 0 (pending approval)
- `created_at` timestamp matching registration time
- All fields populated correctly

**Verify Email Token:**
```sql
SELECT * FROM projects_email_verification_tokens 
WHERE user_id = (SELECT id FROM projects_users WHERE email = '[your test email]')
ORDER BY created_at DESC LIMIT 1;
```

**Expected Result:**
- Token record exists
- `expires_at` is 24 hours from `created_at`
- Token is a long random string

---

## 🔧 Test Case 5: Error Handling

### Test Email Failure Doesn't Block Registration

**Scenario:** Even if email sending fails, user registration should complete successfully.

**To Test (Optional):**
1. Temporarily remove EMAIL_API_KEY from Cloudflare secrets
2. Try registering with different test email
3. **Expected:** Success page still shows (registration completes)
4. **Expected:** Console logs error about email failure
5. **Expected:** User still created in database
6. Restore EMAIL_API_KEY after test

**Note:** Don't perform this test unless you understand the implications.

---

## 📊 Success Metrics

### ✅ All Tests Passing:
- [ ] Registration form submits successfully
- [ ] Success page displays correctly
- [ ] Admin receives notification email within 30 seconds
- [ ] User receives confirmation email within 30 seconds
- [ ] Both emails have correct formatting (HTML renders properly)
- [ ] Both emails have correct content (all details match form)
- [ ] User created in database with is_active=0
- [ ] Email verification token created with 24-hour expiry
- [ ] Approval link in admin email points to correct dashboard URL

### ⚠️ If Any Test Fails:
1. Note which specific test failed
2. Check error messages in browser console
3. Check Cloudflare Pages logs (Workers & Pages → g2-middle-east → Logs)
4. Check Resend dashboard logs (https://resend.com/emails)
5. Verify environment variables are set correctly
6. Contact developer with specific failure details

---

## 🔍 Troubleshooting Common Issues

### Issue 1: No Emails Arriving

**Possible Causes:**
- EMAIL_API_KEY not configured in Cloudflare secrets
- Resend API rate limit exceeded
- Recipient email address in spam list
- Resend account issue

**Solutions:**
1. Verify EMAIL_API_KEY in Cloudflare Pages settings
2. Check Resend dashboard for error logs
3. Try with different recipient email
4. Check Resend account status

---

### Issue 2: Emails Arrive in Spam Folder

**Expected Behavior:**
- Currently using `onboarding@resend.dev` (temporary)
- May trigger spam filters until custom domain is verified

**Solution:**
- This is normal for temporary onboarding domain
- Mark as "Not Spam" in your email client
- To fix permanently: verify g2middleeast.com in Resend (see RESEND_TROUBLESHOOTING.md)

---

### Issue 3: Registration Form Fails

**Possible Causes:**
- Frontend validation errors
- Database connection issue
- Server error

**Check:**
1. Browser console for JavaScript errors
2. Network tab for failed API requests
3. Cloudflare Pages logs for backend errors

---

### Issue 4: Wrong Email Content

**Possible Causes:**
- Wrong email template used
- Template rendering issue
- Variable interpolation error

**Check:**
1. Email HTML source (View Original in email client)
2. Compare with templates in src/utils/email.ts
3. Check if all variables are populated correctly

---

## 📈 Next Steps After Successful Testing

### 1. Monitor Production Usage
- Check admin inbox regularly for real registrations
- Monitor Resend dashboard for email delivery metrics
- Track registration conversion rate

### 2. Optional Enhancements
- Verify g2middleeast.com domain in Resend
- Add email open/click tracking
- Implement one-click approval links
- Add email verification before admin approval

### 3. User Approval Workflow
When real users register:
1. Admin receives notification email
2. Admin clicks "Review Application" button
3. Admin reviews user details in Projects dashboard
4. Admin approves user (sets is_active=1)
5. User receives approval email (existing template)
6. User can log in to Projects portal

---

## 📚 Related Documentation

- **Implementation Report:** `PROJECTS_EMAIL_INTEGRATION_2025-10-28.md`
- **Email Templates:** `/home/user/webapp/src/utils/email.ts` (lines 286-412)
- **Registration API:** `/home/user/webapp/src/index.tsx` (lines 1536-1652)
- **Resend Setup:** `RESEND_TROUBLESHOOTING.md`
- **Authentication System:** `AUTHENTICATION_REINSTATED.md`

---

## ✅ Testing Completion Checklist

After completing all tests, mark the following:

- [ ] Test Case 1: Complete registration flow ✓
- [ ] Test Case 2: Admin email received and verified ✓
- [ ] Test Case 3: User email received and verified ✓
- [ ] Test Case 4: Database records verified ✓
- [ ] Test Case 5: Error handling tested (optional) ✓
- [ ] All email content correct ✓
- [ ] All links in emails working ✓
- [ ] HTML formatting displays properly ✓
- [ ] Mobile email display tested ✓
- [ ] Desktop email display tested ✓

---

**Status:** Ready for Production Testing  
**Deployment URL:** https://g2middleeast.com/projects/register  
**Admin Email:** tim@ktsglobal.live  
**Email Service:** Resend (onboarding@resend.dev)  
**Last Updated:** October 28, 2025
