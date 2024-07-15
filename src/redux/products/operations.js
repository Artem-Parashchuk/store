import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {BASE_URL} from '../constants'

axios.defaults.baseURL = BASE_URL

export const getProductsThunk = createAsyncThunk('products/getProductsThunk', async(_, thunkAPI)=> {
    try{
        const res = await axios.get(`products`)
        return res.data
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})