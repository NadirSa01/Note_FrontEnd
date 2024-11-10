import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { GetNotes } from "../../../../Slices/Thunks/NotesThunk";
import NoteStyle from "../../componentsStyle/Note.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserNotes() {
  const message = useSelector((state) => state.Notes.message);
  const error = useSelector((state) => state.Notes.error);
  const user = useSelector((state) => state.Auth.User);
  const Notes = useSelector((state) => state.Notes.notes);
  const dispatch = useDispatch();

  // Set items per page to 9
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (user) {
      dispatch(GetNotes(user._id));
    }
    if (message) {
      toast.success(message.message);
    }
    if (error) {
      toast.error(error);
    }
  }, [user, message, error]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNotes = Notes?.slice(startIndex, endIndex) || [];

  return (
    <div className={`${NoteStyle.BigParent} container mb-3`}>
      <h1 className={NoteStyle.Title}>
        <span>C</span>heck your <span>notes</span>
      </h1>
      <div className="row">
        {currentNotes.length > 0 ? (
          currentNotes.map((element, i) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
              <div className="card mb-3" style={{ width: "100%" }}>
                <div className={`${NoteStyle.Car} card-body`}>
                  <h5 className="card-title">{element.Title}</h5>
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: element.Note }}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="card text-center" style={{margin:"10px"}}>
            <div className="card-body">
              <h5 className="card-title">No Notes Available</h5>
              <p className="card-text">
                You haven t added any notes yet. Start creating one today!
              </p>
            </div>
          </div>
        )}
      </div>
      <ReactPaginate
        pageCount={Math.ceil(Notes?.length / itemsPerPage)}
        onPageChange={handlePageClick}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousLabel="Previous"
        nextLabel="Next"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
      />
      <ToastContainer style={{ marginTop: "50px" }} />
    </div>
  );
}
