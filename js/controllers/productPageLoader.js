import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../css/style.css';
import '../../css/product.css';

import { initializeProductPage } from "../services/pages/productPage.js";
import { updateCartBadge } from '/js/services/components/cartBadgeService.js';

import { BASE_PATH } from '/js/config.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.cart-btn').href = `${BASE_PATH}pages/cartPage.html`;

    initializeProductPage();
    updateCartBadge();
});