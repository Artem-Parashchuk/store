import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    product: null,
    isLoading: false,
    error: null
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProductStart(state) {
            state.isLoading = true
            state.isLoading = false
        },
        getProductSuccess(state, action) {
            state.isLoading = false
            state.error = false
            state.product = action.payload
        },
        getProductFailure(state, action) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})
export const {getProductStart, getProductSuccess, getProductFailure} = productSlice.actions
export default productSlice.reducer