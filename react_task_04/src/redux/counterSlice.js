import { createSlice } from "@reduxjs/toolkit";

 export const countSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {},
});
export default countSlice.reducer