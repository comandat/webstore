class ProductsPage {
    constructor() {
        this.allProducts = this.getAllProducts();
        this.filteredProducts = [...this.allProducts];
        this.currentPage = 1;
        this.productsPerPage = 12;
        this.currentView = 'grid';
        this.filters = {
            category: '',
            condition: '',
            priceMin: 0,
            priceMax: 1500,
            brands: [],
            search: ''
        };
        this.sortBy = 'relevance';
        this.init();
    }

    init() {
        this.parseUrlParams();
        this.initFilters();
        this.initPriceRange();
        this.initEventListeners();
        this.initViewToggle();
        this.applyFilters();
        this.renderProducts();
        this.updateResultsCount();
        this.renderActiveFilters();
    }

    getAllProducts() {
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
                specs: { megapixels: "18MP", zoom: "3x optical" },
                rating: 4.5,
                reviews: 23
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
                specs: { resolution: "4K", flightTime: "30min" },
                rating: 4.8,
                reviews: 15
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
                specs: { battery: "18 ore", display: "45mm" },
                rating: 4.6,
                reviews: 42
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
                specs: { capacity: "75L", weight: "3.2kg" },
                rating: 4.3,
                reviews: 18
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
                specs: { storage: "256GB", color: "Graphite" },
                rating: 4.9,
                reviews: 67
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
                specs: { cpu: "Intel i7", ram: "16GB", storage: "512GB SSD" },
                rating: 4.7,
                reviews: 34
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
                specs: { material: "PU Leather", weight: "22kg" },
                rating: 4.4,
                reviews: 28
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
                specs: { noiseCancellation: "Activă", battery: "30 ore" },
                rating: 4.8,
                reviews: 56
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
                specs: { capacity: "20L", waterproof: "Da" },
                rating: 4.6,
                reviews: 19
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
                specs: { size: "42", color: "Negru/Alb" },
                rating: 4.5,
                reviews: 41
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
                specs: { material: "Piele", size: "41" },
                rating: 4.7,
                reviews: 12
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
                specs: { pressure: "15 bar", capacity: "1.8L" },
                rating: 4.4,
                reviews: 25
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
                specs: { power: "20W", battery: "12 ore" },
                rating: 4.3,
                reviews: 38
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
                specs: { megapixels: "24MP", sensor: "APS-C" },
                rating: 4.8,
                reviews: 22
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
                specs: { size: "27 inch", resolution: "2560x1440" },
                rating: 4.6,
                reviews: 31
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
                specs: { storage: "128GB", display: "11 inch" },
                rating: 4.9,
                reviews: 45
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
                specs: { speed: "5400 Mbps", coverage: "250m²" },
                rating: 4.5,
                reviews: 16
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
                specs: { battery: "90 min", capacity: "0.4L" },
                rating: 4.4,
                reviews: 29
            }
        ];
    }

    parseUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        const search = urlParams.get('search');
        
        if (category) {
            this.filters.category = category;
            document.getElementById('category-filter').value = category;
            this.updatePageTitle(category);
        }
        
        if (search) {
            this.filters.search = search;
            document.getElementById('search-input').value = search;
            this.updatePageTitle(`Căutare: ${search}`);
        }
    }

    updatePageTitle(context) {
        const pageTitle = document.getElementById('page-title');
        if (pageTitle) {
            if (context.startsWith('Căutare:')) {
                pageTitle.textContent = context;
            } else {
                const titles = {
                    'electronics': 'Electronice',
                    'laptops': 'Laptopuri',
                    'gaming': 'Gaming',
                    'fashion': 'Fashion',
                    'home': 'Casă și Grădină',
                    'beauty': 'Îngrijire Personală',
                    'sports': 'Sport și Travel'
                };
                pageTitle.textContent = titles[context] || 'Toate Produsele';
            }
        }
    }

    initFilters() {
        const categoryFilter = document.getElementById('category-filter');
        const conditionFilter = document.getElementById('condition-filter');
        const sortSelect = document.getElementById('sort-select');
        const applyFiltersBtn = document.getElementById('apply-filters');
        const clearAllFilters = document.getElementById('clear-all-filters');
        const resetFilters = document.getElementById('reset-filters');

        categoryFilter.addEventListener('change', () => {
            this.filters.category = categoryFilter.value;
            this.applyFilters();
            this.renderProducts();
            this.updatePageTitle(this.filters.category);
        });

        conditionFilter.addEventListener('change', () => {
            this.filters.condition = conditionFilter.value;
            this.applyFilters();
            this.renderProducts();
        });

        sortSelect.addEventListener('change', () => {
            this.sortBy = sortSelect.value;
            this.sortProducts();
            this.renderProducts();
        });

        applyFiltersBtn.addEventListener('click', () => {
            this.collectBrandFilters();
            this.applyFilters();
            this.renderProducts();
        });

        clearAllFilters.addEventListener('click', () => {
            this.clearAllFilters();
        });

        resetFilters.addEventListener('click', () => {
            this.clearAllFilters();
        });
    }

    initPriceRange() {
        const priceMin = document.getElementById('price-min');
        const priceMax = document.getElementById('price-max');
        const priceRangeFill = document.getElementById('price-range-fill');
        const priceMinLabel = document.getElementById('price-min-label');
        const priceMaxLabel = document.getElementById('price-max-label');

        let isDragging = false;
        let currentThumb = null;

        const updatePriceRange = () => {
            const minPercent = parseFloat(priceMin.style.left) || 0;
            const maxPercent = parseFloat(priceMax.style.left) || 100;
            
            const minPrice = Math.round((minPercent / 100) * 1500);
            const maxPrice = Math.round((maxPercent / 100) * 1500);
            
            priceMinLabel.textContent = `€${minPrice}`;
            priceMaxLabel.textContent = `€${maxPrice}`;
            
            priceRangeFill.style.left = `${minPercent}%`;
            priceRangeFill.style.width = `${maxPercent - minPercent}%`;
            
            this.filters.priceMin = minPrice;
            this.filters.priceMax = maxPrice;
        };

        const handleMouseMove = (e) => {
            if (!isDragging || !currentThumb) return;
            
            const rect = currentThumb.parentElement.getBoundingClientRect();
            const percent = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
            
            if (currentThumb === priceMin) {
                const maxPercent = parseFloat(priceMax.style.left) || 100;
                if (percent < maxPercent) {
                    currentThumb.style.left = `${percent}%`;
                }
            } else {
                const minPercent = parseFloat(priceMin.style.left) || 0;
                if (percent > minPercent) {
                    currentThumb.style.left = `${percent}%`;
                }
            }
            
            updatePriceRange();
        };

        const handleMouseUp = () => {
            isDragging = false;
            currentThumb = null;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            
            this.applyFilters();
            this.renderProducts();
        };

        [priceMin, priceMax].forEach(thumb => {
            thumb.addEventListener('mousedown', (e) => {
                isDragging = true;
                currentThumb = thumb;
                e.preventDefault();
                
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
            });
        });

        updatePriceRange();
    }

    initViewToggle() {
        const gridViewBtn = document.getElementById('grid-view');
        const listViewBtn = document.getElementById('list-view');

        gridViewBtn.addEventListener('click', () => {
            this.currentView = 'grid';
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            this.renderProducts();
        });

        listViewBtn.addEventListener('click', () => {
            this.currentView = 'list';
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            this.renderProducts();
        });
    }

    collectBrandFilters() {
        const brandFilters = document.querySelectorAll('.brand-filter:checked');
        this.filters.brands = Array.from(brandFilters).map(filter => filter.value);
    }

    applyFilters() {
        this.filteredProducts = this.allProducts.filter(product => {
            const matchesCategory = !this.filters.category || product.category === this.filters.category;
            const matchesCondition = !this.filters.condition || product.condition === this.filters.condition;
            const matchesPrice = product.price >= this.filters.priceMin && product.price <= this.filters.priceMax;
            const matchesBrands = this.filters.brands.length === 0 || this.filters.brands.includes(product.brand);
            const matchesSearch = !this.filters.search || 
                product.name.toLowerCase().includes(this.filters.search.toLowerCase()) ||
                product.description.toLowerCase().includes(this.filters.search.toLowerCase()) ||
                product.brand.toLowerCase().includes(this.filters.search.toLowerCase());

            return matchesCategory && matchesCondition && matchesPrice && matchesBrands && matchesSearch;
        });

        this.sortProducts();
        this.currentPage = 1;
        this.updateResultsCount();
        this.renderActiveFilters();
    }

    sortProducts() {
        switch (this.sortBy) {
            case 'price_asc':
                this.filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price_desc':
                this.filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'condition':
                const conditionOrder = { 'Ca Nou': 1, 'Foarte Bun': 2, 'Bun': 3, 'Resigilat': 4 };
                this.filteredProducts.sort((a, b) => conditionOrder[a.condition] - conditionOrder[b.condition]);
                break;
            default:
                break;
        }
    }

    renderProducts() {
        const productsGrid = document.getElementById('products-grid');
        const productsList = document.getElementById('products-list');
        const noResults = document.getElementById('no-results');
        const loadingSpinner = document.getElementById('loading-spinner');

        loadingSpinner.classList.remove('hidden');
        productsGrid.classList.add('hidden');
        productsList.classList.add('hidden');
        noResults.classList.add('hidden');

        setTimeout(() => {
            loadingSpinner.classList.add('hidden');
            
            if (this.filteredProducts.length === 0) {
                noResults.classList.remove('hidden');
                return;
            }

            if (this.currentView === 'grid') {
                productsGrid.classList.remove('hidden');
                productsList.classList.add('hidden');
                this.renderGridView();
            } else {
                productsList.classList.remove('hidden');
                productsGrid.classList.add('hidden');
                this.renderListView();
            }

            this.renderPagination();
            this.initProductAnimations();
        }, 300);
    }

    renderGridView() {
        const productsGrid = document.getElementById('products-grid');
        const startIndex = (this.currentPage - 1) * this.productsPerPage;
        const endIndex = startIndex + this.productsPerPage;
        const productsToShow = this.filteredProducts.slice(startIndex, endIndex);

        productsGrid.innerHTML = '';
        
        productsToShow.forEach(product => {
            const productCard = this.createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }

    renderListView() {
        const productsList = document.getElementById('products-list');
        const startIndex = (this.currentPage - 1) * this.productsPerPage;
        const endIndex = startIndex + this.productsPerPage;
        const productsToShow = this.filteredProducts.slice(startIndex, endIndex);

        productsList.innerHTML = '';
        
        productsToShow.forEach(product => {
            const productCard = this.createListProductCard(product);
            productsList.appendChild(productCard);
        });
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card fade-in-up';
        
        const discountPercent = product.originalPrice ? 
            Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

        card.innerHTML = `
            <div class="relative">
                <img alt="${product.name}" src="${product.image}" />
                ${discountPercent > 0 ? `<span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">-${discountPercent}%</span>` : ''}
                ${product.condition === 'Ca Nou' ? `<span class="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">CA NOU</span>` : ''}
            </div>
            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">${product.name}</h3>
                
                <div class="flex items-center mb-2">
                    <div class="flex text-yellow-400 mr-2">
                        ${this.renderStars(product.rating)}
                    </div>
                    <span class="text-sm text-gray-500">(${product.reviews})</span>
                </div>
                
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

        this.attachProductCardEvents(card, product);
        return card;
    }

    createListProductCard(product) {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer fade-in-up';
        
        const discountPercent = product.originalPrice ? 
            Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

        card.innerHTML = `
            <div class="flex items-center space-x-4">
                <div class="relative flex-shrink-0">
                    <img src="${product.image}" alt="${product.name}" class="w-24 h-24 object-cover rounded-lg">
                    ${discountPercent > 0 ? `<span class="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">-${discountPercent}%</span>` : ''}
                </div>
                
                <div class="flex-1 min-w-0">
                    <h3 class="text-lg font-semibold text-gray-800 hover:text-green-600 mb-1">${product.name}</h3>
                    
                    <div class="flex items-center mb-2">
                        <div class="flex text-yellow-400 mr-2">
                            ${this.renderStars(product.rating)}
                        </div>
                        <span class="text-sm text-gray-500">(${product.reviews} recenzii)</span>
                    </div>
                    
                    <p class="text-sm text-gray-600 mb-3 line-clamp-2">${product.description}</p>
                    
                    <div class="flex items-center justify-between">
                        <div class="flex items-baseline">
                            <span class="text-xl font-bold text-green-600">€${product.price}</span>
                            ${product.originalPrice ? `<span class="text-sm text-gray-500 line-through ml-2">€${product.originalPrice}</span>` : ''}
                        </div>
                        <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">${product.condition}</span>
                    </div>
                </div>
                
                <div class="flex flex-col space-y-2">
                    <button class="add-to-cart-btn bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors" data-product-id="${product.id}">
                        <span class="material-icons text-sm">shopping_cart</span>
                    </button>
                    <button class="wishlist-btn p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors" data-product-id="${product.id}">
                        <span class="material-icons text-gray-600 text-sm">favorite_border</span>
                    </button>
                </div>
            </div>
        `;

        this.attachProductCardEvents(card, product);
        return card;
    }

    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let starsHTML = '';

        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<span class="material-icons text-sm">star</span>';
        }
        
        if (hasHalfStar) {
            starsHTML += '<span class="material-icons text-sm">star_half</span>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<span class="material-icons text-sm text-gray-300">star</span>';
        }

        return starsHTML;
    }

    attachProductCardEvents(card, product) {
        const addToCartBtn = card.querySelector('.add-to-cart-btn');
        const wishlistBtn = card.querySelector('.wishlist-btn');

        addToCartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.ecommerceApp) {
                window.ecommerceApp.addToCart(product);
            }
        });

        wishlistBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.ecommerceApp) {
                window.ecommerceApp.toggleWishlist(product);
            }
        });

        card.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });
    }

    renderActiveFilters() {
        const activeFiltersContainer = document.getElementById('active-filters');
        activeFiltersContainer.innerHTML = '';

        const filters = [];

        if (this.filters.category) {
            const categoryNames = {
                'electronics': 'Electronice',
                'laptops': 'Laptopuri',
                'gaming': 'Gaming',
                'fashion': 'Modă',
                'home': 'Casă și Grădină',
                'beauty': 'Îngrijire Personală',
                'sports': 'Sport și Travel'
            };
            filters.push({ type: 'category', value: this.filters.category, label: categoryNames[this.filters.category] });
        }

        if (this.filters.condition) {
            filters.push({ type: 'condition', value: this.filters.condition, label: this.filters.condition });
        }

        if (this.filters.priceMin > 0 || this.filters.priceMax < 1500) {
            filters.push({ type: 'price', value: 'price', label: `€${this.filters.priceMin} - €${this.filters.priceMax}` });
        }

        this.filters.brands.forEach(brand => {
            filters.push({ type: 'brand', value: brand, label: brand });
        });

        if (filters.length > 0) {
            const filtersHTML = filters.map(filter => `
                <span class="filter-tag">
                    ${filter.label}
                    <button type="button" class="ml-2 text-green-600 hover:text-green-800" onclick="productsPage.removeFilter('${filter.type}', '${filter.value}')">
                        <span class="material-icons text-xs">close</span>
                    </button>
                </span>
            `).join('');

            activeFiltersContainer.innerHTML = `
                <div class="flex flex-wrap gap-2 mb-4">
                    <span class="text-sm text-gray-600 mr-2">Filtre active:</span>
                    ${filtersHTML}
                </div>
            `;
        }
    }

    removeFilter(type, value) {
        switch (type) {
            case 'category':
                this.filters.category = '';
                document.getElementById('category-filter').value = '';
                break;
            case 'condition':
                this.filters.condition = '';
                document.getElementById('condition-filter').value = '';
                break;
            case 'price':
                this.filters.priceMin = 0;
                this.filters.priceMax = 1500;
                document.getElementById('price-min').style.left = '0%';
                document.getElementById('price-max').style.left = '100%';
                document.getElementById('price-min-label').textContent = '€0';
                document.getElementById('price-max-label').textContent = '€1500';
                document.getElementById('price-range-fill').style.left = '0%';
                document.getElementById('price-range-fill').style.width = '100%';
                break;
            case 'brand':
                this.filters.brands = this.filters.brands.filter(brand => brand !== value);
                document.querySelector(`input[value="${value}"]`).checked = false;
                break;
        }

        this.applyFilters();
        this.renderProducts();
        this.renderActiveFilters();
    }

    updateResultsCount() {
        const resultsCount = document.getElementById('results-count');
        const totalResults = this.filteredProducts.length;
        
        if (totalResults === 0) {
            resultsCount.textContent = 'Nu s-au găsit produse';
        } else if (totalResults === 1) {
            resultsCount.textContent = '1 produs găsit';
        } else {
            resultsCount.textContent = `${totalResults} produse găsite`;
        }
    }

    renderPagination() {
        const pagination = document.getElementById('pagination');
        const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
        
        if (totalPages <= 1) {
            pagination.innerHTML = '';
            return;
        }

        let paginationHTML = '';
        
        if (this.currentPage > 1) {
            paginationHTML += `<button class="pagination-btn px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50" data-page="${this.currentPage - 1}">Anterior</button>`;
        }

        const startPage = Math.max(1, this.currentPage - 2);
        const endPage = Math.min(totalPages, this.currentPage + 2);

        if (startPage > 1) {
            paginationHTML += `<button class="pagination-btn px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50" data-page="1">1</button>`;
            if (startPage > 2) {
                paginationHTML += `<span class="px-3 py-2 text-gray-500">...</span>`;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `<button class="pagination-btn px-3 py-2 border rounded-lg ${i === this.currentPage ? 'bg-green-600 text-white border-green-600' : 'border-gray-300 hover:bg-gray-50'}" data-page="${i}">${i}</button>`;
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                paginationHTML += `<span class="px-3 py-2 text-gray-500">...</span>`;
            }
            paginationHTML += `<button class="pagination-btn px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50" data-page="${totalPages}">${totalPages}</button>`;
        }

        if (this.currentPage < totalPages) {
            paginationHTML += `<button class="pagination-btn px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50" data-page="${this.currentPage + 1}">Următor</button>`;
        }

        pagination.innerHTML = paginationHTML;

        const paginationBtns = pagination.querySelectorAll('.pagination-btn');
        paginationBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const page = parseInt(btn.dataset.page);
                if (page && page !== this.currentPage) {
                    this.currentPage = page;
                    this.renderProducts();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    }

    clearAllFilters() {
        this.filters = {
            category: '',
            condition: '',
            priceMin: 0,
            priceMax: 1500,
            brands: [],
            search: ''
        };

        document.getElementById('category-filter').value = '';
        document.getElementById('condition-filter').value = '';
        document.getElementById('search-input').value = '';
        
        document.querySelectorAll('.brand-filter').forEach(filter => {
            filter.checked = false;
        });

        document.getElementById('price-min').style.left = '0%';
        document.getElementById('price-max').style.left = '100%';
        document.getElementById('price-min-label').textContent = '€0';
        document.getElementById('price-max-label').textContent = '€1500';
        document.getElementById('price-range-fill').style.left = '0%';
        document.getElementById('price-range-fill').style.width = '100%';

        this.applyFilters();
        this.renderProducts();
        this.renderActiveFilters();
        this.updatePageTitle('Toate Produsele');
    }

    initProductAnimations() {
        const productCards = document.querySelectorAll('.product-card, .fade-in-up');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 50);
                }
            });
        });

        productCards.forEach(el => {
            observer.observe(el);
        });
    }
}

let productsPage;

document.addEventListener('DOMContentLoaded', () => {
    productsPage = new ProductsPage();
});