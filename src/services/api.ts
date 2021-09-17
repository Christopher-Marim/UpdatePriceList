import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_API_BASEURL,
  headers:{'Authorization': process.env.REACT_APP_AXIOS_API_AUTHORIZATION}
});

export default api;