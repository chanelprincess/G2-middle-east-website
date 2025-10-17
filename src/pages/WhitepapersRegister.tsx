import { Navigation, Footer } from '../components/Layout'

export function WhitepapersRegisterPage() {
  return (
    <>
      <Navigation />
      <div class="min-h-screen bg-black text-white pt-20">
        <section class="py-16 md:py-24">
          <div class="container mx-auto px-6">
            <div class="max-w-2xl mx-auto">
              {/* Header */}
              <div class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Register for Access
                </h1>
                <p class="text-gray-400">
                  Complete the form below to request access to our exclusive white papers
                </p>
              </div>

              {/* Registration Form Card */}
              <div class="border border-white/10 rounded-2xl p-8 bg-g2-darker/30">
                <form action="/api/auth/register" method="POST" class="space-y-6">
                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <label for="full_name" class="block text-sm font-medium text-gray-300 mb-2">
                        Full Name <span class="text-g2-gold">*</span>
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        required
                        class="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                        Email Address <span class="text-g2-gold">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        class="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <label for="company" class="block text-sm font-medium text-gray-300 mb-2">
                        Company / Organisation <span class="text-g2-gold">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        class="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                        placeholder="Company Name"
                      />
                    </div>

                    <div>
                      <label for="job_title" class="block text-sm font-medium text-gray-300 mb-2">
                        Job Title <span class="text-g2-gold">*</span>
                      </label>
                      <input
                        type="text"
                        id="job_title"
                        name="job_title"
                        required
                        class="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                        placeholder="Chief Marketing Officer"
                      />
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <label for="username" class="block text-sm font-medium text-gray-300 mb-2">
                        Username <span class="text-g2-gold">*</span>
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        minlength="3"
                        class="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                        placeholder="johnsmith"
                      />
                      <p class="text-xs text-gray-500 mt-1">Minimum 3 characters</p>
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
                        Password <span class="text-g2-gold">*</span>
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        minlength="8"
                        class="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                        placeholder="••••••••"
                      />
                      <p class="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
                    </div>

                    <div>
                      <label for="confirm_password" class="block text-sm font-medium text-gray-300 mb-2">
                        Confirm Password <span class="text-g2-gold">*</span>
                      </label>
                      <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        required
                        minlength="8"
                        class="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div class="pt-4">
                    <button
                      type="submit"
                      class="w-full bg-g2-gold text-g2-darker px-6 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg"
                    >
                      Submit Registration
                    </button>
                  </div>
                </form>

                <div class="mt-6 pt-6 border-t border-white/10 text-center">
                  <p class="text-gray-400">
                    Already have an account?{' '}
                    <a href="/whitepapers/login" class="text-g2-gold hover:text-white transition-colors">
                      Login here
                    </a>
                  </p>
                </div>
              </div>

              {/* Info Box */}
              <div class="mt-8 border border-g2-gold/30 rounded-lg p-6 bg-g2-gold/5">
                <div class="flex items-start gap-4">
                  <i class="fas fa-info-circle text-g2-gold text-xl mt-1"></i>
                  <div>
                    <h3 class="font-semibold text-white mb-2">What happens next?</h3>
                    <ul class="text-sm text-gray-400 space-y-2">
                      <li>• Your registration will be submitted for approval</li>
                      <li>• Our team will review your application within 24-48 hours</li>
                      <li>• You'll receive an email notification once approved</li>
                      <li>• After approval, you can login and access all white papers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      
      {/* Password Match Validation Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('form');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirm_password');
            
            form.addEventListener('submit', function(e) {
              if (password.value !== confirmPassword.value) {
                e.preventDefault();
                alert('Passwords do not match. Please try again.');
                confirmPassword.focus();
              }
            });
          });
        `
      }} />
    </>
  )
}
