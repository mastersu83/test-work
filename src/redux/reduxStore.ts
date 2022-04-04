import { configureStore } from "@reduxjs/toolkit";
import products from "./reducers/productsSlice";
import basket from "./reducers/basketSlice";
import orders from "./reducers/orderSlice";
import { categoryApi } from "../services/categoryAPI";

export const setupState = () => {
  return configureStore({
    reducer: {
      products,
      basket,
      orders,
      [categoryApi.reducerPath]: categoryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(categoryApi.middleware),
  });
};

export type AppStoreType = ReturnType<typeof setupState>;
export type RootReducerType = ReturnType<AppStoreType["getState"]>;
export type AppDispatchType = AppStoreType["dispatch"];
