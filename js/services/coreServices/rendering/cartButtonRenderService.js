export const renderCartButton = (btnContainer, product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        btnContainer.innerHTML = `
            <div class="cart-item-controls">
                <button class="btn-decrease"><i class="bi bi-dash"></i></button>
                <span class="btn-count">${existing.quantity}</span>
                <button class="btn-increase" ${existing.quantity >= product.stock ? 'disabled' : ''}><i class="bi bi-plus"></i></button>
            </div>
        `;
    } else {
        btnContainer.innerHTML = `
            <button type="button" class="btn-add">Add to Cart</button>
        `;
    }
}