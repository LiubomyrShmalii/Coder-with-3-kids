import { createStore, combineReducers, applyMiddleware } from 'redux';
import { allProductsReducer } from './reducers/allProductsReducer';
import { thunk } from 'redux-thunk'
import { allCategoriesReducer } from './reducers/allCategoriesReducer';

const rootReducer = combineReducers({
  products: allProductsReducer,
  categories: allCategoriesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));