import { createSlice } from "@reduxjs/toolkit"
import { getCategoriesThunk } from "./operations"



const initialState = {
    categoriesList: [],
    isLoading: false,
    error: null
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getCategoriesThunk.pending, state => {
                state.isLoading = true
                state.error = false
            })
            .addCase(getCategoriesThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = false
                state.categoriesList = action.payload
            })
            .addCase(getCategoriesThunk.rejected, state => {
                state.isLoading = false
                state.error = true
            })
    }
})
export default categoriesSlice.reducer