import { state } from '/js/state.js';
import { initializeShop } from '/js/services/pages/shopPage.js';

import { renderPaginationPrevious, renderPaginationButtons, renderPaginationNext } from '/js/services/coreServices/rendering/paginationRenderService.js';

export const renderPagiantion = () => {
    const container = document.querySelector('.pagiantion-container');
    container.innerHTML = '';

    const totalPages = Math.ceil(state.totalProducts/state.limit);

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.classList.add('pagination', 'flex-wrap', 'justify-content-center');

    ul.appendChild(renderPaginationPrevious(initializeShop));
    for (let i=1; i<=totalPages; i++) {
        ul.appendChild(renderPaginationButtons(i, initializeShop));
    }
    ul.appendChild(renderPaginationNext(totalPages, initializeShop));

    nav.appendChild(ul);
    container.appendChild(nav);

    applyActiveState(ul, state.currentPage);
    togglePrevNextState(ul, state.currentPage, totalPages);
};

const applyActiveState = (ul, currentPage) => {
    const buttons = ul.querySelectorAll('.pageButton');
    buttons.forEach(button => {
        const link = button.querySelector('.page-link');
        const page = parseInt(button.id);
        if (page===currentPage) {
            button.classList.add('active');
            link.style.pointerEvents = 'none';
        } else {
            button.classList.remove('active');
            link.style.pointerEvents = '';
        }
    });
}
const togglePrevNextState = (ul, currentPage, totalPages) => {
    const previous = ul.querySelector('.buttonPrevious');
    const next = ul.querySelector('.buttonNext');

    if(currentPage===1) {
        previous.classList.add('disabled');
    } else {
        previous.classList.remove('disabled');
    }

    if (currentPage===totalPages) {
        next.classList.add('disabled');
    } else {
        next.classList.remove('disabled');
    }
}