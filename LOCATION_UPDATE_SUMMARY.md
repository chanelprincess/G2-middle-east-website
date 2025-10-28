# Location Update: Dubai → Abu Dhabi
**Date:** October 28, 2025
**Deployment ID:** 871c7e23-4f98-4069-9d42-5f1a2463d999
**Git Commit:** 4de6f92

## Overview
Successfully updated G2 Middle East location information from Dubai, UAE to Abu Dhabi, UAE across the website, including comprehensive legal jurisdiction updates.

## Changes Made

### 1. Contact Page (`src/pages/Contact.tsx`)
**Updated Lines:** 62-73

**Before:**
```
Location: Dubai, UAE
```

**After:**
```
Location: 
Mazyad 3, MBZ City
Abu Dhabi, UAE
Serving clients across the GCC
```

### 2. Terms of Service (`src/pages/TermsOfService.tsx`)
**Updated Lines:** 340-353

**Legal Jurisdiction Changes:**

#### Mediation Venue (Line 346)
- **Before:** "mediation in Dubai, UAE"
- **After:** "mediation in Abu Dhabi, UAE"

#### Arbitration (Line 347)
- **Before:** "Dubai International Arbitration Centre (DIAC), conducted in English in Dubai, UAE"
- **After:** "Abu Dhabi Commercial Conciliation and Arbitration Centre (ADCCAC), conducted in English in Abu Dhabi, UAE"

#### Exclusive Jurisdiction (Lines 351-353)
- **Before:** "exclusive jurisdiction of the courts located in Dubai, United Arab Emirates"
- **After:** "exclusive jurisdiction of the courts located in Abu Dhabi, United Arab Emirates"

### 3. NOT CHANGED (By Design)

#### Team Page (`src/pages/Team.tsx`)
**Lines 782, 1178, 1206 - Historical Event Locations**

These Schema.org structured data entries remain as "Dubai, UAE" because they describe WHERE historical events actually took place:
- Expo 2020 Dubai (2018-2021) - Event location: Dubai
- Du Gitex and Mecom Exhibition (2012) - Event location: Dubai
- Dubailand Exhibition (2011) - Event location: Dubai

**Rationale:** These are factually accurate historical records and should not be changed.

## Deployment Details

### Production URLs
- **Latest Deployment:** https://871c7e23.g2-middle-east-zuj.pages.dev
- **Project Name:** g2-middle-east
- **Environment:** Production
- **Branch:** main

### Verification Tests
✅ Contact page displays new Abu Dhabi address
✅ Terms of Service references ADCCAC arbitration center
✅ Terms of Service specifies Abu Dhabi jurisdiction
✅ Historical event locations preserved as Dubai

### Build Information
- **Build Time:** 1.29s
- **Bundle Size:** 616.16 kB (dist/_worker.js)
- **Vite Version:** 6.4.0

## Git History
```bash
commit 4de6f92
Author: G2 Middle East Development Team
Date: Current session

    Update location from Dubai to Abu Dhabi: Contact page and legal jurisdiction
    
    - Contact.tsx: New address (Mazyad 3, MBZ City, Abu Dhabi)
    - TermsOfService.tsx: Updated mediation, arbitration, and jurisdiction to Abu Dhabi
    - Changed DIAC → ADCCAC for arbitration venue
```

## Legal Implications

### Updated Legal Framework
The Terms of Service now reflect Abu Dhabi as the legal jurisdiction for:
1. **Mediation proceedings**
2. **Arbitration** (via ADCCAC instead of DIAC)
3. **Court jurisdiction** (Abu Dhabi courts)

### Governing Law
**Unchanged:** United Arab Emirates law continues to govern all terms

### Recommendation
This update aligns the company's legal jurisdiction with its physical office location in Abu Dhabi. All new agreements and disputes will now be governed under Abu Dhabi jurisdiction.

## Next Steps

### Completed ✅
- [x] Update Contact page with new address
- [x] Update Terms of Service legal clauses
- [x] Preserve historical event locations
- [x] Build and deploy to production
- [x] Verify deployment success
- [x] Commit changes to git

### Pending (if needed)
- [ ] Push commits to GitHub (58 commits ahead of origin/main)
- [ ] Update any printed materials with new address
- [ ] Notify clients of jurisdiction change (if contractually required)
- [ ] Review existing client contracts for jurisdiction clauses

## Testing Commands

```bash
# Test Contact page
curl -sL https://871c7e23.g2-middle-east-zuj.pages.dev/contact | grep "Mazyad 3"

# Test Terms of Service
curl -sL https://871c7e23.g2-middle-east-zuj.pages.dev/terms | grep "ADCCAC"
curl -sL https://871c7e23.g2-middle-east-zuj.pages.dev/terms | grep "Abu Dhabi, United Arab Emirates"
```

## Contact Information (Updated)

**G2 Middle East & Africa**
Mazyad 3, MBZ City
Abu Dhabi, UAE

**Email:** contact@g2middleast.com
**Phone:** +971 50 123 4567

**Legal Jurisdiction:** Abu Dhabi, United Arab Emirates
**Arbitration:** Abu Dhabi Commercial Conciliation and Arbitration Centre (ADCCAC)

---

**Document Status:** Deployment Complete ✅
**Last Updated:** October 28, 2025
**Deployment URL:** https://871c7e23.g2-middle-east-zuj.pages.dev
