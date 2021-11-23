import axios from "../api/axiosClient"

export function login(values) {
    return axios.post("/login", values);
  }