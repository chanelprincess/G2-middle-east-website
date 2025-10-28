# G-2 Middle East

## Project Overview

**G-2 Middle East** is a world-class, edge-native website serving as the digital embodiment of the "Architecture of Intangible Value." The platform positions G-2 as a premier strategic partner for sovereign entities and global brands, moving beyond traditional event management into sophisticated strategic communications and brand architecture.

### Key Features
- **Strategic Homepage** with dynamic hero gallery and philosophy statement
- **Services Page** with comprehensive offerings (Sovereign Branding, Luxury Positioning, Strategic Communications)
- **Team Page** featuring leadership profiles with Schema.org markup
- **Contact System** with D1 database integration for lead capture
- **SEO Optimized** with comprehensive schema markup for LLM pre-seeding
- **Edge-Native Architecture** running on Cloudflare Workers for global performance

## Live URLs

### Sandbox Development
- **Homepage**: https://3000-ikey7mq9ps5lphhd0j5b5-b237eb32.sandbox.novita.ai
- **Services**: https://3000-ikey7mq9ps5lphhd0j5b5-b237eb32.sandbox.novita.ai/services
- **Team**: https://3000-ikey7mq9ps5lphhd0j5b5-b237eb32.sandbox.novita.ai/team
- **Contact**: https://3000-ikey7mq9ps5lphhd0j5b5-b237eb32.sandbox.novita.ai/contact
- **API Health**: https://3000-ikey7mq9ps5lphhd0j5b5-b237eb32.sandbox.novita.ai/api/health

### Production (✅ LIVE with R2 Storage)
- **Primary URL**: https://g2-middle-east-zuj.pages.dev
- **Latest Deployment**: https://bb71d428.g2-middle-east-zuj.pages.dev
- **Project Name**: g2-middle-east
- **R2 Bucket**: g2-whitepapers (✅ Active)
- **Deployed**: October 28, 2025
- **Custom Domain**: TBD (to be configured)

## Technology Stack

### Core Framework
- **Hono** - Lightweight, fast web framework optimized for edge runtime
- **Cloudflare Pages** - Edge deployment platform
- **Cloudflare Workers** - Serverless runtime environment
- **TypeScript** - Type-safe development

### Frontend
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Font Awesome** - Icon library
- **Google Fonts** - Inter & Crimson Pro typography
- **Vanilla JavaScript** - Minimal client-side scripting

### Backend Services
- **Cloudflare D1** - SQLite-based globally distributed database
- **Cloudflare R2** - S3-compatible object storage (for PDFs/assets)

### Development Tools
- **Vite** - Build tool and dev server
- **Wrangler** - Cloudflare CLI
- **PM2** - Process manager for development

## Data Architecture

### D1 Database Tables

#### 1. **users** - White Paper Access Management
User authentication and approval for gated content access.
```sql
Fields: id, username, email, password_hash, full_name, company, 
        job_title, is_approved, is_admin, created_at, approved_at, last_login
```

#### 2. **whitepapers** - Gated Content Library
Downloadable strategic resources and corporate credentials.
```sql
Fields: id, title, description, file_path, file_size, 
        created_at, updated_at, download_count, is_active
```

#### 3. **downloads** - Download Tracking
Tracks all whitepaper downloads for analytics and user engagement.
```sql
Fields: id, user_id, whitepaper_id, downloaded_at
```

#### 4. **leads** - Contact Form & Inquiries
Stores all inquiries from contact forms and general inquiries.
```sql
Fields: id, name, email, company, phone, message, source, 
        gated_content_id, ip_address, user_agent, created_at
```

#### 5. **projects** - Case Studies (Planned)
Portfolio of strategic projects and case studies.
```sql
Fields: id, slug, title, subtitle, category, hero_image, 
        description, challenge, solution, results, featured, 
        published, created_at, updated_at
```

#### 6. **blog_posts** - The G-2 Briefing (Planned)
Strategic insights and thought leadership content.
```sql
Fields: id, slug, title, excerpt, content, author, 
        featured_image, category, tags, published, 
        featured, views, created_at, updated_at
```

