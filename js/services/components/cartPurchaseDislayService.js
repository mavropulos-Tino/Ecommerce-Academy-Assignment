import { getCart } from '/js/services/components/cartService.js';

export const renderCartSummary = () => {
    const cart = getCart();
    const container = document.querySelector('.summary-items');
    container.innerHTML = '';

    cart.forEach(item => {
        const row = document.createElement('div');
        row.classList.add('summary-row');
        row.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        container.appendChild(row);
    });
}

export const renderCartTotal = (taxRate = 0.20) => {
    const cart = getCart();

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    document.querySelector('#summary-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('#summary-tax').textContent = `$${tax.toFixed(2)}`;
    document.querySelector('#summary-total').textContent = `$${total.toFixed(2)}`;
}