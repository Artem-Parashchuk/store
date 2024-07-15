import { createSlice } from "@reduxjs/toolkit"
import { getProductsThunk } from "./operations"

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
export const { filteredByPrice } = productsSlice.actions
export default productsSlice.reducer