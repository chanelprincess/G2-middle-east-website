# CSR Installation Guide for Domain.com Premium SSL Certificate

**Domain:** www.g2middleeast.com  
**Order Number:** 408458756  
**SSL Type:** Premium SSL (Advanced)  
**Generated Date:** 2025-10-18

---

## 📋 Files Generated

Two files have been created for your SSL certificate installation:

1. **`g2middleeast.com.csr`** - Certificate Signing Request (paste this into Domain.com)
2. **`g2middleeast.com.key`** - Private Key (keep this secure, DO NOT share with anyone)

---

## 🔐 CSR Content (Copy and Paste This)

```
-----BEGIN CERTIFICATE REQUEST-----
MIICqjCCAZICAQAwZTELMAkGA1UEBhMCQUUxDjAMBgNVBAgMBUR1YmFpMQ4wDAYD
VQQHDAVEdWJhaTEXMBUGA1UECgwORzIgTWlkZGxlIEVhc3QxHTAbBgNVBAMMFHd3
dy5nMm1pZGRsZWVhc3QuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
AQEA3v68mI+CJckYcpY83jddb71iLM+SNM4FtcDQEGJJD3wg8r6J+W2fyEg98AF3
1Z6uNVj286qvxSndyV+ARNmyIasMcZgZVW+1nQwN3QNsdSzXz+EccbQXVz3LNK0H
QdK9+q6tKaRq7oWlFKwXIpJK65f1fL8zpfGmFVwXhiskCop7hFBNpXQUTmq5qQJU
it8WMtcm8+KrGOdaq+Up8pksrqyovaEjRPNIQI9+hwHYHfpqa7zU4KnQKhdTrqMW
uRz6GUftqHW1SNEm/PGCt12h152p98/wwzjEtYkASHv9RpZp9yawqgoRY5XKUH3W
/tU3tj/wXWjYsGBcZ25shU2DjwIDAQABoAAwDQYJKoZIhvcNAQELBQADggEBAAgn
NH3yeDDxtuWmD2FtI0Vpk6VcDlYSN2cy3yPmOy89rMifJka9sZ9CH9gzT/V71YX9
NojjeE1O1Ai+k20rwY+lPLMVfJzt2w2nqfGJnJrYhllKj4jBphL7ib9K+c59VI14
Oxncbvrl26afYMYfSkSCHsRlU41+SkiWbRG9WzWcj3q0pVLplANR+YPVij98JWe6
DReHDE3UbkOFNDBxr7wPvU3fy7xyYy8dmHR4Va081tIkIdWH5NauYH7mnB6nLWdW
hvSi+z5ucM4uZzGLmgNFDya15TraGq21+gwsdi93z3IlArzBXnws8PVVyW+Z7A9d
Xjb9bm3DzUoQEKWl5D0=
-----END CERTIFICATE REQUEST-----
```

---

## 📝 Step-by-Step Installation Instructions

### Step 1: Fill Out Domain.com SSL Control Panel Form

1. **Web Host's Server Software:**
   - Select: **"Nginx"** from the dropdown menu

2. **Enter CSR From Web Host:**
   - Copy the entire CSR content above (including the `-----BEGIN CERTIFICATE REQUEST-----` and `-----END CERTIFICATE REQUEST-----` lines)
   - Paste it into the text area in the Domain.com form

3. Click **"Submit"** or **"Next"** to proceed

### Step 2: Complete Domain.com Certificate Validation

Domain.com will now validate your certificate request. This typically involves:
- Email validation (check your email for Domain.com verification)
- Domain validation (may require adding a TXT record or uploading a file)

Follow Domain.com's instructions to complete the validation process.

### Step 3: Download Certificate from Domain.com

Once validated, Domain.com will provide you with:
- **Certificate file** (usually `www_g2middleeast_com.crt` or similar)
- **CA Bundle/Intermediate Certificate** (usually `ca-bundle.crt` or similar)

Download both files.

### Step 4: Install Certificate on Your Server

#### Option A: Using Domain.com cPanel (Recommended for Shared Hosting)

1. Log in to Domain.com cPanel
2. Go to **"Security" → "SSL/TLS Manager"**
3. Upload your certificate files:
   - Certificate: `www_g2middleeast_com.crt`
   - Private Key: Use the `g2middleeast.com.key` file provided
   - CA Bundle: `ca-bundle.crt`
4. Install the certificate for your domain

#### Option B: Manual Nginx Installation (VPS/Dedicated Server Only)

If you have SSH/root access to your server:

