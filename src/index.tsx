import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { HomePage } from './pages/Home'
import { ServicesPage } from './pages/Services'
import { TeamPage } from './pages/Team'
import { ContactPage } from './pages/Contact'
import { GroupPage } from './pages/Group'
import { ServiceDetailPage, servicesData } from './pages/ServiceDetail'
import { TeamDetailPage, teamData } from './pages/TeamDetail'
import { ProjectsPage } from './pages/Projects'
import { ProjectDetailPage, projectsData } from './pages/ProjectDetail'
import { PerspectivesPage } from './pages/Perspectives'
import { PerspectiveDetailPage, perspectivesData } from './pages/PerspectiveDetail'
import { WhitepapersLoginPage } from './pages/WhitepapersLogin'
import { WhitepapersRegisterPage } from './pages/WhitepapersRegister'
import { WhitepapersPendingPage } from './pages/WhitepapersPending'
import { WhitepapersPage } from './pages/Whitepapers'
import { AdminUsersPage } from './pages/AdminUsers'
import { AdminWhitepapersPage } from './pages/AdminWhitepapers'
import { ProjectsLoginPage } from './pages/ProjectsLogin'
import { ProjectsRegisterPage } from './pages/ProjectsRegister'
import { ProjectsDashboardPage } from './pages/ProjectsDashboard'
import { ProjectsAccountPage } from './pages/ProjectsAccount'
import { ProjectsForgotPasswordPage } from './pages/ProjectsForgotPassword'
import { ProjectsResetPasswordPage } from './pages/ProjectsResetPassword'
import { TermsOfServicePage } from './pages/TermsOfService'
import { PrivacyPolicyPage } from './pages/PrivacyPolicy'
import { hashPassword, verifyPassword, setAuthCookie, getAuthSession, clearAuthCookie, requireAuth, requireAdmin } from './utils/auth'
import { sendEmail, getAdminApprovalEmail, getUserApprovedEmail, getRegistrationPendingEmail } from './utils/email'
import * as ProjectsAuth from './lib/projects-auth'
import { requireProjectsAuth, logActivity, setProjectsAuthCookie, getProjectsAuthSession, clearProjectsAuthCookie } from './lib/projects-auth'

