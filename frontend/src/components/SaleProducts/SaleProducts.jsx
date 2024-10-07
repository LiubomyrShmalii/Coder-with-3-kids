import React, { useEffect, useState } from "react";
import { getAllSaleProducts } from "../../requests/allSaleProducts";
import heartIcon from "../../assets/icons/SaleProducts_heart.svg";
import bagIcon from "../../assets/icons/SaleProducts_bag.svg";
import { Link } from "react-router-dom";
import s from "./SaleProducts.module.css";

export default function SaleProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllSaleProducts(setProducts);
  }, []);

  const displayedProducts = products.slice(0, 4);

  return (
    <section className={s.container}>
      <div className={s.head}>
        <h2 className={s.title}>Sale</h2>
        <div className={s.line}></div>
        <Link to="/sales" className={s.allSalesButton}>
          All sales
        </Link>
      </div>

      <div className={s.productsGrid}>
        {displayedProducts.map((product) => (
          <div key={product.id} className={s.productCard}>
            <div className={s.discountBadge}>
              -{Math.round(((product.price - product.discont_price) / product.price) * 100)}%
            </div>
            <div className={s.icons}>
              <img src={heartIcon} alt="Heart Icon" className={s.icon} />
              <img src={bagIcon} alt="Bag Icon" className={s.icon} />
            </div>
            <img src={`http://localhost:3333${product.image}`} alt={product.title} className={s.productImage} />
            <h3 className={s.productTitle}>{product.title}</h3>
            <div className={s.priceContainer}>
              <span className={s.price}>${product.discont_price}</span>
              <span className={s.originalPrice}>${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}