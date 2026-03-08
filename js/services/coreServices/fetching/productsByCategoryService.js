import { BASE_URL } from '/js/config.js';

export const fetchProductsByCategory = async category => {
    try {
        const response = await fetch(`${BASE_URL}/products/category/${category}`)
        if (!response.ok) throw new Error(`Response: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(error.message);
        return null;
    }
}