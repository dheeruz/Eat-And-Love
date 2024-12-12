import { createSlice } from "@reduxjs/toolkit";
import { CartData } from "../../appConstantData/ProductsData";

const initialState = CartData;

const CartReducer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    add_cart: (state, action) => {
      const newItem = {
        id: Math.random(),
        name: action.payload.name,
        imageUrl: action.payload.imageUrl,
        quantity: 1,
        price: action.payload.price,
      };
      state.push(newItem);
    },
    remove_cart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    add_quantity: (state, action) => {
      state.filter((item) => {
        if (item.id == action.payload.id) {
          item.quantity += 1;
        }
        return item;
      });
    },
    minus_quantity: (state, action) => {
      state.filter((item) => {
        if (item.id == action.payload.id) {
          item.quantity -= 1;
        }
        return item;
      });
    },
    empty_cart: (state, action) => {
      return [];
    }
  },
});

export const { add_cart, add_quantity, minus_quantity, remove_cart, empty_cart } =
  CartReducer.actions;
export default CartReducer.reducer;
