import { ProductCard } from '/js/models/ProductCard.js';

export const mapDataToProductCards = data => {
    return data.map(product => new ProductCard(product));
}