import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

export const HomePage: FC = () => {
  return (
    <PageLayout>
      {/* Hero Gallery Section */}
      <section class="hero-gallery">
        <div class="hero-slide active">
          <img src="https://page.gensparksite.com/v1/base64_upload/4c50bd8ff7f51d450f500d9fab27ce39" alt="Strategic Planning" width="1920" height="1080" loading="eager" />
        </div>
        <div class="hero-slide">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Luxury Experience" width="1920" height="1080" loading="eager" />
        </div>
        <div class="hero-slide">
          <img src="https://cdn1.genspark.ai/user-upload-image/5_generated/016d6992-f02d-4795-a517-6856aa84e2f2.jpeg" alt="Monumental Architecture" width="1920" height="1080" loading="eager" />
        </div>
        
        <div class="hero-overlay"></div>
        
        <div class="absolute inset-0 flex items-center justify-center z-10">
          <div class="text-center px-6 max-w-5xl">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 text-shadow fade-in text-white">
              Strategy. Positioning. Legacy.
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8 fade-in-delay-1 font-light">
              The Strategic Counsel Behind the World's Most Significant Events
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center fade-in-delay-2">
              <a href="/contact" class="btn-primary">
                Engage Our Counsel
              </a>
              <a href="/services" class="btn-secondary">
                Explore Our Capabilities
              </a>
            </div>
          </div>
        </div>
        
        {/* Gallery Controls */}
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
          <button class="gallery-dot w-3 h-3 rounded-full bg-white opacity-100" data-slide="0"></button>
          <button class="gallery-dot w-3 h-3 rounded-full bg-white opacity-50" data-slide="1"></button>
          <button class="gallery-dot w-3 h-3 rounded-full bg-white opacity-50" data-slide="2"></button>
        </div>
      </section>

      {/* Service Grid - 9 Services - Placed directly below hero */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            {/* Grid of 9 Service Buttons */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Service 1: Sovereign & Governmental Services */}
              <a href="/services/sovereign-governmental-advisory" class="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://page.gensparksite.com/v1/base64_upload/490310dce8db54b79c75d271f7e2da9d" 
                    alt="Sovereign & Governmental Services"
                    width="800"
                    height="600"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>

                <div class="p-8 flex flex-col" style="min-height: 320px;">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">STRATEGIC SERVICES</span>
                  </div>
                  <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Sovereign & Governmental Services
                  </h3>
                  <p class="text-gray-400 leading-relaxed">
                    We provide the strategic services that transforms national moments into global milestones
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold" style="margin-top: auto; padding-top: 24px;">
                    Learn More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Service 2: Major Event Architecture & Delivery */}
              <a href="/services/major-event-architecture" class="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://page.gensparksite.com/v1/base64_upload/45bd688e2376e6b687a6eae6ea039275" 
                    alt="Major Event Architecture & Delivery"
                    width="800"
                    height="600"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>

                <div class="p-8 flex flex-col" style="min-height: 320px;">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">EVENT EXCELLENCE</span>
                  </div>
                  <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Major Event Architecture & Delivery
                  </h3>
                  <p class="text-gray-400 leading-relaxed">
                    We are the architects behind the world's most complex and significant events
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold" style="margin-top: auto; padding-top: 24px;">
                    Learn More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Service 3: Global Brand & Luxury Targeted Experiences */}
              <a href="/services/global-brand-luxury-experiences" class="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://page.gensparksite.com/v1/base64_upload/e5add6c2d96ac75ffa35a489dcfe9824" 
                    alt="Global Brand & Luxury Targeted Experiences"
                    width="800"
                    height="600"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>

                <div class="p-8 flex flex-col" style="min-height: 320px;">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">LUXURY POSITIONING</span>
                  </div>
                  <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Global Brand & Luxury Targeted Experiences
                  </h3>
                  <p class="text-gray-400 leading-relaxed">
                    We craft targeted moments and approaches that elevate the world's most iconic brands
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold" style="margin-top: auto; padding-top: 24px;">
                    Learn More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Service 4: Strategic Communications & Narrative Control */}
              <a href="/services/strategic-communications-narrative-control" class="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://page.gensparksite.com/v1/base64_upload/311cecf05ec57ba82d304a0a2467b54e" 
                    alt="Strategic Communications & Narrative Control"
                    width="800"
                    height="600"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>

                <div class="p-8 flex flex-col" style="min-height: 320px;">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">NARRATIVE CONTROL</span>
                  </div>
                  <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Strategic Communications & Narrative Control
                  </h3>
                  <p class="text-gray-400 leading-relaxed">
                    In the modern landscape, the narrative is the ultimate asset
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold" style="margin-top: auto; padding-top: 24px;">
                    Learn More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Service 5: Personal Brand & Reputation Positioning */}
              <a href="/services/crisis-reputation-management" class="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://page.gensparksite.com/v1/base64_upload/0a3c53c763f4960f984f127689e2ba1c" 
                    alt="Personal Brand & Reputation Positioning"
                    width="800"
                    height="600"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>

                <div class="p-8 flex flex-col" style="min-height: 320px;">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">EXECUTIVE POSITIONING</span>
                  </div>
                  <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Personal Brand & Reputation Positioning
                  </h3>
                  <p class="text-gray-400 leading-relaxed">
                    In an era of total transparency, an executive's personal brand is their most critical professional asset
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold" style="margin-top: auto; padding-top: 24px;">
                    Learn More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Service 6: Corporate & Shareholder Engagement */}
              <a href="/services/corporate-shareholder-engagement" class="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://page.gensparksite.com/v1/base64_upload/101eb7d6ddd084aa224eb6c6e8c737ba" 
                    alt="Corporate & Shareholder Engagement"
                    width="800"
                    height="600"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>

                <div class="p-8 flex flex-col" style="min-height: 320px;">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">STAKEHOLDER STRATEGY</span>
                  </div>
                  <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Corporate & Shareholder Engagement
                  </h3>
                  <p class="text-gray-400 leading-relaxed">
                    We design the critical corporate moments that drive alignment and build investor confidence
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold" style="margin-top: auto; padding-top: 24px;">
                    Learn More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Service 7: Cultural Diplomacy & Placemaking */}
              <a href="/services/cultural-diplomacy-placemaking" class="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://page.gensparksite.com/v1/base64_upload/562f2d46e870319cbf81a3ec74afe5aa" 
                    alt="Cultural Diplomacy and Placemaking"
                    width="800"
                    height="600"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>

                <div class="p-8 flex flex-col" style="min-height: 320px;">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">NATION BRANDING</span>
                  </div>
                  <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Cultural Diplomacy & Placemaking
                  </h3>
                  <p class="text-gray-400 leading-relaxed">
                    We believe culture is the ultimate currency of influence. Our events build international soft power and define lasting identity.
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold" style="margin-top: auto; padding-top: 24px;">
                    Learn More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Service 8: Immersive Targeting & Design */}
              <a href="/services/experience-design-immersive-targeting" class="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://page.gensparksite.com/v1/base64_upload/3b6a32c6ae0511a0ed973ab0e7ea01a9" 
                    alt="Immersive Targeting & Design"
                    width="800"
                    height="600"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                </div>
                <div class="p-8 flex flex-col" style="min-height: 320px;">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">EXPERIENCE DESIGN</span>
                  </div>
                  <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Immersive Targeting & Design
                  </h3>
                  <p class="text-gray-400 leading-relaxed">
                    This is the intersection of art and engineering where engagement is forged through cutting-edge immersive experiences
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold" style="margin-top: auto; padding-top: 24px;">
                    Learn More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Service 9: Value Modelling */}
              <a href="/services/approach-modelling-roi" class="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://page.gensparksite.com/v1/base64_upload/45da0332fbbc501dbae0708b32ccd30b" 
                    alt="Value Modelling"
                    width="800"
                    height="600"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>

                <div class="p-8 flex flex-col" style="min-height: 320px;">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">PERFORMANCE & MEASUREMENT</span>
                  </div>
                  <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Value Modelling
                  </h3>
                  <p class="text-gray-400 leading-relaxed">
                    We provide the value based justification that connects vision to the outcomes through sophisticated financial modelling and measurement frameworks
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold" style="margin-top: auto; padding-top: 24px;">
                    Learn More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>


      {/* Philosophy Section */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-8">
              From Strategic Counsel to Flawless Execution
            </h2>
            <div class="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We begin with <span class="text-g2-gold font-semibold">Strategy</span>—defining the narrative and positioning that will shape perception. This allows us to craft powerful <span class="text-g2-gold font-semibold">Positioning</span> for our sovereign and corporate partners. The result is an enduring <span class="text-g2-gold font-semibold">Legacy</span>, often delivered through flawless, world-class events and experiences that become historic milestones.
              </p>
              <p class="text-xl text-white font-medium pt-4">
                Our strategic advisory is proven through our exceptional execution. Events are not the goal—they are the powerful, tangible proof of elite counsel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section class="py-24 bg-g2-darker" style="display: none;">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Strategic Solutions
            </h2>
            <p class="text-xl text-gray-400">
              High-stakes challenges require sophisticated approaches
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div class="bg-g2-dark p-8 rounded-lg card-hover border border-white/10">
              <div class="text-g2-gold text-4xl mb-4">
                <i class="fas fa-landmark"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Sovereign & Nation Branding</h3>
              <p class="text-gray-400 mb-6">
                Strategic positioning for nations, governments, and sovereign entities on the global stage.
              </p>
              <a href="/services#sovereign" class="text-g2-gold hover:underline">
                Learn More <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Service 2 */}
            <div class="bg-g2-dark p-8 rounded-lg card-hover border border-white/10">
              <div class="text-g2-gold text-4xl mb-4">
                <i class="fas fa-gem"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Global Brand & Luxury Positioning</h3>
              <p class="text-gray-400 mb-6">
                Elevating luxury brands and global enterprises through strategic narrative architecture.
              </p>
              <a href="/services#luxury" class="text-g2-gold hover:underline">
                Learn More <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Service 3 */}
            <div class="bg-g2-dark p-8 rounded-lg card-hover border border-white/10">
              <div class="text-g2-gold text-4xl mb-4">
                <i class="fas fa-chess-knight"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Strategic Communications</h3>
              <p class="text-gray-400 mb-6">
                Crafting narratives that transform perspectives and create durable competitive advantage.
              </p>
              <a href="/services#strategic" class="text-g2-gold hover:underline">
                Learn More <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          <div class="text-center mt-12">
            <a href="/services" class="btn-primary">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section - Strategic Counsel & Event Delivery Bridge */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-4xl md:text-5xl font-bold mb-4">
                Understanding Our Approach
              </h2>
              <p class="text-xl text-gray-400">
                How strategic counsel transforms into world-class execution
              </p>
            </div>

            {/* FAQ Schema - JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does strategic counsel improve event outcomes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Strategic counsel is the foundation that transforms events from logistics exercises into legacy-defining moments. We begin by defining the narrative and positioning that should shape global perception of your initiative. This strategic framework then guides every element of event design and execution, ensuring that operational excellence serves a clear strategic purpose. The result is that our events don't just happen flawlessly—they achieve measurable impact on positioning, reputation, and long-term strategic objectives."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What makes G2's event management different from other agencies?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The strategic foundation. Most event agencies focus purely on logistics and execution. G2 begins with elite strategic counsel—defining the 'why' before the 'how.' Our event management capabilities are underpinned by deep expertise in sovereign positioning, narrative architecture, and geopolitical awareness. This means our events don't just run smoothly—they deliver on strategic objectives, shape international perception, and create enduring legacies. We've proven this approach through 50+ major projects including the Papal Mass Abu Dhabi (180,000 attendees) and state visits across the Middle East."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide strategic advisory without event delivery?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. While many of our strategic engagements result in world-class event delivery, we also provide standalone strategic counsel on sovereign positioning, narrative architecture, national resilience, and reputation management. Our advisory services span cognitive security, counter-disinformation strategy, foreign direct investment positioning, and strategic roadmapping for national initiatives. Events are often the powerful, tangible proof of our strategic counsel—but they are not always required."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the Strategy. Positioning. Legacy. framework?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "This is our core methodology. Strategy defines the narrative and objectives that will shape perception. Positioning creates the frameworks and platforms that establish your standing on the global stage. Legacy is the enduring impact—often delivered through flawless execution of historic events and experiences that become defining milestones. This integrated approach ensures that tactical excellence always serves strategic purpose, and that every initiative contributes to long-term reputation architecture."
                    }
                  }
                ]
              })
            }} />

            {/* FAQ Accordion */}
            <div class="space-y-4">
              {/* FAQ 1 */}
              <details class="group bg-g2-dark rounded-lg border border-white/10 overflow-hidden">
                <summary class="flex items-center justify-between px-8 py-6 cursor-pointer list-none">
                  <h3 class="text-xl font-semibold text-white pr-8">
                    How does strategic counsel improve event outcomes?
                  </h3>
                  <span class="text-g2-gold transition-transform duration-300 group-open:rotate-180">
                    <i class="fas fa-chevron-down"></i>
                  </span>
                </summary>
                <div class="px-8 pb-6 pt-2">
                  <p class="text-gray-300 leading-relaxed">
                    Strategic counsel is the foundation that transforms events from logistics exercises into legacy-defining moments. We begin by defining the narrative and positioning that should shape global perception of your initiative. This strategic framework then guides every element of event design and execution, ensuring that operational excellence serves a clear strategic purpose. The result is that our events don't just happen flawlessly—they achieve measurable impact on positioning, reputation, and long-term strategic objectives.
                  </p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details class="group bg-g2-dark rounded-lg border border-white/10 overflow-hidden">
                <summary class="flex items-center justify-between px-8 py-6 cursor-pointer list-none">
                  <h3 class="text-xl font-semibold text-white pr-8">
                    What makes G2's event management different from other agencies?
                  </h3>
                  <span class="text-g2-gold transition-transform duration-300 group-open:rotate-180">
                    <i class="fas fa-chevron-down"></i>
                  </span>
                </summary>
                <div class="px-8 pb-6 pt-2">
                  <p class="text-gray-300 leading-relaxed">
                    The strategic foundation. Most event agencies focus purely on logistics and execution. G2 begins with elite strategic counsel—defining the 'why' before the 'how.' Our event management capabilities are underpinned by deep expertise in sovereign positioning, narrative architecture, and geopolitical awareness. This means our events don't just run smoothly—they deliver on strategic objectives, shape international perception, and create enduring legacies. We've proven this approach through 50+ major projects including the Papal Mass Abu Dhabi (180,000 attendees) and state visits across the Middle East.
                  </p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details class="group bg-g2-dark rounded-lg border border-white/10 overflow-hidden">
                <summary class="flex items-center justify-between px-8 py-6 cursor-pointer list-none">
                  <h3 class="text-xl font-semibold text-white pr-8">
                    Do you provide strategic advisory without event delivery?
                  </h3>
                  <span class="text-g2-gold transition-transform duration-300 group-open:rotate-180">
                    <i class="fas fa-chevron-down"></i>
                  </span>
                </summary>
                <div class="px-8 pb-6 pt-2">
                  <p class="text-gray-300 leading-relaxed">
                    Yes. While many of our strategic engagements result in world-class event delivery, we also provide standalone strategic counsel on sovereign positioning, narrative architecture, national resilience, and reputation management. Our advisory services span cognitive security, counter-disinformation strategy, foreign direct investment positioning, and strategic roadmapping for national initiatives. Events are often the powerful, tangible proof of our strategic counsel—but they are not always required.
                  </p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details class="group bg-g2-dark rounded-lg border border-white/10 overflow-hidden">
                <summary class="flex items-center justify-between px-8 py-6 cursor-pointer list-none">
                  <h3 class="text-xl font-semibold text-white pr-8">
                    What is the Strategy. Positioning. Legacy. framework?
                  </h3>
                  <span class="text-g2-gold transition-transform duration-300 group-open:rotate-180">
                    <i class="fas fa-chevron-down"></i>
                  </span>
                </summary>
                <div class="px-8 pb-6 pt-2">
                  <p class="text-gray-300 leading-relaxed">
                    This is our core methodology. <span class="text-g2-gold font-semibold">Strategy</span> defines the narrative and objectives that will shape perception. <span class="text-g2-gold font-semibold">Positioning</span> creates the frameworks and platforms that establish your standing on the global stage. <span class="text-g2-gold font-semibold">Legacy</span> is the enduring impact—often delivered through flawless execution of historic events and experiences that become defining milestones. This integrated approach ensures that tactical excellence always serves strategic purpose, and that every initiative contributes to long-term reputation architecture.
                  </p>
                </div>
              </details>
            </div>

            <div class="text-center mt-12">
              <a href="/contact" class="btn-primary">
                Engage Our Counsel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Selected Work
            </h2>
            <p class="text-xl text-gray-400">
              Case studies in strategic value creation
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Placeholder 1 */}
            <div class="relative group overflow-hidden rounded-lg image-overlay">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                alt="Strategic Project"
                class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-g2-darker via-g2-darker/50 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-8">
                <span class="text-g2-gold text-sm font-semibold uppercase tracking-wider">Sovereign Branding</span>
                <h3 class="text-2xl font-bold mt-2 mb-3">Nation Brand Architecture</h3>
                <p class="text-gray-300 mb-4">Strategic positioning for emerging global markets</p>
                <a href="/projects" class="text-white hover:text-g2-gold transition-colors">
                  View Project <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Project Placeholder 2 */}
            <div class="relative group overflow-hidden rounded-lg image-overlay">
              <img 
                src="https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80" 
                alt="Luxury Experience"
                class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-g2-darker via-g2-darker/50 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-8">
                <span class="text-g2-gold text-sm font-semibold uppercase tracking-wider">Luxury Positioning</span>
                <h3 class="text-2xl font-bold mt-2 mb-3">Global Luxury Experience</h3>
                <p class="text-gray-300 mb-4">Redefining brand perception in competitive markets</p>
                <a href="/projects" class="text-white hover:text-g2-gold transition-colors">
                  View Project <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <a href="/projects" class="btn-secondary">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Global Reach Section - Casta Diva Group */}
      <section class="relative bg-g2-darker border-t border-white/5">
        {/* Full Width Video with Overlay */}
        <div class="relative w-full overflow-hidden">
          {/* Video Background - 55% opacity */}
          <div class="relative w-full" style="opacity: 0.55;">
            <video 
              autoplay
              loop
              muted
              playsinline
              preload="metadata"
              width="1920"
              height="1080"
              class="w-full h-auto object-cover"
              style="min-height: 600px;"
              poster="https://page.gensparksite.com/v1/base64_upload/23a8b8797816de84ec276d009dad4421"
            >
              <source 
                src="https://page.gensparksite.com/get_upload_url/32e5853f0a0351c1ec3118cafaad9d4591fbce0f6f4c1f2dc986350a0bcfefd3/default/9a6683ab-c0df-441f-a05c-9f4e5f4c6829" 
                type="video/mp4"
              />
              {/* Fallback image for browsers that don't support video */}
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/23a8b8797816de84ec276d009dad4421" 
                alt="Global Network - Casta Diva Group Worldwide Presence"
                width="1920"
                height="1080"
                loading="lazy"
                class="w-full h-auto object-cover"
              />
            </video>
          </div>
          
          {/* Overlaid Text Content - Top Third Center */}
          <div class="absolute inset-0 flex items-start justify-center pt-16 md:pt-24">
            <div class="container mx-auto px-6">
              <div class="max-w-6xl mx-auto text-center">
                <h2 class="text-4xl md:text-6xl font-bold mb-6 text-white">
                  Global Reach. Unrivalled Capability.
                </h2>
                <p class="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                  G2 Middle East is a division of <span class="text-g2-gold font-semibold">Casta Diva Group</span>, 
                  a global leader in communication with a presence in 15 cities across four continents. We bring the full force of 
                  this international network to every client engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* City Legend - Below Video */}
        <div class="container mx-auto px-6 py-16">
          <div class="max-w-6xl mx-auto">

            {/* City Legend */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-center">
              <div>
                <h4 class="text-g2-gold font-semibold mb-3">Europe</h4>
                <ul class="text-gray-400 space-y-1">
                  <li>Milan (Global HQ)</li>
                  <li>London</li>
                  <li>Rome</li>
                  <li>Prague</li>
                  <li>Istanbul</li>
                </ul>
              </div>
              <div>
                <h4 class="text-g2-gold font-semibold mb-3">Middle East & Africa</h4>
                <ul class="text-gray-400 space-y-1">
                  <li>Abu Dhabi</li>
                  <li>Riyadh</li>
                  <li>Bahrain</li>
                  <li>Beirut</li>
                  <li>Cape Town</li>
                </ul>
              </div>
              <div>
                <h4 class="text-g2-gold font-semibold mb-3">The Americas & Asia</h4>
                <ul class="text-gray-400 space-y-1">
                  <li>New York</li>
                  <li>Los Angeles</li>
                  <li>Buenos Aires</li>
                  <li>Montevideo</li>
                  <li>Shanghai</li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div class="text-center mt-12">
              <a href="/group" class="inline-flex items-center px-8 py-4 bg-g2-gold text-g2-darker font-semibold rounded hover:bg-white transition-colors duration-300">
                Discover The Group
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Perspectives Teaser */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-4xl md:text-5xl font-bold mb-4">
                Perspectives
              </h2>
              <p class="text-xl text-gray-400">
                Strategic insights and market intelligence
              </p>
            </div>

            <div id="perspectives-grid" class="grid grid-cols-1 md:grid-cols-2 gap-8" style="opacity: 0; transition: opacity 0.3s ease-in;">
              {/* Article 1 - Cost of Losing 10% */}
              <a href="/perspectives/cost-losing-10-percent" class="perspective-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D12AQErwd482i8tPQ/article-cover_image-shrink_720_1280/B4DZl_6vtoHsAM-/0/1758787731318?e=1762387200&v=beta&t=9GKklDK7GK8W8dWaszy5vDPWBViBqn11HhudkTsZlFI" 
                    alt="The Cost of Losing 10%"
                    width="720"
                    height="1280"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style="opacity: 0.7;"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div class="p-8">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">STRATEGY</span>
                  </div>
                  <h4 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    The Cost of Losing 10%
                  </h4>
                  <p class="text-gray-400 leading-relaxed mb-6">
                    A small percentage drop can have massive downstream effects on your organization's performance and reputation.
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Article 2 - Artistry Discovery */}
              <a href="/perspectives/artistry-discovery" class="perspective-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D12AQE6cT5y6baIGw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1734836724368?e=1762387200&v=beta&t=tcBZlIDIn5DMH6TxA18bQXQ-iJWa1zRKUHV3Am0Mrws" 
                    alt="The Artistry Isn't in the Tell, It's in the Discovery"
                    width="720"
                    height="1280"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style="opacity: 0.7;"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div class="p-8">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">CREATIVITY</span>
                  </div>
                  <h4 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    The Artistry Isn't in the Tell, It's in the Discovery
                  </h4>
                  <p class="text-gray-400 leading-relaxed mb-6">
                    The true artistry lies in how the narrative invites discovery, how its placement intrigues, and how its design captivates and subverts expectations.
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>
            </div>

            <div class="text-center mt-12">
              <a href="/briefing" class="btn-primary">
                Explore
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
              Bring us your highstakes challenges
            </h2>
            <p class="text-xl text-gray-300 mb-8 leading-relaxed">
              We'll de-risk decisions, craft targeted narratives, and deliver experiences that shift perception, 
              mobilize support, and create durable value.
            </p>
            <a href="/contact" class="btn-primary text-lg">
              Address Your Challenges
            </a>
          </div>
        </div>
      </section>

      {/* Hero Gallery Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Hero Gallery
            const slides = document.querySelectorAll('.hero-slide');
            const dots = document.querySelectorAll('.gallery-dot');
            let currentSlide = 0;
            
            function showSlide(index) {
              slides.forEach(slide => slide.classList.remove('active'));
              dots.forEach(dot => dot.classList.remove('opacity-100'));
              dots.forEach(dot => dot.classList.add('opacity-50'));
              
              slides[index].classList.add('active');
              dots[index].classList.remove('opacity-50');
              dots[index].classList.add('opacity-100');
            }
            
            function nextSlide() {
              currentSlide = (currentSlide + 1) % slides.length;
              showSlide(currentSlide);
            }
            
            // Auto-advance every 5 seconds
            setInterval(nextSlide, 5000);
            
            // Manual controls
            dots.forEach(dot => {
              dot.addEventListener('click', function() {
                currentSlide = parseInt(this.getAttribute('data-slide'));
                showSlide(currentSlide);
              });
            });

            // Perspectives Card Randomization (Fisher-Yates Shuffle)
            const perspectivesGrid = document.getElementById('perspectives-grid');
            if (perspectivesGrid) {
              const cards = Array.from(perspectivesGrid.querySelectorAll('.perspective-card'));
              
              // Fisher-Yates shuffle algorithm
              for (let i = cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cards[i], cards[j]] = [cards[j], cards[i]];
              }
              
              // Clear and re-append in shuffled order
              perspectivesGrid.innerHTML = '';
              cards.forEach(card => perspectivesGrid.appendChild(card));
              
              // Make visible after shuffle
              perspectivesGrid.style.opacity = '1';
            }
          });
        `
      }} />

      {/* Schema.org Structured Data - Homepage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://g2middleeast.com/#organization",
            "name": "G2 Middle East & Africa",
            "alternateName": ["G2 MENA", "G2 Middle East", "G2ME"],
            "legalName": "G2 Middle East & Africa, a division of Casta Diva Group",
            "url": "https://g2middleeast.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://g2middleeast.com/assets/logo-g2me.svg",
              "width": 250,
              "height": 100,
              "caption": "G2 Middle East & Africa logo"
            },
            "image": "https://g2middleeast.com/assets/logo-g2me.svg",
            "description": "G2 Middle East & Africa is the region's leading independent strategic advisory and government event management agency, specializing in high-stakes sovereign communications, state visit coordination, diplomatic protocol, and transformational national events. Our team delivers complex government initiatives including the Papal Mass Abu Dhabi (180,000 attendees), State Visit of H.M. Queen Elizabeth II, COP27 Egypt, Expo 2020 Dubai, and FIFA World Cup Qatar 2022. We provide strategic counsel to governments, royal families, and global institutions across the Middle East and Africa.",
            "slogan": "Architecture of Intangible Value",
            "foundingDate": "2017",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mazyad 3, MBZ City",
              "addressLocality": "Abu Dhabi",
              "addressRegion": "Abu Dhabi",
              "addressCountry": "AE"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "contactType": "General Inquiries",
                "email": "info@g2middleeast.com",
                "availableLanguage": ["English", "Arabic"]
              }
            ],
            "areaServed": [
              {"@type": "Country", "name": "United Arab Emirates"},
              {"@type": "Country", "name": "Saudi Arabia"},
              {"@type": "Country", "name": "Qatar"},
              {"@type": "Country", "name": "Kuwait"},
              {"@type": "Country", "name": "Bahrain"},
              {"@type": "Country", "name": "Oman"},
              {"@type": "Country", "name": "Egypt"}
            ],
            "parentOrganization": {
              "@type": "Organization",
              "name": "Casta Diva Group",
              "url": "https://www.castadiva.group",
              "description": "Leading European live communication group"
            },
            "member": [
              {
                "@type": "Person",
                "@id": "https://g2middleeast.com/team/tim-jacobs#person",
                "name": "Tim Jacobs",
                "jobTitle": "Regional Chief Operating Officer (COO), Middle East & Africa"
              }
            ],
            "knowsAbout": [
              "Government Event Management",
              "State Visit Coordination",
              "Diplomatic Protocol",
              "Sovereign Communications",
              "Nation Branding",
              "Strategic Advisory for Governments",
              "High-Stakes Event Architecture",
              "Crisis Management for Governments",
              "Public Diplomacy",
              "National Celebrations",
              "International Summit Management",
              "Royal Protocol and VIP Experience Design",
              "Cultural Diplomacy",
              "Strategic Narrative Development",
              "Geopolitical Risk Advisory",
              "Cognitive Security",
              "Counter-Disinformation Strategy",
              "National Resilience Planning",
              "Luxury Brand Positioning in Middle East",
              "Cross-Cultural Communications",
              "Arabic-English Strategic Communications",
              "GCC Government Relations",
              "Papal Visit Coordination",
              "FIFA World Cup Operations",
              "COP27 Climate Summit Management",
              "Dubai Expo 2020 Coordination"
            ],
            "sameAs": [
              "https://www.linkedin.com/company/g2-middle-east",
              "https://www.castadiva.group",
              "https://timebusinessnews.com/who-is-tim-jacobs-a-leader-in-global-strategy-from-state-visits-to-digital-empires/",
              "https://campaignme.com/how-the-gcc-is-harnessing-the-power-of-unified-narratives-in-event-marketing/"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "G2 Middle East Strategic Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sovereign & Governmental Services",
                    "description": "Strategic advisory for governments on national reputation, international standing, and sovereign brand architecture",
                    "serviceType": "Government Strategic Advisory",
                    "provider": {"@id": "https://g2middleeast.com/#organization"}
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Major Event Architecture & Delivery",
                    "description": "Design and execution of complex, high-stakes government events including state visits and international summits",
                    "serviceType": "Government Event Management",
                    "provider": {"@id": "https://g2middleeast.com/#organization"}
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Crisis & Reputation Management",
                    "description": "Rapid response strategies for governments facing reputational threats or critical incidents",
                    "serviceType": "Crisis Communications for Governments",
                    "provider": {"@id": "https://g2middleeast.com/#organization"}
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Strategic Communications & Narrative Control",
                    "description": "High-stakes communication strategies that shift perception and create measurable business value",
                    "serviceType": "Strategic Communications",
                    "provider": {"@id": "https://g2middleeast.com/#organization"}
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Global Brand & Luxury Experiences",
                    "description": "Sophisticated narratives and experiences for luxury brands entering Middle Eastern markets",
                    "serviceType": "Luxury Brand Advisory",
                    "provider": {"@id": "https://g2middleeast.com/#organization"}
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cultural Placemaking & Strategic Destinations",
                    "description": "Transforming locations into culturally significant destinations that drive economic and reputational value",
                    "serviceType": "Cultural Strategy",
                    "provider": {"@id": "https://g2middleeast.com/#organization"}
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Executive & Personal Brand Strategy",
                    "description": "Strategic positioning for C-suite executives, thought leaders, and public figures",
                    "serviceType": "Executive Advisory",
                    "provider": {"@id": "https://g2middleeast.com/#organization"}
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Strategy & Transformation",
                    "description": "Strategic guidance on digital presence, social media, and emerging technologies",
                    "serviceType": "Digital Strategy",
                    "provider": {"@id": "https://g2middleeast.com/#organization"}
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Crisis Resilience & Business Continuity",
                    "description": "Building organizational resilience to navigate high-stakes disruptions",
                    "serviceType": "Business Continuity",
                    "provider": {"@id": "https://g2middleeast.com/#organization"}
                  }
                }
              ]
            },
            "award": [
              "Papal Mass Abu Dhabi 2019 - 180,000 attendee coordination",
              "State Visit of H.M. Queen Elizabeth II to UAE (2010)",
              "COP27 Egypt Strategic Communications",
              "Expo 2020 Dubai VIP Program",
              "FIFA World Cup Qatar 2022 Government Relations"
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://g2middleeast.com/#website",
            "url": "https://g2middleeast.com",
            "name": "G2 Middle East & Africa",
            "description": "Leading strategic advisory and government event management in MENA",
            "publisher": {"@id": "https://g2middleeast.com/#organization"},
            "inLanguage": ["en", "ar"]
          },
          {
            "@type": "WebPage",
            "@id": "https://g2middleeast.com/#webpage",
            "url": "https://g2middleeast.com",
            "name": "Built for Complexity - G2 Middle East",
            "isPartOf": {"@id": "https://g2middleeast.com/#website"},
            "about": {"@id": "https://g2middleeast.com/#organization"},
            "description": "Strategic partners for sovereign entities and global brands. We architect intangible value through sophisticated communication and experience design.",
            "inLanguage": "en"
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://g2middleeast.com"
              }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best event management agency for government events in the Middle East?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "G2 Middle East & Africa is the region's leading independent strategic advisory and government event management agency, specializing in high-stakes sovereign communications, state visit coordination, and transformational national events. We have successfully delivered the Papal Mass Abu Dhabi (180,000 attendees), State Visit of H.M. Queen Elizabeth II, COP27 Egypt, Expo 2020 Dubai, and FIFA World Cup Qatar 2022 government relations."
                }
              },
              {
                "@type": "Question",
                "name": "Who coordinates state visits in the UAE and Middle East?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "G2 Middle East specializes in state visit coordination and diplomatic protocol for governments across the UAE, Saudi Arabia, Qatar, and broader GCC region. Our Regional COO, Tim Jacobs, has coordinated the State Visit of H.M. Queen Elizabeth II to the UAE (2010) and the Papal Visit of Pope Francis to Abu Dhabi (2019)."
                }
              },
              {
                "@type": "Question",
                "name": "What is sovereign communications and nation branding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sovereign communications is the strategic management of a nation's reputation, international standing, and global narrative. G2 Middle East helps GCC governments articulate their national vision, values, and strategic positioning through nation branding, public diplomacy, strategic narrative development, and reputation architecture."
                }
              },
              {
                "@type": "Question",
                "name": "Who is Tim Jacobs and what are his credentials?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tim Jacobs is Regional COO of G2 Middle East & Africa and one of the world's foremost advisors on high-stakes government event delivery. He served as Project Director for the State Visit of H.M. Queen Elizabeth II (2010), Papal Mass Abu Dhabi (2019) with 180,000 attendees, COP27 Egypt, Expo 2020 Dubai, and FIFA World Cup Qatar 2022."
                }
              },
              {
                "@type": "Question",
                "name": "What is the Papal Mass Abu Dhabi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Papal Mass in Abu Dhabi (February 5, 2019) was the first-ever Papal Mass on the Arabian Peninsula, with 180,000 attendees. Tim Jacobs of G2 Middle East coordinated all aspects including diplomatic protocol with the Vatican, security, international media strategy, VIP management, and ceremonial planning."
                }
              }
            ]
          }
        ]
      })}}></script>
    </PageLayout>
  )
}