type Bindings = {
  DB: D1Database
  PROJECTS_DB: D1Database
  R2: R2Bucket
  SESSIONS_KV?: KVNamespace
  EMAIL_API_KEY?: string
  EMAIL_SERVICE?: string
  JWT_SECRET?: string
  SITE_URL?: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Serve robots.txt with inline content
app.get('/robots.txt', (c) => {
  const robotsTxt = `# robots.txt for G2 Middle East
# Updated: 2025-01-15
# Purpose: Allow AI crawlers and search engines full access except whitepaper section

# ============================================
# UNIVERSAL RULES - Apply to All Bots
# ============================================

User-agent: *
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /white-paper/
Disallow: /white-papers/
Disallow: /api/admin/
Disallow: /admin/login
Disallow: /admin/dashboard
Disallow: /*.json$
Disallow: /*?token=
Disallow: /*?reset=
Disallow: /projects/verify-email
Disallow: /projects/reset-password

# Allow projects area (authenticated content is fine to crawl)
Allow: /projects/
Allow: /projects/dashboard
Allow: /projects/case-studies/
Allow: /projects/login
Allow: /projects/register

# Allow team pages and Tim Jacobs profile
Allow: /team/
Allow: /team/tim-jacobs

# Allow insights and public content
Allow: /briefing/
Allow: /perspectives/
Allow: /contact/
Allow: /services/

# Sitemap location
Sitemap: https://g2middleeast.com/sitemap.xml
Sitemap: https://g2middleeast.com/sitemap-projects.xml


# ============================================
# OPENAI GPT CRAWLER (ChatGPT)
# ============================================

User-agent: GPTBot
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 1


# ============================================
# ANTHROPIC CLAUDE CRAWLER
# ============================================

User-agent: Claude-Web
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 1


# ============================================
# GOOGLE AI (BARD/GEMINI)
# ============================================

User-agent: Google-Extended
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 1


# ============================================
# PERPLEXITY AI CRAWLER
# ============================================

User-agent: PerplexityBot
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 1


# ============================================
# COMMON CRAWL (Used by many AI models)
# ============================================

User-agent: CCBot
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 2


# ============================================
# COHERE AI CRAWLER
# ============================================

User-agent: cohere-ai
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 1


# ============================================
# META AI (Facebook/Instagram AI)
# ============================================

User-agent: FacebookBot
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 1

User-agent: meta-externalagent
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 1


# ============================================
# AMAZON ALEXA
# ============================================

User-agent: ia_archiver
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 2


# ============================================
# APPLE APPLEBOT (Siri, Spotlight)
# ============================================

User-agent: Applebot
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 1

User-agent: Applebot-Extended
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 1


# ============================================
# GOOGLE SEARCH CRAWLER
# ============================================

User-agent: Googlebot
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 0.5

User-agent: Googlebot-Image
Allow: /
Disallow: /whitepaper/
Disallow: /api/admin/

User-agent: Googlebot-News
Allow: /
Disallow: /whitepaper/
Disallow: /api/admin/
Allow: /briefing/


# ============================================
# BING SEARCH CRAWLER
# ============================================

User-agent: Bingbot
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 1


# ============================================
# YANDEX SEARCH CRAWLER
# ============================================

User-agent: YandexBot
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 2


# ============================================
# BAIDU SEARCH CRAWLER (China)
# ============================================

User-agent: Baiduspider
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 2


# ============================================
# DUCKDUCKGO SEARCH CRAWLER
# ============================================

User-agent: DuckDuckBot
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 1


# ============================================
# ACADEMIC & RESEARCH CRAWLERS
# ============================================

User-agent: Scrapy
Disallow: /

User-agent: archive.org_bot
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 5

User-agent: Wayback Machine
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Crawl-delay: 5


# ============================================
# SOCIAL MEDIA CRAWLERS
# ============================================

User-agent: Twitterbot
Allow: /
Disallow: /whitepaper/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/

User-agent: LinkedInBot
Allow: /
Disallow: /whitepaper/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/

User-agent: Slackbot
Allow: /
Disallow: /whitepaper/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/


# ============================================
# BLOCK MALICIOUS/SCRAPER BOTS
# ============================================

User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: BLEXBot
Disallow: /

User-agent: PetalBot
Disallow: /

User-agent: DataForSeoBot
Disallow: /

User-agent: serpstatbot
Disallow: /

User-agent: ZoominfoBot
Disallow: /


# ============================================
# EMERGING AI CRAWLERS
# ============================================

User-agent: anthropic-ai
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 1

User-agent: Omgilibot
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 2

User-agent: YouBot
Allow: /
Disallow: /whitepaper/
Disallow: /whitepapers/
Disallow: /api/admin/
Allow: /projects/
Allow: /team/tim-jacobs
Allow: /briefing/
Crawl-delay: 1


# ============================================
# NOTES & DOCUMENTATION
# ============================================

# This robots.txt file is configured to:
# 1. Allow all major AI crawlers (ChatGPT, Claude, Gemini, Perplexity, etc.)
# 2. Allow all major search engines (Google, Bing, DuckDuckGo, etc.)
# 3. Allow full access to /projects/ area (including authenticated pages)
# 4. Allow full access to /team/tim-jacobs profile
# 5. Allow full access to /briefing/ content (Perspectives)
# 6. BLOCK all access to /whitepaper/ and /whitepapers/ directories
# 7. BLOCK admin areas and sensitive API endpoints
# 8. BLOCK malicious scrapers and SEO bots
# 9. Set appropriate crawl delays to prevent server overload

# For questions or modifications, contact: tim@g2middleeast.com
`
  return c.text(robotsTxt, 200, {
    'Content-Type': 'text/plain; charset=utf-8'
  })
})

// Use renderer for all pages
app.use('*', renderer)

// ============================================
// PAGE ROUTES
// ============================================

// Homepage
app.get('/', (c) => {
  return c.render(
    <HomePage />,
    {
      title: 'G2 Middle East | Architecture of Intangible Value',
      description: 'Strategic partners for sovereign entities and global brands. We architect intangible value through sophisticated communication and experience design.'
    }
  )
})

// Services Page
app.get('/services', (c) => {
  return c.render(
    <ServicesPage />,
    {
      title: 'Strategic Services | G2 Middle East',
      description: 'Sovereign branding, luxury positioning, and strategic communications for highstakes challenges in the Middle East.'
    }
  )
})

// Team Page
app.get('/team', (c) => {
  return c.render(
    <TeamPage />,
    {
      title: 'Our Team | G2 Middle East',
      description: 'Meet the strategic minds behind G2 Middle East. Senior advisors who thrive under pressure and turn complexity into competitive advantage.'
    }
  )
})

// Team Detail Pages - Dynamic routing for all executives
app.get('/team/:slug', (c) => {
  const slug = c.req.param('slug')
  const executiveData = teamData[slug as keyof typeof teamData]
  
  if (!executiveData) {
    return c.notFound()
  }
  
  return c.render(
    <TeamDetailPage {...executiveData} />,
    {
      title: `${executiveData.name} - ${executiveData.jobTitle} | G2 Middle East`,
      description: executiveData.description.substring(0, 160).replace(/<[^>]*>/g, '')
    }
  )
})

// The Group Page
app.get('/group', (c) => {
  return c.render(
    <GroupPage />,
    {
      title: 'The Group | G2 Middle East',
      description: 'G2 Middle East is part of Casta Diva Group, a global communications powerhouse with presence in 15 cities across four continents.'
    }
  )
})

// Contact Page
app.get('/contact', (c) => {
  return c.render(
    <ContactPage />,
    {
      title: 'Contact Us | G2 Middle East',
      description: 'Bring us your highstakes challenges. We respond within 24 hours.'
    }
  )
})

// Terms of Service Page
app.get('/terms-of-service', (c) => {
  return c.render(
    <TermsOfServicePage />,
    {
      title: 'Terms of Service | G2 Middle East',
      description: 'GCC-compliant Terms of Service for G2 Middle East Projects Portal access.'
    }
  )
})

// Alternative route (backward compatibility)
app.get('/terms', (c) => {
  return c.redirect('/terms-of-service', 301)
})

// Privacy Policy Page
app.get('/privacy-policy', (c) => {
  return c.render(
    <PrivacyPolicyPage />,
    {
      title: 'Privacy Policy | G2 Middle East',
      description: 'Our commitment to protecting your data. GCC-compliant privacy policy for G2 Middle East services.'
    }
  )
})

// Alternative route (backward compatibility)
app.get('/privacy', (c) => {
  return c.redirect('/privacy-policy', 301)
})

// Projects Page
// Protected Projects Page - requires authentication
app.get('/projects', requireProjectsAuth, async (c) => {
  const user = c.get('projectsUser') as ProjectsAuth.UserSession
  
  return c.render(
    <ProjectsPage />,
    {
      title: 'Projects | G2 Middle East',
      description: 'Case studies in strategic impact and flawless execution. From sovereign positioning to luxury experiences, showcasing the architecture of intangible value.'
    }
  )
})

// ============================================
// PROJECTS SECURE PORTAL ROUTES (Must be before /projects/:slug)
// ============================================

// Projects Login Page
app.get('/projects/login', (c) => {
  return c.render(
    <ProjectsLoginPage />,
    {
      title: 'Client Login | Projects | G2 Middle East',
      description: 'Access confidential project case studies'
    }
  )
})

// Projects Registration Page
app.get('/projects/register', (c) => {
  return c.render(
    <ProjectsRegisterPage />,
    {
      title: 'Client Registration | Projects | G2 Middle East',
      description: 'Register for access to confidential project case studies'
    }
  )
})

// Projects Forgot Password Page
app.get('/projects/forgot-password', (c) => {
  return c.render(
    <ProjectsForgotPasswordPage />,
    {
      title: 'Forgot Password | Projects | G2 Middle East',
      description: 'Reset your password'
    }
  )
})

// Projects Reset Password Page
app.get('/projects/reset-password', (c) => {
  const token = c.req.query('token') || ''
  return c.render(
    <ProjectsResetPasswordPage token={token} />,
    {
      title: 'Reset Password | Projects | G2 Middle East',
      description: 'Set your new password'
    }
  )
})

// Projects Dashboard (Protected)
app.get('/projects/dashboard', requireProjectsAuth, async (c) => {
  const user = c.get('projectsUser') as ProjectsAuth.UserSession
  
  // Fetch standard access projects
  const standardProjects = await c.env.PROJECTS_DB.prepare(`
    SELECT id, slug, title, subtitle, description, client_name, project_type, 
           location, start_date, end_date, featured_image_url, access_level, 
           is_confidential, view_count
    FROM projects
    WHERE access_level = 'standard' AND is_published = 1
    ORDER BY created_at DESC
  `).all()
  
  // Fetch premium projects if user has premium access
  let premiumProjects = { results: [] }
  if (user.accessLevel === 'premium') {
    premiumProjects = await c.env.PROJECTS_DB.prepare(`
      SELECT id, slug, title, subtitle, description, client_name, project_type, 
             location, start_date, end_date, featured_image_url, access_level, 
             is_confidential, view_count
      FROM projects
      WHERE access_level = 'premium' AND is_published = 1
      ORDER BY created_at DESC
    `).all()
  }
  
  return c.render(
    <ProjectsDashboardPage 
      user={user} 
      standardProjects={standardProjects.results as any[]}
      premiumProjects={premiumProjects.results as any[]}
    />,
    {
      title: 'Dashboard | Projects | G2 Middle East',
      description: 'Browse confidential project case studies'
    }
  )
})

// Projects Account Settings (Protected)
app.get('/projects/account', requireProjectsAuth, async (c) => {
  const userSession = c.get('projectsUser') as ProjectsAuth.UserSession
  
  // Fetch full user details
  const user = await c.env.PROJECTS_DB.prepare(`
    SELECT id, email, full_name, company_name, phone_number, country, 
           industry_sector, access_level, email_verified, nda_accepted, 
           nda_accepted_date, two_factor_enabled, created_at, last_login
    FROM projects_users
    WHERE id = ?
  `).bind(userSession.userId).first()
  
  if (!user) {
    return c.redirect('/projects/login')
  }
  
  const userProps = {
    userId: user.id as string,
    email: user.email as string,
    fullName: user.full_name as string,
    companyName: user.company_name as string | null,
    phoneNumber: user.phone_number as string | null,
    country: user.country as string | null,
    industrySector: user.industry_sector as string | null,
    accessLevel: user.access_level as string,
    emailVerified: user.email_verified === 1,
    ndaAccepted: user.nda_accepted === 1,
    ndaAcceptedDate: user.nda_accepted_date as string | null,
    twoFactorEnabled: user.two_factor_enabled === 1,
    createdAt: user.created_at as string,
    lastLogin: user.last_login as string | null
  }
  
  return c.render(
    <ProjectsAccountPage user={userProps} />,
    {
      title: 'Account Settings | Projects | G2 Middle East',
      description: 'Manage your account settings'
    }
  )
})

// Project Detail Pages - Dynamic routing for all 12 projects (MUST be after specific routes)
// Protected Project Detail Pages - requires authentication
app.get('/projects/:slug', requireProjectsAuth, async (c) => {
  const user = c.get('projectsUser') as ProjectsAuth.UserSession
  const slug = c.req.param('slug')
  const projectData = projectsData[slug as keyof typeof projectsData]
  
  if (!projectData) {
    return c.notFound()
  }
  
  return c.render(
    <ProjectDetailPage {...projectData} />,
    {
      title: `${projectData.title} | G2 Middle East`,
      description: projectData.engagingParagraph.substring(0, 160)
    }
  )
})

// Perspectives (Blog) Page
app.get('/perspectives', (c) => {
  return c.render(
    <PerspectivesPage />,
    {
      title: 'Perspectives | G2 Middle East',
      description: 'Strategic insights on brand architecture, market positioning, and the future of communications in an AI-driven world.'
    }
  )
})

// Legacy route redirect
app.get('/briefing', (c) => {
  return c.redirect('/perspectives', 301)
})

// Perspective Detail Pages - Dynamic routing
app.get('/perspectives/:slug', (c) => {
  const slug = c.req.param('slug')
  const perspectiveData = perspectivesData[slug as keyof typeof perspectivesData]
  
  if (!perspectiveData) {
    return c.notFound()
  }
  
  return c.render(
    <PerspectiveDetailPage {...perspectiveData} />,
    {
      title: `${perspectiveData.title} | G2 Middle East`,
      description: perspectiveData.excerpt || perspectiveData.title
    }
  )
})

// ============================================
// WHITEPAPERS ROUTES (Protected)
// ============================================

// Whitepapers Login Page
app.get('/whitepapers/login', (c) => {
  return c.render(
    <WhitepapersLoginPage />,
    {
      title: 'Login | White Papers | G2 Middle East',
      description: 'Access exclusive strategic insights and research'
    }
  )
})

// Whitepapers Registration Page
app.get('/whitepapers/register', (c) => {
  return c.render(
    <WhitepapersRegisterPage />,
    {
      title: 'Register | White Papers | G2 Middle East',
      description: 'Request access to exclusive strategic insights'
    }
  )
})

// Registration Pending Page
app.get('/whitepapers/pending', (c) => {
  return c.render(
    <WhitepapersPendingPage />,
    {
      title: 'Registration Pending | G2 Middle East',
      description: 'Your registration is pending approval'
    }
  )
})

// Protected Whitepapers Page
app.get('/whitepapers', async (c) => {
  const user = await requireAuth(c)
  if (user instanceof Response) return user
  
  // Fetch active whitepapers
  const whitepapers = await c.env.DB.prepare(
    'SELECT id, title, description, file_size, download_count FROM whitepapers WHERE is_active = 1 ORDER BY created_at DESC'
  ).all()
  
  return c.render(
    <WhitepapersPage user={user} whitepapers={whitepapers.results || []} />,
    {
      title: 'White Papers | G2 Middle East',
      description: 'Exclusive strategic insights and research'
    }
  )
})

// ============================================
// ADMIN ROUTES (Protected)
// ============================================

// Admin User Management
app.get('/admin/users', async (c) => {
  const admin = await requireAdmin(c)
  if (admin instanceof Response) return admin
  
  // Fetch pending users
  const pendingUsers = await c.env.DB.prepare(
    'SELECT id, username, email, full_name, company, job_title, is_approved, created_at FROM users WHERE is_approved = 0 ORDER BY created_at DESC'
  ).all()
  
  // Fetch approved users
  const approvedUsers = await c.env.DB.prepare(
    'SELECT id, username, email, full_name, company, job_title, is_approved, created_at FROM users WHERE is_approved = 1 ORDER BY created_at DESC'
  ).all()
  
  return c.render(
    <AdminUsersPage pendingUsers={pendingUsers.results || []} approvedUsers={approvedUsers.results || []} />,
    {
      title: 'User Management | Admin | G2 Middle East',
      description: 'Manage white paper access requests'
    }
  )
})

// Admin Whitepaper Management
app.get('/admin/whitepapers', async (c) => {
  const admin = await requireAdmin(c)
  if (admin instanceof Response) return admin
  
  // Fetch all whitepapers
  const whitepapers = await c.env.DB.prepare(
    'SELECT id, title, description, file_path, download_count, is_active, created_at FROM whitepapers ORDER BY created_at DESC'
  ).all()
  
  return c.render(
    <AdminWhitepapersPage whitepapers={whitepapers.results || []} />,
    {
      title: 'Whitepaper Management | Admin | G2 Middle East',
      description: 'Manage white paper library'
    }
  )
})

// Service Detail Pages - Dynamic routing for all 9 services
app.get('/services/:slug', (c) => {
  const slug = c.req.param('slug')
  const serviceData = servicesData[slug as keyof typeof servicesData]
  
  if (!serviceData) {
    return c.notFound()
  }
  
  return c.render(
    <ServiceDetailPage {...serviceData} />,
    {
      title: `${serviceData.title} | G2 Middle East`,
      description: serviceData.description.substring(0, 160)
    }
  )
})

// ============================================
// API ROUTES
// ============================================

// Health check
app.get('/api/health', (c) => {
  return c.json({ 
    status: 'ok', 
    message: 'G2 Middle East API is running',
    timestamp: new Date().toISOString()
  })
})

// Test database connection
app.get('/api/test-db', async (c) => {
  try {
    const result = await c.env.DB.prepare('SELECT 1 as test').first()
    return c.json({ 
      status: 'ok',
      database: 'connected',
      result 
    })
  } catch (error) {
    return c.json({ 
      status: 'error',
      message: error instanceof Error ? error.message : 'Database connection failed'
    }, 500)
  }
})

// Contact form submission
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, company, phone, subject, message, source = 'contact_form' } = body

    // Validation
    if (!name || !email || !message) {
      return c.json({ 
        status: 'error',
        message: 'Name, email, and message are required'
      }, 400)
    }

    // Get request metadata
    const userAgent = c.req.header('user-agent') || ''
    const ipAddress = c.req.header('cf-connecting-ip') || 
                      c.req.header('x-forwarded-for') || 
                      c.req.header('x-real-ip') || 
                      'unknown'

    // Insert into database
    const result = await c.env.DB.prepare(`
      INSERT INTO leads (name, email, company, phone, message, source, ip_address, user_agent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      name,
      email,
      company || null,
      phone || null,
      `Subject: ${subject || 'General Inquiry'}\n\n${message}`,
      source,
      ipAddress,
      userAgent
    ).run()

    return c.json({ 
      status: 'success',
      message: 'Thank you for contacting us. We will respond within 24 hours.',
      leadId: result.meta.last_row_id
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return c.json({ 
      status: 'error',
      message: 'Failed to process your request. Please try again or email us directly.'
    }, 500)
  }
})

// Get recent leads (admin endpoint - should be protected in production)
app.get('/api/leads', async (c) => {
  try {
    const result = await c.env.DB.prepare(`
      SELECT id, name, email, company, source, created_at
      FROM leads
      ORDER BY created_at DESC
      LIMIT 50
    `).all()

    return c.json({ 
      status: 'ok',
      leads: result.results,
      count: result.results.length
    })
  } catch (error) {
    return c.json({ 
      status: 'error',
      message: error instanceof Error ? error.message : 'Failed to fetch leads'
    }, 500)
  }
})

// ============================================
// PROJECTS AUTH API ROUTES
// ============================================

// Projects User Registration
app.post('/api/projects/auth/register', async (c) => {
  try {
    const formData = await c.req.parseBody()
    const { 
      full_name, email, company_name, phone_number, country, 
      industry_sector, password, confirm_password, terms_accepted, nda_accepted 
    } = formData
    
    // Validation
    if (!full_name || !email || !company_name || !country || !industry_sector || !password) {
      return c.html(`
        <html><body><h1>Error</h1><p>All required fields must be filled</p>
        <a href="/projects/register">Go back</a></body></html>
      `)
    }
    
    if (password !== confirm_password) {
      return c.html(`
        <html><body><h1>Error</h1><p>Passwords do not match</p>
        <a href="/projects/register">Go back</a></body></html>
      `)
    }
    
    // Validate email format
    if (!ProjectsAuth.validateEmail(email as string)) {
      return c.html(`
        <html><body><h1>Error</h1><p>Invalid email format</p>
        <a href="/projects/register">Go back</a></body></html>
      `)
    }
    
    // Validate password complexity
    const passwordValidation = ProjectsAuth.validatePasswordComplexity(password as string)
    if (!passwordValidation.valid) {
      return c.html(`
        <html><body><h1>Error</h1><p>Password requirements not met:</p>
        <ul>${passwordValidation.errors.map(e => `<li>${e}</li>`).join('')}</ul>
        <a href="/projects/register">Go back</a></body></html>
      `)
    }
    
    // Check for existing user
    const existingUser = await c.env.PROJECTS_DB.prepare(`
      SELECT id FROM projects_users WHERE email = ?
    `).bind(email).first()
    
    if (existingUser) {
      return c.html(`
        <html><body><h1>Error</h1><p>An account with this email already exists</p>
        <a href="/projects/login">Login instead</a></body></html>
      `)
    }
    
    // Hash password
    const passwordHash = await ProjectsAuth.hashPassword(password as string)
    
    // Generate user ID
    const userId = ProjectsAuth.generateUserId()
    
    // Sanitize inputs
    const sanitizedName = ProjectsAuth.sanitizeInput(full_name as string)
    const sanitizedCompany = ProjectsAuth.sanitizeInput(company_name as string)
    
    // Insert user with is_active=0 (pending approval, like Whitepapers)
    await c.env.PROJECTS_DB.prepare(`
      INSERT INTO projects_users (
        id, email, password_hash, full_name, company_name, 
        phone_number, country, industry_sector, access_level,
        is_active, email_verified, nda_accepted, nda_accepted_date
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'standard', 0, 0, ?, datetime('now'))
    `).bind(
      userId,
      email,
      passwordHash,
      sanitizedName,
      sanitizedCompany,
      phone_number || null,
      country,
      industry_sector,
      nda_accepted ? 1 : 0
    ).run()
    
    // Generate email verification token
    const verificationToken = ProjectsAuth.generateToken()
    const tokenExpiry = new Date()
    tokenExpiry.setHours(tokenExpiry.getHours() + 24) // 24 hour expiry
    
    await c.env.PROJECTS_DB.prepare(`
      INSERT INTO projects_email_verification_tokens (user_id, token, expires_at)
      VALUES (?, ?, ?)
    `).bind(userId, verificationToken, tokenExpiry.toISOString()).run()
    
    // TODO: Send verification email
    // For now, redirect to login with success message
    
    return c.html(`
      <html>
        <head>
          <meta charset="UTF-8">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center justify-center p-6">
          <div class="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 text-center">
            <div class="mb-6">
              <svg class="w-16 h-16 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h1 class="text-2xl font-light text-white mb-4">Registration Successful!</h1>
            <p class="text-slate-300 mb-6">
              Your account has been created and is pending approval.
            </p>
            <p class="text-slate-400 text-sm mb-8">
              You will receive an email notification once your account has been approved by our team. This usually takes 24-48 hours.
            </p>
            <a href="/projects/login" class="inline-block px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors">
              Continue to Login
            </a>
          </div>
        </body>
      </html>
    `)
  } catch (error) {
    console.error('Projects registration error:', error)
    return c.html(`
      <html><body><h1>Error</h1><p>Registration failed. Please try again.</p>
      <a href="/projects/register">Go back</a></body></html>
    `, 500)
  }
})

// Projects User Login
app.post('/api/projects/auth/login', async (c) => {
  try {
    const formData = await c.req.parseBody()
    const { email, password, remember_me } = formData
    
    if (!email || !password) {
      return c.html(`
        <html><body><h1>Error</h1><p>Email and password are required</p>
        <a href="/projects/login">Go back</a></body></html>
      `)
    }
    
    // Find user
    const user = await c.env.PROJECTS_DB.prepare(`
      SELECT id, email, password_hash, full_name, access_level, 
             is_active, email_verified, failed_login_attempts, account_locked_until
      FROM projects_users
      WHERE email = ?
    `).bind(email).first()
    
    if (!user) {
      return c.html(`
        <html><body><h1>Error</h1><p>Invalid email or password</p>
        <a href="/projects/login">Go back</a></body></html>
      `)
    }
    
    // Verify password first (before checking approval status)
    const isValid = await ProjectsAuth.verifyPassword(password as string, user.password_hash as string)
    
    if (!isValid) {
      // Increment failed attempts
      const failedAttempts = (user.failed_login_attempts as number) + 1
      
      if (failedAttempts >= ProjectsAuth.MAX_FAILED_ATTEMPTS) {
        // Lock account
        const lockExpiry = ProjectsAuth.calculateLockExpiry()
        await c.env.PROJECTS_DB.prepare(`
          UPDATE projects_users 
          SET failed_login_attempts = ?, account_locked_until = ?
          WHERE id = ?
        `).bind(failedAttempts, lockExpiry, user.id).run()
        
        return c.html(`
          <html><body><h1>Account Locked</h1>
          <p>Too many failed login attempts. Your account has been locked for 30 minutes.</p>
          <a href="/projects/forgot-password">Reset Password</a></body></html>
        `)
      } else {
        // Just increment counter
        await c.env.PROJECTS_DB.prepare(`
          UPDATE projects_users SET failed_login_attempts = ? WHERE id = ?
        `).bind(failedAttempts, user.id).run()
        
        return c.html(`
          <html><body><h1>Error</h1>
          <p>Invalid email or password</p>
          <p>Attempts remaining: ${ProjectsAuth.MAX_FAILED_ATTEMPTS - failedAttempts}</p>
          <a href="/projects/login">Go back</a></body></html>
        `)
      }
    }
    
    // Check if account is approved (like Whitepapers)
    if (!user.is_active) {
      return c.html(`
        <html><body><h1>Access Pending</h1>
        <p>Your account is pending approval. You will be notified once approved.</p>
        <a href="/">Return to homepage</a></body></html>
      `)
    }
    
    // Check if account is locked
    if (ProjectsAuth.isAccountLocked(user.account_locked_until as string | null)) {
      return c.html(`
        <html><body><h1>Account Locked</h1>
        <p>Your account has been temporarily locked due to multiple failed login attempts.</p>
        <p>Please try again in 30 minutes or use the password reset function.</p>
        <a href="/projects/forgot-password">Reset Password</a></body></html>
      `)
    }
    
    // Reset failed attempts and clear lock
    await c.env.PROJECTS_DB.prepare(`
      UPDATE projects_users 
      SET failed_login_attempts = 0, 
          account_locked_until = NULL,
          last_login = datetime('now')
      WHERE id = ?
    `).bind(user.id).run()
    
    // Set authentication cookie
    setProjectsAuthCookie(
      c,
      user.id as string,
      user.email as string,
      user.full_name as string,
      user.access_level as string,
      (user.nda_accepted as number) === 1
    )
    
    // Log activity
    await logActivity(c, user.id as string, 'login', 'User logged in successfully')
    
    return c.redirect('/projects/dashboard')
  } catch (error) {
    console.error('Projects login error:', error)
    return c.html(`
      <html><body><h1>Error</h1><p>Login failed. Please try again.</p>
      <a href="/projects/login">Go back</a></body></html>
    `, 500)
  }
})

// Projects User Logout
app.get('/api/projects/auth/logout', (c) => {
  clearProjectsAuthCookie(c)
  return c.redirect('/projects/login')
})

// Projects Forgot Password
app.post('/api/projects/auth/forgot-password', async (c) => {
  try {
    const formData = await c.req.parseBody()
    const { email } = formData
    
    if (!email) {
      return c.html(`
        <html><body><h1>Error</h1><p>Email is required</p>
        <a href="/projects/forgot-password">Go back</a></body></html>
      `)
    }
    
    // Check if user exists
    const user = await c.env.PROJECTS_DB.prepare(`
      SELECT id, email, full_name FROM projects_users WHERE email = ? AND is_active = 1
    `).bind(email).first()
    
    // Always show success message for security (don't reveal if email exists)
    if (user) {
      // Generate reset token
      const resetToken = ProjectsAuth.generateToken()
      const tokenExpiry = new Date()
      tokenExpiry.setHours(tokenExpiry.getHours() + 24) // 24 hour expiry
      
      // Store token
      await c.env.PROJECTS_DB.prepare(`
        INSERT INTO projects_password_reset_tokens (user_id, token, expires_at)
        VALUES (?, ?, ?)
      `).bind(user.id, resetToken, tokenExpiry.toISOString()).run()
      
      // TODO: Send email with reset link
      // For now, just log the token (in production, send via email)
      console.log(`Password reset token for ${email}: ${resetToken}`)
      
      // Log activity
      await logActivity(c, user.id as string, 'password_reset_requested', 'User requested password reset')
    }
    
    return c.html(`
      <html>
        <head>
          <meta charset="UTF-8">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center justify-center p-6">
          <div class="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 text-center">
            <div class="mb-6">
              <svg class="w-16 h-16 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h1 class="text-2xl font-light text-white mb-4">Check Your Email</h1>
            <p class="text-slate-300 mb-6">
              If an account exists with this email, you will receive a password reset link within a few minutes.
            </p>
            <a href="/projects/login" class="inline-block px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors">
              Back to Login
            </a>
          </div>
        </body>
      </html>
    `)
  } catch (error) {
    console.error('Forgot password error:', error)
    return c.html(`
      <html><body><h1>Error</h1><p>Request failed. Please try again.</p>
      <a href="/projects/forgot-password">Go back</a></body></html>
    `, 500)
  }
})

// Projects Reset Password
app.post('/api/projects/auth/reset-password', async (c) => {
  try {
    const formData = await c.req.parseBody()
    const { token, password, confirm_password } = formData
    
    if (!token || !password || !confirm_password) {
      return c.html(`
        <html><body><h1>Error</h1><p>All fields are required</p>
        <a href="/projects/forgot-password">Try again</a></body></html>
      `)
    }
    
    if (password !== confirm_password) {
      return c.html(`
        <html><body><h1>Error</h1><p>Passwords do not match</p>
        <a href="/projects/reset-password?token=${token}">Go back</a></body></html>
      `)
    }
    
    // Validate password complexity
    const passwordValidation = ProjectsAuth.validatePasswordComplexity(password as string)
    if (!passwordValidation.valid) {
      return c.html(`
        <html><body><h1>Error</h1><p>Password requirements not met:</p>
        <ul>${passwordValidation.errors.map(e => `<li>${e}</li>`).join('')}</ul>
        <a href="/projects/reset-password?token=${token}">Go back</a></body></html>
      `)
    }
    
    // Verify token
    const resetRecord = await c.env.PROJECTS_DB.prepare(`
      SELECT user_id, expires_at FROM projects_password_reset_tokens 
      WHERE token = ? AND used_at IS NULL
      ORDER BY created_at DESC LIMIT 1
    `).bind(token).first()
    
    if (!resetRecord) {
      return c.html(`
        <html><body><h1>Error</h1><p>Invalid or expired reset token</p>
        <a href="/projects/forgot-password">Request new link</a></body></html>
      `)
    }
    
    // Check expiry
    if (new Date(resetRecord.expires_at as string) < new Date()) {
      return c.html(`
        <html><body><h1>Error</h1><p>Reset token has expired</p>
        <a href="/projects/forgot-password">Request new link</a></body></html>
      `)
    }
    
    // Hash new password
    const passwordHash = await ProjectsAuth.hashPassword(password as string)
    
    // Update password
    await c.env.PROJECTS_DB.prepare(`
      UPDATE projects_users SET password_hash = ? WHERE id = ?
    `).bind(passwordHash, resetRecord.user_id).run()
    
    // Mark token as used
    await c.env.PROJECTS_DB.prepare(`
      UPDATE projects_password_reset_tokens SET used_at = datetime('now') WHERE token = ?
    `).bind(token).run()
    
    // Log activity
    await logActivity(c, resetRecord.user_id as string, 'password_reset', 'User reset password')
    
    return c.html(`
      <html>
        <head>
          <meta charset="UTF-8">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center justify-center p-6">
          <div class="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 text-center">
            <div class="mb-6">
              <svg class="w-16 h-16 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h1 class="text-2xl font-light text-white mb-4">Password Reset Successful!</h1>
            <p class="text-slate-300 mb-6">
              Your password has been updated. You can now login with your new password.
            </p>
            <a href="/projects/login" class="inline-block px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors">
              Continue to Login
            </a>
          </div>
        </body>
      </html>
    `)
  } catch (error) {
    console.error('Reset password error:', error)
    return c.html(`
      <html><body><h1>Error</h1><p>Reset failed. Please try again.</p>
      <a href="/projects/forgot-password">Request new link</a></body></html>
    `, 500)
  }
})

// Projects Update Profile
app.post('/api/projects/account/update-profile', requireProjectsAuth, async (c) => {
  try {
    const user = c.get('projectsUser') as ProjectsAuth.UserSession
    const formData = await c.req.parseBody()
    const { full_name, company_name, phone_number, country, industry_sector } = formData
    
    // Sanitize inputs
    const sanitizedName = ProjectsAuth.sanitizeInput(full_name as string)
    const sanitizedCompany = company_name ? ProjectsAuth.sanitizeInput(company_name as string) : null
    
    // Update profile
    await c.env.PROJECTS_DB.prepare(`
      UPDATE projects_users 
      SET full_name = ?, company_name = ?, phone_number = ?, 
          country = ?, industry_sector = ?, updated_at = datetime('now')
      WHERE id = ?
    `).bind(
      sanitizedName,
      sanitizedCompany,
      phone_number || null,
      country,
      industry_sector,
      user.userId
    ).run()
    
    // Log activity
    await logActivity(c, user.userId, 'profile_updated', 'User updated profile information')
    
    return c.redirect('/projects/account')
  } catch (error) {
    console.error('Update profile error:', error)
    return c.html(`
      <html><body><h1>Error</h1><p>Update failed. Please try again.</p>
      <a href="/projects/account">Go back</a></body></html>
    `, 500)
  }
})

// Projects Change Password
app.post('/api/projects/account/change-password', requireProjectsAuth, async (c) => {
  try {
    const user = c.get('projectsUser') as ProjectsAuth.UserSession
    const formData = await c.req.parseBody()
    const { current_password, new_password, confirm_password } = formData
    
    if (!current_password || !new_password || !confirm_password) {
      return c.html(`
        <html><body><h1>Error</h1><p>All fields are required</p>
        <a href="/projects/account">Go back</a></body></html>
      `)
    }
    
    if (new_password !== confirm_password) {
      return c.html(`
        <html><body><h1>Error</h1><p>New passwords do not match</p>
        <a href="/projects/account">Go back</a></body></html>
      `)
    }
    
    // Validate new password complexity
    const passwordValidation = ProjectsAuth.validatePasswordComplexity(new_password as string)
    if (!passwordValidation.valid) {
      return c.html(`
        <html><body><h1>Error</h1><p>Password requirements not met:</p>
        <ul>${passwordValidation.errors.map(e => `<li>${e}</li>`).join('')}</ul>
        <a href="/projects/account">Go back</a></body></html>
      `)
    }
    
    // Verify current password
    const userRecord = await c.env.PROJECTS_DB.prepare(`
      SELECT password_hash FROM projects_users WHERE id = ?
    `).bind(user.userId).first()
    
    if (!userRecord) {
      return c.redirect('/projects/login')
    }
    
    const isValid = await ProjectsAuth.verifyPassword(
      current_password as string, 
      userRecord.password_hash as string
    )
    
    if (!isValid) {
      return c.html(`
        <html><body><h1>Error</h1><p>Current password is incorrect</p>
        <a href="/projects/account">Go back</a></body></html>
      `)
    }
    
    // Hash new password
    const passwordHash = await ProjectsAuth.hashPassword(new_password as string)
    
    // Update password
    await c.env.PROJECTS_DB.prepare(`
      UPDATE projects_users SET password_hash = ?, updated_at = datetime('now') WHERE id = ?
    `).bind(passwordHash, user.userId).run()
    
    // Log activity
    await logActivity(c, user.userId, 'password_changed', 'User changed password')
    
    return c.html(`
      <html>
        <head>
          <meta charset="UTF-8">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center justify-center p-6">
          <div class="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 text-center">
            <div class="mb-6">
              <svg class="w-16 h-16 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h1 class="text-2xl font-light text-white mb-4">Password Changed!</h1>
            <p class="text-slate-300 mb-6">
              Your password has been successfully updated.
            </p>
            <a href="/projects/account" class="inline-block px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors">
              Back to Account Settings
            </a>
          </div>
        </body>
      </html>
    `)
  } catch (error) {
    console.error('Change password error:', error)
    return c.html(`
      <html><body><h1>Error</h1><p>Password change failed. Please try again.</p>
      <a href="/projects/account">Go back</a></body></html>
    `, 500)
  }
})

// Projects Accept NDA
app.post('/api/projects/account/accept-nda', requireProjectsAuth, async (c) => {
  try {
    const user = c.get('projectsUser') as ProjectsAuth.UserSession
    const formData = await c.req.parseBody()
    
    if (!formData.nda_accepted) {
      return c.html(`
        <html><body><h1>Error</h1><p>You must accept the NDA checkbox</p>
        <a href="/projects/account">Go back</a></body></html>
      `)
    }
    
    // Update NDA acceptance
    await c.env.PROJECTS_DB.prepare(`
      UPDATE projects_users 
      SET nda_accepted = 1, nda_accepted_date = datetime('now'), updated_at = datetime('now')
      WHERE id = ?
    `).bind(user.userId).run()
    
    // Log activity
    await logActivity(c, user.userId, 'nda_accepted', 'User accepted NDA')
    
    return c.redirect('/projects/dashboard')
  } catch (error) {
    console.error('Accept NDA error:', error)
    return c.html(`
      <html><body><h1>Error</h1><p>NDA acceptance failed. Please try again.</p>
      <a href="/projects/account">Go back</a></body></html>
    `, 500)
  }
})

// Projects Delete Account
app.get('/api/projects/account/delete', requireProjectsAuth, async (c) => {
  try {
    const user = c.get('projectsUser') as ProjectsAuth.UserSession
    
    // Delete user (cascading deletes will handle related records)
    await c.env.PROJECTS_DB.prepare(`
      DELETE FROM projects_users WHERE id = ?
    `).bind(user.userId).run()
    
    // Clear cookie
    clearProjectsAuthCookie(c)
    
    return c.html(`
      <html>
        <head>
          <meta charset="UTF-8">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center justify-center p-6">
          <div class="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 text-center">
            <h1 class="text-2xl font-light text-white mb-4">Account Deleted</h1>
            <p class="text-slate-300 mb-6">
              Your account has been permanently deleted.
            </p>
            <a href="/" class="inline-block px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors">
              Return to Homepage
            </a>
          </div>
        </body>
      </html>
    `)
  } catch (error) {
    console.error('Delete account error:', error)
    return c.html(`
      <html><body><h1>Error</h1><p>Account deletion failed. Please try again.</p>
      <a href="/projects/account">Go back</a></body></html>
    `, 500)
  }
})

// ============================================
// WHITEPAPERS AUTH API ROUTES
// ============================================

// User Registration
app.post('/api/auth/register', async (c) => {
  try {
    const formData = await c.req.parseBody()
    const { username, email, password, confirm_password, full_name, company, job_title } = formData
    
    // Validation
    if (!username || !email || !password || !full_name || !company || !job_title) {
      return c.html('<html><body><h1>Error</h1><p>All fields are required</p><a href="/whitepapers/register">Go back</a></body></html>')
    }
    
    if (password !== confirm_password) {
      return c.html('<html><body><h1>Error</h1><p>Passwords do not match</p><a href="/whitepapers/register">Go back</a></body></html>')
    }
    
    // Check if user already exists
    const existingUser = await c.env.DB.prepare(
      'SELECT id FROM users WHERE username = ? OR email = ?'
    ).bind(username, email).first()
    
    if (existingUser) {
      return c.html('<html><body><h1>Error</h1><p>Username or email already exists</p><a href="/whitepapers/register">Go back</a></body></html>')
    }
    
    // Hash password
    const passwordHash = await hashPassword(password as string)
    
    // Insert user
    await c.env.DB.prepare(
      'INSERT INTO users (username, email, password_hash, full_name, company, job_title, is_approved) VALUES (?, ?, ?, ?, ?, ?, 0)'
    ).bind(username, email, passwordHash, full_name, company, job_title).run()
    
    // Get the created user
    const newUser = await c.env.DB.prepare(
      'SELECT id, username, email, full_name, company, job_title FROM users WHERE email = ?'
    ).bind(email).first()
    
    // Send email to admin
    const approvalLink = `https://g2middleeast.com/admin/approve/${newUser.id}`
    await sendEmail({
      to: 'tim@ktsglobal.live',
      subject: 'New White Paper Access Request',
      html: getAdminApprovalEmail(newUser, approvalLink)
    }, c.env.EMAIL_API_KEY, c.env.EMAIL_SERVICE || 'resend')
    
    // Send confirmation to user
    await sendEmail({
      to: email as string,
      subject: 'Registration Received - G2 Middle East',
      html: getRegistrationPendingEmail(full_name as string)
    }, c.env.EMAIL_API_KEY, c.env.EMAIL_SERVICE || 'resend')
    
    return c.redirect('/whitepapers/pending')
  } catch (error) {
    console.error('Registration error:', error)
    return c.html('<html><body><h1>Error</h1><p>Registration failed. Please try again.</p><a href="/whitepapers/register">Go back</a></body></html>')
  }
})

