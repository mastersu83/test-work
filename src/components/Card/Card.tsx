import React from "react";
import cardImg from "../../assets/img/cardImg.png";
import classes from "./Card.module.scss";

const Card = () => {
  return (
    <div className={classes.card__item}>
      <img src={cardImg} alt="" className={classes.card__img} />
      <span className={classes.card__title}>
        Длинное название товара в одну строчку Длинное название товара в одну
        строчку
      </span>
      <span className={classes.card__price}>от 350 000 ₽</span>
      <button className={classes.card__btn}>Добавить в корзину</button>
    </div>
  );
};

export default Card;
