# Quick Reference Guide - g2middleeast.com

## 🚀 IMMEDIATE ACTION ITEMS

### 1. Cloudflare Dashboard (5 minutes)
**URL:** https://dash.cloudflare.com/

**Go to:** g2middleeast.com → SSL/TLS → Overview
- Set mode to: **Full (Strict)**

**Go to:** g2middleeast.com → SSL/TLS → Edge Certificates
- Enable: **Always Use HTTPS** ✅
- Enable: **Automatic HTTPS Rewrites** ✅
- Configure: **HSTS** (12 months, include subdomains)
- Set: **Minimum TLS Version: 1.2** ✅

### 2. Origin Server (209.17.116.163) - 20 minutes

```bash
# SSH into your server
ssh user@209.17.116.163

# Upload configuration files
scp nginx-g2middleeast.conf user@209.17.116.163:~/
scp ssl-certificate-setup.sh user@209.17.116.163:~/

# Install SSL certificate (automatic)
sudo bash ssl-certificate-setup.sh

# Deploy nginx configuration
sudo cp nginx-g2middleeast.conf /etc/nginx/sites-available/g2middleeast.com
sudo ln -s /etc/nginx/sites-available/g2middleeast.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Configure firewall
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

### 3. Verification (10 minutes)

```bash
# Test DNS
dig g2middleeast.com
dig www.g2middleeast.com

# Test HTTPS
curl -I https://g2middleeast.com
curl -I https://www.g2middleeast.com

# Check SSL
openssl s_client -connect g2middleeast.com:443 -servername g2middleeast.com
```

**Online Tools:**
- SSL Labs: https://www.ssllabs.com/ssltest/analyze.html?d=g2middleeast.com
- Security Headers: https://securityheaders.com/?q=https://g2middleeast.com
- DNS Checker: https://dnschecker.org/#A/g2middleeast.com

---

## 📋 KEY INFORMATION

### DNS Records (Cloudflare Zone: 3680b593a0877c78cf613968aa3f2351)

```
# Web Traffic (Proxied through Cloudflare)
g2middleeast.com          → 209.17.116.163 (Orange Cloud ✅)
www.g2middleeast.com      → 209.17.116.163 (Orange Cloud ✅)
*.g2middleeast.com        → 209.17.116.163 (Orange Cloud ✅)

# Email (DNS Only - Direct)
g2middleeast.com          MX 1  → smtp.google.com
send.g2middleeast.com     MX 10 → feedback-smtp.ap-northeast-1.amazonses.com
```

### SSL/TLS Configuration

**Cloudflare (Edge):**
- Mode: Full (Strict) - encrypts between visitor ↔ Cloudflare ↔ origin
- Universal SSL certificate (automatic)
- TLS 1.2 and 1.3 supported

**Origin Server (209.17.116.163):**
- Let's Encrypt certificate (free, auto-renewing)
- Valid for: g2middleeast.com, www.g2middleeast.com
- Auto-renewal: Every 90 days

### Email Security

**SPF:** `v=spf1 include:_spf.google.com include:amazonses.com ~all`
- Authorizes Gmail and Amazon SES to send email

**DKIM:** Configured with public key in DNS
- Signs outgoing emails for authentication

**DMARC:** `v=DMARC1; p=quarantine; rua=mailto:dmarc@g2middleeast.com`
- Policy: Quarantine failed emails
- Reports sent to: dmarc@g2middleeast.com

---

## 🔧 COMMON COMMANDS

### Nginx Management
```bash
# Test configuration
sudo nginx -t

# Reload configuration
sudo systemctl reload nginx

# Restart nginx
sudo systemctl restart nginx

# Check status
sudo systemctl status nginx

# View error log
sudo tail -f /var/log/nginx/error.log

# View access log
sudo tail -f /var/log/nginx/g2middleeast.com.access.log
```

### SSL Certificate Management
```bash
# Check certificate expiration
sudo certbot certificates

# Manual renewal (usually automatic)
sudo certbot renew

# Dry run (test renewal)
sudo certbot renew --dry-run

# Revoke certificate (emergency only)
sudo certbot revoke --cert-path /etc/letsencrypt/live/g2middleeast.com/cert.pem
```

### DNS Testing
```bash
# Check A record
dig g2middleeast.com A +short

# Check MX records
dig g2middleeast.com MX +short

# Check TXT records (SPF)
dig g2middleeast.com TXT +short

# Check DMARC
dig _dmarc.g2middleeast.com TXT +short

# Check DKIM
dig resend._domainkey.g2middleeast.com TXT +short
```

### Firewall Management
```bash
# Check firewall status
sudo ufw status

# Allow HTTP/HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable

# View firewall logs
sudo tail -f /var/log/ufw.log
```

---

## 🆘 TROUBLESHOOTING

### Problem: Site not loading

```bash
# 1. Check if nginx is running
sudo systemctl status nginx

# 2. Check for configuration errors
sudo nginx -t

# 3. Check error log
sudo tail -20 /var/log/nginx/error.log