// User Login
app.post('/api/auth/login', async (c) => {
  try {
    const formData = await c.req.parseBody()
    const { username, password } = formData
    
    if (!username || !password) {
      return c.html('<html><body><h1>Error</h1><p>Username and password are required</p><a href="/whitepapers/login">Go back</a></body></html>')
    }
    
    // Find user
    const user = await c.env.DB.prepare(
      'SELECT id, username, email, password_hash, full_name, is_approved FROM users WHERE username = ? OR email = ?'
    ).bind(username, username).first()
    
    if (!user) {
      return c.html('<html><body><h1>Error</h1><p>Invalid credentials</p><a href="/whitepapers/login">Go back</a></body></html>')
    }
    
    // Verify password
    const isValid = await verifyPassword(password as string, user.password_hash as string)
    if (!isValid) {
      return c.html('<html><body><h1>Error</h1><p>Invalid credentials</p><a href="/whitepapers/login">Go back</a></body></html>')
    }
    
    // Check if approved
    if (!user.is_approved) {
      return c.html('<html><body><h1>Access Pending</h1><p>Your account is pending approval. You will receive an email once approved.</p><a href="/">Return to homepage</a></body></html>')
    }
    
    // Set auth cookie
    setAuthCookie(c, user.id as number, user.username as string)
    
    // Update last login
    await c.env.DB.prepare(
      'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?'
    ).bind(user.id).run()
    
    return c.redirect('/whitepapers')
  } catch (error) {
    console.error('Login error:', error)
    return c.html('<html><body><h1>Error</h1><p>Login failed. Please try again.</p><a href="/whitepapers/login">Go back</a></body></html>')
  }
})

