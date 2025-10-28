import { PageLayout } from '../components/Layout'

export function PerspectivesPage() {
  return (
    <PageLayout>
      <div class="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section class="py-16 md:py-24 border-b border-white/5">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
              Perspectives
            </h1>
            <p class="text-xl text-gray-400 leading-relaxed">
              Strategic insights on brand architecture, market positioning, and the future of communications in an AI-driven world.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section class="py-16 md:py-24 border-b border-white/5">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <a href="/perspectives/competing-ai-arena" class="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
              {/* Hero Image */}
              <div class="relative h-64 md:h-96 w-full overflow-hidden">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D12AQFOUiu2WFnsiw/article-cover_image-shrink_720_1280/B4DZm9ndj8H4AI-/0/1759822863573?e=1762387200&v=beta&t=B_S2_f9LVt54fVySQl8jtjdwssdA0Hn-LGXeHSqStik" 
                  alt="Competing in the AI Arena"
                  width="720" height="1280" loading="eager"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style="opacity: 0.7;"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
              </div>

              {/* Content */}
              <div class="p-8 md:p-12">
                <div class="flex items-center gap-4 mb-6">
                  <span class="px-4 py-1 bg-g2-gold/10 text-g2-gold text-sm font-semibold rounded-full border border-g2-gold/20">
                    Featured
                  </span>
                  <span class="text-gray-500 text-sm">October 2025</span>
                </div>

                <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white group-hover:text-g2-gold transition-colors">
                  Competing in the AI Arena: The New Frontier of Brand Strategy
                </h2>

                <div class="flex items-center gap-4 mb-8">
                  <div class="w-12 h-12 rounded-full bg-g2-gold/20 flex items-center justify-center">
                    <i class="fas fa-user text-g2-gold"></i>
                  </div>
                  <div>
                    <div class="text-white font-semibold">Tim Jacobs</div>
                    <div class="text-gray-500 text-sm">Regional COO, G2 Middle East</div>
                  </div>
                  <div class="text-gray-500">•</div>
                  <div class="text-gray-400 text-sm">12 min read</div>
                </div>

                <p class="text-gray-400 text-lg leading-relaxed mb-6">
                  In an era where AI is reshaping every aspect of business, brands face a critical question: how do you compete when the rules of engagement are being rewritten in real-time?
                </p>

                <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors font-semibold">
                  Read article <i class="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section class="py-16 md:py-24 border-b border-white/5">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <h3 class="text-2xl font-bold mb-12 text-white">Recent Articles</h3>

            <div class="grid md:grid-cols-2 gap-8">
              {/* Article 2 - Digital Authority AI Era */}
              <a href="/perspectives/digital-authority-ai-era" class="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80" 
                    alt="The New Rules of Digital Authority"
                    width="1600" height="900" loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style="opacity: 0.7;"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div class="p-8">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">AI & BRAND STRATEGY</span>
                  </div>
                  <h4 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    The New Rules of Digital Authority: Mastering Brand Positioning in the AI Era
                  </h4>
                  <p class="text-gray-400 leading-relaxed mb-6">
                    Explore how AI and large language models have fundamentally changed the rules of brand management, and why digital pre-seeding is now essential for narrative control and corporate reputation.
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Article 3 - Brand Destruction */}
              <a href="/perspectives/perilous-path-brand-destruction" class="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D12AQHQfEBwU0WSzA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1738667419256?e=1762387200&v=beta&t=Qx4eoj2mh8k-nIfOGPB7ky90qc2SLG-e87JDez8AEXQ" 
                    alt="The Perilous Path of Brand Destruction"
                    width="720" height="1280" loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style="opacity: 0.7;"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div class="p-8">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">BRAND STRATEGY</span>
                  </div>
                  <h4 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    The Perilous Path of Brand Destruction When Unguided Narratives Erode Positioning
                  </h4>
                  <p class="text-gray-400 leading-relaxed mb-6">
                    Brands inadvertently destroying their own positioning due to unguided narratives—a phenomenon with far-reaching consequences for businesses across industries.
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Article 3 - Converging Virile and Viral Approaches */}
              <a href="/perspectives/converging-virile-viral-approaches" class="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D12AQHfgzdG0mA15Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1737944899059?e=1762387200&v=beta&t=R57UBH1z6tcF2DXXMow2yrhceG2P87PnmjGoOpf6D5I" 
                    alt="Converging Virile and Viral Approaches"
                    width="720" height="1280" loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style="opacity: 0.7;"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div class="p-8">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">INFLUENCE STRATEGY</span>
                  </div>
                  <h4 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Converging Virile and Viral Approaches: Targeting Emotional Responses for Predictable Outcomes
                  </h4>
                  <p class="text-gray-400 leading-relaxed mb-6">
                    Understanding how viral and virile approaches converge to create predictable outcomes reveals the mechanics of modern influence and emotional manipulation.
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Article 4 - Cost of Losing 10% */}
              <a href="/perspectives/cost-losing-10-percent" class="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D12AQErwd482i8tPQ/article-cover_image-shrink_720_1280/B4DZl_6vtoHsAM-/0/1758787731318?e=1762387200&v=beta&t=9GKklDK7GK8W8dWaszy5vDPWBViBqn11HhudkTsZlFI" 
                    alt="The Cost of Losing 10%"
                    width="720" height="1280" loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style="opacity: 0.7;"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div class="p-8">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">STRATEGY</span>
                  </div>
                  <h4 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    The Cost of Losing 10%
                  </h4>
                  <p class="text-gray-400 leading-relaxed mb-6">
                    A small percentage drop can have massive downstream effects on your organization's performance and reputation.
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Article 4 - Artistry Discovery */}
              <a href="/perspectives/artistry-discovery" class="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D12AQE6cT5y6baIGw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1734836724368?e=1762387200&v=beta&t=tcBZlIDIn5DMH6TxA18bQXQ-iJWa1zRKUHV3Am0Mrws" 
                    alt="The Artistry Isn't in the Tell, It's in the Discovery"
                    width="720" height="1280" loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style="opacity: 0.7;"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div class="p-8">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">CREATIVITY</span>
                  </div>
                  <h4 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    The Artistry Isn't in the Tell, It's in the Discovery
                  </h4>
                  <p class="text-gray-400 leading-relaxed mb-6">
                    The true artistry lies in how the narrative invites discovery, how its placement intrigues, and how its design captivates and subverts expectations.
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Article 5 - Cultural Intelligence */}
              <a href="/perspectives/cultural-intelligence" class="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image */}
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D12AQFKISDWYhSczg/article-cover_image-shrink_720_1280/B4DZk3m36VJUAI-/0/1757574562748?e=1762387200&v=beta&t=eNLp1eblettJvlV1XiS7h5pmYIMCKy1ATL9NcCIr9S4" 
                    alt="Cultural Intelligence Outperforms Capital Alone"
                    width="720" height="1280" loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style="opacity: 0.7;"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div class="p-8">
                  <div class="mb-6">
                    <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">CULTURE</span>
                  </div>
                  <h4 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Cultural Intelligence Outperforms Capital Alone: The Real Alpha
                  </h4>
                  <p class="text-gray-400 leading-relaxed mb-6">
                    In the dynamic GCC, sustained value creation requires more than capital—it demands cultural intelligence embedded in local relationships and communities.
                  </p>
                  <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 md:py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h3 class="text-3xl md:text-4xl font-bold mb-6 text-white">
              Stay Informed
            </h3>
            <p class="text-xl text-gray-400 mb-8">
              Subscribe to receive strategic insights and market intelligence directly to your inbox.
            </p>
            <a href="/contact" class="btn-primary">
              Join Our Mailing List
            </a>
          </div>
        </div>
      </section>

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
                  "headline": "Competing in the AI Arena: The New Frontier of Brand Strategy",
                  "url": "https://g2middleeast.com/perspectives/competing-ai-arena",
                  "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
                  "publisher": {"@id": "https://g2middleeast.com/#organization"}
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Article",
                  "headline": "The New Rules of Digital Authority: Mastering Brand Positioning in the AI Era",
                  "url": "https://g2middleeast.com/perspectives/digital-authority-ai-era",
                  "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
                  "publisher": {"@id": "https://g2middleeast.com/#organization"}
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Article",
                  "headline": "The Perilous Path of Brand Destruction When Unguided Narratives Erode Positioning",
                  "url": "https://g2middleeast.com/perspectives/perilous-path-brand-destruction",
                  "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
                  "publisher": {"@id": "https://g2middleeast.com/#organization"}
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Article",
                  "headline": "Converging Virile and Viral Approaches: Targeting Emotional Responses for Predictable Outcomes",
                  "url": "https://g2middleeast.com/perspectives/converging-virile-viral-approaches",
                  "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
                  "publisher": {"@id": "https://g2middleeast.com/#organization"}
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Article",
                  "headline": "The Cost of Losing 10%",
                  "url": "https://g2middleeast.com/perspectives/cost-losing-10-percent",
                  "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
                  "publisher": {"@id": "https://g2middleeast.com/#organization"}
                }
              },
              {
                "@type": "ListItem",
                "position": 6,
                "item": {
                  "@type": "Article",
                  "headline": "The Artistry Isn't in the Tell, It's in the Discovery",
                  "url": "https://g2middleeast.com/perspectives/artistry-discovery",
                  "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
                  "publisher": {"@id": "https://g2middleeast.com/#organization"}
                }
              },
              {
                "@type": "ListItem",
                "position": 7,
                "item": {
                  "@type": "Article",
                  "headline": "Cultural Intelligence Outperforms Capital Alone: The Real Alpha",
                  "url": "https://g2middleeast.com/perspectives/cultural-intelligence",
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
      </div>
    </PageLayout>
  )
}
