import axios from "axios";

const api = axios.create({
  baseURL: "https://air-cnc-api.herokuapp.com"
});

export default api;
