 // Data
 const categories = [
    { id: 'all', name: 'All', icon: 'restaurant_menu' },
    { id: 'bakery', name: 'Bakery', icon: 'bakery_dining' },
    { id: 'dessert', name: 'Desserts', icon: 'cake' },
    { id: 'breakfast', name: 'Breakfast', icon: 'egg_alt' },
    { id: 'pasta', name: 'Pasta', icon: 'ramen_dining' },
    { id: 'meal', name: 'Meals', icon: 'lunch_dining' },
    { id: 'drink', name: 'Drinks', icon: 'local_cafe' },
    { id: 'coffee', name: 'Coffee', icon: 'coffee' }
];

const menuItems = [
    {
        id: 1,
        name: "Butter Croissant",
        price: 18,
        category: "bakery",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFIzDlRay7B9o7_GagOzg-FuLcV7cld-WXlanFR4DiQa3dLGKin77ZqkASB0RDIfBA-g2WST8gwKIsBBMzFep-fdwLDvwBUoS9AEF_2GSs3mdNwRip4N5Q7PbYfU360kBrjt5IJYc-V2JSJygm6UXorFlwABkPdD_Yil1mbCRK7Plp8VU6TYQDvaNJBvbddcHuJuVpkAVPvkIgLOpDagZWJF2XwnWVZE7jeJJfx_rE0J3ChgRfUpSk_1uW4mO53aEqtW9FbTQvsjI",
        description: "Authentic French croissant made with premium natural butter. Flaky, golden, and delicious."
    },
    {
        id: 2,
        name: "Royal Breakfast",
        price: 85,
        category: "breakfast",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuv129n-5D22cD555PNs3aecaObCfqSsl1WKpdc0QdaCmxkDZVlDMpwiMGBDphIFq0N35VHFiM4A99kH9qTuh_Bh6Gi6ijBgJSvDNp-vfYCeTGheD9RKEMlxobRXNJ7tQTwLJN8iYKuOZXfhUsiytwo4ucXu-VzuwDPkBW-VuXvTki9E-n1P9rvXRAWVYmtktRHDbNK0kMtyba6YzfbhQlGIel9iiy2hedIp0gBjT17zRWkFXVSkf55RewG0NA1SX3t-RzzSTyIHs",
        description: "A complete blend of traditional and modern flavors for the perfect start to your day."
    },
    {
        id: 3,
        name: "Strawberry Cheesecake",
        price: 45,
        category: "dessert",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCfRteFod6Imv0rfGVQUQ4aZ7VzcGdutmrajS8fT9DP9JfInezDNnfsZW7ADUmM727NqdHop5FtLwbvYzbKyL5lSHfMcPzgSJ-dg4XCASu0-SrVW2yRD7_R-FN3bnryt6x50tcqcflCleWikGOCWWDfIyTKQxwnajUFQxYB2-7ix279jrxWYXZJ0qpeCTip5IqPSROfkAkGW7I2_FJyJHCHaUb1_9igTyd2PlUM4_A8Zmc7TN2tJoduaG6srynQ5ojbNRr9S2riyY",
        description: "Rich cream cheese layers with fresh strawberries from local farms."
    },
    {
        id: 4,
        name: "Almond Croissant",
        price: 25,
        category: "bakery",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh1Wz15spPEzBcHLJ7xAAtAZXM4Z6lXJqIwjfIt-aIuBUnSZiGDWFdLzVYx5OK7FO43R_ZlCKyRUvDEAnXZZNEy5nydavBMMz83RSoQccLN1-rAo8mtdep8N8rJefCa-oEXxBiV1xs88gcxKkrSjbYa3ypyxJrnmZAIh6vhmDoWtA0cYN3ER9XDDhtL1osqq3JNEZjNZ0Q7kk8jCDIcXzT4TskOEwv1oqvPkuuD4awedwO6BVIP5VkdLMBWTh6We0LBZ0TGZRmSOQ",
        description: "Croissant filled with almond cream and topped with toasted almonds."
    },
    {
        id: 5,
        name: "Latte Art",
        price: 35,
        category: "coffee",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdXoXKZMV01pgkzyB9gvIfzL6lipPCdUT10yBrkCfiHhn_M4gjH55FgNAtjfyFFFWQv8k4iPHZBSDmtXG-uM9IGO6aTaZg6n0Rwq4Ei6FS6Txpnhq29hls_JAm0LvVwxowVn1Aukf-af-ONaQuMa9_f8xOGTIjJd9EjuUh4iRn0Ce_7KnFWIBoWVyFrFzT3GEViubNMcdpYJvT1Ij6Dsbfu-sVc6xi5qmXQtBcmLwxuapEK480H5XMc1jq2jUsH91QtOgQF-9eTB4",
        description: "Premium espresso with steamed milk and artistic latte art."
    },
    {
        id: 6,
        name: "Fettuccine Alfredo",
        price: 75,
        category: "pasta",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8uqvCE6SV2fpXAhCjRT3J4Z1xXmBJEH8KaKoOlBSjKQF7lfDS7_4LUCCIWGWPghzhq0ee760MDdEnoiS-KhHHKxGr0IELxPc9sv40fs7c-cxvQqAnCIg4kp1piBMekqr50K216LzV1Or7l5GHz4oEjCC_6y3351qcK2dcP4wTcdcoa0uQ2VSyq_kSeM5YC-WgsUK7Ttu3TkfeQl3xvJvinrJ1-Asems01YLzkt043KR8O_5jfRegfyfstwn99EpxlaVcpZ1ejsfM",
        description: "Creamy pasta with rich Alfredo sauce and Parmesan cheese."
    }
];

