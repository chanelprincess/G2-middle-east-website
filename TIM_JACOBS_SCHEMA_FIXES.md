# Tim Jacobs Schema Warnings - Fix Guide

## 🚨 **7 Warnings Found in Google Rich Results Test**

### **Warning Details:**
- **ID**: https://g2middleeast.com/team/tim-jacobs#person
- **Errors**: 0 ✅
- **Warnings**: 7 ⚠️

---

## 📋 **Warnings Breakdown**

### **Warning 1-6: `roleName` Property Not Recognized (6 instances)**

**Issue**: `roleName` is not a valid Schema.org property for Person type.

**Current Invalid Properties:**
1. `roleName`: "Strategic Advisor"
2. `roleName`: "Project Director"  
3. `roleName`: "Consultant - Overlay Budget Planning"
4. `roleName`: "Consultant"
5. `roleName`: "Senior Delivery Role"
6. `roleName`: "Technical Director"

**Where**: These appear in Tim Jacobs' `performerIn` Event entities

---

### **Warning 7: `inLanguage` Property Not Recognized (1 instance)**

**Issue**: `inLanguage` is not a valid Schema.org property for Organization type.

**Current Invalid Property:**
- `inLanguage`: "en-GB" (in Tim Jacobs' `worksFor` Organization)

---

## ✅ **How to Fix These Warnings**

### **Fix 1: Remove `roleName` from Event Entities**

**Problem**: Schema.org doesn't support `roleName` in Event's performer/director properties.

**Solution**: Use `description` field instead to describe the role.

**Before** (Invalid):
```json
{
  "@type": "Event",
  "name": "State Visit of Queen Elizabeth II",
  "performer": {
    "@type": "Person",
    "@id": "https://g2middleeast.com/team/tim-jacobs#person",
    "roleName": "Strategic Advisor"  ❌ Not valid
  }
}
```

**After** (Valid):
```json
{
  "@type": "Event",
  "name": "State Visit of Queen Elizabeth II",
  "performer": {
    "@type": "Person",
    "@id": "https://g2middleeast.com/team/tim-jacobs#person"
  },
  "description": "Strategic advisor and project director for the operational delivery..."  ✅ Valid
}
```

**Alternative Solution** (Keep role info):
Move role information to the Event's `about` or `description` field:

```json
{
  "@type": "Event",
  "name": "Qatar Olympic House London 2012",
  "description": "Project director Tim Jacobs led the 12-week delivery of Qatar's flagship Olympic hospitality venue...",
  "director": {
    "@type": "Person",
    "@id": "https://g2middleeast.com/team/tim-jacobs#person"
  }
}
```

---

### **Fix 2: Remove `inLanguage` from Organization**

**Problem**: `inLanguage` is valid for CreativeWork types (Article, WebPage, etc.) but NOT for Organization.

**Solution**: Remove `inLanguage` from the `worksFor` Organization object.

**Before** (Invalid):
```json
{
  "worksFor": {
    "@type": "Organization",
    "@id": "https://g2middleeast.com/#organization",
    "name": "G2 Middle East & Africa",
    "inLanguage": "en-GB"  ❌ Not valid for Organization
  }
}
```

**After** (Valid):
```json
{
  "worksFor": {
    "@type": "Organization",
    "@id": "https://g2middleeast.com/#organization",
    "name": "G2 Middle East & Africa"
    // inLanguage removed ✅
  }
}
```

**Note**: If you want to specify language, add it to the Person or WebPage entity instead:
```json
{
  "@type": "Person",
  "name": "Tim Jacobs",
  "knowsLanguage": ["en", "en-GB"]  ✅ Valid for Person
}
```

---

## 🔍 **Where to Find Tim Jacobs' Schema**

Tim Jacobs likely has a comprehensive `customSchema` object defined separately. Look for:

### **Possible Locations:**
1. `/home/user/webapp/src/data/team-schemas.ts` (if exists)
2. `/home/user/webapp/src/data/tim-jacobs-schema.ts` (if exists)
3. **Embedded in Team.tsx** - Check for `timJacobs` customSchema object
4. **Embedded in index.tsx** - Check for Tim Jacobs route with custom schema

### **Search Commands:**
```bash
# Find files with Tim Jacobs customSchema
cd /home/user/webapp
grep -r "Strategic Advisor" src/ --include="*.ts*" | grep -v node_modules

# Find performerIn definitions
grep -r "performerIn" src/ --include="*.ts*" | grep -v node_modules

# Find roleName usage
grep -r "roleName" src/ --include="*.ts*" | grep -v node_modules
```

---

## 🛠️ **Implementation Steps**

### **Step 1: Locate Tim Jacobs' customSchema**

The schema with `performerIn` events is likely defined in one of these locations:
- `src/data/team-schemas.ts`
- `src/pages/Team.tsx` (embedded in teamData)
- A separate file imported into the Tim Jacobs route

### **Step 2: Find All `roleName` Properties**

Search for:
```typescript
"roleName": "Strategic Advisor"
"roleName": "Project Director"
"roleName": "Consultant"
// etc.
```

### **Step 3: Remove or Replace `roleName`**

**Option A: Remove entirely**
```typescript
// Delete these lines:
"roleName": "Strategic Advisor",
"roleName": "Project Director",
// etc.
```

**Option B: Move to Event description**
```typescript
{
  "@type": "Event",
  "name": "State Visit of Queen Elizabeth II",
  "description": "Tim Jacobs served as Strategic Advisor and Project Director for this historic royal visit...",
  "director": {
    "@type": "Person",
    "@id": "https://g2middleeast.com/team/tim-jacobs#person"
  }
}
```

### **Step 4: Remove `inLanguage` from Organization**

Find:
```typescript
"worksFor": {
  "@type": "Organization",
  "name": "G2 Middle East & Africa",
  "inLanguage": "en-GB"  // DELETE THIS LINE
}
```

Remove the `inLanguage` property entirely.

### **Step 5: Test with Google Rich Results**

After making changes:
1. Build and deploy: `npm run build && npx wrangler pages deploy dist --project-name g2-middle-east`
2. Test URL: https://search.google.com/test/rich-results
3. Enter: `https://g2middleeast.com/team/tim-jacobs?access=g2me-preview-2025`
4. Verify: 0 errors, 0 warnings ✅

---

##  🎯 **Alternative: Use `hasOccupation` with Occupation Type**

If you want to keep role information structured, use the correct Schema.org pattern:

**Correct Pattern for Roles:**
```json
{
  "@type": "Person",
  "name": "Tim Jacobs",
  "hasOccupation": [
    {
      "@type": "Occupation",
      "name": "Strategic Advisor",
      "description": "Provides strategic counsel to governments on cognitive security and sovereign positioning",
      "occupationLocation": {
        "@type": "Place",
        "name": "Middle East & Africa"
      }
    },
    {
      "@type": "Occupation",
      "name": "Project Director",
      "description": "Directs operational execution of state-level events and government initiatives",
      "occupationLocation": {
        "@type": "Place",
        "name": "United Arab Emirates"
      }
    }
  ]
}
```

**Benefits:**
- ✅ Valid Schema.org markup
- ✅ Zero warnings
- ✅ Preserves role information
- ✅ Better structure for multiple roles

---

## 📊 **Expected Results After Fix**

### **Before (Current)**
- Errors: 0
- Warnings: 7 ⚠️
  - 6x `roleName` not recognized
  - 1x `inLanguage` not recognized

### **After (Fixed)**
- Errors: 0 ✅
- Warnings: 0 ✅
- All entities recognized correctly
- Perfect Schema.org validation

---

## 🔍 **Why These Warnings Matter**

### **Minor Impact (Safe to Ignore Short-Term)**
- Google **can still** index the page
- Rich results **may still** appear
- No immediate SEO penalty

### **Best Practice (Fix Recommended)**
- Cleaner validation = better trust signals
- Future-proof against Schema.org changes
- Shows technical SEO excellence
- Prevents confusion in Google's entity recognition

---

## 📝 **Summary**

**What to Fix:**
1. Remove 6x `roleName` properties from `performerIn` Event entities
2. Remove 1x `inLanguage` property from `worksFor` Organization
3. Optionally: Use `hasOccupation` with `Occupation` type for structured roles

**Expected Outcome:**
- 0 errors ✅
- 0 warnings ✅
- Perfect Schema.org validation
- Improved entity recognition

**Priority**: Medium (not urgent, but recommended for SEO best practices)

---

**Need help locating the schema file?** Run these search commands:
```bash
cd /home/user/webapp
grep -rn "Strategic Advisor" src/ --include="*.ts*"
grep -rn "performerIn" src/ --include="*.ts*"
grep -rn '"roleName"' src/ --include="*.ts*"
```

This will show you exactly which file contains Tim Jacobs' customSchema with the warnings. 🚀
