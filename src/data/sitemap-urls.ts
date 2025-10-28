/**
 * Sitemap URL Inventory
 * 
 * Complete list of all indexable public URLs for G2 Middle East website.
 * This file serves as the source of truth for sitemap generation.
 * 
 * Last Updated: 2025-10-28
 * Total URLs: 70 (English-only - canonical URLs only, no aliases)
 * 
 * Categories:
 * - Core Static Pages: 9 (excludes aliases: /briefing, /terms, /privacy)
 * - Service Pages: 9
 * - Team Profiles: 3
 * - Perspectives/Blog: 7
 * - Project Case Studies: 42
 * 
 * Note: Authentication pages, admin pages, and API endpoints are excluded.
 */

import { SitemapUrl } from '../utils/sitemap';

/**
 * Base URL for all sitemap entries
 */
export const BASE_URL = 'https://g2middleeast.com';

/**
 * Default lastmod date (site last major update)
 */
export const DEFAULT_LASTMOD = '2025-10-28';

/**
 * Core static pages (12)
 */
export const CORE_PAGES: SitemapUrl[] = [
  {
    loc: `${BASE_URL}/`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/services`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/team`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/group`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/contact`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/perspectives`,
    lastmod: DEFAULT_LASTMOD
  },
  // Note: /briefing is an alias for /perspectives - not included (use canonical)
  {
    loc: `${BASE_URL}/projects`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/terms-of-service`,
    lastmod: '2025-10-27' // Updated with Abu Dhabi jurisdiction
  },
  // Note: /terms is an alias for /terms-of-service - not included (use canonical)
  {
    loc: `${BASE_URL}/privacy-policy`,
    lastmod: DEFAULT_LASTMOD
  }
  // Note: /privacy is an alias for /privacy-policy - not included (use canonical)
];

/**
 * Service pages (9)
 */
export const SERVICE_PAGES: SitemapUrl[] = [
  {
    loc: `${BASE_URL}/services/sovereign-communications`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/services/strategic-event-architecture`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/services/crisis-reputation-management`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/services/luxury-brand-positioning`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/services/vip-protocol-experience-design`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/services/media-relations-public-affairs`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/services/content-strategy-production`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/services/digital-strategy-social-media`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/services/strategic-advisory`,
    lastmod: DEFAULT_LASTMOD
  }
];

/**
 * Team profile pages (3)
 */
export const TEAM_PAGES: SitemapUrl[] = [
  {
    loc: `${BASE_URL}/team/tim-jacobs`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/team/senior-leadership`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/team/operational-team`,
    lastmod: DEFAULT_LASTMOD
  }
];

/**
 * Perspectives/blog pages (7)
 */
export const PERSPECTIVE_PAGES: SitemapUrl[] = [
  {
    loc: `${BASE_URL}/perspectives/strategic-event-architecture-middle-east`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/perspectives/sovereign-communications-gcc`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/perspectives/luxury-hospitality-gcc`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/perspectives/crisis-management-mena`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/perspectives/digital-diplomacy`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/perspectives/nation-branding-strategies`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/perspectives/vip-protocol-best-practices`,
    lastmod: DEFAULT_LASTMOD
  }
];

/**
 * Project case study pages (42)
 * 
 * All projects attributed to G2 Middle East staff as per recent content updates.
 * These represent the core portfolio showcasing strategic advisory, event architecture,
 * and governmental affairs expertise across the Middle East and Africa.
 */
export const PROJECT_PAGES: SitemapUrl[] = [
  // Tier 1: State-Level Events
  {
    loc: `${BASE_URL}/projects/queen-elizabeth-ii-state-visit`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/papal-mass-2019`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/trump-middle-east-visit`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/prince-charles-india-tour`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/queen-birthday-party-2016`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/g7-genoa-summit`,
    lastmod: DEFAULT_LASTMOD
  },
  
  // Tier 2: VIP & Luxury Events
  {
    loc: `${BASE_URL}/projects/abu-dhabi-grand-prix-vip`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/wtc-site-tour-vip`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/baku-european-games`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/qatar-national-day`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/saudi-national-day`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/burj-al-arab-launch`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/emirates-palace-opening`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/atlantis-palm-opening`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/royal-wedding-coverage`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/davos-wef-delegation`,
    lastmod: DEFAULT_LASTMOD
  },
  
  // Tier 3: Major International Events
  {
    loc: `${BASE_URL}/projects/cop27-egypt`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/dubai-expo-2020`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/fifa-world-cup-qatar`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/formula-e-riyadh`,
    lastmod: DEFAULT_LASTMOD
  },
  
  // Tier 4: Cultural & Heritage Projects
  {
    loc: `${BASE_URL}/projects/dubai-opera-launch`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/louvre-abu-dhabi-opening`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/sheikh-zayed-grand-mosque-tour`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/qasr-al-watan-launch`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/royal-opera-house-muscat`,
    lastmod: DEFAULT_LASTMOD
  },
  
  // Tier 5: Strategic Advisory & Nation Branding
  {
    loc: `${BASE_URL}/projects/saudi-vision-2030-launch`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/neom-announcement`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/red-sea-project-launch`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/qiddiya-entertainment-city`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/diriyah-gate-development`,
    lastmod: DEFAULT_LASTMOD
  },
  
  // Tier 6: Destination Marketing & Tourism
  {
    loc: `${BASE_URL}/projects/oman-tourism-campaign`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/bahrain-tourism-strategy`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/kuwait-cultural-revival`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/sharjah-cultural-heritage`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/ras-al-khaimah-adventure`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/ajman-investment-forum`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/fujairah-heritage-festival`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/umm-al-quwain-marine-research`,
    lastmod: DEFAULT_LASTMOD
  },
  
  // Tier 7: Regional Governance & Diplomacy
  {
    loc: `${BASE_URL}/projects/gcc-summit-coverage`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/arab-league-meeting`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/gulf-cooperation-council-forum`,
    lastmod: DEFAULT_LASTMOD
  },
  {
    loc: `${BASE_URL}/projects/mena-economic-forum`,
    lastmod: DEFAULT_LASTMOD
  }
];

/**
 * Get all URLs for main sitemap
 */
export function getAllUrls(): SitemapUrl[] {
  return [
    ...CORE_PAGES,
    ...SERVICE_PAGES,
    ...TEAM_PAGES,
    ...PERSPECTIVE_PAGES,
    ...PROJECT_PAGES
  ];
}

/**
 * Get URL count by category
 */
export function getUrlStats() {
  return {
    core: CORE_PAGES.length,
    services: SERVICE_PAGES.length,
    team: TEAM_PAGES.length,
    perspectives: PERSPECTIVE_PAGES.length,
    projects: PROJECT_PAGES.length,
    total: getAllUrls().length
  };
}
