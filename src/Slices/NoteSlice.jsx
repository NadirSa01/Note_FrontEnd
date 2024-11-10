import { createSlice } from "@reduxjs/toolkit";
import { AddNote, GetNotes } from "./Thunks/NotesThunk";
const initialState = {
  notes: null,
  status: "idle",
  error: null,
  message:null
};
const NotesSlice=createSlice({
    name:"Notes",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            /////////////////////////////////// Get notes ///////////////////////////////////
        .addCase(GetNotes.pending,(state)=>{
            state.status="loading"
        })
        .addCase(GetNotes.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.notes=action.payload.Note;
            state.error=null;
            state.message=null;

        })
        .addCase(GetNotes.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.payload
        })
        ///////////////////////// Add note //////////////////////////////////////
        .addCase(AddNote.pending,(state)=>{
            state.status="loading"
        })
        .addCase(AddNote.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.error=null;
            state.message=action.payload
            
        })
        .addCase(AddNote.rejected,(state,action)=>{
            state.error=action.payload
        })
    }
})
export default NotesSlice.reducer;
