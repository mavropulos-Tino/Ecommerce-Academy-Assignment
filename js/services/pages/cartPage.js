import 'bootstrap/dist/css/bootstrap.min.css';

import { getCart, clearCart } from '/js/services/components/cartService.js';
import { renderProductCards } from '/js/services/coreServices/rendering/productCardRenderService.js';
import { renderCartSummary, renderCartTotal } from '/js/services/components/cartPurchaseDislayService.js';
import { updateCartBadge } from '/js/services/components/cartBadgeService.js';
import { initializeCheckout } from '/js/services/components/checkoutService.js';

export const initializeCartPage = async () => {
    const cart = getCart();
    renderProductCards(cart, 'cart-grid', true);
    renderCartSummary();
    renderCartTotal();
    updateCartBadge();
    initializeCheckout();

    document.querySelector('.btn-clear-cart').addEventListener('click', () => {
        clearCart();
        document.querySelector('.cart-grid').innerHTML = '';
        renderCartSummary();
        renderCartTotal();
        updateCartBadge();
    });

    

    document.querySelector('.btn-clear-cart').addEventListener('click', () => {
        clearCart();
        document.querySelector('.cart-grid').innerHTML = '';
        renderCartSummary();
        renderCartTotal();
        updateCartBadge();
    });
}