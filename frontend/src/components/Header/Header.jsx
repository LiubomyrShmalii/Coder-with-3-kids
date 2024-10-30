import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from "../../assets/images/Header_logo.svg";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import s from "./Header.module.css";
import { PiShoppingCartFill, PiHeartFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import DayDiscountProduct from '../DayDiscountProduct/DayDiscountProduct';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  const basketState = useSelector((store) => store.basket);
  const favoritesState = useSelector((store) => store.favorites);

  const totalItems = basketState.reduce((total, item) => total + item.count, 0);
  const totalFavorites = favoritesState.length;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

  return (
    <header className={s.header}>
      <div className={s.logo_mode}>
        <Link to="/">
          <img src={Logo} className={s.logo} alt="logo" />
        </Link>


        <div className={s.themeSwitch} onClick={toggleTheme}>
          <FiSun className={s.sunIcon} />
          <FaCircle className={`${s.toggleCircle} ${isDarkMode ? s.dark : ''}`} />
          <IoMoonOutline className={s.moonIcon} />
        </div>
      </div>

      <div className={s.nav_button}>
        <div onClick={openModal} className={s.discount_button}>1 day discount!</div>
        <nav className={s.navigation}>
          <NavLink to="/" style={({ isActive }) => isActive ? { textDecoration: "underline", textUnderlineOffset: "8px" } : undefined}>Main Page</NavLink>
          <NavLink to="/categories" style={({ isActive }) => isActive ? { textDecoration: "underline", textUnderlineOffset: "8px" } : undefined}>Categories</NavLink>
          <NavLink to="/all_products" style={({ isActive }) => isActive ? { textDecoration: "underline", textUnderlineOffset: "8px" } : undefined}>All products</NavLink>
          <NavLink to="/discounted_products" style={({ isActive }) => isActive ? { textDecoration: "underline", textUnderlineOffset: "8px" } : undefined}>All sales</NavLink>
        </nav>
      </div>

      <div className={s.fav_basket}>
        <Link to="/favorite_products" className={s.favoriteContainer}>
          <PiHeartFill className={s.favorite} />
          {totalFavorites > 0 && <div className={s.favoritesBadge}>{totalFavorites}</div>}
        </Link>
        <Link to="/basket" className={s.basketContainer}>
          <PiShoppingCartFill className={s.basket} />
          {totalItems > 0 && <div className={s.cartBadge}>{totalItems}</div>}
        </Link>
      </div>

      <DayDiscountProduct isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
}