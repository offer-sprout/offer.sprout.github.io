// Dummy Product Data
const products = [
    // Men Clothing
    {
        id: 1,
        name: "Men Slim Fit Cotton Shirt",
        category: "shirt",
        gender: "men",
        price: 1299,
        rating: 4.5,
        ratingCount: 128,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Men Casual T-Shirt",
        category: "tshirt",
        gender: "men",
        price: 799,
        rating: 4.2,
        ratingCount: 89,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Men Formal Trousers",
        category: "pant",
        gender: "men",
        price: 1799,
        rating: 4.7,
        ratingCount: 56,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Men Denim Jeans",
        category: "jeans",
        gender: "men",
        price: 2199,
        rating: 4.4,
        ratingCount: 203,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Men Polo T-Shirt",
        category: "tshirt",
        gender: "men",
        price: 899,
        rating: 4.0,
        ratingCount: 42,
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Men Checkered Shirt",
        category: "shirt",
        gender: "men",
        price: 1499,
        rating: 4.6,
        ratingCount: 78,
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    
    // Women Clothing
    {
        id: 7,
        name: "Women Cotton Kurti",
        category: "kurti",
        gender: "women",
        price: 1199,
        rating: 4.8,
        ratingCount: 156,
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Women Casual Top",
        category: "tshirt",
        gender: "women",
        price: 899,
        rating: 4.3,
        ratingCount: 92,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "Women Denim Jeans",
        category: "jeans",
        gender: "women",
        price: 1999,
        rating: 4.5,
        ratingCount: 134,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        name: "Women Summer Dress",
        category: "dress",
        gender: "women",
        price: 2499,
        rating: 4.9,
        ratingCount: 87,
        image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        name: "Women Formal Shirt",
        category: "shirt",
        gender: "women",
        price: 1399,
        rating: 4.4,
        ratingCount: 64,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        name: "Women Printed Kurti",
        category: "kurti",
        gender: "women",
        price: 1599,
        rating: 4.7,
        ratingCount: 121,
        image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    
    // Watches
    {
        id: 13,
        name: "Men Analog Watch",
        category: "watch",
        gender: "men",
        price: 3499,
        rating: 4.6,
        ratingCount: 189,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 14,
        name: "Women Smart Watch",
        category: "watch",
        gender: "women",
        price: 4999,
        rating: 4.8,
        ratingCount: 203,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 15,
        name: "Unisex Sports Watch",
        category: "watch",
        gender: "unisex",
        price: 2999,
        rating: 4.3,
        ratingCount: 78,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 16,
        name: "Luxury Leather Watch",
        category: "watch",
        gender: "men",
        price: 8999,
        rating: 4.9,
        ratingCount: 56,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    
    // Shoes
    {
        id: 17,
        name: "Men Running Shoes",
        category: "shoes",
        gender: "men",
        price: 2999,
        rating: 4.5,
        ratingCount: 145,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 18,
        name: "Women Casual Sneakers",
        category: "shoes",
        gender: "women",
        price: 2499,
        rating: 4.7,
        ratingCount: 98,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 19,
        name: "Men Formal Shoes",
        category: "shoes",
        gender: "men",
        price: 3499,
        rating: 4.4,
        ratingCount: 67,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    
    // Accessories
    {
        id: 20,
        name: "Premium Leather Belt",
        category: "accessories",
        gender: "men",
        price: 1299,
        rating: 4.2,
        ratingCount: 45,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 21,
        name: "Designer Sunglasses",
        category: "accessories",
        gender: "unisex",
        price: 1999,
        rating: 4.6,
        ratingCount: 112,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 22,
        name: "Women Fashion Handbag",
        category: "accessories",
        gender: "women",
        price: 3999,
        rating: 4.8,
        ratingCount: 89,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

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
    
    // Categories
    categoryCards: document.querySelectorAll('.category-card'),
    backToCategories: document.getElementById('back-to-categories'),
    
    // Gender Selection
    genderCards: document.querySelectorAll('.gender-card'),
    backToGender: document.getElementById('back-to-gender'),
    genderTitle: document.getElementById('gender-title'),
    
    // Product Listing
    listingTitle: document.getElementById('listing-title'),
    productGrid: document.getElementById('product-grid'),
    noProducts: document.getElementById('no-products'),
    categoryFilter: document.getElementById('category-filter'),
    sortBy: document.getElementById('sort-by'),
    
    // Cart
    cartBtn: document.querySelector('.cart-btn'),
    cartSidebar: document.querySelector('.cart-sidebar'),
    cartOverlay: document.querySelector('.cart-overlay'),
    cartClose: document.querySelector('.cart-close'),
    cartCount: document.querySelector('.cart-count'),
    cartItems: document.querySelector('.cart-items'),
    totalAmount: document.querySelector('.total-amount'),
    checkoutBtn: document.querySelector('.checkout-btn')
};

// Current State
let currentState = {
    currentCategory: null,
    currentGender: null,
    cart: [],
    searchQuery: ''
};

// Initialize the app
function init() {
    // Set up event listeners
    setupEventListeners();
    
    // Show home page by default
    showPage('home');
    
    // Load cart from localStorage if available
    loadCart();
}

// Set up all event listeners
function setupEventListeners() {
    // Navigation
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            
            if (page === 'categories') {
                showPage('home');
            } else {
                showPage(page);
            }
            
            // Update active nav link
            DOM.navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            
            // Close mobile menu if open
            DOM.navMenu.classList.remove('active');
        });
    });
    
    // Mobile menu toggle
    DOM.menuToggle.addEventListener('click', () => {
        DOM.navMenu.classList.toggle('active');
    });
    
    // Search functionality
    DOM.searchToggle.addEventListener('click', () => {
        DOM.searchOverlay.classList.add('active');
        DOM.searchInput.focus();
    });
    
    DOM.searchClose.addEventListener('click', () => {
        DOM.searchOverlay.classList.remove('active');
        DOM.searchInput.value = '';
        currentState.searchQuery = '';
        filterProducts();
    });
    
    DOM.searchSubmit.addEventListener('click', () => {
        currentState.searchQuery = DOM.searchInput.value.toLowerCase();
        filterProducts();
        DOM.searchOverlay.classList.remove('active');
    });
    
    DOM.searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            currentState.searchQuery = DOM.searchInput.value.toLowerCase();
            filterProducts();
            DOM.searchOverlay.classList.remove('active');
        }
    });
    
    // Category selection
    DOM.categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            currentState.currentCategory = category;
            
            // Update gender title based on category
            const categoryTitles = {
                'clothing': 'Clothing',
                'watches': 'Watches',
                'shoes': 'Shoes',
                'accessories': 'Accessories'
            };
            
            DOM.genderTitle.textContent = `${categoryTitles[category]} - Select Gender`;
            
            // Show gender selection page
            showPage('gender-selection');
        });
    });
    
    // Back to categories
    DOM.backToCategories.addEventListener('click', () => {
        showPage('home');
    });
    
    // Gender selection
    DOM.genderCards.forEach(card => {
        card.addEventListener('click', () => {
            const gender = card.getAttribute('data-gender');
            currentState.currentGender = gender;
            
            // Update listing title
            const genderTitles = {
                'men': 'Men\'s',
                'women': 'Women\'s'
            };
            
            const categoryTitles = {
                'clothing': 'Clothing',
                'watches': 'Watches',
                'shoes': 'Shoes',
                'accessories': 'Accessories'
            };
            
            DOM.listingTitle.textContent = `${genderTitles[gender]} ${categoryTitles[currentState.currentCategory]}`;
            
            // Show product listing page
            showPage('product-listing');
            
            // Load products for selected category and gender
            filterProducts();
        });
    });
    
    // Back to gender selection
    DOM.backToGender.addEventListener('click', () => {
        showPage('gender-selection');
    });
    
    // Product filtering
    DOM.categoryFilter.addEventListener('change', filterProducts);
    DOM.sortBy.addEventListener('change', filterProducts);
    
    // Cart functionality
    DOM.cartBtn.addEventListener('click', () => {
        DOM.cartSidebar.classList.add('active');
        DOM.cartOverlay.classList.add('active');
        renderCartItems();
    });
    
    DOM.cartClose.addEventListener('click', () => {
        DOM.cartSidebar.classList.remove('active');
        DOM.cartOverlay.classList.remove('active');
    });
    
    DOM.cartOverlay.addEventListener('click', () => {
        DOM.cartSidebar.classList.remove('active');
        DOM.cartOverlay.classList.remove('active');
    });
    
    DOM.checkoutBtn.addEventListener('click', () => {
        alert('This is a frontend-only demo. Checkout functionality would be implemented with a backend.');
    });
}

