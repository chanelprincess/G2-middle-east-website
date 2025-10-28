/**
 * Sitemap Generation Utilities
 * 
 * Provides functions for generating XML sitemaps compliant with:
 * - Sitemap Protocol 0.9 (https://www.sitemaps.org/protocol.html)
 * - Google Search Central guidelines (2025)
 * - hreflang annotations for multilingual support
 * 
 * Key Standards:
 * - NO priority or changefreq tags (deprecated since 2019)
 * - ISO 8601 date format for lastmod
 * - UTF-8 encoding
 * - Absolute HTTPS URLs only
 * - 50,000 URL limit per sitemap
 * - 50MB size limit (uncompressed)
 */

/**
 * URL entry for sitemap
 */
export interface SitemapUrl {
  loc: string;                    // Absolute HTTPS URL
  lastmod?: string;                // ISO 8601 date (YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS+00:00)
  alternates?: HreflangAlternate[]; // Language alternates for multilingual
}

/**
 * hreflang alternate for multilingual support
 */
export interface HreflangAlternate {
  hreflang: string;  // Language code (en, ar, fr, it) or x-default
  href: string;      // Absolute URL for this language version
}

/**
 * Sitemap entry for sitemap index
 */
export interface SitemapIndexEntry {
  loc: string;       // Absolute URL to sitemap file
  lastmod?: string;  // ISO 8601 date of last sitemap update
}

/**
 * Escape special XML characters
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Format date to ISO 8601 (YYYY-MM-DD)
 */
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Format date to ISO 8601 with time (YYYY-MM-DDTHH:MM:SS+00:00)
 */
export function formatDateTime(date: Date): string {
  return date.toISOString();
}

/**
 * Generate single URL entry for sitemap
 */
function generateUrlEntry(url: SitemapUrl): string {
  const entries: string[] = [];
  
  entries.push('  <url>');
  entries.push(`    <loc>${escapeXml(url.loc)}</loc>`);
  
  if (url.lastmod) {
    entries.push(`    <lastmod>${url.lastmod}</lastmod>`);
  }
  
  // Add hreflang alternates if present (multilingual support)
  if (url.alternates && url.alternates.length > 0) {
    for (const alt of url.alternates) {
      entries.push(`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}" />`);
    }
  }
  
  entries.push('  </url>');
  
  return entries.join('\n');
}

/**
 * Generate complete XML sitemap
 * 
 * @param urls - Array of URL entries (max 50,000)
 * @param multilingual - Whether to include xhtml namespace for hreflang
 * @returns Complete XML sitemap string
 */
export function generateSitemap(urls: SitemapUrl[], multilingual: boolean = false): string {
  if (urls.length > 50000) {
    throw new Error(`Sitemap exceeds 50,000 URL limit (${urls.length} URLs provided)`);
  }
  
  const lines: string[] = [];
  
  // XML declaration
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  
  // Urlset with namespace (include xhtml for multilingual)
  if (multilingual) {
    lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
    lines.push('        xmlns:xhtml="http://www.w3.org/1999/xhtml">');
  } else {
    lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  }
  
  // Generate URL entries
  for (const url of urls) {
    lines.push(generateUrlEntry(url));
  }
  
  // Close urlset
  lines.push('</urlset>');
  
  return lines.join('\n');
}

/**
 * Generate sitemap index XML
 * 
 * @param sitemaps - Array of sitemap entries
 * @returns Complete sitemap index XML string
 */
