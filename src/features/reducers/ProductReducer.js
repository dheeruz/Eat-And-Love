import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../../appConstantData/ProductsData";

const initialState = ProductsData;

const ProductReducer = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    add_product: (state, action) => {
      const newItem = {
        id: Math.random(),
        ...action.payload,
      };
      state.push(newItem);
    },
  },
});

export const { add_product } = ProductReducer.actions;
export default ProductReducer.reducer;
