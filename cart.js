class CartPage {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.discountCode = localStorage.getItem('discountCode') || '';
        this.exitIntentShown = false;
        this.init();
    }

    init() {
        this.renderCart();
        this.updateSummary();
        this.initEventListeners();
        this.initExitIntent();
        this.applySavedDiscount();
        this.loadRecommendations();
    }

    renderCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartEmpty = document.getElementById('cart-empty');
        const cartRecommendations = document.getElementById('cart-recommendations');

        if (this.cart.length === 0) {
            cartItemsContainer.classList.add('hidden');
            cartEmpty.classList.remove('hidden');
            cartRecommendations.classList.add('hidden');
            return;
        }

        cartItemsContainer.classList.remove('hidden');
        cartEmpty.classList.add('hidden');
        cartRecommendations.classList.remove('hidden');

        cartItemsContainer.innerHTML = '';

        this.cart.forEach((item, index) => {
            const cartItem = this.createCartItem(item, index);
            cartItemsContainer.appendChild(cartItem);
        });
    }

    createCartItem(item, index) {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item fade-in-up';
        
        const discountPercent = item.originalPrice ? 
            Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : 0;

        cartItem.innerHTML = `
            <div class="flex items-start space-x-4">
                <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg flex-shrink-0">
                <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800 hover:text-green-600 cursor-pointer" onclick="window.location.href='product.html?id=${item.id}'">${item.name}</h3>
                            <p class="text-sm text-gray-600">Condiție: ${item.condition}</p>
                            <p class="text-sm text-gray-600">Brand: ${item.brand}</p>
                        </div>
                        <button class="remove-item text-gray-400 hover:text-red-500 transition-colors" data-index="${index}">
                            <span class="material-icons">delete_outline</span>
                        </button>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <div class="flex items-center border border-gray-300 rounded-lg">
                                <button class="quantity-btn decrease-btn" data-index="${index}">
                                    <span class="material-icons text-sm">remove</span>
                                </button>
                                <span class="px-4 py-1 text-center font-medium">${item.quantity}</span>
                                <button class="quantity-btn increase-btn" data-index="${index}">
                                    <span class="material-icons text-sm">add</span>
                                </button>
                            </div>
                            ${discountPercent > 0 ? `<span class="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">-${discountPercent}%</span>` : ''}
                        </div>
                        
                        <div class="text-right">
                            ${item.originalPrice ? `<p class="text-sm text-gray-500 line-through">€${item.originalPrice}</p>` : ''}
                            <p class="text-xl font-bold text-green-600">€${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.attachCartItemEvents(cartItem, index);
        return cartItem;
    }

    attachCartItemEvents(cartItem, index) {
        const removeBtn = cartItem.querySelector('.remove-item');
        const decreaseBtn = cartItem.querySelector('.decrease-btn');
        const increaseBtn = cartItem.querySelector('.increase-btn');

        removeBtn.addEventListener('click', () => {
            this.removeItem(index);
        });

        decreaseBtn.addEventListener('click', () => {
            this.updateQuantity(index, -1);
        });

        increaseBtn.addEventListener('click', () => {
            this.updateQuantity(index, 1);
        });
    }

    removeItem(index) {
        const cartItem = document.querySelectorAll('.cart-item')[index];
        cartItem.classList.add('slide-out-right');
        
        setTimeout(() => {
            this.cart.splice(index, 1);
            this.saveCart();
            this.renderCart();
            this.updateSummary();
            window.ecommerceApp.updateCartCount();
        }, 300);
    }

    updateQuantity(index, change) {
        const newQuantity = this.cart[index].quantity + change;
        
        if (newQuantity <= 0) {
            this.removeItem(index);
            return;
        }

        this.cart[index].quantity = newQuantity;
        this.saveCart();
        this.renderCart();
        this.updateSummary();
        window.ecommerceApp.updateCartCount();
    }

    updateSummary() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 0 ? 20 : 0;
        const discount = this.discountCode === 'WELCOME5' ? subtotal * 0.05 : 0;
        const total = subtotal + shipping - discount;

        document.getElementById('subtotal').textContent = `€${subtotal.toFixed(2)}`;
        document.getElementById('shipping').textContent = subtotal > 0 ? `€${shipping.toFixed(2)}` : '€0.00';
        document.getElementById('total-price').textContent = `€${total.toFixed(2)}`;

        const discountRow = document.getElementById('discount-row');
        const discountAmount = document.getElementById('discount-amount');
        
        if (discount > 0) {
            discountRow.classList.remove('hidden');
            discountAmount.textContent = `-€${discount.toFixed(2)}`;
        } else {
            discountRow.classList.add('hidden');
        }

        if (this.cart.length === 0) {
            document.getElementById('checkout-btn').disabled = true;
            document.getElementById('checkout-btn').classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            document.getElementById('checkout-btn').disabled = false;
            document.getElementById('checkout-btn').classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }

    initEventListeners() {
        const checkoutBtn = document.getElementById('checkout-btn');
        const applyDiscountBtn = document.getElementById('apply-discount');
        const discountCodeInput = document.getElementById('discount-code');

        checkoutBtn.addEventListener('click', () => {
            if (this.cart.length > 0) {
                window.location.href = 'checkout.html';
            }
        });

        applyDiscountBtn.addEventListener('click', () => {
            const code = discountCodeInput.value.trim().toUpperCase();
            this.applyDiscountCode(code);
        });

        discountCodeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const code = discountCodeInput.value.trim().toUpperCase();
                this.applyDiscountCode(code);
            }
        });
    }

    applyDiscountCode(code) {
        if (code === 'WELCOME5') {
            this.discountCode = code;
            localStorage.setItem('discountCode', code);
            this.updateSummary();
            this.showNotification('Discount de 5% aplicat cu succes!', 'success');
            document.getElementById('discount-code').value = '';
        } else {
            this.showNotification('Codul de discount nu este valid.', 'error');
        }
    }

    applySavedDiscount() {
        if (this.discountCode) {
            document.getElementById('discount-code').value = this.discountCode;
            this.updateSummary();
        }
    }

    initExitIntent() {
        let mouseLeaveTimeout;
        
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY <= 0 && this.cart.length > 0 && !this.exitIntentShown) {
                mouseLeaveTimeout = setTimeout(() => {
                    this.showExitIntentPopup();
                }, 500);
            }
        });

        document.addEventListener('mouseenter', () => {
            clearTimeout(mouseLeaveTimeout);
        });

        window.addEventListener('beforeunload', (e) => {
            if (this.cart.length > 0 && !this.exitIntentShown) {
                e.preventDefault();
                e.returnValue = '';
                this.showExitIntentPopup();
            }
        });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden && this.cart.length > 0 && !this.exitIntentShown) {
                setTimeout(() => {
                    if (document.hidden) {
                        this.showExitIntentPopup();
                    }
                }, 2000);
            }
        });
    }

    showExitIntentPopup() {
        if (this.exitIntentShown) return;
        
        this.exitIntentShown = true;
        
        const popup = document.createElement('div');
        popup.id = 'exit-intent-popup';
        popup.className = 'discount-popup';
        popup.innerHTML = `
            <div class="bg-white rounded-lg p-8 max-w-md mx-4 text-center fade-in-up">
                <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons text-green-600 text-2xl">local_offer</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Așteptați!</h3>
                <p class="text-gray-600 mb-6">Nu finalizați comanda fără să beneficiați de un discount special de 5%!</p>
                <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                    <p class="text-sm text-yellow-800 font-medium">Cod: <span class="font-bold">WELCOME5</span></p>
                    <p class="text-xs text-yellow-700 mt-1">Reducere 5% la toate produsele</p>
                </div>
                <div class="space-y-3">
                    <button id="apply-exit-discount" class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                        Aplică Discount 5%
                    </button>
                    <button id="continue-checkout" class="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors">
                        Continuă la Checkout
                    </button>
                    <button id="close-exit-popup" class="w-full text-gray-500 hover:text-gray-700 text-sm transition-colors">
                        Nu, mulțumesc
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(popup);

        document.getElementById('apply-exit-discount').addEventListener('click', () => {
            this.discountCode = 'WELCOME5';
            localStorage.setItem('discountCode', 'WELCOME5');
            this.updateSummary();
            this.showNotification('Discount aplicat cu succes!', 'success');
            this.closeExitIntentPopup();
        });

        document.getElementById('continue-checkout').addEventListener('click', () => {
            this.closeExitIntentPopup();
            window.location.href = 'checkout.html';
        });

        document.getElementById('close-exit-popup').addEventListener('click', () => {
            this.closeExitIntentPopup();
        });

        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                this.closeExitIntentPopup();
            }
        });
    }

    closeExitIntentPopup() {
        const popup = document.getElementById('exit-intent-popup');
        if (popup) {
            popup.remove();
        }
    }

    loadRecommendations() {
        const recommendations = [
            {
                id: 999,
                name: "Căști Wireless Premium",
                price: 99.99,
                originalPrice: 150.00,
                condition: "Foarte Bun",
                brand: "Sony",
                image: "https://images.unsplash.com/photo-1550009158-94ae76552485?w=300",
                description: "Căști wireless cu noise cancelling"
            },
            {
                id: 998,
                name: "Power Bank 20000mAh",
                price: 45.99,
                originalPrice: 70.00,
                condition: "Ca Nou",
                brand: "Anker",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300",
                description: "Power bank rapid cu încărcare wireless"
            }
        ];

        const container = document.getElementById('recommendations-grid');
        container.innerHTML = '';

        recommendations.forEach(product => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover">
                <div class="p-4">
                    <h3 class="text-sm font-semibold text-gray-800 mb-2">${product.name}</h3>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-lg font-bold text-green-600">€${product.price}</span>
                        <span class="text-xs text-gray-500">${product.condition}</span>
                    </div>
                    <button class="add-recommendation-btn w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded text-sm transition-colors" data-product-id="${product.id}">
                        Adaugă în coș
                    </button>
                </div>
            `;

            const addBtn = card.querySelector('.add-recommendation-btn');
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                window.ecommerceApp.addToCart(product);
                this.loadRecommendations();
            });

            container.appendChild(card);
        });
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';
        notification.className = `fixed top-20 right-4 ${bgColor} text-white px-4 py-2 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300`;
        notification.innerHTML = `
            <div class="flex items-center">
                <span class="material-icons mr-2">${type === 'success' ? 'check' : 'error'}</span>
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
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CartPage();
});