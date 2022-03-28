import React, { useEffect } from "react";
import Card from "../Card/Card";
import classes from "./Cards.module.scss";
import {
  useGetCategoryProductsQuery,
  useGetProductsImgQuery,
  useGetProductsPriceQuery,
} from "../../services/productsAPI";
import {
  getAllProductsId,
  setAllProductsImg,
  setAllProductsPrice,
} from "../../redux/reducers/productsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";

const Cards = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useAppSelector((state) => state.category);

  const { allProductsId, images, price } = useAppSelector(
    (state) => state.products
  );

  const { data: products, isSuccess: isSuccessProducts } =
    useGetCategoryProductsQuery(categoryId);
  const { data: productsImg, isSuccess: isSuccessImg } =
    useGetProductsImgQuery(allProductsId);
  const { data: productsPrice, isSuccess: isSuccessPrice } =
    useGetProductsPriceQuery(allProductsId);

  useEffect(() => {
    if (isSuccessProducts && isSuccessImg && isSuccessPrice) {
      dispatch(getAllProductsId(products));
      dispatch(setAllProductsImg(productsImg));
      dispatch(setAllProductsPrice(productsPrice));
    }
  }, [products, productsImg, productsPrice]);

  console.log(price);

  return (
    <div className={classes.card__container}>
      <div className={classes.card__items}>
        {isSuccessProducts &&
          products.map((prod) => (
            <Card
              key={prod.id}
              {...prod}
              images={images.filter((i) => i.product_id === prod.id)}
              price={price.filter((p) => p.product_id === prod.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Cards;
