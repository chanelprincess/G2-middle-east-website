-- Migration: Create Projects Authentication and Management Tables
-- Date: 2025-01-15
-- Description: Complete schema for secure projects section with user authentication
-- Note: Uses separate tables prefixed with 'projects_' to avoid conflicts

-- Projects Users table (separate from insights users)
CREATE TABLE IF NOT EXISTS projects_users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  full_name TEXT NOT NULL,
  company_name TEXT,
  phone_number TEXT,
  country TEXT,
  industry_sector TEXT,
  access_level TEXT DEFAULT 'standard',
  is_active INTEGER DEFAULT 1,
  email_verified INTEGER DEFAULT 0,
  two_factor_enabled INTEGER DEFAULT 0,
  failed_login_attempts INTEGER DEFAULT 0,
  account_locked_until TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  last_login TEXT,
  nda_accepted INTEGER DEFAULT 0,
  nda_accepted_date TEXT
);

-- Indexes for projects_users table
CREATE INDEX IF NOT EXISTS idx_projects_users_email ON projects_users(email);
CREATE INDEX IF NOT EXISTS idx_projects_users_access_level ON projects_users(access_level);
CREATE INDEX IF NOT EXISTS idx_projects_users_created_at ON projects_users(created_at);

-- Projects table for case studies and project documentation
CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  client_name TEXT,
  project_type TEXT,
  location TEXT,
  start_date TEXT,
  end_date TEXT,
  featured_image_url TEXT,
  gallery_images TEXT,
  access_level TEXT DEFAULT 'standard',
  is_confidential INTEGER DEFAULT 0,
  is_published INTEGER DEFAULT 0,
  view_count INTEGER DEFAULT 0,
  download_count INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  created_by TEXT,
  metadata TEXT
);

-- Indexes for projects table
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_access_level ON projects(access_level);
CREATE INDEX IF NOT EXISTS idx_projects_is_published ON projects(is_published);
CREATE INDEX IF NOT EXISTS idx_projects_project_type ON projects(project_type);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at);

-- Project documents table for downloadable files
CREATE TABLE IF NOT EXISTS project_documents (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL,
  document_name TEXT NOT NULL,
  document_type TEXT,
  file_url TEXT NOT NULL,
  file_size_mb REAL,
  access_level TEXT DEFAULT 'standard',
  is_confidential INTEGER DEFAULT 0,
  download_count INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Indexes for project_documents table
CREATE INDEX IF NOT EXISTS idx_project_documents_project_id ON project_documents(project_id);
CREATE INDEX IF NOT EXISTS idx_project_documents_access_level ON project_documents(access_level);

-- User activity log for tracking actions
CREATE TABLE IF NOT EXISTS projects_activity_log (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  activity_type TEXT NOT NULL,
  project_id TEXT,
  document_id TEXT,
  ip_address TEXT,
  user_agent TEXT,
  metadata TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Indexes for projects_activity_log table
CREATE INDEX IF NOT EXISTS idx_projects_activity_log_user_id ON projects_activity_log(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_activity_log_activity_type ON projects_activity_log(activity_type);
CREATE INDEX IF NOT EXISTS idx_projects_activity_log_created_at ON projects_activity_log(created_at);

-- Email verification tokens table
CREATE TABLE IF NOT EXISTS projects_email_verification_tokens (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  token TEXT UNIQUE NOT NULL,
  expires_at TEXT NOT NULL,
  used INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Indexes for projects_email_verification_tokens table
CREATE INDEX IF NOT EXISTS idx_projects_verification_tokens_token ON projects_email_verification_tokens(token);
CREATE INDEX IF NOT EXISTS idx_projects_verification_tokens_user_id ON projects_email_verification_tokens(user_id);

-- Password reset tokens table
CREATE TABLE IF NOT EXISTS projects_password_reset_tokens (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  token TEXT UNIQUE NOT NULL,
  expires_at TEXT NOT NULL,
  used INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Indexes for projects_password_reset_tokens table
CREATE INDEX IF NOT EXISTS idx_projects_reset_tokens_token ON projects_password_reset_tokens(token);
CREATE INDEX IF NOT EXISTS idx_projects_reset_tokens_user_id ON projects_password_reset_tokens(user_id);

-- Sessions table for tracking active sessions
CREATE TABLE IF NOT EXISTS projects_sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  token TEXT UNIQUE NOT NULL,
  refresh_token TEXT UNIQUE,
  ip_address TEXT,
  user_agent TEXT,
  expires_at TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  last_activity TEXT DEFAULT (datetime('now'))
);

-- Indexes for projects_sessions table
CREATE INDEX IF NOT EXISTS idx_projects_sessions_token ON projects_sessions(token);
CREATE INDEX IF NOT EXISTS idx_projects_sessions_user_id ON projects_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_sessions_expires_at ON projects_sessions(expires_at);

-- Insert sample project data for demonstration
INSERT OR IGNORE INTO projects (id, slug, title, subtitle, description, client_name, project_type, location, start_date, end_date, access_level, is_published) VALUES
('proj_001', 'queen-elizabeth-ii-uae-visit', 'State Visit of Queen Elizabeth II to the UAE', 'Operational delivery of historic royal state visit', 'Project direction and operational delivery for the historic state visit of Her Majesty Queen Elizabeth II to the United Arab Emirates in November 2010.', 'UAE Government', 'State Visit', 'United Arab Emirates', '2010-11-24', '2010-11-26', 'standard', 1),
('proj_002', 'papal-mass-pope-francis', 'Papal Mass of Pope Francis in Abu Dhabi', 'Historic religious gathering in Middle East', 'Project direction for the historic Papal Mass delivered by Pope Francis in Abu Dhabi in February 2019, one of the largest religious gatherings in Middle East history.', 'UAE Government', 'Religious Event', 'Abu Dhabi, UAE', '2019-02-05', '2019-02-05', 'standard', 1),
('proj_003', 'special-olympics-2019', 'Special Olympics World Games Abu Dhabi 2019', 'Largest humanitarian sporting event of 2019', 'Special advisor for ceremonies and strategic counsel on operational delivery for the Special Olympics World Games held in Abu Dhabi, March 2019.', 'UAE Government / Special Olympics International', 'Sporting Event', 'Abu Dhabi, UAE', '2019-03-14', '2019-03-21', 'standard', 1),
('proj_004', 'expo-2020-dubai', 'Expo 2020 Dubai - Overlay Budget Planning', 'Strategic consulting for world exposition', 'Strategic consultant for overlay budget planning and operational modeling for Expo 2020 Dubai, one of the world''s largest international expositions.', 'Expo 2020 Dubai', 'World Exposition', 'Dubai, UAE', '2018-01-01', '2021-12-31', 'premium', 1),
('proj_005', 'cop27-egypt', 'COP27 UN Climate Summit Egypt', 'UN Climate Change Conference logistics', 'Senior delivery role for COP27 UN Climate Change Conference in Sharm El-Sheikh, Egypt, November 2022.', 'United Nations / Egypt Government', 'International Summit', 'Sharm El-Sheikh, Egypt', '2022-11-06', '2022-11-18', 'premium', 1);
