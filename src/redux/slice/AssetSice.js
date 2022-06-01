import { createSlice } from "@reduxjs/toolkit";
const AssetSlice = createSlice({
  name: "AssetSlice",
  initialState: {
    value: [],
  },
  reducers: {
    allassets: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { allassets } = AssetSlice.actions;
export default AssetSlice.reducer;
