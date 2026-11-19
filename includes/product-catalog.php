<section class="products-section" id="products">
    <div class="section-heading">
        <div>
            <p class="eyebrow dark-eyebrow">A FEW GOOD THINGS</p>
            <h2>Everyday essentials.<br><span>Exceptionally chosen.</span></h2>
        </div>
        <div class="section-intro-wrap">
            <p class="section-intro">Explore Nero switches, sockets, lighting, and the details that make a project come together.</p>
            <span class="rail-hint">
                <span>CHOOSE A CATEGORY, THEN EXPLORE</span>
                <?= icon('arrow-right', 15) ?>
            </span>
        </div>
    </div>

    <div class="product-filters" role="group" aria-label="Filter products by category">
        <?php foreach ($productCategories as $cat): ?>
            <?php 
                $count = ($cat === 'All products') 
                    ? count($products) 
                    : count(array_filter($products, fn($p) => $p['category'] === $cat));
                $isActive = ($cat === 'All products');
            ?>
            <button
                type="button"
                class="product-filter<?= $isActive ? ' product-filter--active' : '' ?>"
                data-category="<?= htmlspecialchars($cat, ENT_QUOTES, 'UTF-8') ?>"
                aria-pressed="<?= $isActive ? 'true' : 'false' ?>"
            >
                <?= htmlspecialchars($cat, ENT_QUOTES, 'UTF-8') ?><span><?= $count ?></span>
            </button>
        <?php endforeach; ?>
    </div>

    <div class="product-rail" id="productRail" aria-label="Nero Electrical products">
        <?php foreach ($products as $index => $product): ?>
            <button
                type="button"
                class="product-card product-card--<?= htmlspecialchars($product['tone'], ENT_QUOTES, 'UTF-8') ?><?= $index === 0 ? ' product-card--active' : '' ?>"
                data-product-id="<?= htmlspecialchars($product['id'], ENT_QUOTES, 'UTF-8') ?>"
                data-category="<?= htmlspecialchars($product['category'], ENT_QUOTES, 'UTF-8') ?>"
                aria-label="View details for <?= htmlspecialchars($product['name'], ENT_QUOTES, 'UTF-8') ?>"
            >
                <span class="product-art">
                    <img 
                        src="<?= htmlspecialchars($product['gallery'][0]['src'], ENT_QUOTES, 'UTF-8') ?>" 
                        alt="<?= htmlspecialchars($product['gallery'][0]['alt'], ENT_QUOTES, 'UTF-8') ?>" 
                        loading="lazy"
                    >
                    <span class="product-arrow"><?= icon('arrow-up-right', 19) ?></span>
                    <span class="product-view-label">VIEW DETAILS</span>
                </span>
                <span class="product-info">
                    <span class="product-kicker">
                        <span><?= htmlspecialchars($product['number'], ENT_QUOTES, 'UTF-8') ?> / NERO PICKS</span>
                        <span><?= htmlspecialchars(strtoupper($product['category']), ENT_QUOTES, 'UTF-8') ?></span>
                    </span>
                    <span class="product-name"><?= htmlspecialchars($product['name'], ENT_QUOTES, 'UTF-8') ?></span>
                    <span class="product-description"><?= htmlspecialchars($product['detail'], ENT_QUOTES, 'UTF-8') ?></span>
                </span>
            </button>
        <?php endforeach; ?>
    </div>

    <div class="rail-progress" id="railProgress" aria-label="Product rail navigation">
        <span class="rail-progress-label" id="railProgressLabel">01 <i>/ <?= sprintf('%02d', count($products)) ?></i></span>
        <div class="rail-progress-track">
            <span id="railProgressBar" style="width: <?= round((1 / count($products)) * 100, 2) ?>%;"></span>
        </div>
        <div class="rail-controls">
            <button type="button" id="railPrev" aria-label="Previous product">&larr;</button>
            <button type="button" id="railNext" aria-label="Next product">&rarr;</button>
        </div>
    </div>
</section>