# 4. Check if ports are open
sudo netstat -tlnp | grep :443
sudo netstat -tlnp | grep :80

# 5. Test from server
curl -I http://localhost
curl -I https://localhost
```

### Problem: SSL certificate error

```bash
# 1. Check certificate validity
sudo certbot certificates

# 2. Check certificate files exist
ls -la /etc/letsencrypt/live/g2middleeast.com/

# 3. Verify certificate in nginx config
sudo grep ssl_certificate /etc/nginx/sites-available/g2middleeast.com

# 4. Test SSL configuration
sudo nginx -t

# 5. Renew certificate if expired
sudo certbot renew --force-renewal
```

### Problem: Too many redirects

**Cause:** Cloudflare SSL mode is "Flexible"

**Fix:**
1. Go to Cloudflare dashboard
2. SSL/TLS → Overview
3. Change mode to "Full (Strict)"
4. Wait 1-2 minutes

### Problem: Email not working

```bash
# 1. Check MX records
dig g2middleeast.com MX +short

# 2. Check SPF record
dig g2middleeast.com TXT +short | grep spf

# 3. Test email sending
# Use https://www.mail-tester.com/

# 4. Check DMARC reports
# Reports sent to: dmarc@g2middleeast.com
```

---

## 📊 MONITORING

### Cloudflare Analytics
- Dashboard: https://dash.cloudflare.com/
- Navigate to: g2middleeast.com → Analytics & Logs

**Key Metrics:**
- Requests per minute
- Bandwidth usage
- Threats blocked
- Cache hit ratio
- Status codes (4xx, 5xx errors)

### SSL Certificate Monitoring
```bash
# Check expiration date
echo | openssl s_client -servername g2middleeast.com -connect g2middleeast.com:443 2>/dev/null | openssl x509 -noout -dates

# Expected output:
# notBefore=...
# notAfter=... (should be ~90 days from installation)
```

### Nginx Logs
```bash
# Real-time access log
sudo tail -f /var/log/nginx/g2middleeast.com.access.log

# Real-time error log
sudo tail -f /var/log/nginx/g2middleeast.com.error.log

# Search for errors in last 100 lines
sudo tail -100 /var/log/nginx/error.log | grep error
```

### Server Health Check
```bash
# Check disk space
df -h

# Check memory usage
free -h

# Check CPU usage
top -bn1 | head -20

# Check nginx worker processes
ps aux | grep nginx

# Check open connections
sudo netstat -an | grep :443 | wc -l
```

---

## 📱 CONTACT INFORMATION

### Critical Services

**Cloudflare Dashboard:**
- URL: https://dash.cloudflare.com/
- Zone ID: 3680b593a0877c78cf613968aa3f2351
- Domain: g2middleeast.com

**Origin Server:**
- IP: 209.17.116.163
- OS: Linux (Ubuntu/Debian/CentOS)
- Web Server: Nginx/OpenResty

**Email Services:**
- Primary: Gmail (smtp.google.com)
- Transactional: Amazon SES (feedback-smtp.ap-northeast-1.amazonses.com)

### Support Resources

**Cloudflare Support:**
- Community: https://community.cloudflare.com/
- Documentation: https://developers.cloudflare.com/
- Status: https://www.cloudflarestatus.com/

**Let's Encrypt Support:**
- Community: https://community.letsencrypt.org/
- Documentation: https://letsencrypt.org/docs/

---

## ✅ POST-LAUNCH CHECKLIST

**Day 1:**
- [ ] Monitor SSL Labs score (target: A+)
- [ ] Check error logs for any issues
- [ ] Verify email delivery
- [ ] Test all redirects (HTTP → HTTPS, www handling)
- [ ] Monitor Cloudflare analytics

**Week 1:**
- [ ] Review Cloudflare security events
- [ ] Check DMARC reports
- [ ] Monitor SSL certificate status
- [ ] Review performance metrics
- [ ] Check for any 4xx/5xx errors

**Month 1:**
- [ ] Review and optimize Cloudflare cache settings
- [ ] Analyze traffic patterns
- [ ] Review and update security rules if needed
- [ ] Check SSL certificate auto-renewal
- [ ] Optimize nginx configuration based on traffic

---

## 🔐 SECURITY RECOMMENDATIONS

### Immediate (Already Implemented)
- ✅ HTTPS enforced
- ✅ HSTS configured
- ✅ Modern TLS protocols only
- ✅ Cloudflare WAF enabled
- ✅ DDoS protection active

### Recommended (Optional)
- [ ] Enable Cloudflare Bot Management
- [ ] Configure rate limiting rules
- [ ] Set up Cloudflare Access for admin areas
- [ ] Enable Cloudflare Argo Smart Routing
- [ ] Configure custom firewall rules

### Best Practices
- [ ] Regular backups of origin server
- [ ] Monitor security logs daily
- [ ] Keep nginx updated
- [ ] Review Cloudflare security events weekly
- [ ] Test disaster recovery procedures

---

**END OF QUICK REFERENCE**

Need help? Review the full `PRODUCTION_LAUNCH_SUMMARY.md` document.
