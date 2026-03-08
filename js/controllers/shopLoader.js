import { initializeShop } from "../services/pages/shopPage";
import { fetchCategories } from '/js/services/coreServices/fetching/categoryApiService.js';
import { renderCategories } from '/js/services/coreServices/rendering/categoryRenderService.js';

export const shopLoader = async () => {
    const catgeoriesArray = await fetchCategories();
    renderCategories(catgeoriesArray);

    initializeShop();
}