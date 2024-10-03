import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/Header_logo.svg";
import Heart from "../../assets/icons/Header_heart.svg";
import Bag from "../../assets/icons/Header_bag.svg";
import DayNigth from "../../assets/icons/Header_day-night.svg";
import s from "./Header.module.css"


export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.logo_mode}>
        <img src={Logo} className={s.logo} alt="logo" />
        <img src={DayNigth} className={s.mode} alt="dark or light theme" />
      </div>
 
      <div className={s.nav_button}>
        <button className={s.discount_button}>1 day discount!</button>
        <nav className={s.navigation}>
          <NavLink to="/">Main Page</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/all_products">All products</NavLink>
          <NavLink to="/discounted_products">All sales</NavLink>
        </nav>
      </div>

      <div className={s.fav_basket}>
        <Link to="/favorite_products"><img className={s.favorite} src={Heart} alt="Favorite Products Page" /></Link>
        <Link to="/basket"><img className={s.basket} src={Bag} alt="Basket Page" /></Link>
      </div>
    </header>
  );
}
