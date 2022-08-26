import axios from "axios";
import {toast} from "react-toastify"
<<<<<<< HEAD
import api from "./config";
=======
import { yaarnBoxMaxToken } from "../context/UserContext";
>>>>>>> fea86c42fce29bad582f45405670e7ce6376c044

function log(err) {
  console.log(err);
}

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  // Unexpected errors (network down, server down, db down, bug)
  // - Log them
  // - Display generic and friendly error message to user

  if (!expectedError) {
    log(error);
  }
  return Promise.reject(error);
});

// baseURL:"https://qu4s5quvaz.us-east-1.awsapprunner.com/api"
const instance = axios.create({
<<<<<<< HEAD
  baseURL:api
=======
    baseURL:"https://qu4s5quvaz.us-east-1.awsapprunner.com/api"
    // baseURL: "http://localhost:6777/api",
>>>>>>> fea86c42fce29bad582f45405670e7ce6376c044
})

export default instance;

