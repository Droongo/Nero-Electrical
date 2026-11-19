# Nero Electrical

> Good power. No guesswork.

An architectural, minimalist product catalog and digital showroom for Nero Electrical — specialists in switches, multi-function sockets, and architectural lighting in Addis Ababa, Ethiopia.

---

## Architecture

This project is built with clean, modern PHP and lightweight vanilla JavaScript. It has zero heavy framework dependencies, loads instantaneously, and runs on any standard PHP 7.4+ or 8.x environment.

```text
├── index.php                 # Core document assembler & layout controller
├── data/
│   └── products.php          # Master product catalog and specifications dataset
├── includes/
│   ├── header.php            # HTML head, typography, and responsive navigation
│   ├── hero.php              # Hero showcase & architectural imagery collage
│   ├── ticker.php            # Continuous marquee strip
│   ├── product-catalog.php   # Category filtering, smooth scroll rail & cards
│   ├── product-modal.php     # Edgeless HTML5 <dialog> modal with gallery viewer
│   ├── partners.php          # Trusted brand partner strip
│   ├── about.php             # Core values, proof points, and Addis Ababa visual
│   ├── contact.php           # Store locations (Dere tera & Sosaa), phones & socials
│   ├── footer.php            # Footer navigation and credits
│   └── icons.php             # Embedded SVG vector icon system
└── assets/
    ├── css/
    │   └── style.css         # Complete responsive styles and layout rules
    ├── js/
    │   ├── catalog.js        # Category filter engine, rail navigation & scroll tracking
    │   └── modal.js          # Native dialog controller, spec rendering & image switcher
    └── images/
        ├── products/         # High-resolution product photography
        ├── general/          # Logos, hero assets, and store imagery
        └── project/          # Architectural installation and gallery imagery
```

---

## Getting Started

### Local Development

No Node.js or build step required. Simply run PHP's built-in web server:

```bash
php -S localhost:8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Production Deployment

Deploy to any web host supporting PHP (cPanel, Apache, Nginx, or Docker). Upload all files to your public web root (`public_html` or `www`).

---

## Features

- **Edgeless Brutalist Aesthetic**: Crisp, flush architectural presentation with zero border-radius on dialogs and component cards.
- **Dynamic Product Modal**: Native HTML5 `<dialog>` component with keyboard accessibility, multi-view image switcher, and technical specifications table.
- **Category Filter Rail**: Horizontal smooth-scrolling product rail with real-time category counter and progress tracking.
- **Zero Build Footprint**: Pure PHP, CSS, and vanilla JavaScript for sub-second page loads.
- **Responsive Layout**: Fluid breakpoints optimized for mobile, tablet, and ultra-wide displays.

---

© 2026 Nero Electrical. Developed by [Drongo Technology](https://drongotechnology.com/).