#### 7. **newsletter_subscribers** (Planned)
Email list for The G-2 Briefing newsletter.

### R2 Storage Structure
**Bucket Name**: `g2-whitepapers`  
**Status**: ✅ **ACTIVE IN PRODUCTION**

```
g2-whitepapers/
└── whitepapers/
    ├── [timestamp]-g2-middle-east-presentation.pdf
    ├── [timestamp]-strategic-communications-guide.pdf
    └── [timestamp]-[safe-filename].pdf
```

**File Upload Features**:
- Automatic timestamp prefixing to prevent collisions
- Safe filename sanitization (removes special characters)
- Multipart form data support
- Content-Type detection based on file extension
- File size tracking in database

**R2 Setup Status**:
✅ R2 enabled in Cloudflare Dashboard  
✅ Bucket created: `g2-whitepapers`  
✅ Bucket bound to application in `wrangler.jsonc`  
✅ Deployed to production and fully functional

## Project Structure

```
webapp/
├── src/
│   ├── index.tsx              # Main application entry, routes, API
│   ├── renderer.tsx           # Base HTML renderer with SEO
│   ├── components/
│   │   └── Layout.tsx         # Navigation, Footer, PageLayout
│   └── pages/
│       ├── Home.tsx           # Homepage with hero gallery
│       ├── Services.tsx       # Services with schema markup
│       ├── Team.tsx           # Team profiles with Person schema
│       └── Contact.tsx        # Contact form
├── public/
│   └── static/
│       └── style.css          # Custom CSS and animations
├── migrations/
│   └── 0001_initial_schema.sql # Database schema
├── dist/                      # Build output (gitignored)
├── .wrangler/                 # Local D1 database (gitignored)
├── ecosystem.config.cjs       # PM2 configuration
├── wrangler.jsonc             # Cloudflare configuration
├── package.json               # Dependencies and scripts
└── vite.config.ts             # Vite build configuration
```

## Current Implementation Status

### ✅ Completed Features
1. **Homepage** - Dynamic hero gallery, philosophy statement, service overview, project teasers
2. **Services Page** - Three core services with detailed descriptions and Schema.org markup
3. **Team Page** - Tim Jacobs featured profile with Person schema, leadership team grid
4. **Contact Page** - Functional form with D1 database integration, lead capture, and email notifications
5. **Email Notifications** - Fully functional email system with Resend API
   - Contact form submissions send notifications to admin and confirmation to user
   - Whitepaper registration sends approval request to admin and pending confirmation to user
   - User approval sends welcome email to approved users
   - All emails use branded HTML templates with G2 styling
6. **R2 Storage Integration** - ✅ **FULLY FUNCTIONAL** File upload and download system
   - Admin panel supports PDF file uploads with multipart/form-data
   - Secure download endpoint with authentication and tracking
   - Automatic file path generation with safe naming
   - File deletion removes both database record and R2 object
   - R2 bucket `g2-whitepapers` active in production
   - All file operations fully tested and working
7. **Projects Page** - Complete case study showcase with 43 projects
   - Filterable grid with 20+ category filters
   - Detailed project pages with hero images, supporting gallery (4 images each)
   - Categories: Sports Events, Sports Infrastructure, Sports Facilities, Cultural Events, Cultural Strategy, Innovation, Brand Activation, Media Events, International Relations, Major Events, Landmark Events, Interfaith Events, Thought Leadership, Luxury Events, and more
   - Featured projects: Qatar Olympic House London 2012, Xi Jinping visit, Putin visit, Queen Elizabeth II visit, Papal Mass, NEOM showcase, SeaWorld Yas Island opening, Qasr Al Watan opening, Red Sea Film Festival, Special Olympics, Paris Media Oasis Expo 2030, G20 India Media Oasis, and many more
