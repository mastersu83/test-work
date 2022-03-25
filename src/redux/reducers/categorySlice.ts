import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  categoryId: number;
};

const initialState: initialStateType = {
  categoryId: 21,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryId(state: initialStateType, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = categorySlice.actions;

export default categorySlice.reducer;
