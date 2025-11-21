class EcommerceApp {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.products = this.getProducts();
        this.currentBannerSlide = 0;
        this.bannerInterval = null;
        this.init();
    }

    init() {
        this.updateCartCount();
        this.initBannerSlider();
        this.loadProducts();
        this.initMenu();
        this.initSearch();
        this.initAnimations();
        this.initMobileMenu();
        this.initExitIntent();
        this.initScrollEffects();
    }

    getProducts() {
        return [
            {
                id: 1,
                name: "Aparat Foto Vintage Canon",
                price: 120.50,
                originalPrice: 150.00,
                condition: "Foarte Bun",
                category: "electronics",
                brand: "Canon",
                image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
                description: "Aparat foto vintage în stare excelentă, perfect pentru fotografii artistice.",
                specs: { megapixels: "18MP", zoom: "3x optical" }
            },
            {
                id: 2,
                name: "Dronă Profesională DJI",
                price: 450.00,
                originalPrice: 650.00,
                condition: "Ca Nou",
                category: "electronics",
                brand: "DJI",
                image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
                description: "Dronă profesională cu cameră 4K și autonomie de zbor de 30 minute.",
                specs: { resolution: "4K", flightTime: "30min" }
            },
            {
                id: 3,
                name: "Smartwatch Apple Series 7",
                price: 199.99,
                originalPrice: 299.99,
                condition: "Foarte Bun",
                category: "electronics",
                brand: "Apple",
                image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
                description: "Smartwatch elegant cu monitorizare sănătate și notificări inteligente.",
                specs: { battery: "18 ore", display: "45mm" }
            },
            {
                id: 4,
                name: "Troller de Călătorie Samsonite",
                price: 85.00,
                originalPrice: 120.00,
                condition: "Bun",
                category: "fashion",
                brand: "Samsonite",
                image: "https://images.unsplash.com/photo-1585155770416-075f702c11e5?w=500",
                description: "Troller de călătorie robust și ușor, ideal pentru vacanțe.",
                specs: { capacity: "75L", weight: "3.2kg" }
            },
            {
                id: 5,
                name: "iPhone 13 Pro Max",
                price: 780.99,
                originalPrice: 999.99,
                condition: "Foarte Bun",
                category: "electronics",
                brand: "Apple",
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
                description: "Smartphone modern cu ecran OLED și performanțe de top.",
                specs: { storage: "256GB", color: "Graphite" }
            },
            {
                id: 6,
                name: "Laptop Dell XPS 15",
                price: 1200.00,
                originalPrice: 1500.00,
                condition: "Ca Nou",
                category: "laptops",
                brand: "Dell",
                image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500",
                description: "Laptop performant cu procesor i7 și 16GB RAM pentru task-uri solicitante.",
                specs: { cpu: "Intel i7", ram: "16GB", storage: "512GB SSD" }
            },
            {
                id: 7,
                name: "Scaun Gaming Razer",
                price: 250.00,
                originalPrice: 350.00,
                condition: "Foarte Bun",
                category: "gaming",
                brand: "Razer",
                image: "https://images.unsplash.com/photo-1605733513594-2a7730057d38?w=500",
                description: "Scaun gaming ergonomic cu suport lombar și cotiere ajustabile.",
                specs: { material: "PU Leather", weight: "22kg" }
            },
            {
                id: 8,
                name: "Căști Audio Sony WH-1000XM4",
                price: 180.00,
                originalPrice: 250.00,
                condition: "Bun",
                category: "electronics",
                brand: "Sony",
                image: "https://images.unsplash.com/photo-1550009158-94ae76552485?w=500",
                description: "Căști audio Hi-Fi cu sunet de înaltă fidelitate și confort superior.",
                specs: { noiseCancellation: "Activă", battery: "30 ore" }
            },
            {
                id: 9,
                name: "Rucsac Urban Peak Design",
                price: 65.50,
                originalPrice: 90.00,
                condition: "Foarte Bun",
                category: "fashion",
                brand: "Peak Design",
                image: "https://images.unsplash.com/photo-1618384887924-37898b6baf30?w=500",
                description: "Rucsac urban modern cu compartimente organizate și design minimalist.",
                specs: { capacity: "20L", waterproof: "Da" }
            },
            {
                id: 10,
                name: "Pantofi Sport Nike Air Max",
                price: 95.00,
                originalPrice: 130.00,
                condition: "Bun",
                category: "fashion",
                brand: "Nike",
                image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
                description: "Pantofi sport ușori și confortabili pentru alergare și fitness.",
                specs: { size: "42", color: "Negru/Alb" }
            },
            {
                id: 11,
                name: "Pantofi Eleganți Armani",
                price: 130.00,
                originalPrice: 180.00,
                condition: "Ca Nou",
                category: "fashion",
                brand: "Armani",
                image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500",
                description: "Pantofi eleganți din piele naturală, perfecți pentru ocazii speciale.",
                specs: { material: "Piele", size: "41" }
            },
            {
                id: 12,
                name: "Espressor Automat DeLonghi",
                price: 299.99,
                originalPrice: 450.00,
                condition: "Foarte Bun",
                category: "home",
                brand: "DeLonghi",
                image: "https://images.unsplash.com/photo-1618384887924-37898b6baf30?w=500",
                description: "Espressor automat cu râșniță incorporată și multiple setări de cafea.",
                specs: { pressure: "15 bar", capacity: "1.8L" }
            },
            {
                id: 13,
                name: "Boxă Bluetooth JBL",
                price: 45.99,
                originalPrice: 70.00,
                condition: "Resigilat",
                category: "electronics",
                brand: "JBL",
                image: "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?w=500",
                description: "Boxă bluetooth portabilă cu sunet puternic și bass profund.",
                specs: { power: "20W", battery: "12 ore" }
            },
            {
                id: 14,
                name: "Cameră DSLR Canon EOS",
                price: 550.00,
                originalPrice: 750.00,
                condition: "Foarte Bun",
                category: "electronics",
                brand: "Canon",
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
                description: "Cameră foto digitală DSLR pentru fotografi profesioniști.",
                specs: { megapixels: "24MP", sensor: "APS-C" }
            },
            {
                id: 15,
                name: "Monitor Gaming ASUS",
                price: 320.00,
                originalPrice: 450.00,
                condition: "Bun",
                category: "gaming",
                brand: "ASUS",
                image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
                description: "Monitor gaming cu rată de refresh de 144Hz și timp de răspuns rapid.",
                specs: { size: "27 inch", resolution: "2560x1440" }
            },
            {
                id: 16,
                name: "Tabletă iPad Pro 11",
                price: 650.00,
                originalPrice: 850.00,
                condition: "Foarte Bun",
                category: "laptops",
                brand: "Apple",
                image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
                description: "Tabletă profesională cu ecran Liquid Retina și performanțe excepționale.",
                specs: { storage: "128GB", display: "11 inch" }
            },
            {
                id: 17,
                name: "Router Wi-Fi 6 ASUS",
                price: 120.00,
                originalPrice: 180.00,
                condition: "Ca Nou",
                category: "electronics",
                brand: "ASUS",
                image: "https://images.unsplash.com/photo-1587202372635-57a5a1c5f3b3?w=500",
                description: "Router de ultimă generație cu viteze de până la 5400 Mbps.",
                specs: { speed: "5400 Mbps", coverage: "250m²" }
            },
            {
                id: 18,
                name: "Aspirator Robot iRobot",
                price: 280.00,
                originalPrice: 400.00,
                condition: "Foarte Bun",
                category: "home",
                brand: "iRobot",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
                description: "Aspirator robot inteligent cu navigație avansată și control vocal.",
                specs: { battery: "90 min", capacity: "0.4L" }
            }
        ];
    }

    initBannerSlider() {
        const slides = document.querySelectorAll('.banner-slide');
        const dots = document.querySelectorAll('.banner-nav-dot');
        const prevBtn = document.getElementById('banner-prev');
        const nextBtn = document.getElementById('banner-next');

        if (!slides.length) return;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });

            this.currentBannerSlide = index;
        };

        const nextSlide = () => {
            const nextIndex = (this.currentBannerSlide + 1) % slides.length;
            showSlide(nextIndex);
        };

        const prevSlide = () => {
            const prevIndex = (this.currentBannerSlide - 1 + slides.length) % slides.length;
            showSlide(prevIndex);
        };

        prevBtn?.addEventListener('click', prevSlide);
        nextBtn?.addEventListener('click', nextSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        this.bannerInterval = setInterval(nextSlide, 5000);

        const bannerContainer = document.querySelector('.banner-container');
        bannerContainer?.addEventListener('mouseenter', () => {
            clearInterval(this.bannerInterval);
        });

        bannerContainer?.addEventListener('mouseleave', () => {
            this.bannerInterval = setInterval(nextSlide, 5000);
        });
    }

    loadProducts() {
        const offersTrack = document.getElementById('offers-track');
        if (!offersTrack) return;

        offersTrack.innerHTML = '';
        
        const featuredProducts = this.products.slice(0, 8);
        
        featuredProducts.forEach(product => {
            const productCard = this.createProductCard(product);
            offersTrack.appendChild(productCard);
        });
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const discountPercent = product.originalPrice ? 
            Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

        card.innerHTML = `
            <img alt="${product.name}" src="${product.image}" />
            ${discountPercent > 0 ? `<span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">-${discountPercent}%</span>` : ''}
            ${product.condition === 'Ca Nou' ? `<span class="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">CA NOU</span>` : ''}
            
            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">${product.name}</h3>
                
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-baseline">
                        <span class="text-2xl font-bold text-green-600">€${product.price}</span>
                        ${product.originalPrice ? `<span class="text-sm text-gray-500 line-through ml-2">€${product.originalPrice}</span>` : ''}
                    </div>
                    <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">${product.condition}</span>
                </div>
                
                <p class="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5rem]">${product.description}</p>
                
                <div class="flex gap-2">
                    <button class="add-to-cart-btn flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center" data-product-id="${product.id}">
                        <span class="material-icons text-sm mr-1">shopping_cart</span>
                        Adaugă în coș
                    </button>
                    <button class="wishlist-btn p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors" data-product-id="${product.id}">
                        <span class="material-icons text-gray-600 text-sm">favorite_border</span>
                    </button>
                </div>
            </div>
        `;

        const addToCartBtn = card.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.addToCart(product);
        });

        const wishlistBtn = card.querySelector('.wishlist-btn');
        wishlistBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleWishlist(product);
        });

        card.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });

        return card;
    }

    addToCart(product) {
        try {
            const existingItem = this.cart.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            this.saveCart();
            this.updateCartCount();
            this.showAddToCartNotification(product.name);
            
            this.updateCartUI();
        } catch (error) {
            console.error('Error adding to cart:', error);
            this.showNotification('Eroare la adăugarea produsului în coș', 'error');
        }
    }

    removeFromCart(productId) {
        try {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.saveCart();
            this.updateCartCount();
            this.updateCartUI();
        } catch (error) {
            console.error('Error removing from cart:', error);
        }
    }

    updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        
        if (cartCount) {
            if (totalItems > 0) {
                cartCount.textContent = totalItems;
                cartCount.classList.remove('hidden');
            } else {
                cartCount.classList.add('hidden');
            }
        }
    }

    updateCartUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        if (cartItemsContainer) {
            const cartEmpty = document.getElementById('cart-empty');
            
            if (this.cart.length === 0) {
                cartItemsContainer.classList.add('hidden');
                cartEmpty?.classList.remove('hidden');
            } else {
                cartItemsContainer.classList.remove('hidden');
                cartEmpty?.classList.add('hidden');
            }
        }
    }

    saveCart() {
        try {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    }

    showAddToCartNotification(productName) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 right-4 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 max-w-sm';
        notification.innerHTML = `
            <div class="flex items-center">
                <span class="material-icons mr-2">check_circle</span>
                <div>
                    <p class="font-semibold">${productName}</p>
                    <p class="text-sm opacity-90">adăugat în coș</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    showNotification(message, type = 'success') {
        const colors = {
            success: 'bg-green-600',
            error: 'bg-red-600',
            info: 'bg-blue-600',
            warning: 'bg-yellow-600'
        };
        
        const icons = {
            success: 'check_circle',
            error: 'error',
            info: 'info',
            warning: 'warning'
        };

        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 ${colors[type]} text-white px-4 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 max-w-sm`;
        notification.innerHTML = `
            <div class="flex items-center">
                <span class="material-icons mr-2">${icons[type]}</span>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    toggleWishlist(product) {
        try {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            const existingIndex = wishlist.findIndex(item => item.id === product.id);
            
            if (existingIndex > -1) {
                wishlist.splice(existingIndex, 1);
                this.showNotification('Produs șters din favorite');
            } else {
                wishlist.push(product);
                this.showNotification('Produs adăugat la favorite');
            }
            
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        } catch (error) {
            console.error('Error toggling wishlist:', error);
            this.showNotification('Eroare la actualizarea favorite', 'error');
        }
    }

    initMenu() {
        const productsMenuContainer = document.getElementById('products-menu-container');
        const productsMenu = document.getElementById('products-menu');
        const pageOverlay = document.getElementById('page-overlay');

        if (!productsMenuContainer || !productsMenu) return;

        const showMenu = () => {
            productsMenu.classList.add('show');
            if (pageOverlay) {
                pageOverlay.classList.remove('hidden');
                setTimeout(() => {
                    pageOverlay.classList.add('opacity-100');
                }, 10);
            }
        };

        const hideMenu = () => {
            productsMenu.classList.remove('show');
            if (pageOverlay) {
                pageOverlay.classList.remove('opacity-100');
                setTimeout(() => {
                    pageOverlay.classList.add('hidden');
                }, 300);
            }
        };

        productsMenuContainer.addEventListener('mouseenter', showMenu);
        productsMenuContainer.addEventListener('mouseleave', hideMenu);
        productsMenu.addEventListener('mouseenter', showMenu);
        productsMenu.addEventListener('mouseleave', hideMenu);

        if (pageOverlay) {
            pageOverlay.addEventListener('click', hideMenu);
        }
    }

    initSearch() {
        const searchInput = document.getElementById('search-input');
        if (!searchInput) return;

        let searchTimeout;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const query = e.target.value.trim();
                if (query.length > 2) {
                    this.performSearch(query);
                }
            }, 300);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                if (query) {
                    window.location.href = `products.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }

    performSearch(query) {
        console.log('Searching for:', query);
    }

    initAnimations() {
        const header = document.getElementById('page-header');
        if (header) {
            let lastScrollY = window.scrollY;

            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > 100) {
                    header.classList.add('bg-white/95', 'shadow-lg');
                    header.classList.remove('bg-white/90');
                } else {
                    header.classList.add('bg-white/90');
                    header.classList.remove('bg-white/95', 'shadow-lg');
                }

                if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    header.classList.add('-translate-y-full');
                } else {
                    header.classList.remove('-translate-y-full');
                }
                
                lastScrollY = currentScrollY;
            });
        }

        const staggerElements = document.querySelectorAll('.stagger-animation');
        if (staggerElements.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                    }
                });
            }, { threshold: 0.1 });

            staggerElements.forEach(el => {
                observer.observe(el);
            });
        }
    }

    initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMobileMenu = document.getElementById('close-mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.add('open');
                document.body.style.overflow = 'hidden';
            });

            closeMobileMenu?.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = 'auto';
            });

            mobileMenu.addEventListener('click', (e) => {
                if (e.target === mobileMenu) {
                    mobileMenu.classList.remove('open');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    }

    initExitIntent() {
        let exitIntentShown = false;
        
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY <= 0 && !exitIntentShown) {
                exitIntentShown = true;
                this.showExitIntentPopup();
            }
        });

        window.addEventListener('beforeunload', (e) => {
            if (!exitIntentShown) {
                e.preventDefault();
                e.returnValue = '';
            }
        });
    }

    showExitIntentPopup() {
        const popup = document.createElement('div');
        popup.id = 'exit-intent-popup';
        popup.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        popup.innerHTML = `
            <div class="bg-white rounded-lg p-6 max-w-md w-full text-center fade-in-up">
                <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons text-green-600 text-2xl">local_offer</span>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Nu plecați încă!</h3>
                <p class="text-gray-600 mb-4">Vă oferim un discount special de 5% pentru prima comandă!</p>
                <div class="space-y-3">
                    <button id="claim-discount" class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                        Revendică Discount 5%
                    </button>
                    <button id="close-popup" class="w-full text-gray-600 hover:text-gray-800 font-medium transition-colors">
                        Nu, mulțumesc
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(popup);

        document.getElementById('claim-discount').addEventListener('click', () => {
            localStorage.setItem('discountCode', 'WELCOME5');
            window.location.href = 'products.html';
        });

        document.getElementById('close-popup').addEventListener('click', () => {
            document.body.removeChild(popup);
        });

        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                document.body.removeChild(popup);
            }
        });
    }

    initScrollEffects() {
        const fadeElements = document.querySelectorAll('.fade-in-up');
        
        if (fadeElements.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            fadeElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                observer.observe(el);
            });
        }
    }

    formatPrice(price) {
        return new Intl.NumberFormat('ro-RO', {
            style: 'currency',
            currency: 'EUR'
        }).format(price);
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    destroy() {
        if (this.bannerInterval) {
            clearInterval(this.bannerInterval);
        }
    }
}

let ecommerceApp;

document.addEventListener('DOMContentLoaded', () => {
    ecommerceApp = new EcommerceApp();
});

window.addEventListener('beforeunload', () => {
    if (ecommerceApp) {
        ecommerceApp.destroy();
    }
});