const renderCheckoutForm = () => {
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