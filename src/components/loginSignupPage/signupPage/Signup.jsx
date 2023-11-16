import React, { useState } from "react";
import "./Signup.css";

const Signup = (props) => {
  return (
    <div>
      {/* Accessing method as props for sending data to parent comonent (Base)*/}
      <h2 className="loginHeadSignup" onClick={props.Change} >LOGIN</h2>
      <h2 className="signupHeadSignup">SIGNUP</h2>
      <div className="healineSignup"></div>
    </div>
  );
};

export default Signup;
