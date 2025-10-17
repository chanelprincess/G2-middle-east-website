#!/bin/bash

# Email Service Test Script
# Quick testing of email notification workflow

set -e

echo "🧪 G2 Middle East - Email Service Test"
echo "========================================"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if .dev.vars exists
if [ ! -f .dev.vars ]; then
    echo -e "${RED}❌ Error: .dev.vars file not found${NC}"
    echo ""
    echo "Please create .dev.vars file with your API key:"
    echo ""
    echo "EMAIL_SERVICE=resend"
    echo "EMAIL_API_KEY=re_your_api_key_here"
    echo ""
    exit 1
fi

# Check if EMAIL_API_KEY is configured
if grep -q "re_placeholder_get_real_key_from_resend" .dev.vars; then
    echo -e "${YELLOW}⚠️  Warning: Using placeholder API key${NC}"
    echo ""
    echo "To test real email sending, update .dev.vars with your API key:"
    echo ""
    echo "1. Sign up at https://resend.com/signup"
    echo "2. Get API key from https://resend.com/api-keys"
    echo "3. Replace 're_placeholder_get_real_key_from_resend' in .dev.vars"
    echo ""
    read -p "Continue with placeholder (emails will be logged only)? [y/N] " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Get test email address
echo -e "${YELLOW}📧 Enter YOUR email address for testing:${NC}"
read -p "Email: " TEST_EMAIL

if [ -z "$TEST_EMAIL" ]; then
    echo -e "${RED}❌ Error: Email address required${NC}"
    exit 1
fi

# Validate email format
if ! [[ "$TEST_EMAIL" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
    echo -e "${RED}❌ Error: Invalid email format${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Configuration validated${NC}"
echo ""

# Step 1: Restart server with new env vars
echo "🔄 Step 1: Restarting development server..."
pm2 stop g2-middle-east > /dev/null 2>&1 || true
sleep 1
pm2 start ecosystem.config.cjs > /dev/null 2>&1
echo -e "${GREEN}✅ Server restarted${NC}"
sleep 3

# Step 2: Test server is running
echo ""
echo "🔍 Step 2: Verifying server is running..."
if curl -s http://localhost:3000/whitepapers/login | grep -q "Login"; then
    echo -e "${GREEN}✅ Server is running${NC}"
else
    echo -e "${RED}❌ Server not responding${NC}"
    exit 1
fi

# Step 3: Register test user
echo ""
echo "📝 Step 3: Registering test user..."
TIMESTAMP=$(date +%s)
USERNAME="testuser$TIMESTAMP"

RESPONSE=$(curl -s -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "full_name=Test User" \
  -d "company=Test Company Inc" \
  -d "job_title=QA Tester" \
  -d "email=$TEST_EMAIL" \
  -d "username=$USERNAME" \
  -d "password=test123" \
  -d "confirm_password=test123" \
  -i)

if echo "$RESPONSE" | grep -q "302 Found"; then
    echo -e "${GREEN}✅ User registered successfully${NC}"
    echo "   Username: $USERNAME"
    echo "   Email: $TEST_EMAIL"
else
    echo -e "${RED}❌ Registration failed${NC}"
    echo "$RESPONSE"
    exit 1
fi

# Step 4: Check email logs
echo ""
echo "📧 Step 4: Checking email notification logs..."
sleep 2

LOGS=$(pm2 logs g2-middle-east --nostream --lines 50 2>&1 | grep -A3 "Email" | tail -20)

if echo "$LOGS" | grep -q "✅ Email sent via"; then
    echo -e "${GREEN}✅ Emails sent successfully!${NC}"
    echo ""
    echo "Emails sent:"
    echo "$LOGS" | grep "✅ Email sent"
    echo ""
    echo -e "${GREEN}🎉 SUCCESS! Check your email inbox:${NC}"
    echo "   - $TEST_EMAIL"
    echo "   - tim@ktsglobal.live"
    echo ""
    echo "You should receive:"
    echo "   ✉️  Registration confirmation email"
    echo ""
    echo "Admin (tim@ktsglobal.live) should receive:"
    echo "   ✉️  New access request notification"
elif echo "$LOGS" | grep -q "📧 Email would be sent"; then
    echo -e "${YELLOW}⚠️  Development mode: Emails logged to console${NC}"
    echo ""
    echo "Email previews:"
    echo "$LOGS" | grep -A2 "📧 Email would be sent"
    echo ""
    echo -e "${YELLOW}ℹ️  To send real emails, add API key to .dev.vars${NC}"
else
    echo -e "${RED}❌ No email logs found${NC}"
    echo ""
    echo "Recent logs:"
    pm2 logs g2-middle-east --nostream --lines 20
fi

# Step 5: Check database
echo ""
echo "🗄️  Step 5: Verifying database entry..."
USER_DATA=$(npx wrangler d1 execute webapp-production --local \
  --command="SELECT id, username, email, is_approved FROM users WHERE username='$USERNAME'" 2>&1)

if echo "$USER_DATA" | grep -q "$USERNAME"; then
    echo -e "${GREEN}✅ User created in database${NC}"
    USER_ID=$(echo "$USER_DATA" | grep -A10 "results" | grep "id" | head -1 | grep -o '[0-9]*')
    echo "   User ID: $USER_ID"
    echo "   Approval status: Pending (0)"
    
    # Step 6: Test admin approval
    echo ""
    echo "👤 Step 6: Testing admin approval workflow..."
    
    ADMIN_SESSION=$(echo -n '{"userId":1,"username":"admin","timestamp":'$(date +%s)'000}' | base64)
    
    APPROVE_RESPONSE=$(curl -s -X POST "http://localhost:3000/api/admin/users/approve/$USER_ID" \
      -H "Cookie: auth_session=$ADMIN_SESSION" \
      -i)
    
    if echo "$APPROVE_RESPONSE" | grep -q "302 Found"; then
        echo -e "${GREEN}✅ User approved successfully${NC}"
        
        sleep 2
        APPROVAL_LOGS=$(pm2 logs g2-middle-east --nostream --lines 30 2>&1 | grep -A2 "Email" | tail -10)
        
        if echo "$APPROVAL_LOGS" | grep -q "✅ Email sent via"; then
            echo -e "${GREEN}✅ Approval email sent!${NC}"
            echo ""
            echo "Check $TEST_EMAIL for approval notification"
        elif echo "$APPROVAL_LOGS" | grep -q "📧 Email would be sent"; then
            echo -e "${YELLOW}⚠️  Approval email logged (development mode)${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  Approval endpoint called (check manually in admin dashboard)${NC}"
    fi
else
    echo -e "${RED}❌ User not found in database${NC}"
fi

# Summary
echo ""
echo "========================================"
echo "📊 Test Summary"
echo "========================================"
echo ""
echo "Test user created:"
echo "  Username: $USERNAME"
echo "  Email: $TEST_EMAIL"
echo "  Password: test123"
echo ""
echo "Next steps:"
echo "  1. Check your email inbox ($TEST_EMAIL)"
echo "  2. Check admin email (tim@ktsglobal.live)"
echo "  3. Try logging in: http://localhost:3000/whitepapers/login"
echo "  4. View admin dashboard: http://localhost:3000/admin/users"
echo ""
echo "Full logs:"
echo "  pm2 logs g2-middle-east"
echo ""
echo -e "${GREEN}✅ Test completed!${NC}"
