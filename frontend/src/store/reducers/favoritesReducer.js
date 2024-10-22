const ADD_PRODUCT_TO_FAVORITE = 'ADD_PRODUCT_TO_FAVORITE';
const REMOVE_PRODUCT_FROM_FAVORITE = 'REMOVE_PRODUCT_FROM_FAVORITE';
const LOAD_ALL_FAVORITES = 'LOAD_ALL_FAVORITES';

export const addProductToFavoritesAction = product => ({
  type: ADD_PRODUCT_TO_FAVORITE,
  payload: product
});

export const removeProductFromFavoritesAction = productId => ({
  type: REMOVE_PRODUCT_FROM_FAVORITE,
  payload: productId
});

export const loadAllFavoritesAction = favorites => ({
  type: LOAD_ALL_FAVORITES,
  payload: favorites
});

export const favoritesReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_FAVORITES) {
    return action.payload;
  }

  if (action.type === ADD_PRODUCT_TO_FAVORITE) {
    const productExists = state.find(product => product.id === action.payload.id);
    if (productExists) {
      return state;
    }
    return [...state, action.payload];
  }

  if (action.type === REMOVE_PRODUCT_FROM_FAVORITE) {
    return state.filter(product => product.id !== action.payload);
  }

  return state;
};