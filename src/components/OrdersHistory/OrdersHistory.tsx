import React from "react";
import classes from "./OrdersHistory.module.scss";
import OrdersHistoryItem from "../OrdersHistoryIten/OrdersHistoryItem";
import { useAppSelector } from "../../hooks/appHooks";

const OrdersHistory = () => {
  const { orders } = useAppSelector((state) => state.orders);

  return (
    <>
      <span className={classes.historyOrder__title}> История заказов</span>

      <div className={classes.historyOrder}>
        <div className={classes.historyOrder__items}>
          {orders.length
            ? orders.map((order) => (
                <OrdersHistoryItem key={order.id} {...order} />
              ))
            : "Нет заказов"}
        </div>
      </div>
    </>
  );
};

export default OrdersHistory;
