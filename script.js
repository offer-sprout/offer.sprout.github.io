// Dummy Product Data (Simplified but functional)
const products = [
    // Men's Clothing
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
    
    // Women's Clothing
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
    
    // Watches
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
    
    // Footwear
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
    
    // Accessories
    {
        id: 401,
        name: "Leather Briefcase",
        category: "accessories",
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
        category: "accessories",
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
        category: "accessories",
        gender: "unisex",
        price: 12999,
        originalPrice: 16999,
        rating: 4.7,
        ratingCount: 423,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Polarized aviator sunglasses with UV protection.",
        tags: ["sunglasses", "aviator", "polarized"],
        badge: "Popular"
    }
];

// Current State
let currentState = {
    currentCategory: null,
    currentGender: null,
    cart: [],
    wishlist: [],
    searchQuery: '',
    filteredProducts: [],
    displayCount: 8
};

// Initialize the app
function init() {
    // Set up event listeners
    setupEventListeners();
    
    // Load cart and wishlist from localStorage
    loadCart();
    loadWishlist();
    
    // Hide loading screen
    setTimeout(() => {
        document.querySelector('.loading-screen').classList.add('loaded');
        
        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                document.querySelector('.header').classList.add('scrolled');
            } else {
                document.querySelector('.header').classList.remove('scrolled');
            }
        });
    }, 1000);
}

// Set up all event listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            
            if (page === 'collections' || page === 'home') {
                showPage('home');
            } else if (page === 'gender-selection') {
                const gender = e.target.getAttribute('data-gender');
                if (gender) {
                    currentState.currentGender = gender;
                    showPage('gender-selection');
                }
            } else {
                // For other pages, just show home for now
                showPage('home');
            }
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            
            // Close mobile menu if open
            document.querySelector('.nav-menu').classList.remove('active');
        });
    });
    
    // Mobile menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('active');
    });
    
    // Search functionality
    document.querySelector('.search-toggle').addEventListener('click', () => {
        document.querySelector('.search-overlay').classList.add('active');
        document.querySelector('.search-input').focus();
    });
    
    document.querySelector('.search-close').addEventListener('click', () => {
        document.querySelector('.search-overlay').classList.remove('active');
        document.querySelector('.search-input').value = '';
        currentState.searchQuery = '';
        filterProducts();
    });
    
    document.querySelector('.search-submit').addEventListener('click', () => {
        currentState.searchQuery = document.querySelector('.search-input').value.toLowerCase();
        filterProducts();
        document.querySelector('.search-overlay').classList.remove('active');
    });
    
    document.querySelector('.search-input').addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            currentState.searchQuery = document.querySelector('.search-input').value.toLowerCase();
            filterProducts();
            document.querySelector('.search-overlay').classList.remove('active');
        }
    });
    
    // Search suggestions
    document.querySelectorAll('.suggestion-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            document.querySelector('.search-input').value = tag.textContent;
        });
    });
    
    // Category selection
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            currentState.currentCategory = category;
            
            // Update gender title based on category
            const categoryTitles = {
                'clothing': 'Apparel',
                'watches': 'Timepieces',
                'shoes': 'Footwear',
                'accessories': 'Accessories'
            };
            
            document.getElementById('gender-title').innerHTML = `${categoryTitles[category]} - Select <span class="text-gradient">Collection</span>`;
            
            // Show gender selection page
            showPage('gender-selection');
        });
    });
    
    // Explore collections button
    document.getElementById('explore-collections').addEventListener('click', () => {
        showPage('home');
        document.querySelector('.categories-grid').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Back to categories
    document.getElementById('back-to-categories').addEventListener('click', () => {
        showPage('home');
    });
    
    // Gender selection
    document.querySelectorAll('.gender-card').forEach(card => {
        card.addEventListener('click', () => {
            const gender = card.getAttribute('data-gender');
            currentState.currentGender = gender;
            
            // Update listing title
            const genderTitles = {
                'men': 'Men\'s',
                'women': 'Women\'s'
            };
            
            const categoryTitles = {
                'clothing': 'Apparel',
                'watches': 'Timepieces',
                'shoes': 'Footwear',
                'accessories': 'Accessories'
            };
            
            document.getElementById('listing-title').textContent = `${genderTitles[gender]} ${categoryTitles[currentState.currentCategory]}`;
            document.getElementById('listing-subtitle').textContent = `Curated selection of premium ${genderTitles[gender].toLowerCase()} ${categoryTitles[currentState.currentCategory].toLowerCase()}`;
            
            // Show product listing page
            showPage('product-listing');
            
            // Load products for selected category and gender
            filterProducts();
        });
    });
    
    // Back to gender selection
    document.getElementById('back-to-gender').addEventListener('click', () => {
        showPage('gender-selection');
    });
    
    // Product filtering
    document.getElementById('category-filter').addEventListener('change', filterProducts);
    document.getElementById('sort-by').addEventListener('change', filterProducts);
    
    // Clear filters
    document.getElementById('clear-filters').addEventListener('click', () => {
        document.getElementById('category-filter').value = 'all';
        document.getElementById('sort-by').value = 'featured';
        currentState.searchQuery = '';
        filterProducts();
    });
    
    // Load more products
    document.getElementById('load-more').addEventListener('click', loadMoreProducts);
    
    // Cart functionality
    document.querySelector('.cart-btn').addEventListener('click', () => {
        document.querySelector('.cart-sidebar').classList.add('active');
        document.querySelector('.cart-overlay').classList.add('active');
        renderCartItems();
    });
    
    document.querySelector('.cart-close').addEventListener('click', () => {
        document.querySelector('.cart-sidebar').classList.remove('active');
        document.querySelector('.cart-overlay').classList.remove('active');
    });
    
    document.querySelector('.cart-overlay').addEventListener('click', () => {
        document.querySelector('.cart-sidebar').classList.remove('active');
        document.querySelector('.cart-overlay').classList.remove('active');
    });
    
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (currentState.cart.length === 0) {
            showToast('Your cart is empty', 'error');
            return;
        }
        showToast('Checkout functionality would be implemented with backend integration', 'info');
    });
    
    // Wishlist button
    document.querySelector('.wishlist-btn').addEventListener('click', () => {
        showToast('Wishlist page would show here', 'info');
    });
}

