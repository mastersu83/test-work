import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductsImgType, IProductsPriceType } from "../../types/productsType";

export interface IProductsInBasket {
  countProdInBasket: number;
  category_id: number;
  description: string;
  id: number;
  name: string;
  images: IProductsImgType;
  price: IProductsPriceType;
}

type initialStateType = {
  productsInBasket: IProductsInBasket[];
  ifProductAddedInBasket: string;
  totalSum: number;
  totalCount: number;
};

const initialState: initialStateType = {
  productsInBasket: [],
  ifProductAddedInBasket: "",
  totalSum: 0,
  totalCount: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setProductsInBasket(
      state: initialStateType,
      action: PayloadAction<IProductsInBasket>
    ) {
      if (state.productsInBasket.length) {
        state.productsInBasket.some(
          (prod) =>
            prod.price.id === action.payload.price.id &&
            prod.images.id === action.payload.images.id
        )
          ? (state.ifProductAddedInBasket = "Товар уже добавлен в корзину")
          : state.productsInBasket.push(action.payload);
      } else {
        state.productsInBasket.push(action.payload);
      }
    },
    countPlus(state: initialStateType, action: PayloadAction<number>) {
      state.productsInBasket = state.productsInBasket.map((prod) =>
        prod.id === action.payload
          ? { ...prod, countProdInBasket: prod.countProdInBasket + 1 }
          : prod
      );
    },
    countMinus(state: initialStateType, action: PayloadAction<number>) {
      state.productsInBasket = state.productsInBasket.map((prod) =>
        prod.id === action.payload
          ? { ...prod, countProdInBasket: prod.countProdInBasket - 1 }
          : prod
      );
    },

    setTotalSum(
      state: initialStateType,
      action: PayloadAction<{ totalSum: number; totalCount: number }>
    ) {
      state.totalSum = action.payload.totalSum;
      state.totalCount = action.payload.totalCount;
    },
    clearBasket(state: initialStateType) {
      state.productsInBasket = [];
    },
    removeProduct(state: initialStateType, action: PayloadAction<number>) {
      state.productsInBasket = state.productsInBasket.filter(
        (prod) => prod.price.id !== action.payload
      );
    },
  },
});

export const {
  setProductsInBasket,
  clearBasket,
  removeProduct,
  countPlus,
  countMinus,
  setTotalSum,
} = basketSlice.actions;

export default basketSlice.reducer;
