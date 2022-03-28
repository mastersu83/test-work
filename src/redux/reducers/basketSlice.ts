import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductsInBasket {
  category_id: number;
  description: string;
  id: number;
  images: string;
  name: string;
  price: number;
}

type initialStateType = {
  productsInBasket: IProductsInBasket[];
  ifProductAddedInBasket: string;
};

const initialState: initialStateType = {
  productsInBasket: [],
  ifProductAddedInBasket: "",
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
          (p) =>
            p.id === action.payload.id &&
            p.price === action.payload.price &&
            p.images === action.payload.images
        )
          ? (state.ifProductAddedInBasket = "Товар уже добавлен в корзину")
          : state.productsInBasket.push(action.payload);
      } else {
        state.productsInBasket.push(action.payload);
      }
    },
    clearBasket(state: initialStateType) {
      state.productsInBasket = [];
    },
    removeProduct(
      state: initialStateType,
      action: PayloadAction<{ id: number; price: number; images: string }>
    ) {
      state.productsInBasket = state.productsInBasket.filter(
        (prod) => prod.price !== action.payload.price
      );
    },
  },
});

export const { setProductsInBasket, clearBasket, removeProduct } =
  basketSlice.actions;

export default basketSlice.reducer;