// State
let cart = JSON.parse(localStorage.getItem('ajanef_cart')) || [];
let currentCategory = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenu();
    renderCart();
    initAnimations();
    initCounters();
    
    // Search functionality
    document.getElementById('search-input').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderMenu();
    });

    // Mobile menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        const icon = mobileBtn.querySelector('span');
        if (mobileMenu.classList.contains('open')) {
            icon.textContent = 'close';
        } else {
            icon.textContent = 'menu';
        }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileBtn.querySelector('span').textContent = 'menu';
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-2xl');
            navbar.classList.replace('bg-zinc-950/80', 'bg-zinc-950/95');
        } else {
            navbar.classList.remove('shadow-2xl');
            navbar.classList.replace('bg-zinc-950/95', 'bg-zinc-950/80');
        }
    });

    // Hero parallax
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImg = document.getElementById('hero-image');
        if (heroImg) {
            heroImg.style.transform = `translateY(${scrolled * 0.5}px) scale(1.1)`;
        }
    });
});

// Render Categories
function renderCategories() {
    const container = document.getElementById('category-container');
    container.innerHTML = categories.map(cat => `
        <button onclick="setCategory('${cat.id}')" 
                class="flex-none px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${currentCategory === cat.id ? 'bg-primary text-on-primary shadow-lg shadow-primary/20 scale-105' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-bright'}">
            <span class="material-symbols-outlined text-sm">${cat.icon}</span>
            <span class="font-bold text-sm">${cat.name}</span>
        </button>
    `).join('');
}

