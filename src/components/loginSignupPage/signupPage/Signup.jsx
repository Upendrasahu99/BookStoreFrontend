import React, { useState } from "react";
import "./Signup.css";
import Email from "../emailTextBox/Email";
import Password from "../passwordTextBox/Password";

const Signup = (props) => {
  return (
    <div>
      {/* Accessing method as props for sending data to parent comonent (Base)*/}
      <h2 className="loginHeadSignup" onClick={props.Change}>
        LOGIN
      </h2>
      <h2 className="signupHeadSignup">SIGNUP</h2>
      <div className="healineSignup"></div>

      <label for="inputName" id="fullNameLabel">
        Full Name
      </label>
      <input type="text" id="inputName" className="inputName"></input>

      <label for="emailSignup" id="emailSignuplabel">
        Email id
      </label>
      <input type="email" class="form-control" id="emailSignup"></input>

      <label for="pwd" id="pwdLabel">
        Password:
      </label>
      <input type="password" id="pwdSignup"></input>

      <label for="mobSignup" id="mobLabelSignup">Mobile Number</label>
      <input type="tel" id="mobSignup" name="mobile"/>

      <button type="button" id="signupButton">
        <div id="signupText">Signup</div>
      </button>
    </div>
  );
};

export default Signup;
