import React, { ChangeEvent, useState } from "react";
import classes from "./Order.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { setOrder } from "../../redux/reducers/orderSlice";

const Order = () => {
  const dispatch = useAppDispatch();
  const { productsInBasket, totalSum, totalCount } = useAppSelector(
    (state) => state.basket
  );

  const order = () => {
    dispatch(setOrder({ productsInBasket, totalSum, totalCount }));
  };

  const [inputValue, setInputValue] = useState({
    date: "",
    time: "",
    address: "",
    name: "",
    phone: "",
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  console.log(inputValue);

  return (
    <div className={classes.order}>
      <span className={classes.order__title}> Доставка </span>
      <div className={classes.order__container}>
        <div className={classes.order__delivery}>
          <form className={classes.order__form}>
            <span className={classes.form__label}>Когда доставить?</span>
            <div className={classes.form__dateBox}>
              <input
                onChange={onChangeInput}
                name="date"
                type="date"
                className={`${classes.form__date} ${classes.input}`}
                placeholder="Выберите дату"
              />
              <input
                onChange={onChangeInput}
                name="time"
                type="time"
                className={`${classes.form__date} ${classes.input}`}
                placeholder="Выберите время"
              />
            </div>

            <span className={classes.form__label}>Куда доставить?</span>

            <input
              onChange={onChangeInput}
              name="address"
              type="text"
              className={`${classes.form__address} ${classes.input}`}
              placeholder="Введите адрес доставки"
            />
            <span className={classes.form__label}>Имя</span>

            <input
              onChange={onChangeInput}
              name="name"
              type="text"
              className={`${classes.form__name} ${classes.input}`}
              placeholder="Введите имя"
            />
            <span className={classes.form__label}>Телефон</span>

            <input
              onChange={onChangeInput}
              name="phone"
              type="text"
              className={`${classes.form__phone} ${classes.input}`}
              placeholder="Введите номер телефона"
            />
          </form>
        </div>
        <div className={classes.order__sum}>
          <span className={`${classes.order__sumProducts} ${classes.flex}`}>
            Стоимость товаров: <span>{totalSum} ₽</span>
          </span>
          <span className={`${classes.order__sumDelivery} ${classes.flex}`}>
            Стоимость доставки:{" "}
            <span>{productsInBasket.length ? 200 : 0} ₽</span>
          </span>
          <span className={`${classes.order__sumTotal} ${classes.flex}`}>
            Итого:{" "}
            <span>{totalSum + (productsInBasket.length ? 200 : 0)} ₽</span>
          </span>
        </div>
      </div>
      <button onClick={order} className={classes.order__btn}>
        Сделать заказ
      </button>
    </div>
  );
};

export default Order;
