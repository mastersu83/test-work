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

  const { allProductsId, products } = useAppSelector((state) => state.products);

  const { data: allProducts, isSuccess: isSuccessProducts } =
    useGetCategoryProductsQuery(categoryId);
  const { data: productsImg, isSuccess: isSuccessImg } =
    useGetProductsImgQuery(allProductsId);
  const { data: productsPrice, isSuccess: isSuccessPrice } =
    useGetProductsPriceQuery(allProductsId);

  useEffect(() => {
    if (isSuccessProducts && isSuccessImg && isSuccessPrice) {
      dispatch(getAllProductsId(allProducts));
      dispatch(setAllProductsImg(productsImg));
      dispatch(setAllProductsPrice(productsPrice));
    }
  }, [allProducts, productsImg, productsPrice, dispatch]);

  return (
    <div className={classes.card__container}>
      <div className={classes.card__items}>
        {isSuccessProducts &&
          isSuccessImg &&
          isSuccessPrice &&
          products.map((prod) => <Card key={prod.id} {...prod} />)}
      </div>
    </div>
  );
};

export default Cards;
