import { createSlice } from "@reduxjs/toolkit";

 export const countSlice = createSlice({
  name: "counter",
  initialState: { isLoggenIn: false },
  reducers: {},
});
export default countSlice.reducer