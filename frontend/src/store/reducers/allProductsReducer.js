const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
const SORT_ALL_PRODUCTS = 'SORT_ALL_PRODUCTS';
const GET_CHEAP_PRODUCTS = 'GET_CHEAP_PRODUCTS';
const FILTER_BY_PRICE = 'FILTER_BY_PRICE';

export const loadAllProductsAction = products => ({
  type: LOAD_ALL_PRODUCTS, payload: products
});
export const sortAllProductsAction = option_value => ({
  type: SORT_ALL_PRODUCTS, payload: option_value
});
export const getCheapProductsAction = value => ({
  type: GET_CHEAP_PRODUCTS, payload: value
});
export const filterByPriceAction = values => ({
  type: FILTER_BY_PRICE, payload: values
});

export const allProductsReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_PRODUCTS) {
    return action.payload.map(el => ({...el, visible: true}))

  } else if (action.type === SORT_ALL_PRODUCTS) {
    if (action.payload === 'default') {
      state.sort((a, b) => a.title.localeCompare(b.title));
    } else if (action.payload === 'newest') {
      state.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    } else if (action.payload === 'high_low') {
      state.sort((a, b) => b.price - a.price);
    } else if (action.payload === 'low_high') {
      state.sort((a, b) => a.price - b.price);
    }
    return [...state]

  } else if (action.type === GET_CHEAP_PRODUCTS) {
    if(action.payload){
      state.map(el => {
        if(el.discont_price === null){
          el.visible = false
        }
        return el
      })
    } else {
      state.map(el => {
        el.visible = true;
        return el
      })
    }
    return [...state]
  } else if(action.type === FILTER_BY_PRICE){
    const { min, max } = action.payload;
    state.map(el => {
        el.visible = el.price >= min && el.price <= max ? true : false;
        return el
    });
    return [...state]
}
return state
}