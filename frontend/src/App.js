import AllProductsPage from './Pages/AllProductsPage/AllProductsPage';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import DiscountedProductsPage from './Pages/DiscountedProductsPage/DiscountedProductsPage';
import Error404Page from './Pages/Error404Page/Error404Page';
import FavoriteProductsPage from './Pages/FavoriteProductsPage/FavoriteProductsPage';
import Layout from './Pages/Layout/Layout.jsx';
import MainPage from './Pages/MainPage/MainPage';
import ProductsByCategoryPage from './Pages/ProductsByCategoryPage/ProductsByCategoryPage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import ShoppingCartPage from './Pages/ShoppingСartPage/ShoppingСartPage.jsx';
import ScrollToUp from '../src/components/ScrollToUp/ScrollToUp.jsx';
import AutoScrollToTop from '../src/AvtoScrollToTop.js';
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <ScrollToUp />
      <AutoScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:categoryId" element={<ProductsByCategoryPage />} />
          <Route path="/all_products" element={<AllProductsPage />} />
          <Route path="/discounted_products" element={<DiscountedProductsPage />} />
          <Route path="/favorite_products" element={<FavoriteProductsPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/basket" element={<ShoppingCartPage />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
