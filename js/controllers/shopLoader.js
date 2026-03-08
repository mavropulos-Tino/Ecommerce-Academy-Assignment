import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

import { initializeShop } from "../services/pages/shopPage";
import { fetchCategories } from '/js/services/coreServices/fetching/categoryApiService.js';
import { renderCategories } from '/js/services/coreServices/rendering/categoryRenderService.js';

export const shopLoader = async () => {
    const catgeoriesArray = await fetchCategories();
    renderCategories(catgeoriesArray);

    new Choices('#category-select', { // choicesJS
        searchEnabled: false,
        itemSelectText: '',
    });
    new Choices('#sort-select', {
        searchEnabled: false,
        itemSelectText: '',
    });

    initializeShop();
}