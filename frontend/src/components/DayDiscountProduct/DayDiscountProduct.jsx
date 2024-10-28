import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./DayDiscountProduct.module.css";
import { getAllProducts } from "../../requests/allProducts";
import { addProductToBasketAction } from "../../store/reducers/basketReducer";
import {
  addProductToFavoritesAction,
  removeProductFromFavoritesAction,
} from "../../store/reducers/favoritesReducer";
import { PiHeartFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function DayDiscountProduct({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [randomProduct, setRandomProduct] = useState(null);

  const productsState = useSelector((store) => store.products);
  const favoriteProducts = useSelector((store) => store.favorites);
  console.log(productsState );
  
  const discountedProducts = productsState.filter(product => {
    if (product.discont_price !== null) {
      const discountPercentage = ((product.price - product.discont_price) / product.price) * 100;
      return discountPercentage >= 50;
    }
    return false;
  });
  
  console.log(discountedProducts);

  const getRandomProduct = (products) => {
    if (products && products.length > 0) {
      const randomIndex = Math.floor(Math.random() * products.length);
      return { ...products[randomIndex], discount: 50 };
    }
    return null;
  };

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  useEffect(() => {
    if (isOpen) {
      const selectedProduct = getRandomProduct(productsState);
      setRandomProduct(selectedProduct);
    }
  }, [isOpen, productsState]);

  const handleAddToCart = () => {
    if (randomProduct) {
      dispatch(addProductToBasketAction({ ...randomProduct, count: 1 }));
    }
  };

  const handleFavoriteClick = () => {
    if (randomProduct) {
      const isInFavorites = favoriteProducts.some(
        (product) => product.id === randomProduct.id
      );
      if (isInFavorites) {
        dispatch(removeProductFromFavoritesAction(randomProduct.id));
      } else {
        dispatch(
          addProductToFavoritesAction({
            id: randomProduct.id,
            discont_price: randomProduct.discont_price,
            price: randomProduct.price,
            title: randomProduct.title,
            image: randomProduct.image,
          })
        );
      }
    }
  };

  if (!isOpen || !randomProduct) return null;


  const isInFavorites = favoriteProducts.some(
    (product) => product.id === randomProduct.id
  );

  return (
    <div className={s.modalOverlay}>
      <div className={s.modalContent}>
        <div className={s.header}>
          <h3>50% discount on product of the day!</h3>
          <button onClick={onClose} className={s.closeButton}>
            ×
          </button>
        </div>

        <div className={s.productCard}>
          {randomProduct.discont_price && (
            <div className={s.discountBadge}>
              -
              {Math.round(
                ((randomProduct.price - randomProduct.discont_price) /
                  randomProduct.price) *
                  100
              )}
              %
            </div>
          )}

          <Link to={`/products/${randomProduct.id}`}>
            <img
              src={`http://localhost:3333${randomProduct.image}`}
              alt={randomProduct.title}
              className={s.productImage}
            />
            <h3 className={s.productTitle}>{randomProduct.title}</h3>
          </Link>

          <div className={s.priceContainer}>
            {randomProduct.discont_price ? (
              <>
                <span className={s.price}>${randomProduct.discont_price}</span>
                <span className={s.originalPrice}>${randomProduct.price}</span>
              </>
            ) : (
              <span className={s.price}>${randomProduct.price}</span>
            )}
          </div>

          <div className={s.icons}>
            <div className={s.iconHeartContainer}>
              <PiHeartFill
                className={`${s.iconHeart} ${
                  isInFavorites ? s.inFavorites : ""
                }`}
                onClick={handleFavoriteClick}
              />
            </div>
          </div>
        </div>

        <button onClick={handleAddToCart} className={s.addToCartButton}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
