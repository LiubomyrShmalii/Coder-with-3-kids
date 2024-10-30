import { loadAllProductsAction } from "../store/reducers/allProductsReducer";
import { loadProductsByCategoryAction } from "../store/reducers/productsByCategory";
import { loadSingleProductAction } from "../store/reducers/singleProductReducer";

export const getAllProducts = (dispatch) => {
  fetch(`${imageBaseUrl}/products/all`)
    .then(res => res.json())
    .then(json => dispatch(loadAllProductsAction(json)))
    .catch(error => console.error("Error fetching getAllProducts:", error));
};

export const getProductsByCategory = (categoryId) => {
  return dispatch => {
    fetch(`${imageBaseUrl}/categories/${categoryId}`)
    .then(res => res.json())
    .then(json => dispatch(loadProductsByCategoryAction(json)))
    .catch(error => console.error("Error fetching getProductsByCategory:", error));
};
  }

  export const getSingleProduct = (id) => {
    return dispatch => {
      fetch(`${imageBaseUrl}/products/${id}`)
      .then(res => res.json())
      .then(json => dispatch(loadSingleProductAction(json)))
      .catch(error => console.error("Error fetching getSingleProduct:", error));
  };
    }
