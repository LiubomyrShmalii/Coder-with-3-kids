import React, { useEffect } from "react";
import { getAllCategories } from "../../requests/allCategories";
import s from "./CategoriesPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "../../components/CategoriesItem/CategoriesItem";

export default function CategoriesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories);
  }, []);

  const categories = useSelector((store) => store.categories);

  return (
    <section className={s.container}>
      <div className={s.breadcrumbs}>
        <div className={s.crumbBox}>
          <span className={s.crumbText}>Main page</span>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <span className={s.crumbTextBlack}>Categories</span>
        </div>
      </div>

      <div className={s.head}>
        <h2 className={s.title}>Categories</h2>
      </div>

      <div className={s.categories}>
        {categories.map((category) => (
          <CategoryItem key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
}