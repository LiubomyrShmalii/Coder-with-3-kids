import React from 'react'
import heartIcon from "../../assets/icons/SaleProducts_heart.svg";
import bagIcon from "../../assets/icons/SaleProducts_bag.svg";
import s from './ProductsItem.module.css'

export default function ProductsItem({discont_price, price, title, image}) {
  return (
    <div>
      <div className={s.productCard}>
            {discont_price && (
              <div className={s.discountBadge}>
                -
                {Math.round(
                  ((price - discont_price) /
                    price) *
                    100
                )}
                %
              </div>
            )}

            <div className={s.icons}>
              <img src={heartIcon} alt="Heart Icon" className={s.icon} />
              <img src={bagIcon} alt="Bag Icon" className={s.icon} />
            </div>
            <img
              src={`http://localhost:3333${image}`}
              alt={title}
              className={s.productImage}
            />
            <h3 className={s.productTitle}>{title}</h3>

            <div className={s.priceContainer}>
              {discont_price ? (
                <>
                  <span className={s.price}>
                    ${discont_price}
                  </span>
                  <span className={s.originalPrice}>
                    ${price}
                  </span>
                </>
              ) : (
                <span className={s.price}>${price}</span>
              )}
            </div>
          </div>
    </div>
  )
}
