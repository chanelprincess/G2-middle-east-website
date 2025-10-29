import { FC } from 'hono/jsx'
import { PageLayout } from '../components/Layout'

export const ContactPage: FC = () => {
  // LocalBusiness Schema for Dubai office
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://g2middleeast.com#localbusiness",
    "name": "G2 Middle East & Africa",
    "alternateName": "G2 Middle East",
    "legalName": "G2 Middle East & Africa",
    "description": "Strategic advisory and event architecture for sovereign entities, government agencies, and global brands across Middle East and Africa. Specialists in government event management, state visit coordination, and diplomatic protocol.",
    "url": "https://g2middleeast.com",
    "telephone": "+971-02-654-4049",
    "email": "contact@g2middleeast.com",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mazyad Offices 3 - Office 36 - Sultan Bin Mohammed Al, 75, Qubaisi St - Mohammed Bin Zayed City",
      "addressLocality": "Abu Dhabi",
      "addressRegion": "Abu Dhabi",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.4539,
      "longitude": 54.3773
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      {
        "@type": "Country",
        "name": "Qatar"
      },
      {
        "@type": "Country",
        "name": "Egypt"
      },
      {
        "@type": "Country",
        "name": "Bahrain"
      },
      {
        "@type": "Country",
        "name": "Kuwait"
      },
      {
        "@type": "Country",
        "name": "Oman"
      }
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Casta Diva Group",
      "url": "https://www.castadiva.it/"
    },
    "knowsAbout": [
      "Government Event Management",
      "State Visit Coordination",
      "Diplomatic Protocol Advisory",
      "Strategic Communications",
      "Crisis Management",
      "Nation Branding",
      "VIP Protocol Management",
      "Major Event Architecture",
      "Sovereign Communications",
      "GCC Government Relations"
    ],
    "slogan": "Architecture of Intangible Value",
    "foundingDate": "2010",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "20+"
    },
    "award": [
      "50+ major government projects delivered",
      "Papal Mass Abu Dhabi 2019 - 180,000 attendees",
      "Queen Elizabeth II State Visit UAE 2010",
      "Special Olympics World Games Abu Dhabi 2019"
    ]
  };

  return (
    <PageLayout>
      {/* LocalBusiness Schema - Embedded JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Hero Section */}
      <section class="relative py-32 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 fade-in">
              Start a Conversation
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed fade-in-delay-1">
              Bring us your highstakes challenges. We'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section class="py-24 bg-g2-dark">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div class="lg:col-span-2 space-y-8">
                <div>
                  <h2 class="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p class="text-gray-300 leading-relaxed mb-8">
                    Whether you're facing a strategic communications challenge, exploring a nation branding 
                    initiative, or seeking to elevate your luxury brand in the Middle East, we're here to help.
                  </p>
                </div>

                {/* Contact Details */}
                <div class="space-y-6">
                  <div class="flex items-start">
                    <div class="text-g2-gold text-2xl mr-4 mt-1">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h3 class="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:contact@g2middleast.com" class="text-gray-300 hover:text-g2-gold transition-colors">
                        contact@g2middleast.com
                      </a>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="text-g2-gold text-2xl mr-4 mt-1">
                      <i class="fas fa-phone"></i>
                    </div>
                    <div>
                      <h3 class="text-white font-semibold mb-1">Phone</h3>
                      <a href="tel:+97126544049" class="text-gray-300 hover:text-g2-gold transition-colors">
                        (+971) 02 654 4049
                      </a>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="text-g2-gold text-2xl mr-4 mt-1">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h3 class="text-white font-semibold mb-1">Location</h3>
                      <p class="text-gray-300">
                        Mazyad Offices 3 - Office 36<br />
                        Sultan Bin Mohammed Al, 75, Qubaisi St<br />
                        Mohammed Bin Zayed City<br />
                        Abu Dhabi, UAE<br />
                        <span class="text-sm">Serving clients across the GCC</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div class="pt-6 border-t border-white/10">
                  <h3 class="text-white font-semibold mb-4">Connect with Us</h3>
                  <div class="flex space-x-4">
                    <a href="#" class="w-12 h-12 bg-g2-darker rounded-full flex items-center justify-center text-g2-gold hover:bg-g2-gold hover:text-g2-darker transition-all">
                      <i class="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href="#" class="w-12 h-12 bg-g2-darker rounded-full flex items-center justify-center text-g2-gold hover:bg-g2-gold hover:text-g2-darker transition-all">
                      <i class="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" class="w-12 h-12 bg-g2-darker rounded-full flex items-center justify-center text-g2-gold hover:bg-g2-gold hover:text-g2-darker transition-all">
                      <i class="fab fa-instagram text-xl"></i>
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div class="bg-g2-gold/10 p-6 rounded-lg border border-g2-gold/30">
                  <div class="flex items-start">
                    <i class="fas fa-clock text-g2-gold text-2xl mr-4"></i>
                    <div>
                      <h4 class="text-white font-semibold mb-2">24-Hour Response Time</h4>
                      <p class="text-gray-300 text-sm">
                        We review every inquiry personally and respond within one business day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div class="lg:col-span-3">
                <form id="contactForm" class="space-y-6 bg-g2-darker p-8 rounded-lg border border-white/10">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="name" class="block text-white font-semibold mb-2">
                        Name <span class="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        class="w-full px-4 py-3 rounded bg-g2-dark border border-white/20 text-white focus:border-g2-gold focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label for="email" class="block text-white font-semibold mb-2">
                        Email <span class="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        class="w-full px-4 py-3 rounded bg-g2-dark border border-white/20 text-white focus:border-g2-gold focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="company" class="block text-white font-semibold mb-2">
                        Company
                      </label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        class="w-full px-4 py-3 rounded bg-g2-dark border border-white/20 text-white focus:border-g2-gold focus:outline-none"
                        placeholder="Your organization"
                      />
                    </div>

                    <div>
                      <label for="phone" class="block text-white font-semibold mb-2">
                        Phone
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        class="w-full px-4 py-3 rounded bg-g2-dark border border-white/20 text-white focus:border-g2-gold focus:outline-none"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="subject" class="block text-white font-semibold mb-2">
                      Subject <span class="text-red-500">*</span>
                    </label>
                    <select 
                      id="subject" 
                      name="subject" 
                      required
                      class="w-full px-4 py-3 rounded bg-g2-dark border border-white/20 text-white focus:border-g2-gold focus:outline-none"
                    >
                      <option value="">Select a topic...</option>
                      <option value="sovereign">Sovereign & Nation Branding</option>
                      <option value="luxury">Luxury Brand Positioning</option>
                      <option value="strategic">Strategic Communications</option>
                      <option value="crisis">Crisis Management</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label for="message" class="block text-white font-semibold mb-2">
                      Message <span class="text-red-500">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="6"
                      required
                      class="w-full px-4 py-3 rounded bg-g2-dark border border-white/20 text-white focus:border-g2-gold focus:outline-none resize-none"
                      placeholder="Tell us about your challenge or opportunity..."
                    ></textarea>
                  </div>

                  <div class="flex items-start">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      name="consent" 
                      required
                      class="mt-1 mr-3"
                    />
                    <label for="consent" class="text-gray-400 text-sm">
                      I agree to G2 Middle East's privacy policy and consent to being contacted regarding my inquiry. <span class="text-red-500">*</span>
                    </label>
                  </div>

                  <div id="formMessage" class="hidden p-4 rounded"></div>

                  <button 
                    type="submit" 
                    class="w-full btn-primary text-center py-4 text-lg"
                  >
                    <span id="submitText">Send Message</span>
                    <span id="submitLoading" class="hidden">
                      <i class="fas fa-spinner fa-spin mr-2"></i> Sending...
                    </span>
                  </button>

                  <p class="text-gray-400 text-sm text-center">
                    All inquiries are treated with strict confidentiality
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section class="py-24 bg-g2-darker">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-12 text-center">
              Other Ways to Connect
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-g2-dark p-8 rounded-lg border border-white/10 text-center">
                <div class="text-g2-gold text-4xl mb-4">
                  <i class="fas fa-file-download"></i>
                </div>
                <h3 class="text-xl font-bold mb-3">Download Our Credentials</h3>
                <p class="text-gray-400 mb-6">
                  Get a comprehensive overview of our services, case studies, and strategic approach.
                </p>
                <a href="/whitepapers" class="btn-secondary">
                  View Credentials
                </a>
              </div>

              <div class="bg-g2-dark p-8 rounded-lg border border-white/10 text-center">
                <div class="text-g2-gold text-4xl mb-4">
                  <i class="fas fa-newspaper"></i>
                </div>
                <h3 class="text-xl font-bold mb-3">Subscribe to Perspectives</h3>
                <p class="text-gray-400 mb-6">
                  Strategic insights and market intelligence delivered to your inbox monthly.
                </p>
                <a href="/briefing" class="btn-secondary">
                  Subscribe Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contactForm');
            const formMessage = document.getElementById('formMessage');
            const submitText = document.getElementById('submitText');
            const submitLoading = document.getElementById('submitLoading');
            
            form.addEventListener('submit', async function(e) {
              e.preventDefault();
              
              // Show loading state
              submitText.classList.add('hidden');
              submitLoading.classList.remove('hidden');
              formMessage.classList.add('hidden');
              
              try {
                const formData = new FormData(form);
                const data = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  company: formData.get('company'),
                  phone: formData.get('phone'),
                  subject: formData.get('subject'),
                  message: formData.get('message'),
                  source: 'contact_form'
                };
                
                const response = await fetch('/api/contact', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                  formMessage.className = 'p-4 rounded bg-green-500/20 border border-green-500 text-green-100';
                  formMessage.textContent = 'Thank you! We\\'ll respond within 24 hours.';
                  formMessage.classList.remove('hidden');
                  form.reset();
                } else {
                  throw new Error(result.message || 'Failed to send message');
                }
              } catch (error) {
                formMessage.className = 'p-4 rounded bg-red-500/20 border border-red-500 text-red-100';
                formMessage.textContent = 'Failed to send message. Please try again or email us directly.';
                formMessage.classList.remove('hidden');
              } finally {
                submitText.classList.remove('hidden');
                submitLoading.classList.add('hidden');
              }
            });
          });
        `
      }} />
    </PageLayout>
  )
}
