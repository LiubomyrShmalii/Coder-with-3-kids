import React from 'react';
import s from './ShoppingCartPage.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCartItem from '../../components/ShoppingCartItem/ShoppingCartItem';

export default function ShoppingCartPage() {
  const basketState = useSelector(store => store.basket);

  const totalItems = basketState.reduce((total, item) => total + item.count, 0);
  const totalPrice = basketState.reduce((total, item) => total + (item.discont_price || item.price) * item.count, 0);

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
          <h2 className={s.emptyTitle}>Looks like you have no items in your basket currently.</h2>
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
              <form className={s.form}>
                <input className={s.input} type="text" placeholder="Name" name='name'/>
                <input className={s.input} type="text" placeholder="Phone number" name='phone'/>
                <input className={s.input} type="email" placeholder="Email" name='email'/>
                <button className={s.button} type="submit">
                  Order
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}