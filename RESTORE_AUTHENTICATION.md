# Restore Authentication Before Production

⚠️ **CRITICAL: Authentication is currently DISABLED for development convenience**

## What Was Changed

Authentication has been temporarily disabled for:
1. **Projects Page** (`/projects`)
2. **Whitepapers Page** (`/whitepapers`)

This allows easy editing and testing without login requirements.

## How to Restore Authentication

### Quick Restoration Steps

1. **Open file:** `/home/user/webapp/src/index.tsx`

2. **Search for:** `TODO: REMOVE BEFORE PRODUCTION`
   - You'll find 2 sections that need to be restored

3. **Projects Page (around line 599):**

   **REPLACE THIS:**
   ```typescript
   // TODO: REMOVE BEFORE PRODUCTION - Authentication temporarily disabled for editing
   // Protected Projects Page - requires authentication
   // PRODUCTION VERSION: app.get('/projects', requireProjectsAuth, async (c) => {
   app.get('/projects', async (c) => {
     // TODO: REMOVE BEFORE PRODUCTION - Restore this line:
     // const user = c.get('projectsUser') as ProjectsAuth.UserSession
   ```

   **WITH THIS:**
   ```typescript
   // Protected Projects Page - requires authentication
   app.get('/projects', requireProjectsAuth, async (c) => {
     const user = c.get('projectsUser') as ProjectsAuth.UserSession
   ```

4. **Whitepapers Page (around line 837):**

   **REPLACE THIS:**
   ```typescript
   // TODO: REMOVE BEFORE PRODUCTION - Authentication temporarily disabled for editing
   // PRODUCTION VERSION: app.get('/whitepapers', async (c) => {
   app.get('/whitepapers', async (c) => {
     // TODO: REMOVE BEFORE PRODUCTION - Restore these lines:
     // const user = await requireAuth(c)
     // if (user instanceof Response) return user
     
     // Temporary mock user for development
     const user = { email: 'dev@g2middleeast.com', name: 'Development User' }
   ```

   **WITH THIS:**
   ```typescript
   app.get('/whitepapers', async (c) => {
     const user = await requireAuth(c)
     if (user instanceof Response) return user
   ```

### Using Git to Restore

**Even easier - use git to revert these specific changes:**

```bash
cd /home/user/webapp

# View the changes that disabled authentication
git log --oneline | grep -i "disable\|bypass\|temp"

# Revert the commit that disabled authentication
git revert <commit-hash>

# Or manually restore using git diff
git diff HEAD~1 src/index.tsx
```

## Test After Restoration

After restoring authentication:

1. **Rebuild:**
   ```bash
   cd /home/user/webapp && npm run build
   ```

2. **Test Projects page requires login:**
   ```bash
   curl -I https://g2-middle-east-zuj.pages.dev/projects
   # Should return 302 redirect to /projects/login
   ```

3. **Test Whitepapers page requires login:**
   ```bash
   curl -I https://g2-middle-east-zuj.pages.dev/whitepapers
   # Should return 302 redirect to /login
   ```

4. **Deploy to production:**
   ```bash
   cd /home/user/webapp && npx wrangler pages deploy dist --project-name g2-middle-east
   ```

## Login Credentials (After Restoration)

**Projects Portal:**
- URL: `/projects/login`
- Email: `g2admin@g2middleeast.com`
- Password: `G2G2G2`

**Whitepapers Portal:**
- URL: `/login`
- Email: Use registered user credentials
- Password: User-specific passwords

## Current Status

- ❌ **Authentication DISABLED** - For development/editing
- ⚠️ **DO NOT deploy to production without restoring authentication**
- 📝 **Search for "TODO: REMOVE BEFORE PRODUCTION" before going live**

## Quick Check Before Production

```bash
# Search for TODO comments
cd /home/user/webapp
grep -r "TODO: REMOVE BEFORE PRODUCTION" src/

# If this returns results, authentication is still disabled!
```

---

**Date Disabled:** October 28, 2025  
**Reason:** Temporary bypass for easier content editing  
**Must Restore Before:** Production deployment
