import emailjs from '@emailjs/browser';
import * as bootstrap from 'bootstrap';
import { getCart, getTotal, clearCart } from './cartService.js';
import { callNotification } from '/js/services/components/notificationService.js';

const SERVICE_ID = 'service_45gaf9n';
const TEMPLATE_ID = 'template_vm3mxm8';
const PUBLIC_KEY = '7KNWQRApbgFzoY49r';

const createCheckoutModal = () => {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = 'checkoutModal';
    modal.setAttribute('tabindex', '-1');

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Checkout</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="checkout-name" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" id="checkout-email" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="btn-confirm-order">Confirm Order</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    return modal;
}

export const initializeCheckout = () => {
    const modalEl = createCheckoutModal();

    document.querySelector('#btn-checkout').addEventListener('click', () => {
        const cart = getCart();
        if (cart.length === 0) {
            callNotification('warning', 'Your cart is empty.');
            return;
        }
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
    });

    document.querySelector('#btn-confirm-order').addEventListener('click', async () => {
        const name = document.querySelector('#checkout-name').value.trim();
        const email = document.querySelector('#checkout-email').value.trim();

        if (!name || !email) {
            callNotification('warning', 'Please fill in all fields.');
            return;
        }

        const cart = getCart();
        const itemList = cart.map(item =>
            `${item.name} x${item.quantity} — $${(item.price * item.quantity).toFixed(2)}`
        ).join('\n');

        const templateParams = {
            to_name: name,
            to_email: email,
            order_items: itemList,
            order_total: `$${getTotal()}`
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            clearCart();
            callNotification('success', 'Order confirmed! Check your email.');
            bootstrap.Modal.getInstance(modalEl).hide();
        } catch (error) {
            callNotification('error', 'Something went wrong. Please try again.');
            console.error(error);
        }
    });
}