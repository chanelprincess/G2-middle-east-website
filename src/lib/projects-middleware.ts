/**
 * Projects Authentication Middleware
 * 
 * Middleware functions for protecting routes and enforcing access control
 * for the Projects section.
 */

import { Context } from 'hono'
import * as ProjectsAuth from './auth'

interface Bindings {
  PROJECTS_DB: D1Database
  JWT_SECRET?: string
}

/**
 * Extract JWT token from cookie
 */
function getTokenFromCookie(c: Context): string | null {
  const cookieHeader = c.req.header('Cookie')
  if (!cookieHeader) return null
  
  const cookies = cookieHeader.split(';').map(cookie => cookie.trim())
  const authCookie = cookies.find(cookie => cookie.startsWith('projects_auth='))
  
  if (!authCookie) return null
  
  return authCookie.split('=')[1]
}

/**
 * Middleware to require authentication
 * Redirects to login if not authenticated
 */
export async function requireProjectsAuth(c: Context<{ Bindings: Bindings }>, next: () => Promise<void>) {
  const token = getTokenFromCookie(c)
  
  if (!token) {
    return c.redirect('/projects/login')
  }
  
  const jwtSecret = c.env.JWT_SECRET || 'replace-with-real-secret-in-production'
  const userSession = await ProjectsAuth.getUserFromToken(token, jwtSecret, c.env.PROJECTS_DB)
  
  if (!userSession) {
    // Invalid or expired token
    c.header('Set-Cookie', 'projects_auth=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0')
    return c.redirect('/projects/login')
  }
  
  // Store user in context for route handlers
  c.set('projectsUser', userSession)
  
  await next()
}

/**
 * Middleware to require premium access
 * Checks for premium access level and NDA acceptance
 */
export async function requirePremiumAccess(c: Context<{ Bindings: Bindings }>, next: () => Promise<void>) {
  const user = c.get('projectsUser') as ProjectsAuth.UserSession | undefined
  
  if (!user) {
    return c.redirect('/projects/login')
  }
  
  if (user.accessLevel !== 'premium') {
    return c.html(`
      <html>
        <head>
          <meta charset="UTF-8">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center justify-center p-6">
          <div class="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 text-center">
            <div class="mb-6">
              <svg class="w-16 h-16 text-amber-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h1 class="text-2xl font-light text-white mb-4">Premium Access Required</h1>
            <p class="text-slate-300 mb-6">
              This content requires premium access. Please contact us to upgrade your account.
            </p>
            <a href="/contact" class="inline-block px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors">
              Request Premium Access
            </a>
          </div>
        </body>
      </html>
    `, 403)
  }
  
  if (!user.ndaAccepted) {
    return c.html(`
      <html>
        <head>
          <meta charset="UTF-8">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center justify-center p-6">
          <div class="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 text-center">
            <div class="mb-6">
              <svg class="w-16 h-16 text-yellow-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h1 class="text-2xl font-light text-white mb-4">NDA Acceptance Required</h1>
            <p class="text-slate-300 mb-6">
              To access confidential project information, you must first accept our Non-Disclosure Agreement.
            </p>
            <a href="/projects/account" class="inline-block px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors">
              Accept NDA
            </a>
          </div>
        </body>
      </html>
    `, 403)
  }
  
  await next()
}

/**
 * Middleware to require email verification
 */
export async function requireEmailVerification(c: Context<{ Bindings: Bindings }>, next: () => Promise<void>) {
  const user = c.get('projectsUser') as ProjectsAuth.UserSession | undefined
  
  if (!user) {
    return c.redirect('/projects/login')
  }
  
  if (!user.emailVerified) {
    return c.html(`
      <html>
        <head>
          <meta charset="UTF-8">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center justify-center p-6">
          <div class="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 text-center">
            <div class="mb-6">
              <svg class="w-16 h-16 text-yellow-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h1 class="text-2xl font-light text-white mb-4">Email Verification Required</h1>
            <p class="text-slate-300 mb-6">
              Please verify your email address to access this feature. Check your inbox for the verification link.
            </p>
            <a href="/projects/dashboard" class="inline-block px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors">
              Back to Dashboard
            </a>
          </div>
        </body>
      </html>
    `, 403)
  }
  
  await next()
}

/**
 * Get current authenticated user from context
 */
export function getCurrentUser(c: Context): ProjectsAuth.UserSession | null {
  return c.get('projectsUser') || null
}

/**
 * Log activity for a user
 */
export async function logActivity(
  c: Context<{ Bindings: Bindings }>,
  userId: string,
  action: string,
  details?: string
) {
  try {
    await c.env.PROJECTS_DB.prepare(`
      INSERT INTO projects_activity_log (user_id, action, details, ip_address, user_agent)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      userId,
      action,
      details || null,
      c.req.header('cf-connecting-ip') || 'unknown',
      c.req.header('user-agent') || 'unknown'
    ).run()
  } catch (error) {
    console.error('Failed to log activity:', error)
  }
}
