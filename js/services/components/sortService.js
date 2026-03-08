import { state } from '/js/state.js';
import { initializeShop } from "/js/services/pages/shopPage.js";

const select = document.getElementById('sort-select');

select.addEventListener('change', event => {
    const sortValue = event.target.value;
    if(sortValue === '') {
        state.sortType = null;
        state.sortOrder = null;
        initializeShop();
        return;
    }

    const [sortType, sortOrder] = event.target.value.split('-');
    state.sortType = sortType;
    state.sortOrder = sortOrder;
    initializeShop();
});