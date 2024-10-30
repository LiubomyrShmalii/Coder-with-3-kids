import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./DayDiscountProduct.module.css";
import { getAllProducts } from "../../requests/allProducts";
import { addProductToBasketAction } from "../../store/reducers/basketReducer";
import { addProductToFavoritesAction, removeProductFromFavoritesAction } from "../../store/reducers/favoritesReducer";
import { PiHeartFill } from "react-icons/pi";

export default function DayDiscountProduct({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [randomProduct, setRandomProduct] = useState(null);

  const productsState = useSelector((store) => store.products);
  const favoriteProducts = useSelector((store) => store.favorites);

  const getRandomProduct = (products) => {
    if (products && products.length > 0) {
      const randomIndex = Math.floor(Math.random() * products.length);
      const selectedProduct = { ...products[randomIndex] };
      selectedProduct.discont_price = selectedProduct.price * 0.5;
      return selectedProduct;
    }
    return null;
  };

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  useEffect(() => {
    if (productsState.length > 0 && isOpen) {
      const storedData = JSON.parse(localStorage.getItem("discountedProduct"));
      const today = new Date().toISOString().slice(0, 10);

      if (storedData && storedData.date === today) {
        setRandomProduct(storedData.product);
      } else {
        const selectedProduct = getRandomProduct(productsState);
        setRandomProduct(selectedProduct);

        localStorage.setItem(
          "discountedProduct",
          JSON.stringify({ product: selectedProduct, date: today })
        );
      }
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

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(s.modalOverlay)) {
      onClose();
    }
  };

  if (!isOpen || !randomProduct) return null;

  const isInFavorites = favoriteProducts.some(
    (product) => product.id === randomProduct.id
  );

  return (
    <div className={s.modalOverlay} onClick={handleOverlayClick}>
      <div className={s.modalContent}>
        <div className={s.header}>
          <h3 className={s.title}>50% discount on product of the day!</h3>
          <button onClick={onClose} className={s.closeButton}>
            ×
          </button>
        </div>

        <div className={s.productCard}>
          {randomProduct.discont_price && (
            <div className={s.discountBadge}>
              -{Math.round(((randomProduct.price - randomProduct.discont_price) / randomProduct.price) *100)}%
            </div>
          )}
          <img
            src={`${imageBaseUrl}${randomProduct.image}`}
            alt={randomProduct.title}
            className={s.productImage}
          />
          <h3 className={s.productTitle}>{randomProduct.title}</h3>

          <div className={s.priceContainer}>
            {randomProduct.discont_price ? (
              <>
                <span className={s.price}>${randomProduct.discont_price.toFixed(2)}</span>
                <span className={s.originalPrice}>${randomProduct.price}</span>
              </>
            ) : (
              <span className={s.price}>${randomProduct.price}</span>
            )}
          </div>

          <div className={s.icons}>
            <div className={s.iconHeartContainer}>
              <PiHeartFill
                className={`${s.iconHeart} ${isInFavorites ? s.inFavorites : ""}`}
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