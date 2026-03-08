export const renderProductCards = (productCardsArray, containerId = 'product-grid') => {

    productCardsArray.forEach(productCard => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = 
        `<img class="card-thumbnail" src="${productCard.thumbnail}" alt="${productCard.name}" />
        <div class="card-body">
            <span class="card-brand">${productCard.category}</span>
            <p class="card-title">${productCard.name}</p>
            <div class="card-rating">
                <span class="card-rating-score">${productCard.rating}</span>
                <span>(${productCard.reviews.length} reviews)</span>
            </div>
            <p class="card-price">$${productCard.price}</p>
            <div class="card-btn">
                <button type="button" data-id="${productCard.id}">Add to Cart</button>
            </div>
        </div>`;

        const thumbnail = card.querySelector('.card-thumbnail');
        const title = card.querySelector('.card-title');
        
        [thumbnail, title].forEach(element => {
            element.addEventListener('click', () => {
                localStorage.setItem('selectedProduct', JSON.stringify(productCard.id));
                window.location.href = '/Ecommerce-Academy-Assignment/pages/productPage.html';
            });
        });

        const cartButton = card.querySelector('.card-btn button');
        cartButton.addEventListener('click', () => {
            // Adds to cart
        });

        document.querySelector(`.${containerId}`).appendChild(card);
    });
};