import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./cartSlice";
import cartSlice from "./productSlice";

const store = configureStore({
    reducer : {
        product : productSlice,
        cart : cartSlice
    }
})

export default store