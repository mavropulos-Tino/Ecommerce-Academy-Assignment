import 'bootstrap/dist/css/bootstrap.min.css';

import { getCart } from '/js/services/components/cartService.js';
import { renderProductCards } from '/js/services/coreServices/rendering/productCardRenderService.js'

export const initializeCartPage = async () => {
    const cart = getCart();
    document.getElementById('cart-grid').innerHTML = '';
    if(!cart) return;
    
    renderProductCards(cart, 'cart-grid', true);
}