import React from "react";
import logo from "../../assets/logo.webp";
import "./Header.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
export default function Header(props) {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logoHolderHeader">
        <img src={logo}></img>
      </div>
      <div className="btns">
        <Button variant="secondary">Registre-se</Button>
        <Button onClick={()=> navigate("/Login")} variant="primary">Login</Button>
      </div>
    </header>
  );
}
