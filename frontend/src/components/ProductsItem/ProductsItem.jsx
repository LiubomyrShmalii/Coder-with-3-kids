import React from "react";
import s from "./ProductsItem.module.css";
import { Link } from "react-router-dom";
import { PiShoppingCartFill, PiHeartFill } from "react-icons/pi";
import {
  addProductToBasketAction,
  removeProductFromBasketAction,
} from "../../store/reducers/basketReducer";
import {
  addProductToFavoritesAction,
  removeProductFromFavoritesAction,
} from "../../store/reducers/favoritesReducer";
import { useDispatch, useSelector } from "react-redux";
import imageBaseUrl from "../../config.js";

export default function ProductsItem({
  id,
  discont_price,
  price,
  title,
  image,
}) {
  const dispatch = useDispatch();

  const basket = useSelector((state) => state.basket);
  const favorites = useSelector((state) => state.favorites);

  const isInCart = basket.some((product) => product.id === id);
  const isInFavorites = favorites.some((product) => product.id === id);

  const handleHeartClick = (event) => {
    event.preventDefault();
    if (isInFavorites) {
      dispatch(removeProductFromFavoritesAction(id));
    } else {
      dispatch(
        addProductToFavoritesAction({ id, discont_price, price, title, image })
      );
    }
  };

  const handleCartClick = (event) => {
    event.preventDefault();
    if (isInCart) {
      dispatch(removeProductFromBasketAction(id));
    } else {
      dispatch(
        addProductToBasketAction({ id, discont_price, price, title, image })
      );
    }
  };

  return (
    <div className={s.productCard}>
      {discont_price && (
        <div className={s.discountBadge}>
          -{Math.round(((price - discont_price) / price) * 100)}%
        </div>
      )}

      <Link to={`/products/${id}`}>
        <img
          src={`${imageBaseUrl}${image}`}
          alt={title}
          className={s.productImage}
        />
        <h3 className={s.productTitle}>{title}</h3>
      </Link>

      <div className={s.priceContainer}>
        {discont_price ? (
          <>
            <span className={s.price}>${discont_price}</span>
            <span className={s.originalPrice}>${price}</span>
          </>
        ) : (
          <span className={s.price}>${price}</span>
        )}
      </div>

      <div className={s.icons}>
        <div className={s.iconHeartContainer}>
          <PiHeartFill
            className={`${s.iconHeart} ${isInFavorites ? s.inFavorites : ""}`}
            onClick={handleHeartClick}
          />
        </div>
        <div className={s.iconCartContainer}>
          <PiShoppingCartFill
            className={`${s.iconCart} ${isInCart ? s.inCart : ""}`}
            onClick={handleCartClick}
          />
        </div>
      </div>
    </div>
  );
}
