import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.css";
import Button from "../Button/Button";

const Navigation: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMenu = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }

    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/">
          <div className={s.logoContainer}>
            <img
              src="/src/assets/ai-chat.svg"
              alt="AI Chat Logo"
              className={s.logo}
            />
            <span>Chat</span>
          </div>
        </Link>

        <nav className={`${s.nav} ${isMenuOpen ? s.navOpen : ""}`}>
          <div className={s.closeIcon} onClick={toggleMenu}>
            ✕
          </div>
          <ul className={s.navList}>
            <li className={s.dropdown}>
              <div className={s.navItem} onClick={toggleDropdown}>
                Продукты
                <img
                  src="/src/assets/arrow-down.svg"
                  alt="arrow"
                  className={`${s.arrow} ${isDropdownOpen ? s.arrowUp : ""}`}
                />
              </div>
              <ul
                className={`${s.dropdownMenu} ${
                  isDropdownOpen ? s.dropdownOpen : ""
                }`}
              >
                <li>
                  <Link to="/products/product1">Продукт 1</Link>
                </li>
                <li>
                  <Link to="/products/product2">Продукт 2</Link>
                </li>
                <li>
                  <Link to="/products/product3">Продукт 3</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/pricing">Тарифы</Link>
            </li>
            <li>
              <Link to="/integration">Интеграции</Link>
            </li>
            <li>
              <Link to="/cases">Кейсы</Link>
            </li>
          </ul>
        </nav>

        <div className={s.authButtons}>
          <Link to="/login" className={s.login}>
            <img
              src="/src/assets/login.svg"
              alt="login"
              className={s.loginLogo}
            />
            Войти
          </Link>
          <Button
            type="button"
            onClick={() => (window.location.href = "/demo")}
          >
            Получить демо
          </Button>
        </div>

        <div
          className={s.burgerIcon}
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          <img src="/src/assets/burger.svg" alt="Меню" />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
