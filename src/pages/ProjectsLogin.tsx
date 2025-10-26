/**
 * Projects Login Page
 * 
 * Authentication page for accessing confidential project case studies.
 * Includes Remember Me and Forgot Password functionality.
 */

export function ProjectsLoginPage() {
  return (
    <div class="min-h-screen bg-g2-darker">
      {/* Navigation */}
      <nav class="border-b border-white/10 bg-g2-dark/95 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-6 py-5">
          <div class="flex items-center justify-between">
            <a href="/" class="text-2xl font-bold tracking-tight text-white hover:text-g2-gold transition-colors">
              G2 MIDDLE EAST
            </a>
            <div class="flex items-center gap-6">
              <a href="/projects" class="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <i class="fas fa-arrow-left"></i> Back to Projects
              </a>
              <a href="/projects/register" class="text-sm text-g2-gold hover:text-white transition-colors font-medium">
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div class="max-w-md mx-auto px-6 py-20">
        <div class="bg-g2-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10 shadow-2xl">
          {/* Header */}
          <div class="mb-10">
            <div class="mb-4">
              <span class="text-g2-gold text-xs font-semibold uppercase tracking-widest">Authorized Access</span>
            </div>
            <h1 class="text-4xl font-serif font-bold text-white mb-4 tracking-wide">
              Client Portal
            </h1>
            <p class="text-gray-400 leading-relaxed">
              Access confidential project case studies and strategic insights.
            </p>
          </div>

          {/* Login Form */}
          <form method="POST" action="/api/projects/auth/login" class="space-y-6">
            {/* Email */}
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autofocus
                class="w-full px-4 py-3.5 bg-g2-darker/80 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-all"
                placeholder="your.email@company.com"
              />
            </div>

            {/* Password */}
            <div>
              <div class="flex items-center justify-between mb-3">
                <label for="password" class="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <a href="/projects/forgot-password" class="text-xs text-g2-gold hover:text-white transition-colors font-medium">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                required
                class="w-full px-4 py-3.5 bg-g2-darker/80 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-all"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me */}
            <div class="pt-2">
              <label class="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="remember_me"
                  class="w-4 h-4 bg-g2-darker border-white/20 rounded focus:ring-g2-gold"
                />
                <span class="text-sm text-gray-400">
                  Remember me for 30 days
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              class="w-full px-6 py-4 bg-g2-gold text-g2-darker font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Sign In
            </button>
          </form>

          {/* Registration Link */}
          <div class="mt-8 text-center">
            <p class="text-sm text-gray-400">
              Don't have an account? <a href="/projects/register" class="text-g2-gold hover:text-white transition-colors font-medium">Register here</a>
            </p>
          </div>

          {/* Security Notice */}
          <div class="mt-10 p-5 bg-g2-darker/50 border border-white/10 rounded-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-shield-alt text-g2-gold mt-0.5"></i>
              <div>
                <p class="text-xs text-gray-400 leading-relaxed">
                  <strong class="text-gray-300 font-semibold">Security Notice:</strong> After 5 failed login attempts, your account will be temporarily locked for 30 minutes. All access is logged and monitored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
