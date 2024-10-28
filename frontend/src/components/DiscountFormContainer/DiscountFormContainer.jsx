import React, { useState } from "react";
import s from "./DiscountFormContainer.module.css";
import peopleImage from "../../assets/images/DiscountForm_hands.png";
import { useForm } from "react-hook-form";

export default function DiscountForm() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const order = (data) => {
    console.log(data);
    reset();
    setIsModalVisible(true);
  };

  const registerName = register("name");
  const registerPhone = register("phone");
  const registerEmail = register("email");

  return (
    <section className={s.discountContainer}>
      <div className={s.greenContainer}>
        <h2 className={s.title}>5% off on the first order</h2>
        <div className={s.contentContainer}>
          <div className={s.imageContainer}>
            <img
              src={peopleImage}
              alt="People holding plants"
              className={s.peopleImage}
            />
          </div>
          <div className={s.formContainer}>
            <form className={s.form} onSubmit={handleSubmit(order)}>
              <input
                className={s.input}
                type="text"
                placeholder="Name"
                {...registerName}
              />
              <input
                className={s.input}
                type="text"
                placeholder="Phone number"
                {...registerPhone}
              />
              <input
                className={s.input}
                type="email"
                placeholder="Email"
                {...registerEmail}
              />
              <button className={s.button} type="submit">
                Get a discount
              </button>
            </form>
          </div>
        </div>
      </div>

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
              Your discount is almost ready.
              <br />
              <br />
              Please check your email for confirmation.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
