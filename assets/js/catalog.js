/**
 * Nero Electrical - Product Catalog & Rail Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const menuToggle = document.getElementById('menuToggle');
    const siteNav = document.getElementById('siteNav');
    const menuIconOpen = menuToggle?.querySelector('.menu-icon-open');
    const menuIconClose = menuToggle?.querySelector('.menu-icon-close');

    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = siteNav.classList.toggle('nav--open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
            if (menuIconOpen && menuIconClose) {
                menuIconOpen.style.display = isOpen ? 'none' : '';
                menuIconClose.style.display = isOpen ? '' : 'none';
            }
        });

        // Close menu when clicking nav links
        siteNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                siteNav.classList.remove('nav--open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Open menu');
                if (menuIconOpen && menuIconClose) {
                    menuIconOpen.style.display = '';
                    menuIconClose.style.display = 'none';
                }
            });
        });
    }

    // Catalog filtering and rail controls
    const filterButtons = document.querySelectorAll('.product-filter');
    const rail = document.getElementById('productRail');
    const progressLabel = document.getElementById('railProgressLabel');
    const progressBar = document.getElementById('railProgressBar');
    const prevBtn = document.getElementById('railPrev');
    const nextBtn = document.getElementById('railNext');

    if (!rail) return;

    const cards = Array.from(rail.querySelectorAll('.product-card'));

    function getVisibleCards() {
        return cards.filter((card) => !card.hidden && card.style.display !== 'none');
    }

    function updateProgress() {
        const visible = getVisibleCards();
        if (visible.length === 0) return;

        const railCenter = rail.scrollLeft + rail.clientWidth / 2;
        let closestIndex = 0;
        let smallestDistance = Infinity;

        visible.forEach((card, index) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(railCenter - cardCenter);
            if (distance < smallestDistance) {
                smallestDistance = distance;
                closestIndex = index;
            }
        });

        // Highlight active card
        visible.forEach((card, i) => {
            card.classList.toggle('product-card--active', i === closestIndex);
        });

        // Update indicators
        const currentNum = String(closestIndex + 1).padStart(2, '0');
        const totalNum = String(visible.length).padStart(2, '0');
        if (progressLabel) {
            progressLabel.innerHTML = `${currentNum} <i>/ ${totalNum}</i>`;
        }
        if (progressBar) {
            progressBar.style.width = `${((closestIndex + 1) / visible.length) * 100}%`;
        }
    }

    // Category filter click
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            filterButtons.forEach((btn) => {
                const isActive = btn === button;
                btn.classList.toggle('product-filter--active', isActive);
                btn.setAttribute('aria-pressed', String(isActive));
            });

            cards.forEach((card) => {
                const match = category === 'All products' || card.dataset.category === category;
                card.hidden = !match;
                card.style.display = match ? '' : 'none';
            });

            rail.scrollTo({ left: 0, behavior: 'smooth' });
            updateProgress();
        });
    });

    // Scroll buttons
    prevBtn?.addEventListener('click', () => {
        rail.scrollBy({ left: -360, behavior: 'smooth' });
    });

    nextBtn?.addEventListener('click', () => {
        rail.scrollBy({ left: 360, behavior: 'smooth' });
    });

    // Rail scroll listener
    let scrollTimeout;
    rail.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateProgress, 40);
    }, { passive: true });

    // Initial calculation
    updateProgress();
});