// User Logout
app.get('/api/auth/logout', (c) => {
  clearAuthCookie(c)
  return c.redirect('/whitepapers/login')
})

// ============================================
// ADMIN API ROUTES
// ============================================

// Approve User
app.post('/api/admin/users/approve/:id', async (c) => {
  const admin = await requireAdmin(c)
  if (admin instanceof Response) return admin
  
  const userId = c.req.param('id')
  
  try {
    // Get user details
    const user = await c.env.DB.prepare(
      'SELECT id, email, full_name FROM users WHERE id = ?'
    ).bind(userId).first()
    
    if (!user) {
      return c.text('User not found', 404)
    }
    
    // Approve user
    await c.env.DB.prepare(
      'UPDATE users SET is_approved = 1, approved_at = CURRENT_TIMESTAMP WHERE id = ?'
    ).bind(userId).run()
    
    // Send approval email to user
    await sendEmail({
      to: user.email as string,
      subject: 'Access Approved - G2 Middle East White Papers',
      html: getUserApprovedEmail(user.full_name as string)
    }, c.env.EMAIL_API_KEY, c.env.EMAIL_SERVICE || 'resend')
    
    return c.redirect('/admin/users')
  } catch (error) {
    console.error('Approval error:', error)
    return c.text('Approval failed', 500)
  }
})

