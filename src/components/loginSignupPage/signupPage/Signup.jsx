import React, { useState, useEffect } from "react";
import "./Signup.css";
import { signup } from "../../../service/UserService";

const Signup = (props) => {
  //Initial State of all data
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNum: "",
  });

  //Error Message when error occur it will show
  //Initial Error Message when there is no error no message will show there
  const [error, SetError] = useState({
    userN_Error: "",
    userStatus: false,
    emailError: "",
    emailStatus: false,
    passwordError: "",
    passwordStatus: false,
    mobNumErro: "",
    mobNumStatus: false,
  });

  //Regex Pattern
  const regex = {
    userN_Reg: /[A-Z]{1}[a-z]{2,}/,
    emailReg: /^[\w-.]+@gmail\.com$/,
    passwordReg:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    mobileNumReg: /[0-9]{10}/,
  };

  //Handling event when data change it will add.
  const handleU_NameChange = (e) => {
    setFormValues({ ...formValues, fullName: e.target.value });
    console.log(formValues);
  };
  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
    console.log(formValues);
  };
  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
    console.log(formValues);
  };
  const handleMobileN_Change = (e) => {
    setFormValues({ ...formValues, mobileNum: e.target.value });
    console.log(formValues);
  };

  //Check fir empty box
  const handleSubmit = async(e) => {
     e.preventDefault();
    let newErrors = {};

    //Check for empty box
    if (!formValues.fullName) {
      newErrors = {...newErrors, userN_Error: "Username is empty", userStatus: true };
    } 
    if (!formValues.email) {
      newErrors = {
        ...newErrors,
        emailError: "Email is empty",
        emailStatus: true,
      };
    }else {
      newErrors = {
        ...newErrors,
        emailError: "Email is invalid",
        emailStatus: true,
      };
    }
    if (!formValues.password) {
      newErrors = {
        ...newErrors,
        passwordError: "Password is empty",
        passwordStatus: true,
      };
    }
    if (!formValues.mobileNum) {
      newErrors = {
        ...newErrors,
        mobNumErro: "Mobile Number is empty",
        mobNumStatus: true,
      };
    }
    console.log(newErrors)
    SetError(newErrors);

    // for user registration
    const response = await signup(formValues);
    console.log(response);
    alert("User registerd successfully")
  };

  // Log the updated error state when it changes
  // we cannot use Console.log(error) in the method beacuse javascript is syncronus opertaion for update data it will take time
  useEffect(() => {
    console.log(error);
  }, [error]);

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
        value={formValues.fullName}
        onChange={handleU_NameChange}
      ></input>

      <label for="emailSignup" id="emailSignuplabel">
        Email id
      </label>
      <input
        type="email"
        className="form-control"
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

      <button type="button" id="signupButton" onClick={handleSubmit}>
        <div id="signupText">Signup</div>
      </button>
    </div>
  );
};

export default Signup;
