/*!
 * Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
 * Licensed under MIT
 */

window.addEventListener('DOMContentLoaded', () => {
  // NAVBAR SHRINK
  const navbar = document.querySelector('#mainNav');
  if (navbar) {
    const shrinkNav = () => {
      navbar.classList.toggle('navbar-shrink', window.scrollY > 0);
    };
    shrinkNav();
    document.addEventListener('scroll', shrinkNav);
  }

  // SCROLLSPY
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  // **FIX FOR MOBILE MENU:** This now includes '.lang-toggle'
  // It will close the mobile menu when a nav link OR a language is clicked.
  const toggler = document.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link, #navbarResponsive .lang-toggle')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (toggler && window.getComputedStyle(toggler).display !== 'none') {
        toggler.click();
      }
    });
  });

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
    if (!container) return;
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

  // SERVICES SWIPER
  (function initServicesSwiper() {
    if (typeof Swiper !== 'function') {
      return setTimeout(initServicesSwiper, 100);
    }
    const container = document.querySelector('.services-swiper');
    if (!container) return;
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
  
  // --- Language Toggle Functionality ---
  const allLangElements = document.querySelectorAll('[lang]');
  const activeLangText = document.getElementById('active-lang-text');
  const langToggles = document.querySelectorAll('.lang-toggle');

  const setLanguage = (lang) => {
      allLangElements.forEach(el => { el.style.display = 'none'; });
      document.querySelectorAll(`[lang="${lang}"]`).forEach(el => { el.style.display = ''; });
      if (activeLangText) { activeLangText.textContent = lang.toLowerCase(); }
      langToggles.forEach(toggle => {
          toggle.classList.toggle('active', toggle.getAttribute('data-lang') === lang);
      });
      localStorage.setItem('preferredLanguage', lang);
  };

  langToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = e.target.getAttribute('data-lang');
          setLanguage(lang);
      });
  });

  const savedLang = localStorage.getItem('preferredLanguage');
  setLanguage(savedLang || 'en');

  // --- File Upload Functionality ---
  const fileUploadButton = document.getElementById('file-upload-button');
  const fileUpload = document.getElementById('file-upload');
  const fileUploadDisplay = document.getElementById('file-upload-display');
  const fileUploadFilename = document.getElementById('file-upload-filename');
  const removeFileButton = document.getElementById('remove-file-button');

  if (fileUploadButton) {
      fileUploadButton.addEventListener('click', () => fileUpload.click());
  }
  if (fileUpload) {
      fileUpload.addEventListener('change', function() {
          if (this.files && this.files[0]) {
              fileUploadFilename.textContent = this.files[0].name;
              fileUploadDisplay.classList.remove('d-none');
              fileUploadButton.style.display = 'none';
          }
      });
  }
  if (removeFileButton) {
      removeFileButton.addEventListener('click', () => {
          fileUpload.value = '';
          fileUploadDisplay.classList.add('d-none');
          fileUploadButton.style.display = 'block';
      });
  }
});
