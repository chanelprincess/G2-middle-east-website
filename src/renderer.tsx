import { jsxRenderer } from 'hono/jsx-renderer'

interface RendererProps {
  children: any
  title?: string
  description?: string
  // Canonical and URL props
  canonicalUrl?: string
  // Open Graph props
  ogImage?: string
  ogImageAlt?: string
  ogType?: 'website' | 'article'
  // Twitter Card props
  twitterCard?: 'summary' | 'summary_large_image'
  twitterSite?: string
  twitterCreator?: string
  // Author and article props
  author?: string
  publishedTime?: string
  // Localization props
  locale?: string
  // Geographic targeting props
  geoRegion?: string
  geoPlacename?: string
  geoPosition?: string
  // Robots control
  robots?: string
}

export const renderer = jsxRenderer(({ 
  children, 
  title, 
  description,
  canonicalUrl,
  ogImage = 'https://g2middleeast.com/static/og-default.jpg',
  ogImageAlt = 'G2 Middle East - Government Event Management & Strategic Advisory in UAE and Middle East',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@G2MiddleEast',
  twitterCreator,
  author,
  publishedTime,
  locale = 'en_US',
  geoRegion = 'AE-DU',
  geoPlacename = 'Dubai',
  geoPosition = '25.2048;55.2708',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
}: RendererProps) => {
  
  // Optimized defaults for 2025 SEO
  const pageTitle = title || 'Government Event Management UAE | G2 Middle East | Strategic Advisory'
  const pageDescription = description || 'Leading government event management in Dubai & Middle East. 50+ major projects including state visits, diplomatic protocol, Papal Mass Abu Dhabi (180,000 attendees). Expert strategic advisory for sovereign entities. 24-hour response.'
  
  // Canonical URL - critical for SEO
  const currentUrl = canonicalUrl || 'https://g2middleeast.com'
  
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* ========================================
            PRIMARY SEO META TAGS
        ======================================== */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content={robots} />
        
        {/* Author (for blog posts/articles) */}
        {author && <meta name="author" content={author} />}
        
        {/* ========================================
            CANONICAL TAG (CRITICAL FOR SEO)
        ======================================== */}
        <link rel="canonical" href={currentUrl} />
        
        {/* ========================================
            OPEN GRAPH / FACEBOOK META TAGS
        ======================================== */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="G2 Middle East" />
        <meta property="og:locale" content={locale} />
        <meta property="og:locale:alternate" content="ar_AE" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="it_IT" />
        
        {/* Open Graph Images */}
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:image:type" content="image/jpeg" />
        
        {/* Article-specific OG tags */}
        {ogType === 'article' && author && (
          <>
            <meta property="article:author" content={author} />
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            <meta property="article:section" content="Strategic Insights" />
          </>
        )}
        
        {/* ========================================
            TWITTER CARD META TAGS
        ======================================== */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:site" content={twitterSite} />
        {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={ogImageAlt} />
        
        {/* ========================================
            HREFLANG TAGS (Multilingual Support)
        ======================================== */}
        <link rel="alternate" hreflang="en" href={currentUrl} />
        <link rel="alternate" hreflang="ar" href={currentUrl.replace('g2middleeast.com', 'g2middleeast.com/ar')} />
        <link rel="alternate" hreflang="fr" href={currentUrl.replace('g2middleeast.com', 'g2middleeast.com/fr')} />
        <link rel="alternate" hreflang="it" href={currentUrl.replace('g2middleeast.com', 'g2middleeast.com/it')} />
        <link rel="alternate" hreflang="x-default" href={currentUrl} />
        
        {/* ========================================
            GEOGRAPHIC TARGETING META TAGS
        ======================================== */}
        <meta name="geo.region" content={geoRegion} />
        <meta name="geo.placename" content={geoPlacename} />
        <meta name="geo.position" content={geoPosition} />
        <meta name="ICBM" content={geoPosition.replace(';', ', ')} />
        
        {/* ========================================
            MOBILE / PWA META TAGS
        ======================================== */}
        <meta name="theme-color" content="#0F0F0F" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="G2 Middle East" />
        
        {/* ========================================
            FONTS & ICONS
        ======================================== */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* ========================================
            TAILWIND CSS
        ======================================== */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* ========================================
            CUSTOM STYLES
        ======================================== */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* ========================================
            TAILWIND CONFIG
        ======================================== */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'g2-dark': '#1A1A1A',
                    'g2-darker': '#0F0F0F',
                    'g2-gold': '#B89A6A',
                    'g2-light': '#F5F5F5',
                    'g2-white': '#FFFFFF'
                  },
                  fontFamily: {
                    'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
                    'serif': ['Playfair Display', 'Georgia', 'Garamond', 'serif']
                  },
                  letterSpacing: {
                    'wider': '0.05em',
                    'widest': '0.1em',
                    'ultra': '0.15em'
                  }
                }
              }
            }
          `
        }} />
        
        {/* ========================================
            GOOGLE FONTS
        ======================================== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-g2-darker text-white antialiased">
        {children}
      </body>
    </html>
  )
})
