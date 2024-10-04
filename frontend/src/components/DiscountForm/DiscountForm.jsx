import React from 'react';
import s from './DiscountForm.module.css';
import peopleImage from '../../assets/images/DiscountForm_hands.png';

export default function DiscountForm() {
  return (
    <section className={s.discountContainer}>
      <div className={s.greenContainer}>
        <h2 className={s.title}>5% off on the first order</h2>
        <div className={s.contentContainer}>
          <div className={s.imageContainer}>
            <img src={peopleImage} alt="People holding plants" className={s.peopleImage} />
          </div>
          <div className={s.formContainer}>
            <form className={s.form}>
              <input className={s.input} type="text" placeholder="Name" />
              <input className={s.input} type="text" placeholder="Phone number" />
              <input className={s.input} type="email" placeholder="Email" />
              <button className={s.button} type="submit">Get a discount</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}