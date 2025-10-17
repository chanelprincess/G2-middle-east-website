import { Navigation, Footer } from '../components/Layout'

export function WhitepapersLoginPage() {
  return (
    <>
      <Navigation />
      <div class="min-h-screen bg-black text-white pt-20">
        <section class="py-16 md:py-24">
          <div class="container mx-auto px-6">
            <div class="max-w-md mx-auto">
              {/* Header */}
              <div class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">
                  White Papers
                </h1>
                <p class="text-gray-400">
                  Access exclusive strategic insights and research
                </p>
              </div>

              {/* Login Form Card */}
              <div class="border border-white/10 rounded-2xl p-8 bg-g2-darker/30">
                <h2 class="text-2xl font-bold mb-6 text-white">Login</h2>
                
                <form action="/api/auth/login" method="POST" class="space-y-6">
                  <div>
                    <label for="username" class="block text-sm font-medium text-gray-300 mb-2">
                      Username or Email
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required
                      class="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                      placeholder="Enter your username or email"
                    />
                  </div>

                  <div>
                    <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      class="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                      placeholder="Enter your password"
                    />
                  </div>

                  <button
                    type="submit"
                    class="w-full bg-g2-gold text-g2-darker px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
                  >
                    Login
                  </button>
                </form>

                <div class="mt-6 pt-6 border-t border-white/10 text-center">
                  <p class="text-gray-400 mb-4">Don't have access yet?</p>
                  <a
                    href="/whitepapers/register"
                    class="inline-block border border-g2-gold text-g2-gold px-6 py-3 rounded-lg hover:bg-g2-gold hover:text-g2-darker transition-all font-semibold"
                  >
                    Register for Access
                  </a>
                </div>
              </div>

              {/* Info Message */}
              <div class="mt-8 text-center text-sm text-gray-500">
                <p>Access is subject to approval. You will be notified via email once your account is activated.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
