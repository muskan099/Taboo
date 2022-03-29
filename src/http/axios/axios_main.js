import axios from "axios";

const axiosMain = axios.create({
  baseURL: "http://3.21.185.177:3000/",
  // process.env.NODE_ENV === 'development'
  //   ? process.env.REACT_APP_END_POINT_URL_DEV
  //   : process.env.REACT_APP_END_POINT_URL_PROD,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosMain;