import React, { useState } from "react";
import "./Login.css";
import { login } from "../../../service/UserService";
import logo from "../../../asset/logo.png";

const Login = (props) => {
  //Initial State of all data
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  //Error Message when error occur it will show
  //Initial Error Message when there is no error no message will show there
  const [error, SetError] = useState({
    emailError: "",
    emailStatus: false,
    passwordError: "",
    passwordStatus: false,
  });

  //Regex Pattern
  const regex = {
    emailReg: /^[\w-.]+@gmail\.com$/,
    passwordReg:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  };

  //Handling event when data change it will add.
  const handleChange = (e, type) => {
    setFormValues({ ...formValues, [type]: e.target.value });
    console.log(formValues);
  };

  //Check Data Pattern
  const checkData = async () => {
    //Empy Error object
    let newErrors = {};

    //Check Email
    newErrors = !formValues.email
      ? { ...newErrors, emailError: "Email is empty", emailStatus: true }
      : !regex.emailReg.test(formValues.email)
      ? { ...newErrors, emailError: "Email is invalid", emailStatus: true }
      : { ...newErrors, emailError: "", emailStatus: false };

    //Check Password
    newErrors = !formValues.password
      ? {
          ...newErrors,
          passwordError: "Password is empty",
          passwordStatus: true,
        }
      : !regex.passwordReg.test(formValues.password)
      ? {
          ...newErrors,
          passwordError: "Password is invalid",
          passwordStatus: true,
        }
      : { ...newErrors, passwordError: "", passwordStatus: false };

    //Set Error data
    await SetError(newErrors);
    //show error data
    console.log(newErrors);
  };

  //Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    checkData();

    //If Error status false than it call the signup function from service or show alert message
    if (
      regex.emailReg.test(formValues.email) &&
      regex.passwordReg.test(formValues.password)
    ) {
      const response = await login(formValues); //for user login method form service
      console.log(response); //Show the response coming form login  function
      alert("User login successfully"); //altert message after login
      localStorage.setItem("token", response.data.data.token); // Set data in local Storage of browser
    }
  };

  return (
    <div id="loginMainDiv">
      <div className="centerDiv">

{/* Image div */}
        <div className="imagebox">
          <img src={logo} className="img"></img>
          <figcaption className="imgCaption">ONLINE BOOK SHOPPING</figcaption>
        </div>

        {/* Login Div */}
        <div className="loginComponent" >
          <h2 className="loginHeading">LOGIN</h2>
          <div className="headingline"></div>
          {/* Accessing method as props for sending data to parent comonent (Base)*/}
          <h2 className="signupHeading" onClick={props.Change}>
            SIGNUP
          </h2>

          {/* Email field */}
          <label for="inputEmail1" className="emailLabel">
            Email id
          </label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            className="email"
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
          <p id="emailErrorSignup">{error.emailError}</p>

          {/* Password field */}
          <label for="pwd" className="passworLabel">
            Password:
          </label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            className="password"
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
          <p id="pswdErrorSignup">{error.passwordError}</p>

          {/* login button */}
          <button type="button" className="loginButton" onClick={handleSubmit}>
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


      </div>
    </div>
  );
};

export default Login;