export function generateSitemapIndex(sitemaps: SitemapIndexEntry[]): string {
  const lines: string[] = [];
  
  // XML declaration
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  
  // Sitemapindex with namespace
  lines.push('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  
  // Generate sitemap entries
  for (const sitemap of sitemaps) {
    lines.push('  <sitemap>');
    lines.push(`    <loc>${escapeXml(sitemap.loc)}</loc>`);
    
    if (sitemap.lastmod) {
      lines.push(`    <lastmod>${sitemap.lastmod}</lastmod>`);
    }
    
    lines.push('  </sitemap>');
  }
  
  // Close sitemapindex
  lines.push('</sitemapindex>');
  
  return lines.join('\n');
}

/**
 * Generate hreflang alternates for a URL across all languages
 * 
 * @param path - URL path without domain (e.g., "/services/sovereign-communications")
 * @param baseUrl - Base domain URL (e.g., "https://g2middleeast.com")
 * @param languages - Array of language codes (e.g., ["en", "ar", "fr", "it"])
 * @param defaultLang - Default language for x-default (typically "en")
 * @returns Array of hreflang alternates
 */
export function generateHreflangAlternates(
  path: string,
  baseUrl: string,
  languages: string[],
  defaultLang: string = 'en'
): HreflangAlternate[] {
  const alternates: HreflangAlternate[] = [];
  
  // Add all language versions
  for (const lang of languages) {
    alternates.push({
      hreflang: lang,
      href: `${baseUrl}/${lang}${path}`
    });
  }
  
  // Add x-default (fallback language)
  alternates.push({
    hreflang: 'x-default',
    href: `${baseUrl}/${defaultLang}${path}`
  });
  
  return alternates;
}

/**
 * Validate sitemap URL
 * 
 * @param url - URL string to validate
 * @returns True if valid, false otherwise
 */
export function isValidSitemapUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    
    // Must be HTTPS
    if (parsed.protocol !== 'https:') {
      return false;
    }
    
    // Must not contain query parameters that suggest non-canonical URLs
    const suspiciousParams = ['token=', 'session=', 'ref=', 'utm_'];
    for (const param of suspiciousParams) {
      if (url.includes(param)) {
        return false;
      }
    }
    
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate lastmod date format (ISO 8601)
 * 
 * @param dateString - Date string to validate
 * @returns True if valid ISO 8601, false otherwise
 */
export function isValidLastmod(dateString: string): boolean {
  // ISO 8601 formats:
  // YYYY-MM-DD
  // YYYY-MM-DDTHH:MM:SS+00:00
  const iso8601Regex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2})?$/;
  
  if (!iso8601Regex.test(dateString)) {
    return false;
  }
  
  // Validate that date is actually valid
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}

/**
 * Calculate estimated sitemap size in bytes
 * 
 * @param urls - Array of URL entries
 * @returns Estimated size in bytes
 */
export function estimateSitemapSize(urls: SitemapUrl[]): number {
  // Generate sample sitemap to get accurate size
  const sampleSitemap = generateSitemap(urls.slice(0, 100));
  const avgBytesPerUrl = sampleSitemap.length / Math.min(100, urls.length);
  
  // Add overhead for XML declaration and wrapper
  const overhead = 200;
  
  return Math.ceil((avgBytesPerUrl * urls.length) + overhead);
}

/**
 * Split URLs into multiple sitemaps if needed
 * 
 * @param urls - Array of URL entries
 * @param maxUrls - Maximum URLs per sitemap (default: 50,000)
 * @param maxBytes - Maximum bytes per sitemap (default: 50MB)
 * @returns Array of URL arrays (one per sitemap file)
 */
export function splitSitemap(
  urls: SitemapUrl[],
  maxUrls: number = 50000,
  maxBytes: number = 50 * 1024 * 1024
): SitemapUrl[][] {
  const result: SitemapUrl[][] = [];
  let currentBatch: SitemapUrl[] = [];
  let currentSize = 0;
  
  for (const url of urls) {
    // Estimate size of this URL entry
    const entrySize = JSON.stringify(url).length * 2; // Rough estimate
    
    // Check if we need to start a new batch
    if (
      currentBatch.length >= maxUrls ||
      (currentSize + entrySize) >= maxBytes
    ) {
      result.push(currentBatch);
      currentBatch = [];
      currentSize = 0;
    }
    
    currentBatch.push(url);
    currentSize += entrySize;
  }
  
  // Add final batch
  if (currentBatch.length > 0) {
    result.push(currentBatch);
  }
  
  return result;
}
