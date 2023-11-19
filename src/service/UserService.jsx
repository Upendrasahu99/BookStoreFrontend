import axios from "axios";

export const signup = async (obj) => {
  let response = await axios.post(
    "https://localhost:44398/api/User/RegisterUser",
    obj
  );
  return response;
};

export const login = async (obj) => {
  let response = await axios.post(
    "https://localhost:44398/api/User/Login",
    obj
  );
  return response;
};
