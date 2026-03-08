export class ProductCard {
    constructor(data) {
        this.thumbnail = data.thumbnail;

        this.category = data.category;
        this.name = data.title;

        this.rating = data.rating;
        this.reviews = data.reviews;

        this.price = data.price;
        
        this.id = data.id;
    }
}