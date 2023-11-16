import React from "react";
import "./Password.css";

const Password = () => {
  return (
    <div>
      <label for="pwd" className="passworLabel">
        Password:
      </label>
      <input type="password" id="pwd" name="pwd" className="password"></input>
    </div>
  );
};

export default Password;
