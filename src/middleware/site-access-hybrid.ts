import { Context, Next } from 'hono'
import { getCookie, setCookie } from 'hono/cookie'

// Secret access token for human stakeholders
const SITE_ACCESS_TOKEN = 'g2me-preview-2025'
const ACCESS_COOKIE_NAME = 'g2me_site_access'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

// Known AI/LLM crawler user agents
const AI_CRAWLER_PATTERNS = [
  // OpenAI
  'GPTBot',
  'ChatGPT-User',
  
  // Anthropic (Claude)
  'Claude-Web',
  'anthropic-ai',
  
  // Google
  'Googlebot',
  'Googlebot-Image',
  'Googlebot-News',
  'Google-Extended',
  
  // Microsoft
  'Bingbot',
  
  // Perplexity
  'PerplexityBot',
  
  // Common Crawl (used by many AI companies)
  'CCBot',
  
  // Cohere
  'cohere-ai',
  
  // Meta
  'meta-externalagent',
  'facebookexternalhit',
  
  // Apple
  'Applebot',
  'Applebot-Extended',
  
  // Yandex
  'YandexBot',
  
  // Baidu
  'Baiduspider',
  
  // DuckDuckGo
  'DuckDuckBot',
  
  // Archive.org
  'ia_archiver',
  'archive.org_bot',
  
  // Other AI crawlers
  'Omgilibot',
  'YouBot'
]

/**
 * Check if request is from an AI crawler
 */
const isAICrawler = (userAgent: string): boolean => {
  if (!userAgent) return false
  
  const ua = userAgent.toLowerCase()
  return AI_CRAWLER_PATTERNS.some(pattern => 
    ua.includes(pattern.toLowerCase())
  )
}

/**
 * Hybrid middleware: Allow AI crawlers + token-based human access
 * 
 * Allows access if:
 * 1. Request is from known AI/LLM crawler (maintains SEO & AI citations)
 * 2. ?access=TOKEN is in URL query string (human stakeholders)
 * 3. Valid access cookie is present (returning human visitors)
 * 
 * Otherwise shows "Under Construction" page
 */
export const requireSiteAccessHybrid = async (c: Context, next: Next) => {
  const userAgent = c.req.header('user-agent') || ''
  
  // ALLOW: AI/LLM Crawlers (always have access)
  if (isAICrawler(userAgent)) {
    console.log(`[Site Access] AI Crawler allowed: ${userAgent}`)
    await next()
    return
  }
  
  // Check for token in query string (human access)
  const tokenFromQuery = c.req.query('access')
  
  // Check for valid access cookie
  const accessCookie = getCookie(c, ACCESS_COOKIE_NAME)
  
  // ALLOW: Valid token from query
  if (tokenFromQuery === SITE_ACCESS_TOKEN) {
    console.log('[Site Access] Token access granted')
    
    // Set cookie for future visits (30 days)
    setCookie(c, ACCESS_COOKIE_NAME, SITE_ACCESS_TOKEN, {
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
      maxAge: COOKIE_MAX_AGE,
      path: '/'
    })
    
    await next()
    return
  }
  
  // ALLOW: Valid existing cookie
  if (accessCookie === SITE_ACCESS_TOKEN) {
    console.log('[Site Access] Cookie access granted')
    await next()
    return
  }
  
  // DENY: No valid token, cookie, or AI crawler
  console.log(`[Site Access] Access denied - User Agent: ${userAgent}`)
  return c.redirect('/')
}

/**
 * Helper function to check if user/crawler has site access
 * Also sets cookie if valid token is present
 */
export const hasSiteAccessHybrid = (c: Context): boolean => {
  const userAgent = c.req.header('user-agent') || ''
  const tokenFromQuery = c.req.query('access')
  const accessCookie = getCookie(c, ACCESS_COOKIE_NAME)
  
  // Set cookie if valid token is present in query
  if (tokenFromQuery === SITE_ACCESS_TOKEN) {
    setCookie(c, ACCESS_COOKIE_NAME, SITE_ACCESS_TOKEN, {
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
      maxAge: COOKIE_MAX_AGE,
      path: '/'
    })
  }
  
  return (
    isAICrawler(userAgent) ||
    tokenFromQuery === SITE_ACCESS_TOKEN ||
    accessCookie === SITE_ACCESS_TOKEN
  )
}

/**
 * Helper to check if request is from AI crawler (export for use in routes)
 */
export const isAICrawlerRequest = (c: Context): boolean => {
  const userAgent = c.req.header('user-agent') || ''
  return isAICrawler(userAgent)
}