// Deny User
app.post('/api/admin/users/deny/:id', async (c) => {
  const admin = await requireAdmin(c)
  if (admin instanceof Response) return admin
  
  const userId = c.req.param('id')
  
  try {
    await c.env.DB.prepare('DELETE FROM users WHERE id = ?').bind(userId).run()
    return c.redirect('/admin/users')
  } catch (error) {
    console.error('Deny error:', error)
    return c.text('Operation failed', 500)
  }
})

// Quick approval link (from email)
app.get('/admin/approve/:id', async (c) => {
  const userId = c.req.param('id')
  
  try {
    const user = await c.env.DB.prepare(
      'SELECT id, email, full_name FROM users WHERE id = ?'
    ).bind(userId).first()
    
    if (!user) {
      return c.html('<html><body><h1>Error</h1><p>User not found</p></body></html>')
    }
    
    await c.env.DB.prepare(
      'UPDATE users SET is_approved = 1, approved_at = CURRENT_TIMESTAMP WHERE id = ?'
    ).bind(userId).run()
    
    await sendEmail({
      to: user.email as string,
      subject: 'Access Approved - G2 Middle East White Papers',
      html: getUserApprovedEmail(user.full_name as string)
    }, c.env.EMAIL_API_KEY, c.env.EMAIL_SERVICE || 'resend')
    
    return c.html('<html><body><h1>User Approved!</h1><p>The user has been notified via email.</p><a href="/admin/users">View all users</a></body></html>')
  } catch (error) {
    console.error('Quick approval error:', error)
    return c.html('<html><body><h1>Error</h1><p>Approval failed</p></body></html>')
  }
})

