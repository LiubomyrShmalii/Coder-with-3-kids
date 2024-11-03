import React from "react";
import s from "./CategoryItem.module.css";
import { Link } from "react-router-dom";
import imageBaseUrl from "../../config.js";

export default function CategoryItem({ id, image, title }) {
  return (
    <Link to={`/categories/${id}`}>
      <div className={s.categoryCard}>
        <img
          src={`${imageBaseUrl}${image}`}
          alt={title}
          className={s.categoryImage}
        />
        <h3 className={s.categoryTitle}>{title}</h3>
      </div>
    </Link>
  );
}
