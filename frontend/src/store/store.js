import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer : {
        product : productSlice,
        cart : cartSlice,
        user : authSlice
    }
})

export default store