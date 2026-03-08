import { BASE_URL } from '/js/config.js';

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    if(!response.ok) {throw new Error(`Response: ${response.status}`)};
    return await response.json();
  } catch (error) {
        console.error(error.message);
        return null;
    }
}