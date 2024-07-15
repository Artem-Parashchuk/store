import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductFailure, getProductStart, getProductSuccess } from "./productSlice";
import axios from "axios";

import { BASE_URL } from '../constants'
axios.defaults.baseURL = BASE_URL

export const fetchProductThunk = createAsyncThunk('product/fetchProductThunk', async (id, { dispatch }) => {
    dispatch(getProductStart())
    try {
        const res = await axios.get(`products/${id}`)
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailure(error.message))
    }
})