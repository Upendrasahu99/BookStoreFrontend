import axios from "axios";

export const getAllBookService = () =>{
    let response = axios.get("https://localhost:44398/api/Book/GetAll");
    return response
}