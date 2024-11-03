import React from "react";
import { NavLink } from "react-router-dom";
import s from "./BurgerMenu.module.css";
import DayDiscountProduct from "../DayDiscountProduct/DayDiscountProduct";

export default function BurgerMenu({
  onClose,
  isModalOpen,
  openModal,
  closeModal,
}) {
  return (
    <>
      <div className={s.overlay} onClick={onClose}></div>
      <div className={s.burgerContainer}>
        <button className={s.closeButton} onClick={onClose}>
          ×
        </button>
        <nav className={s.navigation}>
          <NavLink to="/" onClick={onClose}>
            Main Page
          </NavLink>
          <NavLink to="/categories" onClick={onClose}>
            Categories
          </NavLink>
          <NavLink to="/all_products" onClick={onClose}>
            All products
          </NavLink>
          <NavLink to="/discounted_products" onClick={onClose}>
            All sales
          </NavLink>
          <div onClick={openModal} className={s.discountButton}>
            1 day discount!
          </div>
        </nav>

        {isModalOpen && (
          <DayDiscountProduct isOpen={isModalOpen} onClose={closeModal} />
        )}
      </div>
    </>
  );
}
