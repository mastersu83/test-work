import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IProductsImgType,
  IProductsPriceType,
  IProductsType,
} from "../../types/productsType";

type initialStateType = {
  products: IProductsType[];
  allProductsId: number[];
  range: {
    min: number;
    max: number;
  };
};

const initialState: initialStateType = {
  products: [],
  allProductsId: [],
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

  // extraReducers: {
  //   [getCategoryProducts.fulfilled.type]: (
  //     state: initialStateType,
  //     action: PayloadAction<IProductsType[]>
  //   ) => {
  //     state.allProductsId = action.payload.map((prod) => prod.id);
  //   },
  // },
});

export const { getAllProductsId, getMoreProducts } = productsSlice.actions;

export default productsSlice.reducer;
