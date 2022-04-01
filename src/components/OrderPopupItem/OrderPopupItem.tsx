import React, { FC } from "react";
import classes from "../BasketItem/BasketItem.module.scss";
import { IProductsInBasket } from "../../redux/reducers/basketSlice";

const OrderPopupItem: FC<IProductsInBasket> = ({
  name,
  images,
  countProdInBasket,
  price,
}) => {
  return (
    <div className={classes.basket__item}>
      <img
        src={
          images.image_url
            ? "https://test2.sionic.ru" + images.image_url
            : "https://lider-krovlia.ru/local/templates/aspro-stroy/images/noimage_detail.png"
        }
        alt=""
        className={classes.basket__itemImg}
      />
      <span className={classes.basket__itemTitle}>{name}</span>
      <div className={classes.basket__countBox}>
        <span className={classes.basket__count}>{countProdInBasket}</span>
      </div>
      <span className={classes.basket__itemPrice}>{price.price} ₽</span>
    </div>
  );
};

export default OrderPopupItem;
