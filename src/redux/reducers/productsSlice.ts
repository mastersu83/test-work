import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IProductsImgType,
  IProductsPriceType,
  IProductsType,
} from "../../types/productsType";
import {
  getCategoryProducts,
  getProductsImg,
  getProductsPrice,
} from "../../services/productsAPI";

type initialStateType = {
  products: IProductsType[];
  allProductsId: number[];
  allProductsIdSuccess: boolean;
  categoryId: number;
  range: {
    min: number;
    max: number;
  };
};

const initialState: initialStateType = {
  products: [],
  allProductsId: [],
  allProductsIdSuccess: false,
  categoryId: 21,
  range: {
    min: 0,
    max: 11,
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProductsId(
      state: initialStateType,
      action: PayloadAction<{
        allProducts: IProductsType[];
        productsImg: IProductsImgType[];
        productsPrice: IProductsPriceType[];
      }>
    ) {
      state.allProductsId = action.payload.allProducts.map((prod) => prod.id);
      state.products = action.payload.allProducts.map((prod) => ({
        ...prod,
        images: action.payload.productsImg.filter(
          (img) => img.product_id === prod.id
        ),
        price: action.payload.productsPrice.filter(
          (price) => price.product_id === prod.id
        ),
      }));
    },
    getMoreProducts(state: initialStateType) {
      state.range.min = state.range.min + 12;
      state.range.max = state.range.max + 12;
    },
  },

  extraReducers: {
    [getCategoryProducts.pending.type]: (state: initialStateType) => {
      state.allProductsIdSuccess = false;
    },
    [getCategoryProducts.fulfilled.type]: (
      state: initialStateType,
      action: PayloadAction<IProductsType[]>
    ) => {
      state.allProductsId = action.payload.map((prod) => prod.id);
      state.products = state.products.concat(action.payload);
      state.allProductsIdSuccess = true;
    },

    [getProductsImg.fulfilled.type]: (
      state: initialStateType,
      action: PayloadAction<IProductsImgType[]>
    ) => {
      state.products = state.products.map((prod) => ({
        ...prod,
        images: prod.images
          ? prod.images
          : action.payload.filter((img) => img.product_id === prod.id),
      }));
      state.allProductsIdSuccess = false;
    },

    [getProductsPrice.fulfilled.type]: (
      state: initialStateType,
      action: PayloadAction<IProductsPriceType[]>
    ) => {
      state.products = state.products.map((prod) => ({
        ...prod,
        price: prod.price
          ? prod.price
          : action.payload.filter((price) => price.product_id === prod.id),
      }));
      state.allProductsIdSuccess = false;
    },
  },
});

export const { getAllProductsId, getMoreProducts } = productsSlice.actions;

export default productsSlice.reducer;
