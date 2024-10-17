import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./CategoriesContainer.module.css";
import { getAllCategories } from "../../requests/allCategories.js";
import CategoryItem from "../CategoryItem/CategoryItem.jsx";

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories);
  }, []);

  const partCategories = useSelector((store) => store.categories).slice(0, 4);

  return (
    <section className={s.container}>
      <div className={s.head}>
        <h2 className={s.title}>Categories</h2>
        <div className={s.line}></div>
        <Link to="/categories" className={s.allCategoriesButton}>
          All categories
        </Link>
      </div>

      <div className={s.categories}>
        {partCategories.map((el) => (
          <CategoryItem key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
}