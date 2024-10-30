import React from "react";
import s from "./ShoppingCartItem.module.css";
import { useDispatch } from "react-redux";
import {
  increaseProductQuantityAction,
  decreaseProductQuantityAction,
  removeProductFromBasketAction,
} from "../../store/reducers/basketReducer";
import imageBaseUrl from "../../config.js";

export default function ShoppingCartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseProductQuantityAction(item.id));
  };

  const handleDecrease = () => {
    if (item.count > 1) {
      dispatch(decreaseProductQuantityAction(item.id));
    } else {
      dispatch(removeProductFromBasketAction(item.id));
    }
  };

  const handleRemove = () => {
    dispatch(removeProductFromBasketAction(item.id));
  };

  return (
    <div className={s.cartItem}>
      <img
        src={`${imageBaseUrl}${item.image}`}
        alt={item.title}
        className={s.productImage}
      />

      <div className={s.itemDetails}>
        <div className={s.titleAndRemove}>
          <p className={s.productTitle}>{item.title}</p>
          <button className={s.removeItem} onClick={handleRemove}>
            ×
          </button>
        </div>
        <div className={s.quantityAndPrice}>
          <div className={s.quantityControl}>
            <div className={s.boxMinus} onClick={handleDecrease}>
              -
            </div>
            <div className={s.quantity}>{item.count}</div>
            <div className={s.boxPlus} onClick={handleIncrease}>
              +
            </div>
          </div>
          <div className={s.priceBlock}>
            <div className={s.priceWrapper}>
              <span className={s.currentPrice}>
                ${item.discont_price || item.price}
              </span>
              {item.discont_price && (
                <span className={s.originalPrice}>${item.price}</span>
              )}

            </div>
            {item.discont_price && (
                <div className={s.discountBadge}>
                  <span className={s.discountText}>
                    -
                    {Math.round(
                      ((item.price - item.discont_price) / item.price) * 100
                    )}
                    %
                  </span>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
