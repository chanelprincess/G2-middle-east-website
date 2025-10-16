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
    "image": "https://page.gensparksite.com/v1/base64_upload/47f1fb52041f3aa63094cf290ce9f36b",
    "description": "Tim Jacobs is an internationally recognized C-suite executive and strategic communications expert, widely regarded as being in the top tier of global leaders for state-visit level event delivery and complex international projects. As Regional Chief Operating Officer for G2 Middle East & Africa, he leads high-stakes strategic initiatives spanning AI-driven narrative strategy, crisis response, corporate governance disputes, sovereign positioning, and major event architecture.",
    "jobTitle": "Regional COO, G2 Middle East & Africa",
    "gender": "Male",
    "nationality": "Australian",
    "birthPlace": {
      "@type": "Place",
      "name": "Melbourne, Victoria, Australia"
    },
    "email": "tim@g2middleeast.com",
    "sameAs": [
      "https://www.linkedin.com/in/tim-jacobs-6673091a/",
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
    "worksFor": {
      "@type": "Organization",
      "name": "G2 Middle East & Africa",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Casta Diva Group"
      },
      "jobTitle": "Regional Chief Operating Officer (COO)",
      "description": "The strategic regional arm of Casta Diva Group, delivering award-winning live events and integrated brand experiences across the Gulf, MENA, and Africa."
    },
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

    "subjectOf": [
      { "@type": "Article", "url": "https://www.bignewsnetwork.com/news/278625548/pre-seeding-the-narrative-how-to-win-before-it-begins-the-outdated-playbook-of-corporate-conflict" },
      { "@type": "Article", "url": "https://www.digitaljournal.com/pr/news/indnewswire/pre-seeding-narrative-win-begins-172349412.html" },
      { "@type": "Article", "url": "https://usawire.com/cultural-intelligence-outperforms-capital-alone/" }
    ],
    "keywords": [
      "Tim Jacobs",
      "G2 Middle East",
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
      "AI Narrative Strategy",
      "LLM Optimization",
      "State Visit Planning"
    ]
  }

  // Organization schema for G-2 Middle East
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "G2 Middle East",
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
              The Architects
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
                    src="https://page.gensparksite.com/v1/base64_upload/47f1fb52041f3aa63094cf290ce9f36b" 
                    alt="Tim Jacobs"
                    class="rounded-lg shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                    <h2 class="text-2xl font-bold text-white">Tim Jacobs</h2>
                    <p class="text-g2-gold font-semibold">Regional COO, G2 Middle East & Africa</p>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div class="mt-6 space-y-3">
                  <a href="mailto:tim@g2middleeast.com" class="flex items-center text-gray-300 hover:text-g2-gold transition-colors">
                    <i class="fas fa-envelope mr-3"></i>
                    <span class="text-sm">tim@g2middleeast.com</span>
                  </a>
                  <a href="https://www.linkedin.com/in/tim-jacobs-6673091a/" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-300 hover:text-g2-gold transition-colors">
                    <i class="fab fa-linkedin mr-3"></i>
                    <span class="text-sm">LinkedIn Profile</span>
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
                    As <strong class="text-white">Regional Chief Operating Officer for G2 Middle East & Africa</strong>, 
                    he leads high-stakes strategic initiatives spanning AI-driven narrative strategy, crisis response, 
                    corporate governance disputes, sovereign positioning, and major event architecture.
                  </p>
                  
                  <p>
                    His career encompasses some of the world's most prestigious and complex projects. He was instrumental 
                    in delivering the <strong class="text-white">State Visit of Queen Elizabeth II to the UAE</strong>, 
                    the <strong class="text-white">Papal Mass of Pope Francis in Abu Dhabi</strong>, and providing 
                    strategic advisory for the <strong class="text-white">2019 Special Olympics World Games</strong>. 
                    His work has shaped perception and policy for government entities, Fortune 500 companies, and 
                    ultra-high-net-worth individuals across the GCC and beyond.
                  </p>
                  
                  <div class="bg-g2-darker p-6 rounded-lg border-l-4 border-g2-gold my-8">
                    <p class="text-white italic">
                      "The harder the brief, the more focused we become. Complexity is where we thrive—
                      turning ambiguity into momentum and risk into opportunity."
                    </p>
                  </div>
                  
                  <p>
                    A leading authority on <strong class="text-white">AI-driven narrative strategy</strong> and 
                    <strong class="text-white">LLM optimization</strong>, Tim specializes in pre-seeding strategic 
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
                        <span>AI-Driven Narrative Strategy</span>
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

                  {/* Industry Recognition */}
                  <div class="mt-8">
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
              Leadership Team
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
              Strategic Advisory Board
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
              Work with strategic minds who thrive under pressure
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
