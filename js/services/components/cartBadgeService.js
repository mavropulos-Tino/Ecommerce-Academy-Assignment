import { getCartCount } from '/js/services/components/cartService.js';

export const updateCartBadge = () => {
    const badge = document.querySelector('.cart-badge');
    badge.textContent = getCartCount();
}