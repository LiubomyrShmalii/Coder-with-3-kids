import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../requests/allProducts";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./SaleProductsContainer.module.css";
import ProductsItem from "../ProductsItem/ProductsItem";

export default function SaleProductsContainer() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, []);

  const productsState = useSelector((store) => store.products);

  const discountedProductsAll = productsState.filter(({ discont_price }) => discont_price !== null);

  const randomProducts = [...discountedProductsAll].sort(() => 0.5 - Math.random());

  const fourProducts = randomProducts.slice(0, 4);

  return (
    <section className={s.container}>
      <div className={s.head}>
        <h2 className={s.title}>Sale</h2>
        <div className={s.line}></div>
        <Link to="/sales" className={s.allSalesButton}>
          All sales
        </Link>
      </div>
      <div className={s.productsGrid}>
        {fourProducts.map((el) => (
          <ProductsItem key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
}