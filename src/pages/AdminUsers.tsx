import { Navigation, Footer } from '../components/Layout'

interface User {
  id: number
  username: string
  email: string
  full_name: string
  company: string
  job_title: string
  is_approved: number
  created_at: string
}

interface AdminUsersPageProps {
  pendingUsers: User[]
  approvedUsers: User[]
}

export function AdminUsersPage(props: AdminUsersPageProps) {
  return (
    <>
      <Navigation />
      <div class="min-h-screen bg-black text-white pt-20">
        {/* Header */}
        <section class="py-8 border-b border-white/5">
          <div class="container mx-auto px-6">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="text-3xl font-bold text-white mb-2">User Management</h1>
                <p class="text-gray-400">Approve and manage white paper access requests</p>
              </div>
              <a
                href="/admin/whitepapers"
                class="border border-g2-gold text-g2-gold px-6 py-2 rounded-lg hover:bg-g2-gold hover:text-g2-darker transition-all font-semibold"
              >
                Manage White Papers
              </a>
            </div>
          </div>
        </section>

        {/* Pending Users Section */}
        <section class="py-8">
          <div class="container mx-auto px-6">
            <h2 class="text-2xl font-bold text-white mb-6">
              Pending Approval ({props.pendingUsers.length})
            </h2>
            
            {props.pendingUsers.length === 0 ? (
              <div class="border border-white/10 rounded-lg p-8 bg-g2-darker/30 text-center">
                <i class="fas fa-check-circle text-4xl text-gray-700 mb-4"></i>
                <p class="text-gray-400">No pending requests</p>
              </div>
            ) : (
              <div class="space-y-4">
                {props.pendingUsers.map((user) => (
                  <div key={user.id} class="border border-yellow-500/30 rounded-lg p-6 bg-yellow-500/5">
                    <div class="grid md:grid-cols-3 gap-6">
                      <div class="md:col-span-2">
                        <h3 class="text-xl font-bold text-white mb-3">{user.full_name}</h3>
                        <div class="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p class="text-gray-500 mb-1">Email</p>
                            <p class="text-gray-300">{user.email}</p>
                          </div>
                          <div>
                            <p class="text-gray-500 mb-1">Username</p>
                            <p class="text-gray-300">{user.username}</p>
                          </div>
                          <div>
                            <p class="text-gray-500 mb-1">Company</p>
                            <p class="text-gray-300">{user.company}</p>
                          </div>
                          <div>
                            <p class="text-gray-500 mb-1">Job Title</p>
                            <p class="text-gray-300">{user.job_title}</p>
                          </div>
                        </div>
                        <p class="text-xs text-gray-500 mt-3">
                          Registered: {new Date(user.created_at).toLocaleString()}
                        </p>
                      </div>
                      <div class="flex flex-col justify-center gap-3">
                        <form action={`/api/admin/users/approve/${user.id}`} method="POST">
                          <button
                            type="submit"
                            class="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold"
                          >
                            <i class="fas fa-check mr-2"></i>
                            Approve User
                          </button>
                        </form>
                        <form action={`/api/admin/users/deny/${user.id}`} method="POST">
                          <button
                            type="submit"
                            class="w-full bg-red-600/20 text-red-400 px-6 py-3 rounded-lg hover:bg-red-600/30 transition-all font-semibold border border-red-600/30"
                          >
                            <i class="fas fa-times mr-2"></i>
                            Deny
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

        {/* Approved Users Section */}
        <section class="py-8 border-t border-white/5">
          <div class="container mx-auto px-6">
            <h2 class="text-2xl font-bold text-white mb-6">
              Approved Users ({props.approvedUsers.length})
            </h2>
            
            {props.approvedUsers.length === 0 ? (
              <div class="border border-white/10 rounded-lg p-8 bg-g2-darker/30 text-center">
                <p class="text-gray-400">No approved users yet</p>
              </div>
            ) : (
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {props.approvedUsers.map((user) => (
                  <div key={user.id} class="border border-white/10 rounded-lg p-6 bg-g2-darker/30">
                    <div class="flex items-start justify-between mb-3">
                      <h3 class="font-bold text-white">{user.full_name}</h3>
                      <i class="fas fa-check-circle text-green-500"></i>
                    </div>
                    <p class="text-sm text-gray-400 mb-2">{user.email}</p>
                    <p class="text-sm text-gray-500">{user.company}</p>
                    <p class="text-xs text-gray-600 mt-3">
                      Approved: {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
