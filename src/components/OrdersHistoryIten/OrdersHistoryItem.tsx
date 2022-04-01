import React, { FC, useState } from "react";
import classes from "./OrdersHistoryItem.module.scss";
import { IProductsInOrder } from "../../redux/reducers/orderSlice";
import OrderPopup from "../OrderPopup/OrderPopup";
import { useAppSelector } from "../../hooks/appHooks";

const OrdersHistoryItem: FC<IProductsInOrder> = ({
  order,
  sumOrder,
  countProdInOrder,
  orderDate,
  orderNumber,
}) => {
  const { orders } = useAppSelector((state) => state.orders);
  const [open, setOpen] = useState(false);

  const togglePopup = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={classes.historyOrder__item}>
        <div className={classes.historyOrder__dateBlock}>
          <div className={classes.historyOrder__date}>{orderDate}</div>
          <div
            onClick={togglePopup}
            className={`${classes.historyOrder__more} ${classes.historyOrder__titleText}`}
          >
            Подробнее
          </div>
        </div>
        <div className={classes.historyOrder__statusBlock}>
          <div className={classes.historyOrder__titleText}>
            <p>Статус заказа</p>
            <span>Оплачен/Завершён</span>
          </div>
          <div
            className={`${classes.historyOrder__number} ${classes.historyOrder__titleText}`}
          >
            <p>Номер заказа</p> <span>#{orderNumber}</span>
          </div>
        </div>
        <div className={classes.historyOrder__detailsBlock}>
          <div
            className={`${classes.historyOrder__countProd} ${classes.historyOrder__titleText}`}
          >
            <p>Колво товаров</p>
            <span>{countProdInOrder} шт.</span>
          </div>
          <div
            className={`${classes.historyOrder__sum} ${classes.historyOrder__titleText}`}
          >
            <p>Стоимость заказа</p> <span>{sumOrder + 200}₽</span>
          </div>
          <div
            className={`${classes.historyOrder__delivery} ${classes.historyOrder__titleText}`}
          >
            <p>Адрес доставки ул.</p> <span> Коммунистич...д.1, стр.1</span>
          </div>
        </div>
        {orders.length ? (
          <OrderPopup order={order} open={open} togglePopup={togglePopup} />
        ) : (
          <h2>В корзине нет товаров</h2>
        )}
      </div>
    </>
  );
};

export default OrdersHistoryItem;
