import React from "react";
import s from "./Skeleton.module.css";

export default function Skeleton({ count = 4 }) {
  return (
    <div className={s.categories}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={s.categoryCardSkeleton}>
          <div className={s.categoryImageSkeleton}></div>
          <div className={s.categoryTitleSkeleton}></div>
        </div>
      ))}
    </div>
  );
}