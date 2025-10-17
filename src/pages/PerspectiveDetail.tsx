export interface PerspectiveData {
  slug: string
  title: string
  author: string
  authorTitle: string
  date: string
  readTime: string
  excerpt: string
  heroImage?: string
  content: any
}

export function PerspectiveDetailPage(props: PerspectiveData) {
  return (
    <div class="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <section class="relative py-16 md:py-24 border-b border-white/5 overflow-hidden">
        {/* Hero Image Background with 70% opacity */}
        {props.heroImage && (
          <div class="absolute inset-0 z-0">
            <img 
              src={props.heroImage} 
              alt={props.title}
              class="w-full h-full object-cover"
              style="opacity: 0.7;"
            />
            {/* Dark gradient overlay for better text readability */}
            <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
          </div>
        )}
        
        {/* Content overlay */}
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto">
            <a href="/briefing" class="inline-flex items-center text-g2-gold hover:text-white transition-colors mb-8">
              <i class="fas fa-arrow-left mr-2"></i>
              Back to Perspectives
            </a>
            
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {props.title}
            </h1>
            
            <div class="flex items-center gap-6 text-sm">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-g2-gold/20 flex items-center justify-center">
                  <i class="fas fa-user text-g2-gold"></i>
                </div>
                <div>
                  <div class="text-white font-semibold">{props.author}</div>
                  <div class="text-gray-400">{props.authorTitle}</div>
                </div>
              </div>
              <div class="text-gray-500">•</div>
              <div class="text-gray-400">{props.date}</div>
              <div class="text-gray-500">•</div>
              <div class="text-gray-400">{props.readTime} read</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content - TIGHT LinkedIn-style spacing */}
      <section class="py-16 md:py-24 bg-black">
        <div class="container mx-auto px-6">
          <article class="max-w-4xl mx-auto prose prose-invert prose-lg 
            prose-headings:text-white 
            prose-headings:font-bold 
            prose-h2:text-2xl prose-h2:mb-2 prose-h2:mt-6
            prose-h3:text-lg prose-h3:mb-2 prose-h3:mt-5
            prose-p:text-gray-300 prose-p:mb-3 prose-p:leading-normal
            prose-strong:text-white prose-strong:font-semibold
            prose-a:text-g2-gold prose-a:no-underline hover:prose-a:text-white 
            prose-ul:my-3 prose-li:mb-1
            prose-img:my-10 prose-img:rounded-lg">
            {props.content}
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section class="py-16 bg-g2-darker border-t border-white/5">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h3 class="text-2xl font-bold mb-8 text-white">More Perspectives</h3>
            <a href="/briefing" class="inline-flex items-center text-g2-gold hover:text-white transition-colors">
              View all articles <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// ============================================
// ARTICLE DATA
// ============================================

export const perspectivesData = {
  'competing-ai-arena': {
    slug: 'competing-ai-arena',
    title: 'Competing in the AI Arena: The New Frontier of Brand Strategy',
    author: 'Tim Jacobs',
    authorTitle: 'Regional COO, G2 Middle East',
    date: 'October 2025',
    readTime: '12 min',
    excerpt: '',
    heroImage: 'https://media.licdn.com/dms/image/v2/D4D12AQFOUiu2WFnsiw/article-cover_image-shrink_720_1280/B4DZm9ndj8H4AI-/0/1759822863573?e=1762387200&v=beta&t=B_S2_f9LVt54fVySQl8jtjdwssdA0Hn-LGXeHSqStik',
    content: (
      <>
        <p>In an era where AI is reshaping every aspect of business, brands face a critical question: how do you compete when the rules of engagement are being rewritten in real-time? The answer lies not in chasing the latest technology, but in understanding how AI fundamentally alters the competitive landscape and strategically positioning your brand for this new reality.</p>

        <img src="https://media.licdn.com/dms/image/v2/D4D12AQEr7nc7PdhLmQ/article-inline_image-shrink_1000_1488/B4DZm9pkyUIcAQ-/0/1759823422987?e=1762387200&v=beta&t=N6XQyl1IZd_YTKRzTIIzW4ZyDhoAwxTNSAtEo6ItU-w" alt="AI Arena visualization" />

        <h2>The Shifting Battleground</h2>
        <p>Traditional competitive advantages—economies of scale, distribution networks, even data ownership—are being commoditized at an unprecedented pace. AI levels the playing field in ways that would have seemed impossible just five years ago. A startup can now access the same analytical capabilities as a Fortune 500 company. Customer insights that once required millions in research budgets can be generated in minutes.</p>
        <p>This democratization of capability means that technical superiority alone is no longer a sustainable competitive advantage. Instead, the new battleground is strategic: how you integrate AI into your brand architecture, how you communicate your value proposition, and most critically, how you build trust in an increasingly automated world.</p>

        <h2>Beyond the Technology: The Strategic Imperative</h2>
        <p>The brands winning in the AI arena aren't necessarily those with the most sophisticated algorithms or the largest AI teams. They're the ones who understand that AI is not a product feature—it's a strategic lens through which every aspect of the brand must be reimagined.</p>
        <p>Consider three critical dimensions:</p>

        <h3>1. Value Proposition Reinvention</h3>
        <p>AI doesn't just improve existing processes; it enables entirely new value propositions. The question isn't "How can AI make us more efficient?" but rather "What new value can we create that wasn't possible before?" This requires a fundamental rethinking of what your brand stands for and delivers.</p>

        <img src="https://media.licdn.com/dms/image/v2/D4D12AQHHGbDYPDSxNw/article-inline_image-shrink_1000_1488/B4DZm9qYy6JgAQ-/0/1759823636058?e=1762387200&v=beta&t=KlZxd9IwClUtdwVn9_Rs7VGJBufLVzN9wso4aL8Fqqs" alt="Value proposition reinvention" />

        <h3>2. Trust Architecture</h3>
        <p>As AI takes on more decision-making roles, trust becomes the ultimate differentiator. Brands must architect trust deliberately—through transparency about AI use, clear communication about human oversight, and demonstrated commitment to ethical AI practices. This isn't about compliance; it's about building a competitive moat in an age of algorithmic skepticism.</p>

        <img src="https://media.licdn.com/dms/image/v2/D4D12AQGvlYrvdVBFQQ/article-inline_image-shrink_1000_1488/B4DZm9sw7hGkAU-/0/1759824390829?e=1762387200&v=beta&t=LPUQYiNwb5gEVLk5poujk9F_zmTQzoYN1U-Zf4uUKEE" alt="Trust architecture" />

        <h3>3. Adaptive Brand Systems</h3>
        <p>Static brand guidelines are obsolete in an AI-driven world. Modern brands need adaptive systems that can respond to context, personalize at scale, and evolve based on continuous learning—all while maintaining brand consistency. This requires new frameworks for brand management that balance control with flexibility.</p>

        <img src="https://media.licdn.com/dms/image/v2/D4D12AQFounp87W2K2A/article-inline_image-shrink_1000_1488/B4DZm9vVH1H0AQ-/0/1759824931184?e=1762387200&v=beta&t=vcP4qzmECddg0suGQNd-w496d0GKIn4Inx07rQp0Qnw" alt="Adaptive brand systems" />

        <h2>The Human Paradox</h2>
        <p>Here's the counterintuitive reality: as AI becomes more prevalent, human elements become more valuable. The brands that will dominate the AI arena are those that use technology to amplify humanity, not replace it. They understand that in a world where everyone has access to similar AI capabilities, the differentiator is the strategic vision, creative thinking, and emotional intelligence that only humans can provide.</p>
        <p>This creates what I call the "Human Paradox of AI Competition": the more AI capabilities become commoditized, the more valuable strategic human insight becomes. Your competitive advantage isn't your AI—it's what your people do with it.</p>

        <img src="https://media.licdn.com/dms/image/v2/D4D12AQE4boQjG-IT_g/article-inline_image-shrink_1000_1488/B4DZm9vfv6JYAQ-/0/1759824975466?e=1762387200&v=beta&t=wb5mlVz7M0CG3KdHZhE-cDbm_DbGeltKsls9NZNBUkY" alt="Human paradox" />

        <h2>Strategic Positioning for the AI Era</h2>
        <p>To compete effectively in the AI arena, brands need to move beyond tactical AI implementation and develop a comprehensive strategic framework:</p>

        <p><strong>Audit Your AI Readiness</strong></p>
        <p>Not just technically, but strategically. How does AI align with your brand purpose? Where can it genuinely create new value? What are the trust implications?</p>

        <p><strong>Define Your AI Identity</strong></p>
        <p>Be explicit about your brand's relationship with AI. Are you an AI-first innovator? A thoughtful integrator? A human-centered technology user? This positioning will inform everything from product development to marketing messaging.</p>

        <p><strong>Build Trust Infrastructure</strong></p>
        <p>Develop clear policies, transparent communications, and demonstrable practices around AI use. Make trust a competitive advantage, not a compliance checkbox.</p>

        <p><strong>Invest in Strategic Capability</strong></p>
        <p>The technical AI talent war is real, but the strategic talent gap is even more critical. Build teams that can think strategically about AI's implications for your brand and industry.</p>

        <p><strong>Create Adaptive Systems</strong></p>
        <p>Design brand architectures and operational systems that can evolve with AI capabilities while maintaining consistency and authenticity.</p>

        <img src="https://media.licdn.com/dms/image/v2/D4D12AQE9BoH9k2iNDw/article-inline_image-shrink_1000_1488/B4DZm9uXrAJcAU-/0/1759824680051?e=1762387200&v=beta&t=E-WvpxWl_iHY-rp6swdC1u03QHgdiNGhS39TQ4StyW8" alt="Strategic positioning" />

        <h2>The Road Ahead</h2>
        <p>The AI arena is not a future scenario—it's the current competitive reality. The brands that will thrive are those that recognize AI as a strategic imperative, not a technical project. They understand that winning requires more than deploying algorithms; it requires reimagining brand strategy for an AI-native world.</p>
        <p>The question isn't whether to compete in the AI arena—you're already in it. The question is whether you're competing strategically or just technically. The former builds sustainable competitive advantage. The latter just keeps you in the game.</p>
        <p>As we navigate this transformation, one thing is clear: the most sophisticated AI strategy is useless without a clear brand vision to guide it. And the strongest brand vision must now account for AI's transformative impact. The intersection of these two imperatives defines the new frontier of competitive strategy.</p>
        <p>The brands that master this intersection won't just survive the AI revolution—they'll define it.</p>
      </>
    )
  },
  'cost-losing-10-percent': {
    slug: 'cost-losing-10-percent',
    title: 'The Cost of Losing 10%',
    author: 'Tim Jacobs',
    authorTitle: 'Regional COO, G2 Middle East',
    date: 'October 2025',
    readTime: '8 min',
    excerpt: 'A small percentage drop can have massive downstream effects on your organization\'s performance and reputation.',
    content: (
      <>
        <p>In business, we often discuss growth in percentages. A 10% increase sounds modest. A 10% decrease seems manageable. But here's what most leaders miss: a 10% loss is never just 10%. It's a multiplier effect that cascades through every aspect of your organization, often resulting in exponentially greater damage than the initial number suggests.</p>
        <p>Let me explain why a seemingly small percentage can be catastrophic—and why understanding this is critical for strategic decision-making.</p>

        <h2>The Compound Effect of Decline</h2>
        <p>When you lose 10% of your market share, you don't just lose 10% of revenue. You lose 10% of:</p>
        <ul>
          <li>Customer relationships and lifetime value</li>
          <li>Network effects and word-of-mouth marketing</li>
          <li>Data and insights that drive future innovation</li>
          <li>Talent attraction (the best want to work for winners)</li>
          <li>Investor confidence and valuation multiples</li>
          <li>Negotiating leverage with suppliers and partners</li>
        </ul>
        <p>Each of these losses compounds the others, creating a downward spiral that's far more severe than the initial 10% suggests.</p>

        <h2>The Perception Penalty</h2>
        <p>Markets are psychological. A 10% decline signals weakness, triggering disproportionate responses from competitors, investors, and customers. Your competitors smell blood and increase their attack. Investors question your strategy. Customers wonder if they should switch. Employees start updating their LinkedIn profiles.</p>
        <p>The perception of decline often causes more damage than the decline itself. Once the narrative shifts from "growing" to "struggling," reversing that perception requires far more than recovering the lost 10%.</p>

        <h2>The Real Math of Recovery</h2>
        <p>Here's a mathematical reality that surprises many executives: if you lose 10%, you need to grow by 11.1% just to get back to where you started. Lose 20%, and you need 25% growth to recover. Lose 50%, and you need 100% growth.</p>
        <p>But it's even worse than that because of the compounding factors mentioned earlier. By the time you've lost 10%, you've also lost momentum, talent, market position, and investor confidence. Now you need to recover all of that while simultaneously growing. It's not a 11.1% challenge—it's often a 30-40% challenge to truly return to your previous competitive position.</p>

        <h2>The Cost Across Dimensions</h2>
        <p><strong>Financial Cost:</strong> Beyond direct revenue loss, there's increased customer acquisition cost, reduced pricing power, and potential need for discounting to remain competitive.</p>
        <p><strong>Strategic Cost:</strong> You lose the ability to invest in innovation and future positioning. Resources shift from offense to defense. Long-term strategic projects get shelved for short-term fixes.</p>
        <p><strong>Cultural Cost:</strong> Nothing damages organizational culture faster than the stress of decline. Top performers leave. Risk aversion increases. Innovation stalls. The organization becomes reactive rather than proactive.</p>
        <p><strong>Competitive Cost:</strong> Your 10% is often your competitor's gain, which they'll invest in taking more share. You're not just fighting to regain your 10%—you're fighting against competitors who are now 10% stronger.</p>

        <h2>The Strategic Imperative</h2>
        <p>Understanding the true cost of losing 10% should fundamentally change how you think about defense versus offense, market position, and competitive strategy. Here's what it means practically:</p>
        <p><strong>Prevention is exponentially cheaper than recovery.</strong> The resources required to defend a position are typically a fraction of what's needed to reclaim it. This means investing in customer retention, brand strength, and competitive barriers even when times are good.</p>
        <p><strong>Small losses demand immediate, decisive action.</strong> A 3-5% decline isn't a blip to monitor—it's an early warning system that demands strategic response before it becomes 10% and the multiplicative effects kick in.</p>
        <p><strong>Market position is a strategic asset, not just a metric.</strong> Your market position has value beyond current revenue—it's a platform for future growth, a source of negotiating power, and a signal of strength. Defending it should be a strategic priority, not just a financial goal.</p>

        <h2>The Bottom Line</h2>
        <p>In an interconnected business environment, nothing happens in isolation. A 10% loss triggers cascading effects that multiply the damage far beyond the initial percentage. Understanding this multiplier effect should inform every strategic decision you make about market position, competitive response, and resource allocation.</p>
        <p>The most sophisticated competitors don't just fight to grow—they fight to never lose ground in the first place. Because they understand what most don't: in modern markets, losing 10% doesn't mean you're 10% behind. It means you're often 30-40% behind by the time you account for all the compounding effects.</p>
        <p>The cost of losing 10% isn't 10%. It's whatever it takes to rebuild everything that loss destroyed—and that's almost always more than you can afford.</p>
      </>
    )
  }
}
