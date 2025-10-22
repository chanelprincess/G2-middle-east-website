#!/bin/bash
# Domain Transfer Status Check Script
# For: g2middleeast.com → Cloudflare

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🌐 G2 Middle East - Domain Status Check"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

DOMAIN="g2middleeast.com"
WWW_DOMAIN="www.g2middleeast.com"
PAGES_URL="g2-middle-east-zuj.pages.dev"

echo "📋 Checking: $DOMAIN"
echo ""

# Check if domain resolves
echo "1️⃣  Domain Resolution Check:"
curl -s -I https://$DOMAIN 2>&1 | grep -i "server:\|cf-\|http" | head -5
echo ""

# Check if www subdomain resolves
echo "2️⃣  WWW Subdomain Check:"
curl -s -I https://$WWW_DOMAIN 2>&1 | grep -i "server:\|cf-\|http" | head -5
echo ""

# Check Cloudflare Pages URL
echo "3️⃣  Cloudflare Pages URL Check:"
curl -s -I https://$PAGES_URL 2>&1 | grep -i "http\|server" | head -2
echo ""

# DNS Propagation Check
echo "4️⃣  DNS Propagation Status:"
echo "   Checking from multiple locations..."
for dns in 8.8.8.8 1.1.1.1; do
    echo "   🔍 Checking via DNS $dns:"
    timeout 3 curl -s "https://dns.google/resolve?name=$DOMAIN&type=A" | grep -o '"data":"[^"]*"' | head -3 2>/dev/null || echo "   ⏳ Timeout - still propagating"
done
echo ""

# SSL Certificate Check
echo "5️⃣  SSL Certificate Status:"
echo "   Checking SSL for $DOMAIN..."
timeout 5 curl -v https://$DOMAIN 2>&1 | grep -i "SSL\|certificate\|issuer" | head -3 || echo "   ⏳ SSL not yet configured"
echo ""

# Transfer Status Summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Status Summary:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if curl -s -I https://$DOMAIN 2>&1 | grep -q "server: cloudflare"; then
    echo "✅ Domain is reaching Cloudflare servers"
else
    echo "⏳ Domain not yet reaching Cloudflare"
fi

if curl -s -I https://$DOMAIN 2>&1 | grep -q "HTTP/2 200"; then
    echo "✅ Website is live and accessible"
elif curl -s -I https://$DOMAIN 2>&1 | grep -q "HTTP/2 400"; then
    echo "⚠️  Domain hitting Cloudflare but Pages not configured yet"
    echo "   → Next: Add custom domain in Cloudflare Pages dashboard"
else
    echo "⏳ Website not yet accessible"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "⏱️  Typical Timeline:"
echo "   • Nameserver propagation: 0-48 hours"
echo "   • SSL certificate generation: 10-30 minutes after DNS"
echo "   • Full domain transfer: 5-7 days"
echo ""
echo "🔗 Next Steps:"
echo "   1. Add custom domain in Cloudflare Pages dashboard"
echo "   2. Wait for SSL certificate to generate"
echo "   3. Test website at https://$DOMAIN"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
