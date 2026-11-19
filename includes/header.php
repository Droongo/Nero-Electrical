<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Discover dependable electrical essentials from Nero Electrical, thoughtfully chosen for every connection, circuit, and control.">
    <title>Nero Electrical | Good power. No guesswork.</title>

    <link rel="icon" type="image/png" href="assets/images/general/nero-logo-dark.png">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="antialiased">
    <header class="site-header">
        <a href="#top" class="brand" aria-label="Nero Electrical home">
            <img src="assets/images/general/nero-logo-dark.png" alt="Nero Electrical" width="140" height="42" loading="eager">
        </a>

        <button 
            type="button" 
            class="menu-toggle" 
            id="menuToggle" 
            aria-label="Open menu" 
            aria-expanded="false" 
            aria-controls="siteNav"
        >
            <span class="menu-icon-open"><?= icon('menu', 22) ?></span>
            <span class="menu-icon-close" style="display: none;"><?= icon('x', 22) ?></span>
        </button>

        <nav class="nav" id="siteNav" aria-label="Main navigation">
            <a href="#products">Products</a>
            <a href="#about">Our approach</a>
            <a href="#contact">Contact</a>
            <a class="nav-cta" href="tel:0941475130">
                Call Nero <?= icon('phone', 15) ?>
            </a>
        </nav>
    </header>
