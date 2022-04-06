import React, { FC, useEffect, useState } from "react";
import classes from "./Card.module.scss";
import { IProductsImgType, IProductsPriceType } from "../../types/productsType";
import { setProductsInBasket } from "../../redux/reducers/basketSlice";
import { useAppDispatch } from "../../hooks/appHooks";
import CardLoader from "../CardLoader/CardLoader";
import { getProductVariationPropertyValues } from "../../services/productsAPI";

type PropsTypes = {
  description: string;
  images: IProductsImgType[];
  price: IProductsPriceType[];
  id: number;
  name: string;
  category_id: number;
  allProductsSuccess: boolean;
};

const Card: FC<PropsTypes> = ({
  description,
  images,
  price,
  id,
  name,
  category_id,
  allProductsSuccess,
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

  const onActivePrice = (index: number) => {
    dispatch(getProductVariationPropertyValues(price[index].id));
    setCurrentPrice(index);
  };

  console.log({ ...price });

  useEffect(() => {
    if (allProductsSuccess) {
      console.log("hello");
    }
  }, [allProductsSuccess]);

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

  return (
    <>
      {!images || !price || !allProductsSuccess ? (
        <CardLoader />
      ) : (
        <div className={classes.card__item}>
          <div className={classes.sliderContainer}>
            <div
              onClick={moveLeft}
              className={`${classes.left} ${classes.arrow}`}
            >
              <span>{"<"}</span>
            </div>

            <div
              style={{
                transform: `translateX(${offset}px)`,
                transition: "0.3s",
              }}
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
              <div
                className={classes.card__priceItem}
                key={price.id}
                onClick={() => onActivePrice(index)}
              >
                <span
                  className={`${classes.card__price} ${
                    currentPrice === index ? `${classes.card__activePrice}` : ""
                  }`}
                >
                  {price.price}₽
                </span>
                <div className="card__propertyBlock">
                  <p>
                    {price.productVariationPropertyValues &&
                      price.productVariationPropertyValues.map((value) => (
                        <span key={value.id}>{value.product_variation_id}</span>
                      ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button onClick={onAddProductInBasket} className={classes.card__btn}>
            Добавить в корзину
          </button>
        </div>
      )}
    </>
  );
};

export default Card;
