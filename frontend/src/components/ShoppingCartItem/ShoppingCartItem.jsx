import React from "react";
import s from "./ShoppingCartItem.module.css";
import { useDispatch } from "react-redux";
import {
  increaseProductQuantityAction,
  decreaseProductQuantityAction,
  removeProductFromBasketAction,
} from "../../store/reducers/basketReducer";

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
        src={`http://localhost:3333${item.image}`}
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
          <div className={s.quantityContainer}>
            <button className={s.quantityButton} onClick={handleDecrease}>
              -
            </button>
            <span className={s.quantityNumber}>{item.count}</span>
            <button className={s.quantityButton} onClick={handleIncrease}>
              +
            </button>
          </div>
          <div className={s.priceContainer}>
            <span className={s.currentPrice}>
              ${item.discont_price || item.price}
            </span>
            {item.discont_price && (
              <span className={s.oldPrice}>${item.price}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
