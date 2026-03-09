import { addToCart, increaseQuantity, decreaseQuantity } from '/js/services/components/cartService.js';
import { renderCartButton } from '/js/services/coreServices/rendering/cartButtonRenderService.js';
import { updateCartBadge } from '/js/services/components/cartBadgeService.js';

export const renderProductCards = (productCardsArray, containerId = 'product-grid') => {
    const grid = document.querySelector(`.${containerId}`);

    productCardsArray.forEach(productCard => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img class="card-thumbnail" src="${productCard.thumbnail}" alt="${productCard.name}" />
            <div class="card-body">
                <span class="card-brand">${productCard.category}</span>
                <p class="card-title">${productCard.name}</p>
                <div class="card-rating">
                    <span class="card-rating-score">${productCard.rating}</span>
                    <span>(${productCard.reviews.length} reviews)</span>
                </div>
                <p class="card-price">$${productCard.price}</p>
                <div class="card-btn"></div>
            </div>`;

        const btnContainer = card.querySelector('.card-btn');
        renderCartButton(btnContainer, productCard);

        const thumbnail = card.querySelector('.card-thumbnail');
        const name = card.querySelector('.card-title');
        [thumbnail, name].forEach(element => {
            element.addEventListener('click', () => {
                localStorage.setItem('selectedProduct', JSON.stringify(productCard.id));
                window.location.href = '/Ecommerce-Academy-Assignment/pages/productPage.html';
            });
        });

        btnContainer.addEventListener('click', event => {
            if(event.target.closest('.btn-add')) {
                addToCart(productCard);
                renderCartButton(btnContainer, productCard);
                updateCartBadge();
            }
            if(event.target.closest('.btn-increase')) {
                increaseQuantity(productCard.id, productCard.stock);
                renderCartButton(btnContainer, productCard);
                updateCartBadge();
            }
            if(event.target.closest('.btn-decrease')) {
                decreaseQuantity(productCard.id);
                renderCartButton(btnContainer, productCard);
                updateCartBadge();
            }
        });

        grid.appendChild(card);
    });
};