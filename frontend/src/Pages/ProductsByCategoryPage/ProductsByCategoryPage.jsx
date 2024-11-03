import React, { useEffect } from "react";
import { getProductsByCategory } from "../../requests/allProducts";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductsItem from "../../components/ProductsItem/ProductsItem";
import Skeleton from "../../components/Skeleton/Skeleton";
import s from "./ProductsByCategoryPage.module.css";
import FilterContainer from "../../components/FilterContainer/FilterContainer";

export default function ProductsByCategoryPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByCategory(categoryId))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [categoryId, dispatch]);

  const productsByCategoryState = useSelector(
    (store) => store.productsByCategory
  );
  const isLoading = productsByCategoryState.length === 0;
  

  const productsByCategory = productsByCategoryState.data || [];
  const nameCategory = productsByCategoryState.category || {};

  return (
    <div>
      {isLoading ? (
        <Skeleton count={11} />
      ) : (
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
              <div className={s.crumbTextBlack}>{nameCategory.title}</div>
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
      )}
    </div>
  );
}
