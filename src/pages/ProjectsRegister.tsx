/**
 * Projects Registration Page
 * 
 * Client registration system for accessing G2 Middle East project case studies.
 * Includes comprehensive form with industry validation and NDA acceptance.
 */

export function ProjectsRegisterPage() {
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
              <a href="/projects/login" class="text-sm text-g2-gold hover:text-white transition-colors font-medium">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Registration Form */}
      <div class="max-w-2xl mx-auto px-6 py-16">
        <div class="bg-g2-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10 shadow-2xl">
          {/* Header */}
          <div class="mb-10">
            <div class="mb-4">
              <span class="text-g2-gold text-xs font-semibold uppercase tracking-widest">New Client Registration</span>
            </div>
            <h1 class="text-4xl font-serif font-bold text-white mb-4 tracking-wide">
              Request Access
            </h1>
            <p class="text-gray-400 leading-relaxed">
              Access confidential project case studies and strategic insights. Your account will be reviewed within 24 hours.
            </p>
          </div>

          {/* Registration Form */}
          <form method="POST" action="/api/projects/auth/register" class="space-y-6" id="registration-form">
            {/* Full Name */}
            <div>
              <label for="full_name" class="block text-sm font-medium text-gray-300 mb-2">
                Full Name <span class="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                required
                class="w-full px-4 py-3 bg-g2-darker/80 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-all"
                placeholder="John Smith"
              />
            </div>

            {/* Email */}
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                Email Address <span class="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-3 bg-g2-darker/80 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-all"
                placeholder="john.smith@company.com"
              />
            </div>

            {/* Company Name */}
            <div>
              <label for="company_name" class="block text-sm font-medium text-gray-300 mb-2">
                Company / Organization <span class="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                required
                class="w-full px-4 py-3 bg-g2-darker/80 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-all"
                placeholder="Acme Corporation"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label for="phone_number" class="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                class="w-full px-4 py-3 bg-g2-darker/80 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-all"
                placeholder="+971 50 123 4567"
              />
            </div>

            {/* Country */}
            <div>
              <label for="country" class="block text-sm font-medium text-gray-300 mb-2">
                Country <span class="text-red-400">*</span>
              </label>
              <select
                id="country"
                name="country"
                required
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-slate-400 transition-colors"
              >
                <option value="">Select a country</option>
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

            {/* Industry Sector */}
            <div>
              <label for="industry_sector" class="block text-sm font-medium text-gray-300 mb-2">
                Industry Sector <span class="text-red-400">*</span>
              </label>
              <select
                id="industry_sector"
                name="industry_sector"
                required
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-slate-400 transition-colors"
              >
                <option value="">Select industry</option>
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

            {/* Password */}
            <div>
              <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
                Password <span class="text-red-400">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                minlength="12"
                class="w-full px-4 py-3 bg-g2-darker/80 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-all"
                placeholder="Enter secure password"
              />
              <p class="mt-2 text-xs text-gray-400">
                Minimum 12 characters with uppercase, lowercase, number, and special character
              </p>
              <div id="password-strength" class="mt-2 text-xs"></div>
            </div>

            {/* Confirm Password */}
            <div>
              <label for="confirm_password" class="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password <span class="text-red-400">*</span>
              </label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                required
                class="w-full px-4 py-3 bg-g2-darker/80 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-all"
                placeholder="Confirm password"
              />
            </div>

            {/* Terms Acceptance */}
            <div class="space-y-4">
              <label class="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="terms_accepted"
                  required
                  class="mt-1 w-4 h-4 bg-g2-darker border-white/20 rounded focus:ring-g2-gold"
                />
                <span class="text-sm text-gray-300">
                  I agree to the <a href="/terms" class="text-g2-gold underline hover:text-white" target="_blank">Terms of Service</a> and <a href="/privacy" class="text-g2-gold underline hover:text-white" target="_blank">Privacy Policy</a> <span class="text-red-400">*</span>
                </span>
              </label>

              <label class="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="nda_accepted"
                  required
                  class="mt-1 w-4 h-4 bg-g2-darker border-white/20 rounded focus:ring-g2-gold"
                />
                <span class="text-sm text-gray-300">
                  I acknowledge that I will be viewing confidential project information and agree to maintain strict confidentiality <span class="text-red-400">*</span>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              class="w-full px-6 py-4 bg-g2-gold text-g2-darker font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Submit Registration
            </button>
          </form>

          {/* Login Link */}
          <div class="mt-8 text-center">
            <p class="text-sm text-gray-400">
              Already have an account? <a href="/projects/login" class="text-g2-gold hover:text-white transition-colors font-medium">Sign in here</a>
            </p>
          </div>
        </div>
      </div>

      {/* Client-Side Validation Script */}
      <script dangerouslySetInnerHTML={{__html: `
        document.getElementById('password').addEventListener('input', function(e) {
          const password = e.target.value;
          const strengthDiv = document.getElementById('password-strength');
          
          let strength = 0;
          let messages = [];
          
          if (password.length >= 12) strength++;
          else messages.push('At least 12 characters');
          
          if (/[A-Z]/.test(password)) strength++;
          else messages.push('One uppercase letter');
          
          if (/[a-z]/.test(password)) strength++;
          else messages.push('One lowercase letter');
          
          if (/[0-9]/.test(password)) strength++;
          else messages.push('One number');
          
          if (/[^A-Za-z0-9]/.test(password)) strength++;
          else messages.push('One special character');
          
          if (strength === 5) {
            strengthDiv.innerHTML = '<span class="text-green-400">✓ Strong password</span>';
          } else {
            strengthDiv.innerHTML = '<span class="text-yellow-400">Still needed: ' + messages.join(', ') + '</span>';
          }
        });
        
        document.getElementById('registration-form').addEventListener('submit', function(e) {
          const password = document.getElementById('password').value;
          const confirmPassword = document.getElementById('confirm_password').value;
          
          if (password !== confirmPassword) {
            e.preventDefault();
            alert('Passwords do not match!');
            return false;
          }
        });
      `}} />
    </div>
  )
}
