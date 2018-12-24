export const fetchCategories = () => ({
    type: 'FETCH_SEARCH',
});

export const goToRoute = route => ({
    type: 'GO_TO_ROUTE',
    route,
});

export const fetchProducts = query => ({
    type: 'FETCH_DETAILS',
    query,
});
