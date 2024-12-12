import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CartReducer, ProductReducer, UserReducers, AlertPopupReducer, AdminReducer } from "./features/reducers";



const rootReducers = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
  users: UserReducers,
  AlertReducer: AlertPopupReducer,
  adminReducer: AdminReducer,
})


export const store = configureStore({
  reducer: rootReducers,
}) 
