import React from "react";
import "./Base.css";
import { TextField } from "@mui/material";
import Login from "../loginPage/Login";
import logo from '../../asset/logo.png'

const Base = () => {
  return (
    <div className="signupMainDiv">
      <div className="centerDiv">
        <div className="imagebox">
            <img src={logo} className="img"></img>
            <figcaption className="imgCaption">ONLINE BOOK SHOPPING</figcaption>
        </div>
        <div className="loginComponent">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Base;
