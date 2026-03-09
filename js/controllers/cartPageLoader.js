import { initializeCartPage } from "../services/pages/cartPage.js";
import { updateCartBadge } from '/js/services/components/cartBadgeService.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeCartPage();
    updateCartBadge();
});