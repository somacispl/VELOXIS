// VELOXIS E-Commerce App Logic
// State management, routing, dynamic rendering, and interactions using jQuery

// ================= PRODUCT DATA =================
const PRODUCTS = [
  {
    id: 1,
    name: "Velocity Pro",
    category: "Running",
    price: 189.99,
    rating: 4.8,
    reviewsCount: 124,
    description: "Engineered for elite performance and record-breaking speed. The Velocity Pro features our proprietary carbon fiber plates and dual-density foam for unmatched energy return.",
    stock: "In Stock",
    edition: "Standard",
    colors: [
      { name: "Electric Blue", hex: "#0B63F6", accent: "#A6FF00", secondary: "#14213D", image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=600&q=80" },
      { name: "Neon Volt", hex: "#A6FF00", accent: "#0B63F6", secondary: "#14213D", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80" },
      { name: "Crimson Red", hex: "#DC2626", accent: "#101828", secondary: "#14213D", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" }
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    widths: ["Standard", "Wide"],
    gender: "Unisex",
    specs: {
      cushioning: "Max Response",
      weight: "210g (Size 9)",
      upper: "AeroWeave Engineered Mesh",
      sole: "ProGrip Carbonized Rubber",
      warranty: "1 Year Limited"
    },
    benefits: [
      "Carbon-fiber plate propulsion to snap you forward",
      "Ultralight cushioning absorbs 90% of road impacts",
      "Glove-like fit with breathable knit zones"
    ],
    image: "file:///C:/Users/CODECLOUDS-RESERVE/.gemini/antigravity-ide/brain/160484c9-5b73-47be-9d65-b8aa5c261dae/hero_shoe_1783340043630.png"
  },
  {
    id: 2,
    name: "AeroFlex Elite",
    category: "Running",
    price: 159.99,
    rating: 4.7,
    reviewsCount: 96,
    description: "Unrivaled lightweight flexibility for daily miles. The AeroFlex Elite molds to your foot shape for a smooth, natural gait cycle.",
    stock: "In Stock",
    edition: "Standard",
    colors: [
      { name: "Deep Navy", hex: "#14213D", accent: "#A6FF00", secondary: "#0B63F6", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80" },
      { name: "Charcoal Gray", hex: "#475569", accent: "#F59E0B", secondary: "#101828", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80" }
    ],
    sizes: [8, 9, 10, 11, 12],
    widths: ["Standard"],
    gender: "Men's",
    specs: {
      cushioning: "Balanced Medium",
      weight: "235g (Size 9)",
      upper: "AeroMesh Eco Synthetic",
      sole: "FlexFoam Outsole Grid",
      warranty: "1 Year Limited"
    },
    benefits: [
      "Extremely flexible midsole grooves for natural feel",
      "Dynamic heel counter keeps your heel locked",
      "Made with 30% recycled ocean plastics"
    ]
  },
  {
    id: 3,
    name: "Horizon X",
    category: "Running",
    price: 174.99,
    rating: 4.6,
    reviewsCount: 68,
    description: "Designed for long-distance training runs. Horizon X features our signature plush support cushion to minimize joint fatigue over high mileage.",
    stock: "Low Stock",
    edition: "Limited Edition",
    colors: [
      { name: "Carbon & Blue", hex: "#0B63F6", accent: "#F59E0B", secondary: "#14213D", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80" },
      { name: "Sunset Gold", hex: "#F59E0B", accent: "#DC2626", secondary: "#101828", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80" }
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    widths: ["Standard", "Wide", "Extra Wide"],
    gender: "Unisex",
    specs: {
      cushioning: "Plush High Support",
      weight: "260g (Size 9)",
      upper: "Dualknit Breathable Fabric",
      sole: "High-Abrasion Tough Rubber",
      warranty: "2 Years Extended"
    },
    benefits: [
      "Maximum plush cushioning for joint protection",
      "Extra wide platform for natural toe-splay and stability",
      "Limited edition colorways with reflective piping"
    ]
  },
  {
    id: 4,
    name: "Force Trainer",
    category: "Training",
    price: 129.99,
    rating: 4.7,
    reviewsCount: 82,
    description: "The ultimate gym shoe. Flat heel, stable platform, and sidewall grip wraps for heavy weightlifting, cross-training, and HIIT.",
    stock: "In Stock",
    edition: "Standard",
    colors: [
      { name: "Stealth Black", hex: "#101828", accent: "#A6FF00", secondary: "#475569", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80" },
      { name: "Volt Accent", hex: "#A6FF00", accent: "#101828", secondary: "#14213D", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80" }
    ],
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    widths: ["Standard", "Wide"],
    gender: "Men's",
    specs: {
      cushioning: "Firm & Stable",
      weight: "290g (Size 9)",
      upper: "Ripstop Shield Mesh",
      sole: "Flat-Max Solid Rubber",
      warranty: "1 Year Limited"
    },
    benefits: [
      "Flat heel drop gives maximum leverage for squats & deadlifts",
      "Medial/lateral rubber wraps protect against rope climbs",
      "Re-enforced toe cap guards against foot friction"
    ]
  },
  {
    id: 5,
    name: "Core Lift",
    category: "Training",
    price: 149.99,
    rating: 4.9,
    reviewsCount: 54,
    description: "Premium lifting shoe built for professional weightlifters. Featuring an TPU heel wedge, dual strap locks, and extreme structural rigidity.",
    stock: "In Stock",
    edition: "Standard",
    colors: [
      { name: "Crimson Stealth", hex: "#DC2626", accent: "#101828", secondary: "#14213D", image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=600&q=80" },
      { name: "White Platinum", hex: "#F8FAFC", accent: "#0B63F6", secondary: "#CBD5E1", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80" }
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    widths: ["Standard"],
    gender: "Men's",
    specs: {
      cushioning: "Ultra Rigid TPU Wedge",
      weight: "410g (Size 9)",
      upper: "Full-Grain Synthetic Leather",
      sole: "Super Flat Grip Rubber",
      warranty: "2 Years Premium"
    },
    benefits: [
      "Elevated heel wedge optimizes ankle mobility for deeper lifts",
      "Dual midfoot hook-and-loop straps lock feet down securely",
      "Rigid outsole base prevents power loss during heavy sets"
    ]
  },
  {
    id: 6,
    name: "Urban Motion",
    category: "Sneakers",
    price: 119.99,
    rating: 4.5,
    reviewsCount: 154,
    description: "Retro styling meets high-tech comfort. Perfect for college, daily walks, and casual street fashion.",
    stock: "In Stock",
    edition: "Standard",
    colors: [
      { name: "Classic Navy", hex: "#14213D", accent: "#CBD5E1", secondary: "#0B63F6", image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=600&q=80" },
      { name: "Clean White", hex: "#FFFFFF", accent: "#0B63F6", secondary: "#14213D", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80" }
    ],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    widths: ["Standard", "Wide"],
    gender: "Unisex",
    specs: {
      cushioning: "Soft Cushioned Sockliner",
      weight: "280g (Size 9)",
      upper: "Suede and Canvas Overlay",
      sole: "Vintage Gum Rubber",
      warranty: "1 Year Limited"
    },
    benefits: [
      "Timeless retro silhouette goes with any casual outfit",
      "Memory foam sockliner adjusts to your footprint",
      "Reinforced suede heel and toe panel details"
    ]
  },
  {
    id: 7,
    name: "Street Pulse",
    category: "Sneakers",
    price: 139.99,
    rating: 4.8,
    reviewsCount: 42,
    description: "High-contrast urban sneakers built with premium leather panels and a thick responsive midsole block.",
    stock: "Low Stock",
    edition: "Limited Edition",
    colors: [
      { name: "Volt Stealth", hex: "#A6FF00", accent: "#101828", secondary: "#14213D", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80" },
      { name: "Dark Indigo", hex: "#14213D", accent: "#DC2626", secondary: "#0B63F6", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" }
    ],
    sizes: [8, 9, 10, 11],
    widths: ["Standard"],
    gender: "Unisex",
    specs: {
      cushioning: "Thick Responsive EVA Block",
      weight: "320g (Size 9)",
      upper: "Nappa Leather & Tech Mesh",
      sole: "Segmented Street Traction",
      warranty: "1 Year Limited"
    },
    benefits: [
      "Bold color block designs that turn heads",
      "Soft padded mesh collar prevents friction blisters",
      "Chunky fashion-forward midsole with excellent bounce"
    ]
  },
  {
    id: 8,
    name: "Summit Trek",
    category: "Hiking",
    price: 199.99,
    rating: 4.7,
    reviewsCount: 76,
    description: "Waterproof, tough-as-nails trail hiking boots. Mid-height ankle support, dual lace hooks, and deep multi-directional traction lugs.",
    stock: "In Stock",
    edition: "Standard",
    colors: [
      { name: "Forest Gray", hex: "#475569", accent: "#F59E0B", secondary: "#14213D", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80" },
      { name: "Onyx Black", hex: "#101828", accent: "#DC2626", secondary: "#14213D", image: "https://images.unsplash.com/photo-1508182314998-3bd49473002f?auto=format&fit=crop&w=600&q=80" }
    ],
    sizes: [7, 8, 9, 10, 11, 12, 13],
    widths: ["Standard", "Wide"],
    gender: "Men's",
    specs: {
      cushioning: "Heavy Duty Shock Absorbing",
      weight: "480g (Size 9)",
      upper: "Waterproof HydroShield Leather",
      sole: "Deep-Tread Rugged Rubber Lugs",
      warranty: "2 Years Extended"
    },
    benefits: [
      "100% waterproof construction keep feet dry in mud/rivers",
      "Aggressive 5mm rubber lugs prevent slips on loose dirt",
      "Ortholite footbed keeps feet dry and smelling fresh"
    ]
  },
  {
    id: 9,
    name: "Trail Hunter",
    category: "Hiking",
    price: 169.99,
    rating: 4.6,
    reviewsCount: 39,
    description: "Low-profile, highly breathable trail running shoe. Perfect for muddy terrains and rocky paths.",
    stock: "In Stock",
    edition: "Standard",
    colors: [
      { name: "Volt Green", hex: "#A6FF00", accent: "#14213D", secondary: "#0B63F6", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80" },
      { name: "Burgundy Sand", hex: "#DC2626", accent: "#F59E0B", secondary: "#101828", image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=600&q=80" }
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    widths: ["Standard"],
    gender: "Unisex",
    specs: {
      cushioning: "Responsive Trail EVA",
      weight: "295g (Size 9)",
      upper: "Debris-Resistant Tight Knit",
      sole: "StickyRubber Wet-Terrain Base",
      warranty: "1 Year Limited"
    },
    benefits: [
      "Rockplate insert guards feet against sharp underfoot stones",
      "Quick-lace drawer allows instant adjustments on the go",
      "Knit ankle gaiter prevents dust and pine needles entering"
    ]
  },
  {
    id: 10,
    name: "Court Impact",
    category: "Basketball",
    price: 164.99,
    rating: 4.8,
    reviewsCount: 112,
    description: "High-top basketball shoe featuring high ankle collar straps, springy heel inserts, and an absolute grip herringbone traction sole.",
    stock: "In Stock",
    edition: "Standard",
    colors: [
      { name: "Electric Blue Glow", hex: "#0B63F6", accent: "#A6FF00", secondary: "#14213D", image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=600&q=80" },
      { name: "Stealth Crimson", hex: "#DC2626", accent: "#101828", secondary: "#14213D", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" }
    ],
    sizes: [8, 9, 10, 11, 12, 13],
    widths: ["Standard"],
    gender: "Men's",
    specs: {
      cushioning: "Zoom-Spring Heel System",
      weight: "370g (Size 9)",
      upper: "Fibre-Shield Knit Shell",
      sole: "Herringbone High-Grip Rubber",
      warranty: "1 Year Limited"
    },
    benefits: [
      "Keep foot locked in place on side cuts",
      "Shock absorption technology guards joints",
      "Dynamic traction sole holds court surfaces"
    ]
  },
  {
    id: 11,
    name: "Sprint Strike",
    category: "Football",
    price: 179.99,
    rating: 4.7,
    reviewsCount: 48,
    description: "Ultra-lightweight football cleats designed for explosive acceleration and rapid direction changes on firm ground fields.",
    stock: "Low Stock",
    edition: "Standard",
    colors: [
      { name: "Volt Speed", hex: "#A6FF00", accent: "#0B63F6", secondary: "#14213D", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80" },
      { name: "Pearl White", hex: "#FFFFFF", accent: "#CBD5E1", secondary: "#101828", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80" }
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    widths: ["Standard"],
    gender: "Unisex",
    specs: {
      cushioning: "Low Profile Comfort Plate",
      weight: "175g (Size 9)",
      upper: "Skin-Fit Synthetic Shell",
      sole: "Firm Ground Studded TPU Plate",
      warranty: "1 Year Limited"
    },
    benefits: [
      "Featherweight construction minimizes drag during dashes",
      "Textured skin upper allows superior ball touch and control",
      "AeroCleat layout delivers peak grip on natural grass"
    ]
  },
  {
    id: 12,
    name: "Everyday Flow",
    category: "Lifestyle",
    price: 99.99,
    rating: 4.6,
    reviewsCount: 142,
    description: "Your daily companion. Easy slip-on design with elastic knit collar, breathable knit upper, and all-day sponge cushioning.",
    stock: "In Stock",
    edition: "Standard",
    colors: [
      { name: "Slate Mist", hex: "#667085", accent: "#CBD5E1", secondary: "#14213D", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80" },
      { name: "Onyx & Volt", hex: "#101828", accent: "#A6FF00", secondary: "#0B63F6", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80" }
    ],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    widths: ["Standard", "Wide"],
    gender: "Unisex",
    specs: {
      cushioning: "Soft Cushy Sponge EVA",
      weight: "220g (Size 9)",
      upper: "Slip-On Elastic Knit",
      sole: "Lightweight Cushion EVA Outsole",
      warranty: "1 Year Limited"
    },
    benefits: [
      "Elastic pull loops and slip-on design for effortless wear",
      "Entire shoe is machine washable for simple cleanups",
      "Extremely light design makes you feel like walking on clouds"
    ]
  }
];

// ================= DYNAMIC VECTOR SHOE GENERATOR =================
function getShoeSvg(primaryColor, secondaryColor, accentColor, width = "100%", height = "100%") {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="${width}" height="${height}" class="select-none pointer-events-none drop-shadow-md">
    <defs>
      <linearGradient id="soleGrad_${primaryColor.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${secondaryColor}" />
        <stop offset="100%" stop-color="#050b18" />
      </linearGradient>
      <linearGradient id="bodyGrad_${primaryColor.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${primaryColor}" />
        <stop offset="70%" stop-color="${primaryColor}dd" />
        <stop offset="100%" stop-color="${secondaryColor}" />
      </linearGradient>
    </defs>
    
    <!-- Shadow beneath shoe -->
    <ellipse cx="100" cy="110" rx="72" ry="7.5" fill="rgba(20, 33, 61, 0.12)" />
    
    <!-- Outsole & Midsole -->
    <path d="M 25 102 C 50 106, 95 106, 115 105 C 135 104, 155 105, 175 95 C 180 92, 185 85, 180 88 C 170 95, 155 98, 140 98 C 120 98, 90 92, 60 96 C 45 98, 30 100, 20 98 C 15 97, 18 101, 25 102 Z" fill="url(#soleGrad_${primaryColor.replace('#','')})" />
    <path d="M 20 96 C 40 97, 75 97, 100 95 C 125 93, 150 96, 175 88 C 178 86, 180 82, 176 83 C 165 87, 145 90, 130 90 C 110 90, 80 88, 55 91 C 35 93, 20 94, 15 93 Z" fill="${accentColor}" opacity="0.95" />
    
    <!-- Shoe Upper Body -->
    <path d="M 20 93 C 15 85, 20 70, 30 60 C 40 50, 60 48, 85 45 C 95 38, 110 32, 125 35 C 135 37, 140 45, 145 52 C 155 58, 168 68, 175 78 C 178 82, 178 85, 174 86 C 155 92, 125 90, 100 91 C 75 92, 40 93, 20 93 Z" fill="url(#bodyGrad_${primaryColor.replace('#','')})" />
    
    <!-- Overlay/Mesh Panels -->
    <path d="M 35 62 C 45 54, 60 52, 80 50 C 90 50, 100 58, 95 68 C 88 78, 65 82, 45 83 C 35 83, 30 72, 35 62 Z" fill="rgba(255,255,255,0.18)" />
    <path d="M 115 42 C 125 43, 132 48, 135 55 C 138 62, 120 75, 105 78 C 95 80, 105 60, 115 42 Z" fill="rgba(255,255,255,0.1)" />
    
    <!-- Dynamic Accent Stripes (Volt / Electric) -->
    <path d="M 70 52 Q 85 62 82 74" stroke="${accentColor}" stroke-width="4.5" stroke-linecap="round" fill="none" opacity="0.95" />
    <path d="M 78 50 Q 93 60 90 72" stroke="${accentColor}" stroke-width="4.5" stroke-linecap="round" fill="none" opacity="0.95" />
    
    <!-- Collar & Tongue -->
    <path d="M 110 33 C 115 30, 125 31, 130 35 C 132 38, 125 45, 120 48 C 115 50, 108 42, 110 33 Z" fill="${secondaryColor}" />
    <path d="M 98 42 C 102 38, 108 38, 112 42 C 115 45, 110 52, 105 53 C 100 54, 95 46, 98 42 Z" fill="${secondaryColor}" opacity="0.8" />
    
    <!-- Laces -->
    <line x1="90" y1="52" x2="102" y2="44" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
    <line x1="98" y1="58" x2="110" y2="50" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
    <line x1="106" y1="64" x2="118" y2="56" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
    
    <!-- Heel Tab -->
    <path d="M 132 37 C 134 35, 137 36, 138 39 C 138 42, 134 46, 132 47 Z" fill="${accentColor}" />
    
    <!-- Brand V/X Logo Cutout on Body -->
    <path d="M 138 65 L 148 78 L 153 78 L 141 62 L 138 65" fill="${accentColor}" />
    <path d="M 148 62 L 138 78 L 143 78 L 151 65 L 148 62" fill="${accentColor}" />
  </svg>
  `;
}

// Helper to render product image (either dynamic SVG or generated image file)
function getProductImage(product, colorIndex = 0, customClass = "w-full h-full object-contain") {
  // Use generated local hero image asset for Velocity Pro, color 0 if available
  if (product.id === 1 && colorIndex === 0 && product.image) {
    return `<img src="${product.image}" alt="${product.name}" class="${customClass}">`;
  }
  const color = product.colors[colorIndex] || product.colors[0];
  if (color && color.image) {
    return `<img src="${color.image}" alt="${product.name}" class="${customClass} object-cover rounded-xl transition-all duration-300">`;
  }
  return getShoeSvg(color.hex, color.secondary, color.accent);
}


// ================= GLOBAL APPLICATION STATE =================
const STATE = {
  cart: JSON.parse(localStorage.getItem('veloxis_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('veloxis_wishlist')) || [],
  compare: JSON.parse(localStorage.getItem('veloxis_compare')) || [],
  recentlyViewed: JSON.parse(localStorage.getItem('veloxis_recently_viewed')) || [],
  currentProductIndex: 0, // For variant swapping in PDP/QuickView
  filters: {
    categories: [],
    colors: [],
    sizes: [],
    genders: [],
    priceRange: [50, 300],
    sort: 'popular',
    search: ''
  }
};

// State Persistance
function saveCart() {
  localStorage.setItem('veloxis_cart', JSON.stringify(STATE.cart));
  renderCartBadge();
  renderMiniCart();
}

function saveWishlist() {
  localStorage.setItem('veloxis_wishlist', JSON.stringify(STATE.wishlist));
  renderWishlistBadge();
}

function saveCompare() {
  localStorage.setItem('veloxis_compare', JSON.stringify(STATE.compare));
  renderCompareBadge();
  renderCompareBar();
}

function saveRecentlyViewed() {
  localStorage.setItem('veloxis_recently_viewed', JSON.stringify(STATE.recentlyViewed));
}

// ================= APP BADGES RENDERING =================
function renderCartBadge() {
  const count = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
  const $badge = $('#cart-count');
  const $drawerBadge = $('#cart-drawer-count-badge');
  
  $badge.text(count);
  $drawerBadge.text(count);
  
  if (count === 0) {
    $badge.addClass('hidden');
  } else {
    $badge.removeClass('hidden');
  }
}

function renderWishlistBadge() {
  const count = STATE.wishlist.length;
  const $badge = $('#wishlist-count');
  $badge.text(count);
  if (count === 0) {
    $badge.addClass('hidden');
  } else {
    $badge.removeClass('hidden');
  }
}

function renderCompareBadge() {
  const count = STATE.compare.length;
  const $badge = $('#compare-count');
  $badge.text(count);
  if (count === 0) {
    $badge.addClass('hidden');
  } else {
    $badge.removeClass('hidden');
  }
}

// ================= TOAST NOTIFICATION HANDLER =================
function showToast(message, type = 'success') {
  const id = 'toast_' + Date.now();
  let bg = 'bg-white text-slate-800';
  let icon = 'info';
  let border = 'border-slate-200';
  
  if (type === 'success') {
    bg = 'bg-white';
    icon = 'check-circle';
    border = 'border-l-4 border-l-brand-success border-slate-200';
  } else if (type === 'error') {
    bg = 'bg-white';
    icon = 'alert-triangle';
    border = 'border-l-4 border-l-brand-error border-slate-200';
  } else if (type === 'warning') {
    bg = 'bg-white';
    icon = 'alert-circle';
    border = 'border-l-4 border-l-brand-warning border-slate-200';
  }

  const toastHtml = `
    <div id="${id}" class="flex items-center gap-3 p-4 bg-white border ${border} rounded-xl shadow-large w-full animate-toast-in pointer-events-auto transition-all duration-300">
      <div class="${type === 'success' ? 'text-brand-success' : type === 'error' ? 'text-brand-error' : 'text-brand-warning'}">
        <i data-lucide="${icon}" class="w-5 h-5"></i>
      </div>
      <div class="flex-grow text-xs font-medium text-slate-700">${message}</div>
      <button class="text-slate-400 hover:text-slate-600 focus:outline-none" onclick="$('#${id}').fadeOut(200, function(){ $(this).remove(); })">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
    </div>
  `;
  
  $('#toast-container').append(toastHtml);
  lucide.createIcons();
  
  // Auto remove
  setTimeout(() => {
    $(`#${id}`).addClass('opacity-0 translate-y-2');
    setTimeout(() => { $(`#${id}`).remove(); }, 300);
  }, 4000);
}

// ================= CARD ACTIONS (CART/WISHLIST/COMPARE) =================
function toggleWishlist(productId) {
  const index = STATE.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  if (index === -1) {
    STATE.wishlist.push(productId);
    showToast(`Added ${product.name} to wishlist!`, 'success');
  } else {
    STATE.wishlist.splice(index, 1);
    showToast(`Removed ${product.name} from wishlist.`, 'warning');
  }
  saveWishlist();
  // Toggle heart icons in DOM
  $(`.wishlist-toggle[data-id="${productId}"]`).toggleClass('text-slate-400 text-brand-error fill-brand-error');
}

function toggleCompare(productId) {
  const index = STATE.compare.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  
  if (index === -1) {
    if (STATE.compare.length >= 3) {
      showToast('You can compare a maximum of 3 products at a time.', 'error');
      return;
    }
    STATE.compare.push(productId);
    showToast(`Added ${product.name} to compare list.`, 'success');
  } else {
    STATE.compare.splice(index, 1);
    showToast(`Removed ${product.name} from compare list.`, 'warning');
  }
  saveCompare();
  // Toggle check/sliders in DOM
  $(`.compare-toggle[data-id="${productId}"]`).prop('checked', index === -1);
}

function addToCart(productId, quantity = 1, colorName = null, sizeVal = null, widthVal = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  // Set defaults if null
  const selectedColor = colorName || product.colors[0].name;
  const selectedSize = sizeVal || product.sizes[Math.floor(product.sizes.length / 2)];
  const selectedWidth = widthVal || product.widths[0];

  // Find if identical item is in cart
  const existingItemIndex = STATE.cart.findIndex(item => 
    item.productId === productId && 
    item.color === selectedColor && 
    item.size === selectedSize && 
    item.width === selectedWidth
  );

  if (existingItemIndex > -1) {
    STATE.cart[existingItemIndex].quantity += quantity;
  } else {
    STATE.cart.push({
      productId,
      quantity,
      color: selectedColor,
      size: selectedSize,
      width: selectedWidth
    });
  }
  
  saveCart();
  showToast(`Added ${product.name} (${selectedSize}, ${selectedColor}) to cart!`, 'success');
  openMiniCart();
}

function updateCartQuantity(index, newQty) {
  if (newQty <= 0) {
    STATE.cart.splice(index, 1);
    showToast("Item removed from cart.", "warning");
  } else {
    STATE.cart[index].quantity = newQty;
  }
  saveCart();
  // If we are currently rendering the main cart view, re-render it
  if (window.location.hash.startsWith('#cart')) {
    renderCartView();
  }
}

// ================= MINI CART DRAWER LOGIC =================
function openMiniCart() {
  $('#cart-drawer').removeClass('hidden');
  setTimeout(() => {
    $('#cart-drawer-backdrop').removeClass('opacity-0');
    $('#cart-drawer-content').removeClass('translate-x-full');
  }, 10);
}

function closeMiniCart() {
  $('#cart-drawer-backdrop').addClass('opacity-0');
  $('#cart-drawer-content').addClass('translate-x-full');
  setTimeout(() => {
    $('#cart-drawer').addClass('hidden');
  }, 300);
}

function renderMiniCart() {
  const $container = $('#cart-drawer-items');
  const $subtotalSpan = $('#cart-drawer-subtotal');
  
  if (STATE.cart.length === 0) {
    $container.html(`
      <div class="flex flex-col items-center justify-center h-full text-center text-slate-400">
        <i data-lucide="shopping-bag" class="w-12 h-12 mb-3 stroke-[1.25]"></i>
        <p class="font-medium text-slate-600 text-sm">Your cart is empty</p>
        <a href="#shop" class="text-xs text-brand-primary hover:underline mt-1 font-semibold mini-cart-shop-now">Shop collection now</a>
      </div>
    `);
    $subtotalSpan.text('$0.00');
    lucide.createIcons();
    $('.mini-cart-shop-now').on('click', (e) => { e.preventDefault(); closeMiniCart(); navigateTo('#shop'); });
    return;
  }

  let cartHtml = '';
  let subtotal = 0;

  STATE.cart.forEach((item, index) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return;
    const itemTotal = product.price * item.quantity;
    subtotal += itemTotal;
    
    // Find color object
    const colorObj = product.colors.find(c => c.name === item.color) || product.colors[0];

    cartHtml += `
      <div class="flex items-center gap-4 py-3 border-b border-slate-100 last:border-0">
        <div class="w-16 h-16 bg-slate-50 border border-slate-150 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0">
          ${getProductImage(product, product.colors.indexOf(colorObj), 'w-full h-full object-contain')}
        </div>
        <div class="flex-grow min-w-0">
          <h4 class="font-heading font-bold text-sm text-brand-secondary truncate">${product.name}</h4>
          <p class="text-[11px] text-slate-400 mt-0.5 truncate">${item.size} / ${item.width} / ${item.color}</p>
          <div class="flex items-center justify-between mt-2">
            <!-- Stepper -->
            <div class="flex items-center border border-slate-200 rounded-full py-0.5 px-2 bg-white">
              <button class="text-slate-400 hover:text-slate-600 p-0.5 focus:outline-none" onclick="updateCartQuantity(${index}, ${item.quantity - 1})">
                <i data-lucide="minus" class="w-3 h-3"></i>
              </button>
              <span class="text-xs font-semibold px-2 text-brand-secondary">${item.quantity}</span>
              <button class="text-slate-400 hover:text-slate-600 p-0.5 focus:outline-none" onclick="updateCartQuantity(${index}, ${item.quantity + 1})">
                <i data-lucide="plus" class="w-3 h-3"></i>
              </button>
            </div>
            <span class="font-semibold text-brand-secondary text-sm">$${itemTotal.toFixed(2)}</span>
          </div>
        </div>
        <button class="text-slate-300 hover:text-slate-500 self-start" aria-label="Remove item" onclick="updateCartQuantity(${index}, 0)">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  });

  $container.html(cartHtml);
  $subtotalSpan.text(`$${subtotal.toFixed(2)}`);
  lucide.createIcons();
}

// ================= COMPARE BAR LOGIC =================
function renderCompareBar() {
  const $bar = $('#compare-bar');
  const $container = $('#compare-bar-items');
  const $count = $('#compare-bar-count');
  
  if (STATE.compare.length === 0) {
    $bar.addClass('translate-y-full');
    setTimeout(() => { $bar.addClass('hidden'); }, 300);
    return;
  }
  
  $bar.removeClass('hidden');
  setTimeout(() => { $bar.removeClass('translate-y-full'); }, 10);
  
  $count.text(STATE.compare.length);
  
  let itemsHtml = '';
  STATE.compare.forEach(productId => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    itemsHtml += `
      <div class="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full text-xs">
        <span class="font-medium text-brand-secondary truncate max-w-[100px]">${product.name}</span>
        <button class="text-slate-400 hover:text-slate-600" onclick="toggleCompare(${productId})">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;
  });
  
  $container.html(itemsHtml);
  lucide.createIcons();
}

// Trigger Compare Modal
function openCompareModal() {
  if (STATE.compare.length === 0) return;
  
  $('#compare-modal').removeClass('hidden');
  setTimeout(() => {
    $('#compare-modal-backdrop').removeClass('opacity-0');
    $('#compare-modal-content').removeClass('scale-95 opacity-0');
  }, 10);
  
  const $body = $('#compare-modal-body');
  
  // Generate comparison table
  const comparedProducts = STATE.compare.map(id => PRODUCTS.find(p => p.id === id));
  
  let headers = '<th class="p-3 text-left font-heading font-semibold text-slate-500 text-xs uppercase tracking-wider bg-slate-50 rounded-tl-xl">Feature</th>';
  let images = '<td class="p-3 font-semibold text-slate-600 bg-slate-50 font-heading">Image</td>';
  let names = '<td class="p-3 font-semibold text-slate-600 bg-slate-50 font-heading">Name</td>';
  let prices = '<td class="p-3 font-semibold text-slate-600 bg-slate-50 font-heading">Price</td>';
  let ratings = '<td class="p-3 font-semibold text-slate-600 bg-slate-50 font-heading">Rating</td>';
  let cushioning = '<td class="p-3 font-semibold text-slate-600 bg-slate-50 font-heading">Cushioning</td>';
  let weight = '<td class="p-3 font-semibold text-slate-600 bg-slate-50 font-heading">Weight</td>';
  let upper = '<td class="p-3 font-semibold text-slate-600 bg-slate-50 font-heading">Upper Material</td>';
  let sole = '<td class="p-3 font-semibold text-slate-600 bg-slate-50 font-heading">Sole Material</td>';
  let action = '<td class="p-3 font-semibold text-slate-600 bg-slate-50 font-heading rounded-bl-xl">Actions</td>';
  
  comparedProducts.forEach(product => {
    headers += `<th class="p-3 text-left font-heading font-bold text-brand-secondary text-sm min-w-[200px] border-l border-slate-100">${product.name}</th>`;
    images += `<td class="p-3 border-l border-slate-100"><div class="w-20 h-20 bg-slate-50 border border-slate-150 rounded-xl overflow-hidden flex items-center justify-center">${getProductImage(product, 0)}</div></td>`;
    names += `<td class="p-3 text-sm text-brand-secondary font-semibold border-l border-slate-100">${product.name}</td>`;
    prices += `<td class="p-3 text-sm font-bold text-brand-primary border-l border-slate-100">$${product.price.toFixed(2)}</td>`;
    ratings += `<td class="p-3 text-sm text-slate-600 border-l border-slate-100 flex items-center gap-1"><i data-lucide="star" class="w-4 h-4 fill-brand-warning text-brand-warning"></i> ${product.rating} (${product.reviewsCount})</td>`;
    cushioning += `<td class="p-3 text-xs text-slate-500 border-l border-slate-100">${product.specs.cushioning}</td>`;
    weight += `<td class="p-3 text-xs text-slate-500 border-l border-slate-100">${product.specs.weight}</td>`;
    upper += `<td class="p-3 text-xs text-slate-500 border-l border-slate-100">${product.specs.upper}</td>`;
    sole += `<td class="p-3 text-xs text-slate-500 border-l border-slate-100">${product.specs.sole}</td>`;
    action += `
      <td class="p-3 border-l border-slate-100">
        <button class="w-full bg-brand-secondary hover:bg-brand-primary text-white text-xs font-semibold py-1.5 px-3 rounded-full transition-colors flex items-center justify-center gap-1.5 shadow-sm" onclick="closeCompareModal(); addToCart(${product.id})">
          Add to Cart
        </button>
      </td>
    `;
  });
  
  $body.html(`
    <table class="w-full border-collapse border border-slate-150 rounded-xl overflow-hidden">
      <thead>
        <tr class="border-b border-slate-150">${headers}</tr>
      </thead>
      <tbody>
        <tr class="border-b border-slate-100">${images}</tr>
        <tr class="border-b border-slate-100">${names}</tr>
        <tr class="border-b border-slate-100">${prices}</tr>
        <tr class="border-b border-slate-100">${ratings}</tr>
        <tr class="border-b border-slate-100">${cushioning}</tr>
        <tr class="border-b border-slate-100">${weight}</tr>
        <tr class="border-b border-slate-100">${upper}</tr>
        <tr class="border-b border-slate-100">${sole}</tr>
        <tr class="bg-slate-50/50">${action}</tr>
      </tbody>
    </table>
  `);
  
  lucide.createIcons();
}

function closeCompareModal() {
  $('#compare-modal-backdrop').addClass('opacity-0');
  $('#compare-modal-content').addClass('scale-95 opacity-0');
  setTimeout(() => {
    $('#compare-modal').addClass('hidden');
  }, 200);
}

// ================= QUICK VIEW MODAL LOGIC =================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  $('#quick-view-modal').removeClass('hidden');
  setTimeout(() => {
    $('#quick-view-backdrop').removeClass('opacity-0');
    $('#quick-view-content').removeClass('scale-95 opacity-0');
  }, 10);

  STATE.currentProductIndex = 0; // Default color index
  renderQuickViewBody(product);
}

function closeQuickView() {
  $('#quick-view-backdrop').addClass('opacity-0');
  $('#quick-view-content').addClass('scale-95 opacity-0');
  setTimeout(() => {
    $('#quick-view-modal').addClass('hidden');
  }, 200);
}

function renderQuickViewBody(product) {
  const $body = $('#quick-view-body');
  const activeColor = product.colors[STATE.currentProductIndex];

  // Size buttons html
  let sizesHtml = '';
  product.sizes.forEach((size, idx) => {
    const isSelected = idx === Math.floor(product.sizes.length / 2) ? 'border-brand-primary bg-brand-primary/5 text-brand-primary font-bold' : 'border-slate-200 text-slate-700 hover:border-slate-400';
    sizesHtml += `
      <button class="quick-view-size-btn border rounded-xl py-2 px-3 text-xs font-semibold focus:outline-none transition-colors ${isSelected}" data-size="${size}">
        ${size}
      </button>
    `;
  });

  // Width buttons html
  let widthsHtml = '';
  product.widths.forEach((width, idx) => {
    const isSelected = idx === 0 ? 'bg-brand-secondary text-white font-semibold' : 'bg-slate-100 hover:bg-slate-200 text-slate-700';
    widthsHtml += `
      <button class="quick-view-width-btn py-1.5 px-4 rounded-full text-xs transition-colors focus:outline-none ${isSelected}" data-width="${width}">
        ${width}
      </button>
    `;
  });

  // Color swatches html
  let colorsHtml = '';
  product.colors.forEach((color, idx) => {
    const isSelected = idx === STATE.currentProductIndex ? 'ring-2 ring-brand-primary ring-offset-2' : 'hover:scale-105';
    colorsHtml += `
      <button class="w-6 h-6 rounded-full border border-black/10 focus:outline-none transition-all ${isSelected}" style="background-color: ${color.hex};" data-index="${idx}" aria-label="Select color ${color.name}"></button>
    `;
  });

  $body.html(`
    <!-- Product Gallery (Left) -->
    <div class="p-6 md:p-8 bg-slate-50/50 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-150">
      <div id="quick-view-img-container" class="w-full max-w-[280px] h-[220px] flex items-center justify-center bg-slate-100/50 rounded-2xl border border-slate-150/40 p-4">
        ${getProductImage(product, STATE.currentProductIndex, 'w-full h-full object-contain')}
      </div>
      
      <!-- Color thumbnails (Dynamic indicator) -->
      <div class="flex items-center gap-3 mt-6">
        ${product.colors.map((c, i) => `
          <button class="w-12 h-12 bg-white border ${i === STATE.currentProductIndex ? 'border-brand-primary' : 'border-slate-200'} hover:border-slate-400 rounded-xl overflow-hidden p-1 flex items-center justify-center focus:outline-none transition-colors" onclick="changeQuickViewColor(${product.id}, ${i})">
            ${getProductImage(product, i, 'w-full h-full object-contain')}
          </button>
        `).join('')}
      </div>
    </div>
    
    <!-- Product Details (Right) -->
    <div class="p-6 md:p-8 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="text-[11px] font-bold text-brand-primary uppercase tracking-wider px-2 py-0.5 bg-brand-primary/10 rounded-full">${product.category}</span>
          ${product.stock === "Low Stock" ? `<span class="text-[11px] font-bold text-brand-warning uppercase tracking-wider px-2 py-0.5 bg-brand-warning/10 rounded-full">Low Stock</span>` : ''}
        </div>
        <h3 class="font-heading font-extrabold text-2xl text-brand-secondary">${product.name}</h3>
        <div class="flex items-center gap-1 mt-1 text-slate-500 text-xs">
          <div class="flex text-brand-warning">
            ${Array.from({ length: 5 }).map((_, i) => `<i data-lucide="star" class="w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}"></i>`).join('')}
          </div>
          <span class="font-semibold text-brand-secondary ml-1">${product.rating}</span>
          <span>(${product.reviewsCount} reviews)</span>
        </div>
        <div class="text-xl font-extrabold text-brand-primary mt-3">$${product.price.toFixed(2)}</div>
        <p class="text-xs text-brand-body leading-relaxed mt-4 border-b border-slate-100 pb-4">${product.description}</p>
        
        <!-- Options Selectors -->
        <div class="mt-4 space-y-4">
          <!-- Size Selector -->
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-semibold text-slate-700">Select Size (US)</span>
              <a href="#" class="text-[10px] text-brand-primary hover:underline font-semibold" onclick="showToast('Size chart: Standard US Men\\'s sizes apply.', 'info'); return false;">Size Guide</a>
            </div>
            <div class="grid grid-cols-5 gap-2" id="quick-view-sizes-container">
              ${sizesHtml}
            </div>
          </div>
          
          <!-- Width Selector -->
          <div>
            <span class="text-xs font-semibold text-slate-700 block mb-2">Select Width</span>
            <div class="flex items-center gap-2">
              ${widthsHtml}
            </div>
          </div>

          <!-- Color Swatches -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold text-slate-700">Select Color</span>
              <span class="text-xs font-bold text-brand-primary" id="quick-view-color-name">${activeColor.name}</span>
            </div>
            <div class="flex items-center gap-2">
              ${colorsHtml}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Checkout CTAs -->
      <div class="mt-8 pt-4 border-t border-slate-100 flex items-center gap-3">
        <button id="quick-view-add-cart" class="flex-grow bg-brand-secondary hover:bg-brand-primary text-white text-xs font-bold py-3 px-6 rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-md" onclick="submitQuickViewCart(${product.id})">
          <i data-lucide="shopping-bag" class="w-4 h-4"></i> Add to Cart
        </button>
        <button class="p-3 border border-slate-200 rounded-full hover:border-slate-400 text-slate-400 hover:text-brand-error focus:outline-none transition-colors" onclick="toggleWishlist(${product.id})" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-4.5 h-4.5"></i>
        </button>
      </div>
    </div>
  `);

  lucide.createIcons();

  // Setup click listeners for size/width/color swatches
  $('.quick-view-size-btn').on('click', function() {
    $('.quick-view-size-btn').removeClass('border-brand-primary bg-brand-primary/5 text-brand-primary font-bold').addClass('border-slate-200 text-slate-700 hover:border-slate-400');
    $(this).addClass('border-brand-primary bg-brand-primary/5 text-brand-primary font-bold').removeClass('border-slate-200 text-slate-700 hover:border-slate-400');
  });

  $('.quick-view-width-btn').on('click', function() {
    $('.quick-view-width-btn').removeClass('bg-brand-secondary text-white font-semibold').addClass('bg-slate-100 hover:bg-slate-200 text-slate-700');
    $(this).addClass('bg-brand-secondary text-white font-semibold').removeClass('bg-slate-100 hover:bg-slate-200 text-slate-700');
  });

  $('#quick-view-body button[style*="background-color"]').on('click', function() {
    const idx = parseInt($(this).data('index'));
    changeQuickViewColor(product.id, idx);
  });
}

function changeQuickViewColor(productId, colorIdx) {
  STATE.currentProductIndex = colorIdx;
  const product = PRODUCTS.find(p => p.id === productId);
  if (product) {
    renderQuickViewBody(product);
  }
}

function submitQuickViewCart(productId) {
  const selectedSize = $('.quick-view-size-btn.border-brand-primary').data('size');
  const selectedWidth = $('.quick-view-width-btn.bg-brand-secondary').data('width');
  const selectedColorName = $('#quick-view-color-name').text();
  
  addToCart(productId, 1, selectedColorName, selectedSize, selectedWidth);
  closeQuickView();
}

// ================= LIVE SEARCH ENGINE =================
function runLiveSearch(query) {
  const $dropdown = $('#search-results-dropdown');
  const val = query.trim().toLowerCase();
  
  if (val.length < 2) {
    $dropdown.addClass('hidden').html('');
    $('#search-clear-btn').addClass('hidden');
    return;
  }
  
  $('#search-clear-btn').removeClass('hidden');

  const matches = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(val) || 
    p.category.toLowerCase().includes(val) ||
    p.description.toLowerCase().includes(val)
  ).slice(0, 5);

  if (matches.length === 0) {
    $dropdown.removeClass('hidden').html(`
      <div class="p-4 text-center text-xs text-slate-400 font-medium">No shoes match "${query}"</div>
    `);
    return;
  }

  let html = '';
  matches.forEach(p => {
    html += `
      <a href="#product?id=${p.id}" class="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0 search-result-item" data-id="${p.id}">
        <div class="w-10 h-10 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
          ${getProductImage(p, 0)}
        </div>
        <div class="min-w-0">
          <h4 class="font-heading font-bold text-xs text-brand-secondary truncate">${p.name}</h4>
          <p class="text-[10px] text-slate-400 font-medium">${p.category} &middot; $${p.price.toFixed(2)}</p>
        </div>
      </a>
    `;
  });

  $dropdown.removeClass('hidden').html(html);
  
  $('.search-result-item').on('click', function(e) {
    e.preventDefault();
    $dropdown.addClass('hidden');
    $('#search-input').val('');
    $('#search-clear-btn').addClass('hidden');
    navigateTo($(this).attr('href'));
  });
}

// ================= ROUTER & VIEW CONTROLLER =================
function handleRouting() {
  const hash = window.location.hash || '#home';
  
  // Slide out cart drawer if open
  closeMiniCart();
  
  // Highlight navigation link
  $('.nav-link').removeClass('text-brand-primary').addClass('text-brand-body');
  $(`.nav-link[href="${hash.split('?')[0]}"]`).addClass('text-brand-primary').removeClass('text-brand-body');
  
  // Smoothly swap view content
  const $container = $('#view-container');
  $container.removeClass('opacity-100').addClass('opacity-0');
  
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Parse router query parameters
    const [path, queryStr] = hash.split('?');
    const query = {};
    if (queryStr) {
      queryStr.split('&').forEach(pair => {
        const [k, v] = pair.split('=');
        query[decodeURIComponent(k)] = decodeURIComponent(v);
      });
    }

    // Call corresponding renderer
    if (path === '#home') {
      renderHomeView();
    } else if (path === '#shop') {
      // Load query parameters into state filters if present
      if (query.category) {
        STATE.filters.categories = [query.category];
      }
      if (query.sort) {
        STATE.filters.sort = query.sort;
      }
      renderShopView();
    } else if (path === '#product') {
      const prodId = parseInt(query.id) || 1;
      // Record recently viewed
      if (!STATE.recentlyViewed.includes(prodId)) {
        STATE.recentlyViewed.unshift(prodId);
        if (STATE.recentlyViewed.length > 5) STATE.recentlyViewed.pop();
        saveRecentlyViewed();
      }
      renderProductDetailView(prodId);
    } else if (path === '#cart') {
      renderCartView();
    } else if (path === '#checkout') {
      renderCheckoutView();
    } else if (path === '#confirmation') {
      renderConfirmationView(query.orderNum || 'VLX-82761');
    } else {
      renderHomeView();
    }
    
    lucide.createIcons();
    
    // Fade in
    $container.removeClass('opacity-0').addClass('opacity-100');
  }, 200);
}

function navigateTo(hash) {
  window.location.hash = hash;
}

// ================= VIEW RENDERERS =================

// 1. HOME VIEW
function renderHomeView() {
  const $container = $('#view-container');
  
  // Category Showcase List
  const categories = ["Running", "Training", "Sneakers", "Hiking", "Basketball", "Football", "Lifestyle"];
  const categoryColors = {
    Running: { bg: 'bg-blue-50 border-blue-100', text: 'text-blue-600', icon: 'zap' },
    Training: { bg: 'bg-indigo-50 border-indigo-100', text: 'text-indigo-600', icon: 'dumbbell' },
    Sneakers: { bg: 'bg-pink-50 border-pink-100', text: 'text-pink-600', icon: 'sparkles' },
    Hiking: { bg: 'bg-emerald-50 border-emerald-100', text: 'text-emerald-600', icon: 'mountain' },
    Basketball: { bg: 'bg-orange-50 border-orange-100', text: 'text-orange-600', icon: 'dribbble' },
    Football: { bg: 'bg-lime-50 border-lime-100', text: 'text-lime-600', icon: 'target' },
    Lifestyle: { bg: 'bg-slate-50 border-slate-100', text: 'text-slate-600', icon: 'smile' }
  };
  
  let categoriesHtml = '';
  categories.forEach(cat => {
    const c = categoryColors[cat] || { bg: 'bg-slate-50', text: 'text-slate-600', icon: 'tag' };
    categoriesHtml += `
      <a href="#shop?category=${cat}" class="flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-2xl hover:border-brand-primary hover:shadow-medium transition-all duration-300 group">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${c.bg} border group-hover:scale-110 transition-transform">
          <i data-lucide="${c.icon}" class="${c.text} w-6 h-6"></i>
        </div>
        <span class="font-heading font-bold text-slate-800 text-sm tracking-wide">${cat}</span>
      </a>
    `;
  });

  // Featured Products (First 4 best sellers)
  let featuredHtml = '';
  const featured = PRODUCTS.slice(0, 4);
  featured.forEach(p => {
    const color = p.colors[0];
    const isWishlisted = STATE.wishlist.includes(p.id) ? 'text-brand-error fill-brand-error' : 'text-slate-400';
    const isCompared = STATE.compare.includes(p.id);

    featuredHtml += `
      <article class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-light hover:shadow-medium transition-all duration-300 product-card relative group flex flex-col justify-between">
        
        <!-- Wishlist toggle -->
        <button class="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-slate-400 hover:text-brand-error shadow-sm border border-slate-100 transition-colors focus:outline-none" onclick="toggleWishlist(${p.id})" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="wishlist-toggle w-4 h-4 ${isWishlisted}" data-id="${p.id}"></i>
        </button>

        <!-- Product Image Frame -->
        <a href="#product?id=${p.id}" class="h-48 md:h-56 bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden block">
          <div class="product-card-img-zoom w-full h-full flex items-center justify-center">
            ${getProductImage(p, 0, 'w-full h-full object-contain')}
          </div>
        </a>

        <!-- Content -->
        <div class="p-5 flex-grow flex flex-col justify-between border-t border-slate-100">
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[10px] font-bold text-brand-primary uppercase tracking-wider bg-brand-primary/10 rounded-full px-2 py-0.5">${p.category}</span>
              <div class="flex items-center text-xs font-semibold text-slate-500">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-brand-warning text-brand-warning mr-0.5"></i> ${p.rating}
              </div>
            </div>
            <a href="#product?id=${p.id}" class="hover:text-brand-primary transition-colors block">
              <h3 class="font-heading font-bold text-slate-900 text-base md:text-lg leading-tight truncate">${p.name}</h3>
            </a>
            <p class="text-xs text-brand-body line-clamp-2 mt-1.5">${p.description}</p>
          </div>

          <div class="mt-5">
            <div class="flex items-center justify-between">
              <span class="font-heading font-extrabold text-brand-secondary text-lg">$${p.price.toFixed(2)}</span>
              <span class="text-[10px] text-brand-success font-semibold flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-success"></span> Free Shipping
              </span>
            </div>
            
            <div class="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100">
              <button class="border border-slate-200 hover:border-slate-400 text-brand-secondary font-semibold py-1.5 rounded-full text-xs transition-colors flex items-center justify-center gap-1" onclick="openQuickView(${p.id})">
                <i data-lucide="eye" class="w-3.5 h-3.5"></i> Quick View
              </button>
              <button class="bg-brand-secondary hover:bg-brand-primary text-white font-semibold py-1.5 rounded-full text-xs transition-colors flex items-center justify-center gap-1 shadow-sm" onclick="addToCart(${p.id})">
                <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i> Add
              </button>
            </div>

            <!-- Compare and details check -->
            <label class="flex items-center gap-1.5 mt-3 text-[10px] text-slate-500 font-semibold cursor-pointer">
              <input type="checkbox" class="compare-toggle rounded border-slate-300 text-brand-primary focus:ring-brand-primary w-3.5 h-3.5 cursor-pointer custom-checkbox" data-id="${p.id}" ${isCompared ? 'checked' : ''} onchange="toggleCompare(${p.id})">
              <span>Add to compare</span>
            </label>
          </div>
        </div>
      </article>
    `;
  });

  $container.html(`
    <!-- 1. Hero Section -->
    <section class="relative bg-brand-secondary text-white py-20 md:py-28 overflow-hidden">
      <!-- Background elements -->
      <div class="absolute -right-16 -top-16 w-96 h-96 rounded-full bg-brand-primary/10 blur-3xl"></div>
      <div class="absolute -left-16 -bottom-16 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl"></div>
      
      <div class="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        <div class="space-y-6 md:max-w-md">
          <span class="inline-block bg-brand-primary text-white text-xs font-bold tracking-wider px-3.5 py-1 rounded-full uppercase">Fall/Winter Collection</span>
          <h1 class="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
            Move Beyond <span class="text-brand-accent">Limits.</span>
          </h1>
          <p class="text-slate-300 text-sm md:text-base leading-relaxed">
            Elevate your stride. Crafted with premium aerospace knit fibers, carbon launchplates, and multi-shock absorption technologies designed for daily runners, athletes, and street lifestyle creators.
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a href="#shop" class="w-full sm:w-auto text-center bg-brand-primary hover:bg-blue-600 text-white font-bold py-3.5 px-8 rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg">
              Shop Now <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
            <a href="#shop?sort=newest" class="w-full sm:w-auto text-center border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-bold py-3.5 px-8 rounded-full transition-colors">
              Explore Collection
            </a>
          </div>
        </div>
        <div class="flex justify-center relative">
          <!-- Geometric neon back-plate -->
          <div class="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-accent/20 rounded-[48px] rotate-6 scale-95 border border-white/5 blur-sm"></div>
          <div class="relative w-full max-w-[400px] h-[300px] md:h-[360px] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md rounded-[32px] border border-white/10 shadow-large overflow-hidden">
            <img src="${PRODUCTS[0].image}" alt="Velocity Pro Premium Shoe" class="w-full h-full object-contain drop-shadow-2xl rotate-[-12deg] scale-110 hover:rotate-[-5deg] hover:scale-115 transition-all duration-500">
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Trust Bar -->
    <section class="bg-white border-b border-slate-200 py-6">
      <div class="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="flex items-center justify-center gap-3">
          <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-primary flex-shrink-0">
            <i data-lucide="truck" class="w-5 h-5"></i>
          </div>
          <div class="text-left">
            <h4 class="font-heading font-bold text-xs text-brand-secondary uppercase tracking-wider">Free Shipping</h4>
            <p class="text-[10px] text-slate-400 font-medium">On all orders over $99</p>
          </div>
        </div>
        <div class="flex items-center justify-center gap-3">
          <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-primary flex-shrink-0">
            <i data-lucide="refresh-cw" class="w-5 h-5"></i>
          </div>
          <div class="text-left">
            <h4 class="font-heading font-bold text-xs text-brand-secondary uppercase tracking-wider">30-Day Returns</h4>
            <p class="text-[10px] text-slate-400 font-medium">Risk-free trial period</p>
          </div>
        </div>
        <div class="flex items-center justify-center gap-3">
          <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-primary flex-shrink-0">
            <i data-lucide="shield-check" class="w-5 h-5"></i>
          </div>
          <div class="text-left">
            <h4 class="font-heading font-bold text-xs text-brand-secondary uppercase tracking-wider">Secure Payments</h4>
            <p class="text-[10px] text-slate-400 font-medium">100% encrypted checkout</p>
          </div>
        </div>
        <div class="flex items-center justify-center gap-3">
          <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-primary flex-shrink-0">
            <i data-lucide="sparkles" class="w-5 h-5"></i>
          </div>
          <div class="text-left">
            <h4 class="font-heading font-bold text-xs text-brand-secondary uppercase tracking-wider">Premium Materials</h4>
            <p class="text-[10px] text-slate-400 font-medium">100% verified materials</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Category Showcase -->
    <section class="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
      <div class="text-center max-w-lg mx-auto mb-10 md:mb-12">
        <h2 class="font-heading font-extrabold text-3xl text-brand-secondary">Explore Categories</h2>
        <p class="text-brand-body text-xs mt-2">Find the exact shoe build designed for your speed, terrain, lift, or everyday lifestyle.</p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-5">
        ${categoriesHtml}
      </div>
    </section>

    <!-- 4. Featured Products -->
    <section class="bg-slate-50 py-16 md:py-20 border-y border-slate-200">
      <div class="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-center justify-between mb-10 md:mb-12">
          <div class="text-center sm:text-left">
            <h2 class="font-heading font-extrabold text-3xl text-brand-secondary">Featured Products</h2>
            <p class="text-brand-body text-xs mt-2">Our top-selling products engineered for high performance comfort.</p>
          </div>
          <a href="#shop" class="text-brand-primary hover:text-blue-700 text-xs font-bold flex items-center gap-1 mt-4 sm:mt-0 transition-colors">
            Shop Full Catalog <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${featuredHtml}
        </div>
      </div>
    </section>

    <!-- 5. Why VELOXIS? -->
    <section class="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div class="bg-slate-100 rounded-3xl p-6 md:p-8 flex items-center justify-center border border-slate-200">
          <div class="w-full max-w-[340px] h-[280px] md:h-[340px] bg-white border border-slate-200/50 rounded-2xl flex items-center justify-center p-6 shadow-medium overflow-hidden">
            ${getShoeSvg('#0B63F6', '#14213D', '#A6FF00', '100%', '100%')}
          </div>
        </div>
        <div class="space-y-6">
          <h2 class="font-heading font-extrabold text-3xl text-brand-secondary">Why Choose VELOXIS?</h2>
          <p class="text-brand-body text-xs leading-relaxed">
            We merge anatomical research with advanced industrial materials to construct dynamic shoe designs that help athletes and weekend warriors alike move beyond standard biological boundaries.
          </p>
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-primary flex-shrink-0 mt-0.5">
                <i data-lucide="feather" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="font-heading font-bold text-slate-800 text-sm">Lightweight Comfort</h4>
                <p class="text-brand-body text-[11px] mt-0.5 leading-relaxed">Dual-layer breathable synthetic knits eliminate excessive fabric weight, preventing foot fatigue.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-lime-50 border border-lime-100 flex items-center justify-center text-brand-success flex-shrink-0 mt-0.5">
                <i data-lucide="activity" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="font-heading font-bold text-slate-800 text-sm">Precision Engineering</h4>
                <p class="text-brand-body text-[11px] mt-0.5 leading-relaxed">Flat-drop geometric shapes stability grids provide superior ankle support and leverage.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-brand-warning flex-shrink-0 mt-0.5">
                <i data-lucide="leaf" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="font-heading font-bold text-slate-800 text-sm">Sustainable Materials</h4>
                <p class="text-brand-body text-[11px] mt-0.5 leading-relaxed">Over 30% of each outsole uses upcycled synthetic compounds, matching performance with responsibility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Testimonials -->
    <section class="bg-slate-50 py-16 md:py-20 border-t border-slate-200">
      <div class="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div class="text-center max-w-lg mx-auto mb-10 md:mb-12">
          <h2 class="font-heading font-extrabold text-3xl text-brand-secondary">What Our Community Says</h2>
          <p class="text-brand-body text-xs mt-2">Hear directly from runners, gym enthusiasts, and lifestyle creators.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-light space-y-4">
            <div class="flex items-center gap-1 text-brand-warning">
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
            </div>
            <p class="text-xs text-brand-body leading-relaxed font-medium">
              "The Velocity Pro is a game-changer. My half-marathon split times decreased by almost 2 minutes. The responsiveness and spring-back is absolutely incredible!"
            </p>
            <div class="flex items-center gap-3 pt-3 border-t border-slate-100">
              <div class="w-10 h-10 rounded-full bg-blue-100 font-heading font-bold text-brand-primary flex items-center justify-center text-sm">
                MK
              </div>
              <div>
                <h4 class="font-heading font-bold text-slate-800 text-xs flex items-center gap-1.5">
                  Marcus K. <span class="bg-brand-primary/10 text-brand-primary text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase">Verified Buyer</span>
                </h4>
                <p class="text-slate-400 text-[10px] font-medium">Marathon Competitor</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-light space-y-4">
            <div class="flex items-center gap-1 text-brand-warning">
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
            </div>
            <p class="text-xs text-brand-body leading-relaxed font-medium">
              "As a cross-trainer, finding a shoe that is flat enough to squat heavy but flexible enough for box jumps is hard. The Force Trainer does both perfectly. Strongly recommend."
            </p>
            <div class="flex items-center gap-3 pt-3 border-t border-slate-100">
              <div class="w-10 h-10 rounded-full bg-indigo-100 font-heading font-bold text-indigo-700 flex items-center justify-center text-sm">
                SD
              </div>
              <div>
                <h4 class="font-heading font-bold text-slate-800 text-xs flex items-center gap-1.5">
                  Sarah D. <span class="bg-brand-primary/10 text-brand-primary text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase">Verified Buyer</span>
                </h4>
                <p class="text-slate-400 text-[10px] font-medium">HIIT Instructor</p>
              </div>
            </div>
          </div>

          <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-light space-y-4">
            <div class="flex items-center gap-1 text-brand-warning">
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
            </div>
            <p class="text-xs text-brand-body leading-relaxed font-medium">
              "Everyday Flow is my go-to college shoe. Incredibly easy to slip on, looks clean, and I can walk all day on campus without any soreness. Feels premium."
            </p>
            <div class="flex items-center gap-3 pt-3 border-t border-slate-100">
              <div class="w-10 h-10 rounded-full bg-lime-100 font-heading font-bold text-lime-700 flex items-center justify-center text-sm">
                AL
              </div>
              <div>
                <h4 class="font-heading font-bold text-slate-800 text-xs flex items-center gap-1.5">
                  Alex L. <span class="bg-brand-primary/10 text-brand-primary text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase">Verified Buyer</span>
                </h4>
                <p class="text-slate-400 text-[10px] font-medium">Student / Lifestyle Creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Closing CTA -->
    <section class="bg-brand-secondary text-white py-16 md:py-20 text-center border-t border-slate-850 relative overflow-hidden">
      <div class="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-brand-primary/10 blur-2xl"></div>
      <div class="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 space-y-6">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl leading-tight">Ready to Move Beyond Limits?</h2>
        <p class="text-slate-400 text-xs md:text-sm max-w-md mx-auto">Get your pair today and experience next-generation athletic comfort and foot stability.</p>
        <a href="#shop" class="inline-block bg-brand-primary hover:bg-blue-600 text-white font-bold py-3.5 px-8 rounded-full transition-colors shadow-lg">
          Shop Collection
        </a>
      </div>
    </section>
  `);
}

// 2. SHOP / PRODUCT LISTING VIEW (PLP)
function renderShopView() {
  const $container = $('#view-container');
  
  // Apply filtering logic in real-time
  const filtered = PRODUCTS.filter(p => {
    // Categories filter
    if (STATE.filters.categories.length > 0 && !STATE.filters.categories.includes(p.category)) return false;
    
    // Genders filter
    if (STATE.filters.genders.length > 0 && !STATE.filters.genders.includes(p.gender)) return false;
    
    // Sizes filter
    if (STATE.filters.sizes.length > 0 && !p.sizes.some(s => STATE.filters.sizes.includes(parseFloat(s)))) return false;
    
    // Colors filter
    if (STATE.filters.colors.length > 0 && !p.colors.some(c => STATE.filters.colors.includes(c.name))) return false;
    
    // Price range
    if (p.price < STATE.filters.priceRange[0] || p.price > STATE.filters.priceRange[1]) return false;
    
    // Live text search
    if (STATE.filters.search) {
      const q = STATE.filters.search.toLowerCase();
      if (!p.name.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) return false;
    }
    
    return true;
  });

  // Apply sorting
  if (STATE.filters.sort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (STATE.filters.sort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (STATE.filters.sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (STATE.filters.sort === 'newest') {
    filtered.sort((a, b) => b.id - a.id);
  }

  // Categories list checkboxes
  const categoriesList = ["Running", "Training", "Sneakers", "Hiking", "Basketball", "Football", "Lifestyle"];
  let catFiltersHtml = '';
  categoriesList.forEach(cat => {
    const checked = STATE.filters.categories.includes(cat) ? 'checked' : '';
    catFiltersHtml += `
      <label class="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-brand-secondary cursor-pointer">
        <input type="checkbox" class="shop-filter-category rounded border-slate-350 text-brand-primary focus:ring-brand-primary/50 w-4 h-4 cursor-pointer custom-checkbox" value="${cat}" ${checked}>
        <span>${cat}</span>
      </label>
    `;
  });

  // Size list grids
  const sizesList = [6, 7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13];
  let sizeFiltersHtml = '';
  sizesList.forEach(sz => {
    const active = STATE.filters.sizes.includes(sz) ? 'bg-brand-primary border-brand-primary text-white font-bold shadow-sm' : 'border-slate-200 text-slate-600 hover:border-slate-400 bg-white';
    sizeFiltersHtml += `
      <button class="shop-filter-size-btn border rounded-lg py-1.5 px-2 text-center text-xs font-bold transition-all focus:outline-none ${active}" data-size="${sz}">
        ${sz}
      </button>
    `;
  });

  // Color Swatches list
  const colorsList = [
    { name: "Electric Blue", hex: "#0B63F6" },
    { name: "Neon Volt", hex: "#A6FF00" },
    { name: "Deep Navy", hex: "#14213D" },
    { name: "Stealth Black", hex: "#101828" },
    { name: "Crimson Red", hex: "#DC2626" },
    { name: "Charcoal Gray", hex: "#475569" },
    { name: "White Platinum", hex: "#F8FAFC" }
  ];
  let colorFiltersHtml = '';
  colorsList.forEach(c => {
    const isSelected = STATE.filters.colors.includes(c.name);
    const activeRing = isSelected ? 'ring-2 ring-brand-primary ring-offset-2 scale-110' : 'hover:scale-105 border border-black/10';
    colorFiltersHtml += `
      <button class="w-6 h-6 rounded-full focus:outline-none transition-all flex-shrink-0 ${activeRing}" style="background-color: ${c.hex};" data-color="${c.name}" aria-label="Filter by color ${c.name}"></button>
    `;
  });

  // Render product grid cards
  let productsGridHtml = '';
  if (filtered.length === 0) {
    productsGridHtml = `
      <div class="col-span-full py-16 text-center bg-white border border-slate-200 rounded-2xl p-6">
        <i data-lucide="info" class="w-12 h-12 text-slate-300 mx-auto mb-3"></i>
        <h3 class="font-heading font-bold text-slate-800 text-base">No Shoes Found</h3>
        <p class="text-xs text-slate-400 mt-1 max-w-[280px] mx-auto">Try clearing your filters or widening your search criteria to discover items.</p>
        <button id="shop-clear-all-btn" class="mt-4 bg-brand-secondary hover:bg-brand-primary text-white text-xs font-bold py-2 px-6 rounded-full transition-colors">
          Clear All Filters
        </button>
      </div>
    `;
  } else {
    filtered.forEach(p => {
      const isWishlisted = STATE.wishlist.includes(p.id) ? 'text-brand-error fill-brand-error' : 'text-slate-400';
      const isCompared = STATE.compare.includes(p.id);
      
      productsGridHtml += `
        <article class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-light hover:shadow-medium transition-all duration-300 product-card relative group flex flex-col justify-between">
          <button class="absolute top-3.5 right-3.5 z-10 p-1.5 rounded-full bg-white/90 hover:bg-white text-slate-400 hover:text-brand-error shadow-sm border border-slate-100 transition-colors focus:outline-none" onclick="toggleWishlist(${p.id})" aria-label="Add to Wishlist">
            <i data-lucide="heart" class="wishlist-toggle w-3.5 h-3.5 ${isWishlisted}" data-id="${p.id}"></i>
          </button>
          
          <a href="#product?id=${p.id}" class="h-44 bg-slate-50 flex items-center justify-center p-5 relative overflow-hidden block">
            <div class="product-card-img-zoom w-full h-full flex items-center justify-center">
              ${getProductImage(p, 0, 'w-full h-full object-contain')}
            </div>
          </a>
          
          <div class="p-4 flex-grow flex flex-col justify-between border-t border-slate-100">
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[9px] font-bold text-brand-primary uppercase tracking-wider bg-brand-primary/10 rounded-full px-2 py-0.5">${p.category}</span>
                <div class="flex items-center text-xs font-semibold text-slate-500">
                  <i data-lucide="star" class="w-3.5 h-3.5 fill-brand-warning text-brand-warning mr-0.5"></i> ${p.rating}
                </div>
              </div>
              <a href="#product?id=${p.id}" class="hover:text-brand-primary transition-colors block">
                <h3 class="font-heading font-bold text-slate-900 text-sm md:text-base leading-tight truncate">${p.name}</h3>
              </a>
              <p class="text-[11px] text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">${p.description}</p>
            </div>
            
            <div class="mt-4">
              <div class="flex items-center justify-between">
                <span class="font-heading font-extrabold text-brand-secondary text-base">$${p.price.toFixed(2)}</span>
                <span class="text-[9px] text-brand-success font-semibold flex items-center gap-1">
                  <span class="w-1 h-1 rounded-full bg-brand-success"></span> In Stock
                </span>
              </div>
              
              <div class="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100">
                <button class="border border-slate-200 hover:border-slate-400 text-brand-secondary font-semibold py-1.5 rounded-full text-[10px] transition-colors flex items-center justify-center gap-1 focus:outline-none" onclick="openQuickView(${p.id})">
                  <i data-lucide="eye" class="w-3 h-3"></i> Quick View
                </button>
                <button class="bg-brand-secondary hover:bg-brand-primary text-white font-semibold py-1.5 rounded-full text-[10px] transition-colors flex items-center justify-center gap-1 shadow-sm focus:outline-none" onclick="addToCart(${p.id})">
                  <i data-lucide="shopping-bag" class="w-3 h-3"></i> Add
                </button>
              </div>

              <label class="flex items-center gap-1.5 mt-3.5 text-[9px] text-slate-400 font-semibold cursor-pointer select-none">
                <input type="checkbox" class="compare-toggle rounded border-slate-300 text-brand-primary focus:ring-brand-primary w-3 h-3 cursor-pointer custom-checkbox" data-id="${p.id}" ${isCompared ? 'checked' : ''} onchange="toggleCompare(${p.id})">
                <span>Add to compare</span>
              </label>
            </div>
          </div>
        </article>
      `;
    });
  }

  // Filters count
  let activeFiltersCount = 0;
  activeFiltersCount += STATE.filters.categories.length;
  activeFiltersCount += STATE.filters.genders.length;
  activeFiltersCount += STATE.filters.sizes.length;
  activeFiltersCount += STATE.filters.colors.length;
  if (STATE.filters.priceRange[0] > 50 || STATE.filters.priceRange[1] < 300) activeFiltersCount += 1;

  $container.html(`
    <div class="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-10">
      
      <!-- Top Title and Sort Bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
        <div>
          <h1 class="font-heading font-extrabold text-3xl text-brand-secondary">Shop All Shoes</h1>
          <p class="text-brand-body text-xs mt-1">Showing ${filtered.length} of ${PRODUCTS.length} premium models.</p>
        </div>
        <div class="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          
          <!-- Mobile Filter Trigger -->
          <button id="mobile-filter-trigger" class="md:hidden flex items-center gap-2 border border-slate-200 bg-white py-2 px-4 rounded-full text-xs font-semibold text-slate-700 focus:outline-none">
            <i data-lucide="sliders-horizontal" class="w-4 h-4"></i> Filters ${activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}
          </button>
          
          <div class="flex items-center gap-2">
            <label for="shop-sort" class="text-xs text-slate-500 font-semibold whitespace-nowrap">Sort by</label>
            <select id="shop-sort" class="bg-white border border-slate-200 rounded-full py-1.5 px-4 text-xs font-semibold text-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary">
              <option value="popular" ${STATE.filters.sort === 'popular' ? 'selected' : ''}>Popularity</option>
              <option value="newest" ${STATE.filters.sort === 'newest' ? 'selected' : ''}>New Arrivals</option>
              <option value="price-low" ${STATE.filters.sort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-high" ${STATE.filters.sort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating" ${STATE.filters.sort === 'rating' ? 'selected' : ''}>Customer Rating</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Main Layout -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <!-- Left Sidebar Filter (Hidden on Mobile) -->
        <aside id="shop-sidebar-filters" class="hidden md:block col-span-1 space-y-6 bg-white border border-slate-200 p-5 rounded-2xl h-fit shadow-light">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 class="font-heading font-bold text-brand-secondary text-sm flex items-center gap-1.5"><i data-lucide="sliders-horizontal" class="w-4 h-4 text-brand-primary"></i> Filters</h3>
            ${activeFiltersCount > 0 ? `<button id="sidebar-clear-all" class="text-[10px] text-slate-400 hover:text-brand-primary font-bold hover:underline">Clear All (${activeFiltersCount})</button>` : ''}
          </div>

          <!-- Categories Filter -->
          <div>
            <h4 class="font-heading font-bold text-xs uppercase tracking-wider text-slate-800 mb-3">Category</h4>
            <div class="flex flex-col space-y-2">
              ${catFiltersHtml}
            </div>
          </div>

          <!-- Price Range Filter -->
          <div class="border-t border-slate-100 pt-4">
            <div class="flex justify-between items-center mb-3">
              <h4 class="font-heading font-bold text-xs uppercase tracking-wider text-slate-800">Price</h4>
              <span class="text-[11px] font-bold text-brand-primary" id="price-range-label">$${STATE.filters.priceRange[0]} - $${STATE.filters.priceRange[1]}</span>
            </div>
            <div class="px-1">
              <input type="range" min="50" max="300" step="10" value="${STATE.filters.priceRange[1]}" id="price-range-slider" class="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary focus:outline-none">
              <div class="flex justify-between text-[9px] text-slate-400 font-semibold mt-1.5">
                <span>$50</span>
                <span>$300</span>
              </div>
            </div>
          </div>

          <!-- Color Swatches Filter -->
          <div class="border-t border-slate-100 pt-4">
            <h4 class="font-heading font-bold text-xs uppercase tracking-wider text-slate-800 mb-3">Colors</h4>
            <div class="flex flex-wrap gap-2">
              ${colorFiltersHtml}
            </div>
          </div>

          <!-- Size Filter -->
          <div class="border-t border-slate-100 pt-4">
            <h4 class="font-heading font-bold text-xs uppercase tracking-wider text-slate-800 mb-3">Select Size</h4>
            <div class="grid grid-cols-4 gap-2">
              ${sizeFiltersHtml}
            </div>
          </div>

          <!-- Gender Filter -->
          <div class="border-t border-slate-100 pt-4">
            <h4 class="font-heading font-bold text-xs uppercase tracking-wider text-slate-800 mb-3">Gender</h4>
            <div class="flex flex-col space-y-2">
              ${["Men's", "Women's", "Unisex"].map(gen => {
                const checked = STATE.filters.genders.includes(gen) ? 'checked' : '';
                return `
                  <label class="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-brand-secondary cursor-pointer">
                    <input type="checkbox" class="shop-filter-gender rounded border-slate-350 text-brand-primary w-4 h-4 cursor-pointer custom-checkbox" value="${gen}" ${checked}>
                    <span>${gen}</span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        </aside>

        <!-- Right Side Product Grid -->
        <section class="col-span-1 md:col-span-3">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${productsGridHtml}
          </div>
          
          <!-- Pagination -->
          ${filtered.length > 0 ? `
          <div class="flex items-center justify-between border-t border-slate-200 mt-12 pt-6">
            <button class="border border-slate-200 hover:border-slate-300 text-slate-500 font-semibold py-2 px-4 rounded-full text-xs transition-colors flex items-center gap-1.5 focus:outline-none" disabled>
              <i data-lucide="chevron-left" class="w-4 h-4"></i> Previous
            </button>
            <div class="flex items-center gap-1">
              <button class="bg-brand-primary text-white font-bold w-8 h-8 rounded-full text-xs shadow-sm">1</button>
              <button class="border border-transparent hover:border-slate-200 text-slate-600 font-semibold w-8 h-8 rounded-full text-xs transition-colors">2</button>
            </div>
            <button class="border border-slate-200 hover:border-slate-300 text-slate-600 font-semibold py-2 px-4 rounded-full text-xs transition-colors flex items-center gap-1.5 focus:outline-none">
              Next <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
          </div>
          ` : ''}
        </section>

      </div>
    </div>

    <!-- Mobile Filter Slide-over Menu -->
    <div id="mobile-filter-drawer" class="fixed inset-0 z-50 hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-black/40 backdrop-blur-sm" id="mobile-filter-backdrop"></div>
      <div class="fixed inset-y-0 right-0 w-[280px] bg-white shadow-large p-6 flex flex-col justify-between transform translate-x-full transition-transform duration-300 z-50 animate-slide-in-right" id="mobile-filter-content">
        <div class="overflow-y-auto pr-1 flex-grow">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
            <h3 class="font-heading font-bold text-brand-secondary text-sm">Filters</h3>
            <button id="mobile-filter-close" class="p-1 rounded-full text-slate-500 hover:bg-slate-100">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>
          <!-- Filters inside scrollable area (cloned visually) -->
          <div class="space-y-6" id="mobile-filters-append"></div>
        </div>
        <div class="border-t border-slate-100 pt-4 mt-4 grid grid-cols-2 gap-2 bg-white">
          <button id="mobile-filter-clear-all-btn" class="border border-slate-200 py-2.5 rounded-full text-xs font-semibold text-brand-secondary">Reset</button>
          <button id="mobile-filter-apply-btn" class="bg-brand-secondary text-white py-2.5 rounded-full text-xs font-bold shadow-md">Apply Filters</button>
        </div>
      </div>
    </div>
  `);

  lucide.createIcons();

  // Setup Interaction Hooks in PLP
  // Category change listener
  $('.shop-filter-category').on('change', function() {
    const val = $(this).val();
    if ($(this).is(':checked')) {
      STATE.filters.categories.push(val);
    } else {
      STATE.filters.categories = STATE.filters.categories.filter(c => c !== val);
    }
    renderShopView();
  });

  // Size buttons listener
  $('.shop-filter-size-btn').on('click', function() {
    const val = parseFloat($(this).data('size'));
    const index = STATE.filters.sizes.indexOf(val);
    if (index === -1) {
      STATE.filters.sizes.push(val);
    } else {
      STATE.filters.sizes.splice(index, 1);
    }
    renderShopView();
  });

  // Color Swatch buttons listener
  $('button[data-color]').on('click', function() {
    const colName = $(this).data('color');
    const index = STATE.filters.colors.indexOf(colName);
    if (index === -1) {
      STATE.filters.colors.push(colName);
    } else {
      STATE.filters.colors.splice(index, 1);
    }
    renderShopView();
  });

  // Price range slider
  $('#price-range-slider').on('input', function() {
    const maxVal = parseFloat($(this).val());
    STATE.filters.priceRange[1] = maxVal;
    $('#price-range-label').text(`$50 - $${maxVal}`);
  }).on('change', function() {
    renderShopView();
  });

  // Gender filters
  $('.shop-filter-gender').on('change', function() {
    const val = $(this).val();
    if ($(this).is(':checked')) {
      STATE.filters.genders.push(val);
    } else {
      STATE.filters.genders = STATE.filters.genders.filter(g => g !== val);
    }
    renderShopView();
  });

  // Sorting
  $('#shop-sort').on('change', function() {
    STATE.filters.sort = $(this).val();
    renderShopView();
  });

  // Clear button actions
  $('#sidebar-clear-all, #shop-clear-all-btn, #mobile-filter-clear-all-btn').on('click', function() {
    STATE.filters.categories = [];
    STATE.filters.genders = [];
    STATE.filters.sizes = [];
    STATE.filters.colors = [];
    STATE.filters.priceRange = [50, 300];
    STATE.filters.search = '';
    renderShopView();
  });

  // Mobile drawer controls
  $('#mobile-filter-trigger').on('click', function() {
    // Clone filters to mobile side
    const $asideContent = $('#shop-sidebar-filters').html();
    $('#mobile-filters-append').html($asideContent);
    $('#mobile-filter-drawer').removeClass('hidden');
    setTimeout(() => {
      $('#mobile-filter-backdrop').removeClass('opacity-0');
      $('#mobile-filter-content').removeClass('translate-x-full');
    }, 10);
    lucide.createIcons();
    
    // Bind listeners inside mobile drawer
    $('.shop-filter-category').off().on('change', function() {
      const val = $(this).val();
      if ($(this).is(':checked')) {
        STATE.filters.categories.push(val);
      } else {
        STATE.filters.categories = STATE.filters.categories.filter(c => c !== val);
      }
    });

    $('.shop-filter-size-btn').off().on('click', function() {
      const val = parseFloat($(this).data('size'));
      const index = STATE.filters.sizes.indexOf(val);
      if (index === -1) {
        STATE.filters.sizes.push(val);
      } else {
        STATE.filters.sizes.splice(index, 1);
      }
      $(this).toggleClass('bg-brand-primary border-brand-primary text-white font-bold bg-white text-slate-600');
    });

    $('button[data-color]').off().on('click', function() {
      const colName = $(this).data('color');
      const index = STATE.filters.colors.indexOf(colName);
      if (index === -1) {
        STATE.filters.colors.push(colName);
      } else {
        STATE.filters.colors.splice(index, 1);
      }
      $(this).toggleClass('ring-2 ring-brand-primary ring-offset-2 scale-110');
    });

    $('#price-range-slider').off().on('input', function() {
      const maxVal = parseFloat($(this).val());
      STATE.filters.priceRange[1] = maxVal;
      $('#price-range-label').text(`$50 - $${maxVal}`);
    });

    $('.shop-filter-gender').off().on('change', function() {
      const val = $(this).val();
      if ($(this).is(':checked')) {
        STATE.filters.genders.push(val);
      } else {
        STATE.filters.genders = STATE.filters.genders.filter(g => g !== val);
      }
    });
  });

  $('#mobile-filter-close, #mobile-filter-apply-btn, #mobile-filter-backdrop').on('click', function() {
    $('#mobile-filter-backdrop').addClass('opacity-0');
    $('#mobile-filter-content').addClass('translate-x-full');
    setTimeout(() => {
      $('#mobile-filter-drawer').addClass('hidden');
      renderShopView();
    }, 300);
  });
}

// 3. PRODUCT DETAIL VIEW (PDP)
function renderProductDetailView(productId) {
  const $container = $('#view-container');
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) {
    $container.html(`<div class="py-20 text-center">Product not found. <a href="#shop" class="text-brand-primary font-bold">Go to shop</a></div>`);
    return;
  }

  // Setup default dynamic sub-state if not present
  if (STATE.currentProductIndex >= product.colors.length) {
    STATE.currentProductIndex = 0;
  }
  const colorObj = product.colors[STATE.currentProductIndex];

  // Colors list swatches
  let colorsHtml = '';
  product.colors.forEach((col, idx) => {
    const isSelected = idx === STATE.currentProductIndex ? 'ring-2 ring-brand-primary ring-offset-2 scale-105' : 'hover:scale-105 border border-black/10';
    colorsHtml += `
      <button class="w-8 h-8 rounded-full focus:outline-none transition-all ${isSelected}" style="background-color: ${col.hex};" onclick="changePdpColor(${product.id}, ${idx})" aria-label="Select color ${col.name}"></button>
    `;
  });

  // Size grid selectors
  let sizesHtml = '';
  product.sizes.forEach((sz, idx) => {
    const isSelected = idx === Math.floor(product.sizes.length / 2) ? 'border-brand-primary bg-brand-primary/5 text-brand-primary font-extrabold shadow-sm' : 'border-slate-200 text-slate-700 hover:border-slate-400 bg-white';
    sizesHtml += `
      <button class="pdp-size-btn border rounded-xl py-2 px-3 text-center text-xs font-bold transition-all focus:outline-none ${isSelected}" data-size="${sz}">
        ${sz}
      </button>
    `;
  });

  // Width selector
  let widthsHtml = '';
  product.widths.forEach((wd, idx) => {
    const isSelected = idx === 0 ? 'bg-brand-secondary text-white font-semibold' : 'bg-slate-100 hover:bg-slate-200 text-slate-700';
    widthsHtml += `
      <button class="pdp-width-btn py-2 px-5 rounded-full text-xs font-semibold transition-all focus:outline-none ${isSelected}" data-width="${wd}">
        ${wd}
      </button>
    `;
  });

  // Related products (4 items from same category or fallback)
  let relatedHtml = '';
  const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  const displayRelated = related.length > 0 ? related : PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);
  
  displayRelated.forEach(p => {
    relatedHtml += `
      <article class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-light hover:shadow-medium transition-all duration-300 product-card relative group flex flex-col justify-between">
        <a href="#product?id=${p.id}" class="h-44 bg-slate-50 flex items-center justify-center p-5 relative overflow-hidden block">
          <div class="product-card-img-zoom w-full h-full flex items-center justify-center">
            ${getProductImage(p, 0, 'w-full h-full object-contain')}
          </div>
        </a>
        <div class="p-4 border-t border-slate-100">
          <div class="flex justify-between items-center mb-1">
            <span class="text-[9px] font-bold text-brand-primary uppercase tracking-wider bg-brand-primary/10 rounded-full px-2 py-0.5">${p.category}</span>
            <span class="text-xs text-slate-500 font-semibold flex items-center"><i data-lucide="star" class="w-3.5 h-3.5 fill-brand-warning text-brand-warning mr-0.5"></i> ${p.rating}</span>
          </div>
          <a href="#product?id=${p.id}" class="hover:text-brand-primary transition-colors block">
            <h4 class="font-heading font-bold text-slate-900 text-sm truncate">${p.name}</h4>
          </a>
          <div class="flex items-center justify-between mt-3">
            <span class="font-heading font-extrabold text-brand-secondary text-sm">$${p.price.toFixed(2)}</span>
            <button class="bg-brand-secondary hover:bg-brand-primary text-white text-[10px] font-bold py-1 px-3 rounded-full transition-colors flex items-center gap-1 shadow-sm" onclick="addToCart(${p.id})">
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    `;
  });

  // Recently Viewed
  let recentlyHtml = '';
  const recentIds = STATE.recentlyViewed.filter(id => id !== product.id).slice(0, 4);
  if (recentIds.length > 0) {
    recentIds.forEach(id => {
      const p = PRODUCTS.find(prod => prod.id === id);
      if (!p) return;
      recentlyHtml += `
        <a href="#product?id=${p.id}" class="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-brand-primary hover:shadow-light transition-all flex-shrink-0 min-w-[200px]">
          <div class="w-12 h-12 bg-slate-50 border border-slate-150 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 p-1">
            ${getProductImage(p, 0)}
          </div>
          <div class="min-w-0">
            <h4 class="font-heading font-bold text-xs text-brand-secondary truncate">${p.name}</h4>
            <p class="text-[10px] text-brand-primary font-extrabold mt-0.5">$${p.price.toFixed(2)}</p>
          </div>
        </a>
      `;
    });
  }

  $container.html(`
    <div class="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-10">
      
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-xs text-slate-400 mb-8" aria-label="Breadcrumb">
        <a href="#home" class="hover:text-brand-secondary">Home</a>
        <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        <a href="#shop" class="hover:text-brand-secondary">Shop</a>
        <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        <a href="#shop?category=${product.category}" class="hover:text-brand-secondary">${product.category}</a>
        <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        <span class="text-slate-600 font-bold">${product.name}</span>
      </nav>

      <!-- Grid Detail Container -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 lg:p-10 shadow-light">
        
        <!-- Left: Product Gallery -->
        <div class="space-y-6">
          <div id="pdp-main-img-frame" class="w-full h-[320px] md:h-[400px] bg-slate-50 border border-slate-150 rounded-2xl overflow-hidden flex items-center justify-center p-8 relative">
            <div class="w-full h-full flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-zoom-in" id="pdp-zoom-img">
              ${getProductImage(product, STATE.currentProductIndex, 'w-full h-full object-contain')}
            </div>
            
            <!-- Edition badge -->
            ${product.edition === "Limited Edition" ? `
              <span class="absolute top-4 left-4 bg-brand-secondary text-brand-accent text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1 border border-brand-accent/20">
                <i data-lucide="sparkles" class="w-3 h-3 fill-brand-accent"></i> Limited Edition
              </span>
            ` : ''}
          </div>

          <!-- Color thumbnails angles/gallery list -->
          <div class="flex items-center gap-3 justify-center">
            ${product.colors.map((c, i) => `
              <button class="w-16 h-16 bg-white border ${i === STATE.currentProductIndex ? 'border-brand-primary shadow-sm scale-105' : 'border-slate-200'} hover:border-slate-400 rounded-xl overflow-hidden p-1.5 flex items-center justify-center focus:outline-none transition-all" onclick="changePdpColor(${product.id}, ${i})">
                ${getProductImage(product, i, 'w-full h-full object-contain')}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Right: Meta Information -->
        <div class="flex flex-col justify-between">
          <div class="space-y-5">
            <div>
              <span class="text-[10px] font-extrabold text-brand-primary uppercase tracking-wider bg-brand-primary/10 rounded-full px-2.5 py-1 inline-block mb-3">${product.category}</span>
              <h1 class="font-heading font-extrabold text-3xl lg:text-4xl text-brand-secondary tracking-tight leading-tight">${product.name}</h1>
              <div class="flex items-center gap-2 mt-2 text-slate-500 text-xs">
                <div class="flex text-brand-warning">
                  ${Array.from({ length: 5 }).map((_, i) => `<i data-lucide="star" class="w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}"></i>`).join('')}
                </div>
                <span class="font-bold text-brand-secondary ml-1">${product.rating}</span>
                <span>(${product.reviewsCount} verified reviews)</span>
              </div>
            </div>

            <div class="flex items-baseline gap-3 border-y border-slate-100 py-4">
              <span class="font-heading font-extrabold text-brand-primary text-3xl">$${product.price.toFixed(2)}</span>
              <span class="text-xs text-brand-body font-semibold">Free shipping &amp; local taxes included</span>
            </div>

            <p class="text-xs text-brand-body leading-relaxed">${product.description}</p>
            
            <!-- Bullet Benefits -->
            <ul class="space-y-2 text-xs font-semibold text-brand-secondary bg-slate-50 p-4 rounded-2xl border border-slate-150/40">
              ${product.benefits.map(b => `
                <li class="flex items-start gap-2">
                  <i data-lucide="check" class="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5"></i>
                  <span>${b}</span>
                </li>
              `).join('')}
            </ul>

            <!-- Selection Variables -->
            <div class="space-y-5 pt-3">
              <!-- Color swatch choice -->
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-slate-700">Select Color</span>
                  <span class="text-xs font-extrabold text-brand-primary" id="pdp-selected-color-name">${colorObj.name}</span>
                </div>
                <div class="flex items-center gap-3">
                  ${colorsHtml}
                </div>
              </div>

              <!-- Width select -->
              <div>
                <span class="text-xs font-bold text-slate-700 block mb-2">Select Width</span>
                <div class="flex items-center gap-2.5">
                  ${widthsHtml}
                </div>
              </div>

              <!-- Sizes list -->
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-xs font-bold text-slate-700">Select Size (US Men's)</span>
                  <button class="text-[10px] text-brand-primary hover:underline font-bold" onclick="showToast('US Athletic Sizes: True to size fit.', 'info')">Size Guide</button>
                </div>
                <div class="grid grid-cols-6 gap-2" id="pdp-sizes-container">
                  ${sizesHtml}
                </div>
              </div>
            </div>
          </div>

          <!-- Checkout actions -->
          <div class="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
            
            <!-- Quantity Stepper -->
            <div class="flex items-center border border-slate-200 rounded-full py-2.5 px-4 bg-white justify-between w-full sm:w-32 flex-shrink-0">
              <button class="text-slate-400 hover:text-slate-600 p-0.5 focus:outline-none" id="pdp-qty-minus">
                <i data-lucide="minus" class="w-4 h-4"></i>
              </button>
              <span class="text-sm font-bold text-brand-secondary px-3" id="pdp-qty-label">1</span>
              <button class="text-slate-400 hover:text-slate-600 p-0.5 focus:outline-none" id="pdp-qty-plus">
                <i data-lucide="plus" class="w-4 h-4"></i>
              </button>
            </div>

            <!-- Big Add to Cart Button -->
            <button id="pdp-add-to-cart-btn" class="w-full bg-brand-secondary hover:bg-brand-primary text-white font-extrabold py-3 px-8 rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-md focus:outline-none">
              <i data-lucide="shopping-bag" class="w-4.5 h-4.5"></i> Add variant to cart
            </button>
            
            <!-- Wishlist Button -->
            <button class="p-3 border border-slate-200 rounded-full hover:border-slate-400 text-slate-400 hover:text-brand-error focus:outline-none transition-colors" onclick="toggleWishlist(${product.id})" aria-label="Add to Wishlist">
              <i data-lucide="heart" class="w-5 h-5 ${STATE.wishlist.includes(product.id) ? 'text-brand-error fill-brand-error' : ''}"></i>
            </button>
          </div>

        </div>
      </div>

      <!-- Specifications Accordion Section -->
      <section class="mt-12 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-light max-w-4xl">
        <h3 class="font-heading font-bold text-brand-secondary text-lg mb-6 border-b border-slate-100 pb-3">Product details</h3>
        
        <div class="space-y-4">
          <!-- Accordion 1: Technical Specs -->
          <div class="border border-slate-200 rounded-xl overflow-hidden">
            <button class="w-full text-left p-4 font-heading font-bold text-slate-800 text-sm flex justify-between items-center focus:outline-none bg-slate-50 hover:bg-slate-100/50 transition-colors" onclick="$(this).next().slideToggle(200); $(this).find('.arrow-icon').toggleClass('rotate-180')">
              Specifications &amp; Performance Metrics
              <i data-lucide="chevron-down" class="arrow-icon w-4 h-4 transition-transform duration-200"></i>
            </button>
            <div class="p-4 text-xs text-slate-600 space-y-2.5 hidden">
              <div class="grid grid-cols-2 py-1 border-b border-slate-50"><span class="font-bold text-slate-700">Cushioning Level:</span><span>${product.specs.cushioning}</span></div>
              <div class="grid grid-cols-2 py-1 border-b border-slate-50"><span class="font-bold text-slate-700">Average Weight:</span><span>${product.specs.weight}</span></div>
              <div class="grid grid-cols-2 py-1 border-b border-slate-50"><span class="font-bold text-slate-700">Upper mesh:</span><span>${product.specs.upper}</span></div>
              <div class="grid grid-cols-2 py-1 border-b border-slate-50"><span class="font-bold text-slate-700">Outsole Compound:</span><span>${product.specs.sole}</span></div>
              <div class="grid grid-cols-2 py-1"><span class="font-bold text-slate-700">Official Warranty:</span><span>${product.specs.warranty}</span></div>
            </div>
          </div>

          <!-- Accordion 2: Materials -->
          <div class="border border-slate-200 rounded-xl overflow-hidden">
            <button class="w-full text-left p-4 font-heading font-bold text-slate-800 text-sm flex justify-between items-center focus:outline-none bg-slate-50 hover:bg-slate-100/50 transition-colors" onclick="$(this).next().slideToggle(200); $(this).find('.arrow-icon').toggleClass('rotate-180')">
              Sustainability &amp; Materials
              <i data-lucide="chevron-down" class="arrow-icon w-4 h-4 transition-transform duration-200"></i>
            </button>
            <div class="p-4 text-xs text-slate-600 leading-relaxed hidden space-y-2">
              <p>VELOXIS is committed to reducing environmental impact. This shoe uses premium water-solvent synthetic leather and 30% recycled post-consumer synthetics on the sole plate.</p>
              <p>Packaged in 100% recycled structural cardboard boxes with plant-based ink labels.</p>
            </div>
          </div>

          <!-- Accordion 3: Shipping -->
          <div class="border border-slate-200 rounded-xl overflow-hidden">
            <button class="w-full text-left p-4 font-heading font-bold text-slate-800 text-sm flex justify-between items-center focus:outline-none bg-slate-50 hover:bg-slate-100/50 transition-colors" onclick="$(this).next().slideToggle(200); $(this).find('.arrow-icon').toggleClass('rotate-180')">
              Free Shipping &amp; 30-Day Returns Policy
              <i data-lucide="chevron-down" class="arrow-icon w-4 h-4 transition-transform duration-200"></i>
            </button>
            <div class="p-4 text-xs text-slate-600 leading-relaxed hidden space-y-2">
              <p>We provide complimentary secure ground shipping across all locations for orders above $99. Fast delivery estimates are 2 to 3 business days.</p>
              <p>If you're not entirely satisfied with your fit, return them in original box packing within 30 days for a complete refunds transfer.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Customer Reviews List -->
      <section class="mt-12 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-light max-w-4xl">
        <div class="flex items-center justify-between border-b border-slate-150 pb-4 mb-6">
          <h3 class="font-heading font-bold text-brand-secondary text-lg">Verified Customer Reviews</h3>
          <button class="bg-brand-primary text-white text-xs font-bold py-2 px-5 rounded-full hover:bg-blue-600 transition-colors" onclick="showToast('Write review window: Thank you for shopping!', 'info')">Write Review</button>
        </div>

        <div class="space-y-6">
          <div class="border-b border-slate-100 pb-5">
            <div class="flex justify-between items-center">
              <span class="text-xs font-bold text-slate-800 flex items-center gap-1.5">M. Ross <span class="bg-brand-primary/10 text-brand-primary text-[8px] font-bold px-2 py-0.5 rounded-full uppercase">Verified Purchase</span></span>
              <span class="text-[10px] text-slate-400">June 24, 2026</span>
            </div>
            <div class="flex text-brand-warning mt-1 mb-2">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
            </div>
            <p class="text-xs text-brand-body leading-relaxed">"Sizing fits exactly right. Incredible spring and bounce. The electric blue color is very vibrant and clean."</p>
          </div>

          <div class="border-b border-slate-100 pb-5">
            <div class="flex justify-between items-center">
              <span class="text-xs font-bold text-slate-800 flex items-center gap-1.5">Jane S. <span class="bg-brand-primary/10 text-brand-primary text-[8px] font-bold px-2 py-0.5 rounded-full uppercase">Verified Purchase</span></span>
              <span class="text-[10px] text-slate-400">May 18, 2026</span>
            </div>
            <div class="flex text-brand-warning mt-1 mb-2">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              <i data-lucide="star" class="w-3.5 h-3.5"></i>
            </div>
            <p class="text-xs text-brand-body leading-relaxed">"The cushion thickness is perfect for daily high milage runs. Breathability is good, though water might seep in light rain due to thin mesh."</p>
          </div>
        </div>
      </section>

      <!-- Related Products Showcase -->
      <section class="mt-16">
        <h3 class="font-heading font-extrabold text-2xl text-brand-secondary mb-8">Related Collection</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${relatedHtml}
        </div>
      </section>

      <!-- Recently Viewed Section -->
      ${recentlyHtml ? `
      <section class="mt-16 border-t border-slate-200 pt-12">
        <h3 class="font-heading font-extrabold text-lg text-brand-secondary mb-6">Recently Viewed</h3>
        <div class="flex items-center gap-4 overflow-x-auto pb-4 scroll-smooth">
          ${recentlyHtml}
        </div>
      </section>
      ` : ''}

    </div>
  `);

  lucide.createIcons();

  // Setup click bindings for size selections
  $('.pdp-size-btn').on('click', function() {
    $('.pdp-size-btn').removeClass('border-brand-primary bg-brand-primary/5 text-brand-primary font-extrabold shadow-sm').addClass('border-slate-200 text-slate-700 hover:border-slate-400 bg-white');
    $(this).addClass('border-brand-primary bg-brand-primary/5 text-brand-primary font-extrabold shadow-sm').removeClass('border-slate-200 text-slate-700 hover:border-slate-400 bg-white');
  });

  // Width selection
  $('.pdp-width-btn').on('click', function() {
    $('.pdp-width-btn').removeClass('bg-brand-secondary text-white font-semibold').addClass('bg-slate-100 hover:bg-slate-200 text-slate-700');
    $(this).addClass('bg-brand-secondary text-white font-semibold').removeClass('bg-slate-100 hover:bg-slate-200 text-slate-700');
  });

  // Quantity control stepper
  let currentQty = 1;
  $('#pdp-qty-plus').on('click', function() {
    currentQty += 1;
    $('#pdp-qty-label').text(currentQty);
  });

  $('#pdp-qty-minus').on('click', function() {
    if (currentQty > 1) {
      currentQty -= 1;
      $('#pdp-qty-label').text(currentQty);
    }
  });

  // Add to Cart click binder
  $('#pdp-add-to-cart-btn').on('click', function() {
    const selectedSize = $('.pdp-size-btn.border-brand-primary').data('size');
    const selectedWidth = $('.pdp-width-btn.bg-brand-secondary').data('width');
    const selectedColorName = $('#pdp-selected-color-name').text();
    
    addToCart(product.id, currentQty, selectedColorName, selectedSize, selectedWidth);
    
    // Reset stepper
    currentQty = 1;
    $('#pdp-qty-label').text(1);
  });
}

function changePdpColor(productId, colorIdx) {
  STATE.currentProductIndex = colorIdx;
  renderProductDetailView(productId);
}

// 4. CART VIEW
function renderCartView() {
  const $container = $('#view-container');

  if (STATE.cart.length === 0) {
    $container.html(`
      <div class="max-w-[1200px] mx-auto px-4 py-20 text-center">
        <div class="max-w-md mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-light space-y-6">
          <div class="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
            <i data-lucide="shopping-bag" class="w-8 h-8"></i>
          </div>
          <div>
            <h1 class="font-heading font-extrabold text-2xl text-brand-secondary">Your Cart is Empty</h1>
            <p class="text-xs text-slate-400 mt-2">Looks like you haven't added any sports shoes to your shopping list yet.</p>
          </div>
          <a href="#shop" class="inline-block bg-brand-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-xs transition-colors shadow-md">
            Start Shopping
          </a>
        </div>
      </div>
    `);
    lucide.createIcons();
    return;
  }

  let cartListHtml = '';
  let subtotal = 0;

  STATE.cart.forEach((item, index) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return;
    const itemTotal = product.price * item.quantity;
    subtotal += itemTotal;
    
    const colorObj = product.colors.find(c => c.name === item.color) || product.colors[0];

    cartListHtml += `
      <div class="flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-5 border-b border-slate-100 last:border-0">
        <!-- Image -->
        <div class="w-24 h-24 bg-slate-50 border border-slate-150 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0 p-2">
          ${getProductImage(product, product.colors.indexOf(colorObj), 'w-full h-full object-contain')}
        </div>
        
        <!-- Info -->
        <div class="flex-grow text-center sm:text-left min-w-0">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <a href="#product?id=${product.id}" class="hover:text-brand-primary transition-colors">
              <h3 class="font-heading font-extrabold text-slate-900 text-base leading-tight truncate">${product.name}</h3>
            </a>
            <span class="font-heading font-extrabold text-brand-secondary text-base">$${itemTotal.toFixed(2)}</span>
          </div>
          <p class="text-xs text-slate-400 mt-1">${item.size} / ${item.width} / ${item.color}</p>
          
          <div class="flex items-center justify-between mt-4">
            <!-- Stepper -->
            <div class="flex items-center border border-slate-200 rounded-full py-1 px-3 bg-white">
              <button class="text-slate-400 hover:text-slate-600 p-0.5 focus:outline-none animate-all-200" onclick="updateCartQuantity(${index}, ${item.quantity - 1})">
                <i data-lucide="minus" class="w-3.5 h-3.5"></i>
              </button>
              <span class="text-xs font-bold px-3 text-brand-secondary">${item.quantity}</span>
              <button class="text-slate-400 hover:text-slate-600 p-0.5 focus:outline-none animate-all-200" onclick="updateCartQuantity(${index}, ${item.quantity + 1})">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              </button>
            </div>
            
            <div class="flex items-center gap-4">
              <button class="text-xs text-slate-400 hover:text-brand-error transition-colors flex items-center gap-1 focus:outline-none" onclick="updateCartQuantity(${index}, 0)">
                <i data-lucide="trash-2" class="w-4 h-4"></i> Remove
              </button>
              <button class="text-xs text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-1 focus:outline-none" onclick="toggleWishlist(${product.id}); updateCartQuantity(${index}, 0)">
                <i data-lucide="heart" class="w-4 h-4"></i> Save
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  $container.html(`
    <div class="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-10">
      <h1 class="font-heading font-extrabold text-3xl text-brand-secondary mb-8">Shopping Cart</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Cart Items List -->
        <div class="lg:col-span-2 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-light divide-y divide-slate-100">
          <div class="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <span class="text-xs font-bold text-slate-700 flex items-center gap-1.5"><i data-lucide="shopping-bag" class="w-4 h-4 text-brand-primary"></i> ${STATE.cart.length} unique designs selected</span>
            <a href="#shop" class="text-xs text-brand-primary hover:underline font-bold">Continue Shopping</a>
          </div>
          
          <div class="divide-y divide-slate-150/40">
            ${cartListHtml}
          </div>
        </div>

        <!-- Order Summary Card -->
        <div class="lg:col-span-1 bg-white border border-slate-200 rounded-3xl p-6 shadow-light h-fit space-y-6">
          <h3 class="font-heading font-bold text-brand-secondary text-base border-b border-slate-100 pb-3">Order Summary</h3>
          
          <div class="space-y-3.5 text-xs font-semibold">
            <div class="flex justify-between text-slate-500">
              <span>Subtotal</span>
              <span class="text-brand-secondary">$${subtotal.toFixed(2)}</span>
            </div>
            <div class="flex justify-between text-slate-500">
              <span>Shipping</span>
              <span class="text-brand-success">Free Delivery</span>
            </div>
            <div class="flex justify-between text-slate-500">
              <span>Estimated Tax (8%)</span>
              <span class="text-brand-secondary">$${tax.toFixed(2)}</span>
            </div>
            <div class="flex justify-between border-t border-slate-100 pt-4 text-sm font-extrabold text-brand-secondary">
              <span>Total Price</span>
              <span class="text-brand-primary text-lg">$${total.toFixed(2)}</span>
            </div>
          </div>

          <!-- Checkout actions -->
          <div class="space-y-3 pt-3">
            <a href="#checkout" class="w-full text-center bg-brand-secondary hover:bg-brand-primary text-white font-extrabold py-3 rounded-full text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md">
              Proceed to Checkout <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
            
            <p class="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
              <i data-lucide="lock" class="w-3.5 h-3.5 text-brand-primary"></i> Safe and secure Checkout transfer.
            </p>
          </div>
          
          <!-- Reassurance Policy Icons -->
          <div class="bg-slate-50 p-4 rounded-2xl border border-slate-150/40 space-y-3">
            <div class="flex items-center gap-2.5 text-[10px] text-slate-500 font-semibold">
              <i data-lucide="shield-check" class="w-4 h-4 text-brand-success flex-shrink-0"></i>
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div class="flex items-center gap-2.5 text-[10px] text-slate-500 font-semibold">
              <i data-lucide="truck" class="w-4 h-4 text-brand-primary flex-shrink-0"></i>
              <span>Free, tracked priority shipping standard</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  `);

  lucide.createIcons();
}

// 5. CHECKOUT VIEW
function renderCheckoutView() {
  const $container = $('#view-container');

  if (STATE.cart.length === 0) {
    navigateTo('#cart');
    return;
  }

  let summaryHtml = '';
  let subtotal = 0;

  STATE.cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return;
    const itemTotal = product.price * item.quantity;
    subtotal += itemTotal;
    const colorObj = product.colors.find(c => c.name === item.color) || product.colors[0];

    summaryHtml += `
      <div class="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
        <div class="w-12 h-12 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 p-1">
          ${getProductImage(product, product.colors.indexOf(colorObj))}
        </div>
        <div class="flex-grow min-w-0 text-xs">
          <h4 class="font-heading font-bold text-brand-secondary truncate">${product.name}</h4>
          <p class="text-[10px] text-slate-400 mt-0.5">${item.size} / ${item.color} x${item.quantity}</p>
        </div>
        <span class="font-bold text-slate-700 text-xs">$${itemTotal.toFixed(2)}</span>
      </div>
    `;
  });

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  $container.html(`
    <div class="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-10">
      <h1 class="font-heading font-extrabold text-3xl text-brand-secondary mb-8">Checkout</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Left: Checkout Details Form -->
        <div class="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-light space-y-6">
          <div class="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
            <i data-lucide="truck" class="w-5 h-5 text-brand-primary"></i>
            <h3 class="font-heading font-bold text-brand-secondary text-base">Shipping &amp; Delivery Details</h3>
          </div>

          <form id="checkout-form" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="checkout-name" class="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                <input type="text" id="checkout-name" required placeholder="John Doe" class="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-xs text-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all">
              </div>
              <div>
                <label for="checkout-phone" class="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</label>
                <input type="tel" id="checkout-phone" required placeholder="+1 (555) 019-2834" class="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-xs text-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all">
              </div>
            </div>

            <div>
              <label for="checkout-email" class="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
              <input type="email" id="checkout-email" required placeholder="johndoe@example.com" class="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-xs text-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all">
            </div>

            <div>
              <label for="checkout-address" class="block text-xs font-semibold text-slate-600 mb-1.5">Street Address *</label>
              <input type="text" id="checkout-address" required placeholder="123 Main St, Apt 4B" class="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-xs text-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label for="checkout-city" class="block text-xs font-semibold text-slate-600 mb-1.5">City *</label>
                <input type="text" id="checkout-city" required placeholder="San Francisco" class="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-xs text-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all">
              </div>
              <div>
                <label for="checkout-state" class="block text-xs font-semibold text-slate-600 mb-1.5">State *</label>
                <input type="text" id="checkout-state" required placeholder="California" class="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-xs text-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all">
              </div>
              <div>
                <label for="checkout-zip" class="block text-xs font-semibold text-slate-600 mb-1.5">Postal/ZIP Code *</label>
                <input type="text" id="checkout-zip" required placeholder="94103" class="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-xs text-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all">
              </div>
            </div>

            <!-- Payment Method Indicator (COD by default) -->
            <div class="border-t border-slate-100 pt-6 mt-6 space-y-4">
              <div class="flex items-center gap-2 mb-2">
                <i data-lucide="wallet" class="w-5 h-5 text-brand-primary"></i>
                <h3 class="font-heading font-bold text-brand-secondary text-base">Payment Method</h3>
              </div>
              
              <div class="p-4 border border-brand-primary bg-brand-primary/5 rounded-2xl flex items-start gap-3">
                <div class="text-brand-primary mt-0.5"><i data-lucide="check-circle" class="w-5 h-5 fill-brand-primary text-white"></i></div>
                <div>
                  <h4 class="font-heading font-bold text-brand-secondary text-sm">Cash on Delivery (COD)</h4>
                  <p class="text-[11px] text-slate-500 leading-relaxed mt-1">No upfront online payment required! Simply pay with cash, debit, or mobile pay when our courier delivers the box directly to your doorstep.</p>
                </div>
              </div>
            </div>
            
            <button type="submit" class="hidden" id="pdp-form-hidden-submit"></button>
          </form>
        </div>

        <!-- Right: Checkout Summaries -->
        <div class="lg:col-span-1 space-y-6">
          
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-light space-y-4">
            <h3 class="font-heading font-bold text-brand-secondary text-base border-b border-slate-100 pb-3">Your Selection</h3>
            
            <div class="divide-y divide-slate-100 max-h-[220px] overflow-y-auto pr-1">
              ${summaryHtml}
            </div>
            
            <div class="space-y-2.5 pt-3 text-xs font-semibold text-slate-600 border-t border-slate-100">
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span class="text-brand-secondary">$${subtotal.toFixed(2)}</span>
              </div>
              <div class="flex justify-between">
                <span>Shipping</span>
                <span class="text-brand-success">Free Delivery</span>
              </div>
              <div class="flex justify-between">
                <span>Estimated Tax (8%)</span>
                <span class="text-brand-secondary">$${tax.toFixed(2)}</span>
              </div>
              <div class="flex justify-between text-sm font-extrabold text-brand-secondary pt-3 border-t border-slate-100">
                <span>Total Amount</span>
                <span class="text-brand-primary text-lg">$${total.toFixed(2)}</span>
              </div>
            </div>

            <!-- Place Order Action -->
            <button id="checkout-place-order-btn" class="w-full bg-brand-secondary hover:bg-brand-primary text-white font-extrabold py-3.5 rounded-full text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md mt-4 focus:outline-none">
              <i data-lucide="shield-check" class="w-4 h-4"></i> Place Order (COD)
            </button>
            
            <div class="flex items-center justify-center gap-1.5 text-[9px] text-slate-400 font-semibold text-center pt-2">
              <i data-lucide="lock" class="w-3.5 h-3.5 text-brand-primary"></i>
              <span>Secure 256-bit SSL encrypted checkout server</span>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  `);

  lucide.createIcons();

  // Handle Form submission on Place Order button click
  $('#checkout-place-order-btn').on('click', function(e) {
    e.preventDefault();
    // Validate checkout form
    const form = document.getElementById('checkout-form');
    if (form.checkValidity()) {
      const orderNum = 'VLX-' + Math.floor(10000 + Math.random() * 90000);
      STATE.cart = [];
      saveCart();
      showToast("Order placed successfully via Cash on Delivery!", "success");
      navigateTo(`#confirmation?orderNum=${orderNum}`);
    } else {
      form.reportValidity();
    }
  });

  $('#checkout-form').on('submit', function(e) {
    e.preventDefault();
  });
}

// 6. ORDER CONFIRMATION VIEW
function renderConfirmationView(orderNum) {
  const $container = $('#view-container');

  // Upsell list (4 best items from sneakers/training fallback)
  let upsellHtml = '';
  const upsell = PRODUCTS.slice(5, 9);
  upsell.forEach(p => {
    upsellHtml += `
      <div class="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between shadow-light hover:shadow-medium transition-all duration-300 relative group">
        <a href="#product?id=${p.id}" class="h-28 bg-slate-50 rounded-xl flex items-center justify-center p-3 overflow-hidden block mb-3">
          <div class="product-card-img-zoom w-full h-full flex items-center justify-center">
            ${getProductImage(p, 0)}
          </div>
        </a>
        <div>
          <span class="text-[9px] font-bold text-brand-primary uppercase tracking-wider block mb-1">${p.category}</span>
          <a href="#product?id=${p.id}" class="hover:text-brand-primary transition-colors block text-xs font-bold text-brand-secondary truncate">${p.name}</a>
          <div class="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
            <span class="font-extrabold text-brand-secondary text-xs">$${p.price.toFixed(2)}</span>
            <button class="bg-slate-100 hover:bg-brand-primary hover:text-white text-slate-700 text-[10px] font-bold py-1 px-2.5 rounded-full transition-colors flex items-center gap-1" onclick="addToCart(${p.id})">
              Add
            </button>
          </div>
        </div>
      </div>
    `;
  });

  $container.html(`
    <div class="max-w-[700px] mx-auto px-4 py-16 text-center">
      
      <!-- Thank you Banner card -->
      <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-light space-y-6">
        <div class="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 text-brand-success flex items-center justify-center mx-auto shadow-sm">
          <i data-lucide="check-circle" class="w-8 h-8 fill-brand-success text-white"></i>
        </div>
        
        <div>
          <span class="text-[10px] font-extrabold text-brand-success uppercase tracking-wider bg-emerald-50 rounded-full px-2.5 py-1 inline-block mb-2">Order Confirmed</span>
          <h1 class="font-heading font-extrabold text-3xl text-brand-secondary tracking-tight">Thank you! Your order is placed.</h1>
          <p class="text-xs text-slate-400 mt-2">Order ID: <span class="font-bold text-brand-secondary">${orderNum}</span> &middot; Paid via Cash on Delivery</p>
        </div>

        <!-- Progress Steps -->
        <div class="grid grid-cols-3 gap-2 py-4 relative border-y border-slate-100">
          <div class="text-center">
            <span class="w-6 h-6 rounded-full bg-brand-primary text-white text-xs font-bold flex items-center justify-center mx-auto mb-1.5">1</span>
            <span class="text-[10px] font-bold text-brand-secondary block">Processing</span>
          </div>
          <div class="text-center opacity-40">
            <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-xs font-bold flex items-center justify-center mx-auto mb-1.5">2</span>
            <span class="text-[10px] font-bold text-slate-600 block">Shipped</span>
          </div>
          <div class="text-center opacity-40">
            <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-xs font-bold flex items-center justify-center mx-auto mb-1.5">3</span>
            <span class="text-[10px] font-bold text-slate-600 block">Out for Delivery</span>
          </div>
        </div>

        <div class="text-left text-xs font-semibold text-slate-600 space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-150/40">
          <h3 class="font-heading font-bold text-brand-secondary text-sm border-b border-slate-150 pb-2 flex items-center gap-1.5">
            <i data-lucide="info" class="w-4 h-4 text-brand-primary"></i> What's Next?
          </h3>
          <ul class="space-y-2.5 text-[11px] text-slate-500 font-medium list-disc list-inside">
            <li>You will receive a confirmation phone call/email to verify shipment details shortly.</li>
            <li>Tracking credentials will be activated in 12 hours.</li>
            <li>Delivery estimate is <span class="font-bold text-brand-secondary">2-3 business days</span> standard.</li>
          </ul>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <a href="#shop" class="w-full text-center border border-slate-250 hover:bg-slate-50 text-brand-secondary font-bold py-3 rounded-full text-xs transition-colors flex items-center justify-center gap-1.5">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i> Continue Shopping
          </a>
          <button class="w-full text-center bg-brand-secondary hover:bg-brand-primary text-white font-bold py-3 rounded-full text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm" onclick="showToast('Tracking setup: Check email inbox for details.', 'info')">
            Track Order
          </button>
        </div>
      </div>

      <!-- Retention hook Upsell Grid -->
      <div class="mt-12 text-left">
        <h3 class="font-heading font-extrabold text-lg text-brand-secondary mb-6 flex items-center gap-1.5"><i data-lucide="sparkles" class="w-5 h-5 text-brand-primary"></i> Complete your collection</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          ${upsellHtml}
        </div>
      </div>

    </div>
  `);

  lucide.createIcons();
}

// ================= DOM INITIALIZATION & EVENT LINKING =================
$(document).ready(function() {
  // Render badge counters initially
  renderCartBadge();
  renderWishlistBadge();
  renderCompareBadge();

  // Run Router logic initial/hashchange
  window.addEventListener('hashchange', handleRouting);
  // Default to home page if empty
  if (!window.location.hash) {
    window.location.hash = '#home';
  } else {
    handleRouting();
  }

  // Hamburger Mobile drawer trigger
  $('#mobile-menu-btn').on('click', function() {
    $('#mobile-menu-drawer').removeClass('hidden');
    setTimeout(() => {
      $('#mobile-menu-backdrop').removeClass('opacity-0');
      $('#mobile-menu-content').removeClass('-translate-x-full');
    }, 10);
  });

  $('#mobile-menu-close, #mobile-menu-backdrop, .mobile-nav-link').on('click', function() {
    $('#mobile-menu-backdrop').addClass('opacity-0');
    $('#mobile-menu-content').addClass('-translate-x-full');
    setTimeout(() => {
      $('#mobile-menu-drawer').addClass('hidden');
    }, 300);
  });

  // Cart Drawer open/close triggers
  $('#cart-drawer-btn').on('click', function() {
    openMiniCart();
  });

  $('#cart-drawer-close, #cart-drawer-backdrop').on('click', function() {
    closeMiniCart();
  });

  // Search input live querying listeners
  $('#search-input').on('input', function() {
    runLiveSearch($(this).val());
  });

  $('#search-clear-btn').on('click', function() {
    $('#search-input').val('');
    runLiveSearch('');
  });

  // Close search results dropdown on outside clicks
  $(document).on('click', function(e) {
    if (!$(e.target).closest('#search-input, #search-results-dropdown').length) {
      $('#search-results-dropdown').addClass('hidden');
    }
  });

  // Quick View Modal Close
  $('#quick-view-close, #quick-view-backdrop').on('click', function() {
    closeQuickView();
  });

  // Compare Panel Close/Clear/Compare
  $('#compare-modal-close, #compare-modal-backdrop').on('click', function() {
    closeCompareModal();
  });

  $('#compare-btn').on('click', function() {
    openCompareModal();
  });

  $('#compare-submit').on('click', function() {
    openCompareModal();
  });

  $('#compare-clear').on('click', function() {
    STATE.compare = [];
    saveCompare();
    showToast("Cleared compared list.", "warning");
  });

  // Footer newsletter submission
  $('#footer-newsletter-form').on('submit', function(e) {
    e.preventDefault();
    const email = $('#newsletter-email').val();
    showToast(`Subscribed successfully with ${email}!`, 'success');
    $('#newsletter-email').val('');
  });
});

