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
    mobNumError: "",
    mobNumStatus: false,
  });

  //Regex Pattern
  const regex = {
    userN_Reg: /^[A-Z][a-z]+ [A-Z][a-z]+$/,
    emailReg: /^[\w-.]+@gmail\.com$/,
    passwordReg:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    mobileNumReg: /[0-9]{10}/,
  };

  //Handling event when data change it will add.
  const handleChange = (e, type) => {
    setFormValues({ ...formValues, [type]: e.target.value });
    //console.log(formValues);
  };

  //Check Data Pattern 
  const checkData = async() => {
    //Empy Error object 
    let newErrors = {};

    //Check first Name
    newErrors = !formValues.fullName
      ? { ...newErrors, userN_Error: "Username is empty",  userStatus: true }
      : !regex.userN_Reg.test(formValues.fullName)
      ? { ...newErrors, userN_Error: "Username is invalid",  userStatus: true }
      : { ...newErrors, userN_Error: "", userStatus: false };

      //Check Email
    newErrors = !formValues.email
      ? { ...newErrors, emailError: "Email is empty", emailStatus: true }
      : !regex.emailReg.test(formValues.email)
      ? { ...newErrors, emailError: "Email is invalid",  emailStatus: true }
      : { ...newErrors, emailError: "", emailStatus: false };

      //Check Password
    newErrors = !formValues.password
      ? {
          ...newErrors,
          passwordError: "Password is empty",
          passwordStatus: true
        }
      : !regex.passwordReg.test(formValues.password)
      ? {
          ...newErrors,
          passwordError: "Password is invalid",
          passwordStatus: true
        }
      : { ...newErrors, passwordError: "", passwordStatus: false };

      //Check Mobile Number
    newErrors = !formValues.mobileNum
      ? {
          ...newErrors,
          mobNumError: "Mobile number is empty",
          mobNumStatus: true
        }
      : !regex.mobileNumReg.test(formValues.mobileNum)
      ? {
          ...newErrors,
          mobNumError: "Mobile number is invalid",
          mobNumStatus: true
        }
      : { ...newErrors, mobNumError: "", mobNumStatus: false };

      //Set Error data 
    await SetError(newErrors);
    //show error data
    console.log(newErrors)
  }


  //Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    await checkData();

    //If Error status false than it call the signup function from service or show alert message 
    if (
      error.userStatus === false &&
      error.emailStatus === false &&
      error.passwordStatus === false &&
      error.mobNumStatus === false
    ) {
      const response = await signup(formValues); // for user registration
      console.log(response); //Show the response coming form signup function
      alert("User registerd successfully");
    }
  };

  return (
    <div id="signupComponent">
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
        className="inputbox"
        value={formValues.fullName}
        onChange={(e) => handleChange(e, "fullName")}
        style={{
          border:
            error.userStatus === true
              ? "1px solid hsl(353, 100%, 50%)"
              : "1px solid #E2E2E2",
        }}
      ></input>
      <p id="userN_error">{error.userN_Error}</p>

      <label for="emailSignup" id="emailSignuplabel">
        Email id
      </label>
      <input
        type="email"
        className="inputbox"
        id="emailSignup"
        value={formValues.email}
        onChange={(e) => {
          handleChange(e, "email");
        }}
        style={{
          border:
            error.emailStatus === true
              ? "1px solid hsl(353, 100%, 50%)"
              : "1px solid #E2E2E2",
        }}
      ></input>
      <p id="emailError">{error.emailError}</p>

      <label for="pwd" id="pwdLabel">
        Password:
      </label>
      <input
        type="password"
        id="pwdSignup"
        className="inputbox"
        value={formValues.password}
        onChange={(e) => {
          handleChange(e, "password");
        }}
        style={{
          border:
            error.passwordStatus === true
              ? "1px solid hsl(353, 100%, 50%)"
              : "1px solid #E2E2E2",
        }}
      ></input>

      <p id="passwordError">{error.passwordError}</p>

      <label for="mobSignup" id="mobLabelSignup">
        Mobile Number
      </label>
      <input
        type="tel"
        id="mobSignup"
        name="mobile"
        className="inputbox"
        value={formValues.mobileNum}
        onChange={(e) => {
          handleChange(e, "mobileNum");
        }}
        style={{
          border:
            error.mobNumStatus === true
              ? "1px solid hsl(353, 100%, 50%)"
              : "1px solid #E2E2E2",
        }}
      />
      <p id="mobileError">{error.mobNumError}</p>

      <button type="button" id="signupButton" onClick={handleSubmit}>
        <div id="signupText">Signup</div>
      </button>
    </div>
  );
};

export default Signup;
