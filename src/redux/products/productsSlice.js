import { createSlice } from "@reduxjs/toolkit"
import { getProductsThunk } from "./operations"
import { shuffle } from "../../helpers/helpers"

const initialState = {
    products: [],
    filtered: [],
    related: [],
    isLoading: false,
    error: null
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        filteredByPrice: (state, action) => {
            state.filtered = state.products.filter(product => product.price < action.payload)
        },
        getRelatedProducts: (state, action) => {
            const categoryId = action.payload;
            const relatedProducts = state.products.filter(({ category }) => category.id === categoryId);
            state.related = shuffle(relatedProducts);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getProductsThunk.pending, state => {
                state.error = false
                state.isLoading = true
            })
            .addCase(getProductsThunk.fulfilled, (state, action) => {
                state.error = false
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(getProductsThunk.rejected, state => {
                state.error = true
                state.isLoading = false
            })
    }
})
export const { filteredByPrice, getRelatedProducts } = productsSlice.actions
export default productsSlice.reducer