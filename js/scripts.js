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
  document.querySelectorAll('#navbarResponsive .nav-link').forEach(link =>
    link.addEventListener('click', (event) => {
      // Prevent closing if the clicked link is a dropdown toggle
      if (link.classList.contains('dropdown-toggle')) {
        return;
      }
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
        0: {
          slidesPerView: 1
        },
        576: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4
        },
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
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: false
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: false
        }
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

// --- Custom Script for Language Dropdown Toggle ---
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.lang-toggle');
  const allLangSpans = document.querySelectorAll('span[lang]');
  const activeLangText = document.getElementById('active-lang-text');
  const dropdownItems = document.querySelectorAll('.dropdown-menu .lang-toggle');
  // Initialize Bootstrap dropdowns
  const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
  const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));

  // Function to set the language
  const setLanguage = (lang) => {
    // Hide all language-specific text elements
    allLangSpans.forEach(span => {
      span.style.display = 'none';
    });

    // Show text elements for the selected language
    document.querySelectorAll(`span[lang="${lang}"]`).forEach(span => {
      // Use 'inline' for spans to ensure they flow correctly with other text
      span.style.display = 'inline';
    });

    // **FIX:** Correctly update the navbar toggle text to uppercase
    if (activeLangText) {
      activeLangText.textContent = lang.toUpperCase();
    }

    // Update the 'active' class on the correct dropdown item
    dropdownItems.forEach(item => {
      if (item.getAttribute('data-lang') === lang) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Store the user's preference in local storage
    localStorage.setItem('preferredLanguage', lang);
  };

  // Add click event listeners to the language toggles
  toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = toggle.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // On page load, check for a saved language preference
  const preferredLanguage = localStorage.getItem('preferredLanguage');
  if (preferredLanguage) {
    setLanguage(preferredLanguage);
  } else {
    // Default to English if no preference is found
    setLanguage('en');
  }
});
