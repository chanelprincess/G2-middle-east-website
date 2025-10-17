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

### Production (Pending Deployment)
- Will be deployed to: `https://g2-middle-east.pages.dev`
- Custom domain: TBD

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
```
g2-assets/
├── whitepapers/
│   ├── g2-middle-east-presentation.pdf
│   └── strategic-communications-guide.pdf
├── projects/
│   └── [project-slug]/
│       ├── hero.jpg
│       └── gallery-*.jpg
└── blog/
    └── [post-slug]/
        └── featured-image.jpg
```

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
4. **Contact Page** - Functional form with D1 database integration and lead capture
5. **Database Schema** - Complete D1 migrations for all data models
6. **SEO Foundation** - Meta tags, Open Graph, Twitter Cards, Schema.org markup
7. **Navigation & Footer** - Responsive header and footer with mobile menu
8. **API Endpoints** - Health check, database test, contact form submission, leads retrieval
9. **White Papers Gated Section** - Complete authentication system with admin approval workflow
   - User registration with comprehensive form (name, company, job title, email, credentials)
   - Session-based authentication with secure HTTP-only cookies
   - Admin approval workflow with pending/approved states
   - Protected whitepaper listing page with download tracking
   - Admin CMS for user management and whitepaper content management
   - Email notification system (Resend/SendGrid/Mailgun integration ready)
   - Download tracking and analytics

### 🚧 Pending Implementation
1. **Projects Page** - Filterable case study grid with detailed project pages
2. **The G-2 Briefing** - Blog listing and article pages
3. **R2 Integration** - Upload and serve whitepaper PDFs from R2 storage
4. **Email Service Configuration** - Add API key for production email notifications
5. **Newsletter Subscription** - Email capture for The G-2 Briefing
6. **Search Functionality** - Site-wide content search

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
The system supports three email service providers:
- **Resend** (recommended) - Modern API, best for Cloudflare Workers
- **SendGrid** - Established service, high volume support
- **Mailgun** - Flexible transactional email service

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
- [ ] Complete Projects showcase
- [ ] Build The G-2 Briefing blog
- [ ] Implement whitepapers section
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

**Last Updated**: October 17, 2025
**Status**: ✅ Core Features Complete - White Paper System Operational
**Next Steps**: 
1. Configure email service (Resend/SendGrid/Mailgun) for production notifications
2. Set up R2 bucket for PDF file storage and uploads
3. Deploy to Cloudflare Pages production environment
4. Complete Projects and Blog sections
5. Configure custom domain
