import React, { useEffect } from "react";
import { getAllCategories } from "../../requests/allCategories";
import s from "./CategoriesPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { Link } from "react-router-dom";

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
          <Link to="/" className={s.crumbText}>
            Main page
          </Link>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <div className={s.crumbTextBlack}>
            Categories
          </div>
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
