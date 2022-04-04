import React, { FC, useState } from "react";
import classes from "./Card.module.scss";
import { IProductsType } from "../../types/productsType";
import { setProductsInBasket } from "../../redux/reducers/basketSlice";
import { useAppDispatch } from "../../hooks/appHooks";
import CardLoader from "../CardLoader/CardLoader";

const Card: FC<IProductsType> = ({
  description,
  images,
  price,
  id,
  name,
  category_id,
}) => {
  const dispatch = useAppDispatch();
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [currentImg, setCurrentImg] = useState(0);
  const [offset, setOffset] = useState(0);

  const moveLeft = () => {
    setOffset((currentOffset) => {
      return Math.min(currentOffset + 214, 0);
    });
    setCurrentImg((prevState) => Math.max(prevState - 1, 0));
  };
  const moveRight = () => {
    setOffset((currentOffset) => {
      return Math.max(currentOffset - 214, -214 * (images.length - 1));
    });
    setCurrentImg((prevState) => Math.min(prevState + 1, images.length - 1));
  };

  const onAddProductInBasket = () => {
    dispatch(
      setProductsInBasket({
        countProdInBasket: 1,
        description,
        id: Number("" + id + images[currentImg].id + price[currentPrice].id),
        name,
        category_id,
        images: images[currentImg],
        price: price[currentPrice],
      })
    );
  };

  if (!images || !price) {
    return <CardLoader />;
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
              src={
                images[index].image_url
                  ? "https://test2.sionic.ru" + images[index].image_url
                  : "https://lider-krovlia.ru/local/templates/aspro-stroy/images/noimage_detail.png"
              }
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
      <div className={classes.card__priceBlock}>
        {price.map((price, index) => (
          <span
            key={price.id}
            onClick={() => setCurrentPrice(index)}
            className={`${classes.card__price} ${
              currentPrice === index ? `${classes.card__activePrice}` : ""
            }`}
          >
            {price.price}₽
          </span>
        ))}
      </div>

      <button onClick={onAddProductInBasket} className={classes.card__btn}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default Card;
