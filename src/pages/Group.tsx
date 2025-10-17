import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

export const GroupPage: FC = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section class="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div class="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
            alt="Global Communications Network"
            class="w-full h-full object-cover grayscale"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-g2-darker/70 via-g2-darker/80 to-g2-darker"></div>
        </div>
        
        <div class="relative h-full container mx-auto px-6 flex items-center">
          <div class="max-w-4xl">
            <h1 class="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Casta Diva Group: A Global Communications Powerhouse
            </h1>
            <p class="text-2xl text-g2-gold font-light">
              Architecting narratives, producing content, and delivering experiences that shape perception 
              for the world's leading brands and institutions.
            </p>
          </div>
        </div>
      </section>

      {/* G2's Role Section */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
              G2: The Apex of Strategic Advisory
            </h2>
            <div class="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                Within Casta Diva Group, G2 Middle East serves as the specialised division for high-stakes 
                strategic advisory, governmental affairs, and sovereign event architecture. We operate at the 
                intersection of policy, finance, and diplomacy, leveraging the Group's global creative and 
                production capabilities to deliver outcomes with unparalleled impact for our clients in 
                government and the C-suite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              Core Capabilities
            </h2>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Column 1: Live & Digital Communication */}
              <div class="bg-g2-dark p-10 rounded-lg border border-white/10">
                <div class="text-g2-gold text-4xl mb-6">
                  <i class="fas fa-globe"></i>
                </div>
                <h3 class="text-3xl font-bold text-white mb-6">
                  Live & Digital Communication
                </h3>
                <p class="text-gray-300 text-lg leading-relaxed mb-8">
                  The design and execution of high-impact live and digital experiences. This includes major 
                  corporate events, state-level ceremonies, product launches, international conventions, and 
                  bespoke VIP engagements. The Group possesses specialised expertise in:
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span class="text-gray-300">Medical & Scientific Congresses</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span class="text-gray-300">Luxury Brand Experiences</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span class="text-gray-300">Art Shows & Cultural Ceremonies</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span class="text-gray-300">Gen Z Strategic Communication</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: Creative Content Production */}
              <div class="bg-g2-dark p-10 rounded-lg border border-white/10">
                <div class="text-g2-gold text-4xl mb-6">
                  <i class="fas fa-video"></i>
                </div>
                <h3 class="text-3xl font-bold text-white mb-6">
                  Creative Content Production
                </h3>
                <p class="text-gray-300 text-lg leading-relaxed mb-8">
                  The creation of compelling, narrative-driven content for global audiences. The Group is a 
                  world leader in producing branded content, advertising films, television programming, and 
                  corporate videos, serving over 100 of the world's top brands.
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span class="text-gray-300">Branded Content, Cinema & TV</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span class="text-gray-300">Advertising Film Production</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span class="text-gray-300">Corporate & Digital Video</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span class="text-gray-300">Music & Entertainment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              Our Global Network
            </h2>

            {/* Interactive Global Map - Same as landing page */}
            <div class="relative mb-12">
              <div class="aspect-[2/1] bg-[#1a1a1a] rounded-lg overflow-hidden relative border border-white/10">
                {/* World Map SVG Background */}
                <div class="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg viewBox="0 0 1000 500" class="w-full h-full" style="filter: brightness(0.6);">
                    <path d="M 100,150 L 200,120 L 250,140 L 280,130 L 300,150 L 280,170 L 250,160 L 200,180 L 100,150 Z" fill="#B89A6A" opacity="0.3"/>
                    <path d="M 350,180 L 450,160 L 500,180 L 480,200 L 450,190 L 400,210 L 350,180 Z" fill="#B89A6A" opacity="0.3"/>
                    <path d="M 550,200 L 650,180 L 700,200 L 680,230 L 630,240 L 580,220 L 550,200 Z" fill="#B89A6A" opacity="0.3"/>
                    <path d="M 150,300 L 200,280 L 250,290 L 240,320 L 200,330 L 150,310 L 150,300 Z" fill="#B89A6A" opacity="0.3"/>
                    <path d="M 600,150 L 700,140 L 750,160 L 730,180 L 680,170 L 630,160 L 600,150 Z" fill="#B89A6A" opacity="0.3"/>
                  </svg>
                </div>

                {/* Global Network Cities - Positioned on Map */}
                <div class="absolute inset-0">
                  {/* Europe */}
                  <div class="city-marker" style="left: 48%; top: 35%;" data-city="Milan (Global HQ)">
                    <div class="w-4 h-4 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>
                  <div class="city-marker" style="left: 47%; top: 32%;" data-city="London">
                    <div class="w-3 h-3 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>
                  <div class="city-marker" style="left: 49%; top: 38%;" data-city="Rome">
                    <div class="w-3 h-3 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>
                  <div class="city-marker" style="left: 51%; top: 34%;" data-city="Prague">
                    <div class="w-3 h-3 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>
                  <div class="city-marker" style="left: 54%; top: 38%;" data-city="Istanbul">
                    <div class="w-3 h-3 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>

                  {/* Middle East */}
                  <div class="city-marker" style="left: 58%; top: 48%;" data-city="Abu Dhabi (Regional HQ)">
                    <div class="w-4 h-4 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>
                  <div class="city-marker" style="left: 57%; top: 46%;" data-city="Riyadh">
                    <div class="w-3 h-3 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>
                  <div class="city-marker" style="left: 58%; top: 50%;" data-city="Bahrain">
                    <div class="w-3 h-3 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>
                  <div class="city-marker" style="left: 55%; top: 43%;" data-city="Beirut">
                    <div class="w-3 h-3 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>

                  {/* Americas */}
                  <div class="city-marker" style="left: 22%; top: 38%;" data-city="New York">
                    <div class="w-3 h-3 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>
                  <div class="city-marker" style="left: 15%; top: 40%;" data-city="Los Angeles">
                    <div class="w-3 h-3 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>
                  <div class="city-marker" style="left: 28%; top: 68%;" data-city="Buenos Aires">
                    <div class="w-3 h-3 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>
                  <div class="city-marker" style="left: 30%; top: 70%;" data-city="Montevideo">
                    <div class="w-3 h-3 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>

                  {/* Asia */}
                  <div class="city-marker" style="left: 72%; top: 42%;" data-city="Shanghai">
                    <div class="w-3 h-3 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>

                  {/* Africa */}
                  <div class="city-marker" style="left: 52%; top: 75%;" data-city="Cape Town">
                    <div class="w-3 h-3 bg-g2-gold rounded-full pulse-marker"></div>
                  </div>
                </div>

                {/* Hover Tooltip */}
                <div id="city-tooltip-group" class="absolute hidden bg-g2-dark border border-g2-gold px-4 py-2 rounded text-white text-sm pointer-events-none z-50">
                  <span id="city-name-group"></span>
                </div>
              </div>

              {/* City Listing */}
              <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 class="text-g2-gold font-semibold text-lg mb-4">Europe</h4>
                  <ul class="text-gray-300 space-y-2">
                    <li>Milan (Global HQ)</li>
                    <li>London</li>
                    <li>Rome</li>
                    <li>Prague</li>
                    <li>Istanbul</li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-g2-gold font-semibold text-lg mb-4">Middle East & Africa</h4>
                  <ul class="text-gray-300 space-y-2">
                    <li>Abu Dhabi (Regional HQ)</li>
                    <li>Riyadh</li>
                    <li>Bahrain</li>
                    <li>Beirut</li>
                    <li>Cape Town</li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-g2-gold font-semibold text-lg mb-4">The Americas & Asia</h4>
                  <ul class="text-gray-300 space-y-2">
                    <li>New York</li>
                    <li>Los Angeles</li>
                    <li>Buenos Aires</li>
                    <li>Montevideo</li>
                    <li>Shanghai</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Engage Our Global Team?
            </h2>
            <p class="text-xl text-gray-300 mb-12">
              From strategic counsel to full-scale execution, we bring the resources of a global network 
              to every engagement.
            </p>
            <a href="/contact" class="inline-flex items-center px-10 py-5 bg-g2-gold text-g2-darker font-bold text-lg rounded hover:bg-white transition-colors duration-300">
              Engage Our Global Team
              <i class="fas fa-arrow-right ml-4"></i>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
