import React from "react";
import './Email.css'

const Email = () => {
  return (
    <div className="emailComponent">
      <label for="inputEmail1" className="emailLabel">
        Email id
      </label>
      <input
        type="email"
        class="form-control"
        id="inputEmail"
        className="email"
      ></input>
    </div>
  );
};

export default Email;
