<?php

/**
 * Nero Electrical - Product Data
 * 
 * Master catalog data containing categories, specifications, and gallery images.
 */

$productCategories = [
    'All products',
    'Switches',
    'Sockets',
    'Lighting',
    'Cable',
];

$products = [
    [
        'id'          => 'wall-1g-2w-switch',
        'name'        => 'Wall 1G2W Switch',
        'category'    => 'Switches',
        'detail'      => 'A clean, understated wall control.',
        'description' => 'A Nero 1-gang, 2-way wall switch in a refined dark finish, engineered with a precision mechanical rocker and durable plate design for modern interiors.',
        'number'      => '01',
        'tone'        => 'sand',
        'gallery'     => [
            [
                'src'   => 'assets/images/products/wall-1g-2w-switch.jpg',
                'alt'   => 'Nero Wall 1G2W Switch dark grey finish',
                'label' => 'Product view',
            ],
            [
                'src'   => 'assets/images/products/switch-room-living.jpg',
                'alt'   => 'Nero switch installed in an elegant contemporary living room',
                'label' => 'In a room',
            ],
            [
                'src'   => 'assets/images/products/switch-white-3g.webp',
                'alt'   => 'Nero switch plate with subtle LED indicator',
                'label' => 'Wall mounted view',
            ],
            [
                'src'   => 'assets/images/products/switch-range-trio.webp',
                'alt'   => 'A selection of Nero switch and socket plates',
                'label' => 'Related switch range',
            ],
        ],
        'specifications' => [
            ['label' => 'Product name',  'value' => 'Wall 1G2W Switch'],
            ['label' => 'Gang',          'value' => '1 gang'],
            ['label' => 'Switch type',   'value' => '2-way'],
            ['label' => 'Finish shown',  'value' => 'Dark grey / Matte black'],
            ['label' => 'Voltage rating','value' => '250V AC, 16A'],
            ['label' => 'Mounting',      'value' => 'Standard flush box'],
        ],
    ],
    [
        'id'          => 'wall-2g-2w-switch',
        'name'        => 'Wall 2G2W Switch',
        'category'    => 'Switches',
        'detail'      => 'Two controls, one considered plate.',
        'description' => 'A Nero 2-gang, 2-way wall switch with a low-profile architectural finish. Offers balanced dual-circuit switching in a sleek, seamless faceplate.',
        'number'      => '02',
        'tone'        => 'clay',
        'gallery'     => [
            [
                'src'   => 'assets/images/products/wall-2g-2w-switch.jpg',
                'alt'   => 'Nero Wall 2G2W Switch dark finish',
                'label' => 'Product view',
            ],
            [
                'src'   => 'assets/images/products/switch-range-trio.webp',
                'alt'   => 'A selection of Nero switch plates',
                'label' => 'Product family',
            ],
            [
                'src'   => 'assets/images/products/switch-luxury-3g.webp',
                'alt'   => 'Nero switch plate in brushed luxury finish',
                'label' => 'Luxury finish',
            ],
            [
                'src'   => 'assets/images/products/switch-styled-concrete.jpg',
                'alt'   => 'Nero switch styled in a contemporary living space',
                'label' => 'In a room',
            ],
        ],
        'specifications' => [
            ['label' => 'Product name',  'value' => 'Wall 2G2W Switch'],
            ['label' => 'Gang',          'value' => '2 gang'],
            ['label' => 'Switch type',   'value' => '2-way'],
            ['label' => 'Finish shown',  'value' => 'Dark grey / Anthracite'],
            ['label' => 'Voltage rating','value' => '250V AC, 16A'],
            ['label' => 'Mounting',      'value' => 'Standard flush box'],
        ],
    ],
    [
        'id'          => 'wall-3g-2w-switch',
        'name'        => 'Wall 3G2W Switch',
        'category'    => 'Switches',
        'detail'      => 'Three controls in a single plate.',
        'description' => 'A Nero 3-gang, 2-way wall switch in a coordinated dark finish, offering comprehensive lighting control from a unified, elegant panel.',
        'number'      => '03',
        'tone'        => 'blue',
        'gallery'     => [
            [
                'src'   => 'assets/images/products/wall-3g-2w-switch.jpg',
                'alt'   => 'Nero Wall 3G2W Switch dark finish',
                'label' => 'Product view',
            ],
            [
                'src'   => 'assets/images/products/switch-luxury-3g.webp',
                'alt'   => 'Nero luxury three-gang switch plate',
                'label' => 'Luxury plate view',
            ],
            [
                'src'   => 'assets/images/products/switch-white-3g.webp',
                'alt'   => 'Nero three-gang switch with illumination indicators',
                'label' => 'Indicator view',
            ],
            [
                'src'   => 'assets/images/products/switch-room-modern.webp',
                'alt'   => 'Nero switch installed in a modern interior',
                'label' => 'In a room',
            ],
        ],
        'specifications' => [
            ['label' => 'Product name',  'value' => 'Wall 3G2W Switch'],
            ['label' => 'Gang',          'value' => '3 gang'],
            ['label' => 'Switch type',   'value' => '2-way'],
            ['label' => 'Finish shown',  'value' => 'Dark grey'],
            ['label' => 'Voltage rating','value' => '250V AC, 16A'],
            ['label' => 'Mounting',      'value' => 'Standard flush box'],
        ],
    ],
    [
        'id'          => 'wall-mf-socket',
        'name'        => 'Wall MF Socket',
        'category'    => 'Sockets',
        'detail'      => 'A versatile socket plate for everyday use.',
        'description' => 'A Nero multi-function universal wall socket with matching dark finish and modular plate architecture, compatible with universal plug standards.',
        'number'      => '04',
        'tone'        => 'sage',
        'gallery'     => [
            [
                'src'   => 'assets/images/products/wall-mf-socket.jpg',
                'alt'   => 'Nero multi-function universal wall socket',
                'label' => 'Product view',
            ],
            [
                'src'   => 'assets/images/products/socket-mf-silver.webp',
                'alt'   => 'Nero multi-function wall socket installed on light wall',
                'label' => 'Wall mounted',
            ],
            [
                'src'   => 'assets/images/products/socket-color-range.webp',
                'alt'   => 'A selection of Nero wall socket plates in varied finishes',
                'label' => 'Socket range',
            ],
            [
                'src'   => 'assets/images/products/socket-tv-coax.webp',
                'alt'   => 'Nero wall plate with coaxial TV connection',
                'label' => 'Coaxial plate',
            ],
            [
                'src'   => 'assets/images/products/socket-black-finish.webp',
                'alt'   => 'Nero dark-finish wall socket with brushed texture',
                'label' => 'Dark finish',
            ],
            [
                'src'   => 'assets/images/products/socket-luxury-interior.webp',
                'alt'   => 'Nero multi-function socket in contemporary interior',
                'label' => 'In a room',
            ],
            [
                'src'   => 'assets/images/products/socket-switch-room.webp',
                'alt'   => 'Nero socket and switch installed in living area',
                'label' => 'Interior view',
            ],
        ],
        'specifications' => [
            ['label' => 'Product name',  'value' => 'Wall MF Socket'],
            ['label' => 'Plate',         'value' => 'Multi-function universal socket'],
            ['label' => 'Compatibility', 'value' => 'Universal multi-standard plugs'],
            ['label' => 'Finish shown',  'value' => 'Dark grey / Black brushed'],
            ['label' => 'Rating',        'value' => '13A / 16A 250V'],
        ],
    ],
    [
        'id'          => 'wall-socket-usb',
        'name'        => 'Wall Socket and USB Socket',
        'category'    => 'Sockets',
        'detail'      => 'A wall socket with USB charging built in.',
        'description' => 'A Nero combination wall plate pairing a universal multi-function socket with dual high-speed USB charging ports for phones and smart devices.',
        'number'      => '05',
        'tone'        => 'sand',
        'gallery'     => [
            [
                'src'   => 'assets/images/products/wall-socket-usb.jpg',
                'alt'   => 'Nero combination wall socket with dual USB ports',
                'label' => 'Product view',
            ],
            [
                'src'   => 'assets/images/products/socket-coax-combo.webp',
                'alt'   => 'Nero multi-function wall plate installed on wall',
                'label' => 'Wall installation',
            ],
            [
                'src'   => 'assets/images/products/socket-color-range.webp',
                'alt'   => 'A selection of Nero socket plate finishes',
                'label' => 'Socket range',
            ],
            [
                'src'   => 'assets/images/products/socket-mf-silver.webp',
                'alt'   => 'Nero multi-function wall socket',
                'label' => 'Related socket',
            ],
            [
                'src'   => 'assets/images/products/socket-euro-room.webp',
                'alt'   => 'Nero power socket in minimalist interior',
                'label' => 'In a room',
            ],
        ],
        'specifications' => [
            ['label' => 'Product name',  'value' => 'Wall Socket and USB Socket'],
            ['label' => 'Plate',         'value' => 'Multi-function socket with dual USB'],
            ['label' => 'USB Output',    'value' => '5V DC, 2.1A / 3.1A fast charge'],
            ['label' => 'Socket rating', 'value' => '250V AC, 13A/16A'],
            ['label' => 'Finish shown',  'value' => 'Dark grey'],
        ],
    ],
    [
        'id'          => 'stair-light',
        'name'        => 'Stair Light',
        'category'    => 'Lighting',
        'detail'      => 'Low-profile light for steps and pathways.',
        'description' => 'A recessed architectural Nero stair light designed for discreet, glare-free downward illumination along stairways, hallways, and outdoor pathways.',
        'number'      => '06',
        'tone'        => 'blue',
        'gallery'     => [
            [
                'src'   => 'assets/images/products/stair-light.webp',
                'alt'   => 'Nero Stair Light product and illuminated installation graphic',
                'label' => 'Product overview',
            ],
            [
                'src'   => 'assets/images/products/downlight-single.webp',
                'alt'   => 'Nero recessed LED downlight',
                'label' => 'Related downlight',
            ],
            [
                'src'   => 'assets/images/products/lighting-workspace.webp',
                'alt'   => 'Nero linear lighting in modern workspace',
                'label' => 'Lighting in workspace',
            ],
        ],
        'specifications' => [
            ['label' => 'Product name',        'value' => 'Stair Light'],
            ['label' => 'Application',         'value' => 'Steps, stairways, and pathways'],
            ['label' => 'Installation',        'value' => 'Recessed wall mount'],
            ['label' => 'Light distribution',  'value' => 'Asymmetric downward wash'],
            ['label' => 'Finish',              'value' => 'Textured charcoal grey'],
        ],
    ],
    [
        'id'          => 'led-strip-light',
        'name'        => 'LED Strip Light',
        'category'    => 'Lighting',
        'detail'      => 'Flexible strip lighting with selectable tones.',
        'description' => 'Professional-grade Nero flexible LED strip lighting on continuous reels. Ideal for cove lighting, under-cabinet illumination, and accent architectural profiles.',
        'number'      => '07',
        'tone'        => 'sage',
        'gallery'     => [
            [
                'src'   => 'assets/images/products/led-strip-roll.webp',
                'alt'   => 'Nero LED Strip Light coil showing dense LED pitch',
                'label' => 'Product overview',
            ],
            [
                'src'   => 'assets/images/products/led-strip-reel.jpg',
                'alt'   => 'Nero professional grade LED lighting spool packaging',
                'label' => 'Packaging & reel',
            ],
            [
                'src'   => 'assets/images/products/lighting-workspace.webp',
                'alt'   => 'Linear suspended illumination over contemporary desk',
                'label' => 'Lighting in workspace',
            ],
        ],
        'specifications' => [
            ['label' => 'Product name',       'value' => 'LED Strip Light'],
            ['label' => 'Supply voltage',     'value' => '24V DC constant voltage'],
            ['label' => 'Light tones',        'value' => 'Warm white (3000K), Neutral white (4000K), Cool white (6500K)'],
            ['label' => 'Ingress protection', 'value' => 'IP65 waterproof coated'],
            ['label' => 'Cutting interval',   'value' => 'Every 2.5 cm'],
            ['label' => 'Packaging',          'value' => '50m / 100m professional reel'],
        ],
    ],
    [
        'id'          => 'recessed-downlight',
        'name'        => 'Recessed LED Downlight',
        'category'    => 'Lighting',
        'detail'      => 'A focused recessed light for ceiling spaces.',
        'description' => 'Nero architectural recessed LED downlights with deep anti-glare baffle, available in single and double configurations with independent external drivers.',
        'number'      => '08',
        'tone'        => 'clay',
        'gallery'     => [
            [
                'src'   => 'assets/images/products/downlight-single.webp',
                'alt'   => 'Nero single recessed LED downlight in matte black',
                'label' => 'Product view',
            ],
            [
                'src'   => 'assets/images/products/downlight-double.webp',
                'alt'   => 'Nero double recessed LED downlight fixture with driver',
                'label' => 'Double fixture',
            ],
            [
                'src'   => 'assets/images/products/downlight-tones-display.jpg',
                'alt'   => 'Nero recessed spotlights showroom display in multiple color temperatures',
                'label' => 'Color temperatures',
            ],
            [
                'src'   => 'assets/images/products/stair-light.webp',
                'alt'   => 'Nero Stair Light recessed step illumination',
                'label' => 'Related lighting',
            ],
        ],
        'specifications' => [
            ['label' => 'Product name',  'value' => 'Recessed LED Downlight'],
            ['label' => 'Configuration', 'value' => 'Single & Double modular options'],
            ['label' => 'Installation',  'value' => 'Recessed ceiling spring-clamp'],
            ['label' => 'Trim shown',    'value' => 'Matte black / Deep baffle'],
            ['label' => 'Beam angle',    'value' => '24° / 36° precision optic'],
            ['label' => 'Driver',        'value' => 'External constant current driver included'],
        ],
    ],
];
