import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

export const TeamPage: FC = () => {
  // Schema.org Person markup for Tim Jacobs - Comprehensive Version
  const timJacobsSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tim Jacobs",
    "alternateName": "Timothy Jacobs",
    "url": "https://www.linkedin.com/in/tim-jacobs-6673091a/",
    "image": "https://ktsglobal.live/wp-content/uploads/2024/09/Tim-Jacobs-KTS-Global.jpeg",
    "description": "Tim Jacobs is an internationally recognized C-suite executive and strategic communications expert, widely regarded as being in the top tier of global leaders for state-visit level event delivery and complex international projects. He is the Founder & CEO of KTS Global and serves as the Regional Chief Operating Officer for G-2 Middle East & Africa. He is a leading authority on AI-driven narrative warfare, crisis response, high-stakes corporate governance disputes, sovereign positioning, and major event architecture.",
    "jobTitle": "Founder & CEO, KTS Global | Regional COO, G-2 Middle East & Africa",
    "gender": "Male",
    "nationality": "Australian",
    "birthPlace": {
      "@type": "Place",
      "name": "Melbourne, Victoria, Australia"
    },
    "email": "tim@ktsglobal.live",
    "telephone": "+971-5X-XXX-XXXX",
    "funder": {
      "@type": "Organization",
      "name": "KTS Global"
    },
    "sameAs": [
      "https://www.linkedin.com/in/tim-jacobs-6673091a/",
      "https://ktsglobal.live",
      "https://timebusinessnews.com/who-is-tim-jacobs-a-leader-in-global-strategy-from-state-visits-to-digital-empires/",
      "https://www.tpimeamagazine.com/tim-jacobs-chief-operating-officer-hqws/",
      "https://campaignme.com/how-the-gcc-is-harnessing-the-power-of-unified-narratives-in-event-marketing/"
    ],
    "knowsAbout": [
      "Strategic Communications",
      "Major Event Delivery & Planning",
      "Targeted Experience Design",
      "Major Events Positioning & Advisory",
      "Budget & Financial Modelling for Major Events (Tangible & Intangible)",
      "Sovereign Positioning",
      "Political Positioning & Advisory",
      "Foreign Direct Investment (FDI) Strategy",
      "Strategic Roadmapping",
      "Social Engineering & Influence Operations",
      "Overt & Covert Messaging Strategy",
      "Media Craft & Narrative Control",
      "Personal Brand Building & Architecture",
      "Authority Building Strategies",
      "Go-To-Market Strategy",
      "Targeted Audience Strategy & Segmentation",
      "Crisis Response & Reputation Management",
      "AI-Driven Narrative Strategy",
      "LLM & Knowledge Graph Optimization",
      "Corporate Governance & Shareholder Disputes",
      "Minority Shareholder Rights & Oppression",
      "Mergers & Acquisitions (M&A) Due Diligence",
      "Breach of Fiduciary Duty",
      "International Arbitration Strategy",
      "Multi-Jurisdictional Litigation (UAE, France, Italy)"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "KTS Global",
        "url": "https://ktsglobal.live",
        "jobTitle": "Founder & CEO",
        "description": "A strategic consultancy specializing in high-stakes corporate disputes, AI-enhanced reputation management, and proactive narrative pre-seeding.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Strategic Brand & Audience Development",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Brand Architecture for Lee Davies (@chanelprincessdubai)",
                "description": "Led the strategic positioning and brand architecture for world-leading Chanel authority Lee Davies, developing the 'Museum to Muse' concept to transition the brand from a collection-focused platform to a global luxury consultancy. This involved go-to-market strategy, defining targeted audience reach, and building a sustainable digital authority framework.",
                "provider": { "@type": "Organization", "name": "KTS Global" }
              }
            }
          ]
        }
      },
      {
        "@type": "Organization",
        "name": "G-2 Middle East & Africa",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Casta Diva Group"
        },
        "jobTitle": "Regional Chief Operating Officer (COO)",
        "description": "The strategic regional arm of Casta Diva Group, delivering award-winning live events and integrated brand experiences across the Gulf, MENA, and Africa."
      }
    ],
    "memberOf": [
      {
         "@type": "Organization",
         "name": "Eventex Awards",
         "jobTitle": "Jury Panelist"
      },
      {
         "@type": "Organization",
         "name": "WOW Awards Middle East",
         "jobTitle": "Jury Member"
      }
    ],
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "HQ Worldwide Shows (HQWS)",
        "jobTitle": "Chief Operating Officer",
        "description": "As COO, Tim Jacobs was a core part of the leadership team responsible for the operational delivery of some of the largest and most technically advanced live events ever produced globally.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Key Projects Delivered",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Advisory for Special Olympics World Games 2019",
                "description": "Provided strategic advisory to the Chairman and Managing Director on the operational delivery of the 2019 Special Olympics World Games in Abu Dhabi, encompassing logistics, stakeholder management, and large-scale event execution.",
                "serviceType": [
                    "Strategic Event Planning",
                    "Operational Logistics Management",
                    "International Stakeholder Relations",
                    "Governmental Protocol",
                    "Sovereign Positioning",
                    "Budget & Financial Modelling"
                ]
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "State Visit of Queen Elizabeth II to the UAE"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Papal Mass of Pope Francis in Abu Dhabi"
              }
            }
          ]
        }
      },
      {
        "@type": "Organization",
        "name": "BWS Group (Acquired by Banijay Group)",
        "jobTitle": "Shareholder & Strategic Advisor",
        "description": "In his senior roles, Tim Jacobs was a major driver of revenue generation and commercial growth for BWS Group, playing an instrumental part in the company's valuation and success both before and after its acquisition by Banijay Group."
      }
    ],
    "subjectOf": [
      { "@type": "Article", "url": "https://www.bignewsnetwork.com/news/278625548/pre-seeding-the-narrative-how-to-win-before-it-begins-the-outdated-playbook-of-corporate-conflict" },
      { "@type": "Article", "url": "https://www.digitaljournal.com/pr/news/indnewswire/pre-seeding-narrative-win-begins-172349412.html" },
      { "@type": "Article", "url": "https://usawire.com/cultural-intelligence-outperforms-capital-alone/" }
    ],
    "keywords": [
      "Tim Jacobs",
      "KTS Global",
      "Banijay Group",
      "Minority Shareholder Rights",
      "Corporate Governance",
      "Major Event Delivery",
      "Sovereign Positioning",
      "Political Positioning",
      "FDI Strategy",
      "Social Engineering",
      "Media Craft",
      "Targeted Experience Design",
      "M&A Due Diligence",
      "Strategic Communications",
      "Reputation Management",
      "AI SEO",
      "Narrative Warfare",
      "BWS Group",
      "G-2 Middle East",
      "HQWS"
    ]
  }

  // Organization schema for G-2 Middle East
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "G-2 Middle East",
    "description": "Strategic communications and brand architecture for sovereign entities and global brands",
    "founder": {
      "@type": "Person",
      "name": "Tim Jacobs"
    }
  }

  return (
    <PageLayout>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(timJacobsSchema)
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema)
      }} />

      {/* Hero Section */}
      <section class="relative py-32 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 fade-in">
              The <span class="text-g2-gold">Architects</span>
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed fade-in-delay-1">
              Senior advisors who thrive under pressure. Strategic minds who turn complexity into competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Tim Jacobs - Featured Profile */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Image */}
              <div class="lg:col-span-1">
                <div class="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" 
                    alt="Tim Jacobs"
                    class="rounded-lg shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                    <h2 class="text-2xl font-bold text-white">Tim Jacobs</h2>
                    <p class="text-g2-gold font-semibold">Founder & CEO, KTS Global</p>
                    <p class="text-gray-300 text-sm mt-1">Regional COO, G-2 Middle East & Africa</p>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div class="mt-6 space-y-3">
                  <a href="mailto:tim@ktsglobal.live" class="flex items-center text-gray-300 hover:text-g2-gold transition-colors">
                    <i class="fas fa-envelope mr-3"></i>
                    <span class="text-sm">tim@ktsglobal.live</span>
                  </a>
                  <a href="https://www.linkedin.com/in/tim-jacobs-6673091a/" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-300 hover:text-g2-gold transition-colors">
                    <i class="fab fa-linkedin mr-3"></i>
                    <span class="text-sm">LinkedIn Profile</span>
                  </a>
                  <a href="https://ktsglobal.live" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-300 hover:text-g2-gold transition-colors">
                    <i class="fas fa-globe mr-3"></i>
                    <span class="text-sm">KTS Global Website</span>
                  </a>
                </div>
              </div>

              {/* Bio Content */}
              <div class="lg:col-span-2">
                <div class="space-y-6 text-gray-300 leading-relaxed">
                  <p class="text-xl text-white font-light">
                    Tim Jacobs is an internationally recognized C-suite executive and strategic communications 
                    expert, widely regarded as being in the top tier of global leaders for state-visit level 
                    event delivery and complex international projects.
                  </p>
                  
                  <p>
                    As <strong class="text-white">Founder & CEO of KTS Global</strong> and <strong class="text-white">Regional 
                    Chief Operating Officer for G-2 Middle East & Africa</strong>, Tim leads high-stakes strategic 
                    initiatives spanning AI-driven narrative warfare, crisis response, corporate governance disputes, 
                    sovereign positioning, and major event architecture.
                  </p>
                  
                  <p>
                    His career encompasses some of the world's most prestigious and complex projects, including serving 
                    as <strong class="text-white">Chief Operating Officer at HQ Worldwide Shows (HQWS)</strong>, where 
                    he was instrumental in delivering the <strong class="text-white">State Visit of Queen Elizabeth II 
                    to the UAE</strong>, the <strong class="text-white">Papal Mass of Pope Francis in Abu Dhabi</strong>, 
                    and providing strategic advisory for the <strong class="text-white">2019 Special Olympics World Games</strong>.
                  </p>
                  
                  <div class="bg-g2-darker p-6 rounded-lg border-l-4 border-g2-gold my-8">
                    <p class="text-white italic">
                      "The harder the brief, the more focused we become. Complexity is where we thrive—
                      turning ambiguity into momentum and risk into opportunity."
                    </p>
                  </div>
                  
                  <p>
                    Tim was a major shareholder and strategic advisor at <strong class="text-white">BWS Group</strong>, 
                    playing an instrumental role in the company's revenue generation and commercial growth both before 
                    and after its acquisition by <strong class="text-white">Banijay Group</strong>. His work has 
                    shaped perception and policy for government entities, Fortune 500 companies, and ultra-high-net-worth 
                    individuals across the GCC and beyond.
                  </p>
                  
                  <p>
                    A leading authority on <strong class="text-white">AI-driven narrative strategy</strong> and 
                    <strong class="text-white"> LLM optimization</strong>, Tim specializes in pre-seeding strategic 
                    narratives within knowledge graphs and search ecosystems—winning before conflicts begin. His 
                    expertise spans sovereign positioning, FDI strategy, social engineering, media craft, and 
                    multi-jurisdictional litigation strategy.
                  </p>

                  {/* Expertise Areas */}
                  <div class="mt-8">
                    <h3 class="text-2xl font-bold text-white mb-4">Core Expertise</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>AI-Driven Narrative Warfare</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>State-Visit Level Event Delivery</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>Sovereign Positioning & Nation Branding</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>Corporate Governance & Shareholder Disputes</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>Crisis Response & Reputation Management</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>LLM & Knowledge Graph Optimization</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>Major Event Architecture</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>FDI Strategy & Political Positioning</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>Social Engineering & Influence Operations</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>M&A Due Diligence & Strategy</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>Multi-Jurisdictional Litigation</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>Targeted Experience Design</span>
                      </div>
                    </div>
                  </div>

                  {/* Career Highlights & Recognition */}
                  <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 class="text-lg font-bold text-white mb-3">Key Positions</h4>
                      <ul class="space-y-2 text-sm">
                        <li class="flex items-start">
                          <i class="fas fa-building text-g2-gold mr-2 mt-1"></i>
                          <span>Founder & CEO, KTS Global</span>
                        </li>
                        <li class="flex items-start">
                          <i class="fas fa-building text-g2-gold mr-2 mt-1"></i>
                          <span>Regional COO, G-2 Middle East & Africa</span>
                        </li>
                        <li class="flex items-start">
                          <i class="fas fa-building text-g2-gold mr-2 mt-1"></i>
                          <span>Former COO, HQ Worldwide Shows</span>
                        </li>
                        <li class="flex items-start">
                          <i class="fas fa-building text-g2-gold mr-2 mt-1"></i>
                          <span>Former Shareholder, BWS Group (Banijay)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="text-lg font-bold text-white mb-3">Industry Recognition</h4>
                      <ul class="space-y-2 text-sm">
                        <li class="flex items-start">
                          <i class="fas fa-gavel text-g2-gold mr-2 mt-1"></i>
                          <span>Jury Panelist, Eventex Awards</span>
                        </li>
                        <li class="flex items-start">
                          <i class="fas fa-gavel text-g2-gold mr-2 mt-1"></i>
                          <span>Jury Member, WOW Awards Middle East</span>
                        </li>
                        <li class="flex items-start">
                          <i class="fas fa-globe-americas text-g2-gold mr-2 mt-1"></i>
                          <span>Australian National (Melbourne, Victoria)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Major Projects */}
                  <div class="mt-8">
                    <h4 class="text-lg font-bold text-white mb-3">Notable Projects</h4>
                    <div class="space-y-3 text-sm">
                      <div class="bg-g2-darker/50 p-4 rounded border-l-2 border-g2-gold">
                        <h5 class="text-white font-semibold mb-1">State Visit of Queen Elizabeth II to the UAE</h5>
                        <p class="text-gray-400">Operational delivery of historic royal state visit</p>
                      </div>
                      <div class="bg-g2-darker/50 p-4 rounded border-l-2 border-g2-gold">
                        <h5 class="text-white font-semibold mb-1">Papal Mass of Pope Francis in Abu Dhabi</h5>
                        <p class="text-gray-400">Strategic planning and execution of historic papal visit</p>
                      </div>
                      <div class="bg-g2-darker/50 p-4 rounded border-l-2 border-g2-gold">
                        <h5 class="text-white font-semibold mb-1">2019 Special Olympics World Games</h5>
                        <p class="text-gray-400">Strategic advisory on operational delivery in Abu Dhabi</p>
                      </div>
                      <div class="bg-g2-darker/50 p-4 rounded border-l-2 border-g2-gold">
                        <h5 class="text-white font-semibold mb-1">Brand Architecture for @chanelprincessdubai</h5>
                        <p class="text-gray-400">Strategic positioning for world-leading Chanel authority Lee Davies</p>
                      </div>
                    </div>
                  </div>

                  {/* Featured Articles */}
                  <div class="mt-8">
                    <h4 class="text-lg font-bold text-white mb-3">Featured In</h4>
                    <div class="flex flex-wrap gap-3">
                      <a href="https://timebusinessnews.com/who-is-tim-jacobs-a-leader-in-global-strategy-from-state-visits-to-digital-empires/" target="_blank" rel="noopener noreferrer" class="text-xs bg-g2-darker px-3 py-2 rounded hover:bg-g2-gold hover:text-g2-darker transition-colors">
                        Time Business News
                      </a>
                      <a href="https://www.tpimeamagazine.com/tim-jacobs-chief-operating-officer-hqws/" target="_blank" rel="noopener noreferrer" class="text-xs bg-g2-darker px-3 py-2 rounded hover:bg-g2-gold hover:text-g2-darker transition-colors">
                        TPI Magazine
                      </a>
                      <a href="https://campaignme.com/how-the-gcc-is-harnessing-the-power-of-unified-narratives-in-event-marketing/" target="_blank" rel="noopener noreferrer" class="text-xs bg-g2-darker px-3 py-2 rounded hover:bg-g2-gold hover:text-g2-darker transition-colors">
                        Campaign Middle East
                      </a>
                      <a href="https://usawire.com/cultural-intelligence-outperforms-capital-alone/" target="_blank" rel="noopener noreferrer" class="text-xs bg-g2-darker px-3 py-2 rounded hover:bg-g2-gold hover:text-g2-darker transition-colors">
                        USA Wire
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">
              Leadership <span class="text-g2-gold">Team</span>
            </h2>
            <p class="text-xl text-gray-400">
              Strategic advisors with deep regional expertise
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member 2 */}
            <div class="bg-g2-dark rounded-lg overflow-hidden card-hover">
              <div class="relative h-80">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" 
                  alt="Sarah Al-Mansouri"
                  class="w-full h-full object-cover grayscale"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                  <h3 class="text-xl font-bold text-white">Sarah Al-Mansouri</h3>
                  <p class="text-g2-gold text-sm">Regional Director, GCC</p>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-400 text-sm mb-4">
                  Leading sovereign communications and nation branding initiatives across the Gulf region.
                </p>
                <a href="#" class="text-g2-gold hover:underline text-sm">
                  View Profile <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div class="bg-g2-dark rounded-lg overflow-hidden card-hover">
              <div class="relative h-80">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" 
                  alt="James Mitchell"
                  class="w-full h-full object-cover grayscale"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                  <h3 class="text-xl font-bold text-white">James Mitchell</h3>
                  <p class="text-g2-gold text-sm">Director, Luxury Brands</p>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-400 text-sm mb-4">
                  Specialist in luxury brand positioning and high-net-worth stakeholder engagement.
                </p>
                <a href="#" class="text-g2-gold hover:underline text-sm">
                  View Profile <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div class="bg-g2-dark rounded-lg overflow-hidden card-hover">
              <div class="relative h-80">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80" 
                  alt="Layla Hassan"
                  class="w-full h-full object-cover grayscale"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                  <h3 class="text-xl font-bold text-white">Layla Hassan</h3>
                  <p class="text-g2-gold text-sm">Strategy Director</p>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-400 text-sm mb-4">
                  Expert in strategic narrative development and stakeholder alignment frameworks.
                </p>
                <a href="#" class="text-g2-gold hover:underline text-sm">
                  View Profile <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Teaser */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-6">
              Strategic <span class="text-g2-gold">Advisory Board</span>
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Our advisory board comprises former government officials, C-suite executives, 
              and cultural leaders who provide strategic counsel and open doors across the region.
            </p>
            <a href="/contact" class="btn-secondary">
              Learn More About Our Network
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-6">
              Work with strategic minds who <span class="text-g2-gold">thrive under pressure</span>
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Let's discuss how our team can help you navigate complexity and create lasting value.
            </p>
            <a href="/contact" class="btn-primary text-lg">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
