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
    search: "",
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id == action.payload);
      if (itemInCart) return;

      const item = state.products.find((item) => item.id == action.payload);
      if (item) {
        state.cart.push(item);
      }
    },
    addToWishlist: (state, action) => {
      const itemInWish = state.wishlist.find(
        (item) => item.id == action.payload
      );
      if (itemInWish) return;

      const item = state.products.find((item) => item.id == action.payload);
      if (item) state.wishlist.push(item);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      });
  },
});
export const {
  addToCart,
  addToWishlist,
  removeFromCart,
  clearCart,
  removeFromWishlist,
  setSearch,
} = inventorySlice.actions;
export default inventorySlice.reducer;
