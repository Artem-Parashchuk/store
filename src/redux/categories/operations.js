import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1/'

export const getCategoriesThunk = createAsyncThunk('categories/getCategoriesThunk', async (_, thunkAPI) => {
    try {
        const res = await axios.get('categories')
        return res.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})