// Show a specific page
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the requested page
    document.getElementById(pageId).classList.add('active');
    
    // Close mobile menu if open
    document.querySelector('.nav-menu').classList.remove('active');
    
    // Reset display count when changing pages
    if (pageId === 'product-listing') {
        currentState.displayCount = 8;
    }
}

// Filter and display products based on current state
function filterProducts() {
    let filteredProducts = [...products];
    
    // Filter by category and gender
    if (currentState.currentCategory && currentState.currentGender) {
        filteredProducts = filteredProducts.filter(product => {
            // Handle category mapping
            if (currentState.currentCategory === 'clothing') {
                const clothingCategories = ['shirt', 'pant', 'jeans', 'tshirt', 'kurti', 'dress', 'jacket', 'sweater', 'skirt'];
                return clothingCategories.includes(product.category) && 
                       (product.gender === currentState.currentGender || product.gender === 'unisex');
            }
            
            if (currentState.currentCategory === 'watches' && product.category === 'watch') {
                return product.gender === currentState.currentGender || product.gender === 'unisex';
            }
            
            if (currentState.currentCategory === 'shoes' && product.category === 'shoes') {
                return product.gender === currentState.currentGender || product.gender === 'unisex';
            }
            
            if (currentState.currentCategory === 'accessories' && product.category === 'accessories') {
                return product.gender === currentState.currentGender || product.gender === 'unisex';
            }
            
            return false;
        });
    }
    
    // Filter by selected category filter
    const categoryFilter = document.getElementById('category-filter').value;
    if (categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }
    
    // Filter by search query
    if (currentState.searchQuery) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(currentState.searchQuery) ||
         