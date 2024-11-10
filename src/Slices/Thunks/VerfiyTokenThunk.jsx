import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";
export const VerifyToken = createAsyncThunk(
  "Auth/VerifyToken",
  async (token, { rejectWithValue }) => {
    try {
        
      const res = await axios.post("/VerfiyT", {token});
      return res.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);
