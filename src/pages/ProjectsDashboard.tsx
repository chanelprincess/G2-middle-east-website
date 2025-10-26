/**
 * Projects Dashboard Page
 * 
 * Main dashboard for authenticated users to browse and access project case studies.
 * Implements two-tier access control (standard/premium) and NDA requirements.
 */

interface Project {
  id: string
  slug: string
  title: string
  subtitle: string | null
  description: string | null
  client_name: string | null
  project_type: string | null
  location: string | null
  start_date: string | null
  end_date: string | null
  featured_image_url: string | null
  access_level: string
  is_confidential: number
  view_count: number
}

interface User {
  userId: string
  email: string
  fullName: string
  accessLevel: string
  emailVerified: boolean
  ndaAccepted: boolean
}

interface ProjectsDashboardProps {
  user: User
  standardProjects: Project[]
  premiumProjects: Project[]
}

export function ProjectsDashboardPage({ user, standardProjects, premiumProjects }: ProjectsDashboardProps) {
  const hasStandardAccess = true
  const hasPremiumAccess = user.accessLevel === 'premium' && user.ndaAccepted
  const emailVerified = user.emailVerified
  
  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav class="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-6 py-4">
          <div class="flex items-center justify-between">
            <a href="/" class="text-xl font-light text-white hover:text-slate-300 transition-colors">
              G2 MIDDLE EAST
            </a>
            <div class="flex items-center gap-6">
              <span class="text-sm text-slate-400">
                Welcome, <span class="text-white">{user.fullName}</span>
              </span>
              <a href="/projects/account" class="text-sm text-slate-300 hover:text-white transition-colors">
                Account Settings
              </a>
              <a href="/api/projects/auth/logout" class="text-sm text-slate-300 hover:text-white transition-colors">
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div class="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div class="mb-12">
          <h1 class="text-4xl font-light text-white mb-4">
            Confidential Projects Portal
          </h1>
          <p class="text-xl text-slate-300 leading-relaxed">
            Strategic case studies and project insights for our trusted partners.
          </p>
        </div>

        {/* Email Verification Warning */}
        {!emailVerified && (
          <div class="mb-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <div class="flex items-start gap-4">
              <svg class="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              <div>
                <h3 class="text-lg font-medium text-yellow-500 mb-1">Email Verification Pending</h3>
                <p class="text-slate-300 text-sm">
                  Please verify your email address to access all features. Check your inbox for the verification link.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Access Level Badge */}
        <div class="mb-8">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg">
            <span class="text-sm text-slate-400">Your Access Level:</span>
            <span class={`text-sm font-medium ${user.accessLevel === 'premium' ? 'text-amber-400' : 'text-slate-300'}`}>
              {user.accessLevel === 'premium' ? '⭐ Premium Access' : 'Standard Access'}
            </span>
            {!hasPremiumAccess && user.accessLevel === 'premium' && !user.ndaAccepted && (
              <span class="text-xs text-red-400">(NDA Required)</span>
            )}
          </div>
        </div>

        {/* Standard Access Projects */}
        <section class="mb-16">
          <div class="mb-6">
            <h2 class="text-2xl font-light text-white mb-2">
              Case Studies
            </h2>
            <p class="text-slate-400">
              Public project case studies showcasing our strategic capabilities
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standardProjects.map((project) => (
              <a 
                href={`/projects/case-studies/${project.slug}`}
                class="group bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:bg-slate-800/50 hover:border-slate-600 transition-all"
              >
                <div class="mb-4">
                  <span class="text-xs text-slate-500 uppercase tracking-wider">
                    {project.project_type || 'Project'}
                  </span>
                </div>
                <h3 class="text-xl font-light text-white mb-3 group-hover:text-slate-200 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p class="text-sm text-slate-400 mb-4">
                    {project.subtitle}
                  </p>
                )}
                {project.location && (
                  <div class="flex items-center gap-2 text-xs text-slate-500">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{project.location}</span>
                  </div>
                )}
                <div class="mt-4 flex items-center gap-2 text-sm text-slate-400">
                  <span>{project.view_count} views</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Premium Access Projects */}
        {hasPremiumAccess && premiumProjects.length > 0 && (
          <section class="mb-16">
            <div class="mb-6 flex items-center gap-3">
              <h2 class="text-2xl font-light text-white">
                Confidential Projects
              </h2>
              <span class="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs text-amber-400 font-medium">
                Premium Access
              </span>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumProjects.map((project) => (
                <a 
                  href={`/projects/case-studies/${project.slug}`}
                  class="group bg-gradient-to-br from-amber-900/20 to-slate-800/30 border border-amber-700/30 rounded-lg p-6 hover:from-amber-900/30 hover:to-slate-800/50 hover:border-amber-600/40 transition-all"
                >
                  <div class="mb-4 flex items-center justify-between">
                    <span class="text-xs text-amber-400 uppercase tracking-wider">
                      {project.project_type || 'Confidential'}
                    </span>
                    {project.is_confidential === 1 && (
                      <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    )}
                  </div>
                  <h3 class="text-xl font-light text-white mb-3 group-hover:text-slate-200 transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p class="text-sm text-slate-300 mb-4">
                      {project.subtitle}
                    </p>
                  )}
                  {project.location && (
                    <div class="flex items-center gap-2 text-xs text-slate-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>{project.location}</span>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Premium Access Locked */}
        {!hasPremiumAccess && (
          <section class="mb-16">
            <div class="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8 text-center">
              <div class="mb-4">
                <svg class="w-16 h-16 text-slate-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-light text-white mb-3">
                Confidential Projects
              </h3>
              <p class="text-slate-400 mb-6 max-w-md mx-auto">
                {user.accessLevel === 'premium' && !user.ndaAccepted 
                  ? 'Please accept the NDA in your account settings to access confidential government and sovereign-level projects.'
                  : 'Premium access required to view confidential government and sovereign-level projects. Contact us to upgrade your access level.'}
              </p>
              {user.accessLevel === 'premium' && !user.ndaAccepted ? (
                <a 
                  href="/projects/account" 
                  class="inline-block px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Accept NDA
                </a>
              ) : (
                <a 
                  href="/contact" 
                  class="inline-block px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Request Premium Access
                </a>
              )}
            </div>
          </section>
        )}

        {/* Footer Info */}
        <div class="mt-12 p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg">
          <div class="flex items-start gap-4">
            <svg class="w-6 h-6 text-slate-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h4 class="text-sm font-medium text-slate-300 mb-2">Confidentiality Notice</h4>
              <p class="text-sm text-slate-400 leading-relaxed">
                All content in this portal is confidential and proprietary. Unauthorized disclosure, copying, or distribution is strictly prohibited. 
                All access is logged and monitored for security purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
