/**
 * Projects Account Settings Page
 * 
 * User account management page with profile editing, password change,
 * NDA acceptance, and account security settings.
 */

interface User {
  userId: string
  email: string
  fullName: string
  companyName: string | null
  phoneNumber: string | null
  country: string | null
  industrySector: string | null
  accessLevel: string
  emailVerified: boolean
  ndaAccepted: boolean
  ndaAcceptedDate: string | null
  twoFactorEnabled: boolean
  createdAt: string
  lastLogin: string | null
}

interface ProjectsAccountProps {
  user: User
}

export function ProjectsAccountPage({ user }: ProjectsAccountProps) {
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
              <a href="/projects/dashboard" class="text-sm text-slate-300 hover:text-white transition-colors">
                ← Back to Dashboard
              </a>
              <a href="/api/projects/auth/logout" class="text-sm text-slate-300 hover:text-white transition-colors">
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div class="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div class="mb-12">
          <h1 class="text-4xl font-light text-white mb-4">
            Account Settings
          </h1>
          <p class="text-xl text-slate-300">
            Manage your profile, security, and access preferences
          </p>
        </div>

        {/* Account Status */}
        <div class="mb-8 grid md:grid-cols-3 gap-4">
          <div class="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
            <div class="text-xs text-slate-400 uppercase tracking-wider mb-2">Access Level</div>
            <div class={`text-lg font-medium ${user.accessLevel === 'premium' ? 'text-amber-400' : 'text-slate-300'}`}>
              {user.accessLevel === 'premium' ? 'Premium' : 'Standard'}
            </div>
          </div>
          <div class="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
            <div class="text-xs text-slate-400 uppercase tracking-wider mb-2">Email Status</div>
            <div class={`text-lg font-medium ${user.emailVerified ? 'text-green-400' : 'text-yellow-400'}`}>
              {user.emailVerified ? '✓ Verified' : 'Pending'}
            </div>
          </div>
          <div class="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
            <div class="text-xs text-slate-400 uppercase tracking-wider mb-2">NDA Status</div>
            <div class={`text-lg font-medium ${user.ndaAccepted ? 'text-green-400' : 'text-slate-400'}`}>
              {user.ndaAccepted ? '✓ Accepted' : 'Not Accepted'}
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <section class="mb-8">
          <div class="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
            <h2 class="text-2xl font-light text-white mb-6">Profile Information</h2>
            
            <form method="POST" action="/api/projects/account/update-profile" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={user.fullName}
                    class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-slate-400 transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    disabled
                    class="w-full px-4 py-3 bg-slate-900/30 border border-slate-700 rounded-lg text-slate-400 cursor-not-allowed"
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    value={user.companyName || ''}
                    class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-slate-400 transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={user.phoneNumber || ''}
                    class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-slate-400 transition-colors"
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-2">
                    Country
                  </label>
                  <select
                    name="country"
                    class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-slate-400 transition-colors"
                  >
                    <option value={user.country || ''}>{user.country || 'Select a country'}</option>
                    <option value="UAE">United Arab Emirates</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Oman">Oman</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-2">
                    Industry Sector
                  </label>
                  <select
                    name="industry_sector"
                    class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-slate-400 transition-colors"
                  >
                    <option value={user.industrySector || ''}>{user.industrySector || 'Select industry'}</option>
                    <option value="Government">Government / Public Sector</option>
                    <option value="Royal Family">Royal Family / Sovereign Entity</option>
                    <option value="Finance">Finance & Banking</option>
                    <option value="Real Estate">Real Estate & Development</option>
                    <option value="Hospitality">Hospitality & Tourism</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Energy">Energy</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                class="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors"
              >
                Update Profile
              </button>
            </form>
          </div>
        </section>

        {/* Change Password */}
        <section class="mb-8">
          <div class="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
            <h2 class="text-2xl font-light text-white mb-6">Change Password</h2>
            
            <form method="POST" action="/api/projects/account/change-password" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  name="current_password"
                  required
                  class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-slate-400 transition-colors"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  name="new_password"
                  required
                  minlength="12"
                  class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-slate-400 transition-colors"
                />
                <p class="mt-2 text-xs text-slate-400">
                  Minimum 12 characters with uppercase, lowercase, number, and special character
                </p>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  required
                  class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-slate-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                class="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors"
              >
                Update Password
              </button>
            </form>
          </div>
        </section>

        {/* NDA Acceptance */}
        {!user.ndaAccepted && user.accessLevel === 'premium' && (
          <section class="mb-8">
            <div class="bg-amber-900/20 border border-amber-700/30 rounded-lg p-8">
              <h2 class="text-2xl font-light text-white mb-6">Non-Disclosure Agreement</h2>
              
              <div class="mb-6 p-6 bg-slate-900/50 border border-slate-700/50 rounded-lg max-h-64 overflow-y-auto">
                <div class="prose prose-invert prose-sm">
                  <h3 class="text-lg font-medium text-white mb-4">Confidentiality Agreement</h3>
                  <p class="text-slate-300 mb-4">
                    By accepting this Non-Disclosure Agreement (NDA), you acknowledge and agree to maintain strict confidentiality regarding all information, documents, and materials accessed through the G2 Middle East Projects Portal.
                  </p>
                  <p class="text-slate-300 mb-4">
                    <strong>You agree to:</strong>
                  </p>
                  <ul class="list-disc pl-6 text-slate-300 space-y-2">
                    <li>Keep all project information strictly confidential</li>
                    <li>Not disclose, share, or distribute any materials to unauthorized parties</li>
                    <li>Use the information solely for authorized business purposes</li>
                    <li>Immediately report any unauthorized access or breaches</li>
                    <li>Return or destroy all materials upon request</li>
                  </ul>
                  <p class="text-slate-300 mt-4">
                    Violation of this agreement may result in immediate termination of access and legal action.
                  </p>
                </div>
              </div>

              <form method="POST" action="/api/projects/account/accept-nda" class="space-y-4">
                <label class="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="nda_accepted"
                    required
                    class="mt-1 w-4 h-4 bg-slate-900 border-slate-600 rounded"
                  />
                  <span class="text-sm text-slate-300">
                    I have read and agree to the terms of this Non-Disclosure Agreement
                  </span>
                </label>

                <button
                  type="submit"
                  class="px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Accept NDA and Access Confidential Projects
                </button>
              </form>
            </div>
          </section>
        )}

        {user.ndaAccepted && (
          <section class="mb-8">
            <div class="bg-green-900/20 border border-green-700/30 rounded-lg p-6">
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 class="text-lg font-medium text-green-400">NDA Accepted</h3>
                  <p class="text-sm text-slate-300">
                    Accepted on {new Date(user.ndaAcceptedDate || '').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Account Activity */}
        <section class="mb-8">
          <div class="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
            <h2 class="text-2xl font-light text-white mb-6">Account Activity</h2>
            
            <div class="space-y-4">
              <div class="flex justify-between items-center py-3 border-b border-slate-700/50">
                <span class="text-slate-300">Account Created</span>
                <span class="text-slate-400 text-sm">
                  {new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-slate-700/50">
                <span class="text-slate-300">Last Login</span>
                <span class="text-slate-400 text-sm">
                  {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Never'}
                </span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="text-slate-300">Two-Factor Authentication</span>
                <span class={`text-sm ${user.twoFactorEnabled ? 'text-green-400' : 'text-slate-400'}`}>
                  {user.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Danger Zone */}
        <section class="mb-8">
          <div class="bg-red-900/20 border border-red-700/30 rounded-lg p-8">
            <h2 class="text-2xl font-light text-red-400 mb-6">Danger Zone</h2>
            
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="text-white font-medium">Delete Account</h3>
                  <p class="text-sm text-slate-400">Permanently delete your account and all associated data</p>
                </div>
                <button
                  onclick="if(confirm('Are you sure you want to delete your account? This action cannot be undone.')) { window.location.href='/api/projects/account/delete'; }"
                  class="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
