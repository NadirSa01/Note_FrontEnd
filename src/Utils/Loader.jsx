import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function Loader() {
    const user=useSelector((state)=>state.Auth.User)
    const isLoading=useSelector((state)=>state.Auth.isLoading)
    const navigate=useNavigate();
    // useEffect(()=>{
    //     if(!user&&isLoading!=false){
    //         navigate("/")
    //     }
    // },[])
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        zIndex:"909999"
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
