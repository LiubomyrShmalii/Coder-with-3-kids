const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';
const REMOVE_PRODUCT_FROM_BASKET = 'REMOVE_PRODUCT_FROM_BASKET';
const INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY';
const DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY';

export const addProductToBasketAction = product => ({
  type: ADD_PRODUCT_TO_BASKET, 
  payload: product 
});

export const removeProductFromBasketAction = productId => ({
  type: REMOVE_PRODUCT_FROM_BASKET, 
  payload: productId 
});

export const increaseProductQuantityAction = productId => ({
  type: INCREASE_PRODUCT_QUANTITY, 
  payload: productId 
});

export const decreaseProductQuantityAction = productId => ({
  type: DECREASE_PRODUCT_QUANTITY, 
  payload: productId 
});

// Функція для перевірки, чи є товар в корзині
const checkProduct = (state, payload) => {
  const target = state.find(el => el.id === payload.id);

  if (target) {
    target.count += payload.count || 1;
    return [...state];
  } else {
    return [...state, { ...payload, count: payload.count || 1 }];
  }
};

const increaseProductQuantity = (state, productId) => {
  return state.map(item =>
    item.id === productId ? { ...item, count: item.count + 1 } : item
  );
};

const decreaseProductQuantity = (state, productId) => {
  return state
    .map(item =>
      item.id === productId
        ? { ...item, count: item.count - 1 }
        : item
    )
    .filter(item => item.count > 0);
};

const removeProduct = (state, productId) => {
  return state.filter(el => el.id !== productId);
}

export const basketReducer = (state = [], action) => {
  if (action.type === ADD_PRODUCT_TO_BASKET) {
    return checkProduct(state, action.payload);
  }

  if (action.type === REMOVE_PRODUCT_FROM_BASKET) {
    return removeProduct(state, action.payload);
  }

  if (action.type === INCREASE_PRODUCT_QUANTITY) {
    return increaseProductQuantity(state, action.payload);
  }

  if (action.type === DECREASE_PRODUCT_QUANTITY) {
    return decreaseProductQuantity(state, action.payload);
  }
  
  return state;
};