import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { HomePage } from './pages/Home'
import { ServicesPage } from './pages/Services'
import { TeamPage } from './pages/Team'
import { ContactPage } from './pages/Contact'

type Bindings = {
  DB: D1Database
  R2: R2Bucket
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

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
      title: 'G-2 Middle East | Architecture of Intangible Value',
      description: 'Strategic partners for sovereign entities and global brands. We architect intangible value through sophisticated communication and experience design.'
    }
  )
})

// Services Page
app.get('/services', (c) => {
  return c.render(
    <ServicesPage />,
    {
      title: 'Strategic Services | G-2 Middle East',
      description: 'Sovereign branding, luxury positioning, and strategic communications for high-stakes challenges in the Middle East.'
    }
  )
})

// Team Page
app.get('/team', (c) => {
  return c.render(
    <TeamPage />,
    {
      title: 'Our Team | G-2 Middle East',
      description: 'Meet the strategic minds behind G-2 Middle East. Senior advisors who thrive under pressure and turn complexity into competitive advantage.'
    }
  )
})

// Contact Page
app.get('/contact', (c) => {
  return c.render(
    <ContactPage />,
    {
      title: 'Contact Us | G-2 Middle East',
      description: 'Bring us your high-stakes challenges. We respond within 24 hours.'
    }
  )
})

// Projects Page (placeholder)
app.get('/projects', (c) => {
  return c.render(
    <div class="min-h-screen bg-g2-darker text-white flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">Projects</h1>
        <p class="text-gray-400 mb-6">Case studies coming soon</p>
        <a href="/" class="btn-primary">Back to Home</a>
      </div>
    </div>,
    {
      title: 'Projects | G-2 Middle East',
      description: 'Strategic case studies and project portfolio'
    }
  )
})

// The G-2 Briefing (Blog) Page (placeholder)
app.get('/briefing', (c) => {
  return c.render(
    <div class="min-h-screen bg-g2-darker text-white flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">The G-2 Briefing</h1>
        <p class="text-gray-400 mb-6">Strategic insights coming soon</p>
        <a href="/" class="btn-primary">Back to Home</a>
      </div>
    </div>,
    {
      title: 'The G-2 Briefing | G-2 Middle East',
      description: 'Strategic insights and market intelligence'
    }
  )
})

// Whitepapers Page (placeholder)
app.get('/whitepapers', (c) => {
  return c.render(
    <div class="min-h-screen bg-g2-darker text-white flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">Whitepapers & Insights</h1>
        <p class="text-gray-400 mb-6">Downloadable resources coming soon</p>
        <a href="/" class="btn-primary">Back to Home</a>
      </div>
    </div>,
    {
      title: 'Whitepapers | G-2 Middle East',
      description: 'Strategic whitepapers and downloadable insights'
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
    message: 'G-2 Middle East API is running',
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

export default app
