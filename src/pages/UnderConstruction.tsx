import { FC } from 'hono/jsx'

export const UnderConstructionPage: FC = () => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div class="max-w-4xl w-full text-center">
        {/* Logo */}
        <div class="mb-12">
          <h1 class="text-5xl md:text-7xl font-light text-white mb-4 tracking-tight">
            G2 Middle East
          </h1>
          <div class="h-1 w-32 bg-white mx-auto opacity-50"></div>
        </div>

        {/* Main Message */}
        <div class="mb-12">
          <div class="inline-block mb-8">
            <svg class="w-24 h-24 text-slate-400 mx-auto animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          
          <h2 class="text-3xl md:text-4xl font-light text-white mb-6">
            Site Under Development
          </h2>
          
          <p class="text-xl text-slate-300 mb-4 leading-relaxed max-w-2xl mx-auto">
            We're crafting something exceptional. Our new website is currently under construction.
          </p>
          
          <p class="text-lg text-slate-400 max-w-xl mx-auto">
            G2 Middle East & Africa specializes in strategic advisory and event architecture for sovereign entities, government agencies, and global brands.
          </p>
        </div>

        {/* Contact Information */}
        <div class="mb-12 p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg max-w-2xl mx-auto">
          <h3 class="text-2xl font-light text-white mb-6">Get in Touch</h3>
          
          <div class="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <div class="flex items-start space-x-3 mb-4">
                <svg class="w-6 h-6 text-slate-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="text-slate-400 text-sm mb-1">Email</p>
                  <a href="mailto:info@g2middleeast.com" class="text-white hover:text-slate-300 transition-colors">
                    info@g2middleeast.com
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div class="flex items-start space-x-3 mb-4">
                <svg class="w-6 h-6 text-slate-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p class="text-slate-400 text-sm mb-1">Location</p>
                  <p class="text-white">Abu Dhabi, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-6 pt-6 border-t border-slate-700/50">
            <p class="text-slate-400 text-sm">
              Part of <span class="text-white font-medium">Casta Diva Group</span>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div class="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/company/g2-middle-east/" target="_blank" rel="noopener noreferrer" 
             class="text-slate-400 hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

        {/* Footer */}
        <div class="mt-12 pt-8 border-t border-slate-800">
          <p class="text-slate-500 text-sm">
            © {new Date().getFullYear()} G2 Middle East & Africa. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
