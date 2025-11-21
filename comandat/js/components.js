class Components {
    static async loadHeader() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (!headerPlaceholder) return;

        try {
            const response = await fetch('header.html');
            if (response.ok) {
                const html = await response.text();
                headerPlaceholder.innerHTML = html;
                this.initHeaderLogic();
            } else {
                // Fallback if header.html doesn't exist (e.g. during development before extraction)
                // Or we could construct it here. For now, let's assume we will extract it.
                console.error('Header file not found');
            }
        } catch (error) {
            console.error('Error loading header:', error);
        }
    }

    static async loadFooter() {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (!footerPlaceholder) return;

        try {
            const response = await fetch('footer.html');
            if (response.ok) {
                footerPlaceholder.innerHTML = await response.text();
            }
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    }

    static initHeaderLogic() {
        // Re-attach event listeners for mobile menu, search, etc.
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.remove('hidden');
                // Add animation class if needed
            });
        }

        if (closeMobileMenuBtn && mobileMenu) {
            closeMobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        }

        // Update cart count if EcommerceApp is available
        if (window.ecommerceApp) {
            window.ecommerceApp.updateCartCount();
            window.ecommerceApp.updateWishlistCount();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Components.loadHeader();
    Components.loadFooter();
});
