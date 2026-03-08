import { ProductPage } from '/js/models/ProductPage.js'

export const mapDataToproductPage = data => {
    return new ProductPage(data);
}