6. **Database Schema** - Complete D1 migrations for all data models
7. **SEO Foundation** - Meta tags, Open Graph, Twitter Cards, Schema.org markup, comprehensive robots.txt with AI crawler support
8. **Group Page** - 9 subsidiary companies with Schema.org Brand markup and official URLs
9. **Navigation & Footer** - Responsive header and footer with mobile menu, legal page links (Terms of Service, Privacy Policy)
10. **API Endpoints** - Health check, database test, contact form submission, leads retrieval
11. **White Papers Gated Section** - Complete authentication system with admin approval workflow
    - User registration with comprehensive form (name, company, job title, email, credentials)
    - Session-based authentication with secure HTTP-only cookies
    - Admin approval workflow with pending/approved states
    - Protected whitepaper listing page with download tracking
    - Admin CMS for user management and whitepaper content management
    - Email notification system (Resend/SendGrid/Mailgun integration ready)
    - Download tracking and analytics
12. **Projects Portal Authentication** - Complete authentication system mirroring Whitepapers
    - Cloudflare Workers-compatible authentication (Web Crypto API, no Node.js dependencies)
    - User registration with admin approval (is_active=0 by default)
    - Session-based authentication with HttpOnly cookies
    - Protected routes requiring authentication (`/projects`, `/projects/:slug`)
    - Activity logging and failed login attempt tracking
    - Admin user created (g2admin@g2middleeast.com)
    - Two separate D1 databases: `webapp-production` (Whitepapers) and `g2-projects-db` (Projects)
13. **Legal Pages** - GCC-compliant legal documentation
    - Terms of Service (13 sections, 23,775 characters) covering eligibility, confidentiality, intellectual property, Dubai UAE governing law with DIAC arbitration
    - Privacy Policy (15 sections, 29,152 characters) with GDPR-aligned data protection, covering all 6 GCC countries, user rights, breach notifications, cookie policy
    - Footer links to both legal pages with clean URL structure (`/terms-of-service`, `/privacy-policy`)
14. **Comprehensive robots.txt** - AI crawler and search engine configuration (423 lines)
    - Allow all major AI crawlers (GPTBot, Claude-Web, Google-Extended, PerplexityBot, CCBot, cohere-ai, anthropic-ai)
    - Allow all search engines (Googlebot, Bingbot, DuckDuckBot, YandexBot, Baiduspider)
    - Allow full access to `/projects/` area (including authenticated pages)
    - Allow `/team/tim-jacobs` profile
    - Allow `/briefing/` content (Perspectives)
    - BLOCK `/whitepaper/` and `/whitepapers/` completely
    - Block admin areas (`/api/admin/`, `/admin/*`)
    - Block malicious scrapers (AhrefsBot, SemrushBot, MJ12bot, DotBot, BLEXBot, PetalBot, serpstatbot, ZoominfoBot)
    - Set appropriate crawl delays (0.5-5 seconds depending on crawler type)

### 🚧 Pending Implementation
1. **Newsletter Subscription** - Email capture for The G-2 Briefing
2. **Search Functionality** - Site-wide content search
3. **Production R2 Setup** - Enable R2 in Cloudflare Dashboard and create bucket

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Cloudflare account (for production deployment)

### Local Development

```bash
# Install dependencies
npm install

# Apply database migrations
npm run db:migrate:local

# Build the project
npm run build

# Start development server with PM2
pm2 start ecosystem.config.cjs

# Or use npm script
npm run dev:d1

# Test the site
curl http://localhost:3000
```

### Database Management

```bash
# Apply migrations locally
npm run db:migrate:local

# Reset local database
npm run db:reset

# Query local database
npm run db:console:local

# Apply migrations to production (requires API key)
npm run db:migrate:prod
```

## White Paper Gated Section

### Overview
The white paper section is a secure, gated area requiring user registration and admin approval. It provides controlled access to premium content while capturing qualified leads.

### User Flow
1. **Registration**: Users complete comprehensive form with business details
2. **Pending Approval**: System shows pending status and sends confirmation email
3. **Admin Notification**: Tim receives email with one-click approval link
4. **Admin Review**: Admin reviews user details in dashboard and approves/denies
5. **User Notification**: Approved users receive email with login credentials
6. **Access Granted**: Users can login and download all available whitepapers
7. **Download Tracking**: System logs all downloads for analytics

