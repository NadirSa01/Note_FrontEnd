import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";
export const GetNotes=createAsyncThunk("Notes/GetNotes",async(userId,{rejectWithValue})=>{
    try{
        const res=await axios.get("/note/"+userId)
        return res.data;
    }catch(error){
        if (error.response && error.response.data && error.response.data.message) {
            return rejectWithValue(error.response.data.message); 
          } 
    }
});
export const AddNote=createAsyncThunk("Notes/AddNote",async(data,{rejectWithValue})=>{
    try{        
        const res=await axios.post("/note",data);
        return res.data;
    }catch(error){
        if (error.response && error.response.data && error.response.data.message) {
            return rejectWithValue(error.response.data.message); 
          } 
    }
})