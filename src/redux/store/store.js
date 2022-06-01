import { configureStore } from "@reduxjs/toolkit";
import Customerinformation from "../slice/CustomerSlice";
import AssetSice from "../slice/AssetSice";
const store = configureStore({
  reducer: {
    customerinfo: Customerinformation,
    assetSlice:AssetSice
  },
});
export default store;
