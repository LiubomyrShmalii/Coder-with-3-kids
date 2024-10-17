import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/Header_logo.svg";
import Heart from "../../assets/icons/Header_heart.svg";
import Bag from "../../assets/icons/Header_bag.svg";
import DayNigth from "../../assets/icons/Header_day-night.svg";
import s from "./Header.module.css";
import { PiShoppingCartFill } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.logo_mode}>
        <Link to="/">
          <img src={Logo} className={s.logo} alt="logo" />
        </Link>
        <img src={DayNigth} className={s.mode} alt="dark or light theme" />
      </div>

      <div className={s.nav_button}>
        <button className={s.discount_button}>1 day discount!</button>
        <nav className={s.navigation}>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : undefined
            }
          >
            Main Page
          </NavLink>
          <NavLink
            to="/categories"
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : undefined
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/all_products"
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : undefined
            }
          >
            All products
          </NavLink>
          <NavLink
            to="/discounted_products"
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : undefined
            }
          >
            All sales
          </NavLink>
        </nav>
      </div>

      <div className={s.fav_basket}>
        <Link to="/favorite_products">
          <PiHeartFill className={s.favorite}/>
        </Link>
        <Link to="/basket">
          <PiShoppingCartFill className={s.basket}/>
        </Link>
      </div>
    </header>
  );
}
