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
            <div class="text-xl text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: engagingParagraph }} />
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
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> To position NEOM as the epicentre of the future media landscape, our team engineered a two-day showcase that was more than an event—it was a statement of intent. We convened the world\'s top studio heads, financiers, and producers, creating a frictionless environment where high-level conversations and strategic partnerships could flourish, culminating in a powerful demonstration of NEOM\'s vision and capability.',
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
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> At the nexus of global power in Davos, our mission was to maximize NEOM\'s influence and advance its investment agenda. We architected a seamless presence, choreographing a complex schedule of public panels, private bilaterals, and media moments. By managing every logistical and strategic detail, we empowered NEOM\'s leadership to focus on what mattered: shaping the global conversation.',
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
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> When superpowers meet, every detail is a message. Our team was entrusted to deliver the cultural programming and city branding for the historic state visit, translating complex diplomatic objectives into a unified public narrative. Our work transformed the city into a stage for partnership, showcasing deep respect for heritage while projecting a powerful vision of a shared future.',
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
    title: 'The Architecture of Diplomacy: Delivering the State Visit of H.M. Queen Elizabeth II',
    subtitle: 'Royal Protocol Meets Gulf Hospitality',
    category: 'State-Level Events',
    year: '2010',
    heroImage: 'https://page.gensparksite.com/v1/base64_upload/3fc5acf626f27cf4b2f1e5e8ed4a9341',
    heroImagePrompt: 'Her Majesty Queen Elizabeth II walking on red carpet with UAE dignitaries in traditional dress, waterfront ceremony with Dubai skyline background, official state visit moment, diplomatic greeting, formal protocol, bright daylight photography.',
    engagingParagraph: `<p class="mb-4"><strong>Delivered by G2 Middle East Staff</strong></p>
    <p class="mb-4"><strong>Project Director:</strong> Tim Jacobs, now Regional Chief Operating Officer, G2 Middle East & Africa</p>
    
    <p class="mb-4">A state visit by a reigning monarch is not an event; it is a complex, multi-faceted diplomatic instrument. Every detail, from the precise angle of a handshake to the timing of a motorcade, carries immense symbolic weight. When the visiting head of state is Her Majesty Queen Elizabeth II, one of the most recognised and respected figures in modern history, the stakes are amplified to a global scale. The margin for error is zero. As the project director responsible for the operational delivery and management of this historic visit to the UAE, my mandate was simple in its objective but monumental in its complexity: to execute with a level of precision that was not just flawless, but invisible.</p>
    
    <p class="mb-4">The strategic imperative of this visit transcended traditional event management. The core objective was to create a powerful, living tableau of the deep and evolving relationship between the United Kingdom and the United Arab Emirates. This required an intricate fusion of centuries old royal protocol with the dynamic, forward looking identity of a modern nation. It was my responsibility to architect the framework where these two worlds could meet seamlessly, ensuring every logistical detail served the overarching diplomatic narrative. This was not about managing a schedule; it was about directing a national moment designed to resonate for decades.</p>
    
    <p class="mb-4">The execution demanded the orchestration of a vast ecosystem of stakeholders, each with their own protocols, priorities, and security imperatives. We navigated the intricate requirements of the British Royal Household, liaising directly with Buckingham Palace, while simultaneously coordinating with the UAE Presidential Guard, multiple government ministries, and international diplomatic corps. This multi agency coordination is a core challenge in any major event architecture, but for a state visit of this magnitude, it represents one of the most complex logistical puzzles in the world. Our role was to serve as the central node, translating strategic intent into thousands of flawlessly executed operational tasks.</p>
    
    <p class="mb-4">From a delivery perspective, the project was a masterclass in managing risk and complexity. Security operations were paramount, involving layers of visible and invisible measures to ensure the safety of the monarch and all dignitaries. Every venue, from the grandeur of the Sheikh Zayed Grand Mosque, a powerful moment of cultural respect and understanding, to the formality of the state receptions, was meticulously planned and secured. The logistical architecture involved managing secure transportation, complex accommodation arrangements, and the precise choreography of thousands of personnel. This is the essence of delivering at the state visit level: turning immense, high pressure ambiguity into a calm, controlled, and perfectly executed experience.</p>
    
    <p class="mb-4">The narrative and media management component was equally critical. Every photograph and video clip broadcast from the visit would shape global perception. We worked to ensure the media had the access required to tell the story, while managing the environment to ensure the narrative broadcast was one of partnership, mutual respect, and shared vision. The intangible value generated from this positive global coverage is a direct return on the investment in strategic, precision led delivery.</p>
    
    <p class="mb-4">The successful delivery of the State Visit of Queen Elizabeth II stands as a benchmark in the world of high level event production. It demonstrates a fundamental principle that now drives the G2 philosophy: the most complex challenges present the greatest opportunities to demonstrate mastery. The project's legacy is not just in the diplomatic ties it strengthened, but in its execution. It is a testament to the power of strategic foresight, meticulous planning, and an unwavering commitment to flawless delivery in the most demanding circumstances imaginable.</p>
    
    <p><strong class="text-g2-gold">This project was delivered by the professional team that now forms G2 Middle East & Africa.</strong> Under the strategic direction and operational leadership of Tim Jacobs, now our Regional Chief Operating Officer, our team provided end-to-end project management, stakeholder coordination, and execution excellence. This is the standard we bring to every engagement: architecting moments that not only succeed, but also build enduring value.</p>`,
    supportingImages: [
      {
        url: 'https://page.gensparksite.com/v1/base64_upload/9592d4428b4b807a84d16d0a958be78b',
        prompt: 'UAE ceremonial guard in white traditional dress standing at attention along red carpet at modern architectural pavilion, formal state visit protocol, ceremonial precision.',
        caption: 'Ceremonial precision: UAE Presidential Guard honoring Her Majesty with impeccable protocol'
      },
      {
        url: 'https://page.gensparksite.com/v1/base64_upload/043ed648d525409d46e9bcc70a6840ac',
        prompt: 'Queen Elizabeth II in floral dress walking with UAE leadership in traditional dress, children waving British flags, modern architectural backdrop, official state visit welcome ceremony.',
        caption: 'Cultural bridge: Her Majesty greeted by UAE leadership and young citizens with British flags'
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
    title: 'Crafting History: The First Papal Visit to the Arabian Peninsula',
    subtitle: 'Delivered by G2 Middle East Staff',
    category: 'Sovereign Event Architecture',
    year: '2019',
    heroImage: 'https://page.gensparksite.com/v1/base64_upload/59e3cf3797a31275a47d384aa5c53c5c',
    heroImagePrompt: 'Pope Francis in white vestments reaching out to touch child in crowd, surrounded by diverse faithful waving Vatican flags, powerful moment of human connection during historic papal visit.',
    engagingParagraph: `<p class="mb-4"><strong>Delivered by G2 Middle East Staff</strong></p>
    <p class="mb-4"><strong>Project Director:</strong> Tim Jacobs, now Regional Chief Operating Officer, G2 Middle East & Africa</p>
    
    <p class="mb-4">There are moments in history that serve as inflection points, where global perception can be reshaped by a single, focused event. The first-ever Papal Visit to the Arabian Peninsula was conceived as one such moment. When His Holiness Pope Francis accepted the invitation to visit Abu Dhabi, the mandate handed down was monumental. This was to be a definitive expression of the UAE's deep commitment to tolerance and interfaith dialogue. Our team at G2 Middle East, under Tim Jacobs' direction as Project Director and direct interface with the UAE's Ministry of Presidential Affairs, was entrusted to translate this profound sovereign vision into a flawless operational reality, navigating a set of logistical challenges of unprecedented scale and complexity.</p>

    <p class="mb-4">The strategic objective was absolute: to build the global platform for the signing of the historic "Document on Human Fraternity." However, the parameters for this delivery were extraordinarily demanding. The entire project lifecycle, from initial mobilisation to final departure, was a mere 28 days. Within that window, the physical build-out of all required infrastructure had to be completed in just 14 days. This timeline alone represented a Herculean task, requiring a level of planning and execution that left no margin for error.</p>

    <p class="mb-4">Adding a significant layer of complexity, this immense undertaking was not happening in a vacuum. It was taking place while the country was hosting the AFC Asian Cup, one of the world's largest football tournaments. The city was already at peak operational capacity, with its security, logistics, and hospitality infrastructure under immense strain. Our project had to be executed within this high-pressure environment, competing for resources, personnel, and airspace, all while remaining a top national priority. My direct engagement with the Ministry of Presidential Affairs was the critical nexus, the central node through which we could navigate these challenges, ensuring that the vision of the UAE's leadership was executed without compromise.</p>

    <p class="mb-4">This high-level interface was essential for orchestrating the vast ecosystem of stakeholders. We coordinated the sensitive protocols of the Holy See with the security imperatives of the UAE Presidential Guard, managing a multi-agency effort that spanned governments and continents. It was a position of immense trust, turning strategic intent into thousands of flawlessly executed operational tasks under the most demanding of timelines.</p>

    <p class="mb-4">While the logistical delivery was a monumental challenge, the strategic shaping of the global narrative was an equally critical pillar of the project's success. We understood that the event's legacy would be defined by the story told to the world. A key instrument in this was the design and management of the International Media Centre (IMC), a fully-fledged broadcast hub built to host over 2,000 accredited journalists. This was not just a facility; it was a curated environment designed to provide the world's media with the tools and context to report on the visit's core message of human fraternity. By providing high-quality content, expert briefings, and world-class facilities, we proactively framed the global conversation around the themes of tolerance and dialogue.</p>

    <p class="mb-4">The operational and public culmination of the visit was the Papal Mass at Zayed Sports City, an event that drew 180,000 worshippers from across the region. Delivering a secure, respectful, and deeply meaningful experience for a gathering of this scale was a project in itself. The successful management of the transport, accreditation, and crowd dynamics for this historic mass was a testament to the team's precision. Its flawless execution created an environment of calm and reverence, allowing the power of the moment to resonate, unimpeded by logistical distractions.</p>

    <p class="mb-4">The successful delivery of the first Papal Visit to the Arabian Peninsula, within a 14-day build and a 28-day total project window, and during the operational peak of the AFC Asian Cup, stands as a benchmark in high-stakes project management. It required an unwavering partnership with the Ministry of Presidential Affairs and a relentless focus on the core strategic objective.</p>
    
    <p><strong class="text-g2-gold">This project was delivered by G2 Middle East staff.</strong> Led by Tim Jacobs, now our Regional Chief Operating Officer, our team provided strategic direction, operational delivery, and stakeholder management at the highest level. We did not simply manage a visit; we architected a historic, global moment under the most intense pressure, helping to craft a legacy of tolerance and understanding for the UAE on the world stage. This benchmark-setting delivery exemplifies the capabilities G2 Middle East brings to every sovereign-level engagement.</p>`,
    supportingImages: [
      {
        url: 'https://page.gensparksite.com/v1/base64_upload/7bb6b425a781831018ba9f8ea2417df1',
        prompt: 'Pope Francis in popemobile waving to crowds, security detail, Vatican flags, outdoor papal mass stage in background, Abu Dhabi.',
        caption: 'Historic arrival: Pope Francis greets the faithful during the first-ever Papal Visit to the Arabian Peninsula'
      },
      {
        url: 'https://page.gensparksite.com/v1/base64_upload/4b6f46b5780a279cad20b91e8e3ec3ae',
        prompt: 'Wide-angle fisheye view of Zayed Sports City stadium filled with 180,000 worshippers, massive altar structure, architectural roof design.',
        caption: 'Operational mastery: 180,000 faithful gathered at Zayed Sports City for the historic Papal Mass'
      },
      {
        url: 'https://page.gensparksite.com/v1/base64_upload/655e1c1b7b35494f7a7a787c8e0937a4',
        prompt: 'Modern white altar stage with large cross, choir and clergy in white vestments, thousands of faithful seated in organized rows.',
        caption: 'Sacred architecture: Custom-designed altar balancing reverence with regional context and ceremonial protocols'
      },
      {
        url: 'https://page.gensparksite.com/v1/base64_upload/829074eedae0ce38a57bb030437b5c19',
        prompt: 'Panoramic view of stadium with international media in foreground, cameras and broadcast equipment, 180,000 attendees in stadium.',
        caption: 'Media coordination: Strategic positioning of 2,000+ international journalists to capture the global narrative'
      },
      {
        url: 'https://page.gensparksite.com/v1/base64_upload/29ee6df600710510d15b721a811f75bc',
        prompt: 'Broadcast journalist in suit with branded microphone reporting live, massive crowd in stadium background, professional media setup.',
        caption: 'Global broadcast hub: Live coverage beamed to billions worldwide through strategic media architecture'
      }
    ]
  },

  'special-olympics-world-games': {
    slug: 'special-olympics-world-games',
    title: '2019 Special Olympics World Games',
    subtitle: 'Delivered by G2 Middle East Staff: Strategic Advisory at Global Scale',
    category: 'Major Event Advisory',
    year: '2019',
    heroImage: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1600&q=80',
    heroImagePrompt: 'Olympic-scale stadium filled with athletes from different nations, opening ceremony with dramatic lighting, large screens showing athlete faces, celebration atmosphere. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: `<p class="mb-4"><strong>Delivered by G2 Middle East Staff</strong></p>
    
    <p class="mb-4">As strategic advisors to the 2019 Special Olympics World Games in Abu Dhabi, G2 Middle East staff provided comprehensive counsel on operational delivery, stakeholder engagement, and global positioning. Our team's expertise helped shape an event that welcomed 7,500 athletes from 195 nations, transforming perceptions of inclusion while demonstrating the UAE's capability to deliver world-class sporting events with profound social impact.</p>
    
    <p class="mb-4">Led by Tim Jacobs, now Regional Chief Operating Officer of G2 Middle East & Africa, our team provided strategic direction and operational advisory across all critical workstreams. This engagement showcased our capacity to operate at the intersection of elite sport, social impact, and national positioning—delivering not just an event, but a legacy of inclusion that continues to resonate globally.</p>`,
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
    subtitle: 'Architecting a New Paradigm of Fashion Authority',
    category: 'Luxury Brand Strategy',
    year: 'Ongoing',
    heroImage: 'https://page.gensparksite.com/v1/base64_upload/12cc9bcc5a5294a7f99d39eb8596254e',
    heroImagePrompt: 'Aerial view of elegant woman in red dress lying on modern dark sofa with reflection in pool below. Luxury lifestyle photography with sophisticated architectural setting, minimalist aesthetic, high-end fashion editorial style.',
    engagingParagraph: `<p class="mb-4"><strong>Client:</strong> Lee Davies (@chanelprincessdubai)</p>
    
    <p class="mb-4"><strong>Objective:</strong> To transform a world class private fashion collection from a personal passion into a globally recognized cultural institution, repositioning the principal from a social media influencer into the world's leading independent authority on Chanel.</p>
    
    <p class="mb-4">In the saturated world of digital luxury, influence is a commodity. True authority, however, is the core asset. Our engagement with Lee Davies, the collector behind the renowned @chanelprincessdubai platform, was an exercise in pure strategic positioning. The challenge was not to build a following; the passion and the pieces had already attracted millions. Our mission was to architect a narrative that would translate that following into unassailable, institutional level authority.</p>
    
    <p class="mb-4">Our approach began with a fundamental premise: influence is not derived from promotion, but from education. We advised a pivot away from the conventional influencer model towards a framework of rigorous, museum quality curation. The core of our strategy was to build a "distributed museum"—a living archive operating with the intellectual heft of a traditional institution but with the speed and accessibility of a digital platform.</p>
    
    <p class="mb-4">This transformed the collection of over 1,300 Chanel pieces into a verified cultural asset. Each Instagram post became a curatorial act. Captions were repositioned as micro essays, detailing the historical context of a garment or the provenance of a piece of jewellery. This "museum to muse" model turned passive viewing into active learning, building a deep trust premium with an audience hungry for substance in a superficial landscape.</p>
    
    <p class="mb-4">This educational framework became the foundation for quantifiable value creation. By establishing the platform as the preeminent source of knowledge, we cultivated what the market now recognizes as the "Davies Effect." Pieces featured by @chanelprincessdubai consistently experience a 15-30% appreciation in secondary luxury markets. This impact is the ultimate proof of success: the authority we architected now carries the same market moving weight as a major museum acquisition.</p>
    
    <p class="mb-4">Furthermore, we leveraged the unique geographic advantage of Dubai. Operating outside the rigid hierarchies of traditional fashion capitals like Paris or Milan allowed us to innovate. Dubai became the perfect incubator for this new model of cultural authority, where strategic vision could create an institution from the ground up.</p>
    
    <p class="mb-4">The result is a complete paradigm shift. Lee Davies is no longer just an influencer; she is ranked the #1 Chanel authority globally, an educator, and a market maker. Her platform now serves as a primary resource for academics, designers, and collectors alike.</p>
    
    <p>This project is a definitive case study in G2's core philosophy: The Architecture of Intangible Value. We did not simply manage a brand; we built an institution, proving that in the modern world, the most powerful assets are not just seen, but understood.</p>`,
    supportingImages: [
      {
        url: 'https://page.gensparksite.com/v1/base64_upload/12410ea02d7e18b95c92501cf2f62b00',
        prompt: 'Black and white poolside editorial, woman in black and white striped Chanel swimwear sitting on concrete pool steps, elegant side profile with flowing blonde hair, luxury resort aesthetic.',
        caption: 'Global authority: From digital platform to internationally recognized Chanel expert'
      },
      {
        url: 'https://page.gensparksite.com/v1/base64_upload/9eee3a827a7d0d9951904128f507abd4',
        prompt: 'Portrait in white Chanel haute couture dress with crystal-embellished bodice and feathered shoulders, face tilted upward in elegant pose, soft focus garden background.',
        caption: 'Curatorial excellence: Museum-quality documentation of rare Chanel haute couture'
      },
      {
        url: 'https://page.gensparksite.com/v1/base64_upload/4e1d42861c65ed596e7585ddcdbd6d8f',
        prompt: 'Portrait in crystal-embellished Chanel strapless dress with statement jewelry, blue sky and waterfront background, sophisticated beauty shot.',
        caption: 'Heritage pieces: Documenting the provenance and craftsmanship of iconic Chanel jewelry'
      },
      {
        url: 'https://page.gensparksite.com/v1/base64_upload/12cc9bcc5a5294a7f99d39eb8596254e',
        prompt: 'Aerial view of elegant woman in red dress lying on modern dark sofa with pool reflection, face visible from above, luxury lifestyle photography.',
        caption: 'Timeless elegance: Building trust premium through authentic luxury lifestyle presentation'
      },
      {
        url: 'https://page.gensparksite.com/v1/base64_upload/c1de81d274d1d5c97f6967c653c3f8ff',
        prompt: 'Close-up of diamond CHANEL nameplate necklace on model wearing pink off-shoulder dress, luxury jewelry detail.',
        caption: 'Educational framework: Detailed micro-essays on design evolution and hardware significance'
      },
      {
        url: 'https://page.gensparksite.com/v1/base64_upload/db9b187ee77b489c5acfe0cf71f97f5d',
        prompt: 'Detailed shot of Chanel chain belt with script text on pink dress, pink manicured nails, luxury accessory styling.',
        caption: 'Collection depth: Over 1,300 Chanel pieces with 30% classified as rare'
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
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> For Mubadala, one of the world\'s largest sovereign wealth funds, our team delivered an annual investment forum that served as both showcase and strategic engagement platform. We curated an environment where institutional investors, family offices, and strategic partners could engage with Mubadala\'s leadership and portfolio companies, resulting in meaningful dialogue that drives capital flows and partnership formation.',
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

  'red-sea-film-festival': {
    slug: 'red-sea-film-festival',
    title: 'The Red Sea International Film Festival',
    subtitle: 'Celebrating Cinematic Excellence in Saudi Arabia',
    category: 'Cultural Events',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=1600&q=80',
    heroImagePrompt: 'A stunning, wide-angle shot of a glamorous red carpet event at night, with the unique architecture of the Red Sea Film Festival venue in the background, lit beautifully. The focus is on the atmosphere of prestige and exclusivity. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team was entrusted to orchestrate the complete guest experience for the world\'s most influential film talent at one of the region\'s most important new cultural landmarks. Our role was to ensure that every moment—from arrival to the closing credits—was as flawless and memorable as the cinema being celebrated, reinforcing the Kingdom\'s position as a global hub for culture and creativity.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
        prompt: 'A candid-style, black and white photo of well-dressed international guests mingling and networking in a sophisticated lounge area.',
        caption: 'Global cinema community: International film talent connecting in elegant surroundings'
      },
      {
        url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
        prompt: 'A close-up shot focusing on a detail of the event design, like a custom G2-branded lectern on stage or an elegant table setting.',
        caption: 'Design excellence: Every detail reflecting the prestige of the celebration'
      },
      {
        url: 'https://images.unsplash.com/photo-1574267432644-f610a6733291?w=800&q=80',
        prompt: 'An over-the-shoulder shot from behind the audience looking towards a brightly lit stage during an awards presentation.',
        caption: 'Awards ceremony: Celebrating cinematic achievement on the global stage'
      },
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
        prompt: 'A shot of the sun setting over the Red Sea, as seen from the event\'s waterfront terrace.',
        caption: 'Coastal elegance: The Red Sea providing a stunning natural backdrop'
      },
      {
        url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
        prompt: 'An architectural shot of the festival venue, emphasizing its modern design against the coastal landscape.',
        caption: 'Architectural landmark: Contemporary venue reflecting Saudi Arabia\'s cultural ambition'
      },
      {
        url: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80',
        prompt: 'A dynamic photo of a media scrum, with photographers and journalists capturing the arrival of a VIP.',
        caption: 'Global attention: International media capturing the festival\'s prestigious moments'
      }
    ]
  },

  'neom-guest-experience': {
    slug: 'neom-guest-experience',
    title: 'NEOM',
    subtitle: 'A Vision of the Future: Innovation, Technology, and Sustainable Living',
    category: 'Strategic Advisory',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
    heroImagePrompt: 'A breathtaking, futuristic architectural rendering of a key NEOM landmark like \'The Line\' or \'Oxagon\', shown at dusk with dramatic, integrated lighting. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> For a project that is redefining the future, the guest experience for its most important delegations must be nothing short of visionary. Our team was tasked with designing and executing high-level protocol and hospitality programs that mirrored NEOM\'s ambition, demonstrating the scale and promise of this giga-project to the world\'s leaders and investors.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1560264418-c4445382edbc?w=800&q=80',
        prompt: 'A shot of a small group of VIPs in suits looking at a sophisticated holographic model of NEOM inside a dark, high-tech presentation room.',
        caption: 'Visionary briefings: World leaders experiencing NEOM\'s futuristic master plan'
      },
      {
        url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
        prompt: 'A close-up on the hands of an executive gesturing towards a digital masterplan on a massive interactive screen.',
        caption: 'Interactive presentations: Demonstrating the scale and ambition through technology'
      },
      {
        url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
        prompt: 'A luxury electric vehicle gliding silently through a pristine, futuristic landscape, hinting at the sustainable transport within NEOM.',
        caption: 'Sustainable mobility: Showcasing NEOM\'s commitment to green transportation'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        prompt: 'A minimalist, high-end hospitality setting, perhaps a private dining room with a stunning desert view through floor-to-ceiling windows.',
        caption: 'Elevated hospitality: Guest experiences reflecting NEOM\'s premium positioning'
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        prompt: 'A drone shot looking down on a section of NEOM under construction, showing the immense scale and ambition.',
        caption: 'Giga-project scale: Aerial perspective demonstrating unprecedented development'
      },
      {
        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
        prompt: 'An abstract image representing data and technology, such as light trails or network grids, overlaid on a desert landscape.',
        caption: 'Digital infrastructure: Technology powering the city of the future'
      }
    ]
  },

  'mdl-beast-xp-music-conference': {
    slug: 'mdl-beast-xp-music-conference',
    title: 'MDL Beast - XP Music Conference',
    subtitle: 'The Epicenter of the Middle East\'s Music Industry',
    category: 'Music & Entertainment',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1600&q=80',
    heroImagePrompt: 'A dynamic, wide shot from the back of a packed conference auditorium, showing a panel of speakers on a stylishly lit stage, with the iconic XP branding visible. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> At the heart of the region\'s music revolution, our team was the operational engine for its most important strategic gathering. We managed the end-to-end delivery of the inaugural XP Music Conference, creating a seamless environment for artists, executives, and innovators to connect and define the future of the industry.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
        prompt: 'A creative, slightly blurred shot of a DJ performing at an exclusive networking event, with vibrant, colourful lighting.',
        caption: 'Cultural innovation: Live performances creating energy and connection'
      },
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
        prompt: 'A candid photo of two industry professionals in deep conversation in a thoughtfully designed breakout area.',
        caption: 'Strategic networking: Music industry leaders forging partnerships'
      },
      {
        url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
        prompt: 'A close-up of a high-tech music production workshop in session, focusing on the equipment and hands-on interaction.',
        caption: 'Innovation workshops: Hands-on sessions exploring music technology'
      },
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
        prompt: 'An overhead shot of the bustling conference floor, showing the flow of attendees between sessions and exhibition stands.',
        caption: 'Dynamic environment: Conference floor connecting artists, executives, and innovators'
      },
      {
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
        prompt: 'A minimalist shot of the event\'s branding and wayfinding signage, demonstrating the sleek design aesthetic.',
        caption: 'Brand excellence: Sleek design language reflecting music industry edge'
      },
      {
        url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
        prompt: 'A powerful, low-angle shot of a keynote speaker commanding the stage.',
        caption: 'Thought leadership: Industry visionaries defining the future of music'
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
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team designed and delivered the VIP hospitality experience for the Abu Dhabi Grand Prix, transforming race weekend into a strategic platform for corporate relationship building. Managing 10,000 corporate guests across exclusive suites and experiences, we created an environment where F1\'s adrenaline met high-value business dialogue, resulting in a seamless fusion of entertainment and strategic engagement.',
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
  },

  'vladimir-putin-state-visit': {
    slug: 'vladimir-putin-state-visit',
    title: 'Vladimir Putin Presidential Visit, Abu Dhabi',
    subtitle: 'Sovereign Hospitality at Emirates Palace',
    category: 'State-Level Events',
    year: '2019',
    heroImage: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=1600&q=80',
    heroImagePrompt: 'Majestic Emirates Palace exterior at night with dramatic lighting, presidential motorcade visible, UAE and Russian flags displayed prominently. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> When President Vladimir Putin visited Abu Dhabi in 2019, the stakes were nothing short of historic. Our team was entrusted with managing the cultural programming at Emirates Palace, delivering orchestral arrangements, precision choreography, and architectural lighting that showcased Abu Dhabi\'s sovereign hospitality. Every element was designed to elevate the UAE–Russia relationship on the global stage, demonstrating the power of cultural diplomacy in strengthening bilateral ties.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        prompt: 'Presidential protocol: High-level bilateral meeting in ornate palace chamber with translators and advisors.',
        caption: 'Diplomatic precision: State-level protocol executed flawlessly'
      },
      {
        url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
        prompt: 'Orchestra performing in grand palace ballroom, presidential guests in attendance, UAE cultural elements.',
        caption: 'Cultural excellence: Orchestral performance showcasing sovereign hospitality'
      },
      {
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
        prompt: 'Emirates Palace architectural lighting at night, dramatic color scheme, UAE and Russian flags illuminated.',
        caption: 'Architectural statement: Lighting design elevating bilateral symbolism'
      },
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        prompt: 'State dinner preparation with meticulous table settings, international protocol standards, luxury ambiance.',
        caption: 'Sovereign detail: Every element reflecting diplomatic excellence'
      }
    ]
  },

  'saudi-arabia-media-oasis-g20': {
    slug: 'saudi-arabia-media-oasis-g20',
    title: 'Saudi Arabia Media Oasis, G20 India',
    subtitle: 'Strategic Media Operations at Global Summit',
    category: 'Strategic Advisory',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1600&q=80',
    heroImagePrompt: 'Modern media center with Kingdom of Saudi Arabia branding, journalists working at stations, G20 summit backdrop, professional broadcast setup. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> With less than three weeks to deliver, our team executed the KSA Media Oasis for G20 India—a complete media operations hub that amplified the Kingdom\'s narrative at one of the world\'s most watched summits. From venue sourcing to stakeholder management, we delivered end-to-end media operations with precision, pace, and measurable impact, demonstrating our capacity to operate under extreme time constraints while maintaining strategic excellence.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
        prompt: 'Media briefing with Saudi officials and international journalists, G20 backdrop, professional setting.',
        caption: 'Strategic messaging: Kingdom narrative amplified at global summit'
      },
      {
        url: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80',
        prompt: 'Broadcast interview setup with Saudi representative, G20 India branding, professional lighting and cameras.',
        caption: 'Media engagement: High-level interviews driving international coverage'
      },
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
        prompt: 'Operations team coordinating media logistics, multiple screens showing real-time G20 coverage.',
        caption: 'Rapid deployment: Three-week delivery timeline executed flawlessly'
      },
      {
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
        prompt: 'Media oasis lounge with Saudi hospitality elements, journalists networking, cultural touchpoints.',
        caption: 'Cultural diplomacy: Saudi hospitality enhancing media relationships'
      }
    ]
  },

  'qasr-al-hosn-festival': {
    slug: 'qasr-al-hosn-festival',
    title: 'Qasr Al Hosn Festival, Abu Dhabi',
    subtitle: 'Heritage Programming at Abu Dhabi\'s Oldest Landmark',
    category: 'Cultural Events',
    year: '2012–2013',
    heroImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80',
    heroImagePrompt: 'Qasr Al Hosn historic white fort illuminated at dusk, traditional Emirati cultural performances in courtyard, families attending festival. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Embedded within the Executive Committee, our team managed and delivered the Qasr Al Hosn Festival, bringing Abu Dhabi\'s oldest and most significant cultural landmark to life. We curated performances, artisan showcases, and learning spaces that bridged heritage and contemporary experience, creating public programming that celebrated Emirati culture while demonstrating world-class event coordination and stakeholder management.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
        prompt: 'Traditional Emirati cultural performance at Qasr Al Hosn, families watching, authentic heritage celebration.',
        caption: 'Heritage celebration: Emirati traditions brought to life through performance'
      },
      {
        url: 'https://images.unsplash.com/photo-1515041219749-89347f83291a?w=800&q=80',
        prompt: 'Artisan craftspeople demonstrating traditional skills, visitors engaged with cultural learning.',
        caption: 'Living culture: Artisan showcases preserving Emirati craftsmanship'
      },
      {
        url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
        prompt: 'Families exploring festival grounds at Qasr Al Hosn, children participating in cultural activities.',
        caption: 'Community engagement: Public programming connecting generations with heritage'
      },
      {
        url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
        prompt: 'Qasr Al Hosn fort architecture detail shot, traditional design elements, historical significance.',
        caption: 'Architectural heritage: Abu Dhabi\'s cultural foundation showcased'
      }
    ]
  },

  'esports-world-cup-2025': {
    slug: 'esports-world-cup-2025',
    title: 'Esports World Cup 2025, Saudi Arabia',
    subtitle: 'Master Planning for Global Gaming Championship',
    category: 'Strategic Advisory',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&q=80',
    heroImagePrompt: 'Massive esports arena with dramatic LED screens, thousands of fans, stage with gaming stations, futuristic lighting design. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> In just two weeks, our team developed a comprehensive 325-page master planning pitch for the Esports World Cup—the world\'s largest gaming championship. Our submission included narrative architecture, venue concepts, fan journey mapping, and broadcast-first stage designs, demonstrating our capacity for rapid, multidisciplinary event strategy that operates at the intersection of sports, entertainment, and digital culture.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
        prompt: 'Esports competitors focused on screens during tournament, dramatic arena lighting, professional gaming setup.',
        caption: 'Championship intensity: Elite gaming competition at global scale'
      },
      {
        url: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&q=80',
        prompt: 'Stadium filled with esports fans, massive LED screens showing gameplay, energetic atmosphere.',
        caption: 'Fan experience: Arena design creating electric engagement'
      },
      {
        url: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=800&q=80',
        prompt: 'Broadcast control room with multiple feeds, directors coordinating live esports coverage.',
        caption: 'Broadcast excellence: Multi-platform content distribution strategy'
      },
      {
        url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80',
        prompt: 'Venue concept renderings showing futuristic esports arena, integrated technology, fan zones.',
        caption: 'Master planning: 325-page submission delivered in two weeks'
      }
    ]
  },

  'global-citizen-f1-vip-gala': {
    slug: 'global-citizen-f1-vip-gala',
    title: 'Global Citizen F1 VIP Gala, Abu Dhabi',
    subtitle: 'Purpose-Driven Luxury During Grand Prix Week',
    category: 'Luxury Experiences',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80',
    heroImagePrompt: 'Elegant gala event at luxurious Abu Dhabi venue, VIP guests in evening wear, Global Citizen branding, F1 circuit visible through windows. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> During Abu Dhabi Grand Prix week, our team curated and delivered the Global Citizen F1 VIP Gala—a high-touch event that blended elite networking with purpose-driven programming on education, climate, and health. Managing guest strategy, diplomatic protocol, partner alignment, and luxury hospitality, we created an evening that demonstrated how strategic events can drive both relationship building and meaningful impact.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
        prompt: 'VIP guests in evening wear networking at luxury gala, Abu Dhabi skyline backdrop, elegant ambiance.',
        caption: 'Elite convening: Global leaders connecting around shared purpose'
      },
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
        prompt: 'Panel discussion on global issues with thought leaders, Global Citizen branding, engaged audience.',
        caption: 'Impact programming: Education, climate, and health dialogue'
      },
      {
        url: 'https://images.unsplash.com/photo-1519167758481-83f29da8c8b0?w=800&q=80',
        prompt: 'Luxury gala dinner with meticulous table settings, premium catering, F1 Grand Prix atmosphere.',
        caption: 'Hospitality excellence: Premium touchpoints throughout the experience'
      },
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        prompt: 'F1 circuit visible from exclusive venue, Grand Prix week energy, strategic timing for maximum impact.',
        caption: 'Strategic timing: Leveraging Grand Prix week for amplified engagement'
      }
    ]
  },

  'discover-neom-series': {
    slug: 'discover-neom-series',
    title: 'Discover NEOM Series',
    subtitle: '11-Day Multi-City Stakeholder Engagement',
    category: 'Corporate Events',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80',
    heroImagePrompt: 'Modern presentation showing NEOM masterplan on massive screens, VIP stakeholders viewing futuristic development renderings, sophisticated event space. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Over 11 days across multiple Saudi cities, our team delivered the Discover NEOM series—an immersive event program designed to showcase NEOM\'s transformative vision to key stakeholders and decision-makers. Managing elite guest experiences, strategic messaging, and production execution, we built excitement and engagement around one of the world\'s most ambitious development projects, demonstrating our capacity for sustained, multi-location event delivery at the highest level.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        prompt: 'Futuristic NEOM development renderings displayed on screens, stakeholders viewing masterplan presentation.',
        caption: 'Visionary showcase: NEOM\'s transformative development brought to life'
      },
      {
        url: 'https://images.unsplash.com/photo-1560264418-c4445382edbc?w=800&q=80',
        prompt: 'VIP stakeholders experiencing interactive NEOM technology demonstrations, immersive presentations.',
        caption: 'Immersive experience: Technology and innovation on display'
      },
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        prompt: 'Multi-city event series with consistent branding, professional venue setup across locations.',
        caption: 'Multi-location execution: 11-day series across Saudi cities'
      },
      {
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
        prompt: 'Elite guests networking at NEOM event, strategic conversations, decision-makers engaged.',
        caption: 'Stakeholder engagement: Building excitement among key decision-makers'
      }
    ]
  },

  'qatar-olympic-house': {
    slug: 'qatar-olympic-house',
    title: 'Qatar Olympic House – London 2012',
    subtitle: 'Delivered by G2 Middle East Staff: Qatar\'s First Olympic House in 12 Weeks',
    category: 'Sports Events',
    year: '2012',
    heroImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&q=80',
    heroImagePrompt: 'Olympic rings and flags at prestigious venue during London 2012 Games, VIP guests arriving at elegant hospitality house, Qatar branding prominently displayed. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: `<p class="mb-4"><strong>Delivered by G2 Middle East Staff</strong></p>
    <p class="mb-4"><strong>Project Lead:</strong> Tim Jacobs, now Regional Chief Operating Officer, G2 Middle East & Africa</p>
    
    <h3 class="text-2xl font-bold text-white mb-4 mt-8">Overview</h3>
    <p class="mb-4">In the lead-up to the London 2012 Olympic Games, the Doha 2020 Bid Committee appointed Tim Jacobs as Project Lead to deliver a landmark initiative: Qatar's first-ever Olympic House. Tasked with realising the client's vision within an exceptionally tight 12-week lead time, Jacobs was responsible for the complete operational planning, delivery, and management of this high-profile hospitality and diplomatic hub.</p>
    
    <h3 class="text-2xl font-bold text-white mb-4 mt-8">Challenge</h3>
    <p class="mb-4">With only three months from appointment to opening, the project required rapid mobilisation, cross-continental coordination, and meticulous attention to detail. The Olympic House needed to serve as a showcase for Qatar's culture, hospitality, and Olympic ambitions, while providing a secure, welcoming environment for VIPs, athletes, dignitaries, and international media.</p>
    
    <h3 class="text-2xl font-bold text-white mb-4 mt-8">Tim Jacobs' Role & Responsibilities</h3>
    <p class="mb-4">As Project Lead, Tim Jacobs was entrusted with end-to-end responsibility for the Qatar Olympic House, including:</p>
    
    <ul class="list-disc list-inside mb-4 space-y-2 text-gray-300">
      <li><strong>Permitting & Compliance:</strong> Navigating UK regulatory frameworks to secure all necessary permits and approvals in record time.</li>
      <li><strong>Security Planning:</strong> Designing and implementing robust security protocols to protect guests and assets, in coordination with local authorities and private security providers.</li>
      <li><strong>Catering & Hospitality:</strong> Curating a world-class catering program that reflected Qatari culture and met the diverse needs of international guests.</li>
      <li><strong>Programming:</strong> Developing and managing a dynamic schedule of events, cultural showcases, and networking opportunities throughout the Games.</li>
      <li><strong>Budget Management:</strong> Overseeing all financial aspects, ensuring cost control and value delivery across suppliers and services.</li>
      <li><strong>Stakeholder Management:</strong> Acting as the primary liaison between the Doha 2020 Bid Committee, Qatari officials, UK partners, suppliers, and VIP guests.</li>
    </ul>
    
    <h3 class="text-2xl font-bold text-white mb-4 mt-8">Execution & Impact</h3>
    <p class="mb-4">Under Jacobs' leadership, the Qatar Olympic House was delivered on time and to the highest standards, despite the compressed schedule and complex stakeholder environment. The project became a focal point for Qatari engagement during the Games, hosting high-level meetings, cultural events, and media activations that elevated Qatar's international profile and Olympic credentials.</p>
    
    <h3 class="text-2xl font-bold text-white mb-4 mt-8">Legacy & Value to G2 Middle East</h3>
    <p class="mb-4">This project exemplifies Tim Jacobs' ability to deliver under pressure, manage multifaceted international operations, and exceed client expectations. The experience and expertise gained from leading Qatar Olympic House now inform G2 Middle East's approach to high-stakes event delivery, stakeholder engagement, and cross-border project management—reinforcing the consultancy's reputation for operational excellence and strategic vision.</p>`,
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80',
        prompt: 'Elegant Olympic House interior with Qatar branding, VIP guests networking during Games.',
        caption: 'Diplomatic hub: Qatar\'s first Olympic House hosting VIPs, athletes, and dignitaries'
      },
      {
        url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
        prompt: 'Olympic athletes and dignitaries at Qatar hospitality venue, premium catering service.',
        caption: 'World-class hospitality: Qatari culture showcased through premium catering and service'
      },
      {
        url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
        prompt: 'London 2012 Olympic venues visible from Qatar House, strategic positioning.',
        caption: 'Strategic positioning: Prime location at the heart of London 2012 Olympic Games'
      },
      {
        url: 'https://images.unsplash.com/photo-1569517282132-25d22f4573e6?w=800&q=80',
        prompt: 'Project management documentation, budget oversight, supplier coordination materials.',
        caption: '12-week delivery: Comprehensive project management under extreme time pressure'
      },
      {
        url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1600&q=80',
        prompt: 'High-level bilateral meetings at Qatar Olympic House, diplomatic protocol.',
        caption: 'Stakeholder excellence: Facilitating high-level meetings strengthening international relations'
      },
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        prompt: 'Cultural programming and events at Qatar House during Olympics.',
        caption: 'Cultural showcase: Dynamic programming celebrating Qatari heritage throughout the Games'
      }
    ]
  },

  'hazza-bin-zayed-stadium': {
    slug: 'hazza-bin-zayed-stadium',
    title: 'Hazza Bin Zayed Stadium FIFA Upgrade',
    subtitle: 'Delivering International Football Standards in Al Ain',
    category: 'Sports Infrastructure',
    year: '2018',
    heroImage: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600&q=80',
    heroImagePrompt: 'Modern football stadium exterior at night with dramatic lighting, FIFA-compliant facilities, Al Ain UAE location. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team delivered the comprehensive upgrade of Hazza Bin Zayed Stadium in Al Ain to FIFA and AFC international standards, managing project planning, compliance verification, and operational readiness for world-class football. This project ensured the venue met all technical requirements for hosting international fixtures while maintaining operational continuity—a critical milestone in Abu Dhabi\'s sporting infrastructure development.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
        prompt: 'Stadium pitch meeting FIFA standards, professional lighting systems, modern seating.',
        caption: 'FIFA compliance: International standards achieved'
      },
      {
        url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80',
        prompt: 'Project planning documents, stadium blueprints, technical specifications for upgrade.',
        caption: 'Project management: Comprehensive planning and compliance'
      },
      {
        url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
        prompt: 'Stadium operational readiness inspection, AFC officials reviewing facilities.',
        caption: 'Operational readiness: Prepared for international football'
      },
      {
        url: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
        prompt: 'Night match at upgraded HBZ Stadium, full capacity crowd, international fixture.',
        caption: 'Mission accomplished: Hosting world-class football in Al Ain'
      }
    ]
  },

  'samsung-diamond-league': {
    slug: 'samsung-diamond-league',
    title: 'Samsung Diamond League Athletics',
    subtitle: 'Brand Activation at Elite Track & Field',
    category: 'Sports Events',
    year: '2019',
    heroImage: 'https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=1600&q=80',
    heroImagePrompt: 'Olympic athletics track during Diamond League event, Samsung branding prominently displayed, elite athletes competing. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team produced and managed Samsung\'s activation at the Diamond League—the premier international athletics series. Delivering seamless event operations, experiential brand zones, and high-impact fan engagement, we amplified Samsung\'s presence among athletics enthusiasts while supporting the technical delivery of world-class sport. This project demonstrated our ability to integrate brand objectives with elite sporting experiences.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=800&q=80',
        prompt: 'Samsung activation zone at athletics event, interactive displays, engaged fans.',
        caption: 'Brand experience: Samsung innovation meets athletics excellence'
      },
      {
        url: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&q=80',
        prompt: 'Elite athletes competing on Diamond League track, Samsung branding visible.',
        caption: 'Elite sport: Supporting world-class athletics competition'
      },
      {
        url: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
        prompt: 'Fans engaging with Samsung technology at Diamond League event, brand ambassadors.',
        caption: 'Fan engagement: Creating memorable brand experiences'
      },
      {
        url: 'https://images.unsplash.com/photo-1586519971460-eb43c7b7f0bb?w=800&q=80',
        prompt: 'Event operations command center, seamless technical delivery of athletics event.',
        caption: 'Operational excellence: Flawless event production'
      }
    ]
  },

  'neom-sports-hub': {
    slug: 'neom-sports-hub',
    title: 'NEOM Sports Hub Accommodation',
    subtitle: 'World-Class Athlete Village for Beach Games',
    category: 'Sports Facilities',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
    heroImagePrompt: 'Modern beachfront accommodation complex for athletes, NEOM Beach Games branding, luxury facilities with Saudi coastline backdrop. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team developed and managed the accommodation hub for the NEOM Beach Games, delivering world-class facilities and guest experience for international athletes and officials. Coordinating hospitality operations, athlete services, transportation, and venue logistics, we ensured participants experienced NEOM\'s vision of future living firsthand. This project showcased our capability to deliver mega-event infrastructure with precision and hospitality excellence.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
        prompt: 'Luxury accommodation units for athletes, modern design, NEOM aesthetic.',
        caption: 'Athlete village: World-class facilities for international competitors'
      },
      {
        url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
        prompt: 'Beach sports facilities at NEOM, athletes training with Red Sea backdrop.',
        caption: 'Perfect setting: Beach Games infrastructure on Saudi coast'
      },
      {
        url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
        prompt: 'Hospitality operations for athletes, dining facilities, support services.',
        caption: 'Hospitality excellence: Comprehensive athlete care'
      },
      {
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
        prompt: 'Transportation logistics, venue coordination, seamless athlete movement.',
        caption: 'Operational mastery: Flawless logistics for international event'
      }
    ]
  },

  'tuwaiq-oasis': {
    slug: 'tuwaiq-oasis',
    title: 'Tuwaiq Oasis Cultural Programming',
    subtitle: 'Celebrating Saudi Heritage and Innovation',
    category: 'Cultural Events',
    year: '2022',
    heroImage: 'https://images.unsplash.com/photo-1569074187119-c87815b476da?w=1600&q=80',
    heroImagePrompt: 'Modern Saudi cultural venue with traditional and contemporary art installations, immersive lighting, visitors experiencing interactive exhibits. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team curated and delivered immersive cultural programming at Tuwaiq Oasis, celebrating Saudi heritage and innovation through art, music, and interactive installations. Blending traditional craftsmanship with cutting-edge experiential design, we created an environment that honored the Kingdom\'s past while showcasing its Vision 2030 ambitions. This project demonstrated our ability to translate cultural narratives into powerful public experiences.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80',
        prompt: 'Traditional Saudi art installation merged with contemporary design, visitors engaged.',
        caption: 'Cultural fusion: Heritage meets innovation'
      },
      {
        url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
        prompt: 'Live music performance at Tuwaiq Oasis, Saudi artists, engaged audience.',
        caption: 'Musical celebration: Saudi artists showcasing talent'
      },
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        prompt: 'Interactive cultural installations, visitors experiencing Saudi heritage through technology.',
        caption: 'Experiential storytelling: Interactive heritage experiences'
      },
      {
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
        prompt: 'Immersive lighting design at cultural venue, Vision 2030 narrative woven throughout.',
        caption: 'Vision 2030: Future-forward cultural programming'
      }
    ]
  },

  'fiba-3x3-abu-dhabi': {
    slug: 'fiba-3x3-abu-dhabi',
    title: 'FIBA 3x3 Basketball, Abu Dhabi',
    subtitle: 'Elevating Abu Dhabi as Global Sports Destination',
    category: 'Sports Events',
    year: '2021',
    heroImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1600&q=80',
    heroImagePrompt: 'Urban 3x3 basketball court in Abu Dhabi, FIBA branding, international players competing, energetic crowd. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team delivered operational management and fan engagement for the FIBA 3x3 basketball tournament in Abu Dhabi, elevating the city\'s profile as a global sports destination. Managing venue operations, spectator experience, media coordination, and community activation, we created an electric atmosphere that showcased basketball\'s urban energy while reinforcing Abu Dhabi\'s sporting credentials. This project highlighted our expertise in fast-paced, fan-centric sporting events.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&q=80',
        prompt: 'International 3x3 basketball players competing at Abu Dhabi venue, intense action.',
        caption: 'Elite competition: World-class 3x3 basketball in UAE capital'
      },
      {
        url: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80',
        prompt: 'Engaged fans watching 3x3 basketball, urban venue atmosphere, Abu Dhabi backdrop.',
        caption: 'Fan experience: Creating electric tournament atmosphere'
      },
      {
        url: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
        prompt: 'Media covering FIBA tournament, broadcast equipment, international press engagement.',
        caption: 'Global reach: Amplifying Abu Dhabi\'s sports narrative'
      },
      {
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
        prompt: 'Community activation around basketball event, youth engagement, inclusive programming.',
        caption: 'Community impact: Inspiring next generation of athletes'
      }
    ]
  },

  'the-line-experience': {
    slug: 'the-line-experience',
    title: 'The Line Experience',
    subtitle: 'Immersive Showcase of NEOM\'s Revolutionary Urban Vision',
    category: 'Innovation',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
    heroImagePrompt: 'Futuristic interactive exhibition showcasing The Line urban development, immersive digital displays, visitors experiencing NEOM\'s revolutionary city concept. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team designed and produced "The Line Experience"—an interactive showcase for NEOM\'s revolutionary linear city concept. Blending immersive storytelling, digital engagement, and architectural visualization, we brought this unprecedented urban vision to life for global stakeholders, investors, and media. The experience translated complex sustainable development concepts into compelling narrative, demonstrating our ability to communicate transformative ideas at scale.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        prompt: 'Interactive displays showing The Line architecture, visitors exploring urban design concepts.',
        caption: 'Revolutionary design: The Line\'s zero-gravity urbanism brought to life'
      },
      {
        url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
        prompt: 'Immersive digital storytelling about sustainable city, visitors engaged with vision.',
        caption: 'Sustainability narrative: Communicating carbon-neutral urban living'
      },
      {
        url: 'https://images.unsplash.com/photo-1560264418-c4445382edbc?w=800&q=80',
        prompt: 'VIP stakeholders experiencing The Line showcase, architectural models, technology demos.',
        caption: 'Stakeholder engagement: Bringing global investors into the vision'
      },
      {
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
        prompt: 'Media covering The Line Experience, press engagement, global narrative amplification.',
        caption: 'Global impact: Amplifying NEOM\'s transformative urban vision'
      }
    ]
  },

  'neom-milken-institute': {
    slug: 'neom-milken-institute',
    title: 'NEOM at Milken Institute, Los Angeles',
    subtitle: 'Strategic Positioning at Premier Global Forum',
    category: 'Corporate Events',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80',
    heroImagePrompt: 'High-level conference setting at Milken Institute with NEOM branding, VIP networking, global thought leaders. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team managed NEOM\'s presence at the Milken Institute Global Conference in Los Angeles, delivering strategic messaging, stakeholder engagement, and high-profile networking with global capital allocators and policymakers. Coordinating panel participation, bilateral meetings, and brand positioning, we ensured NEOM\'s narrative resonated with the world\'s most influential investors and thought leaders at this premier forum.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
        prompt: 'NEOM executives presenting at Milken Institute, engaged audience of investors.',
        caption: 'Thought leadership: NEOM presenting to global capital'
      },
      {
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
        prompt: 'High-level bilateral meetings at Milken, strategic conversations, decision-makers engaged.',
        caption: 'Strategic engagement: Cultivating relationships with key stakeholders'
      },
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
        prompt: 'NEOM exhibition space at Milken Institute, interactive displays, investor interest.',
        caption: 'Brand presence: Showcasing NEOM vision to global audience'
      },
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
        prompt: 'Networking at Milken conference, NEOM representatives connecting with thought leaders.',
        caption: 'Global networking: Building bridges with policy and finance leaders'
      }
    ]
  },

  'neom-un-display': {
    slug: 'neom-un-display',
    title: 'NEOM Showcase at United Nations',
    subtitle: 'Sustainable Development on the Global Stage',
    category: 'International Relations',
    year: '2022',
    heroImage: 'https://images.unsplash.com/photo-1569074187119-c87815b476da?w=1600&q=80',
    heroImagePrompt: 'United Nations venue with NEOM sustainable development showcase, diplomats viewing exhibition, international flags. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team produced NEOM\'s showcase at the United Nations, highlighting sustainable development and innovation to a global diplomatic audience. Managing exhibition design, stakeholder engagement, and narrative positioning, we demonstrated how NEOM\'s vision aligns with UN Sustainable Development Goals while advancing Saudi Arabia\'s global leadership on climate and innovation. This project showcased our ability to navigate complex international forums.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1568584711271-f9261a21ae6f?w=800&q=80',
        prompt: 'NEOM exhibition at UN headquarters, diplomats engaging with sustainable development displays.',
        caption: 'UN platform: NEOM\'s sustainability narrative on global stage'
      },
      {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
        prompt: 'Interactive displays showing NEOM\'s renewable energy and sustainability initiatives.',
        caption: 'Climate leadership: Showcasing carbon-neutral urban development'
      },
      {
        url: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=800&q=80',
        prompt: 'International diplomats at NEOM UN showcase, strategic conversations, global engagement.',
        caption: 'Diplomatic engagement: Building international partnerships'
      },
      {
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        prompt: 'UN officials reviewing NEOM development plans, bilateral discussions, diplomatic protocol.',
        caption: 'Strategic positioning: Aligning NEOM with UN SDGs'
      }
    ]
  },

  'paris-media-oasis': {
    slug: 'paris-media-oasis',
    title: 'Paris Media Oasis for Expo 2030',
    subtitle: 'Media Hub for Saudi Arabia\'s Winning Bid Campaign',
    category: 'Media Events',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80',
    heroImagePrompt: 'Modern media center in Paris with Saudi Expo 2030 branding, journalists working at broadcast stations, live feed operations. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team orchestrated the Media Oasis in Paris for Saudi Arabia\'s Expo 2030 bid, managing live broadcasts, stakeholder engagement, and operational support for the Kingdom\'s winning campaign. Coordinating international media, providing broadcast infrastructure, and amplifying Saudi Arabia\'s narrative, we created a strategic media hub that contributed directly to securing Expo 2030 for Riyadh—a historic achievement for the Kingdom.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1598662779094-52f48cc13781?w=800&q=80',
        prompt: 'Broadcast center with international journalists, live feeds from BIE vote in Paris.',
        caption: 'Media operations: Real-time broadcast support for historic bid'
      },
      {
        url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80',
        prompt: 'Saudi delegation at Paris Media Oasis, stakeholder engagement, press interviews.',
        caption: 'Strategic engagement: Supporting Kingdom\'s narrative amplification'
      },
      {
        url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
        prompt: 'Celebration moment at Media Oasis as Riyadh wins Expo 2030 bid, media capturing historic moment.',
        caption: 'Historic victory: Media hub celebrates Riyadh Expo 2030 win'
      },
      {
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
        prompt: 'International press conference at Paris venue, Saudi officials, global media coverage.',
        caption: 'Global reach: Amplifying Saudi Arabia\'s Expo vision worldwide'
      }
    ]
  },

  'g20-india-media-oasis': {
    slug: 'g20-india-media-oasis',
    title: 'G20 India Media Oasis',
    subtitle: 'KSA Media Hub for Global Summit',
    category: 'Media Events',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1600&q=80',
    heroImagePrompt: 'Modern media operations center at G20 summit, Saudi Arabia branding, international journalists, live broadcast equipment. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team delivered the KSA Media Oasis at G20 India, providing end-to-end venue management, media operations, and narrative amplification for the Kingdom\'s delegation. Managing broadcast infrastructure, press coordination, and stakeholder communications, we ensured Saudi Arabia\'s priorities and achievements were effectively communicated throughout the summit—demonstrating our expertise in high-stakes international media operations.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1598662779094-52f48cc13781?w=800&q=80',
        prompt: 'Media operations center with Saudi branding, journalists covering G20 summit.',
        caption: 'Media infrastructure: Supporting Kingdom\'s G20 narrative'
      },
      {
        url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80',
        prompt: 'Saudi delegation briefing international press at Media Oasis, G20 India backdrop.',
        caption: 'Press operations: Facilitating Saudi Arabia\'s media engagement'
      },
      {
        url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
        prompt: 'Broadcast coordination for G20 summit coverage, technical operations, live feeds.',
        caption: 'Technical excellence: Flawless broadcast infrastructure delivery'
      },
      {
        url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
        prompt: 'Stakeholder meetings at Media Oasis, strategic communications, bilateral engagement.',
        caption: 'Strategic communications: Amplifying Kingdom\'s G20 priorities'
      }
    ]
  },

  'mclaren-the-line': {
    slug: 'mclaren-the-line',
    title: 'McLaren at The Line',
    subtitle: 'Luxury Automotive Meets Futuristic Urbanism',
    category: 'Brand Activation',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1600&q=80',
    heroImagePrompt: 'McLaren supercar displayed at futuristic NEOM The Line venue, luxury automotive brand activation, high-impact showcase. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team produced McLaren\'s experiential activation at The Line, fusing luxury automotive excellence with NEOM\'s futuristic vision in a high-impact showcase. Designing immersive brand experiences, managing VIP guest engagement, and coordinating technical production, we created a seamless integration of McLaren\'s performance heritage with The Line\'s revolutionary urban concept—demonstrating our ability to blend brand objectives with transformative narratives.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80',
        prompt: 'McLaren vehicles showcased at The Line Experience venue, dramatic lighting, luxury presentation.',
        caption: 'Automotive excellence: McLaren performance meets urban innovation'
      },
      {
        url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
        prompt: 'VIP guests experiencing McLaren activation, test drive experiences, brand engagement.',
        caption: 'Experiential luxury: Immersive McLaren brand experiences'
      },
      {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
        prompt: 'The Line architectural displays with McLaren branding integration, futuristic venue.',
        caption: 'Vision alignment: McLaren and NEOM\'s shared future-forward narrative'
      },
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80',
        prompt: 'High-profile launch event for McLaren at The Line, media coverage, stakeholder engagement.',
        caption: 'High-impact activation: Creating memorable luxury brand moments'
      }
    ]
  },

  'bashayer': {
    slug: 'bashayer',
    title: 'Bashayer Community Event Series',
    subtitle: 'Celebrating Local Culture and Creativity',
    category: 'Cultural Events',
    year: '2021',
    heroImage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&q=80',
    heroImagePrompt: 'Community cultural event in Saudi Arabia with families engaged in traditional activities, local artists performing, vibrant atmosphere. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team curated and managed the Bashayer event series, celebrating local culture, creativity, and community spirit through diverse programming. Blending traditional performances, contemporary art, family activities, and youth engagement, we created inclusive experiences that honored Saudi heritage while fostering community connection. This project demonstrated our ability to deliver culturally-resonant programming that strengthens social fabric.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80',
        prompt: 'Traditional Saudi performance at Bashayer event, cultural celebration, engaged community.',
        caption: 'Cultural heritage: Traditional performances celebrating Saudi identity'
      },
      {
        url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80',
        prompt: 'Contemporary art installations at community event, local artists showcasing work.',
        caption: 'Creative expression: Platform for Saudi artists and creators'
      },
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
        prompt: 'Families engaging in activities at Bashayer, inclusive programming, community spirit.',
        caption: 'Community engagement: Bringing families together through culture'
      },
      {
        url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80',
        prompt: 'Youth participation at cultural event, creative workshops, next generation engagement.',
        caption: 'Youth focus: Inspiring next generation through cultural programming'
      }
    ]
  },

  'red-sea-film-festival-concerts': {
    slug: 'red-sea-film-festival-concerts',
    title: 'Red Sea International Film Festival Concerts',
    subtitle: 'Major Concert Production for Cinema Celebration',
    category: 'Cultural Events',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80',
    heroImagePrompt: 'Major concert stage at Red Sea Film Festival in Jeddah, international artists performing, cinematic lighting, VIP audience. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team led operational delivery and major concert production for the Red Sea International Film Festival, including galas, awards ceremonies, and headline performances in Jeddah. Managing artist coordination, technical production, VIP hospitality, and venue operations, we created unforgettable moments that elevated Saudi Arabia\'s position as a cultural destination and demonstrated our expertise in large-scale entertainment production.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
        prompt: 'International artist performing at Red Sea Film Festival, spectacular stage design.',
        caption: 'World-class entertainment: Major concerts celebrating cinema'
      },
      {
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
        prompt: 'Film festival gala with celebrities and VIP guests, Red Sea backdrop, elegant setting.',
        caption: 'Gala excellence: Celebrating global cinema in Jeddah'
      },
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
        prompt: 'Awards ceremony at film festival, trophy presentations, cinematic atmosphere.',
        caption: 'Awards production: Honoring cinematic excellence'
      },
      {
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
        prompt: 'Technical production for major concert, lighting design, stage management.',
        caption: 'Production mastery: Flawless technical delivery at scale'
      }
    ]
  },

  'gq-gala-jeddah': {
    slug: 'gq-gala-jeddah',
    title: 'GQ Gala, Jeddah',
    subtitle: 'Fashion, Culture, and Celebrity Engagement',
    category: 'Luxury Events',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80',
    heroImagePrompt: 'Elegant GQ Gala venue in Jeddah with fashion industry VIPs, red carpet, luxury brand activations. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team produced the GQ Gala in Jeddah, delivering a high-profile evening of fashion, culture, and celebrity engagement. Managing venue design, VIP hospitality, media coordination, and brand partnerships, we created a glamorous showcase that positioned Jeddah within the global fashion conversation while celebrating regional style and creativity—demonstrating our expertise in luxury lifestyle event production.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
        prompt: 'Fashion presentation at GQ Gala, models showcasing designs, VIP audience.',
        caption: 'Fashion showcase: Elevating regional style on global platform'
      },
      {
        url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80',
        prompt: 'Celebrity arrivals at GQ Gala red carpet, photographers, media coverage.',
        caption: 'Celebrity engagement: Attracting global fashion and entertainment figures'
      },
      {
        url: 'https://images.unsplash.com/photo-1519167758481-83f29da8c8b0?w=800&q=80',
        prompt: 'Luxury venue design for GQ Gala, elegant table settings, brand activations.',
        caption: 'Luxury production: Creating sophisticated GQ brand experience'
      },
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        prompt: 'VIP networking at GQ Gala, fashion industry leaders, cultural conversations.',
        caption: 'Industry connection: Building bridges in fashion and culture'
      }
    ]
  },

  'hia-magazine-gala': {
    slug: 'hia-magazine-gala',
    title: 'HIA Magazine Gala Dinner',
    subtitle: 'Premium Hospitality for Regional Publication',
    category: 'Corporate Events',
    year: '2022',
    heroImage: 'https://images.unsplash.com/photo-1519167758481-83f29da8c8b0?w=1600&q=80',
    heroImagePrompt: 'Elegant corporate gala dinner with premium table settings, HIA Magazine branding, VIP guests networking. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team managed the HIA Magazine Gala Dinner, providing seamless event production and VIP hospitality for a leading regional publication. Coordinating venue design, catering excellence, entertainment, and guest experience, we created an elegant evening that reinforced HIA\'s brand prestige while facilitating meaningful connections among regional business and cultural leaders—showcasing our corporate hospitality expertise.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
        prompt: 'Premium gala dinner table settings, elegant centerpieces, HIA Magazine branding.',
        caption: 'Hospitality excellence: Premium event design and execution'
      },
      {
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
        prompt: 'VIP guests networking at HIA gala, regional business leaders, cultural figures.',
        caption: 'Elite networking: Connecting regional influencers and decision-makers'
      },
      {
        url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80',
        prompt: 'Entertainment at gala dinner, live performance, sophisticated atmosphere.',
        caption: 'Entertainment curation: Creating memorable gala moments'
      },
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80',
        prompt: 'Event production coordination, seamless service delivery, VIP experience management.',
        caption: 'Production mastery: Flawless corporate event execution'
      }
    ]
  },

  'museum-commission-strategy': {
    slug: 'museum-commission-strategy',
    title: 'Museum Commission Strategy Launch',
    subtitle: 'Engaging Stakeholders with Cultural Vision',
    category: 'Cultural Strategy',
    year: '2022',
    heroImage: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1600&q=80',
    heroImagePrompt: 'Modern museum venue with strategy launch event, curated content displays, cultural leaders and media engaged. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team produced the launch event for the Museum Commission\'s new strategy, engaging stakeholders and media with curated content and presentations. Managing venue design, stakeholder communications, media coordination, and experiential storytelling, we translated complex cultural policy into compelling narrative while building support for the Commission\'s vision—demonstrating our ability to communicate strategic initiatives effectively.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1569074187119-c87815b476da?w=1600&q=80',
        prompt: 'Strategy presentation at museum venue, cultural leaders engaged, vision displays.',
        caption: 'Strategic launch: Unveiling Museum Commission\'s cultural roadmap'
      },
      {
        url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80',
        prompt: 'Media briefing at strategy launch, press engagement, narrative amplification.',
        caption: 'Media engagement: Communicating cultural vision to public'
      },
      {
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
        prompt: 'Stakeholder networking at launch event, cultural sector leaders, strategic conversations.',
        caption: 'Stakeholder alignment: Building support for cultural strategy'
      },
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        prompt: 'Interactive exhibits showcasing museum strategy, experiential storytelling, engaged visitors.',
        caption: 'Experiential communication: Strategy brought to life through immersive design'
      }
    ]
  },

  'misk-art-week': {
    slug: 'misk-art-week',
    title: 'Misk Art Week',
    subtitle: 'Supporting Emerging Artists and Creative Dialogue',
    category: 'Cultural Events',
    year: '2021',
    heroImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1600&q=80',
    heroImagePrompt: 'Contemporary art exhibition at Misk Art Week, young Saudi artists showcasing work, interactive installations. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team delivered programming and production for Misk Art Week, supporting emerging artists and creative dialogue across Saudi Arabia. Curating exhibitions, managing artist facilities, coordinating workshops, and facilitating public engagement, we created a platform that nurtured the Kingdom\'s next generation of creative talent while fostering cultural conversation—demonstrating our commitment to arts development and youth empowerment.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&q=80',
        prompt: 'Emerging Saudi artists displaying work at Misk Art Week, contemporary art installations.',
        caption: 'Artist platform: Showcasing Saudi Arabia\'s creative talent'
      },
      {
        url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
        prompt: 'Art workshops at Misk Art Week, creative learning, skill development.',
        caption: 'Creative development: Workshops nurturing artistic skills'
      },
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        prompt: 'Public engaging with art installations, interactive exhibits, cultural dialogue.',
        caption: 'Community engagement: Making art accessible to all'
      },
      {
        url: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80',
        prompt: 'Panel discussions on art and culture, emerging artists, creative industry leaders.',
        caption: 'Creative dialogue: Building Saudi Arabia\'s artistic ecosystem'
      }
    ]
  },

  'seaworld-yas-opening': {
    slug: 'seaworld-yas-opening',
    title: 'SeaWorld Yas Island Grand Opening',
    subtitle: 'Theme Park Launch with VVIP Experiences',
    category: 'Major Events',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80',
    heroImagePrompt: 'SeaWorld Yas Island grand opening with custom stage, VVIP guests, marine-themed spectacular production. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team designed and executed the grand opening of SeaWorld Yas Island, including custom stage design, VVIP experiences, and extensive project management. Coordinating ceremonial programming, VIP hospitality, media engagement, and operational delivery, we created a launch event befitting the region\'s newest world-class attraction while managing complex stakeholder expectations—demonstrating our capacity for major venue openings.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80',
        prompt: 'Custom stage for SeaWorld opening ceremony, marine-themed design, spectacular production.',
        caption: 'Spectacular production: Custom stage for landmark opening'
      },
      {
        url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
        prompt: 'VVIP guests experiencing SeaWorld opening, exclusive tours, premium hospitality.',
        caption: 'VVIP experiences: Curating unforgettable opening moments'
      },
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        prompt: 'Media covering SeaWorld Yas Island opening, press engagement, regional excitement.',
        caption: 'Media amplification: Generating excitement for new attraction'
      },
      {
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
        prompt: 'Project management coordination for major venue opening, operational delivery.',
        caption: 'Project mastery: Managing complex opening operations'
      }
    ]
  },

  'qasr-al-watan-opening': {
    slug: 'qasr-al-watan-opening',
    title: 'Qasr Al Watan Grand Opening',
    subtitle: 'Presidential Palace Launch with Cultural Ceremony',
    category: 'Landmark Events',
    year: '2019',
    heroImage: 'https://images.unsplash.com/photo-1586613241595-ab66ff648030?w=1600&q=80',
    heroImagePrompt: 'Majestic Qasr Al Watan palace illuminated at night for grand opening, ceremonial guests, UAE flag displayed prominently. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team produced the grand opening of Qasr Al Watan, Abu Dhabi\'s presidential palace, with immersive ceremonies and cultural programming. Managing protocol, guest experience, cultural performances, and venue transformation, we created a historic moment that showcased Emirati heritage and governance to the world while opening this architectural masterpiece to the public—a project requiring the highest level of ceremonial expertise.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=1600&q=80',
        prompt: 'Ceremonial opening of Qasr Al Watan, dignitaries attending, UAE cultural traditions.',
        caption: 'Historic ceremony: Opening Abu Dhabi\'s presidential palace'
      },
      {
        url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80',
        prompt: 'Traditional Emirati cultural performance at palace opening, authentic programming.',
        caption: 'Cultural showcase: Celebrating Emirati heritage and identity'
      },
      {
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
        prompt: 'Immersive lighting transforming Qasr Al Watan for opening night, architectural splendor.',
        caption: 'Architectural celebration: Lighting design honoring palace grandeur'
      },
      {
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        prompt: 'Protocol management for presidential palace opening, diplomatic guests, ceremonial precision.',
        caption: 'Protocol excellence: Managing highest-level ceremonial event'
      }
    ]
  },

  'human-fraternity-anniversary': {
    slug: 'human-fraternity-anniversary',
    title: 'Anniversary of Human Fraternity Document',
    subtitle: 'Interfaith Dialogue and Cultural Unity',
    category: 'Interfaith Events',
    year: '2020',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80',
    heroImagePrompt: 'Interfaith gathering at Human Fraternity anniversary, diverse religious leaders, unity programming, UAE venue. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team managed the anniversary celebration of the Document on Human Fraternity, delivering a program of unity, dialogue, and cultural exchange. Coordinating interfaith programming, managing diverse stakeholder sensitivities, and creating inclusive experiences, we honored the historic agreement between Pope Francis and Grand Imam Ahmed Al-Tayeb while advancing Abu Dhabi\'s role as a global center for tolerance—demonstrating our expertise in sensitive, values-driven events.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
        prompt: 'Interfaith leaders participating in Human Fraternity anniversary, unity message.',
        caption: 'Interfaith unity: Celebrating dialogue between faiths'
      },
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
        prompt: 'Cultural exchange programming at anniversary event, diverse communities engaged.',
        caption: 'Cultural exchange: Building bridges across communities'
      },
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
        prompt: 'Panel discussion on tolerance and coexistence, religious leaders, academic speakers.',
        caption: 'Dialogue programming: Advancing Human Fraternity principles'
      },
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        prompt: 'Community engagement at tolerance event, inclusive programming, unity celebration.',
        caption: 'Community impact: Abu Dhabi as global center for tolerance'
      }
    ]
  },

  'special-olympics-mena-ceremony': {
    slug: 'special-olympics-mena-ceremony',
    title: 'Special Olympics MENA Opening Ceremony',
    subtitle: 'Championing Inclusion and Athletic Achievement',
    category: 'Sports Events',
    year: '2018',
    heroImage: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1600&q=80',
    heroImagePrompt: 'Special Olympics MENA opening ceremony with athletes marching, inclusive celebration, powerful moment of unity. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team produced the opening ceremony for the Special Olympics MENA, championing inclusion and athletic achievement across the region. Managing ceremonial programming, athlete experiences, cultural performances, and stadium operations, we created a powerful celebration of human potential that inspired audiences while positioning the UAE as a leader in inclusive sport—demonstrating our ability to deliver emotionally-resonant sporting events.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1600&q=80',
        prompt: 'Athletes marching in Special Olympics opening ceremony, pride and determination.',
        caption: 'Athlete celebration: Honoring courage and achievement'
      },
      {
        url: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80',
        prompt: 'Inclusive programming at ceremony, diverse athletes, celebration of abilities.',
        caption: 'Inclusion showcase: Special Olympics values brought to life'
      },
      {
        url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80',
        prompt: 'Cultural performance at opening ceremony, regional traditions, unifying moment.',
        caption: 'Cultural unity: MENA region celebrating together through sport'
      },
      {
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
        prompt: 'Stadium production for opening ceremony, lighting design, inspiring atmosphere.',
        caption: 'Production excellence: Creating unforgettable ceremony experience'
      }
    ]
  },

  'al-burda-festival': {
    slug: 'al-burda-festival',
    title: 'Al Burda Festival 2021',
    subtitle: 'Celebrating Islamic Arts and Culture',
    category: 'Cultural Events',
    year: '2021',
    heroImage: 'https://images.unsplash.com/photo-1580641961851-476e96b5d648?w=1600&q=80',
    heroImagePrompt: 'Islamic arts festival with calligraphy exhibitions, traditional performances, cultural celebrations in elegant venue. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team curated and delivered the Al Burda Festival, celebrating Islamic arts and culture through exhibitions, performances, and workshops. Managing artistic programming, venue design, community engagement, and educational initiatives, we created an immersive cultural experience that honored Islamic artistic heritage while inspiring contemporary creative practice—demonstrating our expertise in culturally-significant programming with deep respect for tradition.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1580130732478-2e2d3c2f7dcb?w=800&q=80',
        prompt: 'Islamic calligraphy exhibition at Al Burda Festival, masterworks on display.',
        caption: 'Artistic heritage: Showcasing Islamic calligraphy excellence'
      },
      {
        url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
        prompt: 'Traditional Islamic music performance at festival, authentic cultural experience.',
        caption: 'Musical tradition: Celebrating Islamic performing arts'
      },
      {
        url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
        prompt: 'Workshops teaching traditional Islamic arts, community participation, skill sharing.',
        caption: 'Educational programming: Passing artistic traditions to next generation'
      },
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        prompt: 'Community engagement at Al Burda Festival, families experiencing Islamic culture.',
        caption: 'Cultural celebration: Making Islamic arts accessible and inspiring'
      }
    ]
  },

  'parenthood-unconference': {
    slug: 'parenthood-unconference',
    title: 'Parenthood: The Unconference',
    subtitle: 'Pioneering Family and Community Dialogue',
    category: 'Thought Leadership',
    year: '2020',
    heroImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&q=80',
    heroImagePrompt: 'Interactive unconference session with parents engaged in dialogue, workshop setting, collaborative atmosphere. Cinematic, professional photography, monotone colour scheme with dark greys and whites, dramatic lighting, high-resolution, minimalist feel.',
    engagingParagraph: '<p class="mb-4"><strong>Delivered by G2 Middle East staff.</strong> Our team produced "Parenthood: The Unconference," a pioneering event focused on family, parenting, and community dialogue through interactive sessions. Breaking from traditional conference formats, we created participant-driven programming that fostered authentic conversations about parenting challenges, family values, and community support—demonstrating our ability to innovate event formats while addressing meaningful social topics with sensitivity and impact.',
    supportingImages: [
      {
        url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80',
        prompt: 'Interactive workshop session at unconference, parents engaged in dialogue.',
        caption: 'Collaborative format: Parent-driven programming and authentic dialogue'
      },
      {
        url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
        prompt: 'Diverse families participating in unconference sessions, inclusive programming.',
        caption: 'Inclusive dialogue: All families represented and valued'
      },
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
        prompt: 'Expert facilitators guiding parenting discussions, thought leadership on family topics.',
        caption: 'Expert facilitation: Guiding meaningful conversations'
      },
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
        prompt: 'Community building at unconference, networking among parents, support networks forming.',
        caption: 'Community building: Creating lasting support networks'
      }
    ]
  }
}
