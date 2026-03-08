import 'bootstrap/dist/css/bootstrap.min.css';

import { fetchProductById } from '/js/services/coreServices/fetching/productByIdApiService.js';
import { mapDataToproductPage } from '/js/services/coreServices/mapping/productPageMapService.js';
import { renderProductPage } from '/js/services/coreServices/rendering/productPageRenderService.js';

export const initializeProductPage = async () => {
    const productId = localStorage.getItem("selectedProduct");
    // localStorage.removeItem("selectedProduct");

    const data = await fetchProductById(productId);
    if (!data) return;

    const productPage = mapDataToproductPage(data);

    renderProductPage(productPage);
}