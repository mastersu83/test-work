import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  IProductsImgType,
  IProductsPriceType,
  IProductsType,
} from "../types/productsType";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test2.sionic.ru/api/",
  }),
  tagTypes: ["Products"],
  endpoints: (build) => ({
    getCategoryProducts: build.query<IProductsType[], number>({
      query: (id) => `products?filter={%22category_id%22:[${id}]}&range=[0,11]`,
    }),
    getProductsImg: build.query<IProductsImgType[], number[]>({
      query: (ids) => ({
        url: `productImages?filter={%22products_id%22:${ids}&range=[0,32]`,
      }),
      providesTags: ["Products"],
    }),
    getProductsPrice: build.query<IProductsPriceType[], number[]>({
      query: (ids) => ({
        url: `ProductVariations?filter={%22products_id%22:${ids}&range=[0,43]`,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetCategoryProductsQuery,
  useGetProductsImgQuery,
  useGetProductsPriceQuery,
} = productsApi;

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { IProductsType } from "../types/productsType";
//
// export const getCategoryProducts = createAsyncThunk(
//   "products/getCategoryProducts",
//   async (_, thunkAPI) => {
//     const resp = await axios.get<IProductsType>(
//       `https://test2.sionic.ru/api/products?filter={%22category_id%22:[22]}&range=[0,11]`
//     );
//     return resp.data;
//   }
// );
