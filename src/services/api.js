import axios from "axios";

const api = axios.create({
  baseURL: "https://http://localhost:8000/",
});

export default api;
