import { Link, useNavigate } from "react-router-dom";
import LoginStyle from "../../componentsStyle/login.module.css";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "../../../../Slices/Thunks/AuthThunk";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const error = useSelector((state) => state.Auth.error);
  const status = useSelector((state) => state.Auth.status);
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const dispatche = useDispatch();
  useEffect(()=>{
    if(isAuth==true){
      navigate("/Notes");
    }
  },[isAuth])
  // useEffect(()=>{
  //   if(status=="failed"){
  //     toast.error(error)
  //   } 
  //   },[error])

  const handelLogin = (e) => {
    e.preventDefault();


    if(email!="" && password!=""){
      let Obj = {
        email: email,
        password: password,
      };
      dispatche(Auth(Obj));
    }
    if(!email && !password){
      toast.error("All inputs are required")
    }     
  };
  return (
    <>
      {error && <ToastContainer style={{ marginTop: "50px" }} />}
      <div className={LoginStyle.Parent}>
        <div className={LoginStyle.container}>
          <h2 className={LoginStyle.Title}>Login to your Account </h2>
          <p className={LoginStyle.Motivation}>
            <span>Get started</span> with our app just{" "}
            <span>create an account</span> and enjoy the experience
          </p>

          <form className={LoginStyle.Form} onSubmit={handelLogin}>
            <input
              type="text"
              id="email"
              className={LoginStyle.inp}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ToastContainer style={{ marginTop: "50px" }} />
            <input
              type="password"
              className={LoginStyle.inp}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="submit"
              value="Sing In"
              className={LoginStyle.SingIn}
            />
          </form>
          <div className={LoginStyle.Or}>
            <p className={LoginStyle.ligne}></p>
            <p>Or</p>
            <p className={LoginStyle.ligne}></p>
          </div>
          <div className={LoginStyle.GoogleContainer}>
            <button type="submit" className={LoginStyle.SingGoogle}>
              Sing In with <FcGoogle />
            </button>
          </div>
          <div className={LoginStyle.SingUp}>
            <p className={LoginStyle.ligne2}></p>
            <Link className={LoginStyle.SingUpBtn} to={"/SingUp"}>
              Sing Up
            </Link>
          </div>
          <div className={LoginStyle.Conditions}>
            <p>Terms of use & Conditions</p>
          </div>
        </div>
      </div>
    </>
  );
}
