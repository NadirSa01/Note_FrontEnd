import { FcGoogle } from "react-icons/fc";
import SingUpStyle from "../../componentsStyle/SingUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUp } from "../../../../Slices/Thunks/SignUpThunk";
export default function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate=useNavigate()
  const dispatche = useDispatch();
  const handelSingUp = (e) => {
    e.preventDefault();
    let data = {
      Name:name,
      email: email,
      password: password,
    };
    dispatche(SignUp(data));
    navigate("/Notes");
  }
  return (
    <>
        <div className={SingUpStyle.Parent}>
          <div className={SingUpStyle.container}>
            <h2 className={SingUpStyle.Title}>Login to your Account </h2>
            <p className={SingUpStyle.Motivation}>
              <span>Get started</span> with our app just{" "}
              <span>create an account</span> and enjoy the experience
            </p>
            <form action="" onSubmit={handelSingUp} className={SingUpStyle.Form}>
              <input
                type="text"
                id="Name"
                className={SingUpStyle.inp}
                placeholder="Name"
                onChange={(e)=>setName(e.target.value)}
              />
              <input
                type="text"
                id="email"
                className={SingUpStyle.inp}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className={SingUpStyle.inp}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="submit"
                value="Sing Up"
                className={SingUpStyle.SingIn}
              />
            </form>
            <div className={SingUpStyle.Or}>
              <p className={SingUpStyle.ligne}></p>
              <p>Or</p>
              <p className={SingUpStyle.ligne}></p>
            </div>
            <div className={SingUpStyle.GoogleContainer}>
              <button type="submit" className={SingUpStyle.SingGoogle}>
                Sing In with <FcGoogle />
              </button>
            </div>
            <div className={SingUpStyle.SingUp}>
              <p className={SingUpStyle.ligne2}></p>
              <Link className={SingUpStyle.SingUpBtn} to={"/Login"}>
              Sing In
              </Link>
            </div>
            <div className={SingUpStyle.Conditions}>
              <p>Terms of use & Conditions</p>
            </div>
          </div>
        </div>
    </>
  );
}
