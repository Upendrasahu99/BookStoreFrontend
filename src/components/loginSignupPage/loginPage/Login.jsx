import React from "react";
import "./Login.css";
import Email from "../emailTextBox/Email";
import Password from "../passwordTextBox/Password";

const Login = (props) => {
  return (
    <div>
      <h2 className="loginHeading">LOGIN</h2>
      <div className="headingline"></div>
      {/* Accessing method as props for sending data to parent comonent (Base)*/}
      <h2 className="signupHeading" onClick={props.Change}>SIGNUP</h2>
      <div id="emailContainer">
        <Email/>
      </div>
      <div id="passowrdContainer">
        <Password/>
      </div>
      <button type="button" className="loginButton">
        <div className="loginText">Login</div>
      </button>
        <span>
          <div className="or">OR</div>
        </span>
      <button type="button" className="faceBookButton">
        <div className="faceBookText">FaceBook</div>
      </button>
      <button type="button" className="googleButton">
        <div className="googleText">Google</div>
      </button>
    </div>
  );
};

export default Login;
