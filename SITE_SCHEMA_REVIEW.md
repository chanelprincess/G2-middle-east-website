# G2 Middle East Website - Complete Schema Review

**Date:** October 28, 2025  
**Version:** 1.0  
**Status:** Development (Authentication Disabled)

---

## Table of Contents

1. [Site Overview](#site-overview)
2. [URL Structure](#url-structure)
3. [Page Inventory](#page-inventory)
4. [Content Architecture](#content-architecture)
5. [Schema.org Markup](#schemaorg-markup)
6. [Database Schema](#database-schema)
7. [Authentication System](#authentication-system)
8. [API Endpoints](#api-endpoints)
9. [Static Assets](#static-assets)
10. [SEO & Meta Information](#seo--meta-information)

---

## 1. Site Overview

### Primary Purpose
Corporate website for G2 Middle East & Africa, showcasing strategic communications, event management, and sovereign advisory services.

### Technology Stack
- **Framework:** Hono (TypeScript)
- **Deployment:** Cloudflare Pages/Workers
- **Database:** Cloudflare D1 (SQLite) - 2 databases
- **Build Tool:** Vite 6.4.0
- **Runtime:** Cloudflare Workers (Edge)

### Production URL
- **Main:** https://g2-middle-east-zuj.pages.dev
- **Latest:** https://e9f19a15.g2-middle-east-zuj.pages.dev

---

## 2. URL Structure

### 2.1 Public Routes (No Authentication)

#### Main Navigation Pages
```
/                         - Homepage
/services                 - Services overview
/team                     - Team overview
/group                    - Group companies (Casta Diva)
/contact                  - Contact form
/perspectives             - Perspectives/Briefing overview
/briefing                 - Alias for /perspectives
```

#### Legal Pages
```
/terms-of-service         - Terms of Service (Abu Dhabi jurisdiction)
/terms                    - Alias for /terms-of-service
/privacy-policy           - Privacy Policy
/privacy                  - Alias for /privacy-policy
```

#### Dynamic Content Pages
```
/services/:slug           - Individual service detail pages
/team/:slug               - Individual team member profiles
/perspectives/:slug       - Individual perspective articles
```

### 2.2 Projects Portal (Authentication Temporarily Disabled)

#### Projects Pages
```
/projects                 - Projects listing (43 case studies)
/projects/:slug           - Individual project detail pages
```

**Project Slugs (43 total):**
1. neom-media-industry-showcase
2. neom-world-economic-forum-davos
3. xi-jinping-presidential-visit
4. queen-elizabeth-ii-state-visit
5. papal-mass-abu-dhabi
6. special-olympics-world-games
7. chanel-princess-dubai-brand-architecture
8. mubadala-investment-forum
9. red-sea-film-festival
10. neom-guest-experience
11. mdl-beast-xp-music-conference
12. formula-1-abu-dhabi-vip
13. vladimir-putin-state-visit
14. saudi-arabia-media-oasis-g20
15. qasr-al-hosn-festival
16. esports-world-cup-2025
17. global-citizen-f1-vip-gala
18. discover-neom-series
19. qatar-olympic-house
20. hazza-bin-zayed-stadium
21. samsung-diamond-league
22. neom-sports-hub
23. tuwaiq-oasis
24. fiba-3x3-abu-dhabi
25. the-line-experience
26. neom-milken-institute
27. neom-un-display
28. paris-media-oasis
29. g20-india-media-oasis
30. mclaren-the-line
31. bashayer
32. red-sea-film-festival-concerts
33. gq-gala-jeddah
34. hia-magazine-gala
35. museum-commission-strategy
36. misk-art-week
37. seaworld-yas-opening
38. qasr-al-watan-opening
39. human-fraternity-anniversary
40. special-olympics-mena-ceremony
41. al-burda-festival
42. parenthood-unconference
43. (One more - total 43)

#### Projects Authentication (Currently Disabled)
```
/projects/login           - Projects login page
/projects/register        - Projects registration
/projects/forgot-password - Password recovery
/projects/reset-password  - Password reset form
/projects/dashboard       - User dashboard (requires auth when enabled)
/projects/account         - Account management (requires auth when enabled)
```

### 2.3 Whitepapers Portal (Authentication Temporarily Disabled)

#### Whitepapers Pages
```
/whitepapers              - Whitepapers listing
/whitepapers/login        - Whitepapers login
/whitepapers/register     - Whitepapers registration
/whitepapers/pending      - Pending approval page
```

### 2.4 Admin Portal (Requires Authentication)

```
/admin/users              - User management
/admin/whitepapers        - Whitepaper management
```

### 2.5 Technical Routes

```
/robots.txt               - Robots.txt for SEO
/api/health               - Health check endpoint
/api/test-db              - Database connection test
```

---

## 3. Page Inventory

### 3.1 Core Marketing Pages (26 files)

| Page | File | Purpose | Schema.org |
|------|------|---------|------------|
| Homepage | `Home.tsx` | Main landing page | Organization, WebSite |
| Services | `Services.tsx` | Service offerings overview | ItemList, Service |
| Service Detail | `ServiceDetail.tsx` | Individual service pages | Service, Offer |
| Team | `Team.tsx` | Team member showcase | Organization, Person |
| Team Detail | `TeamDetail.tsx` | Individual profiles | Person, ProfilePage |
| Group | `Group.tsx` | Casta Diva Group companies | Organization, Brand |
| Contact | `Contact.tsx` | Contact form | ContactPage, ContactPoint |
| Perspectives | `Perspectives.tsx` | Insights/briefings listing | CollectionPage, Blog |
| Perspective Detail | `PerspectiveDetail.tsx` | Individual articles | Article, BlogPosting |
| Terms of Service | `TermsOfService.tsx` | Legal terms | WebPage |
| Privacy Policy | `PrivacyPolicy.tsx` | Privacy policy | WebPage |

### 3.2 Projects Portal Pages (8 files)

| Page | File | Purpose | Auth Required |
|------|------|---------|---------------|
| Projects Listing | `Projects.tsx` | 43 case studies | No (Temp) |
| Project Detail | `ProjectDetail.tsx` | Individual projects | No (Temp) |
| Projects Login | `ProjectsLogin.tsx` | Authentication | No |
| Projects Register | `ProjectsRegister.tsx` | New user signup | No |
| Projects Dashboard | `ProjectsDashboard.tsx` | User dashboard | Yes (when enabled) |
| Projects Account | `ProjectsAccount.tsx` | Account management | Yes (when enabled) |
| Forgot Password | `ProjectsForgotPassword.tsx` | Password recovery | No |
| Reset Password | `ProjectsResetPassword.tsx` | Password reset | No |

### 3.3 Whitepapers Portal Pages (4 files)

| Page | File | Purpose | Auth Required |
|------|------|---------|---------------|
| Whitepapers | `Whitepapers.tsx` | Document listing | No (Temp) |
| Login | `WhitepapersLogin.tsx` | Authentication | No |
| Register | `WhitepapersRegister.tsx` | New user signup | No |
| Pending | `WhitepapersPending.tsx` | Approval waiting | No |

### 3.4 Admin Pages (2 files)

| Page | File | Purpose | Auth Required |
|------|------|---------|---------------|
| User Management | `AdminUsers.tsx` | Approve/deny users | Yes |
| Whitepaper Management | `AdminWhitepapers.tsx` | Manage documents | Yes |

---

## 4. Content Architecture

### 4.1 Projects Content Structure

**Total:** 43 case studies

**Categories:**
- State-Level Events
- Sovereign Communications
- Luxury Brand Positioning
- Sports & Entertainment
- Cultural Events
- Strategic Advisory
- Destination Marketing
- VIP Experience Design

**Each Project Contains:**
- Slug (unique identifier)
- Title
- Subtitle
- Category
- Year
- Hero Image (URL)
- Hero Image Prompt (for regeneration)
- Engaging Paragraph (HTML formatted)
- Image Gallery (5 images with URLs and prompts)

**Special Attribution:**
- All projects include "Delivered by G2 Middle East staff" statements
- Portfolio Attribution section at bottom of Projects page
- References to Tim Jacobs as Project Director/Lead Consultant
- Predecessor organizations: HQWS, KTS Global

### 4.2 Services Content Structure

**Service Categories:**
1. Sovereign Communications & Nation Branding
2. Strategic Event Architecture
3. Crisis & Reputation Management
4. Luxury Brand Positioning
5. VIP Protocol & Experience Design
6. Media Relations & Public Affairs
7. Content Strategy & Production
8. Digital Strategy & Social Media

**Each Service Contains:**
- Slug
- Title
- Description
- Key deliverables
- Case examples
- Related projects

### 4.3 Team Content Structure

**Team Members:**
- Tim Jacobs (Regional Chief Operating Officer)
- Senior leadership profiles
- Operational staff

**Each Profile Contains:**
- Name
- Title
- Biography
- Experience history
- Notable projects
- Professional background
- Schema.org Person markup

### 4.4 Perspectives Content Structure

**Article Types:**
- Strategic insights
- Market intelligence
- Thought leadership
- Industry analysis

**Each Article Contains:**
- Title
- Author
- Publication date
- Featured image
- Article content (HTML)
- Category tags
- Schema.org Article markup

### 4.5 Group Companies

**9 Casta Diva Group Companies:**
1. G2 Eventi - Live Communication
2. Genius Progetti - Luxury Experiences
3. Blue Note Milano - Music & Entertainment
4. Castadiva Art & Show - Cultural Events
5. FirstClass - Scientific Events (URL: https://www.fclassevents.com/en/home_eng/)
6. AgenZy - Digital Strategy
7. Castadiva Pictures - Content Production
8. Akita Film - Film Production
9. E-Motion - Video Production (URL: https://www.e-motion.tv/)

---

## 5. Schema.org Markup

### 5.1 Organization Schema (Global)

**Applied to:** All pages via Layout component

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.g2middleeast.com/#organization",
  "name": "G2 Middle East",
  "alternateName": "G2 Middle East & Africa",
  "url": "https://www.g2middleeast.com/",
  "logo": "https://www.g2middleeast.com/assets/logo-g2me.svg",
  "description": "Strategic communications and sovereign advisory",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mazyad 3, MBZ City",
    "addressLocality": "Abu Dhabi",
    "addressCountry": "AE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "New Business & Strategic Enquiries",
    "email": "contact@g2middleeast.com",
    "telephone": "+971 50 123 4567"
  }
}
```

### 5.2 WebSite Schema (Homepage)

```json
{
  "@type": "WebSite",
  "@id": "https://www.g2middleeast.com/#website",
  "url": "https://www.g2middleeast.com/",
  "name": "G2 Middle East",
  "publisher": {
    "@id": "https://www.g2middleeast.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.g2middleeast.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 5.3 Service Schema

Applied to each service page with:
- Service name and description
- Provider (G2 Middle East)
- Service type
- Area served (GCC)
- Offers and pricing information

### 5.4 Person Schema (Team Pages)

Each team member has:
- Person profile
- Job title
- Work history
- Education
- Notable projects (Event schema for each)
- Contact information

### 5.5 Article Schema (Perspectives)

Each article includes:
- Headline
- Author
- Publication date
- Article body
- Featured image
- Publisher information

### 5.6 Brand Schema (Group Companies)

Each group company has:
- Brand name
- URL
- Parent organization
- Industry category

---

## 6. Database Schema

### 6.1 Database: `webapp-production` (Whitepapers)

**Tables:**

#### `users`
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  is_admin INTEGER DEFAULT 0,
  is_active INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

#### `whitepapers`
```sql
CREATE TABLE whitepapers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  download_count INTEGER DEFAULT 0,
  is_active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

#### `downloads`
```sql
CREATE TABLE downloads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  whitepaper_id INTEGER NOT NULL,
  downloaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (whitepaper_id) REFERENCES whitepapers(id)
)
```

#### `contact_leads`
```sql
CREATE TABLE contact_leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  consent INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

### 6.2 Database: `g2-projects-db` (Projects Portal)

**Tables:**

#### `users`
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT,
  title TEXT,
  access_level TEXT DEFAULT 'basic',
  is_active INTEGER DEFAULT 1,
  email_verified INTEGER DEFAULT 0,
  nda_accepted INTEGER DEFAULT 0,
  last_login DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

#### `projects`
```sql
CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  category TEXT NOT NULL,
  year TEXT,
  description TEXT,
  access_level TEXT DEFAULT 'basic',
  is_published INTEGER DEFAULT 1,
  view_count INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

#### `documents`
```sql
CREATE TABLE documents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER,
  title TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT,
  file_size INTEGER,
  access_level TEXT DEFAULT 'basic',
  download_count INTEGER DEFAULT 0,
  FOREIGN KEY (project_id) REFERENCES projects(id)
)
```

#### `activity_log`
```sql
CREATE TABLE activity_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  action TEXT NOT NULL,
  resource_type TEXT,
  resource_id INTEGER,
  ip_address TEXT,
  user_agent TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

#### `verification_tokens`
```sql
CREATE TABLE verification_tokens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  token TEXT UNIQUE NOT NULL,
  token_type TEXT DEFAULT 'email_verification',
  expires_at DATETIME NOT NULL,
  used INTEGER DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id)
)
```

#### `password_reset_tokens`
```sql
CREATE TABLE password_reset_tokens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  token TEXT UNIQUE NOT NULL,
  expires_at DATETIME NOT NULL,
  used INTEGER DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id)
)
```

#### `sessions`
```sql
CREATE TABLE sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  session_token TEXT UNIQUE NOT NULL,
  expires_at DATETIME NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
)
```

### 6.3 Sample Data in Projects Database

**Sample Project (from migrations):**
```sql
INSERT INTO projects (slug, title, subtitle, category, year, description, access_level) VALUES 
('cop27-climate-summit-egypt', 'COP27 Climate Summit Egypt', 'Global Climate Leadership', 'International Summits', '2022', 'Strategic communications for COP27', 'premium');
```

**Note:** This project exists in database but not in ProjectDetail.tsx static data.

---

## 7. Authentication System

### 7.1 Current Status
⚠️ **TEMPORARILY DISABLED FOR DEVELOPMENT**

**Disabled Routes:**
- `/projects` - Projects listing
- `/projects/:slug` - Individual projects
- `/whitepapers` - Whitepapers listing

**Restoration Required Before Production**

### 7.2 Authentication Methods

#### Projects Portal
- **Method:** Cookie-based sessions with JWT
- **Password Hashing:** Web Crypto API (SHA-256)
- **Cookie:** `projects_auth_session` (HttpOnly, Secure, SameSite=Strict)
- **Session Duration:** 7 days default, 30 days with "Remember Me"

#### Whitepapers Portal
- **Method:** Cookie-based sessions
- **Password Hashing:** bcrypt (Node.js compatible)
- **Cookie:** `auth_session`
- **Admin Approval:** Required for new registrations

#### Admin Portal
- **Method:** Same as Whitepapers
- **Special Permissions:** `is_admin = 1` flag
- **Additional Security:** IP logging, activity tracking

### 7.3 Production Credentials

**Projects Portal:**
- Email: `g2admin@g2middleeast.com`
- Password: `G2G2G2`
- Access Level: Premium
- NDA Accepted: Yes

**Database Location:**
- Production: Cloudflare D1 (remote)
- Local Development: `.wrangler/state/v3/d1/` (SQLite files)

---

## 8. API Endpoints

### 8.1 Public APIs

#### Contact Form
```
POST /api/contact
Body: { name, email, company, phone, subject, message, consent }
Response: { success: true, message }
```

#### Health Check
```
GET /api/health
Response: { status: "healthy", timestamp }
```

#### Database Test
```
GET /api/test-db
Response: { success: true, databases, message }
```

#### Leads Export
```
GET /api/leads
Response: CSV file with all contact leads
```

### 8.2 Projects Authentication APIs

#### Register
```
POST /api/projects/auth/register
Body: { name, email, password, company, title, consent }
Response: { user, message }
```

#### Login
```
POST /api/projects/auth/login
Body: { email, password, remember_me }
Response: Sets cookie, redirects to /projects/dashboard
```

#### Logout
```
GET /api/projects/auth/logout
Response: Clears cookie, redirects to /projects/login
```

#### Forgot Password
```
POST /api/projects/auth/forgot-password
Body: { email }
Response: { success: true, message }
```

#### Reset Password
```
POST /api/projects/auth/reset-password
Body: { token, password }
Response: { success: true, message }
```

### 8.3 Projects Account Management APIs

#### Update Profile
```
POST /api/projects/account/update-profile
Auth: Required
Body: { name, company, title }
Response: { success: true, user }
```

#### Change Password
```
POST /api/projects/account/change-password
Auth: Required
Body: { current_password, new_password }
Response: { success: true }
```

#### Accept NDA
```
POST /api/projects/account/accept-nda
Auth: Required
Response: { success: true }
```

#### Delete Account
```
GET /api/projects/account/delete
Auth: Required
Response: { success: true }
```

### 8.4 Whitepapers Authentication APIs

#### Register
```
POST /api/auth/register
Body: { email, password, name }
Response: { success: true, message }
```

#### Login
```
POST /api/auth/login
Body: { email, password }
Response: Sets cookie, redirects to /whitepapers
```

#### Logout
```
GET /api/auth/logout
Response: Clears cookie, redirects to /whitepapers/login
```

### 8.5 Admin APIs

#### Approve User
```
POST /api/admin/users/approve/:id
Auth: Admin required
Response: { success: true }
```

#### Deny User
```
POST /api/admin/users/deny/:id
Auth: Admin required
Response: { success: true }
```

---

## 9. Static Assets

### 9.1 Directory Structure

```
/home/user/webapp/
├── public/                  # Static files served at root
│   └── static/             # Accessible at /static/*
│       ├── style.css       # Custom global styles
│       ├── app.js          # Frontend JavaScript (if any)
│       └── images/         # Static images
├── dist/                   # Build output
│   ├── _worker.js          # Compiled Hono app (614 KB)
│   ├── _routes.json        # Cloudflare routing config
│   └── static/            # Copied from public/
```

### 9.2 CDN Resources

**Tailwind CSS:**
```html
<script src="https://cdn.tailwindcss.com"></script>
```

**Font Awesome Icons:**
```html
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet"/>
```

**Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
```

### 9.3 Image Hosting

**Primary:**
- GenSpark Base64 Upload: `https://page.gensparksite.com/v1/base64_upload/[hash]`
- Unsplash CDN: `https://images.unsplash.com/photo-[id]?w=800&q=80`

**Image Types:**
- Hero images (1600px width)
- Gallery images (800px width)
- Team photos
- Project images
- Company logos

---

## 10. SEO & Meta Information

### 10.1 Meta Tags Structure

**All pages include:**
```html
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Page Title | G2 Middle East</title>
<meta name="description" content="Page description"/>
<meta name="keywords" content="strategic communications, sovereign branding, luxury positioning, intangible value, Middle East strategy"/>
```

**Open Graph:**
```html
<meta property="og:type" content="website"/>
<meta property="og:title" content="Page Title | G2 Middle East"/>
<meta property="og:description" content="Page description"/>
<meta property="og:site_name" content="G2 Middle East"/>
```

**Twitter:**
```html
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Page Title | G2 Middle East"/>
<meta name="twitter:description" content="Page description"/>
```

### 10.2 Robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /projects/login
Disallow: /projects/register
Disallow: /whitepapers/login
Disallow: /whitepapers/register

Sitemap: https://www.g2middleeast.com/sitemap.xml
```

### 10.3 SEO Best Practices

✅ **Implemented:**
- Schema.org structured data on all pages
- Semantic HTML5 elements
- Descriptive page titles
- Meta descriptions (under 160 chars)
- Alt text for images
- Internal linking structure
- Mobile-responsive design
- Fast loading (Cloudflare Edge)

⚠️ **To Implement:**
- Sitemap.xml generation
- Canonical URLs
- hreflang tags (if multilingual)
- Image optimization/lazy loading
- Open Graph images

---

## 11. Key Files Reference

### 11.1 Core Application Files

| File | Purpose | Lines |
|------|---------|-------|
| `src/index.tsx` | Main application router | ~1,900 |
| `src/components/Layout.tsx` | Global layout/header/footer | ~500 |
| `src/lib/projects-auth.ts` | Projects authentication utilities | ~300 |
| `wrangler.jsonc` | Cloudflare configuration | ~50 |
| `vite.config.ts` | Build configuration | ~20 |
| `package.json` | Dependencies & scripts | ~50 |

### 11.2 Page Components

**Largest Files:**
- `ProjectDetail.tsx` - 126,900 bytes (43 projects)
- `PerspectiveDetail.tsx` - 89,733 bytes
- `Team.tsx` - 76,482 bytes
- `Home.tsx` - 39,512 bytes
- `Services.tsx` - 33,774 bytes
- `Group.tsx` - 29,052 bytes

### 11.3 Configuration Files

```
/home/user/webapp/
├── wrangler.jsonc              # Cloudflare config
├── vite.config.ts              # Build config
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies
├── .gitignore                  # Git ignore rules
├── ecosystem.config.cjs        # PM2 config (development)
├── RESTORE_AUTHENTICATION.md   # Auth restoration guide
├── LOCATION_UPDATE_SUMMARY.md  # Recent changes log
└── SITE_SCHEMA_REVIEW.md       # This document
```

---

## 12. Content Management

### 12.1 Static Content (Hardcoded)

**Location:** Page component files

- **Projects:** `ProjectDetail.tsx` - 43 case studies
- **Services:** `Services.tsx` & `ServiceDetail.tsx`
- **Team:** `Team.tsx` & `TeamDetail.tsx`
- **Perspectives:** `PerspectiveDetail.tsx`
- **Group Companies:** `Group.tsx`

**Editing Process:**
1. Modify TypeScript/TSX files
2. Rebuild: `npm run build`
3. Deploy: `npx wrangler pages deploy dist --project-name g2-middle-east`
4. Push to GitHub: `git push origin main`

### 12.2 Dynamic Content (Database)

**Location:** Cloudflare D1 databases

- **Whitepapers:** `webapp-production` database
- **Contact Leads:** `webapp-production` database
- **Projects Metadata:** `g2-projects-db` database (not currently used)

**Management:**
- Whitepapers: Admin panel at `/admin/whitepapers`
- Users: Admin panel at `/admin/users`
- Contact Leads: Export via `/api/leads`

---

## 13. Deployment Architecture

### 13.1 Build Process

```bash
# 1. Install dependencies
npm install

# 2. Build for production
npm run build
# Creates: dist/_worker.js (614 KB)
#          dist/_routes.json
#          dist/static/*

# 3. Deploy to Cloudflare
npx wrangler pages deploy dist --project-name g2-middle-east
```

### 13.2 Environment Variables

**None required for basic operation**

Optional:
- `CLOUDFLARE_API_TOKEN` - For deployment
- Database IDs - In wrangler.jsonc

### 13.3 Database Setup

**Local Development:**
```bash
# Apply migrations
npx wrangler d1 migrations apply webapp-production --local
npx wrangler d1 migrations apply g2-projects-db --local

# Seed data
npx wrangler d1 execute webapp-production --local --file=./seed.sql
```

**Production:**
```bash
# Apply migrations
npx wrangler d1 migrations apply webapp-production
npx wrangler d1 migrations apply g2-projects-db

# Create admin user (already done)
# User: g2admin@g2middleeast.com / G2G2G2
```

---

## 14. Known Issues & Technical Debt

### 14.1 Authentication Disabled (Temporary)

⚠️ **CRITICAL:** Authentication is disabled for development
- **Affected Routes:** `/projects`, `/projects/:slug`, `/whitepapers`
- **Security Risk:** High (if left in production)
- **Resolution:** Follow `RESTORE_AUTHENTICATION.md` before production
- **Commits to Revert:**
  - 634941f - Main auth bypass
  - 75143b3 - Project detail auth bypass

### 14.2 Missing Features

- [ ] Sitemap.xml generation
- [ ] RSS feed for Perspectives
- [ ] Search functionality
- [ ] Newsletter subscription
- [ ] Social media sharing
- [ ] Analytics integration
- [ ] A/B testing framework

### 14.3 Content Gaps

- [ ] COP27 project not in static data (exists in DB only)
- [ ] Some service detail pages may be incomplete
- [ ] Team member photos may need updating
- [ ] Group company descriptions could be expanded

### 14.4 Technical Improvements

- [ ] Image optimization/compression
- [ ] Lazy loading implementation
- [ ] Service worker for offline support
- [ ] Progressive Web App features
- [ ] Automated testing
- [ ] CI/CD pipeline
- [ ] Environment-based configuration

---

## 15. Access Information

### 15.1 Production Access

**Website:** https://g2-middle-east-zuj.pages.dev

**Admin Credentials (when auth enabled):**
- Projects: g2admin@g2middleeast.com / G2G2G2
- Whitepapers: Admin panel access

### 15.2 Development Access

**GitHub Repository:**
- URL: https://github.com/chanelprincess/G2-middle-east-website
- Branch: main
- Owner: chanelprincess

**Cloudflare Pages:**
- Project: g2-middle-east
- Account: (Configured via wrangler)

**Databases:**
- `webapp-production` (ID: 14fee0cd-bce9-407d-ba8c-ed3a0d01181a)
- `g2-projects-db` (ID: 956fedce-94ef-4edf-a17c-15f7987a42cd)

---

## 16. Contact & Support

### 16.1 Website Contact

**Email:** contact@g2middleeast.com  
**Phone:** +971 50 123 4567  
**Address:** Mazyad 3, MBZ City, Abu Dhabi, UAE

**Form:** https://g2-middle-east-zuj.pages.dev/contact

### 16.2 Technical Contact

**Regional COO:** Tim Jacobs  
**Email:** tim@g2middleeast.com

---

## 17. Recent Changes Log

### October 28, 2025

1. **Location Update**
   - Changed from Dubai, UAE to Abu Dhabi, UAE
   - Updated address: Mazyad 3, MBZ City Abu Dhabi
   - Updated legal jurisdiction in Terms of Service
   - Changed arbitration from DIAC to ADCCAC

2. **Portfolio Attribution**
   - Moved from top to bottom of Projects page
   - Added styled gold-bordered presentation box
   - Maintained all legal disclaimers

3. **Group Company URLs**
   - FirstClass: Updated to https://www.fclassevents.com/en/home_eng/
   - E-Motion: Updated to https://www.e-motion.tv/

4. **Authentication Changes**
   - Temporarily disabled for Projects and Whitepapers
   - Added comprehensive restoration documentation
   - Marked with TODO comments for production

---

## 18. Schema.org Implementation Summary

### Pages with Structured Data

| Page | Schema Types |
|------|--------------|
| Homepage | Organization, WebSite |
| Services | ItemList, Service |
| Service Detail | Service, Offer |
| Team | Organization, Person (multiple) |
| Team Detail | Person, ProfilePage, Event |
| Group | Organization, CollectionPage, Brand (9) |
| Projects | CollectionPage (when enabled) |
| Project Detail | Event, CreativeWork |
| Perspectives | CollectionPage, Blog |
| Perspective Detail | Article, BlogPosting |
| Contact | ContactPage, ContactPoint |

### Breadcrumbs Implemented

✅ All major pages have BreadcrumbList schema:
- Home → Services → Service Detail
- Home → Team → Team Member
- Home → Group
- Home → Projects → Project Detail
- Home → Perspectives → Article

---

## Appendix A: Complete Route Map

```
Public Routes (26)
├── / (Homepage)
├── /services (Services Overview)
├── /services/:slug (Service Details - Dynamic)
├── /team (Team Overview)
├── /team/:slug (Team Member - Dynamic)
├── /group (Group Companies)
├── /contact (Contact Form)
├── /perspectives (Perspectives Listing)
├── /briefing (Alias → /perspectives)
├── /perspectives/:slug (Article - Dynamic)
├── /terms-of-service (Legal)
├── /terms (Alias → /terms-of-service)
├── /privacy-policy (Legal)
├── /privacy (Alias → /privacy-policy)
└── /robots.txt (SEO)

Projects Portal (8)
├── /projects (Listing - 43 case studies)
├── /projects/:slug (Project Detail - 43 pages)
├── /projects/login (Authentication)
├── /projects/register (Signup)
├── /projects/forgot-password (Recovery)
├── /projects/reset-password (Reset)
├── /projects/dashboard (User Dashboard - Auth required when enabled)
└── /projects/account (Account Settings - Auth required when enabled)

Whitepapers Portal (4)
├── /whitepapers (Listing)
├── /whitepapers/login (Authentication)
├── /whitepapers/register (Signup)
└── /whitepapers/pending (Approval Waiting)

Admin Portal (2)
├── /admin/users (User Management - Auth required)
└── /admin/whitepapers (Document Management - Auth required)

API Endpoints (20+)
├── /api/health (Health Check)
├── /api/test-db (Database Test)
├── /api/contact (Contact Form)
├── /api/leads (Leads Export)
├── /api/projects/auth/* (Projects Auth - 5 endpoints)
├── /api/projects/account/* (Account Management - 4 endpoints)
├── /api/auth/* (Whitepapers Auth - 3 endpoints)
└── /api/admin/* (Admin Actions - 2 endpoints)
```

---

## Appendix B: Database Entity Relationships

```
webapp-production Database:
  users (1) ──< downloads >── (N) whitepapers
  
  contact_leads (independent)

g2-projects-db Database:
  users (1) ──< activity_log (N)
  users (1) ──< sessions (N)
  users (1) ──< verification_tokens (N)
  users (1) ──< password_reset_tokens (N)
  
  projects (1) ──< documents (N)
  projects (independent for metadata)
```

---

**Document Version:** 1.0  
**Last Updated:** October 28, 2025  
**Status:** Development (Authentication Disabled)  
**Next Review:** Before Production Deployment

---

**END OF SCHEMA REVIEW**
