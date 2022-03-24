import React from "react";
import classes from "./Order.module.scss";

const Order = () => {
  return (
    <div className={classes.order}>
      <span className={classes.order__title}> Доставка </span>
      <div className={classes.order__container}>
        <div className={classes.order__delivery}>
          <form className={classes.order__form}>
            <span className={classes.form__label}>Когда доставить?</span>
            <div className={classes.form__dateBox}>
              <input
                name="date"
                type="date"
                className={`${classes.form__date} ${classes.input}`}
                placeholder="Выберите дату"
              />
              <input
                name="time"
                type="time"
                className={`${classes.form__date} ${classes.input}`}
                placeholder="Выберите время"
              />
            </div>

            <span className={classes.form__label}>Куда доставить?</span>

            <input
              name="address"
              type="text"
              className={`${classes.form__address} ${classes.input}`}
              placeholder="Введите адрес доставки"
            />
            <span className={classes.form__label}>Имя</span>

            <input
              name="name"
              type="text"
              className={`${classes.form__name} ${classes.input}`}
              placeholder="Введите имя"
            />
            <span className={classes.form__label}>Телефон</span>

            <input
              name="phone"
              type="text"
              className={`${classes.form__phone} ${classes.input}`}
              placeholder="Введите номер телефона"
            />
          </form>
        </div>
        <div className={classes.order__sum}>
          <span className={`${classes.order__sumProducts} ${classes.flex}`}>
            Стоимость товаров: <span>200 584₽</span>
          </span>
          <span className={`${classes.order__sumDelivery} ${classes.flex}`}>
            Стоимость доставки: <span>200₽</span>
          </span>
          <span className={`${classes.order__sumTotal} ${classes.flex}`}>
            Итого: <span>200 784₽</span>
          </span>
        </div>
      </div>
      <button className={classes.order__btn}>Сделать заказ</button>
    </div>
  );
};

export default Order;
