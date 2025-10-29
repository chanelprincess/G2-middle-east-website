import { MiddlewareHandler } from 'hono'

/**
 * Security Headers Middleware for G2 Middle East
 * Applies comprehensive security headers to all responses
 */
export const securityHeaders = (): MiddlewareHandler => {
  return async (c, next) => {
    await next()

    // HSTS - Force HTTPS for 1 year, include subdomains, allow preloading
    c.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')

    // Prevent clickjacking attacks
    c.header('X-Frame-Options', 'SAMEORIGIN')

    // Prevent MIME-type sniffing
    c.header('X-Content-Type-Options', 'nosniff')

    // Referrer policy - send origin on cross-origin requests
    c.header('Referrer-Policy', 'strict-origin-when-cross-origin')

    // Permissions policy - disable unused browser features
    c.header(
      'Permissions-Policy',
      'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=()'
    )

    // Content Security Policy
    // Allow self, CDN resources, fonts, and external images
    c.header(
      'Content-Security-Policy',
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com https://cdn.jsdelivr.net https://www.googletagmanager.com; " +
      "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com https://cdn.tailwindcss.com; " +
      "font-src 'self' https://cdn.jsdelivr.net https://fonts.gstatic.com; " +
      "img-src 'self' data: https: http:; " +
      "connect-src 'self' https:; " +
      "media-src 'self' https:; " +
      "frame-src 'self' https://www.youtube.com https://player.vimeo.com; " +
      "object-src 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self'; " +
      "frame-ancestors 'self';"
    )

    // XSS Protection (legacy browsers)
    c.header('X-XSS-Protection', '1; mode=block')
  }
}
