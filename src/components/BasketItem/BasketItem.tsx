import React, { FC } from "react";
import remove from "../../assets/img/delete.svg";
import classes from "./BasketItem.module.scss";
import {
  countMinus,
  countPlus,
  IProductsInBasket,
  removeProduct,
} from "../../redux/reducers/basketSlice";
import { useAppDispatch } from "../../hooks/appHooks";

const BasketItem: FC<IProductsInBasket> = ({
  name,
  price,
  images,
  countProdInBasket,
  id,
}) => {
  const dispatch = useAppDispatch();

  const counterMinus = () => {
    if (countProdInBasket > 1) {
      dispatch(countMinus(id));
    }
  };
  const counterPlus = () => {
    dispatch(countPlus(id));
  };

  const onRemoveProduct = () => {
    dispatch(removeProduct(id));
  };

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
        <span className={classes.basket__countButtons} onClick={counterMinus}>
          -
        </span>
        <span className={classes.basket__count}>{countProdInBasket}</span>
        <span className={classes.basket__countButtons} onClick={counterPlus}>
          +
        </span>
      </div>
      <span className={classes.basket__itemPrice}>{price.price} ₽</span>
      <img
        onClick={onRemoveProduct}
        src={remove}
        alt="Delete"
        className={classes.basket__itemDelete}
      />
    </div>
  );
};

export default BasketItem;
