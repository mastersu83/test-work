import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import group from "../../assets/img/Group.png";
import BasketItem from "../BasketItem/BasketItem";
import classes from "./Basket.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { clearBasket, setTotalSum } from "../../redux/reducers/basketSlice";
import { countTotalSum } from "../../helpers/helpers";

const Basket = () => {
  const dispatch = useAppDispatch();
  const { productsInBasket, totalSum } = useAppSelector(
    (state) => state.basket
  );

  useEffect(() => {
    dispatch(setTotalSum(countTotalSum(productsInBasket)));
  }, [productsInBasket, dispatch]);

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
            <span className={classes.checkout__sum}>{totalSum} ₽</span>
          </div>
          <Link to="/order">
            <button className={classes.checkout__btn}>Оформить</button>
          </Link>
          <img src={group} alt="" className={classes.checkout__img} />
        </div>
        <div className={classes.basket__items}>
          {productsInBasket.length ? (
            productsInBasket.map((prod) => (
              <BasketItem key={`${prod.price.id}${prod.id}`} {...prod} />
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
