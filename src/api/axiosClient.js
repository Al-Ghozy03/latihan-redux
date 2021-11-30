import axios from "axios";

let headers = {
  Accept: "appliaction/json",
};
const axiosClient = axios.create({
  baseURL: `https://ihsan-app.herokuapp.com`,
  headers,
});

export const syncToken = () => {
  axiosClient.defaults.headers[
    "X-Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
};
export default axiosClient;
