import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

interface ServiceDetailProps {
  slug: string
  title: string
  subtitle: string
  heroImage: string
  description: string
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
  subtitle,
  heroImage,
  description,
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
              <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6 text-white fade-in">
                {title}
              </h1>
              <p class="text-xl md:text-2xl text-gray-300 font-light fade-in-delay-1">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section class="py-20 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <p class="text-xl text-gray-300 leading-relaxed">
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

// Service data configuration
export const servicesData = {
  'sovereign-governmental-advisory': {
    slug: 'sovereign-governmental-advisory',
    title: 'Sovereign & Governmental Advisory',
    subtitle: 'Strategic counsel for nations shaping global perception',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    description: 'G2 Middle East provides strategic counsel to nations and governments on using major events, diplomatic initiatives, and targeted communications to shape global perception, enhance diplomatic relations, and attract foreign direct investment.',
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
      },
      {
        heading: 'Diplomatic Communications',
        content: 'We craft sophisticated communication strategies that support diplomatic objectives and strengthen bilateral relationships.',
        list: [
          'Strategic messaging for government leadership',
          'International stakeholder engagement programs',
          'Crisis communication for diplomatic incidents',
          'Multi-channel narrative deployment'
        ]
      }
    ],
    ctaText: 'Discuss Your Strategic Objectives',
    ctaLink: '/contact'
  },
  
  'mega-event-architecture': {
    slug: 'mega-event-architecture',
    title: 'Mega-Event Architecture',
    subtitle: 'State-visit level event delivery and strategic planning',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
    description: 'Drawing on experience delivering some of the world\'s most complex events—from papal masses to royal state visits—we architect experiences that achieve strategic objectives while managing intricate logistics, protocol, and stakeholder expectations.',
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
      },
      {
        heading: 'Legacy & Impact',
        content: 'Major events must deliver lasting value beyond the event itself, supporting long-term strategic objectives.',
        list: [
          'Media strategy and global coverage amplification',
          'Post-event narrative and reputation tracking',
          'Economic impact measurement and reporting',
          'Knowledge transfer and capability building'
        ]
      }
    ],
    ctaText: 'Discuss Your Event Vision',
    ctaLink: '/contact'
  },
  
  'narrative-warfare-pre-seeding': {
    slug: 'narrative-warfare-pre-seeding',
    title: 'Narrative Warfare & Pre-Seeding',
    subtitle: 'AI-driven narrative strategy and LLM optimization',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    description: 'In an era where AI models shape perception, we help organizations win before conflicts begin by strategically pre-seeding narratives within search engines, knowledge graphs, and large language models.',
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
      },
      {
        heading: 'Crisis Narrative Defense',
        content: 'Establish defensive narratives before crises occur, ensuring AI models have accurate context when challenges arise.',
        list: [
          'Vulnerability assessment and narrative gaps',
          'Defensive content creation and distribution',
          'Real-time narrative monitoring and response',
          'Post-crisis narrative rehabilitation'
        ]
      }
    ],
    ctaText: 'Secure Your Narrative',
    ctaLink: '/contact'
  },
  
  'luxury-brand-positioning': {
    slug: 'luxury-brand-positioning',
    title: 'Luxury Brand Positioning',
    subtitle: 'Premium brand architecture for discerning markets',
    heroImage: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1920&q=80',
    description: 'We elevate luxury brands through sophisticated narrative architecture, cultural intelligence, and experience design that resonates with high-net-worth audiences in the Middle East and globally.',
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
      },
      {
        heading: 'Market Entry Strategy',
        content: 'Successfully entering Middle Eastern luxury markets requires cultural intelligence, local partnerships, and sophisticated positioning.',
        list: [
          'Market analysis and opportunity assessment',
          'Distribution strategy and partner selection',
          'Launch strategy and phased market entry',
          'Local influencer and celebrity partnerships'
        ]
      }
    ],
    ctaText: 'Elevate Your Brand',
    ctaLink: '/contact'
  },
  
  'crisis-communications': {
    slug: 'crisis-communications',
    title: 'Crisis Communications',
    subtitle: 'Rapid response and reputation protection',
    heroImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80',
    description: 'When reputation is at stake, speed and precision matter. We provide 24/7 crisis response, strategic counsel, and rapid deployment of coordinated communication strategies that protect reputation and maintain stakeholder confidence.',
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
      },
      {
        heading: 'Recovery & Rehabilitation',
        content: 'After the immediate crisis, strategic work continues to rebuild reputation and restore confidence.',
        list: [
          'Post-crisis narrative strategy',
          'Reputation tracking and sentiment analysis',
          'Corrective action communication',
          'Long-term brand rehabilitation programs'
        ]
      }
    ],
    ctaText: 'Prepare Your Response',
    ctaLink: '/contact'
  },
  
  'corporate-governance-disputes': {
    slug: 'corporate-governance-disputes',
    title: 'Corporate Governance Disputes',
    subtitle: 'Strategic communications for high-stakes conflicts',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80',
    description: 'High-stakes governance disputes require sophisticated communication strategies that support legal objectives while protecting reputation. We provide strategic counsel for shareholder disputes, M&A conflicts, and corporate governance challenges.',
    sections: [
      {
        heading: 'Dispute Communication Strategy',
        content: 'Governance disputes require careful coordination between legal strategy and public narrative.',
        list: [
          'Strategic narrative development aligned with legal strategy',
          'Stakeholder analysis and communication planning',
          'Media strategy and controlled information flow',
          'Crisis communication readiness'
        ]
      },
      {
        heading: 'Shareholder & Investor Relations',
        content: 'Maintaining investor confidence during disputes is critical to protecting shareholder value.',
        list: [
          'Investor communication and disclosure strategy',
          'Analyst briefing and Q&A preparation',
          'Proxy fight and activist defense',
          'Minority shareholder protection narratives'
        ]
      },
      {
        heading: 'Regulatory & Legal Support',
        content: 'Our communication strategies complement legal approaches while managing regulatory requirements.',
        list: [
          'Regulatory compliance and disclosure management',
          'Multi-jurisdictional communication coordination',
          'Expert witness and testimony preparation',
          'Settlement communication and transition planning'
        ]
      }
    ],
    ctaText: 'Discuss Your Situation',
    ctaLink: '/contact'
  },
  
  'fdi-strategy-political-positioning': {
    slug: 'fdi-strategy-political-positioning',
    title: 'FDI Strategy & Political Positioning',
    subtitle: 'Foreign investment strategy and political advisory',
    heroImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920&q=80',
    description: 'We help nations and organizations attract foreign direct investment through strategic positioning, stakeholder engagement, and targeted communication that demonstrates investment readiness and competitive advantage.',
    sections: [
      {
        heading: 'Investment Attraction Strategy',
        content: 'Attracting quality FDI requires clear value propositions, credible narratives, and sustained engagement with target investors.',
        list: [
          'Investment opportunity identification and packaging',
          'Competitive positioning and differentiation',
          'Investor roadshow planning and execution',
          'Follow-up engagement and relationship building'
        ]
      },
      {
        heading: 'Political Risk Advisory',
        content: 'Understanding and mitigating political risk is essential for successful international operations.',
        list: [
          'Political landscape analysis and monitoring',
          'Government relations strategy',
          'Regulatory navigation and compliance support',
          'Crisis response and contingency planning'
        ]
      },
      {
        heading: 'Economic Diplomacy',
        content: 'We support governments in leveraging diplomatic relationships to advance economic objectives.',
        list: [
          'Trade mission planning and execution',
          'Bilateral economic relationship development',
          'Public-private partnership facilitation',
          'International organization engagement'
        ]
      }
    ],
    ctaText: 'Explore Investment Opportunities',
    ctaLink: '/contact'
  },
  
  'stakeholder-alignment': {
    slug: 'stakeholder-alignment',
    title: 'Stakeholder Alignment',
    subtitle: 'Complex stakeholder ecosystem management',
    heroImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80',
    description: 'Complex initiatives require alignment across diverse stakeholder groups with competing interests. We develop strategic frameworks and communication programs that build consensus and drive coordinated action.',
    sections: [
      {
        heading: 'Stakeholder Mapping & Analysis',
        content: 'Understanding stakeholder landscapes is the foundation for effective engagement strategies.',
        list: [
          'Comprehensive stakeholder identification and mapping',
          'Interest and influence analysis',
          'Coalition building opportunity assessment',
          'Opposition identification and mitigation planning'
        ]
      },
      {
        heading: 'Engagement Strategy Development',
        content: 'Different stakeholders require tailored approaches based on their interests, influence, and preferred communication channels.',
        list: [
          'Segmented communication strategy development',
          'Key message development by stakeholder group',
          'Channel strategy and engagement planning',
          'Feedback mechanisms and adaptive management'
        ]
      },
      {
        heading: 'Consensus Building',
        content: 'Moving stakeholders from awareness to alignment requires sustained engagement and strategic negotiation.',
        list: [
          'Facilitation of multi-stakeholder dialogue',
          'Common ground identification and leverage',
          'Compromise framework development',
          'Implementation planning and monitoring'
        ]
      }
    ],
    ctaText: 'Align Your Stakeholders',
    ctaLink: '/contact'
  },
  
  'market-entry-strategy': {
    slug: 'market-entry-strategy',
    title: 'Market Entry Strategy',
    subtitle: 'Strategic roadmaps for Middle East expansion',
    heroImage: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1920&q=80',
    description: 'Entering Middle Eastern markets requires cultural intelligence, strategic partnerships, and sophisticated positioning. We provide end-to-end support for organizations seeking to establish or expand operations in the region.',
    sections: [
      {
        heading: 'Market Analysis & Strategy',
        content: 'Successful market entry begins with thorough analysis and clear strategic direction.',
        list: [
          'Market opportunity assessment and sizing',
          'Competitive landscape analysis',
          'Regulatory and legal environment review',
          'Cultural considerations and adaptation requirements'
        ]
      },
      {
        heading: 'Partnership & Distribution',
        content: 'Selecting the right partners and distribution approaches is critical to market entry success.',
        list: [
          'Partner identification and evaluation',
          'Negotiation strategy and support',
          'Distribution channel strategy',
          'Franchise and licensing model development'
        ]
      },
      {
        heading: 'Launch & Market Development',
        content: 'Strategic launch planning and sustained market development efforts drive long-term success.',
        list: [
          'Phased market entry planning',
          'Brand positioning and launch campaigns',
          'Local team building and capability development',
          'Performance monitoring and optimization'
        ]
      }
    ],
    ctaText: 'Plan Your Market Entry',
    ctaLink: '/contact'
  }
}
