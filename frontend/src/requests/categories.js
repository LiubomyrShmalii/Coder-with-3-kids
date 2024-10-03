export const getAllCategories = (set_state) => {
  fetch('http://localhost:3333/categories/all')
      .then(res => res.json())
      .then(json => set_state(json))
      .catch(error => console.error("Error fetching categories:", error));
};