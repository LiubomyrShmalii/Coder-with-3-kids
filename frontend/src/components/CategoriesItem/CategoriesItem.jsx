import React from "react";
import s from "./CategoriesItem.module.css";
import { Link } from "react-router-dom";

export default function CategoryItem({ id, image, title}) {
  return (
    <Link to={`/category/${id}`}>
    <div className={s.categoryCard}>
      <img
        src={`http://localhost:3333${image}`}
        alt={title}
        className={s.categoryImage}
      />
      <h3 className={s.categoryTitle}>{title}</h3>
    </div>
    </Link>
  );
}