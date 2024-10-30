import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Підключення стилів для кнопки

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Функція для визначення видимості кнопки при скролі
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Функція для прокручування сторінки догори
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <div className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </div>
    )
  );
}