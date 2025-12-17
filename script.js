// Enhanced Dummy Product Data (200+ products)
const products = [
    // Men's Clothing (50 products)
    {
        id: 1,
        name: "Premium Slim Fit Cotton Shirt",
        category: "shirt",
        gender: "men",
        price: 2499,
        originalPrice: 3299,
        rating: 4.7,
        ratingCount: 342,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Premium Egyptian cotton slim fit shirt with mother of pearl buttons.",
        tags: ["premium", "cotton", "slim-fit"],
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Luxury Cashmere Sweater",
        category: "sweater",
        gender: "men",
        price: 8999,
        originalPrice: 11999,
        rating: 4.9,
        ratingCount: 189,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "100% Mongolian cashmere luxury knit sweater.",
        tags: ["luxury", "cashmere", "winter"],
        badge: "Premium"
    },
    {
        id: 3,
        name: "Designer Leather Jacket",
        category: "jacket",
        gender: "men",
        price: 15999,
        originalPrice: 19999,
        rating: 4.8,
        ratingCount: 267,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Italian lambskin leather jacket with quilted lining.",
        tags: ["designer", "leather", "jacket"],
        badge: "Luxury"
    },
    {
        id: 4,
        name: "Tailored Wool Trousers",
        category: "pant",
        gender: "men",
        price: 5499,
        originalPrice: 6999,
        rating: 4.6,
        ratingCount: 156,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Tailored wool trousers with satin lining.",
        tags: ["wool", "tailored", "formal"],
        badge: null
    },
    {
        id: 5,
        name: "Premium Denim Jeans",
        category: "jeans",
        gender: "men",
        price: 3999,
        originalPrice: 4999,
        rating: 4.5,
        ratingCount: 423,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Japanese selvedge denim with custom hardware.",
        tags: ["denim", "selvedge", "premium"],
        badge: "Popular"
    },
    {
        id: 6,
        name: "Silk Blend Polo Shirt",
        category: "tshirt",
        gender: "men",
        price: 3299,
        originalPrice: 4299,
        rating: 4.4,
        ratingCount: 278,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Silk-cotton blend polo with pearl snap buttons.",
        tags: ["silk", "polo", "casual"],
        badge: null
    },
    {
        id: 7,
        name: "Technical Performance Jacket",
        category: "jacket",
        gender: "men",
        price: 12999,
        originalPrice: 15999,
        rating: 4.7,
        ratingCount: 89,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Gore-Tex technical jacket with temperature regulation.",
        tags: ["technical", "performance", "waterproof"],
        badge: "Tech"
    },
    {
        id: 8,
        name: "Linen Blend Suit",
        category: "suit",
        gender: "men",
        price: 24999,
        originalPrice: 32999,
        rating: 4.9,
        ratingCount: 67,
        image: "https://images.unsplash.com/photo-1594938374188-1e8cfc57e7c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Italian linen-wool blend summer suit.",
        tags: ["suit", "linen", "formal"],
        badge: "Luxury"
    },
    
    // Women's Clothing (50 products)
    {
        id: 101,
        name: "Silk Evening Gown",
        category: "dress",
        gender: "women",
        price: 18999,
        originalPrice: 24999,
        rating: 4.9,
        ratingCount: 189,
        image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Hand-beaded silk evening gown with chiffon overlay.",
        tags: ["silk", "evening", "gown"],
        badge: "Luxury"
    },
    {
        id: 102,
        name: "Cashmere Turtleneck",
        category: "sweater",
        gender: "women",
        price: 7999,
        originalPrice: 9999,
        rating: 4.8,
        ratingCount: 234,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fine cashmere turtleneck sweater.",
        tags: ["cashmere", "turtleneck", "winter"],
        badge: "Premium"
    },
    {
        id: 103,
        name: "Designer Leather Skirt",
        category: "skirt",
        gender: "women",
        price: 12999,
        originalPrice: 16999,
        rating: 4.7,
        ratingCount: 156,
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Italian leather pencil skirt with silk lining.",
        tags: ["leather", "designer", "skirt"],
        badge: "Luxury"
    },
    {
        id: 104,
        name: "Embroidered Silk Kurti",
        category: "kurti",
        gender: "women",
        price: 5999,
        originalPrice: 7999,
        rating: 4.6,
        ratingCount: 342,
        image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Hand-embroidered silk kurti with sequin work.",
        tags: ["silk", "embroidered", "ethnic"],
        badge: "Popular"
    },
    {
        id: 105,
        name: "Linen Wide-Leg Trousers",
        category: "pant",
        gender: "women",
        price: 4499,
        originalPrice: 5999,
        rating: 4.5,
        ratingCount: 189,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Italian linen wide-leg trousers.",
        tags: ["linen", "wide-leg", "summer"],
        badge: null
    },
    {
        id: 106,
        name: "Evening Cocktail Dress",
        category: "dress",
        gender: "women",
        price: 14999,
        originalPrice: 19999,
        rating: 4.8,
        ratingCount: 267,
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Sequin embroidered cocktail dress.",
        tags: ["cocktail", "evening", "sequin"],
        badge: "New"
    },
    
    // Watches (30 products)
    {
        id: 201,
        name: "Automatic Chronograph Watch",
        category: "watch",
        gender: "men",
        price: 49999,
        originalPrice: 64999,
        rating: 4.9,
        ratingCount: 189,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Swiss automatic chronograph with sapphire crystal.",
        tags: ["automatic", "chronograph", "swiss"],
        badge: "Luxury"
    },
    {
        id: 202,
        name: "Smart Watch Pro",
        category: "watch",
        gender: "unisex",
        price: 29999,
        originalPrice: 39999,
        rating: 4.7,
        ratingCount: 456,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Advanced smartwatch with health monitoring.",
        tags: ["smart", "fitness", "tech"],
        badge: "Tech"
    },
    {
        id: 203,
        name: "Diamond Bezel Watch",
        category: "watch",
        gender: "women",
        price: 89999,
        originalPrice: 119999,
        rating: 4.9,
        ratingCount: 78,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "18k gold watch with diamond bezel.",
        tags: ["diamond", "gold", "luxury"],
        badge: "Premium"
    },
    
    // Footwear (40 products)
    {
        id: 301,
        name: "Limited Edition Sneakers",
        category: "shoes",
        gender: "unisex",
        price: 19999,
        originalPrice: 24999,
        rating: 4.8,
        ratingCount: 567,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Limited edition designer sneakers.",
        tags: ["sneakers", "limited", "designer"],
        badge: "Limited"
    },
    {
        id: 302,
        name: "Italian Leather Loafers",
        category: "shoes",
        gender: "men",
        price: 14999,
        originalPrice: 18999,
        rating: 4.7,
        ratingCount: 234,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Handcrafted Italian leather loafers.",
        tags: ["leather", "loafers", "italian"],
        badge: "Premium"
    },
    {
        id: 303,
        name: "Designer High Heels",
        category: "shoes",
        gender: "women",
        price: 17999,
        originalPrice: 22999,
        rating: 4.6,
        ratingCount: 189,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Designer crystal-embellished high heels.",
        tags: ["heels", "designer", "evening"],
        badge: "Luxury"
    },
    
    // Accessories (20 products)
    {
        id: 401,
        name: "Leather Briefcase",
        category: "bags",
        gender: "men",
        price: 24999,
        originalPrice: 32999,
        rating: 4.8,
        ratingCount: 156,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Full-grain leather executive briefcase.",
        tags: ["leather", "briefcase", "executive"],
        badge: "Premium"
    },
    {
        id: 402,
        name: "Designer Handbag",
        category: "bags",
        gender: "women",
        price: 59999,
        originalPrice: 79999,
        rating: 4.9,
        ratingCount: 267,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Signature designer handbag with gold hardware.",
        tags: ["handbag", "designer", "luxury"],
        badge: "Iconic"
    },
    {
        id: 403,
        name: "Aviator Sunglasses",
        category: "eyewear",
        gender: "unisex",
        price: 12999,
        originalPrice: 16999,
        rating: 4.7,
        ratingCount: 423,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Polarized aviator sunglasses with UV protection.",
        tags: ["sunglasses", "aviator", "polarized"],
        badge: "Popular"
    },
    
    // Fragrances (15 products)
    {
        id: 501,
        name: "Signature Eau de Parfum",
        category: "perfumes",
        gender: "unisex",
        price: 8999,
        originalPrice: 11999,
        rating: 4.8,
        ratingCount: 189,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Signature fragrance with notes of amber and oud.",
        tags: ["perfume", "signature", "luxury"],
        badge: "Signature"
    },
    
    // Tech & Audio (15 products)
    {
        id: 601,
        name: "Noise Cancelling Headphones",
        category: "electronics",
        gender: "unisex",
        price: 29999,
        originalPrice: 39999,
        rating: 4.8,
        ratingCount: 567,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Premium wireless noise cancelling headphones.",
        tags: ["headphones", "wireless", "premium"],
        badge: "Tech"
    }
];

