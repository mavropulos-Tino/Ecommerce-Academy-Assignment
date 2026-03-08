import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

import { initializeShop } from "../services/pages/shopPage";
import { fetchCategories } from '/js/services/coreServices/fetching/categoryApiService.js';
import { renderCategories } from '/js/services/coreServices/rendering/categoryRenderService.js';

import '/js/services/components/filterService.js';
import '/js/services/components/searchService.js';
import '/js/services/components/sortService.js';

export let categorySelect;

export const shopLoader = async () => {
    const catgeoriesArray = await fetchCategories();
    renderCategories(catgeoriesArray);

    categorySelect = new Choices('#category-select', { // choicesJS
        searchEnabled: true,
        itemSelectText: '',
    });
    new Choices('#sort-select', {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
    });

    initializeShop();
}