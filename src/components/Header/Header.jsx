import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.webp";
import "./Header.css";
import Button from "../Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
export default function Header(props) {
  const navigate = useNavigate();
  const username = props.user
  const [open,setopen] = useState(false);
  const btnLoginAppear = ()=>{
    setopen(!open);
    console.log(open)
    setTimeout(() => {
      setopen(false)
    }, 4000);
  }
  const handleLogout = ()=>{
    
    navigate("/")
  }
  return (
    <header className="header">
      <div className="logoHolderHeader">
        <img src={logo}></img>
      </div>
      <div className="btns">
      {
        (!username) ?
          <>
          <Button variant="secondary">Registre-se</Button>
          <Button onClick={()=> navigate("/Login",{replace: true})} variant="primary">Login</Button>
          </>
        :
          <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
          {(open) ?
          <Button className="btnLogout" onClick={handleLogout} variant="primary">Logout</Button>
          : <></>}
          <p onClick={btnLoginAppear} className="circle-Person">
            {(username[0])}
          </p>
          </div>

      }
      </div>
    </header>
  );
}
