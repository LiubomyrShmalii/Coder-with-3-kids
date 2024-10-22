import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../requests/allProducts";
import { useParams } from "react-router-dom";
import { PiHeartFill } from "react-icons/pi";
import { RiCloseCircleFill } from "react-icons/ri";
import { addProductToBasketAction } from "../../store/reducers/basketReducer";
import s from "./SingleProductPage.module.css";

export default function SingleProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const [quantity, setQuantity] = useState(1); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  const productState = useSelector((store) => store.singleProduct);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    dispatch(
      addProductToBasketAction({
        id: productState.id,
        discont_price: productState.discont_price,
        price: productState.price,
        title: productState.title,
        image: productState.image,
        count: quantity
      })
    );
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={s.container}>
      <div className={s.breadcrumbs}>
        <div className={s.crumbBox}>
          <span className={s.crumbText}>Main page</span>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <span className={s.crumbTextBlack}>All products</span>
        </div>
      </div>

      {productState && (
        <div className={s.productDetails}>
          <div className={s.imageContainer}>
            <img
              src={`http://localhost:3333${productState.image}`}
              alt={productState.title}
              className={s.productImage}
              onClick={handleImageClick}
            />
          </div>

          <div className={s.infoContainer}>
            <div className={s.headerRow}>
              <h2 className={s.productTitle}>{productState.title}</h2>
              <PiHeartFill className={s.heartIcon} />
            </div>

            <div className={s.priceBlock}>
              <div className={s.priceWrapper}>
                <span className={s.currentPrice}>
                  ${productState.discont_price || productState.price}
                </span>
                {productState.discont_price && (
                  <span className={s.originalPrice}>${productState.price}</span>
                )}
              </div>
              {productState.discont_price && (
                <div className={s.discountBadge}>
                  <span className={s.discountText}>
                    -
                    {Math.round(
                      ((productState.price - productState.discont_price) /
                        productState.price) *
                        100
                    )}
                    %
                  </span>
                </div>
              )}
            </div>

            <div className={s.actionRow}>
              <div className={s.quantityControl}>
                <div className={s.boxMinus} onClick={handleDecrease}>-</div>
                <div className={s.quantity}>{quantity}</div>
                <div className={s.boxPlus} onClick={handleIncrease}>+</div>
              </div>
              <button className={s.addToCartButton} onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>

            <div className={s.descriptionBox}>
              <h3 className={s.descriptionTitle}>Description</h3>
              <p className={s.descriptionText}>{productState.description}</p>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className={s.modalOverlay} onClick={handleCloseModal}>
          <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <RiCloseCircleFill
              className={s.modalCloseIcon}
              onClick={handleCloseModal}
            />
            <img
              src={`http://localhost:3333${productState.image}`}
              alt={productState.title}
              className={s.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}