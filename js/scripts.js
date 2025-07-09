/*!
 * Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */

// Scripts
window.addEventListener('DOMContentLoaded', event => {
    console.log('[scripts.js] DOMContentLoaded');

    // Navbar shrink function
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            console.warn('[scripts.js] #mainNav not found');
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Shrink the navbar on load & scroll
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
        console.log('[scripts.js] ScrollSpy initialized');
    } else {
        console.warn('[scripts.js] ScrollSpy skipped: #mainNav not found');
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    if (navbarToggler) {
        const responsiveNavItems = Array.from(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
        console.log('[scripts.js] Responsive navbar collapse initialized');
    }

    // Activate SimpleLightbox plugin for portfolio items
    try {
        new SimpleLightbox({
            elements: '#portfolio a.portfolio-box',
            caption: true,
            captionsData: 'title',
            captionPosition: 'bottom',
            fadeSpeed: 600, // fade overlay in 0.6s
            showSpeed: 400, // delay before showing image
            nav: true,      // prev/next arrows inside lightbox
            close: true,    // show close button
            docClose: true  // click outside closes
        });
        console.log('[scripts.js] SimpleLightbox initialized');
    } catch (e) {
        console.error('[scripts.js] SimpleLightbox failed to initialize:', e);
    }

    // Initialize Swiper for portfolio slider
    console.log('[scripts.js] Swiper constructor:', typeof Swiper);
    const swiperContainer = document.querySelector('.portfolio-swiper');
    console.log('[scripts.js] swiperContainer:', swiperContainer);
    if (swiperContainer && typeof Swiper === 'function') {
        new Swiper(swiperContainer, {
            slidesPerView: 4,
            spaceBetween: 16,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                0:   { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 }
            }
        });
        console.log('[scripts.js] Swiper initialized');
    } else {
        console.error('[scripts.js] Swiper init failed: ', 
            !swiperContainer ? 'container not found' : 'Swiper is undefined');
    }
});
