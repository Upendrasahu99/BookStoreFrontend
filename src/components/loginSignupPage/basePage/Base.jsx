import React, { useState } from "react";
import "./Base.css";
import { TextField } from "@mui/material";
import Login from "../loginPage/Login";
import logo from '../../../asset/logo.png'
import Signup from '../signupPage/Signup'

const Base = () => {
  // state for true and false change betwen login and signup
  const[showPage, setShowPage] = useState(true); 

  //method for chnage the showPage true and flase. We pass this method in props
  const ChangePage = () =>{
    setShowPage(!showPage);
  }

  return (
    <div id="signupMainDiv">
      <div className="centerDiv">
        <div className="imagebox">
            <img src={logo} className="img"></img>
            <figcaption className="imgCaption">ONLINE BOOK SHOPPING</figcaption>
        </div>
        <div className="loginComponent">
          {/* Calling child component where and passing method for changin showPage data using method as props */}
          {/* Here if showpage is true it will show Login page or if flase than Signup Page */}
          {
            showPage ? <Login Change={ChangePage}/> :<Signup Change={ChangePage}/>
          }
        </div>
      </div>
    </div>
  );
};

export default Base;
