export const renderCategories = categories => {
    const select = document.getElementById('category-select');

    categories.forEach(category => {
        const option = `<option value="${category.slug}">${category.name}</option>`;
        select.innerHTML += option;
    });
}