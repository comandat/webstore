class ProductPage {
    constructor() {
        this.allProducts = window.productsData || [];
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));

        this.currentProduct = this.allProducts.find(p => p.id === productId);

        if (!this.currentProduct) {
            window.location.href = 'products.html';
            return;
        }

        document.getElementById('product-name').textContent = this.currentProduct.name;
        document.getElementById('product-price').textContent = `€${this.currentProduct.price}`;
        document.getElementById('product-condition').textContent = this.currentProduct.condition;
        document.getElementById('product-condition').className = `condition-badge condition-${this.currentProduct.condition.toLowerCase().replace(' ', '-')}`;
        document.getElementById('product-description').textContent = this.currentProduct.description;

        if (this.currentProduct.originalPrice) {
            document.getElementById('product-original-price').textContent = `€${this.currentProduct.originalPrice}`;
            const discountPercent = Math.round(((this.currentProduct.originalPrice - this.currentProduct.price) / this.currentProduct.originalPrice) * 100);
            document.getElementById('discount-badge').textContent = `-${discountPercent}%`;
        } else {
            const originalPriceEl = document.getElementById('product-original-price');
            const discountBadgeEl = document.getElementById('discount-badge');
            if (originalPriceEl) originalPriceEl.style.display = 'none';
            if (discountBadgeEl) discountBadgeEl.style.display = 'none';
        }

        const productImage = document.getElementById('product-image');
        if (productImage) {
            productImage.src = this.currentProduct.image;
            productImage.alt = this.currentProduct.name;
        }

        this.renderThumbnails();
        this.renderSpecs();
        this.initConditionSelector();
        this.initBundleOffer();
        this.loadRecommendations();
        this.initAIChat();
        this.initEventListeners();
        this.initAnimations();
    }

    renderThumbnails() {
        const thumbnailsContainer = document.getElementById('image-thumbnails');
        thumbnailsContainer.innerHTML = '';

        (this.currentProduct.images || [this.currentProduct.image]).forEach((image, index) => {
            const thumb = document.createElement('img');
            thumb.src = image;
            thumb.alt = `${this.currentProduct.name} ${index + 1}`;
            thumb.className = 'w-full h-auto rounded-md border-2 cursor-pointer hover:border-green-500 object-cover aspect-square';
            thumb.classList.add(index === 0 ? 'border-green-500' : 'border-transparent');

            thumb.addEventListener('click', () => {
                document.getElementById('product-image').src = image;
                thumbnailsContainer.querySelectorAll('img').forEach(t => {
                    t.classList.remove('border-green-500');
                    t.classList.add('border-transparent');
                });
                thumb.classList.remove('border-transparent');
                thumb.classList.add('border-green-500');
            });

            thumbnailsContainer.appendChild(thumb);
        });
    }

    renderSpecs() {
        const specsContainer = document.getElementById('product-specs');
        specsContainer.innerHTML = '';

        Object.entries(this.currentProduct.specs).forEach(([key, value]) => {
            const specDiv = document.createElement('div');
            specDiv.className = 'py-2 border-b border-gray-100';
            specDiv.innerHTML = `
                <p class="font-medium text-gray-600">${key}</p>
                <p class="text-gray-800">${value}</p>
            `;
            specsContainer.appendChild(specDiv);
        });
    }

    initConditionSelector() {
        const conditionButtons = document.querySelectorAll('.condition-btn');
        const conditionDescription = document.getElementById('condition-description');

        const conditionInfo = {
            "Ca Nou": "Produs în stare impecabilă, fără urme de uzură, funcționează perfect.",
            "Foarte Bun": "Mici semne de uzură, aproape invizibile, 100% funcțional.",
            "Bun": "Semne vizibile de utilizare, dar complet funcțional și eficient."
        };

        conditionButtons.forEach(button => {
            button.addEventListener('click', () => {
                conditionButtons.forEach(btn => {
                    btn.classList.remove('border-green-500', 'bg-green-50');
                    btn.classList.add('border-gray-300');
                    btn.querySelector('span').classList.remove('text-green-700');
                    btn.querySelector('span').classList.add('text-gray-800');
                });

                button.classList.remove('border-gray-300');
                button.classList.add('border-green-500', 'bg-green-50');
                button.querySelector('span').classList.add('text-green-700');
                button.querySelector('span').classList.remove('text-gray-800');

                const condition = button.dataset.condition;
                conditionDescription.textContent = conditionInfo[condition];

                this.updatePrice(parseFloat(button.dataset.price));
            });
        });
    }

    updatePrice(priceAdjustment) {
        const newPrice = this.currentProduct.price + priceAdjustment;
        document.getElementById('product-price').textContent = `€${newPrice.toFixed(2)}`;
    }

    initBundleOffer() {
        const bundleProducts = this.allProducts.filter(p =>
            p.id !== this.currentProduct.id &&
            (p.category === this.currentProduct.category || p.brand === this.currentProduct.brand)
        ).slice(0, 3);

        if (bundleProducts.length > 0) {
            const bundleProduct = bundleProducts[0];
            const bundlePrice = bundleProduct.price * 0.8;
            const totalPrice = this.currentProduct.price + bundlePrice;
            const originalTotal = this.currentProduct.price + bundleProduct.price;

            document.getElementById('bundle-main-product').src = this.currentProduct.image;
            document.getElementById('bundle-secondary-product').src = bundleProduct.image;
            document.getElementById('bundle-product-name').textContent = bundleProduct.name;
            document.getElementById('bundle-price').textContent = `€${bundlePrice.toFixed(2)}`;
            document.getElementById('bundle-total-price').textContent = `€${totalPrice.toFixed(2)}`;
            document.getElementById('bundle-original-price').textContent = `€${originalTotal.toFixed(2)}`;

            document.getElementById('bundle-offer').classList.remove('hidden');

            this.startBundleTimer();

            document.getElementById('add-bundle-btn').addEventListener('click', () => {
                window.ecommerceApp.addToCart(this.currentProduct);
                window.ecommerceApp.addToCart({ ...bundleProduct, price: bundlePrice });
                this.showNotification('Pachetul a fost adăugat în coș!');
            });
        }
    }

    startBundleTimer() {
        let timeLeft = 2 * 60 * 60 + 45 * 60 + 30;

        this.bundleTimer = setInterval(() => {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;

            document.getElementById('bundle-timer').textContent =
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(this.bundleTimer);
                document.getElementById('bundle-offer').classList.add('hidden');
            }
        }, 1000);
    }

    loadRecommendations() {
        const similarProducts = this.allProducts.filter(p =>
            p.id !== this.currentProduct.id &&
            (p.category === this.currentProduct.category || p.brand === this.currentProduct.brand)
        ).slice(0, 3);

        const recommendedProducts = this.allProducts.filter(p =>
            p.id !== this.currentProduct.id && p.id > 5
        ).slice(0, 4);

        this.renderSimilarProducts(similarProducts);
        this.renderRecommendedProducts(recommendedProducts);
    }

    renderSimilarProducts(products) {
        const container = document.getElementById('similar-products');
        container.innerHTML = '';

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-12 h-12 object-cover rounded">
                <div class="flex-1">
                    <h4 class="text-sm font-medium text-gray-800 truncate">${product.name}</h4>
                    <p class="text-sm text-green-600 font-semibold">€${product.price}</p>
                </div>
            `;

            productDiv.addEventListener('click', () => {
                window.location.href = `product.html?id=${product.id}`;
            });

            container.appendChild(productDiv);
        });
    }

    renderRecommendedProducts(products) {
        const container = document.getElementById('recommended-products');
        container.innerHTML = '';

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'recommendation-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="p-4">
                    <h3 class="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">${product.name}</h3>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-lg font-bold text-green-600">€${product.price}</span>
                        <span class="text-xs text-gray-500">${product.condition}</span>
                    </div>
                    <button class="add-to-cart-btn w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded text-sm transition-colors" data-product-id="${product.id}">
                        Adaugă în coș
                    </button>
                </div>
            `;

            const addToCartBtn = card.querySelector('.add-to-cart-btn');
            addToCartBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                window.ecommerceApp.addToCart(product);
            });

            card.addEventListener('click', () => {
                window.location.href = `product.html?id=${product.id}`;
            });

            container.appendChild(card);
        });
    }

    initAIChat() {
        const chatToggleBtn = document.getElementById('ai-chat-toggle');
        const chatWindow = document.getElementById('ai-chat-window');
        const closeChatBtn = document.getElementById('ai-chat-close-btn');
        const chatInput = document.getElementById('ai-chat-input');
        const sendChatBtn = document.getElementById('ai-chat-send-btn');

        chatToggleBtn.addEventListener('click', () => {
            chatWindow.classList.toggle('hidden');
            chatToggleBtn.classList.toggle('hidden');
        });

        closeChatBtn.addEventListener('click', () => {
            chatWindow.classList.add('hidden');
            chatToggleBtn.classList.remove('hidden');
        });

        const handleSendMessage = async () => {
            const userMessage = chatInput.value.trim();
            if (!userMessage) return;

            this.appendMessage(userMessage, 'user');
            chatInput.value = '';
            this.appendTypingIndicator();

            const aiResponse = this.generateAIResponse(userMessage);

            setTimeout(() => {
                this.removeTypingIndicator();
                this.appendMessage(aiResponse, 'ai');
            }, 1500);
        };

        sendChatBtn.addEventListener('click', handleSendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSendMessage();
        });
    }

    appendMessage(text, sender) {
        const chatMessages = document.getElementById('ai-chat-messages');
        const bubble = document.createElement('div');
        bubble.textContent = text;
        bubble.className = sender === 'user' ? 'chat-bubble-user max-w-xs' : 'chat-bubble-ai max-w-xs';
        chatMessages.appendChild(bubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    appendTypingIndicator() {
        const chatMessages = document.getElementById('ai-chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typing-indicator';
        typingDiv.className = 'chat-bubble-ai max-w-xs ai-typing-indicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    generateAIResponse(userMessage) {
        const message = userMessage.toLowerCase();
        const product = this.currentProduct;

        if (message.includes('preț') || message.includes('cost')) {
            return `Prețul produsului ${product.name} este €${product.price}. ${product.originalPrice ? `Redus de la €${product.originalPrice}` : ''}. Avem și oferte speciale pentru pachete!`;
        } else if (message.includes('garanție') || message.includes('garantie')) {
            return `Toate produsele noastre beneficiază de garanție 1 an. Produsul ${product.name} este testat și verificat profesional.`;
        } else if (message.includes('livrare') || message.includes('transport')) {
            return 'Livrarea se face în 1-2 zile lucrătoare prin curier rapid. Costul transportului este €20 pentru livrare standard sau €10 pentru Easybox.';
        } else if (message.includes('retur') || message.includes('return')) {
            return 'Aveți drept de retur în 14 zile de la primirea produsului. Produsul trebuie să fie în aceeași stare ca la livrare.';
        } else if (message.includes('stare') || message.includes('condiție') || message.includes('conditie')) {
            return `Produsul este în condiție ${product.condition}. ${product.condition === 'Ca Nou' ? 'Fără urme de uzură' : product.condition === 'Foarte Bun' ? 'Cu mici semne aproape invizibile' : 'Cu semne vizibile dar funcțional complet'}.`;
        } else if (message.includes('specificații') || message.includes('specificatii') || message.includes('detalii')) {
            const specs = Object.entries(product.specs).map(([key, value]) => `${key}: ${value}`).join(', ');
            return `Specificații ${product.name}: ${specs}. Pentru mai multe detalii, consultați secțiunea de specificații tehnice.`;
        } else {
            return 'Vă mulțumesc pentru întrebare! Pentru informații suplimentare despre acest produs, vă stau la dispoziție. Puteți întreba despre preț, garanție, livrare sau specificații tehnice.';
        }
    }

    initEventListeners() {
        const addToCartBtn = document.getElementById('add-to-cart-btn');
        const addToWishlistBtn = document.getElementById('add-to-wishlist-btn');

        addToCartBtn.addEventListener('click', () => {
            window.ecommerceApp.addToCart(this.currentProduct);
        });

        addToWishlistBtn.addEventListener('click', () => {
            this.toggleWishlist();
        });
    }

    toggleWishlist() {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const existingIndex = wishlist.findIndex(item => item.id === this.currentProduct.id);

        if (existingIndex > -1) {
            wishlist.splice(existingIndex, 1);
            this.showNotification('Produs șters din favorite');
            document.getElementById('add-to-wishlist-btn').innerHTML = '<span class="material-icons text-gray-600">favorite_border</span>';
        } else {
            wishlist.push(this.currentProduct);
            this.showNotification('Produs adăugat la favorite');
            document.getElementById('add-to-wishlist-btn').innerHTML = '<span class="material-icons text-red-500">favorite</span>';
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        notification.innerHTML = `
            <div class="flex items-center">
                <span class="material-icons mr-2">check</span>
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

    initAnimations() {
        const fadeElements = document.querySelectorAll('.fade-in');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        fadeElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ProductPage();
});