import React from "react";
import s from "./BannerContainer.module.css";
import image from "../../assets/images/Banner_img.png";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className={s.container}>
      <img src={image} alt="GreenShop" className={s.image} />

      <div className={s.containerText}>
        <h1 className={s.containerTitle}>
          Amazing Discounts on Garden Products!
        </h1>
        <Link to="/discounted_products">
          <button className={s.containerButton}>Check out</button>
        </Link>
      </div>
    </section>
  );
}
