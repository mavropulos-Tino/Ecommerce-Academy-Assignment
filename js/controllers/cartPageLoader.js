import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../css/style.css';
import '../../css/cart.css';

import { initializeCartPage } from "../services/pages/cartPage.js";
import { updateCartBadge } from '/js/services/components/cartBadgeService.js';

import { BASE_PATH } from '/js/config.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home-link').href = BASE_PATH;

    initializeCartPage();
    updateCartBadge();
});