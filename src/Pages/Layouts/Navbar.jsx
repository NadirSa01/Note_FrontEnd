import { Link, useNavigate } from "react-router-dom";
import navStyle from "./LayoutsStyle/navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../Slices/AuthSlice";
export default function Navbar() {
  const user = useSelector((state) => state.Auth.User);
  // const isLoading = useSelector((state) => state.Auth.isLoading);

  const dispatche = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatche(Logout());
    navigate("/");
  };
  if (user) {
    return (
      <div>
        <nav className={navStyle.nav}>
          <p className={navStyle.navTitle}>
            <Link to={"/"}>
              {" "}
              <span className={navStyle.letters}>Ur</span> Notes
            </Link>
          </p>
          <ul className={navStyle.navElement}>
              
                <li>
                  <Link to={"/Notes"}>Notes</Link>{" "}
                </li>
                <li>
                  <Link to={"/AddNote"}>Add Note</Link>{" "}
                </li>
                <li>
                  <div className="dropdown show">
                    <Link
                      style={{ fontWeight: "600", color: "rgb(255, 175, 47)" }}
                      className="btn  dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {user.Name}
                    </Link>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <Link to={"/Profile"} className="dropdown-item" href="#">
                        Profile
                      </Link>
                      <button className="dropdown-item" onClick={handleLogout}>
                        sing Out
                      </button>
                    </div>
                  </div>
                </li>
          </ul>
        </nav>
      </div>
    );
  }
  return (
    <div>
      <nav className={navStyle.nav}>
        <p className={navStyle.navTitle}>
          <Link to={"/"}>
            {" "}
            <span className={navStyle.letters}>Ur</span> Notes
          </Link>
        </p>
        <ul className={navStyle.navElement}>
          <li>
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li>
            <Link to={"/"}>About</Link>{" "}
          </li>
          <li className={navStyle.GetStarted}>
            <Link to={"/Login"}>
              <span>Get started </span>
              <i
                className="bi bi-arrow-right-circle-fill"
                style={{ marginLeft: "5px" }}
              ></i>{" "}
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}
