import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";
export const SignUp =createAsyncThunk("Auth/SingUp",async(UserData,{rejectedWithValue})=>{
    try{
        const res=await axios.post("/SignUp",UserData)
        return res.data
    }catch(error){
        if(error.response && error.response.data && error.response.data.message){
            return rejectedWithValue(error.response.data.message)
        }
    }
})