class CheckoutPage {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.discountCode = localStorage.getItem('discountCode') || '';
        this.shippingCost = 20;
        this.currentStep = 1;
        this.formData = {};
        this.init();
    }

    init() {
        if (this.cart.length === 0) {
            window.location.href = 'cart.html';
            return;
        }
        
        this.renderOrderItems();
        this.updateSummary();
        this.initEventListeners();
        this.initFormValidation();
        this.updateStepIndicators();
    }

    renderOrderItems() {
        const container = document.getElementById('order-items');
        container.innerHTML = '';

        this.cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'flex items-center space-x-3 p-2 bg-gray-50 rounded-lg';
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
                <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-medium text-gray-800 truncate">${item.name}</h4>
                    <p class="text-xs text-gray-600">Cantitate: ${item.quantity}</p>
                </div>
                <span class="text-sm font-semibold text-green-600">€${(item.price * item.quantity).toFixed(2)}</span>
            `;
            container.appendChild(itemDiv);
        });
    }

    updateSummary() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discount = this.discountCode === 'WELCOME5' ? subtotal * 0.05 : 0;
        const total = subtotal + this.shippingCost - discount;

        document.getElementById('subtotal').textContent = `€${subtotal.toFixed(2)}`;
        document.getElementById('shipping-cost').textContent = `€${this.shippingCost.toFixed(2)}`;
        document.getElementById('total-price').textContent = `€${total.toFixed(2)}`;

        const discountRow = document.getElementById('discount-row');
        const discountAmount = document.getElementById('discount-amount');
        
        if (discount > 0) {
            discountRow.classList.remove('hidden');
            discountAmount.textContent = `-€${discount.toFixed(2)}`;
        } else {
            discountRow.classList.add('hidden');
        }
    }

    initEventListeners() {
        const deliveryOptions = document.querySelectorAll('.delivery-option');
        const paymentMethods = document.querySelectorAll('.payment-method');
        const placeOrderBtn = document.getElementById('place-order-btn');
        const termsCheckbox = document.getElementById('terms-checkbox');

        deliveryOptions.forEach(option => {
            option.addEventListener('click', () => {
                deliveryOptions.forEach(opt => {
                    opt.classList.remove('border-green-500', 'bg-green-50');
                    opt.classList.add('border-gray-200');
                    opt.querySelector('input').checked = false;
                });
                
                option.classList.remove('border-gray-200');
                option.classList.add('border-green-500', 'bg-green-50');
                option.querySelector('input').checked = true;
                
                this.shippingCost = parseFloat(option.dataset.price);
                this.updateSummary();
            });
        });

        paymentMethods.forEach(method => {
            method.addEventListener('click', () => {
                paymentMethods.forEach(m => {
                    m.classList.remove('border-green-500', 'bg-green-50');
                    m.classList.add('border-gray-200');
                    m.querySelector('input').checked = false;
                });
                
                method.classList.remove('border-gray-200');
                method.classList.add('border-green-500', 'bg-green-50');
                method.querySelector('input').checked = true;
            });
        });

        placeOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.placeOrder();
        });

        termsCheckbox.addEventListener('change', () => {
            placeOrderBtn.disabled = !termsCheckbox.checked;
        });

        const form = document.getElementById('shipping-form');
        form.addEventListener('input', () => {
            this.updateStepIndicators();
        });
    }

    initFormValidation() {
        const inputs = document.querySelectorAll('#shipping-form input[required], #shipping-form select[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });

            input.addEventListener('input', () => {
                if (input.classList.contains('border-red-500')) {
                    this.validateField(input);
                }
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Acest câmp este obligatoriu';
        } else if (field.type === 'email' && value && !this.isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Adresa de email nu este validă';
        } else if (field.type === 'tel' && value && !this.isValidPhone(value)) {
            isValid = false;
            errorMessage = 'Numărul de telefon nu este valid';
        }

        this.showFieldValidation(field, isValid, errorMessage);
        return isValid;
    }

    showFieldValidation(field, isValid, errorMessage) {
        const errorElement = field.parentNode.querySelector('.field-error');
        
        if (isValid) {
            field.classList.remove('border-red-500');
            field.classList.add('border-green-500');
            if (errorElement) {
                errorElement.remove();
            }
        } else {
            field.classList.remove('border-green-500');
            field.classList.add('border-red-500');
            
            if (!errorElement) {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'field-error text-red-500 text-xs mt-1';
                errorDiv.textContent = errorMessage;
                field.parentNode.appendChild(errorDiv);
            } else {
                errorElement.textContent = errorMessage;
            }
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        const phoneRegex = /^07[0-9]{8}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    validateForm() {
        const requiredFields = document.querySelectorAll('#shipping-form input[required], #shipping-form select[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    updateStepIndicators() {
        const shippingForm = document.getElementById('shipping-form');
        const requiredFields = shippingForm.querySelectorAll('input[required], select[required]');
        let completedFields = 0;

        requiredFields.forEach(field => {
            if (field.value.trim() && field.classList.contains('border-green-500')) {
                completedFields++;
            }
        });

        const stepNumber = document.querySelector('.checkout-step .step-number');
        if (completedFields === requiredFields.length) {
            stepNumber.className = 'step-number step-completed';
            stepNumber.innerHTML = '<span class="material-icons text-sm">check</span>';
        } else if (completedFields > 0) {
            stepNumber.className = 'step-number step-active';
            stepNumber.textContent = '1';
        }
    }

    placeOrder() {
        if (!this.validateForm()) {
            this.showNotification('Vă rugăm să completați toate câmpurile obligatorii', 'error');
            return;
        }

        const termsCheckbox = document.getElementById('terms-checkbox');
        if (!termsCheckbox.checked) {
            this.showNotification('Trebuie să acceptați termenii și condițiile', 'error');
            return;
        }

        this.showLoadingOverlay();

        setTimeout(() => {
            this.processOrder();
        }, 3000);
    }

    processOrder() {
        const orderData = this.collectOrderData();
        
        localStorage.setItem('lastOrder', JSON.stringify(orderData));
        localStorage.removeItem('cart');
        localStorage.removeItem('discountCode');
        
        this.hideLoadingOverlay();
        
        window.location.href = 'success.html';
    }

    collectOrderData() {
        const form = document.getElementById('shipping-form');
        const formData = new FormData(form);
        const orderData = {
            items: this.cart,
            shipping: {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                address: formData.get('address'),
                city: formData.get('city'),
                county: formData.get('county'),
                zipCode: formData.get('zipCode'),
                notes: formData.get('notes')
            },
            deliveryMethod: document.querySelector('input[name="delivery"]:checked').value,
            paymentMethod: document.querySelector('input[name="payment"]:checked').value,
            discountCode: this.discountCode,
            subtotal: this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            shippingCost: this.shippingCost,
            total: this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + this.shippingCost - (this.discountCode === 'WELCOME5' ? this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.05 : 0),
            orderDate: new Date().toISOString(),
            orderNumber: 'CMD-' + Date.now().toString().slice(-6)
        };

        return orderData;
    }

    showLoadingOverlay() {
        const overlay = document.getElementById('loading-overlay');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    hideLoadingOverlay() {
        const overlay = document.getElementById('loading-overlay');
        overlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
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
        }, 4000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CheckoutPage();
});