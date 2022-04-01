import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IProductsImgType,
  IProductsPriceType,
  IProductsType,
} from "../../types/productsType";

type initialStateType = {
  products: IProductsType[];
  allProductsId: number[];
};

const initialState: initialStateType = {
  products: [],
  allProductsId: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProductsId(
      state: initialStateType,
      action: PayloadAction<IProductsType[]>
    ) {
      state.allProductsId = action.payload.map((prod) => prod.id);
      state.products = action.payload;
    },
    setAllProductsImg(
      state: initialStateType,
      action: PayloadAction<IProductsImgType[]>
    ) {
      state.products = state.products.map((prod) => ({
        ...prod,
        images: action.payload.filter((img) => img.product_id === prod.id),
      }));
    },
    setAllProductsPrice(
      state: initialStateType,
      action: PayloadAction<IProductsPriceType[]>
    ) {
      state.products = state.products.map((prod) => ({
        ...prod,
        price: action.payload.filter((price) => price.product_id === prod.id),
      }));
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

export const { getAllProductsId, setAllProductsImg, setAllProductsPrice } =
  productsSlice.actions;

export default productsSlice.reducer;
