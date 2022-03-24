import React from "react";
import { Link } from "react-router-dom";
import group from "../../assets/img/Group.png";
import BasketItem from "../BasketItem/BasketItem";
import classes from "./Basket.module.scss";

const Basket = () => {
  return (
    <div className={classes.basket}>
      <span className={classes.basket__title}>
        Корзина<span className={classes.basket__setup}>Очистить корзину</span>
      </span>
      <div className={classes.basket__container}>
        <div className={classes.checkout}>
          <h3 className={classes.checkout__title}>Xiaomi</h3>
          <div className={classes.checkout__priceWrapper}>
            <span className={classes.checkout__price}>Стоимость корзины:</span>
            <span className={classes.checkout__sum}>1 185 000₽ </span>
          </div>
          <Link to="/order">
            <button className={classes.checkout__btn}>Оформить</button>
          </Link>
          <img src={group} alt="" className={classes.checkout__img} />
        </div>
        <div className={classes.basket__items}>
          <BasketItem />
        </div>
      </div>
    </div>
  );
};

export default Basket;
