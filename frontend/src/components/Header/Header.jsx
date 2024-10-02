import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path-to-logo.png" alt="logo" />
      </div>
      <button
        className="discount-button"
        // onClick={togglePopup}
      >
        1 day discount!
      </button>
      <nav className="navigation">
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/all_products">All products</NavLink>
        <NavLink to="/discounted_products">All sales</NavLink>
      </nav>
      <div className="icons">
        <Link to="/favorites">
          <i className="icon-heart"></i>
        </Link>
        <Link to="/cart">
          <i className="icon-cart"></i>
        </Link>
        <button
          // onClick={handleDarkModeToggle}
          className="dark-mode-toggle"
        >
          <i className="icon-dark-mode"></i>
        </button>
      </div>

      {/* Попап з товаром дня
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3>Товар дня</h3>
              <p>Знижка 50% на товар!</p>
              <button onClick={() => setShowPopup(false)}>Закрити</button>
            </div>
          </div>
        )} */}
    </header>
  );
}
