/**
 * Authentication Utilities
 * 
 * Provides password hashing, JWT token generation/verification,
 * and user authentication functions for the Projects section.
 */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid';

// Constants
const BCRYPT_SALT_ROUNDS = 12;
const JWT_EXPIRY = '7d'; // 7 days
const MAX_FAILED_ATTEMPTS = 5;
const ACCOUNT_LOCK_DURATION_MINUTES = 30;

/**
 * Hash a plain text password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Generate a JWT token for a user
 */
export function generateJWT(userId: string, email: string, jwtSecret: string): string {
  return jwt.sign(
    { 
      userId, 
      email,
      type: 'session'
    },
    jwtSecret,
    { expiresIn: JWT_EXPIRY }
  );
}

/**
 * Verify and decode a JWT token
 */
export function verifyJWT(token: string, jwtSecret: string): { userId: string; email: string } | null {
  try {
    const decoded = jwt.verify(token, jwtSecret) as { userId: string; email: string; type: string };
    if (decoded.type === 'session') {
      return { userId: decoded.userId, email: decoded.email };
    }
    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Generate a secure random token for email verification or password reset
 */
export function generateToken(): string {
  return nanoid(32);
}

/**
 * Validate password complexity
 * - At least 12 characters
 * - Contains uppercase letter
 * - Contains lowercase letter
 * - Contains number
 * - Contains special character
 */
export function validatePasswordComplexity(password: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (password.length < 12) {
    errors.push('Password must be at least 12 characters long');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Check if account is locked due to failed login attempts
 */
export function isAccountLocked(lockedUntil: string | null): boolean {
  if (!lockedUntil) return false;
  return new Date(lockedUntil) > new Date();
}

/**
 * Calculate account lock expiry time
 */
export function calculateLockExpiry(): string {
  const now = new Date();
  now.setMinutes(now.getMinutes() + ACCOUNT_LOCK_DURATION_MINUTES);
  return now.toISOString();
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
    .replace(/\//g, '&#x2F;');
}

/**
 * Generate a CSRF token
 */
export function generateCSRFToken(): string {
  return nanoid(32);
}

/**
 * User session data structure
 */
export interface UserSession {
  userId: string;
  email: string;
  fullName: string;
  accessLevel: 'standard' | 'premium';
  emailVerified: boolean;
  ndaAccepted: boolean;
}

/**
 * Extract user session from JWT token
 */
export async function getUserFromToken(token: string, jwtSecret: string, db: D1Database): Promise<UserSession | null> {
  const decoded = verifyJWT(token, jwtSecret);
  if (!decoded) return null;

  // Fetch user details from database
  const user = await db.prepare(`
    SELECT id, email, full_name, access_level, email_verified, nda_accepted, is_active
    FROM projects_users
    WHERE id = ? AND is_active = 1
  `).bind(decoded.userId).first();

  if (!user) return null;

  return {
    userId: user.id as string,
    email: user.email as string,
    fullName: user.full_name as string,
    accessLevel: user.access_level as 'standard' | 'premium',
    emailVerified: user.email_verified === 1,
    ndaAccepted: user.nda_accepted === 1
  };
}

export { MAX_FAILED_ATTEMPTS, ACCOUNT_LOCK_DURATION_MINUTES };
