import React, { useState } from "react";
import "./Signup.css";

const Signup = (props) => {
  //Initial State of all data
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    mobileNum: "",
  });

  //Event binding when data change it will add.
  const handleU_NameChange = (e) => {
    setFormValues({ ...formValues,  username: e.target.value});
    console.log(formValues);
  };
  const handleEmailChange = (e) => {
    setFormValues({...formValues, email: e.target.value});
    console.log(formValues);
  }
  const handlePasswordChange = (e) => {
    setFormValues({...formValues, password: e.target.value});
    console.log(formValues);
  }
  const handleMobileN_Change = (e) => {
    setFormValues({...formValues, mobileNum: e.target.value});
    console.log(formValues);
  }
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
      <input
        type="text"
        id="inputName"
        className="inputName"
        value={formValues.username}
        onChange={handleU_NameChange}
      ></input>

      <label for="emailSignup" id="emailSignuplabel">
        Email id
      </label>
      <input
        type="email"
        class="form-control"
        id="emailSignup"
        value={formValues.email}
        onChange={handleEmailChange}
      ></input>

      <label for="pwd" id="pwdLabel">
        Password:
      </label>
      <input
        type="password"
        id="pwdSignup"
        value={formValues.password}
        onChange={handlePasswordChange}
      ></input>

      <label for="mobSignup" id="mobLabelSignup">
        Mobile Number
      </label>
      <input
        type="tel"
        id="mobSignup"
        name="mobile"
        value={formValues.mobileNum}
        onChange={handleMobileN_Change}
      />

      <button type="button" id="signupButton">
        <div id="signupText">Signup</div>
      </button>
    </div>
  );
};

export default Signup;
