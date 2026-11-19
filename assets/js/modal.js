/**
 * Nero Electrical - Product Details Modal Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('productDialog');
    if (!dialog) return;

    const dataIsland = document.getElementById('productsCatalogData');
    if (!dataIsland) return;

    let products = [];
    try {
        products = JSON.parse(dataIsland.textContent || '[]');
    } catch (e) {
        console.error('Failed to parse catalog data', e);
        return;
    }

    const productMap = new Map(products.map((p) => [p.id, p]));

    const mainImage = document.getElementById('dialogMainImage');
    const imageRef = document.getElementById('dialogImageRef');
    const galleryContainer = document.getElementById('dialogGallery');
    const closeBtn = document.getElementById('dialogClose');
    const refBadge = document.getElementById('dialogRef');
    const titleEl = document.getElementById('productDialogTitle');
    const descEl = document.getElementById('dialogDescription');
    const specsContainer = document.getElementById('dialogSpecs');
    const imageLabel = document.getElementById('dialogImageLabel');
    const inquireBtn = document.getElementById('dialogInquireBtn');

    function setActiveImage(img, activeThumbBtn) {
        if (!mainImage) return;
        mainImage.src = img.src;
        mainImage.alt = img.alt;
        if (imageLabel) imageLabel.textContent = img.label;

        if (galleryContainer) {
            galleryContainer.querySelectorAll('.dialog-thumbnail').forEach((thumb) => {
                thumb.classList.remove('dialog-thumbnail--active');
            });
            if (activeThumbBtn) {
                activeThumbBtn.classList.add('dialog-thumbnail--active');
            }
        }
    }

    function openModal(productId) {
        const product = productMap.get(productId);
        if (!product) return;

        // Content
        if (refBadge) refBadge.textContent = `REF. NERO-${product.number}`;
        if (imageRef) imageRef.textContent = `NERO / ${product.number}`;
        if (titleEl) titleEl.textContent = product.name;
        if (descEl) descEl.textContent = product.description;

        // Specifications
        if (specsContainer) {
            specsContainer.innerHTML = '';
            product.specifications.forEach((spec) => {
                const row = document.createElement('div');
                row.className = 'dialog-spec-row';
                
                const dt = document.createElement('dt');
                dt.textContent = spec.label;
                
                const dd = document.createElement('dd');
                dd.textContent = spec.value;

                row.appendChild(dt);
                row.appendChild(dd);
                specsContainer.appendChild(row);
            });
        }

        // Gallery
        if (galleryContainer) {
            galleryContainer.innerHTML = '';
            if (product.gallery && product.gallery.length > 1) {
                galleryContainer.style.display = 'flex';
                product.gallery.forEach((img, i) => {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = `dialog-thumbnail${i === 0 ? ' dialog-thumbnail--active' : ''}`;
                    btn.setAttribute('aria-label', `View ${img.label}`);

                    const thumbImg = document.createElement('img');
                    thumbImg.src = img.src;
                    thumbImg.alt = img.alt;
                    thumbImg.loading = 'lazy';

                    btn.appendChild(thumbImg);
                    btn.addEventListener('click', () => setActiveImage(img, btn));
                    galleryContainer.appendChild(btn);
                });
            } else {
                galleryContainer.style.display = 'none';
            }
        }

        // Set primary image
        if (product.gallery && product.gallery[0]) {
            setActiveImage(product.gallery[0], galleryContainer?.firstElementChild);
        }

        dialog.showModal();
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        dialog.close();
        document.body.style.overflow = '';
    }

    // Attach card click listeners
    document.querySelectorAll('.product-card').forEach((card) => {
        card.addEventListener('click', () => {
            const id = card.dataset.productId;
            if (id) openModal(id);
        });
    });

    // Close on button click
    closeBtn?.addEventListener('click', closeModal);

    // Close on inquire click
    inquireBtn?.addEventListener('click', closeModal);

    // Close on backdrop click
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
            closeModal();
        }
    });

    // Reset body overflow when dialog closes (e.g. via Escape key)
    dialog.addEventListener('close', () => {
        document.body.style.overflow = '';
    });
});
