import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IProductsImgType,
  IProductsPriceType,
  IProductsType,
} from "../../types/productsType";

type initialStateType = {
  products: IProductsType[];
  allProductsId: number[];
  images: IProductsImgType[];
  price: IProductsPriceType[];
};

const initialState: initialStateType = {
  products: [],
  allProductsId: [],
  images: [],
  price: [],
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
    },
    setAllProductsImg(
      state: initialStateType,
      action: PayloadAction<IProductsImgType[]>
    ) {
      state.images = action.payload;
    },
    setAllProductsPrice(
      state: initialStateType,
      action: PayloadAction<IProductsPriceType[]>
    ) {
      state.price = action.payload;
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
