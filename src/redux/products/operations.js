import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1/'

export const getProductsThunk = createAsyncThunk('products/getProductsThunk', async(_, thunkAPI)=> {
    try{
        const res = await axios.get(`products`)
        return res.data
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})