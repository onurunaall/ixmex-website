/*!
 * Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
 * Licensed under MIT
 */

window.addEventListener('DOMContentLoaded', () => {
  // NAVBAR SHRINK
  const navbar = document.querySelector('#mainNav');
  const shrinkNav = () => {
    if (!navbar) return;
    navbar.classList.toggle('navbar-shrink', window.scrollY > 0);
  };
  shrinkNav();
  document.addEventListener('scroll', shrinkNav);

  // SCROLLSPY
  if (navbar) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  // COLLAPSE MOBILE NAV
  const toggler = document.querySelector('.navbar-toggler');
  document
    .querySelectorAll('#navbarResponsive .nav-link')
    .forEach(link =>
      link.addEventListener('click', () => {
        if (toggler && window.getComputedStyle(toggler).display !== 'none') {
          toggler.click();
        }
      })
    );

  // SIMPLELIGHTBOX
  try {
    new SimpleLightbox({
      elements: '#portfolio a.portfolio-box',
      captionsData: 'title',
      captionPosition: 'bottom',
      fadeSpeed: 600,
      showSpeed: 400,
      nav: true,
      close: true,
      docClose: true,
    });
  } catch (e) {
    console.warn('SimpleLightbox init failed:', e);
  }

  // PORTFOLIO SWIPER
  (function initPortfolioSwiper() {
    if (typeof Swiper !== 'function') {
      return setTimeout(initPortfolioSwiper, 100);
    }
    const container = document.querySelector('.portfolio-swiper');
    if (!container) {
      return;
    }
    if (container.dataset.swiperInitialized) return;
    container.dataset.swiperInitialized = 'true';

    new Swiper(container, {
      slidesPerView: 4,
      spaceBetween: 16,
      loop: true,
      navigation: {
        nextEl: '.portfolio-swiper .swiper-button-next',
        prevEl: '.portfolio-swiper .swiper-button-prev',
      },
      pagination: {
        el: '.portfolio-swiper .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0:   { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
      },
    });
  })();

  // SERVICES SWIPER (Final Layout)
  (function initServicesSwiper() {
    if (typeof Swiper !== 'function') {
      return setTimeout(initServicesSwiper, 100);
    }
    const container = document.querySelector('.services-swiper');
    if (!container) {
      return;
    }
    if (container.dataset.swiperInitialized) return;
    container.dataset.swiperInitialized = 'true';

    new Swiper(container, {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: false,
        centeredSlides: true,
        navigation: {
            nextEl: '.services-swiper .swiper-button-next',
            prevEl: '.services-swiper .swiper-button-prev',
        },
        breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
            992: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false }
        },
    });
  })();

  // --- Custom Script for Ixmex Website File Upload with Remove ---
  const fileInput = document.getElementById('file-upload');
  const fileUploadButton = document.getElementById('file-upload-button');
  const fileUploadDisplay = document.getElementById('file-upload-display');
  const filenameDisplay = document.getElementById('file-upload-filename');
  const removeFileButton = document.getElementById('remove-file-button');

  if (fileUploadButton && fileInput && fileUploadDisplay && filenameDisplay && removeFileButton) {
      fileUploadButton.addEventListener('click', () => {
          fileInput.click();
      });
      fileInput.addEventListener('change', function() {
          if (this.files && this.files.length > 0) {
              filenameDisplay.textContent = this.files[0].name;
              fileUploadDisplay.classList.remove('d-none');
          }
      });
      removeFileButton.addEventListener('click', () => {
          fileInput.value = null;
          filenameDisplay.textContent = '';
          fileUploadDisplay.classList.add('d-none');
      });
  }
});

// --- Custom Script for Language Toggle ---
document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.lang-toggle');
    const allLangSpans = document.querySelectorAll('span[lang]');

    // Function to set the language
    const setLanguage = (lang) => {
        // Hide all language spans
        allLangSpans.forEach(span => {
            span.style.display = 'none';
        });

        // Show spans for the selected language
        document.querySelectorAll(`span[lang="${lang}"]`).forEach(span => {
            span.style.display = ''; // Use '' to revert to default display (block, inline, etc.)
        });

        // Update active state on toggles
        toggles.forEach(toggle => {
            if (toggle.getAttribute('data-lang') === lang) {
                toggle.style.fontWeight = 'bold';
            } else {
                toggle.style.fontWeight = 'normal';
            }
        });

        // Store preference
        localStorage.setItem('preferredLanguage', lang);
    };

    // Add click event to all toggles
    toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = toggle.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Check for a saved language preference on page load
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage) {
        setLanguage(preferredLanguage);
    } else {
        // Default to English if no preference is set
        setLanguage('en');
    }
});
