import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

export const ServicesPage: FC = () => {
  // Schema.org markup for Service
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "G-2 Middle East",
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
            "name": "Sovereign & Nation Branding",
            "description": "Strategic positioning and narrative architecture for nations, governments, and sovereign entities",
            "provider": {
              "@type": "Organization",
              "name": "G-2 Middle East"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Global Brand & Luxury Positioning",
            "description": "Strategic positioning and experience design for luxury brands and global enterprises",
            "provider": {
              "@type": "Organization",
              "name": "G-2 Middle East"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Strategic Communications",
            "description": "High-stakes communication strategy and narrative development",
            "provider": {
              "@type": "Organization",
              "name": "G-2 Middle East"
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
              Strategic <span class="text-g2-gold">Solutions</span>
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed fade-in-delay-1">
              We architect intangible value through sophisticated communication and experience design. 
              Our services transform complexity into competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Sovereign & Nation Branding */}
      <section id="sovereign" class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                01. Sovereign & Nation Branding
              </div>
              <h2 class="text-4xl font-bold mb-6">
                Strategic Positioning for <span class="text-g2-gold">Nations</span>
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
                    <h3 class="text-white font-semibold mb-2">Nation Brand Strategy</h3>
                    <p class="text-gray-400">Comprehensive strategic frameworks that define and articulate national competitive advantages</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Global Stakeholder Engagement</h3>
                    <p class="text-gray-400">Strategic communication programs targeting international investors, institutions, and decision-makers</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Sovereign Experience Design</h3>
                    <p class="text-gray-400">High-impact events and experiences that showcase national capabilities and vision</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" class="btn-primary">
                Discuss Your Vision
              </a>
            </div>
            
            <div class="relative">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                alt="Nation Branding"
                class="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Global Brand & Luxury Positioning */}
      <section id="luxury" class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80" 
                alt="Luxury Positioning"
                class="rounded-lg shadow-2xl"
              />
            </div>
            
            <div class="order-1 lg:order-2">
              <div class="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                02. Global Brand & Luxury Positioning
              </div>
              <h2 class="text-4xl font-bold mb-6">
                Elevating <span class="text-g2-gold">Luxury Brands</span>
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
                    <h3 class="text-white font-semibold mb-2">Premium Brand Architecture</h3>
                    <p class="text-gray-400">Strategic frameworks that define and protect brand essence while enabling growth</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Luxury Experience Design</h3>
                    <p class="text-gray-400">Curated experiences that embody brand values and create lasting emotional connections</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Market Entry & Expansion</h3>
                    <p class="text-gray-400">Strategic roadmaps for entering and succeeding in complex Middle Eastern markets</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" class="btn-primary">
                Elevate Your Brand
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Strategic Communications */}
      <section id="strategic" class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                03. Strategic Communications
              </div>
              <h2 class="text-4xl font-bold mb-6">
                Narratives that <span class="text-g2-gold">Transform</span>
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
                    <p class="text-gray-400">Rapid response strategies that protect reputation and maintain stakeholder confidence</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Thought Leadership Programs</h3>
                    <p class="text-gray-400">Strategic content and engagement platforms that establish market authority</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-g2-gold mr-4 mt-1">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-2">Stakeholder Alignment</h3>
                    <p class="text-gray-400">Strategic frameworks that align complex stakeholder ecosystems around shared objectives</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" class="btn-primary">
                Transform Your Narrative
              </a>
            </div>
            
            <div class="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                alt="Strategic Communications"
                class="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">
              Specialized <span class="text-g2-gold">Capabilities</span>
            </h2>
            <p class="text-xl text-gray-400">
              Complementary services that amplify strategic impact
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-g2-dark p-6 rounded-lg border border-white/10">
              <div class="text-g2-gold text-3xl mb-4">
                <i class="fas fa-globe-americas"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">Regional Intelligence</h3>
              <p class="text-gray-400 text-sm">Deep understanding of Middle Eastern markets, culture, and decision-making dynamics</p>
            </div>

            <div class="bg-g2-dark p-6 rounded-lg border border-white/10">
              <div class="text-g2-gold text-3xl mb-4">
                <i class="fas fa-users"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">Executive Advisory</h3>
              <p class="text-gray-400 text-sm">Strategic counsel for C-suite executives navigating complex regional challenges</p>
            </div>

            <div class="bg-g2-dark p-6 rounded-lg border border-white/10">
              <div class="text-g2-gold text-3xl mb-4">
                <i class="fas fa-chart-line"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">Performance Measurement</h3>
              <p class="text-gray-400 text-sm">Rigorous analytics frameworks that demonstrate strategic ROI</p>
            </div>

            <div class="bg-g2-dark p-6 rounded-lg border border-white/10">
              <div class="text-g2-gold text-3xl mb-4">
                <i class="fas fa-handshake"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">Partnership Brokering</h3>
              <p class="text-gray-400 text-sm">Facilitating strategic partnerships and alliances across sectors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Ready to architect your <span class="text-g2-gold">strategic advantage</span>?
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Let's discuss how G-2 Middle East can help you navigate complexity and create lasting value.
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
