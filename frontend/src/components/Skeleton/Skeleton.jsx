import React from "react";
import s from "./Skeleton.module.css";

export default function Skeleton({ count = 11 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={s.skeletonItem}></div>
      ))}
    </>
  );
}
