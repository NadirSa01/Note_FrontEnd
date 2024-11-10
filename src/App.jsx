import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Pages/Layouts/Navbar";
import {  Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/components/Interfaces/Login/LoginPage";
import Home from "./Pages/components/Interfaces/Home";
import Footer from "./Pages/Layouts/Footer ";
import SingUp from "./Pages/components/Interfaces/Login/SignUp";
import UserNotes from "./Pages/components/Interfaces/UserPages/UserNotes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { VerifyToken } from "./Slices/Thunks/VerfiyTokenThunk";
import Profile from "./Pages/components/Interfaces/UserPages/Profile";
import AddNotes from "./Pages/components/Interfaces/UserPages/AddNotes";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
// import { KouahAiBotEmbedd } from '@kouahai/embed';
function App() {
  const dispatch = useDispatch();
  // const [isMounted, setIsMounted] = useState(false);
 
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(VerifyToken(token));
    }
  }, []);
  // useEffect(()=>{
  //   if (isMounted) {
  //     KouahAiBotEmbedd('cm2omjh26000111i5tghgsy1k');
  //   }

  // },[isMounted])
  return (
    <>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/Login"  element={localStorage.getItem("token")?<Navigate to={'/Notes'}/>:<Login />} />
            {/* <Route path="/Login"  element={<Login />} /> */}
            <Route path="/SingUp"  element={<SingUp />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/Notes" element={<UserNotes />} />
              <Route path="/AddNote" element={<AddNotes />} />
              <Route path="/Profile" element={<Profile />} />
            </Route>
          </Routes>
          <Footer />
        </div>
    </>
  );
}

export default App;
