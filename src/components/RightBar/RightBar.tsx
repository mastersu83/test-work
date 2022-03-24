import React from "react";
import free from "../../assets/img/Free.svg";
import classes from "./RightBar.module.scss";

const RightBar = () => {
  return (
    <div className={classes.rightBar}>
      <div className={classes.rightBar__moreInfo}>
        <img src={free} alt="free" className={classes.moreInfo__image} />
        <span className={classes.moreInfo__title}>
          Получай товары БЕСПЛАТНО!
        </span>
        <button className={classes.moreInfo__btn}>Узнать подробнее</button>
      </div>
      <div className={classes.rightBar__newCollections}>
        <div className={classes.newCollection__item}>Новая коллекция</div>
        <div className={classes.newCollection__item}>Новая коллекция</div>
        <div className={classes.newCollection__item}>Новая коллекция</div>
      </div>
    </div>
  );
};

export default RightBar;
