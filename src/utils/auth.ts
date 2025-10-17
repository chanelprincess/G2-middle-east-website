import type { Context } from 'hono'

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
export function setAuthCookie(c: Context, userId: number, username: string) {
  const sessionData = JSON.stringify({ userId, username, timestamp: Date.now() })
  const encodedSession = btoa(sessionData)
  
  c.header('Set-Cookie', `auth_session=${encodedSession}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`)
}

export function getAuthSession(c: Context): { userId: number; username: string } | null {
  const cookies = c.req.header('Cookie')
  if (!cookies) return null
  
  const authCookie = cookies.split(';').find(c => c.trim().startsWith('auth_session='))
  if (!authCookie) return null
  
  try {
    const encodedSession = authCookie.split('=')[1]
    const sessionData = JSON.parse(atob(encodedSession))
    
    // Check if session is less than 24 hours old
    if (Date.now() - sessionData.timestamp > 86400000) {
      return null
    }
    
    return { userId: sessionData.userId, username: sessionData.username }
  } catch (e) {
    return null
  }
}

export function clearAuthCookie(c: Context) {
  c.header('Set-Cookie', 'auth_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0')
}

// Check if user is authenticated and approved
export async function requireAuth(c: Context): Promise<any> {
  const session = getAuthSession(c)
  if (!session) {
    return c.redirect('/whitepapers/login')
  }
  
  // Verify user is still approved
  const user = await c.env.DB.prepare(
    'SELECT id, username, email, full_name, is_approved, is_admin FROM users WHERE id = ? AND is_approved = 1'
  ).bind(session.userId).first()
  
  if (!user) {
    clearAuthCookie(c)
    return c.redirect('/whitepapers/login')
  }
  
  return user
}

// Check if user is admin
export async function requireAdmin(c: Context): Promise<any> {
  const user = await requireAuth(c)
  if (user instanceof Response) return user
  
  if (!user.is_admin) {
    return c.text('Unauthorized', 403)
  }
  
  return user
}
