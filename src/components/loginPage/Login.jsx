import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <h2 className="loginHeading">LOGIN</h2>
      <div className="headingline"></div>
      <h2 className="signupHeading">SIGNUP</h2>
      <label for="inputEmail1" className="emailLabel">
        Email id
      </label>
      <input
        type="email"
        class="form-control"
        id="inputEmail1"
        className="email"
      ></input>
      <label for="pwd" className="passworLabel">
        Password:
      </label>
      <input type="password" id="pwd" name="pwd" className="password"></input>
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
