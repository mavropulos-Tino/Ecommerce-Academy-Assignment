import { state } from '/js/state.js';
import { initializeShop } from "/js/services/pages/shopPage.js";
import { categorySelect } from '/js/controllers/shopLoader.js';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('search-clear');

const resetCategory = () => {
    state.activeCategory = null;
    categorySelect.setChoiceByValue('all');
}

const executeSearch = () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if(state.searchTerm === searchTerm) return;
    if(!searchTerm) return;

    state.searchTerm = searchTerm || null;
    resetCategory();
    initializeShop();
}

const clearSearch = () => {
    if(state.searchTerm === null) {
        searchInput.value = '';
        return;
    }
    searchInput.value = '';
    state.searchTerm = null;
    initializeShop();
}

searchButton.addEventListener('click', executeSearch);
searchInput.addEventListener('keydown', event => {
    if(event.key === 'Enter') executeSearch();
});
searchInput.addEventListener('input', () => {
    if (!searchInput.value) clearSearch();
});
clearButton.addEventListener('click', clearSearch);