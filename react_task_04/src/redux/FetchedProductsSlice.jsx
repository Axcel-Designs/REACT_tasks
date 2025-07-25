import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "inventory/fetchProducts",
  async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products/");
    const data = await response.json();
    return data;
  }
);

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    products: [],
    loading: "idle",
    error: null,
    cart: [],
    wishlist: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id == action.payload);
      if (item) {
        state.cart.push(item);
      }
    },
    addToWishlist: (state, action) => {
      const item = state.products.find((item) => item.id == action.payload);
      if (item) state.wishlist.push(item);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = "fufilled";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      });
  },
});

export default inventorySlice.reducer;
