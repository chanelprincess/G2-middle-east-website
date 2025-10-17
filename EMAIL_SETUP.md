# Email Service Integration Guide

This guide explains how to configure email notifications for the white paper gated section.

## Overview

The system sends three types of emails:
1. **Admin notification** when a user registers (to tim@ktsglobal.live)
2. **User confirmation** immediately after registration
3. **User approval notification** when admin approves access

## Supported Email Services

### 1. Resend (Recommended)
**Best for:** Cloudflare Workers, modern API, excellent developer experience

**Setup:**
1. Sign up at https://resend.com
2. Add and verify your domain (g2middleeast.com)
3. Create an API key at https://resend.com/api-keys
4. Copy the API key (starts with `re_`)

**Pricing:** Free tier includes 3,000 emails/month

### 2. SendGrid
**Best for:** High volume, established service

**Setup:**
1. Sign up at https://sendgrid.com
2. Verify your sender email or domain
3. Create API key at https://app.sendgrid.com/settings/api_keys
4. Copy the API key (starts with `SG.`)

**Pricing:** Free tier includes 100 emails/day

### 3. Mailgun
**Best for:** Transactional emails, flexible routing

**Setup:**
1. Sign up at https://mailgun.com
2. Add and verify your domain
3. Get API key at https://app.mailgun.com/settings/api_security
4. Copy the API key

**Pricing:** Pay-as-you-go, $0.80 per 1,000 emails

## Configuration

### Local Development

1. Copy the example environment file:
```bash
cp .dev.vars.example .dev.vars
```

2. Edit `.dev.vars` with your credentials:
```bash
# Choose your service
EMAIL_SERVICE=resend

# Add your API key
EMAIL_API_KEY=re_your_actual_api_key_here
```

3. Restart your development server:
```bash
pm2 restart webapp
```

### Production Deployment

Set environment variables as Cloudflare secrets:

```bash
# Set email service provider
npx wrangler pages secret put EMAIL_SERVICE --project-name webapp
# When prompted, enter: resend (or sendgrid, mailgun)

# Set API key
npx wrangler pages secret put EMAIL_API_KEY --project-name webapp
# When prompted, paste your API key
```

Verify secrets are set:
```bash
npx wrangler pages secret list --project-name webapp
```

## Domain Verification

For production emails to work reliably, you must verify your sending domain:

### Resend Domain Verification
1. Go to https://resend.com/domains
2. Add `g2middleeast.com`
3. Add the provided DNS records to your domain:
   - SPF record (TXT)
   - DKIM record (TXT)
   - DMARC record (TXT)
4. Wait for DNS propagation (up to 48 hours)
5. Click "Verify" in Resend dashboard

### SendGrid Domain Verification
1. Go to Settings > Sender Authentication
2. Authenticate your domain
3. Add provided DNS records
4. Complete verification

### Mailgun Domain Verification
1. Go to Sending > Domains
2. Add your domain
3. Add provided DNS records
4. Verify domain

## Testing

### Test in Development

With `.dev.vars` configured:

```bash
# Register a new user
# Check console logs for email output
pm2 logs webapp --nostream
```

You should see log messages like:
```
📧 Email sent via Resend to: test@example.com
```

### Test Email Templates

You can test email rendering by visiting the email notification endpoints directly (admin only).

## Troubleshooting

### Emails not sending

1. **Check API key is set:**
   ```bash
   # Local
   cat .dev.vars
   
   # Production
   npx wrangler pages secret list --project-name webapp
   ```

2. **Verify domain authentication:**
   - Check DNS records are correctly configured
   - Wait for DNS propagation (can take 48 hours)

3. **Check service status:**
   - Resend: https://resend.com/status
   - SendGrid: https://status.sendgrid.com
   - Mailgun: https://status.mailgun.com

4. **Review logs:**
   ```bash
   # Local development
   pm2 logs webapp
   
   # Production
   npx wrangler tail --project-name webapp
   ```

### Common Error Messages

- **"401 Unauthorized"**: Invalid or expired API key
- **"403 Forbidden"**: Domain not verified or API key lacks permissions
- **"Domain not verified"**: Complete domain verification in service dashboard
- **"Daily send limit exceeded"**: Upgrade to paid plan or wait 24 hours

## Email Delivery Best Practices

1. **Use verified domain:** Always send from your verified domain (noreply@g2middleeast.com)
2. **Monitor bounce rates:** Check service dashboard for bounced emails
3. **Respect unsubscribe requests:** Though these are transactional emails, honor user preferences
4. **Test thoroughly:** Test email flow in development before deploying

## Without Email Configuration

If you don't configure email services, the system will still work but emails won't be sent. Instead:
- Registration will succeed
- Users will see pending status
- Admin can approve users manually
- Console logs will show what emails would have been sent

This is useful for development and testing without needing email service credentials.

## Production Checklist

- [ ] Email service account created
- [ ] API key generated
- [ ] Domain verified with DNS records
- [ ] Secrets configured in Cloudflare
- [ ] Test email sent successfully
- [ ] Admin email (tim@ktsglobal.live) receiving notifications
- [ ] User notification emails working
- [ ] Email templates reviewed and approved

## Support

For issues with:
- **Resend:** https://resend.com/support
- **SendGrid:** https://support.sendgrid.com
- **Mailgun:** https://help.mailgun.com
