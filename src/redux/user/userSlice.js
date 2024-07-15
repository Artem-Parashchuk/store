import { createSlice, current } from "@reduxjs/toolkit";

const initialState ={
    currentUser: [],
    cart: []
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
        }
    }
})

export const {addItemToCart} = userSlice.actions
export default userSlice.reducer