import React from "react";
import classes from "./OrdersHistory.module.scss";

const OrdersHistory = () => {
  return (
    <>
      <span className={classes.history__title}> История заказов</span>

      <div className={classes.history}>
        <div className={classes.history__items}>
          <div className={classes.history__item}>item</div>
        </div>
      </div>
    </>
  );
};

export default OrdersHistory;
