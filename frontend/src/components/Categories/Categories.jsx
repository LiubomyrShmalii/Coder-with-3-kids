import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../requests/categories";
import s from "./Categories.module.css";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories(setCategories);
  }, []);

  console.log(categories);


  const partCategories = categories.slice(0, 4);
  console.log(partCategories);

  return (
    <section className={s.container}>
      <div className={s.head}>
        <h2 className={s.title}>Categories</h2>
        <div className={s.line}></div>
        <button className={s.allCategoriesButton}>All categories</button>
      </div>

      <div className={s.categories}>
        {partCategories.map((category) => (
          <div key={category.id} className={s.categoryCard}>
            <img src={`http://localhost:3333${category.image}`} alt={category.title} className={s.categoryImage} />
            <h3 className={s.categoryTitle}>{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
