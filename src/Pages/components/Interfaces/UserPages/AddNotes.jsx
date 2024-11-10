import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import AddNoteStyle from "../../componentsStyle/AddNote.module.css";
import { AddNote } from "../../../../Slices/Thunks/NotesThunk";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export default function AddNotes() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.Auth.User);
  const navigate = useNavigate();
  
  const handleAdd = (e) => {
    e.preventDefault();
    if (title && value) {
      let data = {
        IdUser: _id,
        Title: title,
        Note: value,
      };
      dispatch(AddNote(data));
      navigate("/Notes");
    }
    toast.error("All inputs are required");
    console.log(value);

  };

  return (
    <div className={AddNoteStyle.parent}>
      <ToastContainer style={{ marginTop: "50px" }} />
      <div className={AddNoteStyle.paragraphCont}>
        <p className={AddNoteStyle.paragraph}>
          <span>Welcome</span> to the note creation section! Here, you can{" "}
          <span>write down</span> your thoughts, ideas, and tasks in a{" "}
          <span>personalized</span> and <span>styled format</span>. Use the text
          editor below to <span>format</span> your notes just like you would in
          a word processor. You can <span>highlight important points</span>,
          create <span>lists</span>, add <span>headings</span>. Once you re
          done, your note will be <span>saved</span> and easily accessible for
          future reference. Start by entering your note in the editor below!
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <form
            className={`${AddNoteStyle.Form} col-12 col-md-8`}
            onSubmit={handleAdd}
          >
            <div className={`${AddNoteStyle.aaa} col-12 col-md-8`}>
              <label htmlFor="" className={AddNoteStyle.TitleLab}>
                Title :{" "}
              </label>
              <input
                type="text"
                placeholder="Add title for your note"
                className={`${AddNoteStyle.TitleNote} `}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <ReactQuill
              theme="snow"
              onChange={setValue}
              value={value}
              style={{
                height: "45vh",
                overflowY: "scroll",
                backgroundColor: "white",
                width: "100%", 
                maxWidth: "1000px", 
              }}
              className={`${AddNoteStyle.Quill} col-12`}
            />
            <button
              type="submit"
              className={`${AddNoteStyle.AddBtn} btn btn-primary mt-3`}
            >
              Save{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// import {useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { useDispatch, useSelector } from "react-redux";
// import AddNoteStyle from "../../componentsStyle/AddNote.module.css";
// import { AddNote } from "../../../../Slices/Thunks/NotesThunk";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// export default function AddNotes() {
//   const [value, setValue] = useState("");
//   const [title, setTitle] = useState("");
//   const dispatch = useDispatch();
//   const { _id } = useSelector((state) => state.Auth.User);
//   const navigate=useNavigate()

//   const handleAdd = (e) => {
//     e.preventDefault();
//     if(title && value){
//       let data = {
//         IdUser: _id,
//         Title: title,
//         Note: value,
//       };
//       dispatch(AddNote(data));
//       navigate("/Notes")
//     }
//     toast.error("All inputs is required")

//   };

//   return (
//       <div className={AddNoteStyle.parent}>
//               <ToastContainer style={{ marginTop: "50px" }} />
//         <div className={AddNoteStyle.paragraphCont}>
//           <p className={AddNoteStyle.paragraph}>
//             <span>Welcome</span> to the note creation section! Here, you can{" "}
//             <span>write down</span> your thoughts, ideas, and tasks in a{" "}
//             <span>personalized</span> and <span>styled format</span>. Use the
//             text editor below to <span>format</span> your notes just like you
//             would in a word processor. You can{" "}
//             <span>highlight important points</span>, create <span>lists</span>,
//             add <span>headings</span>. Once you re done, your note will be{" "}
//             <span>saved</span> and easily accessible for future reference. Start
//             by entering your note in the editor below!
//           </p>
//         </div>
//         <div className={AddNoteStyle.NoteEditor}>
//           <form className={AddNoteStyle.Form} onSubmit={handleAdd}>
//             <label htmlFor="" className={AddNoteStyle.TitleLab}>
//               Title :{" "}
//             </label>
//             <input
//               type="text"
//               placeholder="Add title for your note"
//               className={AddNoteStyle.TitleNote}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             {
//               <ReactQuill
//                 theme="snow"
//                 onChange={setValue}
//                 style={{
//                   height: "45vh",
//                   overflowY: "scroll",
//                   width: "127vh",
//                   marginTop: "7px",
//                   boxShadow: "0px 9px 8px rgba(0, 0, 0, 0.1)",
//                   backgroundColor: "white",
//                 }}
//                 />
//             }
//             <button type="submit" className={AddNoteStyle.AddBtn}>
//               Save{" "}
//             </button>
//           </form>
//         </div>
//       </div>

//   );
// }
