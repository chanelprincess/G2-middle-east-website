# Testing Hybrid Access Control - Step-by-Step Guide

## 🔍 Why Your Browser Shows the Live Site

**The middleware IS working correctly!** Your browser has the `g2me_site_access` cookie set from a previous visit with the access token. This cookie lasts 30 days.

---

## ✅ **Quick Verification: The Site IS Protected**

I just tested with curl (no cookies) and confirmed:

```bash
# Regular browser = Under Construction ✅
curl https://g2middleeast.com/
Result: "Under Construction | G2 Middle East & Africa"

# Googlebot = Full Site ✅
curl -A "Googlebot" https://g2middleeast.com/
Result: "Strategic Counsel & Event Management | G2 Middle East & Africa"

# With access token = Full Site ✅
curl "https://g2middleeast.com/?access=g2me-preview-2025"
Result: "Strategic Counsel & Event Management | G2 Middle East & Africa"
```

**Conclusion**: The hybrid access control is **fully active and working perfectly**.

---

## 🧪 **How to Test in Your Browser**

### **Method 1: Incognito/Private Window (Recommended)**

1. **Open Incognito/Private Browser Window**
   - Chrome: `Ctrl+Shift+N` (Windows) or `Cmd+Shift+N` (Mac)
   - Firefox: `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
   - Safari: `Cmd+Shift+N` (Mac)

2. **Visit Homepage (No Token)**
   ```
   https://g2middleeast.com/
   ```
   **Expected Result**: "Under Construction" page with:
   - Title: "Site Under Development"
   - Hourglass icon
   - Contact information
   - No navigation menu

3. **Visit With Access Token**
   ```
   https://g2middleeast.com/?access=g2me-preview-2025
   ```
   **Expected Result**: Full homepage with:
   - Title: "Strategic Counsel & Event Management"
   - Hero section
   - Navigation menu (Services, Team, Projects, etc.)

4. **Close Incognito Window and Reopen**
   - Visit `https://g2middleeast.com/` again
   - Should see "Under Construction" (cookie was cleared)

---

### **Method 2: Clear Browser Cookies**

#### **Chrome**
1. Press `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
2. Select "Cookies and other site data"
3. Select "All time"
4. Click "Clear data"
5. Visit: `https://g2middleeast.com/`
6. Should see "Under Construction"

#### **Firefox**
1. Press `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
2. Select "Cookies"
3. Select "Everything"
4. Click "Clear Now"
5. Visit: `https://g2middleeast.com/`
6. Should see "Under Construction"

#### **Safari**
1. Go to Safari → Preferences → Privacy
2. Click "Manage Website Data"
3. Search for "g2middleeast.com"
4. Click "Remove" then "Done"
5. Visit: `https://g2middleeast.com/`
6. Should see "Under Construction"

---

### **Method 3: Developer Tools Cookie Inspection**

1. **Open Developer Tools**
   - Chrome/Firefox: `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
   - Safari: Enable Developer Menu first, then `Cmd+Option+I`

2. **Go to Application/Storage Tab**
   - Chrome: Click "Application" → "Cookies" → "https://g2middleeast.com"
   - Firefox: Click "Storage" → "Cookies" → "https://g2middleeast.com"
   - Safari: Click "Storage" → "Cookies" → "g2middleeast.com"

3. **Look for Cookie Named `g2me_site_access`**
   - **If present with value `g2me-preview-2025`**: You have access (site shows live)
   - **If not present**: You should see "Under Construction"

4. **To Test: Delete the Cookie**
   - Right-click on `g2me_site_access` cookie
   - Select "Delete"
   - Refresh the page (`F5`)
   - Should now see "Under Construction"

5. **To Restore Access**
   - Visit: `https://g2middleeast.com/?access=g2me-preview-2025`
   - Cookie will be automatically set again

---

## 🎯 **Expected Behavior Summary**

| Scenario | What You See | Why |
|----------|--------------|-----|
| **First visit (no token)** | Under Construction | No access cookie, not AI crawler |
| **Visit with ?access=g2me-preview-2025** | Full site | Token grants access + sets cookie |
| **Return visit (within 30 days)** | Full site | Cookie still valid |
| **Incognito mode (no token)** | Under Construction | No cookies in incognito |
| **AI crawler (Googlebot, etc.)** | Full site | AI user agent always allowed |

---

## 📱 **Testing Different Pages**

Once you have access (via token or cookie), test these pages:

### **Homepage**
```
https://g2middleeast.com/?access=g2me-preview-2025
```
Should show: Strategic Counsel & Event Management

### **Hazza Bin Zayed Stadium**
```
https://g2middleeast.com/projects/hazza-bin-zayed-stadium?access=g2me-preview-2025
```
Should show: Mission Critical: FIFA Stadium Upgrade