// Set Category
function setCategory(id) {
    currentCategory = id;
    renderCategories();
    renderMenu();
    
    const menuSection = document.getElementById('menu');
    const rect = menuSection.getBoundingClientRect();
    if (rect.top > 100 || rect.bottom < 0) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Render Menu
function renderMenu() {
    const grid = document.getElementById('menu-grid');
    const emptyState = document.getElementById('empty-state');
    
    let filtered = menuItems;
    
    if (currentCategory !== 'all') {
        filtered = filtered.filter(item => item.category === currentCategory);
    }
    
    if (searchQuery) {
        filtered = filtered.filter(item => 
            item.name.toLowerCase().includes(searchQuery) || 
            item.description.toLowerCase().includes(searchQuery)
        );
    }
    
    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    grid.innerHTML = filtered.map((item, index) => `
        <div class="reveal bg-surface-container rounded-3xl overflow-hidden group border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1" style="transition-delay: ${index * 50}ms">
            <div class="h-64 overflow-hidden img-zoom relative">
                <img class="w-full h-full object-cover" src="${item.image}" alt="${item.name}" loading="lazy"/>
                <button onclick="addToCart(${item.id})" class="absolute bottom-4 right-4 w-12 h-12 bg-primary text-zinc-950 rounded-full flex items-center justify-center shadow-lg transform translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <span class="material-symbols-outlined">add</span>
                </button>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h4 class="text-xl font-bold">${item.name}</h4>
                    <span class="text-primary font-bold font-label text-lg">${item.price} MAD</span>
                </div>
                <p class="text-on-surface-variant text-sm mb-6 leading-relaxed line-clamp-2">${item.description}</p>
                <button onclick="addToCart(${item.id})" class="w-full flex items-center justify-center gap-2 bg-surface-container-high hover:bg-primary hover:text-on-primary py-3 rounded-xl transition-all font-bold group/btn">
                    <span class="material-symbols-outlined text-lg transition-transform group-hover/btn:rotate-12">add_shopping_cart</span>
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
    
    setTimeout(initAnimations, 100);
}

// Cart Functions
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    const existing = cart.find(i => i.id === itemId);
    
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    saveCart();
    renderCart();
    showToast(`${item.name} added to cart`);
    
    const badge = document.getElementById('cart-badge');
    badge.classList.add('animate-bounce');
    setTimeout(() => badge.classList.remove('animate-bounce'), 1000);
}

function quickAddToCart(itemId) {
    addToCart(itemId);
    if (window.innerWidth < 768) {
        setTimeout(() => {
            document.getElementById('cart-sidebar').classList.remove('translate-x-full');
            document.getElementById('overlay').classList.remove('hidden');
            setTimeout(() => document.getElementById('overlay').classList.add('opacity-100'), 10);
        }, 300);
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    saveCart();
    renderCart();
}

function updateQuantity(itemId, delta) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

function clearCart() {
    if (cart.length === 0) return;
    showClearCartModal();
}

let clearCartModal = null;

function showClearCartModal() {
    // Remove existing modal if any
    if (clearCartModal) clearCartModal.remove();
    
    // Create modal HTML
    const modalHTML = `
        <div id="clear-cart-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] flex items-center justify-center p-4">
            <div id="clear-cart-modal" class="glass-panel max-w-md w-full mx-4 rounded-3xl p-8 shadow-2xl shadow-purple-500/20 border border-[#d4a96a]  animate-fade-in-up">
                <div class="text-center mb-8">
                    <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#98022f] to-[#881d03] rounded-2xl flex items-center justify-center">
                        <i class="fas fa-exclamation-triangle text-2xl from-[#98022f] to-[#881d03]"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-2 font-serif">Clear Cart?</h3>
                    <p class="text-zinc-300 text-lg mb-1">Are you sure you want to clear your cart?</p>
                    <p class="text-zinc-400 text-sm">This action cannot be undone.</p>
                </div>
                <div class="flex gap-3">
                    <button onclick="hideClearCartModal()" class="flex-1 bg-zinc-800/50 backdrop-blur-sm border-amber-600 hover:border-zinc-600 text-zinc-200 py-4 px-6 rounded-2xl font-bold text-sm transition-all hover:scale-[1.02] hover:shadow-lg">
                        Cancel
                    </button>
                    <button onclick="confirmClearCart()" class="flex-1 bg-gradient-to-r from-[#f2c483] to-[#d4a96a] text-white py-4 px-6 rounded-2xl font-bold text-sm shadow-lg  hover:caret-amber-500 hover:shadow-xl border-[#d4a96a]  transition-all hover:scale-[1.02] active:scale-[0.98]">
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Insert modal
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    clearCartModal = document.getElementById('clear-cart-modal');
    
    // Focus trap
    clearCartModal.focus();
    clearCartModal.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') hideClearCartModal();
    });
    
    // Backdrop click close
    document.getElementById('clear-cart-backdrop').addEventListener('click', function(e) {
        if (e.target === this) hideClearCartModal();
    });
}

function hideClearCartModal() {
    if (clearCartModal && clearCartModal.parentElement) {
        anime({
            targets: '#clear-cart-modal',
            opacity: 0,
            translateY: -20,
            scale: 0.95,
            duration: 200,
            easing: 'easeOutQuad',
            complete: () => {
                if (clearCartModal.parentElement) {
                    clearCartModal.parentElement.remove();
                    clearCartModal = null;
                }
            }
        });
    }
}

