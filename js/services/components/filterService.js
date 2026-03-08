import { state } from '/js/state.js';
import { initializeShop } from "/js/services/pages/shopPage.js";

const select = document.getElementById('category-select');
const searchInput = document.getElementById('search-input');

select.addEventListener('change', event => {
    const filterValue = event.target.value;
    if(filterValue === 'all') {
        state.activeCategory = null;
        initializeShop();
        return;
    }
    state.activeCategory = filterValue;
    state.searchTerm = null;
    searchInput.value = '';
    initializeShop();
});