#!/bin/bash
# Monitor Custom Domain Activation for G2 Middle East

ACCOUNT_ID="862613ad1789113af9d02a3384f54a30"
PROJECT_NAME="g2-middle-east"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎯 G2 Middle East - Custom Domain Status Monitor"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Get domain status from Cloudflare API
echo "📊 Checking domain status via Cloudflare API..."
echo ""

curl -s -X GET "https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}/domains" \
  -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
  -H "Content-Type: application/json" | jq -r '.result[] | "Domain: \(.name)\n  Status: \(.status)\n  Validation: \(.validation_data.status)\n  SSL Authority: \(.certificate_authority)\n"'

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🌐 Testing Website Accessibility..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Test main domain
echo "1️⃣  Testing https://g2middleeast.com"
MAIN_STATUS=$(curl -s -I https://g2middleeast.com 2>&1 | grep "HTTP" | head -1)
echo "   $MAIN_STATUS"

if echo "$MAIN_STATUS" | grep -q "200"; then
    echo "   ✅ Website is LIVE!"
elif echo "$MAIN_STATUS" | grep -q "400"; then
    echo "   ⏳ Still initializing... (this is normal)"
else
    echo "   ⚠️  Status: $MAIN_STATUS"
fi
echo ""

# Test www subdomain
echo "2️⃣  Testing https://www.g2middleeast.com"
WWW_STATUS=$(curl -s -I https://www.g2middleeast.com 2>&1 | grep "HTTP" | head -1)
echo "   $WWW_STATUS"

if echo "$WWW_STATUS" | grep -q "200"; then
    echo "   ✅ Website is LIVE!"
elif echo "$WWW_STATUS" | grep -q "400\|522"; then
    echo "   ⏳ Still initializing... (this is normal)"
else
    echo "   ⚠️  Status: $WWW_STATUS"
fi
echo ""

# Test Pages URL (should always work)
echo "3️⃣  Testing https://cc6a4869.g2-middle-east-zuj.pages.dev"
PAGES_STATUS=$(curl -s -I https://cc6a4869.g2-middle-east-zuj.pages.dev 2>&1 | grep "HTTP" | head -1)
echo "   $PAGES_STATUS"
if echo "$PAGES_STATUS" | grep -q "200"; then
    echo "   ✅ Pages URL working correctly"
fi
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 Status Summary"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if echo "$MAIN_STATUS" | grep -q "200" && echo "$WWW_STATUS" | grep -q "200"; then
    echo "🎉 SUCCESS! Your website is fully live on custom domains!"
    echo ""
    echo "✅ https://g2middleeast.com - LIVE"
    echo "✅ https://www.g2middleeast.com - LIVE"
    echo ""
    echo "Next steps:"
    echo "  - Test all pages and navigation"
    echo "  - Update any external links"
    echo "  - Monitor traffic in analytics"
elif echo "$MAIN_STATUS" | grep -q "400"; then
    echo "⏳ Domains are initializing..."
    echo ""
    echo "This is normal! Expected timeline:"
    echo "  • DNS validation: 1-5 minutes"
    echo "  • SSL certificates: 10-30 minutes"
    echo "  • Full activation: 10-30 minutes"
    echo ""
    echo "💡 Run this script again in a few minutes to check progress"
else
    echo "⚠️  Custom domains need more time to activate"
    echo ""
    echo "If still not working after 30 minutes:"
    echo "  - Check Cloudflare Dashboard for errors"
    echo "  - Verify DNS records in DNS tab"
    echo "  - Contact Cloudflare support if needed"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Last checked: $(date)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