// Show a specific page
function showPage(pageId) {
    // Hide all pages
    DOM.pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the requested page
    document.getElementById(pageId).classList.add('active');
    
    // Close mobile menu if open
    DOM.navMenu.classList.remove('active');
}

// Filter and display products based on current state
function filterProducts() {
    let filteredProducts = [...products];
    
    // Filter by category and gender
    if (currentState.currentCategory && currentState.currentGender) {
        filteredProducts = filteredProducts.filter(product => {
            // Handle special cases for watches and accessories
            if (currentState.currentCategory === 'watches' && product.category === 'watch') {
                return product.gender === currentState.currentGender || product.gender === 'unisex';
            }
            
            if (currentState.currentCategory === 'accessories' && product.category === 'accessories') {
                return product.gender === currentState.currentGender || product.gender === 'unisex';
            }
            
            if (currentState.currentCategory === 'shoes' && product.category === 'shoes') {
                return product.gender === currentState.currentGender;
            }
            
            if (currentState.currentCategory === 'clothing') {
                const clothingCategories = ['shirt', 'pant', 'jeans', 'tshirt', 'kurti', 'dress'];
                return clothingCategories.includes(product.category) && product.gender === currentState.currentGender;
            }
            
            return false;
        });
    }
    
    // Filter by selected category filter
    const categoryFilter = DOM.categoryFilter.value;
    if (categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }
    
    // Filter by search query
    if (currentState.searchQuery) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(currentState.searchQuery)
        );
    }
    
    // Sort products
    const sortBy = DOM.sortBy.value;
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Featured (default) - keep original order
            break;
    }
    
    // Render products
    renderProducts(filteredProducts);
    
    // Show/hide no products message
    if (filteredProducts.length === 0) {
        DOM.noProducts.style.display = 'block';
        DOM.productGrid.style.display = 'none';
    } else {
        DOM.noProducts.style.display = 'none';
        DOM.productGrid.style.display = 'grid';
    }
}

