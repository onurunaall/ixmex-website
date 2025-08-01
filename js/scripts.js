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

  // SWIPER: wait until library & DOM are ready
  (function initSwiper() {
    if (typeof Swiper !== 'function') {
      // Swiper JS not loaded yet
      return setTimeout(initSwiper, 100);
    }
    const container = document.querySelector('.portfolio-swiper');
    if (!container) {
      console.warn('Swiper container ".portfolio-swiper" not found');
      return;
    }
    // Only initialize once
    if (container.dataset.swiperInitialized) return;
    container.dataset.swiperInitialized = 'true';

    new Swiper(container, {
      slidesPerView: 4,
      spaceBetween: 16,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
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

  // --- Custom Script for Ixmex Website File Upload ---
  const fileInput = document.getElementById('file-upload');
  const fileUploadButton = document.getElementById('file-upload-button');
  const filenameDisplay = document.getElementById('file-upload-filename');

  if (fileUploadButton && fileInput && filenameDisplay) {
      // Trigger the hidden file input when the custom button is clicked
      fileUploadButton.addEventListener('click', () => {
          fileInput.click();
      });

      // Display the selected filename
      fileInput.addEventListener('change', function() {
          if (this.files && this.files.length > 0) {
              filenameDisplay.textContent = 'Selected: ' + this.files[0].name;
          } else {
              filenameDisplay.textContent = '';
          }
      });
  }
});
