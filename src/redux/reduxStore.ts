import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/productsSlice";
import categorySlice from "./reducers/categorySlice";
import { categoryApi } from "../services/categoryAPI";
import { productsApi } from "../services/productsAPI";

export const setupState = () => {
  return configureStore({
    reducer: {
      products: productsSlice,
      category: categorySlice,
      [categoryApi.reducerPath]: categoryApi.reducer,
      [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        categoryApi.middleware,
        productsApi.middleware
      ),
  });
};

export type AppStoreType = ReturnType<typeof setupState>;
export type RootReducerType = ReturnType<AppStoreType["getState"]>;
export type AppDispatchType = AppStoreType["dispatch"];