1. Upload the certificate files to your server:
   ```bash
   # Create SSL directory if it doesn't exist
   sudo mkdir -p /etc/ssl/certs
   sudo mkdir -p /etc/ssl/private
   
   # Upload certificate files
   sudo cp www_g2middleeast_com.crt /etc/ssl/certs/g2middleeast.com.crt
   sudo cp ca-bundle.crt /etc/ssl/certs/g2middleeast-ca-bundle.crt
   sudo cp g2middleeast.com.key /etc/ssl/private/g2middleeast.com.key
   
   # Set proper permissions
   sudo chmod 644 /etc/ssl/certs/g2middleeast.com.crt
   sudo chmod 644 /etc/ssl/certs/g2middleeast-ca-bundle.crt
   sudo chmod 600 /etc/ssl/private/g2middleeast.com.key
   ```

2. Update your Nginx configuration:
   ```nginx
   server {
       listen 443 ssl http2;
       server_name www.g2middleeast.com g2middleeast.com;
       
       # SSL Certificate paths
       ssl_certificate /etc/ssl/certs/g2middleeast.com.crt;
       ssl_certificate_key /etc/ssl/private/g2middleeast.com.key;
       ssl_trusted_certificate /etc/ssl/certs/g2middleeast-ca-bundle.crt;
       
       # SSL protocols and ciphers
       ssl_protocols TLSv1.2 TLSv1.3;
       ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
       ssl_prefer_server_ciphers off;
       
       # ... rest of your server configuration
   }
   ```

3. Test and reload Nginx:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

---

## 🔒 CSR Details

The CSR was generated with the following information:

| Field | Value |
|-------|-------|
| **Common Name (CN)** | www.g2middleeast.com |
| **Organization (O)** | G2 Middle East |
| **Country (C)** | AE |
| **State (ST)** | Dubai |
| **Locality (L)** | Dubai |
| **Key Size** | 2048-bit RSA |

---

## ⚠️ Important Security Notes

### Private Key Security

The **`g2middleeast.com.key`** file contains your private key and must be kept secure:

- ✅ **DO:** Keep this file on secure servers only
- ✅ **DO:** Set proper file permissions (600 or 400)
- ✅ **DO:** Back up securely in an encrypted location
- ❌ **DON'T:** Share this file with anyone (including Domain.com support)
- ❌ **DON'T:** Upload to public repositories or unsecured locations
- ❌ **DON'T:** Email this file

### What to Share with Domain.com

- ✅ **CSR file** (g2middleeast.com.csr) - Safe to share
- ❌ **Private Key** (g2middleeast.com.key) - Never share

Domain.com only needs the CSR. They will issue the certificate based on the CSR, but you keep the private key secure on your server.

---

## 🧪 Testing Your SSL Installation

After installation, verify your SSL certificate:

1. **Browser Test:**
   - Visit: https://www.g2middleeast.com
   - Check for the padlock icon in the address bar
   - Click the padlock to view certificate details

2. **Online SSL Checker:**
   - Visit: https://www.ssllabs.com/ssltest/
   - Enter: www.g2middleeast.com
   - Review the SSL report (aim for A or A+ rating)

3. **Command Line Test:**
   ```bash
   openssl s_client -connect www.g2middleeast.com:443 -servername www.g2middleeast.com
   ```

---

## 🔄 Certificate Renewal

Domain.com Premium SSL certificates typically last 1 year. To renew:

1. You can reuse the same private key (`g2middleeast.com.key`)
2. Generate a new CSR using the same command (or use the existing CSR)
3. Submit to Domain.com for renewal
4. Install the new certificate when issued

---

## 📞 Support

If you encounter issues:

1. **Domain.com Support:**
   - For CSR validation and certificate issuance issues
   - Contact: Domain.com customer support

2. **Cloudflare Support:**
   - For DNS and proxy configuration issues
   - Your zone: 3680b593a0877c78cf613968aa3f2351

3. **Server Configuration:**
   - For Nginx installation and configuration issues
   - Contact your hosting provider or system administrator

---

## ✅ Next Steps

1. ✅ Copy the CSR content above
2. ✅ Paste into Domain.com SSL Control Panel
3. ✅ Select "Nginx" as web server software
4. ⏳ Complete Domain.com validation process
5. ⏳ Download certificate files from Domain.com
6. ⏳ Install certificate on your server
7. ⏳ Test HTTPS is working correctly

---

**Generated:** 2025-10-18  
**Valid For:** www.g2middleeast.com, g2middleeast.com  
**Key Algorithm:** RSA 2048-bit  
**Signature Algorithm:** SHA256withRSA
