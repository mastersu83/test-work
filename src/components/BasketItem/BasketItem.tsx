import React, { FC, useState } from "react";
import remove from "../../assets/img/delete.svg";
import classes from "./BasketItem.module.scss";
import { removeProduct } from "../../redux/reducers/basketSlice";
import { useAppDispatch } from "../../hooks/appHooks";

type PropsType = {
  name: string;
  price: number;
  images: string;
  id: number;
  summa: (count: number, id: number) => void;
};

const BasketItem: FC<PropsType> = ({ name, price, images, id, summa }) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(1);

  const counterMinus = (currentCount: number) => {
    if (count === 1) {
      setCount(1);
      return;
    }
    summa(currentCount, id);
    setCount(currentCount);
  };
  const counterPlus = (currentCount: number) => {
    summa(currentCount, id);
    setCount(currentCount);
  };

  // console.log("hello");

  const onRemoveProduct = () => {
    dispatch(removeProduct({ id, price, images }));
  };

  return (
    <div className={classes.basket__item}>
      <img
        src={"https://test2.sionic.ru" + images}
        alt=""
        className={classes.basket__itemImg}
      />
      <span className={classes.basket__itemTitle}>{name}</span>
      <div className={classes.basket__countBox}>
        <span
          className={classes.basket__countButtons}
          onClick={() => counterMinus(count - 1)}
        >
          -
        </span>
        <span className={classes.basket__count}>{count}</span>
        <span
          className={classes.basket__countButtons}
          onClick={() => counterPlus(count + 1)}
        >
          +
        </span>
      </div>
      <span className={classes.basket__itemPrice}>от {price} ₽</span>
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