function confirmClearCart() {
    cart = [];
    saveCart();
    renderCart();
    showToast('Cart cleared');
    hideClearCartModal();
}

function saveCart() {
    localStorage.setItem('ajanef_cart', JSON.stringify(cart));
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const emptyState = document.getElementById('cart-empty');
    const countEl = document.getElementById('cart-count');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    const badge = document.getElementById('cart-badge');
    const mobileBadge = document.getElementById('mobile-cart-badge');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    countEl.textContent = totalCount;
    subtotalEl.textContent = totalPrice + ' MAD';
    totalEl.textContent = totalPrice + ' MAD';
    
    if (totalCount > 0) {
        badge.textContent = totalCount;
        badge.classList.remove('hidden');
        mobileBadge.textContent = totalCount;
        mobileBadge.classList.remove('hidden');
        emptyState.classList.add('hidden');
        container.classList.remove('hidden');
        checkoutBtn.disabled = false;
    } else {
        badge.classList.add('hidden');
        mobileBadge.classList.add('hidden');
        emptyState.classList.remove('hidden');
        container.classList.add('hidden');
        checkoutBtn.disabled = true;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="flex gap-4 group animate-slide-in bg-surface-container-high p-3 rounded-2xl">
            <div class="w-20 h-20 rounded-xl overflow-hidden flex-none">
                <img class="w-full h-full object-cover" src="${item.image}" alt="${item.name}"/>
            </div>
            <div class="flex-1 flex flex-col justify-between">
                <div class="flex justify-between items-start">
                    <h4 class="text-zinc-100 font-bold text-sm">${item.name}</h4>
                    <button onclick="removeFromCart(${item.id})" class="text-zinc-500 hover:text-red-400 transition-colors">
                        <span class="material-symbols-outlined text-lg">close</span>
                    </button>
                </div>
                <div class="flex justify-between items-center">
                    <p class="text-[#d4a96a] text-sm font-bold">${item.price} MAD</p>
                    <div class="flex items-center gap-3 bg-surface-container rounded-lg p-1">
                        <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 rounded bg-surface-container-high text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors flex items-center justify-center">
                            <span class="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span class="text-zinc-200 text-sm font-bold w-4 text-center">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 rounded bg-surface-container-high text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors flex items-center justify-center">
                            <span class="material-symbols-outlined text-sm">add</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebar.classList.contains('translate-x-full')) {
        sidebar.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => overlay.classList.add('opacity-100'), 10);
    } else {
        sidebar.classList.add('translate-x-full');
        overlay.classList.remove('opacity-100');
        document.body.style.overflow = '';
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }
}

// WhatsApp Integration
function checkout() {
    if (cart.length === 0) return;
    
    let message = '🥐 *New Order from Ajanef Martil* 🥐\n\n';
    message += '📋 *Order Details:*\n';
    
    cart.forEach(item => {
        message += `• ${item.name} x ${item.quantity} = ${item.price * item.quantity} MAD\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\n *Total Amount:* ${total} MAD\n`;
    message += `\n Delivery Address: [Please add your address]\n`;
    message += `   Contact Number: [Please add your phone number]`;
    
    sendWhatsAppMessage(message);
}

function sendWhatsAppMessage(text) {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/212608173585?text=${encoded}`, '_blank');
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const msgEl = document.getElementById('toast-message');
    msgEl.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Scroll Animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Counter Animation
function initCounters() {
    const counters = [
        { id: 'counter-1', target: 1500, suffix: '+' },
        { id: 'counter-2', target: 500, suffix: '+' },
        { id: 'counter-3', target: 8, suffix: '' }
    ];
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = counters.find(c => c.id === entry.target.id);
                if (counter) {
                    animateCounter(entry.target, counter.target, counter.suffix);
                }
                observer.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(c => {
        const el = document.getElementById(c.id);
        if (el) observer.observe(el);
    });
}

function animateCounter(element, target, suffix) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 30);
}