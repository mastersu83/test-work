import React from "react";
import basket from "../../assets/img/basket.svg";
import avatar from "../../assets/img/avatar.png";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import { useAppSelector } from "../../hooks/appHooks";

const Header = () => {
  const { productsInBasket } = useAppSelector((state) => state.basket);
  return (
    <header className={classes.header}>
      <Link to="/">
        <h2 className={classes.logo}>React</h2>
      </Link>
      <div className={classes.header__locationBlock}>Александровск-Са...</div>
      <div className={classes.searchBlock}>
        <input
          type="text"
          className={classes.searchBlock__input}
          placeholder="Поиск бренда, товара, категории..."
        />
        <button className={classes.searchBlock__button} />
      </div>
      <Link to="basket">
        <div className={classes.header__basketWrapper}>
          <img src={basket} alt="Корзина" className={classes.header__basket} />
          <div className={classes.basket__countWrapper}>
            <span className={classes.basket__count}>
              {productsInBasket.length > 10 ? "10+" : productsInBasket.length}
            </span>
          </div>
        </div>
      </Link>
      <Link to="history-order" className={classes.header__historyLink}>
        <img src={avatar} alt="Аватвр" className={classes.header__avatar} />
      </Link>
    </header>
  );
};

export default Header;
