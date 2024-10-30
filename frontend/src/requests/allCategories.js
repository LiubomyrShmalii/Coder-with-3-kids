import { loadAllCategoriesAction } from "../store/reducers/allCategoriesReducer";

export const getAllCategories = (dispatch) => {
  fetch(`${imageBaseUrl}/categories/all`)
    .then(res => res.json())
    .then(json => dispatch(loadAllCategoriesAction(json)))
    .catch(error => console.error("Error fetching getAllCategories:", error));
};
