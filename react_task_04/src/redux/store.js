import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import productsReducer from './FetchedProductsSlice'

export const store = configureStore({
  reducer: {
    authKey: authReducer,
    productKey: productsReducer,
  },
});
