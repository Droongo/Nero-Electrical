export const productCategories = [
    'All products',
    'Switches',
    'Sockets',
    'Lighting',
    'Cable',
] as const

export type ProductCategory = (typeof productCategories)[number]
export type ProductGroup = Exclude<ProductCategory, 'All products'>

export type ProductImage = {
    src: string
    alt: string
    label: string
}

export type Product = {
    id: string
    name: string
    category: ProductGroup
    detail: string
    description: string
    number: string
    tone: 'sand' | 'clay' | 'blue' | 'sage'
    gallery: ProductImage[]
    specifications: { label: string; value: string }[]
}

const image = (src: string, alt: string, label: string): ProductImage => ({ src, alt, label })

// Switches
const switch1G = '/products/wall-1g-2w-switch.jpg'
const switch2G = '/products/wall-2g-2w-switch.jpg'
const switch3G = '/products/wall-3g-2w-switch.jpg'
const switchWhite3G = '/products/switch-white-3g.webp'
const switchRangeTrio = '/products/switch-range-trio.webp'
const switchLuxury3G = '/products/switch-luxury-3g.webp'
const switchRoomModern = '/products/switch-room-modern.webp'
const switchRoomLiving = '/products/switch-room-living.jpg'
const switchStyledConcrete = '/products/switch-styled-concrete.jpg'

// Sockets
const socketMF = '/products/wall-mf-socket.jpg'
const socketUSB = '/products/wall-socket-usb.jpg'
const socketMFSilver = '/products/socket-mf-silver.webp'
const socketCoaxCombo = '/products/socket-coax-combo.webp'
const socketColorRange = '/products/socket-color-range.webp'
const socketTvCoax = '/products/socket-tv-coax.webp'
const socketBlackFinish = '/products/socket-black-finish.webp'
const socketLuxuryInterior = '/products/socket-luxury-interior.webp'
const socketSwitchRoom = '/products/socket-switch-room.webp'
const socketEuroRoom = '/products/socket-euro-room.webp'

// Lighting & Cable
const stairLight = '/products/stair-light.webp'
const ledStripRoll = '/products/led-strip-roll.webp'
const ledStripReel = '/products/led-strip-reel.jpg'
const lightingWorkspace = '/products/lighting-workspace.webp'
const downlightSingle = '/products/downlight-single.webp'
const downlightDouble = '/products/downlight-double.webp'
const downlightDisplay = '/products/downlight-tones-display.jpg'

