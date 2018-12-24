const categoriesReducer = (state = {}, action) => {
    const { categories, error } = action;
    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS': {
            return {
                ...state,
                categories,
                loading: false,
                error: null,
            };
        }

        case 'FETCH_CATEGORIES_PENDING': {
            return {
                ...state,
                loading: true,
            };
        }

        case 'FETCH_CATEGORIES_ERROR': {
            return {
                ...state,
                loading: false,
                error,
            };
        }

        default: {
            return state;
        }
    }
};

export default categoriesReducer;
