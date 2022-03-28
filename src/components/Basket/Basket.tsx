import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import group from "../../assets/img/Group.png";
import BasketItem from "../BasketItem/BasketItem";
import classes from "./Basket.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { clearBasket } from "../../redux/reducers/basketSlice";

const Basket = () => {
  const dispatch = useAppDispatch();
  const { productsInBasket } = useAppSelector((state) => state.basket);
  const [currentSum, setCurrentSum] = useState<number>(0);

  const sum = (count: number, id: number) => {
    console.log(count);
    console.log(id);
    let summa = productsInBasket.map((prod) =>
      prod.id === id ? prod.price * count : prod.price
    );
    setCurrentSum(summa.reduce((a, b) => a + b, 0));
  };

  useEffect(() => {
    setCurrentSum(
      productsInBasket.map((prod) => prod.price).reduce((a, b) => a + b, 0)
    );
  }, [productsInBasket]);

  // console.log(currentSum);

  const onClearBasket = () => {
    dispatch(clearBasket());
  };
  return (
    <div className={classes.basket}>
      <span className={classes.basket__title}>
        Корзина
        <span onClick={onClearBasket} className={classes.basket__setup}>
          Очистить корзину
        </span>
      </span>
      <div className={classes.basket__container}>
        <div className={classes.checkout}>
          <h3 className={classes.checkout__title}>Товары</h3>
          <div className={classes.checkout__priceWrapper}>
            <span className={classes.checkout__price}>Стоимость корзины:</span>
            <span className={classes.checkout__sum}>1180000 {currentSum}</span>
          </div>
          <Link to="/order">
            <button className={classes.checkout__btn}>Оформить</button>
          </Link>
          <img src={group} alt="" className={classes.checkout__img} />
        </div>
        <div className={classes.basket__items}>
          {productsInBasket.length ? (
            productsInBasket.map((prod) => (
              <BasketItem
                summa={sum}
                key={`${prod.id}${prod.images}${prod.price}`}
                {...prod}
              />
            ))
          ) : (
            <h2>В корзине нет товаров</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
