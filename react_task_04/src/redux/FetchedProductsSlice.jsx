import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsData/fetchProducts",
  async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products/");
    const data = await response.json();
    return data;
  }
);

export const getProductsData = createSlice({
  name: "productsData",
  initialState: {
    items: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
        state.loading = "pending";
      })
      .builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = "fufilled";
        state.items = action.payload;
      })
      .builder.addCase(fetchProducts.rejected,(state,action)=>{
        state.loading='rejected'
        state.error=action.error.message
      })
  },
});

export default getProductsData.reducer;