### Key Features
- **Session-based authentication** with secure HTTP-only cookies
- **Password hashing** using Web Crypto API SHA-256
- **Multi-state approval workflow** (pending → approved)
- **Email notifications** at each stage (registration, approval)
- **Admin CMS** for user and content management
- **Download analytics** tracking user engagement
- **Protected routes** with middleware authentication checks

### Pages
- `/whitepapers/login` - User login page
- `/whitepapers/register` - Registration form with all required fields
- `/whitepapers/pending` - Success page after registration
- `/whitepapers` - Protected whitepaper listing (requires login)
- `/admin/users` - Admin user management dashboard
- `/admin/whitepapers` - Admin content management CMS

### Email Integration
The system is fully configured with **Resend** API for transactional emails:
- **Status**: ✅ Active and tested
- **Provider**: Resend (re_Pf847H5F...)
- **From Email**: noreply@g2middleeast.com
- **Admin Email**: tim@ktsglobal.live

**Email Notifications Implemented**:
1. **Contact Form Submissions**:
   - Admin receives detailed notification with inquiry details
   - User receives confirmation email
2. **Whitepaper Registration**:
   - Admin receives approval request with user details and one-click approval link
   - User receives pending approval confirmation
3. **User Approval**:
   - Approved users receive welcome email with login link

The system also supports **SendGrid** and **Mailgun** as alternative providers.
For setup instructions, see [EMAIL_SETUP.md](EMAIL_SETUP.md)

### Test Credentials (Development)
- **Admin**: `username: admin`, `password: admin123`
- **Approved User**: `username: jsmith`, `password: test123`

## API Endpoints

### Public APIs

#### Health Check
```bash
GET /api/health
Response: { status: 'ok', message: '...', timestamp: '...' }
```

#### Contact Form Submission
```bash
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "phone": "+971 50 123 4567",
  "subject": "sovereign",
  "message": "I'm interested in nation branding services..."
}

Response: { 
  status: 'success', 
  message: '...', 
  leadId: 123 
}
```

### White Paper APIs

#### User Registration
```bash
POST /api/auth/register
Content-Type: application/x-www-form-urlencoded

full_name=John Smith
company=Acme Corp
job_title=Marketing Director
email=john@acme.com
username=jsmith
password=secure123
confirm_password=secure123

Response: 302 Redirect to /whitepapers/pending
```

#### User Login
```bash
POST /api/auth/login
Content-Type: application/x-www-form-urlencoded

username=jsmith
password=secure123

Response: 302 Redirect to /whitepapers (with session cookie)
```

#### Download Whitepaper (Authenticated)
```bash
GET /api/whitepapers/download/:id
Cookie: auth_session=...

Response: PDF file download (tracked in database)
```

### Admin APIs (Require Admin Authentication)

#### Get Recent Leads
```bash
GET /api/leads
Response: { 
  status: 'ok', 
  leads: [...], 
  count: 50 
}
```

#### Approve User
```bash
POST /api/admin/users/approve/:id
Response: 302 Redirect to /admin/users
```

#### Quick Approval (Email Link)
```bash
GET /admin/approve/:id
Response: HTML success page with confirmation
```

#### Toggle Whitepaper Status
```bash
POST /api/admin/whitepapers/toggle/:id
Response: 302 Redirect to /admin/whitepapers
```

## Deployment

### Prerequisites
1. **Cloudflare API Key** - Required for deployment
   - Go to: https://dash.cloudflare.com/profile/api-tokens
   - Create token with: Pages Edit, D1 Edit, R2 Edit permissions
   - Store in Deploy tab

2. **Create Production Database**
```bash
npx wrangler d1 create g2-production
# Copy database_id to wrangler.jsonc
```

3. **Create R2 Bucket**
```bash
npx wrangler r2 bucket create g2-assets
```

### Deploy to Cloudflare Pages

