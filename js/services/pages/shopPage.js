import { state } from '/js/state.js';

import { fetchProducts } from '/js/services/coreServices/fetching/productsApiService.js';
import { mapDataToProductCards } from '/js/services/coreServices/mapping/productCardMapService.js';
import { renderProductCards } from '/js/services/coreServices/rendering/ProductCardRenderService.js';

import { renderPagiantion } from '/js/services/components/paginationService.js';

import { clearDisplay } from '/js/utilities';

export const initializeShop = async () => {
    const data = await fetchProducts();
    if (!data) return;

    state.totalProducts = data.total;

    const productCardsArray = mapDataToProductCards(data.products);

    clearDisplay();

    renderProductCards(productCardsArray);
    renderPagiantion();
}