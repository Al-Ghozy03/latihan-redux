import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://ihsan-app.herokuapp.com`,
});

export default axiosClient;
