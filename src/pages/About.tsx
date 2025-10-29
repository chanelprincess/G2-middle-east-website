import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

export const AboutPage: FC = () => {
  // Organization Schema with comprehensive information
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "G2 Middle East & Africa",
    "alternateName": "G2 Middle East",
    "url": "https://g2middleeast.com",
    "logo": "https://g2middleeast.com/assets/logo-g2me.svg",
    "description": "Strategic counsel and world-class event management for governments, sovereign entities, and global brands across Middle East and Africa. Part of Casta Diva Group.",
    "foundingDate": "2017",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mazyad Offices 3 - Office 36 - Sultan Bin Mohammed Al, 75, Qubaisi St",
      "addressLocality": "Mohammed Bin Zayed City",
      "addressRegion": "Abu Dhabi",
      "addressCountry": "AE"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+971-02-654-4049",
        "contactType": "New Business & Strategic Enquiries",
        "email": "tim@g2middleeast.com",
        "areaServed": ["AE", "SA", "QA", "EG", "BH", "KW", "OM"],
        "availableLanguage": ["en", "ar"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/g2-middle-east",
      "https://www.castadivagroup.com"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Casta Diva Group",
      "url": "https://www.castadivagroup.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Middle East and Africa"
    },
    "knowsAbout": [
      "Government Event Management",
      "State Visit Coordination",
      "Diplomatic Protocol",
      "Strategic Communications",
      "Sovereign Advisory",
      "Major Event Architecture",
      "Crisis Management",
      "Brand Positioning"
    ]
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://g2middleeast.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://g2middleeast.com/about"
      }
    ]
  }

  return (
    <PageLayout>
      {/* Organization Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema)
      }} />

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema)
      }} />

      {/* Hero Section */}
      <section class="relative py-32 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 fade-in">
              About G2 Middle East
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed fade-in-delay-1">
              Strategic counsel and world-class event management for governments, sovereign entities, 
              and global brands across the Middle East and Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
              Who We Are
            </h2>
            <div class="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                G2 Middle East & Africa is the specialized division of <strong class="text-white">Casta Diva Group</strong> focused 
                on high-stakes strategic advisory, governmental affairs, and sovereign event architecture. We operate at the 
                intersection of policy, finance, and diplomacy.
              </p>
              <p>
                With over <strong class="text-g2-gold">50+ major government projects</strong> delivered across the UAE, Saudi Arabia, 
                Qatar, Egypt, and the wider Middle East and Africa, we bring unparalleled expertise in managing events of 
                national and international significance.
              </p>
              <p>
                Our team has coordinated some of the region's most significant moments—from the historic 
                <strong class="text-g2-gold"> Papal Mass in Abu Dhabi with 180,000 attendees</strong> to state visits by heads of 
                state, international summits, and major cultural celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-12">
              Our Expertise
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Expertise 1 */}
              <div class="bg-g2-dark p-8 rounded-lg border border-white/10">
                <div class="text-g2-gold text-3xl mb-4">
                  <i class="fas fa-landmark"></i>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                  Government & Sovereign Advisory
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  Strategic counsel for governments, royal families, and sovereign entities on major 
                  events, state visits, diplomatic protocol, and national celebrations.
                </p>
              </div>

              {/* Expertise 2 */}
              <div class="bg-g2-dark p-8 rounded-lg border border-white/10">
                <div class="text-g2-gold text-3xl mb-4">
                  <i class="fas fa-globe"></i>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                  Major Event Architecture
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  End-to-end conceptualization and execution of events with national and international 
                  importance, from world expos to international summits.
                </p>
              </div>

              {/* Expertise 3 */}
              <div class="bg-g2-dark p-8 rounded-lg border border-white/10">
                <div class="text-g2-gold text-3xl mb-4">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                  Crisis & Reputation Management
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  Rapid response strategies that protect reputation and maintain stakeholder confidence 
                  during high-stakes situations and sensitive moments.
                </p>
              </div>

              {/* Expertise 4 */}
              <div class="bg-g2-dark p-8 rounded-lg border border-white/10">
                <div class="text-g2-gold text-3xl mb-4">
                  <i class="fas fa-chess-king"></i>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                  Strategic Communications
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  High-impact communication strategies and narrative development for governments, 
                  corporations, and institutions seeking to shape global perception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Track Record Section */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              Proven Track Record
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {/* Metric 1 */}
              <div class="bg-g2-darker p-8 rounded-lg border border-g2-gold/20">
                <div class="text-5xl font-bold text-g2-gold mb-3">
                  50+
                </div>
                <div class="text-gray-300">
                  Major Government Projects
                </div>
              </div>

              {/* Metric 2 */}
              <div class="bg-g2-darker p-8 rounded-lg border border-g2-gold/20">
                <div class="text-5xl font-bold text-g2-gold mb-3">
                  180K
                </div>
                <div class="text-gray-300">
                  Largest Single Event (Papal Mass)
                </div>
              </div>

              {/* Metric 3 */}
              <div class="bg-g2-darker p-8 rounded-lg border border-g2-gold/20">
                <div class="text-5xl font-bold text-g2-gold mb-3">
                  20+
                </div>
                <div class="text-gray-300">
                  Years Combined Experience
                </div>
              </div>

              {/* Metric 4 */}
              <div class="bg-g2-darker p-8 rounded-lg border border-g2-gold/20">
                <div class="text-5xl font-bold text-g2-gold mb-3">
                  7
                </div>
                <div class="text-gray-300">
                  GCC Countries Served
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part of Casta Diva Group Section */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
              Part of Casta Diva Group
            </h2>
            <div class="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                As a specialized division of <strong class="text-white">Casta Diva Group</strong>, we leverage the resources 
                and capabilities of a global communications powerhouse with presence in 15 cities across four continents.
              </p>
              <p>
                This unique positioning allows us to combine <strong class="text-g2-gold">local Middle East expertise</strong> with 
                <strong class="text-g2-gold"> global execution capabilities</strong>—from creative content production to 
                large-scale event delivery.
              </p>
              <p>
                Our parent group serves over 100 of the world's top brands and has delivered thousands of successful 
                projects across live communication, branded content, and strategic advisory.
              </p>
            </div>
            
            <div class="mt-12">
              <a href="/group" class="inline-flex items-center px-8 py-4 bg-g2-gold text-g2-darker font-bold rounded hover:bg-white transition-colors">
                Explore the Group
                <i class="fas fa-arrow-right ml-3"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Ready to architect your strategic advantage?
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Let's discuss how G2 Middle East can help you navigate complexity and create lasting value.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="btn-primary text-lg">
                Start a Conversation
              </a>
              <a href="/projects" class="btn-secondary text-lg">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
