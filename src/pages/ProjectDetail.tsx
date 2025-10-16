import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

interface ProjectDetailProps {
  slug: string
  title: string
  subtitle: string
  category: string
  year: string
  heroImage: string
  heroImagePrompt: string
  engagingParagraph: string
  supportingImages: {
    url: string
    prompt: string
    caption: string
  }[]
}

export const ProjectDetailPage: FC<ProjectDetailProps> = ({
  slug,
  title,
  subtitle,
  category,
  year,
  heroImage,
  heroImagePrompt,
  engagingParagraph,
  supportingImages
}) => {
  // Schema.org Article markup for project case study
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "alternativeHeadline": subtitle,
    "description": engagingParagraph,
    "image": heroImage,
    "datePublished": `${year}-01-01`,
    "author": {
      "@type": "Organization",
      "name": "G2 Middle East"
    },
    "publisher": {
      "@type": "Organization",
      "name": "G2 Middle East",
      "logo": {
        "@type": "ImageObject",
        "url": "https://g2middleeast.com/logo.png"
      }
    },
    "articleSection": category
  }

  return (
    <PageLayout>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(projectSchema)
      }} />

      {/* Hero Section */}
      <section class="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div class="absolute inset-0">
          <img 
            src={heroImage}
            alt={title}
            class="w-full h-full object-cover grayscale"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-g2-darker via-g2-darker/60 to-transparent"></div>
        </div>
        
        <div class="relative h-full container mx-auto px-6 flex items-end pb-16">
          <div class="max-w-4xl">
            <a href="/projects" class="inline-flex items-center text-g2-gold hover:underline mb-6">
              <i class="fas fa-arrow-left mr-2"></i>
              Back to Projects
            </a>
            <div class="space-y-4">
              <div class="flex items-center space-x-4 text-sm text-gray-400">
                <span class="px-3 py-1 bg-g2-gold/20 text-g2-gold rounded">{category}</span>
                <span>{year}</span>
              </div>
              <h1 class="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                {title}
              </h1>
              <p class="text-2xl text-g2-gold font-light">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section class="py-20 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-white mb-6">Overview</h2>
            <p class="text-xl text-gray-300 leading-relaxed">
              {engagingParagraph}
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section class="py-20 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-white mb-12 text-center">Project Gallery</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportingImages.map((image, index) => (
                <div key={index} class="relative group overflow-hidden rounded-lg">
                  <img 
                    src={image.url}
                    alt={image.caption}
                    class="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                    <p class="text-gray-300 text-sm">{image.caption}</p>
                  </div>
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
              Let's explore how G2 Middle East can help you achieve strategic impact and flawless execution.
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

// Project case study data - 12 projects
export const projectsData = {
  'neom-media-industry-showcase': {
    slug: 'neom-media-industry-showcase',
    title: 'NEOM Media Industry Showcase',
    subtitle: 'Engineered for Impact: NEOM\'s creative hub shines',
    category: 'Sovereign Positioning',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80',
    heroImagePrompt: 'A wide-angle shot of a futuristic, architecturally stunning event stage, bathed in sophisticated blue and white light. In the foreground, the silhouetted audience of global executives watches an orchestral performance. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: 'To position NEOM as the epicentre of the future media landscape, we engineered a two-day showcase that was more than an event—it was a statement of intent. We convened the world\'s top studio heads, financiers, and producers, creating a frictionless environment where high-level conversations and strategic partnerships could flourish, culminating in a powerful demonstration of NEOM\'s vision and capability.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
        prompt: 'A candid, close-up shot of two high-profile executives in deep conversation during a networking reception.',
        caption: 'Strategic conversations: Global studio heads engage in high-level dialogue'
      },
      {
        url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
        prompt: 'The iconic musician Nile Rodgers performing on stage, captured in a dynamic, high-energy black and white shot.',
        caption: 'Cultural excellence: World-class performance elevating the experience'
      },
      {
        url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
        prompt: 'A beautifully arranged roundtable discussion, showing a curated group of industry leaders engaged in dialogue.',
        caption: 'Curated dialogue: Industry leaders shaping the future of media'
      },
      {
        url: 'https://images.unsplash.com/photo-1519167758481-83f29da8c8b0?w=800&q=80',
        prompt: 'An exterior shot of the venue at dusk, with impressive architectural lighting and clear NEOM branding.',
        caption: 'Architectural statement: The venue as a reflection of NEOM\'s vision'
      },
      {
        url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
        prompt: 'A detail shot of the premium guest accreditation and welcome materials, emphasizing quality and attention to detail.',
        caption: 'Precision in detail: Every touchpoint reflects NEOM\'s commitment to excellence'
      }
    ]
  },

  'neom-world-economic-forum-davos': {
    slug: 'neom-world-economic-forum-davos',
    title: 'NEOM World Economic Forum Davos',
    subtitle: 'From panels to bilaterals: Davos influence',
    category: 'Strategic Advisory',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1600&q=80',
    heroImagePrompt: 'A shot from behind a panel of world leaders on a stage at Davos, looking out at the audience. The NEOM logo is subtly visible on the lectern. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: 'At the nexus of global power in Davos, our mission was to maximize NEOM\'s influence and advance its investment agenda. We architected a seamless presence, choreographing a complex schedule of public panels, private bilaterals, and media moments. By managing every logistical and strategic detail, we empowered NEOM\'s leadership to focus on what mattered: shaping the global conversation.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
        prompt: 'A discreet photo of a high-stakes bilateral meeting in a private, elegantly designed room.',
        caption: 'Strategic diplomacy: High-stakes bilaterals advancing NEOM\'s investment agenda'
      },
      {
        url: 'https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?w=800&q=80',
        prompt: 'The exterior of the NEOM pavilion in Davos, covered in snow, looking both futuristic and inviting.',
        caption: 'Global presence: NEOM pavilion commanding attention in Davos'
      },
      {
        url: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80',
        prompt: 'A media wall with journalists interviewing a NEOM executive.',
        caption: 'Narrative control: Strategic media engagement amplifying NEOM\'s message'
      },
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        prompt: 'A digital dashboard in a command centre, showcasing the live logistics and scheduling for the delegation.',
        caption: 'Operational excellence: Real-time coordination of complex delegation schedules'
      },
      {
        url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
        prompt: 'A close-up of a delegate\'s personalized agenda, reflecting a packed schedule of high-value meetings.',
        caption: 'Strategic choreography: Every moment optimized for maximum impact'
      }
    ]
  },

  'xi-jinping-presidential-visit': {
    slug: 'xi-jinping-presidential-visit',
    title: 'Xi Jinping Presidential Visit',
    subtitle: 'Welcoming Partnership, Showcasing Culture, Creating Stronger Ties',
    category: 'State-Level Events',
    year: '2022',
    heroImage: 'https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=1600&q=80',
    heroImagePrompt: 'A landmark Abu Dhabi building (e.g., Emirates Palace) illuminated at night with the colours of the Chinese and UAE flags, projected with architectural precision. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: 'When superpowers meet, every detail is a message. We were entrusted to deliver the cultural programming and city branding for the historic state visit, translating complex diplomatic objectives into a unified public narrative. Our work transformed the city into a stage for partnership, showcasing deep respect for heritage while projecting a powerful vision of a shared future.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
        prompt: 'A beautifully choreographed cultural performance with traditional elements, presented on a modern stage.',
        caption: 'Cultural diplomacy: Traditional performance bridging two great civilizations'
      },
      {
        url: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=800&q=80',
        prompt: 'An image of city-wide branding, with lamppost banners featuring the visit\'s official insignia lining a major boulevard.',
        caption: 'Urban transformation: The city as canvas for bilateral partnership'
      },
      {
        url: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=800&q=80',
        prompt: 'A protocol-perfect shot of the official motorcade arriving at a key venue.',
        caption: 'Ceremonial precision: Protocol excellence reflecting diplomatic significance'
      },
      {
        url: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=800&q=80',
        prompt: 'An art installation commissioned for the visit, blending Chinese and Emirati artistic styles.',
        caption: 'Artistic dialogue: Contemporary installation celebrating shared values'
      },
      {
        url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80',
        prompt: 'A wide shot of crowds gathered, reflecting the public engagement and positive atmosphere of the visit.',
        caption: 'Public engagement: Citizens witnessing a historic moment in bilateral relations'
      }
    ]
  },

  'queen-elizabeth-ii-state-visit': {
    slug: 'queen-elizabeth-ii-state-visit',
    title: 'Queen Elizabeth II State Visit to UAE',
    subtitle: 'Royal Protocol Meets Gulf Hospitality',
    category: 'State-Level Events',
    year: '2010',
    heroImage: 'https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=1600&q=80',
    heroImagePrompt: 'A grand ceremonial hall with British and UAE flags symmetrically positioned, bathed in dramatic architectural lighting. Red carpet leading to official greeting area. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: 'The operational delivery of a royal state visit demands absolute precision—where centuries-old protocol meets contemporary execution. We were entrusted with the logistical architecture and cultural programming for Her Majesty\'s historic visit, ensuring every moment reflected the depth of UAE-UK relations while honoring the exacting standards of royal protocol. The result: a flawlessly executed diplomatic milestone that strengthened bilateral ties.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        prompt: 'The British Royal Standard flag flying alongside UAE flag against clear blue sky, both pristine and perfectly positioned.',
        caption: 'Symbolic partnership: Flags representing centuries of diplomatic heritage'
      },
      {
        url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80',
        prompt: 'An immaculate ceremonial motorcade formation with British and Emirati official vehicles.',
        caption: 'Precision logistics: Protocol-perfect motorcade coordination'
      },
      {
        url: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&q=80',
        prompt: 'A formal state banquet table setting with royal insignia, shot from above showing symmetrical perfection.',
        caption: 'Diplomatic elegance: State banquet reflecting mutual respect and tradition'
      },
      {
        url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
        prompt: 'Traditional Emirati cultural welcome ceremony with dancers in traditional dress, professionally choreographed.',
        caption: 'Cultural exchange: Traditional welcome honoring royal guest'
      },
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        prompt: 'Behind-the-scenes operations room with staff coordinating live schedules and protocol requirements.',
        caption: 'Operational command: Real-time coordination ensuring flawless execution'
      }
    ]
  },

  'papal-mass-abu-dhabi': {
    slug: 'papal-mass-abu-dhabi',
    title: 'Papal Mass of Pope Francis in Abu Dhabi',
    subtitle: 'Historic Interfaith Moment: 180,000 Faithful Gathered',
    category: 'Major Event Delivery',
    year: '2019',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
    heroImagePrompt: 'Aerial drone shot of massive outdoor papal mass with 180,000 attendees, dramatic altar stage in center, white papal vestments visible, golden hour lighting. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: 'Delivering the largest gathering in UAE history required more than logistics—it demanded strategic vision and operational mastery. We orchestrated the planning and execution of the historic Papal Mass, managing security, crowd flow, ceremonial protocols, and media coordination for 180,000 faithful. The result was a seamless experience that projected tolerance, unity, and the UAE\'s commitment to interfaith dialogue on the global stage.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80',
        prompt: 'Wide shot of the massive outdoor altar structure, architecturally designed, with papal throne and religious symbols.',
        caption: 'Sacred architecture: Altar design balancing reverence and regional context'
      },
      {
        url: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80',
        prompt: 'Close-up of diverse crowd: families, elderly, youth of different nationalities praying together.',
        caption: 'Unity in faith: 180,000 faithful from over 100 nationalities gathered'
      },
      {
        url: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=800&q=80',
        prompt: 'Security and logistics coordination center with multiple screens showing crowd management and live feeds.',
        caption: 'Operational excellence: Real-time crowd management ensuring safety and dignity'
      },
      {
        url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
        prompt: 'International media area with dozens of cameras and broadcast equipment capturing the historic moment.',
        caption: 'Global reach: Strategic media coordination amplifying the message worldwide'
      },
      {
        url: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80',
        prompt: 'Emotional moment of worshippers with hands raised, backlit by golden sunset, faces showing devotion.',
        caption: 'Transcendent experience: A historic moment of interfaith unity and tolerance'
      }
    ]
  },

  'special-olympics-world-games': {
    slug: 'special-olympics-world-games',
    title: '2019 Special Olympics World Games',
    subtitle: 'Strategic Advisory: Inclusion at Global Scale',
    category: 'Major Event Advisory',
    year: '2019',
    heroImage: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1600&q=80',
    heroImagePrompt: 'Olympic-scale stadium filled with athletes from different nations, opening ceremony with dramatic lighting, large screens showing athlete faces, celebration atmosphere. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: 'As strategic advisors to the 2019 Special Olympics World Games in Abu Dhabi, we provided counsel on operational delivery, stakeholder engagement, and global positioning. Our expertise helped shape an event that welcomed 7,500 athletes from 195 nations, transforming perceptions of inclusion while demonstrating the UAE\'s capability to deliver world-class sporting events with profound social impact.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
        prompt: 'Athletes with Down syndrome and other disabilities celebrating on podium with medals, pure joy visible.',
        caption: 'Triumph celebrated: Athletes achieving personal bests on the global stage'
      },
      {
        url: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&q=80',
        prompt: 'Volunteer team in matching uniforms assisting athletes, showing compassion and professional support.',
        caption: 'Human infrastructure: 20,000 volunteers delivering exceptional athlete experience'
      },
      {
        url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
        prompt: 'Diverse group of world leaders and dignitaries in VIP area observing competition, engaged and supportive.',
        caption: 'Global leadership: Heads of state witnessing the power of inclusive sport'
      },
      {
        url: 'https://images.unsplash.com/photo-1577223625816-7546f32c01d5?w=800&q=80',
        prompt: 'Stadium-wide branding and wayfinding system, showing seamless event identity and accessibility features.',
        caption: 'Inclusive design: Accessibility and dignity embedded in every detail'
      },
      {
        url: 'https://images.unsplash.com/photo-1484820540004-14229fe36ca4?w=800&q=80',
        prompt: 'Strategic operations command center with dashboards showing real-time logistics across multiple venues.',
        caption: 'Strategic coordination: Operational advisory ensuring flawless multi-venue execution'
      }
    ]
  },

  'chanel-princess-dubai-brand-architecture': {
    slug: 'chanel-princess-dubai-brand-architecture',
    title: 'Brand Architecture for @chanelprincessdubai',
    subtitle: 'From Influencer to Global Authority: Strategic Positioning',
    category: 'Luxury Brand Strategy',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=1600&q=80',
    heroImagePrompt: 'Elegant luxury brand photoshoot setup with Chanel products, sophisticated lighting, minimalist background, high-fashion aesthetic. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: 'We architected the strategic positioning and personal brand for Lee Davies (@chanelprincessdubai), transforming a luxury enthusiast into the world\'s leading Chanel authority. Through narrative strategy, media positioning, and audience cultivation, we built a brand that commands global attention, attracts luxury partnerships, and sets the standard for authority building in the digital age.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80',
        prompt: 'Professional content creation setup: luxury products, ring lights, camera equipment, showing behind-the-scenes brand work.',
        caption: 'Content mastery: Strategic storytelling elevating personal brand authority'
      },
      {
        url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=800&q=80',
        prompt: 'Close-up of analytics dashboard showing millions of impressions, engagement metrics, and global reach statistics.',
        caption: 'Data-driven authority: Strategic audience cultivation and engagement metrics'
      },
      {
        url: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&q=80',
        prompt: 'Luxury brand collaboration meeting in elegant boardroom, contracts and partnership materials visible.',
        caption: 'Strategic partnerships: Authority translating into commercial opportunities'
      },
      {
        url: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80',
        prompt: 'International media features montage: magazine covers, online publications, TV appearances showing global recognition.',
        caption: 'Media positioning: Global recognition as world-leading Chanel expert'
      },
      {
        url: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80',
        prompt: 'High-end fashion event with Lee Davies networking with luxury brand executives and industry leaders.',
        caption: 'Industry elevation: From enthusiast to respected voice in luxury sector'
      }
    ]
  },

  'mubadala-investment-forum': {
    slug: 'mubadala-investment-forum',
    title: 'Mubadala Investment Forum',
    subtitle: 'Convening Global Capital: $230 Billion AUM Showcase',
    category: 'Corporate Events',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80',
    heroImagePrompt: 'Sophisticated conference hall with global investors in business attire, Mubadala branding, modern stage with speakers, professional lighting. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: 'For Mubadala, one of the world\'s largest sovereign wealth funds, we delivered an annual investment forum that served as both showcase and strategic engagement platform. We curated an environment where institutional investors, family offices, and strategic partners could engage with Mubadala\'s leadership and portfolio companies, resulting in meaningful dialogue that drives capital flows and partnership formation.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
        prompt: 'Panel discussion with CFOs and investment leaders on modern stage, engaged audience of suited executives.',
        caption: 'Strategic dialogue: Investment leaders discussing global capital allocation'
      },
      {
        url: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80',
        prompt: 'Executive lounge area with leather furniture, one-on-one meetings between investors and Mubadala executives.',
        caption: 'Capital conversations: Curated environment for high-value bilateral discussions'
      },
      {
        url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
        prompt: 'Digital presentation showing Mubadala\'s global portfolio map with investment data and geographic reach.',
        caption: 'Global footprint: $230 billion AUM across sectors and geographies visualized'
      },
      {
        url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
        prompt: 'Media area with financial journalists interviewing Mubadala leadership, Bloomberg terminals visible.',
        caption: 'Market narrative: Strategic media engagement amplifying investment positioning'
      },
      {
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        prompt: 'Networking reception with international investors exchanging business cards, elegant venue, Abu Dhabi skyline visible.',
        caption: 'Network cultivation: Global capital convening to explore opportunities'
      }
    ]
  },

  'dubai-expo-2020-pavilion': {
    slug: 'dubai-expo-2020-pavilion',
    title: 'Dubai Expo 2020 National Pavilion',
    subtitle: 'Nation Branding at World Stage: 190 Countries, 25 Million Visitors',
    category: 'Nation Branding',
    year: '2021',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
    heroImagePrompt: 'Futuristic UAE pavilion architecture at night, dramatic lighting, falcon wing design, crowds visible, Expo 2020 atmosphere. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: 'As strategic advisors to Dubai Expo 2020, we helped shape the narrative architecture and visitor experience strategy for the UAE National Pavilion. Our work ensured the nation\'s story—rooted in heritage but oriented toward the future—resonated with 25 million visitors from 190 countries, projecting ambition, innovation, and global leadership on the world\'s largest cultural stage.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
        prompt: 'Inside UAE pavilion: immersive digital experience showing UAE\'s journey from desert to global hub.',
        caption: 'Narrative journey: Immersive storytelling connecting heritage with future vision'
      },
      {
        url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
        prompt: 'Diverse international visitors experiencing interactive exhibits, faces showing wonder and engagement.',
        caption: 'Global engagement: 25 million visitors experiencing UAE\'s story'
      },
      {
        url: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=80',
        prompt: 'VIP tour with heads of state and dignitaries being guided through pavilion by UAE officials.',
        caption: 'Diplomatic showcase: World leaders experiencing UAE\'s strategic narrative'
      },
      {
        url: 'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=800&q=80',
        prompt: 'Architectural detail shot of pavilion\'s falcon wing structure, representing UAE\'s symbol and ambition.',
        caption: 'Architectural symbolism: Design as narrative device for national identity'
      },
      {
        url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
        prompt: 'Evening shot of pavilion with long queues of visitors, demonstrating popularity and global interest.',
        caption: 'Strategic success: Sustained visitor interest throughout six-month expo'
      }
    ]
  },

  'aldar-properties-launch': {
    slug: 'aldar-properties-launch',
    title: 'Aldar Properties Luxury Development Launch',
    subtitle: 'Architectural Vision Meets Market Reality: $500M Sellout',
    category: 'Real Estate Marketing',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80',
    heroImagePrompt: 'Luxury waterfront development render with modern architecture, Abu Dhabi skyline, golden hour, sophisticated architectural visualization. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: 'For Aldar Properties, we architected the launch strategy for a $500 million ultra-luxury waterfront development. Our approach went beyond traditional real estate marketing—we positioned the project as a lifestyle statement and investment thesis, curating an exclusive launch event and strategic media campaign that resulted in 80% pre-sales within 72 hours and complete sellout within 90 days.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        prompt: 'Exclusive VIP launch event with UHNW buyers, champagne, architectural models, Abu Dhabi elite gathering.',
        caption: 'Strategic exclusivity: Curated launch event for ultra-high-net-worth buyers'
      },
      {
        url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
        prompt: 'Luxury penthouse interior render showing floor-to-ceiling windows, contemporary design, waterfront views.',
        caption: 'Aspirational lifestyle: Visual storytelling elevating product positioning'
      },
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
        prompt: 'Sales center with real-time digital board showing units being reserved, creating urgency and demand.',
        caption: 'Market momentum: Real-time visualization driving purchase decisions'
      },
      {
        url: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80',
        prompt: 'International property media coverage montage: publications, online features, investment reports.',
        caption: 'Global reach: Strategic media positioning attracting international capital'
      },
      {
        url: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
        prompt: 'Handshake between Aldar executive and investor, contracts visible, celebrating successful transaction.',
        caption: 'Strategic outcome: $500 million sellout driven by positioning and execution'
      }
    ]
  },

  'abu-dhabi-finance-week': {
    slug: 'abu-dhabi-finance-week',
    title: 'Abu Dhabi Finance Week',
    subtitle: 'Positioning Capital as Strategic Asset: 5,000+ Global Leaders',
    category: 'Financial Services',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1600&q=80',
    heroImagePrompt: 'Modern financial district conference center, global finance leaders networking, Abu Dhabi skyline visible, sophisticated business atmosphere. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: 'We orchestrated Abu Dhabi Finance Week, a strategic convening of 5,000+ global financial leaders designed to position the emirate as a capital hub bridging East and West. Beyond event logistics, we curated programming that drove substantive dialogue on sovereign wealth, Islamic finance, and emerging market capital flows—establishing Abu Dhabi as a critical node in global finance infrastructure.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        prompt: 'Main stage keynote with central bank governors and finance ministers, international flags visible.',
        caption: 'Policy dialogue: Central bankers shaping global monetary policy discourse'
      },
      {
        url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
        prompt: 'Islamic finance roundtable with Sharia scholars and sukuk experts in traditional and modern attire.',
        caption: 'Financial innovation: Islamic finance leaders discussing Sharia-compliant instruments'
      },
      {
        url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
        prompt: 'Trading floor simulation showing live market data, fintech demos, blockchain presentations.',
        caption: 'Future of finance: Technology showcasing Abu Dhabi\'s fintech ecosystem'
      },
      {
        url: 'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?w=800&q=80',
        prompt: 'Bilateral meeting room with sovereign wealth fund CEOs, serious strategic discussions visible.',
        caption: 'Capital allocation: Sovereign wealth leaders discussing multi-billion dollar mandates'
      },
      {
        url: 'https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=800&q=80',
        prompt: 'Evening gala at iconic Abu Dhabi venue, finance leaders networking, celebrating successful week.',
        caption: 'Strategic relationships: Building connections that drive capital flows'
      }
    ]
  },

  'formula-1-abu-dhabi-vip': {
    slug: 'formula-1-abu-dhabi-vip',
    title: 'Formula 1 Abu Dhabi Grand Prix VIP Experience',
    subtitle: 'Where Speed Meets Strategy: 10,000 Corporate Guests',
    category: 'Luxury Experiences',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&q=80',
    heroImagePrompt: 'F1 race at Yas Marina Circuit from VIP suite perspective, cars racing at high speed, sunset lighting, luxury hospitality visible. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: 'We designed and delivered the VIP hospitality experience for the Abu Dhabi Grand Prix, transforming race weekend into a strategic platform for corporate relationship building. Managing 10,000 corporate guests across exclusive suites and experiences, we created an environment where F1\'s adrenaline met high-value business dialogue, resulting in a seamless fusion of entertainment and strategic engagement.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        prompt: 'Luxury paddock club suite with floor-to-ceiling windows overlooking pit lane, gourmet catering, executives networking.',
        caption: 'Elevated hospitality: Premium suites where business meets adrenaline'
      },
      {
        url: 'https://images.unsplash.com/photo-1511854441555-ee0e6e961d69?w=800&q=80',
        prompt: 'VIP guests on pit lane tour meeting F1 drivers and team principals, exclusive access captured.',
        caption: 'Exclusive access: Behind-the-scenes experiences creating memorable moments'
      },
      {
        url: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80',
        prompt: 'Sunset yacht party with F1 backdrop, corporate leaders networking on luxury vessel.',
        caption: 'Strategic entertainment: Curated off-track experiences for relationship building'
      },
      {
        url: 'https://images.unsplash.com/photo-1573496546038-82f9c39f6365?w=800&q=80',
        prompt: 'Race podium ceremony at night with fireworks, VIP guests celebrating in foreground.',
        caption: 'Signature moments: Championship drama creating shared experiences'
      },
      {
        url: 'https://images.unsplash.com/photo-1553531087-42327622bf87?w=800&q=80',
        prompt: 'Operations control room managing 10,000 guest logistics, multiple screens showing timing and coordination.',
        caption: 'Flawless execution: Real-time coordination ensuring premium experience delivery'
      }
    ]
  }
}
