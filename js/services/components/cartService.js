const saveToCart = cart => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    if(!cart) {return []}
    return JSON.parse(cart);
}

export const addToCart = product => {
    const cart = getCart();

    if(product.stock === 0) return;

    const existingItem = cart.find(item => item.id === product.id);

    if(existingItem) {
        if (existingItem.quantity >= product.stock) return;
        existingItem.quantity++;
    } else {
        const cartItem = {
            thumbnail: product.thumbnail,

            category: product.category,
            name: product.name,

            rating: product.rating,
            reviews: product.reviews,

            price: product.price,

            id: product.id,
            quantity: 1
        };
        cart.push(cartItem);
    }

    saveToCart(cart);
}

export const increaseQuantity = (id, stock) => {
    const cart = getCart();
    const item = cart.find(item => item.id === id);

    if(!item) return;
    if(item.quantity >= stock) return;

    item.quantity++;
    saveToCart(cart);
}
export const decreaseQuantity = id => {
    const cart = getCart();
    const item = cart.find(item => item.id === id);

    if(!item) return;

    if(item.quantity === 1) {
        const updatedCart = cart.filter(item => item.id !== id);
        saveToCart(updatedCart);
    } else {
        item.quantity--;
        saveToCart(cart);
    }
}

export const removeFromCart = id => {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== id);
    saveToCart(updatedCart);
}
export const getTotal = () => {
    const cart = getCart();
    let total = 0;
    cart.forEach(item => total += item.price * item.quantity);
    return total;
}
export const getCartCount = () => {
    const cart = getCart();
    let count = 0;
    cart.forEach(item => count += item.quantity);
    return count;
}