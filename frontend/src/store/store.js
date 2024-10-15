import { createStore, combineReducers, applyMiddleware } from 'redux';
import { allProductsReducer } from './reducers/allProductsReducer';
import { thunk } from 'redux-thunk'
import { allCategoriesReducer } from './reducers/allCategoriesReducer';
import { productsByCategoryReducer } from './reducers/productsByCategory';

const rootReducer = combineReducers({
  products: allProductsReducer,
  categories: allCategoriesReducer,
  productsByCategory: productsByCategoryReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));