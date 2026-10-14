# Ixmex Stone Design – Website

Marketing website for **Ixmex Stone Design**, a Houston-based company that fabricates and installs granite, marble, quartz and quartzite surfaces.

It is a single-page static site (plain HTML, CSS and JavaScript, no build step), available in **English and Spanish**.

## Project structure

```
.
├── index.html          # The whole page (all sections, both languages)
├── css/
│   ├── styles.css      # Compiled Bootstrap 5.2.3 + Start Bootstrap "Creative" theme (brand colour applied)
│   └── custom.css      # Site-specific styles – edit this one
├── js/
│   └── scripts.js      # Navbar, sliders, lightbox, file upload, language switch
├── assets/
│   ├── img/            # Logo, hero and portfolio images
│   └── favicon*, apple-touch-icon.png
└── netlify.toml        # Netlify hosting config (security headers, caching, redirects)
```

## Running locally

No installation is needed. Serve the folder with any static file server and open it in a browser:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

The site is set up for [Netlify](https://www.netlify.com/): `netlify.toml` publishes the repository root as-is, so there is nothing to build. Pushing to the branch that Netlify is connected to deploys the site.

`netlify.toml` also sets the security headers, including a **Content-Security-Policy**. If you add a script, stylesheet, font, image or iframe from a new domain, add that domain to the CSP, otherwise the browser will block it.

## Editing content

### Text and translations

Every visible piece of text appears twice in `index.html`, once per language:

```html
<span lang="en">Our Services</span>
<span lang="es">Nuestros Servicios</span>
```

When you change text, update both spans. `scripts.js` sets `<html lang="en">` or `<html lang="es">`, `custom.css` shows the matching spans, and the visitor's choice is saved in `localStorage`.

### Sections

| Section             | Where in `index.html`         |
| ------------------- | ----------------------------- |
| Hero slideshow      | `<header id="heroCarousel">`  |
| About               | `<section id="about">`        |
| Services slider     | `<section id="services">`     |
| Portfolio slider    | `<section id="portfolio">`    |
| Contact form & info | `<section id="contact">`      |

To add a portfolio project, copy one `<div class="swiper-slide">` block inside `#portfolio`, then update the image paths, the `title` (shown as the lightbox caption) and the two language captions.

### Images

Images live in `assets/img/portfolio/`. Each portfolio item has a `.webp` file, which modern browsers use, and a `.png` fallback.

Keep new images reasonably small (about 1920 px wide at most, a few hundred KB each). The whole slideshow loads with the page, so large files slow it down.

Netlify caches everything under `/assets/` for 30 days. To replace an image, give the new file a new name instead of overwriting the old one, or visitors may keep seeing the old version.

## Contact form

The form posts to [Formcarry](https://formcarry.com/) (the `action` attribute of the `<form>` in `index.html`). Submissions, including attached images or PDFs, go to the Formcarry account that owns that endpoint.

**When ownership of the site changes, the new owner should create their own Formcarry form (or move the existing one to their account) and update the `action` URL.**

## Third-party libraries

These are loaded from CDNs in `index.html`:

- [Bootstrap 5.2.3](https://getbootstrap.com/) (JS bundle) and [Bootstrap Icons 1.10.5](https://icons.getbootstrap.com/)
- [Swiper 10](https://swiperjs.com/) – services and portfolio sliders
- [SimpleLightbox 2.1.0](https://github.com/dbrekalo/simpleLightbox) – full-screen portfolio images
- [Merriweather Sans](https://fonts.google.com/specimen/Merriweather+Sans) from Google Fonts
- Google Maps embed for the location map

## Credits

Based on the [Start Bootstrap – Creative](https://startbootstrap.com/theme/creative) theme by Start Bootstrap, released under the MIT License.
