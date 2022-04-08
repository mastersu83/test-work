import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import classes from "./Cards.module.scss";
import {
  getCategoryProducts,
  getProductsImg,
  getProductsPrice,
  getProductVariationProperties,
  getProductVariationPropertyListValues,
  getProductVariationPropertyValues,
} from "../../services/productsAPI";
import { getMoreProducts } from "../../redux/reducers/productsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import InfiniteScroll from "react-infinite-scroll-component";

const Cards = () => {
  const dispatch = useAppDispatch();

  const [fetching, setFetching] = useState(true);

  const {
    allProductsId,
    products,
    range,
    allProductsIdSuccess,
    categoryId,
    allProductsSuccess,
  } = useAppSelector((state) => state.products);

  const moreProducts = () => {
    if (products.length >= 100) {
      setFetching(false);
      return;
    }
    setTimeout(() => {
      dispatch(getMoreProducts());
    }, 500);
  };

  useEffect(() => {
    if (products.length < 100) {
      dispatch(getCategoryProducts({ categoryId, range }));
      setFetching(true);
    }
  }, [categoryId, range]);

  useEffect(() => {
    if (allProductsIdSuccess) {
      dispatch(getProductsImg(allProductsId));
      dispatch(getProductsPrice(allProductsId));
    }
  }, [allProductsIdSuccess]);

  // useEffect(() => {
  //   if (allProductsSuccess) {
  //     dispatch(getProductVariationPropertyValues(products[0].price[0].id));
  //   }
  // }, [allProductsSuccess]);

  useEffect(() => {
    dispatch(getProductVariationProperties());
    dispatch(getProductVariationPropertyListValues());
  }, []);

  return (
    <div className={classes.card__container}>
      <InfiniteScroll
        dataLength={products.length}
        next={moreProducts}
        hasMore={fetching}
        loader={
          <div className={classes.loader}>
            <span>Идёт Загрузка...</span>
          </div>
        }
        style={{ overflow: "hidden" }}
        endMessage={
          <p style={{ textAlign: "center", marginTop: 20, color: "#2967ff" }}>
            <b>В данной категории больше нет товаров</b>
          </p>
        }
      >
        <div className={classes.card__items}>
          {products.map((prod) => (
            <Card
              key={prod.id}
              {...prod}
              allProductsSuccess={allProductsSuccess}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Cards;
