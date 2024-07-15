import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {BASE_URL} from '../constants'

axios.defaults.baseURL = BASE_URL

export const getCategoriesThunk = createAsyncThunk('categories/getCategoriesThunk', async (_, thunkAPI) => {
    try {
        const res = await axios.get('categories')
        return res.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})