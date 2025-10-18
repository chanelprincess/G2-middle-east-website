import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

interface ServiceDetailProps {
  slug: string
  title: string
  icon: string
  description: string
  heroImage: string
  sections?: {
    heading: string
    content: string
    list?: string[]
  }[]
  ctaText?: string
  ctaLink?: string
}

export const ServiceDetailPage: FC<ServiceDetailProps> = ({
  slug,
  title,
  icon,
  description,
  heroImage,
  sections = [],
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
        {/* Background Image */}
        <div class="absolute inset-0">
          <img 
            src={heroImage} 
            alt={title}
            class="w-full h-full object-cover cinematic-img"
          />
        </div>
        
        {/* Overlay */}
        <div class="absolute inset-0 bg-gradient-to-b from-g2-darker/60 via-g2-darker/80 to-g2-darker"></div>
        
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
              Ready to Begin?
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
    description: 'We provide the strategic counsel that transforms national moments into global milestones. Our work architects perception, strengthens diplomatic ties, and builds enduring sovereign legacies.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
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
    title: 'Global Brand & Luxury Experiences',
    icon: 'fas fa-gem',
    description: 'We craft the rare and resonant moments that elevate the world\'s most iconic brands. Our experiences build cultural capital and engage the most discerning audiences.',
    heroImage: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1920&q=80',
    sections: [
      {
        heading: 'Brand Architecture',
        content: 'Strategic frameworks that protect brand essence while enabling growth in competitive luxury markets.',
        list: [
          'Brand positioning and competitive differentiation',
          'Cultural adaptation for Middle Eastern markets',
          'Heritage storytelling and brand narrative',
          'Sub-brand strategy and portfolio management'
        ]
      },
      {
        heading: 'High-Net-Worth Engagement',
        content: 'Reaching ultra-high-net-worth individuals requires sophisticated, discreet approaches that respect privacy while building desire.',
        list: [
          'Invitation-only experience design',
          'VIP relationship program development',
          'Private event and preview strategy',
          'Concierge partnership and integration'
        ]
      }
    ],
    ctaText: 'Elevate Your Brand',
    ctaLink: '/contact'
  },
  
  'strategic-communications-narrative-control': {
    slug: 'strategic-communications-narrative-control',
    title: 'Strategic Communications & Narrative Control',
    icon: 'fas fa-chess-knight',
    description: 'In the modern landscape, the narrative is the asset. We integrate sophisticated messaging into every experience, ensuring you control the story before it\'s told.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    sections: [
      {
        heading: 'Strategic Narrative Pre-Seeding',
        content: 'Control the information landscape before challenges emerge by establishing authoritative narratives in AI training data and search results.',
        list: [
          'LLM and knowledge graph optimization',
          'Strategic content architecture for AI consumption',
          'Schema markup and entity recognition',
          'Authoritative source establishment'
        ]
      },
      {
        heading: 'Proactive Reputation Management',
        content: 'Shape how AI models and search engines present your organization, leadership, and key initiatives.',
        list: [
          'Search engine results page (SERP) optimization',
          'Question-answer format content development',
          'Multi-platform narrative consistency',
          'Competitor narrative monitoring'
        ]
      }
    ],
    ctaText: 'Secure Your Narrative',
    ctaLink: '/contact'
  },
  
  'crisis-reputation-management': {
    slug: 'crisis-reputation-management',
    title: 'Crisis & Reputation Management',
    icon: 'fas fa-shield-alt',
    description: 'When reputation is on the line, a strategic experience is the most powerful response. We deploy live and digital events to rebuild trust and reclaim the narrative.',
    heroImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80',
    sections: [
      {
        heading: 'Rapid Response',
        content: 'Crisis situations demand immediate action with clear strategic direction.',
        list: [
          '24/7 crisis response team activation',
          'Rapid situation assessment and strategy development',
          'Spokesperson preparation and media training',
          'Multi-channel message deployment'
        ]
      },
      {
        heading: 'Stakeholder Management',
        content: 'Different stakeholder groups require tailored approaches during crisis situations.',
        list: [
          'Employee communication and internal alignment',
          'Customer and client relationship protection',
          'Regulatory and government relations',
          'Media engagement and narrative control'
        ]
      }
    ],
    ctaText: 'Prepare Your Response',
    ctaLink: '/contact'
  },
  
  'corporate-shareholder-engagement': {
    slug: 'corporate-shareholder-engagement',
    title: 'Corporate & Shareholder Engagement',
    icon: 'fas fa-chart-line',
    description: 'We design the critical corporate moments that drive alignment and build investor confidence. From AGMs to IPOs, we ensure your message is delivered with precision and impact.',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80',
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
