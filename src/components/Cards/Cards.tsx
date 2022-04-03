import React, { useEffect } from "react";
import Card from "../Card/Card";
import classes from "./Cards.module.scss";
import {
  getCategoryProducts,
  getProductsImg,
  getProductsPrice,
} from "../../services/productsAPI";
import { getMoreProducts } from "../../redux/reducers/productsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";

const Cards = () => {
  const dispatch = useAppDispatch();
  // const { categoryId } = useAppSelector((state) => state.category);

  const { allProductsId, products, range, allProductsIdSuccess, categoryId } =
    useAppSelector((state) => state.products);

  console.log(products);

  // const { data: allProducts, isSuccess: isSuccessProducts } =
  //   useGetCategoryProductsQuery({ categoryId, range });
  //
  // const { data: productsImg, isSuccess: isSuccessImg } =
  //   useGetProductsImgQuery(allProductsId);
  //
  // const { data: productsPrice, isSuccess: isSuccessPrice } =
  //   useGetProductsPriceQuery(allProductsId);

  let test: number = 2;

  const moreProducts = () => {
    if (products.length < 100) {
      dispatch(getMoreProducts());
    }
  };

  useEffect(() => {
    // if (isSuccessProducts && isSuccessImg && isSuccessPrice) {
    //   dispatch(getAllProductsId({ allProducts, productsImg, productsPrice }));
    // }
    dispatch(getCategoryProducts({ categoryId, range }));
  }, [categoryId, range]);

  useEffect(() => {
    // if (isSuccessProducts && isSuccessImg && isSuccessPrice) {
    //   dispatch(getAllProductsId({ allProducts, productsImg, productsPrice }));
    // }

    if (allProductsIdSuccess) {
      dispatch(getProductsImg(allProductsId));
      dispatch(getProductsPrice(allProductsId));
    }
  }, [allProductsIdSuccess]);

  return (
    <div className={classes.card__container}>
      <div className={classes.card__items}>
        {products.map((prod) => (
          <Card key={prod.id} {...prod} />
        ))}
      </div>
      <button onClick={moreProducts}>Ещё товары</button>
    </div>
  );
};

export default Cards;
