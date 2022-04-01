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
  getMoreProducts,
} from "../../redux/reducers/productsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";

const Cards = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useAppSelector((state) => state.category);

  const { allProductsId, products, range } = useAppSelector(
    (state) => state.products
  );

  const { data: allProducts, isSuccess: isSuccessProducts } =
    useGetCategoryProductsQuery({ categoryId, range });

  const { data: productsImg, isSuccess: isSuccessImg } =
    useGetProductsImgQuery(allProductsId);

  const { data: productsPrice, isSuccess: isSuccessPrice } =
    useGetProductsPriceQuery(allProductsId);

  const moreProducts = () => {
    dispatch(getMoreProducts());
  };

  useEffect(() => {
    if (isSuccessProducts && isSuccessImg && isSuccessPrice) {
      dispatch(getAllProductsId({ allProducts, productsImg, productsPrice }));
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
      <button onClick={moreProducts}>Ещё товары</button>
    </div>
  );
};

export default Cards;
