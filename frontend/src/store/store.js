import { createStore, combineReducers, applyMiddleware } from 'redux';
import { allProductsReducer } from './reducers/allProductsReducer';
import { thunk } from 'redux-thunk'
import { allCategoriesReducer } from './reducers/allCategoriesReducer';
import { productsByCategoryReducer } from './reducers/productsByCategory';
import { singleProductReducer } from './reducers/singleProductReducer';
import { basketReducer } from './reducers/basketReducer';

const rootReducer = combineReducers({
  products: allProductsReducer,
  categories: allCategoriesReducer,
  productsByCategory: productsByCategoryReducer,
  singleProduct: singleProductReducer,
  basket: basketReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));