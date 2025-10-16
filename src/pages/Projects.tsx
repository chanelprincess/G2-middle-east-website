import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'
import { projectsData } from './ProjectDetail'

export const ProjectsPage: FC = () => {
  // Convert projectsData object to array for rendering
  const projects = Object.values(projectsData)

  // Get unique categories for filtering
  const categories = ['All', ...new Set(projects.map(p => p.category))]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section class="relative py-32 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6 fade-in">
              Projects
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed fade-in-delay-1">
              Case studies in strategic impact and flawless execution. From sovereign positioning to luxury experiences, 
              every project showcases our commitment to architecting intangible value.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section class="py-12 bg-g2-dark border-b border-white/10">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="flex flex-wrap gap-3 justify-center" id="project-filters">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  data-filter={category}
                  class={`px-6 py-2 rounded transition-all ${
                    category === 'All' 
                      ? 'bg-g2-gold text-g2-darker font-semibold' 
                      : 'bg-g2-darker text-gray-300 hover:bg-g2-gold hover:text-g2-darker'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
              {projects.map((project, index) => (
                <a 
                  key={index}
                  href={`/projects/${project.slug}`}
                  data-category={project.category}
                  class="project-card group relative bg-g2-dark rounded-lg overflow-hidden card-hover"
                >
                  <div class="relative h-64 overflow-hidden">
                    <img 
                      src={project.heroImage}
                      alt={project.title}
                      class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-g2-darker via-g2-darker/60 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                      <div class="flex items-center space-x-3 mb-3">
                        <span class="text-xs px-3 py-1 bg-g2-gold/20 text-g2-gold rounded">
                          {project.category}
                        </span>
                        <span class="text-xs text-gray-400">{project.year}</span>
                      </div>
                      <h3 class="text-xl font-bold text-white mb-2 group-hover:text-g2-gold transition-colors">
                        {project.title}
                      </h3>
                      <p class="text-sm text-gray-400 line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <div class="p-6">
                    <p class="text-gray-400 text-sm line-clamp-3 mb-4">
                      {project.engagingParagraph.replace(/<[^>]*>/g, '').substring(0, 200)}...
                    </p>
                    <div class="flex items-center text-g2-gold text-sm font-semibold group-hover:underline">
                      View Case Study
                      <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </a>
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
              Ready to create your own success story?
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Let's discuss how G2 Middle East can help you achieve strategic impact through sophisticated execution.
            </p>
            <a href="/contact" class="btn-primary text-lg">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* JavaScript for filtering */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('#project-filters button');
            const projectCards = document.querySelectorAll('.project-card');
            
            filterButtons.forEach(button => {
              button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => {
                  btn.classList.remove('bg-g2-gold', 'text-g2-darker', 'font-semibold');
                  btn.classList.add('bg-g2-darker', 'text-gray-300');
                });
                this.classList.remove('bg-g2-darker', 'text-gray-300');
                this.classList.add('bg-g2-gold', 'text-g2-darker', 'font-semibold');
                
                // Filter projects
                projectCards.forEach(card => {
                  const category = card.getAttribute('data-category');
                  if (filter === 'All' || category === filter) {
                    card.style.display = 'block';
                  } else {
                    card.style.display = 'none';
                  }
                });
              });
            });
          });
        `
      }} />
    </PageLayout>
  )
}
