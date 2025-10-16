import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description }) => {
  const pageTitle = title || 'G2 Middle East | Architecture of Intangible Value'
  const pageDescription = description || 'Strategic partners for sovereign entities and global brands. We architect intangible value through sophisticated communication and experience design.'
  
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="strategic communications, sovereign branding, luxury positioning, intangible value, Middle East strategy" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:site_name" content="G2 Middle East" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Fonts & Icons */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Custom Styles */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Tailwind Config */}
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
        
        {/* Google Fonts - Playfair Display & Inter */}
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
