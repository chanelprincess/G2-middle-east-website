import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'
import { projectsData } from './ProjectDetail'

export const ProjectsPage: FC = () => {
  // Convert projectsData object to array for rendering
  const projects = Object.values(projectsData)

  // Get unique categories for filtering
  const categories = ['All', ...new Set(projects.map(p => p.category))]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section class="relative py-32 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6 fade-in">
              Proof of Legacy: Landmark Events & Achievements
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed fade-in-delay-1">
              Each project begins with <span class="text-g2-gold">Strategy</span>—defining the narrative that shapes global perception. 
              This creates powerful <span class="text-g2-gold">Positioning</span> for our partners. The result is enduring <span class="text-g2-gold">Legacy</span>, 
              delivered through flawless event management and world-class execution that becomes historic milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section class="py-12 bg-g2-dark border-b border-white/10">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="flex flex-wrap gap-3 justify-center" id="project-filters">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  data-filter={category}
                  class={`px-6 py-2 rounded transition-all ${
                    category === 'All' 
                      ? 'bg-g2-gold text-g2-darker font-semibold' 
                      : 'bg-g2-darker text-gray-300 hover:bg-g2-gold hover:text-g2-darker'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
              {projects.map((project, index) => (
                <a 
                  key={index}
                  href={`/projects/${project.slug}`}
                  data-category={project.category}
                  class="project-card group relative bg-g2-dark rounded-lg overflow-hidden card-hover"
                >
                  <div class="relative h-64 overflow-hidden">
                    <img 
                      src={project.heroImage}
                      alt={project.title}
                      width="800" height="600" loading="lazy"
                      class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-g2-darker via-g2-darker/60 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                      <div class="flex items-center space-x-3 mb-3">
                        <span class="text-xs px-3 py-1 bg-g2-gold/20 text-g2-gold rounded">
                          {project.category}
                        </span>
                        <span class="text-xs text-gray-400">{project.year}</span>
                      </div>
                      <h3 class="text-xl font-bold text-white mb-2 group-hover:text-g2-gold transition-colors">
                        {project.title}
                      </h3>
                      <p class="text-sm text-gray-400 line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <div class="p-6">
                    <p class="text-gray-400 text-sm line-clamp-3 mb-4">
                      {project.engagingParagraph.replace(/<[^>]*>/g, '').substring(0, 200)}...
                    </p>
                    <div class="flex items-center text-g2-gold text-sm font-semibold group-hover:underline">
                      View Case Study
                      <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-6">
              Ready to create your own success story?
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Let's discuss how G2 Middle East can help you achieve strategic impact through sophisticated execution.
            </p>
            <a href="/contact" class="btn-primary text-lg">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Attribution - Footer */}
      <section class="py-12 bg-g2-dark border-t border-white/10">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <div class="bg-g2-darker border border-g2-gold/20 rounded-lg p-8">
              <h3 class="text-xl font-bold text-g2-gold mb-4 flex items-center">
                <i class="fas fa-info-circle mr-3"></i>
                Portfolio Attribution
              </h3>
              <div class="text-gray-300 leading-relaxed space-y-3">
                <p>
                  The projects featured in this portfolio were delivered by the professional team that now operates as <strong class="text-white">G2 Middle East & Africa</strong>, a division of Casta Diva Group.
                </p>
                <p>
                  These case studies represent work executed by our senior leadership and operational staff during their tenure at predecessor organizations, including roles at HQWS and KTS Global. The strategic expertise, operational methodologies, and client relationships developed through these engagements form the foundation of G2 Middle East's current capabilities.
                </p>
                <p>
                  <strong class="text-white">Tim Jacobs</strong>, now Regional Chief Operating Officer of G2 Middle East & Africa, served as Project Director or Lead Consultant on the majority of featured projects. The institutional knowledge, proven delivery frameworks, and stakeholder networks established through this body of work directly inform our client service today.
                </p>
                <p class="text-sm text-gray-400 pt-3 border-t border-white/10">
                  All projects are presented in accordance with professional standards and with respect for client confidentiality. This portfolio demonstrates our team's track record and does not imply current institutional affiliations with predecessor entities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JavaScript for filtering */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('#project-filters button');
            const projectCards = document.querySelectorAll('.project-card');
            
            filterButtons.forEach(button => {
              button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => {
                  btn.classList.remove('bg-g2-gold', 'text-g2-darker', 'font-semibold');
                  btn.classList.add('bg-g2-darker', 'text-gray-300');
                });
                this.classList.remove('bg-g2-darker', 'text-gray-300');
                this.classList.add('bg-g2-gold', 'text-g2-darker', 'font-semibold');
                
                // Filter projects
                projectCards.forEach(card => {
                  const category = card.getAttribute('data-category');
                  if (filter === 'All' || category === filter) {
                    card.style.display = 'block';
                  } else {
                    card.style.display = 'none';
                  }
                });
              });
            });
          });
        `
      }} />

      {/* Schema.org Structured Data - Enhanced Projects Portfolio */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          // Organization providing the services
          {
            "@type": "Organization",
            "@id": "https://g2middleeast.com/#organization",
            "name": "G2 Middle East & Africa",
            "url": "https://g2middleeast.com",
            "logo": "https://g2middleeast.com/assets/logo-g2me.svg",
            "description": "Strategic counsel and event management for governments, sovereign entities, and global brands",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mazyad Offices 3 - Office 36",
              "addressLocality": "Mohammed Bin Zayed City",
              "addressRegion": "Abu Dhabi",
              "addressCountry": "AE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971-02-654-4049",
              "email": "tim@g2middleeast.com",
              "contactType": "New Business & Strategic Enquiries"
            }
          },
          // CollectionPage
          {
            "@type": "CollectionPage",
            "@id": "https://g2middleeast.com/projects#webpage",
            "url": "https://g2middleeast.com/projects",
            "name": "Projects Portfolio - G2 Middle East",
            "description": "Case studies in strategic impact and flawless execution: 50+ government events, state visits, international summits, and luxury brand experiences delivered by G2 Middle East across the GCC and MENA region",
            "isPartOf": {"@id": "https://g2middleeast.com/#website"},
            "about": {"@id": "https://g2middleeast.com/#organization"},
            "inLanguage": "en",
            "keywords": "government events, state visits, diplomatic protocol, event management, UAE, Middle East, Abu Dhabi, strategic advisory"
          },
          // ItemList with comprehensive event details
          {
            "@type": "ItemList",
            "@id": "https://g2middleeast.com/projects#itemlist",
            "name": "G2 Middle East Project Portfolio",
            "description": "Complete portfolio of 42+ government events, state visits, international summits, and strategic advisory projects delivered across Middle East and Africa",
            "numberOfItems": 42,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Event",
                  "@id": "https://g2middleeast.com/projects/papal-mass-abu-dhabi",
                  "name": "Papal Mass Abu Dhabi 2019",
                  "url": "https://g2middleeast.com/projects/papal-mass-abu-dhabi",
                  "description": "Historic Papal Mass with 180,000 attendees - first papal visit to Arabian Peninsula. Largest Catholic gathering in Middle East history.",
                  "startDate": "2019-02-05",
                  "endDate": "2019-02-05",
                  "location": {
                    "@type": "Place",
                    "name": "Zayed Sports City",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Abu Dhabi",
                      "addressCountry": "AE"
                    }
                  },
                  "organizer": {"@id": "https://g2middleeast.com/#organization"},
                  "attendanceMode": "OfflineEventAttendanceMode",
                  "eventStatus": "EventScheduled",
                  "maximumAttendeeCapacity": 180000
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Event",
                  "@id": "https://g2middleeast.com/projects/queen-elizabeth-ii-state-visit",
                  "name": "State Visit of H.M. Queen Elizabeth II to UAE",
                  "url": "https://g2middleeast.com/projects/queen-elizabeth-ii-state-visit",
                  "description": "Royal state visit coordination with diplomatic protocol and ceremonial planning. Historic strengthening of UK-UAE diplomatic relations.",
                  "startDate": "2010-11-24",
                  "endDate": "2010-11-27",
                  "location": {
                    "@type": "Place",
                    "name": "Abu Dhabi and Dubai",
                    "address": {
                      "@type": "PostalAddress",
                      "addressCountry": "AE"
                    }
                  },
                  "organizer": {"@id": "https://g2middleeast.com/#organization"},
                  "attendanceMode": "OfflineEventAttendanceMode",
                  "eventStatus": "EventScheduled"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Event",
                  "@id": "https://g2middleeast.com/projects/cop27-egypt",
                  "name": "COP27 Egypt Strategic Communications",
                  "url": "https://g2middleeast.com/projects/cop27-egypt",
                  "description": "Strategic communications and government advisory for UN Climate Change Conference with 40,000+ participants",
                  "startDate": "2022-11-06",
                  "endDate": "2022-11-18",
                  "location": {
                    "@type": "Place",
                    "name": "Sharm El-Sheikh",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Sharm El-Sheikh",
                      "addressCountry": "EG"
                    }
                  },
                  "organizer": {"@id": "https://g2middleeast.com/#organization"},
                  "attendanceMode": "OfflineEventAttendanceMode",
                  "eventStatus": "EventScheduled"
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Event",
                  "@id": "https://g2middleeast.com/projects/dubai-expo-2020",
                  "name": "Expo 2020 Dubai VIP Coordination",
                  "url": "https://g2middleeast.com/projects/dubai-expo-2020",
                  "description": "VIP program coordination and government relations for world expo with 24+ million visitors",
                  "startDate": "2021-10-01",
                  "endDate": "2022-03-31",
                  "location": {
                    "@type": "Place",
                    "name": "Dubai",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Dubai",
                      "addressCountry": "AE"
                    }
                  },
                  "organizer": {"@id": "https://g2middleeast.com/#organization"},
                  "attendanceMode": "OfflineEventAttendanceMode",
                  "eventStatus": "EventScheduled"
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Event",
                  "@id": "https://g2middleeast.com/projects/fifa-world-cup-qatar",
                  "name": "FIFA World Cup Qatar 2022 Government Relations",
                  "url": "https://g2middleeast.com/projects/fifa-world-cup-qatar",
                  "description": "Government relations advisory for FIFA World Cup hosting - first World Cup in Middle East",
                  "startDate": "2022-11-20",
                  "endDate": "2022-12-18",
                  "location": {
                    "@type": "Place",
                    "name": "Qatar",
                    "address": {
                      "@type": "PostalAddress",
                      "addressCountry": "QA"
                    }
                  },
                  "organizer": {"@id": "https://g2middleeast.com/#organization"},
                  "attendanceMode": "OfflineEventAttendanceMode",
                  "eventStatus": "EventScheduled"
                }
              }
            ]
          },
          // BreadcrumbList
          {
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
                "name": "Projects",
                "item": "https://g2middleeast.com/projects"
              }
            ]
          }
        ]
      })}}></script>
    </PageLayout>
  )
}
