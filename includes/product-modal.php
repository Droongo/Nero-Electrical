<dialog id="productDialog" class="product-dialog" aria-labelledby="productDialogTitle">
    <div class="product-dialog-layout">
        <div class="dialog-image-panel">
            <div class="dialog-image-stage">
                <img id="dialogMainImage" class="dialog-main-image" src="" alt="" loading="eager">
                <span class="dialog-image-ref" id="dialogImageRef">NERO / 01</span>
            </div>
            <div class="dialog-gallery" id="dialogGallery" role="group" aria-label="Product image gallery">
                <!-- Populated dynamically by modal.js -->
            </div>
        </div>

        <div class="dialog-details-panel">
            <button type="button" class="dialog-close" id="dialogClose" aria-label="Close product details">
                <?= icon('x', 21) ?>
            </button>

            <p class="eyebrow dark-eyebrow">
                <span id="dialogRef">REF. NERO-01</span>
                <span class="availability"><span></span> AVAILABLE TO ORDER</span>
            </p>

            <h2 id="productDialogTitle">Product Name</h2>
            <p class="dialog-description" id="dialogDescription">Product description.</p>

            <h3 class="dialog-information-title">SPECIFICATIONS</h3>
            <dl class="dialog-spec-list" id="dialogSpecs">
                <!-- Populated dynamically by modal.js -->
            </dl>

            <div class="dialog-image-caption">
                <span>CURRENT VIEW</span>
                <i id="dialogImageLabel">Product view</i>
            </div>

            <div class="dialog-action-wrap">
                <a href="#contact" class="dialog-inquire-btn" id="dialogInquireBtn">
                    Inquire about this product <?= icon('arrow-right', 16) ?>
                </a>
            </div>
        </div>
    </div>
</dialog>

<!-- Client-side product data payload for instant modal rendering -->
<script id="productsCatalogData" type="application/json">
<?= json_encode($products, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?>
</script>
