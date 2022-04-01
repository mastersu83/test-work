import React, { FC } from "react";
import group from "../../assets/img/Group.png";
import classes from "../Basket/Basket.module.scss";
import orderClasses from "./OrderPopup.module.scss";
import { useAppSelector } from "../../hooks/appHooks";
import OrderPopupItem from "../OrderPopupItem/OrderPopupItem";
import { IProductsInBasket } from "../../redux/reducers/basketSlice";

type PropsType = {
  order: IProductsInBasket[];
  open: boolean;
  togglePopup: () => void;
};

const OrderPopup: FC<PropsType> = ({ order, open, togglePopup }) => {
  const { totalSum } = useAppSelector((state) => state.basket);

  return (
    <div
      className={`${orderClasses.orderPopup__container} ${
        open ? `${orderClasses.open}` : ""
      }`}
    >
      <div
        className={`${classes.basket__container} ${orderClasses.orderPopup__body}`}
      >
        <div className={classes.checkout}>
          <h3 className={classes.checkout__title}>Товары</h3>
          <div className={classes.checkout__priceWrapper}>
            <span className={classes.checkout__price}>Стоимость заказа:</span>
            <span className={classes.checkout__sum}>{totalSum} ₽</span>
          </div>
          <img src={group} alt="" className={classes.checkout__img} />
        </div>
        <div
          className={`${classes.basket__items} ${orderClasses.orderPopup__items}`}
        >
          {order.map((order) => (
            <OrderPopupItem key={order.id} {...order} />
          ))}
        </div>
        <div
          onClick={togglePopup}
          className={orderClasses.orderPopup__closeBtn}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;
