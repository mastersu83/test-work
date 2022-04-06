import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IProductsImgType,
  IProductsPriceType,
  IProductsType,
  IProductVariationPropertiesListType,
  IProductVariationPropertiesType,
  IProductVariationPropertyValuesType,
} from "../../types/productsType";
import {
  getCategoryProducts,
  getProductsImg,
  getProductsPrice,
  getProductVariationProperties,
  getProductVariationPropertyListValues,
  getProductVariationPropertyValues,
} from "../../services/productsAPI";

type initialStateType = {
  products: IProductsType[];
  allProductsId: number[];
  allProductsIdSuccess: boolean;
  allProductsSuccess: boolean;
  categoryId: number;
  range: {
    min: number;
    max: number;
  };
  productVariationProperties: IProductVariationPropertiesType[];
  productVariationPropertyListValues: IProductVariationPropertiesListType[];
};

const initialState: initialStateType = {
  products: [],
  allProductsId: [],
  allProductsIdSuccess: false,
  allProductsSuccess: false,
  categoryId: 21,
  range: {
    min: 0,
    max: 11,
  },
  productVariationProperties: [],
  productVariationPropertyListValues: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getMoreProducts(state: initialStateType) {
      state.range.min = state.range.min + 12;
      state.range.max = state.range.max + 12;
    },
    setCategoryId(state: initialStateType, action: PayloadAction<number>) {
      state.products = [];
      state.categoryId = action.payload;
      state.range.min = 0;
      state.range.max = 11;
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
      if (
        !action.payload.some((prod) =>
          state.allProductsId.some((p) => p === prod.id)
        )
      ) {
        state.allProductsId = action.payload.map((prod) => prod.id);
        state.products = state.products.concat(action.payload);
        state.allProductsIdSuccess = true;
      } else if (!state.products.length) {
        state.allProductsId = action.payload.map((prod) => prod.id);
        state.products = action.payload;
        state.allProductsIdSuccess = true;
      }
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
      // getProductVariationPropertyValues(3);
      state.allProductsIdSuccess = false;
      state.allProductsSuccess = true;
    },
    [getProductVariationPropertyValues.fulfilled.type]: (
      state: initialStateType,
      action: PayloadAction<IProductVariationPropertyValuesType[]>
    ) => {
      state.products = state.products.map((prod) => ({
        ...prod,
        price: prod.price.map((price) => ({
          ...price,
          productVariationPropertyValues: action.payload.filter(
            (property) => price.id === property.product_variation_id
          ),
        })),
      }));
      state.allProductsIdSuccess = false;
    },
    [getProductVariationProperties.fulfilled.type]: (
      state: initialStateType,
      action: PayloadAction<IProductVariationPropertiesType[]>
    ) => {
      state.productVariationProperties = action.payload;
    },
    [getProductVariationPropertyListValues.fulfilled.type]: (
      state: initialStateType,
      action: PayloadAction<IProductVariationPropertiesListType[]>
    ) => {
      state.productVariationPropertyListValues = action.payload;
    },
  },
});

export const { setCategoryId, getMoreProducts } = productsSlice.actions;

export default productsSlice.reducer;
