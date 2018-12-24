import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import productsReducers from './productsReducers';
import { connectRouter } from 'connected-react-router';

export default history =>
    combineReducers({
        categories: categoriesReducer,
        products: productsReducers,
        router: connectRouter(history),
    });
