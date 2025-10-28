import { Context, Next } from 'hono'
import { getCookie, setCookie } from 'hono/cookie'

// Secret access token - Change this to your preferred token
const SITE_ACCESS_TOKEN = 'g2me-preview-2025'
const ACCESS_COOKIE_NAME = 'g2me_site_access'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

/**
 * Middleware to check for site access token
 * Allows access if:
 * 1. ?access=TOKEN is in URL query string
 * 2. Valid access cookie is present
 * 
 * Otherwise redirects to under construction page
 */
export const requireSiteAccess = async (c: Context, next: Next) => {
  // Check for token in query string
  const tokenFromQuery = c.req.query('access')
  
  // Check for valid access cookie
  const accessCookie = getCookie(c, ACCESS_COOKIE_NAME)
  
  // Validate token from query
  if (tokenFromQuery === SITE_ACCESS_TOKEN) {
    // Set cookie for future visits (30 days)
    setCookie(c, ACCESS_COOKIE_NAME, SITE_ACCESS_TOKEN, {
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
      maxAge: COOKIE_MAX_AGE,
      path: '/'
    })
    
    // Continue to requested page
    await next()
    return
  }
  
  // Validate existing cookie
  if (accessCookie === SITE_ACCESS_TOKEN) {
    // Cookie is valid, allow access
    await next()
    return
  }
  
  // No valid token or cookie - redirect to under construction
  return c.redirect('/')
}

/**
 * Helper function to check if user has site access
 */
export const hasSiteAccess = (c: Context): boolean => {
  const tokenFromQuery = c.req.query('access')
  const accessCookie = getCookie(c, ACCESS_COOKIE_NAME)
  
  return tokenFromQuery === SITE_ACCESS_TOKEN || accessCookie === SITE_ACCESS_TOKEN
}
