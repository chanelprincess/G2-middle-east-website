import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

export const TeamPage: FC = () => {
  // Schema.org Person markup for Tim Jacobs
  const timJacobsSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tim Jacobs",
    "jobTitle": "Founder & Strategic Director",
    "worksFor": {
      "@type": "Organization",
      "name": "G-2 Middle East"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "KTS Global"
    },
    "description": "Strategic communications expert specializing in sovereign branding and luxury positioning in Middle Eastern markets"
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
                    <p class="text-g2-gold font-semibold">Founder & Strategic Director</p>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div class="mt-6 space-y-3">
                  <a href="mailto:tim.jacobs@g2-middleeast.com" class="flex items-center text-gray-300 hover:text-g2-gold transition-colors">
                    <i class="fas fa-envelope mr-3"></i>
                    <span class="text-sm">tim.jacobs@g2-middleeast.com</span>
                  </a>
                  <a href="#" class="flex items-center text-gray-300 hover:text-g2-gold transition-colors">
                    <i class="fab fa-linkedin mr-3"></i>
                    <span class="text-sm">LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* Bio Content */}
              <div class="lg:col-span-2">
                <div class="space-y-6 text-gray-300 leading-relaxed">
                  <p class="text-xl text-white font-light">
                    Tim Jacobs founded G-2 Middle East to bring world-class strategic communications 
                    capabilities to the region's most ambitious organizations.
                  </p>
                  
                  <p>
                    With over 15 years of experience navigating high-stakes communication challenges 
                    for sovereign entities, luxury brands, and global enterprises, Tim specializes in 
                    architecting narratives that create measurable competitive advantage.
                  </p>
                  
                  <p>
                    Before founding G-2, Tim was a senior partner at <strong class="text-white">KTS Global</strong>, 
                    where he led major nation branding initiatives and luxury positioning strategies across 
                    emerging markets. His work has shaped perception and policy for government entities, 
                    Fortune 500 companies, and ultra-high-net-worth individuals.
                  </p>
                  
                  <div class="bg-g2-darker p-6 rounded-lg border-l-4 border-g2-gold my-8">
                    <p class="text-white italic">
                      "The harder the brief, the more focused we become. Complexity is where we thrive—
                      turning ambiguity into momentum and risk into opportunity."
                    </p>
                  </div>
                  
                  <p>
                    Tim's regional expertise spans the GCC, with deep networks across government, 
                    business, and cultural institutions. He brings a unique combination of strategic 
                    rigor and cultural intelligence to every engagement.
                  </p>

                  {/* Expertise Areas */}
                  <div class="mt-8">
                    <h3 class="text-2xl font-bold text-white mb-4">Areas of Expertise</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>Sovereign & Nation Branding</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>Luxury Brand Positioning</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>Crisis Communications</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>Stakeholder Alignment</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>Regional Market Entry</span>
                      </div>
                      <div class="flex items-start">
                        <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                        <span>Experience Architecture</span>
                      </div>
                    </div>
                  </div>

                  {/* Education & Recognition */}
                  <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 class="text-lg font-bold text-white mb-3">Education</h4>
                      <ul class="space-y-2 text-sm">
                        <li class="flex items-start">
                          <i class="fas fa-graduation-cap text-g2-gold mr-2 mt-1"></i>
                          <span>MBA, Strategic Management</span>
                        </li>
                        <li class="flex items-start">
                          <i class="fas fa-graduation-cap text-g2-gold mr-2 mt-1"></i>
                          <span>BA, International Relations</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="text-lg font-bold text-white mb-3">Recognition</h4>
                      <ul class="space-y-2 text-sm">
                        <li class="flex items-start">
                          <i class="fas fa-award text-g2-gold mr-2 mt-1"></i>
                          <span>Campaign Middle East 40 Under 40</span>
                        </li>
                        <li class="flex items-start">
                          <i class="fas fa-award text-g2-gold mr-2 mt-1"></i>
                          <span>PRovoke MENA Consultancy of the Year</span>
                        </li>
                      </ul>
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
