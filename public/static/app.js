// G2 Middle East - Interactive Elements

// ============================================
// INTERACTIVE MAP TOOLTIPS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Handle city marker hover tooltips
  const cityMarkers = document.querySelectorAll('.city-marker');
  const tooltip = document.getElementById('city-tooltip');
  const tooltipGroup = document.getElementById('city-tooltip-group');
  
  cityMarkers.forEach(marker => {
    marker.addEventListener('mouseenter', function(e) {
      const cityName = this.getAttribute('data-city');
      const activeTooltip = tooltip || tooltipGroup;
      
      if (activeTooltip) {
        const tooltipText = activeTooltip.querySelector('span');
        if (tooltipText) {
          tooltipText.textContent = cityName;
        }
        
        // Position tooltip
        const rect = this.getBoundingClientRect();
        const parentRect = this.closest('.aspect-\\[2\\/1\\]').getBoundingClientRect();
        
        activeTooltip.style.left = (rect.left - parentRect.left + rect.width / 2) + 'px';
        activeTooltip.style.top = (rect.top - parentRect.top - 40) + 'px';
        activeTooltip.style.transform = 'translateX(-50%)';
        activeTooltip.classList.remove('hidden');
      }
    });
    
    marker.addEventListener('mouseleave', function() {
      const activeTooltip = tooltip || tooltipGroup;
      if (activeTooltip) {
        activeTooltip.classList.add('hidden');
      }
    });
  });
  
  // Mobile menu toggle (if not already defined)
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Hero gallery rotation (if exists)
  const heroSlides = document.querySelectorAll('.hero-slide');
  const galleryDots = document.querySelectorAll('.gallery-dot');
  
  if (heroSlides.length > 0) {
    let currentSlide = 0;
    
    function showSlide(index) {
      heroSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      galleryDots.forEach((dot, i) => {
        dot.style.opacity = i === index ? '1' : '0.5';
      });
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % heroSlides.length;
      showSlide(currentSlide);
    }
    
    // Auto-rotate every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Dot navigation
    galleryDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
  }
});
