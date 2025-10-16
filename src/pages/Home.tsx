import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

export const HomePage: FC = () => {
  return (
    <PageLayout>
      {/* Hero Gallery Section */}
      <section class="hero-gallery">
        <div class="hero-slide active">
          <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80" alt="Strategic Architecture" />
        </div>
        <div class="hero-slide">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Luxury Experience" />
        </div>
        <div class="hero-slide">
          <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80" alt="Global Presence" />
        </div>
        
        <div class="hero-overlay"></div>
        
        <div class="absolute inset-0 flex items-center justify-center z-10">
          <div class="text-center px-6 max-w-5xl">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 text-shadow fade-in text-white">
              Built for Complexity
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8 fade-in-delay-1 font-light">
              Where strategy meets execution
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center fade-in-delay-2">
              <a href="/services" class="btn-primary">
                Explore Our Services
              </a>
              <a href="/contact" class="btn-secondary">
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
        
        {/* Gallery Controls */}
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
          <button class="gallery-dot w-3 h-3 rounded-full bg-white opacity-100" data-slide="0"></button>
          <button class="gallery-dot w-3 h-3 rounded-full bg-white opacity-50" data-slide="1"></button>
          <button class="gallery-dot w-3 h-3 rounded-full bg-white opacity-50" data-slide="2"></button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-8">
              The Architecture of Intangible Value
            </h2>
            <div class="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We're built for your biggest problems. The harder the brief, the more focused we become.
              </p>
              <p class="text-xl text-white font-medium pt-4">
                Expect direct answers, measurable outcomes, and a team that thrives under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Strategic Solutions
            </h2>
            <p class="text-xl text-gray-400">
              High-stakes challenges require sophisticated approaches
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div class="bg-g2-dark p-8 rounded-lg card-hover border border-white/10">
              <div class="text-g2-gold text-4xl mb-4">
                <i class="fas fa-landmark"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Sovereign & Nation Branding</h3>
              <p class="text-gray-400 mb-6">
                Strategic positioning for nations, governments, and sovereign entities on the global stage.
              </p>
              <a href="/services#sovereign" class="text-g2-gold hover:underline">
                Learn More <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Service 2 */}
            <div class="bg-g2-dark p-8 rounded-lg card-hover border border-white/10">
              <div class="text-g2-gold text-4xl mb-4">
                <i class="fas fa-gem"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Global Brand & Luxury Positioning</h3>
              <p class="text-gray-400 mb-6">
                Elevating luxury brands and global enterprises through strategic narrative architecture.
              </p>
              <a href="/services#luxury" class="text-g2-gold hover:underline">
                Learn More <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Service 3 */}
            <div class="bg-g2-dark p-8 rounded-lg card-hover border border-white/10">
              <div class="text-g2-gold text-4xl mb-4">
                <i class="fas fa-chess-knight"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Strategic Communications</h3>
              <p class="text-gray-400 mb-6">
                Crafting narratives that transform perspectives and create durable competitive advantage.
              </p>
              <a href="/services#strategic" class="text-g2-gold hover:underline">
                Learn More <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          <div class="text-center mt-12">
            <a href="/services" class="btn-primary">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Selected Work
            </h2>
            <p class="text-xl text-gray-400">
              Case studies in strategic value creation
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Placeholder 1 */}
            <div class="relative group overflow-hidden rounded-lg image-overlay">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                alt="Strategic Project"
                class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-g2-darker via-g2-darker/50 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-8">
                <span class="text-g2-gold text-sm font-semibold uppercase tracking-wider">Sovereign Branding</span>
                <h3 class="text-2xl font-bold mt-2 mb-3">Nation Brand Architecture</h3>
                <p class="text-gray-300 mb-4">Strategic positioning for emerging global markets</p>
                <a href="/projects" class="text-white hover:text-g2-gold transition-colors">
                  View Project <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Project Placeholder 2 */}
            <div class="relative group overflow-hidden rounded-lg image-overlay">
              <img 
                src="https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80" 
                alt="Luxury Experience"
                class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-g2-darker via-g2-darker/50 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-8">
                <span class="text-g2-gold text-sm font-semibold uppercase tracking-wider">Luxury Positioning</span>
                <h3 class="text-2xl font-bold mt-2 mb-3">Global Luxury Experience</h3>
                <p class="text-gray-300 mb-4">Redefining brand perception in competitive markets</p>
                <a href="/projects" class="text-white hover:text-g2-gold transition-colors">
                  View Project <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <a href="/projects" class="btn-secondary">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* The G-2 Briefing Teaser */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-4xl md:text-5xl font-bold mb-4">
                Perspectives
              </h2>
              <p class="text-xl text-gray-400">
                Strategic insights and market intelligence
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Article Placeholder */}
              <div class="bg-g2-dark p-6 rounded-lg border border-white/10 card-hover">
                <span class="text-g2-gold text-sm font-semibold uppercase tracking-wider">Strategy</span>
                <h3 class="text-xl font-bold mt-3 mb-3">The Future of Strategic Communications</h3>
                <p class="text-gray-400 text-sm mb-4">
                  How sophisticated organizations are navigating complexity in an era of unprecedented change...
                </p>
                <a href="/briefing" class="text-white hover:text-g2-gold transition-colors text-sm">
                  Read More <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>

              <div class="bg-g2-dark p-6 rounded-lg border border-white/10 card-hover">
                <span class="text-g2-gold text-sm font-semibold uppercase tracking-wider">Market Insight</span>
                <h3 class="text-xl font-bold mt-3 mb-3">Middle East: The New Strategic Hub</h3>
                <p class="text-gray-400 text-sm mb-4">
                  Regional dynamics are reshaping global business strategies. Here's what matters now...
                </p>
                <a href="/briefing" class="text-white hover:text-g2-gold transition-colors text-sm">
                  Read More <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            <div class="text-center mt-12">
              <a href="/briefing" class="btn-primary">
                Explore The Briefing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Bring us your high-stakes challenges
            </h2>
            <p class="text-xl text-gray-300 mb-8 leading-relaxed">
              We'll de-risk decisions, craft targeted narratives, and deliver experiences that shift perception, 
              mobilize support, and create durable value.
            </p>
            <a href="/contact" class="btn-primary text-lg">
              Start the Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Hero Gallery Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.hero-slide');
            const dots = document.querySelectorAll('.gallery-dot');
            let currentSlide = 0;
            
            function showSlide(index) {
              slides.forEach(slide => slide.classList.remove('active'));
              dots.forEach(dot => dot.classList.remove('opacity-100'));
              dots.forEach(dot => dot.classList.add('opacity-50'));
              
              slides[index].classList.add('active');
              dots[index].classList.remove('opacity-50');
              dots[index].classList.add('opacity-100');
            }
            
            function nextSlide() {
              currentSlide = (currentSlide + 1) % slides.length;
              showSlide(currentSlide);
            }
            
            // Auto-advance every 5 seconds
            setInterval(nextSlide, 5000);
            
            // Manual controls
            dots.forEach(dot => {
              dot.addEventListener('click', function() {
                currentSlide = parseInt(this.getAttribute('data-slide'));
                showSlide(currentSlide);
              });
            });
          });
        `
      }} />
    </PageLayout>
  )
}
