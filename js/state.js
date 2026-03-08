export const state = {
  limit: 20,
  totalProducts: 0,
  
  currentPage: 1,

  activeCategory: null,
  searchTerm: null,

  sortType: null,
  sortOrder: null
};

export const resetState = () => {
  state.currentPage = 1;

  state.activeCategory = null;
  state.searchTerm = '';

  state.sortType = null;
  state.sortOrder = null;
}