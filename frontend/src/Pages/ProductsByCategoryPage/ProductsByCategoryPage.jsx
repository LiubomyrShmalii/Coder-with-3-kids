import React, { useEffect } from "react";
import { getProductsByCategory } from "../../requests/allProducts";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductsItem from "../../components/ProductsItem/ProductsItem";
import s from "./ProductsByCategoryPage.module.css";
import FilterContainer from "../../components/FilterContainer/FilterContainer";

export default function ProductsByCategoryPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByCategory(categoryId));
  }, [dispatch, categoryId]);

  const productsByCategoryState = useSelector(
    (store) => store.productsByCategory
  );

  const productsByCategory = productsByCategoryState.data;

  const nameCategory = productsByCategoryState.category;

  return (
    <div>
      {nameCategory && nameCategory.title ? (
        <section className={s.container}>
          <div className={s.breadcrumbs}>
            <div className={s.crumbBox}>
              <Link to="/" className={s.crumbText}>
                Main page
              </Link>
            </div>
            <div className={s.line}></div>
            <div className={s.crumbBox}>
              <Link to="/categories" className={s.crumbText}>
                Categories
              </Link>
            </div>
            <div className={s.line}></div>
            <div className={s.crumbBox}>
              <div className={s.crumbTextBlack}>
                {nameCategory.title}
              </div>
            </div>
          </div>
          <div className={s.head}>
            <h2 className={s.title}>{nameCategory.title}</h2>
          </div>
          <FilterContainer />
          <div className={s.productsGrid}>
            {productsByCategory.map((productsState) => (
              <ProductsItem key={productsState.id} {...productsState} />
            ))}
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