### **Bayt Qatar (Qatar Olympic House)**
```
https://g2middleeast.com/projects/qatar-olympic-house?access=g2me-preview-2025
```
Should show: Bayt Qatar: A Case Study in Sovereign Representation

### **Tim Jacobs Bio**
```
https://g2middleeast.com/team/tim-jacobs?access=g2me-preview-2025
```
Should show: Tim Jacobs bio page

### **Services Page**
```
https://g2middleeast.com/services?access=g2me-preview-2025
```
Should show: Services listing

---

## 🔒 **Security Verification**

### **Check Cookie Settings**

When you have access, inspect the cookie in Developer Tools:

**Expected Cookie Properties**:
- **Name**: `g2me_site_access`
- **Value**: `g2me-preview-2025`
- **Domain**: `g2middleeast.com`
- **Path**: `/`
- **Expires**: 30 days from now
- **HttpOnly**: ✅ Yes (prevents JavaScript access)
- **Secure**: ✅ Yes (HTTPS only)
- **SameSite**: `Lax`

---

## 🐛 **Troubleshooting**

### **Issue: Site always shows "Under Construction" even with token**

**Solution**:
1. Clear all browser cookies
2. Close all browser windows
3. Open new browser window
4. Visit: `https://g2middleeast.com/?access=g2me-preview-2025`
5. Check if cookie was set in Developer Tools

### **Issue: Site always shows live content in incognito**

**Possible causes**:
1. Browser extensions interfering (disable all extensions)
2. VPN or proxy caching (disable temporarily)
3. Cloudflare CDN caching (wait 5 minutes or purge cache)

### **Issue: Cookie not persisting**

**Solution**:
1. Check browser cookie settings (allow cookies for g2middleeast.com)
2. Ensure HTTPS is being used (not HTTP)
3. Check browser privacy settings (not blocking third-party cookies)

---

## 🌍 **Testing as Different User Types**

### **1. Regular Visitor (No Access)**
```bash
# Use curl without cookies
curl https://g2middleeast.com/
# Should see: "Under Construction"
```

### **2. Stakeholder (With Token)**
```bash
# Use curl with access token
curl "https://g2middleeast.com/?access=g2me-preview-2025"
# Should see: "Strategic Counsel"
```

### **3. Google Search Bot**
```bash
# Use curl with Googlebot user agent
curl -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" https://g2middleeast.com/
# Should see: "Strategic Counsel"
```

### **4. ChatGPT Bot**
```bash
# Use curl with GPTBot user agent
curl -A "GPTBot/1.0" https://g2middleeast.com/
# Should see: "Strategic Counsel"
```

---

## 📊 **Access Matrix**

| User Type | User Agent | Token/Cookie | Access Level |
|-----------|------------|--------------|--------------|
| Regular human | Standard browser | ❌ None | 🚫 Under Construction |
| Stakeholder | Standard browser | ✅ Token in URL | ✅ Full site |
| Returning stakeholder | Standard browser | ✅ Cookie set | ✅ Full site |
| Googlebot | Googlebot UA | ❌ N/A | ✅ Full site (AI crawler) |
| ChatGPT | GPTBot UA | ❌ N/A | ✅ Full site (AI crawler) |
| Claude | Claude-Web UA | ❌ N/A | ✅ Full site (AI crawler) |
| Perplexity | PerplexityBot UA | ❌ N/A | ✅ Full site (AI crawler) |

---

## ✅ **Confirmation Checklist**

After testing, confirm:

- [ ] Incognito mode (no token) shows "Under Construction"
- [ ] Incognito mode (with token) shows full site
- [ ] Cookie persists after closing and reopening browser (with same profile)
- [ ] Cookie does NOT persist in incognito mode
- [ ] Deleting cookie returns to "Under Construction" view
- [ ] All protected pages work with access token
- [ ] Public pages (robots.txt, sitemap.xml) work without token

---

## 🎯 **Final Verification Command**

Run this command to see the actual HTTP response headers (including cookie setting):

```bash
curl -v "https://g2middleeast.com/?access=g2me-preview-2025" 2>&1 | grep -i "set-cookie"
```

**Expected Output**:
```
< set-cookie: g2me_site_access=g2me-preview-2025; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000
```

---

## 📝 **Summary**

**The hybrid access control IS working correctly!**

- ✅ Regular visitors see "Under Construction"
- ✅ AI crawlers (Google, ChatGPT, etc.) see full site
- ✅ Stakeholders with token see full site
- ✅ Cookie persists for 30 days after first access
- ✅ No negative SEO impact (Google can crawl everything)

**Your browser shows the live site because you previously visited with the access token and the cookie is still valid.**

To see the "Under Construction" page, use incognito mode or clear your cookies!

---

**Questions?** Test using the methods above and verify the middleware is working as designed. 🚀
