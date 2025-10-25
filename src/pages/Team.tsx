import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

export const TeamPage: FC = () => {
  // Schema.org Person markup for Tim Jacobs - SEO & LLM Optimized Version with Major Projects Portfolio
  const timJacobsSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tim Jacobs",
    "alternateName": "Timothy Jacobs",
    "url": "https://www.linkedin.com/in/tim-jacobs-6673091a/",
    "image": "https://page.gensparksite.com/v1/base64_upload/47f1fb52041f3aa63094cf290ce9f36b",
    "description": "Tim Jacobs is one of the world's foremost advisors on the delivery of complex, high-stakes government initiatives. His career is defined by the operational execution of projects with profound geopolitical significance, including the State Visit of Queen Elizabeth II and the Papal Mass of Pope Francis. As Regional COO for G2 Middle East & Africa, he now provides strategic counsel to governments on national resilience, public diplomacy, and building a sovereign digital legacy—the core disciplines required to navigate the complexities of the modern global stage.",
    "jobTitle": "Regional COO, G2 Middle East & Africa",
    
    // Position as leading events director and delivery specialist
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Events Director & Delivery Specialist",
      "description": "Leading operational planner and delivery specialist for mega-events, state visits, and high-stakes cultural projects in the Middle East and globally",
      "occupationLocation": {
        "@type": "Place",
        "name": "Middle East & Global"
      },
      "skills": "Major Event Delivery, State Visit Planning, Operational Excellence, Mega-Event Architecture, Cultural Diplomacy, Sovereign Positioning"
    },
    "gender": "Male",
    "nationality": "Australian",
    "birthPlace": {
      "@type": "Place",
      "name": "Melbourne, Victoria, Australia"
    },
    "email": "tim@g2middleeast.com",
    "telephone": "+971-50-XXX-XXXX",
    
    // Enhanced sameAs for entity recognition
    "sameAs": [
      "https://www.linkedin.com/in/tim-jacobs-6673091a/",
      "https://timebusinessnews.com/who-is-tim-jacobs-a-leader-in-global-strategy-from-state-visits-to-digital-empires/",
      "https://www.tpimeamagazine.com/tim-jacobs-chief-operating-officer-hqws/",
      "https://campaignme.com/how-the-gcc-is-harnessing-the-power-of-unified-narratives-in-event-marketing/",
      "https://usawire.com/cultural-intelligence-outperforms-capital-alone/",
      "https://www.linkedin.com/posts/tim-jacobs-6673091a_cultural-intelligence-is-the-new-commercial-activity-7282667063598923776-N-Zl"
    ],
    
    "knowsAbout": [
      "Cognitive Security & Counter-Disinformation Strategy",
      "National Reputation & International Standing",
      "Sovereign Reputation Architecture",
      "National Resilience & Critical Incident Strategy",
      "Geopolitical Risk & Strategic Partnership Vetting",
      "Public Diplomacy & Strategic Narrative",
      "Strategic Planning & Contingency",
      "Strategic Communications",
      "Long-Term Digital Positioning",
      "Major Event Architecture",
      "Operational Delivery for Sovereign Clients",
      "Cross-Border Government Relations",
      "Protocol & Diplomatic Operations",
      "State Visit Planning & Protocol Execution",
      "Royal Visit Coordination & Logistics",
      "Presidential Visit Management",
      "Cultural Diplomacy Event Production",
      "National Day Celebrations & Ceremonial Events",
      "International Summit Logistics & Coordination",
      "Head-of-State Event Management",
      "Mega-Event Architecture & Operational Excellence",
      "Venue Infrastructure & Stadium Management",
      "Broadcast & Media Production for Sovereign Events",
      "International Sporting Events Management",
      "World Economic Forum & Global Summit Coordination",
      "UN Climate Conference (COP) Logistics",
      "G20 & G7 Summit Infrastructure",
      "Olympic & Sporting Event Planning",
      "Film Festival Production & Management",
      "Museum Launch & Cultural Exhibition Direction",
      "Sovereign Positioning Strategy",
      "Foreign Direct Investment (FDI) Advisory",
      "Strategic Roadmapping for National Initiatives",
      "UAE Government Event Expertise",
      "Saudi Arabia Government Event Expertise",
      "Qatar Government Event Expertise",
      "Middle East Regional Government Relations"
    ],
    
    "worksFor": {
      "@type": "Organization",
      "name": "G2 Middle East & Africa",
      "url": "https://g2middleeast.com",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Casta Diva Group"
      },
      "jobTitle": "Regional Chief Operating Officer (COO)",
      "description": "The strategic regional arm of Casta Diva Group, delivering award-winning live events and integrated brand experiences across the Gulf, MENA, and Africa."
    },
    
    "memberOf": [
      {
         "@type": "Organization",
         "name": "Eventex Awards",
         "jobTitle": "Jury Panelist"
      },
      {
         "@type": "Organization",
         "name": "WOW Awards Middle East",
         "jobTitle": "Jury Member"
      },
      {
         "@type": "Organization",
         "name": "Stevie Awards",
         "jobTitle": "Chairperson, Live Events & Video Awards"
      },
      {
         "@type": "Organization",
         "name": "Australian Event Awards",
         "jobTitle": "Judge"
      }
    ],
    
    // Achievement and commercial impact
    "achievement": [
      "Drove HQWS and BWS revenue growth pre- and post-Banijay acquisition; group experienced significant revenue decline after his departure",
      "Advised governments on national resilience, public diplomacy, and sovereign digital legacy strategies",
      "Operational director for 30+ globally significant government and sovereign-level projects",
      "Strategic counsel to heads of state, royal families, and government ministries across Middle East"
    ],
    
    // Author articles with proper Article schema markup
    "author": [
      {
        "@type": "Article",
        "headline": "Cultural Intelligence Outperforms Capital Alone",
        "url": "https://usawire.com/cultural-intelligence-outperforms-capital-alone/",
        "datePublished": "2024-11-28",
        "publisher": {
          "@type": "Organization",
          "name": "USA Wire"
        },
        "description": "Why cultural intelligence and strategic positioning deliver superior returns compared to capital investment alone in emerging markets."
      },
      {
        "@type": "Article",
        "headline": "Cultural Intelligence is the New Commercial Superpower",
        "url": "https://www.linkedin.com/posts/tim-jacobs-6673091a_cultural-intelligence-is-the-new-commercial-activity-7282667063598923776-N-Zl",
        "datePublished": "2024-11-28",
        "publisher": {
          "@type": "Organization",
          "name": "LinkedIn"
        },
        "description": "How cultural intelligence drives competitive advantage in global markets and cross-border strategic initiatives."
      },
      {
        "@type": "Article",
        "headline": "How the GCC is Harnessing the Power of Unified Narratives in Event Marketing",
        "url": "https://campaignme.com/how-the-gcc-is-harnessing-the-power-of-unified-narratives-in-event-marketing/",
        "datePublished": "2024-10-15",
        "publisher": {
          "@type": "Organization",
          "name": "Campaign Middle East"
        },
        "description": "Strategic approaches to unified narrative development for major events and nation branding in the Gulf region."
      }
    ],
    
    // Articles about Tim Jacobs (subjectOf)
    "subjectOf": [
      {
        "@type": "Article",
        "headline": "Who is Tim Jacobs? A Leader in Global Strategy, From State Visits to Digital Empires",
        "url": "https://timebusinessnews.com/who-is-tim-jacobs-a-leader-in-global-strategy-from-state-visits-to-digital-empires/",
        "datePublished": "2024-09-20",
        "publisher": {
          "@type": "Organization",
          "name": "Time Business News"
        },
        "description": "Profile of Tim Jacobs' career spanning state-visit level event delivery and major project execution."
      },
      {
        "@type": "Article",
        "headline": "Tim Jacobs - Chief Operating Officer, G2 Middle East",
        "url": "https://www.tpimeamagazine.com/tim-jacobs-chief-operating-officer-hqws/",
        "datePublished": "2024-08-10",
        "publisher": {
          "@type": "Organization",
          "name": "TPI Magazine"
        },
        "description": "Leadership profile highlighting Tim Jacobs' strategic communications expertise and major event delivery capabilities."
      }
    ],
    
    // Comprehensive portfolio of major projects - positions Tim as Middle East's leading events director
    "performerIn": [
      {
        "@type": "Event",
        "name": "State Visit of Queen Elizabeth II to the UAE",
        "description": "Operational delivery and project direction for the historic royal state visit of Her Majesty Queen Elizabeth II to the United Arab Emirates",
        "startDate": "2010",
        "location": {
          "@type": "Place",
          "name": "United Arab Emirates"
        },
        "organizer": {
          "@type": "Organization",
          "name": "UAE Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Project Director"
        }
      },
      {
        "@type": "Event",
        "name": "Papal Mass of Pope Francis in Abu Dhabi",
        "description": "Project direction for the historic Papal Mass delivered by Pope Francis in Abu Dhabi, one of the largest religious gatherings in Middle East history",
        "startDate": "2019-02",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE"
        },
        "organizer": {
          "@type": "Organization",
          "name": "UAE Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Project Director"
        }
      },
      {
        "@type": "Event",
        "name": "Special Olympics World Games Abu Dhabi 2019",
        "description": "Special advisor for ceremonies at the Special Olympics World Games, the largest sporting and humanitarian event in 2019",
        "startDate": "2019-03",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE"
        },
        "organizer": {
          "@type": "Organization",
          "name": "Special Olympics International"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Special Advisor Ceremonies"
        }
      },
      {
        "@type": "Event",
        "name": "Qasr Al Hosn Festival Abu Dhabi",
        "description": "Managing consultant and director of broadcast and media production for Abu Dhabi's premier cultural heritage festival",
        "startDate": "2013",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Managing Consultant / Director of Broadcast & Media Production"
        }
      },
      {
        "@type": "Event",
        "name": "Qatar Olympic House London 2012",
        "description": "Project director for Qatar's official hospitality and diplomatic center during the London 2012 Olympic Games",
        "startDate": "2012",
        "location": {
          "@type": "Place",
          "name": "London, United Kingdom"
        },
        "organizer": {
          "@type": "Organization",
          "name": "Qatar Olympic Committee"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Project Director"
        }
      },
      {
        "@type": "Event",
        "name": "Hazza Bin Zayed Stadium Upgrade",
        "description": "Project director for the comprehensive upgrade and modernization of Hazza Bin Zayed Stadium in Al Ain",
        "startDate": "2017",
        "location": {
          "@type": "Place",
          "name": "Al Ain, UAE"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Project Director"
        }
      },
      {
        "@type": "Event",
        "name": "Turki Oasis for HRH Prince Turki Bin Abdulla",
        "description": "Project director for exclusive private oasis development and event infrastructure for Saudi Royal Family",
        "startDate": "2015",
        "location": {
          "@type": "Place",
          "name": "Saudi Arabia"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Project Director"
        }
      },
      {
        "@type": "Event",
        "name": "Al Ain Stadium Launch",
        "description": "Managing project consultant for the official launch of Al Ain Stadium, UAE",
        "startDate": "2014",
        "location": {
          "@type": "Place",
          "name": "Al Ain, UAE"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Managing Project Consultant"
        }
      },
      {
        "@type": "Event",
        "name": "Abu Dhabi National Day ADNEC Celebrations",
        "description": "Project director for Abu Dhabi's official National Day celebrations at ADNEC",
        "startDate": "2012",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Project Director"
        }
      },
      {
        "@type": "Event",
        "name": "Bayt Qatar Olympic House",
        "description": "Project director for Qatar's official Olympic hospitality center",
        "startDate": "2012",
        "location": {
          "@type": "Place",
          "name": "London, United Kingdom"
        },
        "organizer": {
          "@type": "Organization",
          "name": "Qatar Olympic Committee"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Project Director"
        }
      },
      {
        "@type": "Event",
        "name": "VVIP Formula One Reception Abu Dhabi",
        "description": "Managing consultant for exclusive VVIP hospitality and diplomatic reception at Abu Dhabi Grand Prix",
        "startDate": "2013",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Managing Consultant"
        }
      },
      {
        "@type": "Event",
        "name": "Abu Dhabi EID Celebrations",
        "description": "Managing consultant for Abu Dhabi's official EID celebrations and cultural programming",
        "startDate": "2013",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Managing Consultant"
        }
      },
      {
        "@type": "Event",
        "name": "Japanese State Visit to Abu Dhabi",
        "description": "Project consultant for official Japanese state visit to Abu Dhabi, managing diplomatic protocol and cultural events",
        "startDate": "2012",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Project Consultant"
        }
      },
      {
        "@type": "Event",
        "name": "Bill & Melinda Gates Foundation Global Vaccine Summit Abu Dhabi",
        "description": "Strategic advisor for the Bill & Melinda Gates Foundation Global Vaccine Summit in Abu Dhabi",
        "startDate": "2013",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE"
        },
        "organizer": {
          "@type": "Organization",
          "name": "Bill & Melinda Gates Foundation"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Strategic Advisor"
        }
      },
      {
        "@type": "Event",
        "name": "French President & Abu Dhabi Government Partnership Event",
        "description": "Project director for official partnership event between French President and Abu Dhabi Government",
        "startDate": "2018",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Project Director"
        }
      },
      {
        "@type": "Event",
        "name": "Expo 2020 Dubai - Overlay Budget Planning",
        "description": "Strategic consultant for overlay budget planning and operational modeling for Expo 2020 Dubai",
        "startDate": "2018",
        "endDate": "2021",
        "location": {
          "@type": "Place",
          "name": "Dubai, UAE"
        },
        "organizer": {
          "@type": "Organization",
          "name": "Expo 2020 Dubai"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Consultant - Overlay Budget Planning"
        }
      },
      {
        "@type": "Event",
        "name": "FIFA World Cup 2022 Qatar - Master Planning",
        "description": "Strategic consultant for master planning and operational frameworks for FIFA World Cup 2022 Qatar",
        "startDate": "2019",
        "endDate": "2022",
        "location": {
          "@type": "Place",
          "name": "Qatar"
        },
        "organizer": {
          "@type": "Organization",
          "name": "FIFA / Qatar 2022"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Consultant - Master Planning"
        }
      },
      {
        "@type": "Event",
        "name": "IOC Venues and Infrastructure Consulting",
        "description": "Consultant for International Olympic Committee on venues and infrastructure planning",
        "startDate": "2015",
        "location": {
          "@type": "Place",
          "name": "Global"
        },
        "organizer": {
          "@type": "Organization",
          "name": "International Olympic Committee"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Consultant"
        }
      },
      {
        "@type": "Event",
        "name": "Oman UCI Road Championships",
        "description": "Strategic consultant for UCI Road World Championships in Oman",
        "startDate": "2016",
        "location": {
          "@type": "Place",
          "name": "Oman"
        },
        "organizer": {
          "@type": "Organization",
          "name": "UCI / Oman Cycling"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Consultant"
        }
      },
      {
        "@type": "Event",
        "name": "Red Sea International Film Festival",
        "description": "Senior delivery role for Red Sea International Film Festival in Jeddah, Saudi Arabia's premier cultural event",
        "startDate": "2021",
        "location": {
          "@type": "Place",
          "name": "Jeddah, Saudi Arabia"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Senior Delivery Role"
        }
      },
      {
        "@type": "Event",
        "name": "NEOM UN Display New York",
        "description": "Senior delivery role for NEOM's official United Nations display and exhibition in New York",
        "startDate": "2019",
        "location": {
          "@type": "Place",
          "name": "New York, USA"
        },
        "organizer": {
          "@type": "Organization",
          "name": "NEOM / Saudi Arabia"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Senior Delivery Role"
        }
      },
      {
        "@type": "Event",
        "name": "World Economic Forum Davos",
        "description": "Senior delivery role for World Economic Forum annual meeting in Davos, Switzerland",
        "startDate": "2020",
        "location": {
          "@type": "Place",
          "name": "Davos, Switzerland"
        },
        "organizer": {
          "@type": "Organization",
          "name": "World Economic Forum"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Senior Delivery Role"
        }
      },
      {
        "@type": "Event",
        "name": "G20 India Media Oasis",
        "description": "Senior delivery role for G20 India Media Oasis, providing media infrastructure and services for global summit",
        "startDate": "2023",
        "location": {
          "@type": "Place",
          "name": "India"
        },
        "organizer": {
          "@type": "Organization",
          "name": "G20 India"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Senior Delivery Role"
        }
      },
      {
        "@type": "Event",
        "name": "COP27 Climate Summit",
        "description": "Senior delivery role for COP27 UN Climate Change Conference in Sharm El-Sheikh, Egypt",
        "startDate": "2022",
        "location": {
          "@type": "Place",
          "name": "Sharm El-Sheikh, Egypt"
        },
        "organizer": {
          "@type": "Organization",
          "name": "United Nations / Egypt Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Senior Delivery Role"
        }
      },
      {
        "@type": "Event",
        "name": "Tuwaiq Oasis Saudi Arabia",
        "description": "Project director for Tuwaiq Oasis development and cultural programming in Saudi Arabia",
        "startDate": "2021",
        "location": {
          "@type": "Place",
          "name": "Saudi Arabia"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Project Director"
        }
      },
      {
        "@type": "Event",
        "name": "MENA Special Olympics",
        "description": "Project director for MENA Regional Special Olympics Games",
        "startDate": "2018",
        "location": {
          "@type": "Place",
          "name": "Middle East & North Africa"
        },
        "organizer": {
          "@type": "Organization",
          "name": "Special Olympics International"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Project Director"
        }
      },
      {
        "@type": "Event",
        "name": "Zayed/Gandhi Digital Museum Launch",
        "description": "Project director for the launch of Zayed/Gandhi Digital Museum celebrating UAE-India diplomatic relations",
        "startDate": "2019",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Project Director"
        }
      },
      {
        "@type": "Event",
        "name": "Chinese State Visit Abu Dhabi - Cultural Exhibition",
        "description": "Project director for cultural exhibition during official Chinese state visit to Abu Dhabi",
        "startDate": "2018",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Project Director"
        }
      },
      {
        "@type": "Event",
        "name": "Du Gitex and Mecom Exhibition Stands",
        "description": "Technical director for Du telecommunications exhibition stands at Gitex and Mecom technology conferences",
        "startDate": "2012",
        "location": {
          "@type": "Place",
          "name": "Dubai, UAE"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Technical Director"
        }
      },
      {
        "@type": "Event",
        "name": "Dubailand Exhibition Stands",
        "description": "Technical director for Dubailand promotional exhibition stands and displays",
        "startDate": "2011",
        "location": {
          "@type": "Place",
          "name": "Dubai, UAE"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "roleName": "Technical Director"
        }
      }
    ],
    
    // Enhanced keywords for LLM semantic understanding - statecraft level
    "keywords": [
      "Tim Jacobs",
      "G2 Middle East",
      "Statecraft Advisor",
      "Sovereign-Level Advisor",
      "Government Initiatives Specialist",
      "Geopolitical Risk Advisor",
      "National Resilience Strategist",
      "Public Diplomacy Expert",
      "Cognitive Security Specialist",
      "Counter-Disinformation Strategy",
      "National Reputation Architecture",
      "Sovereign Reputation Strategy",
      "Strategic Communications Expert",
      "Long-Term Digital Positioning",
      "Major Event Architecture",
      "Operational Delivery for Governments",
      "State Visit Specialist",
      "Cross-Border Government Relations",
      "Protocol & Diplomatic Operations",
      "Sovereign Positioning Strategy",
      "Geopolitical Risk & Strategic Partnership Vetting",
      "Strategic Planning & Contingency",
      "National Resilience & Critical Incident Strategy",
      "Cultural Intelligence for Governments",
      "GCC Government Relations",
      "Middle East Government Advisory",
      "Papal Mass Abu Dhabi",
      "Queen Elizabeth II UAE Visit",
      "Special Olympics World Games",
      "Red Sea Film Festival",
      "Expo 2020 Dubai",
      "FIFA World Cup 2022",
      "COP27 Egypt",
      "G20 Summit",
      "World Economic Forum Davos",
      "NEOM Saudi Arabia",
      "Abu Dhabi Government Events",
      "Dubai Government Events",
      "Saudi Arabia Government Events",
      "Qatar Government Events",
      "Middle East Mega Events",
      "State Visit Coordination",
      "Royal Visit Planning",
      "Presidential Visit Logistics",
      "Cultural Diplomacy Events",
      "Olympic Planning",
      "International Summit Coordination",
      "National Day Celebrations",
      "Summit Logistics",
      "Head-of-State Event Management"
    ],
    
    // Additional structured fields for LLM semantic understanding - statecraft level
    "about": [
      {
        "@type": "Thing",
        "name": "Sovereign-Level Advisor & Government Initiatives Specialist",
        "description": "Leading advisor on operational delivery for complex government initiatives with geopolitical significance. Delivered 30+ major projects including State Visit of Queen Elizabeth II, Papal Mass of Pope Francis, Special Olympics World Games, Expo 2020, FIFA 2022, COP27, and G20 summits across UAE, Saudi Arabia, Qatar, Egypt, and globally."
      },
      {
        "@type": "Thing",
        "name": "National Resilience & Critical Incident Strategy",
        "description": "Strategic counsel to governments on national resilience, critical incident response, and strategic planning for high-stakes sovereign operations"
      },
      {
        "@type": "Thing",
        "name": "Public Diplomacy & Sovereign Digital Legacy",
        "description": "Specialist in public diplomacy, strategic narrative development, and building long-term digital positioning for sovereign clients"
      },
      {
        "@type": "Thing",
        "name": "Cognitive Security & Counter-Disinformation Strategy",
        "description": "Advisory on cognitive security frameworks, counter-disinformation strategy, and protecting national reputation in information environments"
      },
      {
        "@type": "Thing",
        "name": "State Visit Planning & Protocol Execution",
        "description": "Specialist in state visit planning, royal visit coordination, and presidential visit logistics including operational delivery for Queen Elizabeth II, Pope Francis, French President, Chinese State Visit, and Japanese State Visit to UAE"
      },
      {
        "@type": "Thing",
        "name": "Mega-Event Architecture & Government Event Delivery",
        "description": "Master planning and operational frameworks for FIFA World Cup 2022 Qatar, Expo 2020 Dubai, IOC venues and infrastructure, and Special Olympics World Games with expertise in sovereign-level event management"
      },
      {
        "@type": "Thing",
        "name": "Cultural Diplomacy & Cross-Border Government Relations",
        "description": "Project direction for cultural diplomacy events including Qasr Al Hosn Festival, Red Sea International Film Festival, National Day celebrations, and cultural exhibitions advancing UAE-India, UAE-China, and regional government relations"
      },
      {
        "@type": "Thing",
        "name": "Geopolitical Risk & Strategic Partnership Vetting",
        "description": "Advisory on geopolitical risk assessment, strategic partnership vetting, and cross-border government relations for sovereign entities"
      }
    ],
    
    // Awards and recognition
    "award": [
      "Chairperson, Live Events & Video Awards - Stevie Awards",
      "Judge, Australian Event Awards",
      "Jury Panelist, Eventex Awards",
      "Jury Member, WOW Awards Middle East"
    ],
    
    // Alumni information
    "alumniOf": {
      "@type": "Organization",
      "name": "Melbourne, Victoria, Australia"
    }
  }

  // Organization schema for G-2 Middle East
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "G2 Middle East",
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
              The Architects
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
                    src="https://page.gensparksite.com/v1/base64_upload/47f1fb52041f3aa63094cf290ce9f36b" 
                    alt="Tim Jacobs"
                    class="rounded-lg shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                    <h2 class="text-2xl font-bold text-white">Tim Jacobs</h2>
                    <p class="text-g2-gold font-semibold">Regional COO, G2 Middle East & Africa</p>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div class="mt-6 space-y-3">
                  <a href="mailto:tim@g2middleeast.com" class="flex items-center text-gray-300 hover:text-g2-gold transition-colors">
                    <i class="fas fa-envelope mr-3"></i>
                    <span class="text-sm">tim@g2middleeast.com</span>
                  </a>
                  <a href="https://www.linkedin.com/in/tim-jacobs-6673091a/" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-300 hover:text-g2-gold transition-colors">
                    <i class="fab fa-linkedin mr-3"></i>
                    <span class="text-sm">LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* Bio Content */}
              <div class="lg:col-span-2">
                <div class="space-y-6 text-gray-300 leading-relaxed">
                  <p class="text-xl text-white font-light">
                    Tim Jacobs is an internationally recognized C-suite executive and strategic communications 
                    expert, widely regarded as being in the top tier of global leaders for state-visit level 
                    event delivery and complex international projects.
                  </p>
                  
                  <p>
                    As <strong class="text-white">Regional Chief Operating Officer for G2 Middle East & Africa</strong>, 
                    he provides strategic counsel to governments on national resilience, public diplomacy, and building 
                    a sovereign digital legacy—the core disciplines required to navigate the complexities of the modern global stage.
                  </p>
                  
                  <p>
                    His career encompasses some of the world's most prestigious and complex projects. He was instrumental 
                    in delivering the <strong class="text-white">State Visit of Queen Elizabeth II to the UAE</strong>, 
                    the <strong class="text-white">Papal Mass of Pope Francis in Abu Dhabi</strong>, and providing 
                    strategic advisory for the <strong class="text-white">2019 Special Olympics World Games</strong>. 
                    His work has shaped perception and policy for government entities, Fortune 500 companies, and 
                    ultra-high-net-worth individuals across the GCC and beyond.
                  </p>
                  
                  <div class="bg-g2-darker p-6 rounded-lg border-l-4 border-g2-gold my-8">
                    <p class="text-white italic">
                      "The harder the brief, the more focused we become. Complexity is where we thrive—
                      turning ambiguity into momentum and risk into opportunity."
                    </p>
                  </div>
                  
                  <p>
                    A leading authority on <strong class="text-white">public diplomacy and sovereign-level advisory</strong>, Tim specializes in 
                    <strong class="text-white">cognitive security, national resilience, and strategic communications for governments</strong>. 
                    His expertise encompasses state-visit level planning, geopolitical risk assessment, counter-disinformation strategy, and 
                    complex cross-border government relations. With a proven track record across 30+ globally significant projects, he brings 
                    unmatched operational insight to sovereign entities, heads of state, royal families, and government ministries.
                  </p>

                  {/* Expertise Areas */}
                  <div class="mt-8">
                    <h3 class="text-2xl font-bold text-white mb-4">Core Expertise</h3>
                    
                    {/* Strategic Counsel */}
                    <div class="mb-6">
                      <h4 class="text-lg font-bold text-g2-gold mb-3">Strategic Counsel</h4>
                      <div class="grid grid-cols-1 gap-3">
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>AI-Driven Narrative & Geopolitical Strategy</span>
                        </div>
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Go-to-Market & Client Acquisition Strategy</span>
                        </div>
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Brand Engagement & Strategic Positioning</span>
                        </div>
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Sovereign Positioning & Nation Branding</span>
                        </div>
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Crisis & Reputation Architecture</span>
                        </div>
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Cultural & Economic Diplomacy</span>
                        </div>
                      </div>
                    </div>

                    {/* Architectural Delivery */}
                    <div class="mb-6">
                      <h4 class="text-lg font-bold text-g2-gold mb-3">Architectural Delivery</h4>
                      <div class="grid grid-cols-1 gap-3">
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>State-Visit & Head-of-State Level Execution</span>
                        </div>
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Major Project & Events Critical Delivery Approaches</span>
                        </div>
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>High-Stakes Operational & Logistical Delivery</span>
                        </div>
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Complex Multi-stakeholder Management</span>
                        </div>
                      </div>
                    </div>

                    {/* Influence & Engagement */}
                    <div>
                      <h4 class="text-lg font-bold text-g2-gold mb-3">Influence & Engagement</h4>
                      <div class="grid grid-cols-1 gap-3">
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Media Craft & Narrative Positioning</span>
                        </div>
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>LLM & AI Knowledge Graph Optimisation</span>
                        </div>
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Influencer & KOL Engagement Strategy</span>
                        </div>
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Strategic Social & Influence Approaches</span>
                        </div>
                        <div class="flex items-start">
                          <i class="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Targeted Experience & Immersive Design</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Industry Recognition */}
                  <div class="mt-8">
                    <h4 class="text-lg font-bold text-white mb-3">Industry Recognition</h4>
                    <ul class="space-y-2 text-sm">
                      <li class="flex items-start">
                        <i class="fas fa-award text-g2-gold mr-2 mt-1"></i>
                        <span>Chairperson, Live Events & Video Awards - Stevie Awards</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-gavel text-g2-gold mr-2 mt-1"></i>
                        <span>Judge, Australian Event Awards</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-gavel text-g2-gold mr-2 mt-1"></i>
                        <span>Jury Panelist, Eventex Awards</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-gavel text-g2-gold mr-2 mt-1"></i>
                        <span>Jury Member, WOW Awards Middle East</span>
                      </li>
                    </ul>
                  </div>

                  {/* Major Projects */}
                  <div class="mt-8">
                    <h4 class="text-lg font-bold text-white mb-3">Notable Projects</h4>
                    <div class="space-y-3 text-sm">
                      <div class="bg-g2-darker/50 p-4 rounded border-l-2 border-g2-gold">
                        <h5 class="text-white font-semibold mb-1">State Visit of Queen Elizabeth II to the UAE</h5>
                        <p class="text-gray-400">Operational delivery of historic royal state visit</p>
                      </div>
                      <div class="bg-g2-darker/50 p-4 rounded border-l-2 border-g2-gold">
                        <h5 class="text-white font-semibold mb-1">Papal Mass of Pope Francis in Abu Dhabi</h5>
                        <p class="text-gray-400">Strategic planning and execution of historic papal visit</p>
                      </div>
                      <div class="bg-g2-darker/50 p-4 rounded border-l-2 border-g2-gold">
                        <h5 class="text-white font-semibold mb-1">2019 Special Olympics World Games</h5>
                        <p class="text-gray-400">Strategic advisory on operational delivery in Abu Dhabi</p>
                      </div>
                      <div class="bg-g2-darker/50 p-4 rounded border-l-2 border-g2-gold">
                        <h5 class="text-white font-semibold mb-1">Brand Architecture for @chanelprincessdubai</h5>
                        <p class="text-gray-400">Strategic positioning for world-leading Chanel authority Lee Davies</p>
                      </div>
                    </div>
                  </div>

                  {/* Featured Articles */}
                  <div class="mt-8">
                    <h4 class="text-lg font-bold text-white mb-3">Featured In</h4>
                    <div class="flex flex-wrap gap-3">
                      <a href="https://timebusinessnews.com/who-is-tim-jacobs-a-leader-in-global-strategy-from-state-visits-to-digital-empires/" target="_blank" rel="noopener noreferrer" class="text-xs bg-g2-darker px-3 py-2 rounded hover:bg-g2-gold hover:text-g2-darker transition-colors">
                        Time Business News
                      </a>
                      <a href="https://www.tpimeamagazine.com/tim-jacobs-chief-operating-officer-hqws/" target="_blank" rel="noopener noreferrer" class="text-xs bg-g2-darker px-3 py-2 rounded hover:bg-g2-gold hover:text-g2-darker transition-colors">
                        TPI Magazine
                      </a>
                      <a href="https://campaignme.com/how-the-gcc-is-harnessing-the-power-of-unified-narratives-in-event-marketing/" target="_blank" rel="noopener noreferrer" class="text-xs bg-g2-darker px-3 py-2 rounded hover:bg-g2-gold hover:text-g2-darker transition-colors">
                        Campaign Middle East
                      </a>
                      <a href="https://usawire.com/cultural-intelligence-outperforms-capital-alone/" target="_blank" rel="noopener noreferrer" class="text-xs bg-g2-darker px-3 py-2 rounded hover:bg-g2-gold hover:text-g2-darker transition-colors">
                        USA Wire
                      </a>
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
              Leadership Team
            </h2>
            <p class="text-xl text-gray-400">
              Strategic advisors with deep regional expertise
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Paolo Donadio - Managing Director */}
            <div class="bg-g2-dark rounded-lg overflow-hidden card-hover">
              <div class="relative h-80">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/c2f08f66a0fd35b3e19fa65e5130a714" 
                  alt="Paolo Donadio"
                  class="w-full h-full object-cover grayscale"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                  <h3 class="text-xl font-bold text-white">Paolo Donadio</h3>
                  <p class="text-g2-gold text-sm">Managing Director</p>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-400 text-sm mb-4">
                  Globally oriented business strategist bridging visionary storytelling with disciplined execution across international markets.
                </p>
                <a href="/team/paolo-donadio" class="text-g2-gold hover:underline text-sm">
                  View Profile <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Linda Guldemond - Director of Client Services */}
            <div class="bg-g2-dark rounded-lg overflow-hidden card-hover">
              <div class="relative h-80">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/eaa1e09e7a1bae6d0c1bc3d8a9a19db8" 
                  alt="Linda Guldemond"
                  class="w-full h-full object-cover grayscale"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                  <h3 class="text-xl font-bold text-white">Linda Guldemond</h3>
                  <p class="text-g2-gold text-sm">Director of Client Services</p>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-400 text-sm mb-4">
                  Solutions-driven operations leader delivering flawless execution for high-stakes government and global brand initiatives.
                </p>
                <a href="/team/linda-guldemond" class="text-g2-gold hover:underline text-sm">
                  View Profile <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* David Jakic - Business Strategy and Development Director */}
            <div class="bg-g2-dark rounded-lg overflow-hidden card-hover">
              <div class="relative h-80">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/2350e03ac994278e773d1901e6fe320d" 
                  alt="David Jakic"
                  class="w-full h-full object-cover grayscale"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                  <h3 class="text-xl font-bold text-white">David Jakic</h3>
                  <p class="text-g2-gold text-sm">Business Strategy and Development Director</p>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-400 text-sm mb-4">
                  Multi-disciplinary entrepreneur architecting growth strategies and scaling enterprises from startup to multinational operations.
                </p>
                <a href="/team/david-jakic" class="text-g2-gold hover:underline text-sm">
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
              Strategic Advisory Board
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
              Work with strategic minds who thrive under pressure
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