// Download Whitepaper (Protected)
app.get('/api/whitepapers/download/:id', async (c) => {
  const user = await requireAuth(c)
  if (user instanceof Response) return user
  
  const whitepaperId = c.req.param('id')
  
  try {
    // Get whitepaper details
    const whitepaper = await c.env.DB.prepare(
      'SELECT id, title, file_path FROM whitepapers WHERE id = ? AND is_active = 1'
    ).bind(whitepaperId).first()
    
    if (!whitepaper) {
      return c.text('Whitepaper not found', 404)
    }
    
    // Log download
    await c.env.DB.prepare(
      'INSERT INTO downloads (user_id, whitepaper_id) VALUES (?, ?)'
    ).bind(user.id, whitepaperId).run()
    
    // Increment download count
    await c.env.DB.prepare(
      'UPDATE whitepapers SET download_count = download_count + 1 WHERE id = ?'
    ).bind(whitepaperId).run()
    
    // For now, return a placeholder response
    // TODO: Implement actual file serving from R2 bucket
    return c.html(`
      <html>
        <body>
          <h1>Download: ${whitepaper.title}</h1>
          <p>File path: ${whitepaper.file_path}</p>
          <p>In production, this would serve the actual PDF file from R2 storage.</p>
          <a href="/whitepapers">Back to White Papers</a>
        </body>
      </html>
    `)
  } catch (error) {
    console.error('Download error:', error)
    return c.text('Download failed', 500)
  }
})

