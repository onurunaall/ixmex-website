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
  (function initSwiper() {
    if (typeof Swiper !== 'function') {
      return setTimeout(initSwiper, 100);
    }
    const container = document.querySelector('.portfolio-swiper');
    if (!container) {
      console.warn('Swiper container ".portfolio-swiper" not found');
      return;
    }
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

  // SERVICES SWIPER
  (function initServicesSwiper() {
    if (typeof Swiper !== 'function') {
      return setTimeout(initServicesSwiper, 100);
    }
    const container = document.querySelector('.services-swiper');
    if (!container) {
      console.warn('Swiper container ".services-swiper" not found');
      return;
    }
    if (container.dataset.swiperInitialized) return;
    container.dataset.swiperInitialized = 'true';

    new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
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
      
      // Trigger the hidden file input when the custom button is clicked
      fileUploadButton.addEventListener('click', () => {
          fileInput.click();
      });

      // When a file is selected, show its name and the remove button
      fileInput.addEventListener('change', function() {
          if (this.files && this.files.length > 0) {
              filenameDisplay.textContent = this.files[0].name;
              fileUploadDisplay.classList.remove('d-none'); // Show the container
          }
      });

      // When the remove button is clicked, clear the input and hide the display
      removeFileButton.addEventListener('click', () => {
          fileInput.value = null; // This is the crucial step to clear the file
          filenameDisplay.textContent = '';
          fileUploadDisplay.classList.add('d-none'); // Hide the container again
      });
  }
});