```bash
# Build the project
npm run build

# Create Pages project (first time only)
npx wrangler pages project create g2-middle-east \
  --production-branch main \
  --compatibility-date 2024-01-01

# Deploy to production
npm run deploy:prod

# Apply database migrations to production
npm run db:migrate:prod
```

### Environment Variables (Production)

Set these via Cloudflare dashboard or CLI:

```bash
# Email service configuration (required for notifications)
npx wrangler pages secret put EMAIL_SERVICE --project-name webapp
# Enter: resend (or sendgrid, mailgun)

npx wrangler pages secret put EMAIL_API_KEY --project-name webapp
# Enter your API key from email service provider

# Optional: Other integrations
npx wrangler pages secret put ANTHROPIC_API_KEY --project-name webapp
# (If using Claude API for content generation)
```

For detailed email setup, see [EMAIL_SETUP.md](EMAIL_SETUP.md)

## Design System

### Color Palette
- **Primary Dark**: `#1A1A1A` (g2-dark)
- **Darker Background**: `#0F0F0F` (g2-darker)
- **Accent Gold**: `#C9A961` (g2-gold)
- **Light Background**: `#F5F5F5` (g2-light)

### Typography
- **Sans-serif**: Inter (body text)
- **Serif**: Crimson Pro (headings, emphasis)

### Key UI Components
- **Hero Gallery** - Auto-rotating image gallery with overlay
- **Card Hover** - Elevated cards with gold shadow on hover
- **Button Styles** - Primary (gold gradient), Secondary (gold outline)
- **Form Inputs** - Dark backgrounds with gold focus states

## Schema.org Implementation

### Organization Schema (Sitewide)
- Organization name, description, URL
- Services catalog with offer listings
- Founder information

### Person Schema (Team Page)
- Tim Jacobs with job title, organization, alumni
- Optimized for LinkedIn and professional networks

### Article Schema (Blog Posts)
- Headline, author, publish date
- Featured images and descriptions

## SEO Strategy

### On-Page Optimization
- ✅ Unique meta titles and descriptions per page
- ✅ Semantic HTML structure (h1-h6 hierarchy)
- ✅ Open Graph and Twitter Card tags
- ✅ Descriptive alt text for images
- ✅ Internal linking structure

### LLM Pre-Seeding
- ✅ Clear, declarative content structure
- ✅ Q&A formatted service descriptions
- ✅ Schema.org markup for entity recognition
- ✅ Keyword-rich but natural language

### Target Keywords
- Sovereign branding Middle East
- Nation branding GCC
- Luxury brand positioning Dubai
- Strategic communications UAE
- High-stakes communications

## Performance Optimization

### Edge-Native Features
- **Global CDN** - Cloudflare's 300+ data centers
- **Zero Cold Starts** - Workers always warm
- **D1 Replication** - Globally distributed SQLite
- **Asset Optimization** - Automatic image compression

### Current Metrics (Target)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: > 95

## Security

### Implemented
- CORS enabled for API routes only
- Input validation on contact forms
- SQL injection protection (prepared statements)
- Rate limiting (via Cloudflare)

### Production Requirements
- Add authentication for admin endpoints
- Implement CSRF tokens for forms
- Set up WAF rules via Cloudflare
- Enable DDoS protection

## Roadmap

### Phase 2: Content & Features
- [✅] Complete Projects showcase (43 case studies)
  - Sports Events: Qatar Olympic House, Samsung Diamond League, FIBA 3x3, Special Olympics MENA
  - Cultural Events: Al Burda Festival, Bashayer, Qasr Al Hosn, Tuwaiq Oasis, Misk Art Week
  - Major Openings: SeaWorld Yas Island, Qasr Al Watan, Red Sea Film Festival concerts
  - NEOM Activations: The Line Experience, McLaren at The Line, Sports Hub, Milken Institute, UN Display
  - Media Events: Paris Media Oasis (Expo 2030), G20 India Media Oasis
  - Interfaith: Human Fraternity Anniversary
  - Infrastructure: Hazza Bin Zayed Stadium FIFA Upgrade
