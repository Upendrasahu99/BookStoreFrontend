import axios from "axios";

export const signup =  (obj) => {
  let response =  axios.post(
    "https://localhost:44398/api/User/RegisterUser",
    obj
  );
  return response;
};

export const login = (obj) => {
  let response =  axios.post(
    "https://localhost:44398/api/User/Login",
    obj
  );
  return response;
};
