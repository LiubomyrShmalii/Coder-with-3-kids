import AllProductsPage from './Pages/AllProductsPage/AllProductsPage';
import BasketPage from './Pages/BasketPage/BasketPage';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import DiscountedProductsPage from './Pages/DiscountedProductsPage/DiscountedProductsPage';
import Error404Page from './Pages/Error404Page/Error404Page';
import FavoriteProductsPage from './Pages/FavoriteProductsPage/FavoriteProductsPage';
import Layout from './Pages/Layout/Layout.jsx';
import MainPage from './Pages/MainPage/MainPage';
import ProductsByCategoryPage from './Pages/ProductsByCategoryPage/ProductsByCategoryPage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:categoryId" element={<ProductsByCategoryPage />} />
          <Route path="/all_products" element={<AllProductsPage />} />
          <Route path="/discounted_products" element={<DiscountedProductsPage />} />
          <Route path="/favorite_products" element={<FavoriteProductsPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
