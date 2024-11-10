import { createSlice } from "@reduxjs/toolkit";
import axios from "../axiosConfig";
import { Auth } from "./Thunks/AuthThunk";
import { VerifyToken } from "./Thunks/VerfiyTokenThunk";
import { SignUp } from "./Thunks/SignUpThunk";
const initialState = {
  User: null,
  isAuth: false,
  status: "idle",
  error: null,
  isLoading:null
};
const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    Logout:(state)=>{
      state.User=null;
      state.status="idle"
      state.isAuth=false;
      state.isLoading=null;
      localStorage.removeItem("token")
    }
  },
  extraReducers: (builder) => {
    builder
      /////////////////////////Verfiy Token ///////////////////////////
      .addCase(VerifyToken.pending, (state) => {
        state.status = "loading";
        state.isLoading=true;
        state.error = null;
      })
      .addCase(VerifyToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.User = action.payload.user;
        state.isAuth = true;
        state.isLoading=false;

      })
      .addCase(VerifyToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.User = null;
        state.isLoading=false;
        state.User=null
      })
      /////////////////////////Verfiy Token ////////////////////////////

      /////////////////////////Sing in Function/////////////////////////
      .addCase(Auth.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.isLoading=true;

      })
      .addCase(Auth.fulfilled, (state, action) => {
        if (action.payload.User && action.payload.Token) {
          state.status = "succeeded";
          state.User = action.payload.User;
          localStorage.setItem("token", action.payload.Token);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${action.payload.token}`;
          state.error = null;
          state.isAuth = true;
          state.isLoading=false;
        }
      })
      .addCase(Auth.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;        
        state.User = null;
        state.isLoading=false;
        state.User=null
      })

    ////////////////////////////////////Sing in Function////////////////////////////////////


    ////////////////////////////////////Sing Up Function////////////////////////////////////
      .addCase(SignUp.pending,(state)=>{
        state.status = "loading";
        state.error = null;   
        state.isLoading=true;
  
      })
      .addCase(SignUp.fulfilled,(state,action)=>{
        if (action.payload.User && action.payload.Token) {
          state.status = "succeeded";
          state.User = action.payload.User;
          localStorage.setItem("token", action.payload.Token);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${action.payload.token}`;
          state.error = null;
          state.isAuth = true;
          state.isLoading=false;

        }
      })
      .addCase(SignUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.User = null;
        state.isLoading=false;
        state.User=null

      })
    ////////////////////////////////////Sing Up Function////////////////////////////////////
  },
});
export default AuthSlice.reducer;
export const {Logout}=AuthSlice.actions;