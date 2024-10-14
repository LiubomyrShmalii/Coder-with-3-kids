import { loadAllCategoriesAction } from "../store/reducers/allCategoriesReducer";

export const getAllCategories = (dispatch) => {
  fetch('http://localhost:3333/categories/all')
    .then(res => res.json())
    .then(json => dispatch(loadAllCategoriesAction(json)))
    .catch(error => console.error("Error fetching all products:", error));
};
