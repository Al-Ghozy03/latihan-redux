import axios from "./axiosClient";

export function register(values) {
  return axios.post("/register", values);
}
