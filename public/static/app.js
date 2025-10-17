// G2 Middle East - Interactive Elements

// ============================================
// INTERACTIVE MAP TOOLTIPS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Handle Digital Command Centre office pin tooltips
  const officePins = document.querySelectorAll('.office-pin');
  const mapTooltip = document.getElementById('map-tooltip');
  
  officePins.forEach(pin => {
    pin.addEventListener('mouseenter', function(e) {
      const officeName = this.getAttribute('data-office');
      const officeType = this.getAttribute('data-type');
      
      if (mapTooltip) {
        const tooltipText = mapTooltip.querySelector('#office-name');
        if (tooltipText) {
          // Set office name
          tooltipText.textContent = officeName;
          
          // Add HQ indicator if applicable
          if (officeType === 'global-hq') {
            tooltipText.textContent += ' (Global HQ)';
          } else if (officeType === 'regional-hq') {
            tooltipText.textContent += ' (Regional HQ)';
          }
        }
        
        // Position tooltip above the pin
        const rect = this.getBoundingClientRect();
        const mapContainer = this.closest('.relative');
        if (mapContainer) {
          const containerRect = mapContainer.getBoundingClientRect();
          
          mapTooltip.style.left = (rect.left - containerRect.left + rect.width / 2) + 'px';
          mapTooltip.style.top = (rect.top - containerRect.top - 10) + 'px';
          mapTooltip.style.transform = 'translate(-50%, -100%)';
          mapTooltip.classList.remove('hidden');
        }
      }
    });
    
    pin.addEventListener('mouseleave', function() {
      if (mapTooltip) {
        mapTooltip.classList.add('hidden');
      }
    });
  });
  
  // Legacy support for old city marker system (if exists on other pages)
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