export const products: Product[] = [
    {
        id: 'wall-1g-2w-switch',
        name: 'Wall 1G2W Switch',
        category: 'Switches',
        detail: 'A clean, understated wall control.',
        description: 'A Nero 1-gang, 2-way wall switch in a refined dark finish, engineered with a precision mechanical rocker and durable plate design for modern interiors.',
        number: '01',
        tone: 'sand',
        gallery: [
            image(switch1G, 'Nero Wall 1G2W Switch dark grey finish', 'Product view'),
            image(switchRoomLiving, 'Nero switch installed in an elegant contemporary living room', 'In a room'),
            image(switchWhite3G, 'Nero switch plate with subtle LED indicator', 'Wall mounted view'),
            image(switchRangeTrio, 'A selection of Nero switch and socket plates', 'Related switch range'),
        ],
        specifications: [
            { label: 'Product name', value: 'Wall 1G2W Switch' },
            { label: 'Gang', value: '1 gang' },
            { label: 'Switch type', value: '2-way' },
            { label: 'Finish shown', value: 'Dark grey / Matte black' },
            { label: 'Voltage rating', value: '250V AC, 16A' },
            { label: 'Mounting', value: 'Standard flush box' },
        ],
    },
    {
        id: 'wall-2g-2w-switch',
        name: 'Wall 2G2W Switch',
        category: 'Switches',
        detail: 'Two controls, one considered plate.',
        description: 'A Nero 2-gang, 2-way wall switch with a low-profile architectural finish. Offers balanced dual-circuit switching in a sleek, seamless faceplate.',
        number: '02',
        tone: 'clay',
        gallery: [
            image(switch2G, 'Nero Wall 2G2W Switch dark finish', 'Product view'),
            image(switchRangeTrio, 'A selection of Nero switch plates', 'Product family'),
            image(switchLuxury3G, 'Nero switch plate in brushed luxury finish', 'Luxury finish'),
            image(switchStyledConcrete, 'Nero switch styled in a contemporary living space', 'In a room'),
        ],
        specifications: [
            { label: 'Product name', value: 'Wall 2G2W Switch' },
            { label: 'Gang', value: '2 gang' },
            { label: 'Switch type', value: '2-way' },
            { label: 'Finish shown', value: 'Dark grey / Anthracite' },
            { label: 'Voltage rating', value: '250V AC, 16A' },
            { label: 'Mounting', value: 'Standard flush box' },
        ],
    },
    {
        id: 'wall-3g-2w-switch',
        name: 'Wall 3G2W Switch',
        category: 'Switches',
        detail: 'Three controls in a single plate.',
        description: 'A Nero 3-gang, 2-way wall switch in a coordinated dark finish, offering comprehensive lighting control from a unified, elegant panel.',
        number: '03',
        tone: 'blue',
        gallery: [
            image(switch3G, 'Nero Wall 3G2W Switch dark finish', 'Product view'),
            image(switchLuxury3G, 'Nero luxury three-gang switch plate', 'Luxury plate view'),
            image(switchWhite3G, 'Nero three-gang switch with illumination indicators', 'Indicator view'),
            image(switchRoomModern, 'Nero switch installed in a modern interior', 'In a room'),
        ],
        specifications: [
            { label: 'Product name', value: 'Wall 3G2W Switch' },
            { label: 'Gang', value: '3 gang' },
            { label: 'Switch type', value: '2-way' },
            { label: 'Finish shown', value: 'Dark grey' },
            { label: 'Voltage rating', value: '250V AC, 16A' },
            { label: 'Mounting', value: 'Standard flush box' },
        ],
    },
    {
        id: 'wall-mf-socket',
        name: 'Wall MF Socket',
        category: 'Sockets',
        detail: 'A versatile socket plate for everyday use.',
        description: 'A Nero multi-function universal wall socket with matching dark finish and modular plate architecture, compatible with universal plug standards.',
        number: '04',
        tone: 'sage',
        gallery: [
            image(socketMF, 'Nero multi-function universal wall socket', 'Product view'),
            image(socketMFSilver, 'Nero multi-function wall socket installed on light wall', 'Wall mounted'),
            image(socketColorRange, 'A selection of Nero wall socket plates in varied finishes', 'Socket range'),
            image(socketTvCoax, 'Nero wall plate with coaxial TV connection', 'Coaxial plate'),
            image(socketBlackFinish, 'Nero dark-finish wall socket with brushed texture', 'Dark finish'),
            image(socketLuxuryInterior, 'Nero multi-function socket in contemporary interior', 'In a room'),
            image(socketSwitchRoom, 'Nero socket and switch installed in living area', 'Interior view'),
        ],
        specifications: [
            { label: 'Product name', value: 'Wall MF Socket' },
            { label: 'Plate', value: 'Multi-function universal socket' },
            { label: 'Compatibility', value: 'Universal multi-standard plugs' },
            { label: 'Finish shown', value: 'Dark grey / Black brushed' },
            { label: 'Rating', value: '13A / 16A 250V' },
        ],
    },
    {
        id: 'wall-socket-usb',
        name: 'Wall Socket and USB Socket',
        category: 'Sockets',
        detail: 'A wall socket with USB charging built in.',
        description: 'A Nero combination wall plate pairing a universal multi-function socket with dual high-speed USB charging ports for phones and smart devices.',
        number: '05',
        tone: 'sand',
        gallery: [
            image(socketUSB, 'Nero combination wall socket with dual USB ports', 'Product view'),
            image(socketCoaxCombo, 'Nero multi-function wall plate installed on wall', 'Wall installation'),
            image(socketColorRange, 'A selection of Nero socket plate finishes', 'Socket range'),
            image(socketMFSilver, 'Nero multi-function wall socket', 'Related socket'),
            image(socketEuroRoom, 'Nero power socket in minimalist interior', 'In a room'),
        ],
        specifications: [
            { label: 'Product name', value: 'Wall Socket and USB Socket' },
            { label: 'Plate', value: 'Multi-function socket with dual USB' },
            { label: 'USB Output', value: '5V DC, 2.1A / 3.1A fast charge' },
            { label: 'Socket rating', value: '250V AC, 13A/16A' },
            { label: 'Finish shown', value: 'Dark grey' },
        ],
    },
    {
        id: 'stair-light',
        name: 'Stair Light',
        category: 'Lighting',
        detail: 'Low-profile light for steps and pathways.',
        description: 'A recessed architectural Nero stair light designed for discreet, glare-free downward illumination along stairways, hallways, and outdoor pathways.',
        number: '06',
        tone: 'blue',
        gallery: [
            image(stairLight, 'Nero Stair Light product and illuminated installation graphic', 'Product overview'),
            image(downlightSingle, 'Nero recessed LED downlight', 'Related downlight'),
            image(lightingWorkspace, 'Nero linear lighting in modern workspace', 'Lighting in workspace'),
        ],
        specifications: [
            { label: 'Product name', value: 'Stair Light' },
            { label: 'Application', value: 'Steps, stairways, and pathways' },
            { label: 'Installation', value: 'Recessed wall mount' },
            { label: 'Light distribution', value: 'Asymmetric downward wash' },
            { label: 'Finish', value: 'Textured charcoal grey' },
        ],
    },
    {
        id: 'led-strip-light',
        name: 'LED Strip Light',
        category: 'Lighting',
        detail: 'Flexible strip lighting with selectable tones.',
        description: 'Professional-grade Nero flexible LED strip lighting on continuous reels. Ideal for cove lighting, under-cabinet illumination, and accent architectural profiles.',
        number: '07',
        tone: 'sage',
        gallery: [
            image(ledStripRoll, 'Nero LED Strip Light coil showing dense LED pitch', 'Product overview'),
            image(ledStripReel, 'Nero professional grade LED lighting spool packaging', 'Packaging & reel'),
            image(lightingWorkspace, 'Linear suspended illumination over contemporary desk', 'Lighting in workspace'),
        ],
        specifications: [
            { label: 'Product name', value: 'LED Strip Light' },
            { label: 'Supply voltage', value: '24V DC constant voltage' },
            { label: 'Light tones', value: 'Warm white (3000K), Neutral white (4000K), Cool white (6500K)' },
            { label: 'Ingress protection', value: 'IP65 waterproof coated' },
            { label: 'Cutting interval', value: 'Every 2.5 cm' },
            { label: 'Packaging', value: '50m / 100m professional reel' },
        ],
    },
    {
        id: 'recessed-downlight',
        name: 'Recessed LED Downlight',
        category: 'Lighting',
        detail: 'A focused recessed light for ceiling spaces.',
        description: 'Nero architectural recessed LED downlights with deep anti-glare baffle, available in single and double configurations with independent external drivers.',
        number: '08',
        tone: 'clay',
        gallery: [
            image(downlightSingle, 'Nero single recessed LED downlight in matte black', 'Product view'),
            image(downlightDouble, 'Nero double recessed LED downlight fixture with driver', 'Double fixture'),
            image(downlightDisplay, 'Nero recessed spotlights showroom display in multiple color temperatures', 'Color temperatures'),
            image(stairLight, 'Nero Stair Light recessed step illumination', 'Related lighting'),
        ],
        specifications: [
            { label: 'Product name', value: 'Recessed LED Downlight' },
            { label: 'Configuration', value: 'Single & Double modular options' },
            { label: 'Installation', value: 'Recessed ceiling spring-clamp' },
            { label: 'Trim shown', value: 'Matte black / Deep baffle' },
            { label: 'Beam angle', value: '24° / 36° precision optic' },
            { label: 'Driver', value: 'External constant current driver included' },
        ],
    },
]