// Render products to the product grid
function renderProducts(products) {
    DOM.productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        DOM.productGrid.appendChild(productCard);
    });
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);
    
    // Format price with Indian Rupee symbol
    const formattedPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(product.price);
    
    // Create star rating HTML
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    
    // Capitalize category name
    const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    
    card.innerHTML = `
        <div class="product-image" style="background-image: url('${product.image}')"></div>
        <div class="product-info">
            <span class="product-category">${categoryName}</span>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">${formattedPrice}</div>
            <div class="product-rating">
                <div class="rating-stars">${starsHTML}</div>
                <span class="rating-count">(${product.ratingCount})</span>
            </div>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    
    // Add event listener to Add to Cart button
    const addToCartBtn = card.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => {
        addToCart(product.id);
    });
    
    return card;
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = currentState.cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        currentState.cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Update cart count
    updateCartCount();
    
    // Save cart to localStorage
    saveCart();
    
    // Show confirmation
    showNotification(`${product.name} added to cart!`);
}

// Update cart count in header
function updateCartCount() {
    const totalItems = currentState.cart.reduce((total, item) => total + item.quantity, 0);
    DOM.cartCount.textContent = totalItems;
}

// Render cart items in sidebar
function renderCartItems() {
    const cartItems = currentState.cart;
    
    if (cartItems.length === 0) {
        DOM.cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        DOM.totalAmount.textContent = '₹0';
        return;
    }
    
    let itemsHTML = '';
    let total = 0;
    
    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const formattedPrice = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(item.price);
        
        const formattedTotal = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(itemTotal);
        
        itemsHTML += `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <div class="cart-item-price">${formattedPrice}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="cart-item-total">${formattedTotal}</div>
            </div>
        `;
    });
    
    DOM.cartItems.innerHTML = itemsHTML;
    DOM.totalAmount.textContent = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(total);
    
    // Add event listeners to cart item buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            updateCartItemQuantity(id, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            updateCartItemQuantity(id, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.closest('.remove-item').getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
    const item = currentState.cart.find(item => item.id === productId);
    
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        // Remove item if quantity is 0 or less
        currentState.cart = currentState.cart.filter(item => item.id !== productId);
    }
    
    // Update UI
    updateCartCount();
    renderCartItems();
    saveCart();
}

// Remove item from cart
function removeFromCart(productId) {
    currentState.cart = currentState.cart.filter(item => item.id !== productId);
    
    // Update UI
    updateCartCount();
    renderCartItems();
    saveCart();
    
    showNotification('Item removed from cart');
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('voguesphere_cart', JSON.stringify(currentState.cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('voguesphere_cart');
    
    if (savedCart) {
        currentState.cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--primary-color);
        color: white;
        padding: 12px 24px;
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        z-index: 2000;
        transform: translateY(100px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add some CSS for cart items
const cartItemStyles = `
    .cart-item {
        display: flex;
        gap: 15px;
        padding: 15px 0;
        border-bottom: 1px solid var(--border-color);
    }
    
    .cart-item:last-child {
        border-bottom: none;
    }
    
    .cart-item-image {
        width: 80px;
        height: 80px;
        background-size: cover;
        background-position: center;
        border-radius: var(--radius);
        flex-shrink: 0;
    }
    
    .cart-item-info {
        flex: 1;
    }
    
    .cart-item-name {
        font-size: 0.95rem;
        margin-bottom: 5px;
        line-height: 1.4;
    }
    
    .cart-item-price {
        font-weight: 600;
        margin-bottom: 10px;
        color: var(--primary-color);
    }
    
    .cart-item-quantity {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .quantity-btn {
        width: 28px;
        height: 28px;
        background-color: var(--secondary-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        transition: var(--transition);
    }
    
    .quantity-btn:hover {
        background-color: var(--border-color);
    }
    
    .quantity {
        font-weight: 600;
        min-width: 20px;
        text-align: center;
    }
    
    .remove-item {
        margin-left: 10px;
        color: var(--text-light);
        transition: var(--transition);
    }
    
    .remove-item:hover {
        color: #ff4757;
    }
    
    .cart-item-total {
        font-weight: 700;
        color: var(--primary-color);
        align-self: flex-start;
    }
`;

// Inject cart item styles
const styleSheet = document.createElement('style');
styleSheet.textContent = cartItemStyles;
document.head.appendChild(styleSheet);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);