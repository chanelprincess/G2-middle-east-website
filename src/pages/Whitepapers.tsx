import { PageLayout } from '../components/Layout'

interface Whitepaper {
  id: number
  title: string
  description: string
  file_size: number
  download_count: number
}

interface WhitepapersPageProps {
  user: {
    full_name: string
    username: string
  }
  whitepapers: Whitepaper[]
}

export function WhitepapersPage(props: WhitepapersPageProps) {
  return (
    <PageLayout>
      <div class="min-h-screen bg-black text-white">
        {/* Header Section */}
        <section class="py-16 md:py-24 border-b border-white/5">
          <div class="container mx-auto px-6">
            <div class="max-w-6xl mx-auto">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h1 class="text-5xl md:text-6xl font-bold mb-4 text-white">
                    White Papers
                  </h1>
                  <p class="text-xl text-gray-400 leading-relaxed">
                    Exclusive strategic insights and research for G2 Middle East community
                  </p>
                </div>
                <div class="hidden md:block">
                  <div class="text-right">
                    <p class="text-sm text-gray-500">Logged in as</p>
                    <p class="text-lg font-semibold text-g2-gold">{props.user.full_name}</p>
                    <a href="/api/auth/logout" class="text-sm text-gray-400 hover:text-white transition-colors">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Whitepapers Grid */}
        <section class="py-16 md:py-24">
          <div class="container mx-auto px-6">
            <div class="max-w-6xl mx-auto">
              {props.whitepapers.length === 0 ? (
                <div class="text-center py-16">
                  <i class="fas fa-file-pdf text-6xl text-gray-700 mb-6"></i>
                  <h3 class="text-2xl font-bold text-white mb-4">No White Papers Available</h3>
                  <p class="text-gray-400">New content will be added soon. Check back later.</p>
                </div>
              ) : (
                <div class="grid md:grid-cols-2 gap-8">
                  {props.whitepapers.map((paper) => (
                    <div key={paper.id} class="border border-white/10 rounded-2xl p-8 bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                      <div class="mb-6">
                        <span class="text-g2-gold text-xs font-semibold uppercase tracking-wider">WHITE PAPER</span>
                      </div>
                      
                      <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white">
                        {paper.title}
                      </h3>
                      
                      <p class="text-gray-400 leading-relaxed mb-6">
                        {paper.description}
                      </p>
                      
                      <div class="flex items-center gap-6 mb-6 text-sm text-gray-500">
                        <div class="flex items-center gap-2">
                          <i class="fas fa-file-pdf"></i>
                          <span>PDF</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <i class="fas fa-download"></i>
                          <span>{paper.download_count} downloads</span>
                        </div>
                      </div>
                      
                      <a
                        href={`/api/whitepapers/download/${paper.id}`}
                        class="inline-flex items-center bg-g2-gold text-g2-darker px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
                      >
                        <i class="fas fa-download mr-2"></i>
                        Download PDF
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section class="py-16 bg-g2-darker border-t border-white/5">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center">
              <h3 class="text-3xl font-bold mb-6 text-white">
                Need More Insights?
              </h3>
              <p class="text-xl text-gray-400 mb-8">
                Explore our latest perspectives on brand strategy and market positioning
              </p>
              <a href="/briefing" class="inline-block border border-g2-gold text-g2-gold px-8 py-3 rounded-lg hover:bg-g2-gold hover:text-g2-darker transition-all font-semibold">
                Read Our Blog
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
