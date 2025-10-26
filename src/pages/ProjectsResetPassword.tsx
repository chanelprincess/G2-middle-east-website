/**
 * Projects Reset Password Page
 * 
 * Password reset page for users with a valid reset token.
 */

interface ProjectsResetPasswordProps {
  token: string
}

export function ProjectsResetPasswordPage({ token }: ProjectsResetPasswordProps) {
  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav class="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-6 py-4">
          <div class="flex items-center justify-between">
            <a href="/" class="text-xl font-light text-white hover:text-slate-300 transition-colors">
              G2 MIDDLE EAST
            </a>
          </div>
        </div>
      </nav>

      {/* Reset Form */}
      <div class="max-w-md mx-auto px-6 py-16">
        <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8">
          {/* Header */}
          <div class="mb-8">
            <h1 class="text-3xl font-light text-white mb-3">
              Set New Password
            </h1>
            <p class="text-slate-300 leading-relaxed">
              Enter your new password below.
            </p>
          </div>

          {/* Reset Form */}
          <form method="POST" action="/api/projects/auth/reset-password" class="space-y-6">
            <input type="hidden" name="token" value={token} />

            {/* New Password */}
            <div>
              <label for="password" class="block text-sm font-medium text-slate-300 mb-2">
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                minlength="12"
                autofocus
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors"
                placeholder="Enter new password"
              />
              <p class="mt-2 text-xs text-slate-400">
                Minimum 12 characters with uppercase, lowercase, number, and special character
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label for="confirm_password" class="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                required
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors"
                placeholder="Confirm new password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              class="w-full px-6 py-4 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors"
            >
              Reset Password
            </button>
          </form>

          {/* Info Notice */}
          <div class="mt-8 p-4 bg-slate-900/50 border border-slate-700/50 rounded-lg">
            <p class="text-xs text-slate-400 leading-relaxed">
              After resetting your password, you will be redirected to the login page. 
              Please use your new password to sign in.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
