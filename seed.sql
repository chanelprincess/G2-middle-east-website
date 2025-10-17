-- Create admin user (password: admin123)
-- Password hash is SHA-256 of "admin123"
INSERT OR IGNORE INTO users (username, email, password_hash, full_name, company, job_title, is_approved, is_admin) 
VALUES (
  'admin',
  'tim@ktsglobal.live',
  '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',
  'Tim Jacobs',
  'G2 Middle East',
  'Regional COO',
  1,
  1
);

-- Create sample whitepapers
INSERT OR IGNORE INTO whitepapers (title, description, file_path, file_size, is_active) VALUES
(
  'Strategic Brand Architecture in the Middle East',
  'A comprehensive guide to building resilient brand architectures that resonate with regional markets while maintaining global consistency.',
  'whitepapers/strategic-brand-architecture.pdf',
  2500000,
  1
),
(
  'The Future of Luxury Communications',
  'Exploring how luxury brands are adapting their communication strategies to engage with discerning audiences in an increasingly digital landscape.',
  'whitepapers/luxury-communications-future.pdf',
  1800000,
  1
),
(
  'Sovereign Branding: Nation Brand Development',
  'Best practices and case studies in nation branding, examining how countries position themselves on the global stage.',
  'whitepapers/sovereign-branding-guide.pdf',
  3200000,
  1
);
