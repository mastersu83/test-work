import React, { FC, useState } from "react";
import classes from "./Card.module.scss";
import { IProductsType } from "../../types/productsType";

const Card: FC<IProductsType> = ({ description, images, price }) => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [offset, setOffset] = useState(0);
  const moveLeft = () => {
    setOffset((currentOffset) => {
      return Math.min(currentOffset + 214, 0);
    });
    setCurrentPrice((prevState) => Math.max(prevState - 1, 0));
  };
  const moveRight = () => {
    setOffset((currentOffset) => {
      return Math.max(currentOffset - 214, -214 * (images.length - 1));
    });
    setCurrentPrice((prevState) => Math.min(prevState + 1, 2));
  };

  if (!images.length) {
    return <div>Loading</div>;
  }
  return (
    <div className={classes.card__item}>
      <div className={classes.sliderContainer}>
        <div className={`${classes.left} ${classes.arrow}`}>
          <span onClick={moveLeft}>{"<"}</span>
        </div>

        <div
          style={{ transform: `translateX(${offset}px)`, transition: "0.3s" }}
          className={classes.slider}
        >
          {images.map((img, index) => (
            <img
              key={img.id}
              src={"https://test2.sionic.ru" + images[index].image_url}
              alt=""
              className={classes.card__img}
            />
          ))}
        </div>
        <div className={`${classes.right} ${classes.arrow}`}>
          <span onClick={moveRight}>{">"}</span>
        </div>
      </div>
      <span className={classes.card__title}>{description}</span>
      <span className={classes.card__price}>
        от {price[currentPrice].price} ₽
      </span>
      <button className={classes.card__btn}>Добавить в корзину</button>
    </div>
  );
};

export default Card;
