import React, { useEffect } from "react";
import { getAllProducts } from "../../requests/allProducts";
import { useDispatch, useSelector } from "react-redux";
import s from "./AllProductsPage.module.css";
import FilterContainer from "../../components/FilterContainer/FilterContainer";
import ProductsItem from "../../components/ProductsItem/ProductsItem";

export default function AllProductsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, []);

  const productsState = useSelector((store) => store.products);

  return (
    <section className={s.container}>
      <div className={s.breadcrumbs}>
        <div className={s.crumbBox}>
          <span className={s.crumbText}>Main page</span>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <span className={s.crumbTextBlack}>All products</span>
        </div>
      </div>
      <div className={s.head}>
        <h2 className={s.title}>All products</h2>
      </div>
      <FilterContainer />
      <div className={s.productsGrid}>
        {productsState.map((productsState) => (
          <ProductsItem key={productsState.id} {...productsState} />
        ))}
      </div>
    </section>
  );
}
