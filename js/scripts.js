/*!
 * Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */

// All DOM-ready behavior
window.addEventListener('DOMContentLoaded', () => {
  // Navbar shrink on scroll
  const navbar = document.querySelector('#mainNav');
  const shrink = () => {
    if (!navbar) return;
    navbar.classList.toggle('navbar-shrink', window.scrollY > 0);
  };
  shrink();
  document.addEventListener('scroll', shrink);

  // Bootstrap scrollspy
  if (navbar) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  // Collapse mobile nav on click
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

  // SimpleLightbox for portfolio
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
    console.warn('Lightbox init failed:', e);
  }
});

// All-load behavior (ensures Swiper script & CSS are fully loaded)
window.addEventListener('load', () => {
  const container = document.querySelector('.portfolio-swiper');
  if (!container) {
    console.error('Swiper container .portfolio-swiper not found');
    return;
  }
  if (typeof Swiper !== 'function') {
    console.error('Swiper library not loaded');
    return;
  }
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
});
