import { createSlice, current } from "@reduxjs/toolkit";
import { createUserThunk } from "./operations";

const initialState ={
    currentUser: null,
    cart: [], 
    isLoading: false,
    formType: 'signup',
    showForm: false
}

const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            let newCart = [...state.cart]
            const found = state.cart.find(item => item.id === action.payload.id)

            if(found) {
                newCart = newCart.map(item => {
                    return item.id == action.payload.id ? {...item, quantity: action.payload.quantity || item.quantity + 1} : item
                })
            } else {
                newCart.push({ ...action.payload, quantity: 1 });
            }
            state.cart = newCart
        },
        toggleForm: (state, action) => {
            state.showForm = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(createUserThunk.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(createUserThunk.fulfilled, (state, action) =>{
                state.currentUser = action.payload
                state.isLoading = false
            })
            .addCase(createUserThunk.rejected, (state) =>{
                state.isLoading = false
            })
    }
})

export const {addItemToCart, toggleForm} = userSlice.actions
export default userSlice.reducer