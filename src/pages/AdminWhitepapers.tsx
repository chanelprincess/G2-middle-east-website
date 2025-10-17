import { Navigation, Footer } from '../components/Layout'

interface Whitepaper {
  id: number
  title: string
  description: string
  file_path: string
  download_count: number
  is_active: number
  created_at: string
}

interface AdminWhitepapersPageProps {
  whitepapers: Whitepaper[]
}

export function AdminWhitepapersPage(props: AdminWhitepapersPageProps) {
  return (
    <>
      <Navigation />
      <div class="min-h-screen bg-black text-white pt-20">
        {/* Header */}
        <section class="py-8 border-b border-white/5">
          <div class="container mx-auto px-6">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="text-3xl font-bold text-white mb-2">Whitepaper Management</h1>
                <p class="text-gray-400">Manage your white paper library</p>
              </div>
              <div class="flex gap-4">
                <a
                  href="/admin/users"
                  class="border border-g2-gold text-g2-gold px-6 py-2 rounded-lg hover:bg-g2-gold hover:text-g2-darker transition-all font-semibold"
                >
                  Manage Users
                </a>
                <button
                  onclick="document.getElementById('addModal').style.display='block'"
                  class="bg-g2-gold text-g2-darker px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
                >
                  <i class="fas fa-plus mr-2"></i>
                  Add White Paper
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Whitepapers List */}
        <section class="py-8">
          <div class="container mx-auto px-6">
            {props.whitepapers.length === 0 ? (
              <div class="border border-white/10 rounded-lg p-12 bg-g2-darker/30 text-center">
                <i class="fas fa-file-pdf text-6xl text-gray-700 mb-6"></i>
                <h3 class="text-2xl font-bold text-white mb-4">No White Papers Yet</h3>
                <p class="text-gray-400 mb-6">Add your first white paper to get started</p>
                <button
                  onclick="document.getElementById('addModal').style.display='block'"
                  class="bg-g2-gold text-g2-darker px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
                >
                  <i class="fas fa-plus mr-2"></i>
                  Add White Paper
                </button>
              </div>
            ) : (
              <div class="space-y-4">
                {props.whitepapers.map((paper) => (
                  <div key={paper.id} class="border border-white/10 rounded-lg p-6 bg-g2-darker/30">
                    <div class="grid md:grid-cols-4 gap-6 items-start">
                      <div class="md:col-span-3">
                        <div class="flex items-start gap-4">
                          <div class={`w-3 h-3 rounded-full mt-2 ${paper.is_active ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                          <div class="flex-1">
                            <h3 class="text-xl font-bold text-white mb-2">{paper.title}</h3>
                            <p class="text-gray-400 mb-4">{paper.description}</p>
                            <div class="flex items-center gap-6 text-sm text-gray-500">
                              <div class="flex items-center gap-2">
                                <i class="fas fa-download"></i>
                                <span>{paper.download_count} downloads</span>
                              </div>
                              <div class="flex items-center gap-2">
                                <i class="fas fa-calendar"></i>
                                <span>{new Date(paper.created_at).toLocaleDateString()}</span>
                              </div>
                              <div class="flex items-center gap-2">
                                <i class="fas fa-file"></i>
                                <span>{paper.file_path}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col gap-3">
                        <form action={`/api/admin/whitepapers/toggle/${paper.id}`} method="POST">
                          <button
                            type="submit"
                            class={`w-full px-4 py-2 rounded-lg transition-all font-semibold ${
                              paper.is_active
                                ? 'bg-gray-600 text-white hover:bg-gray-700'
                                : 'bg-green-600 text-white hover:bg-green-700'
                            }`}
                          >
                            <i class={`fas fa-${paper.is_active ? 'eye-slash' : 'eye'} mr-2`}></i>
                            {paper.is_active ? 'Deactivate' : 'Activate'}
                          </button>
                        </form>
                        <button
                          onclick={`openEditModal(${paper.id}, '${paper.title}', '${paper.description}')`}
                          class="w-full bg-blue-600/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600/30 transition-all font-semibold border border-blue-600/30"
                        >
                          <i class="fas fa-edit mr-2"></i>
                          Edit
                        </button>
                        <form action={`/api/admin/whitepapers/delete/${paper.id}`} method="POST" onsubmit="return confirm('Are you sure you want to delete this white paper?')">
                          <button
                            type="submit"
                            class="w-full bg-red-600/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-600/30 transition-all font-semibold border border-red-600/30"
                          >
                            <i class="fas fa-trash mr-2"></i>
                            Delete
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Add Modal */}
      <div id="addModal" style="display:none" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div class="bg-g2-darker border border-white/10 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-white">Add New White Paper</h2>
            <button onclick="document.getElementById('addModal').style.display='none'" class="text-gray-400 hover:text-white">
              <i class="fas fa-times text-2xl"></i>
            </button>
          </div>
          
          <form action="/api/admin/whitepapers/add" method="POST" enctype="multipart/form-data" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Title *</label>
              <input
                type="text"
                name="title"
                required
                class="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold"
                placeholder="White Paper Title"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Description *</label>
              <textarea
                name="description"
                required
                rows="4"
                class="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold"
                placeholder="Brief description of the white paper content"
              ></textarea>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">PDF File *</label>
              <input
                type="file"
                name="file"
                accept=".pdf"
                required
                class="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold"
              />
              <p class="text-xs text-gray-500 mt-2">Maximum file size: 10MB</p>
            </div>
            
            <div class="flex gap-4 pt-4">
              <button
                type="submit"
                class="flex-1 bg-g2-gold text-g2-darker px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
              >
                Add White Paper
              </button>
              <button
                type="button"
                onclick="document.getElementById('addModal').style.display='none'"
                class="flex-1 border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}
