import axios from "axios";

// let initToken = "";

const axiosConfig = {
  baseURL: process.env.REACT_APP_PROXY_URL,
  timeout: 60 * 3 * 1000,
  headers: {},
};

console.log("=====", process.env);
const http = axios.create(axiosConfig);

// http.interceptors.request.use((config) => {
//   config.headers.token = initToken;

//   console.log("토큰 : ", initToken);

//   return config;
// });

// export const setToken = (token) => {
//   initToken = token;
// };

// http.postFile = (url, params) => {
//   const frm = new FormData();

//   for (const key in params) {
//     frm.append(key, typeof params[key] === "object" && !params[key].type ? JSON.stringify(params[key]) : params[key]);
//   }

//   return http.post(url, frm, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };

export default http;
