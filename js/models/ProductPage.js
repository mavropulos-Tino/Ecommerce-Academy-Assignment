export class ProductPage {
    constructor(data) {
        this.name = data.title;
        this.description = data.description;
        this.category = data.category;
        this.brand = data.brand;

        this.images = data.images;
        this.thumbnail = data.thumbnail;

        this.price = data.price;
        this.stock = data.stock;
        this.availabilityStatus = data.availabilityStatus;
        this.shippingInformation = data.shippingInformation;
        this.warrantyInformation = data.warrantyInformation;

        this.rating = data.rating;
        this.reviews = data.reviews;
        this.returnPolicy = data.returnPolicy;
        
        this.tags = data.tags;
        this.weight = data.weight;
        this.dimensions = data.dimensions;

        this.id = data.id;
    }
}