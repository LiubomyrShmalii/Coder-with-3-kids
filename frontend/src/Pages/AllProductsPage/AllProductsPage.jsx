import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../requests/allProducts";
import { useDispatch, useSelector } from "react-redux";
import s from "./AllProductsPage.module.css";
import FilterContainer from "../../components/FilterContainer/FilterContainer";
import ProductsItem from "../../components/ProductsItem/ProductsItem";
import { Link } from "react-router-dom";
import CategoriesSkeleton from "../../components/Skeleton/Skeleton";

export default function AllProductsPage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllProducts())
      .then(() => setIsLoading(false))
      .catch(error => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, [dispatch]);

  const productsState = useSelector((store) => store.products);

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
          <div className={s.crumbTextBlack}>All products</div>
        </div>
      </div>
      <div className={s.head}>
        <h2 className={s.title}>All products</h2>
      </div>
      <FilterContainer />
      <div className={s.productsGrid}>
        {isLoading ? (
          <CategoriesSkeleton count={8} />
        ) : (
          productsState
            .filter((el) => el.visible)
            .map((product) => (
              <ProductsItem key={product.id} {...product} />
            ))
        )}
      </div>
    </section>
  );
}