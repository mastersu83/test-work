import React, { useState } from "react";
import itemImg from "../../assets/img/itemImg.png";
import remove from "../../assets/img/delete.svg";
import classes from "./BasketItem.module.scss";

const BasketItem = () => {
  const [count, setCount] = useState<number>(1);

  const counterMinus = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className={classes.basket__item}>
      <img src={itemImg} alt="" className={classes.basket__itemImg} />
      <span className={classes.basket__itemTitle}>
        Длинное название товара в одну строчку п...
      </span>
      <div className={classes.basket__countBox}>
        <span className={classes.basket__countMinus} onClick={counterMinus}>
          -
        </span>
        <span className={classes.basket__count}>{count}</span>
        <span
          className={classes.basket__countPlus}
          onClick={() => setCount(count + 1)}
        >
          +
        </span>
      </div>
      <span className={classes.basket__itemPrice}>от 350 000 ₽</span>
      <img src={remove} alt="Delete" className={classes.basket__itemDelete} />
    </div>
  );
};

export default BasketItem;
