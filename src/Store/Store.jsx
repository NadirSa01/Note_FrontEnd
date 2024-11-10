import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice";
import NotesSlice from "../Slices/NoteSlice"
const Store=configureStore({
    reducer:{
        Auth:AuthSlice,
        Notes:NotesSlice
    }
})
export default Store;