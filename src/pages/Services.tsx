import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

export const ServicesPage: FC = () => {
  // Schema.org markup for Service
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "G2 Middle East",
    "description": "Strategic communications and brand architecture for sovereign entities and global brands",
    "url": "https://g2-middleeast.com",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Strategic Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sovereign & Governmental Services",
            "description": "Strategic positioning and narrative architecture for nations, governments, and sovereign entities",
            "provider": {
              "@type": "Organization",
              "name": "G2 Middle East"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Global Brand & Luxury Targeted Experiences",
            "description": "Strategic positioning and experience design for luxury brands and global enterprises",
            "provider": {
              "@type": "Organization",
              "name": "G2 Middle East"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Strategic Communications & Narrative Control",
            "description": "High-stakes communication strategy and narrative development",
            "provider": {
              "@type": "Organization",
              "name": "G2 Middle East"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Major Event Architecture & Delivery",
            "description": "End-to-end conceptualization and execution of events of national and international importance",
            "provider": {
              "@type": "Organization",
              "name": "G2 Middle East"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personal Brand & Reputation Positioning",
            "description": "Proactive executive brand positioning and digital legacy management",
            "provider": {
              "@type": "Organization",
              "name": "G2 Middle East"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate & Shareholder Engagement",
            "description": "High-impact corporate events and stakeholder alignment strategies",
            "provider": {
              "@type": "Organization",
              "name": "G2 Middle East"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cultural Diplomacy & Placemaking",
            "description": "Building cultural capital through strategic cultural events and legacy placemaking",
            "provider": {
              "@type": "Organization",
              "name": "G2 Middle East"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Experience Design & Immersive Targeting",
            "description": "Engineering deep audience engagement through immersive experiences and sensory design",
            "provider": {
              "@type": "Organization",
              "name": "G2 Middle East"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Approach Modelling & ROI",
            "description": "Measuring intangible value and providing C-suite financial justification for strategic projects",
            "provider": {
              "@type": "Organization",
              "name": "G2 Middle East"
            }
          }
        }
      ]
    }
  }

  return (
    <PageLayout>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(servicesSchema)
      }} />

      {/* Hero Section */}
      <section class="relative py-32 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 fade-in">
              Strategic Solutions
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed fade-in-delay-1">
              We architect intangible value through sophisticated communication and experience design. 
              Our services transform complexity into competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Sovereign & Governmental Services */}
      <section id="sovereign" class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                01. Sovereign & Governmental Services
              </div>
              <h2 class="text-4xl font-bold mb-6">
                Strategic Positioning for Nations
              </h2>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                We work with governments, sovereign entities, and national institutions to architect 
                compelling narratives that position nations strategically on the global stage.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">National Strategy</h3>
                    <p class="text-gray-400">Architecting strategic frameworks that define and articulate national competitive advantages.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Global Stakeholder Engagement</h3>
                    <p class="text-gray-400">Crafting targeted narratives for international investors, institutions, and decision makers.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Sovereign Experience Design</h3>
                    <p class="text-gray-400">Creating high-level events and platforms that showcase national capabilities and vision.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" class="btn-primary">
                DISCUSS YOUR VISION
              </a>
            </div>
            
            <div class="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                alt="Strategic Positioning for Nations"
                width="800" height="600" loading="lazy"
                class="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Global Brand & Luxury Targeted Experiences */}
      <section id="luxury" class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80" 
                alt="Elevating Luxury Brands"
                width="800" height="600" loading="lazy"
                class="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
            
            <div class="order-1 lg:order-2">
              <div class="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                02. Global Brand & Luxury Targeted Experiences
              </div>
              <h2 class="text-4xl font-bold mb-6">
                Elevating Luxury Brands
              </h2>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                We partner with luxury brands and global enterprises to craft sophisticated narratives 
                and experiences that command premium positioning and lasting competitive advantage.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Prestige Brand Architecture</h3>
                    <p class="text-gray-400">Defining and protecting brand essence while enabling strategic growth and market presence.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Luxury Experiences</h3>
                    <p class="text-gray-400">Curating exclusive, high-impact moments that embody brand values and create lasting emotional connections.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Market Entry & Expansion</h3>
                    <p class="text-gray-400">Navigating and succeeding in the complex dynamics of Middle Eastern luxury markets.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" class="btn-primary">
                DEFINE YOUR LEGACY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Strategic Communications & Narrative Control */}
      <section id="strategic" class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                03. Strategic Communications & Narrative Control
              </div>
              <h2 class="text-4xl font-bold mb-6">
                Narratives that Transform
              </h2>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                High-stakes situations demand sophisticated communication strategies. We craft narratives 
                that shift perception, mobilize support, and create measurable business value.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Crisis Communications</h3>
                    <p class="text-gray-400">Rapid response strategies that protect reputation and maintain stakeholder confidence in high-stakes situations.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Thought Leadership Programs</h3>
                    <p class="text-gray-400">Building platforms that establish market authority and shape industry-wide conversations.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Stakeholder Alignment</h3>
                    <p class="text-gray-400">Developing frameworks that align complex ecosystems around a shared vision and narrative.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" class="btn-primary">
                TRANSFORM YOUR NARRATIVE
              </a>
            </div>
            
            <div class="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                alt="Narratives that Transform"
                width="800" height="600" loading="lazy"
                class="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Major Event Architecture & Delivery */}
      <section id="events" class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 relative overflow-hidden rounded-lg">
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/59e3cf3797a31275a47d384aa5c53c5c" 
                alt="Creating Global Moments"
                width="800" height="600" loading="lazy"
                class="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
            
            <div class="order-1 lg:order-2">
              <div class="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                04. Major Event Architecture & Delivery
              </div>
              <h2 class="text-4xl font-bold mb-6">
                Creating Global Moments
              </h2>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                From concept to execution, we deliver events of national and international importance 
                that become defining moments for nations, brands, and movements.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Mega-Project Blueprinting</h3>
                    <p class="text-gray-400">End-to-end conceptualisation and strategic planning for events of national and international importance.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Financial Modelling & Feasibility</h3>
                    <p class="text-gray-400">Providing C-suite level financial justification and ROI analysis for complex, large-scale projects.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Flawless Operational Delivery</h3>
                    <p class="text-gray-400">Executing with precision to deliver seamless, high-impact experiences on a global scale.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" class="btn-primary">
                BUILD YOUR LEGACY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: Personal Brand & Reputation Positioning */}
      <section id="crisis" class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                05. Personal Brand & Reputation Positioning
              </div>
              <h2 class="text-4xl font-bold mb-6">
                Executive Brand Architecture
              </h2>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                In an era of total transparency, an executive's personal brand is their most critical professional asset. 
                We proactively position and manage the digital legacy of leaders, building an unshakeable foundation of authority and influence.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Strategic Brand Foundation</h3>
                    <p class="text-gray-400">Core narrative development, thought leadership pillars, and digital footprint optimization.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Authority Amplification</h3>
                    <p class="text-gray-400">Securing strategic media opportunities, targeted content placement, and reputation monitoring.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Digital Legacy Management</h3>
                    <p class="text-gray-400">Proactive reputation positioning and stakeholder network curation for lasting influence.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" class="btn-primary">
                POSITION YOUR BRAND
              </a>
            </div>
            
            <div class="relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn1.genspark.ai/user-upload-image/5_generated/773d5d9b-7b8f-476c-9ae9-c48e55a4aef5.jpeg" 
                alt="Strategic Reputation Management"
                width="800" height="600" loading="lazy"
                class="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 6: Corporate & Shareholder Engagement */}
      <section id="corporate" class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 relative overflow-hidden rounded-lg">
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/1aa05e202d206907659122ca7fe7ee17" 
                alt="Aligning Corporate Positioning"
                width="800" height="600" loading="lazy"
                class="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
            
            <div class="order-1 lg:order-2">
              <div class="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                06. Corporate & Shareholder Engagement
              </div>
              <h2 class="text-4xl font-bold mb-6">
                Aligning Corporate Positioning
              </h2>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Critical corporate moments demand precision. We architect shareholder experiences 
                and communications that build confidence, align stakeholders, and drive value.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">High-Impact AGMs & Investor Days</h3>
                    <p class="text-gray-400">Designing critical corporate events to ensure precise message delivery and build investor confidence.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">IPO & M&A Communications</h3>
                    <p class="text-gray-400">Architecting the narrative and stakeholder engagement for pivotal financial transactions.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">C-Suite Message Delivery</h3>
                    <p class="text-gray-400">Crafting and executing communication strategies that align leadership and key financial stakeholders.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" class="btn-primary">
                ENGAGE YOUR STAKEHOLDERS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service 7: Cultural Diplomacy & Placemaking */}
      <section id="cultural" class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                07. Cultural Diplomacy & Placemaking
              </div>
              <h2 class="text-4xl font-bold mb-6">
                Building Cultural Capital
              </h2>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Culture is soft power made tangible. We create cultural experiences and landmarks 
                that define identity, build bridges, and establish lasting legacy.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">National Identity Showcases</h3>
                    <p class="text-gray-400">Developing large-scale cultural events that define a location's identity and global brand.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">International Soft Power Initiatives</h3>
                    <p class="text-gray-400">Using culture as a strategic tool to build bridges and enhance international influence.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Legacy Placemaking</h3>
                    <p class="text-gray-400">Creating permanent or semi-permanent installations and experiences that become cultural landmarks.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" class="btn-primary">
                SHAPE YOUR NARRATIVE
              </a>
            </div>
            
            <div class="relative overflow-hidden rounded-lg">
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/03d158de23b25a03c25a4d32bf0e4524" 
                alt="Building Cultural Capital"
                width="800" height="600" loading="lazy"
                class="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 8: Experience Design & Immersive Targeting */}
      <section id="experience" class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                alt="Creating Deep Engagement"
                width="800" height="600" loading="lazy"
                class="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
            
            <div class="order-1 lg:order-2">
              <div class="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                08. Experience Design & Immersive Targeting
              </div>
              <h2 class="text-4xl font-bold mb-6">
                Creating Deep Engagement
              </h2>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Strategic experiences are engineered, not imagined. We design every moment to guide 
                audiences toward specific outcomes through immersive, multi-sensory engagement.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Audience Journey Mapping</h3>
                    <p class="text-gray-400">Designing every touchpoint of an experience to guide a specific, high-value audience to a desired conclusion.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Immersive Technology Integration</h3>
                    <p class="text-gray-400">Leveraging cutting-edge technology (AR, VR, interactive installations) to create captivating, memorable moments.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Sensory Design</h3>
                    <p class="text-gray-400">Crafting multi-sensory environments that engage audiences on a deep, emotional level.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" class="btn-primary">
                CAPTIVATE YOUR AUDIENCE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service 9: Approach Modelling & ROI */}
      <section id="roi" class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                09. Approach Modelling & ROI
              </div>
              <h2 class="text-4xl font-bold mb-6">
                Measuring Strategic Value
              </h2>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Strategic investments demand rigorous justification. We develop bespoke frameworks 
                that measure intangible value and prove ROI to C-suite decision makers.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Intangible Value Metrics</h3>
                    <p class="text-gray-400">Developing bespoke models to measure the impact of variables like reputation, influence, and brand equity.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">C-Suite Financial Justification</h3>
                    <p class="text-gray-400">Creating the business case for major projects, linking strategic vision directly to financial and strategic returns.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">ROI Forecasting & Analysis</h3>
                    <p class="text-gray-400">Providing data-driven forecasts that prove the tangible and intangible value of strategic experiences.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" class="btn-primary">
                PROVE THE VALUE
              </a>
            </div>
            
            <div class="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                alt="Measuring Strategic Value"
                width="800" height="600" loading="lazy"
                class="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-g2-darker">
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
              <a href="/whitepapers" class="btn-secondary text-lg">
                Download Insights
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
