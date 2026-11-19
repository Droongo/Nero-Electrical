<?php
/**
 * Nero Electrical - Good power. No guesswork.
 * 
 * Handcrafted architectural catalog for electrical essentials.
 */

declare(strict_types=1);

// Core data and view helpers
require_once __DIR__ . '/data/products.php';
require_once __DIR__ . '/includes/icons.php';

// Document head and top navigation
require_once __DIR__ . '/includes/header.php';
?>

<main>
    <?php
    require_once __DIR__ . '/includes/hero.php';
    require_once __DIR__ . '/includes/ticker.php';
    require_once __DIR__ . '/includes/partners.php';
    require_once __DIR__ . '/includes/product-catalog.php';
    require_once __DIR__ . '/includes/product-modal.php';
    require_once __DIR__ . '/includes/about.php';
    require_once __DIR__ . '/includes/contact.php';
    ?>
</main>

<?php
// Footer and scripts
require_once __DIR__ . '/includes/footer.php';
