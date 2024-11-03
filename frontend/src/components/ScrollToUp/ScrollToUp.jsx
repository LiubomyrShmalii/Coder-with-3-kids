import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import s from "./ScrollToUp.module.css";

export default function ScrollToUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className={s.scroll_to_up} onClick={scrollToUp}>
        <IoIosArrowUp className={s.arrow} />
        <span className={s.text}>Go Up</span>
      </div>
    )
  );
}
