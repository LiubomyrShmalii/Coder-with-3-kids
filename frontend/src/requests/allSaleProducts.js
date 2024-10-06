export const getAllSaleProducts = (set_state) => {
  fetch('http://localhost:3333/products/all')
    .then(res => res.json())
    .then(json => {
      const saleProducts = json.filter(product => product.discont_price !== null);
      set_state(saleProducts);
    })
    .catch(error => console.error("Error fetching sale products:", error));
};