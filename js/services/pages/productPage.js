import { fetchProductById } from '/js/services/coreServices/fetching/productByIdApiService.js';
import { mapDataToproductPage } from '/js/services/coreServices/mapping/productPageMapService.js';
import { renderProductPage } from '/js/services/coreServices/rendering/productPageRenderService.js';

import { renderProductCards } from '/js/services/coreServices/rendering/productCardRenderService.js';
import { fetchProductsByCategory } from '/js/services/coreServices/fetching/productsByCategoryService.js';
import { mapDataToProductCards } from '/js/services/coreServices/mapping/productCardMapService.js';

export const initializeProductPage = async () => {
    const productId = localStorage.getItem("selectedProduct");

    const data = await fetchProductById(productId);
    if (!data) return;

    const productPage = mapDataToproductPage(data);
    renderProductPage(productPage);

    const relatedData = await fetchProductsByCategory(productPage.category);
    if (!relatedData) return;

    const related = relatedData.products
    .filter(p => p.id !== productPage.id)
    .slice(0, 4);

    const mappedRelated = mapDataToProductCards(related);
    renderProductCards(mappedRelated, 'related-grid');
}