// Add more products to reach 200+ (simplified for demo)
for (let i = 7; i <= 50; i++) {
    // Men's clothing
    products.push({
        id: 1000 + i,
        name: `Men's Premium Product ${i}`,
        category: ["shirt", "pant", "jeans", "tshirt", "jacket", "sweater"][Math.floor(Math.random() * 6)],
        gender: "men",
        price: Math.floor(Math.random() * 15000) + 1999,
        originalPrice: Math.floor(Math.random() * 20000) + 2999,
        rating: 3.5 + Math.random() * 1.5,
        ratingCount: Math.floor(Math.random() * 500),
        image: `https://images.unsplash.com/photo-${1500000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
        description: "Premium quality product with excellent craftsmanship.",
        tags: ["premium", "quality", "design"],
        badge: Math.random() > 0.7 ? ["New", "Popular", "Best Seller"][Math.floor(Math.random() * 3)] : null
    });
    
    // Women's clothing
    products.push({
        id: 2000 + i,
        name: `Women's Premium Product ${i}`,
        category: ["dress", "kurti", "skirt", "tshirt", "jacket", "sweater"][Math.floor(Math.random() * 6)],
        gender: "women",
        price: Math.floor(Math.random() * 18000) + 1999,
        originalPrice: Math.floor(Math.random() * 23000) + 2999,
        rating: 3.5 + Math.random() * 1.5,
        ratingCount: Math.floor(Math.random() * 500),
        image: `https://images.unsplash.com/photo-${1600000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
        description: "Elegant and sophisticated premium product.",
        tags: ["elegant", "sophisticated", "design"],
        badge: Math.random() > 0.7 ? ["New", "Popular", "Luxury"][Math.floor(Math.random() * 3)] : null
    });
}

// Add more categories
for (let i = 1; i <= 20; i++) {
    // Watches
    products.push({
        id: 3000 + i,
        name: `Luxury Watch ${i}`,
        category: "watch",
        gender: Math.random() > 0.5 ? "men" : "women",
        price: Math.floor(Math.random() * 100000) + 19999,
        originalPrice: Math.floor(Math.random() * 130000) + 29999,
        rating: 4 + Math.random() * 1,
        ratingCount: Math.floor(Math.random() * 300),
        image: `https://images.unsplash.com/photo-${1700000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
        description: "Premium luxury timepiece with exceptional craftsmanship.",
        tags: ["luxury", "timepiece", "premium"],
        badge: Math.random() > 0.5 ? "Luxury" : null
    });
    
    // Shoes
    products.push({
        id: 4000 + i,
        name: `Designer Footwear ${i}`,
        category: "shoes",
        gender: ["men", "women", "unisex"][Math.floor(Math.random() * 3)],
        price: Math.floor(Math.random() * 20000) + 2999,
        originalPrice: Math.floor(Math.random() * 25000) + 3999,
        rating: 4 + Math.random() * 1,
        ratingCount: Math.floor(Math.random() * 400),
        image: `https://images.unsplash.com/photo-${1800000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
        description: "Designer footwear with premium materials.",
        tags: ["designer", "footwear", "premium"],
        badge: Math.random() > 0.6 ? "Designer" : null
    });
    
    // Bags
    products.push({
        id: 5000 + i,
        name: `Premium Bag ${i}`,
        category: "bags",
        gender: Math.random() > 0.5 ? "men" : "women",
        price: Math.floor(Math.random() * 50000) + 9999,
        originalPrice: Math.floor(Math.random() * 65000) + 14999,
        rating: 4.2 + Math.random() * 0.8,
        ratingCount: Math.floor(Math.random() * 200),
        image: `https://images.unsplash.com/photo-${1900000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
        description: "Premium designer bag with exceptional quality.",
        tags: ["designer", "bag", "premium"],
        badge: Math.random() > 0.7 ? "Premium" : null
    });
    
    // Fragrances
    products.push({
        id: 6000 + i,
        name: `Luxury Fragrance ${i}`,
        category: "perfumes",
        gender: ["men", "women", "unisex"][Math.floor(Math.random() * 3)],
        price: Math.floor(Math.random() * 15000) + 2999,
        originalPrice: Math.floor(Math.random() * 20000) + 3999,
        rating: 4.3 + Math.random() * 0.7,
        ratingCount: Math.floor(Math.random() * 150),
        image: `https://images.unsplash.com/photo-${2000000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
        description: "Exclusive luxury fragrance with unique notes.",
        tags: ["fragrance", "luxury", "exclusive"],
        badge: Math.random() > 0.8 ? "Exclusive" : null
    });
    
    // Electronics
    products.push({
        id: 7000 + i,
        name: `Premium Tech ${i}`,
        category: "electronics",
        gender: "unisex",
        price: Math.floor(Math.random() * 50000) + 9999,
        originalPrice: Math.floor(Math.random() * 65000) + 14999,
        rating: 4.5 + Math.random() * 0.5,
        ratingCount: Math.floor(Math.random() * 500),
        image: `https://images.unsplash.com/photo-${2100000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
        description: "Premium technology product with advanced features.",
        tags: ["tech", "premium", "advanced"],
        badge: Math.random() > 0.6 ? "Tech" : null
    });
    
    // Eyewear
    products.push({
        id: 8000 + i,
        name: `Designer Eyewear ${i}`,
        category: "eyewear",
        gender: ["men", "women", "unisex"][Math.floor(Math.random() * 3)],
        price: Math.floor(Math.random() * 20000) + 4999,
        originalPrice: Math.floor(Math.random() * 25000) + 6999,
        rating: 4.4 + Math.random() * 0.6,
        ratingCount: Math.floor(Math.random() * 250),
        image: `https://images.unsplash.com/photo-${2200000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
        description: "Designer eyewear with premium lenses.",
        tags: ["eyewear", "designer", "premium"],
        badge: Math.random() > 0.7 ? "Designer" : null
    });
}

// DOM Elements
const DOM = {
    // Pages
    pages: document.querySelectorAll('.page'),
    homePage: document.getElementById('home'),
    genderPage: document.getElementById('gender-selection'),
    productPage: document.getElementById('product-listing'),
    
    // Navigation
    navLinks: document.querySelectorAll('.nav-link'),
    menuToggle: document.querySelector('.menu-toggle'),
    navMenu: document.querySelector('.nav-menu'),
    
    // Search
    searchToggle: document.querySelector('.search-toggle'),
    searchOverlay: document.querySelector('.search-overlay'),
    searchClose: document.querySelector('.search-close'),
    searchInput: document.querySelector('.search-input'),
    searchSubmit: document.querySelector('.search-submit'),
    searchSuggestions: document.querySelectorAll('.suggestion-tag'),
    
    // Categories
    categoryCards: document.querySelectorAll('.category-card'),
    backToCategories: document.getElementById('back-to-categories'),
    
    // Gender Selection
    genderCards: document.querySelectorAll('.gender-card'),
    backToGender: document.getElementById('back-to-gender'),
    genderTitle: document.getElementById('gender-title'),
    
    // Product Listing
    listingTitle: document.getElementById('listing-title'),
    listingSubtitle: document.getElementById('listing-subtitle'),
    productGrid: document.getElementById('product-grid'),
    productList: document.getElementById('product-list'),
    noProducts: document.getElementById('no-products'),
    categoryFilte