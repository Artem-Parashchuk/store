import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants";

export const createUserThunk = createAsyncThunk(
    'user/createUserThunk',
    async (payload, thunkAPI) => {
        try{
            const res = await axios.post(`${BASE_URL}users`, payload)
            return res.data
        }catch(err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)