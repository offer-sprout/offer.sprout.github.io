// Dummy Product Data with 5 Categories (Clothing, Shoes, Watches, Accessories, Gadgets)
const products = [
    // Clothing (5 products)
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
        name: "Designer Silk Evening Gown",
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
        id: 3,
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
        id: 4,
        name: "Cashmere Turtleneck Sweater",
        category: "tshirt",
        gender: "women",
        price: 7999,
        originalPrice: 9999,
        rating: 4.8,
        ratingCount: 234,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fine cashmere turtleneck sweater for winter.",
        tags: ["cashmere", "turtleneck", "winter"],
        badge: "Premium"
    },
    {
        id: 5,
        name: "Embroidered Silk Kurti",
        category: "dress",
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
    
    // Shoes (5 products)
    {
        id: 101,
        name: "Limited Edition Sneakers",
        category: "shoes",
        gender: "unisex",
        price: 19999,
        originalPrice: 24999,
        rating: 4.8,
        ratingCount: 567,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Limited edition designer sneakers with premium leather.",
        tags: ["sneakers", "limited", "designer"],
        badge: "Limited"
    },
    {
        id: 102,
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
        id: 103,
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
    {
        id: 104,
        name: "Running Sports Shoes",
        category: "shoes",
        gender: "men",
        price: 8999,
        originalPrice: 11999,
        rating: 4.5,
        ratingCount: 456,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Premium running shoes with advanced cushioning.",
        tags: ["sports", "running", "performance"],
        badge: "Sports"
    },
    {
        id: 105,
        name: "Casual Canvas Sneakers",
        category: "shoes",
        gender: "unisex",
        price: 4999,
        originalPrice: 6999,
        rating: 4.4,
        ratingCount: 321,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Casual canvas sneakers for everyday wear.",
        tags: ["casual", "canvas", "sneakers"],
        badge: null
    },
    
    // Watches (5 products)
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
    {
        id: 204,
        name: "Minimalist Leather Watch",
        category: "watch",
        gender: "unisex",
        price: 12999,
        originalPrice: 16999,
        rating: 4.6,
        ratingCount: 234,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Minimalist design with genuine leather strap.",
        tags: ["minimalist", "leather", "classic"],
        badge: null
    },
    {
        id: 205,
        name: "Sports Digital Watch",
        category: "watch",
        gender: "men",
        price: 8999,
        originalPrice: 11999,
        rating: 4.5,
        ratingCount: 189,
        image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Digital sports watch with multiple functions.",
        tags: ["sports", "digital", "waterproof"],
        badge: "Sports"
    },
    
    // Accessories (5 products)
    {
        id: 301,
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
        id: 302,
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
        id: 303,
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
    },
    {
        id: 304,
        name: "Silver Necklace Set",
        category: "accessories",
        gender: "women",
        price: 8999,
        originalPrice: 11999,
        rating: 4.6,
        ratingCount: 189,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Sterling silver necklace with matching earrings.",
        tags: ["silver", "jewelry", "necklace"],
        badge: "Elegant"
    },
    {
        id: 305,
        name: "Premium Leather Belt",
        category: "accessories",
        gender: "men",
        price: 4999,
        originalPrice: 6999,
        rating: 4.5,
        ratingCount: 156,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Genuine leather belt with stainless steel buckle.",
        tags: ["leather", "belt", "premium"],
        badge: null
    },
    
    // Gadgets (5 products)
    {
        id: 401,
        name: "Wireless Headphones Pro",
        category: "gadgets",
        gender: "unisex",
        price: 29999,
        originalPrice: 39999,
        rating: 4.8,
        ratingCount: 567,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Premium wireless noise cancelling headphones.",
        tags: ["headphones", "wireless", "premium"],
        badge: "Tech"
    },
    {
        id: 402,
        name: "Smartphone Ultra",
        category: "gadgets",
        gender: "unisex",
        price: 89999,
        originalPrice: 119999,
        rating: 4.9,
        ratingCount: 789,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Latest smartphone with advanced camera system.",
        tags: ["smartphone", "premium", "camera"],
        badge: "Latest"
    },
    {
        id: 403,
        name: "Smart Fitness Band",
        category: "gadgets",
        gender: "unisex",
        price: 9999,
        originalPrice: 14999,
        rating: 4.6,
        ratingCount: 456,
        image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Advanced fitness band with health monitoring.",
        tags: ["fitness", "smart", "health"],
        badge: "Fitness"
    },
    {
        id: 404,
        name: "Portable Bluetooth Speaker",
        category: "gadgets",
        gender: "unisex",
        price: 8999,
        originalPrice: 12999,
        rating: 4.7,
        ratingCount: 234,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High-quality portable Bluetooth speaker.",
        tags: ["speaker", "bluetooth", "portable"],
        badge: "Audio"
    },
    {
        id: 405,
        name: "Tablet Pro",
        category: "gadgets",
        gender: "unisex",
        price: 59999,
        originalPrice: 79999,
        rating: 4.8,
        ratingCount: 189,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Professional tablet for work and creativity.",
        tags: ["tablet", "pro", "productivity"],
        badge: "Pro"
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
    
    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.querySelector('.header').classList.add('scrolled');
        } else {
            document.querySelector('.header').classList.remove('scrolled');
        }
    });
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
                'clothing': 'Clothing',
                'shoes': 'Footwear',
                'watches': 'Watches',
                'accessories': 'Accessories',
                'gadgets': 'Gadgets'
            };
            
            document.getElementById('gender-title').innerHTML = `${categoryTitles[category]} - Select <span class="text-gradient">Collection</span>`;
            
            // Show gender selection page
            showPage('gender-selection');
        });
    });
    
    // Category links in footer
    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.getAttribute('data-category');
            currentState.currentCategory = category;
            
            const categoryTitles = {
                'clothing': 'Clothing',
                'shoes': 'Footwear',
                'watches': 'Watches',
                'accessories': 'Accessories',
                'gadgets': 'Gadgets'
            };
            
            document.getElementById('gender-title').innerHTML = `${categoryTitles[category]} - Select <span class="text-gradient">Collection</span>`;
            
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
                'women': 'Women\'s',
                'unisex': 'Unisex'
            };
            
            const categoryTitles = {
                'clothing': 'Clothing',
                'shoes': 'Footwear',
                'watches': 'Watches',
                'accessories': 'Accessories',
                'gadgets': 'Gadgets'
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
    
    // Load more produ