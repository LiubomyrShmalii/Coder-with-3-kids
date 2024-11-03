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

  const registerName = register("name", {
    required: 'The field "Name" is required',
  });
  const registerPhone = register("phone", {
    required: 'The field "Phone" is required',
    pattern: {
      value:
        /^\+?[1-9]\d{1,14}$|^[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,4}$/,
      message: "You entered the wrong phone.",
    },
  });
  const registerEmail = register("email", {
    required: 'The field "Email" is required',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "You entered the wrong e-mail.",
    },
  });

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
              {errors.name && (
                <p className={s.errorMessage}>{errors.name?.message}</p>
              )}
              <input
                className={s.input}
                type="text"
                placeholder="Phone number"
                {...registerPhone}
              />
              {errors.phone && (
                <p className={s.errorMessage}>{errors.phone?.message}</p>
              )}
              <input
                className={s.input}
                type="email"
                placeholder="Email"
                {...registerEmail}
              />
              {errors.email && (
                <p className={s.errorMessage}>{errors.email?.message}</p>
              )}
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
