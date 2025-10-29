import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

interface TeamDetailProps {
  slug: string
  name: string
  jobTitle: string
  image: string
  linkedIn?: string
  email?: string
  description: string
  quote: string
  expertise: string[]
  projects: {
    title: string
    description: string
  }[]
  customSchema?: any
}

export const TeamDetailPage: FC<TeamDetailProps> = ({
  slug,
  name,
  jobTitle,
  image,
  linkedIn,
  email,
  description,
  quote,
  expertise,
  projects,
  customSchema
}) => {
  // Schema.org Person markup - use custom schema if provided, otherwise generate default
  const personSchema = customSchema || {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "image": image,
    ...(email && { "email": email }),
    ...(linkedIn && { "sameAs": [linkedIn] }),
    "worksFor": {
      "@type": "Organization",
      "name": "G2 Middle East & Africa",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Casta Diva Group"
      }
    },
    "knowsAbout": expertise
  }

  return (
    <PageLayout>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema)
      }} />

      {/* Hero Section */}
      <section class="relative py-32 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <a href="/team" class="inline-flex items-center text-g2-gold hover:underline mb-8">
              <i class="fas fa-arrow-left mr-2"></i>
              Back to Team
            </a>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Image */}
              <div class="lg:col-span-1">
                <div class="relative">
                  <img 
                    src={image}
                    alt={name}
                    class="rounded-lg shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                    <h1 class="text-2xl font-bold text-white">{name}</h1>
                    <p class="text-g2-gold font-semibold">{jobTitle}</p>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div class="mt-6 space-y-3">
                  {email && (
                    <a href={`mailto:${email}`} class="flex items-center text-gray-300 hover:text-g2-gold transition-colors">
                      <i class="fas fa-envelope mr-3"></i>
                      <span class="text-sm">{email}</span>
                    </a>
                  )}
                  {linkedIn && (
                    <a href={linkedIn} target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-300 hover:text-g2-gold transition-colors">
                      <i class="fab fa-linkedin mr-3"></i>
                      <span class="text-sm">LinkedIn Profile</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Bio Content */}
              <div class="lg:col-span-2">
                <div class="space-y-6 text-gray-300 leading-relaxed">
                  {/* Main Description */}
                  <div 
                    class="text-lg"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  
                  {/* Quote */}
                  {quote && (
                    <div class="bg-g2-darker p-6 rounded-lg border-l-4 border-g2-gold my-8">
                      <p class="text-white italic">{quote}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section class="py-20 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-white mb-8 text-center">Core Expertise</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {expertise.map((item, index) => (
                <div key={index} class="flex items-start bg-g2-darker/50 p-4 rounded">
                  <i class="fas fa-check text-g2-gold mr-3 mt-1 flex-shrink-0"></i>
                  <span class="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notable Projects */}
      <section class="py-20 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-white mb-8 text-center">Notable Projects</h2>
            <div class="space-y-4">
              {projects.map((project, index) => (
                <div key={index} class="bg-g2-dark p-6 rounded border-l-4 border-g2-gold">
                  <h3 class="text-white font-semibold text-lg mb-2">{project.title}</h3>
                  <p class="text-gray-400">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-6">
              Ready to discuss your project?
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Connect with our team to explore how we can help you achieve your strategic objectives.
            </p>
            <a href="/contact" class="btn-primary text-lg">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

// Executive biographical data
export const teamData = {
  'tim-jacobs': {
    slug: 'tim-jacobs',
    name: 'Tim Jacobs',
    jobTitle: 'Regional Chief Operating Officer (COO), Middle East & Africa',
    photo: 'https://page.gensparksite.com/v1/base64_upload/47f1fb52041f3aa63094cf290ce9f36b',
    image: 'https://page.gensparksite.com/v1/base64_upload/47f1fb52041f3aa63094cf290ce9f36b',
    linkedIn: 'https://www.linkedin.com/in/tim-jacobs-6673091a',
    email: 'tim@g2middleeast.com',
    description: `
      <p class="text-xl text-white font-light mb-4">
        Tim Jacobs is one of the world's foremost advisors on the delivery of complex, high-stakes government initiatives. 
        His career is defined by the operational execution of projects with profound geopolitical significance.
      </p>
      <p class="mb-4">
        As <strong class="text-white">Regional Chief Operating Officer (COO)</strong> for G2 Middle East & Africa, 
        he provides strategic counsel to governments on cognitive security, counter-disinformation strategy, and building 
        sovereign reputation architecture—the core disciplines required to navigate the complexities of the modern global stage.
      </p>
      <p class="mb-4">
        His career encompasses some of the world's most prestigious and complex projects. He was instrumental 
        in delivering the <strong class="text-white">State Visit of Queen Elizabeth II to the UAE</strong>, 
        the <strong class="text-white">Papal Mass of Pope Francis in Abu Dhabi</strong> (180,000 attendees), and providing 
        strategic advisory for the <strong class="text-white">2019 Special Olympics World Games</strong>.
      </p>
      <p class="mb-4">
        A leading authority on <strong class="text-white">public diplomacy and sovereign-level advisory</strong>, Tim specializes in 
        cognitive security, national resilience, and strategic communications for governments. His expertise encompasses state-visit level 
        planning, geopolitical risk assessment, counter-disinformation strategy, and complex cross-border government relations.
      </p>
      <p>
        With operational direction over 30+ globally significant government and sovereign-level projects, Tim has advised heads of state, 
        royal families, and government ministries across the Middle East and Africa on strategic narrative development, geopolitical risk 
        assessment, and the delivery of mega-events including state visits, royal visits, presidential visits, international summits, 
        Olympic events, World Economic Forum gatherings, UN Climate Conferences (COP), G20 and G7 summits, film festival productions, 
        and museum launches.
      </p>
    `,
    quote: 'The harder the brief, the more focused we become. Complexity is where we thrive—turning ambiguity into momentum and risk into opportunity.',
    expertise: [
      'Cognitive Security & Counter-Disinformation Strategy',
      'National Reputation & International Standing',
      'Sovereign Reputation Architecture',
      'National Resilience & Critical Incident Strategy',
      'Geopolitical Risk & Strategic Partnership Vetting',
      'Public Diplomacy & Strategic Narrative',
      'State Visit Planning & Protocol Execution',
      'Royal Visit Coordination & Logistics',
      'Presidential Visit Management',
      'Major Event Architecture',
      'Operational Delivery for Sovereign Clients',
      'Cross-Border Government Relations',
      'Protocol & Diplomatic Operations',
      'Cultural Diplomacy Event Production',
      'National Day Celebrations & Ceremonial Events',
      'International Summit Logistics & Coordination',
      'Head-of-State Event Management',
      'Mega-Event Architecture & Operational Excellence',
      'Venue Infrastructure & Overlay Planning',
      'Olympic & Major Sporting Events Management',
      'World Economic Forum & Global Summit Coordination',
      'UN Climate Conference (COP) Logistics',
      'G20 & G7 Summit Infrastructure',
      'Film Festival Production & Management',
      'Museum Launch & Cultural Exhibition Direction',
      'Sovereign Positioning Strategy',
      'Foreign Direct Investment (FDI) Advisory',
      'Strategic Roadmapping for National Initiatives'
    ],
    projects: [
      {
        title: 'Papal Mass Abu Dhabi 2019',
        description: 'Executive Producer for the historic Papal Mass delivered by Pope Francis - 180,000 attendees, largest religious gathering in Middle East history. The "71-hour miracle" transformation of Zayed Sports City Stadium.'
      },
      {
        title: 'State Visit of Queen Elizabeth II to UAE 2010',
        description: 'Project Director for the operational delivery and project direction of the historic royal state visit of Her Majesty Queen Elizabeth II to the United Arab Emirates.'
      },
      {
        title: 'Special Olympics World Games Abu Dhabi 2019',
        description: 'Special advisor for ceremonies and strategic counsel on operational delivery for the largest humanitarian sporting event in 2019 with 7,500+ athletes from 195 countries.'
      },
      {
        title: 'COP27 Egypt 2022',
        description: 'Senior delivery role for UN Climate Change Conference in Sharm El-Sheikh with 40,000+ participants, managing complex international stakeholder coordination.'
      },
      {
        title: 'Expo 2020 Dubai',
        description: 'Strategic consultant for overlay budget planning and operational modeling for the world\'s largest international exposition (24+ million visitors).'
      },
      {
        title: 'G20 India Media Oasis 2023',
        description: 'Senior delivery role for G20 India Media Oasis, providing comprehensive media infrastructure and services for global summit coordination.'
      },
      {
        title: 'World Economic Forum Davos',
        description: 'Senior delivery role for World Economic Forum annual meeting in Davos, Switzerland, managing high-level stakeholder engagement and operational excellence.'
      },
      {
        title: 'Red Sea International Film Festival',
        description: 'Senior delivery role for Saudi Arabia\'s premier cultural event in Jeddah, managing film industry professionals and international delegates.'
      }
    ]
  },

  'paolo-donadio': {
    slug: 'paolo-donadio',
    name: 'Paolo Donadio',
    jobTitle: 'Managing Director',
    image: 'https://page.gensparksite.com/v1/base64_upload/c2f08f66a0fd35b3e19fa65e5130a714',
    linkedIn: 'https://www.linkedin.com/in/paolo-donadio/',
    description: `
      <p class="text-xl text-white font-light mb-4">
        Paolo Donadio is a globally oriented business strategist, blending visionary storytelling with disciplined 
        execution across international markets.
      </p>
      <p class="mb-4">
        As <strong class="text-white">Managing Director</strong> of G2 Middle East, Paolo leads strategic growth 
        initiatives and client engagement across the MENA region, leveraging deep cross-cultural insight and a proven 
        track record in brand architecture, major event conceptualization, and market entry strategy.
      </p>
      <p class="mb-4">
        His career spans senior roles in strategic communications, business development, and cultural diplomacy. Paolo 
        has worked with Fortune 500 brands, governmental entities, and luxury marques—translating high-level ambition 
        into tangible outcomes. He specializes in bridging Western commercial discipline with Gulf cultural intelligence, 
        ensuring that every engagement is grounded in both strategic rigor and regional authenticity.
      </p>
      <p>
        A multilingual communicator fluent in <strong class="text-white">English, Italian, and Arabic</strong>, Paolo 
        brings a unique ability to navigate complex stakeholder landscapes. Whether architecting multi-year brand 
        positioning campaigns or delivering high-stakes events under intense scrutiny, he thrives in environments where 
        precision, diplomacy, and commercial acumen converge.
      </p>
    `,
    quote: '"Strategy without cultural context is just well-organized guesswork. Real impact happens when you understand not just what to say, but how it will be heard."',
    expertise: [
      'Strategic Business Development',
      'Brand Architecture & Positioning',
      'Market Entry Strategy (MENA)',
      'Cross-Cultural Stakeholder Engagement',
      'Major Event Conceptualization',
      'Luxury Brand Positioning',
      'Governmental Relations & Advisory',
      'Narrative Strategy & Storytelling',
      'Client Relationship Management',
      'Multi-Jurisdictional Project Delivery',
      'Cultural Diplomacy',
      'Commercial Negotiation',
      'Strategic Communications',
      'Regional Market Intelligence'
    ],
    projects: [
      {
        title: 'Regional Brand Launch for Global Luxury Marque',
        description: 'Led market entry strategy and launch architecture for prestigious European luxury brand entering GCC markets, including stakeholder mapping, cultural adaptation framework, and phased rollout strategy.'
      },
      {
        title: 'Sovereign Advisory for National Day Celebrations',
        description: 'Provided strategic counsel on positioning and narrative architecture for multi-day national celebrations, ensuring alignment with long-term nation branding objectives.'
      },
      {
        title: 'Fortune 500 Corporate Positioning Campaign',
        description: 'Developed and executed comprehensive brand repositioning strategy for multinational corporation seeking to strengthen regional presence and stakeholder confidence.'
      },
      {
        title: 'Cultural Diplomacy Initiative',
        description: 'Designed and delivered strategic communications framework for international cultural exchange program, bridging governmental, corporate, and cultural stakeholders across three continents.'
      }
    ]
  },

  'linda-guldemond': {
    slug: 'linda-guldemond',
    name: 'Linda Guldemond',
    jobTitle: 'Director of Client Services & Operations',
    image: 'https://page.gensparksite.com/v1/base64_upload/eaa1e09e7a1bae6d0c1bc3d8a9a19db8',
    linkedIn: 'https://www.linkedin.com/in/linda-guldemond/',
    description: `
      <p class="text-xl text-white font-light mb-4">
        Linda Guldemond is a solutions-driven operations leader with a reputation for delivering flawless execution 
        on high-stakes government and global brand initiatives.
      </p>
      <p class="mb-4">
        As <strong class="text-white">Director of Client Services & Operations</strong> at G2 Middle East, Linda oversees the 
        operational delivery of complex, multi-layered projects—from sovereign-level events to intricate brand 
        activations. Her approach is built on precision, accountability, and an unwavering commitment to client 
        satisfaction under the most demanding conditions.
      </p>
      <p class="mb-4">
        With over a decade of experience managing large-scale productions, governmental protocols, and luxury brand 
        experiences, Linda brings a rare combination of diplomatic finesse and operational discipline. She has worked 
        across Europe, the Middle East, and Asia, coordinating multi-national teams, managing high-profile stakeholders, 
        and ensuring that every detail aligns with strategic intent.
      </p>
      <p>
        Known for her calm under pressure and her ability to anticipate challenges before they arise, Linda transforms 
        complexity into seamless experiences. Whether managing a state visit, orchestrating a product launch for a 
        global luxury brand, or delivering a multi-venue conference, she ensures that nothing is left to chance.
      </p>
    `,
    quote: '"Excellence is not about avoiding problems—it\'s about solving them before anyone knows they existed. That\'s where real value lives."',
    customSchema: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Linda Guldemond",
      "jobTitle": "Director of Client Services & Operations",
      "worksFor": {
        "@type": "Organization",
        "name": "G2 Middle East"
      },
      "nationality": {
        "@type": "Country",
        "name": "South Africa"
      },
      "description": "Linda Guldemond is an internationally experienced Director of Client Services & Operations, affectionately known as 'the Fixer' for her tenacious and detail-oriented approach to complex event delivery. With a background that spans professional ballet to high-stakes corporate hospitality, she is a trusted leader in managing protocol and guest experiences for government entities and global brands across the Middle East and Africa. Her expertise lies in translating strategic concepts into flawless on-site operations.",
      "knowsAbout": [
        "Client Services & Operations",
        "High-Profile Event Delivery",
        "Governmental Protocol",
        "VIP & Stakeholder Management",
        "Luxury Hospitality",
        "Crisis Management & Problem Solving",
        "Team Leadership"
      ],
      "hasOccupation": [
        {
          "@type": "Role",
          "roleName": "Operational Lead",
          "description": "Led high-level protocol and guest experience programs for key delegations at NEOM.",
          "namedPosition": "NEOM Delegations"
        },
        {
          "@type": "Role",
          "roleName": "Delivery Lead",
          "description": "Played a vital role in the successful operational delivery of the inaugural XP Music Conference on behalf of MDL Beast.",
          "namedPosition": "XP Music Conference"
        },
        {
          "@type": "Role",
          "roleName": "Protocol & Hospitality Manager",
          "description": "Managed group protocol and hospitality for major projects introducing global brands to the Kingdom of Saudi Arabia.",
          "namedPosition": "Global Brand Activations (KSA)"
        }
      ],
      "keywords": [
        "Linda Guldemond",
        "G2 Middle East",
        "Event Operations",
        "Client Services",
        "NEOM",
        "XP Music Conference",
        "Saudi Arabia Events"
      ]
    },
    expertise: [
      'Client Services & Relationship Management',
      'Major Event Operations & Delivery',
      'Government Protocol & Diplomatic Liaison',
      'Luxury Brand Experience Design',
      'Multi-Stakeholder Coordination',
      'Project Management (PMP Framework)',
      'Operational Excellence & Process Design',
      'High-Stakes Crisis Management',
      'Vendor & Supplier Negotiation',
      'Budget Management & Financial Oversight',
      'Quality Assurance & Control',
      'Cross-Cultural Team Leadership',
      'VIP & VVIP Guest Management',
      'Risk Assessment & Mitigation'
    ],
    projects: [
      {
        title: 'State-Level Protocol Event for Visiting Dignitary',
        description: 'Managed all operational aspects of high-profile state visit, including logistics, security coordination, venue preparation, and cultural programming—delivered flawlessly under intense scrutiny.'
      },
      {
        title: 'Global Brand Product Launch (Multi-City)',
        description: 'Oversaw operational delivery of simultaneous product launch events across four cities in the GCC, coordinating vendors, talent, media, and VIP guests with zero margin for error.'
      },
      {
        title: 'International Conference for 2,000+ Delegates',
        description: 'Directed end-to-end operations for three-day international summit, managing speaker logistics, venue operations, technology integration, and guest services for government and corporate leaders.'
      },
      {
        title: 'Luxury Brand Flagship Opening',
        description: 'Led client services and operational execution for prestigious brand flagship launch, ensuring seamless integration of brand values, cultural sensitivity, and experiential excellence.'
      }
    ]
  },

  'david-jakic': {
    slug: 'david-jakic',
    name: 'David Jakic',
    jobTitle: 'Business Strategy and Development Director',
    image: 'https://page.gensparksite.com/v1/base64_upload/2350e03ac994278e773d1901e6fe320d',
    linkedIn: 'https://www.linkedin.com/in/david-jakic/',
    description: `
      <p class="text-xl text-white font-light mb-4">
        David Jakic is a multi-disciplinary entrepreneur and strategist with a proven track record of architecting 
        growth strategies and scaling enterprises from startup to multinational operations.
      </p>
      <p class="mb-4">
        As <strong class="text-white">Business Strategy and Development Director</strong> at G2 Middle East, David 
        leads strategic planning, new business development, and organizational growth initiatives. His expertise spans 
        market analysis, financial modeling, partnership structuring, and M&A due diligence—bringing a venture-backed 
        mindset to traditional strategic communications.
      </p>
      <p class="mb-4">
        David's career includes founding and scaling multiple ventures across technology, media, and advisory sectors. 
        He has raised capital, negotiated acquisitions, and built businesses that delivered measurable ROI in competitive 
        markets. His approach is grounded in data-driven decision-making, financial discipline, and a deep understanding 
        of how businesses create and capture value.
      </p>
      <p>
        At G2 Middle East, David applies this entrepreneurial rigor to client engagements—identifying untapped 
        opportunities, structuring scalable growth strategies, and ensuring that every recommendation is backed by 
        financial logic and market reality. He thrives in ambiguity, turning complex challenges into actionable roadmaps 
        that drive long-term competitive advantage.
      </p>
    `,
    quote: '"Growth isn\'t about doing more—it\'s about doing what matters, with precision, at the right time. Strategy is the art of knowing the difference."',
    expertise: [
      'Business Strategy & Strategic Planning',
      'Market Entry & Expansion Strategy',
      'Financial Modeling & Forecasting',
      'M&A Due Diligence & Integration',
      'Venture Capital & Private Equity',
      'Partnership Structuring & Negotiation',
      'Revenue Growth Strategy',
      'Organizational Design & Scaling',
      'Competitive Intelligence & Analysis',
      'Go-To-Market Strategy',
      'Digital Transformation',
      'Performance Metrics & KPI Design',
      'Investor Relations & Capital Raising',
      'Startup Ecosystem Development'
    ],
    projects: [
      {
        title: 'Founded & Exited Technology Startup',
        description: 'Built and scaled SaaS platform from concept to acquisition, raising seed capital, achieving product-market fit, and delivering 10x return to early investors.'
      },
      {
        title: 'Regional Market Entry for European Consultancy',
        description: 'Designed and executed MENA market entry strategy for international advisory firm, including partner identification, legal structuring, and first-year revenue targeting—exceeded projections by 40%.'
      },
      {
        title: 'M&A Advisory for Family Office Portfolio',
        description: 'Led due diligence and strategic assessment for family office evaluating three potential acquisitions in media and events sectors, providing financial modeling and risk analysis that informed final investment decisions.'
      },
      {
        title: 'Growth Strategy for Multinational Agency',
        description: 'Developed three-year growth roadmap for regional agency, identifying new service lines, partnership opportunities, and operational efficiencies that increased EBITDA by 25%.'
      }
    ]
  }
}
