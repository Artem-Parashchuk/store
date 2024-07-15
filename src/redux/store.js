import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from './products/productsSlice'
import productReducer from './product/productSlice'
import userReducer from './user/userSlice'


export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        product: productReducer,
        user: userReducer

    },
    // middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware)
})