import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://api-react-2.herokuapp.com/api`,
});

export default axiosClient;
