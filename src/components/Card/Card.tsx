import React, { FC, useState } from "react";
import classes from "./Card.module.scss";
import { IProductsType } from "../../types/productsType";
import { setProductsInBasket } from "../../redux/reducers/basketSlice";
import { useAppDispatch } from "../../hooks/appHooks";

const Card: FC<IProductsType> = ({
  description,
  images,
  price,
  id,
  name,
  category_id,
}) => {
  const dispatch = useAppDispatch();
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentImg, setCurrentImg] = useState(0);
  const [offset, setOffset] = useState(0);

  const moveLeft = () => {
    setOffset((currentOffset) => {
      return Math.min(currentOffset + 214, 0);
    });
    setCurrentPrice((prevState) => Math.max(prevState - 1, 0));
    setCurrentImg((prevState) => Math.max(prevState - 1, 0));
  };
  const moveRight = () => {
    setOffset((currentOffset) => {
      return Math.max(currentOffset - 214, -214 * (images.length - 1));
    });
    setCurrentPrice((prevState) => Math.min(prevState + 1, price.length - 1));
    setCurrentImg((prevState) => Math.min(prevState + 1, images.length - 1));
  };

  // console.log(images);

  const onAddProductInBasket = () => {
    dispatch(
      setProductsInBasket({
        description,
        id,
        name,
        category_id,
        images: images[currentImg].image_url,
        price: price[currentPrice].price,
      })
    );
  };

  if (!images.length || !price.length) {
    return <div>Loading</div>;
  }
  return (
    <div className={classes.card__item}>
      <div className={classes.sliderContainer}>
        <div onClick={moveLeft} className={`${classes.left} ${classes.arrow}`}>
          <span>{"<"}</span>
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
        <div
          onClick={moveRight}
          className={`${classes.right} ${classes.arrow}`}
        >
          <span>{">"}</span>
        </div>
      </div>
      <span className={classes.card__title}>{description}</span>
      <span className={classes.card__price}>
        от {price[currentPrice].price} ₽
      </span>
      <button onClick={onAddProductInBasket} className={classes.card__btn}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default Card;
