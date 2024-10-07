import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../requests/categories";
import s from "./AllCategories.module.css";

export default function AllCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories(setCategories);
  }, []);

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
          <div key={category.id} className={s.categoryCard}>
            <img
              src={`http://localhost:3333${category.image}`}
              alt={category.title}
              className={s.categoryImage}
            />
            <h3 className={s.categoryTitle}>{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}