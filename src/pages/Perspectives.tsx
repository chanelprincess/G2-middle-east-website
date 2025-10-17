export function PerspectivesPage() {
  return (
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
            <div class="flex items-center gap-4 mb-6">
              <span class="px-4 py-1 bg-g2-gold/10 text-g2-gold text-sm font-semibold rounded-full border border-g2-gold/20">
                Featured
              </span>
              <span class="text-gray-500 text-sm">October 2025</span>
            </div>

            <a href="/perspectives/competing-ai-arena" class="block group">
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

              <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors">
                Read article <i class="fas fa-arrow-right ml-2"></i>
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

            <div class="grid md:grid-cols-2 gap-12">
              {/* Article 2 */}
              <a href="/perspectives/cost-losing-10-percent" class="block group">
                <div class="mb-6">
                  <span class="text-gray-500 text-sm">October 2025</span>
                </div>
                <h4 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                  The Cost of Losing 10%
                </h4>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-full bg-g2-gold/20 flex items-center justify-center">
                    <i class="fas fa-user text-g2-gold text-sm"></i>
                  </div>
                  <div>
                    <div class="text-white font-semibold text-sm">Tim Jacobs</div>
                    <div class="text-gray-500 text-xs">Regional COO</div>
                  </div>
                </div>
                <p class="text-gray-400 leading-relaxed mb-4">
                  A small percentage drop can have massive downstream effects on your organization's performance and reputation.
                </p>
                <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm">
                  Read article <i class="fas fa-arrow-right ml-2"></i>
                </div>
              </a>

              {/* Article 3 */}
              <a href="/perspectives/artistry-discovery" class="block group">
                <div class="mb-6">
                  <span class="text-gray-500 text-sm">December 2024</span>
                </div>
                <h4 class="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                  The Artistry Isn't in the Tell, It's in the Discovery
                </h4>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-full bg-g2-gold/20 flex items-center justify-center">
                    <i class="fas fa-user text-g2-gold text-sm"></i>
                  </div>
                  <div>
                    <div class="text-white font-semibold text-sm">Tim Jacobs</div>
                    <div class="text-gray-500 text-xs">Regional COO</div>
                  </div>
                </div>
                <p class="text-gray-400 leading-relaxed mb-4">
                  The true artistry lies in how the narrative invites discovery, how its placement intrigues, and how its design captivates and subverts expectations.
                </p>
                <div class="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm">
                  Read article <i class="fas fa-arrow-right ml-2"></i>
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
    </div>
  )
}
