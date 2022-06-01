import { createSlice } from "@reduxjs/toolkit";
export const Customerslice = createSlice({
  name: "customer",
  initialState:{value:{}},
  reducers: {
    customerinfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { customerinfo } = Customerslice.actions;
export default Customerslice.reducer;
