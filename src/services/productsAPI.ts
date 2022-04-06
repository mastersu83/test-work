// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// import {
//   IProductsImgType,
//   IProductsPriceType,
//   IProductsType,
// } from "../types/productsType";
//
// export const productsApi = createApi({
//   reducerPath: "productsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://test2.sionic.ru/api/",
//   }),
//   tagTypes: ["Products"],
//   endpoints: (build) => ({
//     getCategoryProducts: build.query<
//       IProductsType[],
//       { categoryId: number; range: { min: number; max: number } }
//     >({
//       query: ({ categoryId, range }) =>
//         `products?filter={%22category_id%22:[${categoryId}]}&range=[${range.min},${range.max}]&sort=[%22description%22,%22ASC%22]`,
//     }),
//     getProductsImg: build.query<IProductsImgType[], number[]>({
//       query: (ids) => ({
//         url: `productImages?filter={%22product_id%22:[${ids}]}`,
//       }),
//       providesTags: ["Products"],
//     }),
//     getProductsPrice: build.query<IProductsPriceType[], number[]>({
//       query: (ids) => ({
//         url: `ProductVariations?filter={%22product_id%22:[${ids}]}&sort=[%22price%22,%22ASC%22]`,
//       }),
//       providesTags: ["Products"],
//     }),
//   }),
// });
//
// export const {
//   useGetCategoryProductsQuery,
//   useGetProductsImgQuery,
//   useGetProductsPriceQuery,
// } = productsApi;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  IProductsImgType,
  IProductsPriceType,
  IProductsType,
  IProductVariationPropertiesListType,
  IProductVariationPropertiesType,
} from "../types/productsType";

export const getCategoryProducts = createAsyncThunk(
  "products/getCategoryProducts",
  async (
    {
      categoryId,
      range,
    }: { categoryId: number; range: { min: number; max: number } },
    thunkAPI
  ) => {
    const resp = await axios.get<IProductsType>(
      `https://test2.sionic.ru/api/products?filter={%22category_id%22:[${categoryId}]}&range=[${range.min},${range.max}]`
    );
    return resp.data;
  }
);
export const getProductsImg = createAsyncThunk(
  "products/getProductsImg",
  async (ids: number[], thunkAPI) => {
    const resp = await axios.get<IProductsImgType>(
      `https://test2.sionic.ru/api/productImages?filter={%22product_id%22:[${ids}]}`
    );
    return resp.data;
  }
);
export const getProductsPrice = createAsyncThunk(
  "products/getProductsPrice",
  async (ids: number[], thunkAPI) => {
    const resp = await axios.get<IProductsPriceType>(
      `https://test2.sionic.ru/api/ProductVariations?filter={%22product_id%22:[${ids}]}&sort=[%22price%22,%22ASC%22]`
    );
    return resp.data;
  }
);
export const getProductVariationProperties = createAsyncThunk(
  "products/getProductVariationProperties",
  async () => {
    const resp = await axios.get<IProductVariationPropertiesType>(
      `https://test2.sionic.ru/api/ProductVariationProperties`
    );
    return resp.data;
  }
);
export const getProductVariationPropertyListValues = createAsyncThunk(
  "products/getProductVariationPropertyListValues",
  async () => {
    const resp = await axios.get<IProductVariationPropertiesListType>(
      `https://test2.sionic.ru/api/ProductVariationPropertyListValues`
    );
    return resp.data;
  }
);
export const getProductVariationPropertyValues = createAsyncThunk(
  "products/getProductVariationPropertyValues",
  async (id: number) => {
    const resp = await axios.get<IProductsPriceType>(
      `https://test2.sionic.ru/api/ProductVariationPropertyValues/?filter={%22product_variation_id%22:${id}}`
    );
    return resp.data;
  }
);
