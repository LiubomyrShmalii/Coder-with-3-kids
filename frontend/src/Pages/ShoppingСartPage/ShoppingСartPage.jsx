import React, { useState } from "react";
import s from "./ShoppingCartPage.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem";
import { useForm } from "react-hook-form";
import { clearBasketAction } from "../../store/reducers/basketReducer";

export default function ShoppingCartPage() {
  const dispatch = useDispatch();
  const basketState = useSelector((store) => store.basket);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const totalItems = basketState.reduce((total, item) => total + item.count, 0);
  const totalPrice = basketState.reduce(
    (total, item) => total + (item.discont_price || item.price) * item.count,
    0
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const order = (data) => {
    console.log({ ...data, cart: basketState, sum: totalPrice });
    reset();
    dispatch(clearBasketAction());
    setIsModalVisible(true);
  };

  const registerName = register("name", {
    required: 'The field "Name" is required',
  });
  const registerPhone = register("phone", {
    required: 'The field "Phone" is required',
    pattern: {
      value: /^\+?[1-9]\d{1,14}$|^[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,4}$/,
      message: 'You entered the wrong phone.'
    }
  });
  const registerEmail = register("email", {
    required: 'The field "Email" is required',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'You entered the wrong e-mail.'
    }
  });

  return (
    <div className={s.shoppingCartContainer}>
      <div className={s.head}>
        <h2 className={s.title}>Shopping Cart</h2>
        <div className={s.line}></div>
        <Link to="/all_products" className={s.allCategoriesButton}>
          Back to the store
        </Link>
      </div>

      {basketState.length === 0 ? (
        <div className={s.emptyCartContainer}>
          <h2 className={s.emptyTitle}>
            Looks like you have no items in your basket currently.
          </h2>
          <Link to="/all_products" className={s.continueShoppingButton}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className={s.contentContainer}>
          <div className={s.cartItems}>
            {basketState.map((item) => (
              <ShoppingCartItem key={item.id} item={item} />
            ))}
          </div>

          <div className={s.orderDetails}>
            <h2>Order details</h2>
            <p>{totalItems} items</p>
            <div className={s.totalPrice}>
              <p>Total</p>
              <h3>${totalPrice.toFixed(2)}</h3>
            </div>

            <div className={s.formContainer}>
              <form className={s.form} onSubmit={handleSubmit(order)}>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Name"
                  {...registerName}
                />
                {errors.name && <p>{errors.name?.message}</p>}
                <input
                  className={s.input}
                  type="text"
                  placeholder="Phone number"
                  {...registerPhone}
                />
                {errors.phone && <p>{errors.phone?.message}</p>}
                <input
                  className={s.input}
                  type="email"
                  placeholder="Email"
                  {...registerEmail}
                />
                {errors.email && <p>{errors.email?.message}</p>}
                <button className={s.button} type="submit">
                  Order
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {isModalVisible && (
        <div className={s.modal} onClick={() => setIsModalVisible(false)}>
          <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={s.closeModalButton}
              onClick={() => setIsModalVisible(false)}
            >
              ×
            </button>
            <h2>Congratulations!</h2>
            <p>
              Your order has been successfully placed on the website.
              <br />
              <br />A manager will contact you shortly to confirm your order.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
