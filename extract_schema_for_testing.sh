#!/bin/bash

# Extract Schema JSON for Google Rich Results Testing
# This script extracts the Tim Jacobs Person schema from the built page

echo "=============================================="
echo "Tim Jacobs Schema.org JSON-LD Extractor"
echo "=============================================="
echo ""

# Check if service is running
if ! curl -s http://localhost:3000/team > /dev/null 2>&1; then
    echo "❌ Error: Service not running on port 3000"
    echo "Please start the service first: pm2 start ecosystem.config.cjs"
    exit 1
fi

echo "✅ Service is running"
echo ""
echo "Extracting schema from /team page..."
echo ""

# Extract the Person schema (first JSON-LD block)
curl -s http://localhost:3000/team | \
    grep -o '<script type="application/ld+json">{[^<]*</script>' | \
    head -1 | \
    sed 's/<script type="application\/ld+json">//g' | \
    sed 's/<\/script>//g' | \
    python3 -m json.tool > /tmp/tim_jacobs_schema.json

if [ -f /tmp/tim_jacobs_schema.json ]; then
    echo "✅ Schema extracted successfully!"
    echo ""
    echo "Schema saved to: /tmp/tim_jacobs_schema.json"
    echo ""
    echo "=============================================="
    echo "File size: $(wc -c < /tmp/tim_jacobs_schema.json) bytes"
    echo "=============================================="
    echo ""
    echo "Preview (first 30 lines):"
    echo ""
    head -30 /tmp/tim_jacobs_schema.json
    echo ""
    echo "... (truncated)"
    echo ""
    echo "=============================================="
    echo "HOW TO TEST WITH GOOGLE RICH RESULTS:"
    echo "=============================================="
    echo ""
    echo "1. Open: https://search.google.com/test/rich-results"
    echo "2. Click 'CODE' tab"
    echo "3. Paste the contents of: /tmp/tim_jacobs_schema.json"
    echo "4. Click 'TEST CODE'"
    echo ""
    echo "OR"
    echo ""
    echo "1. Deploy to production Cloudflare Pages"
    echo "2. Open: https://search.google.com/test/rich-results"
    echo "3. Enter your production URL in the URL field"
    echo "4. Click 'TEST URL'"
    echo ""
    echo "=============================================="
    echo "Full schema file location: /tmp/tim_jacobs_schema.json"
    echo "=============================================="
else
    echo "❌ Error: Failed to extract schema"
    exit 1
fi
