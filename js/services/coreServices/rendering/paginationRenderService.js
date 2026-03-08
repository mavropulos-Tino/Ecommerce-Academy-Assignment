import {state} from '/js/state.js';
export const renderPaginationPrevious = loadShop => {
    const previous = document.createElement('li');
    previous.classList.add('page-item', 'buttonPrevious');
    previous.innerHTML = `<a class="page-link" href="#">Previous</a>`;
    previous.addEventListener('click', () => {
        if(state.currentPage<=1) {
            return;
        }
        state.currentPage--;
        loadShop();
        setTimeout(() => { window.location.hash = '#shop'; }, 0);
    });
    return previous;
}
export const renderPaginationButtons = (index, loadShop) => {
    const button = document.createElement('li');
    button.classList.add('page-item', 'pageButton');
    button.id = index;
    button.innerHTML = `<a class="page-link" href="#">${index}</a>`;
    button.addEventListener('click', () => {
        if(state.currentPage===index) {
            return;
        }
        state.currentPage = index;
        loadShop();
        setTimeout(() => { window.location.hash = '#shop'; }, 0);
    });
    return button;
}
export const renderPaginationNext = (totalPages, loadShop) => {
    const next = document.createElement('li');
    next.classList.add('page-item', 'buttonNext');
    next.innerHTML = `<a class="page-link" href="#">Next</a>`;
    next.addEventListener('click', () => {
        if(state.currentPage>=totalPages) {
            return;
        }
        state.currentPage++;
        loadShop();
        setTimeout(() => { window.location.hash = '#shop'; }, 0);
    });
    return next;
}