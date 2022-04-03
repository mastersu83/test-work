import { configureStore } from "@reduxjs/toolkit";
import products from "./reducers/productsSlice";
import category from "./reducers/categorySlice";
import basket from "./reducers/basketSlice";
import orders from "./reducers/orderSlice";
import { categoryApi } from "../services/categoryAPI";
// import { productsApi } from "../services/productsAPI";

export const setupState = () => {
  return configureStore({
    reducer: {
      products,
      category,
      basket,
      orders,
      [categoryApi.reducerPath]: categoryApi.reducer,
      // [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        categoryApi.middleware
        // productsApi.middleware
      ),
  });
};

export type AppStoreType = ReturnType<typeof setupState>;
export type RootReducerType = ReturnType<AppStoreType["getState"]>;
export type AppDispatchType = AppStoreType["dispatch"];
