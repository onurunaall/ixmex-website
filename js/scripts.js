/*!
 * Ixmex Stone Design – site scripts
 * Navbar behaviour adapted from Start Bootstrap - Creative v7.0.7
 * (https://startbootstrap.com/theme/creative), licensed under MIT.
 */

window.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLightbox();
  initSliders();
  initFileUpload();
  initLanguageSwitch();

  const year = document.getElementById('copyright-year');
  if (year) year.textContent = new Date().getFullYear();
});

function initNavbar() {
  const navbar = document.getElementById('mainNav');
  if (!navbar) return;

  // Solid navbar once the page is scrolled
  const updateNavbar = () => navbar.classList.toggle('navbar-shrink', window.scrollY > 0);
  updateNavbar();
  document.addEventListener('scroll', updateNavbar, { passive: true });

  // Highlight the nav link of the section in view
  if (window.bootstrap) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  // Close the mobile menu after a section link is chosen
  const toggler = navbar.querySelector('.navbar-toggler');
  navbar.querySelectorAll('#navbarResponsive .nav-link:not(.dropdown-toggle)').forEach((link) => {
    link.addEventListener('click', () => {
      if (toggler && getComputedStyle(toggler).display !== 'none') {
        toggler.click();
      }
    });
  });
}

function initLightbox() {
  if (typeof SimpleLightbox === 'undefined') return;

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
}

function initSliders() {
  if (typeof Swiper === 'undefined') return;

  if (document.querySelector('.portfolio-swiper')) {
    new Swiper('.portfolio-swiper', {
      slidesPerView: 1,
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
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
      },
    });
  }

  if (document.querySelector('.services-swiper')) {
    new Swiper('.services-swiper', {
      slidesPerView: 1,
      spaceBetween: 15,
      centeredSlides: true,
      navigation: {
        nextEl: '.services-slider .swiper-button-next',
        prevEl: '.services-slider .swiper-button-prev',
      },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
        992: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
      },
    });
  }
}

// Contact form: custom "Attach" button with file name preview and remove button
function initFileUpload() {
  const input = document.getElementById('file-upload');
  const button = document.getElementById('file-upload-button');
  const preview = document.getElementById('file-upload-display');
  const filename = document.getElementById('file-upload-filename');
  const removeButton = document.getElementById('remove-file-button');
  if (!input || !button || !preview || !filename || !removeButton) return;

  button.addEventListener('click', () => input.click());

  input.addEventListener('change', () => {
    if (!input.files.length) return;
    filename.textContent = input.files[0].name;
    preview.classList.remove('d-none');
  });

  removeButton.addEventListener('click', () => {
    input.value = '';
    filename.textContent = '';
    preview.classList.add('d-none');
  });
}

// English / Spanish switch. Text for both languages is in the HTML as
// <span lang="en"> / <span lang="es">; CSS shows the one matching <html lang>.
const LANGUAGES = ['en', 'es'];
const LANGUAGE_STORAGE_KEY = 'preferredLanguage';

function initLanguageSwitch() {
  const toggles = document.querySelectorAll('.lang-toggle');

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      setLanguage(toggle.dataset.lang);
    });
  });

  setLanguage(readStoredLanguage() || 'en');
}

function setLanguage(lang) {
  if (!LANGUAGES.includes(lang)) lang = 'en';

  document.documentElement.lang = lang;

  const label = document.getElementById('active-lang-text');
  if (label) label.textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-toggle').forEach((item) => {
    item.classList.toggle('active', item.dataset.lang === lang);
  });

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (e) {
    // Storage unavailable (e.g. private mode); the choice just won't be remembered.
  }
}

function readStoredLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch (e) {
    return null;
  }
}
