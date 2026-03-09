import { BASE_URL } from '/js/config.js';

import { callNotification } from '/js/services/components/notificationService.js';

export const fetchProductById = async id => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        if (!response.ok) throw new Error(`Response: ${response.status}`);
        return await response.json();
    } catch (error) {
        callNotification('error', `${error.message}`);
        return null;
    }
}