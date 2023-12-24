import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer : {
        product : productSlice,
        cart : cartSlice
    }
})

export default store