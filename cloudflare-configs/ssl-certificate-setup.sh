#!/bin/bash
#
# SSL Certificate Setup Script for g2middleeast.com
# This script installs and configures SSL certificates using Let's Encrypt (Certbot)
#
# IMPORTANT: Run this script with sudo privileges on your production server
# at 209.17.116.163
#

set -e  # Exit on any error

echo "============================================"
echo "SSL Certificate Setup for g2middleeast.com"
echo "============================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}ERROR: This script must be run as root (use sudo)${NC}" 
   exit 1
fi

echo -e "${YELLOW}Step 1: Installing Certbot (Let's Encrypt client)${NC}"
echo "------------------------------------------------"

# Detect OS and install certbot
if [ -f /etc/debian_version ]; then
    # Debian/Ubuntu
    apt-get update
    apt-get install -y certbot python3-certbot-nginx
elif [ -f /etc/redhat-release ]; then
    # CentOS/RHEL/Amazon Linux
    yum install -y certbot python3-certbot-nginx
else
    echo -e "${RED}ERROR: Unsupported OS. Please install certbot manually.${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✓ Certbot installed successfully${NC}"
echo ""

echo -e "${YELLOW}Step 2: Obtaining SSL Certificate from Let's Encrypt${NC}"
echo "------------------------------------------------"
echo ""
echo "IMPORTANT: Make sure nginx is NOT running before obtaining the certificate."
echo "Certbot will use port 80 temporarily to verify domain ownership."
echo ""

# Stop nginx if running
systemctl stop nginx 2>/dev/null || true

# Obtain certificate for both domains
echo "Obtaining certificate for g2middleeast.com and www.g2middleeast.com..."
certbot certonly \
    --standalone \
    --preferred-challenges http \
    --agree-tos \
    --email admin@g2middleeast.com \
    --non-interactive \
    -d g2middleeast.com \
    -d www.g2middleeast.com

echo ""
echo -e "${GREEN}✓ SSL Certificate obtained successfully${NC}"
echo ""

echo -e "${YELLOW}Step 3: Creating symbolic links to certificate files${NC}"
echo "------------------------------------------------"

# Create certificate directory
mkdir -p /etc/ssl/certs /etc/ssl/private

# Create symbolic links for easier management
ln -sf /etc/letsencrypt/live/g2middleeast.com/fullchain.pem /etc/ssl/certs/g2middleeast.com.crt
ln -sf /etc/letsencrypt/live/g2middleeast.com/privkey.pem /etc/ssl/private/g2middleeast.com.key
ln -sf /etc/letsencrypt/live/g2middleeast.com/chain.pem /etc/ssl/certs/g2middleeast.com.chain.crt

# Set proper permissions
chmod 644 /etc/ssl/certs/g2middleeast.com.crt
chmod 600 /etc/ssl/private/g2middleeast.com.key
chmod 644 /etc/ssl/certs/g2middleeast.com.chain.crt

echo -e "${GREEN}✓ Certificate files linked and permissions set${NC}"
echo ""

echo -e "${YELLOW}Step 4: Testing nginx configuration${NC}"
echo "------------------------------------------------"

# Copy nginx configuration if not exists
if [ ! -f /etc/nginx/sites-available/g2middleeast.com ]; then
    echo "Please copy the nginx configuration file to:"
    echo "  /etc/nginx/sites-available/g2middleeast.com"
    echo ""
    echo "Then create a symbolic link:"
    echo "  ln -s /etc/nginx/sites-available/g2middleeast.com /etc/nginx/sites-enabled/"
fi

# Test nginx configuration
nginx -t

echo ""
echo -e "${GREEN}✓ Nginx configuration is valid${NC}"
echo ""

echo -e "${YELLOW}Step 5: Setting up automatic certificate renewal${NC}"
echo "------------------------------------------------"

# Create renewal hook script
cat > /etc/letsencrypt/renewal-hooks/deploy/nginx-reload.sh << 'EOF'
#!/bin/bash
# Reload nginx after certificate renewal
systemctl reload nginx
EOF

chmod +x /etc/letsencrypt/renewal-hooks/deploy/nginx-reload.sh

# Test renewal process (dry run)
certbot renew --dry-run

echo ""
echo -e "${GREEN}✓ Automatic renewal configured and tested${NC}"
echo ""

echo -e "${YELLOW}Step 6: Starting nginx service${NC}"
echo "------------------------------------------------"

# Enable and start nginx
systemctl enable nginx
systemctl start nginx
systemctl status nginx --no-pager

echo ""
echo -e "${GREEN}✓ Nginx started successfully${NC}"
echo ""

echo "============================================"
echo -e "${GREEN}SSL Certificate Setup Complete!${NC}"
echo "============================================"
echo ""
echo "Certificate Details:"
echo "  - Certificate: /etc/letsencrypt/live/g2middleeast.com/fullchain.pem"
echo "  - Private Key: /etc/letsencrypt/live/g2middleeast.com/privkey.pem"
echo "  - Chain: /etc/letsencrypt/live/g2middleeast.com/chain.pem"
echo ""
echo "Certificate will auto-renew before expiration (90 days)"
echo ""
echo "Next Steps:"
echo "  1. Verify HTTPS is working: https://g2middleeast.com"
echo "  2. Test SSL configuration: https://www.ssllabs.com/ssltest/"
echo "  3. Verify Cloudflare SSL/TLS mode is set to 'Full (Strict)'"
echo ""
echo -e "${YELLOW}IMPORTANT: In Cloudflare dashboard, set SSL/TLS mode to 'Full (Strict)'${NC}"
echo ""
