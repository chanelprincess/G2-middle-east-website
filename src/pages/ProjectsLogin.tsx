/**
 * Projects Login Page
 * 
 * Authentication page for accessing confidential project case studies.
 * Includes Remember Me and Forgot Password functionality.
 */

export function ProjectsLoginPage() {
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
              <a href="/projects" class="text-sm text-slate-300 hover:text-white transition-colors">
                ← Back to Projects
              </a>
              <a href="/projects/register" class="text-sm text-slate-300 hover:text-white transition-colors">
                Need an account? Register
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div class="max-w-md mx-auto px-6 py-16">
        <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8">
          {/* Header */}
          <div class="mb-8">
            <h1 class="text-3xl font-light text-white mb-3">
              Client Portal Login
            </h1>
            <p class="text-slate-300 leading-relaxed">
              Access confidential project case studies and strategic insights.
            </p>
          </div>

          {/* Login Form */}
          <form method="POST" action="/api/projects/auth/login" class="space-y-6">
            {/* Email */}
            <div>
              <label for="email" class="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autofocus
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors"
                placeholder="your.email@company.com"
              />
            </div>

            {/* Password */}
            <div>
              <div class="flex items-center justify-between mb-2">
                <label for="password" class="block text-sm font-medium text-slate-300">
                  Password
                </label>
                <a href="/projects/forgot-password" class="text-xs text-slate-400 hover:text-white transition-colors">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                required
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me */}
            <div>
              <label class="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="remember_me"
                  class="w-4 h-4 bg-slate-900 border-slate-600 rounded focus:ring-offset-slate-900"
                />
                <span class="text-sm text-slate-300">
                  Remember me for 30 days
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              class="w-full px-6 py-4 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors"
            >
              Login
            </button>
          </form>

          {/* Registration Link */}
          <div class="mt-6 text-center">
            <p class="text-sm text-slate-400">
              Don't have an account? <a href="/projects/register" class="text-white hover:underline">Register here</a>
            </p>
          </div>

          {/* Security Notice */}
          <div class="mt-8 p-4 bg-slate-900/50 border border-slate-700/50 rounded-lg">
            <p class="text-xs text-slate-400 leading-relaxed">
              <strong class="text-slate-300">Security Notice:</strong> After 5 failed login attempts, your account will be temporarily locked for 30 minutes. All access is logged and monitored.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