- [ ] Build The G-2 Briefing blog
- [✅] Implement whitepapers section
- [ ] Add newsletter subscription
- [ ] Upload G2 presentation to R2

### Phase 3: Advanced Features
- [ ] CMS integration (Sanity or Contentful)
- [ ] Search functionality
- [ ] Multi-language support (AR/EN)
- [ ] Client portal for project updates
- [ ] Analytics dashboard

### Phase 4: Growth
- [ ] Custom domain setup
- [ ] Email automation (SendGrid)
- [ ] CRM integration (HubSpot)
- [ ] A/B testing framework
- [ ] Lead scoring system

## Support & Maintenance

### Monitoring
- Cloudflare Analytics (built-in)
- PM2 logs for local development
- D1 query performance metrics

### Backup Strategy
- D1 automatic backups (Cloudflare)
- Git version control for code
- R2 versioning for assets

### Update Process
1. Make changes locally
2. Test with `npm run build && pm2 restart g2-middle-east`
3. Commit to git
4. Deploy: `npm run deploy:prod`
5. Apply DB migrations if needed: `npm run db:migrate:prod`

## Contributing

This is a private client project. For questions or support:
- **Developer**: Contact project maintainer
- **Client**: Contact Tim Jacobs at tim.jacobs@g2-middleeast.com

## License

Proprietary - © 2025 G-2 Middle East. All rights reserved.

---

**Last Updated**: October 28, 2025
**Status**: 🚀 **FULLY OPERATIONAL** - Complete Platform with R2 Storage Active
**Production URL**: https://g2-middle-east-zuj.pages.dev
**Features**: Authentication, Legal Pages, SEO, Email Notifications, ✅ **R2 File Storage (Active)**, 43 Project Case Studies
**R2 Bucket**: g2-whitepapers (✅ Operational)
**Project Scope**: Sports events, cultural programming, major venue openings, NEOM activations, media operations, interfaith events, luxury experiences

**Recent Completions (October 28, 2025)**:
- ✅ **R2 Storage FULLY ENABLED** - Complete file system operational
  - R2 bucket `g2-whitepapers` created and active in production
  - File uploads working via admin panel
  - Secure downloads with authentication and tracking
  - File deletion removes both DB records and R2 objects
  - Latest deployment: https://bb71d428.g2-middle-east-zuj.pages.dev
- ✅ **Production Deployment** - Live on Cloudflare Pages
  - Primary URL: https://g2-middle-east-zuj.pages.dev
  - Database migrations applied to production (both databases)
  - Production secrets configured (EMAIL_SERVICE, EMAIL_API_KEY)
  - Health checks passing, all features functional
- ✅ **Email Notification System** - Fully functional with Resend API
  - Contact form sends admin notifications and user confirmations
  - Whitepaper registration workflow sends approval requests and confirmations
  - User approval sends welcome emails to approved users
  - Database migration added for leads table
  - All email templates use branded HTML with G2 styling

**Previous Completions (January 15, 2025)**:
- ✅ Projects Portal authentication working exactly like Whitepapers (admin approval workflow)
- ✅ Registration form dropdown text colors fixed (dark text on white background)
- ✅ GCC-compliant legal pages (Terms of Service & Privacy Policy)
- ✅ Admin user created (g2admin@g2middleeast.com / G2G2G2)
- ✅ Comprehensive robots.txt with AI crawler support (423 lines)

**Next Steps**: 
1. ✅ ~~Configure email service (Resend/SendGrid/Mailgun) for production notifications~~ **COMPLETED**
2. ✅ ~~Set up R2 bucket for PDF file storage and uploads~~ **COMPLETED & ACTIVE**
3. ✅ ~~Deploy to Cloudflare Pages production environment~~ **COMPLETED** (live at g2-middle-east-zuj.pages.dev)
4. ✅ ~~Enable R2 in Cloudflare Dashboard~~ **COMPLETED** (g2-whitepapers bucket active)
5. Configure custom domain (g2middleeast.com)
6. Add whitepaper PDF files to R2 bucket via admin panel
7. Test complete whitepaper download workflow with real users
