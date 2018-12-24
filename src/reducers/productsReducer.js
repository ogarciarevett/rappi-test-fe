const categoriesReducer = (state = {}, action) => {
  const { products, error } = actions;
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS": {
      return {
        ...state,
        products,
        loading: false,
        error: null
      };
    }

    case "FETCH_PRODUCTS_PENDING": {
      return {
        ...state,
        loading: true
      };
    }

    case "FETCH_PRODUCTS_ERROR": {
      return {
        ...state,
        loading: false,
        error
      };
    }

    default: {
      return state;
    }
  }
};

export default categoriesReducer;
