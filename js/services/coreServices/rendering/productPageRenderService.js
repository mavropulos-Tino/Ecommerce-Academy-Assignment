export const renderProductPage = product => {

    // Breadcrumb
    document.getElementById('breadcrumb-category').textContent = product.category;
    document.getElementById('breadcrumb-name').textContent = product.name;

    // Images
    document.getElementById('main-image').src = product.images[0];
    document.getElementById('main-image').alt = product.name;

    const thumbnailStrip = document.getElementById('thumbnail-strip');
    product.images.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `${product.name} ${i + 1}`;
        img.classList.add('product-thumbnail');
        if (i === 0) img.classList.add('active');
        img.addEventListener('click', () => {
            document.getElementById('main-image').src = src;
            document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
            img.classList.add('active');
        });
        thumbnailStrip.appendChild(img);
    });

    // Info
    document.getElementById('product-brand').textContent = product.brand;
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-rating').textContent = product.rating;
    document.getElementById('product-review-count').textContent = `(${product.reviews.length} reviews)`;
    document.getElementById('product-price').textContent = `$${product.price}`;
    document.getElementById('product-description').textContent = product.description;

    // Stars
    const stars = Math.round(product.rating);
    document.getElementById('product-stars').innerHTML =
        '<i class="bi bi-star-fill"></i>'.repeat(stars) +
        '<i class="bi bi-star"></i>'.repeat(5 - stars);

    // Tags
    const tagsContainer = document.getElementById('product-tags');
    product.tags.forEach(tag => {
        const span = document.createElement('span');
        span.classList.add('product-tag');
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    // Specs
    document.getElementById('spec-weight').textContent = `${product.weight}kg`;
    document.getElementById('spec-wh').textContent =
        `${product.dimensions.width} × ${product.dimensions.height}`;
    document.getElementById('spec-depth').textContent = product.dimensions.depth;

    // Reviews
    const reviewsContainer = document.getElementById('product-reviews');
    product.reviews.forEach(review => {
        const div = document.createElement('div');
        div.classList.add('review-card');
        div.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="review-author">${review.reviewerName}</span>
                <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
            </div>
            <div class="product-stars mb-1">
                ${'<i class="bi bi-star-fill"></i>'.repeat(Math.round(review.rating))}
                ${'<i class="bi bi-star"></i>'.repeat(5 - Math.round(review.rating))}
            </div>
            <p class="review-body">${review.comment}</p>
        `;
        reviewsContainer.appendChild(div);
    });

    document.getElementById('product-stock').textContent = product.stock;
    document.getElementById('product-price-purchasePanel').textContent = `$${product.price}`;
    document.getElementById('shipping-info').textContent = product.shippingInformation;
    document.getElementById('warranty-info').textContent = product.warrantyInformation;
    document.getElementById('return-policy').textContent = product.returnPolicy;
};