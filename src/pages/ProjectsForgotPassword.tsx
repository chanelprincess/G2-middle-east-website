/**
 * Projects Forgot Password Page
 * 
 * Password reset request page for users who have forgotten their credentials.
 */

export function ProjectsForgotPasswordPage() {
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
              <a href="/projects/login" class="text-sm text-slate-300 hover:text-white transition-colors">
                ← Back to Login
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Reset Form */}
      <div class="max-w-md mx-auto px-6 py-16">
        <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8">
          {/* Header */}
          <div class="mb-8">
            <h1 class="text-3xl font-light text-white mb-3">
              Reset Password
            </h1>
            <p class="text-slate-300 leading-relaxed">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          {/* Reset Form */}
          <form method="POST" action="/api/projects/auth/forgot-password" class="space-y-6">
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

            {/* Submit Button */}
            <button
              type="submit"
              class="w-full px-6 py-4 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors"
            >
              Send Reset Link
            </button>
          </form>

          {/* Login Link */}
          <div class="mt-6 text-center">
            <p class="text-sm text-slate-400">
              Remember your password? <a href="/projects/login" class="text-white hover:underline">Login here</a>
            </p>
          </div>

          {/* Info Notice */}
          <div class="mt-8 p-4 bg-slate-900/50 border border-slate-700/50 rounded-lg">
            <p class="text-xs text-slate-400 leading-relaxed">
              If an account exists with this email, you will receive a password reset link within a few minutes. 
              The link will expire after 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
