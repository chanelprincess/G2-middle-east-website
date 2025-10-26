/**
 * Projects Authentication Utilities
 * 
 * Uses Web Crypto API (compatible with Cloudflare Workers)
 * Similar approach to Whitepapers section but for Projects
 */

import type { Context } from 'hono'

// Constants
export const MAX_FAILED_ATTEMPTS = 5
export const ACCOUNT_LOCK_DURATION_MINUTES = 30

// Simple password hashing using Web Crypto API (available in Cloudflare Workers)
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const passwordHash = await hashPassword(password)
  return passwordHash === hash
}

// Session management using cookies
export function setProjectsAuthCookie(c: Context, userId: string, email: string, fullName: string, accessLevel: string, ndaAccepted: boolean) {
  const sessionData = JSON.stringify({ 
    userId, 
    email, 
    fullName,
    accessLevel,
    ndaAccepted,
    timestamp: Date.now() 
  })
  const encodedSession = btoa(sessionData)
  
  c.header('Set-Cookie', `projects_auth_session=${encodedSession}; Path=/; HttpOnly; SameSite=Strict; Max-Age=604800`)
}

export function getProjectsAuthSession(c: Context): UserSession | null {
  const cookies = c.req.header('Cookie')
  if (!cookies) return null
  
  const authCookie = cookies.split(';').find(c => c.trim().startsWith('projects_auth_session='))
  if (!authCookie) return null
  
  try {
    const encodedSession = authCookie.split('=')[1]
    const sessionData = JSON.parse(atob(encodedSession))
    
    // Check if session is less than 7 days old
    if (Date.now() - sessionData.timestamp > 604800000) {
      return null
    }
    
    return {
      userId: sessionData.userId,
      email: sessionData.email,
      fullName: sessionData.fullName,
      accessLevel: sessionData.accessLevel || 'standard',
      emailVerified: true,
      ndaAccepted: sessionData.ndaAccepted || false
    }
  } catch (e) {
    return null
  }
}

export function clearProjectsAuthCookie(c: Context) {
  c.header('Set-Cookie', 'projects_auth_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0')
}

// Middleware to require authentication for Projects routes
export async function requireProjectsAuth(c: Context, next: () => Promise<void>) {
  const session = getProjectsAuthSession(c)
  
  if (!session) {
    return c.redirect('/projects/login')
  }
  
  // Store session in context for use in route handlers
  c.set('projectsUser', session)
  
  await next()
}

/**
 * User session data structure
 */
export interface UserSession {
  userId: string
  email: string
  fullName: string
  accessLevel: 'standard' | 'premium'
  emailVerified: boolean
  ndaAccepted: boolean
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate password complexity
 * - At least 8 characters (simplified from 12 for better UX)
 * - Contains uppercase letter
 * - Contains lowercase letter
 * - Contains number
 */
export function validatePasswordComplexity(password: string): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long')
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number')
  }

  return {
    valid: errors.length === 0,
    errors
  }
}

/**
 * Sanitize user input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Generate a secure random token for email verification or password reset
 */
export function generateToken(): string {
  // Generate 32 random bytes and convert to hex
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

/**
 * Generate a unique user ID (21 characters, URL-safe)
 */
export function generateUserId(): string {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(36)).join('').substring(0, 21)
}

/**
 * Generate a JWT token (simplified - just returns a session token)
 */
export function generateJWT(userId: string, email: string, jwtSecret: string): string {
  // For simplicity, we'll use the cookie session instead of JWT
  // This returns a simple token that can be used for verification emails etc
  return generateToken()
}

/**
 * Check if account is locked due to failed login attempts
 */
export function isAccountLocked(lockedUntil: string | null): boolean {
  if (!lockedUntil) return false
  return new Date(lockedUntil) > new Date()
}

/**
 * Calculate account lock expiry time
 */
export function calculateLockExpiry(): string {
  const now = new Date()
  now.setMinutes(now.getMinutes() + ACCOUNT_LOCK_DURATION_MINUTES)
  return now.toISOString()
}

/**
 * Log user activity (simplified version)
 */
export async function logActivity(
  c: Context,
  userId: string,
  action: string,
  details?: string
) {
  try {
    const db = (c.env as any).PROJECTS_DB
    if (!db) return

    const ipAddress = c.req.header('CF-Connecting-IP') || c.req.header('X-Forwarded-For') || 'unknown'
    const userAgent = c.req.header('User-Agent') || 'unknown'

    await db.prepare(`
      INSERT INTO projects_activity_log (id, user_id, activity_type, ip_address, user_agent, metadata)
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(
      generateUserId(), // Generate unique ID for log entry
      userId,
      action, // Maps to activity_type column
      ipAddress,
      userAgent,
      details || '' // Store details in metadata column
    ).run()
  } catch (error) {
    console.error('Failed to log activity:', error)
  }
}
