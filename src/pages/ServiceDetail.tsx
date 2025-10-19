import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

interface ServiceDetailProps {
  slug: string
  title: string
  icon: string
  description: string
  heroImage: string
  heroVideo?: string
  sections?: {
    heading: string
    content: string
    list?: string[]
  }[]
  ctaHeading?: string
  ctaText?: string
  ctaLink?: string
}

export const ServiceDetailPage: FC<ServiceDetailProps> = ({
  slug,
  title,
  icon,
  description,
  heroImage,
  heroVideo,
  sections = [],
  ctaHeading = 'Ready to Begin?',
  ctaText = 'Discuss Your Project',
  ctaLink = '/contact'
}) => {
  
  // Service Schema.org markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "G2 Middle East",
      "url": "https://g2middleast.com"
    },
    "serviceType": title,
    "areaServed": {
      "@type": "Place",
      "name": "Middle East"
    }
  }

  return (
    <PageLayout>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema)
      }} />

      {/* Hero Section */}
      <section class="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Video or Image */}
        <div class="absolute inset-0">
          {heroVideo ? (
            <video
              autoplay
              loop
              muted
              playsinline
              class="w-full h-full object-cover"
              style="pointer-events: none;"
            >
              <source src={heroVideo} type="video/mp4" />
              {/* Fallback to image if video fails to load */}
              <img 
                src={heroImage} 
                alt={title}
                class="w-full h-full object-cover cinematic-img"
              />
            </video>
          ) : (
            <img 
              src={heroImage} 
              alt={title}
              class="w-full h-full object-cover cinematic-img"
            />
          )}
        </div>
        
        {/* Overlay */}
        <div class="absolute inset-0 bg-gradient-to-b from-g2-darker/40 via-g2-darker/60 to-g2-darker/80"></div>
        
        {/* Content */}
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center">
              {/* Service Icon */}
              <div class="text-g2-gold text-5xl mb-6 fade-in">
                <i class={icon}></i>
              </div>
              
              <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6 text-white fade-in-delay-1">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section - Two-line description from Prompt 3.0 */}
      <section class="py-20 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <p class="text-xl md:text-2xl text-gray-300 leading-relaxed text-center">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section key={index} class={`py-16 ${index % 2 === 0 ? 'bg-g2-darker' : 'bg-g2-dark'}`}>
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">
                {section.heading}
              </h2>
              
              <div class="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>{section.content}</p>
                
                {section.list && section.list.length > 0 && (
                  <ul class="space-y-4 mt-8">
                    {section.list.map((item, i) => (
                      <li key={i} class="flex items-start">
                        <span class="text-g2-gold mr-4 mt-1">
                          <i class="fas fa-check-circle"></i>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action Section */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">
              {ctaHeading}
            </h2>
            <p class="text-xl text-gray-300 mb-10 leading-relaxed">
              Let's discuss how G2 Middle East can help you achieve your strategic objectives.
            </p>
            <a href={ctaLink} class="btn-primary text-lg">
              {ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section class="py-20 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <h3 class="text-2xl font-serif font-bold mb-8 text-white text-center">
              Related Services
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/services" class="bg-g2-dark p-6 border border-white/10 hover:border-white/30 transition-all">
                <h4 class="text-white font-semibold mb-2">View All Services</h4>
                <p class="text-gray-400 text-sm">Explore our complete range of strategic solutions</p>
              </a>
              <a href="/projects" class="bg-g2-dark p-6 border border-white/10 hover:border-white/30 transition-all">
                <h4 class="text-white font-semibold mb-2">Case Studies</h4>
                <p class="text-gray-400 text-sm">See how we've delivered results for our clients</p>
              </a>
              <a href="/contact" class="bg-g2-dark p-6 border border-white/10 hover:border-white/30 transition-all">
                <h4 class="text-white font-semibold mb-2">Get in Touch</h4>
                <p class="text-gray-400 text-sm">Start a conversation with our team</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

// Service data configuration - Updated with Prompt 3.0 requirements
export const servicesData = {
  'sovereign-governmental-advisory': {
    slug: 'sovereign-governmental-advisory',
    title: 'Sovereign & Governmental Services',
    icon: 'fas fa-crown',
    description: 'We provide the strategic services that transforms national moments into global milestones. Our work builds perception, strengthens diplomatic ties, and creates enduring sovereign legacies.',
    heroImage: 'https://page.gensparksite.com/v1/base64_upload/490310dce8db54b79c75d271f7e2da9d',
    heroVideo: 'https://page.gensparksite.com/get_upload_url/32e5853f0a0351c1ec3118cafaad9d4591fbce0f6f4c1f2dc986350a0bcfefd3/default/dc11d49e-1e61-497d-8d35-b8f5a051ab42',
    sections: [
      {
        heading: 'Nation Brand Strategy',
        content: 'We develop comprehensive strategic frameworks that define and articulate national competitive advantages, positioning countries for economic growth and diplomatic influence.',
        list: [
          'Strategic positioning and brand architecture for nations',
          'Global perception analysis and competitive benchmarking',
          'Narrative development for international audiences',
          'Integration with economic development and FDI strategies'
        ]
      },
      {
        heading: 'Major Event Leverage',
        content: 'Major international events provide unparalleled opportunities for sovereign entities to demonstrate capabilities and shift global narratives.',
        list: [
          'State visit planning and protocol strategy',
          'International summit and conference architecture',
          'Cultural diplomacy event design',
          'Media strategy and global coverage optimization'
        ]
      }
    ],
    ctaText: 'Discuss Your Strategic Objectives',
    ctaLink: '/contact'
  },
  
  'major-event-architecture': {
    slug: 'major-event-architecture',
    title: 'Major Event Architecture & Delivery',
    icon: 'fas fa-drafting-compass',
    description: 'We are the architects behind the world\'s most complex and significant events. From financial modelling to flawless execution, we deliver experiences on a global scale.',
    heroImage: 'https://page.gensparksite.com/v1/base64_upload/45bd688e2376e6b687a6eae6ea039275',
    heroVideo: 'https://page.gensparksite.com/get_upload_url/32e5853f0a0351c1ec3118cafaad9d4591fbce0f6f4c1f2dc986350a0bcfefd3/default/28eb924c-41ad-48f6-9e00-1d52f5b92c11',
    sections: [
      {
        heading: 'Strategic Event Design',
        content: 'Every element of a major event must serve strategic objectives while creating memorable experiences for diverse stakeholder groups.',
        list: [
          'Strategic objective definition and success metrics',
          'Stakeholder analysis and experience mapping',
          'Protocol and ceremonial architecture',
          'Contingency planning and risk mitigation'
        ]
      },
      {
        heading: 'Operational Excellence',
        content: 'Complex events demand flawless execution across multiple workstreams, vendors, and government agencies.',
        list: [
          'Multi-agency coordination and command structures',
          'Vendor management and quality assurance',
          'Security protocol and emergency response planning',
          'Real-time monitoring and adaptive management'
        ]
      }
    ],
    ctaText: 'Discuss Your Event Vision',
    ctaLink: '/contact'
  },
  
  'global-brand-luxury-experiences': {
    slug: 'global-brand-luxury-experiences',
    title: 'Global Brand & Luxury Targeted Experiences',
    icon: 'fas fa-gem',
    description: 'We craft targeted moments and approaches that elevate the world\'s most iconic brands. Our experiences build cultural capital and engage the most discerning audiences.',
    heroImage: 'https://page.gensparksite.com/v1/base64_upload/e5add6c2d96ac75ffa35a489dcfe9824',
    heroVideo: 'https://page.gensparksite.com/get_upload_url/32e5853f0a0351c1ec3118cafaad9d4591fbce0f6f4c1f2dc986350a0bcfefd3/default/908e3697-880d-4418-bdbb-06e40ad540a5',
    sections: [
      {
        heading: 'Brand Architecture',
        content: 'Strategic frameworks that protect brand essence while enabling growth in competitive luxury markets.',
        list: [
          'Brand positioning and competitive differentiation',
          'Cultural adaptation for Target markets',
          'Heritage storytelling and brand narrative',
          'Sub-brand strategy and portfolio management'
        ]
      },
      {
        heading: 'High-Net-Worth Engagement',
        content: 'Reaching UHNW individuals requires sophisticated, discreet approaches that respect privacy while building desire and want.',
        list: [
          'Invitation-only experience design',
          'VIP relationship program development',
          'Private event and preview strategy',
          'Concierge partnership and integration'
        ]
      }
    ],
    ctaHeading: 'Want to Engage',
    ctaText: 'Elevate Your Brand',
    ctaLink: '/contact'
  },
  
  'strategic-communications-narrative-control': {
    slug: 'strategic-communications-narrative-control',
    title: 'Strategic Communications & Narrative Control',
    icon: 'fas fa-chess-knight',
    description: 'In the modern landscape, the narrative is the ultimate asset. We weave your story, seeding it across digital and physical landscapes to ensure you control the conversation before it even begins.',
    heroImage: 'https://page.gensparksite.com/v1/base64_upload/311cecf05ec57ba82d304a0a2467b54e',
    heroVideo: 'https://page.gensparksite.com/get_upload_url/32e5853f0a0351c1ec3118cafaad9d4591fbce0f6f4c1f2dc986350a0bcfefd3/default/ce516916-aa0a-45e0-a9df-3c072367f9b0',
    sections: [
      {
        heading: 'Narrative Architecture & Media Craft',
        content: 'We design and deploy foundational narratives that shape perception and build lasting authority.',
        list: [
          'Pre-seeding narratives in AI knowledge graphs & search ecosystems',
          'Precision media craft for targeted positioning & influence',
          'Development of core messaging & strategic story arcs',
          'Multi-platform consistency & sovereign voice establishment'
        ]
      },
      {
        heading: 'Narrative & Experiential Amplification',
        content: 'We bring your narrative to life, transforming it from a concept into a tangible reality through powerful, reinforcing experiences.',
        list: [
          'Using major events as platforms for narrative reinforcement',
          'Designing signature moments & experiential touchpoints',
          'Targeted stakeholder & influencer engagement',
          'Real-time landscape analysis for narrative amplification'
        ]
      }
    ],
    ctaText: 'Secure Your Narrative',
    ctaLink: '/contact'
  },
  
  'crisis-reputation-management': {
    slug: 'crisis-reputation-management',
    title: 'Personal Brand & Reputation Positioning',
    icon: 'fas fa-shield-alt',
    description: 'In an era of total transparency, an executive\'s personal brand is their most critical professional asset. We move beyond reactive crisis management to proactively position and manage the digital legacy of leaders, building an unshakeable foundation of authority and influence.',
    heroImage: 'https://page.gensparksite.com/v1/base64_upload/0a3c53c763f4960f984f127689e2ba1c',
    heroVideo: 'https://page.gensparksite.com/get_upload_url/32e5853f0a0351c1ec3118cafaad9d4591fbce0f6f4c1f2dc986350a0bcfefd3/default/b338fb0f-f593-446f-ba04-084e1adf6d84',
    sections: [
      {
        heading: 'Strategic Brand Foundation',
        content: 'We design the core identity and narrative that will define a leader\'s public perception and professional impact.',
        list: [
          'Core Narrative & Value Proposition Development',
          'Defining Thought Leadership Pillars & Expertise',
          'Digital Footprint & SEO Optimisation',
          'Audience Mapping & Ecosystem Analysis'
        ]
      },
      {
        heading: 'Authority Amplification & Management',
        content: 'We execute targeted strategies to elevate a leader\'s profile and manage their reputation across all platforms.',
        list: [
          'Securing Strategic Media & Speaking Opportunities',
          'Targeted Content Placement & Ghostwriting',
          'Proactive Reputation Monitoring & Sentiment Analysis',
          'Stakeholder Engagement & Network Curation'
        ]
      }
    ],
    ctaText: 'Position Your Brand',
    ctaLink: '/contact'
  },
  
  'corporate-shareholder-engagement': {
    slug: 'corporate-shareholder-engagement',
    title: 'Corporate & Shareholder Engagement',
    icon: 'fas fa-chart-line',
    description: 'We design the critical corporate moments that drive alignment and build investor confidence. From AGMs to IPOs, we ensure your message is delivered with precision and impact.',
    heroImage: 'https://page.gensparksite.com/v1/base64_upload/1aa05e202d206907659122ca7fe7ee17',
    sections: [
      {
        heading: 'Corporate Event Strategy',
        content: 'High-stakes corporate moments require careful orchestration to achieve strategic objectives.',
        list: [
          'Annual General Meeting design and execution',
          'IPO roadshow planning and delivery',
          'Investor day event architecture',
          'Shareholder communication programs'
        ]
      },
      {
        heading: 'Shareholder & Investor Relations',
        content: 'Maintaining investor confidence during critical moments is essential to protecting shareholder value.',
        list: [
          'Investor communication and disclosure strategy',
          'Analyst briefing and Q&A preparation',
          'Proxy fight and activist defense',
          'Minority shareholder protection narratives'
        ]
      }
    ],
    ctaText: 'Discuss Your Situation',
    ctaLink: '/contact'
  },
  
  'cultural-diplomacy-placemaking': {
    slug: 'cultural-diplomacy-placemaking',
    title: 'Cultural Diplomacy & Placemaking',
    icon: 'fas fa-dove',
    description: 'We believe culture is the ultimate currency of influence. Our events build international soft power, define a location\'s identity, and create a lasting sense of place.',
    heroImage: 'https://page.gensparksite.com/v1/base64_upload/562f2d46e870319cbf81a3ec74afe5aa',
    heroVideo: '/static/cultural-diplomacy-hero-optimized.mp4',
    sections: [
      {
        heading: 'Cultural Strategy',
        content: 'Culture provides unique opportunities to build international influence and shape perception.',
        list: [
          'Cultural asset identification and leverage',
          'International cultural exchange programs',
          'Heritage activation and storytelling',
          'Creative industries development support'
        ]
      },
      {
        heading: 'Placemaking & Destination Identity',
        content: 'Defining a location\'s unique identity and building global awareness drives tourism and investment.',
        list: [
          'Destination brand strategy and architecture',
          'Cultural event series design and delivery',
          'Public space activation and programming',
          'Community engagement and local buy-in'
        ]
      }
    ],
    ctaText: 'Build Cultural Influence',
    ctaLink: '/contact'
  },
  
  'experience-design-immersive-targeting': {
    slug: 'experience-design-immersive-targeting',
    title: 'Experience Design & Immersive Targeting',
    icon: 'fas fa-eye',
    description: 'This is the intersection of art and engineering where engagement is forged. We use cutting-edge design and immersive experiences to captivate and influence specific, high-value audiences.',
    heroImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80',
    sections: [
      {
        heading: 'Immersive Experience Design',
        content: 'Creating experiences that fully engage audiences requires sophisticated design and flawless technical execution.',
        list: [
          'Interactive installation design and development',
          'Multi-sensory experience architecture',
          'Spatial computing and AR/VR integration',
          'Real-time personalization and adaptation'
        ]
      },
      {
        heading: 'Targeted Audience Engagement',
        content: 'Reaching specific high-value audiences requires precision targeting and bespoke experience design.',
        list: [
          'Audience segmentation and profiling',
          'Personalized experience pathways',
          'Data capture and behavioral analytics',
          'Follow-up engagement and nurture programs'
        ]
      }
    ],
    ctaText: 'Design Your Experience',
    ctaLink: '/contact'
  },
  
  'approach-modelling-roi': {
    slug: 'approach-modelling-roi',
    title: 'Approach Modelling & ROI',
    icon: 'fas fa-balance-scale',
    description: 'We provide the C-suite level justification that connects vision to value. Our models forecast the tangible and intangible returns that prove the power of strategic experience.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
    sections: [
      {
        heading: 'Financial Modelling',
        content: 'Sophisticated financial analysis provides the foundation for strategic decision-making.',
        list: [
          'Comprehensive cost modelling and budgeting',
          'Revenue projection and scenario analysis',
          'Risk assessment and mitigation planning',
          'Sensitivity analysis and stress testing'
        ]
      },
      {
        heading: 'Value Measurement',
        content: 'Measuring both tangible and intangible returns demonstrates the full value of strategic experiences.',
        list: [
          'KPI definition and measurement frameworks',
          'Brand value and reputation tracking',
          'Media value and coverage analysis',
          'Long-term impact assessment'
        ]
      }
    ],
    ctaText: 'Model Your ROI',
    ctaLink: '/contact'
  }
}
