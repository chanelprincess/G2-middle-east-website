import { FC } from 'hono/jsx'

export const Navigation: FC = () => {
  return (
    <nav class="fixed top-0 left-0 right-0 z-50 bg-g2-darker/95 backdrop-blur-sm border-b border-white/10">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          {/* Logo */}
          <a href="/" class="text-2xl font-bold tracking-tight">
            <span class="text-white">G2 MIDDLE EAST</span>
          </a>
          
          {/* Desktop Navigation */}
          <div class="hidden md:flex items-center space-x-8">
            <a href="/services" class="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="/projects" class="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="/team" class="text-gray-300 hover:text-white transition-colors">Team</a>
            <a href="/group" class="text-gray-300 hover:text-white transition-colors">The Group</a>
            <a href="/briefing" class="text-gray-300 hover:text-white transition-colors">Perspectives</a>
            <a href="/whitepapers" class="text-gray-300 hover:text-white transition-colors">Insights</a>
            <a href="/contact" class="bg-g2-gold text-g2-darker px-6 py-2 rounded hover:bg-opacity-90 transition-all font-medium">
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button id="mobile-menu-btn" class="md:hidden text-white">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4 space-y-3">
          <a href="/services" class="block text-gray-300 hover:text-white transition-colors py-2">Services</a>
          <a href="/projects" class="block text-gray-300 hover:text-white transition-colors py-2">Projects</a>
          <a href="/team" class="block text-gray-300 hover:text-white transition-colors py-2">Team</a>
          <a href="/group" class="block text-gray-300 hover:text-white transition-colors py-2">The Group</a>
          <a href="/briefing" class="block text-gray-300 hover:text-white transition-colors py-2">Perspectives</a>
          <a href="/whitepapers" class="block text-gray-300 hover:text-white transition-colors py-2">Insights</a>
          <a href="/contact" class="block bg-g2-gold text-g2-darker px-6 py-2 rounded hover:bg-opacity-90 transition-all font-medium text-center">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export const Footer: FC = () => {
  return (
    <footer class="bg-g2-darker border-t border-white/10 py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div class="col-span-1">
            <h3 class="text-xl font-bold mb-4">
              <span class="text-white">G2 MIDDLE EAST</span>
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Architecture of Intangible Value
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 class="text-white font-semibold mb-4">Services</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="/services#sovereign" class="text-gray-400 hover:text-white transition-colors">Sovereign & Nation Branding</a></li>
              <li><a href="/services#luxury" class="text-gray-400 hover:text-white transition-colors">Luxury Positioning</a></li>
              <li><a href="/services#strategic" class="text-gray-400 hover:text-white transition-colors">Strategic Communications</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 class="text-white font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="/team" class="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="/projects" class="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/briefing" class="text-gray-400 hover:text-white transition-colors">Perspectives</a></li>
              <li><a href="/whitepapers" class="text-gray-400 hover:text-white transition-colors">Whitepapers</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 class="text-white font-semibold mb-4">Connect</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="/contact" class="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="mailto:contact@g2middleast.com" class="text-gray-400 hover:text-white transition-colors">contact@g2middleast.com</a></li>
            </ul>
            <div class="mt-4 flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-g2-gold transition-colors">
                <i class="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-g2-gold transition-colors">
                <i class="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div class="border-t border-white/10 pt-8 text-center">
          <p class="text-gray-500 text-sm">
            © {new Date().getFullYear()} G2 Middle East. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

interface PageLayoutProps {
  children: any
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <main class="pt-20">
        {children}
      </main>
      <Footer />
      
      {/* Mobile Menu Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const menuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (menuBtn && mobileMenu) {
              menuBtn.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
              });
            }
          });
        `
      }} />
    </>
  )
}
