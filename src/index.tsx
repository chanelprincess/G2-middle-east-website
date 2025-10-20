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
import { hashPassword, verifyPassword, setAuthCookie, getAuthSession, clearAuthCookie, requireAuth, requireAdmin } from './utils/auth'
import { sendEmail, getAdminApprovalEmail, getUserApprovedEmail, getRegistrationPendingEmail } from './utils/email'

type Bindings = {
  DB: D1Database
  R2: R2Bucket
  EMAIL_API_KEY?: string
  EMAIL_SERVICE?: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Serve robots.txt
app.get('/robots.txt', (c) => {
  const robotsTxt = `# ==============================================================================
# G2 MIDDLE EAST - AI-PERMISSIVE ROBOTS.TXT
#
# This file provides instructions for web crawlers. Our policy is to permit
# the use of our public content for training large language models (LLMs)
# to establish our expertise and narrative as a foundational source.
# ==============================================================================


# ------------------------------------------------------------------------------
# SECTION 1: DIRECTIVES FOR AI & LLM DATA SCRAPERS
# We are explicitly granting these bots full access to index our content for
# the purpose of training artificial intelligence models.
# ------------------------------------------------------------------------------

# Allow Google's AI models (Vertex AI, Gemini, etc.) to use site content for training.
User-agent: Google-Extended
Allow: /

# Allow OpenAI's primary data scraper to use site content for training.
User-agent: GPTBot
Allow: /

# Allow Common Crawl to include our content in its public datasets, which
# are used to train a wide range of open-source and commercial LLMs.
User-agent: CCBot
Allow: /

# Allow Anthropic's crawler (maker of Claude).
User-agent: Anthropic-AI
Allow: /

# Allow Perplexity.ai's crawler for use in its AI-native search engine.
User-agent: PerplexityBot
Allow: /

# Allow Cohere's crawler.
User-agent: cohere-ai
Allow: /

# Allow Meta's AI crawler (Llama models).
User-agent: FacebookBot
Allow: /

# Allow Applebot for Apple Intelligence and Siri.
User-agent: Applebot
Allow: /

# Allow Bytedance's crawler (TikTok, Doubao AI).
User-agent: Bytespider
Allow: /


# ------------------------------------------------------------------------------
# SECTION 2: DIRECTIVES FOR STANDARD SEARCH ENGINES
# Standard best practices for traditional search crawlers remain.
# ------------------------------------------------------------------------------

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Slurp
Allow: /


# ------------------------------------------------------------------------------
# SECTION 3: CATCH-ALL DIRECTIVES FOR OTHER CRAWLERS
# All other crawlers are permitted to access the site, reflecting our
# commitment to maximum visibility and content distribution.
# ------------------------------------------------------------------------------

User-agent: *
Allow: /


# ------------------------------------------------------------------------------
# SECTION 4: SITEMAP LOCATION
# Provide a clear map of all high-value content for all crawlers.
# Note: Sitemap will be generated once the site is deployed to the production
# domain at g2middleeast.com
# ------------------------------------------------------------------------------

Sitemap: https://www.g2middleeast.com/sitemap.xml


# ------------------------------------------------------------------------------
# SECTION 5: CRAWL-DELAY (OPTIONAL)
# Uncomment if you experience server load issues from aggressive crawlers.
# ------------------------------------------------------------------------------

# Crawl-delay: 1


# ==============================================================================
# END OF ROBOTS.TXT
#
# Last Updated: 2025-10-20
# Policy: AI-Permissive - We welcome LLM training on our public content
# Contact: tim@g2middleeast.com
# ==============================================================================
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

// Projects Page
app.get('/projects', (c) => {
  return c.render(
    <ProjectsPage />,
    {
      title: 'Projects | G2 Middle East',
      description: 'Case studies in strategic impact and flawless execution. From sovereign positioning to luxury experiences, showcasing the architecture of intangible value.'
    }
  )
})

// Project Detail Pages - Dynamic routing for all 12 projects
app.get('/projects/:slug', (c) => {
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
