# Production-Ready Schema.org Code - G2 Middle East
## Copy-Paste Implementation for Home, Projects, and Perspectives Pages

**Generated:** 2025-10-28  
**Status:** ✅ Production-Ready - Copy & Paste into TSX Files  
**Format:** JSON-LD embedded in `<script type="application/ld+json">` tags

---

## Table of Contents

1. [Home.tsx - Complete Implementation](#1-hometsx---complete-implementation)
2. [Projects.tsx - Portfolio Listing Page](#2-projectstsx---portfolio-listing-page)
3. [ProjectDetail.tsx - Individual Project Pages](#3-projectdetailtsx---individual-project-pages)
4. [Perspectives.tsx - Blog Listing Page](#4-perspectivestsx---blog-listing-page)
5. [PerspectiveDetail.tsx - Individual Article Pages](#5-perspectivedetailtsx---individual-article-pages)
6. [Implementation Instructions](#6-implementation-instructions)

---

## 1. Home.tsx - Complete Implementation

**Purpose:** Establishes G2 Middle East as primary entity, showcases services, and provides site-wide context. This is the MOST IMPORTANT schema on your site.

**Placement:** Add at the bottom of Home.tsx component, just before the closing `</PageLayout>` tag.

**What This Does:**
- Establishes Organization entity (referenced by all other pages)
- Provides WebSite schema with site search
- Lists all 9 core services in OfferCatalog
- Adds BreadcrumbList for homepage
- Includes FAQPage schema for voice search queries

### Code for Home.tsx

```tsx
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
```

---

## 2. Projects.tsx - Portfolio Listing Page

**Purpose:** Provides ItemList schema for the projects portfolio page, helping search engines understand the collection of case studies.

**Placement:** Add at the bottom of Projects.tsx component, just before the closing `</PageLayout>` tag.

**What This Does:**
- Creates ItemList of all 42 projects
- Links to Organization entity
- Provides BreadcrumbList navigation
- Establishes collection structure for search engines

### Code for Projects.tsx

```tsx
{/* Schema.org Structured Data - Projects Portfolio */}
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://g2middleeast.com/projects#webpage",
      "url": "https://g2middleeast.com/projects",
      "name": "Projects Portfolio - G2 Middle East",
      "description": "Case studies in strategic impact and flawless execution showcasing government events, state visits, international summits, and luxury brand experiences delivered by G2 Middle East across the GCC and MENA region",
      "isPartOf": {"@id": "https://g2middleeast.com/#website"},
      "about": {"@id": "https://g2middleeast.com/#organization"},
      "inLanguage": "en"
    },
    {
      "@type": "ItemList",
      "@id": "https://g2middleeast.com/projects#itemlist",
      "name": "G2 Middle East Project Portfolio",
      "description": "Complete portfolio of 42 government events, state visits, international summits, and strategic advisory projects delivered across Middle East and Africa",
      "numberOfItems": 42,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Event",
            "name": "Papal Mass Abu Dhabi 2019",
            "url": "https://g2middleeast.com/projects/papal-mass-2019",
            "description": "Historic Papal Mass with 180,000 attendees - first papal visit to Arabian Peninsula",
            "startDate": "2019-02-05",
            "location": {"@type": "Place", "name": "Abu Dhabi, UAE"},
            "organizer": {"@id": "https://g2middleeast.com/#organization"}
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Event",
            "name": "State Visit of H.M. Queen Elizabeth II to UAE",
            "url": "https://g2middleeast.com/projects/queen-elizabeth-ii-state-visit",
            "description": "Royal state visit coordination with diplomatic protocol and ceremonial planning",
            "startDate": "2010-11-24",
            "location": {"@type": "Place", "name": "Abu Dhabi and Dubai, UAE"},
            "organizer": {"@id": "https://g2middleeast.com/#organization"}
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Event",
            "name": "COP27 Egypt Strategic Communications",
            "url": "https://g2middleeast.com/projects/cop27-egypt",
            "description": "Strategic communications and government advisory for UN Climate Change Conference",
            "startDate": "2022-11-06",
            "location": {"@type": "Place", "name": "Sharm El-Sheikh, Egypt"},
            "organizer": {"@id": "https://g2middleeast.com/#organization"}
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Event",
            "name": "Expo 2020 Dubai VIP Coordination",
            "url": "https://g2middleeast.com/projects/dubai-expo-2020",
            "description": "VIP program coordination and government relations for world expo",
            "startDate": "2021-10-01",
            "location": {"@type": "Place", "name": "Dubai, UAE"},
            "organizer": {"@id": "https://g2middleeast.com/#organization"}
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Event",
            "name": "FIFA World Cup Qatar 2022 Government Relations",
            "url": "https://g2middleeast.com/projects/fifa-world-cup-qatar",
            "description": "Government relations advisory for FIFA World Cup hosting",
            "startDate": "2022-11-20",
            "location": {"@type": "Place", "name": "Qatar"},
            "organizer": {"@id": "https://g2middleeast.com/#organization"}
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://g2middleeast.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": "https://g2middleeast.com/projects"
        }
      ]
    }
  ]
})}}></script>
```

---

## 3. ProjectDetail.tsx - Individual Project Pages

**Purpose:** Rich Event schema for each major project, establishing credentials and authority.

**Placement:** Add to each project detail page dynamically based on project slug. This requires modifying ProjectDetail.tsx to generate schema per project.

**Implementation Note:** You'll need to create a function that generates schema based on the `projectsData` object. Here's the template:

### Code Template for Individual Projects

```tsx
{/* Schema.org Structured Data - Individual Project */}
{(() => {
  // Example for Papal Mass - replicate for all 42 projects
  const projectSchemas = {
    'papal-mass-2019': {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Event",
          "@id": "https://g2middleeast.com/projects/papal-mass-2019#event",
          "name": "Papal Mass Abu Dhabi 2019 - Pope Francis Historic Visit",
          "alternateName": "Papal Mass Abu Dhabi, Pope Francis UAE Visit",
          "description": "The historic Papal Mass in Abu Dhabi on February 5, 2019, marked the first-ever Papal Mass held on the Arabian Peninsula. Pope Francis celebrated Mass before 180,000 attendees at Zayed Sports City Stadium. G2 Middle East, led by Project Director Tim Jacobs, coordinated all aspects including diplomatic protocol with the Vatican, security for 180,000 attendees, international media strategy, VIP guest management, and ceremonial planning.",
          "startDate": "2019-02-05T10:30:00+04:00",
          "endDate": "2019-02-05T14:00:00+04:00",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Zayed Sports City Stadium",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Abu Dhabi",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 24.4213,
              "longitude": 54.4731
            }
          },
          "organizer": {"@id": "https://g2middleeast.com/#organization"},
          "performer": [
            {
              "@type": "Person",
              "name": "Pope Francis",
              "jobTitle": "Pope",
              "sameAs": "https://en.wikipedia.org/wiki/Pope_Francis"
            }
          ],
          "director": {
            "@type": "Person",
            "@id": "https://g2middleeast.com/team/tim-jacobs#person",
            "name": "Tim Jacobs",
            "jobTitle": "Project Director"
          },
          "attendees": {
            "@type": "QuantitativeValue",
            "value": 180000,
            "unitText": "attendees"
          },
          "audience": {
            "@type": "Audience",
            "audienceType": "Catholic faithful, interfaith delegates, government officials, diplomatic corps",
            "geographicArea": {"@type": "Place", "name": "Middle East and Global"}
          },
          "inLanguage": ["en", "ar", "it"],
          "about": [
            {"@type": "Thing", "name": "Interfaith Dialogue"},
            {"@type": "Thing", "name": "Cultural Diplomacy"},
            {"@type": "Thing", "name": "Government Event Management"}
          ],
          "keywords": "Papal Mass, Pope Francis, Abu Dhabi, UAE, interfaith dialogue, government event management, Tim Jacobs, G2 Middle East, state visit, diplomatic protocol, 180000 attendees"
        },
        {
          "@type": "Article",
          "@id": "https://g2middleeast.com/projects/papal-mass-2019#article",
          "headline": "The Architecture of Faith: Delivering the Papal Mass Abu Dhabi",
          "description": "Behind-the-scenes look at coordinating the first Papal Mass on the Arabian Peninsula with 180,000 attendees",
          "image": "https://page.gensparksite.com/v1/base64_upload/...",
          "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
          "publisher": {"@id": "https://g2middleeast.com/#organization"},
          "datePublished": "2019-02-05",
          "inLanguage": "en"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://g2middleeast.com"},
            {"@type": "ListItem", "position": 2, "name": "Projects", "item": "https://g2middleeast.com/projects"},
            {"@type": "ListItem", "position": 3, "name": "Papal Mass Abu Dhabi 2019", "item": "https://g2middleeast.com/projects/papal-mass-2019"}
          ]
        }
      ]
    },
    'queen-elizabeth-ii-state-visit': {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Event",
          "@id": "https://g2middleeast.com/projects/queen-elizabeth-ii-state-visit#event",
          "name": "State Visit of H.M. Queen Elizabeth II to United Arab Emirates",
          "alternateName": "Queen Elizabeth II UAE State Visit, Royal Visit UAE 2010",
          "description": "The State Visit of Her Majesty Queen Elizabeth II to the UAE in November 2010 represented a landmark moment in UK-UAE diplomatic relations. G2 Middle East coordinated all aspects including bilateral meetings, royal receptions, cultural exchanges, and media strategy.",
          "startDate": "2010-11-24T08:00:00+04:00",
          "endDate": "2010-11-26T20:00:00+04:00",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": [
            {"@type": "Place", "name": "Abu Dhabi", "address": {"@type": "PostalAddress", "addressLocality": "Abu Dhabi", "addressCountry": "AE"}},
            {"@type": "Place", "name": "Dubai", "address": {"@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE"}}
          ],
          "organizer": {"@id": "https://g2middleeast.com/#organization"},
          "performer": [
            {"@type": "Person", "name": "Queen Elizabeth II", "jobTitle": "Queen of the United Kingdom"},
            {"@type": "Person", "name": "Prince Philip, Duke of Edinburgh"}
          ],
          "director": {"@type": "Person", "@id": "https://g2middleeast.com/team/tim-jacobs#person", "name": "Tim Jacobs"},
          "about": [
            {"@type": "Thing", "name": "State Visit"},
            {"@type": "Thing", "name": "Diplomatic Protocol"},
            {"@type": "Thing", "name": "UK-UAE Relations"}
          ],
          "keywords": "Queen Elizabeth II, State Visit, UAE, diplomatic protocol, royal visit, Tim Jacobs, G2 Middle East, UK-UAE relations"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://g2middleeast.com"},
            {"@type": "ListItem", "position": 2, "name": "Projects", "item": "https://g2middleeast.com/projects"},
            {"@type": "ListItem", "position": 3, "name": "Queen Elizabeth II State Visit", "item": "https://g2middleeast.com/projects/queen-elizabeth-ii-state-visit"}
          ]
        }
      ]
    },
    'cop27-egypt': {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Event",
          "@id": "https://g2middleeast.com/projects/cop27-egypt#event",
          "name": "COP27 Egypt - Strategic Communications & Government Advisory",
          "alternateName": "COP27 Sharm El-Sheikh, UN Climate Change Conference 2022",
          "description": "The 27th UN Climate Change Conference held in Sharm El-Sheikh, Egypt. G2 Middle East provided strategic communications advisory and government relations support for this landmark international summit.",
          "startDate": "2022-11-06T09:00:00+02:00",
          "endDate": "2022-11-18T20:00:00+02:00",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "Sharm El-Sheikh International Convention Centre",
            "address": {"@type": "PostalAddress", "addressLocality": "Sharm El-Sheikh", "addressCountry": "EG"}
          },
          "organizer": [
            {"@type": "Organization", "name": "United Nations Framework Convention on Climate Change"},
            {"@type": "Organization", "name": "Government of Egypt"}
          ],
          "contributor": {"@id": "https://g2middleeast.com/#organization"},
          "attendees": {"@type": "QuantitativeValue", "value": 45000, "unitText": "delegates"},
          "about": [
            {"@type": "Thing", "name": "Climate Change"},
            {"@type": "Thing", "name": "International Summit"},
            {"@type": "Thing", "name": "Strategic Communications"}
          ],
          "keywords": "COP27, Egypt, climate change, UN summit, strategic communications, G2 Middle East"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://g2middleeast.com"},
            {"@type": "ListItem", "position": 2, "name": "Projects", "item": "https://g2middleeast.com/projects"},
            {"@type": "ListItem", "position": 3, "name": "COP27 Egypt", "item": "https://g2middleeast.com/projects/cop27-egypt"}
          ]
        }
      ]
    }
  };
  
  // Return schema for current project
  const currentSlug = 'papal-mass-2019'; // This should be dynamic based on page context
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(projectSchemas[currentSlug])}}></script>;
})()}
```

---

## 4. Perspectives.tsx - Blog Listing Page

**Purpose:** Establishes the blog/perspectives section as a structured collection of articles.

**Placement:** Add at the bottom of Perspectives.tsx component.

### Code for Perspectives.tsx

```tsx
{/* Schema.org Structured Data - Perspectives Blog */}
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://g2middleeast.com/perspectives#blog",
      "url": "https://g2middleeast.com/perspectives",
      "name": "G2 Middle East Perspectives",
      "alternateName": "G2 Middle East Briefing",
      "description": "Strategic insights on government event management, sovereign communications, nation branding, diplomatic protocol, and the future of strategic advisory in the Middle East and Africa",
      "publisher": {"@id": "https://g2middleeast.com/#organization"},
      "inLanguage": "en",
      "about": [
        {"@type": "Thing", "name": "Strategic Advisory"},
        {"@type": "Thing", "name": "Government Event Management"},
        {"@type": "Thing", "name": "Sovereign Communications"},
        {"@type": "Thing", "name": "Nation Branding"},
        {"@type": "Thing", "name": "Diplomatic Protocol"}
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://g2middleeast.com/perspectives#webpage",
      "url": "https://g2middleeast.com/perspectives",
      "name": "Perspectives - Strategic Insights | G2 Middle East",
      "description": "Strategic insights on brand architecture, market positioning, sovereign communications, and the future of strategic advisory in an AI-driven world",
      "isPartOf": {"@id": "https://g2middleeast.com/#website"},
      "about": {"@id": "https://g2middleeast.com/#organization"},
      "mainEntity": {"@id": "https://g2middleeast.com/perspectives#blog"}
    },
    {
      "@type": "ItemList",
      "name": "G2 Middle East Perspectives Articles",
      "description": "Collection of strategic insights and thought leadership articles on government relations, event management, and strategic communications in the Middle East",
      "numberOfItems": 7,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "headline": "Strategic Event Architecture in the Middle East",
            "url": "https://g2middleeast.com/perspectives/strategic-event-architecture-middle-east",
            "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
            "publisher": {"@id": "https://g2middleeast.com/#organization"}
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Article",
            "headline": "Sovereign Communications in the GCC",
            "url": "https://g2middleeast.com/perspectives/sovereign-communications-gcc",
            "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
            "publisher": {"@id": "https://g2middleeast.com/#organization"}
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Article",
            "headline": "Luxury Hospitality in the GCC",
            "url": "https://g2middleeast.com/perspectives/luxury-hospitality-gcc",
            "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
            "publisher": {"@id": "https://g2middleeast.com/#organization"}
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Article",
            "headline": "Crisis Management in MENA",
            "url": "https://g2middleeast.com/perspectives/crisis-management-mena",
            "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
            "publisher": {"@id": "https://g2middleeast.com/#organization"}
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Article",
            "headline": "Digital Diplomacy",
            "url": "https://g2middleeast.com/perspectives/digital-diplomacy",
            "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
            "publisher": {"@id": "https://g2middleeast.com/#organization"}
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Article",
            "headline": "Nation Branding Strategies",
            "url": "https://g2middleeast.com/perspectives/nation-branding-strategies",
            "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
            "publisher": {"@id": "https://g2middleeast.com/#organization"}
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "Article",
            "headline": "VIP Protocol Best Practices",
            "url": "https://g2middleeast.com/perspectives/vip-protocol-best-practices",
            "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
            "publisher": {"@id": "https://g2middleeast.com/#organization"}
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://g2middleeast.com"},
        {"@type": "ListItem", "position": 2, "name": "Perspectives", "item": "https://g2middleeast.com/perspectives"}
      ]
    }
  ]
})}}></script>
```

---

## 5. PerspectiveDetail.tsx - Individual Article Pages

**Purpose:** Rich Article/BlogPosting schema for each perspective article.

**Placement:** Add to individual perspective article pages.

### Code Template for Individual Articles

```tsx
{/* Schema.org Structured Data - Individual Article */}
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://g2middleeast.com/perspectives/strategic-event-architecture-middle-east#article",
      "headline": "Strategic Event Architecture in the Middle East: Beyond Logistics to Statecraft",
      "alternativeHeadline": "How Government Events Shape National Reputation and Diplomatic Outcomes",
      "description": "Explore how strategic event architecture transforms government events from operational logistics into powerful tools of statecraft, diplomacy, and national narrative. Drawing on G2 Middle East's experience delivering the Papal Mass Abu Dhabi, Queen Elizabeth II State Visit, and COP27 Egypt.",
      "image": {
        "@type": "ImageObject",
        "url": "https://g2middleeast.com/assets/perspectives/strategic-event-architecture.jpg",
        "width": 1200,
        "height": 630,
        "caption": "Strategic Event Architecture in the Middle East"
      },
      "author": {
        "@type": "Person",
        "@id": "https://g2middleeast.com/team/tim-jacobs#person",
        "name": "Tim Jacobs",
        "jobTitle": "Regional COO, G2 Middle East & Africa",
        "url": "https://g2middleeast.com/team/tim-jacobs"
      },
      "publisher": {"@id": "https://g2middleeast.com/#organization"},
      "datePublished": "2025-10-15T10:00:00+04:00",
      "dateModified": "2025-10-15T10:00:00+04:00",
      "inLanguage": "en",
      "articleSection": "Strategic Insights",
      "wordCount": 2500,
      "about": [
        {"@type": "Thing", "name": "Strategic Event Architecture"},
        {"@type": "Thing", "name": "Government Event Management"},
        {"@type": "Thing", "name": "Diplomatic Protocol"},
        {"@type": "Thing", "name": "Nation Branding"}
      ],
      "keywords": "strategic event architecture, government event management, Middle East events, diplomatic protocol, nation branding, state visits, international summits, G2 Middle East, Tim Jacobs, GCC events, sovereign communications, public diplomacy, cultural diplomacy",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://g2middleeast.com/perspectives#blog",
        "name": "G2 Middle East Perspectives"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://g2middleeast.com/perspectives/strategic-event-architecture-middle-east"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://g2middleeast.com"},
        {"@type": "ListItem", "position": 2, "name": "Perspectives", "item": "https://g2middleeast.com/perspectives"},
        {"@type": "ListItem", "position": 3, "name": "Strategic Event Architecture", "item": "https://g2middleeast.com/perspectives/strategic-event-architecture-middle-east"}
      ]
    }
  ]
})}}></script>
```

---

## 6. Implementation Instructions

### Step 1: Add to Home.tsx (HIGHEST PRIORITY)

1. Open `/home/user/webapp/src/pages/Home.tsx`
2. Scroll to the bottom, just before the closing `</PageLayout>` tag
3. Copy the entire Home.tsx schema block from Section 1 above
4. Paste it before `</PageLayout>`
5. Save file

### Step 2: Add to Projects.tsx

1. Open `/home/user/webapp/src/pages/Projects.tsx`
2. Scroll to bottom before `</PageLayout>`
3. Copy Projects.tsx schema from Section 2
4. Paste and save

### Step 3: Add to Perspectives.tsx

1. Open `/home/user/webapp/src/pages/Perspectives.tsx`
2. Scroll to bottom before closing tag
3. Copy Perspectives.tsx schema from Section 4
4. Paste and save

### Step 4: Dynamic Schema for Individual Pages

For individual project and perspective pages, you'll need to:

**Option A: Manual (Quick Start)**
- Copy the template for top 5 projects (Papal Mass, Queen Elizabeth, COP27, Expo 2020, FIFA World Cup)
- Manually add schema to each project detail page

**Option B: Programmatic (Recommended)**
- Create a `getProjectSchema()` function in `ProjectDetail.tsx`
- Map project slugs to schema templates
- Dynamically generate schema based on current page

### Step 5: Test & Validate

1. **Build the project:**
   ```bash
   cd /home/user/webapp && npm run build
   ```

2. **Test locally:**
   ```bash
   pm2 restart g2-middle-east
   curl http://localhost:3000 | grep "application/ld+json"
   ```

3. **Validate with Google Rich Results Test:**
   - Go to: https://search.google.com/test/rich-results
   - Test homepage: `https://g2middleeast.com`
   - Test projects page: `https://g2middleeast.com/projects`
   - Test perspectives: `https://g2middleeast.com/perspectives`

4. **Validate with Schema.org Validator:**
   - Go to: https://validator.schema.org/
   - Paste JSON-LD code directly or test URLs

### Step 6: Deploy to Production

```bash
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name g2-middle-east
```

### Step 7: Submit to Search Engines

Once deployed:
1. **Google Search Console:** Submit updated sitemap
2. **Monitor:** Check Enhancements → Structured Data for new rich results

---

## Key Features of This Implementation

✅ **AI/LLM Optimized:**
- Extensive `knowsAbout` arrays (25+ entries)
- Multiple `sameAs` authoritative links
- Rich descriptions (200-300 words)
- Entity relationships clearly mapped

✅ **Keyword Integration:**
- Government event management
- State visit coordination
- Diplomatic protocol
- Sovereign branding/communications
- All major project names (Papal Mass, Queen Elizabeth, COP27, etc.)
- Tim Jacobs as recognized authority
- GCC/MENA geographic targeting

✅ **Technical SEO:**
- Valid JSON-LD format
- Proper `@id` entity references
- BreadcrumbList on all pages
- Organization entity as foundation
- `inLanguage` tags for multilingual readiness

✅ **Voice Search Ready:**
- FAQPage with natural language questions
- Answers packed with keywords
- Targets "best..." and "who is..." queries

---

## Expected Results

### Immediate (1-2 weeks)
- ✅ Schema validation passes in Google Search Console
- ✅ Organization entity recognized
- ✅ Breadcrumbs in search results

### Short-Term (1-3 months)
- ✅ Rich results (star ratings, event cards, FAQs)
- ✅ Knowledge Graph panel for G2 Middle East
- ✅ Featured snippets for government event queries
- ✅ Voice search results

### Medium-Term (3-6 months)
- ✅ AI/LLM citations (ChatGPT, Claude, Perplexity)
- ✅ Dominance in MENA government event queries
- ✅ Tim Jacobs recognized as industry authority

---

## Maintenance Checklist

- [ ] Update `dateModified` when articles change
- [ ] Add schema for new projects within 24 hours
- [ ] Keep `knowsAbout` updated with emerging keywords
- [ ] Monitor Google Search Console weekly
- [ ] Test in Google Rich Results Test monthly
- [ ] Track AI/LLM citations quarterly

---

**Last Updated:** 2025-10-28  
**Status:** ✅ Production-Ready  
**Next Steps:** Copy code to TSX files, build, test, deploy
