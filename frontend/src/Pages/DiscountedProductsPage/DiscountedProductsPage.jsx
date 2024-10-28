import React, { useEffect } from "react";
import s from "./DiscountedProductsPage.module.css";
import FilterContainer from "../../components/FilterContainer/FilterContainer";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/allProducts";
import ProductsItem from "../../components/ProductsItem/ProductsItem";
import { Link } from "react-router-dom";

export default function DiscountedProductsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  const productsState = useSelector((store) => store.products);
  const products = productsState.filter(
    ({ discont_price }) => discont_price !== null
  );

  return (
    <section className={s.container}>
      <div className={s.breadcrumbs}>
        <div className={s.crumbBox}>
          <Link to="/" className={s.crumbText}>
            Main page
          </Link>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <div className={s.crumbTextBlack}>
            All sales
          </div>
        </div> 
      </div>
      <div className={s.head}>
        <h2 className={s.title}>Discounted items</h2>
      </div>
      <FilterContainer />
      <div className={s.productsGrid}>
        {products.map((products) => (
          <ProductsItem key={products.id} {...products} />
        ))}
      </div>
    </section>
  );
}
