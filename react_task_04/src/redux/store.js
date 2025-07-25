import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import inventoryReducer from './FetchedProductsSlice'

export const store = configureStore({
  reducer: {
    authKey: authReducer,
    productsKey: inventoryReducer,
  },
});
