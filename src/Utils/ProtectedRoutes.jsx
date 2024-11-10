import { useSelector } from "react-redux";
import { Outlet} from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import Loader from "./Loader";
import Login from "../Pages/components/Interfaces/Login/LoginPage";
const ProtectedRoutes = () => {
  const user = useSelector((state) => state.Auth.User);
  const status = useSelector((state) => state.Auth.status);
  const isLoading = useSelector((state) => state.Auth.isLoading);

  if (status == "loading") {
    console.log("ld");
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <PropagateLoader
          color="#ff8d34"
          cssOverride={{}}  
          loading
          size={40}
          speedMultiplier={1}
        />
      </div>
    );
  }
  return user ? <Outlet /> : <Login/>;
};
export default ProtectedRoutes;
