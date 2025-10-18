import { PageLayout } from '../components/Layout'

export function WhitepapersPendingPage() {
  return (
    <PageLayout>
      <div class="min-h-screen bg-black text-white">
        <section class="py-16 md:py-24">
          <div class="container mx-auto px-6">
            <div class="max-w-2xl mx-auto text-center">
              {/* Success Icon */}
              <div class="mb-8">
                <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-g2-gold/10 border-2 border-g2-gold">
                  <i class="fas fa-check text-g2-gold text-4xl"></i>
                </div>
              </div>

              {/* Message */}
              <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">
                Registration Received!
              </h1>
              
              <p class="text-xl text-gray-400 mb-8 leading-relaxed">
                Thank you for registering. Your request for access is now pending approval.
              </p>

              {/* Info Card */}
              <div class="border border-white/10 rounded-2xl p-8 bg-g2-darker/30 text-left mb-8">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <i class="fas fa-clock text-g2-gold"></i>
                  What Happens Next?
                </h3>
                <ul class="space-y-4 text-gray-400">
                  <li class="flex items-start gap-3">
                    <i class="fas fa-envelope text-g2-gold mt-1"></i>
                    <span>You will receive a confirmation email shortly at the address you provided</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-user-check text-g2-gold mt-1"></i>
                    <span>Our team will review your application within 24-48 hours</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-paper-plane text-g2-gold mt-1"></i>
                    <span>Once approved, you'll receive an email notification with login instructions</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-download text-g2-gold mt-1"></i>
                    <span>After approval, you can access and download all available white papers</span>
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  class="inline-block bg-g2-gold text-g2-darker px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
                >
                  Return to Homepage
                </a>
                <a
                  href="/briefing"
                  class="inline-block border border-g2-gold text-g2-gold px-8 py-3 rounded-lg hover:bg-g2-gold hover:text-g2-darker transition-all font-semibold"
                >
                  Read Our Blog
                </a>
              </div>

              {/* Contact Note */}
              <div class="mt-12 pt-8 border-t border-white/10">
                <p class="text-sm text-gray-500">
                  Questions about your registration?{' '}
                  <a href="/contact" class="text-g2-gold hover:text-white transition-colors">
                    Contact us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
