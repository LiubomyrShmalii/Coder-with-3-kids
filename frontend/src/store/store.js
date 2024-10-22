import { createStore, combineReducers, applyMiddleware } from 'redux';
import { allProductsReducer } from './reducers/allProductsReducer';
import { thunk } from 'redux-thunk'
import { allCategoriesReducer } from './reducers/allCategoriesReducer';
import { productsByCategoryReducer } from './reducers/productsByCategory';
import { singleProductReducer } from './reducers/singleProductReducer';
import { basketReducer } from './reducers/basketReducer';
import { favoritesReducer } from './reducers/favoritesReducer';

const rootReducer = combineReducers({
  products: allProductsReducer,
  categories: allCategoriesReducer,
  productsByCategory: productsByCategoryReducer,
  singleProduct: singleProductReducer,
  basket: basketReducer,
  favorites: favoritesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));