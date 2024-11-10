import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";
export const Auth=createAsyncThunk("Auth/Auth",async(UserData,{rejectWithValue})=>{
    try {
        const res=await axios.post("/SignIn",UserData);        
        return res.data
    } catch (error) {        
        if (error.response && error.response.data && error.response.data.message) {
            return rejectWithValue(error.response.data.message); 
          } 
    }
})