// Add Whitepaper (Admin)
app.post('/api/admin/whitepapers/add', async (c) => {
  const admin = await requireAdmin(c)
  if (admin instanceof Response) return admin
  
  try {
    const formData = await c.req.parseBody()
    const { title, description } = formData
    
    // TODO: Handle file upload to R2 bucket
    // For now, just store metadata
    const filePath = `whitepapers/${Date.now()}-${title}.pdf`
    
    await c.env.DB.prepare(
      'INSERT INTO whitepapers (title, description, file_path, is_active) VALUES (?, ?, ?, 1)'
    ).bind(title, description, filePath).run()
    
    return c.redirect('/admin/whitepapers')
  } catch (error) {
    console.error('Add whitepaper error:', error)
    return c.text('Failed to add whitepaper', 500)
  }
})

// Toggle Whitepaper Active Status
app.post('/api/admin/whitepapers/toggle/:id', async (c) => {
  const admin = await requireAdmin(c)
  if (admin instanceof Response) return admin
  
  const whitepaperId = c.req.param('id')
  
  try {
    await c.env.DB.prepare(
      'UPDATE whitepapers SET is_active = CASE WHEN is_active = 1 THEN 0 ELSE 1 END WHERE id = ?'
    ).bind(whitepaperId).run()
    
    return c.redirect('/admin/whitepapers')
  } catch (error) {
    console.error('Toggle error:', error)
    return c.text('Toggle failed', 500)
  }
})

// Delete Whitepaper
app.post('/api/admin/whitepapers/delete/:id', async (c) => {
  const admin = await requireAdmin(c)
  if (admin instanceof Response) return admin
  
  const whitepaperId = c.req.param('id')
  
  try {
    await c.env.DB.prepare('DELETE FROM whitepapers WHERE id = ?').bind(whitepaperId).run()
    return c.redirect('/admin/whitepapers')
  } catch (error) {
    console.error('Delete error:', error)
    return c.text('Delete failed', 500)
  }
})

export default app
