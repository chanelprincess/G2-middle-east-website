// Email notification functions
// Supports multiple email service providers:
// - Resend API (recommended for Cloudflare Workers)
// - SendGrid API
// - Mailgun API

export interface EmailParams {
  to: string
  subject: string
  html: string
  from?: string
}

/**
 * Send email using configured email service
 * Requires EMAIL_API_KEY and EMAIL_SERVICE environment variables
 * 
 * EMAIL_SERVICE options: 'resend', 'sendgrid', 'mailgun'
 * Default: 'resend'
 */
export async function sendEmail(params: EmailParams, apiKey?: string, service: string = 'resend'): Promise<boolean> {
  // If no API key provided, log and return (development mode)
  if (!apiKey) {
    console.log('📧 Email would be sent (no API key configured):', {
      to: params.to,
      subject: params.subject,
      preview: params.html.substring(0, 100) + '...'
    })
    return true
  }

  const fromEmail = params.from || 'noreply@g2middleeast.com'
  const fromName = 'G2 Middle East'

  try {
    switch (service.toLowerCase()) {
      case 'resend':
        return await sendViaResend(params, apiKey, fromEmail, fromName)
      
      case 'sendgrid':
        return await sendViaSendGrid(params, apiKey, fromEmail, fromName)
      
      case 'mailgun':
        return await sendViaMailgun(params, apiKey, fromEmail, fromName)
      
      default:
        console.error('Unknown email service:', service)
        return false
    }
  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}

async function sendViaResend(params: EmailParams, apiKey: string, fromEmail: string, fromName: string): Promise<boolean> {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `${fromName} <${fromEmail}>`,
      to: [params.to],
      subject: params.subject,
      html: params.html
    })
  })

  if (!response.ok) {
    const error = await response.text()
    console.error('Resend API error:', error)
    return false
  }

  console.log('✅ Email sent via Resend to:', params.to)
  return true
}

async function sendViaSendGrid(params: EmailParams, apiKey: string, fromEmail: string, fromName: string): Promise<boolean> {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: params.to }] }],
      from: { email: fromEmail, name: fromName },
      subject: params.subject,
      content: [{ type: 'text/html', value: params.html }]
    })
  })

  if (!response.ok) {
    const error = await response.text()
    console.error('SendGrid API error:', error)
    return false
  }

  console.log('✅ Email sent via SendGrid to:', params.to)
  return true
}

async function sendViaMailgun(params: EmailParams, apiKey: string, fromEmail: string, fromName: string): Promise<boolean> {
  // Mailgun requires domain in URL - extract from email
  const domain = fromEmail.split('@')[1]
  const url = `https://api.mailgun.net/v3/${domain}/messages`
  
  const formData = new URLSearchParams()
  formData.append('from', `${fromName} <${fromEmail}>`)
  formData.append('to', params.to)
  formData.append('subject', params.subject)
  formData.append('html', params.html)

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`api:${apiKey}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData
  })

  if (!response.ok) {
    const error = await response.text()
    console.error('Mailgun API error:', error)
    return false
  }

  console.log('✅ Email sent via Mailgun to:', params.to)
  return true
}

export function getAdminApprovalEmail(user: any, approvalLink: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a1a1a; color: #d4af37; padding: 20px; text-align: center; }
        .content { background: #f4f4f4; padding: 20px; }
        .button { display: inline-block; background: #d4af37; color: #1a1a1a; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; margin: 20px 0; }
        .details { background: white; padding: 15px; margin: 15px 0; border-left: 4px solid #d4af37; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New White Paper Access Request</h2>
        </div>
        <div class="content">
          <p>A new user has requested access to the White Papers section:</p>
          
          <div class="details">
            <p><strong>Name:</strong> ${user.full_name}</p>
            <p><strong>Company:</strong> ${user.company}</p>
            <p><strong>Job Title:</strong> ${user.job_title}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Username:</strong> ${user.username}</p>
          </div>
          
          <p>Click the button below to approve this user:</p>
          <a href="${approvalLink}" class="button">Approve User Access</a>
          
          <p style="margin-top: 20px; font-size: 12px; color: #666;">
            Or copy this link: ${approvalLink}
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

export function getUserApprovedEmail(userName: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a1a1a; color: #d4af37; padding: 20px; text-align: center; }
        .content { background: #f4f4f4; padding: 20px; }
        .button { display: inline-block; background: #d4af37; color: #1a1a1a; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Access Approved!</h2>
        </div>
        <div class="content">
          <p>Dear ${userName},</p>
          <p>Your request for access to the G2 Middle East White Papers has been approved.</p>
          <p>You can now log in to view and download our exclusive content:</p>
          <a href="https://g2middleeast.com/whitepapers/login" class="button">Log In Now</a>
          <p>Thank you for your interest in our insights.</p>
          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>G2 Middle East Team</strong>
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

export function getRegistrationPendingEmail(userName: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a1a1a; color: #d4af37; padding: 20px; text-align: center; }
        .content { background: #f4f4f4; padding: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Registration Received</h2>
        </div>
        <div class="content">
          <p>Dear ${userName},</p>
          <p>Thank you for registering for access to the G2 Middle East White Papers.</p>
          <p>Your request is currently pending approval. You will receive an email notification once your account has been activated.</p>
          <p>This typically takes 24-48 hours.</p>
          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>G2 Middle East Team</strong>
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}
