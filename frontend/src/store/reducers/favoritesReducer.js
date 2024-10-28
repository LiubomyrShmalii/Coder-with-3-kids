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

const loadFavoritesFromLocalStorage = () => {
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const favoritesReducer = (state = loadFavoritesFromLocalStorage(), action) => {
  let newState;

  if (action.type === LOAD_ALL_FAVORITES) {
    newState = action.payload;
  } else if (action.type === ADD_PRODUCT_TO_FAVORITE) {
    const productExists = state.find(product => product.id === action.payload.id);
    if (productExists) {
      newState = state;
    } else {
      newState = [...state, action.payload];
    }
  } else if (action.type === REMOVE_PRODUCT_FROM_FAVORITE) {
    newState = state.filter(product => product.id !== action.payload);
  } else {
    newState = state;
  }

  saveFavoritesToLocalStorage(newState);

  return newState;
};